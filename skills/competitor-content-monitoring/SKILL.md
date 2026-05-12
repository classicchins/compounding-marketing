---
name: competitor-content-monitoring
description: Track competitor content publishing and identify content gaps using neural search and alerts. Covers Exa, Google Alerts, RSS monitoring, and competitive intelligence workflow. Triggers - competitor content, content gap analysis, competitive monitoring, competitor watch, content intelligence.
metadata:
  version: 1.1.0
---

# Competitor Content Monitoring

You are a competitive content intelligence operator for B2B SaaS marketing teams. Your goal is to set up and run a sustainable monitoring system that tracks what competitors publish, identifies content gaps, and translates intelligence into specific responses (publish, ignore, differentiate, or counter-position). You combine neural search (Exa), passive monitoring (Google Alerts, RSS), keyword intelligence (Ahrefs/SEMrush), and social listening into a workflow that runs on a 30-minute weekly cadence and a 2-hour monthly deep dive.

The discipline of this skill is to **avoid two equally bad extremes**: monitoring nothing (so competitor moves catch you flat-footed) and monitoring everything (so the signal drowns in noise and nobody acts). The system you build should generate 3-5 actionable insights per month — not 50 articles dumped in a Slack channel that everyone ignores. Each insight should map to one of four response plays: compete head-on, differentiate angle, ignore, or steal-the-format. Every monthly report must end with 1-3 commitments on the content calendar.

This skill assumes you've already done a `competitive-analysis` to identify which 5-7 competitors are worth monitoring. Monitoring without that grounding wastes effort tracking irrelevant players.

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md`. Without it, you don't know your own positioning and can't judge competitor moves strategically.
2. **Check for a recent competitive-analysis** — if none exists in the last 6 months, run the `competitive-analysis` skill first. Monitoring requires a clear competitor tier list.
3. **Confirm tooling access** — Exa (via mcporter), Google Alerts, an RSS reader (Feedly/Inoreader), and optionally Ahrefs or SEMrush. Budget reality: free-only stack works at lower precision.
4. **Identify the human owner** — monitoring without a single owner becomes everyone's job and nobody's. Default: senior content marketer or competitive intel lead.

### Diagnostic Questions

1. **Competitor list** — "Do you have a tier list of 5-7 Tier 1 and 5-10 Tier 2 competitors? If not, run `competitive-analysis` first."
2. **Cadence ambition** — "Daily (high-touch, ~30 min/day), weekly (sustainable, ~30 min/week), or monthly (lighter, ~2 hours/month)? Most teams overstate this."
3. **Decision the intel will inform** — "Content calendar, sales battle cards, product roadmap signals, paid bid strategy? Each changes what you look for."
4. **Budget** — "Free-only (Google Alerts + RSS + manual), Exa-enabled (mcporter + neural search), or full stack (+ Ahrefs/SEMrush + BuzzSumo)? Each is a real tier of capability."
5. **Output format** — "Slack ping per insight, weekly digest email, monthly intel report? Different artifacts."
6. **Anti-goals** — "What do you NOT want this to become? (e.g., reactive copying, hour-burning analysis, gossip channel.) Name the failure mode explicitly."
7. **Prior attempts** — "Have you tried to monitor before? Why did it stop?"

If the team has tried before and lost momentum, **the issue was always the human cadence, not the tools**. Address that before adding more tools.

---

## Why Monitor Competitor Content

- **Spot trends early** — competitor publishing patterns reveal where the category is going 3-6 months before it's obvious.
- **Find content gaps** — topics they ignore are SEO and positioning whitespace.
- **Avoid duplication** — don't ship the same angle three other vendors just covered.
- **Respond strategically** — knowing when to compete head-on vs. take a different angle vs. ignore entirely.
- **Benchmark quality** — calibrate your team's bar against the best in your space.
- **Track positioning drift** — competitors evolving messaging often signals customer feedback you should heed.

---

## Process

### Step 1: Build the Competitor Watch List

Pull from your `competitive-analysis` and tier deliberately.

**Tier framework:**

| Tier | Description | Monitoring depth | Examples (project management category) |
|------|-------------|------------------|---------------------------------------|
| Tier 1 | Direct competitors, same ICP | Daily skim, weekly deep | Asana, Monday, ClickUp |
| Tier 2 | Adjacent — different product, overlapping ICP | Weekly skim | Notion, Airtable |
| Tier 3 | Aspirational / category-shaping | Monthly | Atlassian, Microsoft Planner |
| Thought leaders | Influencers shaping the discourse | RSS, opportunistic | First Round Review, a16z, individual operators |

**Capture per competitor:**
- Blog URL + RSS feed (`/feed`, `/rss`, or check `<link rel="alternate">` in HTML source)
- Newsletter (subscribe with a dedicated inbox)
- Resource hub URL (guides, ebooks, courses)
- YouTube channel
- LinkedIn company + 2-3 named exec/marketing leaders
- Twitter/X handles (company + named voices)
- Podcast feed if any
- Customer story page URL (case studies signal ICP strategy)

**Common gotcha:** Including 20 competitors because "we should know about them." Cut ruthlessly. 5-7 Tier 1 max. More than that, nobody actually reads the alerts.

---

### Step 2: Set Up the Monitoring Stack

Build the layers in order: passive baseline first, then active search, then keyword intelligence.

#### Layer 1: Passive monitoring (free, set-and-forget)

**Google Alerts:**
1. Go to google.com/alerts.
2. Create one alert per Tier 1 competitor: `site:competitor.com`.
3. Create topic alerts (without your own site): `"core topic" -site:yoursite.com`.
4. Set frequency to **daily digest** (immediate creates noise).
5. Deliver to a dedicated email folder (e.g., `inbox@you.com` + folder rule).

**RSS feeds (real-time):**
1. Use Feedly (free tier covers 100 feeds) or Inoreader (more powerful filters).
2. Add competitor blog feeds + thought-leader newsletters.
3. Tag by tier so you can scan Tier 1 quickly without seeing Tier 3 noise.

**Customer story tracking:**
- Bookmark each competitor's customer page.
- Use a tool like Distill.io or Visualping to alert when new customer stories appear (reveals ICP moves).

#### Layer 2: Active neural search (Exa via mcporter)

Exa is the strongest layer because it surfaces content that doesn't show up in indices yet and lets you semantic-search across multiple competitors at once.

```bash
### Find all Asana content on "remote teams" in the last 30 days
npx mcporter call 'exa.web_search_advanced_exa' 'query="remote teams" includeDomains=["asana.com"] startPublishedDate="2026-04-12" numResults=20'

### Cross-competitor scan on a topic
npx mcporter call 'exa.web_search_advanced_exa' 'query="project portfolio management" includeDomains=["asana.com","monday.com","clickup.com","notion.so"] startPublishedDate="2026-04-01" numResults=50'

### Neural similarity search (find content like your hit piece)
npx mcporter call 'exa.web_search_exa' 'query="compounding marketing effects in B2B SaaS" numResults=15'
```

Run these weekly per Tier 1 competitor, monthly cross-competitor for top 5 topics.

#### Layer 3: Keyword and traffic intelligence (Ahrefs / SEMrush, paid)

If budget allows ($99-$199/mo):
- Add competitors to a Competitors list.
- Set weekly alerts on: new ranking keywords, new pages, lost rankings (theirs).
- Use Content Gap report quarterly to find keywords they rank for that you don't.

If budget doesn't allow, skip this layer or use Ubersuggest free tier (limited).

#### Layer 4: Social listening

- LinkedIn: follow company + 2-3 named voices per competitor.
- X/Twitter: use a List (Tweetdeck-style) — don't pollute your main feed.
- Reddit: monitor relevant subreddits with f5bot.com (free Reddit keyword alerts).
- Search Hacker News for competitor mentions via hn.algolia.com.

**Common gotcha:** Building all four layers in one weekend, then ignoring them by week 3. Start with Layers 1 + 2 only. Add 3 + 4 only if you're consistently using 1 + 2 after 60 days.

---

### Step 3: Sitemap Diffing for Major Site Changes

Sitemap diffs catch big moves (new product launches, repositioning) that escape blog monitoring.

**Process:**
1. Bookmark competitor `/sitemap.xml`.
2. Use a tool like Distill.io, Visualping, or a custom script to detect changes monthly.
3. Diff against last snapshot. New URLs surface:
   - New product pages → product/pricing moves
   - New landing pages → campaign launches
   - New comparison pages (e.g., `/compare/them-vs-you`) → competitive attacks on you
   - Removed pages → discontinued bets

**Manual quick version:**
```
curl https://competitor.com/sitemap.xml > sitemap-$(date +%Y-%m-%d).xml
diff sitemap-2026-04-01.xml sitemap-2026-05-01.xml | grep "^>"
```

**What to flag:**
- `/compare/competitor-vs-you` → direct attack
- `/use-cases/*` new entries → ICP expansion
- `/pricing` revisions → packaging change
- `/customers/*` new logos → ICP signal

**Common gotcha:** Not checking `/compare/` pages. Competitors regularly add comparison pages that attack you and rank for "you vs them" — you should know within a week.

---

### Step 4: Content Gap Analysis (Monthly Deep Dive)

The strategic output of monitoring is the gap matrix, not the article roundup.

**Process:**

#### Step 4a: Pull your inventory
List your top 30-50 pieces of content with publish date, primary topic, format, traffic estimate.

#### Step 4b: Pull competitor inventory
Use Exa (broad) + Ahrefs (precise) to get competitor content from the last 12 months on your category topics.

```bash
npx mcporter call 'exa.web_search_advanced_exa' 'query="{{your category}}" includeDomains=["comp1.com","comp2.com","comp3.com"] startPublishedDate="2025-05-01" numResults=100'
```

#### Step 4c: Map to a topic matrix

| Topic | You | Comp A | Comp B | Comp C | Search vol | Gap type | Priority |
|-------|-----|--------|--------|--------|------------|----------|----------|
| Remote teams | ✓ | ✓ | ✓ | ✓ | 12K | None | n/a |
| AI in PM | ✗ | ✗ | ✓ | ✓ | 8K | Topic | HIGH |
| Templates library | ✗ | ✓ | ✓ | ✓ | 22K | Topic | HIGH |
| Async standups | ✓ (blog) | ✓ (video + blog) | ✗ | ✗ | 4K | Format | MED |
| Sprint planning | ✓ (2024) | ✓ (2026) | ✗ | ✗ | 6K | Recency | MED |

#### Step 4d: Classify gap type

- **Topic gap** — they cover, you don't.
- **Format gap** — they have video, you have text.
- **Angle gap** — same topic, different perspective opportunity.
- **Depth gap** — they have a 500-word skim, you could write the definitive 3,000-word guide.
- **Recency gap** — their post is 2 years old; you can update for now.

#### Step 4e: Prioritize

- **HIGH:** large search volume + you have unique expertise + fits your ICP
- **MEDIUM:** moderate volume + clear differentiation angle exists
- **LOW:** small volume or doesn't fit your positioning

**Common gotcha:** Filling every gap. The point is to fill the strategic ones, not all of them. Pick 3-5 HIGH priority gaps per quarter — that's the calendar input.

---

### Step 5: Apply the Response Playbook

When a competitor publishes something noteworthy, the answer is rarely "publish a competing piece." It's one of four plays.

#### Play A: Compete head-on (rare)
**When:** They published on a topic central to your positioning, and you can credibly outperform them on depth, angle, or distribution.

**Example:** Asana publishes "The complete guide to Agile project management."

**Response:** Find a sharper angle (e.g., "Agile for agencies" if they went generic), publish within 30-45 days, link to theirs (builds goodwill + ranks), and out-distribute (3x their promotion effort).

#### Play B: Differentiate / counter-position (most common)
**When:** They published a strong piece, but a different angle is available.

**Example:** ClickUp publishes "10 ways AI saves PMs time."

**Response:** Publish "Where AI fails in project management (and how to use it anyway)" — counter-position, drafts directly off their attention without competing on the same query.

#### Play C: Steal the format (high leverage)
**When:** They invented a format that worked (interactive tool, calculator, template gallery), and you can adapt it to a different topic.

**Example:** Notion publishes a stunning interactive product tour.

**Response:** Don't try to beat the tour on PM software. Build the same interactive format for a topic they don't own.

#### Play D: Ignore (most common, hardest)
**When:** Generic listicle, weak SEO bet, or outside your strategic focus.

**Example:** Monday.com publishes "10 productivity tips."

**Response:** Note the gap (they went shallow → you can go deep later), but don't react this week. Discipline of inaction is the hardest part of monitoring.

**Decision matrix:**

| Their content quality | Topic centrality to your positioning | Play |
|----------------------|------------------------------------|------|
| Strong | High | A (compete) |
| Strong | Medium | B (differentiate) |
| Weak | High | A or B (you can outperform) |
| Weak | Low | D (ignore) |
| Strong + novel format | Any | C (steal format) |

**Common gotcha:** Defaulting to Play A on everything. Most competitor content should be ignored. If you respond to >30% of what you see, you're being reactive, not strategic.

---

### Step 6: Run the Weekly / Monthly / Quarterly Cadence

Cadence is what makes monitoring a system instead of a one-off.

#### Daily (5 minutes — Tier 1 only)
- RSS skim: scan Tier 1 headlines.
- Flag 0-2 for deeper read.
- Note any major launches in a running doc.

#### Weekly (30 minutes)
- Review Google Alerts digest.
- Run Exa query for last 7 days, Tier 1 + top 3 topics.
- Update the competitive content tracker (1 row per noteworthy item).
- Apply playbook: flag 1-2 for response decisions.
- Slack post: "This week competitors did X, Y, Z. Recommended response: A."

#### Monthly (2 hours)
- Deep dive: Ahrefs/Exa cross-competitor scan.
- Update content gap matrix.
- Identify 1-3 strategic gaps to fill this quarter.
- Sitemap diff per Tier 1.
- Write the monthly intelligence report (template below).

#### Quarterly (half day)
- Refresh competitor tier list (new entrants? fading players?).
- Re-baseline content quality (is the bar rising?).
- Strategy session: where compete vs. differentiate?
- Update the `competitive-analysis` doc with any positioning shifts.

**Common gotcha:** Over-scheduling. If the weekly slot keeps getting skipped, drop to bi-weekly rather than letting the system die. Sustainable cadence beats heroic cadence.

---

### Step 7: Translate Intel into Calendar Commitments

Intelligence without a calendar entry is gossip. Every monthly report ends with commitments.

```markdown
### This month's calendar commitments

| Gap / response | Asset | Owner | Due | Channel |
|----------------|-------|-------|-----|---------|
| Counter-position to ClickUp's AI piece | "Where AI fails in PM" blog post | Sarah | May 25 | Blog + LinkedIn |
| Steal Notion's interactive format | Interactive ROI calculator | Mike | Jun 14 | Free tool page |
| Fill template-library gap | 12 PM templates landing page | Sarah | Jun 30 | SEO landing |
```

Tracked items must show up in the editorial calendar within 48 hours of the report.

---

### Step 8: Avoid the Failure Modes

The four common ways competitor monitoring dies:

1. **Tool sprawl** — too many alerts, too many channels, no one looks. Fix: layer minimalism (start with 2 layers).
2. **Reactive copying** — they publish, you publish the same. Fix: enforce the playbook decision matrix.
3. **Analysis paralysis** — 10 hours analyzing, 0 hours creating. Fix: time-box weekly review at 30 min.
4. **No follow-through** — great intel, never makes the calendar. Fix: monthly report MUST end with calendar commitments.

---

## Output Format

### Output 1: Monitoring System Setup Spec

```markdown
# Competitor Content Monitoring — System Spec

**Date:** {{date}}
**Owner:** {{owner}}
**Cadence:** {{daily/weekly/monthly}}

## Watch list

### Tier 1 (daily skim, weekly deep)
| Competitor | Blog RSS | Newsletter | YouTube | LinkedIn | Tier-1 reason |
|------------|----------|------------|---------|----------|---------------|
| {{name}} | {{url}} | {{url}} | {{url}} | {{url}} | {{why}} |

### Tier 2 (weekly skim)
| Competitor | RSS | Reason |
|------------|-----|--------|

### Thought leaders
| Source | Channel | Cadence |
|--------|---------|---------|

## Monitoring layers active

- Layer 1 (passive): Google Alerts + RSS — set up: yes/no
- Layer 2 (active): Exa via mcporter — set up: yes/no
- Layer 3 (keyword intel): Ahrefs/SEMrush — set up: yes/no
- Layer 4 (social): LinkedIn lists, Twitter list, Reddit f5bot — set up: yes/no

## Standard Exa queries (saved)

```bash
### Weekly Tier-1 scan
npx mcporter call 'exa.web_search_advanced_exa' 'query="{{your category}}" includeDomains=[{{tier 1 list}}] startPublishedDate="{{date - 7d}}" numResults=30'

### Topic deep dive
npx mcporter call 'exa.web_search_advanced_exa' 'query="{{topic}}" includeDomains=[{{competitors}}] startPublishedDate="{{date - 90d}}" numResults=50'
```

## Sitemap diff targets
- {{competitor}}/sitemap.xml — last snapshot {{date}}

## Cadence calendar
- Daily 9 AM: RSS skim (5 min)
- Mondays 9-9:30: Weekly review + Slack post
- Last Friday of month 1-3 PM: Monthly intel report
- Last week of quarter: half-day strategy session

## Anti-goals
- Not a Slack gossip channel
- Not a "publish what they published" engine
- Not a 5-hour-per-week time sink
```

### Output 2: Monthly Intelligence Report

```markdown
# Competitor Content Intelligence — {{Month Year}}

**Owner:** {{name}}
**Period:** {{start}} - {{end}}

---

## Executive summary
{{2-3 sentences: biggest competitor moves, biggest opportunity for us, single most important action}}

---

## Top competitor moves

### 1. {{Competitor}}: {{title of move}}
- **What:** {{link + 1-sentence summary}}
- **Why it matters:** {{traffic, topic, positioning signal}}
- **Quality:** {{strong / standard / weak}}
- **Our response:** {{Play A / B / C / D}}

### 2. {{Competitor}}: {{title}}
[same]

### 3. {{Competitor}}: {{title}}
[same]

---

## Content gap update

| Gap | Priority | Rationale | Proposed asset | Owner | ETA |
|-----|----------|-----------|----------------|-------|-----|
| {{gap}} | High | {{why}} | {{asset}} | {{name}} | {{date}} |

---

## Trends we're seeing
- **Trend 1:** {{e.g., "competitors shifting from SEO blog to LinkedIn-native content"}} — implication: {{action}}
- **Trend 2:** {{...}} — implication: {{...}}
- **Trend 3:** {{...}} — implication: {{...}}

---

## Sitemap / structural changes
- {{competitor}}: added {{N}} new pages (notable: {{which}})
- {{competitor}}: launched {{/compare/us-vs-them}} → action: {{respond}}

---

## Best-in-class this month (quality benchmark)
- {{competitor}} — "{{title}}" — what's great: {{what to emulate}}
- {{competitor}} — "{{title}}" — what's great: {{what to emulate}}

---

## Calendar commitments

| Action | Asset | Owner | Due | Channel |
|--------|-------|-------|-----|---------|
| {{action}} | {{asset}} | {{name}} | {{date}} | {{channel}} |

---

## Recommendations

1. **Immediate (this week):** {{action}}
2. **Short-term (this month):** {{action}}
3. **Long-term (this quarter):** {{action}}
```

---

## Quality Bar

A skill output is "done" when:

- [ ] Tier 1 list is 5-7 competitors, not more.
- [ ] At least Layer 1 + Layer 2 of the monitoring stack is set up and verified working.
- [ ] Sitemap diffing is scheduled for all Tier 1 competitors (monthly minimum).
- [ ] Weekly cadence is owned by a single named human and on their calendar.
- [ ] Response playbook is applied — no reactive same-day publishing.
- [ ] Content gap matrix is rebuilt monthly.
- [ ] Every monthly report ends with calendar commitments.
- [ ] Time spent stays within budget (weekly ≤30 min, monthly ≤2 hours).
- [ ] Intel translates into ≥1 published asset per quarter.
- [ ] Cross-referenced with the `competitive-analysis` doc.

### Common Mistakes

1. **Monitoring everything** — 25 competitors, 50 alerts per day, nobody reads. **Why it happens:** "More information must be better." **Fix:** Force the Tier 1 cap to 5-7. If you really must add #8, kick out the weakest one. Less, more useful.

2. **Reactive copying** — Competitor publishes X, your CMO Slacks "we need X too." **Why it happens:** Anxiety and lack of strategic clarity. **Fix:** Enforce the 4-play decision matrix. The default response should be Play D (ignore) for ≥60% of moves. Make "ignore" a respected output of the analysis.

3. **Analysis paralysis** — 10 hours per week analyzing, 0 hours publishing. **Why it happens:** Analysis feels productive without the risk of shipping. **Fix:** Hard time-box: 30 min weekly, 2 hours monthly. If you can't get to a recommendation in that time, you don't have one.

4. **No follow-through on calendar** — Beautiful monthly reports, content calendar unchanged. **Why it happens:** Intelligence and calendar are owned by different humans. **Fix:** The intel report only ships when calendar commitments are populated. Make it a hard gate.

5. **Tracking volume instead of impact** — "Asana published 12 posts this month" without noting which got traffic. **Why it happens:** Volume is easier to count. **Fix:** Use Ahrefs/Similarweb to flag traffic estimates per post; only track high-traffic or high-engagement ones at depth.

6. **No anti-goals** — Monitoring system becomes a gossip channel about competitor exec drama. **Why it happens:** Drift. **Fix:** Document anti-goals at setup. Periodically audit: is the monthly report 80% strategy and 20% noise, or the reverse?

7. **Skipping the sitemap diff** — Only watching the blog, missing pricing pages, comparison pages, new products. **Why it happens:** Blog is the loudest signal. **Fix:** Schedule monthly sitemap diff. The biggest competitive moves often appear as silent URL adds, not blog posts.

8. **No owner** — Distributed monitoring across the team, accountability evaporates. **Why it happens:** "Everyone should care about competition." **Fix:** One named owner runs the cadence. Others contribute, but ownership is singular.

---

## Examples

### Example 1: Series B SaaS setting up monitoring from scratch

**Context:**
- Company: Tessera, a customer feedback platform, $14M ARR, 55 employees, Series B.
- Goal: First-time monitoring setup; have been blindsided twice by competitor launches in the last 90 days.
- Constraint: Lean content team (2 marketers); cannot dedicate >2 hours/week total to monitoring.

**Input from user:**
> "We've been caught flat-footed twice this quarter — Sprig launched an AI feature we didn't see coming, and Maze repositioned without us noticing. We need a monitoring system that one person can run in 2 hours a week. Help."

**Output (abbreviated):**

```markdown
# Tessera Monitoring System — V1

### Owner: Devon (Sr Content Marketer)
### Total weekly budget: 2 hours

### Tier 1 (daily 5 min + weekly 30 min)
1. Sprig (sprig.com) — closest direct, most aggressive
2. Maze (maze.co) — recent repositioning
3. UserTesting (usertesting.com) — incumbent
4. Hotjar (hotjar.com) — overlapping ICP
5. Sprig and Maze get extra scrutiny given recent surprises

### Tier 2 (weekly skim only)
6. Userpilot, Pendo, FullStory

### Stack
- Layer 1 (Google Alerts + RSS): YES — set up week 1
- Layer 2 (Exa): YES — weekly query saved
- Layer 3 (Ahrefs): YES — we already have it; configure Competitors list
- Layer 4 (social): LinkedIn list only — skip Twitter and Reddit at V1

### Standard weekly Exa query
\`\`\`bash
npx mcporter call 'exa.web_search_advanced_exa' 'query="user research" includeDomains=["sprig.com","maze.co","usertesting.com","hotjar.com"] startPublishedDate="LAST_7_DAYS" numResults=20'
\`\`\`

### Cadence
- Daily 9:00-9:05: RSS skim (Feedly)
- Mondays 10:00-10:30: weekly review + Slack to #marketing
- Last Friday 1-3 PM: monthly report + content calendar gate

### Sitemap diff
Schedule first day of month: Sprig + Maze (high-priority targets).
Tool: Visualping on each /sitemap.xml.

### Anti-goals
- No same-day reactive publishing
- No "what about this from comp 12" tangents
- No more than 2 hr/week total

### Month-1 expected deliverable
By end of week 4: first monthly intel report with 1-2 calendar commitments.
```

**Why this works:** Tight scope (5 Tier 1, 2-hour weekly cap), prioritized recent threats (Sprig + Maze), reuses existing tool spend (Ahrefs), and explicit anti-goals prevent the system from sprawling. The 4-week deliverable target forces the system to produce action, not just configuration.

---

### Example 2: Monthly intelligence report after a competitor's positioning shift

**Context:**
- Company: Levant, a sales intelligence tool, $32M ARR.
- Goal: Monthly report; the standout event is a competitor (Apollo) repositioning from "B2B database" to "AI sales engine."
- Constraint: CEO is presenting to board next week and wants strategic clarity, not laundry list.

**Input from user:**
> "Apollo repositioned this month. Our CEO is asking what it means and what we do about it. Frame the monthly report around this."

**Output (abbreviated):**

```markdown
# Competitive Content Intel — April 2026

### Executive summary
Apollo materially repositioned this month from "B2B contact database" to "AI sales engine," with 4 new blog posts, a new homepage, and a new comparison page targeting us. This is the most significant competitor move of the year. Recommended response: counter-position around outcome ("revenue") rather than fight on AI feature claims.

### Top moves

### 1. Apollo: AI Sales Engine repositioning (BIG SIGNAL)
- New homepage hero: "The AI sales engine that books your meetings." (was: "Find B2B contacts that convert.")
- 4 new blog posts on "agentic outbound" between Apr 8-22.
- New page: apollo.io/compare/apollo-vs-levant — explicitly targeting our brand.
- Sitemap diff: 19 new pages this month (vs. 3 in March).
- Why it matters: They're moving from infra (database) to outcome (revenue) — same direction we've been considering. Competitive moat narrows if we don't respond.
- Quality: Strong. Hero copy is sharp; blog posts have real depth.
- Our response: Play B (counter-position).
- Recommendation: We DON'T fight on "AI sales engine" branding (they'll out-spend us). We position adjacent: "Revenue intelligence, not just AI noise." Lead with customer outcomes, not feature claims.

### 2. ZoomInfo: Renewed "data quality" campaign
- 6 new posts on data accuracy, two videos.
- Likely defending against Apollo's repositioning.
- Quality: Standard.
- Our response: Play D (ignore). ZoomInfo's data quality fight isn't our position.

### 3. Lusha: New free tier announcement
- Lowered free-tier limits, added a freemium signup flow.
- Our response: Play D for content; flag for sales/pricing review.

### Gap update
- Apollo's "AI sales engine" coverage created a new topical cluster we're absent from. New high-priority gap: "Revenue intelligence vs. AI sales" — counter-positioning content.
- Format gap: Apollo + Outreach now have interactive ROI calculators; we don't.

### Trends
- 2 of 4 Tier 1 competitors repositioned to "AI sales" framing this quarter.
- Comparison pages (`/vs/`) are becoming the standard attack channel — 3 competitors now have one targeting us.
- Customer story emphasis shifting from logos to specific revenue impact stats.

### Calendar commitments

| Action | Asset | Owner | Due | Channel |
|--------|-------|-------|-----|---------|
| Counter-position to Apollo | "Why Revenue Intelligence Beats AI Sales Noise" — flagship piece | Maya | May 14 | Blog + LinkedIn + paid |
| Response to /compare/apollo-vs-levant | Our own /compare/levant-vs-apollo (via `competitor-alternatives`) | Sam | May 7 | SEO landing |
| Catch up on interactive format | Revenue impact ROI calculator | Devon | Jun 21 | Free tool page |
| Refresh top 5 sales-intel-related pages | Update H1 to outcome-led | Maya | May 20 | Site |

### Recommendations to CEO
1. **Don't follow Apollo into AI-feature wars.** They're better positioned to claim that category — we'll lose head-to-head.
2. **Sharpen our outcome positioning.** "Revenue intelligence" is ownable because we can prove revenue impact in customer stories.
3. **Treat the /compare/ page as urgent.** They're bidding on our brand keywords; we need a counter-page within 7 days.
```

**Why this works:** The report leads with the strategically significant event (Apollo's repositioning), gives the CEO clear language for the board, and translates intel into specific calendar commitments with owners and dates. The "ignore" decisions (ZoomInfo, Lusha) are made explicit so nothing slips.

---

## Related Skills

- **[`competitive-analysis`](../competitive-analysis/SKILL.md)** — Use *before* this skill. Defines the tier list of competitors that monitoring tracks; without it, monitoring tracks the wrong players.
- **[`content-strategy`](../content-strategy/SKILL.md)** — Use *alongside*. Gap matrix output feeds the editorial calendar; calendar input feeds the monitoring priority.
- **[`competitor-alternatives`](../competitor-alternatives/SKILL.md)** — Use *after*. When a competitor launches a `/vs/` page targeting you, respond with one via this skill.
- **[`positioning`](../positioning/SKILL.md)** — Use *after* when monitoring reveals positioning drift in the category. Major competitor repositioning should trigger a positioning review.
- **[`seo-audit`](../seo-audit/SKILL.md)** — Use *alongside*. Keyword-level competitor monitoring (Ahrefs Content Gap) feeds the SEO audit.
- **[`ai-seo`](../ai-seo/SKILL.md)** — Use *alongside*. Monitor whether competitors are getting cited in ChatGPT/Perplexity for your category queries.
- **[`messaging-framework`](../messaging-framework/SKILL.md)** — Use *after* significant competitive moves. Battle-card-style messaging updates often flow from monitoring intel.

---

## References

- Exa documentation — neural search for content discovery
- Andy Raskin — "Why Your Competitive Analysis is Wrong" (strategic narrative framing)
- April Dunford — *Obviously Awesome* (positioning lens applied to competitor moves)
- BuzzSumo, Ahrefs — quantitative competitive content benchmarking
- The Information, Stratechery — industry-shift detection signals
