---
name: analytics-tracking
description: Set up event tracking, conversion pixels, and analytics for marketing campaigns. Covers GA4, Meta Pixel, LinkedIn Insight Tag. Triggers - analytics setup, event tracking, conversion tracking, GA4, tracking pixels.
metadata:
  version: 1.0.0
---

# Analytics & Event Tracking Setup

Implement tracking for marketing campaigns and conversions.

## Tools
- **Google Analytics 4 (GA4):** Website traffic, behavior
- **Meta Pixel:** Facebook ad tracking
- **LinkedIn Insight Tag:** LinkedIn ad tracking
- **Custom events:** Product-specific actions

## Process

### Step 1: Define Events to Track
**Standard events:**
- Page view
- Button click
- Form submission
- Signup
- Purchase

**Custom events:**
- Feature activation
- Trial started
- Upgrade

### Step 2: Implement Tracking
**GA4:**
```html
<!-- GA4 Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Event tracking:**
```javascript
gtag('event', 'signup', {
  'method': 'Google'
});
```

**Meta Pixel:**
```html
<script>
  fbq('track', 'Lead');
</script>
```

### Step 3: Test
- Use browser extensions (GA Debugger, Facebook Pixel Helper)
- Verify events firing correctly
- Check data in dashboards

### Step 4: Set Up Conversions
- GA4: Mark events as conversions
- Google Ads: Import conversions
- Facebook: Define custom conversions

## Output
Tracking implementation plan + code snippets + QA checklist.

