# Meta Ads Integration

Use Meta (Facebook/Instagram) Ads data for paid social campaign analysis and optimization.

## Why Meta Ads?

- Largest social advertising platform
- Rich targeting options
- Instagram + Facebook combined
- Detailed campaign analytics

## Setup

### 1. Get Access Token

**Long-Lived Token (Recommended):**

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create an app (Business type)
3. Add Marketing API product
4. Generate System User → Long-lived token
5. Grant token access to your ad account

**Short-Lived Token (Quick Testing):**
1. Graph API Explorer → Generate token
2. Select permissions: `ads_read`, `ads_management`
3. Note: Expires in ~1 hour

### 2. Find Ad Account ID

1. Go to [Business Settings](https://business.facebook.com/settings/)
2. Ad Accounts → Your Account
3. Copy Ad Account ID (format: `act_123456789`)

### 3. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "metaAds": {
      "enabled": true,
      "accessToken": "your-long-lived-token",
      "adAccountId": "act_123456789"
    }
  }
}
```

## Data Available

### Metrics
- `spend` — Amount spent
- `impressions` — Times shown
- `reach` — Unique users reached
- `clicks` — Link clicks
- `ctr` — Click-through rate
- `cpm` — Cost per 1000 impressions
- `cpc` — Cost per click
- `conversions` — Custom conversion events
- `roas` — Return on ad spend

### Breakdowns
- `age` — Age ranges
- `gender` — Gender
- `placement` — Facebook, Instagram, Audience Network
- `device_platform` — Mobile, desktop
- `country` — Geographic

## Usage in Skills

### Campaign Analysis

The `paid-ads` skill can pull:
```
Campaign performance by objective
Ad set comparison
Creative performance
Audience insights
```

### Creative Testing

The `ad-creative` skill can analyze:
```
Top performing creatives
Copy variations performance
Image vs video results
CTA effectiveness
```

### Attribution

The `attribution-modeling` skill can:
```
Cross-channel contribution
View-through vs click-through
Assisted conversions
```

## Example Queries

### Campaign Performance
```
Level: campaign
Metrics: spend, impressions, clicks, conversions, roas
Date range: Last 30 days
Breakdown: none
```

### Creative Analysis
```
Level: ad
Metrics: spend, ctr, cpc, conversions
Date range: Last 14 days
Filter: spend > $50
Sort: conversions desc
```

### Audience Performance
```
Level: adset
Metrics: spend, conversions, cpa
Date range: Last 30 days
Breakdown: age, gender
```

### Placement Comparison
```
Level: campaign
Metrics: spend, impressions, ctr, conversions
Date range: Last 30 days
Breakdown: placement
```

## Key Metrics to Track

### Awareness Campaigns
- Reach
- Impressions
- Frequency
- CPM

### Consideration Campaigns
- Clicks
- CTR
- CPC
- Landing page views

### Conversion Campaigns
- Conversions
- CPA (Cost per acquisition)
- ROAS
- Conversion rate

## Best Practices

### Campaign Structure
```
Campaign (Objective)
├── Ad Set 1 (Audience A)
│   ├── Ad 1 (Creative variation)
│   └── Ad 2 (Creative variation)
└── Ad Set 2 (Audience B)
    ├── Ad 3 (Creative variation)
    └── Ad 4 (Creative variation)
```

### Testing Framework
1. Test audiences first (at ad set level)
2. Then test creatives (at ad level)
3. 1 variable at a time
4. Minimum $50-100 per variant

### Custom Conversions to Set Up
- Lead form submitted
- Pricing page visited
- Demo requested
- Trial started
- Purchase completed

### Audiences to Build
- Website visitors (retargeting)
- Lookalike of customers
- Lookalike of high-value customers
- Interest-based prospecting

---

## Troubleshooting

### "Invalid token"
- Token expired (short-lived = 1 hour)
- Generate long-lived token
- Check token permissions

### "Ad account not found"
- Check `act_` prefix is included
- Verify token has access to account

### Data discrepancies
- Attribution window differences
- Meta uses different attribution models
- Compare Meta to GA with same window
