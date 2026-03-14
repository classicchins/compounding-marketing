# Asana Integration

Use Asana for cross-functional marketing work, campaign management, and team coordination.

## Why Asana?

- Great for cross-team collaboration
- Timeline views for launches
- Portfolios for campaign oversight
- Forms for intake requests

## Setup

### 1. Get Personal Access Token

1. Go to [app.asana.com/0/developer-console](https://app.asana.com/0/developer-console)
2. Click "Create new token"
3. Copy the token

### 2. Find Workspace/Project IDs

```bash
# List workspaces
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://app.asana.com/api/1.0/workspaces

# List projects in workspace
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "https://app.asana.com/api/1.0/workspaces/WORKSPACE_ID/projects"
```

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "asana": {
      "enabled": true,
      "accessToken": "your-token",
      "defaultWorkspaceId": "workspace-id",
      "defaultProjectId": "project-id"
    }
  }
}
```

## Usage in Skills

### Creating Tasks

When a skill outputs tasks:

```markdown
## Next Steps
→ Create in Asana: "Audit landing page copy" (due: Mar 20)
```

Your AI assistant creates a task with:
- Name, description, due date
- Assignee (if specified)
- Project from config

### Campaign Project Template

Recommended sections:

| Section | Purpose |
|---------|---------|
| **Planning** | Strategy, briefs |
| **Creative** | Design, copy tasks |
| **Production** | Building assets |
| **Review** | Approvals |
| **Launch** | Go-live tasks |
| **Reporting** | Post-launch analysis |

## Project Types

### Marketing Calendar (Board View)
For content and campaign scheduling:
- Columns by week or month
- Cards for each content piece
- Color by content type

### Product Launch (Timeline View)
For launch coordination:
- Milestones for key dates
- Dependencies between tasks
- Cross-team visibility

### Marketing Requests (Forms)
For intake from other teams:
- Standardized request form
- Auto-assign to marketing
- SLA tracking

## Best Practices

### Custom Fields
- **Content Type**: Blog, Social, Email, Video
- **Campaign**: Which campaign it belongs to
- **Status**: Draft, Review, Approved, Published
- **Priority**: P0, P1, P2, P3

### Rules (Automation)
- Move to "Review" when task completed
- Notify stakeholder on status change
- Auto-assign based on content type

### Portfolios
Track multiple marketing initiatives:
- Q1 Campaigns portfolio
- Product Launches portfolio
- Content Marketing portfolio

## Example Workflow

### Content Production

1. Run `content-strategy` skill
2. AI creates project with tasks per content piece
3. Assign to writers
4. Use timeline view for schedule
5. Track in Marketing portfolio

### Launch Coordination

1. Run `launch-strategy` skill
2. AI creates launch project from template
3. Set dependencies (blog before social)
4. Product and Marketing share visibility
5. Timeline shows critical path

---

## Troubleshooting

### "Unauthorized"
- Token may have expired
- Regenerate in developer console

### "Project not found"
- Check project ID (numeric)
- Ensure token owner has project access

### Tasks missing custom fields
- Custom fields must exist in project first
- Add fields manually, then reference by ID
