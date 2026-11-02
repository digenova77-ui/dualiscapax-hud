# Machine Candidate Read-back — 2 November 2026

**Purpose:** Supply a first-hand, source-backed candidate for HUD possibility register P9 and ordering step 1. This is a supplemental evidence record. It does not alter or supersede `HUD-POSSIBILITY-DEFINITION.md` or its one-page summary.

## Candidate nominated

**Candidate machine commit:** `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9`

Repository: [scarlet-xenon-lion-dove](https://github.com/digenova77-ui/scarlet-xenon-lion-dove)

Candidate branch: `settlement-resume-recovery-20261102`

Pull request: [#110 — Recover persisted Trinity settlement after admission crash](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/pull/110)

Parent integration: [#109 — Stage 2/3B: session-bound machine execution and Trinity settlement](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/pull/109)

**Status:** nominated as the machine commit for a HUD read-back. It is not a merge, production release, owner-authority appointment, or declaration that the machine is live.

## Chain and branch evidence

- PR #109 integrates from `integration/machine-stage1-20261101` at `992034381a15c133829e12ffcbca008230695000`.
- PR #109 head is `e2143825998fb692289d1cb3a7007774f3e60c28`.
- PR #110 is based on that exact PR #109 head and has candidate head `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9`.
- GitHub compare reports candidate is 227 commits ahead of the Stage 1 base and 0 behind.
- GitHub compare reports candidate is 149 commits ahead of sandbox tip `8a06982787aefa1edcc89ef9edef160211c5853f` and 0 behind. The sandbox tip is therefore in the candidate's ancestry; it is not the candidate SHA.
- PR #109 and #110 are both open, draft, and unmerged. No review submissions or inline review threads were present when checked on 2 November 2026.

## CI evidence read from GitHub

| Commit / scope | Run | Result |
|---|---:|---|
| PR #109 machine head `e2143825998fb692289d1cb3a7007774f3e60c28` | [41385940640](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41385940640) | SUCCESS |
| PR #109 baseline | [41385940691](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41385940691) | SUCCESS |
| Candidate PR #110 `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9` | [41390620048](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41390620048) | SUCCESS |

The candidate machine job completed focused machine and fail-closed dependency tests, focused test-source TypeScript, changed-source lint, PostgreSQL-backed app startup, a second app instance against the same PostgreSQL store, authorization-invariant checks, the real HTTP machine path, production frontend bundle build, and cleanup. All reported steps passed.

The parent PR's machine and baseline checks also completed successfully. These are repository CI results, not external provider certification.

## What the candidate adds

PR #110 adds a recovery path for the narrow crash window after a valid Trinity settlement authorization and its outbox intent have been durably committed, but before the request claims and processes that outbox item.

The resume path:
- requires the authenticated Unity owner to match the persisted owner binding;
- loads the existing owner-root-verified authorization context;
- claims only the existing action-specific durable outbox event;
- does not evaluate Trinity again, replay receipts, create a new authorization, or create another outbox intent;
- delegates provider work to the existing worker, which independently re-verifies the signed authorization envelope and exact outbox binding;
- remains restricted to sandbox mode and PostgreSQL-backed durable storage.

The tests cover missing authorization, owner mismatch, no receipt replay, durable-store failure, active lease/no duplicate provider work, and the authenticated HTTP boundary.

## Four gates that remain closed

1. **Policy:** no owner-ratified production policy and appointed authority are established by CI. A genuine owner-root-authorized manifest and actual appointed seat keys remain necessary.
2. **Settlement:** PR #109 and #110 are draft and unmerged; production execution and settlement remain disabled. No real Stripe or BitPay sandbox transaction is evidenced by these runs.
3. **Joule:** this candidate does not establish physical energy metering. A typed value or iteration count is not a measured joule.
4. **Allocation:** the 90/9/1 split is not shown as applied to a live, settled ledger by this evidence.

Stripe and BitPay behavior in automated tests is mocked or sandbox-local. Real provider sandbox verification still requires the appropriate accounts and credentials, which must remain outside source control.

## HUD read-back ruling

The HUD may identify `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9` as the **nominated candidate machine record**, with the four closed gates above displayed plainly. It must not show paid execution, settlement, live value, measured joules, or applied allocation as completed facts.

This record does not authorize merging PR #109 or #110, changing the default branch, deploying, changing DNS or secrets, contacting live payment rails, or opening production services. Trinity remains the sole authorization gate.

---
**Evidence date:** 2 November 2026.  
**Grade:** PROVEN for the named GitHub refs, compare results, PR states, and CI conclusions; DESIGN/UNKNOWN for anything not established by those records.


## Governing-definition reconciliation — later 2 November 2026 read

The governing definition was subsequently updated at blob `f110f7fca5ef1bdabd2300d5307862191a3797d8` on `docs/hud-possibility-20261102`. Its P9 and §5 now explicitly name this candidate SHA, state that both `8a06982787aefa1edcc89ef9edef160211c5853f` and `992034381a15c133829e12ffcbca008230695000` are ancestors (neither is the tip), and preserve the four closed-gate read-backs. This is consistent with this supplemental record.

The governing definition also records two successful machine check-runs on the candidate SHA: [41390620048](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41390620048) and [41390616859](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41390616859). The latter's job steps were independently inspected: focused machine/fail-closed tests, focused test-source typecheck, changed-source lint, PostgreSQL-backed app, second app instance sharing PostgreSQL, authorization invariant, real HTTP machine path, production frontend bundle, and cleanup all succeeded. No test counts are asserted here.

The definition's exact remaining refusals are retained: compiled policy ID is null; production paid quote/run return `PAYMENT_SANDBOX_DISABLED`; `enqueuePaymentSettlement` returns `TRINITY_EXECUTION_EVIDENCE_REQUIRED` and its only caller in the tree is its test; `evaluateSettlementTrinity` does not itself create an outbox item or mutate payment state. The HUD must keep the orbits at `NO TASKS BOUND` until a real manifest is retrievable, and show the four holes before any paid-run depiction.

## Policy-default clarification — 2026-11-02

The compiled constant `APPROVED_POLICY_ID` remains `null`; that is the default posture and must not be described as a ratified production policy. The settlement path separately accepts an approved policy ID only from a valid owner-root-signed `TRINITY_AUTHORITY_MANIFEST_JSON` with a matching signature, pinned owner-root public key, and three current, distinct seat appointments/issuer keys. The candidate includes tests for a valid owner-signed manifest and for the missing-owner-root denial. Those tests prove the validation path, not that a real production manifest, owner root, or appointed seat keys have been supplied. No deployment manifest or signature has been independently verified in this review. Therefore the policy/authority gate remains closed pending real owner-provided evidence.
