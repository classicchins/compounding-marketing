---
name: programmatic-seo
description: Create hundreds or thousands of SEO-optimized pages at scale using templates and data. Common for location pages, comparison pages, category pages. Triggers - programmatic SEO, scaled SEO, template-based pages, location pages, comparison pages.
metadata:
  version: 1.0.0
---

# Programmatic SEO

Generate hundreds of SEO pages at scale using templates and structured data.

## Use Cases
- **Location pages:** "Plumbers in [City]"
- **Comparison pages:** "[Product A] vs [Product B]"
- **Category pages:** "[Category] tools for [Use Case]"
- **Alternatives:** "[Competitor] alternative"

## Process

### Step 1: Define Page Template

Example for comparison pages:
```markdown
# [Product A] vs [Product B]: Which is Better for [Use Case]?

## Quick Comparison

| Feature | [Product A] | [Product B] |
|---------|-------------|-------------|
| [Feature 1] | [Data from DB] | [Data from DB] |

## [Product A] Overview
[Templated description]

## [Product B] Overview
[Templated description]

## Which to Choose?
[Decision framework]
```

### Step 2: Create Data Source
- Spreadsheet or database with:
  - Product names
  - Features/attributes
  - Pricing
  - Descriptions

### Step 3: Generate Pages
- Programmatically fill template with data
- Ensure unique content (not thin/duplicate)
- Add manual touches (custom intros, conclusions)

### Step 4: Optimize
- Unique title tags per page
- Custom meta descriptions
- Internal linking between related pages
- Canonical tags if similar content

## Quality Bar
- Pages provide genuine value (not spam)
- Unique content (not just keyword swaps)
- Properly indexed and crawlable
- Mobile-friendly

