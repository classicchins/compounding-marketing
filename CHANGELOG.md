# Changelog

All notable changes to the Compounding Marketing plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2026-05-12

### Added

**Marketplace-first install for Claude Code:**
- `.claude-plugin/marketplace.json` — enables `/plugin marketplace add classicchins/compounding-marketing` flow.
- `.claude-plugin/plugin.json` refreshed with full author/repository/homepage metadata and `commands: 16`.
- `commands/cm-setup.md` — explicit, opt-in per-project bootstrap slash command (the in-Claude-Code equivalent of the npx wizard, safe and prompt-driven).
- `commands/cm-uninstall.md` — manifest-driven rollback that restores `.bak` backups byte-identical and strips marker blocks.

**Hardened npx wizard (`bin/setup.js` — full rewrite, ~1260 lines):**
- `--dry-run` — preview every action without writing.
- `--uninstall` — reverse a previous install via manifest.
- `--yes` / `-y` — CI-friendly defaults (merge instructions files, skip everything else).
- `--scope=global|project|custom` — explicit install-location prompt.
- `--target=<path>` — custom install location.
- `--tool=claude-code|claude-cowork|cursor|codex|chatgpt|zed|other` — per-tool target paths.
- `--version` / `-v`, `--info`, `--help` / `-h`.

**Per-tool target paths (verified against each platform's docs):**
- Claude Code / Cowork: `~/.claude/plugins/` or `./compounding-marketing/`. Symlinks into `.claude/commands/cm-*.md` AND `.claude/skills/<skill>/` for the native skill loader.
- Cursor: `./compounding-marketing/` + generated `./.cursor/rules/cm-*.mdc` files with proper Cursor frontmatter (`description`, `globs`, `alwaysApply`). Per [Cursor rules docs](https://cursor.com/docs/context/mcp).
- Codex (OpenAI): skill directories symlinked under `~/.agents/skills/<skill>/` (global) or `./.agents/skills/<skill>/` (project) — per [Codex skills docs](https://developers.openai.com/codex/skills). `AGENTS.md` is project-scoped per Codex's Git-root discovery.
- Zed: `./compounding-marketing/` + project-root `AGENTS.md`. No `.zed/` writes.
- ChatGPT: project files + printed copy-paste block for Custom GPT Instructions.

**MCP config writing (new):**
- Wizard writes actual MCP server config files at each tool's documented location, not just printed snippets.
- Cursor: `.cursor/mcp.json` or `~/.cursor/mcp.json` (JSON, `{"mcpServers": {...}}` schema).
- Codex: `~/.codex/config.toml` or `./.codex/config.toml` (TOML, `[mcp_servers.<name>]` tables).
- Claude Code project: `.mcp.json` with proper `{"mcpServers": {...}}` schema.
- Claude Code global: wizard prints `claude mcp add --scope user ...` commands (safer than editing `~/.claude.json` directly — that file holds Claude Code's own state).
- Every MCP write goes through the same collision handler (merge / overwrite-with-bak / skip) and is tracked in the install manifest.

**Install manifest** (`.compounding-marketing-install.json` for project scope, `~/.claude/.compounding-marketing-install.json` for global):
- Tracks every `createdFiles[]`, `createdSymlinks[]`, `modifiedFiles[].backupPath`, `appendedMarkers[]`, and `mcpEntries[]`.
- Preserved across re-installs (prior entries merged forward; no zeroing on idempotent runs).
- `--uninstall` reverses exactly the changes the wizard made: removes files/symlinks, restores `.bak` backups, strips marker blocks, removes MCP entries via JSON delete or TOML regex strip.

**Skill quality infrastructure:**
- `skills/_TEMPLATE.md` — canonical 7-section gold-standard structure (Role, Initial Assessment, Process, Output Format, Quality Bar with Common Mistakes, Examples, Related Skills).
- `scripts/validate-skills.js` — enforces ≥300 lines, role prompt, all required sections, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills. Wired into `npm run validate` and `npm run build`.

**Skill expansions** — all 61 skills now meet the gold-standard structure (~37,500 lines total, avg ~615 per skill). Highlights:
- **Tier A conformance** (8): ai-seo, cold-email, gtm-strategy, referral-program, paid-ads, brand-voice, positioning, seo-audit. `brand-voice` fully rebuilt (was passing the validator with placeholder `[Example]` text; now 474 lines with real worked examples grounded in Mailchimp Content Style Guide, NN/g four-dimensional tone, Marty Neumeier, Lawrence Vincent). `ai-seo` stats audited honestly — unsourced precise figures (Wyzowl 67%, Mixpanel 3.2 min, +527% YoY, 85.79%) softened to qualitative claims; fabricated citations removed.
- **Foundational strategy** (7): content-strategy, copywriting, messaging-framework, value-proposition, launch-strategy, marketing-psychology, cm-context.
- **Channel/content** (7): email-sequence (58 → 575), social-content, channel-strategy, webinar-strategy, partnership-marketing, newsletter-growth, community-strategy.
- **CRO/SEO** (8): programmatic-seo, site-architecture, competitor-alternatives, ab-test-setup, page-cro, schema-markup, popup-cro, form-cro.
- **Lifecycle/ops** (6): churn-prevention, revops, marketing-automation, attribution-modeling, analytics-tracking, email-deliverability.
- **Research** (6): icp-research, customer-research, customer-interview, competitive-analysis, market-sizing, competitor-content-monitoring.
- **Channel/paid** (6): ad-creative, linkedin-ads, video-marketing, product-hunt-launch, press-pr, abm-strategy.
- **Conversion** (5): signup-flow-cro, onboarding-cro, paywall-upgrade-cro, pricing-strategy, copy-editing.
- **Sales/meta** (8): case-study, testimonial-collection, sales-enablement, lead-magnets, free-tool-strategy, marketing-ideas (130 → 576), social-media-strategy, content-performance-scoring.

### Changed

- Every existing-file write now prompts: **Merge with markers** / **Overwrite (with `.bak` backup)** / **Skip**. With `--yes`: instructions files / `.gitignore` / MCP config default to merge; everything else defaults to skip.
- `cm-*` symlink cleanup is now gated behind a confirmation prompt; idempotent re-runs preserve manifest entries.
- `CLAUDE.md` / `AGENTS.md` edits are always wrapped in `<!-- COMPOUNDING-MARKETING-START/END -->` markers so re-runs are idempotent (single marker pair after N installs).
- Post-install verification offers to repair (or remove) broken symlinks instead of just reporting them.
- README install section restructured: marketplace-first for Claude Code, hardened npx fallback for everything else, with the full per-tool target table.
- AGENTS.md skill catalog regenerated to list all 61 skills across 12 categories with current names. `/cm-{name}` syntax replaces legacy `/cm:{name}` throughout.

### Removed

- `npm postinstall` hook — installation is now opt-in. `npm install` performs zero file writes outside `node_modules/`. **This was the root-cause bug from v1.1.5 / v1.5 that silently overwrote user `CLAUDE.md` files.**
- `bin/setup.js --silent` mode (no longer needed; postinstall hook is gone).

### Fixed

- `CLAUDE.md` and `AGENTS.md` are no longer silently overwritten by `npm install` or by the wizard.
- `fs.cpSync(..., { force: true })` replaced with a per-leaf `copyTreeRespectingCollisions` walker that consults the collision handler.
- Re-running the wizard against an existing install no longer duplicates marker blocks (idempotent replace path) and no longer zeros out the manifest (prior entries are merged forward).
- Global scope no longer pollutes cwd — `.cm-config.json` and `.gitignore` only land in cwd for `--scope=project`; global installs write config to `~/.claude/.cm-config.json`.
- Cursor target writes proper `.mdc` files (previously `.md` symlinks Cursor ignored).
- Codex target writes to `~/.agents/skills/<skill>/` per the official docs (previously `~/.codex/prompts/` which Codex does not read).
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

[1.1.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.1.0
[1.0.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.0.0
