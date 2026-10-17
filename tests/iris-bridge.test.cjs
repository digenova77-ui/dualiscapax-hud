const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function loadWorker() {
  const upstream = [];
  const source = fs.readFileSync("workers/iris-bridge.js", "utf8").replace("export default {", "module.exports = {");
  const sandbox = {
    module: { exports: {} },
    URL,
    Response,
    fetch: async (url, options) => {
      upstream.push({ url: String(url), options });
      return new Response("upstream test body", { status: 200 });
    }
  };
  vm.runInNewContext(source, sandbox, { filename: "iris-bridge.js" });
  return { worker: sandbox.module.exports, upstream };
}

(async function () {
  const { worker, upstream } = loadWorker();
  const apex = await worker.fetch({ url: "https://dualiscapax.ai/" });
  assert.equal(apex.status, 409);
  assert.match(await apex.text(), /will not overwrite apex/i);
  assert.equal(upstream.length, 0, "apex requests must not be proxied");

  const unknown = await worker.fetch({ url: "https://dualiscapax.ai/iris/chat" });
  assert.equal(unknown.status, 404);
  assert.equal(upstream.length, 0, "unlisted routes must not be proxied");

  const status = await worker.fetch({ url: "https://dualiscapax.ai/iris/status" });
  assert.equal(status.status, 200);
  assert.equal((await status.json()).infrastructure_bridge.apex_overwrite, false);

  const client = await worker.fetch({ url: "https://dualiscapax.ai/holographic-core/v2/iris-playground.js" });
  assert.equal(client.status, 200);
  assert.match(client.headers.get("content-type"), /javascript/i);
  assert.equal(upstream[0].url, "https://raw.githubusercontent.com/digenova77-ui/dualiscapax-hud/main/holographic-core/v2/iris-playground.js");
  assert.equal(upstream.length, 1, "only the explicitly allowlisted HUD script should be fetched");
  console.log("Iris bridge allowlist tests passed");
})().catch((error) => { console.error(error); process.exitCode = 1; });
