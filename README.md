# Compounding Marketing

**Make each unit of marketing work easier than the last.**

A cross-platform AI plugin — 61 marketing skills and 16 workflow commands for B2B SaaS. Built for Claude Code, Claude Cowork, Cursor, OpenAI Codex, ChatGPT, Zed, and any other AGENTS.md-compatible tool.

> **v1.6.0** — Marketplace-first install for Claude Code. Hardened `npx` wizard with `--dry-run` / `--uninstall` / per-tool target paths. Writes real MCP config files at each tool's documented location. All 61 skills brought up to gold-standard structure, enforced by a built-in validator.

> **Safety contract.** No silent overwrites, no postinstall hooks, full rollback. Every install writes a manifest at `.compounding-marketing-install.json`; `--uninstall` reverses it exactly — `.bak` backups are restored byte-identical and marker blocks are stripped.

---

## Why This Plugin

**Frameworks, not prompts.** Every skill teaches the methodology — April Dunford's positioning, Strategyzer's Value Proposition Canvas, Jobs-to-be-Done, PAS / AIDA copy frameworks. You get a process, not a one-shot template.

**Research before execution.** Most marketing plugins jump straight to "write a landing page." Compounding Marketing forces clarity first: `cm-context` → `positioning` → `messaging-framework` → only then `copywriting`. 80% of marketing success is clarity. These skills make it systematic.

**Built to compound.** The `/cm-compound` workflow captures what worked, what didn't, and what surprised you after every project. Over time your `.agents/learnings/` directory becomes a library specific to *your* business, *your* audience, *your* market.

**Safety-first install.** Every existing-file collision prompts you. `npm install` writes zero files outside `node_modules/`. Roll back any install with one command.

---

## Who It's For

- **Technical founders** who need to ship marketing without hiring a marketer.
- **Solo marketers** who want 61 specialized playbooks in their corner.
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

All 61 skills and 16 workflow commands become available immediately. **Zero file writes to your project.**

When you're ready to wire the plugin into a specific project — with a merged `CLAUDE.md`, MCP config files at the right locations, and an install manifest for safe rollback — run:

```
/cm-setup
```

Roll back any time with `/cm-uninstall` or `npx compounding-marketing --uninstall`.

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
| **Claude Code / Cowork** | `.claude/commands/cm-*.md` + `.claude/skills/<skill>/` (symlinks) | `~/.claude/{plugins,commands,skills}/` | `CLAUDE.md` (project) / `~/.claude/CLAUDE.md` (global) | Project: `.mcp.json`. Global: prints `claude mcp add --scope user ...` commands. |
| **Cursor** | `.cursor/rules/cm-*.mdc` (Cursor frontmatter) | n/a (project-scoped tool) | `AGENTS.md` | `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global) |
| **Codex (OpenAI)** | `./.agents/skills/<skill>/` | `~/.agents/skills/<skill>/` | `AGENTS.md` (project-scoped — Codex uses Git-root discovery) | `./.codex/config.toml` or `~/.codex/config.toml` |
| **Zed** | project root only — Zed reads `AGENTS.md` directly | n/a | `AGENTS.md` | n/a |
| **ChatGPT** | project files + printed copy-paste block for the Custom GPT editor | n/a | `AGENTS.md` | n/a |

---

## Three Worked Workflows

### 1. New Project Foundation (Week 1)

You just started building a B2B SaaS analytics tool. Before writing any copy, lock in the strategic foundation.

```
/cm-context           # 30 min — answer ~15 questions about product, audience, competitors
                      # → writes .agents/product-marketing-context.md
/cm-research          # 2–3 hr — ICP, customer interviews synthesis, competitive landscape,
                      # market sizing — uses Perplexity / Exa MCP if configured
/cm-position          # 2 hr — April Dunford positioning workshop + messaging pillars
                      # + value props per segment
```

By Friday you have a positioning canvas, a messaging framework with proof points, value props per segment, and a context doc every future skill will reference. **No copy yet, on purpose.**

### 2. Sprint-Driven Execution (Week 2+)

You have positioning. Now you execute against it for a 2-week sprint.

```
/cm-sprint                       # plan the 2-week sprint — goals, deliverables, schedule
/cm-copy for our homepage        # full copywriting pass + CRO review against positioning
/cm-email for trial users        # 5-email welcome + nurture sequence with deliverability check
/cm-social for the launch        # 30-day LinkedIn + Twitter calendar in your brand voice
/cm-standup                      # 5 min daily — what shipped, what's next, blockers
/cm-eod                          # 5–10 min — wrap the day, tee up tomorrow
/cm-retro                        # end of sprint — what worked, what didn't, actions
```

Because everything pulls from the same `product-marketing-context.md` and positioning canvas, your homepage copy, welcome emails, and social posts sound like one product — not three.

### 3. Post-Project Compound (Ongoing)

After every project, capture what you learned so the next project starts smarter than the last.

```
/cm-compound

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

Next homepage project: those learnings are loaded into every relevant skill.

See `commands/` for the full set of 16 workflow command playbooks.

---

## What's Inside

**61 marketing skills** across 12 categories:

| Category | # | What you get |
|----------|---|--------------|
| **Foundation** | 5 | Context, positioning, messaging, value props, brand voice |
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
| **Meta** | 1 | 140+ SaaS marketing tactics (ICE-prioritized) |

**16 workflow commands:**

| Category | Commands |
|----------|----------|
| **Install / Lifecycle** | `/cm-setup`, `/cm-uninstall` |
| **Project workflows** | `/cm-research`, `/cm-position`, `/cm-copy`, `/cm-launch`, `/cm-compound`, `/cm-social`, `/cm-email` |
| **Planning & Review** | `/cm-sprint`, `/cm-retro`, `/cm-audit` |
| **Daily Operations** | `/cm-standup`, `/cm-daily`, `/cm-eod`, `/cm-weekly` |

Every skill has a fixed structure: **role prompt → step-by-step process → output template → quality bar → common mistakes → worked examples → related skills.** A built-in validator (`npm run validate`) enforces it.

Full skill catalog: see [`CLAUDE.md`](CLAUDE.md) (Claude Code) or [`AGENTS.md`](AGENTS.md) (every other tool). Every workflow command has a full playbook in [`commands/`](commands/).

---

## How to Use the Plugin

Three ways to invoke a skill or workflow:

1. **Slash command** (Claude Code, Cursor): `/cm-research`, `/cm-position`, `/cm-copy`, …
2. **Natural language** (any tool): "Run the cm-context skill," "Audit our SEO," "Write a case study about Acme."
3. **Workflow chaining**: a workflow command runs multiple skills in sequence (e.g. `/cm-position` runs `positioning` → `messaging-framework` → `value-proposition`).

**Always start with `cm-context`.** It creates `.agents/product-marketing-context.md` — the shared context every other skill reads first. Skip it and outputs will be generic.

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
skills/           # 61 SKILL.md files — each ~600 lines, gold-standard structure
commands/         # 16 cm-*.md workflow command playbooks
bin/setup.js      # The npx wizard (~1260 LOC, no runtime deps)
scripts/          # generate-claude-md.js, validate-skills.js
mcp/              # Perplexity + Exa MCP config and docs
integrations/     # Linear, GA4, Search Console, Mixpanel, Meta Ads guides
.claude-plugin/   # plugin.json + marketplace.json (Claude Code marketplace)
.agents/          # Created at runtime — context doc + learnings (gitignored)
CLAUDE.md         # Index for Claude Code
AGENTS.md         # Index for everything else (Cursor / Codex / Zed / ChatGPT)
```

---

## Adding or Modifying Skills

1. Create `skills/{name}/SKILL.md` with YAML frontmatter (`name`, `description`, `metadata.version`).
2. Follow the 7-section structure in `skills/_TEMPLATE.md`.
3. Run `npm run validate` — the validator enforces ≥300 lines, role prompt, all required sections, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills.
4. Run `node scripts/generate-claude-md.js` to refresh the skills index in `CLAUDE.md`.
5. Update skill counts in `README.md`, `AGENTS.md`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`.

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
