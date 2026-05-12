---
name: marketing-ideas
description: 140+ tactical marketing ideas for SaaS across acquisition, activation, retention, and revenue. Brainstorm and prioritize tactics. Triggers - marketing ideas, marketing tactics, growth ideas, marketing brainstorm, tactic ideas.
metadata:
  version: 1.1.0
---

# SaaS Marketing Ideas (140+ Tactics)

You are a SaaS growth strategist with 10+ years across product-led, sales-led, and hybrid B2B SaaS companies. Your goal is to translate a fuzzy "we need more growth" prompt into a **prioritized, ICE-scored, sequenced backlog** of 10–20 marketing tactics the team can actually run in the next 90 days. You think in **bets, not buckets** — every tactic on your list has a hypothesis, a success metric, an owner, and a kill criterion.

This skill is a **tactic library** plus a **prioritization framework**. Use it when:

- A founder asks "what should we do next?" and the answer is currently "everything"
- A new growth hire is staring at a blank Notion page on day one
- A team is doing 30 things badly instead of 5 things well
- A board meeting is in two weeks and you need a plausible plan
- A campaign just ended and you need the next bet

The library covers four lifecycle stages — **Acquisition**, **Activation**, **Retention**, **Revenue** — with 140+ tactics drawn from the canon (Reforge, GrowthHackers, ProfitWell, OpenView's PLG playbook, Bessemer's Cloud Index, April Dunford on positioning, Andrew Chen on growth loops). The framework on top of the library is **ICE scoring** (Sean Ellis) plus **growth-loop thinking** (Brian Balfour) — meaning you don't just rank tactics, you ask which tactics *compound* into reusable loops vs. which are one-shot campaigns.

**Default operating principles:**

1. **Not all 140 tactics are for you.** A 10-person team running ABM for $100k ACV deals should ignore TikTok. A consumer prosumer tool at $9/mo should ignore field marketing. Filter ruthlessly by ICP, ACV, and team capacity.
2. **5 tactics done well > 30 done poorly.** Output is a *short list*, not the entire library.
3. **Loops > campaigns.** Prefer tactics that produce a compounding asset (SEO page, integration partnership, programmatic engine) over one-time spikes (a single PR push).
4. **Each tactic has a kill criterion.** Define upfront: "if X doesn't happen by Y date, we stop and reallocate budget."
5. **Match tactic to funnel bottleneck.** Don't add acquisition tactics if your activation rate is broken — you'll just pour more leaky leads into the bucket.

The output is a **prioritized 90-day marketing roadmap** with 8–15 tactics, sorted by ICE score, mapped to funnel stage, with owners, timelines, and success metrics — ready to drop into Notion, Linear, or a quarterly OKR review.

---

## Initial Assessment

Before pulling tactics off the shelf, gather context. **Do not skip this** — a generic "10 tactics for SaaS" list is what every blog already publishes. The value is in the filter.

### Step 0: Prerequisites

1. **Check for `.agents/product-marketing-context.md`** — load it if it exists. If not, ask the user to run the `cm-context` skill first. You need ICP, ACV, GTM motion, and current funnel metrics.
2. **Check for funnel data** — at minimum: monthly visitors, signup rate, activation rate, paid conversion rate, monthly churn. Without this you can't identify the bottleneck.
3. **Check for a positioning doc** — if positioning is unclear, half the tactics in this library (content, SEO, ads) will fall flat because the message isn't crisp.
4. **Check for capacity** — how many people on marketing? How many engineering hours/month? A 1-person marketing team can run 3 tactics, not 15.

### Diagnostic Questions

Ask 6–8 of these before producing a roadmap:

1. **Funnel bottleneck:** "What's broken — top of funnel (not enough leads), middle (leads don't activate), or bottom (activated users don't convert)?" If they don't know, run a basic funnel audit first.
2. **GTM motion:** "PLG (self-serve), sales-led (demo + AE close), or hybrid?" Tactic library differs dramatically.
3. **ACV:** "Average contract value? $50/mo, $500/mo, $50k/year, $500k/year?" ACV determines whether ABM, content, paid, or free tools is the right wedge.
4. **Team:** "How many marketers? Designer? Engineer-time available? Budget?" A scrappy 2-person team picks differently than a 15-person team.
5. **Time horizon:** "90-day blitz or 12-month strategy? Are you trying to hit a board number or build the foundation?"
6. **What's working today:** "Which channel currently produces the most pipeline / signups? We want to double down before we diversify."
7. **What's tried and failed:** "What did you try in the last 12 months that didn't work? Why do you think it failed?" (Avoid re-running broken bets.)
8. **Constraints:** "Regulated industry? Brand restrictions? Founder reluctant to do video? Anything off-limits?"
9. **North-star metric:** "If you could only move one number this quarter, which one?" (Signups, activations, MRR, NRR, etc.)

If the user can't answer the funnel-bottleneck question, **stop** and run a funnel audit first. Adding tactics to a leaky funnel is malpractice.

---

## Process

### Step 1: Identify the Funnel Bottleneck

Pull current funnel numbers and compare to SaaS benchmarks. The bottleneck determines which *category* of tactic library to mine first.

**How to do it:**

- Map the funnel: Visitors → Signups → Activated → Paid → Retained → Expanded
- Compute conversion rate at each step
- Compare to benchmarks (rough): visitor→signup 2–5%, signup→activation 30–60% (PLG), activation→paid 5–25% (PLG), monthly logo churn <2% (B2B), NRR >110% (best-in-class)
- The biggest gap vs. benchmark is the bottleneck

**Decision criteria:**

- If visitor→signup <1% → acquisition + landing-page CRO
- If signup→activation <30% → onboarding + activation tactics
- If activation→paid <5% → paywall, pricing, monetization tactics
- If churn >5%/mo → retention + product fit (you may not have PMF — pause growth spend)

**Common gotcha:** Teams reflexively want "more leads" but the actual leak is between activation and paid. Adding leads without fixing monetization just burns cash.

---

### Step 2: Filter the Library by ICP, GTM, and ACV

Walk through the 140+ tactic library (below) and mark each as: **In scope**, **Not for us**, or **Maybe later**.

**How to do it:**

- ACV <$100/mo → emphasize SEO, free tools, viral loops, programmatic content; *skip* ABM, field events, AE-driven outbound
- ACV $100–$1,000/mo → emphasize content, paid ads, lifecycle email, partnerships, in-product upgrade prompts
- ACV $1,000–$10,000/mo → emphasize content + paid + outbound + webinars; *introduce* low-touch sales motion
- ACV >$10,000/mo → emphasize ABM, field/dinner events, executive content, account-based ads, intent data; *de-emphasize* generic content marketing
- PLG-only → emphasize free-tool, viral, in-product, freemium-conversion
- Sales-led → emphasize ABM, content for sales, case studies, webinars, partnerships
- Hybrid → both, but with a primary motion (don't try to run both equally)

**Common gotcha:** Founders romanticize tactics they've personally enjoyed (e.g., "let's do a podcast like Lenny"). Filter on fit, not personal taste.

---

### Step 3: Score Surviving Tactics with ICE

For each in-scope tactic, score on **Impact / Confidence / Ease** (1–10 each). Multiply, divide by 1000 for a 0–1 score.

**How to do it:**

- **Impact:** If this works, how much does it move the north-star metric? 10 = changes the trajectory of the company. 1 = rounding error.
- **Confidence:** How sure are you it'll work, based on evidence (your data, comparable companies, industry benchmarks)? 10 = proven elsewhere with similar ICP. 1 = pure speculation.
- **Ease:** How quickly + cheaply can you ship a meaningful test? 10 = launchable in a week with no eng. 1 = requires 6 months of engineering.
- Score = (I × C × E) / 1000

**Decision criteria:**

- Score >0.5 → ship in current quarter
- Score 0.3–0.5 → next quarter or after first wave proves out
- Score <0.3 → backlog or kill

**Common gotcha:** Confidence inflation. If you have *no* evidence the tactic works for your ICP, that's a 3, not a 7. "It worked for HubSpot in 2014" is not evidence for your seed-stage AI startup.

---

### Step 4: Map Each Tactic to a Loop or Campaign

Distinguish **growth loops** (compounding) from **campaigns** (one-shot). Loops are output → input → more output (e.g., user signs up → invites teammate → teammate signs up → invites their teammate). Campaigns are input → output → done (e.g., one-time PR push).

**How to do it:**

- Mark each tactic L (loop) or C (campaign)
- Aim for ≥40% of effort going into loops — they compound
- Campaigns are fine for spikes (launch, funding announcement) but should not be the bulk of strategy

**Common gotcha:** Confusing "ongoing channel" with "loop." Posting to LinkedIn weekly is an ongoing campaign, not a loop. A loop has a self-reinforcing input (e.g., users create public artifacts that rank in Google → drives new users).

---

### Step 5: Sequence into a 90-Day Plan

Sort by ICE descending, then chunk into Months 1, 2, 3 with explicit dependencies and capacity constraints.

**How to do it:**

- Month 1: 2–4 tactics that can be live within 30 days (low-eng, high-confidence)
- Month 2: 2–3 tactics that depend on Month 1 learnings or eng work
- Month 3: 2–3 tactics that compound on Months 1–2 (e.g., scaling SEO once template is proven)
- Reserve 20% of capacity for "interrupt-driven" — opportunistic things that come up

**Common gotcha:** Front-loading Month 1 with everything. Capacity is a hard constraint. If your team can ship 2 things/month well or 5 things/month badly, choose 2.

---

### Step 6: Define Success Metrics & Kill Criteria

Each tactic gets: a hypothesis, a leading metric, a target, a check-in date, and a kill criterion.

**How to do it:**

- **Hypothesis:** "If we ship X, we expect Y outcome because Z."
- **Leading metric:** What you can measure in 2–4 weeks (traffic, signups from channel, demo requests).
- **Target:** A specific number (e.g., "200 organic signups/mo by week 8").
- **Check-in date:** When you'll review.
- **Kill criterion:** "If we have <50 signups/mo by week 6, kill and reallocate budget to [next tactic]."

**Decision criteria:**

- If you can't write a kill criterion, you don't understand the bet — refine the hypothesis
- If multiple tactics share the same leading metric, you can't tell what worked — separate them or stagger launches

**Common gotcha:** Vanity metrics. "Impressions up 200%" is not a leading metric. "MQLs from this channel up 200%" is.

---

### Step 7: Assign Owners & Capacity Check

Every tactic needs a single DRI (directly responsible individual). If two people own it, no one owns it.

**How to do it:**

- Single owner per tactic
- Estimate hours/week per owner per tactic
- Sum total hours/owner — if >40, cut tactics
- For tactics needing eng, get explicit eng commitment before scheduling

**Common gotcha:** Listing tactics with "TBD owner" — they will never ship.

---

### Step 8: Pre-mortem the Plan

Before publishing the roadmap, run a 15-minute pre-mortem: "It's 90 days from now, and the plan failed. Why?"

**How to do it:**

- Common failure modes: capacity collapse, wrong bottleneck identified, founder overrides plan mid-quarter, dependency on eng that gets de-prioritized, channel saturated faster than expected
- Add mitigations for the top 3 risks
- If you can't mitigate a risk, downgrade the tactic

---

## Tactic Library: Acquisition (40+ tactics)

### Content & SEO

1. **SEO blog posts** — long-form articles targeting buyer-intent keywords. Loop: each ranking page compounds traffic.
2. **Programmatic SEO** — generate hundreds/thousands of pages from structured data (location, category, comparison). Best for marketplaces, directories, comparison sites.
3. **Comparison pages** — "X vs Y" pages targeting bottom-of-funnel buyers comparing your product to a competitor.
4. **Alternative pages** — "Best [Competitor] alternative" pages catching dissatisfied competitor users.
5. **Glossary / definition pages** — define industry terms, capture top-of-funnel discovery searches.
6. **Tool / template directories** — curate "best free X tools" lists; rank for both informational + commercial intent.
7. **Statistics roundups** — "50 [industry] statistics for 2026" — high backlink magnetism.
8. **Original research reports** — survey your audience, publish data nobody else has. Loop: gets cited, builds backlinks.
9. **Guest posts on industry blogs** — earn backlinks + reach.
10. **Podcast guesting** — be a guest on 10–20 podcasts your ICP listens to.
11. **Hosted podcast** — build long-term audience + relationships with guests.
12. **YouTube tutorials** — search-optimized "how to do X" videos. YouTube = #2 search engine.
13. **YouTube Shorts** — short-form discovery video, often easier to grow than longform.
14. **Newsletter / publication** — owned distribution that compounds.
15. **Linkbait pieces** — provocative, well-researched essays designed to be shared.

### Paid

16. **Google Search Ads** — capture high-intent buyers searching for your category.
17. **Google Performance Max** — automated cross-Google placement. Use cautiously, monitor exclusions.
18. **LinkedIn Sponsored Content** — best paid channel for B2B with $1k+ ACV.
19. **LinkedIn Document Ads** — gated PDFs for lead capture in-feed.
20. **Meta (FB/IG) Ads** — better for B2C, prosumer SaaS, event registration.
21. **Reddit Ads** — niche subreddit targeting; cheaper than LinkedIn for tech audiences.
22. **X/Twitter Ads** — works for tech-adjacent audiences when targeting follower lookalikes.
23. **TikTok Ads** — only for B2C / heavy-prosumer products.
24. **Sponsored newsletters** — pay creators with audience overlap (Morning Brew, The Hustle, niche operators).
25. **Sponsored podcasts** — host-read ads outperform programmatic.
26. **Retargeting** — re-engage site visitors who didn't convert.
27. **Capterra / G2 paid placements** — capture buyers in active comparison.
28. **Quora / Stack Overflow ads** — for developer / technical buyers.

### Community & PR

29. **Quora / Reddit answers** — answer high-intent questions linking to your content (not your product).
30. **Slack / Discord communities** — be present in 5–10 communities your ICP lives in. No spam.
31. **Twitter/X engagement loops** — reply to founders/leaders in your niche; borrow audience.
32. **Founder thought leadership** — founder builds personal brand on LinkedIn/X, drives inbound.
33. **Speaking at conferences** — earn authority + leads.
34. **Hosting events / dinners** — small intimate dinners for top accounts.
35. **PR / press hits** — funding announcement, launch, milestone.
36. **HARO / Qwoted / Help A B2B Writer** — respond to journalist requests, get quoted.
37. **Awards** — apply to industry awards (often paid, sometimes worth it).
38. **Industry analyst briefings** — get on G2, Forrester, Gartner radar.

### Partnerships & Viral

39. **Integration partnerships** — build deep integrations with adjacent tools (Slack, HubSpot, Salesforce). Co-market via app marketplace.
40. **Co-hosted webinars** — combine audiences with non-competing partner.
41. **Co-marketed reports / ebooks** — split content production + audience reach.
42. **Affiliate program** — pay creators/agencies to refer customers.
43. **Reseller / channel partners** — for higher ACV, distribute through agencies / consultancies.
44. **Free tool / calculator** — viral utility that drives traffic + leads (HubSpot Website Grader, Hotjar Heatmap).
45. **Referral program** — incentivize existing users to invite peers.
46. **Built-in virality** — product invites teammates as part of core flow (Slack, Notion, Figma).
47. **Public artifacts** — users create something public that ranks in Google or shares socially (Loom videos, Typeform embeds, Figma community files).
48. **Open source** — release a useful OSS library; drives developer trust + traffic.

---

## Tactic Library: Activation (30+ tactics)

### Onboarding

49. **Welcome email sequence** — 5–7 emails over 14 days delivering aha moment.
50. **In-app onboarding checklist** — visible progress to first value.
51. **Setup wizard** — opinionated multi-step onboarding for complex products.
52. **Empty-state design** — first-run experience that guides next action.
53. **Sample data / templates** — let users explore with pre-loaded data before they have their own.
54. **Personalized onboarding** — branch onboarding by role/use-case (selected at signup).
55. **Time-to-value reduction** — eliminate steps between signup and aha moment.
56. **Video walkthroughs** — short Loom-style intro to core flows.
57. **Interactive product tours** — Appcues, Pendo, Userpilot guided overlays.
58. **AI assistant in-product** — chatbot answers questions during setup.

### High-touch activation

59. **1-on-1 onboarding calls** — for high-ACV accounts.
60. **Concierge onboarding** — done-for-you setup for top-tier customers.
61. **Onboarding office hours** — group calls weekly for new users.
62. **Slack channel for new customers** — direct access to team during first 30 days.

### Engagement & nudges

63. **Behavioral email nudges** — triggered emails when user does/doesn't take key action.
64. **Mobile push notifications** — for mobile-relevant products.
65. **In-app messages** — Intercom-style messages contextual to action.
66. **Re-engagement campaign** — win back users who signed up but never came back.
67. **Activation milestones** — celebrate first key actions (badges, confetti).
68. **Aha-moment instrumentation** — measure time-to-first-value, optimize relentlessly.

### Self-serve education

69. **Interactive demos** — Arcade, Storylane, Demostack-style click-through demos before signup.
70. **Knowledge base / docs** — searchable docs reduce support load + support activation.
71. **Loom library** — short videos for every common task.
72. **Community forum** — peer support reduces friction for new users.
73. **Office hours / live Q&A** — recurring live support sessions.

### Friction reduction

74. **Single sign-on (SSO)** — Google, Microsoft login reduces signup friction.
75. **No-credit-card freemium** — remove credit-card requirement to maximize signups.
76. **Magic link login** — passwordless reduces login friction.
77. **Mobile-friendly signup flow** — many users start on mobile.
78. **Progressive profiling** — collect data over time, not all upfront.

---

## Tactic Library: Retention (35+ tactics)

### Product engagement

79. **Feature announcements** — in-app + email when new feature ships relevant to user.
80. **Personalized weekly digest** — usage summary email, encourages return visits.
81. **What's new page / changelog** — public roadmap + recent ships.
82. **Habit-forming notifications** — daily/weekly nudges that build habit (without being spammy).
83. **Streaks / gamification** — for products where consistency matters (Duolingo model).
84. **Power-user education** — advanced tutorials for users who hit basic feature ceiling.

### Customer success

85. **Health score tracking** — instrument account health, intervene on drop.
86. **Proactive outreach on usage decline** — CSM email/call when usage drops 30%+.
87. **Quarterly business reviews (QBR)** — for higher-ACV accounts.
88. **Customer advisory board** — invite top customers to shape roadmap.
89. **Customer marketing manager role** — dedicated owner for retention/expansion.

### Content for retention

90. **Educational webinars** — best practices, advanced workflows.
91. **Customer-only content** — gated playbooks for paying users.
92. **Customer newsletter** — monthly curated tips + new features.
93. **Use-case spotlights** — show how others use the product (inspires deeper usage).

### Community

94. **Slack/Discord community** — peer-to-peer support + identity.
95. **Annual customer conference** — major loyalty + advocacy event.
96. **Local user groups / meetups** — geographic chapters.
97. **Customer-led content** — guest posts, podcasts featuring customers.

### Loyalty & advocacy

98. **Referral rewards for existing customers** — credit, swag, charity donation.
99. **Early access to new features** — beta program.
100. **Exclusive swag** — wearable identity for power users.
101. **Customer awards** — annual recognition program.
102. **NPS-triggered testimonial requests** — auto-ask for testimonial when NPS ≥9.

### Churn prevention

103. **Cancel-flow optimization** — present save offers in cancel funnel.
104. **Win-back campaigns** — re-engage churned customers after 30/60/90 days.
105. **Pause instead of cancel** — let users pause subscription.
106. **Downgrade path** — let users move to cheaper plan instead of churning.
107. **Annual contract incentives** — discount for annual reduces monthly churn risk.
108. **Exit interview** — survey or call all churned customers.

### Support as retention

109. **Live chat support** — fast response = lower churn.
110. **In-app help search** — surface docs without leaving product.
111. **First-response time SLA** — measured + communicated.
112. **Customer health dashboard for AEs** — visibility on accounts at risk.
113. **Renewal reminder series** — 90/60/30 days before renewal.

---

## Tactic Library: Revenue (25+ tactics)

### Upsell

114. **In-app upgrade prompts at limit** — when user hits free-plan ceiling.
115. **Usage-based pricing** — revenue grows with customer usage.
116. **Annual plan discount** — 15–20% off for annual, locks in revenue.
117. **Feature comparison nudges** — "you're missing out on X" emails.
118. **Seat expansion campaigns** — encourage adding teammates.
119. **Tier upgrade emails** — triggered when usage indicates ready for next tier.
120. **In-product upgrade UI** — clear upgrade path from any feature.
121. **Sales-assist for high-value PLG accounts** — AE intervention when account hits expansion threshold.

### Cross-sell

122. **Add-on modules** — premium features sold separately.
123. **Professional services** — consulting, training, implementation.
124. **Multi-product bundles** — second product at discount.
125. **Marketplace / app store** — third-party add-ons (rev share).

### Pricing & packaging

126. **Price increase for new customers** — grandfather existing.
127. **Value-based pricing** — align price to value metric (per seat, per workspace, per API call, per record).
128. **Tiered packaging (Good/Better/Best)** — anchor to highest tier.
129. **Decoy pricing** — middle tier designed to make top tier look obvious.
130. **Per-seat to platform pricing** — move from linear to platform fee for enterprise.

### Conversion & monetization

131. **Free trial → paid conversion sequence** — nurture during + after trial.
132. **Reverse trial** — start with all features, downgrade to free at end.
133. **Activation-based paywall** — trigger paywall after aha moment, not before.
134. **Sales touch on high-fit free signups** — AE outreach when account fits ICP.
135. **Demo request CTA placement** — strategic placement on highest-traffic pages.
136. **Pricing-page experiments** — A/B test pricing page layout, copy, anchoring.

### Expansion

137. **Land-and-expand playbook** — start small (one team), expand to org.
138. **Multi-year contracts** — discount for 2-3 year commitments (enterprise).
139. **Co-term renewals** — align all contracts to single renewal date for cleaner expansion.
140. **Champion enablement** — help internal champions sell upward.
141. **Executive sponsor program** — VP/Director-level relationships in top accounts.
142. **Renewal-as-a-relaunch** — present renewal as a fresh strategy, not paperwork.

---

## Output Format

```markdown
# Marketing Roadmap: {{Company}} — 90 Days

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Review / Approved

**North-star metric:** {{metric, e.g., "MRR from self-serve from $40k → $80k"}}
**Identified bottleneck:** {{stage, e.g., "visitor → signup conversion is 0.6% (benchmark 2-4%)"}}

---

## Strategic Frame

- **GTM motion:** {{PLG / Sales-led / Hybrid}}
- **Primary ICP:** {{ICP, e.g., "Heads of Marketing at 50-200 person B2B SaaS"}}
- **ACV:** {{$$$}}
- **Capacity:** {{X marketers, Y eng-hours/mo, $Z budget}}

---

## Prioritized Tactics (ICE-scored)

| # | Tactic | Stage | Type (L/C) | I | C | E | Score | Owner | Month | Status |
|---|--------|-------|-----------|---|---|---|-------|-------|-------|--------|
| 1 | {{Tactic name}} | {{Acq/Act/Ret/Rev}} | L | 9 | 7 | 8 | 0.504 | {{Name}} | M1 | Planned |
| 2 | ... | | | | | | | | | |

---

## Tactic Detail (top 8)

### Tactic 1: {{Name}}

- **Hypothesis:** {{If we ship X, we expect Y because Z}}
- **Leading metric:** {{measurable in 2-4 weeks}}
- **Target:** {{specific number + date}}
- **Owner:** {{name}}
- **Eng dependency:** {{none / X hours}}
- **Check-in:** {{date}}
- **Kill criterion:** {{If <X by Y, kill and reallocate to tactic Z}}

---

## Sequencing

**Month 1 (low-eng, high-confidence):**
- Tactic A
- Tactic B
- Tactic C

**Month 2 (depends on M1 learnings):**
- Tactic D
- Tactic E

**Month 3 (compounds on M1-M2):**
- Tactic F
- Tactic G

---

## Pre-mortem: Top 3 Risks

1. **Risk:** {{e.g., eng capacity gets eaten by product roadmap}}
   **Mitigation:** {{e.g., negotiate explicit 20 hrs/mo commitment in writing}}
2. ...
3. ...

---

## Backlog (next quarter+)

- Tactic H — score 0.34 — needs M1 data first
- Tactic I — score 0.31 — depends on hiring designer
- ...

---

## Next Steps

- [ ] Review with founder + head of product
- [ ] Confirm eng capacity for tactics needing build
- [ ] Set up tracking dashboards for each leading metric
- [ ] Schedule check-ins for each tactic
```

---

## Quality Bar

A marketing-ideas roadmap is "done" when:

- [ ] Funnel bottleneck explicitly identified with data, not guessed
- [ ] Each tactic has ICE score with reasoning visible
- [ ] Each top-8 tactic has hypothesis, leading metric, target, owner, kill criterion
- [ ] At least 40% of effort allocated to growth-loop tactics (not just campaigns)
- [ ] Capacity check passes (no owner has >40 hrs/wk allocated to roadmap tactics)
- [ ] Pre-mortem identifies top 3 risks with mitigations
- [ ] Sequencing respects dependencies (M2 doesn't require unfinished M1 work)
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (no contradictions on ICP/positioning)
- [ ] Backlog tactics labeled with reason for deferral

### Common Mistakes

1. **Tactic Christmas tree** — listing 25 tactics across 4 funnel stages because everything looks shiny. **Why it happens:** Fear of leaving anything off. **Fix:** Force a 90-day capacity ceiling. If you have 1 marketer, the roadmap has 3–5 tactics, not 25.
2. **Wrong-bottleneck syndrome** — adding acquisition tactics when activation is the actual leak. **Why it happens:** Acquisition is more visible (vanity traffic). **Fix:** Always start with the funnel-conversion analysis. Fix the leakiest stage first.
3. **Confidence inflation** — scoring "Confidence 8" with zero evidence. **Why it happens:** Tactic worked at HubSpot in 2014. **Fix:** Confidence is a function of *evidence specific to your ICP*. Without that, max confidence is 5.
4. **No kill criteria** — tactics linger for quarters because no one defined "done." **Why it happens:** Optimism + sunk-cost fallacy. **Fix:** Every tactic gets a kill criterion at launch. Put it in the doc.
5. **All campaigns, no loops** — roadmap is 100% one-shot pushes. **Why it happens:** Loops require eng + patience; campaigns feel productive. **Fix:** Allocate ≥40% to loops. Even one good loop (referral, programmatic SEO, virality) outperforms 10 campaigns over 18 months.
6. **No owner** — tactics listed with "TBD" or "marketing team." **Why it happens:** Founder doesn't want to commit one person. **Fix:** Single DRI. If you can't name one, the tactic isn't ready.
7. **Founder-favorite override** — founder insists on a tactic with low ICE. **Why it happens:** Founders confuse personal taste with strategy. **Fix:** Score it transparently, show the math, and if founder still insists, label it explicitly as "Founder Choice" so the team knows it's not coming from the framework.
8. **Same metric across tactics** — three tactics all say "increase signups." **Why it happens:** Lazy metric definition. **Fix:** Each tactic owns a distinct, channel-attributable metric.

---

## Examples

### Example 1: PLG SaaS at $4M ARR Wants to Hit $8M in 12 Months

**Context:**

- Company: **Loomly** (made-up), AI meeting-notes tool, $19/mo prosumer + $39/mo team plan, 12 employees, 1 marketer (the founder)
- Funnel: 80k visitors/mo → 1.6k signups (2%) → 480 activated (30%) → 48 paid (10%) → ~$1k MRR added/mo
- Bottleneck: signup→activation 30% is OK; activation→paid 10% is OK; the leak is *visitor→signup volume* (need more top of funnel)
- Goal: 2x MRR in 12 months
- Constraint: 1 marketer, $5k/mo budget, eng will give 8 hrs/week if asked nicely

**Input from user:**

> "We're $4M ARR, board wants $8M next year. I'm the only marketer. We tried Google Ads, blew $20k, got nothing. What should I focus on?"

**Output (abbreviated):**

```text
ROADMAP: Loomly — 90 Days

North-star metric: Self-serve MRR from $40k → $60k by end of Q
Bottleneck: Visitor volume — 80k/mo is sub-scale for a 2% conversion rate. Need 2-3x traffic.

Top 5 Tactics (ICE-ranked):
| # | Tactic | Stage | L/C | Score | Reason |
| 1 | Programmatic SEO: 200 "AI notes for [meeting type]" pages | Acq | L | 0.504 | Existing product is search-friendly, low eng cost |
| 2 | Free tool: meeting agenda generator (no signup) | Acq | L | 0.480 | Captures intent search, viral artifact |
| 3 | Built-in virality: shared notes link auto-credits Loomly | Acq | L | 0.448 | One-time eng work, perpetual loop |
| 4 | Onboarding email sequence rewrite (currently 1 email) | Act | C | 0.420 | Activation→paid is 10%, can push to 15% |
| 5 | Annual plan discount (20% off) | Rev | C | 0.384 | Lifts ARPU, no eng |

Killed: Google Ads (re-running fail)
  Reason: Already proven negative for this ICP at this stage.
          Revisit when CAC payback is clearer.

Sequencing:
- M1: Free tool MVP + email sequence rewrite (no eng)
- M2: Programmatic SEO templates (8 hrs eng) + annual discount launch
- M3: Built-in virality build (16 hrs eng), scale prog-SEO
```

**Why this works:** Filters 140 tactics down to 5 that fit a 1-marketer team with limited eng. Identifies the right bottleneck (visitor volume), not the assumed one (conversion). Kills the proven-failed tactic (Google Ads) explicitly.

---

### Example 2: Sales-led B2B SaaS at $12M ARR, ACV $80k, Pipeline Drying Up

**Context:**

- Company: **Cendric** (made-up), security-compliance automation for fintech, $80k ACV, 5 AEs, 60 employees, 4-person marketing team
- Funnel: 40 SQLs/mo → 8 closed-won → ~$640k new ARR/mo
- Bottleneck: SQL volume dropped 35% over last quarter; AEs are sitting idle
- Goal: Refill pipeline within 90 days
- Constraint: Compliance-regulated buyers, long sales cycle (90-day average)

**Input from user:**

> "Our outbound stopped working — connect rates dropped from 4% to 1.5% since we added 8 AEs. Inbound is flat. Need pipeline this quarter. We have $40k/mo paid budget."

**Output (abbreviated):**

```text
ROADMAP: Cendric — 90 Days

North-star metric: SQL volume from 40 → 65/mo
Bottleneck: Outbound saturation (cohort fatigue) + inbound flat (insufficient demand gen)

Top 6 Tactics (ICE-ranked):
| # | Tactic | Stage | L/C | Score | Reason |
| 1 | ABM: top 100 fintech accounts, 1:1 personalized landing pages | Acq | C | 0.560 | High ACV justifies effort, AEs need named accounts |
| 2 | LinkedIn Doc Ads: gated SOC2 readiness checklist | Acq | C | 0.504 | Captures bottom-funnel; ICP heavy on LinkedIn |
| 3 | Original research: "State of Fintech Compliance 2026" report | Acq | L | 0.480 | Backlinks + cited authority + sales asset |
| 4 | Webinar series: monthly with compliance lawyer + customer | Acq | L | 0.432 | Loop: each webinar feeds nurture + sales calls |
| 5 | Battle cards refresh + sales playbook | Sales-assist | C | 0.420 | AEs are losing winnable deals |
| 6 | Customer case study sprint (5 in 30 days) | Acq | L | 0.378 | Sales asset gap; conversion lift on demo→close |

Killed:
- More cold email volume: at 1.5% connect rate, adding more emails just trains spam filters.
  Pause and re-warm domains instead.
- TikTok experiments: ICP doesn't live there.

Sequencing:
- M1: ABM list + LinkedIn ads launch + battle cards (3 days writing, no eng)
- M2: Webinar 1 + research report kickoff + 2 case studies
- M3: Webinar 2 + report launch (PR push) + 3 more case studies
```

**Why this works:** Diagnoses the actual bottleneck (outbound saturation + insufficient demand gen) rather than the assumed one (need more AEs). Filters out tactics inappropriate for the ACV/ICP. Aligns marketing tactics with what AEs actually need (named accounts, sales assets, demand gen).

---

## Related Skills

Chain these for compounding outcomes:

- **[`channel-strategy`](../channel-strategy/SKILL.md)** — Use *before* this skill when channel mix is unclear. Channel-strategy narrows to 3–5 channels; marketing-ideas then mines tactics within those channels.
- **[`gtm-strategy`](../gtm-strategy/SKILL.md)** — Use *before* this skill if PLG vs. sales-led isn't clear. The motion determines which library section applies.
- **[`ab-test-setup`](../ab-test-setup/SKILL.md)** — Use *after* this skill for each tactic that's a real experiment. Turns "we'll try X" into a testable hypothesis with sample size.
- **[`icp-research`](../icp-research/SKILL.md)** — Use *before* this skill when ICP is fuzzy. Library tactics filter dramatically by ICP.
- **[`content-strategy`](../content-strategy/SKILL.md)** — Use *alongside* this skill when ≥3 selected tactics are content-driven (SEO, blog, video).
- **[`marketing-automation`](../marketing-automation/SKILL.md)** — Use *after* this skill to wire up the lifecycle email + nurture tactics into the stack.

---

## References

- **Sean Ellis, *Hacking Growth*** — origin of ICE scoring and the high-tempo testing rhythm.
- **Brian Balfour, *Four Fits Framework* (Reforge)** — channel-product fit, model-market fit; underpins the filter-by-ICP/GTM step.
- **Andrew Chen, *The Cold Start Problem*** — growth loops vs. funnels; foundation for loops > campaigns principle.
- **April Dunford, *Obviously Awesome*** — positioning as the precondition for any tactic to work.
- **OpenView, *PLG Index*** — benchmarks for PLG funnel conversion (used in Step 1).
- **Lenny Rachitsky, *Lenny's Newsletter*** — case studies on tactic execution at top SaaS companies.
- **ProfitWell / Paddle data** — pricing, retention, and expansion benchmarks used to evaluate revenue-stage tactics.
