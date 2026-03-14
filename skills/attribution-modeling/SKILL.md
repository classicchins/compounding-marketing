---
name: attribution-modeling
description: Set up marketing attribution to understand which channels drive conversions. Covers first-touch, last-touch, multi-touch models. Triggers - attribution, marketing attribution, attribution model, channel attribution, multi-touch attribution.
metadata:
  version: 1.0.0
---

# Marketing Attribution

Understand which marketing channels drive conversions.

## Attribution Models

### First-Touch
- Credit to first interaction
- Good for awareness measurement

### Last-Touch
- Credit to last interaction
- Good for conversion measurement

### Linear
- Equal credit to all touchpoints
- Fair but not insightful

### Time Decay
- More credit to recent touchpoints
- Balances awareness + conversion

### Position-Based (U-Shaped)
- 40% first, 40% last, 20% middle
- Recognizes awareness + conversion

## Process

### Step 1: Track Full Customer Journey
- Use UTM parameters
- Track referral sources
- Log touchpoints in CRM

### Step 2: Choose Model
- B2B (long sales cycle): Multi-touch
- B2C (short cycle): Last-touch OK

### Step 3: Implement
- GA4: Configure attribution model
- CRM: Track lead source + all touchpoints

### Step 4: Analyze
- Which channels drive most conversions?
- Which channels assist?
- Optimize budget allocation

## Output
Attribution model recommendation + implementation guide.

---

## Tool-Specific Setup: HubSpot, Triple Whale, Rockerbox

### HubSpot Attribution (Built-In, Best for B2B SaaS)

**What it tracks:** Contact source (where did the lead come from originally?)

**Setup:**

1. **Enable contact source tracking:**
   - Settings → Tracking & Analytics → Analytics Tools
   - Toggle "Track original source" ON

2. **Source types HubSpot tracks automatically:**
   - **Organic search:** Google, Bing (via referrer)
   - **Paid search:** Google Ads, Bing Ads (via UTM)
   - **Social media:** Facebook, LinkedIn, Twitter (via UTM)
   - **Referrals:** External sites linking to you
   - **Direct traffic:** Typed URL or bookmark
   - **Email marketing:** HubSpot emails (auto-tagged)
   - **Offline sources:** Manual upload (trade shows, events)

3. **View attribution reports:**
   - Reports → Analytics Tools → Traffic Analytics
   - Filter by "Source" to see lead/customer breakdown

**Example output:**
- Organic search: 40 leads, 8 customers
- Paid search (Google): 30 leads, 12 customers
- LinkedIn (organic): 15 leads, 2 customers

**Actionable:** If Google Ads drives more customers than organic, increase Google Ads budget.

---

### Triple Whale (Best for E-Commerce)

**What it tracks:** Multi-channel attribution for Shopify stores (Facebook, Google, email, influencer)

**Key features:**
- **Attribution models:** First-click, last-click, linear, time-decay
- **Pixel health:** Diagnoses Facebook Pixel issues
- **Blended ROAS:** Combines all channels into one ROAS number
- **Incrementality testing:** Measures true impact of ads (not just correlation)

**Setup:**

1. Install Triple Whale app from Shopify App Store
2. Connect ad accounts (Facebook Ads, Google Ads, TikTok Ads)
3. Connect email (Klaviyo, Mailchimp)
4. Triple Whale auto-imports conversion data from Shopify

**Use case:**
- You run Facebook + Google + email campaigns
- Want to see which channel drives most revenue (not just last-click)

**Example output:**
- Facebook: $10k spend, $30k revenue, 3:1 ROAS
- Google: $5k spend, $20k revenue, 4:1 ROAS
- Email: $500 spend, $15k revenue, 30:1 ROAS

**Actionable:** Email has highest ROAS → invest in growing email list.

---

### Rockerbox (Best for Multi-Channel B2B SaaS)

**What it tracks:** Full customer journey (all touchpoints from first visit to close)

**Key features:**
- **Multi-touch attribution:** Gives credit to every touchpoint (not just first or last)
- **Deduplication:** Avoids double-counting (e.g., same user clicks Google ad + organic)
- **CRM integration:** Syncs with Salesforce, HubSpot (closed-loop attribution)
- **Marketing mix modeling:** Measures impact of brand campaigns (TV, podcast, billboards)

**Setup:**

1. Install Rockerbox pixel on your website
2. Connect ad accounts (Google, Facebook, LinkedIn)
3. Connect CRM (Salesforce or HubSpot)
4. Rockerbox maps touchpoints to closed deals

**Use case:**
- B2B SaaS with long sales cycles (6-12 months)
- Multiple touchpoints (organic, paid, webinar, sales call)
- Need to prove marketing ROI to executive team

**Example output:**
- Customer journey: Organic blog post → LinkedIn ad → Webinar → Demo → Close
- Each touchpoint gets % of credit (e.g., blog 20%, LinkedIn 30%, webinar 30%, demo 20%)

**Actionable:** If webinars consistently appear in high-value deals, run more webinars.

---

## UTM Parameter Structure & Naming Convention

**UTM parameters = query strings that track campaign source in analytics**

### Standard UTM Parameters

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `utm_source` | Where traffic came from | `google`, `facebook`, `newsletter` |
| `utm_medium` | Type of traffic | `cpc`, `email`, `social`, `organic` |
| `utm_campaign` | Campaign name | `spring_sale`, `product_launch`, `webinar_promo` |
| `utm_term` | Keyword (paid search only) | `project+management+software` |
| `utm_content` | Ad variation (A/B testing) | `headline_a`, `image_b`, `cta_variant` |

**Example URL:**

```
https://projectplanner.io/pricing?utm_source=google&utm_medium=cpc&utm_campaign=spring_sale&utm_term=project+management&utm_content=headline_a
```

---

### Naming Convention Rules

**Consistency is critical.** If you use `facebook` once and `Facebook` another time, analytics treats them as separate sources.

**Best practices:**

1. **Lowercase only:** `utm_source=facebook` (not `Facebook` or `FACEBOOK`)
2. **No spaces:** Use underscores or hyphens (`spring_sale` not `spring sale`)
3. **Be specific:** `utm_source=linkedin_paid` (not just `linkedin`)
4. **Standard medium values:**
   - `cpc` = cost-per-click (paid search, paid social)
   - `email` = email campaigns
   - `social` = organic social
   - `referral` = partner/affiliate links
   - `display` = display ads

**Example (standardized):**

| Source | Medium | Campaign | Full URL |
|--------|--------|----------|----------|
| `google` | `cpc` | `spring_sale_2026` | `?utm_source=google&utm_medium=cpc&utm_campaign=spring_sale_2026` |
| `facebook` | `cpc` | `spring_sale_2026` | `?utm_source=facebook&utm_medium=cpc&utm_campaign=spring_sale_2026` |
| `newsletter` | `email` | `march_2026` | `?utm_source=newsletter&utm_medium=email&utm_campaign=march_2026` |

---

### UTM Builder Tool

**Use a builder to avoid typos:**

- **Google Campaign URL Builder:** https://ga-dev-tools.google/campaign-url-builder/
- **HubSpot Tracking URL Builder:** (built into HubSpot)

**Pro tip:** Save your UTM templates in a Google Sheet for consistency.

---

## How to Reconcile Attribution Discrepancies

**Problem:** Different tools report different numbers.

**Example:**
- Google Ads says: 50 conversions
- GA4 says: 45 conversions
- HubSpot says: 40 conversions

**Why this happens:**

| Reason | Explanation | Fix |
|--------|-------------|-----|
| **Cookie blocking** | Users block cookies/tracking (Safari, Firefox default) | Accept discrepancies (10-20% is normal) |
| **Attribution windows** | Google Ads uses 30-day window, GA4 uses 90-day | Align attribution windows in settings |
| **Conversion definitions** | Google tracks clicks, GA4 tracks sessions, HubSpot tracks form fills | Use same conversion event across tools |
| **View-through vs. click-through** | Google counts views (impressions), GA4 only counts clicks | Disable view-through conversions in Google |
| **Time zone differences** | Google uses PST, GA4 uses your timezone | Set all tools to same timezone |

**Best practice:** Pick ONE source of truth (usually GA4 for web, CRM for B2B deals) and align other tools to it.

---

## Quality Bar for Tool-Specific Setup

- **HubSpot:** Contact source tracking enabled, reports show lead → customer breakdown by source
- **Triple Whale:** Connected to ad accounts + Shopify, blended ROAS visible
- **Rockerbox:** CRM integrated, multi-touch attribution showing full customer journeys
- **UTM parameters:** Naming convention documented, used consistently across all campaigns
- **Discrepancies reconciled:** Attribution windows aligned, same conversion definition across tools

