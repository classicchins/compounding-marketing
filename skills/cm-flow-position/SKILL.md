---
name: cm-flow-position
description: End-to-end positioning workshop that dispatches three parallel specialists (canvas runner, alternatives mapper, category tester) and merges their returns into a unified Positioning Canvas plus category recommendation, then chains into messaging and value-prop work. Triggers - positioning workshop, full positioning, position workflow, Dunford workshop, category test.
when_to_use: Use when launching a new product, repositioning an existing one, entering a new market, or fixing confused messaging across channels — and you want the full Dunford workshop plus downstream chaining.
kind: workflow
metadata:
  version: 1.0.0
---

# cm-flow-position — Full Positioning Workshop

You are the user's positioning orchestrator. Dispatch the three specialists (canvas runner, alternatives mapper, category tester) in parallel where supported, merge their returns into a unified Positioning Canvas, surface conflicts explicitly, and chain into messaging / value-prop / sales-deck work.

Complete positioning workshop using April Dunford's framework + messaging development. In v1.8, this command operates as an **orchestrator**: it dispatches three parallel specialist sub-agents (canvas runner, alternatives mapper, category tester) and merges their structured returns into a unified Positioning Canvas + category recommendation, then chains downstream into messaging and value-prop work.

## What It Does

Runs the full positioning stack. The three parallel specialists each go deep on one axis of the positioning problem — the canvas runner produces a directional 5-axis draft, the alternatives mapper produces the deep competitive-alternatives map, and the category tester pressure-tests category candidates and recommends one. The orchestrator merges these into one unified canvas and routes the user to downstream messaging / value-prop work.

## Specialists

The orchestrator dispatches three specialist sub-agents in parallel. See [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) for the dispatch contract.

| Specialist | Scope | Methodology drawn from | Expected output |
|---|---|---|---|
| **[`cm-canvas-runner`](../skills/cm-canvas-runner/SKILL.md)** | Run the Dunford 5-axis canvas — alternatives, attributes, value, best-fit customers, category. 2-4 candidates per axis. | `positioning` | `findings: [CANVAS-{ALT,ATTR,VAL,BFC,CAT}-N]` with axis-specific details. |
| **[`cm-alternatives-mapper`](../skills/cm-alternatives-mapper/SKILL.md)** | Deep competitive alternatives map across 4 buckets (status quo, manual, adjacent, direct), ranked by buyer-likelihood with positioning lever per entry. | `positioning` + `competitive-analysis` | `findings: [ALT-N]` with `bucket`, `likelihood_rank`, `your_positioning_lever`. |
| **[`cm-category-tester`](../skills/cm-category-tester/SKILL.md)** | Pressure-test 2-4 category candidates on recognizability, search demand, alternatives-coherence, messaging-compatibility. Recommend one. | `positioning` + `messaging-framework` | `findings: [CAT-N]` with `test_scores`, `weighted_score`, `trade_off`, one marked `recommended: true`. |

## Dispatch sequence

### Step 1: Prerequisites

Read `.agents/product-marketing-context.md`. If missing, stop and run `/cm-context` first. Strongly recommended: run `/cm-research` first so the orchestrator has fresh ICP and competitive context to seed the specialists.

Skim `.agents/learnings/positioning.md` if present.

### Step 2: Gather minimal user inputs

Ask only what the specialists cannot infer from context:

- Are there pre-existing category candidate names the user wants tested? (If yes, pass to `cm-category-tester` as `user_inputs.candidates`.)
- Is this re-positioning an existing product, or first-time positioning? Changes which canvas axes get most attention.
- Stage of the team (pre-PMF / Series A-B / scale-up). Affects category-test recommendation.
- Any deal-loss signal pointing at a specific direct competitor? Seeds `cm-alternatives-mapper`.

Aim for 3-4 questions max.

### Step 3: Build the three briefs

Construct one brief per specialist following [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §2:

- **`cm-canvas-runner` brief.** Includes all 5 axes, target candidates per axis, peers list (`cm-alternatives-mapper`, `cm-category-tester`).
- **`cm-alternatives-mapper` brief.** Includes all 4 buckets, `alternative_count_target: 7`, ranking requested.
- **`cm-category-tester` brief.** Includes `user_inputs.candidates` if pre-seeded; otherwise the specialist generates them.

All briefs use `output_format: "json"` and `time_budget_minutes: 5`.

### Step 4: Detect platform and dispatch

Per [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §1:

- **Claude Code:** 3 `Agent` calls in one assistant turn, `subagent_type: cm-canvas-runner` etc.
- **Codex:** 3 `spawn_agent` calls.
- **Cursor:** 3 `Subagent` calls.
- **Zed / ChatGPT / web Claude:** serial fallback.

### Step 5: Merge the three returns

Execute the merge step from [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §4:

1. **De-duplicate findings on the alternatives axis.** Both `cm-canvas-runner` (2-4 directional entries) and `cm-alternatives-mapper` (4-8 deep entries) emit alternatives. Hash by `title` normalized; use `cm-alternatives-mapper`'s ranking as the priority order.
2. **Resolve conflicts on category.** `cm-canvas-runner` emits 1-2 directional category candidates; `cm-category-tester` recommends one. If the categories disagree (canvas's directional preference vs. tester's pressure-tested recommendation), surface as `## Conflicts` — usually the tester wins because it pressure-tested, but the canvas's preference might surface a value-coherence concern.
3. **Consolidate recommendations.** Group by `for_skill`. Most route to `positioning` (re-run full workshop), `messaging-framework`, `value-proposition`, or `customer-interview` (validate the category call).
4. **Aggregate open questions.** Especially category validation questions ("Run 5 buyer calls to verify").

### Step 6: Produce the Positioning Package

Write the merged deliverable as `.agents/outputs/positioning-package-<date>.md`:

```markdown
# Positioning Package — {{date}}

## Sources consulted
- cm-canvas-runner (status: ok, findings: 12, dispatch_mode: parallel|serial)
- cm-alternatives-mapper (status: ok, findings: 7, dispatch_mode: parallel|serial)
- cm-category-tester (status: ok, findings: 3, dispatch_mode: parallel|serial)

## Conflicts
- {{any axis-level conflicts surfaced during merge}}

## Synthesized deliverable

### Positioning Canvas (Dunford 5-axis)

#### Competitive alternatives
{{merged from cm-canvas-runner + cm-alternatives-mapper, ranked by buyer-likelihood}}

#### Unique attributes
{{from cm-canvas-runner; each linked to ≥ 1 value}}

#### Value (and proof)
{{from cm-canvas-runner; each anchored to evidence in context doc / VOC}}

#### Best-fit customers
{{from cm-canvas-runner; trait signatures}}

#### Market category (recommended)
{{from cm-category-tester: recommended candidate + trade-off + alternative candidates}}

### Recommended next steps
{{consolidated recommendations across specialists}}

### Open questions
{{aggregated open_questions, prioritized — especially category validation}}
```

### Step 7: Chain into downstream work

After the user reviews the Positioning Package, route to:

- **Messaging pillars** → run `messaging-framework` skill, seeded by the value axis.
- **Per-segment value props** → run `value-proposition` skill once per best-fit customer.
- **Sales-deck articulation** → run the full `positioning` skill in workshop mode.
- **Category validation** → run `customer-interview` skill to test category language with 5 buyers.
- **Website copy update** → `/cm-copy` with the new positioning as input.

## When to Use

- Launching a new product.
- Repositioning existing product.
- Entering new market.
- Confused messaging across channels.

## Prerequisites

- Run `/cm-research` first (or have existing product-market context).
- `.agents/product-marketing-context.md` must exist.

## Time Investment

- **Parallel dispatch:** ~15-25 minutes orchestrator-perceived (specialists run concurrently).
- **Serial fallback:** 45-75 minutes.
- **Plus** downstream messaging / value-prop chaining (1-3 hours).

## Output

- `.agents/outputs/positioning-package-<date>.md` — unified canvas + category recommendation.
- Optional: pillars, per-segment value props, sales-deck articulation (downstream).
- Recommended next workflow.
