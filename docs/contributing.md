# Contributing to Compounding Marketing

How to add skills, improve documentation, and help others market better.

## Ways to Contribute

1. **Add new skills** — Got a framework that works? Turn it into a skill
2. **Improve existing skills** — Better examples, clearer processes
3. **Fix documentation** — Typos, unclear sections, missing examples
4. **Share learnings** — What worked for you? Submit to `learnings/`
5. **Report issues** — Bugs, unclear outputs, missing features

---

## How to Add a New Skill

### 1. Check if it fits

**Good skill candidates:**
- Built on a proven framework (not made up)
- Repeatable process (can be documented step-by-step)
- Produces a deliverable (not just advice)
- Fills a gap (not redundant with existing skills)

**Not a good fit:**
- Generic advice ("do better marketing")
- No clear framework
- Highly subjective (no right answer)

### 2. Skill structure

Every skill is a markdown file with this structure:

```markdown
---
name: skill-name
description: One-line description. Triggers - keyword1, keyword2, keyword3.
metadata:
  version: 1.0.0
---

# Skill Title

You are a [role]. Your goal is to [outcome].

## Initial Assessment

**Check for existing context first:**
1. Read `.cm-context` if it exists
2. Read relevant deliverables
3. Gather inputs needed

---

## The Framework

[Explain the framework or methodology this skill uses]

Source: [Author/Book if applicable]

---

## Process

### Step 1: [Name]
[What to do]

### Step 2: [Name]
[What to do]

### Step 3: [Name]
[What to do]

---

## Output Format

[Template for the deliverable]

---

## Quality Bar

**Good [skill output] must:**
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

**Common mistakes:**
- [Mistake 1]
- [Mistake 2]

---

## Related Skills

- **skill-name**: [When to use]
- **skill-name**: [When to use]
```

### 3. Example with real output

**Critical:** Include a full example output using a real (or realistic) company.

We use **AuthorityMax** as the example throughout the plugin. If your skill is general-purpose, use AuthorityMax. If it's specific to a different business type, use a realistic example.

**Bad:** "The output will look like this: [description]"

**Good:** Full markdown example with real copy, real numbers, real specifics.

### 4. Quality standards

**Every skill must:**
- Start with clear prerequisites (what's needed before running)
- Follow a step-by-step process
- Output a deliverable to `deliverables/[skill-name].md`
- Include quality bar (what makes "good" output)
- List common mistakes (what to avoid)
- Reference related skills (what to run next)

**Writing style:**
- Short sentences (under 20 words)
- Active voice (not passive)
- No AI slop (avoid "comprehensive", "seamless", "robust", "leverage", "cutting-edge")
- Specific (not vague)

### 5. Submit a PR

1. Fork the repo
2. Add skill file to `skills/[skill-name]/SKILL.md`
3. Add example output to `skills/[skill-name]/examples/`
4. Update `README.md` (add to skill list)
5. Open PR with description:
   - What the skill does
   - What framework it's based on
   - Example use case

---

## How to Improve Existing Skills

**Found a skill that could be better?**

1. Clearer process steps
2. Better example outputs
3. Additional frameworks
4. Quality bar refinements

**Submit a PR:**
- Explain what you improved and why
- Include before/after if applicable

---

## How to Improve Documentation

**Found unclear docs?**

1. Open an issue describing the confusion
2. Or submit a PR with clarification
3. Real-world examples always help

**Documentation lives in:**
- `docs/` — User-facing guides
- `skills/[skill]/SKILL.md` — Skill documentation
- `README.md` — Plugin overview

---

## How to Share Learnings

**Discovered a pattern that works?**

Submit to the learnings library:

1. Create `learnings/[category].md` if it doesn't exist
2. Add your learning with:
   - Context (what you were doing)
   - What you learned
   - Evidence (data if available)
   - Recommendation for future

**Example:**

```markdown
# Learnings: Copywriting

## Outcome-Focused Headlines Outperform Feature-Focused

**Context:** Tested homepage headlines for AuthorityMax

**Test:**
- Variant A: "AI-Powered LinkedIn Content Platform"
- Variant B: "Write LinkedIn Posts in 60 Seconds"

**Result:** Variant B won (+28% trial signups)

**Learning:** Lead with customer outcome (time saved), not product category

**Recommendation:** Always test outcome-focused vs feature-focused headlines
```

---

## How to Report Issues

**Found a bug or unclear output?**

Open a GitHub issue with:

1. **What you expected**
2. **What happened instead**
3. **Steps to reproduce**
4. **Skill name** (if applicable)
5. **Screenshots or examples** (if helpful)

**Issue template:**

```
**Skill:** [skill-name]

**Expected:**
[What should have happened]

**Actual:**
[What happened instead]

**Steps:**
1. Run skill with [input]
2. Observed [output]

**Context:**
- Claude Code / Claude Desktop / ChatGPT
- Version: [if known]
```

---

## Code of Conduct

**Be helpful:**
- Assume good intent
- Provide context when disagreeing
- Focus on improving the plugin, not proving you're right

**Be respectful:**
- No gatekeeping ("you don't understand marketing")
- No shaming ("this is obvious")
- Constructive feedback only

**Be specific:**
- "This is bad" → Not helpful
- "This output is vague. Here's a specific example..." → Helpful

---

## Skill Quality Checklist

Before submitting a new skill, check:

- [ ] Frontmatter includes name, description, triggers, version
- [ ] Framework is cited (source/author if applicable)
- [ ] Process is step-by-step (numbered, actionable)
- [ ] Output template is included
- [ ] Quality bar is defined (what makes "good" output)
- [ ] Common mistakes are listed
- [ ] Related skills are referenced
- [ ] Real example output is included (using AuthorityMax or realistic company)
- [ ] No AI slop language (no "comprehensive", "seamless", "robust")
- [ ] Sentences are short (under 20 words)
- [ ] Deliverable file path is specified

---

## Recognition

**Contributors will be:**
- Listed in `CONTRIBUTORS.md`
- Credited in skill files (if you authored/improved)
- Thanked in release notes

**Top contributors get:**
- Early access to new skills
- Input on plugin roadmap
- Shoutouts on Twitter / LinkedIn

---

## Questions?

- **GitHub Discussions:** [github.com/classicchins/compounding-marketing/discussions](https://github.com/classicchins/compounding-marketing/discussions)
- **Twitter:** [@classicchins](https://twitter.com/classicchins)
- **Email:** hey@compoundingmarketing.com

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

See `LICENSE` for full terms.
