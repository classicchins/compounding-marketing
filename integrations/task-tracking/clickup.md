# ClickUp Integration

Use ClickUp for all-in-one marketing workspace with docs, tasks, and tracking.

## Why ClickUp?

- Everything in one place (docs + tasks)
- Highly customizable
- Time tracking built-in
- Free tier is generous

## Setup

### 1. Get API Token

1. Go to Settings → Apps → API Token
2. Click "Generate" under Personal API Token
3. Copy the token

### 2. Find Workspace/List IDs

```bash
# List workspaces
curl -H "Authorization: YOUR_TOKEN" \
  https://api.clickup.com/api/v2/team

# List spaces in workspace
curl -H "Authorization: YOUR_TOKEN" \
  https://api.clickup.com/api/v2/team/TEAM_ID/space

# List folders and lists
curl -H "Authorization: YOUR_TOKEN" \
  https://api.clickup.com/api/v2/space/SPACE_ID/folder
```

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "clickup": {
      "enabled": true,
      "apiToken": "your-token",
      "defaultWorkspaceId": "workspace-id",
      "defaultListId": "list-id"
    }
  }
}
```

## Usage in Skills

### Creating Tasks

When a skill outputs tasks:

```markdown
## Next Steps
→ Create in ClickUp: "Write competitor comparison page" (priority: high)
```

Your AI assistant creates a task with:
- Title, description
- Priority (1=urgent, 2=high, 3=normal, 4=low)
- Due date, assignee

### Marketing Space Structure

```
Marketing Space/
├── 📁 Campaigns/
│   ├── Q1 Product Launch
│   └── Summer Campaign
├── 📁 Content/
│   ├── Blog Posts
│   ├── Social Media
│   └── Case Studies
├── 📁 SEO/
│   ├── Technical Fixes
│   └── Content Optimization
└── 📁 CRO/
    ├── A/B Tests
    └── Page Optimizations
```

## Custom Fields

Set up these custom fields for marketing:

| Field | Type | Options |
|-------|------|---------|
| Content Type | Dropdown | Blog, Social, Email, Video, Case Study |
| Campaign | Dropdown | Your campaigns |
| Status | Dropdown | Draft, Review, Approved, Published |
| Funnel Stage | Dropdown | TOFU, MOFU, BOFU |
| Target Persona | Dropdown | Your personas |

## Automations

ClickUp automations for marketing:

- **When status → Review**: Notify marketing lead
- **When priority → Urgent**: Move to top of list
- **When due date passed**: Add "Overdue" tag
- **When completed**: Move to Archive folder

## ClickUp Docs

Use ClickUp Docs for:
- Marketing briefs
- Campaign strategies
- Content outlines
- Meeting notes

Link docs to tasks for context.

## Best Practices

### Tags
- `#content` — Content tasks
- `#campaign` — Campaign tasks
- `#cro` — Conversion work
- `#seo` — SEO tasks
- `#urgent` — Time-sensitive

### Views
- **Board**: Content pipeline
- **Calendar**: Publishing schedule
- **Timeline**: Launch planning
- **Table**: Bulk task management

### Time Tracking
Enable time tracking for:
- Content creation (average time per type)
- Campaign work (effort estimation)
- Client work (if agency)

## Example Workflow

### Content Production

1. Run `content-strategy` skill
2. AI creates tasks in "Blog Posts" list
3. Add custom fields (type, persona, funnel stage)
4. Writers track time as they work
5. Use Calendar view for schedule
6. Archive completed content monthly

### A/B Testing

1. Run `ab-test-setup` skill
2. AI creates test in "A/B Tests" list
3. Custom fields: hypothesis, metric, status
4. Link to analytics doc
5. Update status as test runs
6. Document results in linked doc

---

## Troubleshooting

### "Invalid token"
- Regenerate in Settings → Apps
- Ensure token hasn't been revoked

### "List not found"
- List IDs change if you move lists
- Re-fetch IDs after workspace restructuring

### Tasks not showing custom fields
- Custom fields are per-list
- Ensure fields exist in target list
