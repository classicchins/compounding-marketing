# Changelog

All notable changes to the Compounding Marketing plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.0] - 2026-05-23

Headline release: **one paradigm, parallel execution, multi-surface distribution.** v1.7 made knowledge compound; v1.8 makes the *orchestration* compound. The 14 workflows and 2 lifecycle commands collapse into `skills/cm-flow-*/` and `skills/cm-{setup,uninstall}/` under a single unified skill model with `kind: skill | workflow | lifecycle` frontmatter. A new sub-agent tier ships 11 specialist skills + 3 orchestrators (`cm-flow-research`, `cm-flow-audit`, `cm-flow-position`) that fan out parallel work through a cross-platform dispatch contract. `.claude/skills/` becomes the canonical install surface, `.cursor-plugin/` is publish-ready, four workflows go headless with JSON input/output, and the v1.7 Prior Learnings read side is factored into a dedicated `cm-learnings-researcher` skill.

### Added

**Sub-agent tier (S2).** 11 new specialist skills designed to be dispatched in parallel by orchestrator workflows: `cm-icp-finder`, `cm-competitor-mapper`, `cm-customer-voice-miner`, `cm-market-sizing-runner`, `cm-seo-auditor`, `cm-conversion-auditor`, `cm-funnel-auditor`, `cm-content-auditor`, `cm-canvas-runner`, `cm-category-tester`, `cm-alternatives-mapper`. Three orchestrator workflows fan them out: `cm-flow-research`, `cm-flow-audit`, `cm-flow-position`. On Claude Code each specialist runs in its own sub-agent context via the Agent / Task primitive; other hosts fall back to explicit sequencing.

**`references/sub-agent-dispatch.md`.** New canonical cross-platform dispatch contract for the orchestrator → specialist → merge pattern. Defines the per-host primitive (Claude Code Agent/Task, Codex sub-prompts, Cursor + Zed serial fallback), the required specialist input/output JSON shape, the merge contract, and graceful-degradation rules. Every new multi-specialist orchestrator must conform.

**`cm-learnings-researcher` (S3).** Frontmatter-first 7-step retrieval skill that scans `.agents/learnings/<category>.md` for the entries most relevant to the current run. The factored-out read side for the v1.7 Prior Learnings system. Wired skills can delegate to it as the learnings library grows.

**`cm-skill-author` (A2).** Meta-skill that scaffolds a structurally valid SKILL.md (7-section gold-standard) and emits the `node scripts/validate-skills.js skills/<slug>/SKILL.md` command to confirm. Does not declare success until validation passes. Replaces the read-template-and-hope path for new contributors.

**`cm-strategy` (A3) + `skills/cm-strategy/STRATEGY.template.md`.** A focus layer above context. `.agents/STRATEGY.md` names the current strategic bet — audience, motion, primary lever, anti-goals — in a structured shape every skill reads after `product-marketing-context.md`. The template ships in the plugin at `skills/cm-strategy/STRATEGY.template.md`; the runtime `.agents/STRATEGY.md` is per-project (gitignored).

**`.cursor-plugin/` package (S4).** A Cursor-Marketplace-ready package directory ships alongside `.claude-plugin/`. File inventory:

- `.cursor-plugin/marketplace.json` — Cursor Marketplace metadata (name, version, components, `defaultActivation: "default-off"`, team-controls support for `default-off | default-on | required`).
- `.cursor-plugin/plugin.json` — plugin manifest.
- `.cursor-plugin/mcp.json` — pre-wired Perplexity + Exa MCP servers.
- `.cursor-plugin/rules/cm-*.mdc` — 16 auto-generated Cursor rule files (14 workflows + 2 lifecycle).
- `.cursor-plugin/skills/README.md` — pointer to the canonical source-of-truth `skills/` directory.
- `.cursor-plugin/README.md` — install + team-controls instructions.

v1.8 keeps `npx compounding-marketing --tool=cursor` as the supported install path; Marketplace publication targets v1.8.1.

**Integration auto-detection — Phase 1 (S6).** Opt-in setup step (`runIntegrationScan()` in `bin/setup.js`) that scans the user's MCP configs (`.mcp.json`, `.cursor/mcp.json`, `~/.codex/config.toml`) via `scanMcpConfigs()`, classifies hits against a 15-entry catalog via `classifyIntegrations()`, renders the result through `renderIntegrationsMarkdown()`, and writes `.agents/integrations.md` so skills know what's available. If `.agents/product-marketing-context.md` exists, an "Available integrations" pointer is appended. Detected integrations:

| Integration | Tags |
|---|---|
| Slack | messaging |
| Notion | docs |
| Linear | tickets |
| HubSpot | crm, email, marketing-automation |
| Salesforce | crm |
| Stripe | billing |
| Gmail | email |
| Google Calendar | calendar |
| Google Drive | docs, storage |
| Mixpanel | analytics |
| Amplitude | analytics |
| PostHog | analytics, feature-flags |
| GitHub | code, tickets |
| Perplexity | search, research |
| Exa | search, research |

Per-skill integration-aware behavior (skills branching on what's available) is the v1.9 milestone.

**`when_to_use:` frontmatter on every skill.** Aligns with the 2026 Agent Skills spec — every `SKILL.md` now declares both a description (for trigger matching) and a `when_to_use:` directive (for routing). Improves discovery in every host (Claude Code, Cursor, Codex, Zed, ChatGPT).

**Kind-aware validator.** `scripts/validate-skills.js` now reads the `kind:` frontmatter and applies the right ruleset: full structural + content check for `kind: skill` (≥300 lines, role prompt, all 7 sections, ≥5 common mistakes, ≥2 examples, ≥3 related skills); a new `validateLite()` path for `kind: workflow | lifecycle` (frontmatter + section presence — orchestrator content is the point, not bulk). Reports `75 skills passed, 14 workflows passed, 2 lifecycle passed, 0 failed, 0 warnings`.

**Headless mode (A1).** `cm-flow-compound`, `cm-flow-audit`, `cm-flow-retro`, and `cm-flow-weekly` ship a new `## Modes` section that accepts structured JSON input and emits structured JSON output with documented schemas. Chain semantics: `cm-flow-retro` → `cm-flow-compound` and `cm-flow-weekly` → `cm-flow-compound` — the upstream skill's JSON output is a drop-in input for compound, no human re-keying. Opens the door to scheduled / CI-driven marketing ops.

### Changed

**`commands/` collapsed into `skills/`.** The directory is gone. All 16 commands moved into `skills/` with `kind: workflow` (14) or `kind: lifecycle` (2). One paradigm, one validator, one install surface.

| Old path | New path | Kind |
|---|---|---|
| `commands/cm-setup.md` | `skills/cm-setup/SKILL.md` | lifecycle |
| `commands/cm-uninstall.md` | `skills/cm-uninstall/SKILL.md` | lifecycle |
| `commands/cm-research.md` | `skills/cm-flow-research/SKILL.md` | workflow |
| `commands/cm-position.md` | `skills/cm-flow-position/SKILL.md` | workflow |
| `commands/cm-copy.md` | `skills/cm-flow-copy/SKILL.md` | workflow |
| `commands/cm-launch.md` | `skills/cm-flow-launch/SKILL.md` | workflow |
| `commands/cm-social.md` | `skills/cm-flow-social/SKILL.md` | workflow |
| `commands/cm-email.md` | `skills/cm-flow-email/SKILL.md` | workflow |
| `commands/cm-compound.md` | `skills/cm-flow-compound/SKILL.md` | workflow |
| `commands/cm-sprint.md` | `skills/cm-flow-sprint/SKILL.md` | workflow |
| `commands/cm-retro.md` | `skills/cm-flow-retro/SKILL.md` | workflow |
| `commands/cm-audit.md` | `skills/cm-flow-audit/SKILL.md` | workflow |
| `commands/cm-daily.md` | `skills/cm-flow-daily/SKILL.md` | workflow |
| `commands/cm-standup.md` | `skills/cm-flow-standup/SKILL.md` | workflow |
| `commands/cm-eod.md` | `skills/cm-flow-eod/SKILL.md` | workflow |
| `commands/cm-weekly.md` | `skills/cm-flow-weekly/SKILL.md` | workflow |

`.claude/skills/` is now the canonical install surface. `.claude/commands/cm-*.md` carries only the 14 backward-compat workflow shims that forward `/cm-launch` → `/cm-flow-launch`, etc.

`README.md`, `AGENTS.md`, `CLAUDE.md` banners and counts updated: **91 skills (75 content + 14 workflows + 2 lifecycle)**. The auto-generated Skills section in `CLAUDE.md` regenerated by `scripts/generate-claude-md.js`.

`package.json` — version bumped to `1.8.0`. Description updated to reflect the new count and broader scope. `files[]` array no longer references the removed `commands/` directory; `references/` is now included for the sub-agent dispatch contract.

### Compatibility

- **Backward-compatible slash commands.** Every legacy short form (`/cm-launch`, `/cm-research`, `/cm-position`, `/cm-copy`, `/cm-social`, `/cm-email`, `/cm-compound`, `/cm-sprint`, `/cm-retro`, `/cm-audit`, `/cm-daily`, `/cm-standup`, `/cm-eod`, `/cm-weekly`) continues to work via shim files at `.claude/commands/cm-*.md` that forward to the canonical `/cm-flow-*` skill. Shims are guaranteed through v2.0; new content and examples should prefer `/cm-flow-*`.
- **`.agents/` data is untouched.** Existing `.agents/product-marketing-context.md` and `.agents/learnings/<category>.md` files keep working without migration. `.agents/STRATEGY.md` is a new opt-in artifact written by `cm-strategy`; skills degrade gracefully when it's absent.
- **v1.7 Prior Learnings wiring is unchanged.** The five wired skills (`copywriting`, `cold-email`, `positioning`, `paid-ads`, `icp-research`) still run the in-line Prior Learnings Consulted contract. Delegation to `cm-learnings-researcher` is opt-in and arrives as the default in v1.8.1+; current behavior is identical to v1.7.
- **Validator output line is stable** for CI consumers: `Skills validation: 75 skills passed, 14 workflows passed, 2 lifecycle passed, 0 failed, 0 warnings`.
- **Cursor users.** Continue to install via `npx compounding-marketing --tool=cursor`. The `.cursor-plugin/` package is staged for v1.8.1 Marketplace publication and does not change the supported install path today.

### Why this matters

v1.7 made marketing **knowledge** compound through a structural read/write loop on `.agents/learnings/`. v1.8 makes the **orchestration** compound. The collapse to one skill paradigm removes the second authoring contract (a separate `commands/` shape) that every new contributor had to learn — and removes the validator carve-out that let workflow files drift. The sub-agent tier turns the highest-leverage workflows (research, audit, position) from sequential 2-3 hour passes into parallel 20-30 minute fan-outs on Claude Code, with documented graceful degradation on every other host. `.claude/skills/` as the canonical surface puts the plugin where Claude Code's native loader looks first. Headless mode on `cm-flow-{compound,audit,retro,weekly}` opens the door to scheduled / CI-driven marketing ops. Together: every artifact gets faster to produce, every artifact gets richer because parallel sub-agents bring more evidence, and every project's learnings flow into the next run without the human re-keying anything.

### Out of v1.8

Explicitly deferred or declined so the scope stayed honest:

- **Per-skill integration-aware behavior → v1.9.** v1.8 ships detection + `.agents/integrations.md`. Skills branching their output on "is Linear available? then file a ticket" is v1.9.
- **Cursor Marketplace publish → v1.8.1.** The `.cursor-plugin/` package is ready; the actual Marketplace submission is a follow-up.
- **`cm-learnings-researcher` as the default read path for wired skills → v1.8.1+.** The researcher is shipped and opt-in; the five v1.7 wired skills still run the in-line Prior Learnings Consulted contract unchanged.
- **Workspace-scoped learnings (cross-project) → v1.9.** Still per-project under `.agents/learnings/` in v1.8.
- **Semantic search over learnings → not pursued.** Frontmatter-first retrieval in `cm-learnings-researcher` is the chosen path; a vector index is unnecessary at current corpus sizes.
- **Native Claude Code hooks → declined.** Cron / shell hooks remain out of scope; headless mode is the supported automation surface.
- **Claude Desktop MCP packaging → deferred.** Desktop reads a different config shape; revisit after Cursor Marketplace ships.

---

## [1.7.0] - 2026-05-23

Headline release: the **Prior Learnings system** — a versioned schema for `.agents/learnings/<category>.md`, a default-on consumption contract wired into 5 high-leverage skills, and a rewritten `/cm-compound` that enforces the schema on write. This is the read/write loop that makes "marketing knowledge compounds" a structural guarantee instead of a tagline.

### Added

**Learnings schema (v1.0.0).** First-class, versioned spec for the file shape that `/cm-compound` writes and wired skills read.
- `skills/_LEARNINGS_SCHEMA.md` — single source of truth. Defines YAML frontmatter (`category`, `last_updated`, `entries_count`), the 6-field entry structure (Context / Finding / Evidence / Implication / Linked skills / Confidence), the lowercase-only `Confidence` enum, the 5-step consumption contract, the authoring rules `/cm-compound` enforces, and the schema-evolution policy.
- Schema version: `1.0.0`. Future minor versions may add optional fields; major bumps will ship with a migration plan.
- Skipped by the validator's skill-discovery loop, which only enumerates `skills/<dir>/SKILL.md` paths (flat files in `skills/` are out of scope).

**Prior Learnings Consulted — wired in 5 skills.** A new H2 section added to the highest-leverage skills, executed before any output, that surfaces prior findings to the user with explicit apply-or-override semantics.
- `skills/copywriting/SKILL.md` (→ v1.2.0)
- `skills/cold-email/SKILL.md` (→ v1.2.0)
- `skills/positioning/SKILL.md` (→ v1.1.0)
- `skills/paid-ads/SKILL.md` (→ v1.2.0)
- `skills/icp-research/SKILL.md` (→ v1.2.0)
- Each section is **tailored to the skill** — match criteria call out the dimensions that matter most to that category (e.g., paid-ads weights down learnings >90 days old due to platform drift; positioning surfaces canvas-axis matches; copywriting matches on page type + framework + voice constraint).
- The literal heading `Prior learnings considered:` is the consumption contract — wired skills surface selected entries under this exact label so the user sees how past work shapes the current output.
- Future releases will roll the section out to all 61 skills. The schema is forward-compatible.

**Canonical section in `_TEMPLATE.md`.** Authors copy/paste the section from `skills/_TEMPLATE.md` when adding a new skill. The template's version of the section documents the full 5-step contract (resolve file → parse schema → select up to 3 entries → surface under canonical heading → apply or explicitly override).

**Validator soft check.** `scripts/validate-skills.js` now warns (non-blocking) when a skill listed in `PRIOR_LEARNINGS_WIRED` is missing the section — catches regressions during future rollouts without breaking the build. Passing files with warnings are now printed in a dedicated `WARNINGS (non-blocking)` block; the exit code remains driven by errors only.

**v1.8 ideation brainstorm.** `docs/brainstorms/2026-05-23-v1.8-ideation.md` captures a side-by-side comparison of compounding-marketing vs. Superpowers, compounding-engineering, claudesidian + Nexus, and the 2026 multi-surface delivery landscape (Agent Skills spec, AGENTS.md formalization, Cursor Marketplace + team controls, `.claude/skills/` migration). Outputs a tier S/A/B feature ranking for v1.8 scope.

### Changed

- `commands/cm-compound.md` — full rewrite. Replaces the freeform 5-step capture with an 8-step schema-enforcing flow: confirm there's evidence, pick category, draft six required fields, validate before write, locate or create the category file with frontmatter, insert above existing entries (reverse-chronological), update frontmatter (`last_updated` + `entries_count`), and confirm the compound by naming the wired skills that will now consume the learning. Rejects writes that fail validation rather than silently fixing them.
- `package.json` — version bumped to `1.7.0`.

### Compatibility

- **Backward compatible.** Existing `.agents/learnings/<category>.md` files without YAML frontmatter continue to work — wired skills proceed without applying entries from malformed files and surface the inconsistency so the user can decide whether to migrate.
- **Validator unchanged for non-wired skills.** Only the 5 listed skills produce a Prior Learnings warning; the other 56 pass identically to v1.6.
- **Schema is forward-compatible.** Minor schema bumps will add optional fields; reading code can ignore unknown fields without erroring.

### Why this matters

Marketing knowledge compounds only when each project deposits something concrete that the next project can withdraw. v1.6 had the deposit half (`/cm-compound`) but the withdrawal side was implicit — the model could read `.agents/learnings/` if it remembered to. v1.7 makes both sides structural: a schema neither side can drift from, a default-on read step in the 5 highest-leverage skills, and a write command that rejects entries without evidence. The five wired skills (copywriting, cold-email, positioning, paid-ads, icp-research) cover the surfaces where compounding pays back fastest — the next launch's headline beats the last one's because last quarter's pricing-page test result is in the context window before the model writes a word.

---

## [1.6.0] - 2026-05-12

Headline release: marketplace install for Claude Code, a hardened opt-in npx wizard with `--dry-run` / `--uninstall`, real per-tool install paths verified against each platform's docs (Claude Code, Cursor, Codex, Zed, ChatGPT), and all 61 skills expanded to a single gold-standard structure (~37,500 lines total).

### Added

**Marketplace + wizard surface.** First-class Claude Code marketplace entry plus two slash commands that mirror the npx wizard from inside the editor.
- `.claude-plugin/marketplace.json` — enables `/plugin marketplace add classicchins/compounding-marketing`.
- `.claude-plugin/plugin.json` refreshed with full author/repository/homepage metadata and `commands: 16`.
- `commands/cm-setup.md` — explicit, opt-in per-project bootstrap (the in-Claude-Code equivalent of the npx wizard).
- `commands/cm-uninstall.md` — manifest-driven rollback that restores `.bak` backups byte-identical and strips marker blocks.
- `bin/setup.js` — full rewrite (~1,260 lines) with new flags: `--dry-run`, `--uninstall`, `--yes`/`-y` (CI-friendly defaults: merge instructions, skip everything else), `--scope=global|project|custom`, `--target=<path>`, `--tool=claude-code|claude-cowork|cursor|codex|chatgpt|zed|other`, plus `--version`/`-v`, `--info`, `--help`/`-h`.

**Cross-platform support.** Every target path was verified against the upstream tool's own docs; the wizard now writes real MCP server config files instead of printing snippets.
- Claude Code / Cowork: `~/.claude/plugins/` or `./compounding-marketing/`, with symlinks into `.claude/commands/cm-*.md` and `.claude/skills/<skill>/` for the native skill loader.
- Cursor: `./compounding-marketing/` + generated `./.cursor/rules/cm-*.mdc` with proper Cursor frontmatter (`description`, `globs`, `alwaysApply`).
- Codex (OpenAI): skill directories symlinked under `~/.agents/skills/<skill>/` (global) or `./.agents/skills/<skill>/` (project); `AGENTS.md` is project-scoped per Codex's Git-root discovery.
- Zed: `./compounding-marketing/` + project-root `AGENTS.md`. No `.zed/` writes.
- ChatGPT: project files + printed copy-paste block for Custom GPT Instructions.
- MCP config writes land at each tool's documented location and flow through the same collision handler / manifest as every other write:
  - Cursor: `.cursor/mcp.json` or `~/.cursor/mcp.json` (JSON, `{"mcpServers": {...}}`).
  - Codex: `./.codex/config.toml` or `~/.codex/config.toml` (TOML, `[mcp_servers.<name>]` tables).
  - Claude Code project: `.mcp.json` (JSON).
  - Claude Code global: wizard prints `claude mcp add --scope user …` instead of editing `~/.claude.json` (which holds Claude Code's own state).
- Install manifest (`.compounding-marketing-install.json` for project scope, `~/.claude/.compounding-marketing-install.json` for global) tracks every `createdFiles[]`, `createdSymlinks[]`, `modifiedFiles[].backupPath`, `appendedMarkers[]`, and `mcpEntries[]`. Preserved across re-installs; `--uninstall` reverses exactly the recorded changes (files/symlinks removed, `.bak` backups restored, marker blocks stripped, MCP entries removed via JSON delete or TOML regex strip).

**Skill quality infrastructure + 61 expansions.** A canonical template and a build-blocking validator now back every skill, and all 61 skills have been expanded to meet the bar.
- `skills/_TEMPLATE.md` — canonical 7-section gold-standard structure (Role, Initial Assessment, Process, Output Format, Quality Bar with Common Mistakes, Examples, Related Skills).
- `scripts/validate-skills.js` — enforces ≥300 lines, role prompt, all required sections, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills. Wired into `npm run validate` and `npm run build`.
- All 61 skills now meet the structure (~37,500 lines total, avg ~615 per skill). Highlights by group:
  - **Tier A conformance** (8): ai-seo, cold-email, gtm-strategy, referral-program, paid-ads, brand-voice, positioning, seo-audit. `brand-voice` was fully rebuilt — previously passed the validator with placeholder `[Example]` text; now 474 lines with real worked examples grounded in Mailchimp Content Style Guide, NN/g four-dimensional tone, Marty Neumeier, and Lawrence Vincent. `ai-seo` stats audited honestly: unsourced precise figures (Wyzowl 67%, Mixpanel 3.2 min, +527% YoY, 85.79%) softened to qualitative claims and fabricated citations removed.
  - **Foundational strategy** (7): content-strategy, copywriting, messaging-framework, value-proposition, launch-strategy, marketing-psychology, cm-context.
  - **Channel + content** (7): email-sequence (58 → 575), social-content, channel-strategy, webinar-strategy, partnership-marketing, newsletter-growth, community-strategy.
  - **CRO + SEO** (8): programmatic-seo, site-architecture, competitor-alternatives, ab-test-setup, page-cro, schema-markup, popup-cro, form-cro.
  - **Lifecycle + ops** (6): churn-prevention, revops, marketing-automation, attribution-modeling, analytics-tracking, email-deliverability.
  - **Research** (6): icp-research, customer-research, customer-interview, competitive-analysis, market-sizing, competitor-content-monitoring.
  - **Channel + paid** (6): ad-creative, linkedin-ads, video-marketing, product-hunt-launch, press-pr, abm-strategy.
  - **Conversion** (5): signup-flow-cro, onboarding-cro, paywall-upgrade-cro, pricing-strategy, copy-editing.
  - **Sales + meta** (8): case-study, testimonial-collection, sales-enablement, lead-magnets, free-tool-strategy, marketing-ideas (130 → 576), social-media-strategy, content-performance-scoring.

### Changed

- Every existing-file write prompts: **Merge with markers** / **Overwrite (with `.bak` backup)** / **Skip**. With `--yes`: instructions files / `.gitignore` / MCP config default to merge; everything else defaults to skip.
- `cm-*` symlink cleanup is gated behind a confirmation prompt; idempotent re-runs preserve manifest entries.
- `CLAUDE.md` / `AGENTS.md` edits are always wrapped in `<!-- COMPOUNDING-MARKETING-START/END -->` markers so N installs produce a single marker pair.
- Post-install verification offers to repair (or remove) broken symlinks instead of just reporting them.
- README install section restructured: marketplace-first for Claude Code, hardened npx fallback for everything else, with the full per-tool target table.
- AGENTS.md skill catalog regenerated to list all 61 skills across 12 categories with current names. `/cm-{name}` syntax replaces legacy `/cm:{name}` throughout.

### Removed

- `npm postinstall` hook — installation is now opt-in. `npm install` performs zero file writes outside `node_modules/`. **This was the root-cause bug from v1.1.5 / v1.5 that silently overwrote user `CLAUDE.md` files.**
- `bin/setup.js --silent` mode (no longer needed; postinstall hook is gone).

### Fixed

- `CLAUDE.md` and `AGENTS.md` are no longer silently overwritten by `npm install` or by the wizard.
- `fs.cpSync(..., { force: true })` replaced with a per-leaf `copyTreeRespectingCollisions` walker that consults the collision handler.
- Re-running the wizard no longer duplicates marker blocks (idempotent replace path) and no longer zeros out the manifest (prior entries are merged forward).
- Global scope no longer pollutes cwd — `.cm-config.json` and `.gitignore` only land in cwd for `--scope=project`; global installs write config to `~/.claude/.cm-config.json`.
- Cursor target writes proper `.mdc` files (previously `.md` symlinks Cursor ignored).
- Codex target writes to `~/.agents/skills/<skill>/` per the official docs (previously `~/.codex/prompts/`, which Codex does not read).
- Zed target no longer writes a `.zed/` directory (Zed reads project-root `AGENTS.md` directly).

## [1.5.0] - 2026-03-21

### Added

**New Workflow Commands (3):**
- `/cm:sprint` — 2-week marketing sprint planning with goals, deliverables, and schedule
- `/cm:retro` — Campaign/sprint retrospective (what worked, what didn't, action items)
- `/cm:audit` — Quarterly marketing health check across channels, funnel, and assets

**Setup Wizard Improvements:**
- Auto-generates MCP config for Claude Code and Cursor
- Auto-creates CLAUDE.md for Claude Code users
- Auto-creates .cursor/mcp.json for Cursor users
- Better descriptions and inline help for non-technical users
- Step numbering (1 of 4, 2 of 4...) for clarity
- Descriptions for each option in select menus
- Graceful handling of Ctrl+C / readline close

### Improved

**README:**
- Added comprehensive "Example Workflows" section with real usage patterns
- Better organized workflow command listing (Project / Planning / Daily)
- Clearer getting started instructions

**CLAUDE.md:**
- Updated workflow command counts and categorization

### Changed
- Version bump to 1.5.0

---

## [1.1.0] - 2026-03-14

### Added

**MCP Integrations:**
- `mcp/` directory with pre-configured MCP servers
- Perplexity MCP — AI-powered web research (search, ask, reason, research)
- Exa MCP — Neural search and company intelligence (company research, people search, web search, deep researcher)
- Setup guides and tool references for each MCP

**Optional Integrations:**
- `integrations/` directory with setup guides
- Task tracking: Linear, Trello, Asana, ClickUp
- Analytics: Google Analytics 4, Search Console, Mixpanel, Meta Ads
- `hooks.md` documenting how skills interact with integrations

**npx Setup Wizard:**
- `package.json` for npm package distribution
- `bin/setup.js` interactive configuration wizard
- `.cm-config.json.example` configuration template
- AI tool selection, MCP configuration, integration enablement

**New Skills (5):**
- `product-hunt-launch` — Product Hunt launch strategy and execution
- `linkedin-ads` — LinkedIn advertising for B2B lead generation
- `customer-interview` — Interview guide, questions, and synthesis
- `press-pr` — PR strategy, media outreach, and press releases
- `newsletter-growth` — Email list growth tactics and optimization

### Improved

**Skill Quality:**
- `seo-audit` — Expanded from basic checklist to comprehensive audit covering Core Web Vitals, crawlability, content, backlinks, and prioritization
- `market-sizing` — Added detailed methodologies, data sources, validation process, and MCP research commands

**Documentation:**
- README updated with npx as primary install method
- Added MCP and Integrations sections to README
- Updated skill counts to reflect new additions

### Changed

- Skill count increased from 50 to 55
- Skills now reference MCP tools when available for enhanced research
- Skills now reference integration hooks for task/analytics connections

---

## [1.0.0] - 2026-03-14

### Added

**Foundation Skills (5):**
- `cm-context` — Product-market context document creation
- `positioning` — April Dunford's positioning framework
- `messaging-framework` — Messaging pillars and proof points
- `value-proposition` — Strategyzer Value Proposition Canvas
- `brand-voice` — Brand voice and tone guidelines

**Research Skills (5):**
- `icp-research` — Ideal Customer Profile development
- `customer-research` — JTBD and interview synthesis
- `competitive-analysis` — Strategic competitive intelligence
- `market-sizing` — TAM/SAM/SOM calculation
- `marketing-psychology` — Psychological principles for marketing

**Content & Copy Skills (7):**
- `copywriting` — Conversion-focused copy for any page type
- `copy-editing` — Edit and improve existing copy
- `content-strategy` — Content planning and calendar
- `case-study` — Customer success story writing
- `social-content` — Social media content creation
- `video-marketing` — Video content strategy
- `lead-magnets` — Lead magnet design

**SEO & Discovery Skills (6):**
- `seo-audit` — Technical and on-page SEO audit
- `ai-seo` — AI search optimization (AEO/GEO)
- `programmatic-seo` — Scaled SEO page generation
- `site-architecture` — URL structure and hierarchy
- `schema-markup` — Structured data implementation
- `competitor-alternatives` — Comparison and alternative pages

**CRO Skills (7):**
- `page-cro` — Landing page optimization
- `signup-flow-cro` — Registration flow optimization
- `onboarding-cro` — Activation flow optimization
- `form-cro` — Form optimization
- `popup-cro` — Popup and modal optimization
- `paywall-upgrade-cro` — Upgrade prompt optimization
- `pricing-strategy` — Pricing and packaging strategy

**Outreach & Email Skills (3):**
- `cold-email` — Cold outreach email writing
- `email-sequence` — Automated email flow design
- `testimonial-collection` — Social proof gathering

**Paid Acquisition Skills (2):**
- `paid-ads` — Paid campaign planning
- `ad-creative` — Ad copy and creative writing

**Measurement & Testing Skills (3):**
- `analytics-tracking` — Event tracking setup
- `ab-test-setup` — A/B test design and execution
- `attribution-modeling` — Marketing attribution

**GTM & Launch Skills (3):**
- `launch-strategy` — Product launch planning
- `gtm-strategy` — Go-to-market motion design
- `channel-strategy` — Marketing channel prioritization

**Growth & Retention Skills (5):**
- `referral-program` — Referral program design
- `free-tool-strategy` — Free tool creation for lead gen
- `churn-prevention` — Churn reduction and retention
- `partnership-marketing` — Partnership and co-marketing
- `community-strategy` — Community building

**Sales & RevOps Skills (3):**
- `sales-enablement` — Sales collateral creation
- `revops` — Revenue operations design
- `webinar-strategy` — Webinar planning and execution

**Meta Skill (1):**
- `marketing-ideas` — 140+ SaaS marketing tactics

**Workflow Commands (5):**
- `/cm:research` — Deep market research workflow
- `/cm:position` — Full positioning workshop
- `/cm:copy` — End-to-end copywriting workflow
- `/cm:launch` — Launch planning workflow
- `/cm:compound` — Document learnings workflow

**Documentation:**
- Comprehensive README with quick start and philosophy
- CLAUDE.md for Claude Code integration
- AGENTS.md for cross-platform compatibility
- Plugin manifests for Claude Code and Cursor
- This CHANGELOG

### Initial Release

First public release of Compounding Marketing plugin with 50 skills and 5 workflow commands.

---

## Future Roadmap

Planned additions for future versions:

- Additional reference materials (swipe files, example positioning canvases)
- Integration guides for common marketing tools
- More detailed case studies and examples
- Video tutorials for complex skills
- Community-contributed skills and improvements

---

[1.8.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.8.0
[1.7.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.7.0
[1.6.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.6.0
[1.5.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.5.0
[1.1.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.1.0
[1.0.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.0.0
