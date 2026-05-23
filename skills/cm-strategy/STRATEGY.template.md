# STRATEGY.md

> **Purpose.** This is the one-page focus document for our marketing work this quarter. It sits above `product-marketing-context.md` (the long reference) and is consulted by every planning skill in the Compounding Marketing plugin before that skill produces output. Keep it to one screen. Update statuses weekly; do a deeper refresh monthly. Never delete prior tracks — move completed work to `## Recently completed`.

---

## Target problem

<One-sentence statement of the binding marketing problem this quarter. ≤25 words. Falsifiable — a reader in 90 days must be able to say "yes, we solved it" or "no, we did not." Example: "Free-to-paid conversion has stalled at 2.1% (down from 3.4%) and is now the binding constraint on net new ARR.">

## Primary ICP

<One sentence naming the segment this quarter is aimed at and what subset of the full ICP it represents. For full firmographics, psychographics, JTBD, and persona detail see [`product-marketing-context.md`](./product-marketing-context.md). Example: "Series A-B B2B SaaS marketing leads at 30-100-employee companies who already use a competing analytics tool — a narrowed subset of the full ICP.">

## Key metrics

3-5 metrics, ordered by leverage. Each must have a numeric current baseline (or a track to measure it), a numeric target, and a by-when date.

| Metric | Current | Target | By when |
|---|---|---|---|
| <metric 1 — most tightly coupled to target problem> | <baseline> | <target> | <YYYY-MM-DD> |
| <metric 2> | <baseline> | <target> | <YYYY-MM-DD> |
| <metric 3> | <baseline> | <target> | <YYYY-MM-DD> |

## Active tracks

3-7 named workstreams that are actually getting time and budget this quarter. Each track follows the same schema. Add new tracks at the bottom; never reorder existing tracks.

### Track: <track-name>

- **Goal:** <one sentence that includes a metric — e.g., "Lift pricing-page → trial CTR from 8.3% to 12% via tier restructure.">
- **Owner:** <a named person, not a team>
- **Status:** planning | in_progress | shipping | done
- **Started:** YYYY-MM-DD
- **Target completion:** YYYY-MM-DD
- **Linked skills:** `/cm-<workflow>`, `/cm-<workflow>` — the workflows actually being consumed under this track
- **Notes:** <optional 1-3 lines on context, dependencies, risks, blockers>

### Track: <track-name>

- **Goal:** ...
- **Owner:** ...
- **Status:** ...
- **Started:** ...
- **Target completion:** ...
- **Linked skills:** ...
- **Notes:** ...

### Track: <track-name>

- **Goal:** ...
- **Owner:** ...
- **Status:** ...
- **Started:** ...
- **Target completion:** ...
- **Linked skills:** ...
- **Notes:** ...

## Recently completed

Done tracks move here, in reverse-chronological order. One line each. Keeps institutional memory of what shipped (and what was stopped) without bloating the active list.

- **YYYY-MM-DD — <track name>:** <one-line outcome with metric delta. Example: "Shipped Q2 onboarding rebuild. Trial activation 38% → 44%."> 

## Explicit no-gos

Things we considered this quarter and explicitly decided *not* to do. Naming the rejected options is how future-us remembers the deliberate trade-off.

- <no-go 1 + one-line reason>
- <no-go 2 + one-line reason>

## Divergence policy

When another skill in the Compounding Marketing plugin receives a request, it should resolve that request to one of the **Active tracks** above. If it cannot, it must flag the divergence — surface it to the user with the explicit prompt:

> *"This request doesn't map to any active track in STRATEGY.md. Add as a new track, fold into <closest existing track>, or defer to next quarter?"*

The skill never silently absorbs divergent work. The user decides whether to expand the strategy, recategorize the request, or push it out. This file is re-read at the start of every planning skill and at the maintenance cadence below.

## Last updated

YYYY-MM-DD — Cadence: weekly status review, monthly deep refresh.

<!--
Maintenance checklist (run weekly):
- [ ] Statuses on every active track are current
- [ ] Key-metric baselines refreshed (no value older than the cadence)
- [ ] Any track that's been `planning` >30 days is killed or promoted
- [ ] Done tracks moved to "Recently completed"
- [ ] Last updated date refreshed
-->
