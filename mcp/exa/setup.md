# Exa MCP Setup

Exa provides neural/semantic web search and specialized research tools. Unlike keyword search, Exa finds conceptually relevant results.

## Prerequisites

- Node.js 18+
- Exa API key

## Get Your API Key

1. Go to [dashboard.exa.ai](https://dashboard.exa.ai)
2. Sign up or log in
3. Copy your API key from the dashboard

## Installation

### Option 1: Auto-install via npx (Recommended)

No installation needed:
```bash
npx -y @anthropic-ai/mcp-server-exa
```

### Option 2: Global install

```bash
npm install -g @anthropic-ai/mcp-server-exa
```

## Configuration

### For Claude Code / Cline

Add to your MCP settings:

```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-exa"],
      "env": {
        "EXA_API_KEY": "your-exa-api-key"
      }
    }
  }
}
```

### For Cursor

Add to `.cursor/mcp.json`:

```json
{
  "exa": {
    "command": "npx",
    "args": ["-y", "@anthropic-ai/mcp-server-exa"],
    "env": {
      "EXA_API_KEY": "your-exa-api-key"
    }
  }
}
```

### Environment Variable (Alternative)

```bash
export EXA_API_KEY="your-exa-api-key"
```

## Verify Installation

Ask your AI assistant:
> "Use Exa to search for 'best SaaS landing pages'"

If configured correctly, it will return semantically relevant results.

## Pricing

- **Free tier:** Limited queries per month
- **Pro:** $99/month for 10,000 queries
- **Scale:** Custom pricing

Check [exa.ai/pricing](https://exa.ai/pricing) for current plans.

## Key Differences from Traditional Search

| Aspect | Google/Bing | Exa |
|--------|-------------|-----|
| Method | Keyword matching | Neural/semantic |
| Results | Popularity-based | Relevance-based |
| Use case | Finding popular pages | Finding the *right* pages |

**Example:** Searching "SaaS onboarding best practices" on Exa will find conceptually relevant guides even if they don't use those exact words.

## Usage in Compounding Marketing

Skills like `competitive-analysis` and `icp-research` will automatically use Exa for:
- Company profile lookups
- People/executive discovery
- Semantic content search
- Competitor website analysis

See `tools.md` for full tool reference.
