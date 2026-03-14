---
name: paid-ads
description: Plan and optimize paid advertising campaigns (Google, Facebook, LinkedIn). Covers targeting, budgeting, campaign structure. Triggers - paid ads, PPC, Google Ads, Facebook Ads, LinkedIn Ads, paid campaigns.
metadata:
  version: 1.0.0
---

# Paid Advertising Strategy

Plan paid ad campaigns across platforms.

## Platform Selection
- **Google Search:** High intent, bottom-of-funnel
- **LinkedIn:** B2B, targeting by title/company
- **Facebook/Instagram:** B2C, interest/behavior targeting
- **Twitter:** Brand awareness, thought leadership

## Process

### Step 1: Define Goal & Funnel Stage
- Awareness (reach)
- Consideration (traffic)
- Conversion (signups, demos)

### Step 2: Targeting
- **Google:** Keywords (match types, negatives)
- **Facebook:** Interests, behaviors, lookalikes
- **LinkedIn:** Job title, company size, industry

### Step 3: Budget & Bidding
- Daily budget
- Bid strategy (CPC, CPM, CPA)
- Start small, scale winners

### Step 4: Campaign Structure
- Separate campaigns by goal (awareness vs. conversion)
- Ad sets by audience segment
- Multiple ad variations (A/B test)

### Step 5: Measurement
- Track conversions (pixel, UTM)
- CAC (Customer Acquisition Cost)
- ROAS (Return on Ad Spend)

## Output
Campaign plan with targeting, budget, ad structure.

---

## Google Ads + Meta Ads Specifics

### Google Ads: Campaign Types & When to Use Each

#### 1. Search Campaigns (Text Ads in Search Results)

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

#### 2. Performance Max (Automated Multi-Channel)

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

#### 3. Display Campaigns (Banner Ads Across Web)

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

### Google Ads: Bidding Strategies by Funnel Stage

| Funnel Stage | Bidding Strategy | Why |
|--------------|------------------|-----|
| **Awareness** | Maximize Clicks (Display) | Get traffic cheap |
| **Consideration** | Target CPA (Search) | Pay for qualified leads, not just clicks |
| **Conversion** | Target ROAS (Performance Max) | Optimize for revenue, not just conversions |

---

### Google Ads: Keyword Match Types Explained

**Example keyword:** project management software

| Match Type | Syntax | Your Ad Shows For | Example Searches That Trigger |
|------------|--------|-------------------|-------------------------------|
| **Exact** | `[project management software]` | Exact phrase only | "project management software" |
| **Phrase** | `"project management software"` | Phrase + close variants | "best project management software," "project management software for teams" |
| **Broad** | `project management software` | Related searches (loosest) | "project tools," "team management apps," "PM software" |

**Best practice:** Start with **phrase match** (balance of control + reach). Avoid broad match unless you have a large negative keyword list.

---

### Meta Ads (Facebook + Instagram): Campaign Objectives

#### 1. Awareness (Top of Funnel)

**Objective:** Reach  
**Goal:** Get your brand in front of as many people as possible  
**Use case:** New product launch, brand building  

**Metrics:** Impressions, reach, frequency  

---

#### 2. Traffic (Mid Funnel)

**Objective:** Traffic  
**Goal:** Drive clicks to your website  
**Use case:** Blog promotion, lead magnet downloads  

**Metrics:** Link clicks, CPC (cost per click)  

---

#### 3. Engagement (Social Proof)

**Objective:** Engagement  
**Goal:** Get likes, comments, shares on posts  
**Use case:** Building social proof, community engagement  

**Metrics:** Engagement rate, cost per engagement  

---

#### 4. Leads (Bottom Funnel)

**Objective:** Lead Generation  
**Goal:** Capture emails directly on Facebook (no landing page)  
**Use case:** Webinar signups, ebook downloads  

**Metrics:** Cost per lead, lead quality  

---

#### 5. Conversions (Bottom Funnel)

**Objective:** Conversions  
**Goal:** Drive signups, demos, purchases  
**Use case:** Trial signups, demo requests  

**Metrics:** CPA (cost per acquisition), ROAS (return on ad spend)  

**Requires:** Meta Pixel installed on your site (tracks conversions)

---

### Meta Ads: Audience Types

#### 1. Core Audiences (Broad Targeting)

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

#### 2. Custom Audiences (Your Existing Data)

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

#### 3. Lookalike Audiences (Find Similar People)

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

### Meta Ads: Creative Formats

| Format | Best For | Specs | Example Use Case |
|--------|----------|-------|------------------|
| **Single Image** | Simple message | 1080x1080 (square) or 1200x628 (landscape) | Product announcement, blog promo |
| **Carousel** | Multiple products/features | 1080x1080 per card (up to 10 cards) | Feature showcase, case studies |
| **Video** | Storytelling, demos | 1080x1080 or 1920x1080, 15-60s | Product demo, testimonial |
| **Collection** | E-commerce | 1 main image + 4 product images | Product catalog (not ideal for SaaS) |
| **Stories** | Mobile-first, full-screen | 1080x1920 (9:16 vertical) | Behind-the-scenes, quick tips |

**Best practice:** Use **carousel or video** for highest engagement (Meta prioritizes interactive formats).

---

### Budget Allocation Formula

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

### ROAS Targets by Funnel Stage

**ROAS = Return on Ad Spend** (Revenue / Ad Spend)

| Funnel Stage | ROAS Target | Example | Why |
|--------------|-------------|---------|-----|
| **Awareness** | 0.5:1 - 1:1 | Spend $100, get $50-$100 revenue | Acceptable loss (building pipeline) |
| **Consideration** | 1:1 - 2:1 | Spend $100, get $100-$200 | Break-even to slight profit |
| **Conversion** | 3:1 - 5:1 | Spend $100, get $300-$500 | Profitable, scalable |

**Note:** B2B SaaS often has lower immediate ROAS (long sales cycles) but higher LTV (lifetime value). Track LTV:CAC ratio (should be >3:1).

---

### Account Structure Best Practices

#### Google Ads Account Structure

```
Account
├── Campaign 1: Branded Search
│   └── Ad Group: Brand Keywords
│       ├── Ad: Headline variations
│       └── Keywords: [YourBrand], "YourBrand software"
│
├── Campaign 2: Competitor Search
│   └── Ad Group: Competitor Keywords
│       ├── Ad: "Switch from [Competitor]"
│       └── Keywords: [Competitor], "alternative to [Competitor]"
│
├── Campaign 3: Generic Search
│   ├── Ad Group: Project Management
│   │   └── Keywords: "project management software", "PM tools"
│   └── Ad Group: Remote Teams
│       └── Keywords: "remote team software", "collaboration tools"
│
└── Campaign 4: Retargeting (Display)
    └── Ad Group: Site Visitors
        └── Audience: Visited site, didn't convert
```

**Why separate campaigns?**
- Different budgets (branded search = high priority, higher budget)
- Different bidding strategies (competitor search = aggressive, generic = conservative)

---

#### Meta Ads Account Structure

```
Account
├── Campaign 1: Prospecting (Awareness)
│   ├── Ad Set 1: Lookalike Audience 1%
│   └── Ad Set 2: Interest Targeting (Project Management)
│
├── Campaign 2: Retargeting (Conversions)
│   ├── Ad Set 1: Website Visitors (Last 30 Days)
│   ├── Ad Set 2: Engaged with Post (Last 90 Days)
│   └── Ad Set 3: Abandoned Pricing Page
│
└── Campaign 3: Lead Generation
    └── Ad Set 1: Lead Form (Ebook Download)
```

**Why separate campaigns?**
- Different optimization goals (awareness vs. conversions)
- Different budgets (retargeting = higher budget, higher ROI)

---

## Quality Bar for Platform-Specific Setup

- **Google Ads:**
  - Campaign type selected based on funnel stage (Search for intent, Display for awareness)
  - Keyword match types used appropriately (phrase match default)
  - Negative keywords added (exclude irrelevant searches)
  - Bidding strategy aligns with goal (Target CPA for leads, Target ROAS for revenue)

- **Meta Ads:**
  - Objective matches goal (Conversions for signups, Traffic for blog)
  - Audience type appropriate (Custom for retargeting, Lookalike for scaling)
  - Creative format optimized (Carousel/video for engagement)
  - Meta Pixel installed (required for conversion tracking)

- **Budget:**
  - 70/20/10 allocation followed (proven/testing/experimental)
  - ROAS targets set per funnel stage (3:1+ for conversion campaigns)

