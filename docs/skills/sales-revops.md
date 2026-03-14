# Sales & RevOps Skills Deep Dive

Sales enablement and revenue operations skills.

## Overview

| Skill | Focus | Output | Time |
|-------|-------|--------|------|
| **sales-enablement** | Sales collateral | Pitch deck + battle cards | 2-3h |
| **revops** | Revenue operations | CRM + lead lifecycle | 2-3h |
| **webinar-strategy** | Webinars | Webinar plan | 1-2h |

---

## `sales-enablement` — Sales Collateral

### Example (AuthorityMax Enterprise Pitch Deck)

```markdown
# Sales Enablement Kit: AuthorityMax Enterprise

## Pitch Deck Outline (12 slides)

**Slide 1: Title**
"AuthorityMax: LinkedIn Personal Branding for Your Founding Team"

**Slide 2: The Problem**
"Your founders should be posting on LinkedIn. But who has the time?"
- Stat: 78% of B2B buyers research executives before buying
- Stat: Founders post 1x/month average (not enough to build brand)

**Slide 3: Why It Matters**
"Personal brand = competitive advantage"
- Recruiting (attract senior talent)
- Sales (buyers trust founder content)
- Fundraising (VCs evaluate founders' visibility)

**Slide 4: The Solution**
"AuthorityMax writes LinkedIn posts in your founders' voices — in 60 seconds"
- Voice training on existing posts
- Engagement prediction
- Team accounts + approval workflows

**Slide 5: How It Works**
1. Upload 10 posts per founder (voice training)
2. Generate posts in 60 seconds
3. Review + approve (optional workflow)
4. Publish or schedule

**Slide 6: Social Proof**
"Trusted by 1,247 founders at fast-growing SaaS companies"
- Customer logos
- Testimonial quote

**Slide 7: ROI**
"$199/mo vs $10k/mo ghostwriter"
- 50x cost savings
- 10x faster (60s per post vs days)
- 3 founders covered (vs 1 with ghostwriter)

**Slide 8: Security + Compliance**
"Enterprise-grade security"
- SOC 2 Type II certified
- SSO / SAML support
- Custom data retention policies

**Slide 9: Pricing**
"Enterprise: $199/mo (up to 3 founders)"
- Unlimited posts
- Team approval workflows
- Dedicated support
- Custom integrations available

**Slide 10: Case Study**
"How Acme SaaS built founder brand in 6 weeks"
- 3 founders posting 4x/week
- 2 VCs reached out cold
- Hired 2 senior engineers via LinkedIn

**Slide 11: Next Steps**
"Try it free for 14 days (Enterprise trial)"
- No credit card required
- Dedicated onboarding call
- Custom voice training session

**Slide 12: Contact**
[Your contact info + calendar link]

---

## Battle Card (vs Taplio)

**When to use:** Prospect mentions Taplio

| | AuthorityMax | Taplio |
|---|--------------|--------|
| **Best for** | SaaS founders | Content creators |
| **Voice training** | ✅ Yes | ❌ No (templates) |
| **Engagement prediction** | ✅ Yes | ✅ Yes |
| **Team accounts** | ✅ Yes | ⚠️ Agency plan only |
| **Price** | $49/mo Pro, $199/mo Enterprise | $39-$199/mo |

**Positioning:**
"Taplio is great for volume content creators. AuthorityMax is built for founders who need authentic voice, not templates."

**When to lose:**
- Prospect is a LinkedIn coach/agency (not founder)
- Needs 10+ posts/day volume (creator use case)

---

## Objection Handling

**Objection:** "Will it sound like AI?"
**Response:** "That's exactly why we built voice training. Upload 10 of your posts, AuthorityMax learns your patterns. 89% of users say 'sounds exactly like me.' Want to try it? Free 7-day trial."

**Objection:** "We already use ChatGPT."
**Response:** "ChatGPT is great for drafts, but it's generic. AuthorityMax is trained on *your* writing. The difference is night and day. Want to compare side-by-side? I'll send you a sample post in your voice."

**Objection:** "Too expensive."
**Response:** "Compared to what? A ghostwriter is $5k-$10k/mo. AuthorityMax is $49/mo — 100x cheaper. And it's faster (60s per post vs days). Worth a trial?"
```

---

## `revops` — Revenue Operations

### Example (AuthorityMax Lead Lifecycle)

```markdown
# RevOps Playbook: AuthorityMax

## Lead Lifecycle Stages

| Stage | Definition | Qualification Criteria | Next Action |
|-------|------------|------------------------|-------------|
| **Visitor** | Visited site | — | Capture email (popup, lead magnet) |
| **Lead** | Submitted email | — | Nurture email sequence |
| **MQL** | Marketing qualified | Opened 3+ emails OR downloaded lead magnet | Pass to sales (if Enterprise) or trial CTA |
| **Trial** | Started free trial | — | Activation email sequence |
| **Activated** | Generated first post | Reached "aha moment" | Upgrade email sequence |
| **SQL** | Sales qualified (Enterprise) | Company 50+ employees, 3+ founders | Sales outreach |
| **Customer** | Paying subscriber | — | Onboarding + expansion |
| **Churned** | Canceled | — | Win-back campaign (90 days later) |

---

## CRM Setup (HubSpot)

**Custom Properties:**
- `posts_generated` (number)
- `voice_training_complete` (boolean)
- `aha_moment_reached` (boolean)
- `founders_count` (number)
- `company_size` (dropdown)

**Workflows:**
1. **MQL → Trial:** Auto-send trial signup link if MQL criteria met
2. **Trial → Activated:** Tag as activated when `aha_moment_reached = true`
3. **Activated → SQL:** If `company_size > 50` AND `founders_count >= 3`, notify sales

---

## Sales Process (Enterprise)

**Step 1: Discovery Call (15 min)**
- Qualify: Company size? Number of founders? Posting currently?
- Diagnose: Why now? (Fundraising? Hiring? Rebrand?)
- Demo: Show voice training + team workflow

**Step 2: Trial (14 days)**
- Founder uploads 10 posts
- Generate 5 sample posts
- Review engagement prediction

**Step 3: Close Call (15 min)**
- Review trial experience
- Handle objections
- Proposal sent (custom SOW if needed)

**Step 4: Negotiation**
- Pricing: $199/mo standard (can discount to $179/mo annual)
- Legal: Send MSA template

**Step 5: Onboarding**
- Kickoff call (30 min)
- Voice training session per founder
- Set up approval workflows

**Close rate target:** 25% (discovery → close)
```

---

## `webinar-strategy` — Webinar Funnel

### Example (AuthorityMax)

```markdown
# Webinar Strategy: "How to Build Founder Brand on LinkedIn in 30 Days"

## Webinar Outline (45 min)

**Intro (5 min):**
- Who I am (founder story)
- Why founder brand matters (recruiting, fundraising, sales)

**Section 1: The 30-Day Framework (15 min)**
- Week 1: Define your 3 content pillars
- Week 2: Write 10 posts (batched)
- Week 3: Engage with your network (commenting strategy)
- Week 4: Analyze what worked (double down on winners)

**Section 2: Tools + Tactics (15 min)**
- How AuthorityMax speeds this up (demo)
- Engagement prediction (live example)
- Content ideas when you're stuck

**Q&A (10 min)**

---

## Promotion Plan

**4 weeks before:**
- Landing page live
- LinkedIn organic posts (3x/week)
- Email to list (Week 1 announcement)

**2 weeks before:**
- LinkedIn ads (target SaaS founders)
- Partner promotion (ask 3 founder friends to share)

**1 week before:**
- Reminder email to registrants
- LinkedIn countdown posts (daily)

**Day of:**
- Final reminder email (1 hour before)
- Go live

**Day after:**
- Replay email to registrants
- Offer: "Exclusive webinar discount: $39/mo for 3 months"

---

## Success Metrics

**Registration target:** 300
**Attendance rate:** 40% (120 live attendees)
**Conversion rate:** 10% (12 trials from webinar)
**CPA:** $50 (ad spend $600 / 12 trials)
```

---

## Sales & RevOps Skills: Quick Reference

| Task | Skill | Output |
|------|-------|--------|
| Sales collateral | sales-enablement | Pitch deck + battle cards |
| Lead lifecycle | revops | CRM setup + workflows |
| Webinar funnel | webinar-strategy | Webinar plan + promo |

---

## Next Steps

- [Outreach & Email Skills](./outreach-email.md) — Cold outreach + sequences
- [Measurement Skills](./measurement.md) — Track sales metrics
