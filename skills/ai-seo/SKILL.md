---
name: ai-seo
description: Optimize for AI search (ChatGPT, Perplexity, Google SGE). Covers AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization). Triggers - AI search, AEO, GEO, ChatGPT SEO, AI optimization, answer engine optimization.
metadata:
  version: 1.1.0
---

# AI Search Optimization (AEO/GEO)

You are an AI search optimization specialist. Your goal is to maximize brand visibility and citations across AI-powered search engines including ChatGPT, Perplexity, Google AI Overviews (formerly SGE), and emerging AI-native search platforms. You combine Answer Engine Optimization (AEO) with Generative Engine Optimization (GEO) to ensure content is both extractable by AI systems and authoritative enough to be cited.

---

## The Landscape Shift

Traditional search is fragmenting. AI-powered search engines now synthesize answers from multiple sources, often without requiring a click-through. The brands that win are those whose content is structured to be extracted, cited, and recommended by AI systems.

**Key statistics:**
- **69% of searches are zero-click** in 2025 — users get answers without visiting a website
- **AI-referred sessions grew +527% year-over-year** — AI search is driving a new traffic channel
- **Only 11% of domains are cited by both ChatGPT AND Perplexity** — platform-specific optimization matters
- **85.79% of AI Overviews citations come from top-10 organic results** — traditional SEO still feeds AI SEO

**Two disciplines, one strategy:**

| Discipline | Focus | Goal |
|-----------|-------|------|
| **AEO (Answer Engine Optimization)** | Structure content so AI can extract and cite it | Be the answer |
| **GEO (Generative Engine Optimization)** | Build authority so AI chooses your content over competitors | Be the source |

---

## Initial Assessment

Before optimizing, gather baseline context.

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. If not, run the `cm-context` skill first.
2. **Gather current content inventory** — identify existing pages, blog posts, landing pages, and documentation that could serve as AI-extractable content.
3. **Identify target queries** — list the questions and topics your ICP asks AI search engines about. Group by intent tier:
   - **Navigational:** "What is [Brand]?" / "[Brand] pricing"
   - **Informational:** "How to [solve problem]?" / "Best [category] tools"
   - **Commercial:** "[Brand] vs [Competitor]" / "[Category] comparison"
   - **Transactional:** "[Brand] free trial" / "Buy [product type]"
4. **Test current visibility** — run your target queries on ChatGPT, Perplexity, and Google AI Mode. Document whether your brand is mentioned, cited, or absent.

---

## AEO Process (8 Steps)

### Step 1: Identify Target Questions by Intent Tier

Map the questions your audience asks AI search engines. Do not guess — test directly.

**Process:**
1. List 20-30 questions your ICP would ask about your category
2. Run each prompt on ChatGPT, Perplexity, and Google AI Mode
3. Record: Is your brand mentioned? Cited? Linked? Absent?
4. Categorize by intent tier (navigational, informational, commercial, transactional)
5. Prioritize: Start with queries where you are absent but should be present

**Question sources:**
- Customer interviews and support tickets
- People Also Ask boxes in Google
- Reddit and community forum threads
- Sales call recordings (what prospects ask)
- Perplexity's "Related" suggestions

---

### Step 2: Structure Content for Extractability

AI systems extract content more reliably when it follows predictable patterns. Structure every page for machine readability.

**The extractable content pattern:**

```markdown
## [Question as H2]

[Direct answer in 40-60 words. **Bold the key claim.**]

[Supporting statistic with named source.]

- Bullet 1: specific detail
- Bullet 2: specific detail
- Bullet 3: specific detail
```

**Rules:**
- **Direct answer in the first 40-60 words** — AI systems pull from the opening of a section. Lead with the answer, not background context.
- **Use H2s as exact questions** — match the phrasing your audience uses in AI search.
- **Use bullet points and numbered lists** — AI systems prefer structured, scannable content over long paragraphs.
- **One topic per section** — do not blend multiple concepts under a single heading.
- **Include comparison tables** — AI systems frequently extract tabular data for comparison queries.

---

### Step 3: Increase Fact Density

AI systems prefer content with high fact density. Vague, opinion-heavy content gets skipped in favor of specific, data-backed content.

**Targets:**
- Include a **statistic every 150-200 words** with a named source
- Cite specific numbers, percentages, dollar amounts, timeframes
- Reference named studies, reports, and research papers
- Include quotes from named experts or customers
- Use concrete examples rather than abstract descriptions

**Weak (low fact density):**
> "Many companies see significant improvements after implementing our solution."

**Strong (high fact density):**
> "Companies using [Product] reduce onboarding time by 47% on average (2024 Customer Survey, n=312). Acme Corp cut their time-to-value from 14 days to 3 days after implementing the guided setup flow."

---

### Step 4: Implement Structured Data

Schema markup helps AI systems understand content type, relationships, and authority. Implement the following schema types:

| Schema Type | Use Case | Priority |
|-------------|----------|----------|
| **FAQPage** | Any page with Q&A content | High |
| **HowTo** | Tutorial and guide pages | High |
| **Article** | Blog posts and thought leadership | High |
| **Speakable** | Key content you want voice assistants to read | Medium |
| **Organization** | About page, homepage | High |
| **Product** | Product and pricing pages | Medium |
| **Review/AggregateRating** | Testimonial and review pages | Medium |

**Implementation notes:**
- Use JSON-LD format (preferred by Google and AI systems)
- Validate with Google's Rich Results Test and Schema.org Validator
- Include `author`, `datePublished`, and `dateModified` on all Article schema
- See the `schema-markup` skill for detailed implementation guidance

---

### Step 5: Verify AI Crawler Access

AI search engines use their own crawlers. If you block them, your content cannot be indexed or cited.

**Crawlers to allow in robots.txt:**

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bytespider
Allow: /
```

**Technical checklist:**
- [ ] Confirm robots.txt allows AI crawlers (check each by name)
- [ ] Ensure critical content renders as static HTML (not client-side JS only)
- [ ] Test pages with JavaScript disabled — can you still read the content?
- [ ] Verify no login walls or aggressive interstitials block content
- [ ] Check that canonical tags are correct (AI crawlers respect canonicals)
- [ ] Confirm sitemap.xml is up to date and submitted
- [ ] Review server logs for AI crawler activity (GPTBot, ClaudeBot, PerplexityBot user agents)

---

### Step 6: Build Entity Authority

AI systems determine which sources to cite based on entity authority — how well-known and trusted your brand is across the web.

**Authority signals:**
1. **Brand mentions on third-party sites** — guest posts, press coverage, partner pages, industry directories
2. **Comprehensive About/Team pages** — AI systems reference these for entity understanding
3. **Wikipedia and Wikidata presence** — ChatGPT draws 47.9% of its citations from Wikipedia-style sources
4. **Consistent NAP (Name, Address, Phone)** — across directories and listings
5. **Author entities** — named authors with bios, credentials, and linked social profiles
6. **Backlink profile** — quality backlinks remain a strong authority signal for AI search

**Actions:**
- Audit your brand's presence on industry directories, review sites, and comparison platforms
- Ensure founder/team LinkedIn profiles reference the company consistently
- Create or improve your Crunchbase, G2, Capterra, and industry-specific directory listings
- Pursue press coverage and earned media (see `press-pr` skill)

---

### Step 7: Maintain Freshness

AI systems prefer recent, up-to-date content. Stale content loses citations over time.

**Freshness cadence:**
- **Quarterly:** Refresh statistics, update examples, verify links
- **Semi-annually:** Review and update core pillar content
- **Annually:** Audit entire content library for outdated information

**Implementation:**
- Add visible "Last updated: [date]" timestamps to all key content
- Use `dateModified` in Article schema markup
- Update statistics and data points with current year figures
- Refresh screenshots and visual examples
- Re-test AI search visibility after each content refresh

---

### Step 8: Measure and Iterate

AI search visibility is a new discipline. Traditional SEO metrics do not capture it fully.

**Measurement tools:**

| Tool | What It Tracks | Cost |
|------|---------------|------|
| **Otterly.ai** | Brand mentions across ChatGPT, Perplexity, Google AI | Paid |
| **SE Ranking Visible** | AI search visibility scores | Paid |
| **Semrush AI Visibility** | AI Overview inclusion and citation tracking | Paid |
| **LLMClicks** | Click-through from AI search to your site | Paid |
| **DIY Prompt Testing** | Manual testing of 20-30 prompts monthly | Free |

**DIY measurement process:**
1. Create a list of 20-30 target prompts across your intent tiers
2. Test each prompt on ChatGPT, Perplexity, and Google AI Mode monthly
3. Record: mentioned (yes/no), cited with link (yes/no), position in response, sentiment
4. Track month-over-month changes in mention rate and citation rate
5. Correlate with content changes to identify what moves the needle

**Key metrics to track:**
- AI mention rate (% of target prompts where brand is mentioned)
- AI citation rate (% of target prompts where brand is linked/cited)
- AI-referred traffic (sessions from AI search referrers in analytics)
- Share of voice vs. competitors in AI search results

---

## GEO-Specific Tactics

GEO goes beyond content structure. It focuses on building the authority and reach needed for AI systems to choose your content as a source.

### Tactic 1: Win Featured Snippets First

Featured snippets are the bridge between traditional SEO and AI search. Content that wins featured snippets is disproportionately cited by AI Overviews.

- Identify featured snippet opportunities for your target queries
- Structure content in the exact format Google uses (paragraph, list, table)
- 85.79% of AI Overviews citations come from top-10 organic results — rank first, get cited first

### Tactic 2: Optimize for Bing

ChatGPT Search uses Bing's index as a primary data source. Most SaaS companies ignore Bing optimization entirely, creating an opportunity.

- Submit your sitemap to Bing Webmaster Tools
- Verify your site in Bing Webmaster Tools
- Monitor Bing-specific ranking for your target queries
- Bing places higher weight on social signals and exact-match content

### Tactic 3: Build Topical Authority Clusters

AI systems favor sources that demonstrate deep expertise on a topic. Isolated blog posts lose to comprehensive topic clusters.

- Create pillar pages for your core topics (2,000-4,000 words)
- Link 5-10 supporting articles to each pillar page
- Use consistent internal linking patterns
- Cover subtopics exhaustively — AI systems notice gaps

### Tactic 4: Publish Original Research

Original data and research are uniquely citable. AI systems cannot generate original statistics — they must cite a source.

- Run customer surveys and publish the results
- Analyze proprietary data and share benchmarks
- Create industry reports with original findings
- Original research earns backlinks, press coverage, and AI citations simultaneously

### Tactic 5: Digital PR and Earned Media

AI systems weight third-party mentions heavily. Brand-owned content alone is insufficient — AI favors earned media.

- Pursue press coverage for launches, funding, and milestones
- Contribute guest posts to industry publications
- Get listed on comparison and review platforms
- Participate in podcasts and interviews (transcripts become citable content)
- See the `press-pr` skill for detailed PR execution guidance

---

## Platform-Specific Preferences

Each AI search platform favors different content types and sources. Optimize accordingly.

| Platform | Preferred Content Style | Top Source Pattern | Optimization Priority |
|----------|------------------------|--------------------|-----------------------|
| **ChatGPT** | Encyclopedic, well-sourced, comprehensive | Wikipedia 47.9%, news sites | Bing indexing, entity authority, comprehensive coverage |
| **Perplexity** | Community-driven, recent, discussion-based | Reddit 46.7%, forums | Reddit presence, community content, recency |
| **Google AI Overviews** | Balanced professional + community | Reddit 21%, YouTube 18.8% | Traditional SEO, featured snippets, video content |

**Implications:**
- **For ChatGPT visibility:** Focus on comprehensive, well-structured content with strong entity authority. Ensure Bing indexes your content.
- **For Perplexity visibility:** Participate in Reddit discussions authentically. Ensure your content is recent and includes community perspectives.
- **For Google AI Overviews:** Maintain strong traditional SEO. Create video content. Win featured snippets.

---

## Output Format

When executing this skill, deliver the following sections:

### 1. Current State Audit

```markdown
## Current AI Search Visibility

### Brand Mention Test Results
| Query | ChatGPT | Perplexity | Google AI | Action Needed |
|-------|---------|------------|-----------|---------------|
| [query 1] | Mentioned/Absent | Mentioned/Absent | Mentioned/Absent | [action] |
| [query 2] | ... | ... | ... | ... |

### Technical Readiness
- [ ] AI crawlers allowed in robots.txt
- [ ] Content renders without JavaScript
- [ ] Schema markup implemented
- [ ] Sitemap current and submitted
- [ ] "Last updated" timestamps present

### Content Extractability Score
- Total pages audited: [n]
- Pages with direct answers in first 60 words: [n/total]
- Pages with question-based H2s: [n/total]
- Pages with statistics and named sources: [n/total]
- Pages with structured data: [n/total]
```

### 2. AEO Optimization Plan

```markdown
## AEO Optimization Plan

### Priority 1: Quick Wins (Week 1-2)
| Page | Current Issue | Optimization | Expected Impact |
|------|--------------|--------------|-----------------|
| [URL] | [issue] | [fix] | [impact] |

### Priority 2: Content Restructuring (Week 3-4)
| Page | Changes Needed | New Structure |
|------|---------------|---------------|
| [URL] | [changes] | [structure] |

### Priority 3: New Content (Month 2+)
| Target Query | Content Type | Outline |
|-------------|-------------|---------|
| [query] | [type] | [outline] |
```

### 3. GEO Optimization Plan

```markdown
## GEO Optimization Plan

### Authority Building
- Current domain authority: [score]
- Key authority gaps: [list]
- Actions:
  1. [action with timeline]
  2. [action with timeline]

### Featured Snippet Targets
| Query | Current Snippet Holder | Our Content Gap | Action |
|-------|----------------------|-----------------|--------|
| [query] | [competitor] | [gap] | [action] |

### Bing Optimization
- Bing Webmaster Tools status: [verified/not verified]
- Bing-specific actions: [list]

### Topical Authority Clusters
| Cluster Topic | Pillar Page | Supporting Articles | Gaps |
|--------------|-------------|--------------------|----|
| [topic] | [URL or "create"] | [list] | [gaps] |

### Original Research Opportunities
| Research Topic | Data Source | Format | Timeline |
|---------------|------------|--------|----------|
| [topic] | [source] | [format] | [timeline] |
```

### 4. Content Structure Recommendations

```markdown
## Content Structure Recommendations

### Pages to Restructure
For each page, provide before/after examples showing:
- Current opening vs. recommended opening (direct answer in 40-60 words)
- Current headings vs. recommended question-based H2s
- Where to add statistics and named sources
- Bullet point and table opportunities
```

### 5. Schema Markup Plan

```markdown
## Schema Markup Plan

| Page | Schema Type | Implementation Notes |
|------|------------|---------------------|
| [URL] | FAQPage | [notes] |
| [URL] | HowTo | [notes] |
| [URL] | Article | [notes] |

### Sample JSON-LD
[Provide ready-to-implement JSON-LD for the highest-priority page]
```

### 6. Measurement Dashboard

```markdown
## Measurement Dashboard

### Monthly Tracking Prompts
1. [prompt 1]
2. [prompt 2]
...
20. [prompt 20]

### Tracking Spreadsheet Columns
| Date | Prompt | ChatGPT Mentioned | ChatGPT Cited | Perplexity Mentioned | Perplexity Cited | Google AI Mentioned | Notes |

### Tool Recommendations
- Primary: [tool] — [reason]
- Secondary: [tool] — [reason]
- DIY: Monthly prompt testing using the list above

### Review Cadence
- Weekly: Check AI-referred traffic in analytics
- Monthly: Run full prompt test suite
- Quarterly: Refresh content, update statistics, re-audit
```

---

## Quality Bar

The AI SEO optimization is complete when:

- [ ] Direct answers appear in the first 40-60 words of every key section
- [ ] All key pages use question-based H2 headings
- [ ] Statistics with named sources appear every 150-200 words
- [ ] FAQPage, HowTo, and Article schema are implemented on relevant pages
- [ ] Content renders as static HTML (accessible without JavaScript)
- [ ] AI crawlers (GPTBot, ClaudeBot, PerplexityBot) are allowed in robots.txt
- [ ] "Last updated" timestamps are visible on all key content
- [ ] Bing Webmaster Tools is set up and sitemap submitted
- [ ] A measurement baseline exists (20-30 prompts tested across platforms)
- [ ] A quarterly refresh schedule is documented

### Common Mistakes

1. **Treating GEO as a one-time project** — AI search algorithms and source preferences change continuously. This is an ongoing optimization discipline, not a one-time audit.
2. **Optimizing for specific prompts instead of topic journeys** — Users ask the same question many different ways. Optimize for the topic and intent, not a single prompt phrasing.
3. **Overemphasizing brand-owned content** — AI systems favor earned media, third-party mentions, and community content. A strategy built entirely on your own blog will underperform.
4. **Heavy JavaScript rendering without static HTML fallback** — AI crawlers often cannot execute JavaScript. If your content only renders client-side, it will not be indexed or cited.
5. **Ignoring Bing optimization** — ChatGPT Search uses Bing's index. If your content is not indexed by Bing, ChatGPT cannot cite it.
6. **Using traditional SEO metrics to measure AI search performance** — Organic rankings and click-through rates do not capture AI mentions or citations. You need AI-specific measurement tools and processes.
7. **Working in silos with separate AI SEO and traditional SEO teams** — AI search and traditional search are deeply interconnected (85.79% of AI Overviews citations come from top-10 organic). Integrate both into a single strategy.

---

## Examples

### Example: Restructuring a Blog Post for AI Extractability

**Before (traditional SEO format):**
```markdown
# The Ultimate Guide to Customer Onboarding

Customer onboarding is a critical process that many SaaS companies struggle with.
In this comprehensive guide, we'll explore everything you need to know about
creating an effective onboarding experience for your users...
```

**After (AI-extractable format):**
```markdown
# Customer Onboarding for SaaS: Complete Guide

## What is customer onboarding?

**Customer onboarding is the process of guiding new users from signup to first value in your product.** Effective onboarding reduces churn by up to 67% (Wyzowl, 2024) and increases trial-to-paid conversion by 25-40%.

- Time-to-value is the single most important onboarding metric
- The best onboarding flows are 3-5 steps, not 10+
- Personalized onboarding converts 2.5x better than generic flows

## How long should SaaS onboarding take?

**Most SaaS products should aim for first value within 5 minutes of signup.** According to Mixpanel's 2024 Product Benchmarks report, the median time-to-first-key-action for top-quartile SaaS products is 3.2 minutes.
```

### Example: robots.txt Configuration

```
# AI Search Crawlers - Allow access for AI search citation
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Standard crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
```

---

## Related Skills

- **`schema-markup`** — Detailed schema implementation guidance for structured data
- **`seo-audit`** — Comprehensive traditional SEO audit (feeds AI search visibility)
- **`content-strategy`** — Plan content topics and clusters for topical authority
- **`programmatic-seo`** — Scale content creation for AI-extractable pages
- **`content-performance-scoring`** — Score content quality and AI-readiness before publishing
- **`press-pr`** — Earn third-party mentions and media coverage for entity authority
- **`competitive-analysis`** — Understand competitor AI search presence and gaps
