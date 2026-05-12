# Compounding Marketing — Agent Instructions

This repository contains the **Compounding Marketing** plugin (v1.2.0). Compatible with Claude Code, Claude Cowork, ChatGPT, OpenAI Codex, Cursor, Zed, Windsurf, and any AI assistant that supports structured skills.

## Overview

61 marketing skills + 13 workflow commands covering positioning, messaging, copywriting, CRO, SEO, GTM, lifecycle, and growth. Built on the philosophy that **each unit of marketing work should make subsequent units easier**.

## Installation (per tool)

The plugin **never modifies your files without confirmation** on any platform.

| Tool | Install command | Where it lands |
|------|-----------------|----------------|
| Claude Code / Cowork | `/plugin marketplace add classicchins/compounding-marketing` then `/plugin install compounding-marketing`. Run `/cm-setup` to wire into a project. | Marketplace: nothing in your dirs. `/cm-setup`: `./compounding-marketing/` + symlinks into `./.claude/commands/cm-*.md` and `./.claude/skills/<skill>/`. |
| Cursor | `npx compounding-marketing --tool=cursor --scope=project` | `./compounding-marketing/` + generated `./.cursor/rules/cm-*.mdc` files (with `description`/`globs`/`alwaysApply` frontmatter that Cursor expects) + `AGENTS.md` (marker block) |
| Codex (OpenAI) | `npx compounding-marketing --tool=codex --scope=global` (or `--scope=project`) | Global: skill directories symlinked under `~/.agents/skills/<skill>/` (Codex's documented skill discovery path). Project: under `./.agents/skills/<skill>/`. `AGENTS.md` is always project-scoped (Codex's Git-root discovery). |
| ChatGPT (Custom GPT) | `npx compounding-marketing --tool=chatgpt --scope=project` | `./compounding-marketing/` + printed copy-paste block for the GPT Instructions field; manually upload selected `skills/<name>/SKILL.md` files as Knowledge |
| Zed | `npx compounding-marketing --tool=zed --scope=project` | `./compounding-marketing/` + `AGENTS.md` (Zed reads `AGENTS.md` from project root — no separate `.zed/` rules dir for this kind of guidance) |
| Other | `npx compounding-marketing --tool=other` | Project files only; you wire up your tool manually |

Useful flags: `--dry-run` (preview), `--yes` (CI), `--uninstall` (manifest-driven rollback that restores `.bak` backups), `--scope=global|project|custom`, `--target=<path>`.

## Philosophy

**80% research and planning, 20% execution.**

Traditional marketing accumulates chaos. Compounding marketing inverts this by:
- Researching deeply before executing
- Building reusable positioning and messaging foundations
- Documenting learnings so they compound across projects
- Keeping quality high so future work builds on solid ground

## Skills Location

All skills are in `skills/` directory. Each skill is a self-contained `SKILL.md` file with:
- Purpose and when to use it
- Required inputs
- Step-by-step process
- Output format template
- Quality bar

## Workflow

**Research → Position → Message → Execute → Compound**

1. **Foundation first** — Always check `skills/cm-context/SKILL.md` or `.agents/product-marketing-context.md`
2. **Position before tactics** — Run positioning, messaging, value prop skills first
3. **Research-heavy execution** — Use research skills to inform decisions
4. **Compound learnings** — Document insights after completing work

## Skill Categories (61 total)

### Foundation (5 skills)
cm-context | positioning | messaging-framework | value-proposition | brand-voice

### Research (7 skills)
icp-research | customer-research | customer-interview | competitive-analysis | competitor-content-monitoring | market-sizing | marketing-psychology

### Content & Copy (8 skills)
copywriting | copy-editing | content-strategy | case-study | social-content | social-media-strategy | video-marketing | lead-magnets

### SEO & Discovery (6 skills)
seo-audit | ai-seo | programmatic-seo | site-architecture | schema-markup | competitor-alternatives

### CRO (7 skills)
page-cro | signup-flow-cro | onboarding-cro | form-cro | popup-cro | paywall-upgrade-cro | pricing-strategy

### Outreach & Email (6 skills)
abm-strategy | cold-email | email-sequence | email-deliverability | marketing-automation | testimonial-collection

### Paid Acquisition (3 skills)
paid-ads | linkedin-ads | ad-creative

### Measurement & Testing (4 skills)
analytics-tracking | ab-test-setup | attribution-modeling | content-performance-scoring

### GTM & Launch (5 skills)
launch-strategy | gtm-strategy | channel-strategy | product-hunt-launch | press-pr

### Growth & Retention (6 skills)
referral-program | free-tool-strategy | churn-prevention | partnership-marketing | community-strategy | newsletter-growth

### Sales & RevOps (3 skills)
sales-enablement | revops | webinar-strategy

### Meta (1 skill)
marketing-ideas

## Usage

When a user asks for marketing help:

1. **Check for existing context** — Read `.agents/product-marketing-context.md` if it exists
2. **Select the right skill** — Match the request to a skill from the list above
3. **Read the full SKILL.md** — Load `skills/{skill-name}/SKILL.md`
4. **Follow the process** — Execute step-by-step as documented
5. **Deliver according to output format** — Use the template provided in the skill

## Workflow Commands (13 total)

Commands are in `commands/` directory. Use `/cm-{command}` syntax.

### Install / Lifecycle (v1.2.0)
- `/cm-setup` — Opt-in per-project bootstrap (safe install with collision prompts)
- `/cm-uninstall` — Manifest-driven rollback (restores .bak backups, strips marker blocks)

### Project Workflows
- `/cm-research` — Deep market + customer research workflow
- `/cm-position` — Full positioning workshop (Dunford framework)
- `/cm-copy` — End-to-end copywriting with CRO review
- `/cm-launch` — Launch planning and execution
- `/cm-compound` — Document learnings to compound knowledge
- `/cm-social` — Social media campaign planning
- `/cm-email` — Email campaign setup end-to-end

### Periodic Workflows
- `/cm-daily` — Daily marketing review (10 min — what's live, performing, needs attention)
- `/cm-standup` — Marketing standup (5 min — yesterday/today/blockers)
- `/cm-weekly` — Weekly marketing review + planning (30-45 min — patterns, wins, plan ahead)
- `/cm-eod` — End-of-day wrap (5-10 min — what shipped, what's pending, tomorrow's start)

### Rhythm Recommendations
| Time | Command | Purpose |
|------|---------|---------|
| Morning | `/cm:daily` | Orient, set the day's marketing priority |
| Async sync | `/cm:standup` | Team accountability, surface blockers |
| End of day | `/cm:eod` | Capture progress, prep tomorrow's start |
| Friday | `/cm:weekly` | Review patterns, plan next week |
| Post-project | `/cm:compound` | Document learnings for future use |

## Cross-Platform Compatibility

- **Claude Code / Claude Cowork** — Marketplace install (`/plugin marketplace add ... && /plugin install`), then `/cm-setup`. Reads `CLAUDE.md` automatically.
- **Cursor** — `npx compounding-marketing --tool=cursor`. Generated `.cursor/rules/cm-*.mdc` files use Cursor's documented frontmatter (`description`, `globs`, `alwaysApply`).
- **Codex (OpenAI)** — `npx compounding-marketing --tool=codex`. Skills surface as `~/.agents/skills/<skill>/SKILL.md` (global) or `./.agents/skills/<skill>/SKILL.md` (project), per [Codex skills docs](https://developers.openai.com/codex/skills). `AGENTS.md` is project-scoped.
- **ChatGPT** — `npx compounding-marketing --tool=chatgpt`. Wizard prints copy-paste block for Custom GPT Instructions; selected skills upload as Knowledge.
- **Zed** — `npx compounding-marketing --tool=zed`. Zed reads project-root `AGENTS.md` directly.
- **Windsurf / OpenClaw** — Compatible with Claude Code project install.

## Quality Standards

Every skill includes:
- Clear purpose and trigger phrases
- Required inputs defined upfront
- Step-by-step process (no guessing)
- Output format template
- Quality bar (what "great" looks like)

This is not a prompt library. This is a marketing methodology.
