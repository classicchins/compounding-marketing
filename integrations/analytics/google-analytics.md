# Google Analytics 4 Integration

Use GA4 data to inform marketing decisions, track campaign performance, and measure content effectiveness.

## Why GA4?

- Industry standard for website analytics
- Free for most use cases
- Deep conversion tracking
- Integration with Google Ads

## Setup

### 1. Get Property ID

1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Property Settings
3. Copy Property ID (looks like `123456789`)

### 2. API Access (For Automated Data Pull)

**Option A: OAuth (Interactive)**
Best for one-time analysis.

**Option B: Service Account (Automated)**
Best for recurring data pulls.

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create or select a project
3. Enable Google Analytics Data API
4. Create Service Account → Download JSON key
5. In GA4 Admin → Property Access → Add service account email

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "googleAnalytics": {
      "enabled": true,
      "propertyId": "123456789",
      "serviceAccountKey": "./ga-service-account.json"
    }
  }
}
```

## Data Available

### Metrics
- `sessions` — Total sessions
- `users` — Unique users
- `newUsers` — First-time visitors
- `bounceRate` — Single-page sessions
- `averageSessionDuration` — Time on site
- `conversions` — Goal completions
- `eventCount` — Event triggers

### Dimensions
- `pagePath` — URL path
- `source` — Traffic source
- `medium` — Traffic medium
- `campaign` — Campaign name
- `deviceCategory` — Desktop/mobile/tablet
- `country` — User country

## Usage in Skills

### Content Analysis

The `content-strategy` skill can pull:
```
Top performing pages (sessions, conversions)
Content engagement (time on page, bounce rate)
Traffic sources by content type
```

### CRO Analysis

The `page-cro` skill can pull:
```
Page conversion rates
Drop-off points in funnels
Device-specific performance
```

### Attribution

The `attribution-modeling` skill can pull:
```
Channel contribution to conversions
First-touch vs last-touch data
Campaign performance
```

## Example Queries

### Top Content by Conversions
```
Dimensions: pagePath
Metrics: sessions, conversions, conversionRate
Filter: pagePath contains "/blog"
Date range: Last 30 days
Sort: conversions desc
Limit: 20
```

### Traffic Sources Performance
```
Dimensions: source, medium
Metrics: sessions, conversions, bounceRate
Date range: Last 30 days
Sort: conversions desc
```

### Landing Page Performance
```
Dimensions: landingPage
Metrics: sessions, bounceRate, conversions
Date range: Last 30 days
Sort: sessions desc
Limit: 20
```

## Best Practices

### Events to Track

Set up these custom events for marketing:

| Event | Trigger | Parameters |
|-------|---------|------------|
| `cta_click` | CTA button click | cta_text, page_path |
| `form_start` | Form interaction starts | form_name |
| `form_submit` | Form submitted | form_name |
| `scroll_depth` | 25%, 50%, 75%, 100% | depth_percentage |
| `video_play` | Video starts | video_title |
| `download` | Asset downloaded | file_name |

### Conversions to Configure

- Sign up completed
- Demo requested
- Free trial started
- Pricing page visited
- Contact form submitted

### Segments to Create

- **Converters** — Users who completed key actions
- **High Intent** — Visited pricing, feature pages
- **Content Readers** — Blog visitors
- **Return Visitors** — Multiple sessions

## Manual Data Export

If not using API:

1. GA4 → Reports → Customize
2. Build report with needed metrics/dimensions
3. Export as CSV
4. Upload to skill for analysis

---

## Troubleshooting

### "Permission denied"
- Service account needs Viewer role minimum
- Add email to GA4 Property → Property Access

### "Property not found"
- Check Property ID (numbers only)
- Ensure API is enabled for your GCP project

### Data sampling
- GA4 samples on large date ranges
- Use shorter periods or BigQuery export
