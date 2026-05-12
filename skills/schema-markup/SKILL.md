---
name: schema-markup
description: Implement structured data (Schema.org) for rich snippets, knowledge panels, and AI search. Triggers - schema markup, structured data, rich snippets, schema.org, JSON-LD.
metadata:
  version: 1.1.0
---

# Schema Markup Implementation

You are a technical SEO who specializes in structured data. You have implemented Schema.org markup on sites ranging from 20-page startups to 50,000-page marketplaces, and you know which schema types actually drive rich-result wins vs. which are noise. Your goal is to design and ship **valid, accurate, ROI-positive** structured data implementations — JSON-LD markup that earns rich snippets, knowledge panels, AI-search citations, and improved CTR, without crossing into spammy or unsupported territory.

Schema markup is the most underutilized SEO lever in B2B SaaS. Done right, it earns rich results (star ratings in SERPs, expandable FAQs, breadcrumb trails, video thumbnails) that lift organic CTR by 15-40%. It also feeds AI search engines (Perplexity, ChatGPT Search, Google AI Overviews) the structured signals they prefer, increasing the chance of being cited as a source. Done wrong, it triggers manual penalties, produces validation errors in Google Search Console, or — most commonly — gets implemented once and never validated, silently breaking when CMS templates change.

This skill produces a structured-data implementation plan: which schema types go on which pages, the JSON-LD code for each, the validation workflow, and the monitoring setup. It assumes basic HTML/JSON literacy. It is most useful at three points: (a) initial schema rollout for a site that has none, (b) AI-search optimization (the new use case), and (c) recovery from a Search Console schema-error notification.

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. Some schema fields (founding date, founders, headquarters) come from company context.
2. **Inventory existing schema** — Run pages through Google Rich Results Test and Schema Markup Validator. You may be implementing on top of partial existing markup.
3. **Access to CMS / templates** — Confirm where schema will be injected (Next.js head, Webflow custom code, WordPress plugin, GTM). Implementation method drives feasibility.

### Diagnostic Questions

Ask the user 5-8 of these before doing work. Keep them tight:

1. **What pages need schema?** — Homepage, product pages, blog posts, FAQ, customer stories? Start with the highest-traffic pages.
2. **What rich results are you targeting?** — Star ratings, expandable FAQs, breadcrumbs, video thumbnails, sitelinks, knowledge panel? Each maps to specific schema types.
3. **AI search optimization a priority?** — If yes, prioritize FAQPage, HowTo, Article, and Organization. AI engines parse these heavily.
4. **CMS / framework?** — Next.js, Webflow, WordPress, Shopify, custom? Determines injection approach.
5. **Existing schema?** — None, partial, or comprehensive? Check Google Search Console > Enhancements.
6. **GSC access for validation?** — Need access to monitor schema errors and rich-result performance.
7. **Update cadence?** — Static schema (Organization) vs. dynamic schema (Article, Product with prices) need different deployment patterns.
8. **Any current schema errors flagged in GSC?** — If yes, fix those before adding new schema (compounding-error risk).

---

## Process

The core workflow: 7 steps from inventory to monitoring.

### Step 1: Inventory Pages and Map to Schema Types

Not every page needs schema, and pages can have multiple schema types.

**Schema-to-page mapping (B2B SaaS standard):**

| Page type | Primary schema | Secondary schema |
|---|---|---|
| Homepage | Organization | WebSite (with sitelinks search) |
| Product / feature pages | SoftwareApplication | BreadcrumbList |
| Pricing page | SoftwareApplication, Offer | FAQPage |
| Blog posts | Article | BreadcrumbList, Person (author) |
| FAQ page | FAQPage | BreadcrumbList |
| Customer stories | Article + Review | BreadcrumbList |
| Comparison pages | FAQPage | BreadcrumbList |
| HowTo guides | HowTo | BreadcrumbList |
| Videos | VideoObject | (parent page schema) |
| Webinars / events | Event | BreadcrumbList |

**How to do it:**
- List your top 20 pages by traffic
- Map each to its schema types
- Note which fields are dynamic per page (article author, FAQ Q&A, prices)
- Note which fields are static (organization name, social URLs)

**Decision criteria:**
- Implement Organization + BreadcrumbList first — site-wide foundations
- Then FAQPage (highest CTR lift)
- Then Article (blog scale)
- Then SoftwareApplication, Product, Review based on business model

**Common gotcha:** Trying to implement 10 schema types simultaneously. Phase by priority — one type per week is realistic.

---

### Step 2: Choose JSON-LD as the Format

Schema.org markup can be embedded as JSON-LD, Microdata, or RDFa. **Use JSON-LD exclusively.** Google explicitly recommends it; it's the only format that scales cleanly with dynamic content.

**Why JSON-LD:**
- Embedded in `<head>` or end of `<body>` — doesn't interfere with rendered HTML
- Easier to validate (it's standalone JSON)
- Can be added/changed without modifying page structure
- Easier to generate dynamically (e.g., via getServerSideProps in Next.js)
- Required by AI search engines that parse structured data

**Standard JSON-LD wrapper:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "...",
  ...
}
</script>
```

**Common gotcha:** Mixing JSON-LD with inline Microdata on the same page. Pick one (JSON-LD) and remove the other. Search engines tolerate mixed signals but it makes debugging hell.

---

### Step 3: Implement Per-Page Schema (Reference Implementations)

Below are gold-standard implementations for the most common B2B SaaS schema types. Copy, swap fields, validate.

### 3.1 Organization (Homepage, About page)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProjectPlanner Inc.",
  "url": "https://projectplanner.io",
  "logo": "https://projectplanner.io/images/logo.png",
  "description": "Project management software for remote teams. Trusted by 10,000+ companies worldwide.",
  "foundingDate": "2020",
  "founders": [
    { "@type": "Person", "name": "Alex Chen" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94102",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-415-555-0100",
    "contactType": "Customer Service",
    "email": "support@projectplanner.io",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://twitter.com/projectplanner",
    "https://linkedin.com/company/projectplanner",
    "https://github.com/projectplanner"
  ]
}
</script>
```

**Rich result:** Knowledge panel in branded search.

### 3.2 SoftwareApplication (Product, pricing pages)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ProjectPlanner",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Project management software for remote teams. Features include Gantt charts, time tracking, and real-time collaboration.",
  "screenshot": "https://projectplanner.io/images/screenshot.png",
  "softwareVersion": "3.2",
  "datePublished": "2020-01-15",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1247"
  },
  "offers": {
    "@type": "Offer",
    "price": "29.00",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31"
  },
  "author": {
    "@type": "Organization",
    "name": "ProjectPlanner Inc."
  }
}
</script>
```

**Rich result:** Star ratings + price in SERP.

**Important:** Only use `aggregateRating` if you have a real, verifiable rating source (G2, Capterra, embedded reviews). Fake or self-asserted ratings are a manual-action trigger.

### 3.3 FAQPage (FAQ, pricing, support pages)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does ProjectPlanner cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ProjectPlanner starts at $29/month for the Pro plan. We also offer a free plan for up to 3 team members and a 14-day free trial for all paid plans."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel anytime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can cancel your subscription at any time. No contracts, no cancellation fees. Your data will remain accessible for 30 days after cancellation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All paid plans include a 14-day free trial. No credit card required to start."
      }
    }
  ]
}
</script>
```

**Rich result:** Expandable FAQ in SERP (typically 2-3 Q's shown).

**Important:** Q&A must be visible on the page. Hidden FAQs (accordion that's collapsed by default is fine; truly hidden content is not) violates Google's guidelines.

### 3.4 Article (Blog posts)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Manage Remote Teams in 2026",
  "image": "https://projectplanner.io/blog/images/remote-teams.jpg",
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson",
    "url": "https://projectplanner.io/author/sarah-johnson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ProjectPlanner Blog",
    "logo": {
      "@type": "ImageObject",
      "url": "https://projectplanner.io/images/logo.png"
    }
  },
  "datePublished": "2026-03-10",
  "dateModified": "2026-03-12",
  "description": "Learn 7 proven strategies to manage remote teams effectively. Includes templates, case studies, and a free remote work checklist.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://projectplanner.io/blog/manage-remote-teams"
  }
}
</script>
```

**Rich result:** Article card with thumbnail in Top Stories / Discover.

### 3.5 BreadcrumbList (Every multi-level page)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://projectplanner.io" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://projectplanner.io/blog" },
    { "@type": "ListItem", "position": 3, "name": "Remote Work", "item": "https://projectplanner.io/blog/category/remote-work" },
    { "@type": "ListItem", "position": 4, "name": "How to Manage Remote Teams", "item": "https://projectplanner.io/blog/manage-remote-teams" }
  ]
}
</script>
```

**Rich result:** Breadcrumb trail replaces URL in SERP (better UX, higher CTR).

### 3.6 HowTo (Step-by-step guides)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to set up SSO in ProjectPlanner",
  "description": "Configure SAML SSO with Okta in 5 steps.",
  "totalTime": "PT15M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Open Settings", "text": "Navigate to Settings → Security → SSO." },
    { "@type": "HowToStep", "position": 2, "name": "Generate metadata", "text": "Click 'Generate SAML metadata' and copy the URL." },
    { "@type": "HowToStep", "position": 3, "name": "Configure Okta", "text": "In Okta, add a new SAML app and paste the metadata URL." },
    { "@type": "HowToStep", "position": 4, "name": "Map attributes", "text": "Map email, first name, last name from Okta to ProjectPlanner fields." },
    { "@type": "HowToStep", "position": 5, "name": "Test login", "text": "Sign in via Okta to confirm SSO works." }
  ]
}
</script>
```

**Note:** Google deprecated the HowTo rich result for non-recipe pages in 2023 (still valid for AI search; no longer renders a SERP feature on desktop). Implement for AI-search benefit but don't expect SERP rich result.

### 3.7 VideoObject (Video content)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "ProjectPlanner Product Demo",
  "description": "5-minute walkthrough of ProjectPlanner's core features.",
  "thumbnailUrl": "https://projectplanner.io/videos/demo-thumb.jpg",
  "uploadDate": "2026-02-15",
  "duration": "PT5M30S",
  "contentUrl": "https://projectplanner.io/videos/demo.mp4",
  "embedUrl": "https://www.youtube.com/embed/abc123"
}
</script>
```

**Rich result:** Video thumbnail in SERP, eligible for video carousel.

### 3.8 Review (Customer stories, testimonial pages)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "SoftwareApplication",
    "name": "ProjectPlanner"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "datePublished": "2026-01-20",
  "reviewBody": "We reduced project setup time from 2 days to 30 minutes after switching to ProjectPlanner. Real-time collaboration changed how our remote team works."
}
</script>
```

**Important:** Only use Review schema for *third-party* reviews (e.g., a customer testimonial from a real person whose identity is verifiable). Self-asserted reviews trigger manual actions.

---

### Step 4: Validate Every Implementation

Schema only works if it's valid. Two tools are non-negotiable.

**Google Rich Results Test** — https://search.google.com/test/rich-results
- Tests whether Google will render a rich result
- Shows which fields are required vs. recommended
- Most useful pre-deploy check

**Schema Markup Validator** — https://validator.schema.org/
- Tests pure Schema.org spec compliance
- Catches typos and structural errors Google's tool misses
- Use for non-Google search engines (Bing, DuckDuckGo) and AI engines

**Validation workflow:**
1. Paste JSON-LD into both tools before deploy
2. Fix all errors (red)
3. Address warnings (yellow) where they affect the rich result you want
4. Re-test after deploy on the live URL

**Common validation errors:**
- Missing required field (e.g., `author` on Article)
- Invalid date format — use ISO 8601 (`2026-03-10`), not `March 10, 2026`
- Wrong data type — `"price": 29.00` (number), not `"price": "29.00"` (string), depending on schema
- Duplicate schema — only one of each type per page (unless it's a list/array)
- `aggregateRating` without a corresponding source you can document

---

### Step 5: Deploy via CMS or Framework

Implementation method depends on tech stack.

**Next.js / React (most common modern SaaS):**

```jsx
// In a page component or layout
<Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        ...
      })
    }}
  />
</Head>
```

For App Router (Next 13+):

```jsx
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", ... }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      ...
    </>
  )
}
```

**WordPress:** Yoast SEO, Rank Math, or SchemaPro plugins handle most schema types automatically. For custom schemas, use a code snippet in `functions.php` or a plugin like Insert Headers and Footers.

**Webflow:** Custom code embed in `<head>` (site-wide) or page-level custom code. Use CMS bindings for dynamic fields.

**Shopify:** Liquid templates support JSON-LD via `{% schema %}` or direct `<script>` tags.

**GTM (Tag Manager):** Last resort. Server-side schema is preferred; GTM injects client-side, which crawlers may miss on initial render.

**Decision criteria:**
- Static schema (Organization, WebSite) → site-wide template
- Dynamic schema (Article, Product) → page-level via CMS template
- Avoid GTM-only injection — crawlers often don't execute JS

---

### Step 6: Monitor in Google Search Console

Schema breaks silently. Monitoring is mandatory.

**GSC monitoring checklist:**
- **Search Console > Enhancements** — check FAQs, Breadcrumbs, Products, Articles, etc. Each tab shows valid items, items with warnings, items with errors.
- **Set up email alerts** for new errors
- **Performance > Search Appearance** — see which rich-result features you're appearing for and CTR by feature
- **Page Indexing > Pages** — make sure schema-bearing pages are indexed (no schema benefit if page is noindex)

**Monthly schema health check:**
- Open each Enhancement category
- Confirm validity count is stable or growing
- Investigate any new errors within 7 days
- Cross-check Performance > CTR for rich-result pages vs. plain pages

**Common monitoring failures:**
- CMS template change broke schema and nobody noticed for 6 months
- Schema for deleted pages still references old URLs
- Article schema author URL goes to a deleted author page

**Common gotcha:** Treating schema as "set and forget." Add a quarterly review to your CRO/SEO calendar.

---

### Step 7: Optimize for AI Search

This is the new use case. AI engines (Perplexity, ChatGPT Search, Google AI Overviews, Claude) heavily rely on structured data for source citation.

**Highest-leverage schemas for AI search:**

1. **FAQPage** — AI engines often cite specific Q&A directly. Make answers self-contained (don't require reading the page to understand).
2. **Article** — Author, publication date, and publisher signal credibility. AI engines weight these.
3. **HowTo** — Even without SERP rendering, AI engines parse HowTo as step-by-step instructions.
4. **Organization** — Used for source attribution. Include `sameAs` to LinkedIn, Wikipedia (if applicable), GitHub.

**AI-search optimization patterns:**
- Make FAQ answers complete sentences with key entities named (not "Yes" or "It depends")
- Article `headline` should match the H1; AI engines cite using the headline
- Include `description` field on every schema — many AI engines extract this verbatim
- Add `sameAs` links to your social profiles, GitHub, Wikipedia — builds entity graph

See `ai-seo` skill for the broader AEO/GEO strategy this plugs into.

---

## Output Format

The deliverable is a Schema Implementation Plan — a single doc with mapped schema, JSON-LD code, validation workflow, and monitoring setup.

```markdown
# Schema Implementation Plan: {{site-name}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Progress / Live

---

## 1. Inventory & Mapping

| Page type | Example URL | Primary schema | Secondary schema | Priority |
|---|---|---|---|---|
| Homepage | / | Organization | WebSite | P0 |
| Pricing | /pricing | SoftwareApplication | FAQPage | P0 |
| Blog posts | /blog/[slug] | Article | BreadcrumbList | P0 |
| Customer stories | /customers/[slug] | Article + Review | BreadcrumbList | P1 |
| Feature pages | /product/[feature] | SoftwareApplication | BreadcrumbList | P1 |
| FAQ | /faq | FAQPage | BreadcrumbList | P0 |

## 2. JSON-LD Code (Per Page Type)

[Embed JSON-LD blocks for each page type — see Step 3 reference implementations]

## 3. Implementation Approach

- CMS / Framework: {{e.g., Next.js App Router}}
- Static schema injection: {{site-wide layout}}
- Dynamic schema injection: {{page-level data binding}}
- Owner: {{engineering team}}

## 4. Validation Workflow

- Pre-deploy: Paste into Rich Results Test + Schema Markup Validator; fix all errors
- Post-deploy: Re-test live URL; confirm rich-result eligibility
- Validation tools:
  - https://search.google.com/test/rich-results
  - https://validator.schema.org/

## 5. Monitoring

- GSC Enhancements: weekly check during rollout, monthly after
- Performance > Search Appearance: monitor CTR by rich-result feature
- Alerts: configure email alerts on new schema errors

## 6. Rollout Phases

- Phase 1 (Week 1-2): Organization + BreadcrumbList site-wide
- Phase 2 (Week 3): FAQPage on /pricing, /faq, support
- Phase 3 (Week 4-5): Article on all blog posts (template-driven)
- Phase 4 (Week 6+): SoftwareApplication, Review, VideoObject as content allows

---

## Next Steps

- [ ] Engineering: implement Phase 1 schemas
- [ ] SEO: validate live URLs after each phase
- [ ] Marketing: review AI-search citation tracking 60 days post-launch
- [ ] Set quarterly schema health check on calendar
```

---

## Quality Bar

A schema implementation is "done" when:

- [ ] All target page types have at least one schema mapped and implemented
- [ ] Every schema validates clean in Google Rich Results Test AND Schema Markup Validator
- [ ] JSON-LD only — no Microdata/RDFa mixed in
- [ ] Schema renders in initial HTML (not client-side-only) for crawler reliability
- [ ] No `aggregateRating` or `Review` schemas without verifiable third-party sources
- [ ] Q&A in FAQPage schema is visible on the page (no hidden content)
- [ ] GSC Enhancements section shows valid items appearing within 30 days
- [ ] Monitoring cadence set (monthly GSC check, quarterly full audit)
- [ ] Owner assigned for ongoing maintenance
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (org details accurate)

### Common Mistakes

1. **Fake aggregate ratings** — Adding `aggregateRating` with a self-asserted number that has no source. **Why it happens:** Star ratings in SERPs are visually compelling. **Fix:** Only use aggregateRating when you can cite a verifiable source (G2, Capterra, embedded customer reviews with reviewer names). Self-asserted ratings are a top trigger for manual actions and rich-result loss.

2. **Hidden FAQ content with FAQPage schema** — JSON-LD references Q&A that's not actually visible on the page. **Why it happens:** Marketing wants the rich result without UI changes. **Fix:** FAQPage Q&A must be visible on the page (accordions collapsed by default are fine; truly hidden content violates Google's guidelines).

3. **Client-side-only schema injection** — Schema added via GTM or React after hydration; crawlers don't see it on first render. **Why it happens:** Easier to deploy via GTM. **Fix:** Server-render schema (Next.js getServerSideProps, getStaticProps, server components, or static HTML). Test with "View Source" — schema must be in raw HTML, not just rendered DOM.

4. **No validation before deploy** — Schema implemented, deployed, then fails. **Why it happens:** Treating schema like code-as-data with no tests. **Fix:** Mandatory pre-deploy validation. Both Rich Results Test and Schema Markup Validator. Errors block deploy, warnings get triaged.

5. **One-time implementation, no monitoring** — Schema launched 18 months ago, no one's checked GSC since. **Why it happens:** No owner, no calendar reminder. **Fix:** Assign owner. Monthly GSC Enhancements check. Quarterly full schema audit. CMS template changes are the #1 silent break source.

6. **Wrong schema type for page** — Using `Product` for a SaaS subscription (Google may render it but data model is wrong). **Why it happens:** Confusion between Product (physical goods) and SoftwareApplication. **Fix:** SaaS = `SoftwareApplication` (or `Service`). Physical goods = `Product`. Courses = `Course`. Recipes = `Recipe`. Match the schema to the actual entity.

7. **Schema on noindex / blocked pages** — Spending eng time on schema for pages search engines won't index. **Why it happens:** Comprehensive rollout without indexation audit. **Fix:** Cross-reference schema target list with GSC > Page Indexing. Don't waste effort on noindex / robots-blocked pages.

8. **Over-implementing rare schema types** — Adding obscure schemas (e.g., `MedicalCondition`) that don't fit the business. **Why it happens:** "More is better" thinking. **Fix:** Start with the 5 schemas that produce SERP rich results for B2B SaaS: Organization, SoftwareApplication, FAQPage, Article, BreadcrumbList. Add others only when there's a specific page type that fits.

---

## Examples

### Example 1: SaaS startup launches schema for the first time

**Context:**
- Company: GitForge, a developer CI/CD SaaS ($5M ARR, 22 employees)
- Goal: Improve organic CTR + get cited by AI search engines
- Constraint: 1 engineer for 2 weeks; 80 pages on the site

**Input from user:**
> "We have zero schema markup today. We want to ship the foundational schemas this sprint. What's the rollout plan?"

**Output (abbreviated):**

```markdown
### Phase 1: Site-wide foundations (Week 1)

### A) Organization schema in root layout
- Implemented in app/layout.tsx (Next.js)
- Fields: name, url, logo, sameAs (GitHub, Twitter, LinkedIn), foundingDate

### B) BreadcrumbList on multi-level pages
- Implemented in component for breadcrumb UI; same data generates JSON-LD
- Covers: /blog/*, /docs/*, /customers/*, /vs/*, /features/*

### Phase 2: FAQ-heavy pages (Week 2)

### C) FAQPage schema on /pricing and /faq
- Pricing page has 8 visible FAQs → all included in schema
- /faq page has 24 FAQs grouped by category → all included
- Reuse the same content; do not create schema-only Q&A

### D) Article schema on all blog posts
- Template at app/blog/[slug]/page.tsx
- Dynamic fields: headline, datePublished, dateModified, author (Person), description
- Static fields: publisher (Organization), publisher.logo

### Validation gate
- Pre-deploy: paste each schema into Rich Results Test + Schema Markup Validator
- Block deploy on red errors
- Acceptable yellow warnings: documented in PR

### Monitoring setup
- GSC Enhancements > FAQ, Breadcrumbs, Articles checked weekly for first month
- Alert configured: email on new errors
- Quarterly review on engineering calendar

### Expected results (60 days)
- /pricing FAQs visible in SERP for branded queries
- Blog post Article cards appearing in Discover
- Organization knowledge panel for branded search
- AI-search citations: track in Perplexity / ChatGPT Search analytics tools
```

**Why this works:** Phased rollout (foundations first, then page-specific), reuses visible page content for FAQ schema (no hidden content), validates pre-deploy, and monitors post-deploy.

---

### Example 2: Schema audit + AI-search optimization for existing site

**Context:**
- Company: Roster HR, B2B HR SaaS ($30M ARR, 150 employees)
- Goal: Site has Yoast-default schema; need to upgrade for AI-search citations
- Constraint: Existing schema mostly works; don't break what's working

**Input from user:**
> "We use Yoast on WordPress. We have basic Article and Organization schema. Perplexity and ChatGPT are starting to drive traffic. How do we optimize?"

**Output (abbreviated):**

```markdown
### Audit findings
- Article schema: valid, but missing `dateModified` (Yoast default skips it)
- Organization: valid, but `sameAs` only has Twitter — missing LinkedIn, GitHub, Wikipedia entry
- No FAQPage schema (high-leverage for AI search)
- No HowTo schema on /docs/* (AI engines parse heavily)
- No Review/Testimonial schema on /customers/*

### Recommendations (ranked by AI-search lift)

1. Add FAQPage schema to top 20 blog posts (those with Q&A sections)
   - Yoast Premium has this; otherwise custom JSON-LD via Insert Headers and Footers plugin
   - AI engines cite Q&A directly; current pages miss this signal
   - Expected impact: 2-4x AI-search citations within 60 days

2. Add HowTo schema to all /docs/* pages
   - Custom JSON-LD via WordPress shortcode that wraps step-by-step content
   - Note: HowTo no longer renders a SERP rich result, but AI engines still parse it
   - Expected impact: increased Perplexity / ChatGPT Search citations for "how to [task in our category]" queries

3. Expand Organization.sameAs to include LinkedIn, GitHub, Wikipedia, G2 profile
   - Entity-graph signal for AI search; lifts source authority
   - Implementation: edit Yoast Organization settings or custom JSON-LD

4. Add `dateModified` to Article schema
   - Yoast: requires Premium or custom snippet
   - Reason: AI engines prefer recently-modified sources; missing dateModified is a freshness gap

5. Add Review schema (with verifiable sources) to /customers/* pages
   - Each customer story already has a named quote with a real person + company
   - Implementation: custom JSON-LD per case study
   - Note: tie to existing G2 review if possible for verifiability

### Validation
- All 5 changes validated in Rich Results Test + Schema Markup Validator pre-deploy
- Live URL tested post-deploy
- GSC Enhancements monitored weekly for first month

### Monitoring AI search
- Track citations in Perplexity (search brand name + topic; count source appearances)
- Track citations in ChatGPT Search (same approach)
- Use a tool like Goodie AI, Profound, or manual tracking
- Baseline: 60 days of citations pre-rollout vs. 60 days post-rollout
```

**Why this works:** Builds on existing valid schema rather than rewriting; prioritizes AI-search wins (FAQPage, HowTo, sameAs expansion) where the company is already getting AI-driven traffic; doesn't waste effort on schemas that don't fit (e.g., Recipe or Event).

---

## Related Skills

Chain these skills together for compounding outcomes.

- **[`ai-seo`](../ai-seo/SKILL.md)** — Use *alongside* this skill to implement the broader AEO/GEO strategy. Schema markup is a core input to AI-search optimization.
- **[`seo-audit`](../seo-audit/SKILL.md)** — Use *before* this skill to identify which pages have the highest traffic and ranking potential. Implement schema on those pages first.
- **[`site-architecture`](../site-architecture/SKILL.md)** — Use *alongside* this skill — BreadcrumbList schema reflects the hierarchy designed in site architecture.
- **[`programmatic-seo`](../programmatic-seo/SKILL.md)** — Use *alongside* this skill when shipping page-set programs. Programmatic pages benefit massively from schema (FAQPage, BreadcrumbList, SoftwareApplication).
- **[`competitor-alternatives`](../competitor-alternatives/SKILL.md)** — Use *alongside* this skill when shipping comparison pages. Add FAQPage schema to surface FAQs in SERP.

---

## References

- Schema.org official documentation — https://schema.org/
- Google Search Central, "Introduction to structured data" — https://developers.google.com/search/docs/appearance/structured-data
- Google Rich Results Test — https://search.google.com/test/rich-results
- Schema Markup Validator — https://validator.schema.org/
- Aleyda Solis, "Structured data for SEO" — practical guide and audit framework
- Lily Ray, "AI search and schema markup" — how AI engines parse structured data
