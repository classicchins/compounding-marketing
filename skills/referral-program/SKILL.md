---
name: referral-program
description: Design referral and affiliate programs that incentivize customer advocacy. Covers incentive structures, tracking, and promotion. Triggers - referral program, affiliate program, customer referrals, referral marketing, word-of-mouth.
metadata:
  version: 1.0.0
---

# Referral Program Design

Build referral programs that turn customers into advocates.

## Referral Models

**Two-Sided:**
- Referrer gets: [Reward]
- Referee gets: [Reward]
- Example: "$50 for you, $50 for them"

**One-Sided:**
- Only referrer rewarded
- Works if product is free or low-friction

**Tiered:**
- More referrals = better rewards
- "Refer 3, get X. Refer 10, get Y."

## Process

### Step 1: Define Incentive
**Options:**
- Cash/credit
- Free months
- Upgrades
- Swag/gifts

**Choose based on:**
- Customer LTV (can afford cash?)
- Product value (credit makes sense?)
- Brand (premium or scrappy?)

### Step 2: Set Rules
- Qualified referral = signed up + activated? Or paid?
- Fraud prevention (same IP, email domain)
- Reward limit per user

### Step 3: Build Tracking
- Unique referral links
- Track referrer + referee
- Automate reward delivery

### Step 4: Promote
- In-app prompt (after aha moment)
- Email campaigns
- Referral page on website

## Output
Referral program spec (incentives, rules, tracking, promotion plan).

---

## Viral Loop Calculations: K-Factor & Viral Coefficient

### K-Factor Formula

**K = i × c**

Where:
- **i** = Average number of invites sent per user
- **c** = Conversion rate (% of invites that become users)

**Example:**
- Each user sends 5 invites (i = 5)
- 20% of invites sign up (c = 0.20)
- K = 5 × 0.20 = **1.0**

**What K means:**

| K-Factor | Result | What Happens |
|----------|--------|--------------|
| **K > 1** | Viral growth (exponential) | Each user brings more than 1 new user → hockey stick growth |
| **K = 1** | Break-even (linear) | Each user brings exactly 1 new user → steady growth |
| **K < 1** | Non-viral (decaying) | Each user brings <1 new user → growth slows over time |

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

K = i × c  
K = 3.5 × 0.20 = **0.7**

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

K = 3.85 × 0.20 = **0.77** (+10% increase in K)

**Scenario 2: Improve conversion rate by 10% (c = 22%)**

K = 3.5 × 0.22 = **0.77** (+10% increase in K)

**Scenario 3: Improve both by 10%**

K = 3.85 × 0.22 = **0.85** (+21% increase in K)

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
- K = 4 × 0.20 = **0.8**

**Projection (if K stays constant):**

| Month | Starting Users | New Users (K × Users) | Total Users |
|-------|----------------|----------------------|-------------|
| 1 | 1,000 | 800 | 1,800 |
| 2 | 1,800 | 1,440 | 3,240 |
| 3 | 3,240 | 2,592 | 5,832 |
| 6 | — | — | ~18,000 |

**Projection (if you improve K to 1.1):**

| Month | Starting Users | New Users (K × Users) | Total Users |
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
- Product-market fit is proven (don't optimize a leaky bucket)
- Retention is strong (K means nothing if users churn)

**Don't optimize K when:**
- Product is pre-PMF (fix product first)
- Retention is <40% (fix churn first)
- Product doesn't benefit from invites (single-player tools)

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
   - K = i × c

**Tools:**
- **Mixpanel / Amplitude:** Cohort analysis (K-factor over time)
- **SQL (if you have raw data):** `SELECT COUNT(invites) / COUNT(users) AS i FROM ...`

---

## Quality Bar for Viral Loop Calculations

- **K-factor calculated:** Using real data (not assumptions)
- **Benchmarked:** Compared to industry standard for your product type
- **Sensitivity analysis done:** Modeled impact of 10%, 20%, 50% improvements in i and c
- **Tracking in place:** "Invite sent" and "invite accepted" events logged in analytics
- **Actionable:** Clear next steps to improve i or c (not just "make it more viral")

