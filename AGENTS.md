# Compounding Marketing — Agent Instructions

Cross-platform marketing plugin (v1.6.0). **61 skills + 16 workflow commands** covering positioning, messaging, copy, CRO, SEO, GTM, lifecycle, and growth. Works with Claude Code/Cowork, ChatGPT, Codex, Cursor, Zed, Windsurf, and any AI assistant that reads structured skill files. Philosophy: **each unit of marketing work should make the next one easier.**

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

Each skill is `skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`, `metadata.version`) and a validated 7-section body:

1. **Role prompt** (40-80 lines) — persona, philosophy, authority
2. **Initial Assessment** — prerequisites + 5-10 diagnostic questions
3. **Process** — 5-10 numbered steps (how-to / decision criteria / gotchas)
4. **Output Format** — fenced markdown template
5. **Quality Bar** — checklist + ≥5 Common Mistakes (mistake / why / fix)
6. **Examples** — ≥2 worked B2B SaaS scenarios
7. **Related Skills** — ≥3 cross-references

When a user asks for marketing help, load the full `SKILL.md` and execute its Process step-by-step. **Always check `.agents/product-marketing-context.md` first** — it's the shared foundation created by `cm-context` and every other skill cross-references it.

## How to invoke skills and commands

- **Claude Code / Cowork** — `/cm-<name>` slash command or natural language. Commands and skills are symlinked into `.claude/commands/cm-*.md` and `.claude/skills/<skill>/` by `/cm-setup`.
- **Cursor** — `@cm-<name>` mention, or just describe the task — the agent matches against `.cursor/rules/cm-*.mdc` descriptions (rules are "agent-requested").
- **Codex** — describe the task in natural language. Codex matches trigger keywords against `~/.agents/skills/<name>/SKILL.md` description frontmatter (global) or `./.agents/skills/<name>/` (project).
- **ChatGPT** — paste this `AGENTS.md` (or a slimmed version) into Custom GPT Instructions, then upload selected `skills/<name>/SKILL.md` files as Knowledge. Use trigger phrases from the skill descriptions.
- **Zed** — Zed reads project-root `AGENTS.md` directly; describe the task and the assistant will invoke the right skill.

## Workflow

**Research → Position → Message → Execute → Compound**

- **Foundation first.** Run `cm-context` (or read `.agents/product-marketing-context.md`) before any execution work. Then run positioning, messaging, value-prop skills.
- **80% research, 20% execution.** Use research skills (`icp-research`, `customer-research`, `competitive-analysis`, `market-sizing`) to ground every tactical decision.
- **Compound learnings.** After each project, run `/cm-compound` to write insights into `.agents/learnings/<category>.md` so future work builds on solid ground.

## Skill Categories (61 total)

| Category | # | Example skills |
|----------|---|----------------|
| Foundation | 5 | cm-context, positioning, messaging-framework, value-proposition, brand-voice |
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
| Meta | 1 | marketing-ideas (140+ SaaS tactics) |

All 61 skills live in `skills/<name>/SKILL.md`. Counts sum to 61.

## Workflow Commands (16 total)

Invoke via `/cm-<name>`. Commands orchestrate multiple skills end-to-end.

| Group | Commands |
|-------|----------|
| Lifecycle | `/cm-setup`, `/cm-uninstall` |
| Project | `/cm-research`, `/cm-position`, `/cm-copy`, `/cm-launch`, `/cm-social`, `/cm-email`, `/cm-compound` |
| Sprint / Review | `/cm-sprint`, `/cm-retro`, `/cm-audit` |
| Daily | `/cm-daily`, `/cm-standup`, `/cm-weekly`, `/cm-eod` |

Use `/cm-daily` morning, `/cm-eod` end of day, `/cm-weekly` Friday, `/cm-sprint` to plan a 2-week block, `/cm-retro` to close it, `/cm-audit` quarterly, `/cm-compound` after every project.

## Quality Standards

Every skill ships with the 7-section structure above. Enforced by `scripts/validate-skills.js` — run `npm run validate` after edits. Minimums: ≥300 lines, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills, all 7 sections present. Setup wizard always prompts before touching user files and tracks every write in `.compounding-marketing-install.json` so `--uninstall` reverses cleanly.

This is not a prompt library. This is a marketing methodology.
