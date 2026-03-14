# Compounding Marketing v1.1 Improvements

*Released: 2026-03-14*

## Overview

Version 1.1 adds first-class MCP integrations, optional tool integrations, an interactive setup wizard, and 5 new marketing workflows.

---

## New Features

### 1. Pre-configured MCPs — Perplexity + Exa

Added `mcp/` directory with ready-to-use configurations for research-focused MCPs:

**Perplexity MCP:**
- `perplexity_search` — Raw search results with sources
- `perplexity_ask` — AI-powered Q&A with web search
- `perplexity_reason` — Complex analysis and comparisons
- `perplexity_research` — Deep comprehensive research reports

**Exa MCP:**
- `web_search_exa` — Neural/semantic web search
- `company_research_exa` — Deep company profiles (employees, stack, funding)
- `people_search_exa` — Find professionals and executives
- `crawling_exa` — Read specific URL content
- `deep_researcher_start/check` — Async AI research agent

**Files added:**
```
mcp/
├── README.md                 # Overview and quick setup
├── perplexity/
│   ├── config.json           # MCP server config
│   ├── setup.md              # Detailed setup guide
│   └── tools.md              # Tool reference with examples
└── exa/
    ├── config.json
    ├── setup.md
    └── tools.md
```

**Skills updated to reference MCPs:**
- `competitive-analysis` — Uses Exa company research, Perplexity for market data
- `market-sizing` — Uses Perplexity for industry reports
- `seo-audit` — Uses Exa for competitor analysis
- `icp-research` — Uses both for firmographic research
- `press-pr` — Uses Exa people search for journalist discovery

---

### 2. Optional Integrations

Added `integrations/` directory with setup guides and skill hooks for popular tools:

**Task Tracking:**
- Linear — Issue creation, sprint tracking, launch checklists
- Trello — Kanban boards, content calendars
- Asana — Cross-team projects, timeline views
- ClickUp — All-in-one workspace

**Analytics & Marketing:**
- Google Analytics 4 — Traffic, conversions, funnels
- Google Search Console — SEO rankings, keyword data
- Mixpanel — Product analytics, A/B testing
- Meta Ads — Paid social campaign data

**Files added:**
```
integrations/
├── README.md                 # Overview and quickstart
├── hooks.md                  # How skills use integrations
├── task-tracking/
│   ├── linear.md
│   ├── trello.md
│   ├── asana.md
│   └── clickup.md
└── analytics/
    ├── google-analytics.md
    ├── search-console.md
    ├── mixpanel.md
    └── meta-ads.md
```

---

### 3. npx Installation + Setup Wizard

Added interactive setup wizard for easier onboarding:

```bash
npx compounding-marketing
```

**Wizard features:**
- AI tool selection (Claude Code, Cursor, ChatGPT, Windsurf)
- MCP configuration with API key prompts
- Integration selection (checkboxes)
- Outputs `.cm-config.json` configuration file
- Auto-adds config to `.gitignore`

**Files added:**
```
package.json                  # npm package definition
bin/setup.js                  # Interactive wizard
.cm-config.json.example       # Example configuration
```

---

### 4. New Workflows (5 Skills Added)

Added 5 new skills to fill gaps in the marketing workflow coverage:

| Skill | Description | Category |
|-------|-------------|----------|
| **product-hunt-launch** | PH launch playbook — pre-launch prep, assets, launch day execution, follow-up | GTM & Launch |
| **linkedin-ads** | LinkedIn advertising strategy — targeting, ad formats, budgeting, optimization | Paid Acquisition |
| **customer-interview** | Interview guide and synthesis — recruitment, questions, JTBD extraction | Research |
| **press-pr** | PR strategy — media lists, pitch templates, press releases, outreach | GTM & Launch |
| **newsletter-growth** | Email list growth tactics — lead magnets, optimization, partnerships, referrals | Growth & Retention |

---

### 5. Workflow QA — Skills Improved

Improved depth and quality of thin skills:

**`seo-audit`** (expanded from 1-page to comprehensive):
- Added Core Web Vitals section with specific benchmarks
- Added detailed crawlability and indexation checklist
- Added content audit methodology
- Added backlink profile analysis
- Added impact vs effort prioritization matrix
- Added MCP research commands

**`market-sizing`** (expanded significantly):
- Added detailed top-down and bottom-up methodologies
- Added reconciliation process between methods
- Added comprehensive data sources list
- Added SAM filtering methodology
- Added SOM calculation approaches
- Added validation checklist
- Added MCP research commands

---

## Quality Improvements

### All Skills Now Include:

- **MCP references**: Skills note when MCPs can enhance research
- **Integration hooks**: Skills indicate task/analytics integration points
- **Consistent quality bar**: Every skill has clear inputs, process, output format, and common mistakes

### Documentation Updates:

- **README.md**: Updated with npx as primary install method
- **CHANGELOG.md**: Updated with v1.1 changes

---

## Breaking Changes

None. All existing skills remain compatible.

---

## Migration Guide

**From v1.0 to v1.1:**

1. Pull latest version
2. Run `npx compounding-marketing` to configure MCPs and integrations
3. Update any custom workflows to leverage new skills

**No changes required** to existing workflow usage.

---

## Future Roadmap

Potential v1.2 improvements:
- Additional MCP integrations (Serper, Tavily)
- CRM integrations (HubSpot, Salesforce)
- AI tool-specific optimizations
- Community-contributed skills system
- Learning/compound tracking automation

---

## Contributing

This is an open-source plugin. Contributions welcome:

1. **Improve existing skills** — Add examples, refine processes
2. **Add new skills** — Follow skill template structure
3. **Report issues** — What's unclear or missing?
4. **Share learnings** — What worked for you?

See `CONTRIBUTING.md` for guidelines.
