# Exa MCP Integration

Neural search and company intelligence for Compounding Marketing skills.

## What It Does

Exa MCP provides:
- **Neural search** (semantic, not keyword-based)
- **Company research** (deep company profiles)
- **People search** (find executives, founders)
- **Code search** (for technical content research)

**Which skills benefit:**
- `competitive-analysis` — Find competitor positioning gaps
- `icp-research` — Research companies in your ICP
- `positioning` — Discover how competitors position
- `cold-email` — Research prospects before outreach

---

## Installation

### Claude Code

```bash
claude mcp add exa -- npx -y @exa-labs/mcp-server
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "@exa-labs/mcp-server"],
      "env": {
        "EXA_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

Restart Claude Desktop.

---

## Get API Key

1. Go to [exa.ai](https://exa.ai)
2. Sign up
3. Get API key from dashboard
4. Add to config (see above)

**Pricing:**
- Free tier: 1,000 searches/mo
- Pro: $20/mo for 10,000 searches/mo

---

## Example: Competitive Analysis with Exa

**Prompt:**
```
Use competitive-analysis skill. Find positioning gaps vs Taplio.
```

**Exa queries (automatic):**
- `exa.web_search_exa("Taplio LinkedIn tool positioning")`
- `exa.web_search_exa("LinkedIn personal branding tool founder")`
- `exa.company_research_exa("Taplio")`

**Output:**
```markdown
## Taplio Positioning Analysis

**How they position:** "LinkedIn growth tool for creators and agencies"

**Target audience:** Content creators, agencies, influencers (not founders)

**Key messaging:**
- "Grow your LinkedIn"
- "Schedule + analytics"
- "Viral content ideas"

**White space opportunity:**
Taplio targets creators. We target founders. Founders want authentic voice, not templates. Positioning gap: "Authentic AI for founders vs growth tools for creators"
```

---

## Example: ICP Research with Exa

**Prompt:**
```
Use icp-research. Find companies matching our ICP (Series A SaaS, 10-50 employees)
```

**Exa queries:**
- `exa.company_research_exa("Series A SaaS 10-50 employees")`
- `exa.people_search_exa("CEO SaaS Series A")`

**Output:**
List of 20 companies matching ICP with:
- Company name, size, funding stage
- Tech stack (signals buying intent)
- Recent news (hiring, fundraising)
- Decision-maker contacts

---

## Example: Cold Email Research with Exa

**Prompt:**
```
I'm reaching out to Sarah Chen, CEO of Acme SaaS. Research her company.
```

**Exa query:**
```javascript
exa.company_research_exa("Acme SaaS")
```

**Output:**
```markdown
## Acme SaaS — Company Profile

**Stage:** Series A ($8M raised Nov 2025)
**Employees:** 45
**Tech stack:** Next.js, Postgres, Vercel
**Recent news:** Hiring VP Engineering (posted 2 weeks ago)

**Insight for outreach:**
- Hiring senior talent (personal brand = recruiting advantage)
- Series A stage (budget available)
- Tech-forward stack (comfortable with AI tools)

**Suggested hook:**
"Noticed Acme is hiring a VP Eng. Personal brand helps attract senior talent without recruiters. Worth a look?"
```

---

## Neural Search (vs Keyword Search)

**Keyword search (Google):**
Query: "LinkedIn tool for founders"
Returns: Pages with exact words "LinkedIn", "tool", "founders"

**Neural search (Exa):**
Query: "LinkedIn tool for founders"
Returns: Pages about founder personal branding, even if they don't use those exact words

**Why it matters:** Exa finds *relevant* content, not just keyword matches.

---

## Exa vs Perplexity

| Use Case | Exa | Perplexity |
|----------|-----|------------|
| Company research | ✅ Best | ⚠️ Okay |
| People search | ✅ Best | ❌ Not designed for this |
| Real-time Q&A | ⚠️ Okay | ✅ Best |
| Deep research reports | ⚠️ Okay | ✅ Best |
| Neural/semantic search | ✅ Best | ⚠️ Keyword-based |

**Recommendation:** Use both. Exa for company/people research, Perplexity for Q&A and deep dives.

---

## Best Practices

1. **Use Exa for prospect research** before cold outreach
2. **Use Exa to find ICP-matching companies** (company_research_exa)
3. **Use neural search for positioning research** (find how competitors talk about themselves)
4. **Combine with Perplexity** for comprehensive research

---

## Next Steps

- [Perplexity MCP](./perplexity.md) — Real-time web research
- [Research Skills](../skills/research.md) — Skills that use Exa
- [Competitive Analysis Skill](../skills/research.md#competitive-analysis) — Deep dive
