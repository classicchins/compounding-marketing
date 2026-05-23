# /cm:audit — Marketing Audit

Comprehensive marketing health check across all channels and assets. In v1.8, this command operates as an **orchestrator**: it dispatches four parallel specialist sub-agents (SEO, content, conversion, funnel) and merges their structured returns into the audit's findings array. Wave-1 headless mode is preserved — dispatch happens at the work-execution layer, not the I/O layer.

## What It Does

A structured audit of your entire marketing operation — messaging consistency, channel performance, funnel health, and asset quality. Run quarterly or before major strategic shifts.

## Specialists

The orchestrator dispatches four specialist sub-agents in parallel. See [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) for the dispatch contract.

| Specialist | Scope | Methodology drawn from | Expected output |
|---|---|---|---|
| **[`cm-seo-auditor`](../skills/cm-seo-auditor/SKILL.md)** | Technical / on-page / content / link SEO signals. 6-12 findings with severity. | `seo-audit` | `findings: [SEO-N]` with `dimension`, `severity`, `evidence`, `recommended_skill`, `priority`. |
| **[`cm-content-auditor`](../skills/cm-content-auditor/SKILL.md)** | Content quality across 4 dimensions (SEO alignment, readability, engagement, brand voice). Pattern + worst-offender findings. | `content-performance-scoring` | `findings: [CON-N]` with `dimension`, `severity`, `evidence`, `affected_surfaces`. |
| **[`cm-conversion-auditor`](../skills/cm-conversion-auditor/SKILL.md)** | Conversion surfaces — landing pages, signup flow, lead-gen forms. | `page-cro` + `signup-flow-cro` + `form-cro` | `findings: [CONV-N]` with `dimension` (pages/signup/forms), `severity`, `evidence` with benchmark. |
| **[`cm-funnel-auditor`](../skills/cm-funnel-auditor/SKILL.md)** | Stage-by-stage funnel drop-offs, tracking gaps, attribution-model fit. Emits top-level `biggest_funnel_dropoff` for the Audit Report. | `attribution-modeling` + `analytics-tracking` | `findings: [FUN-N]` + top-level `biggest_funnel_dropoff`. |

Each specialist consumes a structured brief built by the orchestrator (§ Dispatch sequence below) and returns a structured JSON payload conforming to [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §3.

## Dispatch sequence

Dispatch happens at **Step 6** of the Process below (or as the entire execution path in headless mode). I/O layer is unchanged — interactive mode still walks the user through diagnostic prompts; headless mode still accepts JSON input via the resolution order documented under "Modes". The orchestration is *how* findings are produced inside that I/O contract.

### Orchestration steps

1. **Build briefs.** For each of the four specialists, construct a brief per [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §2. Each brief includes `metrics` for that specialist's dimension (e.g., `metrics.seo` for `cm-seo-auditor`), pulled from the audit input JSON in headless mode or from the user's interactive responses in interactive mode.
2. **Detect platform and dispatch.** Per [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §1: Claude Code uses `Agent`, Codex uses `spawn_agent`, Cursor uses `Subagent`, Zed/ChatGPT/web fall back to serial.
3. **Merge returns.** Execute the merge step from [`references/sub-agent-dispatch.md`](../references/sub-agent-dispatch.md) §4 — dedupe findings, resolve conflicts (e.g., thin-content surfaced by both `cm-seo-auditor` and `cm-content-auditor`), consolidate recommendations by `for_skill`, aggregate open questions.
4. **Promote special fields.** `cm-funnel-auditor` emits a top-level `biggest_funnel_dropoff` field — the orchestrator writes it directly into the Audit Report (preserving the Wave-1 output schema).
5. **Stack-rank findings.** Sort by severity (critical > high > medium > low), then by `priority` (`fix_now` > `improve_next` > unset). Distribute into the Audit Report's `priority_stack`.
6. **Produce the report.** Per Modes below — file in headless, structured Markdown in interactive.

## Time Investment

60-90 minutes

## Modes

This workflow supports two modes:

### `interactive` (default)

Walks the user through every step: foundation check, channel scoring, funnel mapping, asset inventory, competitive scan, priority ranking. Produces a rich human-readable scorecard plus narrative. This is the unchanged behavior — invoke `/cm-audit` with no `mode` arg.

### `headless`

Runs non-interactively. Accepts a list of marketing surfaces and metric snapshots as JSON, evaluates each against the audit rubric, and produces a structured findings report. Useful for quarterly automated health checks, CI gating on marketing-site changes, or piping into a dashboard.

**Input resolution order:**

1. CLI args (e.g., `/cm-audit mode=headless input=path/to/audit-input.json`).
2. Environment variable `CM_AUDIT_INPUT` (JSON file path or inline JSON).
3. Default file at `.agents/audit-input.json`.

**Input schema** (JSON; required unless noted):

```json
{
  "audit_date": "2026-05-23",                  // optional, defaults to today
  "scope": ["positioning", "seo", "email", "paid", "social", "content", "funnel"],  // required, list of areas to score
  "surfaces": [                                // optional but recommended
    { "type": "url", "value": "https://example.com/pricing", "channel": "website" },
    { "type": "url", "value": "https://example.com/blog/x", "channel": "content" }
  ],
  "metrics": {                                 // required for any scoped channel; missing channels are scored "unknown"
    "seo": { "organic_traffic_4w": 12400, "organic_traffic_prev_4w": 14100, "top_pages": [...] },
    "email": { "open_rate": 0.34, "click_rate": 0.04, "list_growth_4w_pct": 0.02, "deliverability_issues": false },
    "paid":  { "roas": 2.1, "cac_trend_pct": 0.18, "creative_age_days_avg": 62 },
    "social":{ "engagement_rate": 0.018, "follower_growth_4w_pct": 0.01 },
    "content":{ "posts_published_4w": 3, "target_cadence": 8 },
    "funnel":{ "stages": [ {"name":"visit","count":42000}, {"name":"signup","count":820}, {"name":"paid","count":71} ] }
  },
  "competitive_signals": [                     // optional
    { "competitor": "Acme", "note": "launched comparable feature 2026-04" }
  ],
  "output": "file"                             // optional, "file" (default) or "stdout"
}
```

**Output schema** — written to `.agents/outputs/audit-<date>.json` (or stdout):

```json
{
  "status": "ok",
  "audit_date": "2026-05-23",
  "scorecard": [
    { "area": "positioning", "status": "yellow", "score": 6, "notes": "..." },
    { "area": "seo",         "status": "red",    "score": 3, "notes": "Organic -12% over 4w; top page CTR dropped." }
  ],
  "findings": [
    {
      "id": "F-001",
      "area": "seo",
      "severity": "high",                       // low | medium | high | critical
      "issue": "Organic traffic down 12% MoM with no algorithm event explanation.",
      "evidence": { "organic_traffic_4w": 12400, "prev": 14100 },
      "recommendation": "Run /cm-seo-audit on top-10 declining pages and re-check internal linking.",
      "linked_skills": ["seo-audit", "site-architecture"]
    }
  ],
  "priority_stack": {
    "fix_now":   ["F-001", "F-004"],
    "improve_next": ["F-002"],
    "invest_later": ["F-005"],
    "deprioritize": []
  },
  "biggest_funnel_dropoff": { "from": "visit", "to": "signup", "rate": 0.0195 }
}
```

**Exit behavior:**

- Missing input at all three resolution paths → `{status:"error", code:"NO_INPUT"}`, non-zero exit. Do **not** prompt.
- `scope` empty or absent → `INVALID_INPUT`.
- Metric block missing for a scoped area → that area scores `"unknown"` in the scorecard and a finding of severity `medium` is emitted recommending instrumentation. The audit does **not** fail overall.
- Malformed JSON → exit with `INVALID_INPUT` and the parser error.

Headless mode runs Steps 1–6 of the Process below in deterministic order using only the provided JSON. No optional skill invocations (e.g., `competitive-analysis`) are triggered unless a `competitive_signals` array is provided.

## Process

### 1. Foundation Health Check

**Positioning & Messaging:**
- Review positioning canvas — still accurate? Market shifted?
- Check messaging across homepage, emails, ads — consistent?
- Brand voice alignment — does everything sound like the same company?
- Value props — still resonating? Evidence from metrics?

**Action:** Flag any drift. If positioning needs refresh → `/cm:position`

### 2. Channel Performance Audit

**For each active channel, assess:**

| Channel | Questions |
|---------|-----------|
| **Website/SEO** | Organic traffic trend? Top pages performing? Content gaps? |
| **Email** | List growth rate? Open/click rates? Deliverability issues? |
| **Social** | Engagement trend? Best-performing formats? Audience growth? |
| **Paid** | ROAS by channel? CAC trend? Creative fatigue? |
| **Content** | Publishing cadence? Quality consistency? Distribution working? |

**Score each:** 🟢 Healthy / 🟡 Needs attention / 🔴 Broken

### 3. Funnel Health

**Map conversion at each stage:**
- Awareness → Interest (traffic → engagement)
- Interest → Consideration (engagement → signup/demo)
- Consideration → Decision (signup → paid)
- Decision → Retention (paid → active user)

**Identify:** Where is the biggest drop-off? That's your highest-leverage fix.

### 4. Asset Inventory

**Catalog what exists:**
- Landing pages (how many? conversion rates?)
- Email sequences (active? performing?)
- Content library (blog posts, case studies, guides)
- Ad creatives (fresh or fatigued?)
- Sales collateral (up to date?)

**Flag:** Outdated assets, missing critical assets, underperforming assets.

### 5. Competitive Position Check

- Run quick competitive scan — anyone new?
- Pricing still competitive?
- Feature gaps that affect positioning?
- Messaging they're using that's working?

**Optional:** Run `competitive-analysis` skill for deep dive.

### 6. Dispatch specialists and merge findings

**This is where the orchestration described under "Dispatch sequence" above runs.** In v1.8, Steps 1–5 above describe the audit dimensions; this step is where the four specialists (`cm-seo-auditor`, `cm-content-auditor`, `cm-conversion-auditor`, `cm-funnel-auditor`) actually produce findings against those dimensions in parallel.

After the merge step, stack-rank findings into the priority buckets:

1. **Fix now** — Findings tagged `priority: "fix_now"` or `severity: critical`. Broken things costing money/opportunity.
2. **Improve next** — `severity: high` and not `fix_now`. Underperforming but not broken.
3. **Invest later** — `severity: medium`. New opportunities identified.
4. **Deprioritize** — `severity: low`. Channels/tactics not worth the effort.

## Output

```markdown
## Marketing Audit — [Date]

### Health Scorecard
| Area | Status | Notes |
|------|--------|-------|
| Positioning | 🟢/🟡/🔴 | ... |
| Website/SEO | 🟢/🟡/🔴 | ... |
| Email | 🟢/🟡/🔴 | ... |
| Social | 🟢/🟡/🔴 | ... |
| Paid | 🟢/🟡/🔴 | ... |
| Content | 🟢/🟡/🔴 | ... |
| Funnel | 🟢/🟡/🔴 | ... |

### Top 3 Priorities
1. ...
2. ...
3. ...

### Quick Wins (< 1 day each)
- ...

### Assets Needing Update
- ...
```

## When to Run

- **Quarterly** (minimum)
- Before major strategic pivots
- After significant market changes
- When metrics plateau and you're not sure why

## Skills Used

### Specialists dispatched (v1.8)

- [`cm-seo-auditor`](../skills/cm-seo-auditor/SKILL.md) — SEO findings pass.
- [`cm-content-auditor`](../skills/cm-content-auditor/SKILL.md) — content quality findings.
- [`cm-conversion-auditor`](../skills/cm-conversion-auditor/SKILL.md) — pages / signup / forms.
- [`cm-funnel-auditor`](../skills/cm-funnel-auditor/SKILL.md) — funnel drop-off + attribution fit.

### Downstream skills (consumers of audit recommendations)

- `seo-audit`, `site-architecture`, `schema-markup`, `programmatic-seo` — for SEO findings.
- `content-performance-scoring`, `copy-editing`, `brand-voice`, `content-strategy` — for content findings.
- `page-cro`, `signup-flow-cro`, `form-cro`, `copywriting` — for conversion findings.
- `attribution-modeling`, `analytics-tracking`, `onboarding-cro`, `paywall-upgrade-cro` — for funnel findings.
- `competitive-analysis` — optional deep dive on competitive signals.

## Common Mistakes

- Auditing too frequently (monthly is overkill — weekly metrics cover that)
- Not acting on findings (audit without action is waste)
- Boiling the ocean — focus on top 3 priorities, not fixing everything
