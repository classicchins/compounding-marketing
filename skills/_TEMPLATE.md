---
name: skill-name-here
description: One-sentence description of what this skill does. Triggers - keyword 1, keyword 2, keyword 3.
when_to_use: One sentence beginning "When the user…" that names the precise situation in which this skill should be auto-selected. Used by the model's skill-routing layer and surfaced in `/cm-*` slash-command help.
kind: skill        # one of: skill (default, content/research) | workflow (orchestrating cm-flow-*) | lifecycle (cm-setup, cm-uninstall)
metadata:
  version: 1.0.0
---

<!--
v1.8 frontmatter contract (validated by scripts/validate-skills.js):

  - `name`, `description`, `metadata.version` are required on every skill.
  - `when_to_use` is required on every v1.8 skill — it disambiguates skills with overlapping triggers
    and is consumed by the routing layer. Keep it to one sentence, beginning with "When the user…".
  - `kind` is required on workflow + lifecycle skills, optional (defaults to `skill`) on content skills.
    The three legal values are `skill`, `workflow`, `lifecycle`. The validator is kind-aware via
    `validateLite()` — workflows and lifecycle skills run a lighter section gate than content skills.
  - For sub-agent specialist skills (dispatched by an orchestrator), include the word `sub-agent` or
    `specialist` in `description`, set `when_to_use` to "When orchestrator <X> needs <Y>", and add the
    optional `## Sub-agent contract` section under Initial Assessment (see references/sub-agent-dispatch.md §8).
-->


# Skill Title (Human-Readable)

You are a [role/persona — e.g., "B2B SaaS pricing strategist with 10+ years experience"]. Your goal is to [primary outcome this skill produces — e.g., "design pricing tiers that maximize revenue per visitor while preserving conversion"]. You [philosophy / how you think — e.g., "anchor on customer willingness-to-pay, not cost-plus economics. Use real customer language. Test before you launch."].

[1-3 paragraph expansion: what this skill is good for, when to invoke it, what the output looks like at a glance. Establish authority — cite the framework or thinker the skill is built on if applicable, e.g., April Dunford's Obviously Awesome, JTBD, Strategyzer Value Proposition Canvas. Aim for 40-80 lines of role-establishing prose.]

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. If not, ask the user to run the `cm-context` skill first.
2. **[Skill-specific context check]** — e.g., for a CRO skill: "Check for analytics access. Without baseline conversion data, recommendations are guesses."
3. **[Skill-specific context check]** — e.g., for a copywriting skill: "Check for ICP/positioning docs. Without them, copy will be generic."

### Diagnostic Questions

Ask the user 5-10 of these before doing work. Keep them tight:

1. **[Question 1 — scope]** — e.g., "Is this for a new product launch or an existing page rewrite?"
2. **[Question 2 — audience]** — e.g., "Who is the primary persona? Decision-maker, end-user, or both?"
3. **[Question 3 — goal/metric]** — e.g., "What metric will this move? Be specific (e.g., 'increase trial-to-paid by 20%')."
4. **[Question 4 — constraints]** — e.g., "Brand voice guardrails? Regulated industry? Existing assets to reuse?"
5. **[Question 5 — timeline]** — e.g., "When does this need to ship? One week vs. one quarter changes the approach."
6. **[Question 6 — current state]** — e.g., "What's working today? What's failing?"
7. **[Question 7 — prior attempts]** — e.g., "What have you tried before that didn't work? Why not?"

If the user can't answer the critical ones, **stop and clarify** before producing output. Do not invent context.

---

## Sub-agent contract *(specialists only — optional for normal skills)*

> Include this section only if `kind: skill` and `description` includes the phrase `sub-agent` or `specialist`. Generalist content skills can omit it entirely.

For a specialist skill dispatched by an orchestrator (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`), document the three contract surfaces explicitly. The canonical reference is [`references/sub-agent-dispatch.md`](../../references/sub-agent-dispatch.md).

1. **Expected brief shape.** Which fields of the §2 brief this specialist requires (`task`, `context_refs`, `scope`, `user_inputs`, `peers`, `time_budget_minutes`, `output_format`). If any are mandatory beyond the four required-of-all-specialists, list them and the failure mode if missing.
2. **Return shape.** The exact JSON (or markdown) payload this specialist emits — `status`, `specialist`, `schema_version`, `summary`, `findings[]`, `recommendations[]`, `open_questions[]`, `missing[]`. Specialists must conform to §3.
3. **Time budget.** Soft cap in minutes (typical: 3-7 minutes). Specialists must self-limit; orchestrators do not kill long-runners but warn.

Specialists **must not** ask the user follow-up questions. If a brief is incomplete, return `status: "incomplete"` with `missing` populated and let the orchestrator decide.

---

## Prior Learnings Consulted

> **Wired by default in v1.7 (unchanged in v1.8) for:** `copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`.
> Other skills may include this section optionally. v1.8 added the opt-in `cm-learnings-researcher` specialist for ad-hoc cross-category retrieval — it is *not* a replacement for in-skill wiring. The consumption contract is defined in [`skills/_LEARNINGS_SCHEMA.md`](_LEARNINGS_SCHEMA.md) and must be followed verbatim — wired skills parse by label, but bullet field names and order must match the schema exactly so future parsers can rely on either dimension.

Before producing output, this skill consults `.agents/learnings/<this-skill-name>.md`. This is how marketing knowledge compounds across projects: prior findings about what works (and what doesn't) for *this category of work* directly inform the current run.

**Execute this sequence before the Process section runs.** Do not skip — even if learnings exist, they must be surfaced so the user can override.

### Step 1: Resolve the category file

Look for `.agents/learnings/<this-skill-name>.md` (e.g., `.agents/learnings/copywriting.md`).

- **If the file does not exist:** state `No prior learnings in this category yet — proceeding from first principles.` Continue to the Process section.
- **If the file exists but has zero entries:** treat as above.
- **If the file exists with entries:** proceed to Step 2.

### Step 2: Parse the schema

Read the YAML frontmatter. Confirm that `entries_count` matches the actual number of `## YYYY-MM-DD` headings. If the file is malformed, state the inconsistency and continue without applying its entries — do not silently use bad data.

### Step 3: Select up to 3 relevant entries

Iterate entries in **reverse-chronological order**. For each, judge relevance against the current request: page type, channel, ICP, copy framework, stage, persona, deliverable type. Take **up to 3** — prefer most-recent first, then highest-confidence.

A learning is relevant if its `Implication` would meaningfully change *this* deliverable. If nothing meaningfully changes, take zero.

Bullet fields beyond the six required are safe to ignore — the schema is forward-compatible.

### Step 4: Surface them to the user

In your response, **before** producing the deliverable, include a section with the literal heading **`Prior learnings considered:`** and list each selected entry exactly as:

```
- [YYYY-MM-DD] <title> (confidence: <level>) — <one-line summary of implication>
```

If you selected zero entries, write: `Prior learnings considered: none relevant to this request.`

This is non-negotiable. The user must see how past work informed the output, even if the answer is "nothing applied."

### Step 5: Apply or explicitly override

Default behavior: **apply** the implications of every selected entry. If the current request requires deviating (different ICP, different stage, different channel, the prior learning is wrong), state the override inline:

> Overriding the 2026-XX-XX learning on \<topic\> because \<specific reason\>. New approach: \<what you're doing instead\>.

Then proceed to Process. The override must name the entry by date and reason — vague hand-waves like "this case is different" are not acceptable.

---

## Process

The core workflow. 5-10 numbered steps. Each step has: what to do, why it matters, decision criteria, gotchas.

### Step 1: [Action verb + object]

[2-4 paragraphs explaining the step. Be concrete — give frameworks, formulas, or rubrics where applicable.]

**How to do it:**
- Bullet
- Bullet
- Bullet

**Decision criteria:**
- If [condition] → [action]
- If [condition] → [different action]

**Common gotcha:** [What goes wrong here and how to avoid it.]

---

### Step 2: [Action verb + object]

[Same structure as Step 1.]

---

### Step 3: [Action verb + object]

[Same structure.]

---

### Step 4: [Action verb + object]

[Same structure.]

---

### Step 5: [Action verb + object]

[Same structure.]

[Continue for as many steps as the skill needs — typically 5-10. Don't pad. Each step should be load-bearing.]

---

## Output Format

The deliverable structure. Always provide a fenced markdown template the user can copy.

```markdown
# {{Title}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Review / Approved

---

## [Section 1 of the deliverable]

[What goes here, with placeholders.]

## [Section 2]

...

## [Section N]

...

---

## Next Steps

- [ ] [Concrete action 1]
- [ ] [Concrete action 2]
- [ ] [Concrete action 3]
```

[Optionally include a second fenced block showing a *different* output format for a different sub-use-case (e.g., "Quick version" vs. "Full version").]

---

## Quality Bar

A skill output is "done" when:

- [ ] [Concrete completion criterion 1 — measurable, not vague]
- [ ] [Concrete completion criterion 2]
- [ ] [Concrete completion criterion 3]
- [ ] [Concrete completion criterion 4]
- [ ] [Concrete completion criterion 5]
- [ ] All sections of the output template are filled — no `{{placeholders}}` remain
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (no contradictions)
- [ ] At least one specific, falsifiable claim per section (no generic advice)

### Common Mistakes

1. **[Mistake name]** — [What it looks like in practice]. **Why it happens:** [Root cause — usually a shortcut or misunderstanding]. **Fix:** [Concrete corrective action].
2. **[Mistake name]** — [Description]. **Why it happens:** [Root cause]. **Fix:** [Action].
3. **[Mistake name]** — [Description]. **Why it happens:** [Root cause]. **Fix:** [Action].
4. **[Mistake name]** — [Description]. **Why it happens:** [Root cause]. **Fix:** [Action].
5. **[Mistake name]** — [Description]. **Why it happens:** [Root cause]. **Fix:** [Action].

[Aim for 5-8 common mistakes. These are the most valuable part of the skill — they encode hard-won learnings that prevent re-mistakes.]

---

## Examples

Two or more worked examples. Use realistic B2B SaaS scenarios — not toy data. Include both inputs (what the user gave you) and outputs (what you produced). Keep each example tight and self-contained.

### Example 1: [Scenario name — e.g., "Series A SaaS launching a self-serve tier"]

**Context:**
- Company: [Made-up but plausible — "Loomly, a marketing analytics tool, $4M ARR, 18 employees"]
- Goal: [Specific — "Convert 5% of free users to paid within 30 days"]
- Constraint: [Specific — "No engineering bandwidth for 2 quarters"]

**Input from user:**
> [Paste a realistic short brief, 3-5 sentences.]

**Output (abbreviated):**

```markdown
[Show a concrete excerpt of what the deliverable looks like for this case. Don't show the full template — show enough that the reader sees how this skill responds to the input.]
```

**Why this works:** [1-2 sentences explaining the key decision in this example.]

---

### Example 2: [Different scenario — e.g., "Enterprise B2B re-positioning after losing a deal to a new competitor"]

**Context:**
- Company: [Different made-up profile]
- Goal: [Different]
- Constraint: [Different]

**Input from user:**
> [Realistic brief.]

**Output (abbreviated):**

```markdown
[Concrete excerpt for this different case.]
```

**Why this works:** [1-2 sentences.]

---

## Related Skills

Chain these skills together for compounding outcomes. Each link explains *when* to use the related skill.

- **[`related-skill-1`](../related-skill-1/SKILL.md)** — Use *before* this skill when [condition]. Provides [what input it produces for this skill].
- **[`related-skill-2`](../related-skill-2/SKILL.md)** — Use *after* this skill when [condition]. Takes [output of this skill] and turns it into [next deliverable].
- **[`related-skill-3`](../related-skill-3/SKILL.md)** — Use *alongside* this skill when [condition]. Complementary perspective on [adjacent area].

---

## References

[Optional. Cite the frameworks, books, articles, or thinkers this skill is built on. Builds credibility and gives the user paths to deeper learning.]

- [Source 1] — [why it's relevant]
- [Source 2] — [why it's relevant]
