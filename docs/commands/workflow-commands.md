# Workflow Commands Reference

Complete reference for all workflow commands with examples.

---

## `/cm:daily` — Daily Marketing Review

**Purpose:** 10-minute daily check-in on marketing state

**Time:** 10-15 minutes

**When to use:** Start of each workday, during launch week

**What it does:**
1. Asks what campaigns/content are live
2. Checks performance snapshot (traffic, signups, key metrics)
3. Identifies wins and red flags
4. Defines today's ONE marketing priority

**Example Output:**

```markdown
# Daily Marketing Review — Mar 14, 2026

## What's Live
- **Campaigns:** LinkedIn retargeting (Week 2), Google Search (paused for creative refresh)
- **Content:** Pricing blog post published yesterday (ranking #4 for "SaaS pricing")
- **Sequences:** Trial activation sequence (423 active users)

## Performance Snapshot
- **Traffic:** 2,847 (+12% vs last week)
- **Signups:** 34 (+6 vs yesterday)
- **Trial→Paid:** 18% (stable)

## Wins 🏆
- Pricing blog hit #4 in 3 days (outcome-focused headline worked)

## Flags ⚠️
- LinkedIn CPC up 23% — creative fatigue, need refresh

## Today's Focus
1. **Priority:** Finish homepage copy rewrite (due to design by 3pm)
2. **Quick wins:** Schedule 3 social posts, reply to PR inquiry from TechCrunch
```

**Files created:** None (mental model update only)

---

## `/cm:standup` — Marketing Standup

**Purpose:** 5-minute standup (what shipped, what's next, blockers)

**Time:** 5 minutes

**When to use:** Daily or every other day

**Example Output:**

```markdown
# Marketing Standup — Mar 14, 2026

## Yesterday ✅
- Published pricing blog post
- Set up LinkedIn retargeting campaign
- Continued homepage copy revision (80% done)

## Today 🎯
- Finish homepage copy → ready for design by 3pm
- Draft cold email sequence for enterprise (first 2 emails)
- Review competitor's new landing page

## Blockers ⚠️
- Waiting on customer quote approval from Sarah @ Acme
- Need product screenshots for homepage (asked design yesterday)
```

---

## `/cm:eod` — End of Day Wrap

**Purpose:** 5-10 minute daily close (what shipped, what's pending, tomorrow's start)

**Time:** 5-10 minutes

**Example Output:**

```markdown
# EOD Wrap — Mar 14, 2026

## Shipped ✅
- Homepage copy v2 sent to design
- Cold email sequence (2/5 emails drafted)
- Competitor analysis on Rival Inc's new page

## In Progress 🔄
- **Case study with Acme**
  - Next: Schedule interview
  - ETA: Monday

- **Email sequence**
  - Next: Write emails 3-5
  - ETA: Tomorrow

## Blocked ⚠️
- Customer quote — waiting on Sarah @ Acme (followed up via email)

## Tomorrow's Start
**First task:** Finish remaining 3 cold emails
**Prep done:** Outline saved in `deliverables/cold-email-sequence.md`

## Notes
- Competitor using "results in 30 days" angle — worth testing?
- PR inquiry from TechCrunch — hand off to founder
```

---

## `/cm:weekly` — Weekly Review

**Purpose:** 30-45 minute weekly retrospective + planning

**Time:** 30-45 minutes

**When to use:** End of week (Friday) or start of week (Monday)

**Example Output:**

```markdown
# Weekly Marketing Review — Week of Mar 10, 2026

## This Week's Activity
- **Content published:** 2 blog posts, 8 social posts
- **Campaigns active:** LinkedIn retargeting, Google Search
- **Experiments run:** Homepage headline A/B test (running)
- **Shipped vs planned:** 5/6 tasks completed (92%)

## Metrics Summary

| Metric | This Week | Last Week | Change |
|--------|-----------|-----------|--------|
| Traffic | 14,280 | 12,650 | +13% ⬆️ |
| Signups | 156 | 142 | +10% ⬆️ |
| Trial→Paid | 18.2% | 17.8% | +0.4% → |
| MRR | $4,890 | $4,620 | +6% ⬆️ |

## Wins 🏆
1. Pricing blog → #4 ranking in 3 days (outcome-focused headline strategy worked)
2. Homepage A/B test: Variant B +23% CTA clicks (social proof above fold)
3. Cold email sequence: 12% reply rate (vs 8% baseline)

## Losses 📉
1. LinkedIn CPC up 23% — creative fatigue (need refresh)
2. Case study delayed — customer rescheduled interview twice

## Patterns Identified
- **What resonated:** Outcome-focused headlines outperform feature-focused (2 data points now)
- **Best channel:** Organic search driving 62% of trial signups
- **Audience insight:** "Time to value" messaging resonates with enterprise prospects

## Next Week's Plan

### Top 3 Priorities
1. **Launch new LinkedIn creatives** — ETA: Monday, expected CPC back to baseline
2. **Finish enterprise cold email sequence** — ETA: Wednesday, expected 10 qualified replies
3. **Publish Acme case study** — ETA: Friday, sales enablement asset

### Experiments
- **Testing:** Social proof placement on pricing page
- **Success criteria:** +15% pricing → signup conversion

## Learnings to Compound
- ✅ Saved to `deliverables/learnings/copywriting.md`: "Outcome-focused headlines outperform feature-focused by 20-30%"
- ✅ Saved to `deliverables/learnings/cro.md`: "Social proof above fold increases CTA clicks 15-25%"
```

**Files created:** Updates `deliverables/learnings/` with new insights

---

## `/cm:research` — Market Research Workflow

**Purpose:** Deep market and customer research

**Time:** 2-4 hours

**What it does:**
1. Reads `.cm-context` (or creates if missing)
2. Runs `icp-research` skill
3. Runs `competitive-analysis` skill
4. Runs `customer-research` skill (if data available)
5. Synthesizes findings
6. Updates context file with learnings

**Example Output:**

```markdown
# Market Research Package — AuthorityMax

## Executive Summary
- **ICP:** Series A-B SaaS founders, 10-100 employees, preparing for fundraise or hiring
- **Market size:** 90,000 LinkedIn-active founders (SAM)
- **Top pain:** No time to write (12/12 interviews), quality concern (10/12)
- **Competitive white space:** Affordable + high-quality voice preservation

## Deliverables Created
- `deliverables/icp.md` — Ideal customer profile
- `deliverables/competitive-analysis.md` — Competitor map + white space
- `deliverables/customer-insights.md` — JTBD synthesis from 12 interviews

## Key Insights
1. **Founders hire ghostwriters at $5k-$10k/mo** — creates price anchor for $49/mo product
2. **Voice authenticity is #1 concern** — "sounds like me" mentioned 10/12 times
3. **Engagement prediction valued** — founders want confidence before posting

## Recommended Next Steps
- Run `/cm:position` to develop positioning based on research
- Emphasize "voice training" as primary differentiator
- Lead with time savings, follow with quality assurance
```

**Files created:**
- `deliverables/icp.md`
- `deliverables/competitive-analysis.md`
- `deliverables/customer-insights.md`
- `deliverables/research-package.md` (synthesis)

---

## `/cm:position` — Positioning Workshop

**Purpose:** Full positioning + messaging + value props

**Time:** 3-5 hours

**What it does:**
1. Runs `positioning` skill (April Dunford framework)
2. Runs `messaging-framework` skill
3. Runs `value-proposition` skill (per customer segment)
4. Combines into positioning package

**Example Output:**

```markdown
# Positioning Package — AuthorityMax

## Positioning Canvas

**Competitive Alternatives:**
- Hiring ghostwriter ($5k-$10k/mo)
- Generic AI (ChatGPT)
- DIY manual posting

**Unique Attributes:**
- Voice training on user's posts
- LinkedIn-native engagement prediction
- Tone preservation algorithm

**Value Delivered:**
- 10x content output without sounding robotic
- Maintain authentic voice at scale
- Consistent 3-5x/week posting

**Best-Fit Customers:**
Series A-B SaaS founders preparing for fundraise/hiring

**Market Category:**
AI Personal Branding Platform

**Positioning Statement:**
For Series A-B SaaS founders who need to build personal brand but don't have time to post consistently, AuthorityMax is an AI personal branding platform that writes LinkedIn posts in your authentic voice. Unlike generic AI tools or expensive ghostwriters, AuthorityMax learns from your writing and produces content indistinguishable from your best work.

---

## Messaging Framework

### Pillar 1: Authentic AI
**Message:** "AI that sounds like you, not a robot"
**Proof:** 89% say "sounds exactly like me"

### Pillar 2: LinkedIn-Native
**Message:** "Built for founders, not influencers"
**Proof:** Engagement prediction, B2B SaaS-focused

### Pillar 3: 10x Output
**Message:** "Post 5x/week without burnout"
**Proof:** Users go from 1/week → 4/week avg

---

## Value Propositions

*Per customer segment — see full document*

---

## Next Steps
- Run `/cm:copy` to write homepage based on this positioning
- Update `.cm-context` with positioning statement
- Use messaging pillars in all marketing materials
```

**Files created:**
- `deliverables/positioning-canvas.md`
- `deliverables/messaging-framework.md`
- `deliverables/value-propositions.md`
- `deliverables/positioning-package.md`

---

## `/cm:copy` — Copywriting Workflow

**Purpose:** End-to-end copywriting with QA

**Time:** 2-3 hours

**What it does:**
1. Reads positioning + messaging
2. Runs `copywriting` skill
3. Runs `copy-editing` skill
4. Runs `page-cro` skill (audit)
5. Delivers polished, CRO-reviewed copy

**Example Output:**

*(See Content & Copy Skills doc for full example)*

**Files created:**
- `deliverables/homepage-copy.md`
- `deliverables/homepage-cro-audit.md`

---

## `/cm:launch` — Launch Planning

**Purpose:** Full launch timeline + strategy

**Time:** 2-3h

**What it does:**
1. Runs `launch-strategy` skill
2. Runs `channel-strategy` skill
3. Runs `content-strategy` skill (launch content)
4. Creates integrated launch plan

**Example Output:**

```markdown
# Launch Plan — AuthorityMax

## Launch Timeline (4 weeks)

### Week 1: Pre-Launch
- Finalize homepage copy
- Set up Product Hunt page
- Reach out to 10 hunters

### Week 2: Build Anticipation
- Publish 2 "behind the scenes" blog posts
- Email list: "We're launching soon"
- LinkedIn posts: Problem teasers

### Week 3: Final Prep
- Press kit ready
- Outreach to 20 journalists
- Schedule launch day social posts

### Week 4: Launch
- Product Hunt launch (Tuesday 12:01 AM PT)
- Webinar: "How to Build Founder Brand in 30 Days"
- LinkedIn ad campaign goes live

---

## Channel Plan
*Priority channels + budget allocation — see full doc*

---

## Content Calendar
*30 pieces of launch content scheduled — see full doc*
```

**Files created:**
- `deliverables/launch-plan.md`
- `deliverables/launch-content-calendar.md`

---

## `/cm:compound` — Document Learnings

**Purpose:** Capture what you learned for future projects

**Time:** 10-15 minutes

**What it does:**
1. Asks what worked, what didn't, what surprised you
2. Saves insights to `deliverables/learnings/[category].md`
3. Builds compounding knowledge base

**Example Interaction:**

```
> /cm:compound

What project did you just finish?
> Homepage redesign

What worked well?
> Social proof above fold increased clicks 23%. Outcome-focused headlines outperformed feature-focused.

What didn't work?
> Video hero slowed page load, hurt mobile conversions. Feature comparison table below fold got low engagement.

What surprised you?
> Enterprise visitors spent 3x longer on pricing page than SMB visitors. "Free trial" CTA converted better than "Start free" (unexpected).

What would you do differently next time?
> Always A/B test hero section first (highest impact). Check mobile load time BEFORE launch.

✅ Saved to deliverables/learnings/cro.md
✅ Saved to deliverables/learnings/copywriting.md
```

**Files updated:**
- `deliverables/learnings/cro.md`
- `deliverables/learnings/copywriting.md`
- `deliverables/learnings/[other-relevant-categories].md`

---

## Commands: Quick Reference

| Command | Use Case | Time | Output Files |
|---------|----------|------|--------------|
| `/cm:daily` | Daily check-in | 10min | None (mental model) |
| `/cm:standup` | Team sync | 5min | None |
| `/cm:eod` | Day wrap-up | 5-10min | None |
| `/cm:weekly` | Weekly retrospective | 30-45min | Updates learnings/ |
| `/cm:research` | Market research | 2-4h | ICP, competitive, insights |
| `/cm:position` | Positioning workshop | 3-5h | Positioning package |
| `/cm:copy` | Copywriting | 2-3h | Page copy + CRO audit |
| `/cm:launch` | Launch planning | 2-3h | Launch plan + content |
| `/cm:compound` | Capture learnings | 10-15min | Updates learnings/ |

---

## Next Steps

- [Skills Overview](../skills/README.md) — Use individual skills for specific tasks
- [Getting Started](../getting-started.md) — Run your first command
