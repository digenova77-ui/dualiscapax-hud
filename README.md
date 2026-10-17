# dualiscapax-hud

DualisCapax spatial HUD — new layer, not the landing site.

## DCLM-RTE-V2.0.4 — isolated HUD shell

This repo is the isolated layer. It does **not** patch `dualiscapax-landing` apex (`/`).

| What | Where |
|---|---|
| Live RTE (open in browser) | [holographic-core/v2/index.html](holographic-core/v2/index.html) |
| Page shell export | Open that page → **Download HUD shell** (the API still requires a supported HTTPS origin) |
| Raw file | https://raw.githubusercontent.com/digenova77-ui/dualiscapax-hud/main/holographic-core/v2/index.html |
| Hostess asset | `assets/holographic-hostess-40/hostess.svg` |
| Iris between Cloudflare and GitHub | `workers/iris-bridge.js` |


## Iris playground — staged, not deployed

The isolated HUD now includes a text-first Iris panel in `holographic-core/v2/index.html` with its client in `holographic-core/v2/iris-playground.js`. The bridge allowlist serves that script only under `/holographic-core/v2/iris-playground.js`; apex remains quarantined.

- **Text:** sends a request only after the user presses Send, to the configured `dualiscapax-depth` `/v2/chat` endpoint. The UI reports success only when a non-empty answer is returned. Live CORS/API availability has not yet been verified.
- **Voice:** uses browser speech recognition when supported and permitted; typed input remains available.
- **Camera:** preview only. No frames are sent and visual understanding is not connected.
- **Local files:** `.txt`, `.md`, `.markdown`, `.csv`, `.tsv`, `.json`, and `.log`; maximum 256 KiB and 20,000 characters passed as context. Content stays in memory until the user sends a question, is not put in localStorage or transcript telemetry, and credential-like assignments are refused.
- **No search fallback:** if the configured API cannot return an answer, the HUD reports the failure; it does not forward document text to public search.
- **Download:** the button exports the HTML page shell, not a self-contained offline AI. API requests require a supported HTTPS origin; browser voice/camera features depend on secure-context support.
- **Validation:** Node 20 test workflow is isolated from deployment. Latest passing run: [39006687014](https://github.com/digenova77-ui/dualiscapax-hud/actions/runs/39006687014), 2 test files passed, 0 failed. Browser-level behavior and live API/CORS remain unverified.

This is a workbench change only. No Cloudflare worker, DNS, cache, or production route was changed. Cutover remains approval-gated.

### Spatial lock
- Landing path: `/holographic-core/v2`
- Hostess anchor: `#rte_primary_support_left_foot`
- Offset: `translate(0px, -42.5px)` · `z-index: 99999`
- Legacy landing: quarantined. Do not restore talk-only cafe plate to `/`.

### Cutover (only when David says so)
1. Point Cloudflare to this HUD origin for `/holographic-core/v2*`.
2. Deploy `workers/iris-bridge.js` as the Iris edge join.
3. Purge Cloudflare cache for that path only.
4. Leave `dualiscapax.ai/` apex alone until an explicit cutover.
