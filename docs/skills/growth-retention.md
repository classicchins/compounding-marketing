# Growth & Retention Skills Deep Dive

User acquisition and churn reduction skills.

## Overview

| Skill | Focus | Output | Time |
|-------|-------|--------|------|
| **referral-program** | Referral mechanics | Program spec | 1-2h |
| **free-tool-strategy** | Lead-gen tools | Tool spec | 2h |
| **churn-prevention** | Retention | Churn playbook | 2h |
| **partnership-marketing** | Partnerships | Partner plan | 1-2h |
| **community-strategy** | Community building | Community strategy | 2-3h |
| **newsletter-growth** | Email growth | Newsletter playbook | 1-2h |

---

## `referral-program` — Referral Mechanics

### Example (AuthorityMax)

```markdown
# Referral Program: AuthorityMax

## Mechanics

**Referrer gets:** 1 month free ($49 value)
**Referred gets:** 1 month free ($49 value)

**Qualification:** Referred user must convert to paid

---

## In-App Placement

**Trigger:** After user generates 5 posts (activated, seeing value)

**Modal:**
"Love AuthorityMax? Refer a founder and you both get 1 month free.

Your referral link: [unique link]

Share on LinkedIn | Copy Link"

---

## Referral Landing Page Copy

**Headline:** "[Name] invited you to try AuthorityMax"

**Subhead:** "Your LinkedIn ghostwriter that sounds like you. Get your first month free."

**CTA:** "Start Free Month"

**Social proof:** "[Name] and 1,247 other founders use AuthorityMax to post 5x/week on LinkedIn."

---

## Expected Metrics

**Viral Coefficient Target:** 0.3 (every 10 users refer 3)

**Assumptions:**
- 20% of paid users share referral link
- 30% of shared links convert to trials
- 15% of referral trials convert to paid

**Math:**
- 100 paid users → 20 share link
- 20 shares × 3 sends each = 60 referral link clicks
- 60 clicks × 30% trial = 18 trials
- 18 trials × 15% paid = 2.7 new paid users
- **Viral coefficient:** 2.7 / 100 = 0.027 (lower than target — optimize)

**Optimization Ideas:**
- Increase referrer incentive to $99 value (2 months free)
- Add leaderboard (gamification)
- Email prompt after 10 posts generated
```

---

## `churn-prevention` — Retention Playbook

### Example (AuthorityMax)

```markdown
# Churn Prevention Playbook

## Churn Signals (At-Risk Indicators)

| Signal | Severity | Action |
|--------|----------|--------|
| No posts generated in 7 days | High | Send re-engagement email |
| Engagement prediction used 0 times | Medium | Highlight feature via email |
| No login in 14 days | Critical | Founder personal email |
| Downgraded Pro → Free | High | Exit survey + retention offer |

---

## Intervention: Re-Engagement Email (No posts in 7 days)

**Subject:** "Miss us?"

**Body:**
Hi [Name],

Noticed you haven't generated a post in a week. Everything okay?

Common reasons people pause:
- Out of ideas (try our idea generator)
- Too busy (we hear you — takes 60s per post)
- Not happy with output (let's fix it — hit reply)

Want to hop on a 10-min call? I'll personally help you get back on track.

[Calendar link]

Best,
[Founder name]

---

## Intervention: Exit Survey (Downgrade or Cancel)

**Question 1:** "What's the main reason you're leaving?"
- [ ] Too expensive
- [ ] Not using enough to justify cost
- [ ] Output quality issues
- [ ] Found a better alternative
- [ ] Other: _______

**Question 2:** "What would make you stay?"
- [ ] Lower price
- [ ] Better voice matching
- [ ] More features (which ones? ______)
- [ ] Nothing — I'm committed to leaving

**Question 3:** "One last offer — would you stay for $29/mo for 3 months?"
- [ ] Yes, I'll stay
- [ ] No, I'm leaving

---

## Retention Offer (Based on Exit Survey)

**If "Too expensive":**
"Understand budget is tight. How about $29/mo for 3 months? Lock it in now."

**If "Not using enough":**
"Fair. Want to pause for 2 months (no charge) and come back when you're ready?"

**If "Quality issues":**
"Let me fix it. 15-min call with our founder to tune your voice model? [Calendar link]"
```

---

## `newsletter-growth` — Email Newsletter Playbook

### Example (AuthorityMax Newsletter)

```markdown
# Newsletter Growth Strategy

## Newsletter Concept

**Name:** "The Founder's LinkedIn Playbook"

**Frequency:** Weekly (Tuesdays 9 AM ET)

**Format:**
1. LinkedIn strategy tip (300 words)
2. Post breakdown (analyze a viral founder post)
3. AuthorityMax feature spotlight

---

## Growth Tactics

### Tactic 1: Lead Magnet
**Offer:** "10 LinkedIn Post Templates for SaaS Founders"
**Placement:** Exit-intent popup, blog sidebar, footer
**Expected:** 5-8% of site visitors subscribe

### Tactic 2: Social Proof
**On signup form:** "Join 2,400 founders getting LinkedIn tips every Tuesday"
**Testimonial:** "Best LinkedIn newsletter I read" — Sarah Chen, Acme SaaS

### Tactic 3: Referral Loop
**In every email:** "Know a founder who'd like this? Forward this email. They can subscribe here: [link]"
**Incentive:** Every 3 referrals = free LinkedIn audit (PDF)

### Tactic 4: Cross-Promotion
**Partner with:** Other SaaS newsletters (founder audience)
**Pitch:** "Sponsor mention in exchange for sponsor mention in your newsletter"

---

## Content Calendar (Month 1)

| Week | Topic | Hook |
|------|-------|------|
| 1 | How to write LinkedIn hooks | "Most founders bury the lead" |
| 2 | Posting frequency guide | "Post 3x/week or don't bother" |
| 3 | Engagement tactics | "Comments > Likes" |
| 4 | Personal brand for fundraising | "VCs read your LinkedIn before taking the call" |
```

---

## Growth & Retention Skills: Quick Reference

| Goal | Skill | Expected Impact |
|------|-------|-----------------|
| Viral growth | referral-program | +10-20% organic growth |
| Lead generation | free-tool-strategy | +15-30% top-of-funnel |
| Reduce churn | churn-prevention | -20-40% churn |
| Partnership traffic | partnership-marketing | Varies (partner-dependent) |
| Community engagement | community-strategy | +10-15% retention |
| Email audience | newsletter-growth | Ongoing (compounding) |

---

## Next Steps

- [Measurement Skills](./measurement.md) — Track growth and retention metrics
- [Sales & RevOps Skills](./sales-revops.md) — Sales-led growth tactics
