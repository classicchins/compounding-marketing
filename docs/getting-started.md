# Getting Started with Compounding Marketing

Complete onboarding guide. From installation to your first positioning workshop.

## What is Compounding Marketing?

Compounding Marketing is a Claude/ChatGPT plugin that gives your AI 55 marketing skills built on proven frameworks. Instead of generic prompts, you get structured workflows backed by practitioners like April Dunford (positioning), Joanna Wiebe (copywriting), and Eugene Schwartz (persuasion).

**What makes it different:**
- **Frameworks, not prompts** — Every skill teaches you the methodology
- **Context-aware** — Skills read your `.cm-context` file automatically
- **Deliverable-focused** — Real outputs, not AI slop
- **Compounding knowledge** — Each project makes the next one easier

## Installation

### Claude Code (Recommended)

```bash
claude mcp add compounding-marketing -- npx -y compounding-marketing
```

That's it. Skills are available immediately.

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "compounding-marketing": {
      "command": "npx",
      "args": ["-y", "compounding-marketing"]
    }
  }
}
```

Restart Claude Desktop. Skills are now available.

### ChatGPT Custom GPT

1. Create a new Custom GPT
2. Upload the plugin files from `skills/` directory
3. Add this instruction:

```
You have access to the Compounding Marketing plugin. When users request marketing work, use the relevant skill from the plugin. Always read .cm-context first.
```

### Cursor / Windsurf / OpenClaw

Compatible with Claude Code structure. Follow Claude Code installation.

## Creating Your `.cm-context` File

The `.cm-context` file is your marketing single source of truth. Skills read this file to understand your product, audience, positioning, and brand.

Create `.cm-context` in your project root:

```yaml
# .cm-context — Product Marketing Context

product:
  name: "AuthorityMax"
  tagline: "Turn your LinkedIn into a personal brand machine"
  description: "AI-powered personal branding platform that helps founders and operators build authority on LinkedIn through consistent, high-quality content."
  category: "SaaS Personal Branding Tool"
  stage: "Early Stage (Series A)"
  pricing_model: "Freemium (Free → $49/mo Pro → $199/mo Enterprise)"

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
  - name: "ChatGPT"
    positioning: "General AI assistant"
    strength: "Cheap, flexible"
    weakness: "Generic outputs, no LinkedIn specialization"

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

**What each section does:**
- **product** — What you're selling, who it's for, pricing
- **icp** — Ideal customer firmographics, pain points, buying triggers
- **positioning** — Market position, competitive alternatives, unique value
- **messaging** — Core headlines, subheads, key messages
- **brand** — Voice, tone, what to avoid
- **competitors** — Who you compete with and how you differ
- **metrics** — Current state and goals (helps with prioritization)

Skills automatically read this context. You write it once, every skill uses it.

## Running Your First Skill

Let's run the positioning workshop to develop your market position.

### 1. Open your AI tool (Claude Code, Claude Desktop, or ChatGPT)

### 2. Run the positioning command

```
/cm:position
```

### 3. What happens next

The AI will:
1. Read your `.cm-context` file
2. Run the `positioning` skill (April Dunford framework)
3. Run the `messaging-framework` skill
4. Run the `value-proposition` skill
5. Combine all outputs into a positioning package
6. Save to `deliverables/positioning-package.md`

### 4. Review the output

Open `deliverables/positioning-package.md`. You'll see:

**Positioning Canvas:**
- Competitive alternatives (what customers would use if you didn't exist)
- Unique attributes (what you have that alternatives don't)
- Value delivered (what each attribute enables for customers)
- Best-fit customers (who cares most about this value)
- Market category (context that makes your value obvious)

**Messaging Framework:**
- Core message pillars
- Proof points for each pillar
- Objection handling

**Value Propositions:**
- Per customer segment
- Jobs-to-be-done mapping
- Pains relieved and gains created

### 5. Use the positioning

Now you have positioning you can use across:
- Website copy (`/cm:copy`)
- Cold outreach (`cold-email` skill)
- Sales decks (`sales-enablement` skill)
- Product launch (`/cm:launch`)

## Understanding the `deliverables/` Folder

Every skill outputs files to `deliverables/`. This is where compounding happens.

**Example after running `/cm:position`:**

```
deliverables/
├── positioning-canvas.md
├── messaging-framework.md
├── value-propositions.md
└── positioning-package.md (combined output)
```

**Why deliverables compound:**

When you run `copywriting` skill next, it reads:
- `positioning-package.md` for positioning
- `.cm-context` for product details
- `messaging-framework.md` for proof points

Each deliverable makes the next skill smarter. Marketing knowledge accumulates instead of restarting from scratch.

## Quick Reference: Top 5 Skills for a New Product

Run these skills in order when launching a new product:

### 1. `/cm:research` — Market & Customer Research
**Time:** 2-4 hours  
**Output:** ICP, competitive analysis, customer insights  
**When:** Before positioning or copy

### 2. `/cm:position` — Positioning Workshop
**Time:** 3-5 hours  
**Output:** Positioning canvas, messaging framework, value props  
**When:** After research, before any marketing execution

### 3. `copywriting` — Homepage Copy
**Time:** 1-2 hours  
**Output:** Full homepage copy with headline options  
**When:** After positioning is clear

### 4. `/cm:launch` — Launch Planning
**Time:** 2-3 hours  
**Output:** Launch timeline, channel plan, content calendar  
**When:** 2-4 weeks before launch

### 5. `seo-audit` — SEO Foundation
**Time:** 1 hour  
**Output:** Technical SEO checklist, on-page fixes  
**When:** After site is live

## Common Workflows

### Building a Product Launch

```
1. /cm:research — Understand market and customers
2. /cm:position — Nail positioning and messaging
3. copywriting (homepage) — Write launch page
4. copywriting (pricing) — Design pricing page
5. /cm:launch — Plan launch week
6. email-sequence — Set up activation emails
7. social-content — Pre-schedule launch content
```

### Improving Conversion Rates

```
1. page-cro (homepage) — Audit landing page
2. signup-flow-cro — Audit registration flow
3. onboarding-cro — Optimize activation
4. pricing-strategy — Review pricing page
5. ab-test-setup — Design experiments
```

### Building Content Engine

```
1. seo-research — Keyword research (using Perplexity MCP)
2. content-strategy — Plan editorial calendar
3. blog-post (using copywriting skill) — Write posts
4. social-content — Repurpose for social
5. newsletter — Build email audience
```

## Next Steps

**Master the basics:**
- Read [Configuration](./configuration.md) for full `.cm-context` reference
- Browse [Skills Overview](./skills/README.md) for all 55 skills
- Learn [Commands](./commands/README.md) for workflow automation

**Upgrade your research:**
- Install [Perplexity MCP](./integrations/perplexity.md) for real-time web research
- Install [Exa MCP](./integrations/exa.md) for company intelligence

**Go deeper:**
- Read [Philosophy](./philosophy.md) to understand why compounding marketing works
- Review [Skill Deep Dives](./skills/positioning.md) for framework details

## Support

**Questions?**
- GitHub Issues: [github.com/classicchins/compounding-marketing/issues](https://github.com/classicchins/compounding-marketing/issues)
- Twitter: [@classicchins](https://twitter.com/classicchins)

