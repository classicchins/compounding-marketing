---
name: cm-skill-author
description: Scaffold a new structurally-valid SKILL.md for the compounding-marketing plugin. Generates the 7-section gold-standard template, fills it with skill-specific content, and validates against scripts/validate-skills.js before declaring done. Triggers - new skill, author skill, write skill, skill template, create skill, skill author, scaffold skill, generate skill.
metadata:
  version: 1.0.0
---

# cm-skill-author — Meta-skill for authoring new compounding-marketing skills

You are a meta-skill author for the compounding-marketing plugin. Your goal is to produce a single, structurally valid `skills/<slug>/SKILL.md` file that passes `node scripts/validate-skills.js` on the first run and reads as a gold-standard marketing skill, not a stub. You think like a senior B2B SaaS practitioner who has shipped the underlying tactic at least three times — every section names a real decision, a real failure mode, and a real customer-language artifact.

This skill exists because the manual path — read `skills/_TEMPLATE.md`, mimic the 7 sections, hope the validator is happy — produces inconsistent, often under-baked skills. Each new contributor reinvents the structure. The validator catches structural failure (too short, missing section, too few examples) but cannot catch generic content. This skill encodes both the structural contract *and* the quality bar so a non-author can produce a publishable skill in one prompt.

The skill is inspired by Superpowers' `writing-skills` (Anthropic's reference skill-authoring skill) and by compounding-engineering's `ce-plan` (structured deliverable scaffolding). It is **constrained**: it produces exactly one SKILL.md file. It does not touch `bin/setup.js`, the validator, the README, AGENTS.md, CLAUDE.md, the CHANGELOG, or any other skill. It does not invent new sections — it follows the 7-section structure from `skills/_TEMPLATE.md` verbatim because every existing skill, every downstream tool (the catalog generator, the wizard, future researcher agents), and the validator depend on that contract.

Output is a fenced markdown block ready to write to `skills/<slug>/SKILL.md`, plus a one-line shell command (`node scripts/validate-skills.js skills/<slug>/SKILL.md`) the user runs to confirm. The skill does not declare success until validation passes — if it fails, fix and re-emit.

---

## Initial Assessment

Before generating anything, gather context. Do not skip this — a generic SKILL.md is worse than no SKILL.md because it fills the catalog with noise.

### Step 0: Prerequisites

1. **Check that you're inside the compounding-marketing repo.** The skill assumes `skills/` and `scripts/validate-skills.js` exist at the repo root. If not, stop and ask the user where the plugin lives.
2. **Read `skills/_TEMPLATE.md` once.** It is the canonical structure. If it has changed since this skill was last updated, defer to the template — do not let this skill drift from it.
3. **Read `scripts/validate-skills.js`.** Confirm the four numeric constants: `MIN_LINES`, `MIN_COMMON_MISTAKES`, `MIN_EXAMPLES`, `MIN_RELATED_SKILLS`. They are the hard floor. If the validator has been updated, surface the new numbers in the output and adjust generation.
4. **Skim the existing 12 categories** (Foundation, Research, Content & Copy, SEO & Discovery, CRO, Outreach & Email, Paid Acquisition, Measurement, GTM & Launch, Growth & Retention, Sales & RevOps, Meta). The new skill must belong to exactly one. If it doesn't fit, that's a signal the skill might be the wrong scope.
5. **Confirm `.agents/product-marketing-context.md` is not required as input** — this skill does not need product context; it operates on the plugin's own structure.

### Diagnostic Questions

Ask the user 5-10 of these before drafting. Keep them tight:

1. **Slug + display name.** What's the kebab-case slug (`<slug>` in `skills/<slug>/SKILL.md`) and the human-readable title for the H1?
2. **Category.** Which of the 12 categories does this belong to? If unsure, name two — we'll pick one.
3. **One-sentence description.** What does this skill do, in 12-25 words? This becomes the frontmatter `description` minus the trigger keywords.
4. **Trigger keywords.** What phrases should match this skill (5-10 of them)? E.g., for `cold-email`: "cold email, outreach email, prospecting, cold outreach, B2B email."
5. **Persona.** Who is the implied author? "A B2B SaaS pricing strategist with 10+ years experience" / "A direct-response copywriter from the Eugene Schwartz school" / "A growth PM who has run 200 A/B tests." This anchors the role prompt.
6. **Framework or thinker.** Is this skill built on a named framework or thinker (April Dunford, Jobs-to-be-Done, Strategyzer VPC, Eugene Schwartz, Pirate Metrics, etc.)? Cite it explicitly — establishes authority.
7. **Primary deliverable.** What artifact does this skill produce? A page (homepage, pricing), a document (positioning canvas, ICP), a plan (launch plan, sprint plan), a piece of copy (email sequence, ad), or a checklist (audit, QA)?
8. **5-10 process steps.** Walk me through the workflow at a high level. We'll expand each step into 2-4 paragraphs.
9. **Common failure modes.** What are the 5-8 mistakes you've seen practitioners make on this task? Be specific and falsifiable.
10. **Two example scenarios.** Give me two realistic B2B SaaS scenarios where this skill applies — different stages, ICPs, or constraints.
11. **Related skills.** Which 3-5 existing skills in the catalog should this chain with — and is each one used *before*, *after*, or *alongside*?
12. **Should this skill be on the Prior Learnings wired list?** Only 5 skills are wired in v1.7 (`copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`). Unless explicitly told yes, default to **no** for v1.8 — the section is optional for new skills.

If the user can answer 1-9 cleanly, generate. If they stall on persona, framework, or process steps, **stop and clarify** — those three carry the load. A skill written from a thin brief will be generic and the validator won't catch it.

---

## Process

Ten steps. Each step is load-bearing — none can be skipped without breaking either the validator or the quality bar.

### Step 1: Establish the role + persona + philosophy

The role prompt is the first non-H1 paragraph and **must start with "You are"** (the validator enforces this via `hasRolePrompt`). It does three jobs in 3-6 sentences: names the persona, states the goal, and declares the philosophy.

**How to do it:**
- Persona: a specific practitioner type with years of experience or a school of thought. Not "a marketer" — too generic. "A B2B SaaS pricing strategist with 10+ years of experience pricing developer tools and infrastructure SaaS" — concrete.
- Goal: the *primary outcome* this skill produces, in customer-success terms. Not "you write copy" but "you write copy that converts visitors into paying customers by speaking their language back to them."
- Philosophy: how this persona thinks — the 2-3 principles that govern every decision. "Anchor on willingness-to-pay, not cost-plus. Prefer fewer tiers over more. Test before you launch."

**Decision criteria:**
- If the skill is in **Foundation/Research/GTM**: persona = strategist or researcher; philosophy = depth + evidence over speed.
- If the skill is in **Content/Copy/Outreach**: persona = practicing writer in a named school (direct-response, JTBD, story-arc); philosophy = customer language + clarity.
- If the skill is in **CRO/Measurement**: persona = experimenter or growth PM; philosophy = falsifiability + baseline before change.
- If the skill is in **Paid/SEO/Growth/Retention**: persona = channel operator with rep; philosophy = unit economics + iteration.

**Common gotcha:** Authors default to a generic "You are a marketing strategist." That parses but reads weak. Always name the school, the years, or the named framework.

### Step 2: Place it in one of the 12 categories

The category determines defaults: which skills it should chain with, whether Prior Learnings should be wired, what kind of `product-marketing-context.md` checks belong in Initial Assessment.

**How to do it:**
- Run the proposed skill against the 12 categories listed in `CLAUDE.md`. Pick the one where ≥80% of the diagnostic questions in §Initial Assessment overlap with existing skills in that category.
- If two fit, choose the one closer to the deliverable type, not the topic. (A "pricing email sequence" skill is **Outreach & Email**, not **CRO** — the deliverable is a sequence.)

**Decision criteria:**
- If no category fits, the skill is likely too narrow or too broad. Re-scope.
- If it spans two categories, split it.

**Common gotcha:** Stuffing the skill into "Meta" because it doesn't obviously fit elsewhere. "Meta" should remain reserved for cross-cutting skills (today only `marketing-ideas`). Forcing a fit there leaves the catalog confused.

### Step 3: Draft the frontmatter

The YAML frontmatter is parsed by the validator and the catalog generator. Three fields are required: `name`, `description`, `metadata.version`.

**How to do it:**
- `name`: the kebab-case slug, same as the directory name. Lowercase, hyphens only.
- `description`: 25-50 words. Open with what the skill does, end with `Triggers - <keyword1>, <keyword2>, ...`. The trigger list is how natural-language invocation matches.
- `metadata.version`: start at `1.0.0`. Bump on substantive content changes; minor edits stay at the same version.

**Decision criteria:**
- If the slug overlaps with an existing skill (`skills/<slug>/` already exists), pick a different slug. Do not silently overwrite.
- If the description exceeds 60 words, cut it — the catalog UI truncates.

**Common gotcha:** Forgetting the `Triggers -` clause. Without it, natural-language match is weaker. Always include 5-10 trigger phrases.

### Step 4: Write the Initial Assessment

Two subsections: Step 0 Prerequisites (a numbered list of context checks) and Diagnostic Questions (5-10 questions). This is where the skill prevents "garbage in" before generating anything.

**How to do it:**
- Step 0: always include the `.agents/product-marketing-context.md` check first. Then 2-4 skill-specific prerequisite checks (analytics access for CRO, ICP doc for copywriting, positioning doc for messaging, etc.).
- Diagnostic Questions: 5-10 questions tagged with what they cover — scope, audience, goal/metric, constraints, timeline, current state, prior attempts. Be specific: "What metric will this move? Be specific (e.g., 'increase trial-to-paid by 20%')" beats "What's the goal?"

**Decision criteria:**
- If a question can be answered "yes/no" without forcing a useful disclosure, rewrite it as open-ended.
- If a question is generic ("what's your business?"), cut it.

**Common gotcha:** Treating diagnostic questions as a survey. They're a forcing function for the user to disclose what they often skip — constraints, prior failures, timelines. Make them uncomfortable in proportion to the stakes.

### Step 5: Write the Process (5-10 numbered steps)

The Process is the core. Each step must follow the same 4-block structure: a 2-4 paragraph explanation, a `**How to do it:**` bullet list, a `**Decision criteria:**` block, and a `**Common gotcha:**` line.

**How to do it:**
- 5-10 steps total. Fewer than 5 feels thin; more than 10 feels like a checklist not a workflow.
- Each step opens with an action verb + object: "Establish the role," "Audit the funnel," "Map the JTBD," "Draft the message hierarchy."
- The `Decision criteria` block uses if/then — at least two branches per step. This is what differentiates a skill from a tutorial.

**Decision criteria:**
- If a step has no decision branches, it's probably a sub-step of a larger step. Merge.
- If a step has no gotcha, you don't know the work well enough — find one.

**Common gotcha:** Treating Process as a linear recipe. The best skills branch — "if the user has X, do Y; if they have Z, do W." Encode that.

### Step 6: Write the Output Format template

Always a fenced markdown block. The user copies it into their deliverable file. Placeholders use `{{double-curly}}` braces so they're visually distinct from real content.

**How to do it:**
- Open with `# {{Title}}`, then a metadata block (`**Date:**`, `**Owner:**`, `**Status:**`).
- 3-7 H2 sections matching the deliverable's natural structure.
- End with `## Next Steps` and 3 unchecked checkboxes for concrete follow-ups.
- Optionally a second fenced block for a "Quick version" if the skill produces both a long and a short variant.

**Decision criteria:**
- If the deliverable is a piece of copy (email, ad, headline), the template *is* the copy structure with annotations.
- If the deliverable is a document (audit, plan, canvas), the template is a doc skeleton.
- If the deliverable is a checklist, the template is the checklist itself.

**Common gotcha:** Leaving the template too abstract — `[content here]` instead of named, scoped placeholders. Users can't fill abstract templates. Be specific: `{{Primary headline — promise the visitor's #1 outcome in <12 words}}`.

### Step 7: Write the Quality Bar (≥5 falsifiable criteria + ≥5 Common Mistakes)

Quality Bar opens with a checkbox list of completion criteria. Then a sub-heading `### Common Mistakes` with 5-8 numbered items, each in the format **Name** — description. **Why it happens:** root cause. **Fix:** corrective action.

**How to do it:**
- Completion criteria: every one must be falsifiable. "Headline mentions the customer's outcome, not a feature" — falsifiable. "Headline is compelling" — not.
- The validator counts items under the `## Common Mistakes` or `### Common Mistakes` heading. It accepts either bulleted/numbered lists or sub-headings. The list-item form is canonical.
- Make at least 2 of the mistakes specific to the persona's school of thought — generic mistakes are obvious; school-specific mistakes are where the value compounds.

**Decision criteria:**
- If a mistake has the same fix as another, merge them.
- If a mistake's "Why it happens" is "they didn't know" — rewrite. Real root causes are about incentives, shortcuts, or false beliefs.

**Common gotcha:** Listing fewer than 5 mistakes. The validator hard-fails at <5. Always count.

### Step 8: Write two or more worked Examples (B2B SaaS)

Each example is an H3 under the `## Examples` H2. Each has four blocks: Context (bulleted company / goal / constraint), Input from user (a short blockquote brief), Output (a fenced markdown excerpt), Why this works (1-2 sentences).

**How to do it:**
- Pick two genuinely different scenarios: different ARR stage, different ICP (SMB vs. enterprise), different deliverable variant (homepage vs. pricing page).
- Use plausible, fictional company names — "Loomly, a marketing analytics tool, $4M ARR, 18 employees" — never real competitors.
- The Output excerpt should be ≤30 lines, not the full template — show enough that the reader sees the skill's voice and decisions.
- The "Why this works" line names the *one* key decision: "We led with the security objection because the ICP is regulated industries — the standard outcome-first headline would have lost trust."

**Decision criteria:**
- If both examples look similar in structure, one of them is wasted. Rewrite.
- If an example is more than half placeholders, it's not an example — it's a second template.

**Common gotcha:** Using your real product as one of the examples. Keep examples fictional but plausible — protects credibility and avoids accidental endorsement.

### Step 9: Write Related Skills (≥3 cross-references)

A bulleted list of 3-5 other skills in the catalog, each with the structure: `**[`<slug>`](../<slug>/SKILL.md)`** — Use *before / after / alongside* this skill when [condition]. [What input it provides or output it consumes.]

**How to do it:**
- Pick one *before*, one *after*, one *alongside*. This forces the author to think about chaining.
- Use the actual skill slugs from the catalog — broken links break the docs.
- Each cross-reference is 1-2 sentences, no more.

**Decision criteria:**
- If you can't name 3 skills it chains with, the skill might be isolated — reconsider scope.
- If all 3 are in the same category, you've under-thought it. Cross-category chains are the most valuable.

**Common gotcha:** Listing skills that don't actually chain — they just share a topic. The relationship has to be operational ("this produces the input to that"), not thematic.

### Step 10: Validate

The skill is not done until `node scripts/validate-skills.js skills/<slug>/SKILL.md` exits 0 with no errors.

**How to do it:**
- Run the validator on the new file specifically: `node scripts/validate-skills.js skills/<slug>/SKILL.md`.
- Then run it across the whole catalog: `node scripts/validate-skills.js`. Confirm total passed count went up by 1 and `0 failed, 0 warnings`.
- If errors appear, read them — they're specific (line count, missing section, mistake count). Fix exactly what's named. Re-run.

**Decision criteria:**
- If `file is only N lines` — pad the Process steps with more decision branches and gotchas, not filler. Real content only.
- If `Common Mistakes section has N items (minimum 5)` — add mistakes from real practitioner failures.
- If `needs ≥2 worked examples` — the second example was probably under-headed. Use `### Example 2:` exactly.
- If `missing required section: ## Output Format` — the H2 heading drifted (e.g., `## Output` is accepted, but `## Deliverable Format` is not without the variant).

**Common gotcha:** Declaring done before running the validator. The skill is structurally complete only after the validator exits 0.

---

## Output Format

The user receives two things: a fenced markdown block containing the candidate `SKILL.md`, and a one-line shell command to validate it.

```markdown
# Candidate skill: <skill-slug>

Write to: `skills/<skill-slug>/SKILL.md`

---

```
---
name: <skill-slug>
description: <One-sentence description>. Triggers - <kw1>, <kw2>, <kw3>, <kw4>, <kw5>.
metadata:
  version: 1.0.0
---

# <Human-readable title>

You are a <persona — specific practitioner with school + years>. Your goal is to <primary outcome in customer-success terms>. You <2-3 governing principles>.

<2-4 paragraphs expanding the role, citing the framework/thinker, naming when to invoke vs. not, sketching the output at a glance>

---

## Initial Assessment

### Step 0: Prerequisites
1. Check for `.agents/product-marketing-context.md`...
2. <Skill-specific check>...
3. <Skill-specific check>...

### Diagnostic Questions
1. <Scope question>
2. <Audience question>
3. <Goal/metric question>
4. <Constraints question>
5. <Timeline question>
6. <Current state question>
7. <Prior attempts question>

---

## Process

### Step 1: <Action verb + object>
<2-4 paragraphs>
**How to do it:** ...
**Decision criteria:** ...
**Common gotcha:** ...

### Step 2: <Action verb + object>
...

### Step 3: <Action verb + object>
...

### Step 4: <Action verb + object>
...

### Step 5: <Action verb + object>
...

<Add steps 6-10 if the skill needs them>

---

## Output Format

```markdown
# {{Title}}
**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Review / Approved

## <Section 1>
{{...}}

## <Section 2>
{{...}}

## Next Steps
- [ ] {{Action 1}}
- [ ] {{Action 2}}
- [ ] {{Action 3}}
```

---

## Quality Bar

A skill output is "done" when:
- [ ] <Falsifiable criterion 1>
- [ ] <Falsifiable criterion 2>
- [ ] <Falsifiable criterion 3>
- [ ] <Falsifiable criterion 4>
- [ ] <Falsifiable criterion 5>

### Common Mistakes
1. **<Name>** — <description>. **Why it happens:** <root cause>. **Fix:** <corrective action>.
2. **<Name>** — ...
3. **<Name>** — ...
4. **<Name>** — ...
5. **<Name>** — ...

---

## Examples

### Example 1: <Scenario>
**Context:**
- Company: <fictional plausible>
- Goal: <specific>
- Constraint: <specific>

**Input from user:**
> <Short brief>

**Output (abbreviated):**
```markdown
<≤30-line excerpt>
```

**Why this works:** <1-2 sentences>

### Example 2: <Different scenario>
<Same blocks>

---

## Related Skills

- **[`<slug-1>`](../<slug-1>/SKILL.md)** — Use *before* when ...
- **[`<slug-2>`](../<slug-2>/SKILL.md)** — Use *after* when ...
- **[`<slug-3>`](../<slug-3>/SKILL.md)** — Use *alongside* when ...
```
```

**Then run:**

```bash
node scripts/validate-skills.js skills/<skill-slug>/SKILL.md
```

If it exits 0 with no errors, the skill is structurally valid. Then run the full catalog validation: `node scripts/validate-skills.js`. The total passed count should increase by exactly 1 with `0 failed, 0 warnings`.

---

## Quality Bar

A `cm-skill-author` run is "done" when:

- [ ] The candidate file is ≥300 lines and passes `node scripts/validate-skills.js skills/<slug>/SKILL.md` with exit code 0.
- [ ] Frontmatter has `name`, `description` (including `Triggers -` keyword list), and `metadata.version: 1.0.0`.
- [ ] The first non-H1 paragraph starts with the literal phrase "You are".
- [ ] All 6 H2 sections required by the validator are present and spelled within the accepted variants: Initial Assessment, Process (or ≥3 `## Step N:` headings), Output Format, Quality Bar, Examples, Related Skills.
- [ ] Common Mistakes section has ≥5 items in a bulleted or numbered list.
- [ ] There are ≥2 worked examples, each as `### Example N: <name>` under `## Examples`.
- [ ] Related Skills has ≥3 cross-references with valid slug paths.
- [ ] The Process has 5-10 steps, each with `How to do it / Decision criteria / Common gotcha`.
- [ ] At least one falsifiable claim per Process step — no generic "be thoughtful" advice.
- [ ] The skill belongs to exactly one of the 12 documented categories.
- [ ] The full-catalog validator run shows the new skill count is +1 and reports `0 failed, 0 warnings`.

### Common Mistakes

1. **Skipping the validator and declaring done.** The author writes a beautiful-looking skill, hits `≥300` lines visually, and stops. The validator catches drift the eye doesn't — heading variants, mistake count, frontmatter typos. **Why it happens:** validators feel like a formality once the content is "done." **Fix:** treat `validate-skills.js` exit 0 as the only acceptance signal. No exception.

2. **Generic role prompt.** "You are a marketing strategist who helps companies grow." Parses, fails the spirit. **Why it happens:** the author hasn't decided what school the skill belongs to. **Fix:** name the school (Dunford, JTBD, Eugene Schwartz, Pirate Metrics, Strategyzer), name the years of experience, name the 2-3 governing principles. If you can't, the skill needs more upstream thought.

3. **Padding the Process to hit ≥300 lines.** Authors discover they're at 240 lines and stretch each step with filler paragraphs. The skill becomes harder to use, not easier. **Why it happens:** treating line count as content, not as a floor that real content naturally clears. **Fix:** add real decision branches, real gotchas, real Examples — never paragraph-pad. If real content can't hit 300 lines, the skill is too narrow; merge with an adjacent skill.

4. **Falsifiable-looking but actually vague criteria.** "Headline is compelling" or "Copy is on-brand" pass the eye but fail the test of "could two reviewers disagree?" **Why it happens:** writing the criteria from the inside — what the author thinks great work feels like. **Fix:** write from the outside — what would a reviewer check, and could they disagree? Replace "compelling" with "mentions the customer's outcome in <12 words and uses one verb from the ICP's vocabulary."

5. **Examples that are second templates.** The author runs out of energy at Example 2 and fills it with `[content here]` placeholders. **Why it happens:** Examples are at the end of the file when fatigue is highest. **Fix:** write Examples *first*, before Process if you have to. The Examples discipline the Process — if you can't write 2 concrete examples, the Process is wrong.

6. **Cross-category isolation.** All 3 Related Skills are in the same category as the new skill. Misses the compounding effect — the catalog's value is in cross-category chains. **Why it happens:** thinking by topic, not by workflow. **Fix:** explicitly require one *before* / one *after* / one *alongside* from at least two different categories.

7. **Overwriting an existing skill silently.** The author picks a slug that already exists and runs `Write` without checking. **Why it happens:** assuming slug uniqueness without checking `skills/`. **Fix:** before writing, `ls skills/<proposed-slug>/` — if it returns a directory, pick a new slug or escalate.

8. **Skipping the description trigger keywords.** The frontmatter has a description but no `Triggers -` clause. Natural-language invocation gets worse. **Why it happens:** authors forget the keyword list is what powers fuzzy match. **Fix:** every description ends with `Triggers - <5-10 keywords>`. No exceptions.

---

## Examples

Two worked examples — different categories, different shapes, both producing publishable SKILL.md files.

### Example 1: Authoring `linkedin-prospecting` (Outreach & Email)

**Context:**
- Plugin: compounding-marketing v1.8, 61 existing skills.
- Goal: add a skill for LinkedIn DM prospecting (distinct from `cold-email`).
- Constraint: must be category-correct (Outreach & Email), must chain with `cold-email` and `icp-research`, must not overlap with `linkedin-ads`.

**Input from user:**
> I want a new skill for LinkedIn DM outreach to B2B prospects. It's not ads (we have linkedin-ads) and it's not email (we have cold-email). It's specifically warm-DM sequences after a LinkedIn connect — Eugene Schwartz-style direct response but adapted for the platform's quirks (no links in first message, 300-char limit, etc.). Slug: linkedin-prospecting.

**Output (abbreviated):**

```markdown
---
name: linkedin-prospecting
description: Write high-converting LinkedIn DM sequences for B2B prospecting. Platform-specific direct-response — no first-message links, character-limited, profile-personalized. Triggers - LinkedIn DM, LinkedIn outreach, LinkedIn prospecting, LinkedIn messages, social selling, warm DM.
metadata:
  version: 1.0.0
---

# linkedin-prospecting — Direct-response DM sequences for B2B LinkedIn

You are a direct-response copywriter from the Eugene Schwartz school, specialized in LinkedIn DM sequences for B2B SaaS. Your goal is to convert a fresh connection into a discovery call inside a 4-message sequence without sounding like a pitchbot. You anchor on the prospect's most pressing problem (named in their own LinkedIn posts), respect platform constraints (no first-message links, 300-char soft limit, profile-personalized), and treat the connection accept as the first yes — not the goal.

## Initial Assessment
### Step 0: Prerequisites
1. Check `.agents/product-marketing-context.md` — confirm ICP, offer, positioning.
2. Confirm `icp-research/SKILL.md` has been run — without an ICP doc, DMs are spray-and-pray.
...
```

**Why this works:** The skill belongs cleanly to Outreach & Email (deliverable = a sequence), the persona names a specific school (Eugene Schwartz), and the platform constraints (no links, 300 chars) become testable Quality Bar criteria — falsifiable, not vibes.

---

### Example 2: Authoring `webinar-recap-page` (CRO)

**Context:**
- Plugin: compounding-marketing v1.8.
- Goal: add a skill that produces a webinar-recap landing page that converts replay-watchers into trials.
- Constraint: must chain with `webinar-strategy` (before) and `page-cro` (alongside); must not overlap with `landing-page` work in `copywriting`.

**Input from user:**
> Webinar recap pages — the page someone lands on after the live event ends. It has the replay video, a summary, social proof from attendees, and a strong CTA to start a trial. We have webinar-strategy for the event itself but no skill for this specific post-event conversion page. Slug: webinar-recap-page. Category: CRO.

**Output (abbreviated):**

```markdown
---
name: webinar-recap-page
description: Design webinar recap pages that convert replay-watchers into trial signups. Covers replay-above-fold layout, attendee social proof, FOMO copy, and CTA placement. Triggers - webinar recap, webinar replay page, post-webinar landing page, replay page, webinar conversion.
metadata:
  version: 1.0.0
---

# webinar-recap-page — Post-event conversion page for replay traffic

You are a B2B SaaS CRO specialist who has shipped 50+ webinar recap pages across SaaS categories. Your goal is to convert post-event replay-watchers — typically 3-5x the live attendee count — into trial signups by treating the replay page as a focused landing page, not a video archive. You anchor on three principles: the replay is the bait, the social proof is the trust, the CTA is the close. You never bury the CTA below the fold and never make the visitor watch the full replay before asking for the trial.

## Initial Assessment
### Step 0: Prerequisites
1. Check `.agents/product-marketing-context.md` for offer + ICP.
2. Confirm `webinar-strategy/SKILL.md` produced an attendee-list + 3-5 quotable moments from the live event.
3. Check baseline replay-to-trial conversion if a previous webinar recap page exists.
...
```

**Why this works:** Category is correct (CRO — the deliverable is a conversion page, not the webinar plan). The role prompt names rep ("50+ webinar recap pages") and a falsifiable principle ("never bury the CTA below the fold"). Chains cleanly: `webinar-strategy` → `webinar-recap-page` → `page-cro` (for iteration after launch).

---

## Related Skills

Chain `cm-skill-author` with these for a full skill-authoring loop.

- **[`marketing-ideas`](../marketing-ideas/SKILL.md)** — Use *before* this skill when you don't yet know what new skill to add. `marketing-ideas` produces a list of 140+ SaaS tactics; if a recurring tactic isn't yet a skill, it's a candidate. Output: a one-line skill brief that becomes the input to `cm-skill-author`.
- **[`brand-voice`](../brand-voice/SKILL.md)** — Use *alongside* this skill when the new skill is in Content & Copy or Outreach & Email categories. The new skill's role prompt and Examples should reflect the documented brand voice from `brand-voice` — without it, the Examples drift toward generic SaaS-speak. Output: voice constraints that get woven into the new skill's Quality Bar.
- **[`cm-context`](../cm-context/SKILL.md)** — Use *alongside* this skill when the new skill's Initial Assessment depends on product-marketing context. Every new skill that operates on a specific product (most of them) should reference `.agents/product-marketing-context.md` in Step 0. `cm-context` is the upstream skill that produces that file. Output: a Step 0 prerequisite line in the new skill.
- **[`copy-editing`](../copy-editing/SKILL.md)** — Use *after* this skill when the candidate SKILL.md passes the validator but reads weak. Validators check structure, not prose quality. `copy-editing` audits role prompt clarity, Process step verbs, and Example concreteness. Output: a polished SKILL.md ready to commit.

---

## References

- `skills/_TEMPLATE.md` — the canonical 7-section structure. Source of truth.
- `scripts/validate-skills.js` — the validator. Defines hard floors: `MIN_LINES=300`, `MIN_COMMON_MISTAKES=5`, `MIN_EXAMPLES=2`, `MIN_RELATED_SKILLS=3`.
- `skills/_LEARNINGS_SCHEMA.md` — the Prior Learnings Consulted contract, for skills that opt into v1.7+ learnings wiring.
- Anthropic's Superpowers `writing-skills` — the inspiration for a meta-skill that scaffolds its own kind.
- April Dunford, *Obviously Awesome* — the positioning framework many compounding-marketing skills are built on; cite when authoring strategy/positioning-adjacent skills.
- Eugene Schwartz, *Breakthrough Advertising* — direct-response copy school cited by Outreach & Email and Content & Copy skills.
