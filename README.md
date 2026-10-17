# dualiscapax-hud

DualisCapax spatial HUD — new layer, not the landing site.

## Iris Diamond Review — local evidence console\n\n- Console source: [`diamond/index.html`](diamond/index.html)\n- Proposed isolated route: `/diamond` (Iris allowlist change is on this feature branch only)\n- Includes six coverage axes, three-ring verdicts, observation provenance fields, exact missing-primitive reporting, repeat-pass SHA-256 linkage, and JSON export.\n- No preloaded evidence, live sensor access, credentials, actuation, production deployment, or DNS changes. A “complete” result is bounded to the declared scope.\n\n## DCLM-RTE-V2.0.4 — permanent download pack

This repo is the isolated layer. It does **not** patch `dualiscapax-landing` apex (`/`).

| What | Where |
|---|---|
| Live RTE (open in browser) | [holographic-core/v2/index.html](holographic-core/v2/index.html) |
| Permanent download | Open that page → **Download RTE permanently** |
| Raw file | https://raw.githubusercontent.com/digenova77-ui/dualiscapax-hud/main/holographic-core/v2/index.html |
| Hostess asset | `assets/holographic-hostess-40/hostess.svg` |
| Iris between Cloudflare and GitHub | `workers/iris-bridge.js` |

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
