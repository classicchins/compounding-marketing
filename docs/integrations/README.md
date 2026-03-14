# Integrations Overview

MCP servers and external tool integrations that supercharge Compounding Marketing skills.

## Why Integrations Matter

Skills are powerful on their own. Integrations make them unstoppable.

**Example without integration:**
```
Use the icp-research skill
```
Output: ICP based on your existing knowledge

**Example with Perplexity MCP:**
```
Use the icp-research skill
```
Output: ICP enriched with real-time web research on your market, competitors, and customer segments

---

## Available Integrations

### MCP Servers (Model Context Protocol)

| Integration | What It Does | Which Skills Benefit | Setup Time |
|-------------|--------------|---------------------|------------|
| [Perplexity](./perplexity.md) | Real-time web research | Research, competitive, SEO | 5 min |
| [Exa](./exa.md) | Neural search + company intel | Competitive, ICP, positioning | 5 min |

### Optional External Tools

| Integration | What It Does | Setup Guide |
|-------------|--------------|-------------|
| Linear | Task tracking for marketing work | `integrations/linear.md` |
| Google Analytics 4 | Pull metrics into skills | `integrations/ga4.md` |
| HubSpot | CRM data for ICP research | `integrations/hubspot.md` |

---

## Recommended Setup

**Minimum viable setup (free):**
- Perplexity MCP (free API tier available)

**Recommended setup ($20/mo):**
- Perplexity MCP ($20/mo for Pro API)
- Exa MCP ($20/mo)

**Full setup ($50+/mo):**
- Perplexity + Exa
- GA4 integration (free, setup time only)
- Linear integration (if using Linear for project management)

---

## How Integrations Work

When a skill runs, it checks if integrations are available:

**Example (`competitive-analysis` skill):**

1. Skill starts
2. Checks: "Is Exa MCP configured?"
3. If yes: Uses Exa to find real-time competitor data
4. If no: Asks you to provide competitor info manually
5. Continues with analysis

**Result:** Skills work without integrations, but integrations make them 10x faster and more accurate.

---

## Integration Priority by Use Case

### For Research-Heavy Work
**Priority 1:** Perplexity (real-time research)
**Priority 2:** Exa (company intelligence)

### For SEO-Focused Work
**Priority 1:** Perplexity (keyword + content research)
**Priority 2:** Google Search Console integration

### For Sales-Led GTM
**Priority 1:** HubSpot (CRM data)
**Priority 2:** Exa (company + people search)

---

## Next Steps

- [Perplexity MCP Setup](./perplexity.md) — Real-time web research
- [Exa MCP Setup](./exa.md) — Neural search and company intelligence
