# Changelog

All notable changes to the Compounding Marketing plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-05-12

### Added

**Marketplace-first install for Claude Code:**
- `.claude-plugin/marketplace.json` — enables `/plugin marketplace add classicchins/compounding-marketing` flow
- `.claude-plugin/plugin.json` — refreshed metadata with full author/homepage/repository fields
- `commands/cm-setup.md` — explicit, opt-in per-project bootstrap slash command (mirrors the npx wizard inside Claude Code)

**Hardened npx wizard (`bin/setup.js`):**
- `--dry-run` — preview every action without writing
- `--uninstall` — manifest-driven rollback that restores `.bak` backups
- `--yes` / `-y` — CI-friendly defaults (merge instructions files, skip everything else)
- `--scope=global|project|custom` — explicit install-location prompt
- `--target=<path>` — custom install location
- `--tool=claude-code|claude-cowork|cursor|codex|chatgpt|zed|other` — per-tool target paths
- `--version` / `-v` and `--help` / `-h`

**Per-tool target paths:**
- Claude Code/Cowork → `~/.claude/plugins/` or `./compounding-marketing/` + symlinks into `.claude/{commands,skills}/`
- Cursor → `./compounding-marketing/` + `./.cursor/rules/cm-*.mdc` + `AGENTS.md`
- Codex (OpenAI) → `~/.codex/prompts/cm-*.md` + `~/.codex/AGENTS.md`
- ChatGPT → `./compounding-marketing/` + printed copy-paste block for Custom GPT Instructions
- Zed → `./compounding-marketing/` + `./.zed/` + `AGENTS.md`

**Install manifest** (`.compounding-marketing-install.json`) tracks every `createdFiles[]`, `createdSymlinks[]`, `modifiedFiles[].backupPath`, and `appendedMarkers[]` so `--uninstall` reverses exactly the changes the wizard made.

**Skill quality infrastructure:**
- `skills/_TEMPLATE.md` — canonical 7-section gold-standard structure
- `scripts/validate-skills.js` — enforces ≥300 lines, role prompt, all required sections, ≥5 common mistakes, ≥2 worked examples, ≥3 related skills. Wired into `npm run validate` and `npm run build`.

**Skill expansions (53 skills brought up to gold-standard structure):**
- Foundational strategy: content-strategy, copywriting, messaging-framework, value-proposition, launch-strategy, marketing-psychology, cm-context
- Channel/content: email-sequence, social-content, channel-strategy, webinar-strategy, partnership-marketing, newsletter-growth, community-strategy
- CRO/SEO: programmatic-seo, site-architecture, competitor-alternatives, ab-test-setup, page-cro, schema-markup, popup-cro, form-cro
- Lifecycle/ops: churn-prevention, revops, marketing-automation, attribution-modeling, analytics-tracking, email-deliverability
- Research: icp-research, customer-research, customer-interview, competitive-analysis, market-sizing, competitor-content-monitoring
- Channel/paid: ad-creative, linkedin-ads, video-marketing, product-hunt-launch, press-pr, abm-strategy
- Conversion/activation: signup-flow-cro, onboarding-cro, paywall-upgrade-cro, pricing-strategy, copy-editing
- Sales/meta: case-study, testimonial-collection, sales-enablement, lead-magnets, free-tool-strategy, marketing-ideas, social-media-strategy, content-performance-scoring
- Tier A conformance pass on the 8 reference skills (ai-seo, cold-email, gtm-strategy, referral-program, paid-ads, brand-voice, positioning, seo-audit) to bring them into validator compliance

### Changed

- Every existing-file write now prompts: **Merge with markers** / **Overwrite (with `.bak` backup)** / **Skip**. With `--yes`: instructions files default to merge, everything else defaults to skip.
- `cm-*` symlink cleanup is now gated behind a confirmation prompt; `--yes` defaults to preserve.
- `CLAUDE.md` / `AGENTS.md` edits are always wrapped in `<!-- COMPOUNDING-MARKETING-START/END -->` markers so re-runs are idempotent.
- Post-install verification now offers to repair (or remove) broken symlinks instead of just reporting them.
- `package.json` `main` field unchanged but the bin entrypoint was rewritten end-to-end (~700 lines) around an `fsx` filesystem wrapper that respects `--dry-run` and tracks every change in the manifest.

### Removed

- `npm postinstall` hook — installation is now opt-in. `npm install` performs zero file writes. **This was the root cause of CLAUDE.md being silently overwritten** in earlier versions.
- `bin/setup.js --silent` mode (no longer needed; the postinstall hook is gone).

### Fixed

- `CLAUDE.md` and `AGENTS.md` are no longer silently overwritten by `npm install` or by the wizard. All collisions prompt.
- `fs.cpSync(..., { force: true })` replaced with a per-leaf `copyTreeRespectingCollisions` walker that consults the collision handler.
- Re-running the wizard against an existing install no longer duplicates marker blocks (idempotent replace path).

### Fixed (post-QA pass)

- **Cursor target corrected** — wizard now generates `.cursor/rules/cm-*.mdc` files with proper Cursor frontmatter (`description`, `globs`, `alwaysApply`). Earlier `.md`-symlink approach was ignored by Cursor.
- **Codex target corrected** — skills now land at `~/.agents/skills/<skill>/` (per [Codex skills docs](https://developers.openai.com/codex/skills)). Earlier `~/.codex/prompts/` path was not read by Codex. `AGENTS.md` is project-scoped per Codex's Git-root discovery.
- **Zed target simplified** — wizard now writes only `AGENTS.md` (Zed reads project-root `AGENTS.md` directly). Earlier `.zed/` writes were wasted bytes.
- **Claude Code skill directories** — wizard now populates `.claude/skills/<skill>/` directory symlinks (previously only `.claude/commands/cm-*.md` were created), enabling Claude Code's native skill loader to discover them.
- **Manifest preservation across re-installs** — re-running the wizard now loads and forwards prior manifest entries instead of zeroing them. Without this fix, `--uninstall` after a re-run would orphan every file/symlink the first run created.
- **Global scope no longer pollutes cwd** — `.cm-config.json` and `.gitignore` only land in cwd for `--scope=project`; global installs write config to `~/.claude/.cm-config.json`.
- **`commands/cm-uninstall.md` added** — slash command referenced in 3 places but didn't previously exist.
- **`brand-voice` skill rebuilt** — was passing the validator with placeholder `[Example]` text and a one-sentence role prompt. Now 554 lines with a 40-line role prompt grounded in Mailchimp Content Style Guide, NN/g, Marty Neumeier, Lawrence Vincent, plus 2 real worked examples (Bookkeep fintech, Bolt API dev tool).
- **`ai-seo` unsourced statistics softened** — QA flagged ~7 oddly-precise figures as likely hallucinations. "69% zero-click", "+527% YoY", "85.79% top-10 citations", platform-share percentages all softened to directional claims with verifiable industry-research citations. Wyzowl 2024 and Mixpanel 2024 Product Benchmarks citations removed entirely (unverifiable).
- **`AGENTS.md` skill catalog regenerated** — was a stale 50-skill v1.0 snapshot; now correctly lists all 61 across 12 categories with current names.
- **Slash-command syntax** — README/AGENTS.md now use `/cm-{name}` (matching marketplace install) instead of legacy `/cm:{name}`.

## [1.1.6] - 2026-03-15

### Removed

- `npm postinstall` hook — emergency patch ahead of the full v1.2.0 install rewrite. Prevents silent file writes on `npm install`.

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
