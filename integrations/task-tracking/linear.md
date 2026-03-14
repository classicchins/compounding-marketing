# Linear Integration

Use Linear to track marketing tasks, campaigns, and launch checklists.

## Why Linear?

- Clean, fast interface
- Great for cross-functional work (marketing + product + engineering)
- Issues link to cycles/sprints
- Powerful API for automation

## Setup

### 1. Get API Key

1. Go to [linear.app/settings/api](https://linear.app/settings/api)
2. Create a personal API key
3. Copy the key (starts with `lin_api_`)

### 2. Find Your Team ID

```bash
# Using Linear's API
curl -H "Authorization: lin_api_YOUR_KEY" \
  https://api.linear.app/graphql \
  -d '{"query": "{ teams { nodes { id name } } }"}'
```

Or find in Linear URL: `linear.app/team/TEAM_ID/...`

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "linear": {
      "enabled": true,
      "apiKey": "lin_api_xxxx",
      "defaultTeamId": "team-uuid-here",
      "defaultLabels": ["marketing"]
    }
  }
}
```

## Usage in Skills

### Creating Tasks

When a skill outputs tasks:

```markdown
## Next Steps
→ Create in Linear: "Implement homepage CRO changes" (High priority)
```

Your AI assistant will execute:
```bash
# Creates issue in Linear with:
# - Title: "Implement homepage CRO changes"
# - Team: from config
# - Priority: 2 (high)
# - Labels: ["marketing"]
```

### Creating Launch Checklists

The `launch-strategy` skill creates a full launch checklist:

```markdown
## Launch Checklist (Linear Project)

Create project: "[Product] Launch - [Date]"

Issues:
1. [ ] Write launch blog post
2. [ ] Create social assets
3. [ ] Set up Product Hunt
4. [ ] Brief support team
5. [ ] Prepare email sequence
```

## Linear MCP (Alternative)

For deeper integration, use the Linear MCP:

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-linear"],
      "env": {
        "LINEAR_API_KEY": "lin_api_xxxx"
      }
    }
  }
}
```

This enables:
- Search existing issues
- Update issue status
- Create projects and cycles
- Full Linear API access

## Best Practices

### Labels
Create these labels in Linear for marketing work:
- `marketing` — All marketing tasks
- `content` — Content creation
- `cro` — Conversion optimization
- `launch` — Product launches
- `campaign` — Marketing campaigns

### Projects
Use Linear projects for:
- Major campaigns
- Product launches
- Quarterly initiatives

### Cycles
Align marketing sprints with product cycles for cross-team visibility.

## Example Workflow

1. Run `launch-strategy` skill
2. Skill outputs launch checklist
3. AI creates Linear project with all tasks
4. Team works through checklist in Linear
5. Track progress across marketing + product

---

## Troubleshooting

### "Invalid API key"
- Ensure key starts with `lin_api_`
- Check key hasn't expired
- Verify in Linear settings

### "Team not found"
- Double-check team ID (UUID format)
- Ensure API key has access to that team

### Rate limits
- Linear allows ~1,000 requests/hour
- Batch task creation when possible
