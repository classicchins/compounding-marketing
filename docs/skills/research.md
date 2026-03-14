# Research Skills Deep Dive

Data collection and pattern identification skills. Run these before positioning to ground your strategy in reality.

## Overview

| Skill | Purpose | Framework | Output | Time |
|-------|---------|-----------|--------|------|
| **icp-research** | Define ideal customer | Firmographics + psychographics | ICP document | 2-3h |
| **customer-research** | Synthesize interviews | Jobs-to-be-Done | Customer insights | 2-4h |
| **customer-interview** | Plan interviews | Interview guide framework | Guide + synthesis template | 1h |
| **competitive-analysis** | Map competitors | Positioning matrix | Competitive landscape | 2-3h |
| **market-sizing** | Calculate TAM/SAM/SOM | Top-down + bottom-up | Market size analysis | 1-2h |
| **marketing-psychology** | Apply persuasion | Cialdini principles | Psychology recommendations | 1h |

---

## `icp-research` — Ideal Customer Profile

**When to use:** Before positioning, at start of new market entry

### What It Does

Identifies who your best customers are based on data, not assumptions.

**Key principle:** ICP is data-driven. Base it on who actually succeeds with your product, not who you wish would buy.

### Input Needed

- Customer data (if available): revenue, NPS, usage, retention
- List of best customers (highest LTV, fastest close, best outcomes)
- Early adopter or beta user feedback (if pre-revenue)

### Process

1. **Analyze best customers** — Segment by LTV, retention, NPS, outcomes
2. **Identify firmographic patterns** — Company size, industry, geography, tech stack
3. **Identify behavioral patterns** — How they find you, how they buy, how they use product
4. **Identify psychographic patterns** — What they believe, fear, value
5. **Define negative personas** — Who to NOT target (churners, high-support customers)
6. **Create qualification criteria** — Must-haves, nice-to-haves, disqualifiers

### Example Output (AuthorityMax)

```markdown
# Ideal Customer Profile: AuthorityMax

## Primary ICP: Series A-B SaaS Founders

### Firmographics
- **Company Size:** 10-100 employees
- **Revenue:** $1M-$10M ARR
- **Industry:** B2B SaaS
- **Geography:** North America, Europe
- **Tech Stack:** Modern SaaS (Next.js, Postgres, Vercel signals buying intent)
- **Funding Stage:** Series A-B

### Behavioral Patterns

**Discovery:**
- **How they find us:** LinkedIn ads, founder communities, Product Hunt
- **Trigger event:** Preparing for fundraise, hiring senior talent, entering new market
- **Search keywords:** "LinkedIn ghostwriter for founders", "AI personal branding"

**Buying Process:**
- **Decision-maker:** Founder (solo decision, no committee)
- **Buying committee:** None (founder decides alone)
- **Sales cycle:** 3-7 days (trial → convert)
- **Evaluation criteria:** Voice quality, time savings, engagement prediction accuracy

**Usage Patterns:**
- **Activation time:** 24 hours (upload 10 posts, generate first draft)
- **Key features used:** Post generator (100%), engagement prediction (78%), idea generator (65%)
- **Engagement frequency:** 3-5x/week (posting cadence)

### Psychographics

**Beliefs:**
- Personal brand = recruiting advantage + fundraising edge
- LinkedIn is the platform for B2B SaaS (not Twitter)
- Consistency beats virality

**Values:**
- Authentic voice over generic content
- Time efficiency (won't trade 10 hours/week for personal brand)
- Data-informed decisions

**Fears:**
- Sounding like AI (reputation risk)
- Wasting time on content that doesn't perform
- Falling behind peers who are building personal brands

### Qualification Criteria

**Must Have:**
- ✅ Posting on LinkedIn at least monthly (shows intent)
- ✅ Series A+ funded (budget available)
- ✅ B2B SaaS company (ICP fit)
- ✅ Founder or C-level (decision-maker)

**Nice to Have:**
- 🟢 Existing LinkedIn following (500+ connections)
- 🟢 Fundraising or hiring in next 6 months (trigger event)
- 🟢 Previous ghostwriter or AI tool user (understands problem)

**Disqualifiers:**
- ❌ No LinkedIn presence (not the right channel for them)
- ❌ Pre-seed unfunded (budget constraint)
- ❌ B2C or services business (poor product fit)
- ❌ "Just checking it out" (no urgency)

---

## Negative Personas (Do NOT Target)

### Persona 1: LinkedIn Influencer / Coach
- **Characteristics:** Full-time content creator, coaching business model
- **Why bad fit:** Needs volume + variety, not founder voice preservation
- **Churn reason:** Want templates for clients, not personal brand tool

### Persona 2: Pre-Seed Solo Founder
- **Characteristics:** Pre-revenue, no funding, solo
- **Why bad fit:** Can't afford $49/mo, no urgency to build brand yet
- **Churn reason:** Budget constraint, priorities elsewhere

---

## Marketing Implications

**Channels:** LinkedIn ads (in-feed), founder communities (Pavilion, OnDeck), Product Hunt

**Messaging:** Lead with time savings ("60 seconds per post"), address quality concern ("sounds like you")

**Content:** Founder interviews, LinkedIn growth tactics, personal branding for fundraising

**Sales:** Qualify on funding stage + LinkedIn activity. Disqualify pre-seed or non-LinkedIn users early.
```

### How to Use This

- **Ad targeting** — Target Series A-B companies on LinkedIn
- **Sales qualification** — Ask "Are you posting on LinkedIn monthly?" before demo
- **Product roadmap** — Prioritize features Series A-B founders need
- **Pricing** — $49/mo is accessible to funded founders

---

## `customer-research` — Interview Synthesis

**When to use:** After 5-10 customer interviews

### What It Does

Synthesizes customer interviews into Jobs-to-be-Done insights.

**Framework:** Jobs-to-be-Done (Clayton Christensen)

### Input Needed

- Interview transcripts or notes
- Customer feedback (support tickets, NPS comments, reviews)

### Process

1. **Extract job stories** — "When [situation], I want to [motivation], so I can [outcome]"
2. **Identify pains** — What frustrates customers about current solutions?
3. **Identify gains** — What outcomes do they want?
4. **Map to product** — How does your product address jobs/pains/gains?
5. **Find patterns** — Which jobs appear most frequently?

### Example Output (AuthorityMax — 12 Founder Interviews)

```markdown
# Customer Research Synthesis: AuthorityMax

**Interviews:** 12 Series A-B SaaS founders (Nov 2025)

---

## Key Jobs-to-be-Done

### Job 1: "Build Credibility for Fundraising"

**Job Story:**
When I'm preparing to raise Series B,
I want to build visible thought leadership on LinkedIn,
so VCs see me as a credible category leader.

**Frequency:** 9/12 interviews mentioned this
**Current solution:** Hire ghostwriter or post manually
**Pain:** Ghostwriters are expensive ($5k-$10k/mo) and slow to ramp up

**How AuthorityMax helps:**
- Faster than ghostwriter (60s vs days)
- Maintains founder voice (critical for authenticity)
- Affordable ($49/mo vs $5k/mo)

---

### Job 2: "Attract Senior Talent"

**Job Story:**
When I'm hiring VP-level roles,
I want to be visible to top candidates on LinkedIn,
so they reach out to me instead of me hunting them down.

**Frequency:** 7/12 interviews
**Current solution:** Post job openings, rely on recruiters
**Pain:** Recruiters are expensive (20% of salary), passive candidates don't see job posts

**How AuthorityMax helps:**
- Consistent posting = top-of-mind with network
- Thought leadership positioning attracts inbound interest

---

### Job 3: "Stay Top-of-Mind with Network"

**Job Story:**
When I haven't talked to someone in months,
I want to stay visible so they remember me,
so when they need what I offer, I'm the first call.

**Frequency:** 11/12 interviews
**Current solution:** Manual posting, email newsletters
**Pain:** Inconsistent posting kills momentum, newsletters feel formal

**How AuthorityMax helps:**
- Removes friction (60s per post vs 30-60 min manual)
- Idea generator helps when stuck
- Consistency builds familiarity

---

## Pain Points (Direct Quotes)

| Pain | Frequency | Quote |
|------|-----------|-------|
| **Time constraint** | 12/12 | "I don't have 30 minutes to write a post. I barely have time to read my email." |
| **Quality concern** | 10/12 | "ChatGPT sounds like ChatGPT. I need it to sound like me." |
| **Inconsistency** | 9/12 | "I post for 2 weeks, then disappear for a month. Kills all momentum." |
| **Idea generation** | 8/12 | "I stare at a blank screen. What do I even post about?" |

---

## Feature Prioritization (Based on Insights)

**P0 (Must-have):**
- Voice training (addresses quality concern — 10/12 mentioned)
- 60s post generation (addresses time constraint — 12/12 mentioned)

**P1 (High value):**
- Idea generator (addresses blank screen problem — 8/12 mentioned)
- Engagement prediction (helps confidence — 7/12 mentioned)

**P2 (Nice-to-have):**
- Scheduling (already using Buffer/Hootsuite)
- Analytics (not primary pain)
```

---

## `customer-interview` — Interview Planning

**When to use:** Before running customer interviews

### What It Does

Provides interview guide and synthesis framework for structured customer interviews.

### Output

- Interview guide (questions organized by stage)
- Synthesis template (how to extract insights)

### Example Interview Guide

```markdown
# Customer Interview Guide

## Introduction (2 min)
"Thanks for taking the time. I'm [Name] from [Company]. We're working on [product] and want to understand how [target audience] currently handle [problem]. This isn't a sales call — I'm here to learn."

## Background (5 min)
- What's your role?
- How big is your company?
- What does a typical day look like?

## Problem Discovery (15 min)
- Walk me through the last time you [job-to-be-done]. What happened?
- What did you try before? Why did it work/not work?
- How often does this problem come up?
- What's the cost of not solving this? (time, money, stress)

## Current Solution (10 min)
- What are you using now to solve this?
- What do you like about it?
- What's frustrating?
- If that solution disappeared, what would you use instead?

## Ideal Solution (5 min)
- If you could wave a magic wand, what would the perfect solution look like?
- What would make you switch from your current solution?

## Wrap-up (3 min)
- Is there anything I didn't ask that I should have?
- Can I follow up if we build something based on this?
```

---

## `competitive-analysis` — Competitive Landscape

**When to use:** Before positioning, quarterly review

### What It Does

Maps competitive landscape and identifies white space opportunities.

### Process

1. **Identify competitors** — Direct, indirect, status quo
2. **Analyze positioning** — How they position themselves
3. **Map strengths/weaknesses** — What they do well/poorly
4. **Identify white space** — Unmet needs or underserved segments

### Example Output (AuthorityMax)

```markdown
# Competitive Analysis: AuthorityMax

## Competitor Map

| Competitor | Positioning | Strength | Weakness | Price |
|------------|-------------|----------|----------|-------|
| **Taplio** | LinkedIn growth tool | Scheduling + analytics | Generic AI content | $39-$199/mo |
| **Scriptly** | Executive ghostwriting | High-touch, personalized | $10k/mo, slow onboarding | $10k/mo |
| **ChatGPT** | General AI assistant | Flexible, cheap | Generic outputs, no LinkedIn specialization | $20/mo |
| **Manual** | DIY posting | 100% authentic | Time-intensive (30-60 min/post) | $0 |

## White Space Opportunities

**Gap 1: Affordable + High Quality**
- Taplio is affordable but low quality
- Scriptly is high quality but $10k/mo
- **Opportunity:** $49/mo with voice training quality

**Gap 2: Founder-Specific**
- Generic tools serve everyone (creators, coaches, agencies)
- **Opportunity:** Build for B2B SaaS founders specifically

**Gap 3: Voice Preservation**
- Competitors focus on templates or generic AI
- **Opportunity:** Train on user's writing, preserve voice
```

---

## `market-sizing` — TAM/SAM/SOM

**When to use:** Pitch decks, strategic planning, investor conversations

### What It Does

Calculates Total Addressable Market, Serviceable Addressable Market, and Serviceable Obtainable Market.

### Example Output (AuthorityMax)

```markdown
# Market Sizing: AuthorityMax

## TAM (Total Addressable Market)

**Market:** All LinkedIn users who post for professional reasons

- LinkedIn users worldwide: 1B
- Active monthly users: 310M
- Professional content creators: 31M (10% of active)
- **TAM:** 31M users × $49/mo × 12 = **$18.2B/year**

## SAM (Serviceable Addressable Market)

**Market:** B2B SaaS founders and executives (Series A+) in North America + Europe

- SaaS companies (Series A+): 50,000
- Founders + C-level (avg 3 per company): 150,000
- LinkedIn-active (60%): 90,000
- **SAM:** 90,000 × $49/mo × 12 = **$53M/year**

## SOM (Serviceable Obtainable Market — Year 3)

**Target:** 5% of SAM by Year 3

- 90,000 × 5% = 4,500 customers
- **SOM:** 4,500 × $49/mo × 12 = **$2.6M/year**

## Sources
- LinkedIn user stats: LinkedIn Q2 2025 earnings
- SaaS company count: Crunchbase (Nov 2025)
- LinkedIn activity rate: Hootsuite Social Media Trends 2025
```

---

## `marketing-psychology` — Persuasion Principles

**When to use:** Before writing copy, designing landing pages

### What It Does

Applies psychological principles (Cialdini, behavioral economics) to marketing.

### Example Output

```markdown
# Marketing Psychology Recommendations: AuthorityMax

## Principle 1: Social Proof (Cialdini)

**Application:**
- Homepage: "1,247 founders use AuthorityMax"
- Testimonials with photos + company logos
- "As seen in" media mentions

**Why it works:** Founders look to peer founders for validation

## Principle 2: Scarcity

**Application:**
- Limited beta spots: "50 spots left this month"
- Early adopter pricing: "Lock in $39/mo before March 1"

**Why it works:** Triggers urgency, prevents "I'll come back later"

## Principle 3: Authority

**Application:**
- Founder credentials: "Built by ex-[Big Tech] engineers"
- Media coverage: TechCrunch, Product Hunt #1

**Why it works:** Establishes credibility quickly

## Principle 4: Commitment & Consistency

**Application:**
- Free plan → Pro upgrade path (small commitment first)
- Voice training process = investment (sunk cost effect)

**Why it works:** Once invested, more likely to continue
```

---

## Research Skills: Full Workflow

```
1. customer-interview → Plan and run 10-15 interviews
2. customer-research → Synthesize interviews into JTBD insights
3. icp-research → Define ideal customer profile
4. competitive-analysis → Map competitive landscape
5. market-sizing → Calculate TAM/SAM/SOM (if needed for pitch)
6. marketing-psychology → Apply persuasion principles to copy
```

**Time investment:** 8-12 hours total

**Output:** Research foundation for positioning and messaging

---

## Next Steps

- [Positioning Skills](./positioning.md) — Use research to inform positioning
- [Content & Copy Skills](./content-copy.md) — Write copy grounded in research
- [Commands](../commands/workflow-commands.md) — Use `/cm:research` to run research workflow
