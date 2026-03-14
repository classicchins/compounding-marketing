# Measurement Skills Deep Dive

Analytics, A/B testing, and attribution skills.

## Overview

| Skill | Focus | Output | Time |
|-------|-------|--------|------|
| **analytics-tracking** | Event tracking setup | Tracking plan | 1-2h |
| **ab-test-setup** | Experiment design | Test plan | 1h |
| **attribution-modeling** | Channel contribution | Attribution model | 1-2h |

---

## `analytics-tracking` — Event Taxonomy

### Example (AuthorityMax GA4 + Mixpanel)

```markdown
# Analytics Tracking Plan

## Key Events

### Acquisition Events
| Event Name | Trigger | Properties |
|------------|---------|------------|
| `page_view` | Every page load | `page_title`, `page_path`, `referrer` |
| `ad_click` | Click from ad | `campaign`, `ad_group`, `keyword` |
| `signup_started` | Click "Start Free Trial" | `source`, `medium`, `campaign` |

### Activation Events
| Event Name | Trigger | Properties |
|------------|---------|------------|
| `account_created` | Signup complete | `plan_type` (free/pro) |
| `voice_training_started` | Upload first post | — |
| `voice_training_complete` | Uploaded 10 posts | `posts_uploaded` |
| `first_post_generated` | Generated first post | `time_to_first_post` |
| `engagement_prediction_used` | Clicked prediction score | — |

### Conversion Events
| Event Name | Trigger | Properties |
|------------|---------|------------|
| `trial_started` | Started 7-day trial | `plan` (pro/enterprise) |
| `upgrade_to_paid` | Trial → Paid | `plan`, `mrr` |
| `subscription_renewed` | Monthly renewal | `tenure_months` |

### Retention Events
| Event Name | Trigger | Properties |
|------------|---------|------------|
| `post_generated` | Every post generated | `post_count` (lifetime) |
| `post_published` | Post scheduled/published | `platform` (LinkedIn) |
| `weekly_active_user` | Generated post this week | — |

---

## Dashboard Setup (Mixpanel)

**Acquisition Funnel:**
1. Signup started → 2. Account created → 3. Voice training complete → 4. First post generated

**Conversion rates:**
- Signup → Account: 85%
- Account → Voice training: 70%
- Voice training → First post: 93%
- **Overall activation:** 55%

**North Star Metric:** Weekly active users (generate at least 1 post/week)
```

---

## `ab-test-setup` — Experiment Design

### Example (Homepage Headline Test)

```markdown
# A/B Test Plan: Homepage Headline

## Hypothesis
Changing the hero headline from "Your LinkedIn ghostwriter that sounds like you" to "Write LinkedIn posts in 60 seconds" will increase trial signups by 15%+ because it leads with time savings (top pain point).

---

## Test Design

**Variant A (Control):** "Your LinkedIn ghostwriter that sounds like you"
**Variant B (Treatment):** "Write LinkedIn posts in 60 seconds"

**Primary Metric:** Trial signup rate (clicks "Start Free Trial" / homepage visitors)
**Secondary Metrics:** Time on page, scroll depth, CTA click rate

---

## Sample Size Calculation

**Current conversion rate:** 5% (baseline)
**Minimum detectable effect:** 15% relative lift (5% → 5.75%)
**Statistical significance:** 95% confidence
**Power:** 80%

**Required sample size:** 6,200 visitors per variant (12,400 total)

**Current traffic:** 10,000 homepage visitors/mo
**Test duration:** ~5 weeks

---

## Success Criteria

**Primary:** Treatment lifts trial signup rate by 15%+ (p < 0.05)
**Secondary:** No negative impact on time on page or scroll depth

**Decision:**
- If lift > 15% → Ship treatment
- If lift 5-15% → Run follow-up test
- If lift < 5% or negative → Keep control
```

---

## `attribution-modeling` — Channel Contribution

### Example (AuthorityMax)

```markdown
# Attribution Modeling Analysis

## Current Model: Last-Click Attribution

**Problem:** Over-credits bottom-funnel channels (direct, branded search), under-credits top-funnel (content, social)

**Example customer journey:**
1. Discovers via LinkedIn organic post (awareness)
2. Reads blog post on SEO (consideration)
3. Clicks LinkedIn ad (retargeting)
4. Searches "authoritymax" on Google
5. Converts

**Last-click model:** 100% credit to Google branded search
**Reality:** LinkedIn organic + blog + LinkedIn ad all contributed

---

## Recommended Model: Time-Decay Attribution

**Logic:** Channels closer to conversion get more credit, but earlier touchpoints still count

**Credit distribution:**
- LinkedIn organic (Day 0): 10%
- Blog (Day 3): 15%
- LinkedIn ad (Day 7): 30%
- Google branded search (Day 10): 45%

**Impact on budget allocation:**
- Increase content + organic social investment (currently under-credited)
- Maintain paid retargeting (strong assist)
- Reduce branded search spend (already captured, defensively bid only)

---

## Implementation

**Tool:** Google Analytics 4 (Data-Driven Attribution model)
**Reporting:** Monthly attribution report comparing last-click vs time-decay
**Decision-making:** Shift 20% of branded search budget → content + organic social
```

---

## Measurement Skills: Quick Reference

| Task | Skill | Frequency |
|------|-------|-----------|
| Set up tracking | analytics-tracking | Once (then maintain) |
| Design experiments | ab-test-setup | Ongoing (2-4 tests/mo) |
| Analyze attribution | attribution-modeling | Quarterly review |

---

## Next Steps

- [CRO Skills](./cro.md) — Run conversion optimization tests
- [Paid & GTM Skills](./paid-gtm.md) — Allocate budget based on attribution
