# CRO Skills Deep Dive

Conversion rate optimization across funnels.

## Overview

| Skill | Focus | Output | Time |
|-------|-------|--------|------|
| **page-cro** | Landing page optimization | Audit + test ideas | 1-2h |
| **signup-flow-cro** | Registration optimization | Optimized flow | 1h |
| **onboarding-cro** | Activation optimization | Onboarding checklist | 1-2h |
| **form-cro** | Form completion | Optimized form | 30min |
| **popup-cro** | Popup conversion | Popup strategy | 30min |
| **paywall-upgrade-cro** | Upgrade prompts | Upgrade flow | 1h |
| **pricing-strategy** | Pricing & packaging | Pricing tiers | 2h |

---

## `page-cro` — Landing Page Audit

**Framework:** CRO heuristics (clarity, relevance, friction, anxiety)

### Example Audit (AuthorityMax Homepage)

```markdown
# CRO Audit: AuthorityMax Homepage

## Quick Wins (Implement This Week)

### 1. Add Social Proof Above Fold
**Current:** User count mentioned in Section 3
**Fix:** Move "1,247 founders" to hero section
**Expected lift:** +15-20% (social proof visibility)

### 2. Strengthen CTA Copy
**Current:** "Start Free Trial"
**Fix:** "Start Free — No Credit Card"
**Rationale:** Removes payment friction explicitly

### 3. Add Exit-Intent Popup
**Current:** No exit capture
**Fix:** "Wait! Get our LinkedIn Growth Checklist (PDF)"
**Expected:** Capture 8-12% of abandoning visitors

## A/B Test Ideas

| Test | Hypothesis | Success Metric |
|------|------------|----------------|
| Hero headline | "Your LinkedIn ghostwriter" vs "Write LinkedIn posts in 60 seconds" | Click-through to Section 2 |
| Social proof format | User count vs customer logos | Trial signup rate |
| CTA color | Blue vs Green | Button click rate |

## Conversion Funnel Analysis

**Current funnel:**
1. Homepage visit: 10,000/mo
2. Click CTA: 1,200 (12% CTR)
3. Start trial: 480 (40% of clicks)
4. Overall conversion: 4.8%

**Benchmark:** SaaS trial signup typically 5-8%

**Opportunity:** +20-40% improvement possible (to 6-7% overall)
```

---

## `signup-flow-cro` — Registration Optimization

### Friction Audit

**Current AuthorityMax signup (5 steps):**
1. Email
2. Password
3. Company name
4. Role
5. Upload first post

**Problems:**
- 5 steps = high abandonment
- "Upload first post" too early (friction)

**Optimized flow (2 steps):**
1. Email + password only
2. (Defer company/role to onboarding)

**Expected improvement:** 30-40% fewer drop-offs

---

## `onboarding-cro` — Activation Optimization

**Goal:** Get users to "aha moment" fast

### Activation Checklist (AuthorityMax)

**Aha moment:** Generate first post that "sounds like me"

**Onboarding flow:**
1. Upload 10 posts (voice training)
2. Generate first draft
3. See engagement prediction
4. Publish or schedule

**Current:** 65% reach "aha moment" (generate first post)

**Opportunity:** Reduce friction in Step 1 (uploading 10 posts)

**Test:** Allow 5 posts minimum (vs 10)

---

## `pricing-strategy` — Pricing & Packaging

### Example (AuthorityMax)

```markdown
# Pricing Strategy: AuthorityMax

## Current Pricing

| Plan | Price | Features | Target |
|------|-------|----------|--------|
| Free | $0 | 5 posts/mo, basic voice training | Trial users |
| Pro | $49/mo | Unlimited posts, engagement prediction | Solo founders |
| Enterprise | $199/mo | Team accounts, API access | Multi-founder teams |

## Pricing Psychology

### Anchoring
- Enterprise plan ($199) makes Pro ($49) feel affordable
- Free plan establishes "cheap" anchor (upgrades feel reasonable)

### Value Metric
- **Current:** Post count (unlimited on Pro)
- **Consider:** Engagement score (reward quality over quantity)

### Packaging Tests

**Test 1:** Add "Growth" tier at $99/mo (LinkedIn analytics + A/B testing)
- Hypothesis: 20% of Pro users would upgrade
- Expected MRR lift: +$900/mo (45 users × $20 upgrade)

**Test 2:** Increase Pro to $59/mo (grandfather existing)
- Hypothesis: Price increase won't hurt conversion (value is clear)
- Expected MRR lift: +$890/mo (89 users × $10)
```

---

## CRO Skills: Quick Reference

| Optimize | Skill | Expected Lift |
|----------|-------|---------------|
| Landing page | page-cro | 15-30% |
| Signup flow | signup-flow-cro | 20-40% |
| Activation | onboarding-cro | 10-20% |
| Forms | form-cro | 15-25% |
| Popups | popup-cro | 5-10% (of abandoning traffic) |
| Upgrades | paywall-upgrade-cro | 10-20% |
| Pricing | pricing-strategy | Varies (test-dependent) |

---

## Next Steps

- [Measurement Skills](./measurement.md) — Run A/B tests
- [Content & Copy Skills](./content-copy.md) — Write optimized copy
