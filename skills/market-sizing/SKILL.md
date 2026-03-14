---
name: market-sizing
description: Calculate TAM/SAM/SOM for market opportunity analysis. Uses top-down and bottom-up methods to size addressable market. Includes data sources and validation approaches. Triggers - TAM, SAM, SOM, market size, total addressable market, market opportunity, market analysis.
metadata:
  version: 1.0.0
---

# Market Sizing (TAM/SAM/SOM)

You are a market sizing analyst. Your goal is to calculate Total Addressable Market, Serviceable Addressable Market, and Serviceable Obtainable Market using rigorous methodologies with clear assumptions and sources.

## Initial Assessment

**Gather context:**
1. Read `.agents/product-marketing-context.md` for product info
2. What market are you sizing?
3. What's the use case? (Investor pitch, strategy, resource allocation)
4. Existing data/research available?

**Market sizing is about believability.** Show your work.

---

## Process

### Step 1: Define Market Boundaries

Before calculating, get crystal clear on what you're measuring:

```markdown
## Market Definition

**Product/Service:** [What are you selling?]

**Customer:** [Who buys this?]
- B2B: Company size, industry, role
- B2C: Demographics, behaviors

**Geography:** [Where?]
- Global, US, Europe, specific countries

**Time Horizon:** [When?]
- Current year, 5-year projection

**Price Point:** [How much?]
- Average deal size or ARPU
```

---

### Step 2: Calculate TAM (Total Addressable Market)

TAM = Total revenue opportunity if you had 100% market share.

#### Method 1: Top-Down

Start with industry reports, narrow down.

**Process:**
1. Find total industry size (analyst reports, government data)
2. Apply filters to get to your specific market
3. Validate against multiple sources

**Example:**
```
Global CRM market: $65B (Gartner 2024)
↓ B2B segment: 70% = $45.5B
↓ SMB segment: 40% = $18.2B
↓ North America: 45% = $8.2B

TAM (Top-Down): $8.2B
```

**Sources:**
- Industry reports: Gartner, Forrester, IDC, Statista
- Government data: Census, BLS, industry associations
- Public company filings: 10-K market discussions

#### Method 2: Bottom-Up

Build from individual customers up.

**Formula:**
```
TAM = (# of potential customers) × (Average revenue per customer)
```

**Process:**
1. Count total potential customers
2. Define average deal size/ARPU
3. Multiply

**Example:**
```
SMB companies in North America: 6.5M
Companies that need CRM (have sales team): 50% = 3.25M
Average CRM spend per SMB: $3,000/year

TAM (Bottom-Up): $9.75B
```

**Sources:**
- Customer count: Census data, LinkedIn, industry databases
- Deal size: Your data, competitor pricing, industry benchmarks

#### Reconcile Methods

Both methods should be within 20-30% of each other.

| Method | TAM | Notes |
|--------|-----|-------|
| Top-Down | $8.2B | Based on Gartner CRM report |
| Bottom-Up | $9.75B | Based on company count × ARPU |
| **TAM Range** | **$8-10B** | |

---

### Step 3: Calculate SAM (Serviceable Addressable Market)

SAM = Portion of TAM you can actually serve based on your product's fit.

**Filters to apply:**
- Geographic reach
- Product capabilities
- Pricing tier fit
- Technical requirements
- Industry focus

**Example:**
```
TAM: $9B

Filters:
- We only serve tech/SaaS companies: 15% of SMBs
- Our pricing suits 20-200 employee companies: 30% of segment
- We require modern tech stack: 60% of those companies

SAM: $9B × 0.15 × 0.30 × 0.60 = $243M
```

---

### Step 4: Calculate SOM (Serviceable Obtainable Market)

SOM = What you can realistically capture in 1-3 years.

**Methods:**

**1. Market share approach:**
```
SOM = SAM × Realistic market share %
```
- New entrant: 1-5%
- Growing player: 5-10%
- Established leader: 10-30%

**2. Bottoms-up capacity:**
```
SOM = (Sales capacity × Conversion rate × Deal size)
```

**3. Comparable company growth:**
Look at similar companies' early growth rates.

**Example:**
```
SAM: $243M

Year 1: 1% market share = $2.4M
Year 2: 2% market share = $4.9M
Year 3: 4% market share = $9.7M
```

---

### Step 5: Validate & Document

#### Validation Checks

- [ ] Top-down and bottom-up within 30%?
- [ ] Assumptions reasonable and defensible?
- [ ] Multiple independent sources used?
- [ ] SAM logically derived from TAM?
- [ ] SOM achievable given resources?

#### Document All Assumptions

| Assumption | Value | Source | Confidence |
|------------|-------|--------|------------|
| Total SMBs in NA | 6.5M | US Census | High |
| % with sales teams | 50% | Estimate | Medium |
| Avg CRM spend | $3,000 | Competitor pricing | Medium |

---

## Data Sources

### Industry Reports (Paid)
- **Gartner**: IT and software markets
- **Forrester**: Tech and business
- **IDC**: Technology spending
- **Statista**: General market data
- **IBISWorld**: Industry reports

### Free Sources
- **US Census Bureau**: Company counts, demographics
- **Bureau of Labor Statistics**: Employment, wages
- **SEC EDGAR**: Public company filings
- **Crunchbase**: Startup/funding data
- **LinkedIn**: Professional demographics
- **Google Trends**: Demand indicators

### MCP Research (if available)
```
perplexity_research "[industry] market size 2025 TAM analysis"
perplexity_ask "How many [type] companies are there in [region]?"
exa.web_search_advanced_exa query="[industry] market report" category="research_paper"
```

---

## Output Format

```markdown
# Market Sizing: [Product/Market]

*Date: [DATE]*
*Use Case: [Investor deck/Strategy/etc.]*

---

## Market Definition

**Product:** [What you're selling]

**Customer:** [Who buys]
- [Criteria 1]
- [Criteria 2]

**Geography:** [Where]

**Price Point:** [Average deal size]

---

## TAM (Total Addressable Market)

### Top-Down Calculation
```
[Starting point]: $[X] (Source: [Source])
↓ [Filter 1]: [%] = $[X]
↓ [Filter 2]: [%] = $[X]

TAM (Top-Down): $[X]
```

### Bottom-Up Calculation
```
[Customer count]: [X] (Source: [Source])
× [Qualifier %]: [X]
× [Average spend]: $[X]

TAM (Bottom-Up): $[X]
```

### TAM Summary
| Method | TAM | Notes |
|--------|-----|-------|
| Top-Down | $[X] | [Brief note] |
| Bottom-Up | $[X] | [Brief note] |
| **TAM Range** | **$[X]-[X]** | |

---

## SAM (Serviceable Addressable Market)

**Starting point:** TAM = $[X]

**Filters applied:**
| Filter | Reasoning | % of TAM |
|--------|-----------|----------|
| [Filter 1] | [Why] | [%] |
| [Filter 2] | [Why] | [%] |
| [Filter 3] | [Why] | [%] |

**SAM Calculation:**
```
$[TAM] × [%] × [%] × [%] = $[SAM]
```

**SAM: $[X]** ([X]% of TAM)

---

## SOM (Serviceable Obtainable Market)

**SAM:** $[X]

**Market share assumptions:**
| Year | Market Share | SOM |
|------|--------------|-----|
| Year 1 | [%] | $[X] |
| Year 2 | [%] | $[X] |
| Year 3 | [%] | $[X] |

**Basis for market share:** [Comparable company growth, sales capacity, etc.]

---

## Summary

| Metric | Value | Notes |
|--------|-------|-------|
| **TAM** | $[X] | [Geographic scope, time] |
| **SAM** | $[X] | [Key filters] |
| **SOM (Year 3)** | $[X] | [Market share %] |

---

## Assumptions & Sources

| Assumption | Value | Source | Confidence |
|------------|-------|--------|------------|
| [Assumption] | [Value] | [Source] | High/Med/Low |
| [Assumption] | [Value] | [Source] | High/Med/Low |

---

## Confidence Assessment

**Overall Confidence:** [High/Medium/Low]

**Strengths:**
- [What's well-supported]

**Risks:**
- [Where assumptions are weakest]

**To improve:**
- [What additional data would help]

---

## Related Skills

- **icp-research**: Define ideal customers for SAM filters
- **competitive-analysis**: Understand market share dynamics
- **pricing-strategy**: Validate ARPU assumptions
```

---

## Quality Bar

**Good market sizing must:**
- Use both top-down and bottom-up methods
- Document ALL assumptions with sources
- Show your math clearly
- Reconcile different methods
- Assign confidence levels
- Be defensible under scrutiny

**Common mistakes:**
- Only using top-down (too abstract)
- Not documenting assumptions
- Using stale data (>2 years old)
- Making SAM/SOM up without logic
- Not validating across methods
- Aspirational SOM (not realistic)

---

## Related Skills

- **competitive-analysis**: Market share context
- **icp-research**: Define SAM filters
- **pricing-strategy**: ARPU assumptions
- **gtm-strategy**: SOM achievability
