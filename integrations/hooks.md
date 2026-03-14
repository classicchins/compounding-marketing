# Integration Hooks

How Compounding Marketing skills interact with integrations.

## Overview

Skills don't require integrations, but they can:
1. **Pull data** from analytics for analysis
2. **Push tasks** to project management tools
3. **Reference configs** for tracking setup

---

## Skill Integration Syntax

### In SKILL.md Files

Skills reference integrations in their process steps:

```markdown
## Process

### Step 3: Analyze Current Performance

**If Google Analytics available:**
Use `cm:analytics:ga` to pull:
- Conversion rates by page
- Traffic sources
- User flow data

**If not available:**
Ask user for:
- Manual export of GA data, OR
- Estimates based on their knowledge
```

### In Output Sections

```markdown
## Next Steps

**Create Tasks:**
- [ ] `cm:task:linear` → "Implement A/B test #1" (priority: high)
- [ ] `cm:task:trello` → Add to "CRO Experiments" board

**Or manually:**
- Create task in your project management tool
```

---

## Hook Reference

### Task Tracking Hooks

#### `cm:task:linear`
```json
{
  "title": "Task title",
  "description": "Task description",
  "teamId": "from-config",
  "priority": "urgent|high|normal|low",
  "labels": ["marketing", "cro"]
}
```

#### `cm:task:trello`
```json
{
  "name": "Card name",
  "description": "Card description",
  "listId": "from-config",
  "labels": ["green", "blue"]
}
```

#### `cm:task:asana`
```json
{
  "name": "Task name",
  "notes": "Task description",
  "projectId": "from-config",
  "dueOn": "2025-03-20"
}
```

#### `cm:task:clickup`
```json
{
  "name": "Task name",
  "description": "Task description",
  "listId": "from-config",
  "priority": 1,
  "tags": ["marketing"]
}
```

### Analytics Hooks

#### `cm:analytics:ga`
```json
{
  "propertyId": "from-config",
  "dateRange": "last_30_days",
  "metrics": ["sessions", "conversions", "bounceRate"],
  "dimensions": ["pagePath", "source"]
}
```

#### `cm:analytics:gsc`
```json
{
  "siteUrl": "from-config",
  "dateRange": "last_28_days",
  "dimensions": ["query", "page"],
  "metrics": ["clicks", "impressions", "position"]
}
```

#### `cm:analytics:mixpanel`
```json
{
  "projectId": "from-config",
  "event": "signup_completed",
  "dateRange": "last_30_days",
  "groupBy": "source"
}
```

---

## Fallback Behavior

When an integration isn't configured, skills gracefully degrade:

### Example: `ab-test-setup` Skill

**With Mixpanel:**
```
✓ Pull current conversion rates from Mixpanel
✓ Calculate sample size based on real data
✓ Push experiment config to Mixpanel
```

**Without Mixpanel:**
```
→ Ask user for baseline conversion rate
→ Calculate sample size
→ Provide manual setup instructions
```

---

## Configuration in `.cm-config.json`

```json
{
  "integrations": {
    "linear": {
      "enabled": true,
      "apiKey": "lin_api_xxxx",
      "defaultTeamId": "team-123"
    },
    "trello": {
      "enabled": true,
      "apiKey": "trello-key",
      "token": "trello-token",
      "defaultBoardId": "board-123"
    },
    "googleAnalytics": {
      "enabled": true,
      "propertyId": "GA-123456",
      "serviceAccountKey": "./ga-service-account.json"
    },
    "searchConsole": {
      "enabled": true,
      "siteUrl": "https://example.com",
      "serviceAccountKey": "./gsc-service-account.json"
    },
    "mixpanel": {
      "enabled": true,
      "projectId": "project-123",
      "apiSecret": "mp-secret"
    },
    "metaAds": {
      "enabled": true,
      "accessToken": "meta-token",
      "adAccountId": "act_123456"
    }
  }
}
```

---

## Adding Custom Integrations

You can add custom integrations by:

1. Creating `integrations/custom/your-integration.md`
2. Defining the hook syntax
3. Referencing in skills with `cm:task:your-integration`

Skills will display the hook call; your AI assistant executes based on config.

---

## Best Practices

1. **Start without integrations** — Get familiar with skills first
2. **Add task tracking first** — Push actionable next steps
3. **Add analytics later** — Pull data when you need performance input
4. **Use fallbacks** — Skills always work, integrations just enhance
