/**
 * Iris origin-join — sits between Cloudflare edge and GitHub origin.
 * Serves the isolated HUD RTE. Does not rewrite dualiscapax.ai apex.
 * System: DCLM-RTE-V2.0.4
 */
const HUD_RAW = "https://raw.githubusercontent.com/digenova77-ui/dualiscapax-hud/main";
const LANDING_RAW = "https://raw.githubusercontent.com/digenova77-ui/dualiscapax-landing/main";

const ALLOW = {
  "/holographic-core/v2": [HUD_RAW + "/holographic-core/v2/index.html", "text/html; charset=utf-8"],
  "/holographic-core/v2/": [HUD_RAW + "/holographic-core/v2/index.html", "text/html; charset=utf-8"],
  "/holographic-core/v2/index.html": [HUD_RAW + "/holographic-core/v2/index.html", "text/html; charset=utf-8"],
  "/assets/holographic-hostess-40/hostess.svg": [HUD_RAW + "/assets/holographic-hostess-40/hostess.svg", "image/svg+xml; charset=utf-8"]
};

const APEX_BLOCK = new Set(["/", "/index.html"]);

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/iris/status" || path === "/iris/status.json") {
      return Response.json({
        infrastructure_bridge: {
          edge_provider: "Cloudflare",
          source_repository: "GitHub-HUD-Main",
          landing_repository: "GitHub-Pages-Main",
          routing_middleware: "Iris-AI",
          action: "INTERCEPT_AND_JSON",
          purge_legacy_cache: true,
          apex_overwrite: false,
          rte: "DCLM-RTE-V2.0.4",
          hostess_anchor: "rte_primary_support_left_foot",
          landing_raw_untouched: LANDING_RAW
        }
      }, {
        headers: {
          "cache-control": "no-store",
          "x-dc-iris": "bridge",
          "x-dc-rte": "DCLM-RTE-V2.0.4"
        }
      });
    }

    if (APEX_BLOCK.has(path)) {
      return new Response("Iris will not overwrite apex. Use /holographic-core/v2", {
        status: 409,
        headers: { "x-dc-iris": "apex-quarantine", "cache-control": "no-store" }
      });
    }

    const hit = ALLOW[path];
    if (!hit) return new Response("not on the Iris join plate", { status: 404 });

    const up = await fetch(hit[0], { cf: { cacheTtl: 0, cacheEverything: false } });
    if (!up.ok) return new Response("Iris join missing upstream HUD", { status: 502 });

    return new Response(await up.text(), {
      status: 200,
      headers: {
        "content-type": hit[1],
        "cache-control": "no-store, must-revalidate",
        "cdn-cache-control": "no-store",
        "x-dc-iris": "origin-join",
        "x-dc-rte": "DCLM-RTE-V2.0.4",
        "x-dc-purge-legacy": "true"
      }
    });
  }
};
