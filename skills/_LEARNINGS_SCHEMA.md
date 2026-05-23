---
# This file is a SCHEMA TEMPLATE, not a runnable skill. It defines the
# canonical structure that `.agents/learnings/<category>.md` files must
# follow. `/cm-compound` writes against this schema; "wired" skills read
# from it before executing. Update this file when the schema evolves.
schema: learnings
version: 1.0.0
applies_to: ".agents/learnings/<category>.md"
enforced_by: "commands/cm-compound.md"
consumed_by: "skills/_TEMPLATE.md → Prior Learnings Consulted section"
---

# Learnings File Schema

This document defines the **canonical schema** for every file at
`.agents/learnings/<category>.md`. It is the source of truth that
`/cm-compound` enforces on write, and that wired skills read on
execution.

A "learning" is one captured insight from completed marketing work:
something that worked, something that broke, something that surprised
you, something you would do differently. Learnings are the unit of
account that makes marketing knowledge compound across projects.

Categories mirror skill names or skill clusters — `copywriting.md`,
`cold-email.md`, `positioning.md`, `paid-ads.md`, `icp-research.md`,
`landing-pages.md`, etc. One file per category. Append-only in normal
operation (older entries stay; a new dated entry is added on top).

---

## File-level structure

Every learnings file has exactly two parts:

1. **YAML frontmatter** — stable structured metadata. Three required fields.
2. **Entries** — reverse-chronological list of dated learning entries, each with six required fields.

### Required YAML frontmatter

```yaml
---
category: <skill-name-or-cluster>      # e.g., copywriting, cold-email, positioning
last_updated: YYYY-MM-DD               # date of most recent entry (ISO format)
entries_count: <integer>               # number of entries below; must match
---
```

- `category` must be lowercase, hyphenated, and match an existing skill name OR a documented cluster name (e.g., `landing-pages`, `lifecycle-email`). New cluster names should be agreed on before the first entry is written.
- `last_updated` is the calendar date of the most recent entry. `/cm-compound` updates this on every append.
- `entries_count` is a sanity check. `/cm-compound` increments it on every append and the validator (future, parallel work) will confirm it matches the actual entry count.

### Required entry structure

Each entry is a level-2 heading followed by six required bulleted fields. Wired skills parse by label, but bullet field names and order must match the schema exactly so future parsers can rely on either dimension.

```markdown
## YYYY-MM-DD — <one-line title>

- **Context:** <project / page / campaign this learning came from — 1-2 sentences>
- **Finding:** <the actual insight, stated as a claim — 1-3 sentences>
- **Evidence:** <the data, quote, or observation that supports the finding — be specific>
- **Implication:** <what to do (or stop doing) next time — actionable>
- **Linked skills:** <comma-separated skill names this learning informs>
- **Confidence:** <low | medium | high>
```

#### Field definitions

- **Context** — Where the learning came from. Identify the project, page, campaign, or experiment. Without context, future readers can't judge transferability. ("Q1 2026 pricing page rewrite for FlowOps" not "a project.")
- **Finding** — The claim. State it as a falsifiable statement, not a vibe. ("Outcome-led headlines outperformed feature-led headlines on the pricing page" not "outcome headlines are better.")
- **Evidence** — Why we believe the finding. Hard data is best (test results, conversion deltas, click-through rates). Strong qualitative is acceptable (a direct customer quote, a clear pattern across 5+ interviews). Hand-wavy "felt better" is not.
- **Implication** — What to change in future work because of this finding. Must be actionable. ("Default to outcome-led H1 on pricing pages; A/B feature-led only if outcome can't be quantified.") Vague implications ("we should think about this more") are not acceptable.
- **Linked skills** — Which skills should consume this learning when they run. Use real skill names. A single learning may inform 1-5 skills; if the answer is "everything," the finding is probably too generic — sharpen it.
- **Confidence** — How much should the next reader trust this?
  - **high** — Repeated across 3+ projects, OR backed by a statistically significant test, OR multiple independent customer signals.
  - **medium** — One strong signal (one good test, one decisive project outcome). Worth defaulting to, but worth re-testing.
  - **low** — Hypothesis-grade. One observation, one anecdote, or extrapolation. Worth recording so a future entry can confirm or refute it.

A learning entry is only complete when all six fields are filled. `/cm-compound` rejects writes missing any field.

---

## Worked example

A realistic file showing one category with two entries. Use this as the gold-standard reference when writing or validating a learnings file.

```markdown
---
category: copywriting
last_updated: 2026-05-18
entries_count: 2
---

# Learnings — Copywriting

Captured insights from copywriting projects. Wired skills (`copywriting`,
`copy-editing`, `ad-creative`, `landing-pages`) read this file before
executing and surface relevant entries to the user.

---

## 2026-05-18 — Outcome-led H1 beats feature-led H1 on pricing page

- **Context:** Q2 pricing page rewrite for FlowOps (workflow automation, 50-200 employee SaaS ICP). Tested two H1 variants over 14 days against the live page.
- **Finding:** An outcome-led H1 ("Cut ops handoff time from 6 hours to 45 minutes") outperformed a feature-led H1 ("200+ pre-built ops automation templates") by 31% on pricing-page → trial-signup conversion. Statistical significance reached at day 11.
- **Evidence:** A/B test in Google Optimize, n=4,820 sessions per variant, p < 0.05. Outcome variant: 4.1% conversion. Feature variant: 3.1%. Effect held across desktop and mobile. Customer-interview quotes from prior month showed three of five interviewees referenced "cut handoff time" verbatim — the H1 was their language, not ours.
- **Implication:** Default to outcome-led H1 on conversion-critical pages (pricing, homepage hero, top-of-funnel landers). Only fall back to feature-led when the outcome can't be quantified with a customer-attested number. When writing outcome H1s, pull the number from a real reference customer, not an estimate.
- **Linked skills:** copywriting, copy-editing, page-cro, landing-pages, ad-creative
- **Confidence:** high

---

## 2026-04-02 — "AI-powered" in H1 drops conversion in ops-tooling category

- **Context:** Homepage hero test on FlowOps. Variant A used "AI-powered workflow automation," Variant B used "Workflow automation that doesn't break." Brand voice doc already flagged "no AI claims" but founder wanted to test.
- **Finding:** "AI-powered" hero underperformed the non-AI variant by 18% on homepage → pricing click-through. Bounce rate was 9 points higher on the AI variant.
- **Evidence:** Unbounce split test, n=2,100 sessions per variant, 21 days. CTR to pricing: 6.2% (AI) vs. 7.6% (non-AI). Bounce: 64% vs. 55%. Three exit-survey responses on the AI variant said "looks like another AI tool." Aligns with brand-voice doc's "we are NOT hype-driven" guardrail.
- **Implication:** Honor the brand-voice doc's no-AI guardrail across all top-of-funnel copy. Test "AI" framing only when there is a specific, defensible AI feature being launched — and even then, lead with the outcome, not the AI label. Re-confirm with founder annually; ICP perception of "AI-powered" may shift.
- **Linked skills:** copywriting, brand-voice, ad-creative, copy-editing
- **Confidence:** medium

---
```

---

## How skills consume this

Skills that have been "wired" for v1.7 include a default-on **Prior Learnings Consulted** section (defined in `skills/_TEMPLATE.md`) that performs the following sequence before producing output:

1. **Resolve category file.** Look for `.agents/learnings/<this-skill-name>.md`. If it does not exist, state "No prior learnings in this category yet" and proceed.
2. **Parse entries.** Read the YAML frontmatter to confirm schema version and entries_count. Iterate the level-2 dated entries in reverse-chronological order.
3. **Select relevant entries.** Match against the current request (page type, channel, ICP, copy framework, etc.). Take up to 3 — prefer most-recent, then highest-confidence.
4. **Surface to the user.** In the response, under the literal heading **"Prior learnings considered:"**, list each selected entry as: `- [YYYY-MM-DD] <title> (confidence: <level>) — <one-line summary of implication>`. The user must see how past work informs current output.
5. **Apply or override.** Default behavior is to apply the implications. If the current request requires deviating (different ICP, different stage, different channel), explicitly state which learning is being overridden and why.

This is the consumption contract. Authors of new skills can copy/paste the "Prior Learnings Consulted" section from `_TEMPLATE.md` and rely on this schema being stable.

### Wired skills in v1.7

The following skills ship with the Prior Learnings Consulted section wired by default in v1.7:

- `copywriting`
- `cold-email`
- `positioning`
- `paid-ads`
- `icp-research`

Future releases will roll the section out to all 61 skills. The schema in this file is forward-compatible.

---

## Authoring rules (for `/cm-compound`)

When `/cm-compound` writes to a learnings file, it must:

1. Validate that the proposed entry has all six required fields, non-empty.
2. Validate that `Confidence` is one of `low | medium | high` (lowercase).
3. Validate that `Linked skills` references at least one real skill in `skills/`.
4. Update `last_updated` in the frontmatter to today's date.
5. Increment `entries_count` by 1.
6. Insert the new entry **above** existing entries (reverse-chronological order).
7. Never silently overwrite an existing entry on the same date — append with a disambiguating suffix in the title if needed.

A write that fails any of (1)-(3) must be rejected with a clear error pointing at the missing or malformed field.

---

## Schema evolution

This schema is versioned (`version: 1.0.0` in the frontmatter at the top of this file). Breaking changes — renaming a required field, adding a new required field, changing the entry heading format — require a major-version bump and a migration plan for existing learnings files. Backward-compatible additions (e.g., a new *optional* field) are minor bumps.
