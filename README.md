# Compounding Marketing

**Make each unit of marketing work easier than the last.**

A Claude Code + ChatGPT plugin with 61 skills for world-class SaaS marketing. From positioning to launch, from copy to CRO — everything you need to build marketing that compounds.

**v1.5** — Added sprint planning, campaign retrospectives, and marketing audit workflows. Improved setup wizard with auto MCP config generation. 14 workflow commands total.

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

**61 marketing skills** across 10 categories:

| Category | Skills | What You Get |
|----------|--------|--------------|
| **Foundation** | 5 | Product-market context, positioning, messaging, value props, brand voice |
| **Research** | 7 | ICP development, customer research, **customer interviews**, competitive analysis, **competitor content monitoring**, market sizing, psychology |
| **Content & Copy** | 8 | Copywriting, editing, strategy, case studies, social, **social media strategy**, video, lead magnets |
| **SEO & Discovery** | 6 | SEO audit, AI search optimization, programmatic SEO, site architecture, schema, comparison pages |
| **CRO** | 7 | Landing page optimization, **signup flows**, **onboarding**, **forms**, **popups**, **paywalls**, pricing |
| **Outreach & Email** | 6 | **ABM strategy**, cold email, automated sequences, **email deliverability**, **marketing automation**, testimonial collection |
| **Paid Acquisition** | 3 | Paid ads strategy, **LinkedIn ads**, ad creative |
| **Measurement** | 4 | Analytics tracking, A/B test design, attribution modeling, **content performance scoring** |
| **GTM & Launch** | 5 | Launch planning, GTM strategy, channel strategy, **Product Hunt launch**, **press/PR** |
| **Growth & Retention** | 6 | Referral programs, free tools, churn prevention, partnerships, community, **newsletter growth** |
| **Sales & RevOps** | 3 | Sales enablement, revenue operations, webinar strategy |
| **Meta** | 1 | 140+ SaaS marketing ideas |

**14 workflow commands** for complex marketing work:

**Project Workflows:**
- `/cm:research` — Deep market + customer research workflow
- `/cm:position` — Full positioning workshop (Dunford framework)
- `/cm:copy` — End-to-end copywriting with CRO review
- `/cm:launch` — Launch planning and execution
- `/cm:compound` — Document learnings for future projects
- `/cm:social` — Social media campaign planning (platforms, calendar, engagement tactics)
- `/cm:email` — Email campaign setup end-to-end (segmentation, copy, send time optimization)

**Planning & Review:**
- `/cm:sprint` — 2-week marketing sprint planning (goals, deliverables, schedule) **(NEW)**
- `/cm:retro` — Campaign/sprint retrospective (what worked, what didn't, actions) **(NEW)**
- `/cm:audit` — Quarterly marketing health check (channels, funnel, priorities) **(NEW)**

**Daily Operations:**
- `/cm:standup` — Marketing standup (5 min)
- `/cm:daily` — Daily marketing review (10 min)
- `/cm:eod` — End-of-day wrap (5-10 min)
- `/cm:weekly` — Weekly review + planning (30-45 min)

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
# Start with foundation — creates your product-marketing context doc
Run the cm-context skill to create our product-marketing context document.

# Use workflows for big projects
Run /cm:position to develop our positioning, messaging, and value props.

# Use individual skills for specific tasks
Use the copywriting skill to write copy for our new landing page.
```

### Example Workflows (Real Usage)

**Week 1 — Foundation:**
```
1. "Run cm-context for [your product]"       → Creates product-marketing context
2. "Run /cm:research"                         → ICP, competitors, market sizing
3. "Run /cm:position"                         → Positioning, messaging, value props
```

**Week 2+ — Execution:**
```
4. "Run /cm:copy for our homepage"            → Full copywriting with CRO review
5. "Run /cm:email for trial users"            → Welcome sequence + nurture flow
6. "Run /cm:social for LinkedIn launch"       → 30-day content calendar
7. "Run /cm:launch for v2 release"            → Launch plan with timeline
```

**Ongoing — Operations:**
```
"Run /cm:standup"                             → 5-min daily accountability check
"Run /cm:daily"                               → 10-min performance review
"Run /cm:sprint"                              → Plan next 2-week marketing sprint
"Run /cm:retro"                               → Post-campaign retrospective
"Run /cm:audit"                               → Quarterly marketing health check
"Run /cm:compound"                            → Capture learnings after any project
```

**Individual skills (ask naturally):**
```
"Audit our SEO"                               → seo-audit skill
"Write a case study about [customer]"         → case-study skill
"Optimize our pricing page"                   → pricing-strategy + paywall-upgrade-cro
"Design an A/B test for the signup page"      → ab-test-setup + signup-flow-cro
"Analyze competitor [X]'s positioning"        → competitive-analysis skill
"Create a lead magnet for [audience]"         → lead-magnets skill
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

## Workflow Commands — Examples

Workflow commands combine multiple skills for common marketing rhythms. Here's what each one looks like in practice.

### `/cm:daily` — Daily Marketing Review (10 min)

**Input:**
```
/cm:daily
```

**What it asks:**
- What campaigns/content are active?
- What metrics moved yesterday?
- Any wins or red flags?
- What's your ONE marketing priority today?

**Output:**
```markdown
# Daily Marketing Review — Mar 14, 2026

## What's Live
- **Campaigns:** LinkedIn retargeting (Week 2), Google Search
- **Content:** Blog post on pricing published yesterday
- **Sequences:** Trial nurture sequence (423 active)

## Performance Snapshot
- **Traffic:** 2,847 (+12% vs last week)
- **Signups:** 34 (+6)
- **Trial→Paid:** 18% (stable)

## Wins
- Pricing blog ranking #4 for "SaaS pricing strategy"

## Flags
- LinkedIn CPC up 23% — may need creative refresh

## Today's Focus
1. **Priority:** Write Q1 case study with Acme Corp
2. **Quick wins:** Schedule 3 social posts, reply to PR inquiry
```

---

### `/cm:standup` — Marketing Standup (5 min)

**Input:**
```
/cm:standup
```

**What it asks:**
- What shipped yesterday?
- What are you working on today?
- Any blockers?

**Output:**
```markdown
# Marketing Standup — Mar 14, 2026

## Yesterday
- ✅ Published pricing blog post
- ✅ Set up LinkedIn retargeting campaign
- 🔄 Continued homepage copy revision (80% done)

## Today
- 🎯 Finish homepage copy — ready for design by 3pm
- 📝 Draft cold email sequence for enterprise — first 2 emails
- 💡 Review competitor's new landing page

## Blockers
- ⚠️ Waiting on customer quote approval from Sarah (Acme)
- ⚠️ Need product screenshots for homepage (asked design yesterday)
```

---

### `/cm:eod` — End of Day Wrap (5-10 min)

**Input:**
```
/cm:eod
```

**What it asks:**
- What shipped today?
- What's in progress?
- What's blocked?
- What's your first task tomorrow?

**Output:**
```markdown
# EOD Marketing Wrap — Mar 14, 2026

## Shipped ✅
- Homepage copy v2 — sent to design
- Cold email sequence (2/5 emails drafted)
- Competitor analysis on Rival Inc's new page

## In Progress 🔄
- Case study with Acme — Next: Schedule interview — ETA: Monday
- Email sequence — Next: Write emails 3-5 — ETA: Tomorrow

## Blocked ⚠️
- Customer quote — Waiting on: Sarah @ Acme (followed up via email)

## Tomorrow's Start
- **First task:** Finish remaining 3 cold emails
- **Prep done:** Outline saved in drafts folder

## Notes
- Competitor using "results in 30 days" angle — test this?
- PR inquiry from TechCrunch — hand off to founder
```

---

### `/cm:weekly` — Weekly Review (30-45 min)

**Input:**
```
/cm:weekly
```

**What it asks:**
- What content/campaigns shipped this week?
- How did key metrics move?
- What patterns emerged?
- What's the plan for next week?

**Output:**
```markdown
# Weekly Marketing Review — Week of Mar 10, 2026

## This Week's Activity
- **Content published:** 2 blog posts, 8 social posts
- **Campaigns active:** LinkedIn retargeting, Google Search
- **Experiments run:** Homepage headline A/B test
- **Shipped vs. planned:** 5/6 tasks completed

## Metrics Summary
| Metric | This Week | Last Week | Change |
|--------|-----------|-----------|--------|
| Traffic | 14,280 | 12,650 | +13% |
| Signups | 156 | 142 | +10% |
| Trial→Paid | 18.2% | 17.8% | +0.4% |

## Wins 🏆
1. Pricing blog → #4 ranking in 3 days (outcome-focused headline worked)
2. Homepage test: Variant B +23% clicks (social proof above fold)

## Losses 📉
1. LinkedIn CPC up 23% — creative fatigue
2. Case study delayed (waiting on customer)

## Patterns Identified
- **What resonated:** Outcome-focused headlines > feature-focused
- **Best channel:** Organic search driving 62% of signups
- **Audience insight:** "Time to value" messaging resonates with enterprise

## Next Week's Plan

### Top 3 Priorities
1. Launch new LinkedIn creatives — expected: CPC back to baseline
2. Finish enterprise cold email sequence — expected: 10 qualified replies
3. Publish Acme case study — expected: sales enablement asset

### Experiments
- Testing: Social proof placement on pricing page
- Success criteria: +15% pricing page → signup

## Learnings to Compound
- "Outcome-focused headlines outperform feature-focused" → saved to `learnings/copywriting.md`
```

---

### `/cm:compound` — Document Learnings (10-15 min)

**Input:**
```
/cm:compound

Just finished the homepage redesign project.
```

**What it asks:**
- What worked well?
- What didn't work?
- What surprised you?
- What would you do differently?

**Output:**
```markdown
# Learnings Captured

## Project: Homepage Redesign (Mar 2026)

### What Worked
- Putting social proof above the fold increased clicks 23%
- "See results in X days" framing outperformed "Get started" CTA
- Customer logos → testimonials → case study (trust ladder)

### What Didn't Work
- Feature comparison table below the fold — low engagement
- Video hero slowed page load, hurt mobile conversions

### Surprising
- Enterprise visitors spent 3x longer on pricing page than SMB
- "Free trial" converted better than "Start free" (unexpected)

### Next Time
- Always A/B test hero section — highest impact
- Check mobile load time BEFORE launch
- Social proof above fold is non-negotiable

---

✅ Saved to `.agents/learnings/cro.md`
✅ Saved to `.agents/learnings/copywriting.md`
```

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
| **customer-interview** | Plan and run structured customer interviews | Interview guide + synthesis framework |
| **competitive-analysis** | Map competitive landscape | Competitive analysis with white space |
| **competitor-content-monitoring** | Track competitor content and identify gaps | Monitoring stack setup, gap analysis, competitive intelligence reports |
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
| **social-media-strategy** | Plan social media presence across platforms | Channel strategy, content calendars, posting cadence, growth tactics |
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
| **abm-strategy** | Plan account-based marketing campaigns | Target account selection, personalization playbooks, multi-channel orchestration |
| **cold-email** | Write personalized cold outreach | Cold email templates |
| **email-sequence** | Design automated email flows | Email sequence with timing + triggers |
| **email-deliverability** | Ensure emails reach inbox (not spam) | Authentication setup (SPF, DKIM, DMARC), warmup plan, sender reputation monitoring |
| **marketing-automation** | Set up and optimize marketing automation | Platform comparison, workflow architecture, lead scoring, segmentation, email templates |
| **testimonial-collection** | Systematically gather social proof | Testimonial collection process |

### Paid Acquisition Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **paid-ads** | Plan paid campaigns | Campaign plan (targeting, budget, structure) |
| **linkedin-ads** | Design LinkedIn-specific ad campaigns | LinkedIn campaign structure + copy variations |
| **ad-creative** | Write ad copy and creative | Ad variations + creative concepts |

### Measurement & Testing Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **analytics-tracking** | Set up event tracking | Tracking implementation plan |
| **ab-test-setup** | Design statistically valid tests | A/B test plan with hypothesis + sample size |
| **attribution-modeling** | Understand channel contribution | Attribution model + implementation |
| **content-performance-scoring** | Score content quality pre/post-publish | Multi-dimensional scoring framework (SEO, readability, engagement, brand voice) |

### GTM & Launch Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **launch-strategy** | Plan product launches | Launch timeline + checklist |
| **gtm-strategy** | Design go-to-market motion | GTM strategy (PLG vs. sales-led) |
| **channel-strategy** | Prioritize marketing channels | Channel plan with resource allocation |
| **product-hunt-launch** | Plan and execute a Product Hunt launch | PH submission, hunter outreach, launch-day playbook |
| **press-pr** | Get media coverage and press mentions | Press kit, journalist outreach, pitch angles |

### Growth & Retention Skills

| Skill | Purpose | Output |
|-------|---------|--------|
| **referral-program** | Design referral programs | Referral program spec |
| **free-tool-strategy** | Create lead-gen tools | Free tool spec + promotion plan |
| **churn-prevention** | Reduce customer churn | Churn prevention playbook |
| **partnership-marketing** | Leverage partnerships | Partnership plan |
| **community-strategy** | Build online communities | Community strategy |
| **newsletter-growth** | Grow and monetize an email newsletter | Newsletter strategy + growth playbook |

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

Chinmaya is the founder of [BigDeal Ventures](https://bigdeal.ventures) — a portfolio of AI-native companies:

| Company | Description |
|---------|-------------|
| [AuthorityMax](https://authoritymax.ai) | SaaS personal branding platform for founders & operators |
| [MagicAssist](https://magicassist.co) | AI-powered productivity assistant |
| [SuperContent](https://supercontent.io) | AI-native design & video production for SaaS |
| [DesignCrew](https://designcrew.io) | AI-native apps & digital experiences |

This plugin was built to make world-class marketing frameworks accessible to every founder and marketer building with AI.

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
