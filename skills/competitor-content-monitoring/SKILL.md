---
name: competitor-content-monitoring
description: Track competitor content publishing and identify content gaps using neural search and alerts. Covers Exa, Google Alerts, RSS monitoring, and competitive intelligence workflow. Triggers - competitor content, content gap analysis, competitive monitoring, competitor watch, content intelligence.
metadata:
  version: 1.0.0
---

# Competitor Content Monitoring

Systematically track what competitors are publishing, identify content gaps, and build a responsive content strategy.

## Why Monitor Competitor Content?

- **Spot trends early:** See what's working before it becomes obvious
- **Find content gaps:** Discover topics they're ignoring (your opportunity)
- **Avoid duplication:** Don't write the same angle as everyone else
- **Respond strategically:** Know when to compete head-on vs. differentiate
- **Benchmark quality:** Understand what "great" looks like in your niche

---

## The Monitoring Stack

### 1. Exa (Neural Competitor Search) — PRIMARY TOOL

**Why Exa?**
- Neural search finds content semantically (not just keyword matching)
- Can filter by domain, date range, and content type
- Returns full text + metadata
- Perfect for "show me everything [Competitor] published this month"

**Setup:**

```bash
# Install mcporter if not already installed
npm install -g mcporter

# Configure Exa in config/mcporter.json (should already be set up)
```

**Usage:**

```bash
# Find all content from a specific competitor in the last 30 days
npx mcporter call 'exa.web_search_advanced_exa' 'query="marketing automation" includeDomains=["competitor.com"] startPublishedDate="2026-02-01"'

# Find competitor content by topic (across multiple competitors)
npx mcporter call 'exa.web_search_advanced_exa' 'query="product-led growth strategies" category="company" numResults=20'

# Neural search for similar content (finds content like your target article)
npx mcporter call 'exa.web_search_exa' 'query="compound marketing effects" numResults=10'
```

**When to use:**
- Weekly competitive content roundup
- Ad-hoc research ("what has [competitor] said about [topic]?")
- Content gap analysis (compare your coverage to theirs)

---

### 2. Google Alerts — PASSIVE MONITORING

**Setup:**

1. Go to [google.com/alerts](https://google.com/alerts)
2. Create alerts for:
   - `site:competitor1.com`
   - `site:competitor2.com`
   - `[Your core topic] -site:yoursite.com` (everyone except you)
3. Frequency: Daily digest (not immediate — too noisy)
4. Deliver to: Dedicated email folder (not inbox)

**Pros:**
- Free, automated, zero effort
- Catches blog posts, news mentions, press releases

**Cons:**
- Only surfaces indexed content (Exa is better for fresh content)
- No filtering by topic quality
- Generic (doesn't understand context)

**When to use:**
- Set-and-forget baseline monitoring
- Supplement to Exa (catches things you didn't search for)

---

### 3. RSS Feeds — REAL-TIME MONITORING

**Setup:**

1. Find competitor blog RSS feeds:
   - Usually `competitor.com/feed` or `competitor.com/rss`
   - Check page source for `<link rel="alternate" type="application/rss+xml">`
2. Use an RSS reader:
   - **Feedly** (web/mobile, free tier)
   - **Inoreader** (powerful filters)
   - **NewsBlur** (open-source option)

**Organize by priority:**

**Must-Read (check daily):**
- Top 3-5 direct competitors

**Scan Weekly:**
- Adjacent competitors (different ICP but overlapping topics)
- Thought leaders in your space

**Monthly Review:**
- Broader industry news

**When to use:**
- Real-time awareness (know within hours of publish)
- Lightweight daily check (faster than visiting each site)

---

### 4. Ahrefs / SEMrush — KEYWORD-LEVEL INTELLIGENCE

**What it shows:**
- Which competitor pages rank for which keywords
- New pages they've published (via Site Explorer > Pages > New)
- Traffic estimates per page
- Backlinks to their content

**Setup:**

1. Add competitors to "Competitors" list in Ahrefs
2. Set up weekly alerts:
   - New backlinks
   - New ranking keywords
   - New pages

**When to use:**
- Quarterly deep dive (what's driving their traffic?)
- Before planning content (don't compete for keywords they own unless strategic)
- After publishing (did we out-rank them?)

**Limitation:** Requires paid Ahrefs/SEMrush subscription

---

## Content Gap Analysis Framework

### Step 1: List Your Competitors

**Tier 1 (direct):** Same product, same ICP  
**Tier 2 (adjacent):** Different product, same ICP  
**Tier 3 (aspirational):** Bigger/better-known, similar space  

**Example (project management SaaS):**
- Tier 1: Asana, Monday.com, ClickUp
- Tier 2: Notion, Airtable (productivity, not pure PM)
- Tier 3: Atlassian (Jira), Microsoft (Planner)

---

### Step 2: Map Their Content

Use Exa or manual audit to catalog their content:

| Competitor | Topic | Format | Publish Date | Traffic Est. | Gap? |
|------------|-------|--------|--------------|--------------|------|
| Asana | "Remote team productivity" | Blog | 2026-02-15 | High | No (we covered) |
| Monday.com | "Project templates library" | Resource hub | 2026-02-10 | High | **YES** |
| ClickUp | "AI project planning" | Video | 2026-02-01 | Medium | **YES** |

**Exa query for this:**

```bash
npx mcporter call 'exa.web_search_advanced_exa' 'query="project management" includeDomains=["asana.com","monday.com","clickup.com"] startPublishedDate="2026-02-01" numResults=30'
```

---

### Step 3: Identify Gaps

**Gap types:**

1. **Topic gap:** They cover a topic you don't
2. **Format gap:** They have video, you only have text
3. **Angle gap:** Same topic, different perspective (e.g., they focus on features, you could focus on workflow)
4. **Depth gap:** They have a 500-word post, you could write a 3,000-word guide
5. **Recency gap:** They published in 2023, you could update for 2026

**Prioritize gaps:**

- **High priority:** High traffic topic + you have expertise + fits your ICP
- **Medium priority:** Medium traffic + differentiation angle exists
- **Low priority:** Low traffic or outside your core positioning

---

### Step 4: Response Playbook

**When they publish something:**

#### Scenario A: High-Value Topic, Direct Competition

**Example:** Asana publishes "Complete Guide to Agile Project Management"

**Response:**
1. **Acknowledge it's good** (if it is)
2. **Find your differentiation angle:**
   - Different audience (e.g., agencies vs. enterprises)
   - Different depth (e.g., tactical how-to vs. strategic overview)
   - Different format (e.g., video walkthrough vs. text)
3. **Publish within 30 days** (ride the topic wave)
4. **Link to theirs** (if genuinely useful — builds goodwill + SEO)
5. **Promote harder** (they validated the topic, now out-distribute them)

#### Scenario B: Trend Piece (Industry News/Analysis)

**Example:** ClickUp publishes "State of Remote Work 2026 Report"

**Response:**
1. **Don't create a competing report** (you can't beat them on data)
2. **Create derivative content:**
   - "5 Insights from ClickUp's Remote Work Report (And What They Mean for Marketing Teams)"
   - Video reaction / commentary
   - LinkedIn post with your hot take
3. **Ride the social wave** (engage with their launch posts)

#### Scenario C: Weak/Generic Content

**Example:** Monday.com publishes "10 Project Management Tips" (generic listicle)

**Response:**
1. **Don't respond directly** (waste of energy)
2. **Note the gap:** They went shallow, you can go deep
3. **Publish a better version later** (not urgent)

#### Scenario D: Brilliant Content (They Nailed It)

**Example:** Notion publishes a stunning interactive product tour

**Response:**
1. **Study it** (what made it great?)
2. **Share it internally** (raise the bar for your team)
3. **Find a different battle** (don't compete head-on if you'll lose)
4. **Bookmark for inspiration** (steal the format, different topic)

---

### Step 5: Competitive Content Calendar

Track competitive responses in your calendar:

| Week | Competitor Published | Our Response | Type | Owner | Due Date |
|------|----------------------|--------------|------|-------|----------|
| Feb W3 | Asana: Agile Guide | "Agile for Agencies" (angle shift) | Blog | Sarah | Mar 1 |
| Feb W3 | ClickUp: Remote Report | LinkedIn hot take thread | Social | Mike | Feb 25 |
| Feb W2 | Monday: PM Tips | (ignore — low quality) | — | — | — |

---

## Alert Cadence & Triage Process

### Daily (5 min)
- Check RSS feed (skim headlines, flag 2-3 for deeper read)
- Note any major competitor launches

### Weekly (30 min)
- Review Google Alerts digest
- Run Exa query for new content (past 7 days)
- Update competitive content tracker
- Flag 1-2 pieces for response

### Monthly (2 hours)
- Deep dive: Ahrefs competitor analysis (traffic, backlinks, new pages)
- Content gap audit (what are they covering that we aren't?)
- Identify 2-3 strategic response opportunities
- Update content calendar

### Quarterly (half day)
- Full competitive content audit
- Update competitor tier list (anyone new? anyone fading?)
- Benchmark content quality (is the bar rising?)
- Strategy session: Where should we compete vs. differentiate?

---

## Output Template: Competitor Content Intelligence Report

Use this format for monthly/quarterly reviews:

---

**Competitor Content Intelligence Report**  
**Date:** [Month Year]  
**Analyst:** [Your Name]

---

### Executive Summary

[2-3 sentences: Key trends, biggest threats, opportunities]

---

### Top Competitor Moves

**1. [Competitor Name]**
- **What they published:** [Title + link]
- **Why it matters:** [Traffic potential, topic gap, quality]
- **Our response:** [Compete / Differentiate / Ignore]

**2. [Competitor Name]**
- [Same format]

**3. [Competitor Name]**
- [Same format]

---

### Content Gaps We Should Fill

| Gap | Priority | Rationale | Proposed Response | Owner | ETA |
|-----|----------|-----------|-------------------|-------|-----|
| [Topic] | High | [Why it matters] | [Blog/video/guide] | [Name] | [Date] |

---

### Trends We're Seeing

- **Trend 1:** [e.g., "More competitors using AI-generated video"]
- **Trend 2:** [e.g., "Shift toward interactive tools vs. static posts"]
- **Trend 3:** [e.g., "Increased focus on ROI calculators / bottom-funnel content"]

---

### Content Quality Benchmark

**Best competitor content this month:**
- [Competitor]: [Title] — Why it's great: [Reason]
- [Competitor]: [Title] — Why it's great: [Reason]

**Bar-raising takeaway:** [What should we emulate?]

---

### Recommendations

1. **Immediate (this week):** [Action]
2. **Short-term (this month):** [Action]
3. **Long-term (this quarter):** [Action]

---

## Tools Summary

| Tool | Use Case | Frequency | Cost |
|------|----------|-----------|------|
| **Exa (web_search_advanced_exa)** | Neural competitor search | Weekly | Included in MCP setup |
| **Google Alerts** | Automated monitoring | Daily digest | Free |
| **RSS (Feedly/Inoreader)** | Real-time feed | Daily | Free–$6/mo |
| **Ahrefs / SEMrush** | Keyword intelligence | Monthly | $99–$199/mo |

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Monitoring Everything
**Problem:** 50 competitors = noise, no signal  
**Fix:** Monitor 5-7 max (Tier 1 daily, Tier 2 weekly)

### ❌ Mistake 2: Reactive Copying
**Problem:** "They published X, we need X too!"  
**Fix:** Use the response playbook (differentiate, don't duplicate)

### ❌ Mistake 3: Analysis Paralysis
**Problem:** Spending 10 hours analyzing, 0 hours creating  
**Fix:** Time-box analysis (30 min weekly max)

### ❌ Mistake 4: Ignoring Quality
**Problem:** Tracking volume, not impact  
**Fix:** Note traffic estimates + engagement (Ahrefs, BuzzSumo)

### ❌ Mistake 5: No Action
**Problem:** Great intel, no follow-through  
**Fix:** Every report must have 1-3 actionable next steps

---

## Advanced: Exa-Powered Competitor Content Workflow

### Weekly Competitive Scan (Automated)

**Step 1:** Define your competitors list in a config file

```json
{
  "competitors": [
    "asana.com/blog",
    "monday.com/blog",
    "clickup.com/blog"
  ],
  "topics": [
    "project management",
    "remote teams",
    "productivity"
  ]
}
```

**Step 2:** Run Exa queries for each competitor + topic combo

```bash
# Example: What has Asana published about "remote teams" in the last 7 days?
npx mcporter call 'exa.web_search_advanced_exa' 'query="remote teams" includeDomains=["asana.com"] startPublishedDate="2026-03-08" numResults=10'
```

**Step 3:** Parse results, extract:
- Title
- URL
- Publish date
- Summary (first 200 chars)

**Step 4:** Aggregate into a Notion database or Google Sheet

**Step 5:** Weekly review + triage (flag 2-3 for response)

---

### Content Gap Analysis (Deep Dive)

**Step 1:** Pull your content inventory

```bash
# Your published content
- "Project Management for Startups" (2026-01-15)
- "Asynchronous Team Communication" (2026-02-01)
```

**Step 2:** Pull competitor content (Exa + Ahrefs)

```bash
npx mcporter call 'exa.web_search_advanced_exa' 'query="project management" includeDomains=["asana.com","monday.com","clickup.com"] startPublishedDate="2025-01-01" numResults=100'
```

**Step 3:** Map topics to a matrix

| Topic | You | Asana | Monday | ClickUp | Gap? |
|-------|-----|-------|--------|---------|------|
| Remote teams | ✅ | ✅ | ✅ | ✅ | No |
| AI in PM | ❌ | ❌ | ✅ | ✅ | **YES** |
| Templates | ❌ | ✅ | ✅ | ✅ | **YES** |

**Step 4:** Prioritize gaps (traffic potential + strategic fit)

**Step 5:** Add to content calendar

---

## Quality Bar

- **Competitor list defined:** 5-7 Tier 1, 5-10 Tier 2
- **Monitoring tools set up:** Exa + Google Alerts + RSS (at minimum)
- **Weekly review cadence:** 30 min, documented
- **Response playbook applied:** Not reactive copying, strategic differentiation
- **Output documented:** Monthly intelligence report with actionable next steps
