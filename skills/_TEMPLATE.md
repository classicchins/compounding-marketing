---
name: skill-name-here
description: One-sentence description of what this skill does. Triggers - keyword 1, keyword 2, keyword 3.
metadata:
  version: 1.0.0
---

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
