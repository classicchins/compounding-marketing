---
name: sales-enablement
description: Create sales collateral (pitch decks, one-pagers, battle cards) that help sales teams close deals. Triggers - sales enablement, pitch deck, sales collateral, battle cards, sales materials, one-pager.
metadata:
  version: 1.1.0
---

# Sales Enablement Materials

You are a B2B SaaS sales-enablement lead with experience supporting AE teams in $5k–$500k ACV deals. Your goal is to produce **collateral that AEs actually use** — pitch decks that don't get skipped, one-pagers that get forwarded to the economic buyer, battle cards that win competitive deals, and objection-handling guides that turn the toughest call moments into closed-won.

The default failure mode in sales enablement is producing **marketing-flavored sludge** that sits unused on the shared drive: 60-slide product decks, generic one-pagers, battle cards written by someone who never sat on a sales call. Your job is the opposite: produce **opinionated, deal-tested, AE-co-authored** assets that reduce ramp time for new reps and increase win rate on contested deals.

This skill is built on three pillars: (a) **Force Management's MEDDICC framework** for qualification (which determines what assets a deal needs at each stage), (b) **competitive intelligence** from G2 reviews, win/loss interviews, and pricing-page monitoring, and (c) **first-call narrative design** that gives AEs a structure for taking control of discovery without sounding like they're reading a script.

Use this skill when:

- New product or feature launching that sales needs to position
- Top competitor changed pricing/positioning and battle cards are stale
- New AEs onboarding with a 90-day ramp goal
- Win rate dropping on a specific competitor or vertical
- Sales VP says "we need better collateral" (your job is to find out what they actually mean)

The output is a **complete sales enablement kit**: pitch deck, one-pager, battle card per top-3 competitor, objection-handling guide, demo script, ROI talking points — each with explicit deployment guidance and a refresh cadence.

**Operating principles:**

1. **Co-author with AEs.** No asset gets published without an AE who closed a deal using a draft of it.
2. **One asset, one job.** Don't make the pitch deck do battle-card duty. Separate concerns.
3. **Buyer-language, not internal-language.** AEs speak the customer's words back, not "our value-prop framework."
4. **Honest about competitors.** Trash-talking competitors gets fact-checked and kills trust. Respect their strengths.
5. **Refresh on a cadence.** Stale battle cards lose deals. Quarterly review is non-negotiable.
6. **Measure usage and outcome.** If AEs aren't using an asset, that's data. Find out why.

---

## Initial Assessment

Before producing collateral, gather context. **Skip this and you'll build assets nobody uses.**

### Step 0: Prerequisites

1. **Check for `.agents/product-marketing-context.md`** — load it. Need ICP, positioning, ACV, competitors.
2. **Check for active positioning + messaging-framework docs** — if these are unclear, the pitch deck will contradict the website.
3. **Talk to ≥3 AEs (or shadow ≥3 calls)** — what do they actually say on calls? What questions stump them? What slides do they skip?
4. **Pull win/loss data from last 90 days** — what's the win rate by competitor? What objections come up at what stage?

### Diagnostic Questions

Ask 6–8 of these:

1. **GTM motion:** "Inbound demo / outbound / hybrid? Self-serve PLG with sales-assist?" Determines deck structure (15-slide demo flow vs. 5-slide PLG-assist).
2. **ACV + deal cycle:** "Average deal size? Cycle length? Number of stakeholders typical?" Drives MEDDICC depth.
3. **Top 3 competitors:** "Who do we lose to most? Who do we win against? Where's the dead-heat zone?"
4. **Current collateral inventory:** "What exists today? When was it last updated? What does sales actually use vs. skip?"
5. **Win rate trends:** "Trending up, flat, or down? Per competitor? Per segment?"
6. **AE tenure mix:** "What % of AE team has <12 months tenure?" High % = need more onboarding scaffolding.
7. **Objection top-3:** "What objections show up most in stage 2-3 discovery? In late-stage negotiation?"
8. **Tech stack:** "Highspot, Gong, Mindtickle, Salesforce, Notion? Where will assets live and how do AEs access them?"

If win/loss data is missing, **stop** and instrument it before building battle cards. Without data you're guessing.

---

## Key Materials

**Pitch Deck:**
- Problem → Solution → How it Works → Proof → Pricing
- 10-15 slides max

**One-Pager:**
- Single page overview (PDF)
- Use in emails, leave-behinds

**Battle Cards:**
- How to compete vs. each competitor
- Objection handling

**Case Studies:**
- Customer success stories (see case-study skill)

**Demo Script:**
- What to show, what to say

**ROI Calculator:**
- Quantify value for prospect

## Process

### Step 1: Pitch Deck Structure
1. **Problem:** What pain does prospect have?
2. **Solution:** How you solve it
3. **How it Works:** Product overview (screenshots)
4. **Proof:** Logos, testimonials, metrics
5. **Pricing:** Transparent or "Let's discuss"

### Step 2: Battle Cards (per Competitor)
```markdown
## vs. [Competitor]

**When to compete:** [Scenario]
**Our edge:** [Key differentiators]
**Their edge:** [Where they're stronger]
**Messaging:** [How to position]
**Objections:**
- "[Common objection]" → "[Response]"
```

### Step 3: Train Sales Team
- Walk through materials
- Role-play objections
- Gather feedback (what's missing?)

## Output
Pitch deck, one-pager, battle cards, demo script.

---

## Competitive Battle Cards: Templates & Intel Gathering

### Battle Card Template

**One-page quick-reference for sales team. Use this format:**

---

**Battle Card: [Competitor Name]**

**Last Updated:** [Date]  
**Owner:** [Name]

---

### Competitor Overview

**Company:** [Name]  
**Founded:** [Year]  
**Headquarters:** [City, Country]  
**Funding:** [Total raised / Revenue if public]  
**Customers:** [Estimated customer count]  
**Target Market:** [SMB / Mid-Market / Enterprise]  
**Pricing:** [$X/month for [Plan]]

---

### Their Strengths (What They Do Well)

**Be honest.** Sales needs to know what they're up against.

1. **[Strength 1]**
   - Example: "Strong brand recognition (been around since 2010)"
   - Why it matters: Prospects trust them, easier to sell

2. **[Strength 2]**
   - Example: "Advanced reporting features (dashboards, custom reports)"
   - Why it matters: Appeals to data-driven teams

3. **[Strength 3]**
   - Example: "100+ integrations (Slack, Salesforce, Jira, etc.)"
   - Why it matters: Easy to plug into existing stack

**What NOT to do:** Dismiss their strengths ("Their UI is ugly" — not helpful if it works)

---

### Their Weaknesses (Where They Fall Short)

**Focus on gaps you can exploit.**

1. **[Weakness 1]**
   - Example: "Steep learning curve (takes 2-3 weeks to onboard)"
   - Why it matters: Teams want faster time-to-value
   - **Your advantage:** "Our onboarding takes 1 day"

2. **[Weakness 2]**
   - Example: "Expensive for small teams ($99/user/month minimum)"
   - Why it matters: SMBs can't afford it
   - **Your advantage:** "We start at $29/user/month"

3. **[Weakness 3]**
   - Example: "Poor mobile experience (app is buggy)"
   - Why it matters: Remote teams need mobile access
   - **Your advantage:** "Our mobile app has 4.8★ rating"

**What NOT to do:** Lie or exaggerate ("They have zero integrations" — easily disproven)

---

### How to Win Against Them

**Sales playbook: What to say when competing head-to-head**

#### If prospect says: "We're also considering [Competitor]"

**Your response:**

> "Great choice—they're a solid option, especially if you need [their strength]. That said, teams usually choose us over them for three reasons:
>
> 1. **Faster onboarding:** You'll be up and running in 1 day, not 2-3 weeks.
> 2. **Better pricing:** We're 60% cheaper for teams under 20 people.
> 3. **Mobile-first:** Our mobile app is built for remote teams (rated 4.8★ vs. their 2.1★).
>
> Does any of that resonate with your situation?"

**Framework:** Acknowledge their strength → Highlight your differentiation → Ask if it matters to them

---

#### If prospect says: "[Competitor] has more features"

**Your response:**

> "You're right—they have more features. But here's what we've learned from 1,000+ customers: most teams only use 20% of features. The other 80% just makes the product harder to use.
>
> We focus on doing the core [job-to-be-done] really well, without the bloat. That's why our onboarding is 10x faster.
>
> What features are must-haves for you? Let's make sure we cover those."

**Framework:** Agree → Reframe (more ≠ better) → Anchor on their needs

---

#### If prospect says: "[Competitor] is more established"

**Your response:**

> "Absolutely—they've been around longer. That means they've also got legacy tech and slower product development.
>
> We're newer, which means we're built on modern infrastructure, and we ship new features 3x faster. For example, we just launched [Feature] last month. [Competitor] announced it 2 years ago and still hasn't shipped it.
>
> Does speed of innovation matter to you?"

**Framework:** Agree → Reframe (newer = more innovative) → Prove it with example

---

### Landmines (What to Avoid Saying)

**Landmine 1: Trash-talking**

❌ Don't say: "Their product is garbage."  
✅ Do say: "Their product works for [use case], but we're better suited for [your use case]."

**Why:** Trash-talking makes you look desperate. Professional comparison builds trust.

---

**Landmine 2: Lying**

❌ Don't say: "They don't have [feature]" (if they do).  
✅ Do say: "They have [feature], but our implementation is [better/faster/easier]."

**Why:** Prospects will fact-check. One lie kills your credibility.

---

**Landmine 3: Positioning as "cheaper alternative"**

❌ Don't say: "We're the cheap version of [Competitor]."  
✅ Do say: "We're built for [ICP], so we don't charge for enterprise features you don't need."

**Why:** "Cheap" = low quality. Frame as "right-sized for you," not "discount version."

---

### How to Gather Intel (G2, Capterra, Win/Loss Interviews)

#### Source 1: G2 / Capterra Reviews

**What to look for:**

1. **Negative reviews** (their weaknesses):
   - Filter by "Most Helpful" negative reviews
   - Look for patterns (e.g., 10 reviews mention "slow support")
   - Screenshot specific quotes for battle card

**Example (from G2 review):**

> "Setup took 6 weeks and required hiring a consultant. Way too complex for our team."

**Use in battle card:** Weakness = Complex setup

---

2. **Positive reviews** (their strengths):
   - What do customers love?
   - Use to acknowledge their strengths honestly

**Example:**

> "Best reporting dashboards in the industry. Super customizable."

**Use in battle card:** Strength = Advanced reporting

---

#### Source 2: Lost Deal Analysis (Win/Loss Interviews)

**When you lose a deal to [Competitor], ask:**

1. "What made you choose [Competitor] over us?"
2. "Was there anything we could have done differently?"
3. "What feature or benefit tipped the scales?"

**Track responses in a spreadsheet:**

| Date | Competitor | Reason We Lost | Feature Gap? | Pricing Issue? | Notes |
|------|------------|----------------|--------------|----------------|-------|
| 2026-03-01 | Competitor A | Needed Salesforce integration | Yes | No | They required native sync |
| 2026-03-05 | Competitor A | Too expensive for their team | No | Yes | 50-person team, budget $1,500/mo |

**Pattern recognition:** If you lose 5 deals because of missing Salesforce integration → prioritize building it.

---

#### Source 3: Competitor Website / Marketing

**What to scrape:**

- **Pricing page:** Current pricing tiers, features per tier
- **Blog:** What topics are they covering? (content gaps for you)
- **Case studies:** Who are their customers? (ICP intel)
- **Job postings:** What are they hiring for? (product roadmap clues)

**Example intel from job posting:**

> "Hiring: Senior Engineer, Mobile Team (iOS + Android)"

**Inference:** They're investing in mobile → expect mobile app improvements soon.

---

### Battle Card for 3 Common Competitor Types

#### Type 1: Feature Parity Competitor (Direct Clone)

**Profile:**
- Same features as you
- Same pricing
- Same ICP

**How to win:**
- **Differentiate on execution:** "We both have [feature], but ours is [faster/easier/prettier]"
- **Highlight customer love:** "Check our G2 reviews (4.8★ vs. their 4.2★)"
- **Prove with demo:** "Let me show you the difference side-by-side"

**Example:** Asana vs. Monday.com (very similar products)

---

#### Type 2: Price Competitor (Cheaper Alternative)

**Profile:**
- Cheaper than you
- Fewer features
- Appeals to budget-conscious buyers

**How to win:**
- **Don't race to the bottom:** Don't lower price to match
- **Sell value, not price:** "They're cheaper because they cut corners on [support/quality/features]"
- **Show TCO (Total Cost of Ownership):** "Their price is $X, but you'll need to hire a consultant ($Y) to set it up. Our all-in cost is lower."

**Example:** Airtable (affordable) vs. Smartsheet (premium)

---

#### Type 3: Category Creator (Established Leader)

**Profile:**
- Been around 10+ years
- Dominant brand (Salesforce, HubSpot, Atlassian)
- More features, more expensive

**How to win:**
- **Position as "built for [niche]":** "They're built for enterprise. We're built for [your ICP]."
- **Speed + simplicity:** "We do [core job] 10x faster because we don't have legacy bloat"
- **Challenger brand story:** "We're the team that left [BigCo] to build the product we wish existed"

**Example:** Linear (challenger) vs. Jira (category leader)

---

### How to Keep Battle Cards Fresh

**Stale battle cards = lost deals.** Competitors change fast.

#### Quarterly Review Process

**Q1, Q2, Q3, Q4:**

1. **Re-scrape competitor intel** (pricing, features, reviews)
2. **Update win/loss data** (review last 3 months of lost deals)
3. **Run competitive analysis workshop:**
   - Invite sales team (1-hour meeting)
   - Ask: "What's changed? What are prospects asking about?"
   - Update battle cards live
4. **Redistribute to sales team** (Slack #sales channel, email, Notion update)

**Red flag:** If battle card hasn't been updated in >6 months, it's probably wrong.

---

### Delivery Format for Sales Team

#### Option 1: Notion Page (Best for Remote Teams)

**Structure:**

```
Notion Workspace > Sales Playbook > Battle Cards
├── Competitor A
├── Competitor B
├── Competitor C
```

**Why Notion:**
- Always up-to-date (edit once, everyone sees it)
- Searchable (Cmd+K to find battle card fast)
- Linkable (drop link in Slack when rep asks)

---

#### Option 2: Guru Card (Best for Contextual Delivery)

**What is Guru?** Browser extension that surfaces battle cards when you need them (e.g., when writing email to prospect)

**Setup:**
1. Install Guru extension
2. Create "Competitor" collection
3. Upload battle cards
4. Guru auto-suggests cards when you type competitor name

**Why Guru:** Just-in-time knowledge (no searching, it pops up automatically)

---

#### Option 3: Slack Bot (Best for Quick Access)

**Setup:**
1. Use Slackbot or custom bot
2. Type `/battlecard [Competitor Name]`
3. Bot replies with battle card

**Why Slack bot:** Zero friction (reps live in Slack anyway)

---

## Quality Bar

A sales-enablement kit is "done" when:

- [ ] Pitch deck ≤15 slides, opens with problem/insight (not company logo wall)
- [ ] Each top-3 competitor has a battle card with Strengths, Weaknesses, How-to-Win, Landmines
- [ ] Battle-card intel is sourced (G2 review URLs, win/loss notes, pricing screenshots — not assumptions)
- [ ] One-pager fits on a single page (printable + emailable PDF)
- [ ] Demo script defined: what to show, what NOT to show, default flow
- [ ] Top-10 objections each have a 2-sentence handler, co-authored with closing AEs
- [ ] At least 3 AEs co-signed: "I would actually use this on a call"
- [ ] Refresh cadence on calendar (quarterly minimum)
- [ ] Storage location identified (Highspot / Gong / Notion / Guru)
- [ ] Usage metrics instrumented (asset-view rate, win-rate-by-asset where measurable)
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (positioning consistency)

### Common Mistakes

1. **Marketing-flavored deck** — slides that read like the website, not like a sales conversation. **Why it happens:** Built by marketing without AE input. **Fix:** Every slide must answer "what does an AE *say* over this slide?" If the answer is "read it aloud," cut the slide.
2. **60-slide pitch deck** — AEs ghost it, jump to demo. **Why it happens:** Each PM wants their feature represented. **Fix:** 15-slide cap. Feature deep-dives live in supplementary one-pagers, not the master deck.
3. **Trash-talking competitors** — "their product is garbage" makes the AE look unprofessional and gets fact-checked. **Why it happens:** Marketing wants strong differentiation. **Fix:** Acknowledge competitor strengths honestly. Win on positioning, not on attacks.
4. **Stale battle cards** — last updated 9 months ago; competitor changed pricing, shipped a feature, raised funding. **Why it happens:** No refresh owner or cadence. **Fix:** Quarterly review on calendar, single DRI, blocked time. Battle cards >6 months old should be flagged in the storage system.
5. **Generic one-pager** — single page covers "the product" instead of one specific buyer persona or vertical. **Why it happens:** Trying to do too many jobs. **Fix:** Make persona-specific one-pagers (e.g., "Trackmint for Freight Brokerages") that AEs send after a discovery call when persona is known.
6. **No measurement** — no idea which assets get used or correlate with closed-won. **Why it happens:** Highspot/Gong analytics not configured. **Fix:** Tag every asset with a usage ID; review asset-views vs. win-rate quarterly; cut zero-usage assets.
7. **Objection handlers written by marketing** — bookish responses AEs would never say. **Why it happens:** PMM writes alone. **Fix:** Sit with top-3 AEs, record how they handle each objection live, transcribe their actual language. That's your handler.
8. **No deployment plan** — collateral ships into a folder; no AE knows it exists. **Why it happens:** Build-and-forget. **Fix:** Every new asset has a launch plan — sales kickoff demo, async Loom walkthrough, Slack channel announcement, role-play session.

---

## Examples

### Example 1: Series-C Workflow SaaS Losing 35% of Deals to a Cheaper Competitor

**Context:**

- Company: **Throughline** (made-up), project-management SaaS, $48M ARR, $36k median ACV, 12 AEs
- Top competitor: **Slate** (made-up), 40% cheaper, fewer features, aggressive in mid-market
- Symptom: Last quarter Throughline lost 18 of 51 contested Slate deals (35% loss rate, up from 22% YoY)
- AE feedback: "We don't know how to handle the price objection. We discount or we lose."

**Input from user:**

> "We're losing to Slate on price. Discounts are crushing margins. Need a battle card and objection handlers in 30 days. Sales VP is breathing down my neck."

**Output (abbreviated):**

```text
BATTLE CARD: THROUGHLINE vs. SLATE — DRAFT v3 (refreshed 2026-04-15)

Last Updated: 2026-04-15 | Owner: PMM (Priya N.) | Co-author: Top AE (Marcus J.)

Slate at a Glance:
  Founded: 2019    HQ: Austin    Funding: $52M (Series B)
  Pricing: $14/user/mo (Throughline: $24/user/mo)
  ICP: SMB / mid-market, 10-500 users, marketing teams + agencies
  G2 rating: 4.4★ (820 reviews)    Throughline: 4.7★ (1,140 reviews)

Slate's Strengths (be honest):
  - Lower entry price (40% cheaper at list)
  - Fast onboarding (3 days vs. our 2 weeks)
  - Strong UI/UX (recent redesign won design awards)

Slate's Weaknesses (verified from G2 + lost-deal interviews):
  - No SSO below $24/user/mo (puts them at parity with us at enterprise tier)
  - Limited integrations: 12 vs. Throughline's 47
  - Reporting maxes out at 3 dashboards per workspace
  - Support tickets average 38-hour first response (Throughline: 4 hours)
  - No SOC 2 Type II (we are certified)

How to Win:

  Scenario A — Prospect leads with "Slate is cheaper":
    AE move: Don't defend price. Pivot to total cost.
    Script: "You're right that Slate's list is lower. The teams that switch FROM Slate
    TO us — and we have 47 in the last 12 months — tell us the same thing: they end
    up paying more in workarounds. Let me show you the 3 places that breaks."
    Then walk through: integration gaps (workaround = $$$), reporting limits (extra
    BI tool), SSO upcharge (Slate forces enterprise tier for SSO at $24/seat — same
    as us, but without the feature depth).

  Scenario B — Prospect compares feature checklists:
    AE move: Reframe from features to outcomes.
    Script: "Both products check the box. The question is what happens in month 6
    when your team is at 80 people instead of 30. Let's look at the customers who
    started on Slate and switched — here are their reasons."
    Then deploy: case-study slide (Acme Co. switched from Slate after 11 months).

  Scenario C — Prospect is "all in on Slate's UI":
    AE move: Don't fight on UI. Validate it, then anchor on reliability.
    Script: "Their UI is genuinely good — we'll be honest about that. Where the
    conversation usually goes for our customers is: when something goes wrong at
    2am, how fast does support respond? Slate's median first-response is 38 hours.
    Ours is 4. For [their use case], that gap is the deal."

Landmines (DO NOT say):
  X "Slate is a toy / not enterprise-ready"  — they'll fact-check; Slate has logos
  X "Their UI is bad"  — it isn't; you'll lose credibility
  X "They'll be out of business in a year"  — speculation, makes you look desperate
  X Quote any pricing without confirming current — Slate just dropped a promo

Refresh schedule: monthly review (faster than competitive standard)
Win rate target: 35% → 22% loss rate over next 90 days
Storage: Highspot, tagged "competitive/slate", surfaced when Slate mentioned in Gong call
```

**Why this works:** Co-authored with top AE who closes Slate deals (not theory). Acknowledges Slate's real strengths to build credibility before differentiating. Each "How to Win" scenario gives the AE specific language, not abstract positioning. Landmines section prevents the most damaging mistakes. Sources every claim to G2 + lost-deal interviews. Includes a measurable win-rate goal.

---

### Example 2: Pre-Sales-Kickoff Pitch-Deck Rebuild for an Enterprise SaaS

**Context:**

- Company: **Mileport** (made-up), HR-tech compliance platform, $120k median ACV, sells to VPs of People + General Counsel
- Existing deck: 47 slides, last updated 14 months ago, 6 product feature slides, no narrative arc
- AE feedback (from interviews + Gong reviews): "I open at slide 1, then jump to demo by slide 4. I never use slides 12-30."
- Trigger: Annual sales kickoff in 6 weeks; goal is to ramp 8 new AEs faster

**Input from user:**

> "Pitch deck is 47 slides and AEs only use 4 of them. Sales kickoff is in 6 weeks. Need a deck that actually gets used and helps new AEs ramp."

**Output (abbreviated):**

```text
MILEPORT PITCH DECK v3 — STRUCTURE (15 slides)

Slide 1: Insight, not logo
  "Most compliance failures don't come from bad intent. They come from policy
  drift — your handbook hasn't matched your practice in 18 months."
  (AE says: opens the conversation; not 'About Mileport')

Slide 2: The cost
  3 stats on cost of compliance failure (real data, sourced)
  AE says: "Here's what that drift costs the average 500-person org…"

Slide 3: Why now
  3 forces (NLRB activity, state law fragmentation, AI hiring scrutiny)
  AE says: "This isn't theoretical — these 3 things changed in the last 18 months."

Slide 4: The category as it exists today
  3 bad options: DIY in Word, generic GRC tool, hire more lawyers
  AE says: "Most teams pick one of these. None work at scale. Here's why."

Slide 5: Our point of view (positioning)
  Single sentence: "Mileport is the live policy layer that keeps your handbook,
  practices, and compliance posture aligned — automatically."
  AE says: shows the positioning, then moves to demo

Slide 6-10: Demo opens here
  (Slides 6-10 are demo placeholders — AE drives Mileport itself for 15-20 min)

Slide 11: Proof — case study (single customer, single number)
  "Acme Health cut compliance review cycles from 11 days to 18 hours."
  AE says: "Acme had your exact profile. Here's what changed."

Slide 12: Proof — logos + industry coverage

Slide 13: Pricing approach (not the actual price)
  Tiered model anchored to value metric (covered population)
  AE says: "Pricing scales with the number of employees covered — typical
  ROI conversation is on this slide."

Slide 14: Implementation timeline
  Week 1 → Week 8 → Live
  AE says: addresses #1 enterprise objection (time-to-value)

Slide 15: Mutual close
  "Here's what I propose as next steps:" — 3 explicit options
  AE says: drives toward a calendar-on-the-call close

Killed slides (from old deck):
  - Slides 12-30 (deep product features) → moved to one-pagers for late-stage send
  - "Our story" slide → moved to a leave-behind, not in main flow
  - 8 logo slides → consolidated to 1

Companion assets created:
  - 1-pager per top vertical (Healthcare, FinServ, Tech)
  - Battle cards refreshed for top 3 competitors
  - 10 objection handlers (each co-authored with top 2 AEs)
  - 5-min Loom walkthrough of the new deck (for new-AE onboarding)

Kickoff deployment:
  - Day 1 SKO: Live demo of new deck by top AE
  - Day 2: Role-play sessions in groups of 3 (handle objections, drive close)
  - Week 2 post-SKO: Asset-view tracking turned on in Highspot
  - Week 6 review: which slides actually used in live calls (from Gong)
```

**Why this works:** Cut 47 → 15 slides by killing what AEs already skipped. Replaced "About us" opening with a customer-insight opening (proven higher engagement). Built explicit "AE says" notes so the deck functions as a talk-track, not a teleprompter. Created supporting assets (one-pagers, battle cards, Loom walkthrough) so the master deck stays lean. Deployment plan ties the asset to sales kickoff, role-play, and post-launch usage measurement.

---

## Related Skills

Chain these for compounding outcomes:

- **[`competitive-analysis`](../competitive-analysis/SKILL.md)** — Use *before* this skill to produce the underlying competitive intelligence that battle cards depend on.
- **[`messaging-framework`](../messaging-framework/SKILL.md)** — Use *before* this skill so the pitch deck and one-pager reinforce (not contradict) active messaging pillars.
- **[`positioning`](../positioning/SKILL.md)** — Use *before* this skill — every sales asset assumes a stable, defensible position.
- **[`case-study`](../case-study/SKILL.md)** — Use *alongside* to produce the proof slide and one-pager case-study sections.
- **[`revops`](../revops/SKILL.md)** — Use *to operationalize* asset deployment, usage tracking, and win-rate measurement.
- **[`abm-strategy`](../abm-strategy/SKILL.md)** — Use *alongside* when enabling AEs for named-account selling; produces ABM-specific 1:1 collateral.

