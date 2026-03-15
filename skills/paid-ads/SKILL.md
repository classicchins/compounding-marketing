---
name: paid-ads
description: Plan and optimize paid advertising campaigns (Google, Facebook, LinkedIn). Covers targeting, budgeting, campaign structure. Triggers - paid ads, PPC, Google Ads, Facebook Ads, LinkedIn Ads, paid campaigns.
metadata:
  version: 1.1.0
---

# Paid Advertising Strategy

## Role

You are a performance marketing strategist for B2B SaaS. Your goal is to design paid advertising campaigns that acquire customers at a sustainable CAC. You think in terms of unit economics first, platforms second. You never launch a campaign without knowing the target CAC, the payback period, and the kill criteria.

---

## Initial Assessment

Before building any campaign plan, gather context:

1. **Load product-marketing context** — check `.agents/product-marketing-context.md` for product details, ICP, positioning, and competitive landscape.
2. **Review positioning** — confirm the positioning is clear enough to write ad copy against. If positioning is missing or weak, run the `positioning` skill first.
3. **Check current analytics** — identify existing traffic sources, conversion rates, and any historical paid performance data. Ask:
   - What is current monthly website traffic?
   - What is the site-wide visitor-to-lead conversion rate?
   - What is the lead-to-customer conversion rate?
   - Is conversion tracking (pixels, UTMs, events) already in place?
4. **Confirm unit economics** — you need LTV, ARPU, gross margin, and target LTV:CAC ratio before setting budgets.

If any of these are missing, flag them as blockers before proceeding.

---

## Process

### Step 1: Budget Calculation

Never set a budget by "what we can afford." Calculate it from unit economics.

**Max CAC Calculation:**

```
Max CAC = LTV / Target LTV:CAC Ratio

Example:
  LTV = $18,000
  Target LTV:CAC = 3:1
  Max CAC = $18,000 / 3 = $6,000
```

Minimum LTV:CAC ratio is 3:1. Below that, paid acquisition is not sustainable.

**Monthly Budget Calculation:**

```
Monthly Budget = Target New Customers × Max CAC × Paid Channel Share

Example:
  Target: 20 new customers/month
  Max CAC: $6,000
  Paid channel share: 40% (rest comes from organic, referral, etc.)
  Monthly Budget = 20 × $6,000 × 0.40 = $48,000
```

**CAC Payback Period:**

```
CAC Payback (months) = CAC / (Monthly ARPU × Gross Margin)

Example:
  CAC: $6,000
  Monthly ARPU: $750
  Gross Margin: 80%
  Payback = $6,000 / ($750 × 0.80) = 10 months
```

Target payback under 12 months. Over 18 months is a red flag.

**Budget as Percentage of ARR by Stage:**

| Company Stage | Budget as % of ARR | Notes |
|---------------|-------------------|-------|
| Early (pre-$1M ARR) | 15–25% | Spending to learn, not to scale |
| Growth ($1M–$10M ARR) | 10–20% | Scaling proven channels |
| Scale ($10M+ ARR) | 8–12% | Efficiency and incrementality focus |

---

### Step 2: Platform Selection

Use this decision tree to select the right platform(s). Work through each question in order:

1. **Is someone actively searching for your category or solution?** → Google Search (highest intent, capture existing demand)
2. **Is your ACV >$5K and you can target a specific B2B job title?** → LinkedIn (expensive clicks but high-value leads)
3. **Do you have >5K monthly website visitors?** → Meta retargeting (cheapest way to convert warm traffic)
4. **Is your buyer a technical persona (developer, engineer, data scientist)?** → Reddit (authentic community, allergic to traditional ads)
5. **Are you creating a new category with no search demand?** → LinkedIn or Meta for demand creation (educate before you capture)

**Platform Comparison:**

| Platform | Avg CPC | Avg CPL | Avg CTR | Min Monthly Budget | Best For |
|----------|---------|---------|---------|-------------------|----------|
| Google Search | $2–8 | $30–80 | 3–6% | $2,000 | Capturing existing demand |
| LinkedIn | $8–15 | $75–200 | 0.4–0.8% | $3,000 | High-ACV B2B targeting |
| Meta (FB/IG) | $1–3 | $15–60 | 0.8–1.5% | $1,500 | Retargeting, demand creation |
| Reddit | $1–5 | $25–75 | 0.3–0.8% | $1,000 | Technical audiences, authenticity |

**Platform selection rationale must be documented.** Never choose a platform because "everyone uses it." Choose based on where your ICP spends attention and whether demand exists or must be created.

---

### Step 3: Campaign Structure

#### Campaign Naming Convention

Every campaign, ad set, and ad must follow a consistent naming convention. This prevents confusion as accounts scale.

**Format:** `[Platform]_[Region]_[Type]_[Audience]_[Funnel]_[Quarter]`

**Examples:**
- `GOOG_US_Search_CompetitorKW_BOF_Q1-26`
- `META_US_Prospecting_Lookalike1pct_TOF_Q1-26`
- `LI_US_SponsoredContent_CMOs_MOF_Q1-26`
- `REDDIT_US_Promoted_DevOps_TOF_Q1-26`

**Key abbreviations:**
- TOF = Top of Funnel, MOF = Middle of Funnel, BOF = Bottom of Funnel
- KW = Keyword, SponCon = Sponsored Content
- Retarg = Retargeting, Prosp = Prospecting

Apply this naming convention to all campaigns, ad sets/groups, and individual ads. Inconsistent naming is the number one cause of reporting confusion.

#### Google Ads Account Structure

```
Account
├── Campaign 1: Branded Search (highest priority)
│   └── Ad Group: Brand Keywords
│       ├── Ad: Headline variations
│       └── Keywords: [YourBrand], "YourBrand software"
│
├── Campaign 2: Competitor Search
│   └── Ad Group: Competitor Keywords
│       ├── Ad: "Switch from [Competitor]"
│       └── Keywords: [Competitor], "alternative to [Competitor]"
│
├── Campaign 3: Generic Search (category terms)
│   ├── Ad Group: Category Terms
│   │   └── Keywords: "project management software", "PM tools"
│   └── Ad Group: Use-Case Terms
│       └── Keywords: "remote team software", "collaboration tools"
│
├── Campaign 4: Retargeting (Display)
│   └── Ad Group: Site Visitors
│       └── Audience: Visited site, didn't convert
│
└── Campaign 5: Performance Max (only with 50+ monthly conversions)
    └── Asset Group: Full-funnel automated
```

**Why separate campaigns?**
- Different budgets (branded search = high priority, higher budget)
- Different bidding strategies (competitor search = aggressive, generic = conservative)
- Easier to identify what is working and reallocate spend

#### Meta Ads Account Structure

```
Account
├── Campaign 1: Prospecting (Awareness)
│   ├── Ad Set 1: Lookalike Audience 1%
│   └── Ad Set 2: Interest Targeting (Category Interest)
│
├── Campaign 2: Retargeting (Conversions)
│   ├── Ad Set 1: Website Visitors (Last 30 Days)
│   ├── Ad Set 2: Engaged with Post (Last 90 Days)
│   └── Ad Set 3: Abandoned Pricing Page
│
└── Campaign 3: Lead Generation
    └── Ad Set 1: Lead Form (Ebook/Webinar)
```

**Why separate campaigns?**
- Different optimization goals (awareness vs. conversions)
- Different budgets (retargeting = higher budget, higher ROI)

---

### Step 4: Creative & Copy

Reference the `ad-creative` skill for detailed guidance on writing ad copy and designing creative assets.

**Key principles for paid ads creative:**
- Lead with the outcome, not the feature
- Use customer language from research (not internal jargon)
- Match creative to funnel stage (awareness = problem agitation, conversion = social proof + CTA)
- Test 3–5 creative variations per ad set minimum
- Refresh creative every 4–6 weeks to prevent fatigue

**Ad copy formula for B2B SaaS:**
- **Headline:** Outcome the buyer wants (not your product name)
- **Description:** How you deliver that outcome differently
- **CTA:** Specific next step ("Start free trial" not "Learn more")

---

### Step 5: Optimization Cadence

Paid ads require consistent, structured optimization. Set a recurring schedule:

**Daily (5 minutes):**
- Check budget pacing — are campaigns on track to spend the full daily budget?
- Flag anomalies — any sudden CPC spikes, CTR drops, or disapproved ads?
- Review disapprovals — fix immediately so ads keep running

**Weekly (30–60 minutes):**
- Pause underperformers — ads with CTR below platform average after 1,000+ impressions
- Review search terms (Google) — add negative keywords for irrelevant queries
- Scale winners — increase budget on campaigns hitting CPA targets by 15–20%
- Check frequency (Meta) — if frequency exceeds 3.0, refresh creative or expand audience

**Monthly (1–2 hours):**
- Channel ROI review — compare CAC and conversion rates across all platforms
- Budget reallocation — shift spend from underperforming to outperforming platforms
- Creative refresh — retire fatigued creative, launch new variations
- Landing page performance — check conversion rates, run new landing page tests

**Quarterly (half day):**
- Platform mix evaluation — should you add or drop a platform?
- CPC trend analysis — are costs rising? If so, is it competition or quality score?
- Funnel analysis — is the problem traffic quality or landing page conversion?
- Competitive ad review — what are competitors running? (use Meta Ad Library, Google Ads Transparency)

#### Kill and Scale Rules

Clear, pre-defined rules prevent emotional decisions:

**Kill a campaign when:**
- CPA is >2x target after 2+ weeks AND 100+ clicks
- CTR is below 50% of platform average after 2,000+ impressions
- No conversions after spending 3x the target CPA

**Scale a campaign when:**
- CPA is at or below target for 2+ consecutive weeks
- Scale in 15–20% increments (never double overnight)
- Monitor for 3–5 days after each increase before scaling again

**Pause (do not kill) when:**
- CPA is 1.2–2x target — optimize creative, landing page, or targeting first
- Insufficient data — less than 100 clicks is not enough to judge

---

## Google Ads: Campaign Types & When to Use Each

### 1. Search Campaigns (Text Ads in Search Results)

**Best for:** Bottom-funnel intent (people actively searching for solutions)

**How it works:**
- Bid on keywords (e.g., "project management software")
- Ad appears above organic search results
- Pay per click (CPC)

**When to use:**
- High-intent keywords ("buy," "pricing," "demo," "vs [competitor]")
- Branded searches (your company name)

**Campaign setup:**
- **Keyword match types:**
  - **Exact match:** `[project management software]` (only exact phrase)
  - **Phrase match:** `"project management software"` (phrase + close variants)
  - **Broad match:** `project management software` (related searches, looser)
- **Negative keywords:** Exclude irrelevant searches (e.g., -free, -jobs, -career)
- **Bidding strategies:**
  - **Manual CPC:** You set max bid per click (full control)
  - **Maximize Conversions:** Google auto-optimizes for conversions (recommended if >30 conversions/month)
  - **Target CPA:** Set target cost per acquisition (e.g., $50/lead)

**Example:**
- Keyword: `project management software for remote teams`
- Bid: $3.50/click
- Ad: "ProjectPlanner: Built for Remote Teams | Start Free Trial"

---

### 2. Performance Max (Automated Multi-Channel)

**Best for:** Driving conversions across all Google inventory (Search, Display, YouTube, Gmail)

**How it works:**
- You provide assets (images, videos, headlines, descriptions)
- Google auto-creates ads and places them across channels
- AI optimizes placement + bidding

**When to use:**
- You have conversion data (>50 conversions in 30 days)
- You want to maximize reach without managing multiple campaigns
- You trust Google's algorithm

**Campaign setup:**
- **Asset groups:** Upload 5+ headlines, 5+ descriptions, 5+ images, 1+ videos
- **Audience signals:** Tell Google who your ideal customer is (e.g., marketers at SaaS companies)
- **Conversion goals:** Select what counts as success (demo request, trial signup)

**Pros:** Easy, scales across channels
**Cons:** Less control (black box), requires conversion data

---

### 3. Display Campaigns (Banner Ads Across Web)

**Best for:** Top-funnel awareness, retargeting

**How it works:**
- Banner ads appear on websites in Google Display Network (2M+ sites)
- Pay per click or per impression (CPM)

**When to use:**
- Brand awareness (get logo in front of people)
- Retargeting (show ads to people who visited your site)

**Campaign setup:**
- **Targeting:**
  - **Affinity audiences:** Broad interests (e.g., "Tech Enthusiasts")
  - **In-market audiences:** Actively researching (e.g., "Shopping for Project Management Software")
  - **Custom audiences:** Define your own (e.g., people who visit competitor sites)
- **Ad formats:** Responsive display ads (auto-resize), uploaded image ads (manual)

**Example:**
- Target: People who visited your pricing page but didn't sign up
- Ad: "Come back and start your free trial"

---

## Google Ads: Bidding Strategies by Funnel Stage

| Funnel Stage | Bidding Strategy | Why |
|--------------|------------------|-----|
| **Awareness** | Maximize Clicks (Display) | Get traffic cheap |
| **Consideration** | Target CPA (Search) | Pay for qualified leads, not just clicks |
| **Conversion** | Target ROAS (Performance Max) | Optimize for revenue, not just conversions |

---

## Google Ads: Keyword Match Types Explained

**Example keyword:** project management software

| Match Type | Syntax | Your Ad Shows For | Example Searches That Trigger |
|------------|--------|-------------------|-------------------------------|
| **Exact** | `[project management software]` | Exact phrase only | "project management software" |
| **Phrase** | `"project management software"` | Phrase + close variants | "best project management software," "project management software for teams" |
| **Broad** | `project management software` | Related searches (loosest) | "project tools," "team management apps," "PM software" |

**Best practice:** Start with **phrase match** (balance of control + reach). Avoid broad match unless you have a large negative keyword list.

---

## Meta Ads (Facebook + Instagram): Campaign Objectives

### 1. Awareness (Top of Funnel)

**Objective:** Reach
**Goal:** Get your brand in front of as many people as possible
**Use case:** New product launch, brand building

**Metrics:** Impressions, reach, frequency

---

### 2. Traffic (Mid Funnel)

**Objective:** Traffic
**Goal:** Drive clicks to your website
**Use case:** Blog promotion, lead magnet downloads

**Metrics:** Link clicks, CPC (cost per click)

---

### 3. Engagement (Social Proof)

**Objective:** Engagement
**Goal:** Get likes, comments, shares on posts
**Use case:** Building social proof, community engagement

**Metrics:** Engagement rate, cost per engagement

---

### 4. Leads (Bottom Funnel)

**Objective:** Lead Generation
**Goal:** Capture emails directly on Facebook (no landing page)
**Use case:** Webinar signups, ebook downloads

**Metrics:** Cost per lead, lead quality

---

### 5. Conversions (Bottom Funnel)

**Objective:** Conversions
**Goal:** Drive signups, demos, purchases
**Use case:** Trial signups, demo requests

**Metrics:** CPA (cost per acquisition), ROAS (return on ad spend)

**Requires:** Meta Pixel installed on your site (tracks conversions)

---

## Meta Ads: Audience Types

### 1. Core Audiences (Broad Targeting)

**What:** Target by demographics, interests, behaviors

**Setup:**
- **Demographics:** Age, gender, location, language
- **Interests:** "Project Management," "SaaS," "Remote Work"
- **Behaviors:** "Small Business Owners," "Tech Early Adopters"

**When to use:** Top-funnel awareness (reaching new people)

**Example:**
- Age: 25-54
- Location: US, UK, Canada
- Interest: "Project Management" + "SaaS"
- Job title: "Marketing Manager"

---

### 2. Custom Audiences (Your Existing Data)

**What:** Target people who already interacted with you

**Types:**
- **Website visitors:** People who visited your site (requires Meta Pixel)
- **Email list:** Upload your email list, Meta matches to Facebook accounts
- **Engagement:** People who engaged with your Facebook/Instagram posts
- **App users:** People who use your app

**When to use:** Retargeting (convert warm leads)

**Example:**
- Target: People who visited your pricing page in the last 30 days (but didn't sign up)
- Ad: "Come back and start your free trial—no credit card required"

---

### 3. Lookalike Audiences (Find Similar People)

**What:** Meta finds people similar to your existing customers

**Setup:**
1. Create a Custom Audience (e.g., your customer email list)
2. Create a Lookalike from that audience (1%, 2%, 5%, 10%)
   - 1% = most similar (smaller, higher quality)
   - 10% = least similar (larger, lower quality)

**When to use:** Scaling (finding new customers who look like existing ones)

**Example:**
- Source: Your customer email list
- Lookalike: 1% lookalike in US (finds 2.3M people similar to your customers)

---

## Meta Ads: Creative Formats

| Format | Best For | Specs | Example Use Case |
|--------|----------|-------|------------------|
| **Single Image** | Simple message | 1080x1080 (square) or 1200x628 (landscape) | Product announcement, blog promo |
| **Carousel** | Multiple products/features | 1080x1080 per card (up to 10 cards) | Feature showcase, case studies |
| **Video** | Storytelling, demos | 1080x1080 or 1920x1080, 15-60s | Product demo, testimonial |
| **Collection** | E-commerce | 1 main image + 4 product images | Product catalog (not ideal for SaaS) |
| **Stories** | Mobile-first, full-screen | 1080x1920 (9:16 vertical) | Behind-the-scenes, quick tips |

**Best practice:** Use **carousel or video** for highest engagement (Meta prioritizes interactive formats).

---

## Budget Allocation Formula

**The 70/20/10 Rule:**

- **70% proven channels** (campaigns with positive ROAS)
- **20% testing** (new audiences, new creatives, new platforms)
- **10% experimental** (wild ideas, long-shot bets)

**Example monthly budget: $10,000**
- $7,000 → Google Search (proven, 3:1 ROAS)
- $2,000 → Meta Lookalike Audiences (testing, 1.5:1 ROAS so far)
- $1,000 → LinkedIn Ads (experimental, no ROAS data yet)

**Why?** Protects your downside (70% is safe) while allowing upside discovery (30% tests).

---

## ROAS Targets by Funnel Stage

**ROAS = Return on Ad Spend** (Revenue / Ad Spend)

| Funnel Stage | ROAS Target | Example | Why |
|--------------|-------------|---------|-----|
| **Awareness** | 0.5:1 - 1:1 | Spend $100, get $50-$100 revenue | Acceptable loss (building pipeline) |
| **Consideration** | 1:1 - 2:1 | Spend $100, get $100-$200 | Break-even to slight profit |
| **Conversion** | 3:1 - 5:1 | Spend $100, get $300-$500 | Profitable, scalable |

**Note:** B2B SaaS often has lower immediate ROAS (long sales cycles) but higher LTV (lifetime value). Track LTV:CAC ratio (should be >3:1).

---

## Cross-Platform SaaS Benchmarks

Use these benchmarks to evaluate performance. "Good" means top-quartile for B2B SaaS.

| Metric | Google Search | LinkedIn | Meta | Reddit |
|--------|--------------|----------|------|--------|
| **CTR (Good)** | >5% | >0.8% | >1.5% | >0.8% |
| **CTR (Average)** | 3–5% | 0.4–0.8% | 0.8–1.5% | 0.3–0.8% |
| **CTR (Poor)** | <3% | <0.4% | <0.8% | <0.3% |
| **CPC (Good)** | <$3 | <$8 | <$1.50 | <$2 |
| **CPC (Average)** | $3–8 | $8–15 | $1.50–3 | $2–5 |
| **CPC (Poor)** | >$8 | >$15 | >$3 | >$5 |
| **CPL (Good)** | <$40 | <$100 | <$25 | <$35 |
| **CPL (Average)** | $40–80 | $100–200 | $25–60 | $35–75 |
| **CPL (Poor)** | >$80 | >$200 | >$60 | >$75 |
| **Conv Rate (Good)** | >8% | >3% | >4% | >3% |
| **Conv Rate (Avg)** | 4–8% | 1–3% | 2–4% | 1–3% |
| **Conv Rate (Poor)** | <4% | <1% | <2% | <1% |

These are directional benchmarks for B2B SaaS. Your actual numbers will vary by ACV, funnel stage, and market maturity.

---

## Quality Bar

A paid ads campaign plan is not complete until every item is checked:

- [ ] **Budget calculation done** — Max CAC derived from LTV:CAC ratio, monthly budget calculated from target customer volume
- [ ] **Platform selected with rationale** — decision tree followed, platform chosen based on ICP behavior and demand type
- [ ] **Naming convention applied** — all campaigns, ad sets, and ads follow `[Platform]_[Region]_[Type]_[Audience]_[Funnel]_[Quarter]` format
- [ ] **Negative keywords added** (Google) — minimum 50 negative keywords at launch, reviewed weekly
- [ ] **Optimization cadence defined** — daily, weekly, monthly, and quarterly tasks scheduled with owners
- [ ] **Kill and scale rules documented** — specific CPA thresholds and timeframes written before launch
- [ ] **Benchmarks set per platform** — target CTR, CPC, CPL, and conversion rate documented for each platform
- [ ] **Landing pages dedicated** — each campaign points to a purpose-built landing page, not the homepage
- [ ] **Attribution tracking verified** — UTM parameters, conversion pixels, and event tracking confirmed working before spend begins
- [ ] **Creative variations loaded** — minimum 3 ad variations per ad set for testing

---

## Common Mistakes

1. **Running ads before GTM foundation is set.** If positioning, messaging, and landing pages are not ready, paid ads amplify confusion. Get the foundation right first.

2. **Sending traffic to the homepage.** Dedicated landing pages convert 2–3x higher than homepages. Every campaign needs its own landing page matched to the ad's promise.

3. **No negative keywords (Google).** Without negative keywords, up to 57% of spend goes to irrelevant searches. Add 50+ negatives at launch and review search terms weekly.

4. **Killing campaigns too early.** Most campaigns need 100+ clicks and 2+ weeks of data before you can judge them. Cutting early wastes the learning budget.

5. **Attribution blindness.** 45% of ad accounts have broken conversion tracking. Verify pixels, UTMs, and events are firing correctly before spending a dollar.

6. **Feature-focused ad copy.** Buyers do not care about features. They care about outcomes. Lead with the result they want, not the technology you built.

7. **Running the same creative for months.** Ad fatigue sets in after 4–6 weeks. Monitor frequency and refresh creative regularly.

8. **Scaling too aggressively.** Doubling budget overnight breaks algorithmic optimization. Scale in 15–20% increments with 3–5 day observation windows.

9. **Not tracking downstream metrics.** CPL means nothing if leads do not convert to customers. Track lead-to-opportunity and opportunity-to-customer rates by campaign.

10. **Ignoring retargeting.** Retargeting is the highest-ROI paid channel for most SaaS companies. Only 2–5% of visitors convert on the first visit. Retarget the other 95%.

---

## Related Skills

- `linkedin-ads` — detailed LinkedIn campaign setup and optimization
- `ad-creative` — writing ad copy and designing creative assets
- `analytics-tracking` — setting up conversion pixels, UTMs, and event tracking
- `attribution-modeling` — choosing and implementing attribution models
- `page-cro` — optimizing landing pages for higher conversion rates

---

## Output Format

When executing this skill, deliver the following campaign plan:

```markdown
# Paid Advertising Campaign Plan

## 1. Budget

- **LTV:** $___
- **Target LTV:CAC:** ___:1
- **Max CAC:** $___
- **CAC Payback:** ___ months
- **Monthly Budget:** $___
- **Budget as % of ARR:** ___%

## 2. Platform Selection

| Platform | Selected? | Rationale |
|----------|-----------|-----------|
| Google Search | Yes/No | [Why or why not] |
| LinkedIn | Yes/No | [Why or why not] |
| Meta | Yes/No | [Why or why not] |
| Reddit | Yes/No | [Why or why not] |

## 3. Campaign Structure

[For each selected platform, list campaigns with naming convention applied]

### [Platform Name]
| Campaign | Audience | Funnel Stage | Monthly Budget | Target CPA |
|----------|----------|-------------|----------------|------------|
| [Name] | [Audience] | TOF/MOF/BOF | $__ | $__ |

## 4. Creative Plan

| Campaign | Ad Variations | Format | Key Message | CTA |
|----------|--------------|--------|-------------|-----|
| [Name] | [Count] | [Format] | [Message] | [CTA] |

## 5. Optimization Schedule

| Cadence | Tasks | Owner | Time |
|---------|-------|-------|------|
| Daily | Budget pacing, anomalies, disapprovals | [Name] | 5 min |
| Weekly | Pause underperformers, search terms, scale winners | [Name] | 30-60 min |
| Monthly | Channel ROI, budget reallocation, creative refresh | [Name] | 1-2 hrs |
| Quarterly | Platform mix, CPC trends, competitive review | [Name] | Half day |

### Kill/Scale Rules
- **Kill:** CPA >$___ (2x target) after 2+ weeks and 100+ clicks
- **Scale:** CPA at/below $___ for 2+ consecutive weeks, increase 15-20%

## 6. Benchmarks

| Platform | Target CTR | Target CPC | Target CPL | Target Conv Rate |
|----------|-----------|-----------|-----------|-----------------|
| [Platform] | ___% | $___ | $___ | ___% |

## 7. Pre-Launch Checklist

- [ ] Landing pages live and tested
- [ ] Conversion tracking verified (pixels firing)
- [ ] UTM parameters configured
- [ ] Negative keywords loaded (Google)
- [ ] Creative approved and uploaded
- [ ] Naming convention applied to all elements
- [ ] Budget caps set (daily and campaign-level)
- [ ] Attribution model confirmed
```
