# Trello Integration

Use Trello for visual marketing workflows, content calendars, and campaign tracking.

## Why Trello?

- Visual Kanban boards
- Great for content pipelines
- Easy for non-technical team members
- Free tier sufficient for most needs

## Setup

### 1. Get API Credentials

1. Go to [trello.com/app-key](https://trello.com/app-key)
2. Copy your API Key
3. Click "Token" link to generate a token
4. Authorize and copy the token

### 2. Find Board/List IDs

```bash
# List your boards
curl "https://api.trello.com/1/members/me/boards?key=YOUR_KEY&token=YOUR_TOKEN"

# List columns (lists) on a board
curl "https://api.trello.com/1/boards/BOARD_ID/lists?key=YOUR_KEY&token=YOUR_TOKEN"
```

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "trello": {
      "enabled": true,
      "apiKey": "your-api-key",
      "token": "your-token",
      "defaultBoardId": "board-id",
      "defaultListId": "list-id"
    }
  }
}
```

## Usage in Skills

### Creating Cards

When a skill outputs tasks:

```markdown
## Next Steps
→ Add to Trello: "Write case study: [Customer Name]"
```

Your AI assistant creates a card with:
- Name: "Write case study: [Customer Name]"
- List: default or specified
- Description: Full task details

### Content Calendar Board

Recommended board structure:

| List | Purpose |
|------|---------|
| **Ideas** | Content ideas, brainstorms |
| **Research** | Content being researched |
| **Writing** | In draft |
| **Editing** | Under review |
| **Ready** | Approved, scheduled |
| **Published** | Live content |

### Campaign Board

| List | Purpose |
|------|---------|
| **Backlog** | Future campaigns |
| **Planning** | Being scoped |
| **In Progress** | Active campaigns |
| **Review** | Awaiting approval |
| **Live** | Running campaigns |
| **Completed** | Archived campaigns |

## Power-Ups (Recommended)

- **Calendar** — See content schedule visually
- **Custom Fields** — Add publish date, author, status
- **Slack** — Notifications for card movements

## Example Workflow

### Content Pipeline

1. Run `content-strategy` skill
2. Skill outputs content plan
3. AI creates cards in "Ideas" list
4. Drag cards through pipeline as you work
5. Use due dates for publishing schedule

### Launch Campaign

1. Run `launch-strategy` skill
2. AI creates campaign board from template
3. Checklist items become cards
4. Team moves cards as tasks complete

## Best Practices

### Labels
- 🟢 Green: Content
- 🔵 Blue: Campaign
- 🟡 Yellow: SEO
- 🔴 Red: Urgent
- 🟣 Purple: Social

### Checklists
Use card checklists for:
- Approval steps
- Launch checklists
- Quality checks

### Automation (Butler)
Set up Butler rules:
- Move overdue cards to "Blocked"
- Notify on card assignments
- Archive completed cards after 7 days

---

## Troubleshooting

### "Invalid token"
- Tokens can expire; regenerate if needed
- Ensure token has read/write access

### "Board not found"
- Check board ID in URL
- Ensure API key owner has board access

### Cards in wrong list
- Update `defaultListId` in config
- Specify list per-task if needed
