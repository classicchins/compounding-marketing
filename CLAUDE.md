# CLAUDE.md — Compounding Marketing

The Compounding Marketing plugin: 61 marketing skills + 16 workflow commands for SaaS marketing, available to Claude Code, Claude Cowork, Cursor, Codex, ChatGPT, and Zed.

## What This Is

Compounding Marketing is a cross-platform AI plugin providing **61 marketing skills** and **16 workflow commands** for SaaS marketing — positioning, messaging, copy, CRO, SEO, GTM, lifecycle, growth.

It is **not a traditional codebase**. It's a structured knowledge system: skills are `SKILL.md` files, workflows are command `.md` files. The setup wizard (`bin/setup.js`) installs them into your AI tool of choice with safe, prompt-driven file writes.

Philosophy: **Make each unit of marketing work easier than the last.** 80% research and planning, 20% execution. Core loop: **Research → Position → Message → Execute → Compound.**

## Quick Reference

| You want to… | Invoke it as | Notes |
|---|---|---|
| Use a single skill (e.g., write copy) | Natural language ("write landing page copy for…") **or** `/cm-{skill}` (e.g., `/cm-copywriting`) | All 61 skills are registered as slash commands. Natural language also works — the right skill is matched by trigger keywords. |
| Run a multi-step workflow | `/cm-{workflow}` (e.g., `/cm-research`, `/cm-copy`, `/cm-launch`) | 16 workflows orchestrate multiple skills end-to-end. |
| Establish project context (do this first) | `/cm-context` | Creates `.agents/product-marketing-context.md` — every other skill reads from this. |
| Install / update / remove the plugin | `/cm-setup`, `/cm-uninstall`, or `npx compounding-marketing` | The npx wizard supports `--dry-run`, `--yes`, `--scope`, `--tool`. |

> Slash commands use **`/cm-{name}`** (hyphen, not colon). The legacy colon-form is no longer supported.

## Repository Structure

```
skills/           # 61 self-contained marketing skills (each a SKILL.md with YAML frontmatter)
commands/         # 16 workflow commands (cm-*.md, invoked as /cm-{name})
bin/setup.js      # npx setup wizard — readline-only CLI, no external deps, ~1260 lines
scripts/          # generate-claude-md.js (refreshes the Skills section below)
                  # validate-skills.js  (enforces the 7-section skill structure)
mcp/              # Pre-configured MCP servers (Perplexity, Exa) for research enhancement
integrations/     # Optional tool integrations (Linear, GA4, etc.)
.agents/          # Runtime: product-marketing-context.md + learnings/<category>.md
```

There are no tests or builds. This is a content/knowledge repo. Use:

```bash
npx compounding-marketing                    # interactive setup
node scripts/validate-skills.js              # enforce skill structure
node scripts/generate-claude-md.js           # regenerate the Skills section below
```

## Workflow Commands by Category

All 16 workflows live in `commands/` and are invoked as `/cm-{name}`.

| Category | Commands | When |
|---|---|---|
| **Install / Lifecycle** | `/cm-setup`, `/cm-uninstall` | Bootstrap or remove the plugin in a project (safe, prompt-driven). |
| **Project workflows** | `/cm-research`, `/cm-position`, `/cm-copy`, `/cm-launch`, `/cm-social`, `/cm-email`, `/cm-compound` | Multi-step projects (deep research, positioning, end-to-end copy, launch, social/email campaigns, post-project learning capture). |
| **Sprint & review** | `/cm-sprint`, `/cm-retro`, `/cm-audit` | 2-week sprint planning, retrospective, quarterly marketing health check. |
| **Daily ops** | `/cm-daily`, `/cm-standup`, `/cm-eod`, `/cm-weekly` | Morning orientation, async standup, end-of-day wrap, Friday review/plan. |

## Skill Categories

61 skills across 12 categories.

| Category | Count | Sample skills |
|---|---|---|
| Foundation | 5 | cm-context, positioning, messaging-framework |
| Research | 7 | icp-research, customer-research, competitive-analysis |
| Content & Copy | 8 | copywriting, copy-editing, content-strategy |
| SEO & Discovery | 6 | seo-audit, ai-seo, programmatic-seo |
| CRO | 7 | page-cro, signup-flow-cro, pricing-strategy |
| Outreach & Email | 6 | cold-email, email-sequence, email-deliverability |
| Paid Acquisition | 3 | paid-ads, linkedin-ads, ad-creative |
| Measurement | 4 | analytics-tracking, ab-test-setup, attribution-modeling |
| GTM & Launch | 5 | launch-strategy, gtm-strategy, product-hunt-launch |
| Growth & Retention | 6 | referral-program, churn-prevention, partnership-marketing |
| Sales & RevOps | 3 | sales-enablement, revops, webinar-strategy |
| Meta | 1 | marketing-ideas (140+ SaaS tactics) |

The full alphabetical catalog is at the bottom of this file (auto-generated).

## How to Use This Plugin

1. **Foundation — `/cm-context`.** Always run first on a new project. Captures product, audience, positioning, competitors, brand voice into `.agents/product-marketing-context.md`. Every other skill reads it.
2. **Position before tactics — `/cm-position`.** Run a Dunford-style positioning workshop before writing copy, planning channels, or building pages. Outputs feed `messaging-framework` and `value-proposition`.
3. **Execute — per skill or via workflow.** For one-off work, invoke the skill directly ("write a case study for…" or `/cm-case-study`). For multi-step projects, use `/cm-copy`, `/cm-launch`, `/cm-research`, `/cm-social`, `/cm-email`.
4. **Compound — `/cm-compound`.** After completing each project, capture one schema-valid learning entry into `.agents/learnings/<category>.md`. v1.7 makes this a strict contract: six required fields (`Context`, `Finding`, `Evidence`, `Implication`, `Linked skills`, `Confidence`), validated on write, rejected if missing evidence. Five skills now read these entries before producing output — see "Prior Learnings System" below.

## Prior Learnings System (v1.7)

The read/write loop that makes knowledge compound. Source of truth: [`skills/_LEARNINGS_SCHEMA.md`](skills/_LEARNINGS_SCHEMA.md) (schema version 1.0.0).

**Write side.** `/cm-compound` appends a single schema-valid entry to `.agents/learnings/<category>.md`. Six required fields per entry — `Context`, `Finding`, `Evidence`, `Implication`, `Linked skills`, `Confidence` (lowercase `low | medium | high` only). Validation rejects writes that fail the schema rather than silently correcting them. Append-only, reverse-chronological, with frontmatter (`category`, `last_updated`, `entries_count`) updated on each write.

**Read side — wired in 5 skills in v1.7.** A new H2 section, **Prior Learnings Consulted**, runs before the Process in: `copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`. The contract:

1. Resolve `.agents/learnings/<this-skill-name>.md`. If absent or empty, state so and proceed.
2. Parse YAML frontmatter; if malformed, surface and continue without applying.
3. Select up to 3 reverse-chronological entries whose `Implication` would meaningfully change this run.
4. Surface them under the literal heading **`Prior learnings considered:`** — never hidden.
5. Apply by default; override explicitly by entry date and reason.

The literal heading is the consumption contract — wired skills parse positionally. Authors of new skills can copy/paste the canonical section from `skills/_TEMPLATE.md`.

**Validator.** `scripts/validate-skills.js` emits a non-blocking warning when a skill listed in `PRIOR_LEARNINGS_WIRED` is missing the section. Warnings print in their own block; only errors fail the build.

**Future releases.** The schema is forward-compatible. v1.8 will continue the rollout to additional skills and add a dedicated `cm-learnings-researcher` agent for frontmatter-first retrieval as `.agents/learnings/` grows.

## Adding a New Skill

1. Create `skills/{skill-name}/SKILL.md` with YAML frontmatter (`name`, `description`, `metadata.version`).
2. Follow `skills/_TEMPLATE.md` — the validated 7-section structure (Role / Initial Assessment / Process / Output Format / Quality Bar with ≥5 Common Mistakes / ≥2 Examples / ≥3 Related Skills). Plus an optional **Prior Learnings Consulted** section before Process — copy from `_TEMPLATE.md` if your skill should compound knowledge.
3. Run `node scripts/validate-skills.js` to verify structure, then `node scripts/generate-claude-md.js` to refresh the Skills index below.
4. Update the skill counts and tables in `AGENTS.md` and `README.md` if the total changes.

## MCP Integration

A few skills (research-heavy ones — `icp-research`, `competitive-analysis`, `market-sizing`, `competitor-content-monitoring`, `ai-seo`) benefit from real web search via MCP. Pre-configured servers:

- **Perplexity** — `perplexity_search`, `perplexity_ask`, `perplexity_reason`, `perplexity_research`.
- **Exa** — `company_research_exa`, `people_search_exa`, `web_search_exa`, `deep_researcher_start/check`.

Install via `/cm-setup` (it offers MCP wiring) or `npx compounding-marketing` (writes the right config file per tool: `.mcp.json`, `.cursor/mcp.json`, or `~/.codex/config.toml`). API keys are stored in `.cm-config.json` (gitignored).

## Important Conventions

- **Run `/cm-context` first on every new project.** Skills are designed to read `.agents/product-marketing-context.md` and degrade gracefully when it's missing — but quality is much higher with it.
- **Slash command syntax is `/cm-{name}` with a hyphen** (not the older colon-form).
- **Learnings live in `.agents/learnings/{category}.md`.** Written by `/cm-compound`.
- **Edits to `CLAUDE.md` / `AGENTS.md` are wrapped in `<!-- COMPOUNDING-MARKETING-START/END -->` markers.** Re-running setup is idempotent — never duplicates the block.
- **No file write happens without confirmation.** The wizard prompts for every collision (merge / overwrite-with-`.bak` / skip). `--dry-run` previews everything; `--uninstall` reverses it.

## Skills (61)

### ab-test-setup

**Description:** Design statistically valid A/B tests with proper hypothesis, sample size, and decision criteria. Triggers - A/B test, split test, experiment, hypothesis testing, conversion test.

**Location:** `skills/ab-test-setup/SKILL.md`

### abm-strategy

**Description:** Plan and execute account-based marketing (ABM) campaigns for B2B SaaS. Covers target account selection, tier framework, personalization playbooks, multi-channel orchestration, measurement. Triggers - ABM, account-based marketing, target accounts, enterprise marketing, B2B campaigns, account targeting.

**Location:** `skills/abm-strategy/SKILL.md`

### ad-creative

**Description:** Write ad copy and design ad creative for paid campaigns. Platform-specific best practices. Triggers - ad copy, ad creative, Facebook ad, Google ad, LinkedIn ad, ad writing.

**Location:** `skills/ad-creative/SKILL.md`

### ai-seo

**Description:** Optimize for AI search (ChatGPT, Perplexity, Google SGE). Covers AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization). Triggers - AI search, AEO, GEO, ChatGPT SEO, AI optimization, answer engine optimization.

**Location:** `skills/ai-seo/SKILL.md`

### analytics-tracking

**Description:** Set up event tracking, conversion pixels, and analytics for marketing campaigns. Covers GA4, Meta Pixel, LinkedIn Insight Tag. Triggers - analytics setup, event tracking, conversion tracking, GA4, tracking pixels.

**Location:** `skills/analytics-tracking/SKILL.md`

### attribution-modeling

**Description:** Set up marketing attribution to understand which channels drive conversions. Covers first-touch, last-touch, multi-touch models. Triggers - attribution, marketing attribution, attribution model, channel attribution, multi-touch attribution.

**Location:** `skills/attribution-modeling/SKILL.md`

### brand-voice

**Description:** Document brand voice, tone, and writing guidelines with "this, not that" examples. Creates consistent voice across all content. Triggers - brand voice guide, tone of voice, writing guidelines, brand personality, voice consistency, style guide.

**Location:** `skills/brand-voice/SKILL.md`

### case-study

**Description:** Write compelling customer success stories using story arc framework (Before → Decision → After). Leads with results, includes metrics and quotes. Triggers - case study, customer story, success story, testimonial, customer spotlight.

**Location:** `skills/case-study/SKILL.md`

### channel-strategy

**Description:** Prioritize marketing channels based on ICP, goals, and resources. Evaluates channel fit and creates focused channel plan. Triggers - channel strategy, channel selection, marketing channels, channel prioritization, channel mix.

**Location:** `skills/channel-strategy/SKILL.md`

### churn-prevention

**Description:** Identify churn signals, design retention campaigns, create save offers. Reduce customer churn. Triggers - churn reduction, retention, cancel flow, save offer, win-back, churn prevention.

**Location:** `skills/churn-prevention/SKILL.md`

### cm-context

**Description:** The foundational product-marketing context document. Run this first before any marketing work. Creates `.agents/product-marketing-context.md` with product details, positioning, audience, competitors, and brand voice. Triggers - new project, missing context, product brief, context document, foundation setup.

**Location:** `skills/cm-context/SKILL.md`

### cold-email

**Description:** Write high-converting B2B cold outreach emails using direct-response frameworks. Personalized, value-first, clear CTA. Triggers - cold email, outreach email, prospecting, cold outreach, B2B email.

**Location:** `skills/cold-email/SKILL.md`

### community-strategy

**Description:** Build and grow online communities (Slack, Discord, forum) to increase engagement, retention, and advocacy. Triggers - community building, Slack community, Discord server, community strategy, online community.

**Location:** `skills/community-strategy/SKILL.md`

### competitive-analysis

**Description:** Strategic competitive analysis for positioning and differentiation. Maps competitors, alternatives, feature matrices, pricing, white space opportunities. Triggers - competitive analysis, competitor research, competitive landscape, market analysis, competitor comparison.

**Location:** `skills/competitive-analysis/SKILL.md`

### competitor-alternatives

**Description:** Create comparison and alternative pages optimized for bottom-of-funnel SEO ("X vs Y", "X alternative"). Captures high-intent search traffic. Triggers - comparison page, alternative page, vs page, competitor comparison, X vs Y, competitor alternative.

**Location:** `skills/competitor-alternatives/SKILL.md`

### competitor-content-monitoring

**Description:** Track competitor content publishing and identify content gaps using neural search and alerts. Covers Exa, Google Alerts, RSS monitoring, and competitive intelligence workflow. Triggers - competitor content, content gap analysis, competitive monitoring, competitor watch, content intelligence.

**Location:** `skills/competitor-content-monitoring/SKILL.md`

### content-performance-scoring

**Description:** Score content quality before and after publishing using multi-dimensional framework. Covers SEO, readability, engagement prediction, and brand voice alignment. Triggers - content score, quality score, pre-publish checklist, content audit, SEO score, readability check.

**Location:** `skills/content-performance-scoring/SKILL.md`

### content-strategy

**Description:** Plan content topics, formats, distribution, and calendar. Maps content to customer journey and business goals. Triggers - content plan, content calendar, editorial calendar, content topics, content strategy, blog planning.

**Location:** `skills/content-strategy/SKILL.md`

### copy-editing

**Description:** Edit and improve existing marketing copy for clarity, persuasion, brand voice, and conversion. Audits against CRO best practices, applies copywriting frameworks, provides before/after examples. Triggers - edit copy, improve copy, copy review, copy audit, refine copy, polish copy.

**Location:** `skills/copy-editing/SKILL.md`

### copywriting

**Description:** Write conversion-focused marketing copy for any page type (homepage, landing page, pricing, feature pages). Uses proven frameworks and customer language. Triggers - write copy, landing page copy, homepage copy, page copy, marketing copy, conversion copy, sales copy.

**Location:** `skills/copywriting/SKILL.md`

### customer-interview

**Description:** Plan, conduct, and synthesize customer interviews for product and marketing insights. Includes interview guides, question frameworks, and synthesis templates. Triggers - customer interview, user interview, interview guide, customer calls, user research interview.

**Location:** `skills/customer-interview/SKILL.md`

### customer-research

**Description:** Synthesize customer interviews and feedback into actionable insights using Jobs-to-be-Done framework. Maps switching triggers, hiring criteria, anxieties, and desired outcomes. Triggers - JTBD, jobs to be done, customer interviews, user research, customer insights, interview synthesis.

**Location:** `skills/customer-research/SKILL.md`

### email-deliverability

**Description:** Ensure emails reach the inbox (not spam). Covers email authentication (SPF, DKIM, DMARC), domain warmup, IP warmup, sender reputation, spam avoidance, list hygiene. Triggers - email deliverability, inbox placement, spam folder, email authentication, SPF, DKIM, DMARC, domain warmup, sender reputation.

**Location:** `skills/email-deliverability/SKILL.md`

### email-sequence

**Description:** Design automated email flows (welcome, nurture, trial, abandoned cart). Maps emails to customer journey. Triggers - email sequence, drip campaign, email automation, welcome series, nurture sequence.

**Location:** `skills/email-sequence/SKILL.md`

### form-cro

**Description:** Optimize forms (contact, demo request, lead gen) for higher completion rates. Covers field optimization, button copy, layout, friction reduction, A/B testing frameworks. Triggers - form optimization, contact form, lead form, form CRO, form conversion.

**Location:** `skills/form-cro/SKILL.md`

### free-tool-strategy

**Description:** Create free marketing tools and calculators that attract leads and demonstrate value. Common SaaS growth tactic. Triggers - free tool, calculator, lead magnet tool, marketing tool, free resource, interactive tool.

**Location:** `skills/free-tool-strategy/SKILL.md`

### gtm-strategy

**Description:** Design go-to-market motion (PLG vs. sales-led vs. hybrid). Analyzes product fit, defines funnel, outlines team structure. Triggers - go-to-market, GTM strategy, sales motion, PLG, product-led growth, sales-led.

**Location:** `skills/gtm-strategy/SKILL.md`

### icp-research

**Description:** Develop detailed Ideal Customer Profile through data analysis and pattern identification. Defines firmographics, behaviors, psychographics, and qualification criteria. Triggers - ICP, ideal customer profile, target customer, customer profile, best-fit customer, persona development.

**Location:** `skills/icp-research/SKILL.md`

### launch-strategy

**Description:** Plan comprehensive product launches with timeline, channels, and tactics. Covers pre-launch, launch day, and post-launch activities. Triggers - product launch, launch plan, launch strategy, go-to-market launch, feature launch.

**Location:** `skills/launch-strategy/SKILL.md`

### lead-magnets

**Description:** Design lead magnets (ebooks, templates, checklists, calculators) that attract and qualify leads. Maps to customer journey. Triggers - lead magnet, content upgrade, downloadable, ebook, template, checklist, calculator.

**Location:** `skills/lead-magnets/SKILL.md`

### linkedin-ads

**Description:** Plan and optimize LinkedIn advertising campaigns for B2B lead generation. Covers targeting, ad formats, budgeting, and optimization. Triggers - LinkedIn ads, LinkedIn advertising, B2B ads, LinkedIn campaigns, sponsored content.

**Location:** `skills/linkedin-ads/SKILL.md`

### market-sizing

**Description:** Calculate TAM/SAM/SOM for market opportunity analysis. Uses top-down and bottom-up methods to size addressable market. Includes data sources and validation approaches. Triggers - TAM, SAM, SOM, market size, total addressable market, market opportunity, market analysis.

**Location:** `skills/market-sizing/SKILL.md`

### marketing-automation

**Description:** Set up and optimize marketing automation for B2B SaaS using HubSpot, ActiveCampaign, Marketo, or Klaviyo. Covers workflows, segmentation, scoring, and reporting. Triggers - marketing automation, email automation, HubSpot setup, ActiveCampaign, Marketo, workflow automation, lead nurture.

**Location:** `skills/marketing-automation/SKILL.md`

### marketing-ideas

**Description:** 140+ tactical marketing ideas for SaaS across acquisition, activation, retention, and revenue. Brainstorm and prioritize tactics. Triggers - marketing ideas, marketing tactics, growth ideas, marketing brainstorm, tactic ideas.

**Location:** `skills/marketing-ideas/SKILL.md`

### marketing-psychology

**Description:** Apply psychological principles to marketing and persuasion. Covers cognitive biases, influence triggers, behavioral economics, ethical persuasion. Triggers - persuasion, psychology, cognitive bias, influence, behavioral economics, conversion psychology.

**Location:** `skills/marketing-psychology/SKILL.md`

### messaging-framework

**Description:** Convert positioning into actionable messaging pillars with proof points, objection handling, and segment mapping. Builds on positioning work to create a reusable messaging system. Triggers - messaging pillars, core messages, messaging strategy, proof points, message architecture, value messaging.

**Location:** `skills/messaging-framework/SKILL.md`

### newsletter-growth

**Description:** Strategies and tactics to grow email newsletter subscribers. Covers lead magnets, signup optimization, content upgrades, partnerships, and paid acquisition. Triggers - newsletter growth, email list growth, subscriber growth, list building, email acquisition.

**Location:** `skills/newsletter-growth/SKILL.md`

### onboarding-cro

**Description:** Optimize user onboarding for higher activation rates. Covers aha moment engineering, progressive onboarding, empty state design, drop-off analysis. Triggers - onboarding optimization, user activation, onboarding flow, aha moment, time to value.

**Location:** `skills/onboarding-cro/SKILL.md`

### page-cro

**Description:** Analyze and optimize marketing pages for conversions. Audits value prop clarity, headline effectiveness, CTA placement, trust signals. Triggers - CRO, conversion optimization, landing page optimization, page optimization, conversion audit.

**Location:** `skills/page-cro/SKILL.md`

### paid-ads

**Description:** Plan and optimize paid advertising campaigns (Google, Facebook, LinkedIn). Covers targeting, budgeting, campaign structure. Triggers - paid ads, PPC, Google Ads, Facebook Ads, LinkedIn Ads, paid campaigns.

**Location:** `skills/paid-ads/SKILL.md`

### partnership-marketing

**Description:** Design co-marketing partnerships, integrations, and affiliate programs. Leverage other brands' audiences. Triggers - partnerships, co-marketing, integration marketing, affiliate, partner program.

**Location:** `skills/partnership-marketing/SKILL.md`

### paywall-upgrade-cro

**Description:** Optimize paywall and upgrade flows for higher conversion to paid plans. Covers trigger logic, pricing psychology, plan comparison design, objection handling, upgrade funnel optimization. Triggers - paywall, upgrade flow, pricing page, freemium conversion, free-to-paid conversion.

**Location:** `skills/paywall-upgrade-cro/SKILL.md`

### popup-cro

**Description:** Optimize popups and overlays for lead capture without harming user experience. Covers timing, triggers, offer types, copy frameworks, mobile optimization. Triggers - popup optimization, lightbox, overlay, exit-intent, popup CRO, lead capture popup.

**Location:** `skills/popup-cro/SKILL.md`

### positioning

**Description:** Define market position using April Dunford's Obviously Awesome framework. Identify competitive alternatives, unique attributes, value delivered, best-fit customers, and market category. Triggers - positioning workshop, market position, differentiation strategy, April Dunford, positioning canvas, product positioning.

**Location:** `skills/positioning/SKILL.md`

### press-pr

**Description:** Plan and execute PR and media outreach for product launches, funding announcements, and thought leadership. Includes press release templates, media list building, and pitch frameworks. Triggers - press release, PR strategy, media outreach, press pitch, media relations, journalist outreach.

**Location:** `skills/press-pr/SKILL.md`

### pricing-strategy

**Description:** Design pricing page, packaging, and pricing strategy. Covers tiering, anchoring, feature bundling, pricing psychology, monetization models, A/B testing. Triggers - pricing page, pricing strategy, pricing tiers, packaging, pricing optimization, monetization.

**Location:** `skills/pricing-strategy/SKILL.md`

### product-hunt-launch

**Description:** Plan and execute a successful Product Hunt launch. From pre-launch preparation to launch day execution and post-launch follow-up. Triggers - product hunt, PH launch, product launch, launch day, PH strategy.

**Location:** `skills/product-hunt-launch/SKILL.md`

### programmatic-seo

**Description:** Create hundreds or thousands of SEO-optimized pages at scale using templates and data. Common for location pages, comparison pages, category pages. Triggers - programmatic SEO, scaled SEO, template-based pages, location pages, comparison pages.

**Location:** `skills/programmatic-seo/SKILL.md`

### referral-program

**Description:** Design referral and affiliate programs that incentivize customer advocacy. Covers incentive structures, tracking, and promotion. Triggers - referral program, affiliate program, customer referrals, referral marketing, word-of-mouth.

**Location:** `skills/referral-program/SKILL.md`

### revops

**Description:** Design revenue operations processes — lead lifecycle, CRM management, handoff between marketing and sales. Triggers - RevOps, revenue operations, lead management, CRM, marketing-sales alignment, lead lifecycle.

**Location:** `skills/revops/SKILL.md`

### sales-enablement

**Description:** Create sales collateral (pitch decks, one-pagers, battle cards) that help sales teams close deals. Triggers - sales enablement, pitch deck, sales collateral, battle cards, sales materials, one-pager.

**Location:** `skills/sales-enablement/SKILL.md`

### schema-markup

**Description:** Implement structured data (Schema.org) for rich snippets, knowledge panels, and AI search. Triggers - schema markup, structured data, rich snippets, schema.org, JSON-LD.

**Location:** `skills/schema-markup/SKILL.md`

### seo-audit

**Description:** Comprehensive SEO audit covering technical, on-page, content, and off-page optimization. Identifies issues and prioritizes fixes by impact. Triggers - SEO audit, technical SEO, on-page SEO, SEO analysis, SEO optimization, site audit.

**Location:** `skills/seo-audit/SKILL.md`

### signup-flow-cro

**Description:** Optimize signup flows for higher completion rates. Covers step reduction, progressive disclosure, friction audit, error handling, conversion psychology. Triggers - signup flow, registration flow, signup optimization, signup CRO, account creation flow.

**Location:** `skills/signup-flow-cro/SKILL.md`

### site-architecture

**Description:** Design URL structure, navigation hierarchy, and internal linking for SEO and UX. Triggers - site structure, URL structure, information architecture, site hierarchy, navigation.

**Location:** `skills/site-architecture/SKILL.md`

### social-content

**Description:** Create social media content (Twitter threads, LinkedIn posts, engagement posts) aligned to brand voice and marketing goals. Triggers - social media, Twitter thread, LinkedIn post, social content, tweet, engagement post.

**Location:** `skills/social-content/SKILL.md`

### social-media-strategy

**Description:** Plan and manage social media presence across platforms. Covers channel selection, posting cadence, content calendars, engagement tactics, growth loops, cross-platform repurposing. Triggers - social media strategy, content calendar, posting schedule, social media management, cross-platform strategy, social media planning.

**Location:** `skills/social-media-strategy/SKILL.md`

### testimonial-collection

**Description:** Systematically gather customer testimonials, reviews, and social proof. Includes templates and processes. Triggers - testimonial collection, customer reviews, social proof, testimonial request, review gathering.

**Location:** `skills/testimonial-collection/SKILL.md`

### value-proposition

**Description:** Design value propositions for customer segments using Strategyzer Value Proposition Canvas. Maps customer jobs, pains, and gains to product features, pain relievers, and gain creators. Triggers - value prop, value proposition canvas, customer jobs, pains and gains, value design, segment value prop.

**Location:** `skills/value-proposition/SKILL.md`

### video-marketing

**Description:** Plan video content strategy — explainer videos, product demos, testimonials, thought leadership. Includes scripting and distribution. Triggers - video strategy, video content, explainer video, product demo video, video marketing, video script.

**Location:** `skills/video-marketing/SKILL.md`

### webinar-strategy

**Description:** Plan and promote webinars for lead generation, product education, and thought leadership. Triggers - webinar, webinar strategy, event marketing, online event, virtual event.

**Location:** `skills/webinar-strategy/SKILL.md`

