# Compounding Marketing

**Make each unit of marketing work easier than the last.**

A cross-platform AI plugin — **91 skills (75 content + 14 workflows + 2 lifecycle)** for B2B SaaS marketing. Built for Claude Code, Claude Cowork, Cursor, OpenAI Codex, ChatGPT, Zed, and any other AGENTS.md-compatible tool.

> **v1.8.0** — One paradigm: **everything is a skill**. The 14 workflow commands and 2 lifecycle commands moved into `skills/cm-flow-*/` and `skills/cm-{setup,uninstall}/` with a new `kind: skill | workflow | lifecycle` frontmatter and a kind-aware validator. A new **sub-agent tier** ships 11 specialist skills + 3 orchestrators (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`) that fan out parallel work via a cross-platform dispatch contract. `cm-learnings-researcher` becomes the read-side for prior learnings. `.claude/skills/` is now the canonical install surface. Cursor gets a marketplace-ready `.cursor-plugin/` package. Headless mode lands on four workflows.

> **v1.7.0** — The **Prior Learnings system**. A versioned schema for `.agents/learnings/<category>.md`, a default-on consumption contract wired into 5 high-leverage skills (`copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`), and a rewritten `/cm-compound` that enforces the schema on every write. The read/write loop that makes "marketing knowledge compounds" structural instead of aspirational.

> **v1.6.0** — Marketplace-first install for Claude Code. Hardened `npx` wizard with `--dry-run` / `--uninstall` / per-tool target paths. Writes real MCP config files at each tool's documented location. All skills brought up to gold-standard structure, enforced by a built-in validator.

> **Safety contract.** No silent overwrites, no postinstall hooks, full rollback. Every install writes a manifest at `.compounding-marketing-install.json`; `--uninstall` reverses it exactly — `.bak` backups are restored byte-identical and marker blocks are stripped.

---

## What's new in v1.8

- **Sub-agent tier (S2).** 11 new specialist skills (`cm-icp-finder`, `cm-competitor-mapper`, `cm-customer-voice-miner`, `cm-market-sizing-runner`, `cm-seo-auditor`, `cm-conversion-auditor`, `cm-funnel-auditor`, `cm-content-auditor`, `cm-canvas-runner`, `cm-category-tester`, `cm-alternatives-mapper`) plus 3 orchestrators (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`). Orchestrators fan out parallel work using a cross-platform dispatch contract documented at `references/sub-agent-dispatch.md` (Task tool on Claude Code; explicit sequencing fallback elsewhere).
- **Skills-as-commands unification (S1).** The 14 workflows and 2 lifecycle commands moved from `commands/` into `skills/cm-flow-*/` and `skills/cm-{setup,uninstall}/`. New `kind: skill | workflow | lifecycle` frontmatter lets the validator apply the right rules per artifact. `commands/` is gone — one paradigm, one validator, one install path.
- **`cm-learnings-researcher` (S3).** The read-side for the v1.7 Prior Learnings system. A frontmatter-first, 7-step retrieval skill that scans `.agents/learnings/<category>.md` for the entries most relevant to the current run. Wired skills can delegate to it as the learnings library grows.
- **Cursor plugin package (S4).** A `.cursor-plugin/` directory makes the plugin Cursor-Marketplace-ready (publish target: v1.8.1). Existing Cursor users keep installing via `npx compounding-marketing --tool=cursor`.
- **`.claude/skills/` canonical (S5).** Skills install at `.claude/skills/<name>/` (the surface Claude Code reads natively). `.claude/commands/cm-*.md` now carry only the 14 backward-compat workflow shims that forward `/cm-launch` → `/cm-flow-launch` etc.
- **Integration auto-detection (S6).** Opt-in install step scans your MCP config and writes `.agents/integrations.md` so skills know what's available. Per-skill integration-aware behavior ships in v1.9.
- **Headless mode (A1).** `cm-flow-{compound,audit,retro,weekly}` accept structured JSON input and emit structured JSON output, with documented input/output schemas. The retro → compound chain is the headline use case.
- **`cm-skill-author` (A2).** A meta-skill that scaffolds a validator-passing SKILL.md and emits the one-line `node scripts/validate-skills.js …` command to confirm. Replaces the read-template-and-hope path for new contributors.
- **`cm-strategy` + STRATEGY.template.md (A3).** A focus layer above context — `.agents/STRATEGY.md` captures the current strategic bet (audience, motion, primary lever, anti-goals) and every skill reads it after `product-marketing-context.md`.
- **`when_to_use:` frontmatter on every skill.** Aligns with the 2026 Agent Skills spec — clearer routing for any agent reading the skill catalog.

---

## Why This Plugin

**Frameworks, not prompts.** Every skill teaches the methodology — April Dunford's positioning, Strategyzer's Value Proposition Canvas, Jobs-to-be-Done, PAS / AIDA copy frameworks. You get a process, not a one-shot template.

**Research before execution.** Most marketing plugins jump straight to "write a landing page." Compounding Marketing forces clarity first: `cm-context` → `positioning` → `messaging-framework` → only then `copywriting`. 80% of marketing success is clarity. These skills make it systematic.

**Built to compound (v1.7+).** Knowledge compounds through a real read/write loop. `/cm-flow-compound` writes one schema-valid entry to `.agents/learnings/<category>.md` after every project — six required fields, lowercase-only confidence, validation-on-write, no silent corrections. Five high-leverage skills (`copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`) read those learnings *before* they produce output and surface what applies under a literal `Prior learnings considered:` heading, with explicit apply-or-override semantics. The schema is versioned (`skills/_LEARNINGS_SCHEMA.md`) and forward-compatible. **v1.8** adds `cm-learnings-researcher` — a frontmatter-first retrieval skill the wired skills can delegate to as the learnings library grows.

**Safety-first install.** Every existing-file collision prompts you. `npm install` writes zero files outside `node_modules/`. Roll back any install with one command.

---

## Who It's For

- **Technical founders** who need to ship marketing without hiring a marketer.
- **Solo marketers** who want 91 specialized playbooks in their corner.
- **Marketing managers** accelerating their team with AI and needing a quality bar AI outputs can be measured against.
- **Growth engineers** who think in systems, processes, and measurable outcomes.

---

## Quick Start

### Claude Code — Marketplace Install (Recommended)

Inside Claude Code:

```
/plugin marketplace add classicchins/compounding-marketing
/plugin install compounding-marketing
```

All 91 skills (75 content + 14 workflows + 2 lifecycle) become available immediately. **Zero file writes to your project.**

When you're ready to wire the plugin into a specific project — with a merged `CLAUDE.md`, MCP config files at the right locations, and an install manifest for safe rollback — run:

```
/cm-setup
```

The setup wizard now offers an **opt-in integration auto-detection** step: it scans your MCP config (Perplexity, Exa, Linear, GA4, …) and writes `.agents/integrations.md` so skills know what's available before they run.

Roll back any time with `/cm-uninstall` or `npx compounding-marketing --uninstall`.

**Cursor users:** v1.8 ships a `.cursor-plugin/` package alongside the existing `npx --tool=cursor` install. The Cursor Marketplace listing is planned for v1.8.1; in the meantime `npx compounding-marketing --tool=cursor` remains the supported install path.

### Everything Else — npx Wizard

```bash
npx compounding-marketing                          # interactive wizard
npx compounding-marketing --tool=cursor            # Cursor
npx compounding-marketing --tool=codex             # OpenAI Codex (project scope)
npx compounding-marketing --tool=codex --scope=global
npx compounding-marketing --tool=zed               # Zed
npx compounding-marketing --tool=chatgpt           # ChatGPT (Custom GPT)
```

The wizard walks four steps: **Tool → Scope → MCP servers (optional) → Install.** Every collision prompts for merge / overwrite (with `.bak`) / skip.

**Useful flags:**

```bash
npx compounding-marketing --dry-run     # preview every action without writing
npx compounding-marketing --yes         # accept safe defaults (CI-friendly)
npx compounding-marketing --uninstall   # reverse a previous install via manifest
npx compounding-marketing --target=/abs/path   # custom install location
npx compounding-marketing --version
npx compounding-marketing --info
npx compounding-marketing --help
```

### Per-Tool Targets

The wizard writes to each tool's **documented** location — verified against the official docs for Claude Code, Cursor, OpenAI Codex, and Zed.

| Tool | Project install | Global install | Instructions file | MCP config |
|------|-----------------|----------------|-------------------|------------|
| **Claude Code / Cowork** | `.claude/skills/<skill>/` (canonical) + `.claude/commands/cm-*.md` (14 workflow shims for backward compat) | `~/.claude/{plugins,skills,commands}/` | `CLAUDE.md` (project) / `~/.claude/CLAUDE.md` (global) | Project: `.mcp.json`. Global: prints `claude mcp add --scope user ...` commands. |
| **Cursor** | `.cursor/rules/cm-*.mdc` (Cursor frontmatter) | n/a (project-scoped tool) | `AGENTS.md` | `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global) |
| **Codex (OpenAI)** | `./.agents/skills/<skill>/` | `~/.agents/skills/<skill>/` | `AGENTS.md` (project-scoped — Codex uses Git-root discovery) | `./.codex/config.toml` or `~/.codex/config.toml` |
| **Zed** | project root only — Zed reads `AGENTS.md` directly | n/a | `AGENTS.md` | n/a |
| **ChatGPT** | project files + printed copy-paste block for the Custom GPT editor | n/a | `AGENTS.md` | n/a |

---

## Three Worked Workflows

### 1. New Project Foundation (Week 1)

You just started building a B2B SaaS analytics tool. Before writing any copy, lock in the strategic foundation.

```
/cm-context              # 30 min — ~15 questions about product, audience, competitors
                         # → writes .agents/product-marketing-context.md
/cm-strategy             # 20 min — name the current strategic bet
                         # → writes .agents/STRATEGY.md (the focus layer above context)
/cm-flow-research        # 2–3 hr — orchestrator: parallel ICP, customer voice, competitor,
                         # market-sizing sub-agents (uses Perplexity / Exa MCP if configured)
/cm-flow-position        # 2 hr — orchestrator: positioning canvas, category test,
                         # alternatives mapping, messaging pillars
```

The legacy short forms (`/cm-research`, `/cm-position`) still work via backward-compat shims — they forward to `/cm-flow-*`.

By Friday you have a positioning canvas, a messaging framework with proof points, value props per segment, and a context doc every future skill will reference. **No copy yet, on purpose.**

### 2. Sprint-Driven Execution (Week 2+)

You have positioning. Now you execute against it for a 2-week sprint.

```
/cm-flow-sprint                       # plan the 2-week sprint — goals, deliverables, schedule
/cm-flow-copy for our homepage        # full copywriting pass + CRO review against positioning
/cm-flow-email for trial users        # 5-email welcome + nurture sequence with deliverability check
/cm-flow-social for the launch        # 30-day LinkedIn + Twitter calendar in your brand voice
/cm-flow-standup                      # 5 min daily — what shipped, what's next, blockers
/cm-flow-eod                          # 5–10 min — wrap the day, tee up tomorrow
/cm-flow-retro                        # end of sprint — what worked, what didn't, actions
```

Because everything pulls from the same `product-marketing-context.md` and positioning canvas, your homepage copy, welcome emails, and social posts sound like one product — not three.

### 3. Post-Project Compound (Ongoing)

After every project, capture what you learned so the next project starts smarter than the last.

```
/cm-flow-compound

Just finished the homepage redesign project.
What worked: social proof above fold (+23% clicks), outcome-focused
headlines beat feature-focused. What didn't: video hero killed mobile.
Surprising: enterprise visitors spent 3x longer on /pricing than SMB.
```

Output:

```
✓ Saved to .agents/learnings/cro.md
✓ Saved to .agents/learnings/copywriting.md
```

Next homepage project: those learnings are loaded into every relevant skill. v1.8's `cm-learnings-researcher` handles retrieval as the library grows.

See `skills/cm-flow-*/SKILL.md` for the full set of workflow playbooks and `skills/cm-{setup,uninstall}/SKILL.md` for the lifecycle commands.

---

## What's Inside

**91 skills total — 75 content + 14 workflows + 2 lifecycle.** Everything is a skill in v1.8; the `kind:` frontmatter routes the validator and the orchestrators.

**75 content skills** across 13 categories (the 12 marketing categories below + a new **Sub-agent specialists** tier):

| Category | # | What you get |
|----------|---|--------------|
| **Foundation** | 6 | Context, **strategy**, positioning, messaging, value props, brand voice |
| **Research** | 7 | ICP, customer interviews, JTBD synthesis, competitive analysis, market sizing |
| **Content & Copy** | 8 | Copywriting, editing, content strategy, case studies, social, video, lead magnets |
| **SEO & Discovery** | 6 | SEO audit, AI search (AEO/GEO), programmatic SEO, schema, site architecture |
| **CRO** | 7 | Pages, signup, onboarding, forms, popups, paywalls, pricing |
| **Outreach & Email** | 6 | ABM, cold email, sequences, deliverability, automation, testimonials |
| **Paid Acquisition** | 3 | Paid ads strategy, LinkedIn ads, ad creative |
| **Measurement** | 4 | Analytics, A/B test design, attribution, content scoring |
| **GTM & Launch** | 5 | Launch planning, GTM motion, channels, Product Hunt, PR |
| **Growth & Retention** | 6 | Referrals, free tools, churn, partnerships, community, newsletter |
| **Sales & RevOps** | 3 | Sales enablement, revops, webinars |
| **Meta** | 3 | 140+ SaaS marketing tactics, **cm-skill-author**, **cm-learnings-researcher** |
| **Sub-agent specialists (v1.8)** | 11 | ICP finder, competitor mapper, customer-voice miner, market-sizing runner, SEO auditor, conversion auditor, funnel auditor, content auditor, canvas runner, category tester, alternatives mapper |

**14 workflows** (orchestrators) — invoke via `/cm-flow-<name>` (legacy `/cm-<name>` shims still work):

| Group | Workflows |
|-------|-----------|
| **Project (orchestrators)** | `/cm-flow-research`, `/cm-flow-position`, `/cm-flow-audit`, `/cm-flow-copy`, `/cm-flow-launch`, `/cm-flow-compound`, `/cm-flow-social`, `/cm-flow-email` |
| **Planning & Review** | `/cm-flow-sprint`, `/cm-flow-retro` |
| **Daily Operations** | `/cm-flow-standup`, `/cm-flow-daily`, `/cm-flow-eod`, `/cm-flow-weekly` |

**2 lifecycle commands:** `/cm-setup`, `/cm-uninstall`.

Every skill has a fixed structure: **role prompt → step-by-step process → output template → quality bar → common mistakes → worked examples → related skills.** A kind-aware validator (`npm run validate`) applies the full check to `kind: skill` and a lite check to `kind: workflow | lifecycle`.

Full skill catalog: see [`CLAUDE.md`](CLAUDE.md) (Claude Code) or [`AGENTS.md`](AGENTS.md) (every other tool). Workflow playbooks live in [`skills/cm-flow-*/SKILL.md`](skills/); lifecycle playbooks in [`skills/cm-setup/SKILL.md`](skills/cm-setup/SKILL.md) and [`skills/cm-uninstall/SKILL.md`](skills/cm-uninstall/SKILL.md). The sub-agent dispatch contract is at [`references/sub-agent-dispatch.md`](references/sub-agent-dispatch.md).

---

## How to Use the Plugin

Three ways to invoke a skill or workflow:

1. **Slash command** (Claude Code, Cursor): `/cm-flow-research`, `/cm-flow-position`, `/cm-flow-copy`, … or any content skill name directly (e.g. `/cm-copywriting`, `/cm-positioning`).
2. **Natural language** (any tool): "Run the cm-context skill," "Audit our SEO," "Write a case study about Acme."
3. **Workflow chaining**: an orchestrator workflow runs multiple skills in sequence — and on Claude Code, the v1.8 orchestrators (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`) fan out sub-agents in parallel via the Task tool per `references/sub-agent-dispatch.md`.

**Naming convention.** Workflows are prefixed `cm-flow-*` (e.g. `/cm-flow-launch`). The 14 legacy short forms (`/cm-launch`, `/cm-research`, etc.) remain valid via backward-compat shims through v2.0.

**Always start with `cm-context`, then `cm-strategy`.** Together they produce `.agents/product-marketing-context.md` (the shared foundation) and `.agents/STRATEGY.md` (the current focus). Every other skill reads both. Skip them and outputs will be generic.

---

## MCP Integrations (Optional, Recommended)

Two pre-configured MCP servers supercharge research-heavy skills:

**Perplexity** — `perplexity_search`, `perplexity_ask`, `perplexity_reason`, `perplexity_research`. Real-time web research with cited sources.

**Exa** — `company_research_exa`, `people_search_exa`, `web_search_exa`, `deep_researcher_start/check`. Neural search, company intelligence, async research agent.

The wizard offers these during install and writes the correct config file for your tool (`.mcp.json` for Claude Code, `.cursor/mcp.json` for Cursor, `.codex/config.toml` for Codex). Skills like `icp-research`, `competitive-analysis`, `market-sizing`, and `competitor-content-monitoring` will detect them automatically and use them when available.

Setup details: see [`mcp/README.md`](mcp/README.md).

---

## Optional Tool Integrations

Skills can push tasks and pull data from external tools when configured:

| Category | Integrations |
|----------|--------------|
| Task tracking | Linear, Trello, Asana, ClickUp |
| Analytics | Google Analytics 4, Search Console, Mixpanel, Meta Ads |

Setup details: see [`integrations/README.md`](integrations/README.md).

---

## Safety & Rollback

Every claim about safety is enforced by code, not docs:

- **No silent overwrites.** Every existing-file collision prompts for merge with markers / overwrite-with-`.bak` / skip. With `--yes`: instructions files and MCP config default to merge; everything else defaults to skip.
- **No postinstall hooks.** `npm install compounding-marketing` writes zero files outside `node_modules/`. The wizard runs only when you invoke it. (This was the v1.5 bug we removed.)
- **Idempotent markers.** `CLAUDE.md` and `AGENTS.md` edits are wrapped in `<!-- COMPOUNDING-MARKETING-START/END -->`. Re-running the wizard produces a single marker pair, not duplicates.
- **Full rollback.** The install writes a manifest at `.compounding-marketing-install.json` (project) or `~/.claude/.compounding-marketing-install.json` (global). `--uninstall` reverses it exactly: removes created files and symlinks, restores `.bak` backups byte-identical, strips marker blocks, removes MCP entries.

Preview anything before you commit to it:

```bash
npx compounding-marketing --dry-run
```

---

## Repository Structure

```
skills/                 # 91 SKILL.md files (75 content + 14 workflows + 2 lifecycle)
                        # workflows live at skills/cm-flow-*/SKILL.md
                        # lifecycle at skills/cm-{setup,uninstall}/SKILL.md
bin/setup.js            # The npx wizard (~1260 LOC, no runtime deps)
scripts/                # generate-claude-md.js, validate-skills.js (kind-aware)
references/             # sub-agent-dispatch.md (v1.8 orchestrator contract)
mcp/                    # Perplexity + Exa MCP config and docs
integrations/           # Linear, GA4, Search Console, Mixpanel, Meta Ads guides
.claude-plugin/         # plugin.json + marketplace.json (Claude Code marketplace)
.cursor-plugin/         # Cursor Marketplace package (v1.8.1 publish target)
.agents/                # Created at runtime — context, STRATEGY, learnings, integrations
                        # (all gitignored)
CLAUDE.md               # Index for Claude Code
AGENTS.md               # Index for everything else (Cursor / Codex / Zed / ChatGPT)
```

---

## Adding or Modifying Skills

1. Easiest path: run the `cm-skill-author` meta-skill — it scaffolds a validator-passing SKILL.md and emits the validate command to run.
2. Manual path: create `skills/{name}/SKILL.md` with YAML frontmatter (`name`, `description`, `when_to_use`, `kind: skill | workflow | lifecycle`, `metadata.version`).
3. Follow the 7-section structure in `skills/_TEMPLATE.md`. `kind: skill` gets the full check; `kind: workflow | lifecycle` get a lite check.
4. Run `npm run validate` — the validator enforces ≥300 lines (skills only), role prompt, all required sections, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills.
5. Run `node scripts/generate-claude-md.js` to refresh the skills index in `CLAUDE.md`.
6. Update skill counts in `README.md`, `AGENTS.md`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.cursor-plugin/`.

Contributions welcome — open a PR or an issue on GitHub.

---

## Creator

Created by **Chinmaya Shankar** ([@classicchins](https://twitter.com/classicchins)), founder of [BigDeal Ventures](https://bigdeal.ventures) — a portfolio of AI-native companies:

| Company | What it does |
|---------|--------------|
| [AuthorityMax](https://authoritymax.ai) | SaaS personal branding platform for founders & operators |
| [MagicAssist](https://magicassist.co) | AI-powered productivity assistant |
| [SuperContent](https://supercontent.io) | AI-native design & video production for SaaS |
| [DesignCrew](https://designcrew.io) | AI-native apps & digital experiences |

This plugin was built to make world-class marketing frameworks accessible to every founder and marketer building with AI.

---

## Acknowledgments

Frameworks built on the shoulders of:

- April Dunford — *Obviously Awesome* (positioning)
- Strategyzer — Value Proposition Canvas
- Anthony Ulwick / Clayton Christensen — Jobs-to-be-Done
- Direct-response marketing lineage (Schwartz, Kennedy, Halbert, Sugarman)
- [Compounding Engineering](https://github.com/compounding-engineering) — the dev-side analogue and methodological inspiration

---

## License

MIT — use commercially, modify, distribute freely. See [`LICENSE`](LICENSE).

---

## Support

- **Issues / discussions:** [github.com/classicchins/compounding-marketing](https://github.com/classicchins/compounding-marketing)
- **Twitter:** [@classicchins](https://twitter.com/classicchins)

---

**Make marketing compound. Start with `/cm-context`.**
