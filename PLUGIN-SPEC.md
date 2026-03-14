# PLUGIN-SPEC.md — Compounding Marketing Plugin

> Complete specification for Gilfoyle to build. Everything here is intentional.

---

## 1. Plugin Architecture

### Philosophy

**Each unit of marketing work should make subsequent units easier—not harder.**

Traditional marketing accumulates chaos. Every campaign adds complexity. The knowledge gets scattered, the copy gets inconsistent, the positioning drifts. You start every new project from scratch.

Compounding marketing inverts this. 80% is in research and planning, 20% is in execution:
- Research your market deeply before writing a single line of copy
- Document learnings so they compound across projects
- Build reusable positioning and messaging foundations
- Keep quality high so future work builds on solid ground

### File Structure

```
compounding-marketing/
├── .claude-plugin/
│   └── plugin.json              # Plugin metadata (version, description, components)
├── .cursor-plugin/
│   └── plugin.json              # Cursor-compatible metadata
├── .agents/
│   └── skills/                  # Symlink target for cross-agent compatibility
├── CLAUDE.md                    # Claude Code entry point
├── AGENTS.md                    # Cross-agent instructions
├── README.md                    # User-facing documentation
├── CHANGELOG.md                 # Version history
├── LICENSE                      # MIT License
├── skills/
│   ├── cm-context/              # Foundation skill (product-marketing-context)
│   │   └── SKILL.md
│   ├── positioning/             # Core positioning work
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── positioning-frameworks.md
│   ├── messaging/
│   │   └── SKILL.md
│   ├── copywriting/
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── swipe-file.md
│   ├── page-cro/
│   │   ├── SKILL.md
│   │   └── references/
│   │       └── experiments.md
│   └── [... all other skills]
├── commands/
│   ├── cm-research.md           # /cm:research - Deep market research
│   ├── cm-position.md           # /cm:position - Positioning workshop
│   ├── cm-copy.md               # /cm:copy - Copywriting workflow
│   ├── cm-launch.md             # /cm:launch - Launch planning
│   └── cm-compound.md           # /cm:compound - Document learnings
└── tools/
    ├── REGISTRY.md              # Tool index
    └── integrations/            # API integration guides
```

### How It Activates

#### Claude Code (Primary)
- **CLAUDE.md** in repo root is auto-read by Claude Code
- Points to this plugin's entry point
- Skills become available via `/skill-name` or natural language

```markdown
# CLAUDE.md

This repository uses the Compounding Marketing plugin.

Load skills from `skills/` when working on marketing tasks.
Foundation skill: Always check `cm-context` first for product/market context.

## Workflow
Research → Position → Message → Execute → Compound
```

#### ChatGPT/Codex
- **AGENTS.md** provides cross-platform instructions
- Skills are markdown files that can be uploaded or referenced
- Works as a "Custom GPT" or Codex persona

#### Other Agents (Cursor, Windsurf, OpenClaw)
- Plugin structure follows Claude Code spec
- Converter tool handles format differences
- `.cursor-plugin/` and `.agents/skills/` provide compatibility

### Root Entry Point Design

**CLAUDE.md** is the entry point. It should:

1. Declare the plugin's purpose
2. Point to the foundational skill (`cm-context`)
3. List available skill categories
4. Define the core workflow
5. Explain the compounding philosophy

---

## 2. Skill Inventory & Mapping

### Existing Skills from marketingskills (33 skills)

| Skill | Category | Status |
|-------|----------|--------|
| `ab-test-setup` | Measurement | Keep (improve) |
| `ad-creative` | Paid Acquisition | Keep (improve) |
| `ai-seo` | SEO | Keep |
| `analytics-tracking` | Measurement | Keep |
| `churn-prevention` | Retention | Keep |
| `cold-email` | Outreach | Keep (improve) |
| `competitor-alternatives` | Competitive | Keep |
| `content-strategy` | Content | Keep (improve) |
| `copy-editing` | Content | Keep |
| `copywriting` | Content | Keep (major improvement) |
| `email-sequence` | Email | Keep |
| `form-cro` | CRO | Keep |
| `free-tool-strategy` | Growth | Keep |
| `launch-strategy` | GTM | Keep (major improvement) |
| `lead-magnets` | Growth | Keep |
| `marketing-ideas` | Strategy | Keep |
| `marketing-psychology` | Strategy | Keep |
| `onboarding-cro` | CRO | Keep |
| `page-cro` | CRO | Keep |
| `paid-ads` | Paid Acquisition | Keep |
| `paywall-upgrade-cro` | CRO | Keep |
| `popup-cro` | CRO | Keep |
| `pricing-strategy` | Strategy | Keep (improve) |
| `product-marketing-context` | Foundation | Rename to `cm-context` |
| `programmatic-seo` | SEO | Keep |
| `referral-program` | Growth | Keep |
| `revops` | RevOps | Keep |
| `sales-enablement` | Sales | Keep |
| `schema-markup` | SEO | Keep |
| `seo-audit` | SEO | Keep |
| `signup-flow-cro` | CRO | Keep |
| `site-architecture` | SEO | Keep |
| `social-content` | Social | Keep |

### Gap Analysis — Skills to Add (17 new skills)

| Skill | Category | Why Missing | Priority |
|-------|----------|-------------|----------|
| `positioning` | Foundation | Core to everything, not properly addressed | P0 |
| `messaging-framework` | Foundation | Connects positioning to copy | P0 |
| `icp-research` | Research | No structured ICP development | P0 |
| `gtm-strategy` | GTM | Launch-strategy is tactical, not strategic | P1 |
| `competitive-analysis` | Research | Alternatives is SEO-focused, not strategic | P1 |
| `customer-research` | Research | No JTBD, no interview synthesis | P1 |
| `case-study` | Content | Missing entirely | P1 |
| `brand-voice` | Foundation | No brand consistency guidance | P1 |
| `value-proposition` | Foundation | No structured value prop design | P1 |
| `market-sizing` | Research | No TAM/SAM/SOM analysis | P2 |
| `channel-strategy` | Strategy | No channel prioritization framework | P2 |
| `partnership-marketing` | Growth | Co-marketing, integrations missing | P2 |
| `testimonial-collection` | Social Proof | No framework for gathering proof | P2 |
| `webinar-strategy` | Events | Event marketing missing | P2 |
| `video-marketing` | Content | Video strategy missing | P2 |
| `community-strategy` | Growth | Community building missing | P2 |
| `attribution-modeling` | Measurement | Marketing attribution missing | P3 |

### Final Skill List by Category (50 skills)

#### Foundation (5 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `cm-context` | `skills/cm-context/` | Product-market context document |
| `positioning` | `skills/positioning/` | Define market position and differentiation |
| `messaging-framework` | `skills/messaging-framework/` | Convert positioning to messaging pillars |
| `value-proposition` | `skills/value-proposition/` | Design value propositions per segment |
| `brand-voice` | `skills/brand-voice/` | Document brand voice and guidelines |

#### Research (5 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `icp-research` | `skills/icp-research/` | Ideal Customer Profile development |
| `customer-research` | `skills/customer-research/` | JTBD, interviews, persona synthesis |
| `competitive-analysis` | `skills/competitive-analysis/` | Strategic competitive positioning |
| `market-sizing` | `skills/market-sizing/` | TAM/SAM/SOM analysis |
| `marketing-psychology` | `skills/marketing-psychology/` | Psychological principles for marketing |

#### Content & Copy (7 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `copywriting` | `skills/copywriting/` | Page copy, headlines, body |
| `copy-editing` | `skills/copy-editing/` | Edit and improve existing copy |
| `content-strategy` | `skills/content-strategy/` | Content planning and topics |
| `case-study` | `skills/case-study/` | Customer success stories |
| `social-content` | `skills/social-content/` | Social media content creation |
| `video-marketing` | `skills/video-marketing/` | Video content strategy |
| `lead-magnets` | `skills/lead-magnets/` | Lead magnet creation |

#### SEO & Discovery (6 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `seo-audit` | `skills/seo-audit/` | Technical and on-page SEO audit |
| `ai-seo` | `skills/ai-seo/` | AI search optimization (AEO, GEO) |
| `programmatic-seo` | `skills/programmatic-seo/` | Scaled page generation |
| `site-architecture` | `skills/site-architecture/` | URL structure and hierarchy |
| `schema-markup` | `skills/schema-markup/` | Structured data |
| `competitor-alternatives` | `skills/competitor-alternatives/` | Comparison/alternative pages |

#### CRO (7 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `page-cro` | `skills/page-cro/` | Landing page optimization |
| `signup-flow-cro` | `skills/signup-flow-cro/` | Registration flow optimization |
| `onboarding-cro` | `skills/onboarding-cro/` | Post-signup activation |
| `form-cro` | `skills/form-cro/` | Form optimization |
| `popup-cro` | `skills/popup-cro/` | Modal/popup optimization |
| `paywall-upgrade-cro` | `skills/paywall-upgrade-cro/` | In-app upgrade moments |
| `pricing-strategy` | `skills/pricing-strategy/` | Pricing page and packaging |

#### Outreach & Email (3 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `cold-email` | `skills/cold-email/` | B2B cold outreach |
| `email-sequence` | `skills/email-sequence/` | Automated email flows |
| `testimonial-collection` | `skills/testimonial-collection/` | Gathering social proof |

#### Paid Acquisition (2 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `paid-ads` | `skills/paid-ads/` | Paid campaign management |
| `ad-creative` | `skills/ad-creative/` | Ad copy and creative |

#### Measurement & Testing (3 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `analytics-tracking` | `skills/analytics-tracking/` | Event tracking setup |
| `ab-test-setup` | `skills/ab-test-setup/` | Experiment design |
| `attribution-modeling` | `skills/attribution-modeling/` | Marketing attribution |

#### GTM & Launch (3 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `launch-strategy` | `skills/launch-strategy/` | Product launch planning |
| `gtm-strategy` | `skills/gtm-strategy/` | Go-to-market motion design |
| `channel-strategy` | `skills/channel-strategy/` | Channel prioritization |

#### Growth & Retention (5 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `referral-program` | `skills/referral-program/` | Referral and affiliate programs |
| `free-tool-strategy` | `skills/free-tool-strategy/` | Marketing tools and calculators |
| `churn-prevention` | `skills/churn-prevention/` | Reduce churn, save offers |
| `partnership-marketing` | `skills/partnership-marketing/` | Co-marketing and integrations |
| `community-strategy` | `skills/community-strategy/` | Community building |

#### Sales & RevOps (3 skills)
| Skill | Path | Purpose |
|-------|------|---------|
| `sales-enablement` | `skills/sales-enablement/` | Sales collateral and decks |
| `revops` | `skills/revops/` | Lead lifecycle management |
| `webinar-strategy` | `skills/webinar-strategy/` | Event and webinar marketing |

#### Meta (1 skill)
| Skill | Path | Purpose |
|-------|------|---------|
| `marketing-ideas` | `skills/marketing-ideas/` | 140+ SaaS marketing ideas |

---

## 3. Per-Skill Specifications

### Foundation Skills

#### cm-context
```yaml
path: skills/cm-context/SKILL.md
purpose: The foundational context document that all other skills reference.
```

**Inputs Required:**
- Product name and description
- Target audience(s)
- Key benefits and differentiators
- Competitor names
- Current positioning statement (if any)
- Voice/tone guidelines (if any)

**Step-by-Step Process:**
1. Check if `.agents/product-marketing-context.md` exists
2. If exists: Read and use as context, ask only for updates
3. If not: Walk through structured questionnaire
4. Ask about: Product, audience, problem solved, competitors, differentiation
5. Generate comprehensive context document
6. Save to `.agents/product-marketing-context.md`
7. Confirm completion and suggest next skills

**Output Format:**
```markdown
# Product Marketing Context

## Product
[Name, description, core value]

## Target Audience
[ICP summary, segments]

## Positioning
[Current positioning statement]

## Key Messages
[3-5 core messages]

## Competitors
[Top 3-5 with brief differentiation]

## Voice & Tone
[Brand voice guidelines]

## Evidence & Proof Points
[Stats, testimonials, case studies]
```

**Quality Bar:**
- Complete enough that any other skill can use it without asking questions
- Specific, not generic (no "we help companies grow")
- Updated timestamp in frontmatter

---

#### positioning

```yaml
path: skills/positioning/SKILL.md
purpose: Define market position using April Dunford's positioning framework.
```

**Inputs Required:**
- Product capabilities (what it does)
- Best-fit customers (who succeeds most)
- Competitive alternatives (what they'd use otherwise)
- Unique attributes (what you do differently)
- Value delivered (outcomes customers get)
- Market category (where you play)

**Step-by-Step Process:**
1. Read `cm-context` for existing context
2. Identify competitive alternatives (not just competitors—include status quo, manual processes)
3. List unique attributes (not features, but things ONLY you have)
4. Map attributes to value (what does each attribute enable?)
5. Identify best-fit customers (who values this most?)
6. Determine market category (existing, adjacent, or new)
7. Draft positioning statement using template
8. Stress-test: "If I removed this, would positioning collapse?"
9. Output positioning canvas

**Output Format:**
```markdown
# Positioning Canvas

## Competitive Alternatives
What customers would do if you didn't exist:
- [Alternative 1]
- [Alternative 2]
- [Status quo / manual process]

## Unique Attributes
What you have that alternatives don't:
- [Attribute 1]
- [Attribute 2]

## Value (per attribute)
What each attribute enables for customers:
| Attribute | Value Delivered |
|-----------|-----------------|
| [Attr 1]  | [Value 1]       |

## Best-Fit Customers
Who cares most about this value:
- [Segment 1]: [Why they care]
- [Segment 2]: [Why they care]

## Market Category
[Category name] — [Why this category]

## Positioning Statement
For [target customers] who [situation/need], [Product] is a [market category] that [key benefit]. Unlike [alternatives], [Product] [unique differentiator].
```

**Quality Bar:**
- Uses Dunford's Obviously Awesome framework correctly
- Identifies alternatives beyond obvious competitors
- Positioning statement is tight (under 50 words)
- Each element connects logically

**References:**
- `references/positioning-frameworks.md` — Dunford framework, category design principles

---

#### messaging-framework

```yaml
path: skills/messaging-framework/SKILL.md
purpose: Convert positioning into actionable messaging pillars and proof points.
```

**Inputs Required:**
- Completed positioning (from `positioning` skill)
- Audience segments
- Current messaging (if any)

**Step-by-Step Process:**
1. Read `cm-context` and positioning canvas
2. Extract 3-5 messaging pillars from positioning
3. For each pillar: Define claim, proof points, objections
4. Map pillars to audience segments (which matters most to whom)
5. Create headline variations for each pillar
6. Document in messaging framework template
7. Identify gaps (claims without proof)

**Output Format:**
```markdown
# Messaging Framework

## Core Narrative
[2-3 sentence story that ties everything together]

## Messaging Pillars

### Pillar 1: [Name]
- **Claim:** [What we're saying]
- **Proof Points:**
  - [Evidence 1]
  - [Evidence 2]
- **Objection:** [Common pushback]
- **Response:** [How to handle]
- **Best For:** [Audience segment]
- **Headlines:**
  - [Option 1]
  - [Option 2]

[Repeat for each pillar]

## Segment-Specific Messages
| Segment | Lead Pillar | Supporting Pillars |
|---------|-------------|-------------------|
| [Seg 1] | [Pillar X]  | [Pillar Y, Z]     |
```

**Quality Bar:**
- Every claim has at least one proof point
- Pillars are distinct (no overlap)
- Headlines are specific, not generic
- Maps clearly to positioning work

---

#### value-proposition

```yaml
path: skills/value-proposition/SKILL.md
purpose: Design value propositions for each customer segment using Value Proposition Canvas.
```

**Inputs Required:**
- Customer segment
- Customer jobs, pains, gains
- Product features

**Step-by-Step Process:**
1. Read `cm-context` for segment info
2. Map Customer Profile:
   - Jobs (functional, social, emotional)
   - Pains (obstacles, risks, bad outcomes)
   - Gains (desired outcomes, benefits)
3. Map Value Map:
   - Products/services offered
   - Pain relievers (how you address pains)
   - Gain creators (how you create gains)
4. Find fit: Connect pain relievers to pains, gain creators to gains
5. Identify strongest fit areas
6. Write value proposition statement
7. Score fit (weak/moderate/strong)

**Output Format:**
```markdown
# Value Proposition Canvas: [Segment Name]

## Customer Profile

### Jobs
- Functional: [What they're trying to get done]
- Social: [How they want to be perceived]
- Emotional: [How they want to feel]

### Pains
- [Pain 1]: Severity [1-5]
- [Pain 2]: Severity [1-5]

### Gains
- [Gain 1]: Importance [1-5]
- [Gain 2]: Importance [1-5]

## Value Map

### Pain Relievers
| Pain | How We Relieve It | Strength |
|------|-------------------|----------|

### Gain Creators
| Gain | How We Create It | Strength |
|------|------------------|----------|

## Fit Score: [Weak/Moderate/Strong]

## Value Proposition Statement
[Product] helps [segment] [achieve job] by [pain reliever] so they can [gain], unlike [alternative] which [limitation].
```

**Quality Bar:**
- Uses Strategyzer Value Proposition Canvas correctly
- Prioritizes by severity/importance
- Fit is explicit, not assumed

---

#### brand-voice

```yaml
path: skills/brand-voice/SKILL.md
purpose: Document brand voice, tone, and writing guidelines.
```

**Inputs Required:**
- Existing content samples (if any)
- Brand personality descriptors
- Competitor voice analysis (to differentiate)

**Step-by-Step Process:**
1. Read `cm-context` for existing voice notes
2. Identify brand personality (3-5 adjectives)
3. Define voice attributes with "this, not that" pairs
4. Document tone variations by context (error messages vs. marketing)
5. Create vocabulary guidelines (use/avoid words)
6. Provide before/after examples
7. Document in brand voice guide template

**Output Format:**
```markdown
# Brand Voice Guide

## Personality
We are: [adjective], [adjective], [adjective]
We are not: [adjective], [adjective]

## Voice Attributes

| Attribute | This | Not That | Example |
|-----------|------|----------|---------|
| [e.g., Direct] | Get to the point | Rambling | "Start free" not "Begin your journey today" |

## Tone by Context
| Context | Tone | Example |
|---------|------|---------|
| Marketing | [tone] | [example] |
| Error messages | [tone] | [example] |
| Support | [tone] | [example] |

## Vocabulary
**Use:** [word], [word], [word]
**Avoid:** [word], [word], [word]

## Writing Rules
1. [Rule 1]
2. [Rule 2]

## Examples
### Before (Off-Brand)
[example]

### After (On-Brand)
[example]
```

**Quality Bar:**
- Specific enough to apply consistently
- Includes both positive and negative examples
- Covers multiple contexts

---

### Research Skills

#### icp-research

```yaml
path: skills/icp-research/SKILL.md
purpose: Develop detailed Ideal Customer Profile through structured research.
```

**Inputs Required:**
- Existing customer data (if any)
- Best customers (names or descriptions)
- Current assumptions about ideal customers

**Step-by-Step Process:**
1. Analyze best existing customers (highest LTV, fastest close, best NPS)
2. Identify firmographic patterns (size, industry, tech stack)
3. Identify behavioral patterns (how they found you, buying process)
4. Identify psychographic patterns (beliefs, priorities, values)
5. Define negative personas (who NOT to target)
6. Score and prioritize segments
7. Create ICP document with persona cards

**Output Format:**
```markdown
# Ideal Customer Profile

## Primary ICP: [Name]

### Firmographics
- Company size: [range]
- Industry: [industries]
- Tech stack: [relevant tools]
- Geography: [regions]

### Behaviors
- **Trigger event:** [What makes them search]
- **Buying process:** [Who's involved, timeline]
- **Research behavior:** [Where they learn]

### Psychographics
- **Believes:** [Core beliefs]
- **Values:** [What they prioritize]
- **Fears:** [What keeps them up at night]

### Qualification Criteria
Must have: [criteria]
Nice to have: [criteria]
Disqualifiers: [anti-criteria]

## Secondary ICP: [Name]
[Same structure]

## Negative Personas (Do Not Target)
- [Type 1]: [Why not]
- [Type 2]: [Why not]
```

**Quality Bar:**
- Based on actual data, not assumptions
- Includes behavioral triggers
- Has clear qualification criteria

---

#### customer-research

```yaml
path: skills/customer-research/SKILL.md
purpose: Synthesize customer interviews and feedback into actionable insights using JTBD.
```

**Inputs Required:**
- Interview transcripts or notes
- Survey responses
- Support tickets
- Review/feedback data

**Step-by-Step Process:**
1. Gather available customer data
2. Extract jobs-to-be-done (functional, social, emotional)
3. Map switching triggers (what caused them to seek change)
4. Identify hiring criteria (why they chose you)
5. Document anxiety/friction points
6. Synthesize into persona insights
7. Create JTBD statements

**Output Format:**
```markdown
# Customer Research Synthesis

## Jobs-to-Be-Done

### Job 1: [Functional Job]
**Job Statement:** When [situation], I want to [motivation], so I can [outcome].

**Switching Triggers:**
- [What pushes them to change]

**Hiring Criteria:**
- [What they evaluate]

**Anxieties:**
- [What makes them hesitate]

## Key Insights
1. [Insight with evidence]
2. [Insight with evidence]

## Implications
- **For positioning:** [recommendation]
- **For messaging:** [recommendation]
- **For product:** [recommendation]
```

**Quality Bar:**
- Uses actual customer language
- JTBD statements follow proper format
- Connects research to actionable recommendations

---

#### competitive-analysis

```yaml
path: skills/competitive-analysis/SKILL.md
purpose: Strategic competitive analysis for positioning and differentiation.
```

**Inputs Required:**
- Competitor names
- Access to competitor websites/materials
- Pricing information (if available)

**Step-by-Step Process:**
1. Identify direct, indirect, and alternative competitors
2. Analyze positioning (how they describe themselves)
3. Analyze messaging (key claims and proof)
4. Map features/capabilities
5. Research pricing and packaging
6. Identify strengths and weaknesses
7. Find white space opportunities
8. Document in competitive matrix

**Output Format:**
```markdown
# Competitive Analysis

## Competitive Landscape
| Type | Competitors |
|------|-------------|
| Direct | [names] |
| Indirect | [names] |
| Alternatives | [status quo, manual] |

## Competitor Deep Dives

### [Competitor 1]
**Positioning:** [How they position]
**Key Messages:**
- [Message 1]
- [Message 2]

**Strengths:**
- [Strength 1]

**Weaknesses:**
- [Weakness 1]

**Pricing:** [Summary]

## Feature Matrix
| Feature | Us | Comp 1 | Comp 2 |
|---------|-----|--------|--------|
| [Feature] | ✓/✗ | ✓/✗ | ✓/✗ |

## White Space Opportunities
1. [Opportunity]: [Why it's underserved]

## Competitive Positioning
How we win against each:
- vs [Comp 1]: [Strategy]
```

**Quality Bar:**
- Includes status quo as competitor
- Identifies actionable white space
- Has clear "how we win" strategies

---

#### market-sizing

```yaml
path: skills/market-sizing/SKILL.md
purpose: Calculate TAM/SAM/SOM for market opportunity analysis.
```

**Inputs Required:**
- Target market definition
- Pricing model
- ICP criteria

**Step-by-Step Process:**
1. Define market boundaries
2. Calculate TAM (Total Addressable Market) — top-down and bottom-up
3. Calculate SAM (Serviceable Addressable Market) — filtered by ICP
4. Calculate SOM (Serviceable Obtainable Market) — realistic capture
5. Validate with multiple methods
6. Document assumptions and sources
7. Create one-page market sizing summary

**Output Format:**
```markdown
# Market Sizing Analysis

## Market Definition
[What market we're sizing]

## TAM (Total Addressable Market)
**Top-Down:** $[X]B
- [Calculation method]

**Bottom-Up:** $[X]B
- [Number of potential customers] × [Average deal size]

**TAM Range:** $[X]B - $[Y]B

## SAM (Serviceable Addressable Market)
$[X]M
- Filters applied: [ICP criteria]
- [X]% of TAM

## SOM (Serviceable Obtainable Market)
$[X]M (Year 1-3)
- Market share assumption: [X]%
- Basis: [Comparable company data]

## Assumptions
| Assumption | Value | Source |
|------------|-------|--------|
| [Assumption] | [Value] | [Source] |

## Confidence Level
[High/Medium/Low] — [Justification]
```

**Quality Bar:**
- Uses multiple methods to triangulate
- All assumptions documented with sources
- Confidence level is honest

---

### Content & Copy Skills

#### copywriting

```yaml
path: skills/copywriting/SKILL.md
purpose: Write conversion-focused marketing copy for any page type.
```

**Inputs Required:**
- Page type (homepage, landing page, feature, pricing)
- Target audience segment
- Primary CTA/conversion goal
- Existing messaging framework (preferred)

**Step-by-Step Process:**
1. Read `cm-context` and `messaging-framework` for context
2. Identify page goal and primary CTA
3. Research audience language (reviews, communities, interviews)
4. Outline page structure using proven frameworks
5. Write headline options (3+)
6. Write subhead and body copy
7. Write CTA copy
8. Add social proof placement recommendations
9. Self-review against CRO principles
10. Output multiple options with rationale

**Output Format:**
```markdown
# Copy Brief: [Page Name]

## Context
- **Audience:** [Segment]
- **Goal:** [Primary conversion]
- **Voice:** [From brand guide]

## Hero Section

### Headline Options
1. **[Option 1]** — [Rationale]
2. **[Option 2]** — [Rationale]
3. **[Option 3]** — [Rationale]

**Recommended:** [#] because [reason]

### Subhead
[Subhead copy]

### Primary CTA
**Button:** [Copy]
**Supporting text:** [If any]

## Sections

### Section 1: [Purpose]
**Heading:** [Copy]
**Body:** [Copy]

[Continue for each section]

## Social Proof Recommendations
- [Placement 1]: [Type of proof]

## Copy Notes
- [Note about word choices or style]
```

**Quality Bar:**
- Headline is specific, not clever-vague
- Every section has a clear purpose
- Copy is benefit-focused, not feature-focused
- Includes rationale for decisions

**References:**
- `references/swipe-file.md` — Proven copy patterns and examples

---

#### case-study

```yaml
path: skills/case-study/SKILL.md
purpose: Write compelling customer success stories that sell.
```

**Inputs Required:**
- Customer name and company
- Interview transcript or notes
- Metrics/results achieved
- Permission level (full name, anonymous, etc.)

**Step-by-Step Process:**
1. Extract the story arc: Before → Decision → After
2. Identify the "aha moment" or transformation
3. Find the most compelling metric
4. Structure using proven case study format
5. Write headline that leads with result
6. Include specific quotes
7. End with relevance hook ("If you're also...")

**Output Format:**
```markdown
# Case Study: [Customer Name]

## Headline
[Result-focused headline with metric]

## Quick Stats
| Metric | Before | After |
|--------|--------|-------|
| [Metric] | [X] | [Y] |

## The Challenge
[What they were struggling with]

## Why [Product]
[What made them choose you]

## The Solution
[How they use you — specific, not generic]

## The Results
[Detailed results with quotes]

> "[Quote from customer]"
> — [Name, Title, Company]

## Key Takeaway
[One-sentence summary for similar prospects]
```

**Quality Bar:**
- Leads with the result, not the company name
- Has at least one specific metric
- Includes a direct quote
- Ends with relevance to reader

---

### CRO Skills

#### page-cro

```yaml
path: skills/page-cro/SKILL.md
purpose: Analyze and optimize marketing pages for conversions.
```

**Inputs Required:**
- Page URL or content
- Current conversion rate (if known)
- Traffic source
- Conversion goal

**Step-by-Step Process:**
1. Read `cm-context` for product/audience context
2. Identify page type and primary goal
3. Analyze value proposition clarity (5-second test)
4. Evaluate headline effectiveness
5. Assess CTA placement, copy, hierarchy
6. Check visual hierarchy and scannability
7. Review trust signals and social proof
8. Identify objection handling gaps
9. Find friction points
10. Prioritize recommendations by impact

**Output Format:**
```markdown
# CRO Audit: [Page Name]

## Page Info
- **Type:** [homepage/landing/pricing/etc.]
- **Goal:** [Primary conversion]
- **Traffic Source:** [Where visitors come from]

## Quick Assessment
- Value Prop Clarity: [Score 1-5] — [Note]
- Headline: [Score 1-5] — [Note]
- CTA: [Score 1-5] — [Note]
- Trust Signals: [Score 1-5] — [Note]

## Quick Wins (Do Now)
1. [Change]: [Why]
2. [Change]: [Why]

## High-Impact Changes (Prioritize)
1. [Change]: [Why + effort estimate]

## Test Ideas
1. **Hypothesis:** [If we X, then Y because Z]
   - **Test:** [What to test]
   - **Measure:** [Metric]

## Copy Alternatives
### Headlines
- Current: [X]
- Option 1: [Y] — [Rationale]
- Option 2: [Z] — [Rationale]
```

**Quality Bar:**
- Recommendations are specific, not generic ("improve headline" is too vague)
- Prioritized by impact
- Test ideas are proper hypotheses
- Provides copy alternatives, not just critiques

**References:**
- `references/experiments.md` — A/B test ideas by page type

---

### GTM & Launch Skills

#### launch-strategy

```yaml
path: skills/launch-strategy/SKILL.md
purpose: Plan comprehensive product launches with timeline and tactics.
```

**Inputs Required:**
- Product/feature being launched
- Launch date
- Available resources (team, budget)
- Launch goals

**Step-by-Step Process:**
1. Define launch tier (major, minor, update)
2. Set measurable launch goals
3. Identify launch channels (owned, earned, paid)
4. Create pre-launch timeline (8-4-2-1 weeks)
5. Plan launch day activities
6. Plan post-launch follow-up
7. Create launch checklist
8. Assign owners to each task
9. Define success metrics

**Output Format:**
```markdown
# Launch Plan: [Product/Feature Name]

## Launch Overview
- **Launch Date:** [Date]
- **Launch Tier:** [Major/Minor/Update]
- **Goals:**
  - [Goal 1 with metric]
  - [Goal 2 with metric]

## Pre-Launch Timeline

### 8 Weeks Before
- [ ] [Task] — Owner: [Name]

### 4 Weeks Before
- [ ] [Task] — Owner: [Name]

### 2 Weeks Before
- [ ] [Task] — Owner: [Name]

### 1 Week Before
- [ ] [Task] — Owner: [Name]

## Launch Day Checklist
- [ ] [Task] — Owner: [Name]

## Post-Launch (Week 1-4)
- [ ] [Task] — Owner: [Name]

## Channel Plan
| Channel | Tactic | Owner | Status |
|---------|--------|-------|--------|
| [Channel] | [What] | [Who] | [Status] |

## Success Metrics
| Metric | Target | Actual |
|--------|--------|--------|
| [Metric] | [Target] | — |

## Risks & Mitigations
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| [Risk] | [H/M/L] | [Plan] |
```

**Quality Bar:**
- Timeline is realistic for launch tier
- Every task has an owner
- Goals are measurable
- Risks are identified upfront

---

#### gtm-strategy

```yaml
path: skills/gtm-strategy/SKILL.md
purpose: Design go-to-market motion (PLG vs. sales-led vs. hybrid).
```

**Inputs Required:**
- Product and pricing
- Target market (enterprise, SMB, consumer)
- Current growth model (if any)
- Resources available

**Step-by-Step Process:**
1. Analyze product complexity vs. price point
2. Map customer journey (how they buy)
3. Evaluate PLG fit (self-serve potential)
4. Evaluate sales-led fit (deal size, complexity)
5. Recommend motion (PLG, sales-led, hybrid)
6. Define funnel stages and metrics
7. Outline team structure implications
8. Create 90-day implementation plan

**Output Format:**
```markdown
# GTM Strategy

## Recommendation: [PLG / Sales-Led / Hybrid]
[2-3 sentence rationale]

## Analysis

### Product-Market Fit Signals
- Price point: [High/Medium/Low]
- Complexity: [High/Medium/Low]
- Time to value: [Fast/Medium/Slow]
- Buyer type: [End-user/Manager/Executive]

### Motion Fit Matrix
| Factor | PLG Score | Sales-Led Score |
|--------|-----------|-----------------|
| [Factor] | [1-5] | [1-5] |

## Recommended Motion: [Motion Type]

### Funnel Definition
| Stage | Definition | Key Metric |
|-------|------------|------------|
| [Stage] | [What it means] | [Metric] |

### Team Structure
[Who you need for this motion]

### 90-Day Plan
**Days 1-30:** [Focus]
**Days 31-60:** [Focus]
**Days 61-90:** [Focus]

## Key Bets
1. [Bet 1]: [Why we believe this]
```

**Quality Bar:**
- Recommendation is data-informed, not opinion
- Funnel stages are clearly defined
- Implementation plan is actionable

---

### Measurement Skills

#### ab-test-setup

```yaml
path: skills/ab-test-setup/SKILL.md
purpose: Design statistically valid A/B tests with proper hypothesis.
```

**Inputs Required:**
- What to test
- Current performance baseline
- Traffic volume
- Available testing tool

**Step-by-Step Process:**
1. Formulate hypothesis (If X, then Y, because Z)
2. Define primary metric and guardrails
3. Calculate sample size needed
4. Estimate test duration
5. Document control vs. variant
6. Create QA checklist
7. Define decision criteria
8. Plan post-test analysis

**Output Format:**
```markdown
# A/B Test Plan: [Test Name]

## Hypothesis
**If** [we change X],
**Then** [metric Y will improve],
**Because** [reason Z].

## Test Details
| Element | Value |
|---------|-------|
| Page/Feature | [What] |
| Primary Metric | [Metric] |
| Baseline | [Current value] |
| MDE (Minimum Detectable Effect) | [%] |
| Confidence Level | 95% |
| Sample Size | [# per variant] |
| Est. Duration | [Days/weeks] |

## Variants
**Control:** [Description]
**Treatment:** [Description]

## Guardrail Metrics
- [Metric 1]: Should not decrease
- [Metric 2]: Should not increase

## Decision Criteria
- **Winner:** [Primary metric improves by X% with statistical significance]
- **Loser:** [Primary metric decreases or no significance after Y days]
- **Inconclusive:** [Launch to 100% anyway / Kill / Iterate]

## QA Checklist
- [ ] Tracking verified in both variants
- [ ] Variants look correct across browsers/devices
- [ ] No other tests running on same page
- [ ] Segment definitions confirmed
```

**Quality Bar:**
- Hypothesis is falsifiable
- Sample size is calculated, not guessed
- Guardrails prevent unintended harm
- Decision criteria defined upfront

---

## 4. Workflow Commands

### Core Commands (cm: prefix)

| Command | File | Purpose |
|---------|------|---------|
| `/cm:research` | `commands/cm-research.md` | Deep market and customer research workflow |
| `/cm:position` | `commands/cm-position.md` | Full positioning workshop |
| `/cm:copy` | `commands/cm-copy.md` | End-to-end copywriting workflow |
| `/cm:launch` | `commands/cm-launch.md` | Launch planning and execution |
| `/cm:compound` | `commands/cm-compound.md` | Document learnings to compound knowledge |

### Command Specs

#### /cm:research
```markdown
Trigger research workflow:
1. Read existing cm-context
2. Run ICP research
3. Run competitive analysis
4. Run customer research (if data available)
5. Synthesize findings
6. Update cm-context with learnings
```

#### /cm:position
```markdown
Trigger positioning workshop:
1. Read cm-context and research
2. Run positioning skill (Dunford framework)
3. Run messaging-framework skill
4. Run value-proposition for each segment
5. Output complete positioning package
```

#### /cm:copy
```markdown
Trigger copywriting workflow:
1. Read positioning and messaging framework
2. Identify page type and goal
3. Run copywriting skill
4. Run page-cro as QA
5. Output copy with CRO notes
```

#### /cm:launch
```markdown
Trigger launch planning:
1. Read cm-context
2. Run launch-strategy skill
3. Run gtm-strategy if needed
4. Create launch timeline
5. Output launch plan with checklist
```

#### /cm:compound
```markdown
Document learnings:
1. Ask what was learned
2. Categorize (positioning, copy, CRO, etc.)
3. Save to `.agents/learnings/[category].md`
4. Update relevant skills if pattern emerges
5. Confirm compounding
```

---

## 5. README Outline

### Sections

1. **Headline** — "Make each unit of marketing work easier than the last."
2. **What It Does** — 2-sentence explanation
3. **Philosophy** — Research → Position → Execute → Compound
4. **Quick Start** — Installation + first skill to run
5. **Skills** — Table of all 50 skills by category
6. **Workflow Commands** — The `/cm:*` commands
7. **Foundation First** — Explanation of `cm-context`
8. **Installation** — Claude Code, ChatGPT, Cursor instructions
9. **Contributing** — How to add/improve skills
10. **License** — MIT

### Key Messages

- **Compounding, not repeating** — Each project builds on the last
- **Frameworks over templates** — Learn the why, not just the what
- **Positioning-first** — Good marketing starts with clear positioning
- **Research-heavy** — 80% research and planning, 20% execution
- **Works across tools** — Claude Code, ChatGPT, Cursor, Windsurf

---

## 6. Website Brief (for Kai + Loki)

### Value Proposition

"Make each unit of marketing work easier than the last."

The plugin that turns any AI model into a world-class marketing operator. Fifty skills covering positioning, messaging, copywriting, CRO, SEO, and GTM. Built on the same compounding philosophy that made Compounding Engineering essential for developers.

### Target Audience

1. **Technical founders** — Building a SaaS, need to do marketing but aren't marketers
2. **Solo marketers** — Marketing team of one at a startup, need leverage
3. **Marketing managers** — Want to accelerate their team with AI
4. **Growth engineers** — Technical folks who own marketing metrics

### Key Features to Highlight

- **50 skills** covering the full marketing lifecycle
- **Foundation-first approach** — Start with positioning, not tactics
- **Frameworks, not prompts** — Learn the methodology, not just get outputs
- **Compounding knowledge** — `/cm:compound` captures learnings
- **Works everywhere** — Claude Code, ChatGPT, Cursor, Windsurf

### Tone/Style

Reference: [authoritymax.ai](https://authoritymax.ai) + [magicassist.co](https://magicassist.co)

- **Professional, minimal** — Clean design, lots of whitespace
- **Direct language** — No "revolutionize" or "supercharge"
- **Evidence-backed** — Show skill examples, not just claims
- **Developer-friendly** — Code blocks, installation instructions
- **No AI slop** — Every sentence earns its place

### Suggested Sections

1. Hero with tagline and install command
2. "How it works" — Research → Position → Execute → Compound
3. Skills overview with categories
4. Example skill in action (screenshot/video)
5. Who it's for (audience segments)
6. Comparison to DIY prompting
7. Install instructions
8. GitHub link

### Avoid

- Buzzwords ("leverage AI to transform your marketing")
- Vague claims ("10x your marketing")
- Stock imagery
- Walls of text
- Pop-ups or aggressive CTAs

---

## Appendix: File Templates

### SKILL.md Template

```markdown
---
name: skill-name
description: When to use this skill. Include trigger phrases. 1-1024 characters.
metadata:
  version: 1.0.0
---

# Skill Title

You are a [role]. Your goal is to [outcome].

## Initial Assessment

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

[Context-gathering questions]

---

## Process

### Step 1: [Name]
[Instructions]

### Step 2: [Name]
[Instructions]

---

## Output Format

[Template for output]

---

## Quality Bar

[What "great" looks like]

---

## Related Skills

- **[skill-name]**: When to use instead
```

### plugin.json Template

```json
{
  "name": "compounding-marketing",
  "version": "1.0.0",
  "description": "50 skills for positioning, messaging, copywriting, CRO, SEO, and GTM. Make each unit of marketing work easier than the last.",
  "author": {
    "name": "AuthorityMax",
    "url": "https://authoritymax.ai"
  },
  "keywords": [
    "marketing",
    "positioning",
    "copywriting",
    "cro",
    "seo",
    "gtm",
    "compound-marketing"
  ],
  "components": {
    "skills": 50,
    "commands": 5
  }
}
```

---

**End of Specification**

*This spec is Gilfoyle-ready. No guessing required.*
