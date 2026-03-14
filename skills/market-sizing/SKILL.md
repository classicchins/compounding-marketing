---
name: market-sizing
description: Calculate TAM/SAM/SOM for market opportunity analysis. Uses top-down and bottom-up methods to size addressable market. Triggers - TAM, SAM, SOM, market size, total addressable market, market opportunity, market analysis.
metadata:
  version: 1.0.0
---

# Market Sizing (TAM/SAM/SOM)

Calculate Total Addressable Market, Serviceable Addressable Market, and Serviceable Obtainable Market using rigorous methodologies.

## Process

### Step 1: Define Market Boundaries
- What market are you sizing?
- Geographic scope
- Customer segment scope
- Time horizon

### Step 2: Calculate TAM (Total Addressable Market)

**Top-Down Method:**
- Start with industry reports/analyst data
- Apply filters to narrow to relevant subset

**Bottom-Up Method:**
- [# of potential customers] × [Average deal size]
- More reliable than top-down

**Calculate both, compare:**
TAM Range: $[X]B - $[Y]B

### Step 3: Calculate SAM (Serviceable Addressable Market)
- Filter TAM by ICP criteria
- Who can you realistically serve?
- Geographic, size, tech stack filters

SAM = [X]% of TAM

### Step 4: Calculate SOM (Serviceable Obtainable Market)
- What can you realistically capture?
- Market share assumptions (Year 1-3)
- Based on comparable companies or pilot data

SOM = $[X]M in Year 1-3

### Step 5: Document Assumptions & Sources
| Assumption | Value | Source |
|------------|-------|--------|
| [Assumption] | [Value] | [Link/citation] |

## Output Format

```markdown
# Market Sizing: [Product/Category]

## Market Definition
[What we're sizing]

## TAM (Total Addressable Market)
**Top-Down:** $[X]B — [Methodology]
**Bottom-Up:** $[X]B — [Calculation]
**TAM Range:** $[X]B - $[Y]B

## SAM (Serviceable Addressable Market)
$[X]M — [Filters applied]
[X]% of TAM

## SOM (Serviceable Obtainable Market)
$[X]M (Year 1-3) — [Market share assumption + basis]

## Assumptions
[Table of all assumptions with sources]

## Confidence Level
[High/Medium/Low] — [Justification]
```

## Quality Bar
- Use multiple methods to triangulate
- All assumptions documented with sources
- Honest confidence level
- SOM is realistic, not aspirational

