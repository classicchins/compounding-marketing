# /cm:retro — Campaign / Sprint Retrospective

Structured post-mortem for campaigns, launches, or sprints.

## What It Does

A deeper analysis than `/cm:compound`. While compound captures quick learnings, retro does a full post-mortem: what happened, why it happened, what to change. Best run after campaigns, launches, or sprint cycles.

## Time Investment

20-30 minutes

## Modes

This workflow supports two modes:

### `interactive` (default)

Walks the user through scope, results, keep/stop/start, surprises, and action items conversationally. Produces a rich human-readable retro doc. This is the unchanged behavior — invoke `/cm-retro` with no `mode` arg.

### `headless`

Runs non-interactively. Accepts a structured input describing the sprint or campaign (goal, completed items, missed items, metric deltas) and produces a structured retrospective JSON. Useful for sprint automation that posts retros to Slack/Linear/Notion, or for chaining the output into `/cm-compound` to capture learnings programmatically.

**Input resolution order:**

1. CLI args (e.g., `/cm-retro mode=headless input=path/to/retro-input.json`).
2. Environment variable `CM_RETRO_INPUT` (JSON file path or inline JSON).
3. Default file at `.agents/retro-input.json`.

**Input schema** (JSON; required unless noted):

```json
{
  "scope": {
    "name": "Sprint 14 — Pricing relaunch",       // required
    "type": "sprint",                              // required: sprint | campaign | launch | experiment
    "start_date": "2026-05-09",                    // required
    "end_date": "2026-05-22",                      // required
    "goal": "Ship new pricing page and lift trial→paid by 15%"  // required
  },
  "completed": [                                   // required (may be empty array)
    { "item": "Pricing page V2 shipped", "impact": "trial→paid +9%" }
  ],
  "missed": [                                      // required (may be empty array)
    { "item": "Comparison page", "reason": "design review slipped 4 days" }
  ],
  "metrics": [                                     // required
    { "name": "trial_to_paid", "target": 0.15, "actual": 0.09, "unit": "rate_delta" },
    { "name": "pricing_page_cvr", "target": 0.08, "actual": 0.082, "unit": "rate" }
  ],
  "qualitative_notes": [                           // optional
    "Customers asked about annual discount more than expected.",
    "Comparison table copy tested better than long-form."
  ]
}
```

**Output schema** — written to `.agents/outputs/retro-<date>.json` (or stdout):

```json
{
  "status": "ok",
  "scope": { "name": "Sprint 14 — Pricing relaunch", "end_date": "2026-05-22" },
  "summary": "Hit pricing CVR target; missed trial→paid lift; comparison page slipped.",
  "scorecard": [
    { "metric": "trial_to_paid", "target": 0.15, "actual": 0.09, "delta": -0.06, "verdict": "red" },
    { "metric": "pricing_page_cvr", "target": 0.08, "actual": 0.082, "delta": 0.002, "verdict": "green" }
  ],
  "keep": [ { "item": "Comparison-table copy approach", "why": "outperformed long-form variant" } ],
  "stop": [ { "item": "Sequential design review", "why": "4-day slip blocked launch dependency" } ],
  "start": [ { "item": "Parallel design + copy review", "why": "removes serial dependency" } ],
  "surprises": [ "Annual discount demand higher than modeled" ],
  "action_items": [
    { "action": "Add annual toggle to pricing page", "owner": "tbd", "priority": "high", "deadline": "2026-06-05" }
  ],
  "key_insight": "Annual demand was understated in pricing model.",
  "suggested_learnings": [                          // entries shaped for /cm-compound headless mode
    {
      "category": "pricing-strategy",
      "title": "Annual discount demand higher than expected",
      "context": "Sprint 14 pricing relaunch.",
      "finding": "More than 1 in 4 trial users requested an annual option.",
      "evidence": "27/96 trial-period chats mentioned annual.",
      "implication": "Default to surfacing annual toggle on pricing page.",
      "linked_skills": ["pricing-strategy", "copywriting"],
      "confidence": "medium"
    }
  ]
}
```

**Exit behavior:**

- Missing input at all three resolution paths → `{status:"error", code:"NO_INPUT"}`. Do **not** prompt.
- Missing required `scope.*`, `completed`, `missed`, or `metrics` → `INVALID_INPUT` with the specific field path.
- Empty `metrics` array → `INVALID_INPUT` (a retro without a measurable result should not be auto-generated).
- On success, the structured retro is emitted. The `suggested_learnings` block is a hint payload — it is **not** auto-written; the caller is expected to pipe it into `/cm-compound mode=headless` for any entry it wants to persist.

Headless mode runs Steps 1–7 of the Process below using only the provided JSON. Step 8 (which suggests running `/cm:compound` interactively) is replaced by the `suggested_learnings` field in the output.

## Process

### 1. Set the Scope

- What are we reviewing? (Campaign name, sprint #, launch, experiment)
- What was the timeline? (Start → end)
- What was the original goal?
- What was the actual outcome?

### 2. Results vs. Expectations

| Metric | Target | Actual | Delta | Verdict |
|--------|--------|--------|-------|---------|
| [Primary metric] | ... | ... | ... | 🟢/🟡/🔴 |
| [Secondary metric] | ... | ... | ... | 🟢/🟡/🔴 |
| [Secondary metric] | ... | ... | ... | 🟢/🟡/🔴 |

**Overall:** Did we hit the goal? Why or why not?

### 3. What Worked (Keep Doing)

List things that went well. Be specific — not "content was good" but "the comparison blog post drove 340 signups at $2.40 CAC."

For each:
- What specifically worked?
- Why did it work?
- How can we do more of this?
- Can this be systematized?

### 4. What Didn't Work (Stop Doing)

List things that failed or underperformed. No blame — just facts.

For each:
- What happened?
- Why didn't it work? (Root cause, not surface)
- How much time/money was spent?
- Should we try again differently, or kill it?

### 5. What We'd Change (Start Doing)

Based on the above:
- What would we do differently if we ran this again?
- What new approach should we try?
- What process changes would improve execution?

### 6. Surprises & Insights

Things you didn't expect — both good and bad:
- Unexpected channel that worked
- Audience segment that responded differently
- Content format that surprised
- Timing or sequencing insight

### 7. Action Items

**Concrete next steps:**

| Action | Owner | Deadline | Priority |
|--------|-------|----------|----------|
| [Action] | [Who] | [When] | High/Med/Low |
| ... | ... | ... | ... |

### 8. Compound the Learnings

**Run `/cm:compound` to document:**
- Key insights worth keeping
- Patterns to remember
- Frameworks to reuse
- Data points for future decisions

## Output

```markdown
## Retro: [Campaign/Sprint Name] — [Date]

### Summary
[1-2 sentence summary of what happened]

### Scorecard
| Metric | Target | Actual | Verdict |
|--------|--------|--------|---------|
| ... | ... | ... | ... |

### Keep (What Worked)
1. ...
2. ...

### Stop (What Didn't Work)
1. ...
2. ...

### Start (What to Change)
1. ...
2. ...

### Key Insight
[The single most important thing we learned]

### Action Items
1. ...
2. ...
```

## When to Run

- After every campaign ends
- At sprint boundaries (end of 2-week sprint)
- After product launches (1-2 weeks post-launch)
- After A/B tests conclude
- After any significant marketing initiative

## Related Workflows

- `/cm:compound` — Quick learning capture (use for small tasks)
- `/cm:sprint` — Sprint planning (retro feeds into next sprint)
- `/cm:weekly` — Weekly review (smaller scope than retro)
- `/cm:audit` — Quarterly audit (bigger scope than retro)

## Common Mistakes

- Skipping the retro (most common — and most costly)
- Making it about blame (it's about learning, not fault-finding)
- Not capturing action items (retro without actions is just venting)
- Doing it too late (memory fades — run within 1 week of campaign end)
- Not reading previous retros before planning new work
