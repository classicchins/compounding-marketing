# Compounding Marketing — Agent Instructions

Cross-platform marketing plugin (v1.8.0). **91 skills** — 75 content + 14 workflows + 2 lifecycle — covering positioning, messaging, copy, CRO, SEO, GTM, lifecycle, and growth. Works with Claude Code/Cowork, ChatGPT, Codex, Cursor, Zed, Windsurf, and any AI assistant that reads structured skill files. Philosophy: **each unit of marketing work should make the next one easier.**

## Install (per tool)

| Tool | Command |
|------|---------|
| Claude Code / Cowork | `/plugin marketplace add classicchins/compounding-marketing` then `/plugin install compounding-marketing`, then `/cm-setup` |
| Cursor | `npx compounding-marketing --tool=cursor` |
| Codex (OpenAI) | `npx compounding-marketing --tool=codex --scope=global` |
| ChatGPT (Custom GPT) | `npx compounding-marketing --tool=chatgpt` (prints paste-block + upload list) |
| Zed | `npx compounding-marketing --tool=zed` |
| Other | `npx compounding-marketing --tool=other` |

Flags: `--dry-run`, `--yes`, `--uninstall`, `--scope=global|project|custom`, `--target=<path>`. The wizard never modifies files without prompting (merge / overwrite-with-`.bak` / skip). See `README.md` for the full per-tool target table.

## How skills work

Each skill is `skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`, `when_to_use`, `kind: skill | workflow | lifecycle`, `metadata.version`) and a validated 7-section body:

1. **Role prompt** (40-80 lines) — persona, philosophy, authority
2. **Initial Assessment** — prerequisites + 5-10 diagnostic questions
3. **Process** — 5-10 numbered steps (how-to / decision criteria / gotchas)
4. **Output Format** — fenced markdown template
5. **Quality Bar** — checklist + ≥5 Common Mistakes (mistake / why / fix)
6. **Examples** — ≥2 worked B2B SaaS scenarios
7. **Related Skills** — ≥3 cross-references

`kind: skill` gets the full check; `kind: workflow` and `kind: lifecycle` get a lite check (frontmatter + structure, no line-count or example minimums).

When a user asks for marketing help, load the full `SKILL.md` and execute its Process step-by-step. **Always check `.agents/product-marketing-context.md` and `.agents/STRATEGY.md` first** — the foundation pair created by `cm-context` and `cm-strategy`. Every other skill cross-references them.

## How to invoke skills and commands

- **Claude Code / Cowork** — `/cm-<name>` or `/cm-flow-<name>` slash command or natural language. Skills live in `.claude/skills/<skill>/` (canonical); `.claude/commands/cm-*.md` carries 14 backward-compat workflow shims that forward to `cm-flow-*`.
- **Cursor** — `@cm-<name>` mention, or just describe the task — the agent matches against `.cursor/rules/cm-*.mdc` descriptions (rules are "agent-requested"). v1.8 also ships a `.cursor-plugin/` package for upcoming Marketplace distribution.
- **Codex** — describe the task in natural language. Codex matches trigger keywords against `~/.agents/skills/<name>/SKILL.md` description frontmatter (global) or `./.agents/skills/<name>/` (project).
- **ChatGPT** — paste this `AGENTS.md` (or a slimmed version) into Custom GPT Instructions, then upload selected `skills/<name>/SKILL.md` files as Knowledge. Use trigger phrases from the skill descriptions.
- **Zed** — Zed reads project-root `AGENTS.md` directly; describe the task and the assistant will invoke the right skill.

## Workflow

**Research → Position → Message → Execute → Compound**

- **Foundation first.** Run `cm-context` then `cm-strategy` (or read `.agents/product-marketing-context.md` + `.agents/STRATEGY.md`) before any execution work. Then run positioning, messaging, value-prop skills.
- **80% research, 20% execution.** Use research skills (`icp-research`, `customer-research`, `competitive-analysis`, `market-sizing`) — or the v1.8 orchestrator `cm-flow-research` which fans out parallel sub-agents — to ground every tactical decision.
- **Compound learnings.** After each project, run `/cm-flow-compound` to write insights into `.agents/learnings/<category>.md` so future work builds on solid ground. `cm-learnings-researcher` handles retrieval as the library grows.

## Prior Learnings System (v1.7)

Knowledge compounds through a strict read/write loop.

**Write side — `/cm-compound`.** Captures one schema-valid entry per learning. Six required fields: `Context`, `Finding`, `Evidence`, `Implication`, `Linked skills`, `Confidence` (lowercase `low | medium | high`). Validates before write — entries missing evidence or with vague implications are rejected, not silently fixed. Entries land above existing ones (reverse-chronological) with `last_updated` and `entries_count` frontmatter incremented. Full schema lives in `skills/_LEARNINGS_SCHEMA.md`.

**Read side — Prior Learnings Consulted section.** Five skills run this contract before producing output: `copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`. The contract is 5 steps:

1. Resolve `.agents/learnings/<this-skill-name>.md`. If absent, state so and proceed from first principles.
2. Parse YAML frontmatter; reject malformed files without applying.
3. Select up to 3 reverse-chronological entries whose `Implication` would meaningfully change this run.
4. Surface them under the literal heading **`Prior learnings considered:`** before producing the deliverable — never hidden.
5. Apply by default; override explicitly by date and reason if deviating.

v1.8 factors the read side into a dedicated skill — **`cm-learnings-researcher`** — that does the same 7-step retrieval as a callable specialist. The five wired skills still run the in-line contract by default; delegation to `cm-learnings-researcher` is opt-in until v1.8.1+. The schema is forward-compatible; the validator warns (non-blocking) when a wired skill drops the section.

## v1.8 architecture changes

- **Unified skill model.** The `commands/` directory is gone. Workflows live at `skills/cm-flow-*/SKILL.md` and lifecycle commands at `skills/cm-{setup,uninstall}/SKILL.md`. One paradigm, one validator, one install surface.
- **`kind:` frontmatter.** Every skill carries `kind: skill | workflow | lifecycle`. `cm-flow-*` skills are `kind: workflow`; `cm-setup` and `cm-uninstall` are `kind: lifecycle`; everything else is `kind: skill`. The validator routes its checks accordingly.
- **Sub-agent tier.** v1.8 ships 11 specialist skills (e.g. `cm-icp-finder`, `cm-competitor-mapper`, `cm-conversion-auditor`, `cm-canvas-runner`, `cm-category-tester`) and 3 orchestrators (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`) that dispatch them in parallel. The cross-platform contract is documented at `references/sub-agent-dispatch.md` — Claude Code uses the Task tool; other tools fall back to explicit sequencing.
- **`cm-learnings-researcher`.** The v1.7 Prior Learnings read side is now factored into a dedicated skill — frontmatter-first 7-step retrieval over `.agents/learnings/<category>.md`. Wired skills can delegate to it as the learnings library grows.
- **`.claude/skills/` is canonical.** Skills install there (the surface Claude Code reads natively for Agent Skills). `.claude/commands/` carries only the 14 backward-compat workflow shims that forward `/cm-launch` → `/cm-flow-launch` etc., kept through v2.0.
- **`.cursor-plugin/` package.** A Cursor-Marketplace-ready package ships in the repo; publication is the v1.8.1 target. Existing Cursor users continue to install via `npx compounding-marketing --tool=cursor`.
- **Opt-in integration auto-detection (Phase 1).** The setup wizard offers a step that scans MCP config for known integrations (Perplexity, Exa, Linear, GA4, …) and writes `.agents/integrations.md`. Per-skill integration-aware behavior arrives in v1.9.
- **Headless mode on 4 workflows.** `cm-flow-compound`, `cm-flow-audit`, `cm-flow-retro`, `cm-flow-weekly` accept structured JSON input and emit structured JSON output with documented schemas. The retro → compound chain is the headline use case.
- **`cm-skill-author`.** A meta-skill that scaffolds a validator-passing SKILL.md and emits the validate command. Replaces the read-template-and-hope path for new contributors.
- **`cm-strategy` + STRATEGY.template.md.** A focus layer above context — `.agents/STRATEGY.md` names the current strategic bet (audience, motion, primary lever, anti-goals). Skills read it after `product-marketing-context.md`.
- **`when_to_use:` frontmatter on every skill.** Aligns with the 2026 Agent Skills spec — clearer routing for any agent reading the catalog.

## Cross-platform install targets

The wizard writes the same skill content into the surface each tool reads natively. No tool-specific forks.

| Tool | Canonical surface | Notes |
|------|-------------------|-------|
| Claude Code / Cowork | `.claude/skills/<name>/` (per-project) or `~/.claude/skills/` (global) | `.claude/commands/cm-*.md` carries 14 workflow shims for `/cm-<name>` backward-compat (through v2.0). |
| Cursor | `.cursor/rules/cm-*.mdc` (agent-requested rules) | `.cursor-plugin/` package staged for Marketplace publication in v1.8.1. |
| Codex (OpenAI) | `~/.agents/skills/<name>/SKILL.md` (global) or `./.agents/skills/<name>/` (project) | Matches via trigger keywords in description frontmatter. |
| ChatGPT (Custom GPT) | `AGENTS.md` pasted into Instructions + `skills/<name>/SKILL.md` uploaded as Knowledge | Wizard prints paste-block + upload list. |
| Zed | Project-root `AGENTS.md` | Zed reads it directly; assistant picks the skill from context. |
| Other / generic | `./.agents/skills/<name>/SKILL.md` | Plain SKILL.md works in any tool that can read structured markdown. |

## MCP integration

Research-heavy skills (`icp-research`, `competitive-analysis`, `market-sizing`, `competitor-content-monitoring`, `ai-seo`) benefit from live web search via MCP. Two servers ship pre-configured under `mcp/`:

- **Perplexity** — `perplexity_search`, `perplexity_ask`, `perplexity_reason`, `perplexity_research`.
- **Exa** — `company_research_exa`, `people_search_exa`, `web_search_exa`, `deep_researcher_start/check`.

The wizard writes the right config file per tool (`.mcp.json` for Claude Code, `.cursor/mcp.json` for Cursor, `~/.codex/config.toml` for Codex) and stores API keys in gitignored `.cm-config.json`. The v1.8 opt-in integration auto-detection step scans existing MCP configs for additional providers (Linear, GA4, Search Console, Mixpanel, Meta Ads, …) and records what's available in `.agents/integrations.md` so skills can degrade gracefully when an integration is missing.

## `.agents/` directory — runtime state

Everything the plugin writes about a project lives under `.agents/`. The plugin itself ships no project state; these files appear as you run skills.

| File | Written by | Purpose |
|------|------------|---------|
| `.agents/product-marketing-context.md` | `cm-context` | Foundation: product, audience, positioning, competitors, brand voice. Every skill reads this first. |
| `.agents/STRATEGY.md` | `cm-strategy` (v1.8) | Focus layer: current strategic bet — audience, motion, primary lever, anti-goals, divergence policy. Read after context. |
| `.agents/learnings/<category>.md` | `cm-flow-compound` | Schema-valid prior learnings (v1.7 schema 1.0.0). Read by the 5 wired skills and `cm-learnings-researcher`. |
| `.agents/integrations.md` | Setup wizard (v1.8 opt-in) | 15-entry mapping of detected MCP integrations to skills that can use them. |

## Adding a new skill

1. Run `cm-skill-author` (v1.8) — it scaffolds a validator-passing `SKILL.md` with the 7-section structure, the right `kind:`, a `when_to_use:` line, and (for specialists) a `Sub-agent contract` section with structured input/output JSON.
2. Or copy `skills/_TEMPLATE.md` manually. Required frontmatter: `name`, `description`, `when_to_use` (single line, ≤240 chars, starts with "When" or "Use when"), `kind: skill | workflow | lifecycle`, `metadata.version`. Specialists meant to be fanned out by an orchestrator also need a `Sub-agent contract` H2 with explicit input/output JSON shapes — see `references/sub-agent-dispatch.md`.
3. Validate: `node scripts/validate-skills.js` (or `npm run validate`). `kind: skill` must clear the full check (≥300 lines, role prompt, all 7 sections, ≥5 mistakes, ≥2 examples, ≥3 related); `kind: workflow` and `kind: lifecycle` clear the lite check (frontmatter + role prompt + ≥1 H2 + `when_to_use` ≤240 chars).
4. Regenerate the Skills index in `CLAUDE.md`: `node scripts/generate-claude-md.js`. Update counts in `README.md` and this file if you change the total.

## Skill Categories (75 content skills)

| Category | # | Example skills |
|----------|---|----------------|
| Foundation | 6 | cm-context, cm-strategy, positioning, messaging-framework, value-proposition, brand-voice |
| Research | 7 | icp-research, customer-research, customer-interview, competitive-analysis, market-sizing, competitor-content-monitoring, marketing-psychology |
| Content & Copy | 8 | copywriting, copy-editing, content-strategy, case-study, social-content, social-media-strategy, video-marketing, lead-magnets |
| SEO & Discovery | 6 | seo-audit, ai-seo, programmatic-seo, site-architecture, schema-markup, competitor-alternatives |
| CRO | 7 | page-cro, signup-flow-cro, onboarding-cro, form-cro, popup-cro, paywall-upgrade-cro, pricing-strategy |
| Outreach & Email | 6 | cold-email, email-sequence, email-deliverability, marketing-automation, abm-strategy, testimonial-collection |
| Paid Acquisition | 3 | paid-ads, linkedin-ads, ad-creative |
| Measurement | 4 | analytics-tracking, ab-test-setup, attribution-modeling, content-performance-scoring |
| GTM & Launch | 5 | launch-strategy, gtm-strategy, channel-strategy, product-hunt-launch, press-pr |
| Growth & Retention | 6 | referral-program, free-tool-strategy, churn-prevention, partnership-marketing, community-strategy, newsletter-growth |
| Sales & RevOps | 3 | sales-enablement, revops, webinar-strategy |
| Meta | 3 | marketing-ideas (140+ SaaS tactics), cm-skill-author, cm-learnings-researcher |
| Sub-agent specialists (v1.8) | 11 | cm-icp-finder, cm-competitor-mapper, cm-customer-voice-miner, cm-market-sizing-runner, cm-seo-auditor, cm-conversion-auditor, cm-funnel-auditor, cm-content-auditor, cm-canvas-runner, cm-category-tester, cm-alternatives-mapper |

All 75 content skills live at `skills/<name>/SKILL.md` with `kind: skill`.

## Workflows (14) and Lifecycle Commands (2)

Workflows live at `skills/cm-flow-<name>/SKILL.md` (`kind: workflow`). Invoke via `/cm-flow-<name>`. Legacy short forms (`/cm-<name>`) still work as backward-compat shims.

| Group | Workflows |
|-------|-----------|
| Project (orchestrators) | `/cm-flow-research`, `/cm-flow-position`, `/cm-flow-audit`, `/cm-flow-copy`, `/cm-flow-launch`, `/cm-flow-social`, `/cm-flow-email`, `/cm-flow-compound` |
| Sprint / Review | `/cm-flow-sprint`, `/cm-flow-retro` |
| Daily | `/cm-flow-daily`, `/cm-flow-standup`, `/cm-flow-weekly`, `/cm-flow-eod` |

Lifecycle commands at `skills/cm-{setup,uninstall}/SKILL.md` (`kind: lifecycle`): `/cm-setup`, `/cm-uninstall`.

Use `/cm-flow-daily` morning, `/cm-flow-eod` end of day, `/cm-flow-weekly` Friday, `/cm-flow-sprint` to plan a 2-week block, `/cm-flow-retro` to close it, `/cm-flow-audit` quarterly, `/cm-flow-compound` after every project. The retro → compound chain runs headless via documented JSON input/output schemas.

## Quality Standards

Every skill ships with the 7-section structure above. Enforced by `scripts/validate-skills.js` (kind-aware) — run `npm run validate` after edits.

- `kind: skill` (75 skills) — full check: ≥300 lines, role prompt, all required sections, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills.
- `kind: workflow` (14 workflows under `cm-flow-*`) — lite check: valid frontmatter + section presence; orchestrator content is the point, not bulk.
- `kind: lifecycle` (`cm-setup`, `cm-uninstall`) — lite check, same shape as workflows.

Plus an optional **Prior Learnings Consulted** section before Process — copy from `_TEMPLATE.md` if your skill should compound knowledge. The validator emits a non-blocking warning if a skill in the wired-skill list drops the section.

Setup wizard always prompts before touching user files and tracks every write in `.compounding-marketing-install.json` so `--uninstall` reverses cleanly.

This is not a prompt library. This is a marketing methodology.
