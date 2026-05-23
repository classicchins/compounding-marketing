# /cm:research — Deep Market Research Workflow

Comprehensive research workflow that builds the foundation for all marketing work. In v1.8, this command operates as an **orchestrator**: it dispatches four parallel specialist sub-agents and merges their structured returns into a single Research Pack.

## What It Does

Runs a sequence of research skills to gather market intel, customer insights, and competitive analysis. Where the platform supports sub-agent dispatch (Claude Code, Codex, Cursor), the four specialists run in parallel — dramatically faster and with cleaner output than the v1.7 serial pass. Where the platform does not (Zed, ChatGPT, web Claude), the orchestrator falls back to a serial path that produces byte-identical output.

The merged Research Pack contains four artifacts: directional ICP cohorts, a competitive landscape map, raw customer-voice verbatims grouped by JTBD axis, and a TAM/SAM/SOM estimate. Conflicts between specialists are surfaced explicitly; no silent reconciliation.

## Specialists

The orchestrator dispatches four specialist sub-agents in parallel. Each is a full `SKILL.md` under `skills/cm-*/`. See [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) for the dispatch contract.

| Specialist | Scope | Methodology drawn from | Expected output |
|---|---|---|---|
| **[`cm-icp-finder`](../skills/cm-icp-finder/SKILL.md)** | 2-3 directional ICP cohorts + 1 anti-ICP. No 20-customer empirical requirement. | `icp-research` | `findings: [ICP-N, ANTI-ICP-N]` with `firmographics`, `trigger_event`, `primary_jtbd`, `fit_score_estimate`. |
| **[`cm-competitor-mapper`](../skills/cm-competitor-mapper/SKILL.md)** | 4-8 competitors across direct / indirect / status-quo / adjacent + 1-2 white-space gaps. | `competitive-analysis` | `findings: [COMP-N, WHITE-N]` with `category`, `positioning`, `primary_strength`, `primary_weakness`. |
| **[`cm-customer-voice-miner`](../skills/cm-customer-voice-miner/SKILL.md)** | 15-30 verbatim snippets tagged by JTBD axis (push/pull/anxiety/habit), with provenance. | `customer-research` + `testimonial-collection` | `findings: [VOC-N]` with `quote`, `source`, `axis`, `cohort_hint`, `verbatim_strength`. |
| **[`cm-market-sizing-runner`](../skills/cm-market-sizing-runner/SKILL.md)** | Directional TAM/SAM/SOM via top-down + bottom-up; explicit reconciliation if methods disagree. | `market-sizing` | `findings: [MKT-TAM, MKT-SAM, MKT-SOM, MKT-BU]` with `value_usd`, `sources`, `confidence_band_pct`. |

Each specialist consumes a structured brief built by this orchestrator (§ Dispatch sequence below) and returns a structured JSON payload conforming to [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §3.

## Dispatch sequence

### Step 1: Foundation check

Read `.agents/product-marketing-context.md`. If it does not exist, stop and run `/cm-context` first. Skim `.agents/learnings/icp-research.md`, `.agents/learnings/competitive-analysis.md`, `.agents/learnings/customer-research.md`, `.agents/learnings/market-sizing.md` if present.

### Step 2: Gather minimal user inputs

Ask the user **only** the questions necessary to construct briefs that the specialists cannot infer from the context doc:

- Industry / vertical scope (one phrase).
- Stage / funding band (one phrase).
- Primary geo (NA, EU, APAC, global).
- ACV range (rough min-max).
- Whether interview transcripts / review archives exist (paths if yes).
- Whether to include anti-ICP and white-space analysis (default yes).

Aim for 3-5 questions total. The specialists handle their own diagnostic work from the briefs.

### Step 3: Build the four briefs

Construct one brief per specialist following [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §2. Each brief includes:

- `task` — one-line label.
- `context_refs` — paths the specialist must load.
- `scope` — specialist-specific parameters (segment count, competitor count, verbatim count, sizing methods).
- `user_inputs` — what you gathered in Step 2.
- `time_budget_minutes: 5` — soft cap.
- `peers` — the other three specialists, so each can avoid overlap.
- `output_format: "json"`.

### Step 4: Detect platform and dispatch

Detect the dispatch primitive available (see [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §1):

- **Claude Code:** emit 4 `Agent` tool calls (one per specialist, `subagent_type: cm-<name>`) in a single assistant message — they run in parallel.
- **Codex:** emit 4 `spawn_agent` calls in a single turn.
- **Cursor:** emit 4 `Subagent` calls in a single turn.
- **Zed / ChatGPT / web Claude:** fall back to the serial path (§5 of the dispatch contract) — load each specialist's SKILL.md inline and execute against the brief.

### Step 5: Merge the four returns

Once all returns are received, execute the merge step from [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §4:

1. **De-duplicate findings.** Hash by `title` normalized. Cross-validate where two specialists name the same entity (e.g., a competitor mentioned in both `cm-competitor-mapper` and `cm-customer-voice-miner`'s `competitor_mention` field).
2. **Resolve conflicts.** Most likely: `cm-icp-finder`'s primary ICP vs. `cm-market-sizing-runner`'s SAM filter; ICP cohort hints from `cm-customer-voice-miner` quotes vs. `cm-icp-finder`'s named cohorts. Surface explicitly under `## Conflicts` — do not silently pick.
3. **Consolidate recommendations.** Group by `for_skill`. Multiple specialists recommending `positioning` collapse into one consolidated recommendation.
4. **Aggregate open questions.** Deduplicate and prioritize — these become the user's "decide before proceeding" list.

### Step 6: Produce the Research Pack

Write the merged deliverable as a single Markdown file at `.agents/outputs/research-pack-<date>.md` (or print inline if the user requested no file write). The structure:

```markdown
# Research Pack — {{date}}

## Sources consulted
- cm-icp-finder (status: ok, findings: 4, dispatch_mode: parallel|serial)
- cm-competitor-mapper (status: ok, findings: 7, dispatch_mode: parallel|serial)
- cm-customer-voice-miner (status: ok, findings: 22, dispatch_mode: parallel|serial)
- cm-market-sizing-runner (status: ok, findings: 4, dispatch_mode: parallel|serial)

## Conflicts
- {{any conflicts surfaced during merge}}

## Synthesized deliverable

### ICP cohorts
{{from cm-icp-finder, cross-validated with VOC cohort hints}}

### Competitive landscape
{{from cm-competitor-mapper, cross-validated with VOC competitor mentions}}

### Voice of customer
{{from cm-customer-voice-miner — top 5-7 high-leverage verbatims grouped by JTBD axis}}

### Market sizing
{{from cm-market-sizing-runner — TAM/SAM/SOM with confidence bands}}

### Recommended next steps
{{consolidated recommendations across specialists}}

### Open questions
{{aggregated open_questions, prioritized}}
```

### Step 7: Recommend next workflow

Based on the merged output, route the user:

- If positioning is weak or category is ambiguous → `/cm-position`.
- If positioning is clear and copy needs writing → `/cm-copy`.
- If launch is the next milestone → `/cm-launch`.
- If interview transcripts are missing (per `cm-customer-voice-miner`'s `missing` field) → run `customer-interview` skill before retrying research.

## When to Use

- Starting a new marketing initiative.
- Entering a new market segment.
- Refreshing outdated positioning.
- Before a major product launch.

## Time Investment

- **Parallel dispatch:** ~10-20 minutes orchestrator-perceived (specialists run concurrently, each capped at 5 min).
- **Serial fallback:** 40-60 minutes (specialists run sequentially).

## Output

- `.agents/outputs/research-pack-<date>.md` — the merged Research Pack.
- Optionally updates `.agents/product-marketing-context.md` with newly verified learnings.
- Recommended next workflow.
