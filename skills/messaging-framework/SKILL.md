---
name: messaging-framework
description: Convert positioning into actionable messaging pillars with proof points, objection handling, and segment mapping. Builds on positioning work to create a reusable messaging system. Triggers - messaging pillars, core messages, messaging strategy, proof points, message architecture, value messaging.
metadata:
  version: 1.0.0
---

# Messaging Framework Development

You are a strategic messaging consultant. Your goal is to convert positioning into a comprehensive messaging framework that can be used across all marketing channels and customer segments.

## Initial Assessment

**Prerequisites:**
1. Read `.agents/product-marketing-context.md` for context
2. Read the positioning canvas (if available from positioning skill)
3. If positioning hasn't been done, recommend running that skill first

**Positioning is the foundation. Messaging is how you communicate it.**

---

## Process

### Step 1: Extract Core Narrative

From the positioning work, synthesize a 2-3 sentence story that ties everything together.

**Template:**
```
[Audience] struggle with [problem]. Existing [alternatives] force them to [limitation]. [Product] is the [category] that [unique value] by [how/differentiator], so [audience] can [desired outcome].
```

**Example:**
```
Creative teams waste hours on status updates using traditional project management tools. Existing solutions require manual data entry and constant check-ins. Acme is the visual project management tool that automatically syncs status from your existing tools, so creative teams can stay aligned without meetings.
```

This becomes your **Core Narrative** — the story everything else flows from.

---

### Step 2: Define Messaging Pillars

Messaging pillars are the 3-5 core themes that support your positioning.

**Derive from:**
- Unique attributes (from positioning)
- Value propositions
- Key differentiation points

**For each pillar, define:**

```markdown
### Pillar [#]: [Pillar Name]

**Core Claim:** [What we're saying]

**Proof Points:**
- [Evidence 1]: [Specific data, feature, or customer result]
- [Evidence 2]: [Specific data, feature, or customer result]
- [Evidence 3]: [Specific data, feature, or customer result]

**Common Objection:** [What prospects push back with]

**Objection Response:** [How to address it]

**Best For:** [Which audience segment values this most]

**Headline Variations:**
- [Option 1]: [Benefit-focused]
- [Option 2]: [Outcome-focused]
- [Option 3]: [Comparison-focused]
```

**Quality check:**
- Every claim must have at least one proof point
- Pillars should be distinct (minimal overlap)
- Each pillar should map to a unique attribute or value from positioning

---

### Step 3: Map Pillars to Segments

Different segments care about different things.

**Create a segment mapping:**

| Segment | Lead Pillar | Supporting Pillars | Why |
|---------|-------------|-------------------|-----|
| [Segment 1] | [Pillar X] | [Pillar Y, Pillar Z] | [This segment cares most about X because...] |
| [Segment 2] | [Pillar Y] | [Pillar X, Pillar Z] | [This segment cares most about Y because...] |

This tells you which message to lead with for each audience.

---

### Step 4: Develop Proof Points

For every claim, you need evidence.

**Types of proof:**
- **Metrics**: "70% faster deployment"
- **Customer quotes**: "[Quote]" — Name, Title, Company
- **Case studies**: Link to full story
- **Third-party validation**: Awards, certifications, analyst reports
- **Feature specifics**: Concrete capabilities
- **Customer logos**: Notable brands using you

**Audit:**
- Do you have proof for every major claim?
- Are metrics specific and verifiable?
- Are quotes compelling and attributed?

**Identify gaps:**
- Claims without proof → Either find proof or soften the claim
- Weak proof → Note what evidence you need to gather

---

### Step 5: Create Headline Bank

For each messaging pillar, develop 3+ headline variations:

**Types:**
- **Benefit-focused**: "Get [outcome] in [timeframe]"
- **Outcome-focused**: "[Achieve X] without [pain]"
- **Comparison-focused**: "Like [familiar thing], but [key difference]"
- **Problem-focused**: "Stop [pain]. Start [gain]."
- **How-focused**: "How [audience] [achieve outcome]"

**Quality check:**
- Specific, not generic
- Benefit-clear within 5 seconds
- Differentiated (couldn't apply to competitors)

---

### Step 6: Objection Handling

For each messaging pillar, anticipate objections:

**Common objection types:**
- **"We already have something for this"** → Position against status quo
- **"Sounds complicated"** → Emphasize ease of use / time to value
- **"Too expensive"** → ROI / cost of doing nothing
- **"We're not ready"** → Lower barrier to entry
- **"How is this different from [Competitor]?"** → Unique attributes

Document responses that reinforce your positioning.

---

## Output Format

Create a comprehensive messaging framework document:

```markdown
# Messaging Framework: [Product Name]

*Created: [DATE]*

---

## Core Narrative

[2-3 sentence story connecting audience → problem → solution → outcome]

---

## Messaging Pillars

### Pillar 1: [Name]

**Core Claim:**
[What we're saying]

**Proof Points:**
1. **[Evidence type]**: [Specific proof]
2. **[Evidence type]**: [Specific proof]
3. **[Evidence type]**: [Specific proof]

**Common Objection:** [What prospects say]

**Response:** [How to handle it]

**Best For:** [Audience segment]

**Headline Variations:**
- [Option 1]
- [Option 2]
- [Option 3]

---

### Pillar 2: [Name]

[Same structure]

---

### Pillar 3: [Name]

[Same structure]

---

## Segment-Specific Messaging

| Segment | Lead Pillar | Supporting Pillars | Rationale |
|---------|-------------|-------------------|-----------|
| [Segment 1] | [Pillar X] | [Pillars Y, Z] | [Why this order] |
| [Segment 2] | [Pillar Y] | [Pillars X, Z] | [Why this order] |

---

## Proof Point Library

### Metrics
- [Metric 1]: [Value + context]
- [Metric 2]: [Value + context]

### Customer Quotes
> "[Quote]"
> — [Name, Title, Company]

> "[Quote]"
> — [Name, Title, Company]

### Case Studies
- **[Customer Name]**: [Brief result] → [Link to full story]

### Third-Party Validation
- [Award / certification / analyst report]

---

## Objection Handling Guide

| Objection | Response | Reinforce Pillar |
|-----------|----------|------------------|
| "We already have [Alternative]" | [Response] | [Pillar #] |
| "Sounds complicated" | [Response] | [Pillar #] |
| "Too expensive" | [Response] | [Pillar #] |
| "How is this different from [Competitor]?" | [Response] | [Pillar #] |

---

## Message Testing Checklist

For any new message, verify:
- [ ] Aligns with one or more messaging pillars
- [ ] Has at least one proof point
- [ ] Addresses a known customer need or pain
- [ ] Differentiated from competitors
- [ ] Matches brand voice (per cm-context)
- [ ] Clear who it's for (segment-specific or broad)

---

## Next Steps

- **copywriting**: Use these pillars to write page copy
- **case-study**: Develop detailed proof points
- **sales-enablement**: Create sales decks from these messages
- **content-strategy**: Plan content around each pillar

---

*Update this framework as you gather more proof points and customer language.*
```

---

## Quality Bar

**Good messaging framework must:**
- Have 3-5 distinct pillars (not overlapping)
- Every claim backed by at least one proof point
- Clear segment mapping (which message for which audience)
- Objection responses prepared
- Headlines are specific, not generic ("faster" vs. "70% faster deployment")
- Aligned to positioning (not drifting into new claims)

**Common mistakes to avoid:**
- Too many pillars (causes confusion and dilutes positioning)
- Claims without proof (aspirational, not evidence-based)
- Generic headlines that could apply to any competitor
- No segment mapping (treating all audiences the same)
- Ignoring objections (not preparing responses)

---

## Related Skills

- **positioning**: Must be done first — messaging flows from positioning
- **value-proposition**: Detailed value props per segment complement this
- **copywriting**: Messaging framework informs all copy
- **case-study**: Develop proof points for the framework
- **brand-voice**: Ensure messaging matches brand voice guidelines

---

## Notes

- Messaging is NOT positioning — positioning is strategic, messaging is executional
- Pillars should be stable, but proof points and headlines evolve as you learn
- Keep this framework updated as you ship new features and gather customer evidence
- Share this framework with sales, customer success, and content teams
