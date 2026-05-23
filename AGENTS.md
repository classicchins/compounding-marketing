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

Future releases will roll the read side out to additional skills. The schema is forward-compatible; the validator warns (non-blocking) when a wired skill drops the section.

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

## Skill Categories (75 content skills)

| Category | # | Example skills |
|----------|---|----------------|
| Foundation | 6 | cm-context, cm-strategy, positioning, messaging-framework, value-proposition, brand-voice |
| Research | 7 | icp-research, customer-research, customer-interview, competitive-analysis, market-sizing, competitor-content-monitoring, marketing-psychology |
| Content & Copy | 8 | copywriting, copy-editing, content-strategy, case-study, social-content, social-media-strategy, video-marketing, lead-magnets |
| SEO & Discovery | 6 | seo-audit, ai-seo, programmatic-seo, site-architecture, schema-markup, competitor-alternatives |
| CRO | 7 | page-cro, signup-flow-cro, onboarding-cro, form-cro, popup-cro, paywall-upgrade-cro, pricing-strategy |
| Outreach & Email | 6 | abm-strategy, cold-email, email-sequence, email-deliverability, marketing-automation, testimonial-collection |
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
