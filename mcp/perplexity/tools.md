# Perplexity MCP Tools Reference

## Available Tools

### 1. `perplexity_search`
Raw search results with metadata. Returns ranked URLs and snippets.

**Best for:** Quick lookup, getting source URLs

**Parameters:**
- `query` (required): Search query string
- `max_results` (optional): Number of results (default: 5)

**Example:**
```
perplexity_search query="best B2B SaaS onboarding practices" max_results=10
```

**Returns:** List of URLs with titles, snippets, and relevance scores.

---

### 2. `perplexity_ask`
Conversational AI answer with real-time web search. Uses `sonar-pro` model.

**Best for:** Quick factual questions, summaries, "what is X"

**Parameters:**
- `messages` (required): Array of message strings

**Example:**
```
perplexity_ask messages=["What are the top 5 product-led growth strategies for B2B SaaS in 2025?"]
```

**Returns:** Synthesized answer with inline citations.

---

### 3. `perplexity_reason`
Advanced reasoning with `sonar-reasoning-pro` model. For complex analysis.

**Best for:** Comparisons, multi-step analysis, "why/how" questions

**Parameters:**
- `messages` (required): Array of message strings

**Example:**
```
perplexity_reason messages=["Compare freemium vs. free trial models for B2B SaaS. Which has higher conversion rates and why?"]
```

**Returns:** Detailed analysis with reasoning steps and citations.

---

### 4. `perplexity_research`
Deep comprehensive research with `sonar-deep-research` model. Takes longer but produces thorough reports.

**Best for:** Market research, competitive analysis, full topic briefs

**Parameters:**
- `messages` (required): Array of message strings

**Example:**
```
perplexity_research messages=["Research the AI writing assistant market: size, key players, pricing models, trends, and opportunities for new entrants."]
```

**Returns:** Comprehensive research report with multiple sections and extensive citations.

---

## When to Use Which

| Scenario | Tool | Why |
|----------|------|-----|
| "What's the market size for X?" | `perplexity_ask` | Quick factual lookup |
| "Get me 10 sources about X" | `perplexity_search` | Need raw URLs |
| "Compare A vs B for [use case]" | `perplexity_reason` | Needs comparison logic |
| "Full competitive landscape of X" | `perplexity_research` | Deep, comprehensive |
| "Latest news on X" | `perplexity_ask` | Quick, recent info |
| "Why do SaaS companies do X?" | `perplexity_reason` | Needs explanation |

---

## Usage in Skills

### competitive-analysis
```
1. Use perplexity_research for comprehensive competitor overview
2. Use perplexity_ask for specific questions about individual competitors
3. Use perplexity_search to find review sites and comparison pages
```

### market-sizing
```
1. Use perplexity_research for industry reports and TAM data
2. Use perplexity_ask for specific market statistics
3. Cross-reference multiple sources for accuracy
```

### icp-research
```
1. Use perplexity_ask for firmographic patterns in industry
2. Use perplexity_reason for psychographic analysis
3. Use perplexity_research for comprehensive ICP development
```

---

## Tips

1. **Be specific:** "SaaS pricing strategies for B2B developer tools 2025" > "pricing strategies"
2. **Request structure:** "List the top 5..." or "Compare X and Y across these dimensions..."
3. **Use research for depth:** When you need comprehensive reports, use `perplexity_research` even though it's slower
4. **Chain queries:** Use `perplexity_ask` for quick follow-ups after a deep research call

---

## Rate Limits

- ~100 queries per minute (varies by plan)
- `perplexity_research` counts as multiple queries
- If rate limited, wait 60 seconds

---

## Cost Optimization

- Use `perplexity_search` for simple lookups (cheapest)
- Use `perplexity_ask` for most questions (balanced)
- Reserve `perplexity_research` for comprehensive needs (most expensive)
