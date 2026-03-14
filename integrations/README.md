# Optional Integrations

Compounding Marketing works standalone, but integrates with your existing tools for better workflows.

## Overview

| Category | Integrations | Purpose |
|----------|--------------|---------|
| **Task Tracking** | Linear, Trello, Asana, ClickUp | Push marketing tasks to your project management |
| **Analytics** | Google Analytics, Search Console, Mixpanel, Meta Ads | Pull data for analysis, push tracking configs |

**These are optional.** Skills work without them but are enhanced when available.

---

## Quick Setup

### Option 1: Setup Wizard

```bash
npx compounding-marketing
# Select integrations during setup
```

### Option 2: Manual Configuration

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "linear": {
      "enabled": true,
      "apiKey": "lin_api_xxxx"
    },
    "googleAnalytics": {
      "enabled": true,
      "propertyId": "GA-XXXXX"
    }
  }
}
```

---

## Task Tracking Integrations

### [Linear](task-tracking/linear.md)
Best for: Product-focused teams, engineering + marketing collaboration
- Push marketing tasks and campaigns
- Track launch checklists
- Link to product roadmap

### [Trello](task-tracking/trello.md)
Best for: Visual workflow, content calendars
- Kanban boards for content pipeline
- Marketing campaign tracking
- Editorial calendars

### [Asana](task-tracking/asana.md)
Best for: Cross-functional teams, campaign management
- Campaign project templates
- Timeline views for launches
- Team workload management

### [ClickUp](task-tracking/clickup.md)
Best for: All-in-one workspace, detailed tracking
- Marketing docs + tasks together
- Custom fields for campaigns
- Time tracking for content

---

## Analytics Integrations

### [Google Analytics 4](analytics/google-analytics.md)
Best for: Website and conversion tracking
- Track campaign performance
- Measure content engagement
- Conversion attribution

### [Google Search Console](analytics/search-console.md)
Best for: SEO performance
- Track keyword rankings
- Monitor impressions/clicks
- Identify content opportunities

### [Mixpanel](analytics/mixpanel.md)
Best for: Product analytics, funnel analysis
- Track user journeys
- A/B test analysis
- Conversion funnels

### [Meta Ads](analytics/meta-ads.md)
Best for: Paid social campaigns
- Campaign performance data
- Audience insights
- Ad creative tracking

---

## How Skills Use Integrations

Skills can reference integrations in two ways:

### 1. Data Input
Skills pull data from integrations for analysis:
```markdown
## Inputs
- Google Analytics: Traffic data (last 30 days)
- Search Console: Keyword rankings
```

### 2. Task Output
Skills push tasks to your tracking system:
```markdown
## Next Steps
→ Linear: Create task "Implement CRO recommendations"
→ Trello: Add card to Content Pipeline board
```

See [hooks.md](hooks.md) for implementation details.

---

## Directory Structure

```
integrations/
├── README.md                  # This file
├── hooks.md                   # How skills reference integrations
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

## Security

- API keys stored in `.cm-config.json` (add to `.gitignore`)
- Use environment variables in shared environments
- Most integrations support read-only access if you don't need write
