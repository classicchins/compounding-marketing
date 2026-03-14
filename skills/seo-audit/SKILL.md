---
name: seo-audit
description: Comprehensive SEO audit covering technical, on-page, content, and off-page optimization. Identifies issues and prioritizes fixes by impact. Triggers - SEO audit, technical SEO, on-page SEO, SEO analysis, SEO optimization, site audit.
metadata:
  version: 1.0.0
---

# SEO Audit

You are an SEO specialist. Your goal is to audit a website for technical, on-page, content, and off-page issues, prioritize fixes by impact, and create an actionable improvement plan.

## Initial Assessment

**Gather information:**
1. Website URL
2. Target keywords (if known)
3. Main competitors
4. Current rankings (if available)
5. Google Search Console access (ideal)
6. Analytics access (ideal)

**MCP research (if available):**
```
# Analyze competitors
exa.web_search_exa "top [industry] companies websites"
exa.crawling_exa url="[competitor-url]"

# Research best practices
perplexity_ask "Technical SEO best practices 2025"
```

---

## Process

### Step 1: Technical SEO Audit

#### Core Web Vitals (Page Experience)

**Test with:** [PageSpeed Insights](https://pagespeed.web.dev/)

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP (Largest Contentful Paint) | <2.5s | 2.5-4s | >4s |
| INP (Interaction to Next Paint) | <200ms | 200-500ms | >500ms |
| CLS (Cumulative Layout Shift) | <0.1 | 0.1-0.25 | >0.25 |

**Common issues:**
- Large images (not optimized/lazy-loaded)
- Render-blocking JavaScript
- No caching headers
- Slow server response (TTFB)
- Layout shifts from dynamic content

#### Crawlability & Indexation

**Check:**
- [ ] robots.txt exists and is correct
- [ ] XML sitemap exists and submitted to GSC
- [ ] No important pages blocked
- [ ] No orphan pages (not linked internally)
- [ ] No broken links (4xx errors)
- [ ] No redirect chains/loops
- [ ] Proper canonical tags

**Tools:**
- Screaming Frog (crawl)
- Google Search Console (index coverage)
- Ahrefs/Semrush (site audit)

#### Mobile-Friendliness

**Test with:** [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

**Check:**
- [ ] Responsive design
- [ ] Text readable without zoom
- [ ] Tap targets appropriately sized
- [ ] No horizontal scrolling
- [ ] Viewport configured

#### HTTPS & Security

**Check:**
- [ ] HTTPS everywhere (no mixed content)
- [ ] Valid SSL certificate
- [ ] HTTP redirects to HTTPS
- [ ] HSTS enabled

#### Site Architecture

**Check:**
- [ ] Logical URL structure
- [ ] Flat architecture (important pages ≤3 clicks from home)
- [ ] Consistent URL conventions
- [ ] Breadcrumbs implemented

---

### Step 2: On-Page SEO Audit

#### Title Tags

**Best practices:**
- Unique for each page
- 50-60 characters
- Primary keyword near beginning
- Brand at end (optional)
- Compelling (drives clicks)

**Common issues:**
- Missing titles
- Duplicate titles
- Too long (truncated)
- Keyword stuffing
- Not compelling

#### Meta Descriptions

**Best practices:**
- Unique for each page
- 150-160 characters
- Include target keyword
- Clear value proposition
- Call to action

**Common issues:**
- Missing descriptions
- Duplicate descriptions
- Too long/short
- Not compelling
- Auto-generated (no effort)

#### Header Tags (H1-H6)

**Check:**
- [ ] One H1 per page
- [ ] H1 includes primary keyword
- [ ] Logical hierarchy (H1 → H2 → H3)
- [ ] Headers describe content
- [ ] No skipped levels

#### Content Optimization

**Check:**
- [ ] Primary keyword in first 100 words
- [ ] Natural keyword usage throughout
- [ ] Related keywords included
- [ ] Content matches search intent
- [ ] Content depth (word count appropriate)
- [ ] Unique content (no duplication)

#### Images

**Check:**
- [ ] Descriptive alt text (not keyword stuffing)
- [ ] Optimized file sizes (<200KB ideal)
- [ ] Next-gen formats (WebP, AVIF)
- [ ] Lazy loading implemented
- [ ] Descriptive file names

#### Internal Linking

**Check:**
- [ ] Important pages have internal links
- [ ] Descriptive anchor text (not "click here")
- [ ] Relevant contextual links
- [ ] No broken internal links
- [ ] Reasonable number per page

---

### Step 3: Content Audit

#### Content Quality Assessment

**For each key page:**
- Does it match search intent?
- Is it comprehensive?
- Is it better than competitors?
- Is it up to date?
- Does it have E-E-A-T signals?

#### Content Gap Analysis

**Find gaps:**
1. What keywords do competitors rank for that you don't?
2. What questions does your audience ask that you don't answer?
3. What content formats are missing (guides, tools, comparisons)?

**MCP research:**
```
exa.web_search_advanced_exa query="[topic]" excludeDomains=["your-domain.com"]
perplexity_research "What content do top [industry] websites have?"
```

#### Thin Content

**Identify:**
- Pages with <300 words
- Pages with no organic traffic
- Pages with high bounce rate
- Duplicate/near-duplicate content

**Actions:**
- Expand valuable thin content
- Consolidate related thin pages
- Noindex or remove valueless pages

---

### Step 4: Off-Page SEO (Backlinks)

#### Backlink Profile Analysis

**Check:**
- Total referring domains
- Domain authority/rating
- Anchor text distribution
- Follow vs nofollow ratio
- Link velocity (growth rate)

**Tools:** Ahrefs, Semrush, Moz

#### Link Quality

**Red flags:**
- Spammy directories
- Irrelevant sites
- Paid link schemes
- Over-optimized anchors
- Foreign language spam

#### Competitor Comparison

**Compare:**
- Referring domains vs competitors
- Quality of linking sites
- Types of content that earn links
- Link building opportunities

---

### Step 5: Local SEO (If Applicable)

**Check:**
- [ ] Google Business Profile claimed and optimized
- [ ] NAP (Name, Address, Phone) consistent
- [ ] Local keywords targeted
- [ ] Local schema markup
- [ ] Reviews strategy

---

### Step 6: Prioritization

#### Impact vs Effort Matrix

| Priority | Impact | Effort | Examples |
|----------|--------|--------|----------|
| P1: Do First | High | Low | Fix broken links, add missing titles |
| P2: Plan | High | High | Site speed optimization, content gaps |
| P3: Quick Wins | Low | Low | Image alt text, meta descriptions |
| P4: Backlog | Low | High | Site redesign, advanced schema |

---

## Output Format

```markdown
# SEO Audit: [Domain]

*Audit Date: [DATE]*
*Audited by: [Name/AI]*

---

## Executive Summary

**Overall SEO Health:** [Good/Needs Work/Critical Issues]

**Top 3 Issues:**
1. [Issue]: [Brief impact]
2. [Issue]: [Brief impact]
3. [Issue]: [Brief impact]

**Quick Wins:**
- [Win 1]
- [Win 2]
- [Win 3]

---

## Technical SEO

### Core Web Vitals
| Metric | Mobile | Desktop | Status |
|--------|--------|---------|--------|
| LCP | [X]s | [X]s | ✓/⚠️/❌ |
| INP | [X]ms | [X]ms | ✓/⚠️/❌ |
| CLS | [X] | [X] | ✓/⚠️/❌ |

**Issues:**
- [Issue]: [Recommendation]

### Crawlability & Indexation
- robots.txt: [Status]
- Sitemap: [Status]
- Indexation issues: [Count]

**Issues:**
- [Issue]: [Recommendation]

### Mobile-Friendliness
[Status and issues]

### HTTPS
[Status and issues]

---

## On-Page SEO

### Title Tags
- Missing: [Count]
- Duplicates: [Count]
- Too long: [Count]

**Issues:**
- [Specific issue]: [Recommendation]

### Meta Descriptions
- Missing: [Count]
- Duplicates: [Count]

**Issues:**
- [Specific issue]: [Recommendation]

### Headers
[Assessment]

### Content Optimization
[Assessment per key page]

### Images
[Assessment]

### Internal Linking
[Assessment]

---

## Content Audit

### Strengths
- [Strength]

### Gaps
- [Missing content topic]

### Thin Content
- [Page]: [Issue]

---

## Off-Page SEO

### Backlink Profile
- Referring domains: [Count]
- Domain rating: [Score]

### Comparison to Competitors
| Metric | You | Competitor 1 | Competitor 2 |
|--------|-----|--------------|--------------|
| Referring domains | [X] | [X] | [X] |
| Domain rating | [X] | [X] | [X] |

### Link Building Opportunities
- [Opportunity]

---

## Priority Action Plan

### P1: Critical (Do This Week)
| Issue | Impact | Fix | Owner |
|-------|--------|-----|-------|
| [Issue] | [Impact] | [Fix] | [Owner] |

### P2: Important (Do This Month)
| Issue | Impact | Fix | Owner |
|-------|--------|-----|-------|
| [Issue] | [Impact] | [Fix] | [Owner] |

### P3: Quick Wins
| Issue | Impact | Fix | Owner |
|-------|--------|-----|-------|
| [Issue] | [Impact] | [Fix] | [Owner] |

### P4: Backlog
| Issue | Impact | Fix | Owner |
|-------|--------|-----|-------|
| [Issue] | [Impact] | [Fix] | [Owner] |

---

## Tools & Resources

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Google Search Console](https://search.google.com/search-console)
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

## Next Steps

- **schema-markup**: Implement structured data
- **ai-seo**: Optimize for AI search
- **content-strategy**: Fill content gaps
- **site-architecture**: Restructure if needed
```

---

## Quality Bar

**Good SEO audit must:**
- Cover all four pillars (technical, on-page, content, off-page)
- Prioritize by impact, not just list issues
- Include specific, actionable recommendations
- Benchmark against competitors
- Focus on quick wins + strategic improvements

**Common mistakes:**
- Only checking technical, ignoring content
- Listing issues without prioritization
- No actionable recommendations
- Ignoring competitor context
- Not considering search intent

---

## Audit Examples: Complete Walkthrough

### Example Site: B2B SaaS Project Management Tool

**Site:** projectplanner.io (fictional example)

---

#### 1. Technical SEO Audit Findings

**✅ Good:**
- Site loads in 2.1s (PageSpeed score: 85/100)
- Mobile-responsive design
- HTTPS enabled
- XML sitemap present (/sitemap.xml)

**❌ Issues Found:**

| Issue | Severity | Evidence | Fix |
|-------|----------|----------|-----|
| **Broken internal links** | High | 23 pages return 404 (screaming frog crawl) | Update links or set up 301 redirects |
| **Duplicate title tags** | High | 12 pages share title "Project Management Software" | Write unique titles per page |
| **Missing meta descriptions** | Medium | 18 pages have no meta description | Write 150-char descriptions |
| **Slow image loading** | Medium | LCP 3.8s on /features page (15 unoptimized PNGs) | Convert to WebP, add lazy loading |
| **No robots.txt** | Low | Missing robots.txt file | Create robots.txt, allow all except /admin |

**Before/After Example: Title Tags**

**Before (Duplicate):**
- Homepage: "Project Management Software"
- Features page: "Project Management Software"
- Pricing page: "Project Management Software"

**After (Unique + Optimized):**
- Homepage: "Project Management Software for Remote Teams | ProjectPlanner"
- Features page: "Features: Gantt Charts, Time Tracking & Reporting | ProjectPlanner"
- Pricing page: "Pricing Plans: Free, Pro, Enterprise | ProjectPlanner"

**Why it matters:** Unique titles help Google understand what each page is about (better rankings).

---

#### 2. On-Page SEO Audit Findings

**Page Analyzed:** /blog/how-to-manage-remote-teams

**✅ Good:**
- Primary keyword "manage remote teams" in title, H1, first paragraph
- 1,800 words (comprehensive)
- 3 internal links to related articles

**❌ Issues Found:**

| Issue | Severity | Evidence | Fix |
|-------|----------|----------|-----|
| **Keyword stuffing** | High | "manage remote teams" appears 47 times (2.6% density) | Reduce to 18-25 mentions (1-1.5% density) |
| **No meta description** | High | Google generates random snippet from page | Write meta description with keyword + CTA |
| **Missing alt text** | Medium | 8/12 images have empty alt tags | Add descriptive alt text with keyword variants |
| **Weak internal linking** | Medium | Links to blog, not product pages | Add 1-2 links to /features or /pricing |
| **No schema markup** | Medium | Missing Article schema | Add JSON-LD for Article type |

**Before/After Example: Meta Description**

**Before (Auto-Generated by Google):**
> "In this post, we'll discuss various strategies for managing remote teams. Managing remote teams can be challenging. Here are some tips for managing remote teams effectively."

(Repetitive, no CTA, keyword-stuffed)

**After (Optimized):**
> "Learn 7 proven strategies to manage remote teams effectively in 2026. Includes templates, case studies, and a free remote work checklist. Read now."

(Clear benefit, includes CTA, natural keyword use)

---

#### 3. Content SEO Audit Findings

**✅ Good:**
- 42 blog posts published (good content volume)
- Topics align with target keywords (project management, remote work)

**❌ Issues Found:**

| Issue | Severity | Evidence | Fix |
|-------|----------|----------|-----|
| **Thin content** | High | 18 posts <500 words (Google prefers 1,000+ for ranking) | Expand or consolidate into comprehensive guides |
| **Keyword cannibalization** | High | 5 posts target "project management software" (compete with each other) | Consolidate into 1 pillar post, 301 redirect others |
| **Content gaps** | High | Competitors rank for "asynchronous communication" (you have 0 content) | Write comprehensive guide on async communication |
| **Outdated content** | Medium | Top post from 2021, stats from 2020 | Refresh with 2026 data, republish with new date |

**Before/After Example: Keyword Cannibalization**

**Before (5 Competing Posts):**
1. "Best Project Management Software" (500 words, 2021)
2. "Top 10 Project Management Tools" (600 words, 2022)
3. "Project Management Software Comparison" (700 words, 2023)
4. "Choosing Project Management Software" (550 words, 2023)
5. "Project Management Software Guide" (800 words, 2024)

**After (1 Pillar Post):**
- **Pillar:** "Complete Guide to Project Management Software (2026)" (3,500 words)
  - Includes: What it is, how to choose, top 10 tools, comparison table, FAQs
  - URLs 1-4 → 301 redirect to pillar
  - URL 5 → Expand into pillar post

**Why it matters:** Google doesn't know which post to rank, so none rank well. One comprehensive post ranks better than 5 mediocre ones.

---

#### 4. Backlink Audit Findings

**Profile:** 342 backlinks from 89 domains (DR 35)

**✅ Good:**
- Featured in TechCrunch (DR 93) and Product Hunt (DR 91)
- 12 .edu backlinks from university blogs

**❌ Issues Found:**

| Issue | Severity | Evidence | Fix |
|-------|----------|----------|-----|
| **Spammy backlinks** | High | 48 links from Russian gambling sites (DR 5-10) | Disavow via Google Search Console |
| **Broken backlinks** | Medium | 23 links point to 404 pages (lost link equity) | Set up 301 redirects to relevant pages |
| **Low-quality directories** | Low | 67 links from low-DR directories (no SEO value) | Ignore (not harmful, just not helpful) |

**Before/After Example: Broken Backlinks**

**Before:**
- TechCrunch article links to `/blog/project-management-trends-2023` (now 404)
- Lost high-value link (DR 93)

**After:**
- Set up 301 redirect: `/blog/project-management-trends-2023` → `/blog/project-management-trends-2026`
- Link equity preserved

---

#### 5. Page Speed Audit Findings

**Tool:** Google PageSpeed Insights

**Homepage Results:**
- Mobile: 68/100 (Needs improvement)
- Desktop: 89/100 (Good)

**Core Web Vitals:**
- LCP (Largest Contentful Paint): 3.8s (should be <2.5s)
- FID (First Input Delay): 120ms (should be <100ms)
- CLS (Cumulative Layout Shift): 0.15 (should be <0.1)

**Issues Found:**

| Issue | Impact | Fix |
|-------|--------|-----|
| **Unoptimized images** | LCP slow | Convert JPG/PNG to WebP, compress with TinyPNG |
| **Render-blocking JS** | LCP slow | Defer non-critical JavaScript, inline critical CSS |
| **Layout shift from ads** | CLS high | Reserve space for ads (set width/height) |
| **No CDN** | Global load times | Use Cloudflare or AWS CloudFront |

**Before/After Example: Image Optimization**

**Before:**
- Hero image: 2.4 MB PNG
- LCP: 3.8s

**After:**
- Hero image: 180 KB WebP
- LCP: 2.1s

**How:** Use Squoosh.app or TinyPNG.com to compress

---

#### 6. Internal Linking Audit Findings

**Issue:** Product pages are orphaned (no internal links from blog)

**Before (Broken Internal Linking):**
- Blog posts link to other blog posts (good)
- Blog posts DON'T link to product pages (missed opportunity)
- Product pages have 0 internal links pointing to them from blog

**After (Strategic Internal Linking):**
- Blog post on "How to Manage Remote Teams" → Add 2 links:
  - Link 1 (contextual): "Our team collaboration features help with this"
  - Link 2 (CTA): "Try ProjectPlanner free for 14 days"
- Result: Product pages get link equity, blog traffic converts better

**Internal Link Rule:**
Every blog post should have:
- 2-3 links to related blog posts (SEO)
- 1-2 links to product/feature pages (conversion)

---

## Audit Examples: Good vs. Bad

### Title Tags

**❌ Bad:**
- "Home" (too generic, no keywords)
- "Project Management Software | Project Management Software" (duplicate keywords)
- "Best Project Management Software 2021 2022 2023 2024 2025 2026" (keyword stuffing)

**✅ Good:**
- "Project Management Software for Remote Teams | ProjectPlanner" (clear, keyword-rich, branded)
- "Features: Gantt Charts, Time Tracking & Reporting | ProjectPlanner" (descriptive, unique)
- "Pricing: Free, Pro, Enterprise Plans | Start Free Trial" (includes CTA)

---

### Meta Descriptions

**❌ Bad:**
- (Empty — Google generates random snippet)
- "Welcome to our site. We offer project management software." (generic, no value)
- "Project management software project management tool project management solution" (keyword stuffing)

**✅ Good:**
- "Manage remote teams with ease. Gantt charts, time tracking, and real-time collaboration. Try free for 14 days, no credit card required." (benefit-driven, CTA, natural keywords)

---

### Internal Links

**❌ Bad:**
- "Click here" (no keyword context)
- "Read more" (not descriptive)
- "https://projectplanner.io/blog/post-123" (naked URL)

**✅ Good:**
- "Learn how to build a project timeline with Gantt charts" (descriptive, keyword-rich)
- "See how our time tracking feature works" (contextual, relevant)

---

### Page Speed

**❌ Bad:**
- 5 MB hero image (PNG)
- 12 uncompressed images per page
- No lazy loading (loads all images at once)

**✅ Good:**
- 200 KB hero image (WebP)
- Images lazy-loaded (only load when user scrolls)
- Critical CSS inlined, non-critical deferred

---

## How to Prioritize Fixes

Use this severity matrix:

| Severity | Criteria | Examples | Fix Timeline |
|----------|----------|----------|--------------|
| **P0 (Critical)** | Site is broken or penalized | Manual penalty, major crawl errors, site-wide HTTPS issue | Fix today |
| **P1 (High)** | Blocking rankings | Duplicate content, broken backlinks, keyword cannibalization | Fix this week |
| **P2 (Medium)** | Hurting but not blocking | Missing meta descriptions, slow load times, thin content | Fix this month |
| **P3 (Low)** | Nice to have | Minor UX issues, low-priority keywords | Fix when capacity allows |

---

## Quality Bar for Audit Examples

- **Specific before/after examples** (not just "fix title tags" — show exact changes)
- **Real numbers** (LCP 3.8s → 2.1s, not "slow → fast")
- **Tools cited** (PageSpeed Insights, Screaming Frog, Ahrefs)
- **Prioritized** (P0/P1/P2/P3 severity labels)
- **Actionable** (every issue has a clear fix, not just diagnosis)

---

## Related Skills

- **schema-markup**: Implement structured data
- **ai-seo**: Optimize for AI search engines
- **site-architecture**: URL structure and hierarchy
- **content-strategy**: Fill content gaps
- **programmatic-seo**: Scale SEO pages
