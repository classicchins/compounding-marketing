# Perplexity MCP Setup

Perplexity's MCP server provides AI-powered web research with real-time search and synthesis.

## Prerequisites

- Node.js 18+
- Perplexity API key

## Get Your API Key

1. Go to [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)
2. Create an API key
3. Note: Requires Perplexity Pro or API credits

## Installation

### Option 1: Auto-install via npx (Recommended)

No installation needed. When you call the MCP, it auto-installs:
```bash
npx -y @perplexity-ai/mcp-server
```

### Option 2: Global install

```bash
npm install -g @perplexity-ai/mcp-server
```

## Configuration

### For Claude Code / Cline

Add to your MCP settings (e.g., `~/.config/cline/mcp_settings.json`):

```json
{
  "mcpServers": {
    "perplexity": {
      "command": "npx",
      "args": ["-y", "@perplexity-ai/mcp-server"],
      "env": {
        "PERPLEXITY_API_KEY": "pplx-xxxxxxxxxxxx"
      }
    }
  }
}
```

### For Cursor

Add to `.cursor/mcp.json`:

```json
{
  "perplexity": {
    "command": "npx",
    "args": ["-y", "@perplexity-ai/mcp-server"],
    "env": {
      "PERPLEXITY_API_KEY": "pplx-xxxxxxxxxxxx"
    }
  }
}
```

### Environment Variable (Alternative)

Set `PERPLEXITY_API_KEY` in your shell:
```bash
export PERPLEXITY_API_KEY="pplx-xxxxxxxxxxxx"
```

## Verify Installation

Ask your AI assistant:
> "Use Perplexity to search for 'SaaS pricing strategies 2025'"

If configured correctly, it will return synthesized results with citations.

## Pricing

- **Perplexity Pro subscribers:** API access included with limits
- **Pay-as-you-go:** ~$5 per 1,000 queries (varies by model)
- **Models:**
  - `sonar` — Fast, cheap
  - `sonar-pro` — Better quality
  - `sonar-reasoning-pro` — Complex analysis
  - `sonar-deep-research` — Comprehensive reports

## Usage in Compounding Marketing

When you run skills like `competitive-analysis` or `market-sizing`, the AI will automatically use Perplexity for research if available.

**Manual usage:**
> "Use perplexity_research to investigate the B2B SaaS CRM market size"

See `tools.md` for full tool reference.
