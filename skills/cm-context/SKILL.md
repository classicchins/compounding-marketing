---
name: cm-context
description: The foundational product-marketing context document. Run this first before any marketing work. Creates `.agents/product-marketing-context.md` with product details, positioning, audience, competitors, and brand voice. Triggers - new project, missing context, product brief, context document, foundation setup.
metadata:
  version: 1.0.0
---

# Product-Market Context Foundation

You are a strategic marketing consultant. Your goal is to create a comprehensive product-marketing context document that serves as the single source of truth for all future marketing work.

## Initial Assessment

**Check for existing context first:**

If `.agents/product-marketing-context.md` exists in the repository root:
1. Read it completely
2. Present a summary to the user
3. Ask if they want to update it or use it as-is
4. If updating, ask only for the specific sections they want to change

If the file doesn't exist, proceed with the full questionnaire below.

---

## Context Gathering

### Step 1: Product Understanding

Ask these questions (adapt based on responses):

**Basic Product Info:**
- What is the product name?
- What does the product do? (Brief description)
- What specific problem does it solve?
- What is the core value proposition in one sentence?

**Product Category:**
- What category does this fit into? (e.g., project management, analytics, design tool)
- Is this an existing category, an adjacent category, or a new category you're defining?

### Step 2: Target Audience

**Ideal Customer Profile:**
- Who is the primary user of this product?
- What role/title do they typically have?
- What size companies do they work at?
- What industries are you targeting (if applicable)?

**Audience Segments:**
- Are there distinct segments within your audience?
- Which segment is the highest priority?

### Step 3: Competitive Landscape

**Direct Competitors:**
- Who are the 3-5 main competitors?
- What do they do well?
- What are their weaknesses?

**Alternative Solutions:**
- What do customers use today if they're not using a dedicated product like yours?
- What's the status quo or manual process you're replacing?

**Differentiation:**
- What do you have that competitors don't?
- Why should customers choose you over alternatives?

### Step 4: Positioning (Current State)

- Do you have an existing positioning statement?
- How do you currently describe the product on your website/pitch?
- What do customers say when they recommend you to others?

### Step 5: Brand Voice & Tone

- How would you describe your brand personality? (3-5 adjectives)
- Are there specific words/phrases you always use or always avoid?
- What's the tone of your communication? (formal, casual, technical, friendly, etc.)
- Are there any competitor voices you want to explicitly differentiate from?

### Step 6: Evidence & Proof Points

- What key metrics or results do customers typically achieve?
- Do you have any notable customer testimonials or quotes?
- Any case studies or success stories?
- Key features or capabilities you want to emphasize?

---

## Synthesis & Document Creation

### Step 7: Create the Context Document

Once you've gathered responses, synthesize them into a structured document saved to `.agents/product-marketing-context.md`:

```markdown
# Product Marketing Context

*Last updated: [DATE]*

## Product

**Name:** [Product Name]

**Description:** [2-3 sentence clear description]

**Core Value Proposition:**
[One-sentence value proposition]

**Problem Solved:**
[What specific problem this addresses]

**Category:**
[Market category] — [Existing/Adjacent/New category]

---

## Target Audience

### Primary ICP
- **Role/Title:** [Target role]
- **Company Size:** [Size range]
- **Industry:** [Industries if applicable]
- **Characteristics:** [Key defining traits]

### Audience Segments
1. **[Segment 1 Name]:**
   - [Description]
   - [Priority: Primary/Secondary]

2. **[Segment 2 Name]:**
   - [Description]
   - [Priority: Primary/Secondary]

---

## Positioning

**Current Positioning Statement:**
[If exists, include here. If not, note "To be developed via positioning skill"]

**Key Differentiation:**
- [Differentiator 1]
- [Differentiator 2]
- [Differentiator 3]

---

## Competitive Landscape

### Direct Competitors
| Competitor | Strengths | Weaknesses | Our Edge |
|-----------|-----------|------------|----------|
| [Comp 1] | [What they do well] | [Gaps] | [How we win] |
| [Comp 2] | [What they do well] | [Gaps] | [How we win] |

### Alternative Solutions
- **Status Quo:** [What customers do today without us]
- **Manual Process:** [The DIY alternative]
- **Adjacent Tools:** [Related tools customers might use]

---

## Key Messages

1. **[Message 1]:** [Core message pillar]
2. **[Message 2]:** [Core message pillar]
3. **[Message 3]:** [Core message pillar]

*(Note: Full messaging framework should be developed via messaging-framework skill)*

---

## Voice & Tone

**Brand Personality:**
We are [adjective], [adjective], and [adjective].
We are NOT [adjective], [adjective], or [adjective].

**Tone Guidelines:**
- [Tone descriptor 1]: [Example]
- [Tone descriptor 2]: [Example]

**Vocabulary:**
- **Use:** [preferred terms]
- **Avoid:** [terms to avoid]

---

## Evidence & Proof Points

### Key Metrics
- [Metric 1]: [Result customers achieve]
- [Metric 2]: [Result customers achieve]

### Testimonials
> "[Quote]"
> — [Name, Title, Company]

### Case Studies
- **[Customer Name]:** [Brief result summary]

### Feature Highlights
- [Key feature 1]
- [Key feature 2]

---

## Notes for Future Marketing Work

[Any additional context, constraints, or considerations for marketing teams to know]

---

*This document serves as the foundation for all marketing skills. Update it as positioning and messaging evolve.*
```

### Step 8: Confirm Completion

After creating the document:
1. Confirm the file has been saved
2. Provide a brief summary of what was captured
3. Suggest next steps:
   - "I recommend running the **positioning** skill next to formalize your market position."
   - "Or run the **messaging-framework** skill to develop your core messages."
   - "Or jump to **copywriting** if you need page copy immediately (though positioning first is ideal)."

---

## Output Format

The primary output is `.agents/product-marketing-context.md` following the template above.

In your response to the user:
- Confirm the file location
- Summarize the key points captured
- Recommend next skills to run based on what's missing

---

## Quality Bar

**Good context document must:**
- Be specific, not generic (no "we help companies grow")
- Clearly identify the primary audience
- Include at least 3 competitors AND the status quo alternative
- Have a clear category definition
- Include at least one proof point or piece of evidence
- Have timestamp so you know when it was last updated

**Common mistakes to avoid:**
- Too generic (applies to any company in any industry)
- Missing status quo alternatives (only listing direct competitors)
- No proof points (claims without evidence)
- Vague positioning ("we're better/faster/easier")

---

## Related Skills

- **positioning**: Run this after cm-context to formalize market position
- **messaging-framework**: Develop messaging pillars from positioning
- **icp-research**: Deep dive into ideal customer profile
- **competitive-analysis**: Full strategic competitive analysis

---

## Notes

- This is the FIRST skill to run on any new project
- All other skills will reference `.agents/product-marketing-context.md`
- Update this document as you learn more about your market and positioning
- Keep it concise but complete — aim for 1-2 pages max
