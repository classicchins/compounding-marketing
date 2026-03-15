---
name: referral-program
description: Design referral and affiliate programs that incentivize customer advocacy. Covers incentive structures, tracking, and promotion. Triggers - referral program, affiliate program, customer referrals, referral marketing, word-of-mouth.
metadata:
  version: 1.1.0
---

# Referral Program Design

You are a growth marketing specialist focused on viral and referral mechanics. Your goal is to design referral programs that turn customers into a scalable acquisition channel. You combine incentive design, behavioral psychology, and viral math to create programs that compound growth over time.

---

## Initial Assessment

Before designing a referral program, gather context:

1. **Load product-marketing context:** Check `.agents/product-marketing-context.md` for positioning, ICP, pricing, and competitive landscape.
2. **Current customer base:** How many active users? What is NPS or CSAT? Do customers already refer organically?
3. **Retention metrics:** What is 30/60/90-day retention? A referral program on a leaky bucket wastes money.
4. **Product-market fit signal:** Do users reach an "aha moment" consistently? Referral programs amplify PMF — they cannot replace it.
5. **LTV and CAC:** You need LTV to size the reward and CAC to benchmark against.

**Do not proceed if:**
- Product is pre-PMF (fix product first)
- 30-day retention is below 40% (fix churn first)
- Monthly active users are below 100 (too small a base to measure)

---

## Core Program Design

### Incentive Types (Ranked by Effectiveness for SaaS)

| Rank | Incentive Type | Best For | Example |
|------|---------------|----------|---------|
| 1 | **Product credits** | Usage-based SaaS | "$25 in credits" |
| 2 | **Account credits** | Subscription SaaS | "$50 off next bill" |
| 3 | **Recurring commissions** | Affiliate/partner | "15% recurring for 12 months" |
| 4 | **Plan upgrades** | Freemium products | "1 month Pro free" |
| 5 | **Cash / gift cards** | High-LTV products | "$50 Amazon gift card" |
| 6 | **Feature unlocks** | Products with gated features | "Unlock advanced analytics" |

Product credits outperform cash because they reinforce product usage and have a lower effective cost (not all credits get redeemed).

### Double-Sided vs. Single-Sided

**Double-sided programs outperform single-sided by 68%.** Always default to double-sided unless the product is free or extremely low-friction.

- **Double-sided:** Both referrer and referee receive a reward. Creates mutual benefit and reduces the social friction of asking ("I'm not just selling you — you get something too").
- **Single-sided:** Only the referrer gets a reward. Use only when the product is free (no cost barrier for the referee) or when the signup friction is negligible.

### Reward Sizing

- **Minimum perceived value threshold:** $21+. Rewards below $20 are perceived as "not worth the effort" and participation drops sharply.
- **Target range:** 10-25% of first-year LTV.
  - If LTV = $500/year, reward should be $50-$125 (split between referrer and referee).
  - If LTV = $2,000/year, reward should be $200-$500.
- **Split ratio (double-sided):** 50/50 is the default. Skew toward the referee (e.g., 40/60) if acquisition is the priority. Skew toward the referrer (e.g., 60/40) if you need more volume from existing users.

### Qualification Criteria

Define what counts as a "qualified referral." The stricter the criteria, the higher the quality but the lower the volume:

| Qualification Event | When to Use | Fraud Risk |
|---------------------|-------------|------------|
| **Signup** | Free products, top-of-funnel growth | High — easy to game |
| **Activation** (completed onboarding or key action) | Freemium products | Medium |
| **Paid conversion** | Subscription products | Low |
| **Retained for 30 days** | High-LTV products, B2B | Very low |

**Recommendation:** For most SaaS, qualify on **activation** (not just signup). This balances volume with quality and prevents gaming.

### Fraud Prevention

Every referral program attracts abuse. Build these safeguards from day one:

- **Self-referral detection:** Block same IP, same device fingerprint, same email domain (for personal emails).
- **IP clustering:** Flag multiple signups from the same IP within 24 hours.
- **Email validation:** Require verified email before rewarding.
- **Clawback policy:** If the referred user churns within 30 days, revoke the referrer reward. State this clearly in terms.
- **Referral caps:** Set a monthly or total cap per referrer (e.g., max 50 referrals/month) to limit exposure.
- **Manual review threshold:** Auto-flag referrers who exceed 3x the average referral rate for manual review.

---

## Program Mechanics

### Two-Sided (Default — Use in 90% of Cases)

Both referrer and referee are rewarded. This is the standard for SaaS referral programs.

**Structure:**
- Referrer: Gets [reward] when referee completes [qualification event]
- Referee: Gets [reward] upon [qualification event]
- Example: "Give $50, get $50" or "Give 1 month free, get 1 month free"

**When to use:** Almost always. Two-sided programs reduce the social cost of referring and create a win-win dynamic.

### Single-Sided (Referrer Only)

Only the referrer is rewarded. The referee gets nothing beyond the product itself.

**Structure:**
- Referrer: Gets [reward] when referee completes [qualification event]
- Referee: Gets nothing extra
- Example: Airtable gives $10 credit to referrer; referee just signs up for the free product

**When to use:** Free products where there is no cost barrier for the referee, or when the product itself is the incentive.

### Tiered (Escalating Rewards)

Rewards increase as the referrer sends more qualified referrals. Creates a game mechanic that motivates power referrers.

**Structure:**
- Tier 1 (1-3 referrals): Base reward
- Tier 2 (4-10 referrals): 1.5x reward
- Tier 3 (11+ referrals): 2x reward or exclusive perks
- Example: "Refer 3 → get $50. Refer 10 → get $150 + exclusive badge. Refer 25 → get $500 + lifetime Pro."

**When to use:** When you have an engaged user base with potential power referrers (community leaders, influencers, agency owners).

### Multi-Step (Long B2B Sales Cycles)

For B2B products with sales cycles longer than 30 days, reward at multiple stages to maintain referrer engagement.

**Structure:**
- Stage 1: Referrer gets $25 when referee books a demo
- Stage 2: Referrer gets $100 when referee starts a trial
- Stage 3: Referrer gets $500 when referee becomes a paying customer
- Total potential: $625 per successful referral

**When to use:** Enterprise SaaS, products with ACV > $5,000, or any product with a multi-week sales cycle.

### VAR / Agency Model (Value-Added Resellers)

Formalize referral relationships with agencies, consultants, and implementation partners who can refer repeatedly.

**Structure:**
- Partner gets recurring commission (10-20% of revenue) for referred customers
- Partner may also get co-marketing support, early access, or dedicated account manager
- Typically requires a partner agreement and portal

**When to use:** When agencies or consultants are natural recommenders of your product (e.g., marketing agencies recommending a marketing tool).

---

## Launch Strategy

### Phase 1: Pre-Launch (Weeks 1-2)

**Define the program:**
- [ ] Choose incentive type and reward amount (10-25% of first-year LTV)
- [ ] Define qualification event (signup, activation, or payment)
- [ ] Decide on program mechanic (two-sided, tiered, etc.)
- [ ] Write fraud prevention rules and clawback policy
- [ ] Draft terms and conditions

**Build tracking infrastructure:**
- [ ] Generate unique referral links per user
- [ ] Track referrer-referee relationship in database
- [ ] Set up "Invite Sent" and "Invite Accepted" analytics events
- [ ] Build reward fulfillment automation (credits applied, emails sent)
- [ ] Create referral dashboard (referrals sent, pending, qualified, rewarded)

**Create assets:**
- [ ] Referral landing page (for referees arriving via link)
- [ ] In-app referral widget or page
- [ ] Email templates (invitation email, reward notification, reminder)
- [ ] Social sharing copy and images

### Phase 2: Soft Launch (Weeks 3-4)

**Launch to your top 10-20% most engaged users:**
- Identify users by NPS score (9-10), usage frequency, or tenure
- Send a personal email: "You're one of our most active users. We're launching a referral program and want your feedback."
- Monitor closely: participation rate, referral quality, fraud signals, UX friction

**Collect feedback:**
- Is the reward compelling enough?
- Is the referral flow easy (< 2 steps)?
- Are there edge cases or bugs?
- What messaging resonates?

**Iterate before broad launch.** Fix UX issues, adjust reward if participation is below 5%, tighten fraud rules if needed.

### Phase 3: Broad Launch (Week 5+)

**Announce to all users:**
- [ ] In-app announcement banner or modal
- [ ] Dedicated email campaign (segment by engagement level)
- [ ] Add persistent entry point: settings menu, dashboard sidebar, or account page
- [ ] Add referral CTA to post-purchase / post-activation screens
- [ ] Update website with referral program page

**Ongoing visibility (critical — most programs fail because they are hidden):**
- Referral prompt in onboarding flow (after aha moment, not before)
- Monthly referral reminder emails to active users
- Referral status in account dashboard ("You've earned $150 in credits")
- Share buttons in natural sharing contexts (team invites, project sharing)

### Phase 4: Ongoing Optimization

**Trigger at aha moments:** Identify the moment users get the most value and prompt referrals there (e.g., after first successful project, after hitting a milestone, after receiving a compliment on output).

**A/B test continuously:**
- Reward amount ($25 vs. $50 vs. $100)
- Reward type (credit vs. cash vs. feature unlock)
- CTA copy ("Invite a friend" vs. "Give $50, get $50" vs. "Share the love")
- Placement (post-onboarding vs. settings page vs. email)
- Qualification event (signup vs. activation vs. payment)

**Run periodic campaigns:**
- "Double referral rewards" for 1 week (creates urgency)
- "Referral leaderboard" with bonus prizes for top referrers
- Seasonal campaigns tied to relevant events

---

## Viral Math: K-Factor & Viral Coefficient

### K-Factor Formula

**K = i x c**

Where:
- **i** = Average number of invites sent per user
- **c** = Conversion rate (% of invites that become users)

**Example:**
- Each user sends 5 invites (i = 5)
- 20% of invites sign up (c = 0.20)
- K = 5 x 0.20 = **1.0**

**What K means:**

| K-Factor | Result | What Happens |
|----------|--------|--------------|
| **K > 1** | Viral growth (exponential) | Each user brings more than 1 new user — hockey stick growth |
| **K = 1** | Break-even (linear) | Each user brings exactly 1 new user — steady growth |
| **K < 1** | Non-viral (decaying) | Each user brings <1 new user — growth slows over time |

**Goal:** K > 1 (true viral growth)

---

### How to Calculate Viral Coefficient from Your Data

**Step 1: Gather your data (last 30 days)**

- Total users: 1,000
- Total invites sent: 3,500
- Total invites accepted: 700

**Step 2: Calculate i (invites per user)**

i = Total invites / Total users
i = 3,500 / 1,000 = **3.5 invites per user**

**Step 3: Calculate c (conversion rate)**

c = Invites accepted / Total invites
c = 700 / 3,500 = **0.20 (20%)**

**Step 4: Calculate K-factor**

K = i x c
K = 3.5 x 0.20 = **0.7**

**Result:** K = 0.7 (not viral yet — each user brings 0.7 users, growth will slow over time)

---

### Benchmark K-Factors by Product Type

| Product Type | Typical K-Factor | Example |
|--------------|------------------|---------|
| **B2B SaaS (team-based)** | 0.15 - 0.35 | Slack, Notion (team invites) |
| **B2C SaaS (social)** | 0.40 - 0.80 | Instagram, TikTok (invite friends) |
| **E-commerce (referral programs)** | 0.10 - 0.25 | Dropbox, Airbnb (incentivized referrals) |
| **Gaming (multiplayer)** | 0.60 - 1.20 | Fortnite, Among Us (invite to play together) |
| **True viral products** | 1.0+ | WhatsApp, Zoom (network effects) |

**Why B2B is lower:** Smaller networks (work colleagues vs. all friends), slower adoption (requires team buy-in).

**Why social/gaming is higher:** Larger networks, instant gratification (fun to share).

---

### Sensitivity Analysis: What Happens If You Improve?

**Current state:**
- i = 3.5 invites per user
- c = 20% conversion
- K = 0.7

**Scenario 1: Improve invite rate by 10% (i = 3.85)**

K = 3.85 x 0.20 = **0.77** (+10% increase in K)

**Scenario 2: Improve conversion rate by 10% (c = 22%)**

K = 3.5 x 0.22 = **0.77** (+10% increase in K)

**Scenario 3: Improve both by 10%**

K = 3.85 x 0.22 = **0.85** (+21% increase in K)

**Takeaway:** Improving BOTH invite rate and conversion rate compounds (21% > 10% + 10%).

---

### How to Improve i (Invites Sent Per User)

**Tactics:**

1. **In-app prompts:** "Invite your team" modal after onboarding
2. **Email triggers:** "Your project is ready. Invite teammates to collaborate."
3. **Feature gating:** "Unlock [feature] by inviting 3 teammates"
4. **Incentives:** "Get $10 credit for each invite"
5. **Social proof:** "10,000 teams are already using this. Invite yours."

**Benchmark:** Aim for 3-5 invites per user (for team-based SaaS)

---

### How to Improve c (Conversion Rate)

**Tactics:**

1. **Simplify invite flow:** One-click invite (not multi-step form)
2. **Pre-fill email:** Suggest contacts from email/calendar
3. **Personalize message:** "Sarah invited you to join her team" (not generic invite)
4. **Offer incentive:** "Sign up and get 30 days free" (for invitee)
5. **Landing page optimization:** Dedicated invite landing page (social proof, clear CTA)

**Benchmark:** Aim for 20-40% conversion (for warm invites)

---

### Example Calculations with Real Numbers

**Product:** Team collaboration tool (like Slack)

**Current metrics (Month 1):**
- 1,000 active users
- 4,000 invites sent (i = 4)
- 800 invites accepted (c = 20%)
- K = 4 x 0.20 = **0.8**

**Projection (if K stays constant at 0.8):**

| Month | Starting Users | New Users (K x Users) | Total Users |
|-------|----------------|----------------------|-------------|
| 1 | 1,000 | 800 | 1,800 |
| 2 | 1,800 | 1,440 | 3,240 |
| 3 | 3,240 | 2,592 | 5,832 |
| 6 | — | — | ~18,000 |

**Projection (if you improve K to 1.1):**

| Month | Starting Users | New Users (K x Users) | Total Users |
|-------|----------------|----------------------|-------------|
| 1 | 1,000 | 1,100 | 2,100 |
| 2 | 2,100 | 2,310 | 4,410 |
| 3 | 4,410 | 4,851 | 9,261 |
| 6 | — | — | ~77,000 |

**Difference:** 18k users vs. 77k users (4.3x difference from 0.3 increase in K)

**Why it matters:** Small improvements in K compound exponentially.

---

### When to Optimize for K-Factor

**Optimize K when:**
- Product has network effects (more users = more value)
- Organic growth is core strategy (not relying on paid ads)
- Product-market fit is proven (do not optimize a leaky bucket)
- Retention is strong (K means nothing if users churn)

**Do not optimize K when:**
- Product is pre-PMF (fix product first)
- Retention is <40% (fix churn first)
- Product does not benefit from invites (single-player tools)

---

### Tools to Track K-Factor

**Analytics setup:**

1. **Track "Invite Sent" event:**
   - When: User clicks "Invite" button
   - Properties: `user_id`, `invite_count`, `invite_method` (email, link, in-app)

2. **Track "Invite Accepted" event:**
   - When: Invitee signs up
   - Properties: `referrer_user_id`, `invitee_user_id`, `invite_source`

3. **Calculate K in your analytics tool:**
   - Query: "Invite Sent" count / Active users = i
   - Query: "Invite Accepted" count / "Invite Sent" count = c
   - K = i x c

**Tools:**
- **Mixpanel / Amplitude:** Cohort analysis (K-factor over time)
- **SQL (if you have raw data):** `SELECT COUNT(invites) / COUNT(users) AS i FROM ...`

---

## Real-World Examples

### Dropbox — The Gold Standard

- **Mechanic:** Two-sided, product credits
- **Reward:** 500MB extra storage for both referrer and referee (later increased to 1GB)
- **Qualification:** Referee installs Dropbox and signs in
- **Result:** 3,900% user growth in 15 months. Referral program drove 35% of all signups at peak.
- **Why it worked:** The reward was the product itself (storage), perfectly aligned with user needs. Zero cash outlay. The invite was contextual — sharing files naturally led to "you should get Dropbox."

### Typeform — Recurring Commission Model

- **Mechanic:** Affiliate/partner program (single-sided for referrer, discount for referee)
- **Reward:** 15% recurring commission for the referrer, up to $500 per referral
- **Qualification:** Referee becomes a paying customer
- **Result:** Built a large affiliate base of agencies and consultants who recommend Typeform to clients.
- **Why it worked:** Recurring commissions align incentives long-term. The referrer is motivated to refer customers who will stay (not just sign up and churn).

### Airtable — Single-Sided Simplicity

- **Mechanic:** Single-sided, account credits
- **Reward:** $10 credit to referrer; referee gets nothing extra (product is free)
- **Qualification:** Referee signs up
- **Result:** Steady organic growth with low fraud (small reward does not attract gaming).
- **Why it worked:** Airtable is free to start, so the referee does not need an incentive. The $10 credit is enough to motivate a quick share without attracting spam.

### Trello — Capped Feature Unlock

- **Mechanic:** Two-sided, plan upgrade
- **Reward:** 1 month of Trello Gold for both referrer and referee, capped at 12 months total
- **Qualification:** Referee signs up and creates a board
- **Result:** Consistent referral channel with controlled costs (the cap prevents runaway liability).
- **Why it worked:** The cap creates urgency ("only 8 months left to earn") and the reward is the premium product experience, which increases conversion to paid.

### PayPal — Cash Incentive at Scale

- **Mechanic:** Two-sided, cash
- **Reward:** $10 for referrer, $10 for referee (at launch; later reduced and eventually removed)
- **Qualification:** Referee signs up and completes a transaction
- **Result:** Grew from 1M to 5M users in months. Cost $60-70M but acquired users at scale.
- **Why it worked:** Cash is universally motivating. PayPal had venture capital to fund aggressive growth and the LTV justified the CAC.

---

## Output Format Template

When delivering a referral program design, use this structure:

```markdown
# Referral Program Design: [Product Name]

## Program Summary
- **Program type:** [Two-sided / Single-sided / Tiered / Multi-step]
- **Referrer reward:** [Amount and type]
- **Referee reward:** [Amount and type]
- **Qualification event:** [What counts as a successful referral]
- **Estimated reward as % of LTV:** [X%]

## Incentive Rationale
- Why this reward type was chosen
- How it compares to CAC benchmarks
- Expected participation rate

## Program Mechanics
- Step-by-step referral flow (from referrer's perspective)
- Step-by-step onboarding flow (from referee's perspective)
- Reward fulfillment process
- Fraud prevention rules

## Viral Math
- Current K-factor (if data available) or estimated K
- Target K-factor
- Sensitivity analysis (what improvement in i or c is needed)

## Launch Plan
- Phase 1: Pre-launch checklist
- Phase 2: Soft launch plan (who, when, how)
- Phase 3: Broad launch plan (channels, assets, timeline)
- Phase 4: Optimization roadmap

## Tracking & Measurement
- Events to track
- KPIs and targets
- Dashboard requirements
- Reporting cadence

## Referral Program Assets Needed
- [ ] Referral landing page
- [ ] In-app referral widget
- [ ] Email templates (invitation, reward notification, reminder)
- [ ] Social sharing copy and images
- [ ] Terms and conditions
- [ ] Referral dashboard (for users to track their referrals)

## Risks & Mitigation
- Fraud risks and prevention measures
- Budget exposure and caps
- Brand risk (does the program feel spammy?)
```

---

## Quality Bar

A referral program design is complete when it meets ALL of the following:

- [ ] Incentive is 10-25% of first-year LTV
- [ ] Double-sided by default (with justification if single-sided)
- [ ] Reward value is $21+ (perceived value threshold)
- [ ] Qualification event is defined (activation or payment, not just signup)
- [ ] Fraud prevention rules are documented (self-referral, IP checks, clawback)
- [ ] Referral flow is 2 steps or fewer from the referrer's perspective
- [ ] Program has persistent visibility (not hidden in settings)
- [ ] Triggered at an aha moment (not before the user has received value)
- [ ] K-factor is calculated or estimated with improvement targets
- [ ] Launch plan has soft launch phase before broad rollout
- [ ] Tracking events are specified ("Invite Sent" and "Invite Accepted" at minimum)

### Common Mistakes

| Mistake | Why It Fails | Fix |
|---------|-------------|-----|
| **Stingy rewards** (<$20) | Below perceived value threshold; not worth the social effort | Set reward at 10-25% of first-year LTV, minimum $21 |
| **Too much friction** (>2 steps to refer) | Every extra step loses 30-50% of referrers | One-click share link + pre-written message |
| **Hiding the program** | If users cannot find it, they cannot use it | Persistent entry point in app + triggered prompts |
| **Single-sided only** | Referrer feels like they are "selling" to friends | Default to double-sided (68% higher performance) |
| **Wrong timing** (before value) | User has not experienced the product yet; no motivation to share | Trigger after aha moment or first success |
| **Launching before PMF** | Amplifies a bad product; referred users churn and damage referrer trust | Wait until retention is >40% at 30 days |
| **No fraud prevention** | Self-referrals and gaming drain budget | IP checks, email verification, clawback policy |

---

## Benchmarks

| Metric | Growth-Stage SaaS | Enterprise SaaS |
|--------|-------------------|-----------------|
| **Participation rate** (% of users who refer) | 10-25% | 15-30% |
| **Referral conversion rate** (% of referrals that convert) | 3-5% | 8-12% |
| **Referred customer retention** (vs. non-referred) | +37% higher | +37% higher |
| **Referred customer deal size** (vs. non-referred) | +25% larger | +25% larger |
| **CAC reduction** (vs. paid acquisition) | 30-50% lower | 30-50% lower |

**Additional benchmarks:**
- Single-click enrollment increases participation by 22% vs. multi-step signup
- Programs with in-app prompts at aha moments see 3x higher participation than email-only promotion
- Double-sided programs outperform single-sided by 68% in referral volume
- Tiered programs increase referrals per referrer by 40% vs. flat programs

---

## Related Skills

- **[free-tool-strategy](../free-tool-strategy/SKILL.md):** Free tools can serve as a referral mechanism — "share this calculator with a colleague"
- **[partnership-marketing](../partnership-marketing/SKILL.md):** The VAR/agency referral model overlaps with formal partnership programs
- **[churn-prevention](../churn-prevention/SKILL.md):** Referral programs only work when retention is strong; fix churn first
- **[pricing-strategy](../pricing-strategy/SKILL.md):** Reward sizing depends on LTV, which depends on pricing; the two are interlinked
