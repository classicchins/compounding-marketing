# Changelog

All notable changes to the Compounding Marketing plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
