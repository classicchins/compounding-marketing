# CLAUDE.md — Compounding Marketing

The Compounding Marketing plugin: **91 skills (75 content + 14 workflows + 2 lifecycle)** for SaaS marketing, available to Claude Code, Claude Cowork, Cursor, Codex, ChatGPT, and Zed.

## What This Is

Compounding Marketing is a cross-platform AI plugin providing **91 skills** for SaaS marketing — positioning, messaging, copy, CRO, SEO, GTM, lifecycle, growth.

It is **not a traditional codebase**. It's a structured knowledge system: everything is a skill (`skills/<name>/SKILL.md`) with a `kind: skill | workflow | lifecycle` frontmatter that routes the validator. The setup wizard (`bin/setup.js`) installs skills into your AI tool of choice with safe, prompt-driven file writes.

Philosophy: **Make each unit of marketing work easier than the last.** 80% research and planning, 20% execution. Core loop: **Research → Position → Message → Execute → Compound.**

## Quick Reference

| You want to… | Invoke it as | Notes |
|---|---|---|
| Use a single content skill (e.g., write copy) | Natural language ("write landing page copy for…") **or** `/cm-{skill}` (e.g., `/cm-copywriting`) | All 75 content skills are registered as slash commands. Natural language also works — the right skill is matched by trigger keywords. |
| Run a multi-step workflow | `/cm-flow-{name}` (e.g., `/cm-flow-research`, `/cm-flow-copy`, `/cm-flow-launch`) | 14 workflows orchestrate multiple skills end-to-end. Legacy `/cm-{name}` short forms still work via backward-compat shims through v2.0. |
| Establish project foundation (do this first) | `/cm-context`, then `/cm-strategy` | Creates `.agents/product-marketing-context.md` and `.agents/STRATEGY.md` — every other skill reads both. |
| Install / update / remove the plugin | `/cm-setup`, `/cm-uninstall`, or `npx compounding-marketing` | The npx wizard supports `--dry-run`, `--yes`, `--scope`, `--tool`. |

> Slash commands use **`/cm-{name}`** (hyphen, not colon). Workflows are canonical as `/cm-flow-{name}` in v1.8+.

## Repository Structure

```
skills/           # 91 SKILL.md files. Each carries kind: skill | workflow | lifecycle.
                  # Workflows: skills/cm-flow-*/SKILL.md
                  # Lifecycle: skills/cm-{setup,uninstall}/SKILL.md
                  # Everything else: kind: skill (75 content skills)
bin/setup.js      # npx setup wizard — readline-only CLI, no external deps, ~1260 lines
scripts/          # generate-claude-md.js (refreshes the Skills section below)
                  # validate-skills.js  (kind-aware structural validator)
references/       # sub-agent-dispatch.md — v1.8 orchestrator → sub-agent contract
mcp/              # Pre-configured MCP servers (Perplexity, Exa) for research enhancement
integrations/     # Optional tool integrations (Linear, GA4, etc.)
.cursor-plugin/   # Cursor Marketplace package (v1.8.1 publish target)
.agents/          # Runtime: product-marketing-context.md + STRATEGY.md
                  # + learnings/<category>.md + integrations.md
```

There are no tests or builds. This is a content/knowledge repo. Use:

```bash
npx compounding-marketing                    # interactive setup
node scripts/validate-skills.js              # enforce skill structure
node scripts/generate-claude-md.js           # regenerate the Skills section below
```

## Workflow & Lifecycle Commands by Category

The 14 workflows live at `skills/cm-flow-<name>/SKILL.md` (`kind: workflow`); the 2 lifecycle commands at `skills/cm-{setup,uninstall}/SKILL.md` (`kind: lifecycle`). Invoke via `/cm-flow-<name>` (legacy `/cm-<name>` short forms still work via backward-compat shims).

| Category | Commands | When |
|---|---|---|
| **Lifecycle** | `/cm-setup`, `/cm-uninstall` | Bootstrap or remove the plugin in a project (safe, prompt-driven). |
| **Project workflows** | `/cm-flow-research`, `/cm-flow-position`, `/cm-flow-audit`, `/cm-flow-copy`, `/cm-flow-launch`, `/cm-flow-social`, `/cm-flow-email`, `/cm-flow-compound` | Multi-step projects. `cm-flow-research`, `cm-flow-position`, and `cm-flow-audit` are v1.8 orchestrators that fan out parallel sub-agents on Claude Code. |
| **Sprint & review** | `/cm-flow-sprint`, `/cm-flow-retro` | 2-week sprint planning, retrospective. `cm-flow-retro` supports headless JSON input/output and chains into `cm-flow-compound`. |
| **Daily ops** | `/cm-flow-daily`, `/cm-flow-standup`, `/cm-flow-eod`, `/cm-flow-weekly` | Morning orientation, async standup, end-of-day wrap, Friday review/plan. `cm-flow-weekly` and `cm-flow-audit` also support headless mode. |

## Skill Categories

75 content skills across 13 categories.

| Category | Count | Sample skills |
|---|---|---|
| Foundation | 6 | cm-context, cm-strategy, positioning, messaging-framework |
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
| Meta | 3 | marketing-ideas (140+ SaaS tactics), cm-skill-author, cm-learnings-researcher |
| Sub-agent specialists (v1.8) | 11 | cm-icp-finder, cm-competitor-mapper, cm-customer-voice-miner, cm-canvas-runner, cm-category-tester, cm-conversion-auditor, cm-funnel-auditor, cm-seo-auditor, cm-content-auditor, cm-market-sizing-runner, cm-alternatives-mapper |

The full alphabetical catalog is at the bottom of this file (auto-generated).

## How to Use This Plugin

1. **Foundation — `/cm-context` then `/cm-strategy`.** Always run first on a new project. `cm-context` captures product, audience, positioning, competitors, brand voice into `.agents/product-marketing-context.md`. `cm-strategy` (v1.8) names the current strategic bet — audience, motion, primary lever, anti-goals — into `.agents/STRATEGY.md`. Every other skill reads both.
2. **Position before tactics — `/cm-flow-position`.** Run a Dunford-style positioning workshop before writing copy, planning channels, or building pages. v1.8 orchestrator fans out canvas-runner, category-tester, alternatives-mapper sub-agents in parallel and folds outputs into `messaging-framework` and `value-proposition`.
3. **Execute — per skill or via workflow.** For one-off work, invoke the skill directly ("write a case study for…" or `/cm-case-study`). For multi-step projects, use `/cm-flow-copy`, `/cm-flow-launch`, `/cm-flow-research`, `/cm-flow-social`, `/cm-flow-email`.
4. **Compound — `/cm-flow-compound`.** After completing each project, capture one schema-valid learning entry into `.agents/learnings/<category>.md`. v1.7 makes this a strict contract: six required fields (`Context`, `Finding`, `Evidence`, `Implication`, `Linked skills`, `Confidence`), validated on write, rejected if missing evidence. Five skills read these entries before producing output — see "Prior Learnings System" below. v1.8's `cm-learnings-researcher` handles retrieval as the library grows.

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

**Future releases.** The schema is forward-compatible. v1.8 ships `cm-learnings-researcher` for frontmatter-first retrieval; v1.9 continues the rollout to additional wired skills.

## v1.8 architecture

- **Unified skill model.** `commands/` is gone. Workflows live at `skills/cm-flow-*/SKILL.md` and lifecycle commands at `skills/cm-{setup,uninstall}/SKILL.md`. The `kind: skill | workflow | lifecycle` frontmatter routes the validator.
- **Sub-agent tier.** Three orchestrators (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`) dispatch 11 specialists in parallel via the Task tool on Claude Code; other platforms fall back to explicit sequencing. Contract: `references/sub-agent-dispatch.md`.
- **Canonical install surface.** Skills install at `.claude/skills/<name>/` (the surface Claude Code reads natively). `.claude/commands/` carries only 14 backward-compat workflow shims.
- **`cm-learnings-researcher`.** Frontmatter-first 7-step retrieval over `.agents/learnings/<category>.md`. The factored-out read side for the v1.7 Prior Learnings system.
- **Headless mode.** `cm-flow-{compound,audit,retro,weekly}` accept JSON input and emit JSON output with documented schemas. Retro → compound is the headline chain.
- **Integration auto-detection (opt-in).** Setup wizard scans MCP config and writes `.agents/integrations.md` so skills know what's available. Per-skill integration-aware behavior arrives in v1.9.
- **Cursor plugin package.** `.cursor-plugin/` ships in the repo; Cursor Marketplace publication is the v1.8.1 target.

## Adding a New Skill

1. **Fastest path:** run `cm-skill-author` (the v1.8 meta-skill). It scaffolds a validator-passing SKILL.md and prints the `node scripts/validate-skills.js …` command to confirm.
2. **Manual path:** create `skills/{skill-name}/SKILL.md` with YAML frontmatter (`name`, `description`, `when_to_use`, `kind: skill | workflow | lifecycle`, `metadata.version`).
3. Follow `skills/_TEMPLATE.md` — the validated 7-section structure (Role / Initial Assessment / Process / Output Format / Quality Bar with ≥5 Common Mistakes / ≥2 Examples / ≥3 Related Skills). Plus an optional **Prior Learnings Consulted** section before Process. For an orchestrator skill, optionally add a **Sub-agent dispatch** section per `references/sub-agent-dispatch.md`.
4. Run `node scripts/validate-skills.js` to verify structure (kind-aware — full check for `kind: skill`, lite for `kind: workflow | lifecycle`), then `node scripts/generate-claude-md.js` to refresh the Skills index below.
5. Update the skill counts and tables in `AGENTS.md` and `README.md` if the total changes.

## MCP Integration

A few skills (research-heavy ones — `icp-research`, `competitive-analysis`, `market-sizing`, `competitor-content-monitoring`, `ai-seo`) benefit from real web search via MCP. Pre-configured servers:

- **Perplexity** — `perplexity_search`, `perplexity_ask`, `perplexity_reason`, `perplexity_research`.
- **Exa** — `company_research_exa`, `people_search_exa`, `web_search_exa`, `deep_researcher_start/check`.

Install via `/cm-setup` (it offers MCP wiring) or `npx compounding-marketing` (writes the right config file per tool: `.mcp.json`, `.cursor/mcp.json`, or `~/.codex/config.toml`). API keys are stored in `.cm-config.json` (gitignored).

## Important Conventions

- **Run `/cm-context` then `/cm-strategy` first on every new project.** Skills are designed to read `.agents/product-marketing-context.md` and `.agents/STRATEGY.md` and degrade gracefully when they're missing — but quality is much higher with both.
- **Slash command syntax is `/cm-{name}` with a hyphen.** Workflows are canonical as `/cm-flow-{name}` in v1.8+ (legacy `/cm-{name}` short forms still work via backward-compat shims).
- **Learnings live in `.agents/learnings/{category}.md`.** Written by `/cm-flow-compound`. Retrieved by `cm-learnings-researcher`.
- **Edits to `CLAUDE.md` / `AGENTS.md` are wrapped in `<!-- COMPOUNDING-MARKETING-START/END -->` markers.** Re-running setup is idempotent — never duplicates the block.
- **No file write happens without confirmation.** The wizard prompts for every collision (merge / overwrite-with-`.bak` / skip). `--dry-run` previews everything; `--uninstall` reverses it.

## Skills (91)

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

### cm-alternatives-mapper

**Description:** Specialist sub-agent dispatched by the `cm-position` orchestrator to identify and characterize competitive alternatives in four buckets — status quo, manual, adjacent, direct — and rank by buyer-likelihood. Narrower than `competitive-analysis`; positioning-focused, not feature-matrix-focused. Triggers - sub-agent, specialist, alternatives mapper, competitive alternatives, parallel positioning.

**Location:** `skills/cm-alternatives-mapper/SKILL.md`

### cm-canvas-runner

**Description:** Specialist sub-agent dispatched by the `cm-position` orchestrator to run the April Dunford 5-axis Obviously Awesome canvas (alternatives, attributes, value, best-fit customers, category) in a fast structured pass. Narrower than `positioning`; outputs a structured payload for merge. Triggers - sub-agent, specialist, canvas runner, Dunford canvas, 5-axis positioning, parallel positioning.

**Location:** `skills/cm-canvas-runner/SKILL.md`

### cm-category-tester

**Description:** Specialist sub-agent dispatched by the `cm-position` orchestrator to pressure-test category-name candidates against recognizability, buyer-intent search, and messaging-compatibility — returning a category recommendation with rationale. Combines `positioning` and `messaging-framework` methodology. Triggers - sub-agent, specialist, category tester, market category, category design, parallel positioning.

**Location:** `skills/cm-category-tester/SKILL.md`

### cm-competitor-mapper

**Description:** Specialist sub-agent dispatched by the `cm-research` orchestrator to map the competitive landscape in under five minutes — direct competitors, indirect competitors, status-quo alternatives, and white-space gaps. Narrower than `competitive-analysis`; outputs a structured payload designed for merge with peer specialists. Triggers - sub-agent, specialist, competitor mapper, competitive landscape, parallel research, alternatives map.

**Location:** `skills/cm-competitor-mapper/SKILL.md`

### cm-content-auditor

**Description:** Specialist sub-agent dispatched by the `cm-audit` orchestrator to score and audit existing content using the `content-performance-scoring` framework — readability, SEO alignment, engagement potential, brand voice — in a fast structured pass. Triggers - sub-agent, specialist, content auditor, content scoring, parallel audit, content quality pass.

**Location:** `skills/cm-content-auditor/SKILL.md`

### cm-context

**Description:** The foundational product-marketing context document. Run this first before any marketing work. Creates `.agents/product-marketing-context.md` with product details, positioning, audience, competitors, and brand voice. Triggers - new project, missing context, product brief, context document, foundation setup.

**Location:** `skills/cm-context/SKILL.md`

### cm-conversion-auditor

**Description:** Specialist sub-agent dispatched by the `cm-audit` orchestrator to audit conversion surfaces — landing pages, signup flows, forms — using `page-cro`, `signup-flow-cro`, and `form-cro` methodology in a fast structured pass. Triggers - sub-agent, specialist, conversion auditor, CRO audit, parallel audit, page audit.

**Location:** `skills/cm-conversion-auditor/SKILL.md`

### cm-customer-voice-miner

**Description:** Specialist sub-agent dispatched by the `cm-research` orchestrator to mine raw customer language — quotes, JTBD verbatims, switching triggers, anxieties — from existing interview transcripts, reviews, and testimonials. Combines `customer-research` and `testimonial-collection` methodology in a narrow, fast pass. Triggers - sub-agent, specialist, voice of customer, customer language, JTBD verbatims, parallel research.

**Location:** `skills/cm-customer-voice-miner/SKILL.md`

### cm-flow-audit

**Description:** Quarterly marketing health check that dispatches four parallel specialists (SEO, content, conversion, funnel) and merges their findings into a prioritized audit report. Interactive or headless mode. Triggers - marketing audit, marketing health check, quarterly audit, audit workflow, audit pack.

**Location:** `skills/cm-flow-audit/SKILL.md`

### cm-flow-compound

**Description:** Capture a schema-valid learning entry to `.agents/learnings/<category>.md` — six required fields (Context, Finding, Evidence, Implication, Linked skills, Confidence), interactive or headless mode. The write side of the compounding loop. Triggers - capture learning, compound learning, log insight, learnings entry, post-experiment learning.

**Location:** `skills/cm-flow-compound/SKILL.md`

### cm-flow-copy

**Description:** End-to-end copywriting workflow — reads positioning + messaging, runs the copywriting skill, audits via page-cro, returns polished copy plus A/B test ideas. Triggers - copy workflow, end-to-end copy, write and audit copy, copy plus CRO.

**Location:** `skills/cm-flow-copy/SKILL.md`

### cm-flow-daily

**Description:** 10-minute morning marketing review — what's live, performance snapshot, wins, flags, the ONE priority for today. Keeps you oriented without drowning in dashboards. Triggers - daily marketing review, daily check-in, marketing morning review, daily standup with self.

**Location:** `skills/cm-flow-daily/SKILL.md`

### cm-flow-email

**Description:** End-to-end email campaign workflow — picks campaign type, segments audience, drafts subject lines and copy, plans send timing, defines success metrics. Triggers - email campaign workflow, send an email campaign, email campaign setup, plan an email blast.

**Location:** `skills/cm-flow-email/SKILL.md`

### cm-flow-eod

**Description:** 5-10 minute end-of-day marketing ritual — what shipped, what's in progress, blockers, tomorrow's first task. Captures context while fresh and sets up a fast-start morning. Triggers - end of day marketing, EOD wrap, marketing closing ritual, end of day review.

**Location:** `skills/cm-flow-eod/SKILL.md`

### cm-flow-launch

**Description:** End-to-end launch workflow — runs launch-strategy, gtm-strategy (if new product), and channel-strategy, then assembles a unified launch plan with timeline, owners, channel tactics, and success metrics. Triggers - launch workflow, launch plan, plan a launch, full launch planning.

**Location:** `skills/cm-flow-launch/SKILL.md`

### cm-flow-position

**Description:** End-to-end positioning workshop that dispatches three parallel specialists (canvas runner, alternatives mapper, category tester) and merges their returns into a unified Positioning Canvas plus category recommendation, then chains into messaging and value-prop work. Triggers - positioning workshop, full positioning, position workflow, Dunford workshop, category test.

**Location:** `skills/cm-flow-position/SKILL.md`

### cm-flow-research

**Description:** End-to-end research workflow that dispatches four parallel specialists (ICP finder, competitor mapper, customer-voice miner, market-sizing runner) and merges their returns into a single Research Pack. Triggers - deep research, market research workflow, research pack, run research, foundation research.

**Location:** `skills/cm-flow-research/SKILL.md`

### cm-flow-retro

**Description:** Structured post-mortem for campaigns, launches, or sprints — keep/stop/start, surprises, action items, learnings to feed cm-flow-compound. Interactive or headless mode. Triggers - retrospective, post mortem, campaign retro, sprint retro, launch debrief.

**Location:** `skills/cm-flow-retro/SKILL.md`

### cm-flow-social

**Description:** End-to-end social media campaign workflow — defines campaign goal, picks platforms, builds a 30-day content calendar, plans engagement tactics, sets measurement. Triggers - social campaign, social media campaign, plan a social campaign, 30-day social plan, social workflow.

**Location:** `skills/cm-flow-social/SKILL.md`

### cm-flow-sprint

**Description:** Plan a focused 2-week marketing sprint — one sprint goal, 3-5 concrete deliverables, task breakdown, capacity check, success criteria. Prevents scope creep. Triggers - sprint planning, marketing sprint, plan a sprint, two week sprint, sprint goal.

**Location:** `skills/cm-flow-sprint/SKILL.md`

### cm-flow-standup

**Description:** 5-minute async marketing standup — yesterday's shipped work, today's priorities, blockers, optional metric check. For team syncs or solo accountability. Triggers - marketing standup, async standup, daily marketing standup, team check-in, marketing huddle.

**Location:** `skills/cm-flow-standup/SKILL.md`

### cm-flow-weekly

**Description:** 30-45 minute Friday review that synthesizes the week, finds patterns, celebrates wins, diagnoses problems, and plans next week. Interactive or headless mode. Triggers - weekly marketing review, Friday review, weekly recap, weekly synthesis, week-in-review.

**Location:** `skills/cm-flow-weekly/SKILL.md`

### cm-funnel-auditor

**Description:** Specialist sub-agent dispatched by the `cm-audit` orchestrator to audit funnel attribution, tracking gaps, and stage-by-stage drop-offs using `attribution-modeling` and `analytics-tracking` methodology in a fast structured pass. Triggers - sub-agent, specialist, funnel auditor, attribution audit, analytics gaps, parallel audit.

**Location:** `skills/cm-funnel-auditor/SKILL.md`

### cm-icp-finder

**Description:** Specialist sub-agent dispatched by the `cm-research` orchestrator to identify and characterize 2-3 high-fit ICP segments under a tight time budget. Narrower than `icp-research` — drops the 20-customer data requirement and produces a structured JSON payload designed for merge with peer specialists. Triggers - sub-agent, specialist, ICP finder, ICP cohorts, segment identification, parallel research.

**Location:** `skills/cm-icp-finder/SKILL.md`

### cm-learnings-researcher

**Description:** Frontmatter-first retrieval agent for `.agents/learnings/<category>.md`. Other skills call this researcher to find the 1-3 most relevant prior learnings without re-scanning the whole vault. Triggers - research learnings, search past learnings, prior learnings lookup, retrieve learnings, learnings researcher, learning relevance.

**Location:** `skills/cm-learnings-researcher/SKILL.md`

### cm-market-sizing-runner

**Description:** Specialist sub-agent dispatched by the `cm-research` orchestrator to produce a directional TAM/SAM/SOM in under five minutes using both top-down and bottom-up methods, with explicit source notes and confidence bands. Narrower than `market-sizing` (no deck-grade depth); outputs a structured payload for merge. Triggers - sub-agent, specialist, TAM runner, market sizing runner, SAM SOM, parallel research.

**Location:** `skills/cm-market-sizing-runner/SKILL.md`

### cm-seo-auditor

**Description:** Specialist sub-agent dispatched by the `cm-audit` orchestrator to run a fast SEO audit pass — technical, on-page, content, and link signals — returning a structured findings payload in under five minutes. Narrower than `seo-audit`; outputs designed for merge with peer audit specialists. Triggers - sub-agent, specialist, SEO auditor, fast SEO audit, parallel audit.

**Location:** `skills/cm-seo-auditor/SKILL.md`

### cm-setup

**Description:** Per-project bootstrap that wires Compounding Marketing into the current project — installs skills, registers slash commands, optionally configures MCP servers, records a manifest. Triggers - install, setup, bootstrap, wire plugin, configure marketing skills.

**Location:** `skills/cm-setup/SKILL.md`

### cm-skill-author

**Description:** Scaffold a new structurally-valid SKILL.md for the compounding-marketing plugin. Generates the 7-section gold-standard template, fills it with skill-specific content, and validates against scripts/validate-skills.js before declaring done. Triggers - new skill, author skill, write skill, skill template, create skill, skill author, scaffold skill, generate skill.

**Location:** `skills/cm-skill-author/SKILL.md`

### cm-strategy

**Description:** Create and maintain `.agents/STRATEGY.md` — the one-page focus document above `product-marketing-context.md`. Captures target problem, primary ICP, key metrics, and active tracks of work so every planning skill can check requests against the current focus. Triggers - strategy, STRATEGY.md, target problem, key metrics, active tracks, focus, what are we working on, quarterly plan, roadmap focus.

**Location:** `skills/cm-strategy/SKILL.md`

### cm-uninstall

**Description:** Reverse a previous Compounding Marketing install using the recorded manifest — restores .bak backups byte-identical, strips marker blocks, removes only wizard-created files. Triggers - uninstall, remove plugin, rollback install, reverse setup.

**Location:** `skills/cm-uninstall/SKILL.md`

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

