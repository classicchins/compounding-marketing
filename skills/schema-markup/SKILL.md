---
name: schema-markup
description: Implement structured data (Schema.org) for rich snippets, knowledge panels, and AI search. Triggers - schema markup, structured data, rich snippets, schema.org, JSON-LD.
metadata:
  version: 1.0.0
---

# Schema Markup Implementation

Add structured data for rich search results and AI understanding.

## Common Schema Types

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Company Name]",
  "url": "[URL]",
  "logo": "[Logo URL]",
  "sameAs": [
    "[Twitter URL]",
    "[LinkedIn URL]"
  ]
}
```

### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "[Question]",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[Answer]"
    }
  }]
}
```

### Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product Name]",
  "description": "[Description]",
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "USD"
  }
}
```

### HowTo Schema
For step-by-step guides.

### Review Schema
For testimonials and reviews.

## Process

### Step 1: Identify Pages for Schema
- Homepage: Organization
- Product pages: Product
- FAQ pages: FAQ
- Blog posts: Article
- How-to guides: HowTo

### Step 2: Generate Schema
Use schema.org format (JSON-LD preferred)

### Step 3: Implement
Add to `<head>` or end of `<body>`

### Step 4: Test
- Google Rich Results Test
- Schema Markup Validator

## Quality Bar
- Valid JSON-LD syntax
- Accurate data (no spam)
- Tested with Google tools

---

## JSON-LD Examples: Complete Implementations

### 1. SoftwareApplication (For SaaS Product Pages)

**Use when:** Product page, homepage, app store listing

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ProjectPlanner",
  "applicationCategory": "BusinessApplication",
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
  "operatingSystem": "Web, iOS, Android",
  "author": {
    "@type": "Organization",
    "name": "ProjectPlanner Inc."
  },
  "description": "Project management software for remote teams. Features include Gantt charts, time tracking, and real-time collaboration.",
  "screenshot": "https://projectplanner.io/images/screenshot.png",
  "softwareVersion": "3.2",
  "datePublished": "2020-01-15"
}
</script>
```

**Where to place:** Homepage, /product page  
**Rich result:** Star ratings in search results, price display  

---

### 2. FAQPage (For FAQ Sections)

**Use when:** FAQ page, support page, blog post with Q&A

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

**Where to place:** /faq page, /pricing page, support articles  
**Rich result:** Expandable FAQ in search results (higher CTR)  

---

### 3. Article (For Blog Posts)

**Use when:** Blog post, news article, how-to guide

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

**Where to place:** Every blog post  
**Rich result:** Article card with thumbnail, author, date in search/social  

---

### 4. BreadcrumbList (For Site Navigation)

**Use when:** Multi-level site structure (Home > Category > Page)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://projectplanner.io"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://projectplanner.io/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Remote Work",
      "item": "https://projectplanner.io/blog/category/remote-work"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "How to Manage Remote Teams",
      "item": "https://projectplanner.io/blog/manage-remote-teams"
    }
  ]
}
</script>
```

**Where to place:** Every page with breadcrumbs  
**Rich result:** Breadcrumb trail in search results (better UX, higher CTR)  

---

### 5. Organization (For About/Contact Pages)

**Use when:** Homepage, about page, contact page

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
    {
      "@type": "Person",
      "name": "Alex Chen"
    }
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
    "https://facebook.com/projectplanner"
  ]
}
</script>
```

**Where to place:** Homepage, /about page  
**Rich result:** Knowledge panel in Google search (brand visibility)  

---

## How to Validate Schema Markup

### Google Rich Results Test

**URL:** https://search.google.com/test/rich-results

**How to use:**
1. Paste URL or HTML snippet
2. Click "Test URL" or "Test Code"
3. Review results (valid/invalid)

**What to check:**
- ✅ Green = Valid
- ❌ Red = Error (fix required)
- ⚠️ Yellow = Warning (optional, but recommended)

---

### Schema Markup Validator

**URL:** https://validator.schema.org/

**How to use:**
1. Paste JSON-LD code
2. Click "Run Test"
3. Review validation errors

**Common errors:**
- Missing required fields (e.g., `@context`, `@type`)
- Invalid date format (use ISO 8601: `2026-03-10`)
- Wrong data type (e.g., string instead of number for price)

---

## Common Errors and How to Fix Them

### Error 1: Missing Required Field

**Error:**
```
The property "author" is required but missing.
```

**Fix:**
Add the missing field:
```json
"author": {
  "@type": "Person",
  "name": "Sarah Johnson"
}
```

---

### Error 2: Invalid Date Format

**Error:**
```
Invalid value for "datePublished": "March 10, 2026"
```

**Fix:**
Use ISO 8601 format (YYYY-MM-DD):
```json
"datePublished": "2026-03-10"
```

---

### Error 3: Wrong Data Type

**Error:**
```
Expected number, got string for "price".
```

**Fix:**
Remove quotes from numbers:
```json
"price": 29.00  // Not "29.00"
```

---

### Error 4: Duplicate Schema

**Error:**
```
Multiple instances of the same schema type detected.
```

**Fix:**
- Only ONE schema per type per page (not 2 Article schemas on the same page)
- If you need multiple (e.g., multiple FAQs), use an array

---

## Priority Schema Types for SaaS Companies

| Schema Type | Use Case | Priority | Expected Result |
|-------------|----------|----------|-----------------|
| **SoftwareApplication** | Product pages | High | Star ratings, price in SERP |
| **FAQPage** | FAQ, pricing, support | High | Expandable FAQ in SERP |
| **Article** | Blog posts | High | Article card with thumbnail |
| **BreadcrumbList** | All pages | Medium | Breadcrumb trail in SERP |
| **Organization** | Homepage, about | Medium | Knowledge panel |
| **Review** | Case studies | Medium | Star ratings |
| **HowTo** | Tutorial blog posts | Low | Step-by-step SERP feature |
| **VideoObject** | Video content | Low | Video thumbnail in SERP |

**Implementation order:**
1. Week 1: Add SoftwareApplication to product pages
2. Week 2: Add FAQPage to pricing/FAQ
3. Week 3: Add Article to all blog posts (template it)
4. Week 4: Add BreadcrumbList site-wide
5. Ongoing: Add Organization, Review, HowTo as content is created

---

## Quality Bar for JSON-LD Implementation

- **Valid syntax:** Passes Google Rich Results Test
- **Accurate data:** No fake ratings, no spam content
- **Complete fields:** All required fields present (author, datePublished, etc.)
- **Tested live:** Validated on production site (not just in editor)
- **Monitored:** Check Google Search Console for schema errors monthly

