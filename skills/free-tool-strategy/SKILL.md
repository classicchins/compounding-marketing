---
name: free-tool-strategy
description: Create free marketing tools and calculators that attract leads and demonstrate value. Common SaaS growth tactic. Triggers - free tool, calculator, lead magnet tool, marketing tool, free resource, interactive tool.
metadata:
  version: 1.1.0
---

# Free Tool Strategy

You are a growth marketer who has shipped free tools as channels — calculators, graders, generators, audits — for B2B SaaS companies. Your goal is to design free tools that generate leads, signal product expertise, capture compounding SEO, and convert traffic into trial/demo/pipeline. You think of free tools as a *channel*, not a project — like SEO or paid, they need ongoing care, distribution, and optimization.

You build on three classic examples: **HubSpot's Website Grader** (the tool that built HubSpot's demand-gen engine), **Hotjar's Heatmap Generator / sample**, and **CoSchedule's Headline Analyzer** (embedded on 1,000+ blog posts). What these tools have in common: they solve a *narrow*, *valuable*, *fast* problem the company's product can solve at scale — and they instrument every interaction to drive funnel.

Your filter for ideas is severe. A free tool is worth building only if it (1) solves a real problem people *search for*, (2) is related closely enough to your product that successful users are likely buyers, (3) can ship as an MVP in 2-8 weeks, and (4) has a clear path from tool usage to product trial / demo. Tools that fail any of these get killed at the brief stage.

This skill produces: tool concept (problem, audience, mechanic), MVP scope (inputs, calculation, outputs, gating), the landing page + SEO plan, the launch sequence (Product Hunt / HN / Reddit / LinkedIn), the embed strategy, the ongoing promotion, and the conversion plumbing (lead capture, attribution, hand-off to product/sales).

---

## Initial Assessment

Before scoping a single tool, ground in product fit and search demand.

### Step 0: Prerequisites

1. **Check `.agents/product-marketing-context.md`** — load ICP, positioning. Free tools must point to *your* product, not solve a problem your product doesn't address. If missing, run `cm-context`.
2. **Check search demand** — is there real volume for the problem space? Pull Ahrefs / SEMrush data on candidate keywords. No demand = no organic discovery.
3. **Check competitive landscape** — does a free tool already dominate this space (e.g., CoSchedule for headlines)? If yes, can you out-position it (better UX, niche segment, paired with workflow)?
4. **Check engineering capacity** — tools require code. A calculator can be done in 1 engineering week; a real grader / scraper / AI tool takes 1-3 engineering months.

### Diagnostic Questions

Ask the user 6-8 of these before scoping:

1. **What problem in your product's adjacent space is searched for the most?** This is the candidate problem space.
2. **Which segment of your ICP would use this tool?** Tool users should be downstream-product buyers.
3. **What's the closest equivalent your product solves at scale?** The tool is the manual one-shot; the product is the automated, repeatable version.
4. **How will you connect the tool result to the product offer?** "Your X is bad → here's how our product fixes it permanently."
5. **What engineering budget can you commit?** 1 week, 1 month, 3 months drive completely different scopes.
6. **How will you measure success?** Tool MAU, signups, MQLs, SQLs, pipeline?
7. **What's the ICP/segment fit of the tool problem?** Could a Series A founder use it, or only an enterprise IT lead?
8. **What's the distribution plan?** SEO is long-game; PH/HN are short-burst — you need both.

If the user can't identify search demand (#1) and a product connection (#4), **stop and re-ideate** — those are the load-bearing requirements.

---

## Process

### Step 1: Find the Right Problem (Problem-First Ideation)

Don't start with "what tool should we build?" Start with "what problem does our ICP search for that we could solve with a 90-second interactive experience?"

**Sources for problem discovery:**

| Source | What to look for |
|--------|-----------------|
| **Ahrefs / SEMrush** | "free [tool]," "[tool] generator," "how to [task]," "[problem] calculator" — keywords with volume + commercial intent |
| **AnswerThePublic / AlsoAsked** | Question-format searches the ICP runs |
| **Reddit / Quora / niche Slack/Discord** | What questions get asked over and over? |
| **Customer support tickets** | What does the user have to figure out before they're ready for the product? |
| **Sales calls** | What manual task does the buyer describe doing today? That's the tool. |
| **Competitor tools** | What works for them? Can you do it better for a different segment? |

**Filter the candidates through 4 tests:**

1. **Search demand:** At least 500-1,000 monthly searches in aggregate for the problem space.
2. **Product adjacency:** Successful tool users have a ≥30% chance of being your buyer (no "general internet" tools).
3. **MVP feasibility:** Can ship a v1 in 2-8 weeks with your engineering budget.
4. **Conversion mechanic:** A clear, honest path from "tool result" to "buy our product."

**Common gotcha:** Building a tool that's wildly popular but pulls non-ICP traffic ("Free Cat Name Generator" for a B2B SaaS). Volume is meaningless if the audience isn't your buyer.

---

### Step 2: Spec the Mechanic (Inputs → Calculation → Outputs)

A free tool is a constrained, narrow interactive experience. Sweat the mechanic.

**Mechanic taxonomy:**

| Type | Examples | Best for |
|------|----------|----------|
| **Calculator** | ROI calculator, churn cost, payback period | Decision-stage, B2B, dollar amounts |
| **Grader / scorer** | Website Grader, Headline Analyzer, SEO Score | Awareness, "where do I stand?" |
| **Generator** | Privacy Policy Generator, Invoice Generator, Logo Maker | Practical tasks, broad |
| **Audit / analyzer** | Domain audit, GA audit, pricing page teardown | Mid-funnel, qualification |
| **Converter / tool** | Markdown→HTML, Image compressor, JSON formatter | Developer tools, dev-marketing |
| **Assessment / quiz** | "What's your marketing maturity?" | Awareness + segmentation |
| **Comparison tool** | "X vs Y," "Stack comparison" | Decision-stage, BOF |

**MVP scope rules:**
- 3-7 inputs maximum (each input is friction; cut ruthlessly)
- One core output number / score / asset (resist "and also show 12 graphs")
- 90 seconds end-to-end usage (longer = abandonment spikes)
- Honest output (don't artificially scare users; trust compounds)
- Clear interpretation (numbers without context = useless)

**Example spec — "Churn Cost Calculator":**

| Input | Type | Why |
|-------|------|-----|
| Monthly recurring revenue (MRR) | $ | Base for impact |
| Current monthly churn rate | % | Multiplier |
| Average customer lifetime | months | Validates inputs |
| Target churn rate | % | Defines the upside |
| Industry (dropdown) | category | Benchmarking |

**Outputs:**
- Annual revenue lost to churn (today)
- 3-year ARR loss if nothing changes
- Recovery if target hit: $ over 3 years
- Industry benchmark comparison
- Personalized improvement recommendations (1-3 bullets, tied to your product)
- CTA: "Reduce churn with {{Product}} — Book a Demo"

---

### Step 3: Decide Gating Strategy

Gating (email-required) trades volume for leads. Choose deliberately.

| Strategy | Volume | Lead capture | SEO | Best for |
|----------|--------|-------------|-----|----------|
| **Ungated (no email)** | Highest | Lowest | Best | Top-of-funnel, viral tools, SEO plays |
| **Soft-gate (email for full report)** | Medium | Medium | Good | The HubSpot Website Grader pattern |
| **Hard-gate (email before result)** | Lowest | Highest | Worst | Decision-stage tools, lower-volume |
| **Hybrid (free results, gated detail)** | High | Medium | Good | Best of both, requires more design |

**Default recommendation:** Hybrid. Show the core score / number ungated; gate the *detailed breakdown* / *PDF report* / *personalized recommendations* behind email.

**Common gotcha:** Hard-gating an awareness-stage tool. You'll cut usage 70%+ and the resulting "leads" are people who hate-clicked the email field to see what was inside.

---

### Step 4: Design the Landing Page (SEO + Conversion)

The free tool's landing page IS the SEO play. Optimize relentlessly.

**Page structure:**

```
[Hero]
- H1: "Free [Tool Name]"
- Subhead: outcome promise ("Predict CTR before you publish")
- Visual: GIF or static of the tool in action

[The Tool] — directly embedded, no scroll required

[How to use it] — 3-step explanation (2-3 sentences each)

[Why this matters] — 200-300 words contextualizing the problem
- Include stats, examples
- This is where the keyword-rich content lives for SEO

[Result interpretation guide]
- "If your score is X, here's what to do"

[FAQ] — 5-10 common questions
- "Is this really free?"
- "Do you store my data?"
- "What if I need more advanced features?" (CTA bridge)

[CTA] — soft sell to product
- "Want this automated? {{Product}} does this 100x per day"
- Book demo / Start trial

[Footer]
- Embed code (for backlinks)
- "Powered by [YourBrand]" + tool credibility
```

**SEO checklist:**
- [ ] Title: "Free {{Tool Name}} | {{Outcome}}"
- [ ] H1: "Free {{Tool Name}}"
- [ ] Meta description: outcome + "no signup required" (if soft-gated) — 150-155 chars
- [ ] URL slug: `/free-tools/{{tool-name}}`
- [ ] Schema markup: SoftwareApplication + FAQPage
- [ ] 200-400 words of context above + below tool
- [ ] FAQ section answers People-Also-Ask queries
- [ ] Internal links from 5+ relevant blog posts
- [ ] Image alt text descriptive + keyword-rich
- [ ] Core Web Vitals < 2.5s LCP

---

### Step 5: Launch Sequence (Days 0-14)

Free tools benefit massively from a 2-week burst of attention before organic SEO kicks in.

**Day 0 (T-14): Pre-launch**
- Submit to Product Hunt (Ship pre-launch page) — schedule launch for Tue-Thu
- Build a launch list: 50-100 people who'll upvote in first 6 hours
- Prepare assets: thumbnail (240×240), gallery (1270×760, 3-5 images), tagline (60 chars), description (260 chars)

**Day 1: Product Hunt**
- Launch by 12:01 AM PT
- First-comment: founder explains motivation, asks for feedback
- Rally network to upvote in first 6 hours (visibility multiplier)
- Respond to every comment (algorithm boost + relationship building)
- Expected: 200-500 upvotes → 5,000-15,000 visits

**Day 2: Hacker News (Show HN)**
- Title: "Show HN: {{Tool}} — {{specific value}}"
- Post 8-10 AM PT
- First comment: build story, technical detail, honest about limits
- Respond to every comment; HN rewards engagement
- Expected (if it lands): front page = 10-30k visits

**Day 3-5: Reddit (5-10 relevant subreddits)**
- READ subreddit rules first (most ban self-promo)
- Frame as "I made this because I was annoyed by X" not "Check out my tool"
- Engage with every comment; don't ghost
- Expected: 1k-5k visits per successful post

**Day 5-7: LinkedIn + X**
- Founder + company posts; link in first comment on LinkedIn
- X thread: build-in-public narrative with screenshots
- Expected: 500-2,000 from network

**Day 8-14: Influencer / Community outreach**
- DM 20-30 people in the space who'd benefit; ask for honest feedback
- Submit to AlternativeTo, SaaSHub, BetaList, StartupStash
- Pitch newsletters in the space ("Hey, built this — might be worth a mention")

**Common gotcha:** Launching to PH/HN before the tool is bulletproof. One bad first impression on HN kills the launch — they're harsh. Only ship when polished and load-tested.

---

### Step 6: Make It Embeddable (Backlink Loop)

The most under-used tactic: let other people put your tool on THEIR sites.

**How:**
1. Build a `/embed` route — simplified, no header/footer, branded with "Powered by {{You}}"
2. Provide a one-click embed code:
```html
<iframe src="https://yourtool.com/embed" width="600" height="500"
        frameborder="0"></iframe>
<p>Powered by <a href="https://yourtool.com">{{Tool Name}}</a></p>
```
3. Add an "Embed This Tool" button on the tool page (copy to clipboard)
4. Track embed installs (referrer logging)

**Why this works:**
- Bloggers embed = you get a permanent backlink (high DR)
- Their audience uses your tool (you get traffic + leads)
- "Powered by you" stays on every embed
- CoSchedule Headline Analyzer is embedded on 1,000+ pages this way

---

### Step 7: Connect Tool to Product (Conversion Plumbing)

A tool that doesn't convert is content. Wire the funnel deliberately.

**Conversion-mechanic patterns:**

1. **"This is the manual version; the product is the automated one"**
   - Tool: One-shot, manual input
   - Product: 100x scale, automation, integration
   - Bridge: "Run this every day automatically — start a free trial"

2. **"Bad result means you need the product"**
   - Tool reveals a problem (low score, missing feature)
   - Product is the fix
   - Bridge: "Improve your score 30+ points in 30 days with {{Product}}"

3. **"Tool is a free taste of the product"**
   - Tool uses a tiny piece of the product
   - Product unlocks the rest
   - Bridge: "Liked this? Unlock {{the rest}} with the free trial"

**Email nurture after tool use (4-email sequence):**

- Day 0: "Your {{tool result}}" — deliver the report, explain the number
- Day 2: "What top performers do differently" — case study
- Day 5: "The 3 most impactful changes" — actionable tips, mention product naturally
- Day 8: "Want this automated?" — soft demo / trial CTA

**Common gotcha:** No tool-to-product bridge. Users get the result, close the tab, never hear from you again. The bridge is the highest-leverage piece of the funnel.

---

### Step 8: Ongoing Promotion + Measurement

Tools need ongoing care after launch.

**Weekly:**
- 1 X / LinkedIn post — different angle each time (user success, tip, stat, behind-the-scenes)
- Monitor brand mentions, respond
- Watch search-rank trajectory for target keywords

**Monthly:**
- Feature in newsletter ("Tool of the Month")
- Add to relevant blog posts (CTA in 3-5 contextually relevant articles)
- Refresh content: update benchmarks, add new use cases

**Quarterly:**
- Re-launch a major update on Product Hunt ("Show HN: We just shipped v2")
- Outreach to newsletters / podcasts for coverage
- Build a "Most popular tools" hub if you have 3+ tools

**Measurement dashboard:**

| Metric | Cadence | Source |
|--------|---------|--------|
| Tool sessions | Weekly | GA4 |
| Tool completions | Weekly | Tool DB / events |
| Lead capture rate | Weekly | Tool DB |
| Trial signups attributed | Weekly | UTM + CRM |
| MQL → SQL conversion | Monthly | CRM |
| Pipeline attributed | Quarterly | CRM |
| Search rankings for target keywords | Monthly | Ahrefs |
| Embed installs | Monthly | Referrer logs |
| Backlinks acquired | Monthly | Ahrefs |

---

## Output Format

```markdown
# Free Tool Brief: {{Tool Name}}

**Date:** {{date}}
**Owner:** {{Name}}
**Status:** Concept / Spec / In Build / Live / Sunsetting

---

## Strategic Fit

- **Problem solved:** {{Specific — e.g., "Predict whether an email subject line will be opened"}}
- **Target ICP segment:** {{Specific — e.g., B2B email marketers at companies sending >50k emails/month}}
- **Product adjacency:** {{How tool relates to product — "Tool is one-shot; product automates it for every email"}}
- **Search demand:** {{Keyword volume — e.g., "free email subject line analyzer" — 4,400/mo (Ahrefs)}}
- **Conversion mechanic:** {{Which of the 3 patterns from Step 7}}

---

## MVP Scope

- **Mechanic type:** {{Calculator / Grader / Generator / etc.}}
- **Inputs:** {{List of fields}}
- **Calculation/logic:** {{Brief description}}
- **Outputs:** {{What user sees + downloadable artifact}}
- **Gating:** {{Ungated / Soft-gate / Hard-gate / Hybrid}}
- **Engineering estimate:** {{N weeks}}

---

## Landing Page

- **URL:** `/free-tools/{{slug}}`
- **H1:** {{Copy}}
- **Subhead:** {{Copy}}
- **Above-fold tool:** Yes
- **Below-fold content:** 200-400 words context, FAQ, CTA
- **SEO target keywords:** {{Primary + 3-5 secondary}}
- **Schema:** SoftwareApplication + FAQPage
- **Embed code available:** Yes / No

---

## Launch Plan (Days 0-14)

- Day 0 (T-14): Product Hunt Ship page live
- Day 1: PH launch
- Day 2: Show HN
- Day 3-5: Reddit (5 subs identified)
- Day 5-7: LinkedIn + X
- Day 8-14: Newsletter pitches, directory submissions

---

## Conversion Plumbing

- **Lead capture:** {{Email + N fields}}
- **Email nurture:** 4 emails over 8 days (see template)
- **CRM tagging:** Source = "Tool: {{name}}", Score = +25
- **Sales hand-off:** Score ≥75 → AE within 24h

---

## Measurement (90 days)

- **Target sessions:** {{N}}
- **Target completions:** {{N}}
- **Target lead capture:** {{N}}
- **Target attributed pipeline:** ${{N}}
- **Target search rank for primary keyword:** Top {{N}}
- **Review cadence:** Weekly first 30 days, monthly thereafter

---

## Ongoing Promotion

- Weekly social post (rotating angle)
- Monthly newsletter feature
- Quarterly relaunch / v2 push
- Embed promotion to ≥10 publishers per quarter
```

---

## Quality Bar

A free-tool brief / build is "done" when:

- [ ] Search demand validated (≥500-1,000 monthly searches in aggregate)
- [ ] Product adjacency is clear (tool users likely buyers, not random internet traffic)
- [ ] MVP scope is tight (3-7 inputs, 1 main output, 90-second usage)
- [ ] Gating strategy chosen deliberately (default: hybrid)
- [ ] Landing page is SEO-optimized with 200+ words context + FAQ
- [ ] Embed code + "Powered by" exists and is one-click copyable
- [ ] Launch sequence scheduled (PH + HN + Reddit + LinkedIn/X + Day-8-14 outreach)
- [ ] Email nurture (4 emails) wired for every captured email
- [ ] Conversion mechanic is explicit (how tool result → product CTA)
- [ ] Measurement dashboard live, tied to pipeline, not just sessions
- [ ] Ongoing promotion plan defined (weekly / monthly / quarterly cadence)
- [ ] Cross-checked with `.agents/product-marketing-context.md` — tool reinforces positioning

### Common Mistakes

1. **Building a high-volume tool that pulls non-ICP traffic.** **Why it happens:** "Viral" feels like success. **Fix:** Test product adjacency in the brief — successful tool users must have ≥30% likelihood of being a buyer. A 50,000-MAU tool with 3 trial signups is a content failure.
2. **Hard-gating an awareness-stage tool.** **Why it happens:** Sales team wants the email upfront. **Fix:** Default to hybrid (free result, gated detail) or soft-gate. Hard-gating cuts usage 70%+ and the emails captured are hate-clicks.
3. **Launching to Hacker News before the tool is bulletproof.** **Why it happens:** Excitement to ship. **Fix:** Load-test, fix copy, polish UI, validate with 10 friendly users first. HN is harsh; one bad first impression kills the launch.
4. **No conversion plumbing — tool result is the end of the experience.** **Why it happens:** Marketing builds the tool; engineering doesn't wire the funnel. **Fix:** Bridge to product is part of the brief, not an afterthought. Every result page has a contextual CTA tied to product value.
5. **No embed strategy.** **Why it happens:** Adds 1-2 weeks of engineering. **Fix:** Embedability is the single most leveraged backlink + traffic mechanism — worth the engineering cost. The "Powered by you" stays on the embed forever.
6. **Reporting tool sessions as success.** **Why it happens:** Easy metric. **Fix:** Track tool → trial → SQL → pipeline. Pipeline dollars are the only metric that matters for "tool as channel."
7. **One-and-done launch with no ongoing promotion.** **Why it happens:** Team moves on. **Fix:** Tools compound only if you keep feeding them — weekly posts, monthly features, quarterly v2 pushes. The original CoSchedule Headline Analyzer has been promoted continuously for 9+ years.
8. **Tool too broad ("Best Marketing Tool").** **Why it happens:** Ambition. **Fix:** Solve ONE narrow, valuable problem. The narrower the tool, the higher the conversion. HubSpot Website Grader is famously narrow — and famously effective.

---

## Examples

### Example 1: Series B PLG SaaS — building the HubSpot-Website-Grader equivalent

**Context:**
- Company: SubjectIQ, AI email subject-line optimization for B2B email marketers, $4M ARR
- Goal: Build a free tool that captures top-of-funnel email-marketer demand and converts to trial
- Constraint: 1 engineer for 3 weeks, 1 marketer for 6 weeks of promotion

**Input from user:**
> "Our product helps marketers write better subject lines using AI. We want a free tool that does a smaller version of this — pull demand and convert to trial."

**Output (abbreviated):**

```markdown
### Strategic Fit

- Problem solved: Score an email subject line for predicted open rate
- Target ICP: B2B email marketers at SaaS / e-commerce, 50k-2M emails/month
- Product adjacency: 92% — tool users ARE the ICP
- Search demand: "free email subject line analyzer" (1.6k/mo), "email subject line tester" (2.4k/mo)
- Conversion mechanic: Pattern #1 ("manual one-shot vs automated 100x")

### MVP Scope

- Type: Grader (input subject line → score + recommendations)
- Inputs:
  - Subject line (text, max 150 chars)
  - Audience type (dropdown: B2B SaaS / B2B services / e-commerce / newsletter)
  - Send type (dropdown: cold / nurture / promo / transactional)
- Calculation: Trained model (we have one in-product) — exposed as a free-tier API call
- Outputs:
  - 0-100 score (large, hero)
  - Color-coded interpretation (red/yellow/green)
  - 3 specific recommendations ("Try a question opener", "Cut to 7 words", "Remove the word 'free'")
  - Predicted open rate range
  - Benchmarks for the audience type
  - Soft-gate: email to get PDF with 5 alternate subject lines auto-generated
- Engineering: 3 weeks (re-use existing in-product model)

### Landing Page

- URL: /free-tools/subject-line-analyzer
- H1: "Free Email Subject Line Analyzer"
- Subhead: "Score your subject line in 3 seconds. Get 5 better alternatives in 30."
- H2s: "How it works," "What makes subject lines win," "FAQ"
- 350 words context + 8-question FAQ
- Schema: SoftwareApplication + FAQPage

### Launch Plan

- Day 1: Product Hunt — schedule for Tuesday
- Day 2: Show HN — "Show HN: We open-sourced our subject-line scoring model"
- Day 3-5: r/marketing, r/emailmarketing, r/copywriting, IndieHackers
- Day 5-7: LinkedIn + X (Founder thread: "Why most subject lines fail")
- Day 8-14: Pitch Marketing Examined, Demand Curve, EmailGeeks Slack

### Conversion Plumbing

- Email capture for PDF (soft-gate): 30-40% capture rate
- Nurture: 4 emails over 8 days
  - Day 0: PDF + "the 3 patterns in winning B2B subject lines"
  - Day 2: Case study — "How {{Customer}} lifted opens 31%"
  - Day 5: "Run this every send automatically — 14-day free trial"
  - Day 8: Last-call demo offer
- Sales hand-off: Anyone scoring ≥3 subject lines in a session + ICP-match company size → AE within 24h

### Measurement (90 days)

- Target tool sessions: 12,000
- Target email captures: 4,000
- Target trials: 600
- Target attributed pipeline: $400k
- Target rank for "email subject line analyzer": top 5
- Target embeds on third-party sites: 50

### Ongoing Promotion

- Weekly X post: "Subject line of the week — scored by SubjectIQ"
- Monthly newsletter: Top subject-line patterns from the previous month
- Quarterly v2: Add A/B variation generator, add Spanish / French support
```

**Why this works:** 92% product adjacency (tool users = ICP). Tight MVP (3 inputs, 1 score, 3 recs). The in-product model is repurposed — no new ML build. Soft-gate strategy maximizes both top-of-funnel and lead capture.

---

### Example 2: Decision-stage ROI calculator to unstick procurement-blocked deals

**Context:**
- Company: VaultLens, code-scanning security tool, $32M ARR
- Goal: Build an ROI calculator that buyers can take to their CFO/CISO to justify the spend
- Constraint: 1 engineer for 2 weeks, 1 product marketer for 4 weeks

**Input from user:**
> "Our deals stall at security/CFO approval. They need a number to justify the spend. Calculator should output a 3-year ROI PDF they can forward internally."

**Output (abbreviated):**

```markdown
### Strategic Fit

- Problem solved: Calculate the cost-of-doing-nothing for security vulnerability backlogs
- Target ICP: Enterprise CISO / VP Security at regulated companies (1k+ engineers)
- Product adjacency: Very high (calc reveals problem VaultLens solves)
- Search demand: lower volume but high intent — "security vulnerability cost calculator," "appsec ROI calculator"
- Conversion mechanic: Pattern #2 (bad result → need the product)

### MVP Scope

- Type: Calculator with auto-generated PDF business case
- Inputs:
  - Engineering team size
  - Current open critical vulnerabilities
  - Number of scanners in CI
  - Average remediation time (days)
  - Industry (dropdown: financial / healthcare / SaaS / other)
  - Annual revenue (range dropdown — for benchmarking only)
- Calculation:
  - Cost of unresolved-critical exposure (industry-benchmarked breach cost × probability)
  - Engineering hours wasted on false positives × FLY rate
  - Compliance audit risk ($)
- Outputs:
  - 3-year cost of current state ($)
  - 3-year cost with VaultLens ($)
  - ROI % + payback months
  - Auto-generated PDF business case (CFO-ready, with logos + customer references)
  - Hard-gate the PDF (email + company + job title required)
- Engineering: 2 weeks

### Landing Page

- URL: /tools/security-vulnerability-roi
- H1: "Vulnerability Backlog ROI Calculator"
- Subhead: "See your 3-year exposure cost — and the savings of fixing it. Get a CFO-ready PDF."
- Below tool: ROI methodology, sample PDF preview, FAQ on calculation assumptions

### Launch Plan

- Skip PH/HN (wrong audience — this is enterprise, not consumer-tech)
- Day 1: Targeted LinkedIn from CEO + CTO ("New: we built the ROI math you've been asking for")
- Day 1-7: Each AE personally emails 10 active deals: "Your prospect can use this internally"
- Day 7-14: Sponsored newsletter slot in CISO Series + Dark Reading
- Day 14-30: Webinar with 2 customer CISOs: "How they used this number to win Board approval"

### Conversion Plumbing

- Hard-gate (PDF requires email + company + title)
- Anyone with title containing CISO / VP Security / Director Security AND completing the calc
  → AE within 4 hours
- Anyone with ROI > 5x → priority routing to enterprise sales
- Existing open opportunities use the tool as battle card → AE forwards PDF to procurement

### Measurement (90 days)

- Target calculator completions: 600 (low-volume, high-value)
- Target PDFs downloaded: 400
- New sales-qualified opportunities: 40
- Influenced opportunities (existing deals): 20
- Closed-won attributed: $1.2M
```

**Why this works:** Enterprise calculator skips PH/HN (wrong audience). Hard-gate justified by ICP value. Distribution is sales-led + targeted media, not viral. Influenced-opportunity metric captures the calc's real job (unsticking existing deals), not just net-new lead gen.

---

## Related Skills

- **[`lead-magnets`](../lead-magnets/SKILL.md)** — Use *alongside*. Free tools are the highest-leverage type of lead magnet; this skill is the deep-dive.
- **[`seo-audit`](../seo-audit/SKILL.md)** — Use *alongside*. Tool landing pages are SEO assets; optimize accordingly.
- **[`programmatic-seo`](../programmatic-seo/SKILL.md)** — Use *alongside*. Tools can power programmatic landing pages (one tool, N keyword variants).
- **[`product-hunt-launch`](../product-hunt-launch/SKILL.md)** — Use *during* launch. Free tools are perfect for PH.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *during* landing page construction.
- **[`email-sequence`](../email-sequence/SKILL.md)** — Use *during* the 4-email nurture build.
- **[`analytics-tracking`](../analytics-tracking/SKILL.md)** — Use *during* conversion-plumbing wiring.

---

## References

- HubSpot Website Grader — the canonical B2B SaaS free-tool example; foundation of HubSpot's demand gen.
- CoSchedule Headline Analyzer — the embed-loop model; 1,000+ blog embeds.
- Hotjar Heatmap Generator — the "free preview of the product" model.
- *Hooked* — Nir Eyal (the habit-loop dynamic that makes free tools sticky).
- Reforge growth program — case studies on free-tool-as-channel.
