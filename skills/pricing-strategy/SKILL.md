---
name: pricing-strategy
description: Design pricing page, packaging, and pricing strategy. Covers tiering, anchoring, feature bundling, pricing psychology, monetization models, A/B testing. Triggers - pricing page, pricing strategy, pricing tiers, packaging, pricing optimization, monetization.
metadata:
  version: 1.0.0
---

# Pricing Strategy & Optimization

You are a SaaS pricing strategist. Your goal is to design pricing that maximizes revenue while remaining competitive and easy to understand.

---

## Pricing Psychology Principles

### 1. Anchoring

**Principle:** First number presented sets reference point for all subsequent numbers

**Application:**
- Show highest-tier price first (Enterprise $999 → Pro $99 → Starter $29)
- Makes mid-tier feel like "middle option" (not expensive)

**Example:**
```
Enterprise: $999/mo → Pro: $99/mo → Starter: $29/mo
```
User sees $99 as reasonable compared to $999 anchor.

---

### 2. Decoy Pricing (Asymmetric Dominance)

**Principle:** Add a decoy option to make target tier more attractive

**Example:**
- **Starter:** $29/mo (limited features)
- **Pro:** $79/mo (all features) ← TARGET
- **Pro+:** $89/mo (all features + minor bonus) ← DECOY
- **Enterprise:** $299/mo (custom)

**Why it works:** Pro+ makes Pro look like great value (only $10 less for almost same features)

**Use sparingly:** Can backfire if too obvious

---

### 3. Charm Pricing

**Principle:** $99 feels significantly cheaper than $100 (left-digit effect)

**Examples:**
- $99 vs $100 (perceived ~15% cheaper)
- $49 vs $50
- $9.99 vs $10

**When to use:**
- B2C, low-price products ($9.99, $49, $99)

**When NOT to use:**
- Enterprise pricing ($10,000 vs $9,999 — looks cheap)
- Luxury/premium positioning (round numbers = prestige)

---

### 4. Annual Discount

**Principle:** Incentivize annual commitment with discount

**Framing options:**
- **Discount framing:** "Save 20% with annual billing"
- **Free months framing:** "Get 2 months free" (often converts better)
- **Daily cost framing:** "$99/month = just $3.30/day"

**Standard discount:** 15-25% off (2-3 months free)

**Example:**
```
Monthly: $99/month ($1,188/year)
Annual: $948/year (Save $240 — 20% off)
```

---

### 5. Value-Based Pricing (Not Cost-Plus)

**Cost-plus pricing (bad):**
- Cost to deliver: $10 → Add margin: 50% → Price: $15

**Value-based pricing (good):**
- Customer value: Saves $10k/year → Charge: $1k/year (10x ROI)

**How to price by value:**
1. Calculate customer ROI (time saved, revenue gained, cost reduced)
2. Price at 10-20% of value delivered
3. Justify with ROI calculator

---

## Pricing Tier Design

### How Many Tiers?

**3-4 tiers is optimal** (Paradox of Choice)

**Too few (1-2 tiers):**
- Limits revenue potential
- No upsell path

**Too many (5+ tiers):**
- Analysis paralysis (users confused)
- Hard to differentiate

**Best practice:** Free or Starter → Pro → Enterprise

---

### Tier Naming

**Good tier names:**
- **Descriptive:** Starter, Professional, Enterprise
- **Benefit-oriented:** Growth, Scale, Unlimited
- **Size-based:** Solo, Team, Business

**Bad tier names:**
- **Vague:** Bronze, Silver, Gold (what do they mean?)
- **Cute but unclear:** Hobbyist, Rockstar, Legend

---

### Tier Structure Framework

**Tier 1: Free or Starter (Entry Point)**
- **Price:** Free or $10-$29/month
- **Purpose:** Acquire users, product-led growth
- **Limits:** Usage caps (10 projects, 1 GB storage, 100 emails/month)
- **Features:** Core features only (no advanced features)
- **Target:** Individuals, hobbyists, tire-kickers

---

**Tier 2: Professional / Pro (Most Popular)**
- **Price:** $49-$199/month
- **Purpose:** Target tier (where most revenue comes from)
- **Limits:** Higher caps or unlimited
- **Features:** All core features + most advanced features
- **Target:** Small businesses, power users, teams of 5-20

**Key:** This should be the "obvious choice" (highlight with badge, design)

---

**Tier 3: Business / Team (Mid-Market)**
- **Price:** $199-$499/month
- **Purpose:** Team/company plans
- **Limits:** Unlimited or very high
- **Features:** All Pro features + collaboration, admin controls
- **Target:** Mid-market companies, teams of 20-100

---

**Tier 4: Enterprise (Custom Pricing)**
- **Price:** $500+/month or "Contact Sales"
- **Purpose:** Large contracts, custom needs
- **Limits:** Unlimited everything
- **Features:** SSO, SAML, dedicated support, SLA, custom integrations
- **Target:** Large enterprises, 100+ users

---

## Feature Bundling Strategy

### How to Bundle Features Across Tiers

**Rule 1: Most Valuable Features in Pro Tier**
- Don't hold back core value for Enterprise
- Pro should feel complete (not crippled)

**Rule 2: Enterprise Features = Scale & Control**
- Not better features, but features large orgs need:
  - SSO / SAML (security requirement)
  - Dedicated account manager
  - SLA guarantees
  - Custom integrations
  - Audit logs, compliance reports

**Rule 3: Avoid Feature Bloat in Top Tier**
- Don't add features just to justify price
- Quality > quantity

---

### Feature Differentiation Matrix

| Feature | Free/Starter | Pro | Business | Enterprise |
|---------|--------------|-----|----------|------------|
| Core features | ✅ Limited | ✅ Full | ✅ Full | ✅ Full |
| Usage limits | 10 projects | 100 projects | Unlimited | Unlimited |
| Advanced analytics | ❌ | ✅ | ✅ | ✅ |
| Team collaboration | ❌ | ✅ (5 users) | ✅ (50 users) | ✅ Unlimited |
| Integrations | 2 | 10 | 25 | Custom |
| Support | Email (48h) | Email (24h) | Priority (4h) | Dedicated CSM |
| SSO / SAML | ❌ | ❌ | ❌ | ✅ |
| Custom contract | ❌ | ❌ | ❌ | ✅ |

---

## Pricing Page Design

### Layout Best Practices

**1. Visual Hierarchy**
- **Highlight Pro tier:** Border, background color, "Most Popular" badge
- **Bigger card:** Make Pro tier slightly larger or elevated
- **Color contrast:** Use brand color for Pro CTA button

---

**2. Feature Comparison Table**
- **Group features by category:** Core, Advanced, Support, Security
- **Use checkmarks:** ✅ (included) ❌ (not included) — (not applicable)
- **Tooltips for complex features:** Hover to explain what it does
- **Numeric limits clearly stated:** "Up to 10 users" not "Limited users"

---

**3. Social Proof**
- **Customer logos:** Near pricing table (builds trust)
- **Testimonials:** "We 3x'd revenue after upgrading to Pro" — [Customer Name, Company]
- **User count:** "Join 10,000+ teams on the Pro plan"

---

**4. Call-to-Action (CTA) Buttons**

**Button copy by tier:**
- **Free/Starter:** "Get Started Free"
- **Pro:** "Start Free Trial" or "Upgrade Now"
- **Enterprise:** "Contact Sales" or "Book a Demo"

**Why "Start Free Trial" converts better than "Buy Now":**
- Removes perceived risk
- Clarifies offer (trial = no payment yet)

---

**5. FAQ Section (Address Objections)**

**Common questions to include:**
- Can I change plans later?
- What's your refund policy?
- Do you offer discounts for nonprofits/education?
- What payment methods do you accept?
- Is there a setup fee?

---

**6. Annual vs. Monthly Toggle**

**Best practice:** Default to annual (with discount visible)

**Example:**
```
[Toggle: Monthly | Annual (Save 20%)]
```

**Why default to annual:**
- Higher LTV (lifetime value)
- Lower churn (commitment)
- Cashflow benefit (upfront payment)

---

### Mobile Optimization

**Desktop:** Show full table side-by-side

**Mobile alternatives:**
- **Accordion:** Expand/collapse each tier
- **Tabs:** Switch between tiers
- **Vertical cards:** Stack tiers vertically
- **Sticky CTA:** Button always visible at bottom

---

## Monetization Models

### 1. Per-User (Seat-Based) Pricing

**Example:** $10/user/month

**Best for:**
- Collaboration tools (Slack, Notion)
- Team productivity software

**Pros:**
- Revenue scales with customer growth
- Easy to understand

**Cons:**
- Discourages adding users (barrier to growth)
- "Seat-sharing" workarounds (teams share one login)

---

### 2. Usage-Based Pricing

**Example:** $0.01 per email sent, $0.10 per API call

**Best for:**
- Infrastructure/API products (Twilio, SendGrid, AWS)
- High variance in usage

**Pros:**
- Fair (pay for what you use)
- No limits (scales infinitely)

**Cons:**
- Unpredictable revenue
- Billing complexity

---

### 3. Tiered Usage Pricing

**Example:**
- Starter: Up to 1,000 emails/month ($29)
- Pro: Up to 10,000 emails/month ($99)
- Business: Unlimited emails ($299)

**Best for:**
- Usage varies but tiers make sense (most customers fit into buckets)

**Pros:**
- Predictable revenue
- Easy to understand

**Cons:**
- Artificial limits can frustrate users

---

### 4. Feature-Based Pricing

**Example:**
- Starter: Core features only
- Pro: Core + advanced analytics
- Enterprise: Pro + SSO

**Best for:**
- Products with clear feature tiers
- Different customer segments (SMB vs Enterprise)

**Pros:**
- Clear differentiation
- Upsell path (need more features? Upgrade)

**Cons:**
- Can feel like features are held hostage

---

### 5. Freemium Model

**Example:**
- Free plan (limited features/usage)
- Paid plans unlock more

**Best for:**
- PLG (product-led growth) companies
- Viral/network-effect products (Slack, Dropbox)

**Pros:**
- Large user base (good for word-of-mouth)
- Try before you buy

**Cons:**
- Low conversion rate (1-5% free → paid)
- Support costs for free users

---

## Pricing Testing & Optimization

### A/B Test Ideas

**Test 1: Pricing Tier Order**
- **A:** Show low → high (Starter, Pro, Enterprise)
- **B:** Show high → low (Enterprise, Pro, Starter)
- **Metric:** Pro plan selection rate
- **Hypothesis:** High-to-low anchors users toward mid-tier

---

**Test 2: Annual Discount Framing**
- **A:** "Save 20% with annual billing"
- **B:** "Get 2 months free with annual plan"
- **Metric:** Annual plan selection rate
- **Hypothesis:** "Free months" framing converts higher (gain > discount)

---

**Test 3: Decoy Tier**
- **A:** 3 tiers (Starter, Pro, Enterprise)
- **B:** 4 tiers (Starter, Pro, Pro+, Enterprise) — Pro+ is decoy
- **Metric:** Pro plan selection rate
- **Hypothesis:** Decoy makes Pro look better

---

**Test 4: CTA Copy**
- **A:** "Buy Now"
- **B:** "Start Free Trial"
- **Metric:** Click-through rate
- **Hypothesis:** "Free Trial" removes perceived risk

---

**Test 5: Social Proof**
- **A:** No social proof on pricing page
- **B:** Customer logos + "Join 10,000+ teams"
- **Metric:** Upgrade conversion rate
- **Hypothesis:** Social proof increases trust → higher conversion

---

## Competitive Pricing Analysis

### How to Price Against Competitors

**Step 1: Map Competitor Pricing**

| Competitor | Entry Tier | Mid Tier | Top Tier |
|------------|------------|----------|----------|
| Competitor A | Free | $49/mo | $199/mo |
| Competitor B | $29/mo | $99/mo | Custom |
| Competitor C | $19/mo | $79/mo | $299/mo |

**Step 2: Identify Positioning**

**Price Premium (Charge More):**
- If you have better features, brand, or service
- Justify with ROI, quality, or support

**Price Parity (Match Competitor):**
- If features are similar
- Compete on other factors (UX, support, integrations)

**Price Discount (Undercut):**
- If you're new entrant or challenger brand
- Risk: Perceived as lower quality

---

**Step 3: Differentiate on Value (Not Just Price)**

**Don't compete on price alone:**
- "We're cheaper" → Race to the bottom
- "We deliver 10x ROI" → Value-based positioning

---

## Pricing Page Copy

### Headline

**Bad:** "Our Pricing"
**Good:** "Choose the Plan That Fits Your Team"

---

### Subheadline

**Bad:** "Flexible pricing options"
**Good:** "Start free, upgrade anytime — no credit card required"

---

### Tier Descriptions

**Bad (Generic):**
> "Pro Plan — $99/month — All features"

**Good (Benefit-Focused):**
> "Pro Plan — $99/month
> Perfect for growing teams. Get unlimited projects, advanced analytics, and priority support."

---

### CTA Copy

**Bad:** "Buy" or "Submit"
**Good:** "Start 14-Day Free Trial" or "Upgrade to Pro"

---

## Output Format Template

```markdown
# Pricing Strategy Recommendation: [Company Name]

## Recommended Tiers

### Tier 1: Starter
- **Price:** $29/month ($290/year — save 17%)
- **Target:** Solo users, freelancers
- **Limits:** 10 projects, 1 GB storage, email support (48h)
- **Features:** Core features only

### Tier 2: Professional (Recommended) ⭐
- **Price:** $99/month ($948/year — save 20%)
- **Target:** Small teams (5-20 people)
- **Limits:** 100 projects, 100 GB storage, priority support (24h)
- **Features:** All core + advanced analytics, integrations

### Tier 3: Business
- **Price:** $299/month ($2,868/year — save 20%)
- **Target:** Mid-market companies (20-100 people)
- **Limits:** Unlimited projects, 1 TB storage, priority support (4h)
- **Features:** All Pro + team admin, SSO

### Tier 4: Enterprise
- **Price:** Custom (starting at $1,000/month)
- **Target:** Large enterprises (100+ people)
- **Limits:** Unlimited everything
- **Features:** All Business + dedicated CSM, SLA, custom integrations

---

## Pricing Psychology Applied

1. **Anchoring:** Tiers ordered high → low on page (Enterprise first)
2. **Decoy pricing:** Not used (3 core tiers is cleaner)
3. **Charm pricing:** $99 (not $100), $29 (not $30)
4. **Annual discount:** 20% off (2.4 months free) — framed as "Save $240/year"

---

## Feature Comparison Table

[See detailed feature matrix above]

---

## Competitive Positioning

**vs. Competitor A:**
- **Price:** Competitive ($99 vs their $89)
- **Differentiation:** Better integrations, faster support

**vs. Competitor B:**
- **Price:** Premium ($99 vs their $79)
- **Justification:** More features, proven ROI (10x faster deployment)

---

## A/B Test Plan

**Test 1:** Annual discount framing (month 1)
**Test 2:** Tier order (month 2)
**Test 3:** CTA copy (month 3)

---

## Expected Impact

**Current conversion rate (free → paid):** [X%]
**Estimated improvement:** +[Y%]
**New conversion rate:** [X + Y%]

**Based on:** [Competitive analysis, pricing psychology, A/B test benchmarks]
```

---

## Quality Checklist

Before launching pricing:

- [ ] 3-4 tiers (not too few, not too many)
- [ ] Clear tier names (descriptive, benefit-oriented)
- [ ] Feature differentiation is obvious (not subtle)
- [ ] Pro tier is highlighted ("Most Popular" badge, border, color)
- [ ] Annual discount is visible (toggle or separate table)
- [ ] Social proof included (logos, testimonials, user count)
- [ ] FAQ addresses common objections
- [ ] CTAs are benefit-clear ("Start Free Trial" not "Buy")
- [ ] Mobile-optimized (accordion, tabs, or vertical cards)
- [ ] Competitive pricing analyzed (not just copied)
- [ ] A/B test plan ready (what to test first)
