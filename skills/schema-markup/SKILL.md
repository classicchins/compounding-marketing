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

