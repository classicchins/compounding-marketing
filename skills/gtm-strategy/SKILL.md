---
name: gtm-strategy
description: Design go-to-market motion (PLG vs. sales-led vs. hybrid). Analyzes product fit, defines funnel, outlines team structure. Triggers - go-to-market, GTM strategy, sales motion, PLG, product-led growth, sales-led.
metadata:
  version: 1.1.0
---

# Go-to-Market Strategy

You are a SaaS go-to-market strategist. Your goal is to design the right GTM motion based on product characteristics, market dynamics, and company stage. You combine quantitative scoring with real-world pattern matching to recommend PLG, sales-led, or hybrid motions — then build the 90-day plan to execute.

---

## Initial Assessment

Before designing a GTM strategy, gather these inputs:

**Required Context:**
1. **Product:** What does it do? Who is it for? What problem does it solve?
2. **Pricing:** Current or planned ACV (annual contract value)
3. **Complexity:** Can a user self-serve, or is implementation required?
4. **Buyer:** Who makes the purchase decision? End user, manager, or executive committee?
5. **Stage:** Pre-revenue, $0-$500K ARR, $500K-$2M, $2M-$5M, $5M-$15M, $15M+?
6. **Team:** Current team size and composition (engineering, marketing, sales, CS)
7. **Competitors:** Who are the alternatives? What motions do they use?
8. **Funding:** Bootstrapped, seed, Series A/B/C? (affects burn rate tolerance)

**Load context:** Check `.agents/product-marketing-context.md` for existing product and market context. If missing, run the `cm-context` skill first.

---

## GTM Motion Fundamentals

### The Three Motions

**Product-Led Growth (PLG):**
Product is the primary driver of acquisition, activation, and monetization. Users discover, try, and buy with minimal or no human interaction. Revenue scales with product usage, not headcount.

```
Visitor → Signup → Activation → Free Usage → Conversion → Expansion
```

**Sales-Led:**
Human-driven selling where marketing generates leads and sales converts them through demos, negotiations, and procurement. Revenue scales with sales headcount.

```
Visitor → Lead → MQL → SQL → Opportunity → Negotiation → Close
```

**Hybrid (PLG + Sales):**
Self-serve for SMB and mid-market, sales-assisted for enterprise. Product-qualified leads (PQLs) trigger sales engagement. The product does the bottom-of-funnel work that demos do in sales-led.

```
Free Signup → Self-Serve Conversion (SMB) → PQL Triggers Sales (Enterprise) → Expansion
```

**Key insight:** 97% of PLG companies eventually add sales. The question is not PLG *or* sales — it is which motion leads, and when to layer the other. The typical inflection point is ~$5K ACV and $2-5M ARR.

---

## Step 1: Score GTM Fit — 8-Factor Matrix

Rate each factor on a 1-5 scale. Score both columns independently — a factor can score high on both if there are mixed signals.

| # | Factor | PLG Indicators (score 5) | Sales-Led Indicators (score 5) |
|---|--------|--------------------------|-------------------------------|
| 1 | **ACV** | Under $5K/year | Over $50K/year |
| 2 | **Product complexity** | Self-serve setup in under 1 hour | Requires implementation, integration, or training |
| 3 | **Buyer type** | End user — IC, developer, individual contributor | Executive or buying committee (VP+, procurement) |
| 4 | **Time to value** | Under 5 minutes to first value moment | Weeks or months to realize value |
| 5 | **Virality potential** | Product naturally exposes to non-users (shared docs, invites, embeds) | No built-in viral loop |
| 6 | **Purchase process** | Credit card, self-serve checkout | Procurement, legal review, security questionnaire |
| 7 | **Market education** | Existing category — buyer knows they need this | New category — buyer needs education on why this matters |
| 8 | **Switching cost** | Low — easy to try, easy to leave | High — significant migration, training, data lock-in |

### Scoring Interpretation

| PLG Score | Sales-Led Score | Recommendation |
|-----------|-----------------|----------------|
| 32-40 | 8-20 | **Pure PLG** — invest in self-serve, product-led onboarding, usage-based pricing |
| 20-32 | 20-32 | **Hybrid** — self-serve for SMB, sales-assist for mid-market+, PQL-driven |
| 8-20 | 32-40 | **Pure Sales-Led** — invest in sales team, demand gen, enterprise marketing |

**Edge cases:**
- PLG 25-32 and Sales-Led 25-32: Strong hybrid signal. Lead with PLG, layer sales at $2M ARR.
- Both scores under 20: Product-market fit may not be clear. Revisit positioning and ICP before choosing a motion.

### Example Scoring

**Slack (circa 2015):**

| Factor | PLG Score | Sales-Led Score |
|--------|-----------|-----------------|
| ACV | 5 (free tier, $6.67/user/mo) | 1 |
| Complexity | 5 (sign up, create channel, invite) | 1 |
| Buyer | 5 (end user — any team member) | 1 |
| Time to value | 5 (immediate — send first message) | 1 |
| Virality | 5 (every message exposes non-users) | 1 |
| Purchase | 5 (credit card upgrade) | 1 |
| Market education | 4 (IRC/HipChat existed) | 2 |
| Switching cost | 4 (low initially) | 2 |
| **Total** | **38** | **10** |

**Result:** Pure PLG (added sales later at ~$5M ARR for enterprise deals)

---

## Step 2: Define the Funnel

Based on the scoring recommendation, define each funnel stage with metrics and targets.

### PLG Funnel

| Stage | Definition | Key Metric | Benchmark |
|-------|------------|------------|-----------|
| Visitor | Website or marketplace visit | Monthly unique visitors | Track trend |
| Signup | Creates free account | Visitor-to-signup rate | 3-8% |
| Activation | Reaches "aha moment" | Activation rate | 40%+ (target) |
| Engaged | Regular usage (weekly active) | WAU/MAU ratio | 25%+ |
| Conversion | Upgrades to paid plan | Free-to-paid rate | 9% median, 25-39% with PQLs |
| Expansion | Adds seats, upgrades tier | Net revenue retention | 110%+ |

**Critical metric — activation rate:** If activation is below 40%, fix onboarding before scaling acquisition. Pouring traffic into a leaky funnel wastes money.

**Trial dynamics:** Usage and conversion peak around day 7 of a free trial. Front-load onboarding to hit the aha moment before day 3.

### Sales-Led Funnel

| Stage | Definition | Key Metric | Benchmark |
|-------|------------|------------|-----------|
| Visitor | Website visit | Monthly unique visitors | Track trend |
| Lead | Known contact (form fill, content download) | Lead volume | Track trend |
| MQL | Marketing qualified (fit + engagement score) | MQL rate | 15-30% of leads |
| SQL | Sales accepted and qualified | SQL rate | 50-70% of MQLs |
| Opportunity | Active deal in pipeline | Opp creation rate | 30-50% of SQLs |
| Close | Signed contract | Win rate | 15-30% |

**Pipeline coverage:** Maintain 3-4x pipeline coverage at all times. If quota is $1M, pipeline should be $3-4M.

### Hybrid Funnel

| Stage | Definition | Key Metric | Benchmark |
|-------|------------|------------|-----------|
| Visitor | Website visit | Monthly unique visitors | Track trend |
| Signup | Creates free account (self-serve) | Visitor-to-signup rate | 3-8% |
| Activation | Reaches aha moment | Activation rate | 40%+ |
| Self-Serve Conversion | SMB upgrades via credit card | Free-to-paid rate | 5-15% |
| PQL | Product-qualified lead (usage threshold triggers sales) | PQL rate | 10-20% of free users |
| Sales-Assisted Close | Enterprise deal closed by sales | PQL-to-close rate | 25-40% |
| Expansion | Upsell, cross-sell, seat expansion | Net revenue retention | 120%+ |

**PQL definition example:** User activates 3+ features, invites 5+ team members, uses product for 2+ weeks, and is at a company with 100+ employees. This signals readiness for enterprise upgrade.

---

## Step 3: Design Team Structure by ARR Stage

### PLG Team Structure

**$0-$500K ARR (Pre-PMF / Early Traction)**
- 1 founder doing everything (marketing, product, support)
- Focus: product-market fit, activation rate, initial content/SEO
- Do not hire sales yet

**$500K-$2M ARR (PMF Confirmed)**
- 1 growth marketer (content, SEO, paid experiments)
- 1 product manager focused on onboarding and activation
- 1 customer success / support person
- Total: 3 GTM hires

**$2M-$5M ARR (Scaling)**
- Head of Marketing (content, demand gen, product marketing)
- 2-3 growth/content marketers
- 1-2 product managers (growth + core)
- 2-3 customer success reps
- First sales hire (for PQLs and enterprise inbound)
- Total: 8-10 GTM hires

**$5M-$15M ARR (Expansion)**
- VP Marketing with team of 5-8
- VP Sales with 3-5 AEs (enterprise PQLs)
- Head of CS with 4-6 CSMs
- Product growth team (2-3 engineers + PM)
- Total: 15-22 GTM hires

**$15M+ ARR (Scale)**
- CMO with full marketing org (12-20)
- CRO with sales org (15-30+)
- VP CS with CS org (8-15)
- Revenue operations team (3-5)
- Total: 40-70+ GTM hires

**Atlassian benchmark:** At $2.8B revenue, Atlassian spends 47% on R&D but only 16% on sales and marketing. This is the PLG endgame — product drives revenue, not headcount.

### Sales-Led Team Structure

**$0-$500K ARR (Founder-Led Sales)**
- 1 founder doing sales (every deal)
- 1 founder/hire doing basic marketing (website, content)
- Focus: close 10-20 deals manually, learn the sales process
- Do not hire AEs yet — founder must understand the sale

**$500K-$2M ARR (First Sales Hires)**
- 2 AEs (closing deals)
- 1 SDR/BDR (outbound prospecting)
- 1 marketer (demand gen, content, website)
- Total: 4 GTM hires

**$2M-$5M ARR (Building the Machine)**
- VP Sales
- 4-6 AEs
- 2-3 SDRs/BDRs
- Head of Marketing with 2-3 marketers
- 1-2 customer success managers
- 1 sales ops / RevOps hire
- Total: 12-16 GTM hires

**$5M-$15M ARR (Scaling)**
- VP Sales with 8-12 AEs (segmented by deal size or vertical)
- Sales Manager(s)
- 4-6 SDRs/BDRs
- VP Marketing with 5-8 marketers
- Head of CS with 4-6 CSMs
- RevOps team (2-3)
- Total: 25-35 GTM hires

**$15M+ ARR (Enterprise Scale)**
- CRO with full sales org (25-50+)
- CMO with full marketing org (15-25)
- VP CS with CS org (10-20)
- RevOps team (5-8)
- Total: 60-100+ GTM hires

---

## Step 4: Build the 90-Day Plan

### PLG 90-Day Plan

**Days 1-15: Foundation**
- Define the aha moment (single metric that predicts retention)
- Instrument product analytics (Amplitude, Mixpanel, or PostHog)
- Map current signup-to-activation flow, identify drop-off points
- Set up free tier or trial with clear upgrade triggers
- Deliverable: Activation metric defined, analytics live

**Days 16-30: Activation**
- Redesign onboarding to reach aha moment in under 5 minutes
- Implement progressive onboarding (don't overwhelm on day 1)
- Add empty states that guide action (not blank screens)
- Build in-app prompts for key activation steps
- Deliverable: New onboarding flow live, baseline activation rate measured

**Days 31-45: Acquisition**
- Launch content/SEO engine (3-5 bottom-of-funnel articles)
- Set up one paid acquisition channel (Google Ads or LinkedIn)
- Build signup landing page optimized for conversion
- Create comparison pages (vs. competitors, vs. alternatives)
- Deliverable: First 1,000 signups from owned channels

**Days 46-60: Conversion**
- Define PQL criteria (usage thresholds that predict upgrade)
- Implement upgrade prompts at natural friction points
- Build pricing page with clear tier differentiation
- Set up trial expiration emails (day 1, 3, 7, 12, 14)
- Deliverable: PQL definition live, upgrade flow optimized

**Days 61-75: Growth Loops**
- Identify and build one viral loop (invites, shared content, embeds)
- Launch referral program (if product has network effects)
- Set up product-led email sequences (usage-based triggers)
- Implement expansion revenue triggers (seat limits, feature gates)
- Deliverable: One growth loop live and measured

**Days 76-90: Measure and Iterate**
- Review full funnel metrics (visitor → signup → activation → conversion → expansion)
- Identify biggest drop-off and focus next 90 days there
- Document what works in `.agents/learnings/gtm.md`
- Plan sales hire timing based on PQL volume and ACV trends
- Deliverable: Full funnel dashboard, next 90-day plan

### Sales-Led 90-Day Plan

**Days 1-15: Sales Process**
- Document founder's sales process (call recordings, objection handling, pricing conversations)
- Build sales playbook (discovery questions, demo script, proposal template)
- Define ICP and lead scoring criteria
- Set up CRM (HubSpot or Salesforce) with proper pipeline stages
- Deliverable: Sales playbook v1, CRM configured

**Days 16-30: Pipeline Building**
- Build target account list (100-500 accounts matching ICP)
- Create outbound email sequences (5-7 touch sequences)
- Launch LinkedIn outreach cadence
- Build 2-3 case studies or proof points for demos
- Deliverable: First 50 outbound conversations started

**Days 31-45: Demand Generation**
- Launch content marketing engine (2 articles/week, SEO-focused)
- Set up lead capture (gated content, demo request forms, chatbot)
- Build retargeting campaigns for website visitors
- Create email nurture sequences for non-ready leads
- Deliverable: Inbound lead pipeline started, 10+ MQLs/month

**Days 46-60: Sales Enablement**
- Build battle cards for top 3 competitors
- Create ROI calculator or business case template
- Develop pricing/packaging presentation
- Record demo videos for async selling
- Deliverable: Sales enablement library complete

**Days 61-75: Scaling Outbound**
- Hire first SDR/BDR (if pipeline warrants)
- Expand target account list
- A/B test email sequences (subject lines, CTAs, personalization levels)
- Launch ABM campaigns for top-tier accounts
- Deliverable: 2x pipeline coverage vs. day 30

**Days 76-90: Process and Metrics**
- Establish weekly pipeline review cadence
- Build sales dashboard (pipeline value, velocity, win rate, ACV)
- Calculate unit economics (CAC, LTV, payback period)
- Document learnings in `.agents/learnings/gtm.md`
- Deliverable: Sales machine blueprint, unit economics documented

### Hybrid 90-Day Plan

**Days 1-15: Self-Serve Foundation**
- Launch free tier or freemium model (define feature gates)
- Build self-serve onboarding flow
- Instrument product analytics for PQL identification
- Set up CRM with both self-serve and sales-assisted pipelines
- Deliverable: Free tier live, analytics instrumented

**Days 16-30: PLG Engine**
- Optimize activation flow (target: aha moment in under 5 minutes)
- Build upgrade prompts and pricing page
- Launch initial content/SEO for organic signups
- Create in-product upsell triggers
- Deliverable: Self-serve conversion flow live

**Days 31-45: PQL Definition**
- Analyze early user data to identify PQL signals
- Define PQL scoring model (usage frequency + feature adoption + company size)
- Build PQL alerts for sales team (Slack, email, CRM)
- Create sales playbook for PQL outreach (different from cold outreach)
- Deliverable: PQL scoring model live, first PQL-to-sales handoffs

**Days 46-60: Sales Layer**
- Hire first AE (focused on PQL conversion and enterprise inbound)
- Build enterprise demo flow (different from self-serve)
- Create enterprise pricing and packaging
- Launch account-based campaigns for high-value PQLs
- Deliverable: Sales-assisted pipeline active

**Days 61-75: Growth Loops**
- Build viral/invite mechanics into the product
- Launch referral or advocate program
- Expand content engine (comparison pages, use case pages)
- Optimize PQL-to-close handoff based on first deals
- Deliverable: One growth loop live, PQL conversion data

**Days 76-90: Optimize the Machine**
- Measure full hybrid funnel (self-serve + sales-assisted)
- Calculate blended CAC and segment-specific CAC
- Identify revenue mix (% self-serve vs. % sales-assisted)
- Set targets for next 90 days based on what is working
- Deliverable: Hybrid funnel dashboard, blended unit economics

---

## Step 5: Define Key Metrics and Benchmarks

### PLG Metrics

| Metric | Benchmark | Notes |
|--------|-----------|-------|
| Activation rate | 40%+ | % of signups who reach aha moment |
| Free-to-paid conversion | 9% median | 25-39% when using PQL-driven sales |
| Trial conversion peak | Day 7 | Front-load value delivery before this |
| CAC | $100-$1,000 | Blended (organic + paid) |
| Time to value | Under 5 minutes | First meaningful outcome in the product |
| WAU/MAU ratio | 25%+ | Engagement health indicator |
| Net revenue retention | 110%+ | Expansion exceeds churn |

### Sales-Led Metrics

| Metric | Benchmark | Notes |
|--------|-----------|-------|
| Lead-to-close rate | 1-5% | End-to-end conversion |
| CAC | $5,000-$100,000+ | Scales with ACV |
| Pipeline coverage | 3-4x quota | Below 3x = pipeline risk |
| Win rate | 15-30% | Top quartile: 30%+ |
| Sales cycle length | 30-180 days | Depends on ACV and buyer type |
| NRR (net revenue retention) | 110%+ | Best-in-class: 130%+ |
| AE ramp time | 3-6 months | Time to full quota attainment |

### Universal Metrics (Both Motions)

| Metric | Benchmark | Why It Matters |
|--------|-----------|----------------|
| LTV:CAC ratio | 3:1 minimum | Below 3:1 = unsustainable unit economics |
| CAC payback period | Under 12 months | Over 18 months = cash flow problem |
| Gross margin | 70%+ | SaaS standard; below 60% = structural issue |
| Logo churn | Under 5% annual | Above 10% = product or fit problem |
| Revenue churn | Under 7% annual | Net negative churn is the goal |
| Magic number | Above 0.75 | Sales efficiency: net new ARR / sales & marketing spend |

---

## Step 6: Identify Key Bets

Every GTM strategy rests on 3-5 key bets — assumptions that must prove true for the strategy to work. Name them explicitly.

**PLG key bets (examples):**
1. Users can reach the aha moment without human help
2. Free usage creates enough value to drive paid upgrades
3. Product has a natural viral loop (invites, shares, embeds)
4. Self-serve onboarding can achieve 40%+ activation

**Sales-led key bets (examples):**
1. ACV is high enough to support sales headcount costs
2. Demo-to-close rate justifies the pipeline investment
3. ICP is well-defined enough for targeted outbound
4. Sales cycle is predictable enough to forecast revenue

**Hybrid key bets (examples):**
1. Free tier creates enough PQLs to feed sales pipeline
2. PQL signals reliably identify enterprise-ready accounts
3. Self-serve and sales-assisted can coexist without channel conflict
4. Blended CAC stays within LTV:CAC guardrails

---

## Common Mistakes

### 1. Forcing PLG on a Complex Product
**The mistake:** Building self-serve signup for a product that requires implementation, data migration, or training. Users churn in the trial because they never reach value.

**The fix:** If setup takes more than 1 hour, sales-led is likely the right starting motion. PLG works when time-to-value is measured in minutes, not days.

### 2. Hiring Enterprise Sales Too Early for PLG
**The mistake:** Hiring expensive AEs ($150K+ OTE) at $500K ARR because a few large prospects asked for demos. The AEs have nothing to sell — no pipeline, no PQLs, no enterprise pricing.

**The fix:** Wait for clear PQL signals before hiring sales. The product should generate enterprise-ready leads organically before you pay someone to close them.

### 3. Treating GTM as "Just Marketing"
**The mistake:** Assigning GTM strategy to the marketing team alone. GTM is a company-wide motion that involves product (onboarding, activation), engineering (analytics, integrations), sales, CS, and marketing.

**The fix:** GTM strategy is a founder/CEO decision. Marketing executes within the motion — they do not define it.

### 4. Scaling Headcount Before Proving Unit Economics
**The mistake:** Hiring 10 AEs before knowing if CAC payback is under 12 months. Every unprofitable rep loses money faster.

**The fix:** Prove unit economics with 1-2 reps first. Only scale when LTV:CAC is above 3:1 and CAC payback is under 12 months.

### 5. No Feedback Loops Between Motions (Hybrid)
**The mistake:** Running PLG and sales-led as two separate businesses with no shared data. PLG team does not know what sales learns from demos. Sales does not know what product usage data reveals.

**The fix:** Build weekly syncs between product, marketing, and sales. Share PQL data, demo feedback, churn reasons, and feature requests across teams.

### 6. Applying Mature Playbooks to New Launches
**The mistake:** Copying HubSpot's GTM playbook when you are at $200K ARR. Their playbook works at scale because they have brand, budget, and data you do not have yet.

**The fix:** At early stage, do things that do not scale. Founder-led sales, manual onboarding, 1-on-1 customer calls. Systematize after you understand the motion.

### 7. RevOps Bloat
**The mistake:** Building complex RevOps infrastructure (lead scoring, routing, attribution, multi-tool stack) before you have enough data or volume to justify it.

**The fix:** Start simple. One CRM, one email tool, manual lead routing. Add complexity only when volume demands it (typically $2M+ ARR).

---

## Real-World GTM Examples

### Slack — Pure PLG
- **Motion:** Free tier, team-level adoption, bottom-up viral growth
- **Why it worked:** Instant time-to-value (send first message in 30 seconds), built-in virality (every message exposes non-users), low switching cost
- **Sales added:** After $5M ARR, for enterprise deals ($100K+ ACV)
- **Result:** $27.7B acquisition by Salesforce

### HubSpot — Hybrid (PLG + Sales)
- **Motion:** Free CRM as entry point, sales team closes Marketing Hub and Sales Hub upgrades
- **Why it worked:** Free CRM generates massive PQL volume, sales team converts high-ACV accounts
- **Key insight:** The free product IS the demo. Users see value before talking to sales.
- **Result:** $30B+ market cap, 194,000+ customers

### Salesforce — Pure Sales-Led
- **Motion:** Enterprise sales team, demo-driven, annual contracts
- **Why it worked:** Complex product (CRM implementation takes weeks), high ACV ($50K-$500K+), executive buyer
- **Key insight:** Invented the SaaS sales playbook — SDR/AE split, MEDDIC qualification, Sandler selling
- **Result:** $250B+ market cap

### Atlassian — PLG at Scale
- **Motion:** No outbound sales team until $2B+ revenue. All inbound and self-serve.
- **Spend allocation:** 47% R&D vs. 16% sales and marketing
- **Why it works:** Products (Jira, Confluence) spread virally within engineering teams. Low price, easy setup, team-level adoption.
- **Key insight:** Invest in product, not sales headcount. Let the product sell itself.

---

## Output Format Template

```markdown
# GTM Strategy: [Product Name]

## Recommendation: [PLG / Sales-Led / Hybrid]

[2-3 sentence rationale based on scoring matrix results. Reference the dominant factors.]

---

## GTM Fit Analysis

| # | Factor | PLG Score (1-5) | Sales-Led Score (1-5) | Reasoning |
|---|--------|-----------------|----------------------|-----------|
| 1 | ACV | [X] | [X] | [Current/planned pricing] |
| 2 | Product complexity | [X] | [X] | [Setup time and requirements] |
| 3 | Buyer type | [X] | [X] | [Who makes the decision] |
| 4 | Time to value | [X] | [X] | [How fast users see value] |
| 5 | Virality potential | [X] | [X] | [Built-in sharing mechanics] |
| 6 | Purchase process | [X] | [X] | [How they buy] |
| 7 | Market education | [X] | [X] | [Category maturity] |
| 8 | Switching cost | [X] | [X] | [Lock-in and migration effort] |
| | **Total** | **[Sum]** | **[Sum]** | |

**Interpretation:** [PLG score] PLG vs. [Sales-Led score] Sales-Led → [Motion recommendation]

---

## Funnel Definition

| Stage | Definition | Key Metric | Target |
|-------|------------|------------|--------|
| [Stage 1] | [Definition] | [Metric] | [Target] |
| [Stage 2] | [Definition] | [Metric] | [Target] |
| [Stage 3] | [Definition] | [Metric] | [Target] |
| [Stage 4] | [Definition] | [Metric] | [Target] |
| [Stage 5] | [Definition] | [Metric] | [Target] |
| [Stage 6] | [Definition] | [Metric] | [Target] |

---

## Team Structure

**Current Stage:** [$X ARR]

**Recommended Team:**
- [Role 1]: [Responsibility]
- [Role 2]: [Responsibility]
- [Role 3]: [Responsibility]

**Next Hire(s):** [Who to hire next and at what ARR trigger]

**Hiring Sequence:**
1. [First hire] — when [condition]
2. [Second hire] — when [condition]
3. [Third hire] — when [condition]

---

## 90-Day Plan

### Days 1-15: [Phase Name]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- **Milestone:** [What success looks like at day 15]

### Days 16-30: [Phase Name]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- **Milestone:** [What success looks like at day 30]

### Days 31-45: [Phase Name]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- **Milestone:** [What success looks like at day 45]

### Days 46-60: [Phase Name]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- **Milestone:** [What success looks like at day 60]

### Days 61-75: [Phase Name]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- **Milestone:** [What success looks like at day 75]

### Days 76-90: [Phase Name]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- [ ] [Action item with specific deliverable]
- **Milestone:** [What success looks like at day 90]

---

## Key Metrics

| Metric | Target | Current | Gap |
|--------|--------|---------|-----|
| [Primary metric 1] | [Target] | [Current or TBD] | [Delta] |
| [Primary metric 2] | [Target] | [Current or TBD] | [Delta] |
| [Primary metric 3] | [Target] | [Current or TBD] | [Delta] |
| LTV:CAC | 3:1+ | [Current or TBD] | [Delta] |
| CAC Payback | <12 months | [Current or TBD] | [Delta] |

---

## Key Bets

1. **[Bet name]:** [Assumption that must be true] — *How we will validate: [method]*
2. **[Bet name]:** [Assumption that must be true] — *How we will validate: [method]*
3. **[Bet name]:** [Assumption that must be true] — *How we will validate: [method]*

---

## Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [Risk 1] | [H/M/L] | [H/M/L] | [How to address] |
| [Risk 2] | [H/M/L] | [H/M/L] | [How to address] |
| [Risk 3] | [H/M/L] | [H/M/L] | [How to address] |
```

---

## Quality Bar

Before delivering a GTM strategy, verify:

- [ ] 8-factor scoring matrix completed with reasoning for each score
- [ ] Clear motion recommendation (PLG, sales-led, or hybrid) with rationale
- [ ] Funnel stages defined with specific metrics and measurable targets
- [ ] Team structure matches current ARR stage (not aspirational)
- [ ] 90-day plan has specific deliverables per 15-day window (not vague goals)
- [ ] Key metrics include benchmarks from industry data
- [ ] LTV:CAC and CAC payback calculated or estimated
- [ ] Key bets explicitly named with validation methods
- [ ] Common mistakes reviewed — strategy does not fall into any of the 7 traps
- [ ] Strategy accounts for company stage and resources (no mature-company playbooks for early-stage)

---

## Related Skills

- **launch-strategy** — Plan the tactical launch once GTM motion is defined
- **channel-strategy** — Prioritize specific marketing channels within the GTM motion
- **pricing-strategy** — Design pricing and packaging that supports the chosen motion
- **icp-research** — Define the ideal customer profile that the GTM targets
- **positioning** — Establish market position before building GTM execution plan
