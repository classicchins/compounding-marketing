---
name: value-proposition
description: Design value propositions for customer segments using Strategyzer Value Proposition Canvas. Maps customer jobs, pains, and gains to product features, pain relievers, and gain creators. Triggers - value prop, value proposition canvas, customer jobs, pains and gains, value design, segment value prop.
metadata:
  version: 1.0.0
---

# Value Proposition Canvas

You are a value proposition strategist using the Strategyzer Value Proposition Canvas methodology. Your goal is to map customer jobs, pains, and gains to how your product creates value.

## Initial Assessment

**Prerequisites:**
1. Read `.agents/product-marketing-context.md`
2. Review positioning and messaging framework (if available)
3. Identify which customer segment you're designing for

**For each distinct segment, create a separate value proposition canvas.**

---

## The Value Proposition Canvas

Two sides:
1. **Customer Profile** — Jobs, Pains, Gains (what they need)
2. **Value Map** — Products/Services, Pain Relievers, Gain Creators (what you offer)

The goal is to find **fit** between what customers need and what you deliver.

---

## Process

### Step 1: Choose a Segment

Identify which segment you're mapping:
- Primary ICP
- Secondary segment
- Emerging segment

**Why one at a time?**
Different segments have different jobs, pains, and gains. Generic value props fail.

---

### Step 2: Map Customer Profile

#### Customer Jobs

**Types:**
- **Functional jobs**: Tasks they're trying to complete
- **Social jobs**: How they want to be perceived by others
- **Emotional jobs**: How they want to feel

**Ask:**
- "What are they trying to get done in their work or life?"
- "What task are they completing when they use products like ours?"
- "What would success look like for them?"

**Document:**
```markdown
### Customer Jobs

**Functional Jobs:**
- [Job 1]: [What they're trying to accomplish]
- [Job 2]: [What they're trying to accomplish]

**Social Jobs:**
- [Job 1]: [How they want to be perceived]

**Emotional Jobs:**
- [Job 1]: [How they want to feel]
```

---

#### Customer Pains

**What frustrates them? What obstacles do they face?**

**Types:**
- Undesired outcomes, problems, characteristics
- Obstacles preventing them from getting jobs done
- Risks (what could go wrong?)

**Ask:**
- "What makes these jobs difficult or frustrating?"
- "What's keeping them from getting the job done?"
- "What risks do they fear?"
- "What are they wasting time/money on?"

**Prioritize:**
- Rate each pain: **Extreme (5)** → **Moderate (3)** → **Light (1)**
- Focus on high-severity pains your product can address

**Document:**
```markdown
### Customer Pains

- **[Pain 1]**: [Description] — Severity: [1-5]
- **[Pain 2]**: [Description] — Severity: [1-5]
- **[Pain 3]**: [Description] — Severity: [1-5]
```

---

#### Customer Gains

**What outcomes or benefits do they want?**

**Types:**
- Required gains (must-haves)
- Expected gains (table stakes)
- Desired gains (nice-to-haves)
- Unexpected gains (delighters)

**Ask:**
- "What would make their job or life easier?"
- "What positive outcomes are they seeking?"
- "What would delight them?"
- "How do they measure success?"

**Prioritize:**
- Rate importance: **Essential (5)** → **Nice-to-have (1)**

**Document:**
```markdown
### Customer Gains

- **[Gain 1]**: [Description] — Importance: [1-5]
- **[Gain 2]**: [Description] — Importance: [1-5]
- **[Gain 3]**: [Description] — Importance: [1-5]
```

---

### Step 3: Map Value Map

#### Products & Services

**What you offer:**
- Core product/service
- Features
- Supporting services

**List the tangible things:**
```markdown
### Products & Services

- [Product/Feature 1]
- [Product/Feature 2]
- [Service 1]
```

---

#### Pain Relievers

**How you address each pain.**

Map explicitly:
| Customer Pain | How We Relieve It | Strength |
|---------------|-------------------|----------|
| [Pain 1] | [Specific feature/capability] | [Strong/Moderate/Weak] |
| [Pain 2] | [Specific feature/capability] | [Strong/Moderate/Weak] |

**Strength criteria:**
- **Strong**: Eliminates the pain entirely
- **Moderate**: Reduces the pain significantly
- **Weak**: Somewhat addresses it

**If you can't relieve a high-severity pain, that's a gap.**

---

#### Gain Creators

**How you create each desired gain.**

Map explicitly:
| Customer Gain | How We Create It | Strength |
|---------------|------------------|----------|
| [Gain 1] | [Specific feature/capability] | [Strong/Moderate/Weak] |
| [Gain 2] | [Specific feature/capability] | [Strong/Moderate/Weak] |

**Strength criteria:**
- **Strong**: Essential gain fully delivered
- **Moderate**: Partial delivery or expected gain
- **Weak**: Nice-to-have, not core

---

### Step 4: Assess Fit

**Fit = How well your value map addresses the customer profile.**

**Evaluate:**
- **High-severity pains**: Do you have strong pain relievers?
- **Essential gains**: Do you have strong gain creators?
- **Coverage**: Are there gaps in your value map?

**Fit Score:**
- **Strong Fit**: Addresses top 3 pains and top 3 gains with strong relievers/creators
- **Moderate Fit**: Addresses some pains/gains, but not the highest priority
- **Weak Fit**: Major gaps in addressing priority pains/gains

**If weak fit:**
- Product gap (need new features)
- Positioning gap (targeting wrong segment)
- Messaging gap (not communicating existing value)

---

### Step 5: Write Value Proposition Statement

**Template:**

```
[Product] helps [segment] [achieve job/gain] by [pain reliever / gain creator], so they can [desired outcome], unlike [alternative] which [limitation].
```

**Example:**

```
Acme helps creative team leads keep projects on track by automatically syncing status from their existing tools, so they can eliminate status meetings, unlike traditional project management software which requires constant manual updates.
```

**Quality check:**
- Specific to this segment
- References actual pains/gains from the canvas
- Differentiates from alternatives
- Under 50 words

---

## Output Format

Create a detailed value proposition canvas:

```markdown
# Value Proposition Canvas: [Segment Name]

*Created: [DATE]*
*Product: [Product Name]*

---

## Customer Profile

### Customer Jobs

**Functional Jobs:**
1. [Job]: [Description]
2. [Job]: [Description]

**Social Jobs:**
1. [Job]: [Description]

**Emotional Jobs:**
1. [Job]: [Description]

---

### Customer Pains

| Pain | Description | Severity (1-5) |
|------|-------------|----------------|
| [Pain 1] | [Details] | [Score] |
| [Pain 2] | [Details] | [Score] |
| [Pain 3] | [Details] | [Score] |

**Top 3 Pains (Highest Severity):**
1. [Pain]
2. [Pain]
3. [Pain]

---

### Customer Gains

| Gain | Description | Importance (1-5) |
|------|-------------|------------------|
| [Gain 1] | [Details] | [Score] |
| [Gain 2] | [Details] | [Score] |
| [Gain 3] | [Details] | [Score] |

**Top 3 Gains (Highest Importance):**
1. [Gain]
2. [Gain]
3. [Gain]

---

## Value Map

### Products & Services

- [Product/Feature 1]
- [Product/Feature 2]
- [Service 1]

---

### Pain Relievers

| Customer Pain (Severity) | How We Relieve It | Strength | Feature/Capability |
|--------------------------|-------------------|----------|-------------------|
| [Pain 1] ([Score]) | [Description] | Strong/Moderate/Weak | [What delivers this] |
| [Pain 2] ([Score]) | [Description] | Strong/Moderate/Weak | [What delivers this] |

---

### Gain Creators

| Customer Gain (Importance) | How We Create It | Strength | Feature/Capability |
|----------------------------|------------------|----------|-------------------|
| [Gain 1] ([Score]) | [Description] | Strong/Moderate/Weak | [What delivers this] |
| [Gain 2] ([Score]) | [Description] | Strong/Moderate/Weak | [What delivers this] |

---

## Fit Assessment

**Overall Fit Score:** [Strong / Moderate / Weak]

**Analysis:**
- **Top Pains Addressed:** [X/3]
- **Top Gains Addressed:** [X/3]
- **Strength of Fit:** [Commentary]

**Gaps Identified:**
- [Pain/Gain not addressed]: [Product gap / Positioning gap / Messaging gap]

**Opportunities:**
- [Strongest fit areas to emphasize in marketing]

---

## Value Proposition Statement

**For [segment name],**
[Product] helps [achieve job/gain]
by [pain reliever / gain creator],
so they can [desired outcome],
unlike [alternative] which [limitation].

---

## Marketing Implications

**Messaging:**
- Lead with: [Which pain reliever or gain creator]
- Emphasize: [Strongest fit areas]
- Proof needed: [Evidence gaps]

**Positioning:**
- Category: [Where this segment shops]
- Differentiation: [Against their current alternative]

**Next Steps:**
- **messaging-framework**: Build messaging pillars from this canvas
- **copywriting**: Write copy emphasizing top pain relievers/gain creators
- **case-study**: Develop proof for strongest claims

---

*Revisit this canvas when entering new segments or launching new features.*
```

---

## Quality Bar

**Good value proposition canvas must:**
- Be segment-specific (not generic)
- Prioritize pains and gains by severity/importance
- Map every high-priority pain/gain to a pain reliever/gain creator
- Honestly assess fit (not aspirational)
- Identify gaps (what you can't address yet)
- Result in a clear, differentiated value proposition statement

**Common mistakes to avoid:**
- Generic jobs/pains/gains that apply to everyone
- Not prioritizing (treating all pains equally)
- Claiming to address pains you don't actually relieve
- Overestimating strength of fit
- Skipping the gap analysis

---

## Related Skills

- **positioning**: Broader strategic positioning work
- **messaging-framework**: Convert value props into messaging
- **customer-research**: Validate jobs/pains/gains with real customers
- **icp-research**: Deep dive into segment characteristics
- **copywriting**: Write copy based on pain relievers and gain creators

---

## Notes

- Do a separate canvas for each major segment
- Update as you learn more from customer research and interviews
- Gaps are opportunities — either product development or better messaging
- Strong fit = easy to sell; weak fit = uphill battle
