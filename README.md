# Compounding Marketing

**Make each unit of marketing work easier than the last.**

A Claude Code + ChatGPT plugin with 55 skills for world-class SaaS marketing. From positioning to launch, from copy to CRO — everything you need to build marketing that compounds.

**v1.1** — Now with pre-configured MCPs (Perplexity + Exa), optional integrations, and npx setup wizard.

---

## Philosophy

Traditional marketing accumulates chaos. Every campaign adds complexity. Knowledge gets scattered, copy becomes inconsistent, positioning drifts. You start every project from scratch.

**Compounding marketing inverts this:**

- **80% research and planning**, 20% execution
- **Research your market deeply** before writing a single line of copy
- **Build reusable positioning** and messaging foundations
- **Document learnings** so they compound across projects
- **Keep quality high** so future work builds on solid ground

Each project should make the next project easier.

---

## What's Inside

**50 marketing skills** across 10 categories:

| Category | Skills | What You Get |
|----------|--------|--------------|
| **Foundation** | 5 | Product-market context, positioning, messaging, value props, brand voice |
| **Research** | 6 | ICP development, customer research, **customer interviews**, competitive analysis, market sizing, psychology |
| **Content & Copy** | 7 | Copywriting, editing, strategy, case studies, social, video, lead magnets |
| **SEO & Discovery** | 6 | SEO audit, AI search optimization, programmatic SEO, site architecture, schema, comparison pages |
| **CRO** | 7 | Landing page optimization, signup flows, onboarding, forms, popups, paywalls, pricing |
| **Outreach & Email** | 3 | Cold email, automated sequences, testimonial collection |
| **Paid Acquisition** | 3 | Paid ads strategy, **LinkedIn ads**, ad creative |
| **Measurement** | 3 | Analytics tracking, A/B test design, attribution modeling |
| **GTM & Launch** | 5 | Launch planning, GTM strategy, channel strategy, **Product Hunt launch**, **press/PR** |
| **Growth & Retention** | 6 | Referral programs, free tools, churn prevention, partnerships, community, **newsletter growth** |
| **Sales & RevOps** | 3 | Sales enablement, revenue operations, webinar strategy |
| **Meta** | 1 | 140+ SaaS marketing ideas |

**5 workflow commands** for complex marketing work:

- `/cm:research` — Deep market + customer research workflow
- `/cm:position` — Full positioning workshop (Dunford framework)
- `/cm:copy` — End-to-end copywriting with CRO review
- `/cm:launch` — Launch planning and execution
- `/cm:compound` — Document learnings for future projects

---

## Quick Start

### Option 1: npx Setup (Recommended)

```bash
npx compounding-marketing
```

This interactive wizard will:
- Configure your AI tool (Claude Code, Cursor, ChatGPT)
- Set up MCP integrations (Perplexity, Exa)
- Enable optional integrations (Linear, GA, etc.)
- Create `.cm-config.json` with your settings

### Option 2: Manual Setup

1. **Clone the repo:**
```bash
git clone https://github.com/classicchins/compounding-marketing.git
# Or add as git submodule
```

2. **For Claude Code:** Plugin auto-loads from `CLAUDE.md`

3. **For ChatGPT:** Upload `AGENTS.md` to your Custom GPT

4. **For Cursor:** Add skills directory to your project

### Getting Started

```
# Start with foundation
Run the cm-context skill to create our product-marketing context document.

# Use workflows for big projects  
Run /cm:position to develop our positioning, messaging, and value props.

# Use individual skills for specific tasks
Use the copywriting skill to write copy for our new landing page.
```

---

## MCP Integrations (v1.1)

Supercharge research skills with pre-configured MCP servers:

### Perplexity
AI-powered web research with real-time search:
- `perplexity_search` — Get ranked sources
- `perplexity_ask` — Quick Q&A with web search
- `perplexity_reason` — Complex analysis and comparisons
- `perplexity_research` — Deep comprehensive research

### Exa
Neural search and company intelligence:
- `company_research_exa` — Deep company profiles
- `people_search_exa` — Find executives and professionals
- `web_search_exa` — Semantic content discovery
- `deep_researcher_start/check` — Async AI research agent

**Setup:** See `mcp/README.md` for configuration.

---

## Optional Integrations (v1.1)

Connect to your existing tools:

| Category | Integrations |
|----------|--------------|
| **Task Tracking** | Linear, Trello, Asana, ClickUp |
| **Analytics** | Google Analytics 4, Search Console, Mixpanel, Meta Ads |

Skills can push tasks and pull data from these integrations when configured.

**Setup:** See `integrations/README.md` for guides.

---

## Core Workflow

**Research → Position → Message → Execute → Compound**

### 1. Foundation (Start Here)

Every marketing project starts with context:

```
Run cm-context
```

This creates `.agents/product-marketing-context.md` — the single source of truth for your product, audience, positioning, and brand voice.

**Already have context?** The skill will read it and ask only for updates.

### 2. Position Before Tactics

Bad marketing starts with tactics ("Let's write a landing page!").

Good marketing starts with positioning:

```
Run /cm:position
```

This executes:
- `positioning` — April Dunford's positioning framework
- `messaging-framework` — Convert positioning to messaging pillars
- `value-proposition` — Design value props per customer segment

**Output:** A complete positioning package you can use across all channels.

### 3. Execute with Confidence

Once positioning is clear, execution is faster:

```
Run /cm:copy for homepage
```

or

```
Use the case-study skill to write a customer success story
```

Every skill references your positioning and messaging, so outputs are consistent and on-brand.

### 4. Compound Your Learnings

After completing work:

```
Run /cm:compound
```

This captures what you learned (what worked, what didn't, what surprised you) and saves it to `.agents/learnings/[category].md`.

**Next project?** You'll have those insights ready.

---

## Skill Deep Dive

### Foundation Skills (Start Here)

| Skill | Purpose | Output |
|-------|---------|--------|
| **cm-context** | Create product-market context document | `.agents/product-marketing-context.md` |
| **positioning** | Define market position (Dunford framework) | Positioning canvas |
| **messaging-framework** | Convert positioning to messaging pillars | Messaging framework with proof points |
| **value-proposition** | Design value props per segment | Value proposition canvas (Strategyzer) |
| **brand-voice** | Document brand voice and guidelines | Brand voice guide |

### Research Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **icp-research** | Develop Ideal Customer Profile | ICP document with qualification criteria |
| **customer-research** | Synthesize interviews into JTBD insights | Customer research synthesis |
| **competitive-analysis** | Map competitive landscape | Competitive analysis with white space |
| **market-sizing** | Calculate TAM/SAM/SOM | Market sizing analysis |
| **marketing-psychology** | Apply psychological principles | Psychology-informed recommendations |

### Content & Copy Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **copywriting** | Write conversion-focused copy | Page copy with multiple headline options |
| **copy-editing** | Improve existing copy | Edited copy with rationale |
| **content-strategy** | Plan content calendar | Content plan mapped to customer journey |
| **case-study** | Write customer success stories | Case study (Before → Decision → After) |
| **social-content** | Create social media content | Platform-specific posts (Twitter, LinkedIn) |
| **video-marketing** | Plan video content | Video script + distribution plan |
| **lead-magnets** | Design lead magnets | Ebook/template/calculator spec |

### SEO & Discovery Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **seo-audit** | Audit technical + on-page SEO | Prioritized SEO fixes |
| **ai-seo** | Optimize for AI search (ChatGPT, Perplexity) | AI-optimized content structure |
| **programmatic-seo** | Generate scaled SEO pages | Template + data strategy |
| **site-architecture** | Design URL structure and hierarchy | Site architecture + URL guidelines |
| **schema-markup** | Implement structured data | Schema.org JSON-LD code |
| **competitor-alternatives** | Create comparison/alternative pages | Comparison page copy |

### CRO Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **page-cro** | Audit and optimize pages for conversion | CRO audit with quick wins + test ideas |
| **signup-flow-cro** | Optimize registration flows | Optimized signup flow |
| **onboarding-cro** | Get users to "aha moment" faster | Activation flow |
| **form-cro** | Optimize forms for completion | Optimized form design |
| **popup-cro** | Design high-converting popups | Popup copy + trigger strategy |
| **paywall-upgrade-cro** | Optimize upgrade prompts | Upgrade moment copy |
| **pricing-strategy** | Design pricing and packaging | Pricing tier recommendations |

### Outreach & Email Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **cold-email** | Write personalized cold outreach | Cold email templates |
| **email-sequence** | Design automated email flows | Email sequence with timing + triggers |
| **testimonial-collection** | Systematically gather social proof | Testimonial collection process |

### Paid Acquisition Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **paid-ads** | Plan paid campaigns | Campaign plan (targeting, budget, structure) |
| **ad-creative** | Write ad copy and creative | Ad variations + creative concepts |

### Measurement & Testing Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **analytics-tracking** | Set up event tracking | Tracking implementation plan |
| **ab-test-setup** | Design statistically valid tests | A/B test plan with hypothesis + sample size |
| **attribution-modeling** | Understand channel contribution | Attribution model + implementation |

### GTM & Launch Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **launch-strategy** | Plan product launches | Launch timeline + checklist |
| **gtm-strategy** | Design go-to-market motion | GTM strategy (PLG vs. sales-led) |
| **channel-strategy** | Prioritize marketing channels | Channel plan with resource allocation |

### Growth & Retention Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **referral-program** | Design referral programs | Referral program spec |
| **free-tool-strategy** | Create lead-gen tools | Free tool spec + promotion plan |
| **churn-prevention** | Reduce customer churn | Churn prevention playbook |
| **partnership-marketing** | Leverage partnerships | Partnership plan |
| **community-strategy** | Build online communities | Community strategy |

### Sales & RevOps Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **sales-enablement** | Create sales collateral | Pitch deck, battle cards, one-pager |
| **revops** | Design revenue operations | Lead lifecycle + CRM setup |
| **webinar-strategy** | Plan webinars | Webinar plan + promotion timeline |

### Meta Skill

| Skill | Purpose | Output |
|-------|---------|--------|
| **marketing-ideas** | 140+ SaaS marketing tactics | Prioritized marketing roadmap |

---

## Installation

### Claude Code

1. Clone or download this repository
2. Place in your project directory (or use as submodule)
3. Claude Code automatically reads `CLAUDE.md`
4. Skills are available via natural language or `/skill-name`

### ChatGPT Custom GPT

1. Upload `AGENTS.md` as knowledge
2. Upload individual skills from `skills/` directory as needed
3. Instruct: "Use skills from the Compounding Marketing plugin"

### Cursor

1. Plugin structure is Cursor-compatible
2. `.cursor-plugin/plugin.json` provides metadata
3. Reference skills via relative paths

### Windsurf / OpenClaw

Compatible with Claude Code structure. Follow Claude Code installation.

---

## Why This Plugin?

### Frameworks, Not Prompts

This isn't a prompt library. Every skill teaches you **why** something works, not just **what** to do.

- **positioning** teaches April Dunford's Obviously Awesome framework
- **value-proposition** teaches Strategyzer's Value Proposition Canvas
- **copywriting** teaches proven conversion frameworks (PAS, AIDA)

You don't just get outputs — you learn the methodology.

### Research Before Execution

Most marketing plugins jump straight to tactics ("Write a landing page!").

Compounding Marketing forces you to think first:
- **cm-context** ensures you have product-market clarity
- **positioning** ensures you know *why* you're different
- **messaging-framework** ensures you have proof for claims

80% of marketing success is clarity. These skills give you that.

### Quality Bar, Not Quantity

Every skill has:
- **Clear inputs** (what you need before starting)
- **Step-by-step process** (no guessing)
- **Output format** (template to follow)
- **Quality bar** (what "great" looks like)
- **Common mistakes** (what to avoid)

No generic outputs. No AI slop. Every skill is built to world-class standards.

### Built to Compound

The `/cm:compound` workflow captures learnings after every project.

Over time, your `.agents/learnings/` directory becomes a library of what works for *your* business, *your* audience, *your* market.

Marketing knowledge compounds. This plugin makes it systematic.

---

## Who Is This For?

### Technical Founders

You're building a SaaS. You need to do marketing, but you're not a marketer. These skills give you the frameworks to do it right without guessing.

### Solo Marketers

You're a marketing team of one. You need leverage. This plugin gives you 50 specialized skills — like hiring 50 consultants.

### Marketing Managers

You want to accelerate your team with AI. This plugin provides the structure and quality bar so AI outputs are actually usable.

### Growth Engineers

You're technical but own marketing metrics. These skills speak your language — systems, processes, measurable outcomes.

---

## Contributing

This is an open-source plugin. Contributions welcome:

1. **Improve existing skills** (add examples, refine processes)
2. **Add new skills** (follow the skill template in any skill's structure)
3. **Report issues** (what's unclear? what's missing?)
4. **Share learnings** (what worked for you?)

See `CONTRIBUTING.md` for guidelines.

---

## Creator

Created by **Chinmaya Shankar** ([@classicchins](https://twitter.com/classicchins))

Part of the [AuthorityMax](https://authoritymax.ai) ecosystem.

---

## License

MIT License — use commercially, modify, distribute freely.

See `LICENSE` for full terms.

---

## Acknowledgments

**Frameworks used:**
- April Dunford's *Obviously Awesome* (positioning)
- Strategyzer's Value Proposition Canvas
- Jobs-to-be-Done framework (customer research)
- ICE prioritization (marketing ideas)

**Inspired by:**
- [Compounding Engineering](https://github.com/compounding-engineering) (dev methodology)
- The lean startup movement
- Direct-response marketing principles

---

## Support

- **Issues:** Open an issue on GitHub
- **Discussions:** Join the [GitHub Discussions](link)
- **Twitter:** [@classicchins](https://twitter.com/classicchins)

---

**Make marketing compound. Start with `/cm:research`.**
