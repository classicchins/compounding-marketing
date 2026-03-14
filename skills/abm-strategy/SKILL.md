---
name: abm-strategy
description: Plan and execute account-based marketing (ABM) campaigns for B2B SaaS. Covers target account selection, tier framework, personalization playbooks, multi-channel orchestration, measurement. Triggers - ABM, account-based marketing, target accounts, enterprise marketing, B2B campaigns, account targeting.
metadata:
  version: 1.0.0
---

# Account-Based Marketing (ABM) Strategy

You are an account-based marketing strategist for B2B SaaS companies. Your goal is to help plan and execute ABM campaigns that treat high-value accounts as markets of one, coordinating marketing and sales to win specific target accounts.

---

## ABM Fundamentals

### What is ABM?

**Definition:** Account-Based Marketing (ABM) is a strategic approach that treats individual high-value accounts as markets of one, with personalized campaigns designed to engage specific decision-makers and buying committees.

**Key Principle:** Instead of casting a wide net to generate volume leads (traditional marketing), ABM focuses on a narrow set of high-fit accounts and coordinates marketing + sales efforts to win them.

**Formula:**
```
Traditional Marketing: Wide net → Many leads → Sales qualifies → Few deals
ABM: Narrow focus → Specific accounts → Marketing + Sales align → Higher close rate
```

---

### ABM vs. Traditional Marketing

| Dimension | Traditional Marketing | ABM |
|-----------|----------------------|-----|
| **Target** | Broad audience (MQLs) | Specific accounts |
| **Volume** | High (thousands of leads) | Low (10-500 accounts) |
| **Ownership** | Marketing owns leads → hands to sales | Marketing + sales collaborate from day 1 |
| **Messaging** | One-to-many (generic) | One-to-one or one-to-few (personalized) |
| **Metrics** | Lead volume, MQLs | Account engagement, pipeline from target accounts |
| **Content** | Generic resources | Account-specific content, custom messaging |
| **Sales cycle** | Can be lengthy (unqualified leads) | Often shorter (marketing pre-warms accounts) |

---

### When to Use ABM

**✅ Use ABM when:**
- High deal value ($10k+ ACV) — justifies personalized effort
- Defined ICP — you know exactly who to target (company size, industry, tech stack)
- Long sales cycles (6+ months) — need to stay top-of-mind
- Multiple stakeholders — committee buying (CEO, CFO, VP Sales all involved)
- Sales + marketing alignment — required for ABM success (can't do it in silos)
- Enterprise deals — strategic accounts worth white-glove treatment

**❌ Don't use ABM when:**
- Low ACV (<$10k deals) — can't justify effort/cost
- High-velocity sales — self-serve, PLG models (product-led growth)
- Unclear ICP — still figuring out who buys
- Sales + marketing misalignment — ABM will fail without collaboration
- Limited resources — ABM requires dedicated effort (content, ads, outreach)

---

## Account Tiering Framework

Not all accounts are equal. Tier your target accounts based on fit, intent, and value.

### Tier 1: Strategic Accounts (10-25 accounts)

**Characteristics:**
- Enterprise deals ($100k+ ACV)
- Multi-year contracts
- High strategic value (brand credibility, case study potential)
- Often named accounts (you know exactly who you're targeting)

**Effort Level:** White-glove, hyper-personalized (dedicated resources per account)

**Tactics:**
1. **Executive gifting** — Personalized, high-touch (not swag, think books, wine, experiences)
2. **Custom content** — Personalized case studies, ROI calculators, custom demos
3. **In-person events** — Dinners, VIP experiences, executive briefings
4. **Direct mail** — High-quality, personalized packages (not postcards)
5. **1-to-1 outreach** — CEO to CEO, CMO to CMO (executive alignment)
6. **Account-specific landing pages** — Custom landing page for each account
7. **Dedicated CSM/SDR** — One person owns the entire account relationship

**Resource Allocation:** 50-70% of ABM budget (highest ROI per account)

---

### Tier 2: High-Value Accounts (50-100 accounts)

**Characteristics:**
- Mid-market deals ($25k-$100k ACV)
- Strong ICP fit (right industry, company size, tech stack)
- High intent signals (engaged with content, visited pricing page)

**Effort Level:** Personalized at scale (segmented campaigns, semi-custom content)

**Tactics:**
1. **Industry-specific content** — Vertical playbooks, use case guides
2. **Targeted ads** — LinkedIn Sponsored Content, display retargeting (by account)
3. **Webinars for target accounts** — Invite-only, topic relevant to their industry
4. **Personalized email sequences** — Role-based, pain-point-focused
5. **Account-specific landing pages** — Dynamic content by company (merge fields)
6. **Sales + marketing orchestration** — Coordinated outreach (email + call + ad)

**Resource Allocation:** 20-30% of ABM budget

---

### Tier 3: Target Accounts (200-500 accounts)

**Characteristics:**
- SMB or qualified fit ($10k-$25k ACV)
- Fits ICP but not strategic priority
- Lower intent or early-stage engagement

**Effort Level:** Semi-personalized (automation + templates, programmatic ABM)

**Tactics:**
1. **Programmatic ABM** — Automated personalization (dynamic content, merge tags)
2. **Broader content syndication** — Industry reports, whitepapers
3. **Standard nurture sequences** — Light personalization (industry, role)
4. **Retargeting ads** — Company-level targeting (show ads to anyone from target company)
5. **SDR outreach** — Templated but personalized (research + custom intro)

**Resource Allocation:** 10-20% of ABM budget

---

### How to Tier Accounts

**Scoring Framework:**

**1. Fit Score (ICP Match)** — 40% weight
- Company size (revenue, employees)
- Industry / vertical
- Tech stack (tools they use — integrations we offer)
- Growth stage (Series A vs Series C vs Public)
- Geographic location (if relevant)

**2. Intent Score** — 30% weight
- Website visits (frequency, pages viewed)
- Content engagement (downloads, webinar attendance)
- Product trial signup or demo request
- Engagement with ads (clicks, form fills)
- LinkedIn engagement (likes, comments on posts)

**3. Value Score (Revenue Potential)** — 30% weight
- Estimated ACV (based on company size)
- Expansion potential (can they grow to Enterprise?)
- Strategic value (brand credibility, case study potential)
- Competitive win (are they using a competitor?)

**Tiering Formula:**
```
Total Score = (Fit Score × 0.4) + (Intent Score × 0.3) + (Value Score × 0.3)

90-100: Tier 1 (Strategic)
70-89:  Tier 2 (High-Value)
50-69:  Tier 3 (Target)
<50:    Not a target account (focus elsewhere)
```

**Sales Input:** Final tier assignment should include sales input (do they have relationships? Is there a champion?)

---

## Account Research & Intelligence

For each target account (especially Tier 1), conduct deep research before outreach.

### Company Research

**What to research:**

**1. Revenue & Funding**
- Latest funding round (Series A, B, C?)
- Revenue estimates (Crunchbase, Pitchbook)
- Valuation (if known)

**Why it matters:** Signals budget, growth trajectory, buying power

**Tools:**
- Crunchbase, Pitchbook (funding data)
- Company blog, press releases (announcements)
- LinkedIn (growth signals — hiring spree = budget)

**Exa MCP Integration:**
```bash
npx mcporter call 'exa.company_research_exa' 'companyName="Target Company Name"'
```
Returns: Employees, tech stack, LinkedIn data, funding, recent updates

---

**2. Growth Signals**
- Hiring trends (how many open roles? which departments?)
- New office locations (expanding geographically)
- Product launches (new features, new markets)
- Acquisitions (M&A activity)

**Why it matters:** Growth = budget + urgency

**How to find:**
- LinkedIn job postings (search "[Company Name] jobs")
- Company careers page
- Press releases (Google News search)

**Insight Example:**
- "They're hiring 5 Marketing Ops roles" → They're scaling marketing (need automation tools)
- "They opened an EMEA office" → International expansion (need multi-region support)

---

**3. Tech Stack**
- What tools do they currently use?
- Which tools integrate with ours?
- Are they using a competitor?

**Why it matters:** Integration opportunities, competitive displacement, switching costs

**Tools:**
- BuiltWith (website technology)
- Datanyze (tech stack intelligence)
- LinkedIn (technologies mentioned in job posts)
- Job postings (mention tools: "Experience with Salesforce required")

---

**4. Recent News**
- Press releases (partnerships, funding, product launches)
- Media coverage (TechCrunch, Forbes, industry publications)
- Company blog posts (what topics are they writing about?)

**Why it matters:** Conversation starters, understand priorities

**How to find:**
- Google News: `"Company Name" news`
- Company blog
- LinkedIn company page (recent posts)

---

**5. Strategic Initiatives**
- Earnings calls (public companies only)
- Annual reports / investor decks
- CEO interviews, podcasts

**Why it matters:** Understand what the C-suite cares about (revenue growth, cost reduction, market expansion)

**Example:**
- CEO says "We're focused on reducing customer churn" → Position product as churn reduction tool

---

### Stakeholder Mapping

**Identify the buying committee:**

**1. Decision-Makers (Budget Authority)**
- Who has final say? (typically VP/C-level)
- **Examples:** CEO, CFO, CRO (Chief Revenue Officer), CMO

**2. Influencers (Evaluate Tools)**
- Who researches and recommends tools? (typically Director, Manager)
- **Examples:** VP Marketing, Director of Sales Ops, Head of Product

**3. Users (End Users)**
- Who will actually use your product daily? (ICs)
- **Examples:** Marketing Managers, SDRs, Analysts

**4. Blockers (Who Can Say No)**
- Who might veto the purchase? (IT, Legal, Finance)
- **Examples:** CTO (security concerns), CFO (budget constraints)

**Org Chart Mapping:**
- Use LinkedIn to map reporting structure
- Identify who reports to whom
- Find shared connections (warm intro paths)

---

### Pain Point Identification

**Where to find pain points:**

**1. Job Postings**
- What roles are they hiring for?
- Job description mentions problems → Solutions needed

**Example:**
- Hiring "Marketing Ops Manager" → Struggling with marketing automation, data hygiene
- Hiring "Customer Success Lead" → Scaling support, need CS tools

---

**2. Product Reviews (G2, Capterra)**
- What do they complain about in CURRENT tools?
- Common complaints = opportunities for your product

**How to find:**
- Search G2 for competitor product
- Filter reviews by company size/industry (match your ICP)
- Note common complaints

---

**3. LinkedIn Posts / Content**
- What challenges are they posting about?
- What questions are they asking?

**Example:**
- CMO posts: "Struggling to prove marketing ROI to the board" → Your product helps with attribution

---

**4. Company Blog / Thought Leadership**
- What topics are they writing about?
- Indicates current priorities and focus areas

**Example:**
- Publishing content on "Customer retention strategies" → They care about retention (position product as retention tool)

---

### Competitive Intelligence

**What tools are they currently using?**

**How to find:**
- BuiltWith (scan their website for installed tools)
- Job postings ("Experience with [Tool] required")
- LinkedIn (employees list tools in skills/experience)
- G2 reviews (users mention switching from X to Y)

**Contract Renewal Dates:**
- If you can find when their current tool contract expires → Perfect timing for outreach

**Dissatisfaction Signals:**
- Negative reviews on G2/Capterra
- Complaints on Twitter/LinkedIn
- Job postings to replace current tool (hiring to "migrate from [Competitor]")

---

## Personalization Playbooks

**ABM Personalization Levels:**

### Level 1: Company-Level Personalization

**What it is:** Use company name and industry in messaging

**Examples:**
- Landing page: "Welcome, [Company Name]!" (dynamic content)
- Email: "We help companies like [Company Name] in [industry] achieve [outcome]"
- Ads: Company logo in ad creative ("Hey [Company], ready to 10x your pipeline?")

**Effort:** Low (merge fields, dynamic content blocks)

**Tools:** HubSpot, Marketo (dynamic content), Mutiny (website personalization)

---

### Level 2: Role-Based Personalization

**What it is:** Tailor messaging to recipient's role and priorities

**Examples:**

**CMO messaging:**
- Focus: ROI, attribution, pipeline contribution, marketing efficiency
- CTA: "See how we helped [Similar Company] prove $2M in marketing ROI"

**VP Sales messaging:**
- Focus: Revenue impact, deal velocity, win rates, quota attainment
- CTA: "Discover how [Similar Company] closed 30% more deals"

**Product Manager messaging:**
- Focus: User experience, adoption, feature requests, product analytics
- CTA: "Learn how [Similar Company] increased product adoption by 40%"

**Effort:** Medium (templated messaging per role, 5-10 templates)

---

### Level 3: Pain-Point Personalization

**What it is:** Reference specific pain points from research

**Example:**
```
Subject: [First Name], I saw you're hiring a Marketing Ops Manager

Hi [First Name],

I noticed [Company] is hiring a Marketing Ops Manager — congrats on the growth!

Teams scaling like yours often struggle with [pain point: marketing automation, lead routing, data hygiene].

We help companies like [Similar Company] solve this by [value prop].

Would love to show you how we've helped teams in [industry] achieve [outcome].

[CTA: Book 15-min call]
```

**Why it works:**
- Shows you did research (not a spray-and-pray email)
- Relevant to their current needs (timing is perfect)
- Specific (not generic)

**Effort:** High (requires research per account)

---

### Level 4: Hyper-Personalization (Tier 1 Only)

**What it is:** Fully custom content created FOR this specific account

**Examples:**

**1. Custom Videos**
- Record personalized Loom/Vidyard demo
- Address prospect by name, reference their company, show how product solves their specific use case

**2. Custom Landing Pages**
- Build page specifically for this account: `yourproduct.com/[company-name]`
- Include their logo, industry-specific case study, ROI calculator pre-filled with their data

**3. Custom Content Assets**
- One-pager: "How [Your Product] Helps [Their Company] Achieve [Their Goal]"
- Custom ROI calculator (pre-filled with their company size, industry benchmarks)
- Personalized deck (their logo on cover slide, references to their tech stack)

**4. Executive Gifting**
- Research prospect's interests (LinkedIn, Twitter)
- Send personalized gift: Book they'd love, bottle of wine, experience (tickets to event they'd enjoy)
- Include handwritten note (reference something specific about them)

**Effort:** Very high (hours per account)

**When to use:** Tier 1 accounts only ($100k+ deals)

---

## Multi-Channel Orchestration

Coordinate touchpoints across multiple channels. ABM is NOT just email.

### Channel Mix

#### 1. LinkedIn (Primary B2B Channel)

**A. Sponsored Content (Paid Ads)**
- Upload target account list (CSV of companies)
- Show ads only to people from those companies
- Segment by role (CMO, VP Sales, etc.)

**Ad Examples:**
- "[Company Name], see how companies like yours use [Product]"
- "Marketing leaders at [Industry] companies trust [Product]"

**Best practices:**
- Use company logo in creative (gets attention)
- A/B test messaging by role
- Retarget website visitors from target accounts

---

**B. InMail (Direct Outreach)**
- Send personalized messages to decision-makers
- LinkedIn character limit: 1,900 characters (use wisely)

**Template:**
```
Subject: Quick question about [Company]'s [initiative]

Hi [First Name],

I saw [Company] recently [recent news: funding, hiring, product launch].

We work with companies like [Similar Company] in [industry] to [outcome].

Would you be open to a quick 15-minute call to explore if there's a fit?

[CTA]
```

**Open rate:** 25-35% (higher than email)

---

**C. Organic Engagement**
- Comment on target accounts' LinkedIn posts
- Share relevant content and tag them
- Build relationship before outreach (warm them up)

**Example:**
- Target company posts about product launch
- You comment: "Congrats on the launch! Love the focus on [feature]. We see this trend across [industry]."
- Now they recognize your name when you reach out

---

#### 2. Display Retargeting (ABM Ad Platforms)

**Platforms:** Demandbase, RollWorks, 6sense, Terminus

**How it works:**
- Upload target account list
- Show ads to anyone from those companies (company IP-based targeting)
- Retarget website visitors from target accounts

**Ad Examples:**
- "Welcome back, [Company Name]!" (retargeting ad)
- "[First Name], ready to see [Product] in action?" (if you have first-party data)

**Best practices:**
- Frequency cap (don't show same ad 20x/day)
- Rotate creative (3-5 variations)
- Segment by funnel stage (awareness vs. consideration vs. decision)

---

#### 3. Email (Outbound Sequences)

**Cadence:** 5-7 touches over 14 days

**Example Sequence:**

**Day 1:** Research-based email (reference recent news, hiring, pain point)
**Day 3:** Value-focused email (case study, ROI stat)
**Day 6:** Mutual connection email (if you have one)
**Day 8:** "Breakup" email ("Should I assume this isn't a priority?")
**Day 12:** Content offer (whitepaper, webinar invite)

**Personalization:**
- Use their name, company name, industry
- Reference specific pain point or recent news
- Avoid spray-and-pray (each email should feel 1-to-1)

---

#### 4. Direct Mail (High-Touch)

**Tier 1 Accounts:** High-quality packages
- Personalized gift (book, wine, branded item)
- Handwritten note (reference something specific about them)
- QR code to book meeting (make it easy to respond)

**Tier 2 Accounts:** Branded swag + personalized letter
- Company-branded item (mug, notebook)
- Letter explaining why you're reaching out
- CTA to book call

**Timing:** Send after email sequence (no response) OR post-demo (follow-up)

**Tools:** Sendoso, Alyce, Postal.io (ABM gifting platforms)

---

#### 5. Events (Tier 1 Accounts)

**A. Executive Dinners**
- Invite 5-10 target accounts to intimate dinner
- Host at high-end restaurant
- Keep it conversational (not a sales pitch)
- Build relationships, understand their challenges

**B. Industry Conferences**
- Sponsor event where target accounts attend
- Host VIP booth experience
- Private meetings with key prospects

**C. Invite-Only Webinars**
- Topic relevant to target accounts (industry-specific, role-specific)
- Limit to 50 attendees (exclusive feel)
- Q&A session with your executive team

---

#### 6. Content Syndication

**Platforms:** G2, Capterra, TechTarget, industry publications

**How it works:**
- Publish content (whitepaper, ebook, report)
- Syndication platform promotes it to target accounts
- You get leads (companies who downloaded content)

**Best for:** Top-of-funnel awareness (not ready to buy yet)

---

#### 7. Sales Outreach (Coordinated with Marketing)

**The key to ABM:** Marketing and sales work together (not in silos)

**Example Orchestration:**

```
Day 1:  Marketing sends personalized email
Day 3:  Sales calls (references marketing email)
Day 5:  Marketing sends case study email
Day 7:  Sales emails (references case study)
Day 10: Marketing shows LinkedIn ad
Day 12: Sales follows up (references ad)
```

**Coordination Tools:**
- Shared calendar (HubSpot, Salesforce)
- Slack alerts ("John from Acme just visited pricing page — call him!")
- Weekly sync meetings (sales + marketing alignment)

---

## ABM Measurement

Track these metrics to evaluate ABM success.

### 1. Account Engagement

**Definition:** % of target accounts showing activity

**Activity signals:**
- Website visit (any page)
- Email open or click
- Ad click
- Content download
- LinkedIn engagement

**Benchmark:** 30-50% engagement in first 90 days

**Goal:** Move accounts from "unaware" → "engaged"

**How to track:** ABM platform (Demandbase, 6sense) OR CRM (account-level activity tracking)

---

### 2. Account Penetration

**Definition:** # of contacts engaged per account (breadth of reach)

**Why it matters:** B2B buying committees have 6-10 people involved in decision

**Benchmark:** 3+ contacts per account = buying committee activated

**Goal:** Reach multiple stakeholders (not just one champion)

**How to improve:**
- Multi-threaded outreach (SDR reaches Director, AE reaches VP, CMO reaches CMO)
- Ask for referrals ("Who else should be part of this conversation?")

---

### 3. Pipeline from Target Accounts

**Definition:** $ value of opportunities from target account list

**Why it matters:** ABM accounts should have higher ACV than non-ABM accounts

**Benchmark:** ABM accounts = 2-3x higher ACV

**Goal:** Quality over quantity (fewer opps, higher value)

**How to track:** CRM report (filter opportunities by target account list)

---

### 4. Win Rate (Target Accounts vs. Non-Target)

**Definition:** % of opportunities that close-won

**Why ABM helps:** Better fit + more personalization = higher win rate

**Benchmark:** 30-50% win rate for ABM accounts vs. 15-25% for non-ABM

**How to track:** CRM report (win rate by account type)

---

### 5. Sales Cycle Length

**Definition:** Time from first touch → closed-won

**Why ABM helps:** Marketing pre-warms accounts → faster sales cycle

**Benchmark:** 10-20% faster close for ABM accounts

**Example:** Non-ABM = 6 months, ABM = 5 months

---

### 6. Customer Lifetime Value (LTV)

**Definition:** Total revenue from a customer over their lifetime

**Why ABM helps:** Better fit = higher retention = higher LTV

**Benchmark:** ABM customers should have higher LTV (they're strategic fits)

---

## Output Format Template

```markdown
# ABM Campaign Plan: [Campaign Name]

## Campaign Overview
- **Target Accounts:** [# of accounts]
- **Account Tier:** [Tier 1 / Tier 2 / Tier 3]
- **Timeline:** [Start date - End date]
- **Budget:** [$X]
- **Owner:** [Marketing/Sales leader]

---

## Target Account List

| Company Name | Tier | Fit Score | Intent Score | Value Score | Total Score |
|--------------|------|-----------|--------------|-------------|-------------|
| Acme Corp    | 1    | 95        | 80           | 90          | 88          |
| Example Inc  | 2    | 85        | 60           | 70          | 72          |
| [etc.]       | ...  | ...       | ...          | ...         | ...         |

**Total:** [X] accounts ([Y] Tier 1, [Z] Tier 2)

---

## Account Research Summary

**[Company Name]** (Tier 1)

**Company Info:**
- Revenue: [$X]
- Funding: [Series X, $Y raised]
- Employees: [#]
- Industry: [Vertical]

**Growth Signals:**
- Hiring [X] roles in [Department]
- Opened new office in [Location]
- Launched [Product/Feature] on [Date]

**Tech Stack:**
- Currently using: [Competitor Tool]
- Integrations: [Salesforce, Slack, etc.]

**Key Stakeholders:**
- CEO: [Name] (LinkedIn: [URL])
- CMO: [Name] (LinkedIn: [URL])
- VP Sales: [Name] (LinkedIn: [URL])

**Pain Points:**
- [Pain 1: identified from job posting / LinkedIn post / review]
- [Pain 2]

**Personalization Angle:**
- [How we'll personalize messaging for this account]

---

## Multi-Channel Plan

### LinkedIn
- [ ] Upload target account list to LinkedIn Campaign Manager
- [ ] Launch Sponsored Content campaign (3 ad variations)
- [ ] SDR sends InMail to [X] stakeholders per account
- [ ] Marketing team engages with target accounts' posts (organic)

### Email
- [ ] Personalized email sequence (5 touches over 14 days)
- [ ] Role-based messaging (CMO vs. VP Sales vs. CEO)
- [ ] A/B test subject lines

### Display Ads
- [ ] Retargeting campaign via [Demandbase / RollWorks]
- [ ] Show ads to website visitors from target accounts
- [ ] Rotate 3 creative variations

### Direct Mail (Tier 1 only)
- [ ] Send personalized gift + handwritten note
- [ ] Timing: After email sequence (no response) OR post-demo

### Sales Outreach
- [ ] SDR calls after marketing email sent (Day 3, 7, 12)
- [ ] AE follows up on engaged accounts
- [ ] Weekly sync: Marketing + Sales alignment

---

## Content Assets

**Created for this campaign:**
- [ ] Industry-specific case study ("[Industry] companies using [Product]")
- [ ] Custom ROI calculator (pre-filled with ICP benchmarks)
- [ ] Personalized landing page for Tier 1 accounts
- [ ] Email templates (5 variations by role)
- [ ] LinkedIn ad creative (3 variations)

---

## Success Metrics

**Goal:** [X]% of target accounts engage within 90 days

**KPIs:**
- Account engagement rate: [Target: 40%]
- Contacts engaged per account: [Target: 3+]
- Pipeline generated: [$X from target accounts]
- Win rate: [Target: 35%+]
- Sales cycle: [Target: 10% faster than non-ABM]

**Tracking:** Weekly dashboard (HubSpot / Salesforce + ABM platform)

---

## Timeline

**Month 1:**
- Finalize target account list
- Complete account research
- Build content assets
- Launch LinkedIn + email campaigns

**Month 2:**
- Sales outreach begins
- Monitor engagement, adjust messaging
- Send direct mail (Tier 1)
- Host invite-only webinar

**Month 3:**
- Measure results
- Identify engaged accounts → prioritize for sales
- Iterate on low-performing channels

---

## Budget Allocation

| Channel | Tier 1 | Tier 2 | Tier 3 | Total |
|---------|--------|--------|--------|-------|
| LinkedIn Ads | $5k | $3k | $2k | $10k |
| Display Ads | $3k | $2k | $1k | $6k |
| Direct Mail | $2k | $0 | $0 | $2k |
| Events | $3k | $0 | $0 | $3k |
| Content Creation | $2k | $1k | $0 | $3k |
| **Total** | **$15k** | **$6k** | **$3k** | **$24k** |

**Cost per account:** 
- Tier 1: $600/account (25 accounts)
- Tier 2: $120/account (50 accounts)
- Tier 3: $15/account (200 accounts)
```

---

## Quality Checklist

Before launching ABM campaign:

- [ ] Target account list finalized (tiered by fit/intent/value)
- [ ] Account research completed (pain points, stakeholders, tech stack)
- [ ] Personalization strategy defined (level 1-4 by tier)
- [ ] Multi-channel plan created (LinkedIn, email, ads, direct mail, sales)
- [ ] Content assets created (case studies, landing pages, email templates)
- [ ] Sales + marketing alignment confirmed (weekly syncs, shared CRM)
- [ ] Success metrics defined (engagement, penetration, pipeline, win rate)
- [ ] Budget allocated by tier and channel
- [ ] Timeline set (90-day plan with milestones)
