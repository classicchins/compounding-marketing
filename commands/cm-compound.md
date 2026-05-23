# /cm-compound — Capture a Learning

Append a single, schema-valid learning entry to `.agents/learnings/<category>.md` so future marketing work in this category starts from prior evidence, not a blank page.

This command is the **write side** of the compounding loop. The read side is the **Prior Learnings Consulted** section that wired skills run before producing output. The schema both sides obey is defined in [`skills/_LEARNINGS_SCHEMA.md`](../skills/_LEARNINGS_SCHEMA.md) — that file is the source of truth; this command must conform to it.

## When to use

Run `/cm-compound` immediately after:

- A campaign, page, launch, or experiment produced a clear result (good or bad).
- An A/B test reached significance — *whether it won or lost*. Losing tests are often higher-signal than winning ones.
- A round of customer research surfaced a non-obvious pattern.
- A surprise occurred — something behaved opposite to expectation.

Do **not** run it for routine deliveries that taught nothing new, or for opinions without evidence. The bar is *captured evidence*, not vibes.

## What it does

1. Walks the user through the six required fields for a learning entry.
2. Validates each field against the schema (`_LEARNINGS_SCHEMA.md` §"Required entry structure").
3. Resolves the correct category file (`.agents/learnings/<category>.md`), creating it with valid frontmatter if it does not exist.
4. Writes the new entry **above** existing entries (reverse-chronological).
5. Updates frontmatter (`last_updated`, `entries_count`).
6. Reports what was captured and which wired skills will now consume it.

## Modes

This workflow supports two modes:

### `interactive` (default)

Walks the user through every step. Asks the six-field questions, validates field-by-field, and produces a rich human-readable confirmation. This is the unchanged behavior — invoke `/cm-compound` with no `mode` arg.

### `headless`

Runs non-interactively. Accepts a pre-built learning entry and writes it to the correct `.agents/learnings/<category>.md` without prompting. Useful for piping LLM-generated post-experiment summaries straight into the learnings store, or for scheduled jobs that capture a learning at the end of each experiment.

**Input resolution order:**

1. CLI args passed to the slash command (e.g., `/cm-compound mode=headless input=path/to/entry.json`).
2. Failing that, environment variable `CM_COMPOUND_INPUT` pointing to a JSON file path or containing inline JSON.
3. Failing that, a default file at `.agents/compound-input.json`.

**Input schema** (JSON; required unless noted):

```json
{
  "category": "copywriting",              // required, lowercase-hyphenated, must match a skill or documented cluster
  "date": "2026-05-23",                   // optional, defaults to today (YYYY-MM-DD)
  "title": "Outcome-led H1 beats feature-led on pricing",  // required, ≤120 chars
  "context": "Q2 pricing page rewrite for FlowOps, 14-day A/B test.", // required, 1–2 sentences
  "finding": "Outcome-led H1 lifted pricing-to-trial 31%.", // required, 1–3 sentences as a claim
  "evidence": "n=8,420; p<0.01; +31% conversion delta.",    // required, specific data/quote/pattern
  "implication": "Default to outcome-led H1 on conversion pages.", // required, actionable
  "linked_skills": ["copywriting", "page-cro"],             // required, 1–5 real skill names
  "confidence": "high"                    // required, exactly one of: low | medium | high
}
```

**Output schema** — on success, structured JSON (default written to `.agents/outputs/compound-<date>.json`, or stdout if `output=stdout`):

```json
{
  "status": "ok",
  "category_file": ".agents/learnings/copywriting.md",
  "entry_date": "2026-05-23",
  "entry_title": "Outcome-led H1 beats feature-led on pricing",
  "linked_skills": ["copywriting", "page-cro"],
  "entries_count_after": 7
}
```

**Output schema** — on rejection (validation failure), structured error JSON with non-zero exit:

```json
{
  "status": "error",
  "code": "INVALID_INPUT",
  "errors": [
    { "field": "confidence", "reason": "must be one of low|medium|high (lowercase)" },
    { "field": "evidence", "reason": "required, non-empty" }
  ]
}
```

**Exit behavior:**

- Missing input file at all three resolution paths → exit with `{status:"error", code:"NO_INPUT", message:"..."}`. Do **not** fall back to prompting.
- Schema validation failure (missing field, wrong `confidence` value, empty string, title >120 chars, unknown skill name) → exit with `INVALID_INPUT` and the list of field errors above. Do **not** silently correct.
- Same-date entry already exists for that category → exit with `{status:"error", code:"DUPLICATE_DATE", message:"...", hint:"add disambiguating suffix to title"}` rather than guessing a suffix.
- On success, the entry is appended above existing entries, frontmatter is updated, and the success JSON is emitted.

Headless mode runs Steps 4–7 of the Process below (validate, locate/create file, insert entry, update frontmatter). It skips Steps 1–3 (which gather input interactively) and Step 8 (which reports back conversationally), substituting the structured JSON output instead.

## Process

### Step 1: Confirm there is a real learning to capture

Ask the user:

- *What worked, what didn't, what surprised you, what would you do differently?*

If the answer is generic ("the campaign went well") or non-falsifiable ("the brand feels stronger"), stop. Ask for the specific outcome, number, or quote that makes this a learning rather than an impression. A learning without evidence is noise.

### Step 2: Pick the category

The category is the filename of the learnings file: `.agents/learnings/<category>.md`.

Choose by asking *which skill or skill-cluster will consume this finding most often?* Use the skill name when one skill clearly owns it (`copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`, `pricing-strategy`, etc.). Use a cluster name when the learning spans 2–4 related skills (`landing-pages`, `lifecycle-email`).

Rules:
- Category must be lowercase, hyphenated, and match an existing skill name **or** a documented cluster.
- New cluster names should be agreed on with the user before first use.
- One file per category. Do not split a category into multiple files.

### Step 3: Draft the six required fields

First, establish the entry title (one line, ≤120 chars, becomes the H2 heading after the date). Concrete and specific. Bad: "Headlines matter." Good: "Outcome-led H1 beats feature-led H1 on pricing page."

Then collect the six required fields in this order. Do not accept an empty or hand-wavy answer — every field must be falsifiable enough that a future reader can judge whether it still applies.

1. **Context** (1–2 sentences). The exact project / page / campaign / experiment. Include the company or product name, the time window, and the surface. "Q2 pricing page rewrite for FlowOps, 14-day test against the live page" not "a pricing test."
2. **Finding** (1–3 sentences, stated as a claim). What you now believe is true. "Outcome-led headlines outperformed feature-led headlines by 31% on pricing-to-trial conversion" not "outcome headlines feel better."
3. **Evidence** (be specific). Hard data wins: test result, sample size, p-value, conversion delta. Strong qualitative is acceptable: a direct quote, a clear pattern across 5+ interviews. Reject "felt right" or "stakeholders agreed."
4. **Implication** (must be actionable). What to do — or stop doing — next time. "Default to outcome-led H1 on conversion-critical pages; only fall back to feature-led when the outcome can't be quantified."
5. **Linked skills** (1–5 real skill names, comma-separated). Which skills should surface this when they run. If the answer is "all skills," the finding is too generic — sharpen it.
6. **Confidence** (`low | medium | high`, lowercase).
   - **high** — repeated across 3+ projects, OR statistically significant test, OR multiple independent customer signals.
   - **medium** — one strong signal worth defaulting to but still worth re-testing.
   - **low** — hypothesis-grade; one observation or anecdote worth recording so the next entry can confirm or refute.

### Step 4: Validate before write

Run this validation. Reject any failure with a clear message — never silently fix or guess.

- All six fields (Context, Finding, Evidence, Implication, Linked skills, Confidence) are present and non-empty.
- `Confidence` is exactly one of `low`, `medium`, `high` (lowercase).
- `Linked skills` references at least one real skill name under `skills/` (or a documented cluster name).
- Title is non-empty and ≤120 characters.
- The date is today's ISO date (`YYYY-MM-DD`).

### Step 5: Locate or create the category file

Path: `.agents/learnings/<category>.md`.

**If the file does not exist**, create it with this exact frontmatter:

```yaml
---
category: <category>
last_updated: <today YYYY-MM-DD>
entries_count: 0
---

# Learnings — <Category Title Case>

Captured insights from <category> projects. Wired skills read this file before executing and surface relevant entries to the user.

---
```

**If the file exists**, read its frontmatter to confirm schema. If `entries_count` does not match the actual number of `## YYYY-MM-DD` headings, flag the drift and ask the user before writing — do not silently "correct" it.

### Step 6: Insert the entry above existing entries

Entries are reverse-chronological. The new entry goes immediately after the frontmatter and intro block, **above** the most-recent existing entry.

Entry format — exact heading and bullet structure (wired skills parse by label, but bullet field names and order must match this exactly):

```markdown
## YYYY-MM-DD — <title>

- **Context:** <1-2 sentences>
- **Finding:** <1-3 sentences, stated as a claim>
- **Evidence:** <data, quote, or observation>
- **Implication:** <actionable next-time guidance>
- **Linked skills:** <comma-separated skill names>
- **Confidence:** <low | medium | high>

---
```

If an entry already exists with today's date, append a disambiguating suffix to the title (`— part 2`, or a topic differentiator). Never silently overwrite a same-date entry.

### Step 7: Update frontmatter

- Set `last_updated` to today's date.
- Increment `entries_count` by 1.

### Step 8: Confirm the compound

Report back to the user:

- The category file written to.
- The entry title and date.
- The list of linked skills that will now consume this learning the next time they run.
- A one-line suggestion of where this learning most likely changes behavior next (e.g., "Next time you run `/cm-copywriting` for a pricing page, this will surface in the Prior Learnings Consulted section.").

Do not skip this — closing the loop visibly is the difference between a write-only audit log and a compounding system.

## Output

- A new entry appended to `.agents/learnings/<category>.md`.
- Updated frontmatter (`last_updated`, `entries_count`).
- A confirmation message naming the category, the entry, and the skills now wired to surface it.

## What this command will NOT do

- Write a learning without evidence ("seemed to work" is not evidence).
- Use vague categories like `general` or `marketing`. Category names are precise.
- Skip validation to "be helpful." A malformed entry corrupts every future read.
- Edit or overwrite a prior entry. Append-only — if a prior finding turned out wrong, write a *new* entry that overrides it with new evidence, and reference the old entry's date in the new Implication.
- Auto-categorize without confirmation. The user picks the category.

## Time investment

5–10 minutes per learning. If it takes longer, the finding probably isn't crisp enough yet — go gather one more piece of evidence and try again.

## Philosophy

Marketing knowledge compounds only when each project deposits something concrete that the next project can withdraw. `/cm-compound` is the deposit. The Prior Learnings Consulted section in wired skills is the withdrawal. Skipping either side breaks the loop — and you go right back to relearning what you already know.
