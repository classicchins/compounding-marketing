# SEO Skills Deep Dive

Search engine and AI search optimization skills.

## Overview

| Skill | Purpose | Output | Time |
|-------|---------|--------|------|
| **seo-audit** | Technical + on-page SEO audit | Prioritized fix list | 1-2h |
| **ai-seo** | Optimize for AI search (ChatGPT, Perplexity) | AI-optimized structure | 1h |
| **programmatic-seo** | Scaled SEO page generation | Template + data strategy | 2h |
| **site-architecture** | URL structure + IA | Site map + URL guidelines | 1-2h |
| **schema-markup** | Structured data | JSON-LD code | 30min |
| **competitor-alternatives** | Comparison pages | "vs" page copy | 1h |

---

## `seo-audit` — Technical & On-Page Audit

**When to use:** After site launch, quarterly review

### What It Checks

**Technical SEO:**
- Page speed (Core Web Vitals)
- Mobile responsiveness
- HTTPS + security
- XML sitemap + robots.txt
- Broken links + redirects

**On-Page SEO:**
- Title tags + meta descriptions
- H1/H2 hierarchy
- Image alt text
- Internal linking
- Content quality + length

### Example Output

```markdown
# SEO Audit: AuthorityMax

## Critical Issues (Fix First)

| Issue | Impact | Fix | Effort |
|-------|--------|-----|--------|
| No meta descriptions | Low CTR from search | Write unique meta for top 10 pages | 2h |
| Slow mobile load (4.2s) | Rankings + UX | Compress images, enable caching | 4h |
| Missing schema markup | Less rich snippets | Add SoftwareApplication schema | 1h |

## Quick Wins (High ROI)

- Add FAQ schema to pricing page → Featured snippet potential
- Fix broken internal links (12 found) → Better crawlability
- Update title tags with target keywords → +10-15% CTR

## Long-Term Improvements

- Build backlinks (currently 23 referring domains)
- Create pillar content for "LinkedIn personal branding"
- Fix thin content on 8 pages (under 300 words)
```

---

## `ai-seo` — AI Search Optimization

**When to use:** Optimizing for ChatGPT, Perplexity, Google AI Overviews

### What Makes Content AI-Friendly

1. **Clear structure** — H2s answer specific questions
2. **Concise definitions** — First paragraph = summary
3. **Authoritative tone** — Cite sources, avoid hedging
4. **Entity mentions** — Name people, companies, tools explicitly

### Example

**Before (Generic SEO):**
"When it comes to LinkedIn marketing, there are many strategies founders can use..."

**After (AI-Optimized):**
"LinkedIn personal branding for SaaS founders has three core strategies: consistent posting (3-5x/week), authentic voice, and engagement-focused content. April Dunford's positioning framework helps founders differentiate."

**Why better for AI:**
- Specific entity mentions (April Dunford, SaaS founders)
- Clear structure (three strategies named)
- Actionable detail (3-5x/week frequency)

---

## `programmatic-seo` — Scaled Page Generation

**When to use:** Creating 100s-1000s of SEO pages from templates

### Use Cases

- Location pages ("CRM for dentists in Austin")
- Comparison pages ("Acme vs Competitor X")
- Directory pages (tools, integrations, templates)

### Example Strategy (AuthorityMax)

**Template:** "LinkedIn Personal Branding for [Industry] Founders"

**Data source:** List of 50 industries (SaaS, FinTech, HealthTech...)

**URL pattern:** `/personal-branding-for-[industry]-founders`

**Generated pages:**
- `/personal-branding-for-saas-founders`
- `/personal-branding-for-fintech-founders`
- `/personal-branding-for-healthtech-founders`

**Content structure:**
```markdown
# LinkedIn Personal Branding for [Industry] Founders

[Industry] founders face unique challenges when building personal brands on LinkedIn:

- [Industry-specific pain 1]
- [Industry-specific pain 2]

Here's how to build thought leadership in [industry]...

[Template body with [industry] variables injected]
```

---

## `schema-markup` — Structured Data

**When to use:** Homepage, pricing, product pages

### Example (AuthorityMax SoftwareApplication Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AuthorityMax",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "49.00",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "89"
  },
  "description": "AI-powered personal branding platform for LinkedIn"
}
```

**Result:** Rich snippets in Google (rating stars, price, app type)

---

## `competitor-alternatives` — Comparison Pages

**When to use:** Capturing comparison search traffic

### Example (AuthorityMax vs Taplio)

```markdown
# AuthorityMax vs Taplio: Which LinkedIn Tool is Right for You?

## Quick Comparison

| Feature | AuthorityMax | Taplio |
|---------|--------------|--------|
| **Best for** | SaaS founders | Content creators |
| **Voice training** | ✅ Yes | ❌ No |
| **Engagement prediction** | ✅ Yes | ✅ Yes |
| **Scheduling** | ✅ Yes | ✅ Yes |
| **Price** | $49/mo | $39-$199/mo |

## When to Choose AuthorityMax

- You're a B2B SaaS founder (not a creator/coach)
- Voice authenticity matters (you don't want templated content)
- You need content generation, not just scheduling

## When to Choose Taplio

- You post high volume (10+ times/week)
- You run a LinkedIn agency
- You prioritize analytics over content quality

## Verdict

AuthorityMax is built for founders who value authentic voice. Taplio is built for volume content creators.
```

---

## SEO Skills: Quick Reference

| Task | Skill | Frequency |
|------|-------|-----------|
| Audit site SEO | seo-audit | Quarterly |
| Optimize for AI search | ai-seo | When writing new content |
| Build programmatic pages | programmatic-seo | Once (then maintain) |
| Design URL structure | site-architecture | Once (during site build) |
| Add schema markup | schema-markup | Once per page type |
| Create comparison pages | competitor-alternatives | Ongoing (as competitors emerge) |

---

## Next Steps

- [Content & Copy Skills](./content-copy.md) — Write SEO-optimized content
- [CRO Skills](./cro.md) — Convert SEO traffic
