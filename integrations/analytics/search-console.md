# Google Search Console Integration

Use Search Console data for SEO analysis, keyword tracking, and content optimization.

## Why Search Console?

- Only source of actual Google search data
- See what queries your site ranks for
- Identify content opportunities
- Track SEO performance over time

## Setup

### 1. Verify Site Ownership

If not already done:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (domain or URL prefix)
3. Verify ownership (DNS, HTML file, or tag)

### 2. API Access

**Service Account Method:**

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create/select project
3. Enable Search Console API
4. Create Service Account → Download JSON key
5. In Search Console → Settings → Users → Add service account email

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "searchConsole": {
      "enabled": true,
      "siteUrl": "https://example.com",
      "serviceAccountKey": "./gsc-service-account.json"
    }
  }
}
```

## Data Available

### Metrics
- `clicks` — Clicks from search results
- `impressions` — Times shown in results
- `ctr` — Click-through rate
- `position` — Average ranking position

### Dimensions
- `query` — Search query
- `page` — Page URL
- `country` — User country
- `device` — Desktop/mobile/tablet
- `date` — Date

## Usage in Skills

### SEO Audit

The `seo-audit` skill can pull:
```
Current keyword rankings
Pages with declining traffic
Click-through rate by position
Mobile vs desktop performance
```

### Content Strategy

The `content-strategy` skill can use:
```
Queries with high impressions, low clicks (optimize existing)
Queries you're ranking 5-20 for (quick wins)
Queries competitors rank for but you don't (gaps)
```

### AI SEO

The `ai-seo` skill can identify:
```
Question queries to answer
Featured snippet opportunities
People Also Ask topics
```

## Example Queries

### Top Performing Pages
```
Dimensions: page
Metrics: clicks, impressions, ctr, position
Date range: Last 28 days
Sort: clicks desc
Limit: 50
```

### Quick Win Keywords (Position 5-15)
```
Dimensions: query, page
Metrics: impressions, clicks, position
Filter: position > 5 AND position < 15
Date range: Last 28 days
Sort: impressions desc
```

### CTR Optimization Opportunities
```
Dimensions: query, page
Metrics: impressions, ctr, position
Filter: position < 5 AND ctr < 0.05
Date range: Last 28 days
Sort: impressions desc
```

### Declining Pages
```
Dimensions: page
Metrics: clicks
Date range: Compare last 28 days vs previous 28 days
Filter: clicks decreased > 20%
```

## Best Practices

### Weekly Checks
- Top queries by clicks (what's working?)
- Position changes (ranking movements?)
- New queries appearing (opportunities?)
- CTR changes (title/description issues?)

### Monthly Analysis
- Compare to previous month
- Identify trending content
- Find seasonal patterns
- Update declining pages

### Content Optimization Process

1. Find pages with impressions but low clicks → Improve titles/descriptions
2. Find pages ranking 5-20 → Add content depth, internal links
3. Find gaps (competitor queries you miss) → Create new content

## Manual Data Export

If not using API:

1. Search Console → Performance
2. Set date range and filters
3. Export as CSV
4. Upload to skill for analysis

**Limitations:**
- Max 1,000 rows in UI export
- Use API for full data
- Data has 2-3 day delay

---

## Troubleshooting

### "Property not found"
- Check site URL format matches exactly
- URL prefix vs domain property matters

### "Permission denied"
- Service account needs Owner or Full User access
- Add in Search Console → Settings → Users

### Missing data
- Search Console has 16-month data retention
- Very low volume queries may be aggregated
