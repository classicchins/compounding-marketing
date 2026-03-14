# Exa MCP Tools Reference

## Available Tools

### 1. `web_search_exa`
Neural web search. General purpose, semantic matching.

**Best for:** Finding relevant content by concept, not keywords

**Parameters:**
- `query` (required): Search query
- `numResults` (optional): Number of results (default: 10)

**Example:**
```
web_search_exa query="B2B SaaS companies with great onboarding" numResults=5
```

---

### 2. `web_search_advanced_exa`
Advanced search with filters: date range, domain include/exclude, category.

**Best for:** Filtered research (recent news, specific sites, content types)

**Parameters:**
- `query` (required): Search query
- `numResults` (optional): Number of results
- `category` (optional): `news` | `research_paper` | `github` | `tweet` | `people`
- `startPublishedDate` (optional): YYYY-MM-DD
- `endPublishedDate` (optional): YYYY-MM-DD
- `includeDomains` (optional): Array of domains to include
- `excludeDomains` (optional): Array of domains to exclude
- `livecrawl` (optional): Force fresh crawl (slower)

**Example:**
```
web_search_advanced_exa query="SaaS pricing changes" category="news" startPublishedDate="2025-01-01" numResults=10
```

---

### 3. `company_research_exa`
Deep company profile: employees, tech stack, LinkedIn data, funding, recent updates.

**Best for:** Prospect research, competitive analysis, company deep dives

**Parameters:**
- `companyName` (required): Company name or domain

**Example:**
```
company_research_exa companyName="Notion"
```

**Returns:** Structured data including:
- Company overview
- Employee count and key people
- Tech stack
- Recent news/updates
- Funding info
- LinkedIn data

---

### 4. `people_search_exa`
Find professionals, executives, founders by role/criteria.

**Best for:** Finding decision-makers, building prospect lists

**Parameters:**
- `query` (required): Description of person to find

**Example:**
```
people_search_exa query="VP of Marketing at B2B SaaS startups in San Francisco"
```

---

### 5. `crawling_exa`
Get full content of a specific URL.

**Best for:** Reading a page you already have the link to

**Parameters:**
- `url` (required): URL to crawl

**Example:**
```
crawling_exa url="https://example.com/pricing"
```

---

### 6. `deep_researcher_start`
Kicks off an AI research agent. Returns a research ID to poll.

**Best for:** Comprehensive research that takes 15s–3min

**Parameters:**
- `instructions` (required): What to research
- `model` (optional): `exa-research-fast` (~15s) | `exa-research` (~45s) | `exa-research-pro` (~3min)

**Example:**
```
deep_researcher_start instructions="Research the AI writing assistant market: key players, pricing, features, and market trends" model="exa-research"
```

**Returns:** `{ researchId: "xxx" }`

---

### 7. `deep_researcher_check`
Poll for results from `deep_researcher_start`.

**Parameters:**
- `researchId` (required): ID from deep_researcher_start

**Example:**
```
deep_researcher_check researchId="abc123"
```

**Returns:** Research report when complete, or status if still running.

---

### 8. `get_code_context_exa`
Search for code examples across GitHub, Stack Overflow, docs.

**Best for:** Finding implementation examples, API usage, library patterns

**Parameters:**
- `query` (required): Code-related query

**Example:**
```
get_code_context_exa query="Stripe subscription webhook handling Node.js"
```

---

## When to Use Which

| Scenario | Tool | Why |
|----------|------|-----|
| Find content about a topic | `web_search_exa` | Semantic matching |
| Recent news on a company | `web_search_advanced_exa` | Date + category filters |
| Prospect research | `company_research_exa` | Structured company data |
| Find marketing leaders | `people_search_exa` | People discovery |
| Read a specific page | `crawling_exa` | URL content extraction |
| Comprehensive market research | `deep_researcher_start/check` | AI-powered deep dive |
| Find code examples | `get_code_context_exa` | Code-specific search |

---

## Usage in Skills

### competitive-analysis
```
1. Use company_research_exa for each competitor
2. Use web_search_advanced_exa category="news" for recent updates
3. Use crawling_exa to read competitor pricing pages
```

### icp-research
```
1. Use people_search_exa to find example customers
2. Use company_research_exa to profile best-fit companies
3. Use web_search_exa to find industry reports
```

### seo-audit
```
1. Use web_search_exa to find competitors ranking for target keywords
2. Use crawling_exa to analyze competitor content
```

### press-pr
```
1. Use people_search_exa to find journalists covering your space
2. Use web_search_advanced_exa category="news" to find relevant publications
```

---

## Deep Researcher Models

| Model | Speed | Depth | Best For |
|-------|-------|-------|----------|
| `exa-research-fast` | ~15 sec | Quick summary | Fast lookups |
| `exa-research` | ~45 sec | Balanced | Most research |
| `exa-research-pro` | ~3 min | Comprehensive | Deep analysis |

---

## Tips

1. **Semantic queries:** Describe what you're looking for conceptually, not just keywords
2. **Use filters:** `web_search_advanced_exa` with date/category filters is powerful
3. **Company research first:** For competitive analysis, start with `company_research_exa`
4. **Deep research async:** `deep_researcher_start` returns immediately; poll with `_check`

---

## Rate Limits

- Varies by plan
- Free tier: ~100 queries/month
- Pro: 10,000 queries/month
- Check dashboard for current usage
