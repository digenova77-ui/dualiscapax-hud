const assert = require("node:assert/strict");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { test, before, after } = require("node:test");
const { chromium } = require("playwright");

const ROOT = path.resolve(process.cwd());
let server;
let browser;
let origin;

before(async () => {
  server = http.createServer((req, res) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
    catch (_) { res.writeHead(400).end("bad path"); return; }
    const filePath = path.resolve(ROOT, "." + pathname);
    if (!filePath.startsWith(ROOT + path.sep)) { res.writeHead(403).end("forbidden"); return; }
    fs.readFile(filePath, (error, bytes) => {
      if (error) { res.writeHead(404).end("not found"); return; }
      const ext = path.extname(filePath).toLowerCase();
      const types = {
        ".html": "text/html; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".svg": "image/svg+xml",
        ".json": "application/json; charset=utf-8"
      };
      res.writeHead(200, { "content-type": types[ext] || "application/octet-stream" });
      res.end(bytes);
    });
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  origin = "http://127.0.0.1:" + server.address().port;
  browser = await chromium.launch({ headless: true });
});

after(async () => {
  if (browser) await browser.close();
  if (server) await new Promise((resolve) => server.close(resolve));
});

async function openHud() {
  const context = await browser.newContext();
  const page = await context.newPage();
  const apiCalls = [];
  await page.route("**/*", async (route) => {
    const url = route.request().url();
    if (url.startsWith("https://dualiscapax-depth.digenova77.workers.dev/")) {
      const body = route.request().postDataJSON();
      apiCalls.push({ url, body });
      const question = JSON.stringify(body || {});
      if (question.includes("simulate API failure")) {
        await route.fulfill({
          status: 503,
          contentType: "application/json",
          body: JSON.stringify({ ok: false, error: "fixture outage" })
        });
      } else {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ ok: true, answer: "Mocked Iris answer" })
        });
      }
      return;
    }
    if (url.startsWith(origin + "/")) return route.continue();
    return route.abort();
  });
  await page.goto(origin + "/holographic-core/v2/index.html", { waitUntil: "domcontentloaded" });
  return { context, page, apiCalls };
}

test("HUD renders and makes no API request until the user submits", async () => {
  const { context, page, apiCalls } = await openHud();
  try {
    assert.match(await page.title(), /DCLM-RTE-V2\.0\.4/);
    assert.match(await page.locator("#iris-status").innerText(), /Not connected/);
    assert.equal(apiCalls.length, 0, "page load must not call the answer engine");
    await page.locator("#iris-input").fill("Explain the playground");
    await page.locator("#iris-send").click();
    await page.locator("#iris-messages").getByText("Mocked Iris answer").waitFor();
    assert.equal(apiCalls.length, 1);
    assert.match(JSON.stringify(apiCalls[0].body), /Explain the playground/);
    assert.match(await page.locator("#iris-status").innerText(), /Response received/);
  } finally {
    await context.close();
  }
});

test("local text stays local until an explicit question and clear removes context", async () => {
  const { context, page, apiCalls } = await openHud();
  try {
    const privateMarker = "LOCAL_DOCUMENT_MARKER_7F3A";
    await page.locator("#iris-file-input").setInputFiles({
      name: "notes.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Quarterly note: " + privateMarker)
    });
    await page.locator("#iris-status").getByText("Local text ready").waitFor();
    assert.equal(apiCalls.length, 0, "selecting a file alone must not call the API");
    assert.equal(await page.evaluate(() => window.IrisHud.snapshot().hasLocalDocument), true);
    await page.locator("#iris-input").fill("Summarize my notes");
    await page.locator("#iris-send").click();
    await page.locator("#iris-messages").getByText("Mocked Iris answer").waitFor();
    assert.equal(apiCalls.length, 1);
    assert.match(JSON.stringify(apiCalls[0].body), new RegExp(privateMarker));
    await page.locator("#iris-clear").click();
    assert.equal(await page.evaluate(() => window.IrisHud.snapshot().hasLocalDocument), false);
    assert.equal(await page.evaluate(() => window.IrisHud.snapshot().documentName), null);
    assert.match(await page.locator("#iris-status").innerText(), /Cleared/);
  } finally {
    await context.close();
  }
});

test("HTTP failure is shown as a failure, not an answer", async () => {
  const { context, page, apiCalls } = await openHud();
  try {
    await page.locator("#iris-input").fill("simulate API failure");
    await page.locator("#iris-send").click();
    await page.locator("#iris-status").getByText("HTTP 503").waitFor();
    assert.equal(apiCalls.length, 1);
    assert.equal(await page.locator("#iris-messages").getByText("Mocked Iris answer").count(), 0);
    assert.match(await page.locator("#iris-messages").innerText(), /has not claimed a successful answer/i);
  } finally {
    await context.close();
  }
});
