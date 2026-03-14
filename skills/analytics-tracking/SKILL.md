---
name: analytics-tracking
description: Set up event tracking, conversion pixels, and analytics for marketing campaigns. Covers GA4, Meta Pixel, LinkedIn Insight Tag. Triggers - analytics setup, event tracking, conversion tracking, GA4, tracking pixels.
metadata:
  version: 1.0.0
---

# Analytics & Event Tracking Setup

Implement tracking for marketing campaigns and conversions.

## Tools
- **Google Analytics 4 (GA4):** Website traffic, behavior
- **Meta Pixel:** Facebook ad tracking
- **LinkedIn Insight Tag:** LinkedIn ad tracking
- **Custom events:** Product-specific actions

## Process

### Step 1: Define Events to Track
**Standard events:**
- Page view
- Button click
- Form submission
- Signup
- Purchase

**Custom events:**
- Feature activation
- Trial started
- Upgrade

### Step 2: Implement Tracking
**GA4:**
```html
<!-- GA4 Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Event tracking:**
```javascript
gtag('event', 'signup', {
  'method': 'Google'
});
```

**Meta Pixel:**
```html
<script>
  fbq('track', 'Lead');
</script>
```

### Step 3: Test
- Use browser extensions (GA Debugger, Facebook Pixel Helper)
- Verify events firing correctly
- Check data in dashboards

### Step 4: Set Up Conversions
- GA4: Mark events as conversions
- Google Ads: Import conversions
- Facebook: Define custom conversions

## Output
Tracking implementation plan + code snippets + QA checklist.

---

## GA4 Specifics: Migration & Advanced Setup

### GA4 vs Universal Analytics: Key Differences

| Feature | Universal Analytics (UA) | GA4 |
|---------|--------------------------|-----|
| **Data model** | Session-based (pageviews, sessions) | Event-based (everything is an event) |
| **Tracking code** | analytics.js or gtag.js | gtag.js or Google Tag Manager |
| **User tracking** | Client ID (cookie-based) | Client ID + User ID (cross-device) |
| **Reporting** | Pre-built reports (limited customization) | Exploration reports (full customization) |
| **Machine learning** | Limited (basic forecasting) | Advanced (predictive metrics, anomaly detection) |
| **BigQuery export** | Paid (360 only) | Free (all properties) |
| **Privacy** | Less privacy-focused | Privacy-first (IP anonymization default, consent mode) |

**Why migrate:** UA stopped collecting data on July 1, 2023. GA4 is the only option now.

---

### Setting Up GA4: Step-by-Step

#### Step 1: Create GA4 Property

1. Go to Google Analytics → Admin
2. Click "Create Property"
3. Name it (e.g., "ProjectPlanner GA4")
4. Select timezone and currency
5. Click "Create"

---

#### Step 2: Set Up Data Stream

**What is a data stream?** A source of data (website, iOS app, Android app)

1. Click "Add stream" → Web
2. Enter your website URL
3. Name the stream (e.g., "ProjectPlanner Website")
4. Copy the Measurement ID (looks like `G-XXXXXXXXXX`)

---

#### Step 3: Install Tracking Code

**Option A: Direct Install (Simple)**

Paste this in the `<head>` of every page:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

**Option B: Google Tag Manager (Recommended)**

1. Create a Google Tag Manager account
2. Install GTM container code on your site
3. In GTM, create a new tag:
   - Tag type: Google Analytics: GA4 Configuration
   - Measurement ID: `G-XXXXXXXXXX`
   - Trigger: All Pages

**Why GTM?** Easier to add/update tracking without touching code.

---

#### Step 4: Enable Enhanced Measurement

**What is Enhanced Measurement?** Auto-tracks common events (scrolls, clicks, video plays) without code.

1. Go to Admin → Data Streams → [Your Stream]
2. Toggle "Enhanced measurement" ON
3. Check which events to track:
   - ✅ Page views (always on)
   - ✅ Scrolls (90% scroll depth)
   - ✅ Outbound clicks
   - ✅ Site search (if you have search)
   - ✅ Video engagement (YouTube embeds)
   - ✅ File downloads (PDFs, docs)

**Saves time:** No custom code needed for these events.

---

#### Step 5: Set Up Custom Events

**Common B2B SaaS events to track:**

| Event Name | When to Fire | Parameters |
|------------|--------------|------------|
| `sign_up` | User completes signup form | `method` (email, Google, SSO) |
| `start_trial` | User starts free trial | `plan_type` (free, pro, enterprise) |
| `book_demo` | User requests demo | `source` (website, email, ad) |
| `view_pricing` | User visits pricing page | `page_location` (URL) |
| `add_to_cart` | User adds item to cart (if e-commerce) | `item_name`, `value`, `currency` |
| `purchase` | User completes purchase | `transaction_id`, `value`, `currency` |

**How to implement (via GTM):**

1. Create a new tag in GTM
2. Tag type: Google Analytics: GA4 Event
3. Event name: `sign_up`
4. Event parameters:
   - `method`: `{{Form Type Variable}}`
5. Trigger: Form submission (signup form)

**Code example (if not using GTM):**

```javascript
gtag('event', 'sign_up', {
  'method': 'email'
});
```

---

### GA4 Key Reports to Bookmark

#### 1. Funnel Exploration (Conversions)

**What it shows:** Drop-off at each funnel step

**How to set up:**
1. Go to Explore → Funnel exploration
2. Define steps:
   - Step 1: Page view (`/`)
   - Step 2: Page view (`/pricing`)
   - Step 3: Event (`sign_up`)
   - Step 4: Event (`start_trial`)
3. View drop-off rates

**Example output:**
- 10,000 visitors → 2,000 viewed pricing (20%) → 400 signed up (20% of viewers) → 80 started trial (20% of signups)

**Actionable:** If drop-off is high between pricing and signup, fix pricing page (unclear CTA, too expensive, confusing).

---

#### 2. User Journey (Path Analysis)

**What it shows:** Most common paths users take through your site

**How to set up:**
1. Go to Explore → Path exploration
2. Starting point: Landing page (`/`)
3. View next steps

**Example output:**
- Most users go: `/` → `/features` → `/pricing` → Exit (didn't sign up)

**Actionable:** Add CTA on `/pricing` to book demo (they're interested but hesitant).

---

#### 3. Retention Report

**What it shows:** How many users return after first visit

**How to set up:**
1. Go to Reports → Retention
2. Select cohort: First visit date
3. View return rate over 7/14/30 days

**Example output:**
- Day 1: 100 users signed up
- Day 7: 40 returned (40% retention)
- Day 30: 15 still active (15% retention)

**Actionable:** If retention is low, improve onboarding (send email reminders, in-app prompts).

---

### Custom Dimensions and Metrics for SaaS

**Why custom dimensions?** GA4 tracks user behavior, but not business context (plan type, feature usage, trial status).

#### Common Custom Dimensions for SaaS

| Dimension Name | Scope | Example Values | Use Case |
|----------------|-------|----------------|----------|
| `plan_type` | User | "free", "pro", "enterprise" | Segment reports by plan |
| `trial_status` | User | "active", "expired", "converted" | Track trial conversions |
| `feature_used` | Event | "gantt_chart", "time_tracking", "reports" | See which features drive retention |
| `signup_source` | User | "organic", "paid_search", "referral" | Attribution (where did they come from?) |
| `company_size` | User | "1-10", "11-50", "51-200", "200+" | Segment by ICP fit |

**How to set up:**

1. Go to Admin → Custom definitions → Create custom dimension
2. Name: `plan_type`
3. Scope: User
4. User property: `plan_type`
5. Click "Save"

**How to send data:**

```javascript
gtag('set', 'user_properties', {
  'plan_type': 'pro',
  'trial_status': 'active'
});
```

---

### GA4 + BigQuery Export (For Advanced Analysis)

**What is BigQuery?** Google's data warehouse (lets you run SQL queries on raw GA4 data).

**Why export to BigQuery?**
- GA4 samples large datasets (BigQuery doesn't)
- Custom analysis (SQL > GA4 UI for complex questions)
- Data retention (GA4 keeps data for 14 months, BigQuery forever)
- ML/AI models (feed data into machine learning pipelines)

**How to set up:**

1. Go to Admin → BigQuery Linking
2. Click "Link"
3. Select BigQuery project (create one if needed)
4. Choose export frequency:
   - Daily export (free, 1-day delay)
   - Streaming export (paid, real-time)
5. Click "Submit"

**Example BigQuery query (Top landing pages by conversions):**

```sql
SELECT
  landing_page,
  COUNT(DISTINCT user_pseudo_id) AS users,
  COUNTIF(event_name = 'sign_up') AS signups
FROM
  `project.dataset.events_*`
WHERE
  _TABLE_SUFFIX BETWEEN '20260301' AND '20260331'
GROUP BY
  landing_page
ORDER BY
  signups DESC
LIMIT 10
```

**Who should use BigQuery?**
- Data analysts (SQL knowledge)
- Companies with >1M events/month (GA4 sampling kicks in)
- SaaS companies tracking complex funnels (multi-step, multi-touchpoint)

---

## Quality Bar for GA4 Setup

- **Data stream configured:** Measurement ID installed, Enhanced Measurement ON
- **Custom events tracked:** Sign up, trial start, demo request (at minimum)
- **Key reports bookmarked:** Funnel exploration, User journey, Retention
- **Custom dimensions set up:** Plan type, trial status, signup source (if SaaS)
- **BigQuery export enabled:** If >100k users/month (for unsampled data)

