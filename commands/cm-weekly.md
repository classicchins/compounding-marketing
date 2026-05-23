# /cm:weekly — Weekly Marketing Review

Comprehensive weekly review to find patterns, plan ahead, and compound learnings.

## What It Does

A 30-45 minute weekly review that synthesizes marketing activity, identifies patterns, celebrates wins, diagnoses problems, and plans the next week. This is where marketing knowledge compounds.

## Modes

This workflow supports two modes:

### `interactive` (default)

Walks the user through week-in-review, pattern recognition, energy audit, and next-week planning conversationally. Produces a rich human-readable recap. This is the unchanged behavior — invoke `/cm-weekly` with no `mode` arg.

### `headless`

Runs non-interactively. Accepts the week's activity feed (shipped items, posts, paid spend deltas, metric snapshots) and produces a structured weekly recap. Useful for Friday auto-publish to a status channel (Slack, Notion, Linear), or as input to a monthly aggregator.

**Input resolution order:**

1. CLI args (e.g., `/cm-weekly mode=headless input=path/to/week.json`).
2. Environment variable `CM_WEEKLY_INPUT` (JSON file path or inline JSON).
3. Default file at `.agents/weekly-input.json`.

**Input schema** (JSON; required unless noted):

```json
{
  "week_of": "2026-05-18",                       // required, Monday ISO date
  "activity": {                                   // required
    "content_published": [
      { "title": "Pricing teardown post", "channel": "blog", "url": "https://..." }
    ],
    "campaigns_active": ["Q2 nurture", "Pricing relaunch ads"],
    "experiments_completed": [
      { "name": "H1 outcome vs feature", "result": "outcome won +31%", "significant": true }
    ],
    "shipped_vs_planned": { "shipped": 7, "planned": 9 },
    "commits": 42,                                // optional, dev/marketing repo commit count
    "posts": 5,                                   // optional, social post count
    "paid_spend_delta_pct": 0.08                  // optional, week-over-week
  },
  "metrics": [                                    // required
    { "name": "traffic",   "this_week": 12400, "last_week": 11800 },
    { "name": "signups",   "this_week": 320,   "last_week": 290   },
    { "name": "conv_rate", "this_week": 0.026, "last_week": 0.025 }
  ],
  "qualitative_notes": [                          // optional
    "Comparison-table post drove 2x normal blog signups."
  ],
  "next_week_constraints": {                      // optional
    "deadlines": [{ "name": "Launch day", "date": "2026-05-27" }],
    "team_capacity_hours": 60
  }
}
```

**Output schema** — written to `.agents/outputs/weekly-<week_of>.json` (or stdout):

```json
{
  "status": "ok",
  "week_of": "2026-05-18",
  "headline": "Pricing relaunch shipped; signups +10% on outcome-led H1.",
  "activity_summary": {
    "content_published_count": 1,
    "experiments_completed_count": 1,
    "shipped_vs_planned": "7/9"
  },
  "metrics_summary": [
    { "name": "traffic",   "this_week": 12400, "last_week": 11800, "delta_pct": 0.051 },
    { "name": "signups",   "this_week": 320,   "last_week": 290,   "delta_pct": 0.103 },
    { "name": "conv_rate", "this_week": 0.026, "last_week": 0.025, "delta_pct": 0.040 }
  ],
  "wins":   [ { "item": "Outcome-led H1 won +31%", "why": "matches prior pricing-page learning" } ],
  "losses": [ { "item": "2 planned ships slipped", "action": "tighten Tuesday scope review" } ],
  "patterns": [
    { "type": "channel", "note": "Blog out-performed paid for the week on signups/dollar" }
  ],
  "next_week_plan": {
    "top_priorities": ["Launch annual toggle", "Ship comparison page", "Re-run nurture variant test"],
    "experiments": [{ "hypothesis": "Annual toggle lifts ARPU 8%", "success": "ARPU +5% on cohort" }]
  },
  "compound_candidates": [                          // hints for /cm-compound headless mode
    {
      "category": "copywriting",
      "title": "Outcome-led H1 wins on pricing",
      "context": "Week of 2026-05-18 pricing relaunch test.",
      "finding": "Outcome-led H1 outperformed feature-led by 31% on pricing→trial.",
      "evidence": "n=8,420; p<0.01.",
      "implication": "Default to outcome-led H1 on pricing pages.",
      "linked_skills": ["copywriting", "page-cro"],
      "confidence": "high"
    }
  ]
}
```

**Exit behavior:**

- Missing input at all three resolution paths → `{status:"error", code:"NO_INPUT"}`. Do **not** prompt.
- Missing `week_of`, `activity`, or `metrics` → `INVALID_INPUT` with field path.
- `metrics` present but empty → `INVALID_INPUT` (a weekly review without metrics defeats the purpose).
- On success, the recap JSON is emitted. The `compound_candidates` block is a hint — it is **not** auto-written; pipe it into `/cm-compound mode=headless` for any learning the caller chooses to persist.

Headless mode runs Steps 1–4 of the Process below deterministically using the provided JSON. The Energy Audit (Step 2c) is skipped in headless — it is inherently subjective and is not part of the structured output.

## Process

### 1. Week in Review

**Activity Audit:**
- What content was published?
- What campaigns ran?
- What experiments completed?
- What shipped vs. what slipped?

**Metrics Review:**
- Traffic: This week vs. last week
- Signups/Leads: This week vs. last week
- Conversion rate: Any changes?
- Revenue impact: Attributable marketing contribution?

**Wins:**
- What worked really well?
- Any unexpected successes?
- What should you do more of?

**Losses:**
- What didn't work?
- What underperformed expectations?
- What should you stop or change?

### 2. Pattern Recognition

**Themes:**
- What topics or angles resonated?
- What channels performed best?
- What time of day/week worked best?

**Learnings:**
- What did you learn about your audience?
- What did you learn about your product positioning?
- What copywriting patterns worked?

**Energy Audit:**
- What marketing work energized you?
- What drained you?
- What should you delegate or automate?

### 3. Next Week Planning

**Priorities:**
- What are the 3 most important marketing tasks?
- What's the ONE thing that would make next week a success?

**Calendar:**
- Any launches or deadlines?
- Any campaigns to start/stop?
- Any content to publish?

**Experiments:**
- What are you testing next week?
- What hypothesis are you validating?

### 4. Compound Learnings

If any strong patterns emerged:
- Update `.agents/learnings/[category].md`
- Note what worked and why
- Create reusable template or process if applicable

## Output Format

```markdown
# Weekly Marketing Review — Week of [Date]

## This Week's Activity
- **Content published:** [count] — [list]
- **Campaigns active:** [list]
- **Experiments run:** [list]
- **Shipped vs. planned:** [X/Y]

## Metrics Summary
| Metric | This Week | Last Week | Change |
|--------|-----------|-----------|--------|
| Traffic | X | Y | +/-% |
| Signups | X | Y | +/-% |
| Conv. Rate | X% | Y% | +/-% |
| [Key metric] | X | Y | +/-% |

## Wins 🏆
1. [Win 1] — Why it worked: [reason]
2. [Win 2] — Why it worked: [reason]

## Losses 📉
1. [Loss 1] — What to change: [action]
2. [Loss 2] — What to change: [action]

## Patterns Identified
- **What resonated:** [topic/angle/format]
- **Best channel:** [channel + why]
- **Audience insight:** [learning]

## Energy Audit
- **Energizing:** [activities]
- **Draining:** [activities]
- **To delegate/automate:** [candidates]

## Next Week's Plan

### Top 3 Priorities
1. [Priority 1] — [expected outcome]
2. [Priority 2] — [expected outcome]
3. [Priority 3] — [expected outcome]

### Calendar
- [Day]: [Activity]
- [Day]: [Activity]

### Experiments
- Testing: [hypothesis]
- Success criteria: [metric + threshold]

## Learnings to Compound
- [Learning 1] → saved to `learnings/[category].md`
- [Learning 2] → [action]

## Open Questions
- [Question to explore]
- [Thing to research]
```

## When to Use

- End of each week (Friday afternoon)
- Before weekly planning sessions
- Monthly: aggregate 4 weekly reviews for monthly synthesis

## Time Investment

30-45 minutes

## Output

- Clear view of what's working vs. what isn't
- Patterns that inform future work
- Prioritized plan for next week
- Compounded learnings

## Philosophy

Weekly reviews are where marketing compounds. Daily work is execution. Weekly reviews are reflection. Without reflection, you repeat mistakes and miss patterns. This is the most important marketing habit.
