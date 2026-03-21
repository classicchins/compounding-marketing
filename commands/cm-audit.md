# /cm:audit — Marketing Audit

Comprehensive marketing health check across all channels and assets.

## What It Does

A structured audit of your entire marketing operation — messaging consistency, channel performance, funnel health, and asset quality. Run quarterly or before major strategic shifts.

## Time Investment

60-90 minutes

## Process

### 1. Foundation Health Check

**Positioning & Messaging:**
- Review positioning canvas — still accurate? Market shifted?
- Check messaging across homepage, emails, ads — consistent?
- Brand voice alignment — does everything sound like the same company?
- Value props — still resonating? Evidence from metrics?

**Action:** Flag any drift. If positioning needs refresh → `/cm:position`

### 2. Channel Performance Audit

**For each active channel, assess:**

| Channel | Questions |
|---------|-----------|
| **Website/SEO** | Organic traffic trend? Top pages performing? Content gaps? |
| **Email** | List growth rate? Open/click rates? Deliverability issues? |
| **Social** | Engagement trend? Best-performing formats? Audience growth? |
| **Paid** | ROAS by channel? CAC trend? Creative fatigue? |
| **Content** | Publishing cadence? Quality consistency? Distribution working? |

**Score each:** 🟢 Healthy / 🟡 Needs attention / 🔴 Broken

### 3. Funnel Health

**Map conversion at each stage:**
- Awareness → Interest (traffic → engagement)
- Interest → Consideration (engagement → signup/demo)
- Consideration → Decision (signup → paid)
- Decision → Retention (paid → active user)

**Identify:** Where is the biggest drop-off? That's your highest-leverage fix.

### 4. Asset Inventory

**Catalog what exists:**
- Landing pages (how many? conversion rates?)
- Email sequences (active? performing?)
- Content library (blog posts, case studies, guides)
- Ad creatives (fresh or fatigued?)
- Sales collateral (up to date?)

**Flag:** Outdated assets, missing critical assets, underperforming assets.

### 5. Competitive Position Check

- Run quick competitive scan — anyone new?
- Pricing still competitive?
- Feature gaps that affect positioning?
- Messaging they're using that's working?

**Optional:** Run `competitive-analysis` skill for deep dive.

### 6. Priority Stack Ranking

Based on audit findings, stack rank:
1. **Fix now** — Broken things costing money/opportunity
2. **Improve next** — Underperforming but not broken
3. **Invest later** — New opportunities identified
4. **Deprioritize** — Channels/tactics not worth the effort

## Output

```markdown
## Marketing Audit — [Date]

### Health Scorecard
| Area | Status | Notes |
|------|--------|-------|
| Positioning | 🟢/🟡/🔴 | ... |
| Website/SEO | 🟢/🟡/🔴 | ... |
| Email | 🟢/🟡/🔴 | ... |
| Social | 🟢/🟡/🔴 | ... |
| Paid | 🟢/🟡/🔴 | ... |
| Content | 🟢/🟡/🔴 | ... |
| Funnel | 🟢/🟡/🔴 | ... |

### Top 3 Priorities
1. ...
2. ...
3. ...

### Quick Wins (< 1 day each)
- ...

### Assets Needing Update
- ...
```

## When to Run

- **Quarterly** (minimum)
- Before major strategic pivots
- After significant market changes
- When metrics plateau and you're not sure why

## Skills Used

- `competitive-analysis` (optional deep dive)
- `page-cro` (for underperforming pages)
- `analytics-tracking` (for gaps in measurement)
- `content-strategy` (for content gaps)

## Common Mistakes

- Auditing too frequently (monthly is overkill — weekly metrics cover that)
- Not acting on findings (audit without action is waste)
- Boiling the ocean — focus on top 3 priorities, not fixing everything
