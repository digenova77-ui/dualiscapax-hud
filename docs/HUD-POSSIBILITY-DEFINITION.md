# HUD Possibility Definition

**Artifact:** HUD Possibility Definition  
**Lane:** HUD (definition only; this document builds nothing)  
**Date:** 2 November 2026  
**Ruling it answers:** founder lane ruling, 2 November 2026, 00:00 EST — the HUD is this lane's focus; the deliverable is what is possible, at grades.  
**Vote carried with that ruling:** "pure logic implementation to everything." Recorded as the construction rule for every environment this definition allows. It is not a build order.  
**Public name:** DualisCapax. Production systems are named for the job. This document accredits records. It brands nothing to a person or a server.

This file is the governing artifact. A later build is measured against it. A claim with no grade is not a claim.

---

## 0. How to read a grade

Grades are never blended and never averaged.

| Grade | Means |
|---|---|
| PROVEN | This seat read the file, the commit, or the check-run, and the claim is what that evidence says. |
| REPORTED | A document in the estate says it. This seat did not re-carry the measurement. |
| INFERRED | Follows from evidence, and is labeled as the inference. |
| DESIGN | Buildable on a foundation that exists. Not built by this document. |
| UNKNOWN | The estate does not hold the fact. The missing fact is named. |

Classes, used once each entry has a grade:

- **exists now** — the artifact is in a named commit.
- **buildable next** — the foundation exists and the dependency is named.
- **open research** — no foundation yet, or the physical carry is missing.

Fuel clause, on every entry: **joule (metered) · eFuse (valued) · ledger (accounted)**. If that line cannot be written, the entry says so. A wish is not a possibility.

---

## 1. The limit statement

**DCLM 1655** is the founder's name for the HUD virtual machine, sealed as "1655 it is for the VM." The number stays. It is not renamed to the arithmetic of DCLM.

At its limit, 1655 is one surface that boots like a machine. One file. Any computer. Open it and the world boots. Everything the estate can lawfully show runs inside that one surface, transparently. There is no second world beside it.

"Everything through one interface," when it is true, means all of the following at once:

1. The person who has already chosen opens one file.
2. The file draws only what is retrievable. If nothing is retrievable, the view is an honest hole, not a picture of activity.
3. The world inside is the bot world: swarms, their progress, and the instruments that witness them. It is not a place for a person to play.
4. The environment is constructed from pure logic. Geography, playground dressing, and staged topic titles are not the frame.
5. Every number on the surface says how it was metered, how it was valued, and how it was accounted, or it says that one of those three is not yet writable.
6. Worth, if shown, is a graded vector of read-backs. It is never one glowing number.
7. Settlement, issuance, and live value stay off the surface while the gates are shut.

That limit is **not true today**. The closest one-file artifact is a downloadable page. The closest world is an application that is not that page. The closest machine record refuses settlement. Section 2 is the evidence.

---

## 2. What this seat actually read

Read first-hand on 2 November 2026. SHAs are the ones the remotes returned, not the inventory in the commissioning brief where the two disagree.

| Record | What was read | Result |
|---|---|---|
| [dualiscapax-hud](https://github.com/digenova77-ui/dualiscapax-hud) `main` | `caeb3774b3987f37de113108a72f4df53e99a5aa`, 29 Oct 2026 08:12Z, "The diamond header says the books and the floor are unset." Tree and README. | PROVEN. No commit on this repo since 30 Oct 2026. |
| [dccp-world](https://github.com/digenova77-ui/dccp-world) `main` | `4bb3ba21866ecd2d97057e0e865452db09b8feaf`, 29 Oct 2026 08:12Z. `src/dccp/world/world.ts` (1,526 lines), `BOTWORLDHUD_DESIGN.md`, `HUD_WEBSITE_INTEGRATION.md`. | PROVEN for the lines cited below. |
| [unity-playground](https://github.com/digenova77-ui/unity-playground) `master` | `6ae0f0d6d1c4d113e2bee0a1486d1a47e48c9218`, 29 Oct 2026. Tip only. | PROVEN tip. Contents not re-read. |
| [efuse-unity](https://github.com/digenova77-ui/efuse-unity) `main` | `3759af783710b47896df01060d75cc32a248afdb`, 29 Oct 2026. Tip only. | PROVEN tip. Contents not re-read. |
| [dualiscapax-landing](https://github.com/digenova77-ui/dualiscapax-landing) `main` | `08a79c91cd060fe9a3746417ddd3ae855d52fcc6`, 29 Oct 2026. `world.html` is a Canada page. A `world/` directory is not in that tree. | PROVEN for that page. |
| [scarlet-xenon-lion-dove](https://github.com/digenova77-ui/scarlet-xenon-lion-dove) stage 1 | `integration/machine-stage1-20261101` @ `992034381a15c133829e12ffcbca008230695000`. | PROVEN. Built and tested in this lane on 2 Nov 2026. |
| Same repo, sandbox line | `integration/machine-sandbox-20261101` @ `8a06982787aefa1edcc89ef9edef160211c5853f`, 1 Nov 2026 23:00Z. | PROVEN tip. **Not** an ancestor of the stage-1 head. |
| Same repo, `main` | `5f2f4ff5fa3454f0ff8f68f34ea50ae338118656`. | PROVEN. This is not the machine stack. |
| Repository default | `sandbox-remainder` @ `07d04958b0bed1ddc3b8d72e13f43e669093fa1c`. | PROVEN name. Not the HUD and not the stage-1 head. |

`world.ts` at `4bb3ba21`, constructor: `buildCore()` is called. `buildEarth` is not called. `GeoLayer` is constructed and **not** added to the scene. The comment at line 115 says the geography layer stays on disk and is not added. `buildSwarms()` (line 1208) draws three orbits and labels each `NO TASKS BOUND`, with the comment that no task manifests are plumbed in, so nothing is invented. `buildTree()` and `buildPyramid()` are called. The same constructor still calls `buildQuakes()`, `buildIss()`, and the landing-plate builders (`buildLandingOntario` and the others). Pure logic is partial.

The HUD repository at `caeb3774` contains `holographic-core/v2/index.html`, `diamond/index.html`, `workers/iris-bridge.js`, and the hostess asset. Its README says the repo does not patch the landing apex. This seat did not find a five-item storyboard menu in that tree.

---

## 3. The possibility register

### P1. One file, any computer, the world boots

- **Day:** A person opens one file on a computer they already have. The bot world is there, or the file says it is not.
- **Rests on:** `dualiscapax-hud` `holographic-core/v2/index.html` @ `caeb3774`. README calls it the permanent download. It does not mount `dccp-world` @ `4bb3ba21` and it does not mount the machine record.
- **Grade:** PROVEN that one HTML file is in the HUD repo. DESIGN that this file becomes the 1655 boot. The boot itself is not true.
- **Fuel:** not writable. The file meters nothing, values nothing, and accounts nothing.
- **Class:** exists now as a page. The limit is open research until that page and the world are the same bytes.

### P2. The environment is pure logic, not a playground

- **Day:** The swarm manager looks at a core built from structure, not at a globe built to resemble a place to visit.
- **Rests on:** Founder vote, 2 November 2026, pure logic to everything. `dccp-world` `BOTWORLDHUD_DESIGN.md` (status DESIGN, 4 Oct 2026, predicted verdict, not sealed). `world.ts` @ `4bb3ba21` as cited in §2.
- **Grade:** PROVEN that the globe is not added and the core is. PROVEN that quakes, ISS, and landing plates are still built in the same constructor. INFERRED: the strip is incomplete. DESIGN: remove what still reads as a human place, without deleting frozen history from disk.
- **Fuel:** not writable. Geometry is not a joule.
- **Class:** exists now as a partial strip. Finishing the strip is buildable next, and only on the founder's word that this wave may be edited. This definition does not edit it.

### P3. Swarm orbits that show bot progress

- **Day:** A bound task changes the density or speed of one orbit. An unbound family stays a quiet orbit that says no tasks are bound.
- **Rests on:** `world.ts` `buildSwarms()` @ `4bb3ba21`, lines 1204–1243. Three named families: ephemeral binds, self-arbitrage loops, receipt chain.
- **Grade:** PROVEN that the orbits draw and that the label is `NO TASKS BOUND`. PROVEN, by the file's own comment, that manifests are not plumbed. Progress is not shown.
- **Fuel:** not writable. A ghost orbit is not metered work. When a real bind exists, the joule is the measured cost of that bind, the eFuse line is the valued share, and the ledger line is the receipt. None of those three are connected here.
- **Class:** exists now as an honest-empty instrument. Wiring real binds is buildable next, after a retrievable manifest exists. Inventing density is refused.

### P4. The tree and the pyramid as structure

- **Day:** The person picks the tree or the pyramid and reads the structure that is actually in the scene.
- **Rests on:** `world.ts` calls `buildTree()` and `buildPyramid()` @ `4bb3ba21`. Pyramid comment: apex plus four law-floor invariants, structure from `src/dccp/explorer/pyramid.ts`.
- **Grade:** PROVEN that both are constructed. What a pick returns, and whether any number on them is measured, was not re-run. Do not call them live instruments.
- **Fuel:** not writable.
- **Class:** exists now as geometry. A measured reading on either is buildable next only if the reading already exists somewhere retrievable.

### P5. The view is generated from what is retrievable

- **Day:** The person asks for something the estate can retrieve. The surface models that thing. The person does not pick from a fixed list of topics.
- **Rests on:** Founder doctrine in the 2 November brief: RTE = HUD = endless possibilities, not staged titles. No generator of arbitrary views was found in `dualiscapax-hud` @ `caeb3774`.
- **Grade:** DESIGN as doctrine. UNKNOWN as a mechanism. There is no retriever, no modeler, and no test.
- **Fuel:** not writable. A generated view would have to name the joule of the retrieval, the value of showing it, and the ledger entry of the request. None of that exists.
- **Class:** open research. A topic menu must not be built in its place.

### P6. Witness order: log, watch, notify, stream

- **Day:** A bot event is written, then watched, then the person who asked is notified, then a stream carries the same event. The order does not skip.
- **Rests on:** The tense is doctrine in the 2 November brief. No implementation of that sequence was found in the HUD repo. `dccp-world` has live-feed modules (`src/dccp/live/`); this seat did not read them far enough to claim they are this sequence.
- **Grade:** DESIGN as an order. UNKNOWN as code. Do not describe a stream.
- **Fuel:** not writable. Notify and stream spend energy; until a meter reads it, the cost is a hole.
- **Class:** open research.

### P7. Instrument read-backs, including worth

- **Day:** The person reads the meter, the receipts, and a vector of graded figures. Each figure keeps its grade on its face, at normal size. A market price, if shown at all, is labeled REPORTED and does not sit in the headline.
- **Rests on:** Commissioning brief, §5, carrying the 1 November 2026 valuation ruling. `VERDICT.md` was not in this workspace; the ruling is REPORTED, not re-read. `$1.27B/yr` is the brief's anchored floor: addressable recoverable flow, Ontario education. It is not the worth of the system.
- **Grade:** REPORTED for the ruling. PROVEN that no canon formula for one system-worth number was found, because none was offered and this seat will not invent one. DESIGN for the read-back layout. UNKNOWN for live joules.
- **Fuel:** the line the layout must show, and cannot yet fill. Joule: no measured joule in the paid path (machine prices, where they exist, are iteration counts on the unmerged machine line — see P9). eFuse: `SHARES = { held: 90, forged: 9, moves: 1 }` is a constant in doctrine code; the payment journal does not read it. Ledger: settlement enqueue returns `TRINITY_EXECUTION_EVIDENCE_REQUIRED` and does not move value.
- **Class:** the refusal of a single worth-number exists now as a rule. The read-back surface is buildable next, and only as holes until the three fuel lines are real.

### P8. The refused single number

- **Day:** No one can point at the HUD and say the system is worth one figure.
- **Rests on:** P7. The brief's portfolio rule: parts are not blended, and the grade travels with the figure.
- **Grade:** DESIGN as a prohibition. It is already binding on this definition.
- **Fuel:** a single number would hide the missing joule, the unapplied split, and the closed ledger. That is why it is refused.
- **Class:** exists now as a never-claim. It is not a feature.

### P9. The machine record the HUD may show

- **Day:** The HUD names one candidate commit and shows the gates that are still shut. It does not show a paid success.
- **Rests on:** `settlement-resume-recovery-20261102` @ `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9`, open draft [PR #110](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/pull/110). This seat re-read the commit. `8a06982787aefa1edcc89ef9edef160211c5853f` and `992034381a15c133829e12ffcbca008230695000` are both ancestors. Neither is the tip. The supplemental note is `docs/MACHINE-CANDIDATE-READBACK-20261102.md`. It nominates. It does not merge.
- **What this commit still refuses, read here:**
  - `APPROVED_POLICY_ID` is the compiled `null` (`govern.ts` line 26).
  - `paidQuote` and `paidRun` return `PAYMENT_SANDBOX_DISABLED` when `NODE_ENV` is production (`machine.ts` lines 199 and 222).
  - `enqueuePaymentSettlement` returns `TRINITY_EXECUTION_EVIDENCE_REQUIRED` (`payment-journal.ts` line 689). The only caller in the tree is its test.
  - `evaluateSettlementTrinity` does not create an outbox item or mutate payment state. Its own header says so.
- **Grade:** PROVEN for those lines and for the ancestry. GitHub `machine` check-runs on this SHA succeeded: [41390620048](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41390620048) and [41390616859](https://github.com/digenova77-ui/scarlet-xenon-lion-dove/actions/runs/41390616859). This seat did not re-run them and did not count the tests. The brief's `ac158845` and "956/956 + 126/126" stay UNKNOWN. PR #110 is draft and unmerged.
- **Fuel:** not a measured joule. Not an applied 90/9/1 split. The ledger on this commit can describe settlement states; the scheduling function this seat found still refuses, and the pull request is not on the default branch.
- **Class:** exists now as the nominated candidate. A HUD read-back may name the SHA and the four holes. It may not call the machine live.

### P10. Identity before any mutating view

- **Day:** A view that changes nothing can be seen under the honesty rules. A view that binds a task, moves a key, or spends a unit requires a session that the server proved.
- **Rests on:** On the stage-1 head, better-auth passkey is `src/lib/auth/server.ts`, mounted at `src/routes/api/v2/unity/$.ts`, and it is env-gated. `src/dccp/seat.ts` `pass()` is a separate browser ceremony. Landing `/v1/authorize` on `dualiscapax-landing` @ `08a79c91` reads `body.principal.unity_id` under a shared secret (alignment review, 1 November 2026; not re-read line by line this pass — REPORTED).
- **Grade:** PROVEN that two ceremonies exist on the stage-1 head. PROVEN that this definition does not treat the browser ceremony as authorization. REPORTED for the landing body field.
- **Fuel:** identity is not fuel. A session does not mint a joule.
- **Class:** the split exists now. One session-bound identity for any mutating HUD act is buildable next. It is not done.

### P11. Website glimpse and the export cut

- **Day:** A visitor on the site sees the same bytes the HUD world is, read-only, or sees a hole. They do not see a second, drifted copy.
- **Rests on:** `HUD_WEBSITE_INTEGRATION.md` in `dccp-world` @ `4bb3ba21`, status DESIGN, 11 Oct 2026. It says no code was authorized under that plan, and it says the 3D HUD had no code. That second sentence is stale: `world.ts` now has the core, the orbits, the tree, and the pyramid. `dualiscapax-landing` `world.html` @ `08a79c91` is a Canada page. It does not mount `dccp-world`.
- **Grade:** PROVEN that the landing page is not this world. PROVEN that the Oct 11 plan forbids a website from mutating HUD state. UNKNOWN whether the 29 Oct `dccp-world` wave was meant to be exported. This seat did not find a 17-file shell or the hash named in the brief. That shell claim stays REPORTED, unverified here.
- **Fuel:** not writable. A glimpse that invents activity would be an unmetered lie.
- **Class:** the separation exists now. The export is not buildable until the founder names the cut. The discipline, once named, is in §5.

### P12. Adoption is a choice already made

- **Day:** The surface serves a person who decided to use it. It does not steer them into deciding.
- **Rests on:** Founder adoption doctrine, 2 November 2026, carried in the brief. No sign-up funnel was designed in this document.
- **Grade:** DESIGN as a prohibition, binding now.
- **Fuel:** not applicable. Consent is not a meter.
- **Class:** exists now as a never-claim.

### P13. The film seam

- **Day:** The HUD is the host surface where depths meet a door.
- **Rests on:** The brief names PASS 3 as the live film and PASS 6 (24:31) as built and waiting on a screening word. This seat did not open the film.
- **Grade:** REPORTED. Not inspected.
- **Fuel:** not writable.
- **Class:** UNKNOWN until the screening word and the file are in front of this lane. Not a HUD build.

---

## 4. Counts

| Class | Entries | Which |
|---|---|---|
| Exists now | 8 | P1 as a page only; P2 as a partial strip; P3 as an empty orbit; P4 as geometry; P8 as a prohibition; P9 as a closed machine record; P10 as a split identity; P12 as a prohibition. |
| Buildable next | 4 | Finish the pure-logic strip only if that wave may be edited (P2). Plumb real binds or keep the empty label (P3). Show `2c86531` as holes, not as a paid success (P9). One session for mutating acts (P10). |
| Open research | 4 | The 1655 boot (P1 at the limit). A view generated from any retrievable thing (P5). Log, watch, notify, stream (P6). A live joule inside the worth read-back (P7). |

P11 is not counted as buildable. The export waits on a founder word. P13 is not counted as a HUD possibility.

---

## 5. Ordering inside "buildable next"

Kidney before flow. Witness and accounting before any surface that could be mistaken for them.

1. **The machine SHA is named, and it is not merged.** `settlement-resume-recovery-20261102` @ `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9`. It contains both earlier heads. Draft PR #110. The HUD may read this SHA back with the gates in P9. It may not treat the pull request as landed.
2. **Keep the swarm honest, then connect it.** Reason: `world.ts` already refuses to invent tasks. The next code may attach a real manifest or leave `NO TASKS BOUND`. It may not animate progress. Depends on step 1 only if the manifest comes from the machine; a manifest from anywhere else still has to be retrievable and graded.
3. **Put the closed gates on the instrument deck as read-backs.** Reason: policy id null, enqueue refused, joule unmeasured, 90/9/1 not applied. The deck shows those four holes in normal type. No surface that implies a paid run comes before this. Depends on step 1.
4. **One session for anything that mutates.** Reason: the browser ceremony and the server passkey are not the same seat. A bind, a key, or a unit requires the server session. Depends on step 1 for the machine, and does not depend on the picture.
5. **Finish the pure-logic strip only if this wave may be edited.** Reason: quakes, ISS, and landing plates still build. Frozen history stays on disk. The scene stops adding what reads as a place to visit. This waits on an explicit edit word. The vote for pure logic is recorded; it is not, by itself, permission to cut `4bb3ba21`.
6. **Export only after the cut is named.** Not in the buildable sequence until then. Discipline when it is named: build one artifact, hash it, mount that hash, swap by pin, never by editing the mounted shell in place, never by letting the website and the HUD drift into two worlds. The website copy stays read-only. If the world is unreachable, the page says so.

---

## 6. Never-claims

The HUD must never present these as true:

- A possibility as a capability that has shipped.
- A market price, or `$1.27B/yr`, as the worth of the system. That figure is a REPORTED flow, Ontario education, and only if the ruling still says so when it is shown.
- One number called valuation, system worth, or "what it is worth."
- A menu of staged titles as the possibility space.
- Settlement, capture, issuance, or live value, while policy id is null and enqueue refuses.
- Swarm motion as bot progress while the label says no tasks are bound.
- The browser ceremony in `seat.ts` as a proven person.
- A client-sent unity id as a session.
- The test counts and the SHA in the commissioning brief's machine paragraph, unless a later reading finds them. This reading did not.
- Five landed HUD layers in one storyboard menu. This seat did not find that menu. See §8.
- A sign-up path, a funnel, or any motion whose job is to produce adoption.
- Fine print as the honesty label. Grades are normal type, on the face of the field.
- A fake dial. Ambience is light and glass. A needle encodes a measurement or it is absent.

---

## 7. The export question, answered

**Is the 29 October `dccp-world` wave an exportable surface today?** No. It is application source at `4bb3ba21`. The landing page a visitor gets from `world.html` @ `08a79c91` is a Canada page. They are not the same bytes.

**Was that wave intended for export?** UNKNOWN. The commit message read was "The books and the floor sit in a frame that stays when the card is hidden." It does not say export. The 11 October integration plan describes a future read-only glimpse and states that no code was authorized under the plan. The plan is older than the wave and wrong about "no 3D code." Intent is not something this seat will fill in.

**What happens to later waves?** Same rule. A wave is exportable when the founder names it as the cut. Until then it stays in its repository.

**Discipline once a cut is named:**

1. One build, from the named commit.
2. One hash, recorded next to the commit.
3. The website mounts that hash and does not receive a hand-edited copy.
4. The HUD world and the mounted glimpse are swapped by moving the pin to a new hash.
5. The mounted shell is not edited in place. Frozen pages stay frozen.
6. The glimpse cannot bind a task, move a key, or spend a unit.

This definition does not perform that export.

---

## 8. Collisions with standing law

Flagged, not smoothed.

1. **The brief says no commits after 29 October 2026 anywhere.** False for `scarlet-xenon-lion-dove`. Stage 1 is `9920343` on 2 November 2026. The sandbox tip is `8a06982` on 1 November 2026. HUD, world, playground, efuse-unity, and landing had no commits after 29 October in the query this seat ran. The universal sentence does not hold.
2. **The brief names `integration/machine-sandbox-20261101` @ `ac158845` with 956/956 and 126/126 tests as the integration of record.** The remote's sandbox tip is `8a06982`, and it is not inside the stage-1 head this lane just verified. This definition will not inherit a SHA it did not read. The HUD inherits the limits, not the comforting counts: no ratified policy, settlement refuses, the paid path has not run as one transaction.
3. **"The five HUD layers have landed, tied into one storyboard menu."** Not found in `dualiscapax-hud` @ `caeb3774`. `world.ts` boots many builders, not a five-item menu. Treating the design's core, swarms, tree, pyramid, and deck as those five layers would be an invention. They are not entered as a landed menu.
4. **`HUD_WEBSITE_INTEGRATION.md` says the 3D HUD has no code.** `world.ts` @ `4bb3ba21` calls `buildCore`, `buildSwarms`, `buildTree`, and `buildPyramid`. The plan is stale. The code still says task manifests are not plumbed. Both facts stand. The plan does not get silently updated by this definition.
5. **The brief's website `world/` slot, 17 files, hash beginning `ebdeaac3`.** Not found from `dualiscapax-landing` @ `08a79c91`. `world.html` is a different page. The slot claim is unreverified. The frozen-shell rule still holds: this definition does not edit a mounted shell.
6. **Pure logic versus the boot that still builds quakes, ISS, and landing plates.** The vote says pure logic to everything. The scene is only partly there. Completing it is a later edit, on a word that names the file. This document does not cut it.
7. **Two identities.** A HUD that opened a mutating act from the browser ceremony would collide with the session rule. It must not.

---

## 9. Named unknowns

Questions for the founder or the record. Not filled here.

1. What file is the five-layer storyboard menu, if it exists outside the commits read above?
2. Is `dccp-world` @ `4bb3ba21` the export cut, or does that wave stay application-only?
3. **Answered.** The nominated candidate is `2c8653151b80d5b15a0a22ea1a1c90dc76f9d0c9`. `8a06982` and `9920343` are inside it. The pull request is still a draft.
4. Does the pure-logic vote authorize an edit to `world.ts`, or only this definition?
5. Where is the valuation ruling filed, so `$1.27B/yr` can be re-read before any HUD shows it?
6. PASS 3 and PASS 6: which files, and is the screening word in or not? This lane did not look.
7. Glimpse framing, left open on 11 October 2026: live embed, snapshot, or stream?
8. Is a measured joule anywhere in the estate, as a sensor reading rather than an iteration count?

---

## 10. What this document does not do

It does not merge, deploy, open settlement, set a policy id, edit `world.ts`, edit a landing page, or draw a HUD. The gates stay shut. The live-value border stays shut. The next build waits on a word that names which entry in §5 it is.
