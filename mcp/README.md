# MCP Integrations

**Model Context Protocol (MCP)** servers extend your AI assistant with specialized tools for research, web search, and data retrieval.

Compounding Marketing includes pre-configured integrations for two powerful research MCPs:

| MCP | Best For | Key Capabilities |
|-----|----------|------------------|
| **Perplexity** | Research, Q&A, analysis | AI-synthesized answers, real-time web search, deep research |
| **Exa** | Company research, neural search | Company profiles, people search, code search, semantic results |

---

## Quick Setup

### 1. Get API Keys

| Service | Where to Get Key | Pricing |
|---------|------------------|---------|
| Perplexity | [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api) | Pay-per-query (~$5/1000 queries) |
| Exa | [dashboard.exa.ai](https://dashboard.exa.ai) | Free tier + pay-per-query |

### 2. Configure in Your Project

**Option A: Run the setup wizard**
```bash
npx compounding-marketing
# Follow prompts to configure MCPs
```

**Option B: Manual configuration**

Create `.cm-config.json` in your project root:
```json
{
  "mcp": {
    "perplexity": {
      "enabled": true,
      "apiKey": "pplx-xxxxxxxxxxxx"
    },
    "exa": {
      "enabled": true,
      "apiKey": "exa-xxxxxxxxxxxx"
    }
  }
}
```

### 3. Use in Claude Code / Cursor

Add to your MCP configuration (e.g., `cline_mcp_settings.json` or equivalent):

**Perplexity:**
```json
{
  "perplexity": {
    "command": "npx",
    "args": ["-y", "@anthropic-ai/mcp-server-perplexity"],
    "env": {
      "PERPLEXITY_API_KEY": "pplx-xxxxxxxxxxxx"
    }
  }
}
```

**Exa:**
```json
{
  "exa": {
    "command": "npx",
    "args": ["-y", "@anthropic-ai/mcp-server-exa"],
    "env": {
      "EXA_API_KEY": "exa-xxxxxxxxxxxx"
    }
  }
}
```

---

## When to Use Which

| Use Case | Recommended MCP | Why |
|----------|-----------------|-----|
| Quick fact lookup, "what is X" | Perplexity Ask | Fast, synthesized answer |
| Complex analysis, comparisons | Perplexity Reason | Reasoning model |
| Full market research report | Perplexity Research | Deep research mode |
| Company/prospect profile | Exa Company Research | Structured company data |
| Find specific people/executives | Exa People Search | Profile discovery |
| Neural/semantic web search | Exa Web Search | Better than keyword search |
| Read a specific URL | Exa Crawling | Full page content |
| Code examples, docs lookup | Exa Code Context | GitHub/Stack Overflow search |

---

## Skills That Use MCPs

These skills are enhanced when MCPs are available:

| Skill | Perplexity | Exa | Usage |
|-------|:----------:|:---:|-------|
| competitive-analysis | ✓ | ✓ | Market research + company profiles |
| market-sizing | ✓ | | Industry data, TAM calculations |
| icp-research | ✓ | ✓ | Firmographic research, customer patterns |
| customer-research | ✓ | | Industry trends, JTBD patterns |
| seo-audit | | ✓ | Competitor backlink research |
| press-pr | ✓ | ✓ | Journalist discovery, outlet research |
| product-hunt-launch | ✓ | | PH best practices research |

**Without MCPs:** Skills still work — you'll manually provide research or use built-in web search.

**With MCPs:** Skills automatically leverage MCP tools for faster, deeper research.

---

## Directory Contents

```
mcp/
├── README.md           # This file
├── perplexity/
│   ├── config.json     # MCP server config template
│   ├── setup.md        # Detailed setup instructions
│   └── tools.md        # Tool reference and examples
└── exa/
    ├── config.json     # MCP server config template
    ├── setup.md        # Detailed setup instructions
    └── tools.md        # Tool reference and examples
```

---

## Troubleshooting

### "MCP not found" errors
- Ensure you've installed the MCP server: `npm install -g @anthropic-ai/mcp-server-perplexity`
- Or use `npx -y` to auto-install on first run

### "Invalid API key" errors
- Double-check key format (Perplexity: `pplx-xxx`, Exa: varies)
- Ensure key is set in environment or config file

### Rate limits
- Perplexity: ~100 queries/minute
- Exa: Varies by plan, check dashboard

---

## Security Note

Never commit API keys to version control. Use:
- Environment variables
- `.cm-config.json` (add to `.gitignore`)
- Your IDE's secrets management
