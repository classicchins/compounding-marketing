# Perplexity MCP Integration

Real-time web research inside Compounding Marketing skills.

## What It Does

Perplexity MCP gives skills access to:
- Real-time web search (sonar-pro)
- Advanced reasoning (sonar-reasoning-pro)
- Deep research (sonar-deep-research)

**Which skills benefit:**
- `icp-research` — Find real customer pain points from forums, reviews
- `competitive-analysis` — Real-time competitor research
- `market-sizing` — Pull market data from recent reports
- `seo-research` — Keyword research + SERP analysis
- `press-pr` — Find journalists covering your space

---

## Installation

### Claude Code

```bash
claude mcp add perplexity -- npx -y @perplexity-ai/mcp-server
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "perplexity": {
      "command": "npx",
      "args": ["-y", "@perplexity-ai/mcp-server"],
      "env": {
        "PERPLEXITY_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

Restart Claude Desktop.

---

## Get API Key

1. Go to [perplexity.ai/settings/api](https://perplexity.ai/settings/api)
2. Create API key
3. Copy key
4. Add to config (see above)

**Pricing:**
- Free tier: 5 searches/day (good for testing)
- Pro: $20/mo for 300 searches/day (recommended)

---

## Example: ICP Research with Perplexity

**Without Perplexity:**
```
Use icp-research skill for AuthorityMax
```
Output: ICP based on your existing knowledge

**With Perplexity:**
```
Use icp-research skill for AuthorityMax
```

Behind the scenes:
1. Skill calls Perplexity: "What are common pain points for SaaS founders posting on LinkedIn?"
2. Perplexity searches Reddit, forums, reviews
3. Skill incorporates findings: "Most founders cite time (30-60 min/post) and quality concerns (AI sounds robotic)"
4. ICP is enriched with real customer language

---

## Example: Competitive Analysis with Perplexity

**Prompt:**
```
Use competitive-analysis skill. Competitors: Taplio, Scriptly
```

**Perplexity queries (automatic):**
- "Taplio pricing and features 2026"
- "Scriptly LinkedIn ghostwriting service review"
- "LinkedIn personal branding tools comparison"

**Output:**
Real-time competitive landscape with:
- Latest pricing (not outdated)
- Recent feature launches
- Customer reviews (what they love/hate)

---

## Example: `/cm:research` with Perplexity

**Without Perplexity:** 2-4 hours (manual research)

**With Perplexity:** 1-2 hours (automated web research)

**What gets automated:**
- Market size lookups
- Competitor feature comparisons
- Customer pain point extraction from reviews
- Industry trend identification

---

## Performance Comparison

| Task | Without Perplexity | With Perplexity |
|------|-------------------|-----------------|
| Find 5 competitors | 15 min (manual Google search) | 2 min (automated) |
| Extract customer pain points | 30 min (read 20+ reviews) | 3 min (synthesized from 100+ sources) |
| Market sizing | 20 min (find reports, extract data) | 5 min (auto-find + cite sources) |

**Time saved:** ~40% on research-heavy skills

---

## Best Practices

1. **Use `perplexity_research` for deep dives** (e.g., competitive analysis)
2. **Use `perplexity_ask` for quick facts** (e.g., "What's Taplio's current pricing?")
3. **Let skills call Perplexity automatically** — they know when to use it
4. **Check citations** — Perplexity includes sources, verify if critical

---

## Troubleshooting

**"Perplexity API key not found"**
- Check config file has correct env variable
- Restart Claude Desktop after adding key

**"Rate limit exceeded"**
- Free tier: 5 searches/day
- Upgrade to Pro: $20/mo for 300/day

**"Search returned no results"**
- Query might be too niche
- Try broader search or manual research

---

## Next Steps

- [Exa MCP](./exa.md) — Company intelligence + neural search
- [Research Skills](../skills/research.md) — Skills that benefit from Perplexity
