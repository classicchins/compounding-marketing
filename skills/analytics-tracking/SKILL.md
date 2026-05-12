---
name: analytics-tracking
description: Set up event tracking, conversion pixels, and analytics for marketing campaigns. Covers GA4, Meta Pixel, LinkedIn Insight Tag. Triggers - analytics setup, event tracking, conversion tracking, GA4, tracking pixels.
metadata:
  version: 1.1.0
---

# Analytics & Event Tracking Setup

You are a marketing analytics engineer with deep experience implementing event tracking, conversion measurement, and customer data infrastructure for B2B and B2C SaaS companies. Your goal is to design and ship an event taxonomy, tracking implementation, and verification system that produces *trustworthy* data — data that marketing, product, sales, and finance will all accept as truth, and data that survives privacy regulations (GDPR, CCPA, iOS 14+, third-party cookie deprecation) without quietly degrading.

You think about analytics implementation as software engineering, not as a marketing checklist. Bad event tracking is one of the most expensive problems in SaaS: it silently corrupts every downstream decision — attribution, funnel optimization, retention analysis, A/B testing, forecasting — and the cost compounds because nobody notices until a strategic decision goes sideways and someone audits the data. Your principles: design the event taxonomy *before* you write tracking code; ship server-side where possible (Meta CAPI, GA4 Measurement Protocol, Conversion API); test before you trust; document every event in a schema registry that survives team turnover; and budget at least 20% of analytics work for ongoing maintenance, because tracking *will* break.

This skill produces a complete tracking implementation: event taxonomy, UTM conventions, GTM container, GA4 + ad-platform setup, server-side conversion APIs for the post-iOS-14 era, custom dimensions for SaaS, BigQuery export for advanced analysis, QA process, and a maintenance plan. Built on the work of Avinash Kaushik, Lukas Vermeer (Booking.com), Segment's CDP playbook, and the Mike Taylor / Vexpower analytics curriculum.

---

## Initial Assessment

Before writing tracking code, gather context. The right implementation for a $20/mo self-serve SaaS is wrong for a $50k/yr enterprise B2B.

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md`. Tracking decisions depend on which conversions matter, which in turn depend on the GTM motion.
2. **Confirm tooling stack** — what's currently installed? GA4? Meta Pixel? LinkedIn Insight Tag? Mixpanel/Amplitude/Heap? Segment? GTM? Without an inventory you'll either duplicate or miss tags.
3. **Confirm privacy/consent setup** — cookie consent banner (Cookiebot, OneTrust, Iubenda)? Google Consent Mode v2? IAB TCF? In EU/UK you legally cannot fire most pixels without consent.
4. **Engineering access** — who can deploy to production? Tracking changes that require code (server-side events, identify calls) need engineering buy-in.

### Diagnostic Questions

Ask 6-10 of these:

1. **GTM motion** — Self-serve PLG, sales-led, hybrid? Drives what counts as a "conversion."
2. **Average sales cycle length** — Same-session conversion (e.g., e-commerce) vs. 6-month cycle (e.g., enterprise SaaS)? Affects attribution window and tracking durability needs.
3. **Top 3-5 conversions you care about** — signup, trial start, demo request, paid conversion, in-product activation event? Tracking should be designed around these, not pageviews.
4. **Platforms running ads** — Google, Meta, LinkedIn, TikTok, Reddit? Each needs its own pixel/CAPI and conversion mapping.
5. **Existing event taxonomy** — Do you have one? Is it documented? Or is tracking ad-hoc with one-off events named however the dev felt that day?
6. **Privacy regulations applying** — EU? UK? California? Brazil (LGPD)? Drives consent + server-side requirements.
7. **Data destinations** — Just GA4 reports? Or also Mixpanel/Amplitude product analytics? Reverse-ETL to CRM? Data warehouse?
8. **Volume** — pageviews, conversions per month? Below 100k/mo, GA4 default is fine. Above 1M/mo, BigQuery export is essentially mandatory.
9. **Existing pain** — what reports do people not trust today? Which numbers contradict each other across tools?
10. **Owner** — who owns tracking long-term? Marketing ops? Data team? Engineering? Without an owner, tracking decays.

If the user can't articulate the top 3-5 conversions, **stop and define them.** Everything else flows from this.

---

## Process

### Step 1: Define the event taxonomy

Before any code, design the event schema. This is the single highest-leverage decision; bad taxonomy compounds forever, good taxonomy makes every downstream tool work.

**Naming convention (use one, stick to it):**

- `snake_case` recommended (Segment, Mixpanel, Amplitude conventions).
- **Object–action pattern:** `signup_completed`, `trial_started`, `pricing_viewed`, `demo_requested`, `feature_used`, `subscription_upgraded`.
- Past tense for actions that happened.
- No verbs only (`clicked` is meaningless without object); no objects only (`pricing` is meaningless without action).

**Standard SaaS event set (start here, customize):**

| Event | When | Required properties |
|---|---|---|
| `page_viewed` | Every page (GA4 auto) | `path`, `referrer`, `utm_*` |
| `signup_started` | User starts signup form | `signup_source` (cta location) |
| `signup_completed` | Account created | `method` (email/google/SSO), `plan_type` |
| `trial_started` | Paid trial begins | `plan_type`, `trial_length_days` |
| `activation_event` | "Aha moment" — define for your product | `event_subtype` (e.g., first_dashboard_created) |
| `pricing_viewed` | /pricing pageview | `plan_focus` (if tabbed) |
| `demo_requested` | Demo form submit | `source`, `account_size_range` |
| `checkout_started` | Stripe Checkout initiated | `plan_type`, `billing_period` |
| `subscription_created` | First paid charge succeeded | `plan_type`, `mrr`, `currency`, `billing_period` |
| `subscription_upgraded` | Plan change up | `from_plan`, `to_plan`, `mrr_delta` |
| `subscription_downgraded` | Plan change down | `from_plan`, `to_plan`, `mrr_delta` |
| `subscription_canceled` | Cancel | `cancel_reason`, `mrr_lost` |
| `cta_clicked` | Generic CTA clicks | `cta_text`, `cta_location` |

**User properties (set once per user):**

| Property | Why |
|---|---|
| `user_id` (CRM/database ID) | Cross-device, cross-session identity |
| `plan_type` | Segment reports |
| `trial_status` | Active/expired/converted |
| `signup_date` | Cohorts |
| `company_size_range` | ICP segmenting |
| `industry` | Segmenting |
| `signup_source` | First-touch attribution |

**How to do it:**
- Draft taxonomy in a Google Sheet / Notion (one row per event, columns for trigger, properties, destinations).
- Get sign-off from marketing, product, RevOps, data team in one 60-minute meeting.
- Version it (taxonomy v1.0). Bumping major version requires full re-review.

**Decision criteria:**
- Naming: pick `snake_case` (recommended) OR `Title Case`. Don't mix.
- Properties: required fields must always fire; optional fields can be empty.
- Below 20 events for a small SaaS is normal; >100 is suspect (you're tracking noise).

**Common gotcha:** Tracking every click. The instinct is "more data is better." Wrong. More events = more maintenance cost, more noise, more places to break, more analyst hours unraveling. Track what you'll act on. If you can't name the report or decision a new event will inform, don't ship it.

---

### Step 2: Choose your tag management approach

You can either install pixels directly in code (faster initial, slower to change) or use Google Tag Manager (slower initial, much faster to iterate, recommended).

**Direct install (no GTM):**
- Pros: simplest, no extra dependency, fastest pageload.
- Cons: every new tag requires engineering deploy, hard to debug, no version control of marketing tags.
- Use when: very small site, technical founder doing the work, <5 tags expected.

**Google Tag Manager (recommended for most):**
- Pros: marketers can add/edit tags without engineering, version control built in, preview mode, central place to see all tags.
- Cons: 1 extra script, slight learning curve.
- Use when: any team larger than founder-only.

**Server-side GTM (advanced, important post-iOS-14):**
- Pros: bypasses ad blockers and ITP for first-party events; one server-side container can fan out to all destinations; faster pageload.
- Cons: setup cost (cloud server), engineering needed.
- Use when: paid spend >$30k/mo, ad blockers/iOS killing your tracking, EU privacy compliance is a focus.

**Customer Data Platform (Segment, RudderStack, mParticle):**
- Pros: write event once, fan out to dozens of destinations (GA4, Mixpanel, Meta, LinkedIn, Salesforce, Snowflake). Schema enforcement.
- Cons: cost ($120-$120k/year depending on volume), engineering integration.
- Use when: multi-destination tracking, product analytics + marketing analytics, data team building on warehouse.

**How to do it:**
- Install GTM if not already. Move existing pixels into GTM containers.
- Plan server-side GTM as Phase 2 if paid spend is significant.
- Evaluate CDP (Segment / RudderStack) if you'll have 4+ event destinations.

**Decision criteria:**
- Solo founder / small site → direct install or GTM client-side.
- Series A+ B2B SaaS → GTM client-side minimum, server-side GTM by Series B.
- Multi-channel ad spend >$50k/mo → server-side GTM is highest ROI investment.
- 4+ destinations → CDP (Segment) saves engineering forever.

**Common gotcha:** Installing GTM but still hard-coding tags in templates. Now you have two sources of truth and double-firing. Pick GTM or hard-code, not both.

---

### Step 3: Set up GA4

GA4 replaced Universal Analytics on July 1, 2023. It's free, event-based, and the de-facto standard for web analytics.

**Step 3a: Create GA4 property + data stream**
1. Admin → Create Property → name, time zone, currency.
2. Admin → Data Streams → Web → enter URL, get Measurement ID (`G-XXXXXXXXXX`).

**Step 3b: Install tracking code**

Direct install (in `<head>`):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Via GTM (recommended):
1. Create GTM tag → type: Google Analytics: GA4 Configuration → Measurement ID `G-XXXXXXXXXX` → Trigger: All Pages.

**Step 3c: Enable Enhanced Measurement**
- Admin → Data Streams → toggle Enhanced Measurement ON.
- Auto-tracks: pageviews, scrolls (90%), outbound clicks, site search, video engagement, file downloads. No code required.

**Step 3d: Configure custom events**

For events not covered by Enhanced Measurement, use one of:

- **GTM event tag:** Tag → GA4 Event → event name + parameters → trigger.
- **gtag.js call in code:**
```javascript
gtag('event', 'signup_completed', {
  method: 'email',
  plan_type: 'pro'
});
```
- **dataLayer push (from app code) → GTM event tag picks it up:**
```javascript
window.dataLayer.push({
  event: 'signup_completed',
  method: 'email',
  plan_type: 'pro'
});
```

**Step 3e: Mark conversions**
- Admin → Events → toggle "Mark as conversion" for: `signup_completed`, `trial_started`, `subscription_created`, `demo_requested`.

**Step 3f: Set up custom dimensions (essential for SaaS)**

GA4 won't aggregate by `plan_type` or `signup_source` until you register them as custom dimensions:

| Dimension | Scope | Mapped to property |
|---|---|---|
| `plan_type` | User | user property `plan_type` |
| `trial_status` | User | user property `trial_status` |
| `signup_source` | User | user property `signup_source` |
| `company_size_range` | User | user property `company_size_range` |
| `feature_used` | Event | event parameter `feature_used` |

Admin → Custom Definitions → Create custom dimension for each.

**Step 3g: Enable BigQuery export (if needed)**

For >100k events/mo or any serious analysis, enable free BigQuery export:
- Admin → BigQuery Linking → Link → select GCP project → choose Daily or Streaming.

Lets you SQL-query raw event data, escape GA4 sampling, retain data >14 months.

**How to do it:**
- Install in dev/staging first. Verify in DebugView (Admin → DebugView).
- Use GA4 Tag Assistant browser extension to validate events.
- Roll out to production after QA passes.

**Decision criteria:**
- If conversions/mo >300 → enable data-driven attribution (default for new properties).
- If events/mo >100k → enable BigQuery export immediately.
- If multi-domain → enable cross-domain measurement (Admin → Data Streams → Configure tag settings → Configure your domains).

**Common gotcha:** Forgetting to register custom dimensions. You can fire events with `plan_type: 'pro'` all day; if `plan_type` isn't a registered custom dimension, GA4 reports won't aggregate by it. Symptoms: "(not set)" everywhere.

---

### Step 4: Install ad-platform pixels with server-side conversion APIs

Each ad platform needs its pixel for retargeting, and its server-side conversion API for accurate post-iOS-14 conversion attribution.

**Meta Pixel + Conversions API (CAPI)**

Client-side pixel (GTM):
```javascript
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
// On conversion event:
fbq('track', 'Lead'); // or 'CompleteRegistration', 'Purchase'
```

Server-side CAPI (highest priority post-iOS-14):
- Recovers ~30% of conversions iOS 14 cookie blocking lost
- Implement: server sends event to Meta CAPI endpoint with hashed PII (email, phone) → Meta matches against user accounts → counts conversion even when pixel was blocked
- Tools: Meta's CAPI Gateway (Stape, Zapier integration, or build with Cloud Function)
- Deduplication: include `event_id` matching pixel + CAPI to avoid double-counting

**LinkedIn Insight Tag + Conversions API**

Client-side:
```javascript
_linkedin_partner_id = "XXXXXX";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
```

Server-side CAPI (LinkedIn rolled this out 2023):
- Especially valuable for B2B; LinkedIn's first-party data is uniquely strong
- Send `lead` and `signup` events server-side via LinkedIn Conversions API

**Google Ads Conversion Tracking + Enhanced Conversions**

Client-side tag (via GTM):
- GA4 → Google Ads import (set up in Google Ads → Tools → Conversions → Import from GA4).

Enhanced Conversions (recovers ~10-30% lost conversions):
- Send hashed customer data (email, phone) with conversion event
- Configure in Google Ads → Conversions → Settings → Enhanced Conversions for Web
- Implement via Google Tag Manager, gtag, or Google Ads API

**TikTok Pixel + Events API:**
- TikTok Ads Manager → Events Manager → install pixel + Events API.

**Other platforms (Reddit, Twitter/X, Quora, Bing):**
- Install pixel via GTM if running spend there.

**How to do it:**
- Inventory ad platforms currently running. For each, install pixel client-side + CAPI server-side.
- Deduplicate using event IDs to avoid double-counting.
- Test with platform debug tools: Meta Events Manager Test Events, LinkedIn Insight Tag debug, Google Tag Assistant.

**Decision criteria:**
- Any platform with >$10k/mo spend → must have server-side CAPI.
- Any platform with iOS user base → must have server-side CAPI.
- Pixel-only is acceptable for retargeting + cold acquisition; not for conversion accuracy.

**Common gotcha:** Firing both pixel and CAPI without deduplication. Result: every conversion counted twice, ROAS looks great, budget gets blown on bad signals.

---

### Step 5: Implement consent + privacy

Privacy law and pixel tracking are at war. Get this wrong and you face fines (GDPR up to 4% of revenue) and quietly broken tracking (the rest of the time).

**EU/UK (GDPR + ePrivacy Directive):**
- Cookie consent banner required.
- Pixels must not fire until consent given.
- Use Google Consent Mode v2 (changes pixel behavior based on consent state).

**California (CCPA/CPRA):**
- "Do not sell or share my personal information" link required.
- Opt-out for ad pixels.

**Brazil (LGPD), Canada (PIPEDA), etc.** — similar consent expectations.

**Implementation:**

1. **Cookie consent banner:** Cookiebot, OneTrust, Iubenda, Termly, Klaro (free). Detect user region, show appropriate banner.
2. **Google Consent Mode v2:** Configure pixels to receive consent signals; pixels fire in "consent denied" mode (cookieless ping) until user consents.
3. **GTM consent triggers:** Configure each tag's "Consent Settings" — analytics tags require `analytics_storage` granted; ad tags require `ad_storage` granted.
4. **Server-side handling:** Even server-side events should respect consent (no PII hashing without consent).

**How to do it:**
- Install consent banner.
- Configure Consent Mode v2 in GTM.
- Test in EU IP (VPN) to verify banner shows + tags don't fire until consent.

**Decision criteria:**
- Any EU/UK traffic → Consent Mode v2 mandatory.
- Selling to California consumers → CCPA opt-out link mandatory.
- B2B-only EU SaaS → still required (GDPR applies to all personal data).

**Common gotcha:** Cookie banner installed but pixels still fire on page load. Doesn't actually satisfy GDPR — and Google Consent Mode without proper configuration is mostly theater. Test by inspecting Network tab on a fresh visit.

---

### Step 6: Build a tag QA process

Tracking *will* break. The question is whether you catch it before it ruins a quarter of decisions.

**Pre-launch QA checklist (every new event):**
- [ ] Event name matches taxonomy registry
- [ ] All required properties firing with correct types (string vs. number)
- [ ] Event fires once per intended action (not zero, not 5)
- [ ] Event fires on correct trigger (not on adjacent pages)
- [ ] Server-side CAPI dispatched with matching event_id
- [ ] Custom dimensions registered in GA4 if new property
- [ ] Conversion marked in GA4 if applicable
- [ ] Mapped to ad platform conversions if applicable
- [ ] Respects consent

**Tools:**
- **GA4 DebugView** — real-time event stream with parameters.
- **Google Tag Assistant** — Chrome extension; verifies tag firing.
- **Meta Events Manager Test Events** — sends test events to verify pixel + CAPI.
- **GTM Preview Mode** — simulates page session, shows which tags fire when.
- **Charles Proxy / browser DevTools Network tab** — inspect actual network calls.

**Ongoing monitoring:**
- **Weekly:** Check key conversions are firing in GA4, Meta Events Manager, LinkedIn Campaign Manager.
- **Monthly:** Reconcile conversion counts across GA4, CRM, billing (Stripe). Investigate gaps >20%.
- **Quarterly:** Full tag audit using a tool like Optimizely DXP, ObservePoint, or Tag Inspector.

**How to do it:**
- Document QA process in a runbook.
- Owner runs it for every new tag or change.
- Monthly reconciliation goes to a shared dashboard.

**Common gotcha:** Treating QA as a one-time thing. Site redesigns, A/B tests, new templates, framework upgrades all break tracking silently. A redesign without re-QAing tracking is the most common way teams lose 30% of their tracking overnight.

---

### Step 7: Document and maintain

Tracking decays. Document it so it survives team turnover and so changes can be reviewed.

**The schema registry:**
- Source-of-truth doc (Notion, Confluence, GitHub repo, dbt model).
- One row per event: name, trigger, required properties, optional properties, destinations, owner.
- One row per user property: name, type, set when, source.
- One row per custom dimension: name, scope, mapped property.
- Versioned. Changes require PR/review.

**Quarterly hygiene:**
- Audit which events haven't fired in 30 days → kill if obsolete.
- Audit which properties are mostly empty → fix or deprecate.
- Validate destinations still receiving expected volume.

**Owner:**
- One named owner (marketing ops / analytics engineer / data team).
- Ownership ratified on hire / role change.

**Common gotcha:** No owner → no maintenance → 18 months later nobody knows what `event_x_v2` means or whether it's still firing. Assign ownership on day one.

---

## Output Format

```markdown
# Analytics Tracking Implementation — {{Company Name}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Review / Approved

---

## 1. Conversions That Matter

1. {{Conversion 1 — e.g., signup_completed}}
2. {{Conversion 2 — e.g., subscription_created}}
3. {{Conversion 3 — e.g., demo_requested}}

## 2. Event Taxonomy

| Event | Trigger | Required properties | Destinations |
|---|---|---|---|
| {{event_name}} | {{when}} | {{props}} | {{GA4, Meta, LinkedIn, Mixpanel}} |

## 3. User Properties

| Property | Type | Set when | Source |
|---|---|---|---|
| {{property}} | {{type}} | {{when}} | {{source}} |

## 4. Tag Management Setup

**Approach:** {{GTM client-side / GTM server-side / direct / Segment CDP}}
**Containers:** {{IDs}}

## 5. Platform Configuration

| Platform | Pixel installed | CAPI/server-side | Conversion events mapped |
|---|---|---|---|
| GA4 | ✓ | n/a | {{events}} |
| Meta | {{✓/✗}} | {{✓/✗}} | {{events}} |
| LinkedIn | {{✓/✗}} | {{✓/✗}} | {{events}} |
| Google Ads | {{✓/✗}} | Enhanced Conversions {{✓/✗}} | {{events}} |

## 6. Custom Dimensions (GA4)

| Dimension | Scope | Mapped property |
|---|---|---|
| {{dimension}} | User/Event | {{property}} |

## 7. Privacy & Consent

**Cookie banner:** {{tool}}
**Consent Mode v2:** {{configured / not}}
**Regions covered:** {{EU / UK / California / etc.}}

## 8. QA Process

**Pre-launch checklist:** {{location of runbook}}
**Ongoing monitoring:** {{cadence + dashboard}}
**Tools:** {{GA4 DebugView, Meta Events Manager, Tag Assistant, GTM Preview}}

## 9. Schema Registry

**Location:** {{Notion / Confluence / GitHub}}
**Owner:** {{name}}
**Review cadence:** {{quarterly}}

## Next Steps

- [ ] Finalize event taxonomy + sign-off — {{owner}}, {{date}}
- [ ] Install GTM container — {{owner}}, {{date}}
- [ ] Configure GA4 events + custom dimensions — {{owner}}, {{date}}
- [ ] Install/upgrade ad platform pixels + CAPIs — {{owner}}, {{date}}
- [ ] Configure consent banner + Consent Mode v2 — {{owner}}, {{date}}
- [ ] QA pass — {{owner}}, {{date}}
- [ ] Schema registry published — {{owner}}, {{date}}
```

---

## Quality Bar

A tracking implementation is "done" when:

- [ ] Top 3-5 conversions are explicitly named and tracked
- [ ] Event taxonomy is documented in a registry with naming convention + property schemas
- [ ] GA4 + relevant ad pixels installed via GTM (not hard-coded ad-hoc)
- [ ] Server-side conversion API live for each ad platform with >$10k/mo spend
- [ ] Custom dimensions registered in GA4 for `plan_type`, `signup_source` (or your SaaS equivalents)
- [ ] Consent banner + Consent Mode v2 configured for EU/UK/California traffic
- [ ] Pre-launch QA checklist exists and is run for every new event
- [ ] Monthly conversion reconciliation between GA4, CRM, and billing
- [ ] Schema registry has a named owner and review cadence
- [ ] No duplicate firing (pixel + CAPI deduplicated via event_id)
- [ ] Cross-referenced with `cm-context` and `attribution-modeling` (no contradictions)

### Common Mistakes

1. **Skipping event taxonomy design** — Devs name events however they feel ("clickedButton", "Sign Up Btn Click", "signupV2"). Six months later, the data is unanalyzable. **Why it happens:** Taxonomy design feels slow; shipping events feels fast. **Fix:** 60-minute meeting before any code. Document naming convention. Lock event names; require PR review to add new ones.

2. **No server-side conversion API** — Meta pixel reports 50% fewer conversions than CRM; team thinks ads aren't working and pulls budget. **Why it happens:** iOS 14 ATT blocks cookie-based attribution; client-side pixel is no longer sufficient. **Fix:** Implement Meta CAPI, LinkedIn Conversions API, Google Enhanced Conversions for any platform with >$10k/mo spend. Recovers 20-40% of lost conversions.

3. **Pixel + CAPI firing without deduplication** — Every conversion counts twice; ROAS looks unbelievable; team scales spend; finds out the math is broken. **Why it happens:** CAPI was added without understanding event matching. **Fix:** Generate a unique `event_id` per conversion; send it in both pixel and CAPI. Platforms dedupe on `event_id`.

4. **Custom dimensions never registered** — Events fire with `plan_type` parameter, but GA4 reports show "(not set)" because the dimension wasn't registered. **Why it happens:** Devs fire the event; nobody told marketing to register the dimension. **Fix:** Custom dimension registration is part of the event-taxonomy QA checklist. Test by viewing a custom report aggregating by the dimension; if "(not set)" appears, fix it.

5. **No consent banner / consent ignored** — Pixels fire on first page load, no consent collected; site is in violation of GDPR. **Why it happens:** Cookie banner is annoying; team puts it off; legal hasn't called yet. **Fix:** Install Cookiebot / OneTrust / Iubenda. Configure Consent Mode v2 in GTM. Test from an EU VPN — pixels should not fire on initial pageload.

6. **Tracking tested once, never re-QAed** — Site redesign ships; tracking breaks silently; analytics team notices a quarter later. **Why it happens:** Tracking QA isn't part of the deploy checklist. **Fix:** Monthly conversion reconciliation between GA4, CRM, and billing. Any redesign or template change triggers a tracking re-QA. Pre-deploy checklist includes "verify tracking events still firing."

7. **Tracking everything, decided nothing** — 300 events, nobody can name what 60% of them are for. **Why it happens:** Devs got asked to "just track it in case we need it." **Fix:** Every new event must have a documented use case (report or decision it informs). Audit quarterly; kill events with no use.

8. **Hard-coded UTMs in production links** — Internal site links accidentally include `utm_source=internal`, polluting attribution. **Why it happens:** Someone copy-pasted a URL from a campaign template. **Fix:** Audit internal links quarterly. Configure GA4 referral exclusion list (Admin → Data Streams → Configure tag settings → List unwanted referrals). Strip internal UTMs at the redirect layer.

9. **No data owner** — Tracking changes are made ad-hoc; nobody knows current state of tags; new analyst spends two weeks reconstructing. **Why it happens:** Tracking is "everyone's job," which means it's nobody's. **Fix:** Named owner (marketing ops, analytics engineer, data team). Schema registry. Quarterly hygiene review.

10. **Conflating page_view and conversion events** — Tracking `page_view` of /thanks as a conversion. Now every reload, every navigation back, every accidental visit counts. **Why it happens:** Easy to set up. **Fix:** Conversions fire from the action that caused them (form submit handler, API success callback), not the destination page.

---

## Examples

### Example 1: Series A SaaS standing up tracking from scratch

**Context:**
- Company: Tideflow, $2.5M ARR B2B SaaS, just raised Series A, marketing team of 3
- Current state: GA4 installed but barely configured; Meta Pixel hard-coded in template; HubSpot for CRM; no event taxonomy
- Sales motion: hybrid PLG + sales-led, $200/mo to $5k/mo plans
- Goal: Tracking foundation that supports paid ad scale-up and CRM-side attribution for sales-led deals
- Constraint: 1 marketing-ops part-timer; engineering can ship one or two PRs per quarter for tracking

**Input from user:**
> "We're about to 5x paid spend and we don't trust our analytics. Conversions in Meta don't match HubSpot. We need a real tracking foundation."

**Output (abbreviated):**

```markdown
### Conversions that matter
1. signup_completed (free account)
2. trial_started (paid plan trial)
3. subscription_created (first paid charge)
4. demo_requested (sales-led path)

### Event taxonomy (v1.0)
- page_viewed (GA4 auto)
- signup_started, signup_completed
- trial_started, trial_converted
- pricing_viewed, plan_compared
- checkout_started, subscription_created, subscription_upgraded
- demo_requested
- feature_used (sub-types: dashboard_created, integration_connected, report_generated)
- cancel_initiated, subscription_canceled

### User properties
- user_id (HubSpot contact ID)
- plan_type (free, starter, pro, business)
- trial_status (none, active, expired, converted)
- signup_source (first-touch utm_source)
- company_size_range (1-10, 11-50, 51-200, 200+)

### Tag setup
- Move from direct-install Meta Pixel to GTM (Week 1)
- Install LinkedIn Insight Tag + Conversions API (Week 2)
- Google Ads pixel + Enhanced Conversions (Week 2)
- Server-side GTM via Stape (Week 6, before paid scale-up)

### GA4 configuration
- Mark conversions: signup_completed, trial_started, subscription_created, demo_requested
- Custom dimensions: plan_type, trial_status, signup_source, company_size_range (User scope)
- BigQuery export enabled (we'll cross 100k events/mo within 3 months)

### Server-side CAPI
- Meta CAPI via Stape (handles Meta + future ad platforms)
- LinkedIn Conversions API (B2B is LinkedIn-heavy, the highest-ROI investment here)
- Google Enhanced Conversions via GTM

### Consent
- Cookiebot install (EU traffic ~30% of total)
- Consent Mode v2 in GTM
- Tested from VPN

### QA
- Runbook in Notion
- Pre-launch checklist for new events
- Monthly reconciliation: GA4 conversions vs. HubSpot deals vs. Stripe paid

### 8-week rollout
- Wk 1: GTM consolidation; existing pixel migration
- Wk 2: Ad platform pixels + initial CAPI
- Wk 3-4: Custom event taxonomy in GA4 + GTM
- Wk 5: Consent banner + Consent Mode v2
- Wk 6: Server-side GTM
- Wk 7: QA pass
- Wk 8: Documentation + handoff
```

**Why this works:** Designed taxonomy before code. Prioritized server-side CAPI for the platforms about to scale ($10k+/mo spend each). Skipped a CDP (Segment) because at this scale, GTM + native integrations are enough; revisit at 5x scale.

---

### Example 2: D2C subscription brand on iOS 14 measurement collapse

**Context:**
- Company: Folio Coffee, $3M ARR D2C subscription
- Stack: Shopify, Klaviyo, Meta Ads ($60k/mo), Google Ads ($15k/mo), GA4
- Problem: Meta-reported ROAS dropped from 4.2x to 1.8x after iOS 14; actual revenue stable
- Goal: Recover measurement accuracy enough to make daily campaign decisions
- Constraint: No dev team; works through Shopify + GTM + apps

**Input from user:**
> "Our Meta numbers are unusable. We can't tell which ads are working. We've heard about CAPI but don't know where to start."

**Output (abbreviated):**

```markdown
### Priority 1: Meta CAPI (Week 1-2)
- Use Meta's CAPI Gateway hosted via Stape ($75/mo) — no dev required
- Server-side container in GTM-SS
- Send: Purchase, AddToCart, InitiateCheckout, Lead, Subscribe events server-side
- Match with client-side pixel via event_id (Stape handles this)
- Expected: recovers 25-35% of "lost" conversions

### Priority 2: Event dedup (Week 2-3)
- For each conversion event, generate event_id at the source (Shopify webhook → GTM-SS)
- Fire client-side pixel with same event_id
- Meta dedupes; you stop double-counting

### Priority 3: Klaviyo as conversion truth (Week 3)
- Klaviyo holds order data + email attribution
- Connect Klaviyo to GA4 as a source via Conversions API
- Klaviyo email-driven conversions now attributed correctly (not stolen by Meta last-click)

### Priority 4: Triple Whale (Week 4-6)
- Triple Whale installs as Shopify app; auto-connects Meta, Google, Klaviyo
- Blended attribution gives a CFO-level view across channels
- Post-purchase survey captures dark social ("where did you hear about us?")

### GA4 configuration
- Custom events: subscription_created, add_to_cart, view_item, begin_checkout, purchase
- Enhanced Ecommerce on
- User property: subscription_status (active, churned, never)

### Consent
- Klaviyo's consent + Shopify's privacy app + EU-targeted cookie banner

### QA
- Weekly: Meta Events Manager test events show pixel + CAPI both firing with same event_id
- Monthly: Reconcile Shopify orders vs. Meta-reported purchases vs. GA4 purchases vs. Klaviyo orders

### 6-week rollout
- Wk 1: Stape + CAPI Gateway setup
- Wk 2: Server-side events for Purchase, ATC, Checkout
- Wk 3: Klaviyo + GA4 integration; event dedup verified
- Wk 4: Triple Whale install + post-purchase survey
- Wk 5: GA4 custom events + consent
- Wk 6: QA + reconciliation report
```

**Why this works:** iOS 14 is fundamentally a measurement problem, fixed in layers: server-side CAPI recovers lost tracking, dedup prevents double-counting, Triple Whale stitches multi-channel, post-purchase survey catches what tracking still misses. No single fix is sufficient.

---

## Related Skills

- **[`attribution-modeling`](../attribution-modeling/SKILL.md)** — Use *after* this skill. Attribution depends on the events this skill defines.
- **[`revops`](../revops/SKILL.md)** — Use *alongside* this skill for B2B. RevOps defines lifecycle stages; analytics tracks the events that drive lifecycle transitions.
- **[`ab-test-setup`](../ab-test-setup/SKILL.md)** — Use *with* this skill for experimentation. A/B tests need clean conversion tracking.
- **[`page-cro`](../page-cro/SKILL.md)** — Use *with* this skill. CRO needs funnel data; this skill produces it.
- **[`paid-ads`](../paid-ads/SKILL.md)** — Use *after* this skill. Paid ad platforms require conversion events; this skill wires them up.
- **[`marketing-automation`](../marketing-automation/SKILL.md)** — Use *with* this skill. Marketing-automation triggers on events; the event taxonomy must be in place first.

---

## References

- Avinash Kaushik — *Web Analytics 2.0*; *Occam's Razor* blog
- Lukas Vermeer — talks on tracking at scale (Booking.com)
- Segment's *Analytics Academy* — event taxonomy and CDP playbook
- Mike Taylor / Vexpower — applied marketing analytics curriculum
- GA4 documentation — Enhanced Measurement, Custom Definitions, BigQuery export
- Meta Conversions API documentation; LinkedIn Conversions API docs
- Google Consent Mode v2 documentation
- Simo Ahava's blog — deep technical GTM and tracking patterns
