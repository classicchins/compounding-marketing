# Mixpanel Integration

Use Mixpanel for product analytics, funnel analysis, and A/B test measurement.

## Why Mixpanel?

- Event-based analytics (more flexible than GA)
- Powerful funnel and retention analysis
- Built-in experimentation
- User-level data

## Setup

### 1. Get Credentials

1. Go to [mixpanel.com](https://mixpanel.com) → Project Settings
2. Note your Project ID
3. Create a Service Account for API access
4. Copy the API Secret

### 2. Configure

Add to `.cm-config.json`:

```json
{
  "integrations": {
    "mixpanel": {
      "enabled": true,
      "projectId": "your-project-id",
      "apiSecret": "your-api-secret"
    }
  }
}
```

## Data Available

### Events
- User actions (signup, purchase, feature use)
- Custom events you define
- Event properties (metadata)

### User Properties
- User attributes (plan, company size, role)
- Computed properties
- Cohort membership

### Analyses
- Funnels — Conversion between steps
- Retention — Return rate over time
- Flows — User journey paths
- Cohorts — User segments

## Usage in Skills

### Funnel Analysis (CRO Skills)

The `signup-flow-cro` skill can pull:
```
Signup funnel conversion rates
Drop-off points by step
Conversion by traffic source
Time to complete
```

### A/B Testing

The `ab-test-setup` skill can:
```
Get baseline conversion rates
Calculate sample sizes
Pull experiment results
Statistical significance testing
```

### User Research

The `customer-research` skill can analyze:
```
Feature adoption patterns
User journey paths
Retention cohorts
Power user behaviors
```

## Example Queries

### Signup Funnel
```
Funnel: 
  Step 1: page_view (property: page = "/signup")
  Step 2: signup_started
  Step 3: signup_completed
  Step 4: first_action_taken
Date range: Last 30 days
Group by: source
```

### Feature Adoption
```
Event: feature_used
Group by: feature_name
Date range: Last 30 days
Filter: user.plan = "paid"
```

### Retention by Cohort
```
Start event: signup_completed
Return event: any_active_event
Cohort: signup_week
Retention periods: Week 1, Week 2, Week 4
```

## Key Events to Track

### Activation Events
| Event | When | Properties |
|-------|------|------------|
| `signup_started` | Form opened | source, medium |
| `signup_completed` | Account created | plan, source |
| `first_value_action` | Aha moment | action_type |
| `activated` | Activation complete | time_to_activate |

### Engagement Events
| Event | When | Properties |
|-------|------|------------|
| `feature_used` | Any feature | feature_name, count |
| `session_started` | Session begins | device, referrer |
| `content_viewed` | Content consumed | content_type, id |

### Conversion Events
| Event | When | Properties |
|-------|------|------------|
| `upgrade_started` | Clicked upgrade | from_plan, to_plan |
| `upgrade_completed` | Payment success | plan, amount |
| `churn` | Subscription cancelled | reason, tenure |

## Best Practices

### User Properties to Set
- `plan` — Current subscription
- `company_size` — If B2B
- `role` — User's job function
- `signup_date` — When they joined
- `source` — How they found you

### Cohorts to Create
- **Activated** — Reached aha moment
- **Power Users** — High engagement
- **At Risk** — Declining usage
- **Upgrade Candidates** — Free users with high usage

### Funnels to Build
- Signup → Activation → First Week Retention
- Landing Page → Signup → Aha Moment
- Upgrade Page → Checkout → Complete

---

## Troubleshooting

### "Project not found"
- Check Project ID in Settings
- Ensure API Secret matches project

### Missing events
- Check event tracking implementation
- Verify events are being sent (live view)

### Data discrepancies
- Mixpanel uses user-based, GA uses session-based
- Timezone differences
- Bot/spam filtering differences
