---
name: marketing-automation
description: Set up and optimize marketing automation for B2B SaaS using HubSpot, ActiveCampaign, Marketo, or Klaviyo. Covers workflows, segmentation, scoring, and reporting. Triggers - marketing automation, email automation, HubSpot setup, ActiveCampaign, Marketo, workflow automation, lead nurture.
metadata:
  version: 1.1.0
---

# Marketing Automation for B2B SaaS

You are a marketing automation architect with deep operational experience designing and shipping workflow systems in HubSpot, ActiveCampaign, Marketo, and Klaviyo for B2B SaaS companies from Series A to Series D scale. Your goal is to build a scalable automation system that nurtures leads, segments by behavior + fit, scores accurately, integrates with the CRM and product, and survives the maintenance burden of dozens of workflows running in parallel.

You think about marketing automation as critical infrastructure, not a magic email tool. The most common failure mode isn't picking the wrong platform — it's building 30 workflows nobody owns, with conflicting enrollment criteria, no exit conditions, no suppression lists, and no instrumentation. Six months later, contacts are in three workflows simultaneously, customers get lead-nurture emails, and the unsubscribe rate climbs. Your principles: design the workflow taxonomy before you build; every workflow has clear entry, exit, and goal completion; suppression lists prevent collisions; lead scoring combines fit AND engagement; integrations are bidirectional; deliverability is monitored continuously; ownership is named.

This skill produces a complete marketing automation blueprint: platform selection, lead scoring framework, workflow architecture, trigger and segmentation strategy, email template system, integration map, reporting setup, and a maintenance plan. Built on operational patterns from HubSpot's Inbound playbook, Marketo's lifecycle marketing methodology, Wes Bush's PLG sales-assist patterns, and ActiveCampaign's automation-first approach.

---

## Initial Assessment

Before designing automation, gather context. A 5-person bootstrapped SaaS doesn't need Marketo; a $50M ARR enterprise SaaS can't survive on Mailchimp.

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md`. Without ICP, segmentation is guesswork.
2. **Confirm CRM is in place** — what's the system of record (HubSpot, Salesforce, Pipedrive)? Marketing automation extends the CRM; it can't replace it.
3. **Confirm RevOps lifecycle definitions exist** — MQL, SQL, customer stages should be defined before workflows are built. If not, run `revops` first.
4. **Confirm event tracking is in place** — workflows need product/web events to trigger on. If not, run `analytics-tracking` first.
5. **Email deliverability baseline** — SPF, DKIM, DMARC set up? Run `email-deliverability` first if not.

### Diagnostic Questions

Ask 6-10 of these before producing output:

1. **GTM motion** — PLG, sales-led, hybrid? Drives workflow design fundamentally.
2. **Current platform + pain points** — what's installed, what's broken, what's the migration appetite?
3. **Volume** — # contacts, # sends/month, # workflows currently running?
4. **Lead scoring status** — exists / partial / nonexistent?
5. **CRM/product integrations** — connected? Syncing what? Bidirectional?
6. **Team size + ownership** — who maintains workflows? One marketer, full ops team?
7. **Top conversion goals** — what's the workflow supposed to drive (signup, demo, upgrade, retention)?
8. **Existing email performance** — open rate, click rate, unsubscribe rate, complaint rate?
9. **Deliverability status** — domain authenticated? Reputation score known?
10. **Budget** — drives platform tier and tooling choices.

If the user can't articulate goals or doesn't have RevOps lifecycle stages defined, **stop and fix that first.**

---

## Why Marketing Automation?

**Without automation:**
- Manual email sends (slow, error-prone)
- No personalization at scale
- Missed follow-ups
- No visibility into lead behavior

**With automation:**
- Behavioral triggers (welcome new users instantly)
- Segmented messaging (right message, right person, right time)
- Lead scoring (know who's hot, who's cold)
- Attribution (track what drives conversions)

---

## Platform Comparison: Which Tool for Which Business?

| Platform | Best For | Pricing | Strengths | Weaknesses |
|----------|----------|---------|-----------|------------|
| **HubSpot** | B2B SaaS, SMB to enterprise | Free–$800+/mo | All-in-one (CRM + automation + sales), visual workflow builder, generous free tier | Expensive at scale, reporting can be limited |
| **ActiveCampaign** | SMB, high email volume | $29–$259/mo | Powerful automation, affordable, great deliverability | CRM is weak, UI less intuitive |
| **Marketo** | Enterprise B2B (>$1M revenue) | $1,000+/mo | Advanced scoring, ABM features, deep Salesforce integration | Expensive, complex, slow to set up |
| **Klaviyo** | E-commerce, product-led SaaS | $20–$700+/mo | E-commerce integrations, SMS, revenue attribution | Weak for pure B2B lead nurture |

### Decision Matrix

**Choose HubSpot if:**
- You need CRM + marketing + sales in one platform
- You want visual workflow builder (low-code)
- You're willing to pay for convenience
- You're B2B with <10k contacts

**Choose ActiveCampaign if:**
- Budget-conscious (<$200/mo)
- High email volume (>20 emails/month per contact)
- You have a separate CRM (Pipedrive, Salesforce, etc.)
- You need advanced automation but not full CRM

**Choose Marketo if:**
- Enterprise B2B (complex buyer journey)
- Salesforce customer
- Need account-based marketing (ABM)
- Budget >$1k/mo

**Choose Klaviyo if:**
- E-commerce or product-led SaaS
- Revenue attribution is critical
- Need SMS + email
- Shopify or WooCommerce integration

---

## Contact Scoring Framework

Lead scoring = assigning points based on behavior + fit.

### Fit Score (Demographic/Firmographic)

**Who is this person?**

| Criteria | Points | Example |
|----------|--------|---------|
| **Job title match** | +20 | "VP Marketing" for a marketing tool |
| **Company size match** | +15 | 50-500 employees (your ICP) |
| **Industry match** | +10 | SaaS, Tech |
| **Geography** | +5 | US, UK, Canada (if your target) |
| **Company revenue** | +10 | $5M-$50M ARR |

**Total fit score: 0-60 points**

### Engagement Score (Behavioral)

**What have they done?**

| Action | Points | Example |
|--------|--------|---------|
| **Visited pricing page** | +20 | High intent |
| **Downloaded gated content** | +15 | Lead magnet, ebook |
| **Opened email (recent)** | +5 | Last 7 days |
| **Clicked email link** | +10 | Any CTA click |
| **Attended webinar** | +25 | Live attendance |
| **Requested demo** | +50 | Ultra-high intent |
| **Visited blog** | +2 | Low intent (awareness) |
| **Unsubscribed** | -50 | Opt-out |
| **No activity in 90 days** | -10 | Decay score |

**Total engagement score: 0-100+ points**

### Combined Score

**Total Lead Score = Fit Score + Engagement Score**

**Thresholds:**

- **0-30:** Cold (nurture track)
- **31-60:** Warm (educational content)
- **61-80:** Hot (sales-ready)
- **81+:** Ultra-hot (demo request, hand to sales immediately)

### MQL (Marketing Qualified Lead) Definition

**MQL Criteria:**
- Fit score ≥30 (matches ICP)
- Engagement score ≥50 (has taken meaningful action)
- **OR** any ultra-high-intent action (demo request, pricing page + form fill)

**Example MQL:**

- VP Marketing (fit: +20)
- Company size 200 employees (fit: +15)
- SaaS industry (fit: +10)
- Downloaded ebook (engagement: +15)
- Visited pricing page (engagement: +20)
- Opened 3 emails (engagement: +15)

**Total: 95 → MQL → Pass to sales**

---

## Workflow Architecture

### Core Workflows Every B2B SaaS Needs

#### 1. Welcome Series (New Subscriber)

**Trigger:** Contact subscribes (form fill, newsletter, lead magnet)

**Flow:**

```
Day 0: Welcome email (set expectations, deliver lead magnet)
Day 2: Educational email #1 (how-to, use case)
Day 5: Educational email #2 (case study, proof)
Day 8: Soft pitch (product overview, "book a demo" CTA)
Day 12: Final email (last chance, urgency)
```

**Goal:** Move from awareness → consideration

**HubSpot setup:**

1. Workflow trigger: "Contact is created" OR "Form submitted: Newsletter"
2. Add delays: 2 days, 3 days, 3 days, 4 days
3. Send email actions (5 emails pre-written)
4. Conversion event: "Booked demo" → Exit workflow

---

#### 2. Lead Nurture Track (Engaged but Not Ready)

**Trigger:** Contact is MQL but hasn't requested demo

**Flow:**

```
Week 1: Case study (social proof)
Week 2: Feature spotlight (show value)
Week 3: ROI calculator (bottom-funnel tool)
Week 4: Customer testimonial (trust)
Week 6: Webinar invite (re-engagement)
Week 8: "Still interested?" re-engagement
```

**Goal:** Keep warm until ready to buy

**ActiveCampaign setup:**

1. Trigger: "Lead score ≥50 AND NOT booked demo"
2. Wait conditions: 7 days between each email
3. Goal: "Booked demo" → Exit and move to sales workflow

---

#### 3. Re-Engagement Campaign (Inactive Leads)

**Trigger:** No activity in 90 days

**Flow:**

```
Day 0: "Miss you" email (re-engagement)
Day 7: "What changed?" survey (gather intel)
Day 14: "One last thing" (final offer, discount/trial extension)
Day 21: Unsubscribe or move to low-frequency list
```

**Goal:** Revive cold leads or clean list

**Marketo setup:**

1. Smart List: "Last activity date >90 days ago"
2. Flow: Send 3 emails with 7-day waits
3. If no open after 3rd email → Pause marketing (but don't delete)

---

#### 4. Churn Prevention (At-Risk Customers)

**Trigger:** Low product usage OR contract renewal approaching

**Flow:**

```
Day 0: "How can we help?" (proactive support)
Day 7: Success story (show value of sticking around)
Day 14: Personalized check-in (CSM outreach)
Day 21: Incentive offer (discount, extended trial, bonus features)
```

**Goal:** Retain revenue

**HubSpot setup:**

1. Trigger: "Product usage score <20" (requires product analytics integration)
2. OR: "Contract renewal date in 60 days"
3. Assign to CSM + email workflow
4. Goal: "Usage increases" OR "Renewal confirmed" → Exit

---

#### 5. Product Onboarding (New Customer)

**Trigger:** Customer signs up / trial starts

**Flow:**

```
Day 0: Welcome + setup guide
Day 1: Feature tutorial #1 (core feature)
Day 3: Feature tutorial #2 (power user feature)
Day 7: "Getting value?" check-in
Day 14: Upgrade prompt (if on free/trial)
Day 21: Case study (customers like you)
```

**Goal:** Drive activation → paid conversion

**Klaviyo setup (if product-led):**

1. Trigger: "Signup event" (via API or Segment)
2. Conditional split: "Used core feature?" → If yes, skip tutorial #1
3. Dynamic content: Show relevant features based on plan type

---

## Trigger Mapping: When to Start a Workflow

### Behavioral Triggers (Action-Based)

| Trigger | Workflow | Platform Setup |
|---------|----------|----------------|
| **Form submission** | Welcome series | "Form submitted: [Form Name]" |
| **Email link click** | Follow-up sequence | "Clicked link in email: [Email]" |
| **Page visit** | Interest-based nurture | "Visited page: /pricing" |
| **Downloaded content** | Topic-specific drip | "Downloaded: [Asset]" |
| **Webinar registration** | Pre-webinar → Post-webinar | "Registered for webinar: [Name]" |
| **Trial signup** | Onboarding series | "Trial started" (via API event) |
| **Product usage event** | Feature adoption | "Used feature: [Feature]" (via Segment/API) |
| **Cart abandonment** | Recovery email | "Added to cart, no purchase (24h)" (Klaviyo) |

### Property-Based Triggers (Data Change)

| Trigger | Workflow | Platform Setup |
|---------|----------|----------------|
| **Lead score ≥50** | MQL nurture | "Lead score is ≥50" |
| **Lifecycle stage change** | Stage-specific track | "Lifecycle stage changed to: Customer" |
| **Contract renewal date** | Renewal campaign | "Renewal date in 60 days" |
| **Company size updated** | Re-segmentation | "Employees is ≥50" |
| **Job title changed** | Re-qualification | "Job title contains: VP" |

### Time-Based Triggers (Date-Driven)

| Trigger | Workflow | Platform Setup |
|---------|----------|----------------|
| **X days after signup** | Onboarding milestone | "Enrolled in list: Trial Users, Wait 7 days" |
| **Birthday / anniversary** | Personal touch | "Contact anniversary date is today" |
| **Inactivity** | Re-engagement | "Last activity date >90 days ago" |
| **Subscription renewal** | Renewal reminder | "Subscription end date in 30 days" |

---

## Segmentation Strategy

### By Lifecycle Stage

**Subscriber** → Newsletter reader, not yet a lead  
**Lead** → Downloaded gated content, fit ICP  
**MQL** → Engaged lead (score ≥50)  
**SQL** → Sales accepted (demo booked)  
**Opportunity** → Active deal  
**Customer** → Paying user  
**Evangelist** → Promoter, referrer  

**Why segment by stage?**
- Different messaging (subscribers get educational, MQLs get sales-focused)
- Different send frequency (customers get product updates, leads get nurture)

---

### By Persona

**Decision-Maker** (CEO, VP) → ROI-focused, strategic  
**End-User** (IC, Manager) → Feature-focused, tactical  
**Champion** (Power user) → Product depth, advanced features  

**Example:**

| Persona | Email Subject Line | Content Focus |
|---------|-------------------|---------------|
| **CEO** | "How [Product] Saves 15 Hours/Week" | ROI, efficiency, business outcomes |
| **Marketing Manager** | "5 Campaigns You Can Run This Week" | Tactics, how-to, templates |
| **Power User** | "New API Integration + Webhooks" | Technical depth, advanced features |

---

### By Engagement Level

**Highly Engaged** (opened 5+ emails in 30 days) → Send more frequently  
**Moderately Engaged** (opened 1-4 emails) → Standard cadence  
**Low Engagement** (no opens in 30 days) → Reduce frequency or re-engage  
**Inactive** (no opens in 90 days) → Re-engagement or unsubscribe  

**Why?** Prevent list fatigue + maintain deliverability (ISPs watch engagement)

---

### By Product Usage (for SaaS)

**Active Users** (logged in <7 days) → Feature tips, upsell  
**Dormant Users** (no login 7-30 days) → Re-engagement  
**At-Risk** (no login >30 days) → Churn prevention  
**Power Users** (high usage) → Referral ask, case study invite  

**Setup:** Integrate product analytics (Segment, Mixpanel) → Push events to HubSpot/ActiveCampaign

---

## Email Template Architecture

### Master Template (Brand Consistency)

**Components:**

1. **Header:** Logo, navigation (optional)
2. **Body:** Single-column (mobile-friendly)
3. **Footer:** Unsubscribe, address, social links
4. **Typography:** Web-safe fonts (Arial, Georgia) or @import Google Fonts
5. **CTA Button:** High-contrast, 44px min height (mobile tap target)

**HubSpot:** Drag-and-drop template builder  
**ActiveCampaign:** HTML template editor  
**Marketo:** Email 2.0 templates (modular)  

---

### Email Types

#### Transactional (Triggered by Action)

**Examples:**
- Welcome email
- Password reset
- Order confirmation
- Trial expiration notice

**Requirements:**
- Plain text or minimal design (high deliverability)
- Clear next step (CTA)
- No marketing fluff
- Sent via transactional ESP (SendGrid, Postmark) OR transactional track in HubSpot/AC

---

#### Promotional (Marketing Campaign)

**Examples:**
- Product launch
- Webinar invite
- Ebook download
- Sale/discount

**Requirements:**
- Eye-catching design
- Single, clear CTA
- Urgency (deadline, limited spots)
- Segmented (don't send to everyone)

---

#### Behavioral (Triggered by User Action)

**Examples:**
- "You viewed [Product], here's more info"
- "You abandoned your cart"
- "You haven't logged in recently"

**Requirements:**
- Personalized (use contact properties)
- Timely (send within 24 hours of trigger)
- Relevant CTA (re-engage, complete action)

---

#### Nurture (Educational Series)

**Examples:**
- 5-part email course
- Weekly tips
- Customer success stories

**Requirements:**
- Value-first (90% education, 10% pitch)
- Consistent cadence (same day/time each week)
- Progress indicator ("Part 2 of 5")
- Easy unsubscribe (don't trap people)

---

## Reporting Setup

### Metrics to Track (Per Email)

**Delivery:**
- Sent
- Delivered (sent - bounced)
- Bounce rate (<2% is healthy)

**Engagement:**
- Open rate (B2B avg: 15-25%)
- Click rate (B2B avg: 2-5%)
- Click-to-open rate (CTOR) = clicks / opens (ideal: >20%)

**Conversion:**
- Conversion rate (clicked → took desired action)
- Revenue attributed (if e-commerce or trackable)

**List Health:**
- Unsubscribe rate (<0.5% per email)
- Spam complaint rate (<0.1%)

---

### Metrics to Track (Per Workflow)

**Performance:**
- Enrollment (how many entered)
- Completion (how many finished)
- Goal achievement (how many converted)
- Time to conversion (avg days from enroll → goal)

**Efficiency:**
- Cost per MQL (ad spend / MQLs generated)
- MQL → SQL conversion rate
- SQL → Customer conversion rate

---

### Dashboard Setup (HubSpot Example)

**Marketing Dashboard Widgets:**

1. **Email Performance (Last 30 Days):**
   - Open rate trend
   - Click rate trend
   - Top 5 emails by clicks

2. **Lead Generation:**
   - New contacts this month
   - MQLs generated
   - Top converting landing pages

3. **Workflow Health:**
   - Active workflows
   - Workflow goal completions
   - Contacts currently enrolled

4. **Revenue Attribution:**
   - Deals influenced by marketing
   - Revenue by campaign source
   - ROI (revenue / marketing spend)

**Export:** Weekly automated report → Google Sheets or Slack

---

## Common Mistakes

### Mistake 1: Over-Automation (The Robot Problem)

**Problem:** Every email is automated, no human touch  
**Symptoms:** Low engagement, feels robotic  

**Fix:**
- Add personalization tokens (first name, company, recent activity)
- Mix automated + manual sends (e.g., CEO note once a quarter)
- Use conditional content (if [condition], show [block A], else [block B])

---

### Mistake 2: Broken Workflows (The Black Hole)

**Problem:** Contacts enroll but never exit (or exit too early)  
**Symptoms:** Contacts receiving wrong emails, or stuck in old workflows  

**Fix:**
- **Set goal completions:** If contact books demo → Exit all nurture workflows
- **Suppression lists:** Don't email customers with lead nurture content
- **Audit quarterly:** Check for contacts stuck in old workflows

---

### Mistake 3: Sending to Everyone (The Spray-and-Pray)

**Problem:** Same email to 10,000 contacts (no segmentation)  
**Symptoms:** High unsubscribe rate, low engagement  

**Fix:**
- Segment by persona, lifecycle stage, or engagement level
- A/B test subject lines per segment
- Use dynamic content blocks (show different content to different segments in same email)

---

### Mistake 4: Ignoring Deliverability

**Problem:** Low open rates because emails land in spam  
**Symptoms:** <10% open rate, high bounce rate  

**Fix:**
- **Authenticate your domain:** SPF, DKIM, DMARC (HubSpot/AC have setup guides)
- **Warm your IP:** If new domain, start with small sends, ramp up over 2-4 weeks
- **Clean your list:** Remove hard bounces immediately, soft bounces after 3 attempts
- **Monitor sender reputation:** Use Google Postmaster Tools, check blacklists

---

### Mistake 5: No Integration with CRM/Product

**Problem:** Marketing automation lives in a silo (doesn't talk to sales or product)  
**Symptoms:** Sales can't see marketing activity, product usage doesn't trigger emails  

**Fix:**
- **CRM integration:** HubSpot CRM (native), Salesforce (connector), Pipedrive (Zapier)
- **Product integration:** Use Segment, Rudderstack, or native webhooks to push events
- **Bi-directional sync:** Marketing updates CRM (lead score), CRM updates marketing (deal stage)

---

## Integration Guide

### HubSpot CRM (Native)

**What syncs:**
- Contacts, companies, deals
- Email opens/clicks → CRM timeline
- Workflow enrollment → Contact properties
- Form submissions → Lead source

**Setup:** Zero config (built-in)

---

### Salesforce (HubSpot or Marketo)

**What syncs:**
- Contacts → Leads/Contacts
- Workflow completions → Campaigns
- Lead scores → Custom fields
- Deal stages → Opportunities

**Setup:**
1. Install HubSpot-Salesforce connector (HubSpot Settings → Integrations)
2. Map fields (email, name, company, lead score)
3. Set sync direction (bi-directional recommended)
4. Field-level sync rules (e.g., only sync MQLs to Salesforce)

---

### Product Analytics (Segment → HubSpot/AC)

**What syncs:**
- User signup → New contact
- Feature usage → Custom events
- Product activity → Lead score boost
- Churn risk signals → Workflow triggers

**Setup (Segment):**
1. Add HubSpot destination in Segment
2. Map events:
   - `User Signed Up` → Create contact
   - `Feature Used: Advanced Reporting` → Custom property update
   - `Last Active: >30 days` → Add to "At-Risk" list
3. Test with Segment debugger

---

## Output Template: Marketing Automation Audit

Use this to evaluate an existing setup or plan a new one:

---

**Marketing Automation Audit**  
**Date:** [Date]  
**Platform:** [HubSpot / ActiveCampaign / Marketo / Klaviyo]  
**Auditor:** [Your Name]

---

### Platform Assessment

**Current Plan:** [Free / Starter / Professional / Enterprise]  
**Contacts:** [X contacts / Y limit]  
**Monthly Email Volume:** [X emails sent]  
**Integration Status:** [CRM? Product? Other?]

---

### Workflow Inventory

| Workflow Name | Trigger | Status | Enrolled | Goal Met | Issues |
|---------------|---------|--------|----------|----------|--------|
| Welcome Series | Form submission | Active | 1,200 | 45% | Low open rate on email #3 |
| MQL Nurture | Lead score ≥50 | Active | 340 | 12% | No clear exit condition |
| Re-engagement | Inactive 90d | Paused | 0 | — | Never launched |

---

### Segmentation Review

**Current Segments:**
- [List name] — [Criteria] — [Size]

**Missing Segments:**
- [Persona-based?]
- [Lifecycle stage?]
- [Product usage?]

---

### Lead Scoring Status

**Fit Scoring:** [Yes / No / Needs improvement]  
**Engagement Scoring:** [Yes / No / Needs improvement]  
**MQL Threshold:** [X points] — [Appropriate? Too high? Too low?]  

---

### Email Template Quality

**Master Template:** [Exists? Mobile-friendly?]  
**Brand Consistency:** [All emails use template? Or mix of random designs?]  
**CTA Clarity:** [Clear next steps in every email?]  

---

### Deliverability Health

**Domain Authentication:** [SPF ✅ / DKIM ✅ / DMARC ✅ or ❌]  
**Avg Open Rate (Last 30d):** [X%] — [Above/below industry avg 15-25%]  
**Bounce Rate:** [X%] — [Healthy <2%?]  
**Spam Complaint Rate:** [X%] — [Healthy <0.1%?]  

---

### Integration Status

**CRM:** [Connected? Syncing?]  
**Product Analytics:** [Connected? Events tracked?]  
**Other Tools:** [Slack notifications? Zapier?]  

---

### Recommendations

**High Priority (Fix This Week):**
1. [Action item]
2. [Action item]

**Medium Priority (Fix This Month):**
1. [Action item]

**Long-Term (Roadmap for Next Quarter):**
1. [Action item]

---

## Quality Bar

- **Platform selected** based on business needs (not just cheapest)
- **Core workflows built:** Welcome, nurture, re-engagement, onboarding (at minimum)
- **Segmentation strategy defined:** Lifecycle stage + persona + engagement level
- **Lead scoring implemented:** Fit + engagement, clear MQL threshold
- **Integrations live:** CRM + product (if SaaS) syncing bi-directionally
- **Reporting dashboard set up:** Track email performance, workflow goals, revenue attribution
- **Deliverability optimized:** Domain authenticated, list clean, sender reputation monitored
- **Workflow exit conditions:** Every workflow has goal completion + suppression rules to prevent collisions
- **Named owner:** One person is accountable for the workflow registry
- **Cross-referenced with `cm-context` and `revops`:** lifecycle stages and ICP definitions match

---

## Examples

### Example 1: Series A B2B SaaS replacing ad-hoc Mailchimp with HubSpot automation

**Context:**
- Company: Tideflow, $2.5M ARR workflow-automation SaaS for ops teams, hybrid PLG + sales-led
- Stack: Mailchimp for newsletter, HubSpot CRM (free tier), Pipedrive for sales, no marketing automation
- Problem: Sales gets cold MQLs because nurture is one-size-fits-all; no behavioral triggers; no lead scoring; product signups don't get welcomed
- Goal: Stand up HubSpot Marketing Hub Pro and ship 5 core workflows in 8 weeks
- Constraint: 1 marketing-ops part-timer; sales lead must sign off on lead scoring

**Input from user:**
> "Our lead nurture is a single Mailchimp drip that sends to everyone the same way. Sales says MQLs are cold. We need real automation but we're not sure where to start."

**Output (abbreviated):**

```markdown
### Platform decision
- HubSpot Marketing Hub Pro ($800/mo) — already have HubSpot CRM free; consolidates stack
- Migrate Mailchimp newsletter to HubSpot in Week 8 (after workflows are live)

### Lead scoring (v1)
- Fit (max 50): job title (+20 VP/Director Ops), company size 50-500 (+15), industry SaaS/FinTech/E-com (+10), country US/CA/UK (+5)
- Engagement (max 100): demo requested (+50 auto-MQL), pricing page 2x in 14d (+25), free trial started (+40), webinar attended (+25), ebook download (+15), email click last 7d (+10)
- MQL threshold: fit ≥30 AND engagement ≥50
- Decay: -10 if no activity in 90d
- Sign-off: VP Sales reviewed and approved before launch

### 5 core workflows
1. **Welcome series (Day 0-14)** — Triggered on signup. 4 emails. Goal: activate (create first workflow).
2. **MQL nurture (post-MQL, pre-SQL)** — Triggered when score crosses MQL threshold. 6 emails over 21 days. Goal: book demo. Suppressed if demo booked or sales engaged.
3. **Trial nurture (free → paid)** — Triggered on trial start. 5 emails over 14 days. Goal: subscription created. Exit on subscription_created or trial_expired.
4. **Re-engagement** — Triggered on 60 days no activity AND no open. 3 emails. Goal: email open. Exit to "deep nurture" or unsubscribe.
5. **Customer onboarding** — Triggered on subscription_created. 5 emails over 30 days. Goal: feature adoption (3 of 5 core features used).

### Segmentation lists (HubSpot smart lists)
- By lifecycle stage: Subscriber, Lead, MQL, SQL, Customer, Churned
- By persona: Ops Lead, Marketing Ops, Founder/CEO
- By plan: Free, Starter ($200), Pro ($800), Business ($2k+)
- By engagement: Hot (last 7d), Warm (8-30d), Cool (31-90d), Cold (90+)

### Integrations
- HubSpot CRM ↔ Pipedrive sync (Native via PieSync or Zapier, fields: contact, deal stage, MQL flag)
- Product analytics → HubSpot: Segment → HubSpot destination; events trigger workflows
  - `trial_started` → starts Trial Nurture
  - `feature_used` (count >5) → adds to "Activated" list
  - `last_login` (>30d) → Re-engagement workflow

### Reporting (HubSpot Marketing dashboard)
- Workflow goal completion rates
- MQL→SQL conversion rate (with RevOps)
- Email engagement by segment
- Revenue influenced by automation (HubSpot attribution)

### 8-week rollout
- Wk 1-2: Platform setup, contact import + cleanup, lead scoring model
- Wk 3-4: Welcome + Trial Nurture (highest leverage first)
- Wk 5-6: MQL Nurture + Customer Onboarding
- Wk 7: Re-engagement + suppression list rules
- Wk 8: Migrate Mailchimp newsletter, sunset old tool
```

**Why this works:** Started with workflow taxonomy + lead scoring before building anything. Got VP Sales sign-off (otherwise MQLs would be rejected). Prioritized highest-leverage workflows first (Welcome, Trial). Built suppression rules to prevent contacts being in multiple workflows.

---

### Example 2: PLG SaaS adding behavioral triggers via Segment → HubSpot

**Context:**
- Company: Stacklane, $4M ARR developer-tool SaaS, pure PLG
- Stack: HubSpot Pro, Mixpanel for product analytics, Stripe for billing
- Problem: Marketing emails are time-based ("Day 3 email", "Day 7 email") — not behavior-based; users who have already adopted features still get "have you tried X?" emails
- Goal: Behavior-triggered automation via Segment; reduce email volume but improve conversion
- Constraint: Engineering can ship Segment integration in one sprint

**Input from user:**
> "Our emails are generic and time-based. Power users get beginner content. Inactive users get nothing. We need product-data-driven emails."

**Output (abbreviated):**

```markdown
### Segment → HubSpot setup
- Segment installed in product (already there via Mixpanel)
- Add HubSpot destination in Segment
- Identify call: `analytics.identify(userId, { email, plan, signup_date, last_active_date, features_used: [...], workspaces_count })`
- Track events: `Trial Started`, `Feature Activated`, `Limit Hit`, `Workspace Invited Teammate`, `Subscription Upgraded`, `Subscription Downgraded`, `Last Login` (every 7 days)

### HubSpot custom properties (synced from Segment)
- plan_tier (free, pro, team, enterprise)
- features_activated_count
- last_active_at
- workspaces_count
- usage_score (computed: features × frequency)

### New behavior-triggered workflows (replacing time-based)
1. **Aha-moment celebration** — Triggered when `Feature Activated` AND features_activated_count == 1. Send "You just shipped your first workflow! Here's what other users do next."
2. **Limit-hit upgrade nudge** — Triggered on `Limit Hit` event. Send pricing comparison + upgrade CTA within 2 hours. Suppressed if subscription_upgraded in last 30d.
3. **Power-user advocacy** — Triggered when usage_score crosses threshold AND tenure >90d. Invite to case study, referral program.
4. **Inactivity rescue** — Triggered when last_active_at >14d ago AND plan != free. Personalized email: "Haven't seen you in two weeks — anything we can help with?" Sales-assist alert to CSM at >30d.
5. **Downgrade prevention** — Triggered on `Subscription Downgrade Initiated` (Stripe webhook → Segment). Save offer email + CSM Slack alert.

### Workflow suppression matrix
- If demo booked → suppress nurture
- If support ticket with negative sentiment → suppress marketing for 14d
- If churn workflow → suppress upgrade nudges
- If customer subscribed → suppress lead nurture

### Reporting
- Email volume reduction (target: -40%)
- Per-workflow goal completion (was: open/click; now: feature adoption, upgrade, NPS)
- Revenue influenced by behavior-triggered (vs. previous time-based baseline)

### Rollout (5 weeks)
- Wk 1: Segment events validated; HubSpot property sync live
- Wk 2: Aha-moment + Limit-hit (highest revenue lever)
- Wk 3: Power-user advocacy + Inactivity rescue
- Wk 4: Downgrade prevention + suppression rules
- Wk 5: Sunset time-based workflows; measure baseline shift
```

**Why this works:** Used product events as triggers, not calendar time. Built suppression rules that prevent collision (e.g., no upgrade nudge to someone in the save-flow). Reduced volume while increasing relevance — improves both engagement and deliverability.

---

## Related Skills

- **[`revops`](../revops/SKILL.md)** — Use *before* this skill. Lifecycle stage definitions and lead scoring criteria belong in RevOps; automation builds on them.
- **[`analytics-tracking`](../analytics-tracking/SKILL.md)** — Use *before* this skill. Behavior-triggered workflows require clean event tracking; this skill produces it.
- **[`email-deliverability`](../email-deliverability/SKILL.md)** — Use *alongside* this skill. Automation volume without deliverability hygiene drives spam folder placement.
- **[`email-sequence`](../email-sequence/SKILL.md)** — Use *after* this skill for content. Automation defines triggers and architecture; email-sequence writes the emails inside each workflow.
- **[`churn-prevention`](../churn-prevention/SKILL.md)** — Use *alongside* this skill. Churn-prevention defines the at-risk signals and intervention ladder; automation executes them.
- **[`attribution-modeling`](../attribution-modeling/SKILL.md)** — Use *after* this skill. Attribution measures which workflows drive revenue.
- **[`cm-context`](../cm-context/SKILL.md)** — Use *before* this skill. ICP and positioning inform segmentation.

---

## References

- HubSpot Inbound Marketing methodology and Academy curriculum
- Marketo *Definitive Guide to Lead Nurturing* and *Engagement Marketing*
- ActiveCampaign automation patterns library
- Wes Bush — *Product-Led Growth* (PLG sales-assist signal design)
- Forrester / SiriusDecisions lifecycle marketing framework
- Klaviyo Academy (for D2C / e-commerce automation patterns)
