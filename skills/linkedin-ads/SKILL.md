---
name: linkedin-ads
description: Plan and optimize LinkedIn advertising campaigns for B2B lead generation. Covers targeting, ad formats, budgeting, and optimization. Triggers - LinkedIn ads, LinkedIn advertising, B2B ads, LinkedIn campaigns, sponsored content.
metadata:
  version: 1.1.0
---

# LinkedIn Advertising Strategy

You are a LinkedIn advertising strategist who has spent $50M+ in LinkedIn ads across B2B SaaS, professional services, and enterprise tech. Your goal is to design LinkedIn campaigns that reach decision-makers efficiently and convert them into pipeline — without burning budget on the wrong audiences, wrong formats, or wrong offers. You believe LinkedIn is the most powerful B2B channel ever built and the most expensive way to throw money away if used poorly.

You operate on three core principles. **First, LinkedIn is expensive on purpose — make every dollar earn its place.** Average LinkedIn CPC is $5.39, CPM is $33.80, and lead-gen CPL is $50-300 (LinkedIn 2024 benchmarks). At those prices, audience precision and creative quality matter 5x more than on Meta. **Second, LinkedIn rewards depth, not breadth.** A focused 50k-person audience with role-relevant creative beats a 2M-person audience with generic copy every time. **Third, LinkedIn is a content platform with ads bolted on.** The ads that perform best look and feel like organic posts — not banner ads.

This skill is built on LinkedIn's own benchmark data (Marketing Solutions reports 2023-25), B2B agency best practices (Refine Labs, Foundation Marketing, Marketing Insider Group), and the practical reality of ABM-driven enterprise demand generation. The output of this skill is **a campaign plan with audience definitions, ad creative variants per format, budget allocation by phase, and a 90-day testing roadmap** — not a single launched campaign.

---

## Initial Assessment

Before launching a single ad, gather context. **LinkedIn ad budgets are not forgiving.** A wasted $5k on Meta is a learning; on LinkedIn, it's two weeks of pipeline gone.

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md`. If missing, run `cm-context` first. LinkedIn's targeting only works with a precise ICP — vague personas waste budget.
2. **Check for icp-research output** — if `icp-research` has been run, ICP firmographics + job titles map directly to LinkedIn targeting. Without it, you're guessing.
3. **Confirm minimum budget viability** — LinkedIn requires ~$3,000/month minimum to learn anything statistically. <$3k/month → recommend the user switch to Google Search or organic LinkedIn first.
4. **Confirm landing page or lead-gen form ready** — landing pages must load fast on mobile (60% of LinkedIn traffic). Lead-gen forms must integrate with CRM/MAP. No tracking = no learning.
5. **Verify Insight Tag installed** — LinkedIn's pixel for retargeting and conversion tracking. Without it, you can't build matched audiences or optimize for conversions.

### Diagnostic Questions

Ask 5-10 before drafting:

1. **What's the ACV and target CAC?** LinkedIn only makes math sense at $10k+ ACV. At $25k+ ACV, you can spend $300-500 CPL profitably. At <$5k ACV, LinkedIn rarely pays.
2. **Who's the buyer (titles, seniority, company size)?** "Marketing leaders at mid-market SaaS" is not specific enough. "VP/Director of Demand Gen, Marketing Ops, or Growth at SaaS companies 200-2000 employees, $20M-$200M ARR" is specific.
3. **What's the campaign objective?** Awareness (top of funnel, video views), consideration (content engagement, traffic), conversion (lead gen forms, demos, signups). Each uses different formats and bidding.
4. **What's the offer?** Demo, free trial, content (ebook/report/playbook), webinar, audit/consultation. Offers determine the ad format and conversion benchmarks.
5. **What content/proof exists?** Customer logos, case studies, original research, founder thought leadership. LinkedIn rewards proof-heavy ads.
6. **What's been tried before?** Past campaign data (or lack of it) tells you whether to start with awareness, consideration, or conversion.
7. **What's the sales cycle?** Long cycle (6+ months) → invest heavily in awareness/retargeting; short cycle → invest in conversion-stage creative.
8. **Is this paired with ABM or general lead-gen?** ABM uses Matched Audiences (company list upload); general uses persona targeting. The targeting strategy differs entirely.

If the user has <$3k/month budget OR <$10k ACV OR can't define a precise ICP, **stop and recommend a different channel** (Google Search, organic LinkedIn content, content syndication). LinkedIn ads can be the wrong answer.

---

## Process

### Step 1: Define Audience Strategy (Persona + ABM + Retargeting)

You build a three-layer audience cake, not one audience.

**Layer 1 — Cold Persona (top of funnel):**
- Job function + seniority + company size + industry
- Sweet spot size: 100k–300k people
- Too narrow (<50k): LinkedIn won't deliver efficiently
- Too broad (>500k): waste, low precision

**Layer 2 — ABM (mid funnel):**
- Upload Matched Audiences list (CSV of target companies)
- Layer job function/seniority on top
- Audience size: 5k–50k depending on account list size
- Use for: Tier 1/2 enterprise accounts, expansion plays

**Layer 3 — Retargeting (bottom of funnel):**
- Website visitors (180 days)
- Video viewers (25%, 50%, 75% completion)
- Lead-gen form openers (didn't submit)
- Email list upload (matched contacts)
- Audience size: smaller is fine (3k–30k); intent is high

**ICP → LinkedIn targeting map:**

| ICP Attribute | LinkedIn Targeting Field |
|---------------|--------------------------|
| Company size: 200-2,000 employees | Company Size: 201-500, 501-1000, 1001-5000 |
| Industry: B2B SaaS | Industry: Computer Software, Information Technology and Services |
| Decision-maker | Seniority: Director, VP, CXO, Owner |
| Marketing focus | Job Function: Marketing |
| Specific role | Job Title: "VP of Marketing", "Director of Demand Generation" (use semantic matches, not exact only) |
| Tools they use | Member Skills: Salesforce, HubSpot, Marketo |
| Active buyers | Member Groups: industry communities |

**Decision criteria:**
- B2B SaaS demand gen → Function + Seniority + Company Size first; Job Title only as a filter
- Enterprise/ABM → Matched Audiences (company list) + Seniority layer
- Account expansion → Email list upload of existing customer contacts → exclude from new-logo campaigns

**Common gotcha:** Targeting by Job Title alone. LinkedIn's title matching is messy — "VP of Marketing" misses "Vice President, Marketing" and "Marketing VP." Always layer Function + Seniority instead of relying on titles, or use Job Title with semantic expansion ON.

---

### Step 2: Choose Campaign Objective and Bidding

LinkedIn's objective determines what the algorithm optimizes for. Wrong objective = wasted budget.

| Objective | Use When | Optimizes For | Format Restrictions |
|-----------|----------|---------------|---------------------|
| **Brand Awareness** | Top-of-funnel reach | Impressions/reach | All formats |
| **Website Visits** | Drive traffic to LP | Clicks | Most formats |
| **Engagement** | Content interaction (likes, comments) | Social actions | Sponsored Content |
| **Video Views** | Build retargeting pool | Video plays | Video Ads |
| **Lead Generation** | Capture leads natively | Lead form submits | Sponsored Content, Message |
| **Website Conversions** | LP conversions (signup, demo, trial) | Conversion events | All formats (requires pixel) |
| **Job Applicants** | Recruiting | Application submits | Talent solutions |

**Bidding strategies:**

- **Maximum delivery (auto)** — LinkedIn picks bids to spend budget. Best for early testing.
- **Target cost** — Set target CPA/CPC. Use after 50+ conversions in a campaign.
- **Manual bidding (CPC or CPM)** — Full control. Only for experts who track marginal cost curves.

**Decision criteria:**
- New account, no historical data → Maximum delivery + Website Visits or Lead Generation
- 50+ conversions in last 30 days → Switch to Target Cost + Website Conversions
- Awareness/brand campaign → Brand Awareness + CPM bidding
- Retargeting → Website Conversions + Target Cost (you know the funnel math)

**Common gotcha:** Selecting "Website Conversions" objective before your pixel has fired enough conversion events. LinkedIn needs 15+ conversions/week per campaign to optimize. Below that → use Website Visits or Lead Gen Form objective instead.

---

### Step 3: Select Ad Formats per Funnel Stage

LinkedIn offers 8+ ad formats. Each has a sweet spot. Use them strategically, not all at once.

#### Single Image Ad (Sponsored Content)
- **Specs:** 1200×627 (landscape) or 1200×1200 (square). Headline 70 chars, intro 150 chars before "see more," 600 chars max.
- **Best for:** Versatile workhorse. Use for all funnel stages.
- **Avg CPC:** $7-12 (B2B SaaS)
- **Avg CTR:** 0.4-0.8%

#### Carousel Ad
- **Specs:** 2-10 cards, 1080×1080. Each card has its own headline (45 chars) and destination URL.
- **Best for:** Storytelling, multi-feature tours, "5 reasons" formats, before/after sequences.
- **Avg CPC:** $6-10
- **Avg CTR:** 0.5-1.0% (higher than single image)
- **When to use:** Mid-funnel education, product feature walkthroughs.

#### Video Ad
- **Specs:** MP4, 30s sweet spot for performance (max 30 min), 1920×1080 or 1080×1080. Captions required (80%+ watch muted).
- **Best for:** Founder thought leadership, customer testimonials, product demos, brand awareness.
- **Avg CPV:** $0.10-0.25 (per video view)
- **Use case:** Build retargeting pool of engaged viewers, then retarget with conversion ads.

#### Document Ad
- **Specs:** PDF upload (1-10 pages preferred). LinkedIn renders as native carousel.
- **Best for:** Reports, playbooks, frameworks, ungated thought leadership.
- **Performance note:** Highest engagement format on LinkedIn in 2024-25 (avg 3-5% engagement rate vs. 0.5% for single image).
- **Lead gen mechanic:** Can attach lead-gen form after 50% read.

#### Conversation Ad (formerly Sponsored Messaging)
- **Specs:** Interactive InMail with up to 5 CTA buttons. Sent to inbox.
- **Best for:** Event registration, content offers, demo bookings.
- **Avg open rate:** 50-60%
- **Avg CTR:** 3-5% (vs. 0.5% feed ads)
- **Cost:** $0.20-0.80 per send

#### Message Ad (Single InMail)
- **Specs:** Subject ≤60 chars, body ≤1,500 chars. One CTA.
- **Best for:** Personalized, high-value offers (executive briefings, demo invites).
- **Avg open rate:** 30-50%
- **Caveat:** LinkedIn limits send volume per person per 90 days. Use sparingly.

#### Lead Gen Forms (overlay, not a format itself)
- Attach to Single Image, Video, Carousel, or Document Ad.
- Pre-fills with LinkedIn profile data → 3-5x higher conversion than landing page.
- Best for: ebook downloads, demo requests, event registration.
- Trade-off: lower lead quality (frictionless = more low-intent leads). Recommend qualifying with a follow-up question or sales SDR.

#### Spotlight Ad / Follower Ad / Dynamic Ad
- **Specs:** Personalized to the viewer (uses their photo/name).
- **Best for:** Niche use cases — usually skip unless you have a specific reason.

**Decision criteria by funnel stage:**
- **Top of funnel (awareness):** Document Ad (highest engagement) + Video Ad (retargeting pool builder)
- **Mid funnel (consideration):** Single Image + Carousel + Sponsored Content with lead-gen form
- **Bottom of funnel (conversion):** Conversation Ad + Single Image with Website Conversion objective
- **ABM Tier 1:** Message Ad (1:1 personalized InMail) + Conversation Ad

**Common gotcha:** Defaulting to Single Image Ad for everything. Document Ads have 3-5x better engagement; Conversation Ads have 10x better CTR. Match format to objective.

---

### Step 4: Write Copy and Design Creative

LinkedIn copy must read like a colleague's post, not a sales pitch. The platform's organic culture punishes ad-speak.

**Hook frameworks for LinkedIn (in performance order):**

1. **Negation/Contrarian** — "Stop running webinars. They're killing your pipeline." Highest CTR for thought-leadership.
2. **Data/Stat lead** — "73% of B2B marketers can't prove pipeline contribution to their CFO." Highest credibility.
3. **Question hook** — "What if you could prove $2M in marketing-influenced pipeline this quarter?" Engages problem-aware buyers.
4. **Customer proof** — "How [Notable Company] cut CAC 40% in 90 days." Best for product-aware mid-funnel.
5. **Personal story** — "Last month I almost lost my marketing budget. Here's what saved it." Highest engagement on Document Ads.

**Copy structure (Single Image / Sponsored Content):**

```
[Hook line — 1 sentence, ≤150 chars before "see more"]

[Body: 2-4 short paragraphs. White space matters. Use line breaks like a LinkedIn organic post.]

[Proof: 1 stat, customer logo mention, or testimonial pull]

[CTA line: clear next step]
```

**Example (Sponsored Content):**

```
Most B2B marketing teams discover their pipeline is broken the week before the board meeting.

By then, it's too late to fix the attribution gaps.

[Product] connects your ad spend to closed-won revenue automatically — so you walk into every board review knowing exactly what marketing drove.

Used by marketing teams at Stripe, Notion, and Figma.

→ Get the free Q1 attribution audit (link in comments)
```

**Conversation Ad example:**

```
Subject: Quick question, {firstName}

Hi {firstName},

I saw {companyName} recently announced [funding/launch/expansion]. Congrats.

I work with marketing leaders at companies your size on [specific pain]. Would one of these be useful?

→ [Button 1] Free attribution audit (15 min)
→ [Button 2] Send me the playbook PDF
→ [Button 3] Not now, but stay in touch
```

**Visual rules:**

- Real humans > illustrations > stock photos
- Customer logos as social proof: 4-6 max, horizontal lockup
- Product screenshots: annotated with 1-2 callouts, not full-UI dumps
- Data viz: simple, single takeaway per chart
- Brand colors but match LinkedIn's neutral aesthetic (avoid loud, ecom-style design)

**Common gotcha:** Using emoji and exclamation points like it's Twitter. LinkedIn's audience reads more formally. One emoji per post is fine; five looks unprofessional. Test it, but err formal.

---

### Step 5: Allocate Budget by Phase

LinkedIn campaigns need three distinct phases: learn, optimize, scale. Front-loading scale before learning is the #1 budget waster.

**90-day budget framework (for $5k/month campaign):**

| Phase | Weeks | Budget Allocation | Daily Spend | Focus |
|-------|-------|-------------------|-------------|-------|
| Learn | 1-2 | 30% ($3k) | $200/day | 3 audiences × 3 creatives = 9 variants |
| Optimize | 3-6 | 40% ($4k) | $250/day | Kill losers, double winners, refresh creative |
| Scale | 7-12 | 30% ($3k) | $250-400/day | Winning audience + creative at scale; add retargeting |

**Budget allocation by audience layer (steady state):**

- **Cold persona:** 60% of budget — feeds the funnel
- **ABM (if applicable):** 25% — high-value account focus
- **Retargeting:** 15% — pulls warm intent to conversion

**Budget allocation by funnel stage:**

- **Top of funnel (awareness/video):** 30%
- **Mid funnel (engagement/leads):** 50%
- **Bottom of funnel (retargeting/conversion):** 20%

**Decision criteria:**
- New account: 70% to mid-funnel, 30% to top — you need leads before you need brand
- Established brand, retargeting pool exists: 50% mid, 30% bottom, 20% top
- ABM-led GTM: 50% ABM, 30% retargeting, 20% cold persona

**Common gotcha:** Spending all budget on cold persona ads with no retargeting. LinkedIn's first-touch CTR is 0.4-0.8%; retargeting CTR is 1.5-3%. Without retargeting, you're paying full price for every impression.

---

### Step 6: Set Benchmarks and Optimize Weekly

LinkedIn benchmarks (B2B SaaS, 2024-25):

| Metric | Good | Average | Poor | Action if Poor |
|--------|------|---------|------|----------------|
| **CTR (feed)** | >0.6% | 0.4-0.6% | <0.4% | Refresh hook + visual |
| **CPC** | <$8 | $8-15 | >$15 | Broaden audience or improve creative |
| **CPM** | <$30 | $30-50 | >$50 | Lower relevance score — refresh creative |
| **CPL (Lead Gen Form)** | <$100 | $100-200 | >$200 | Test new offer or audience |
| **CPL (Website conversion)** | <$200 | $200-400 | >$400 | Check landing page, simplify form |
| **MQL → SQL rate** | >40% | 25-40% | <25% | Lead quality issue — qualify in form |
| **Video completion rate (15s)** | >25% | 15-25% | <15% | Hook problem — first 3s |
| **Document Ad engagement** | >5% | 3-5% | <3% | Topic or design problem |

**Weekly optimization rituals:**

1. **Monday: Pause underperformers** — Any ad with CTR <0.3% after 5k+ impressions and 5+ days → pause.
2. **Wednesday: Audience review** — If audience size <30k and delivery is throttled, broaden by adding adjacent functions or seniorities.
3. **Friday: Creative refresh check** — Anything running 4+ weeks at >$500/wk spend → ship a refresh.

**Common gotcha:** Killing ads too fast (<1,000 impressions) or too slow (4+ weeks underperforming). LinkedIn's algorithm needs ~5,000 impressions and 5 days to stabilize. After that, decisions should be data-driven, not vibe-driven.

---

### Step 7: Build the Retargeting Engine

Most LinkedIn budget gets wasted because there's no retargeting funnel. Build it from day one.

**Retargeting audience tiers:**

1. **All website visitors (180-day):** Broad warm pool. Show brand/case study ads.
2. **Pricing page visitors (90-day):** High intent. Show demo/trial CTAs.
3. **Video viewers 50%+ (90-day):** Engaged with brand. Show conversion offers.
4. **Lead-gen form openers (didn't submit) (60-day):** Lost in the funnel. Show different offer or testimonial.
5. **Email list match (uploaded customer list):** Customer expansion or exclusion list.

**Retargeting creative angles:**

- **For pricing-page visitors:** Customer testimonial + specific outcome stat
- **For video-engaged audience:** Direct demo CTA, time-limited offer
- **For form openers:** Different format (carousel vs. their original single image), softer CTA ("Get the playbook" vs. "Book demo")

**Common gotcha:** Showing the same cold ad to retargeting audiences. They've already seen it. Always refresh creative for retargeting tiers.

---

## Output Format

```markdown
# LinkedIn Ads Strategy: {{campaign_name}}

**Monthly Budget:** ${{budget}}
**Campaign duration:** {{months}} months
**Primary objective:** {{leads | conversions | awareness | engagement}}
**Target CPL/CPA:** ${{cpa}}
**Owner:** {{owner}}

---

## Audience Architecture

### Layer 1: Cold Persona

**Name:** [Descriptive — e.g., "Marketing leaders, B2B SaaS, 200-2000 employees"]
**Estimated audience size:** [Number from LinkedIn Campaign Manager]

**Targeting:**
- Job Function: [Functions]
- Seniority: [Levels]
- Company Size: [Range]
- Industry: [Industries]
- Skills (optional): [Skills]
- Exclusions: [Competitors, current customers]

### Layer 2: ABM (if applicable)

**Source:** Matched Audiences (uploaded CSV — [N] companies)
**Layer:** Job Function: Marketing, Seniority: Director+
**Audience size:** [Number]

### Layer 3: Retargeting

| Audience | Source | Window | Size |
|----------|--------|--------|------|
| All website visitors | Insight Tag | 180 days | [#] |
| Pricing page visitors | URL rule | 90 days | [#] |
| Video viewers 50%+ | Video campaign | 90 days | [#] |
| LGF openers (no submit) | Lead Gen Form | 60 days | [#] |
| Email list | Upload | — | [#] |

---

## Campaign Structure

| Campaign | Audience | Objective | Format | Daily Budget |
|----------|----------|-----------|--------|--------------|
| Cold — Awareness | Layer 1 | Video Views | Video Ad | $X |
| Cold — Leads | Layer 1 | Lead Gen | Document Ad + LGF | $X |
| ABM | Layer 2 | Website Conversions | Conversation Ad | $X |
| Retargeting — Pricing visitors | Pricing visitors 90d | Website Conversions | Single Image | $X |
| Retargeting — Video engaged | Video viewers 50%+ | Lead Gen | Single Image + LGF | $X |

---

## Ad Creative

### Concept 1: {{concept_name}}

**Format:** [Single Image | Carousel | Video | Document | Conversation | Message]
**Hook framework:** [Negation | Data | Question | Customer Proof | Personal Story]

**Variant 1A:**
- **Visual:** [Description]
- **Intro (≤150 chars):** "[Copy]"
- **Headline (≤70 chars):** "[Copy]"
- **CTA button:** [Action]
- **Destination:** [URL with UTMs]

**Variant 1B / 1C:** [Same structure]

### Concept 2: {{concept_name}}

[Same structure]

---

## 90-Day Budget Plan

| Phase | Weeks | % Budget | Daily | Focus |
|-------|-------|----------|-------|-------|
| Learn | 1-2 | 30% | $X | 3 audiences × 3 creatives |
| Optimize | 3-6 | 40% | $X | Kill losers, double winners |
| Scale | 7-12 | 30% | $X | Winners at scale + retargeting |

---

## Benchmarks & Alert Thresholds

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| CTR | >0.6% | <0.3% (pause) |
| CPC | <$10 | >$15 (refresh creative) |
| CPL | <$150 | >$300 (audience or offer issue) |
| MQL→SQL rate | >35% | <20% (lead quality problem) |
| Frequency | <5/week | >7/week (creative fatigue) |

---

## Testing Roadmap (12 Weeks)

| Week | Test | Variants | Decision Rule |
|------|------|----------|---------------|
| 1-2 | Audience: ICP A vs. B vs. C | 3 audiences, same creative | Lowest CPL wins |
| 3-4 | Format: Doc Ad vs. Single Image | Winning audience × 2 formats | Lowest CPL wins |
| 5-6 | Hook: Negation vs. Data vs. Customer Proof | Same format, 3 hooks | Highest CTR wins |
| 7-8 | Offer: Demo vs. Playbook vs. Audit | Same ad, 3 offers | Highest MQL→SQL rate wins |
| 9-12 | Scale winner + introduce retargeting | Best combo + 2 retargeting variants | Pipeline contribution |

---

## Tracking & Reporting

- [ ] Insight Tag installed and firing
- [ ] Conversion events defined (demo request, signup, content download)
- [ ] UTMs configured (utm_source=linkedin, utm_medium=cpc, utm_campaign={{campaign}})
- [ ] LinkedIn → CRM integration (Salesforce, HubSpot) for lead routing
- [ ] Weekly dashboard: Spend, CPL, MQL, SQL, Pipeline $, ROAS
- [ ] Monthly attribution review: First-touch + multi-touch
```

---

## Quality Bar

A LinkedIn ads strategy is "done" when:

- [ ] Audience precisely defined (3 layers: cold persona, ABM, retargeting)
- [ ] Cold audience size between 100k and 300k (not too narrow, not too broad)
- [ ] Objective matches funnel stage and conversion volume
- [ ] At least 3 ad formats tested across the plan (e.g., Doc Ad + Single Image + Conversation)
- [ ] Creative includes 2-3 variants per concept with distinct hooks
- [ ] Budget split by phase (learn/optimize/scale) and by funnel stage
- [ ] Benchmarks set with alert thresholds and weekly optimization rituals
- [ ] Retargeting funnel architected from day one (not bolted on later)
- [ ] Insight Tag, conversion tracking, and CRM integration confirmed
- [ ] 90-day testing roadmap defined (one variable per phase)
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (positioning, ICP, messaging)

### Common Mistakes

1. **Budget too small to learn** — Running $30/day campaigns. LinkedIn needs $200+/day to stabilize delivery. **Why it happens:** Founders test "to see if it works." **Fix:** Below $3k/month, recommend Google Search or organic LinkedIn instead. LinkedIn ads aren't a small-budget channel.
2. **Targeting by job title alone** — "VP of Marketing" misses "Vice President, Marketing." **Why it happens:** It feels precise. **Fix:** Layer Function + Seniority + Company Size; use Job Title as a soft filter with semantic matching ON, not as primary targeting.
3. **One format for everything** — Single Image ads for cold, mid, and retargeting. **Why it happens:** Simplicity. **Fix:** Document Ads for awareness, Lead Gen Forms for mid-funnel, Conversation Ads for high-intent. Match format to stage.
4. **No retargeting setup** — All budget on cold, no remarketing layer. **Why it happens:** Insight Tag not installed early enough. **Fix:** Install Insight Tag week 1. Build retargeting audiences before they're needed. Allocate 15-20% of budget to retargeting from month 2.
5. **Ad-speak instead of LinkedIn-native copy** — "Revolutionary AI-powered platform leverages cutting-edge…" **Why it happens:** Copywriters trained on banner ads. **Fix:** Write in colleague-on-LinkedIn voice. Use line breaks like organic posts. Lead with hook, data, or story — not feature.
6. **Skipping the learn phase** — Going straight to "scale" with $2k/day on day one. **Why it happens:** Pressure to show pipeline. **Fix:** Mandatory 2-week learn phase at $200-300/day across 3 audiences × 3 creatives. Scale only after winners emerge.
7. **Optimizing for MQLs not pipeline** — Lead Gen Form gives cheap leads, but they don't convert. **Why it happens:** LinkedIn rewards form-fills. **Fix:** Track MQL → SQL → Opp → Won. If MQL→SQL <25%, the leads are junk. Add a qualifying question or switch to website conversion objective.
8. **Ignoring frequency creep** — Same person sees ad 10x/week. Brand fatigue, comment quality drops. **Why it happens:** No frequency cap. **Fix:** Cap at 5/week per user. Refresh creative when frequency >7 even without CTR drop.

---

## Examples

### Example 1: $5k/mo LinkedIn for a B2B SaaS attribution platform

**Context:**
- Company: Attribute.io, $3M ARR marketing attribution platform, 22 employees
- Target: VP/Director of Marketing, Demand Gen, Marketing Ops at SaaS companies $20M-$200M ARR
- ACV: $24k (annual contract)
- Target CAC: $4,800 (5:1 LTV:CAC)
- Goal: 30 SQLs in Q1 (90 days)

**Input from user:**
> "We have $15k for 90 days on LinkedIn. We need pipeline. Our ICP is marketing leaders at mid-market SaaS. We have customer logos (HubSpot, Pendo, Mutiny) and 3 case studies."

**Output (abbreviated):**

```markdown
### Audience Architecture

Layer 1 — Cold Persona ("Mid-Market SaaS Marketing Leaders")
- Job Function: Marketing
- Seniority: Director, VP, CXO
- Company Size: 201-500, 501-1000, 1001-5000
- Industry: Computer Software
- Estimated size: ~180k

Layer 2 — ABM (Top 100 target accounts)
- Matched Audience: 100-company CSV upload
- Layer: Job Function Marketing + Seniority Director+
- Estimated size: ~3.5k

Layer 3 — Retargeting
- Website visitors 180-day
- Pricing page 90-day
- Video viewers 50%+ from cold awareness campaign

### Campaign Structure
| Campaign | Audience | Objective | Format | Daily |
|----------|----------|-----------|--------|-------|
| Cold-Awareness | L1 | Video Views | Video 15s | $100 |
| Cold-Leads | L1 | Lead Gen | Document Ad + LGF | $80 |
| ABM | L2 | Website Conversions | Conversation Ad | $40 |
| RT-Pricing | Pricing visitors | Website Conversions | Single Image | $30 |
| RT-Video | Video 50%+ | Lead Gen | Single Image + LGF | $30 |

Total: $280/day × 60 days post-learn = $15k allocation

### Lead Concept (Document Ad)
"The 2025 B2B Attribution Playbook" — 6-page PDF
- Hook stat (page 1): "73% of CMOs can't prove pipeline contribution to their CFO"
- Pages 2-5: Framework + benchmarks + customer screenshots
- Page 6: LGF — "Get the full playbook"
```

**Why this works:** The Document Ad format leverages LinkedIn's highest-engagement format in 2024-25. Three audience layers means cold prospecting feeds retargeting, retargeting compounds conversion. Specific ICP firmographics (not vague "marketing leaders") gives the algorithm enough signal. Budget split (learn/optimize/scale) prevents the common mistake of dumping $15k into one untested creative.

---

### Example 2: ABM-led LinkedIn for an enterprise data platform

**Context:**
- Company: Datafold, $12M ARR data observability platform
- Target: 200 Tier-1 enterprise accounts (Fortune 1000), VP/CDO/CTO/Director of Data Engineering
- ACV: $120k+ (enterprise contracts)
- Goal: 15 demo bookings from target accounts in 90 days
- Budget: $40k LinkedIn

**Input from user:**
> "We have 200 target accounts. Sales is doing outbound but we want LinkedIn to warm them up. CDOs, Data Engineering VPs. Long sales cycle (6-9 months). Need to multi-thread."

**Output (abbreviated):**

```markdown
### Audience Architecture

Layer 1 — ABM Tier 1 (200 named accounts)
- Matched Audience: 200-company CSV
- Targeting: Job Function: Engineering, IT; Job Title: CDO, VP Data Eng, Director Data Eng, Head of Data
- Estimated reach: ~2,800 individuals (14 per account avg)

Layer 2 — ABM Tier 1 Expanded (committee members)
- Same companies, broader roles: Senior Data Engineer, Analytics Engineer, Data Science Manager
- For multi-threading

Layer 3 — Retargeting
- Website visitors from Tier 1 companies (Insight Tag + Company match)
- Video viewers
- Documentation page visitors

### Campaign Structure
| Campaign | Audience | Format | Daily |
|----------|----------|--------|-------|
| ABM-CDO-Awareness | L1 (decision-makers) | Video 30s (founder + customer) | $80 |
| ABM-Committee-Education | L2 (committee) | Document Ad (Data Quality Benchmark Report) | $100 |
| ABM-CDO-Conversion | L1 + RT | Message Ad (1:1 InMail) | $80 |
| RT-Engaged | Video 50%+ | Single Image (customer case study) | $80 |
| RT-Pricing | Pricing visitors | Conversation Ad (book demo) | $60 |

Total: $400/day × 100 days = $40k

### Coordinated GTM
- Week 1-2: Awareness video runs to decision-makers and committee
- Week 3-4: Document Ad (benchmark report) drives lead-gen form fills
- Week 4: Sales BDR runs personalized outbound mentioning the LinkedIn content
- Week 5-6: Message Ad (1:1 InMail) to CDOs from target accounts who engaged
- Week 7+: Retargeting + sales sync; track multi-touch attribution
```

**Why this works:** ABM-led LinkedIn requires Matched Audiences, multi-threading (committee members, not just CDOs), and tight orchestration with sales. The format mix (Video for awareness, Document for engagement, Message for high-intent) maps to the long enterprise sales cycle. The retargeting layer captures engagement and feeds it back to sales for personalized follow-up.

---

## Related Skills

Chain these for compounding outcomes:

- **[`abm-strategy`](../abm-strategy/SKILL.md)** — Use *before* this skill when LinkedIn ads are part of an ABM motion. Provides the target account list, tier framework, and personalization playbook this skill executes against.
- **[`icp-research`](../icp-research/SKILL.md)** — Use *before* this skill to define the precise firmographics, titles, and seniority levels that map to LinkedIn targeting fields.
- **[`ad-creative`](../ad-creative/SKILL.md)** — Use *alongside* this skill for the creative briefs and copy variants that fill the campaign structure.
- **[`page-cro`](../page-cro/SKILL.md)** — Use *after* this skill to audit landing page conversion. LinkedIn CPCs are high; LP must convert or budget bleeds.
- **[`marketing-automation`](../marketing-automation/SKILL.md)** — Use *alongside* this skill to route LinkedIn leads to MAP/CRM, score them, and trigger nurture sequences.
- **[`paid-ads`](../paid-ads/SKILL.md)** — Use *before* this skill when designing a cross-channel paid strategy. LinkedIn is one piece of the channel mix.

---

## References

- LinkedIn Marketing Solutions Benchmarks (2024-25) — CPC, CPM, CPL, engagement-rate benchmarks by industry.
- Refine Labs (Chris Walker) — Demand creation vs. demand capture frameworks; case for Document Ads.
- Foundation Marketing (Ross Simmonds) — B2B LinkedIn organic + paid playbook.
- *Predictable Revenue*, Aaron Ross — Outbound + ABM integration with paid channels.
- LinkedIn Campaign Manager documentation — Matched Audiences, Insight Tag, conversion tracking.
