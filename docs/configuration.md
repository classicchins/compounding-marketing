# Configuration Reference

Complete `.cm-context` field reference with examples for different business types.

## Overview

The `.cm-context` file is your marketing single source of truth. Skills read this file automatically to understand your product, market position, audience, and brand.

**Location:** Project root (`.cm-context`)  
**Format:** YAML  
**Purpose:** Give AI context once, use in every skill

## Field Reference

### `product`

Core product information.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `name` | string | Product name | Yes |
| `tagline` | string | One-line value prop (under 10 words) | Yes |
| `description` | string | What the product does (2-3 sentences) | Yes |
| `category` | string | Market category (e.g., "CRM", "Project Management") | Yes |
| `stage` | string | Company stage (MVP, Early Stage, Growth, Scale) | No |
| `pricing_model` | string | How you charge (Free, Freemium, Subscription, Usage-based) | Yes |
| `url` | string | Product website | No |

**Example:**

```yaml
product:
  name: "AuthorityMax"
  tagline: "Your LinkedIn ghostwriter that sounds like you"
  description: "AI-powered personal branding platform that helps founders build authority on LinkedIn through consistent, high-quality content that preserves their authentic voice."
  category: "AI Personal Branding Platform"
  stage: "Early Stage (Series A)"
  pricing_model: "Freemium ($0 → $49/mo Pro → $199/mo Enterprise)"
  url: "https://authoritymax.ai"
```

### `icp` (Ideal Customer Profile)

Who your best customers are.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `title` | string | Short ICP description (e.g., "Series A SaaS Founders") | Yes |
| `description` | string | Detailed ICP narrative (2-3 sentences) | Yes |
| `firmographics` | object | Company-level attributes (B2B) or demographics (B2C) | Yes |
| `pain_points` | list | Specific problems they face | Yes |
| `buying_triggers` | list | Events that cause them to seek a solution | No |
| `jobs_to_be_done` | list | What they're hiring your product to do | No |

**Example:**

```yaml
icp:
  title: "Series A-B SaaS Founders"
  description: "Technical founders who've reached product-market fit and need to build personal brand for recruiting, fundraising, and thought leadership. They understand LinkedIn's value but don't have time to post consistently."
  firmographics:
    company_size: "10-100 employees"
    revenue: "$1M-$10M ARR"
    industry: "B2B SaaS"
    geography: "North America, Europe"
    tech_stack: "Modern SaaS stack (Next.js, Postgres, Vercel)"
  pain_points:
    - "No time to write consistent LinkedIn content"
    - "Generic AI tools produce obvious AI slop"
    - "Hard to maintain authentic voice while scaling"
    - "Inconsistent posting kills momentum and engagement"
  buying_triggers:
    - "Preparing for Series B fundraise (need investor visibility)"
    - "Hiring senior talent (personal brand = recruiting advantage)"
    - "Entering new market (need category authority)"
  jobs_to_be_done:
    - "Build credibility with VCs and enterprise customers"
    - "Attract senior talent without expensive recruiters"
    - "Become a category thought leader"
```

### `positioning`

Your market position (April Dunford framework).

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `competitive_alternatives` | list | What customers would use if you didn't exist | Yes |
| `unique_attributes` | list | What you have that alternatives don't | Yes |
| `value_delivered` | list | What each attribute enables for customers | Yes |
| `market_category` | string | The category you compete in | Yes |

**Example:**

```yaml
positioning:
  competitive_alternatives:
    - "Hiring a LinkedIn ghostwriter ($5k-$10k/mo, slow, hit-or-miss quality)"
    - "Generic AI tools (ChatGPT, Jasper — fast but obviously AI)"
    - "DIY manual posting (authentic but 30min-1hr per post)"
  unique_attributes:
    - "Voice training on founders' existing writing (not generic templates)"
    - "LinkedIn-native engagement prediction analytics"
    - "Tone preservation algorithm (sounds like you, not AI)"
  value_delivered:
    - "10x content output without sounding robotic or generic"
    - "Maintain authentic founder voice at scale"
    - "Post 3-5x/week consistently without time drain"
  market_category: "AI Personal Branding Platform"
```

### `messaging`

Core marketing messages.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `headline` | string | Primary homepage headline | Yes |
| `subhead` | string | Expands on headline (1-2 sentences) | Yes |
| `key_messages` | list | 3-5 core message pillars | Yes |

**Example:**

```yaml
messaging:
  headline: "Your LinkedIn ghostwriter that sounds like you"
  subhead: "AuthorityMax learns your voice and writes LinkedIn posts indistinguishable from your best work — in 60 seconds."
  key_messages:
    - "Authentic AI — trained on your writing, not templates"
    - "LinkedIn-native — built for founders, not influencers"
    - "10x output — post 5x/week without burning out"
    - "Engagement prediction — know what will perform before you hit publish"
```

### `brand`

Brand voice and tone guidelines.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `voice_attributes` | list | 3-5 voice characteristics | Yes |
| `tone` | string | Tone description (1-2 sentences) | Yes |
| `avoid` | list | Language to never use | Yes |

**Example:**

```yaml
brand:
  voice_attributes:
    - "Direct and no-nonsense"
    - "Founder-to-founder (peer, not teacher)"
    - "Data-informed but not academic"
    - "Confident without being arrogant"
  tone: "Professional but conversational. Like a founder sharing lessons over coffee. Never corporate, never hype."
  avoid:
    - "Corporate jargon (synergy, leverage, robust, seamless)"
    - "Hype and superlatives (game-changing, revolutionary)"
    - "Generic motivational speak"
    - "Em dashes overuse"
```

### `competitors`

Competitive landscape.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `name` | string | Competitor name | Yes |
| `positioning` | string | How they position themselves | Yes |
| `strength` | string | What they do well | Yes |
| `weakness` | string | Where they fall short | Yes |

**Example:**

```yaml
competitors:
  - name: "Taplio"
    positioning: "LinkedIn growth tool for creators and agencies"
    strength: "Strong scheduling and analytics features"
    weakness: "Generic content generation — not founder-specific"
  
  - name: "Scriptly"
    positioning: "Premium LinkedIn ghostwriting for executives"
    strength: "High-touch, personalized service"
    weakness: "$10k/mo price point — inaccessible to most founders"
  
  - name: "ChatGPT"
    positioning: "General AI assistant"
    strength: "Cheap, flexible, huge training data"
    weakness: "Generic outputs, no LinkedIn specialization, no voice preservation"
```

### `metrics`

Current state and goals.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `current` | object | Current metrics | No |
| `goals_[period]` | object | Target metrics for a period | No |

**Example:**

```yaml
metrics:
  current:
    users_total: 1247
    users_paid: 89
    mrr: "$4,405"
    churn_rate: "8%"
    nps: 42
    cac: "$180"
    ltv: "$980"
  goals_q2:
    mrr: "$15,000"
    paid_users: 300
    churn_rate: "<5%"
    nps: ">50"
```

## Full Example: B2B SaaS

```yaml
# .cm-context — AuthorityMax (B2B SaaS Personal Branding Tool)

product:
  name: "AuthorityMax"
  tagline: "Your LinkedIn ghostwriter that sounds like you"
  description: "AI-powered personal branding platform that helps founders and operators build authority on LinkedIn through consistent, high-quality content that preserves their authentic voice."
  category: "AI Personal Branding Platform"
  stage: "Early Stage (Series A)"
  pricing_model: "Freemium ($0 → $49/mo Pro → $199/mo Enterprise)"
  url: "https://authoritymax.ai"

icp:
  title: "Series A-B SaaS Founders"
  description: "Technical founders who've reached product-market fit and need to build personal brand for recruiting, fundraising, and thought leadership. They understand the value of LinkedIn but don't have time to post consistently."
  firmographics:
    company_size: "10-100 employees"
    revenue: "$1M-$10M ARR"
    industry: "B2B SaaS"
    geography: "North America, Europe"
  pain_points:
    - "No time to write consistent LinkedIn content"
    - "Generic AI tools produce obvious AI slop"
    - "Hard to maintain authentic voice while scaling"
    - "Inconsistent posting kills momentum"
  buying_triggers:
    - "Preparing for Series B fundraise"
    - "Hiring senior talent"
    - "Entering new market and need visibility"
  jobs_to_be_done:
    - "Build credibility with VCs and customers"
    - "Attract senior talent to the team"
    - "Become a category thought leader"

positioning:
  competitive_alternatives:
    - "Hiring a ghostwriter ($5k-$10k/mo)"
    - "Generic AI tools (ChatGPT, Jasper)"
    - "Doing it manually (30min-1hr per post)"
  unique_attributes:
    - "Trained on founders' writing, not generic templates"
    - "LinkedIn-native analytics (engagement prediction)"
    - "Voice preservation (sounds like you, not AI)"
  value_delivered:
    - "10x more content output without sounding robotic"
    - "Authentic voice at scale"
    - "Consistent posting (3-5x/week) without time drain"
  market_category: "AI Personal Branding Platform"

messaging:
  headline: "Your LinkedIn ghostwriter that sounds like you"
  subhead: "AuthorityMax learns your voice and writes LinkedIn posts indistinguishable from your best work — in 60 seconds."
  key_messages:
    - "Authentic AI — trained on your writing, not templates"
    - "LinkedIn-native — built for founders, not influencers"
    - "10x output — post 5x/week without burning out"

brand:
  voice_attributes:
    - "Direct and no-nonsense"
    - "Founder-to-founder (peer, not teacher)"
    - "Data-informed but not academic"
  tone: "Professional but conversational. Like a founder sharing lessons over coffee."
  avoid:
    - "Corporate jargon"
    - "Hype and superlatives"
    - "Generic motivational speak"

competitors:
  - name: "Taplio"
    positioning: "LinkedIn growth tool for creators"
    strength: "Scheduling and analytics"
    weakness: "Generic content generation"
  - name: "Scriptly"
    positioning: "AI ghostwriter for executives"
    strength: "High-touch, expensive"
    weakness: "$10k/mo — not accessible to most founders"

metrics:
  current:
    users_total: 1247
    users_paid: 89
    mrr: "$4,405"
    churn_rate: "8%"
    nps: 42
  goals_q2:
    mrr: "$15,000"
    paid_users: 300
    churn_rate: "<5%"
```

## Full Example: Consumer App

```yaml
# .cm-context — FitStreak (Consumer Fitness App)

product:
  name: "FitStreak"
  tagline: "Build a workout habit that sticks"
  description: "Micro-workout app that helps busy professionals stay consistent with 5-15 minute workouts. No gym required."
  category: "Fitness & Habit Building App"
  stage: "MVP"
  pricing_model: "Freemium ($0 → $9.99/mo Premium)"
  url: "https://fitstreak.app"

icp:
  title: "Busy Professionals (25-40)"
  description: "Time-strapped professionals who want to stay fit but can't commit to hour-long gym sessions. Value consistency over intensity."
  firmographics:
    age: "25-40"
    income: "$60k-$150k"
    location: "Urban US, UK, Canada"
    occupation: "Knowledge workers (tech, finance, consulting)"
  pain_points:
    - "No time for 60-minute gym sessions"
    - "Inconsistency kills progress"
    - "Intimidated by fitness influencers showing intense workouts"
    - "Home workout apps are too long or too basic"
  buying_triggers:
    - "New Year's resolution season"
    - "Post-vacation weight gain"
    - "Doctor recommends more activity"
  jobs_to_be_done:
    - "Build a sustainable workout habit"
    - "Feel energized without exhaustion"
    - "Stay fit without gym membership"

positioning:
  competitive_alternatives:
    - "Traditional gym membership ($50-$100/mo, time-intensive)"
    - "YouTube workout videos (free but inconsistent, low accountability)"
    - "Peloton / ClassPass (expensive, requires equipment/travel)"
  unique_attributes:
    - "Micro-workouts (5-15 min)"
    - "Streak-based gamification (builds consistency)"
    - "Zero equipment required"
  value_delivered:
    - "Build workout habit without time commitment"
    - "Stay consistent (streak motivation)"
    - "Work out anywhere (home, hotel, office)"
  market_category: "Micro-Fitness App"

messaging:
  headline: "5 minutes a day. That's it."
  subhead: "FitStreak helps you build a workout habit that actually sticks — no gym, no equipment, no hour-long sessions."
  key_messages:
    - "Micro-workouts — 5-15 minutes, anywhere"
    - "Consistency over intensity — streaks build habits"
    - "Zero barrier — no gym, no equipment"

brand:
  voice_attributes:
    - "Encouraging, not preachy"
    - "Realistic about time constraints"
    - "Anti-hustle-culture fitness"
  tone: "Supportive friend, not drill sergeant. Celebrates small wins."
  avoid:
    - "Fitness bro language"
    - "Shaming or guilt-tripping"
    - "Unrealistic transformations"

competitors:
  - name: "Nike Training Club"
    positioning: "Premium fitness app with celebrity trainers"
    strength: "High production value, brand trust"
    weakness: "Long workouts (30-60 min), intimidating for beginners"
  - name: "7 Minute Workout"
    positioning: "Quick workout app"
    strength: "Short workouts"
    weakness: "Too basic, no progression, low engagement"

metrics:
  current:
    downloads: 8420
    dau: 1240
    paid_conversion: "3.2%"
    churn_rate: "12%"
  goals_q2:
    downloads: 25000
    dau: 5000
    paid_conversion: "5%"
    churn_rate: "<8%"
```

## Full Example: Services Business

```yaml
# .cm-context — DesignCrew (AI-Native Web Design Agency)

product:
  name: "DesignCrew"
  tagline: "AI-native web design for fast-moving startups"
  description: "Full-service web design and development studio that uses AI to deliver world-class websites in weeks, not months."
  category: "Web Design & Development Agency"
  stage: "Growth"
  pricing_model: "Project-based ($15k-$50k) + Retainer ($5k-$15k/mo)"
  url: "https://designcrew.io"

icp:
  title: "Series A-B SaaS Companies"
  description: "Fast-growing SaaS companies that need a website refresh or rebuild to match their growth stage. They've outgrown their founding team's DIY site."
  firmographics:
    company_size: "10-100 employees"
    revenue: "$2M-$20M ARR"
    industry: "B2B SaaS"
    geography: "North America"
    funding_stage: "Series A-B"
  pain_points:
    - "Outdated website doesn't reflect company maturity"
    - "Traditional agencies take 3-6 months and cost $100k+"
    - "Freelancers are hit-or-miss on quality"
    - "Internal design bandwidth is limited"
  buying_triggers:
    - "Upcoming fundraise (website needs to look Series B-ready)"
    - "Rebranding or repositioning"
    - "Major product launch"
  jobs_to_be_done:
    - "Look credible to enterprise buyers"
    - "Impress investors during fundraise"
    - "Launch website in 4-6 weeks, not 4-6 months"

positioning:
  competitive_alternatives:
    - "Traditional agencies ($50k-$150k, 3-6 months)"
    - "Freelance designers (cheaper but inconsistent quality)"
    - "DIY with Webflow templates (fast but generic)"
  unique_attributes:
    - "AI-accelerated design process (weeks, not months)"
    - "Fixed pricing and timeline (no scope creep)"
    - "SaaS-specialized (we understand your audience)"
  value_delivered:
    - "Enterprise-quality site in 4-6 weeks"
    - "Predictable cost and timeline"
    - "Built by team that understands B2B SaaS buyers"
  market_category: "AI-Native Web Design Agency"

messaging:
  headline: "Enterprise-quality websites. Startup speed."
  subhead: "DesignCrew uses AI to deliver world-class B2B SaaS websites in 4-6 weeks — not 4-6 months."
  key_messages:
    - "SaaS-specialized — we understand your buyers"
    - "AI-accelerated — launch in weeks, not months"
    - "Fixed scope — $25k, 6 weeks, no surprises"

brand:
  voice_attributes:
    - "Professional but not stuffy"
    - "Process-oriented (clarity over mystery)"
    - "Results-focused"
  tone: "Confident partner. We've done this before."
  avoid:
    - "Agency mystique (we're transparent about process)"
    - "Over-promising timelines"
    - "Generic design speak"

competitors:
  - name: "Traditional Design Agencies"
    positioning: "Full-service branding and web"
    strength: "Established, credible"
    weakness: "Slow (3-6 months), expensive ($100k+)"
  - name: "Webflow Freelancers"
    positioning: "Fast, affordable Webflow builds"
    strength: "Quick turnaround"
    weakness: "Variable quality, not SaaS-specialized"

metrics:
  current:
    active_projects: 4
    avg_project_value: "$28,000"
    monthly_revenue: "$45,000"
    client_nps: 68
  goals_q2:
    active_projects: 8
    avg_project_value: "$35,000"
    monthly_revenue: "$120,000"
```

## Tips for Writing Good Context

### Product Description
**Good:** "AI-powered personal branding platform that helps founders build authority on LinkedIn through consistent, high-quality content."  
**Bad:** "The best LinkedIn tool for growing your brand." (vague, no specifics)

### ICP Description
**Good:** "Technical founders who've reached product-market fit and need to build personal brand for recruiting and fundraising."  
**Bad:** "Anyone who wants to grow on LinkedIn." (too broad)

### Pain Points
**Good:** "No time to write consistent LinkedIn content" (specific, relatable)  
**Bad:** "Need better marketing" (vague, not actionable)

### Positioning
**Good:** "Trained on founders' writing, not generic templates" (specific attribute)  
**Bad:** "Better AI" (meaningless)

### Brand Voice
**Good:** "Direct and no-nonsense" (clear, actionable)  
**Bad:** "Innovative and dynamic" (corporate slop)

## Context Loading Process

When a skill runs, here's what happens:

1. **Skill checks for `.cm-context`** in project root
2. **If found:** Loads relevant sections into skill context
3. **If not found:** Skill prompts you to create it
4. **Skill reads `deliverables/`** for any previous work (e.g., positioning canvas)
5. **Skill combines** context + deliverables + your current request
6. **Skill outputs** deliverable to `deliverables/` folder

**Why this matters:** You write context once. Every skill reads it automatically. Over time, the `deliverables/` folder becomes a library of marketing assets that compound.

## How Deliverables Compound

**Example workflow:**

1. Run `/cm:research` → Outputs `deliverables/icp.md` + `deliverables/competitive-analysis.md`
2. Run `/cm:position` → Reads ICP + competitive analysis → Outputs `deliverables/positioning-package.md`
3. Run `copywriting` (homepage) → Reads positioning package → Outputs `deliverables/homepage-copy.md`
4. Run `cold-email` → Reads positioning + ICP → Outputs `deliverables/cold-email-sequence.md`
5. Run `sales-enablement` → Reads positioning + ICP + messaging → Outputs `deliverables/pitch-deck.md`

Each skill builds on prior work. Marketing knowledge accumulates.

## Next Steps

- [Getting Started](./getting-started.md) — Installation and first skill
- [Skills Overview](./skills/README.md) — Browse all 55 skills
- [Philosophy](./philosophy.md) — Why compounding marketing works
