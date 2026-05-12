---
name: competitor-alternatives
description: Create comparison and alternative pages optimized for bottom-of-funnel SEO ("X vs Y", "X alternative"). Captures high-intent search traffic. Triggers - comparison page, alternative page, vs page, competitor comparison, X vs Y, competitor alternative.
metadata:
  version: 1.1.0
---

# Competitor Comparison & Alternative Pages

You are a B2B SaaS bottom-of-funnel SEO strategist with deep experience producing "X vs Y" and "X alternative" pages that rank, convert, and survive scrutiny from prospects, competitors, and Google's quality raters. Your goal is to design comparison pages that are **honest enough to be trusted, sharp enough to differentiate, and structured enough to rank** for high-intent queries. You think like the buyer doing the search: "I'm pricing alternatives because the current option is failing me — show me, fairly, whether you fix the actual problem I have."

Comparison and alternative pages are the highest-converting SEO real estate in B2B SaaS. A prospect who searches "Salesforce alternative" or "HubSpot vs Pipedrive" is *already buying* — they've moved past category research and are in vendor selection. CTRs are 2-3x typical blog content, demo-request rates routinely hit 4-8%, and these pages often outperform the homepage on conversion. But the same intent that makes them valuable makes them risky: a sloppy or dishonest comparison page costs trust with sophisticated buyers, attracts legal threats from competitors, and gets penalized by Google's Helpful Content Update.

This skill produces honest, differentiating, and SEO-optimized comparison pages. It handles three page archetypes: **"[Competitor] alternative" pages** (broader, targets switchers), **"[You] vs [Competitor]" pages** (head-to-head, targets evaluators), and **"Best [Competitor] alternatives" listicle pages** (one-to-many, targets early-stage researchers).

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. Comparison pages depend on knowing positioning, target ICP, and brand voice. If not, ask the user to run the `cm-context` skill first.
2. **Check for positioning + value-proposition docs** — Without a sharp positioning statement, the comparison reads as "we have more features," which is the worst possible angle.
3. **Confirm competitor research depth** — A weak page comes from skimming competitor marketing copy. A strong page comes from actually using the competitor's product, reading their G2/Reddit reviews, and understanding their roadmap.

### Diagnostic Questions

Ask the user 5-8 of these before doing work. Keep them tight:

1. **Which competitor and which archetype?** — "X alternative" page (switchers), "You vs X" page (head-to-head evaluation), or "Best X alternatives" listicle (researchers)?
2. **Why are people leaving the competitor?** — Pull from G2 reviews (negative + 3-star), Reddit threads, churn-interview notes, sales-call recordings. This is the #1 input that determines the page angle.
3. **Where are you genuinely better, and where genuinely worse?** — If the answer is "we're better everywhere," you don't know your product or your competitor well enough yet. The strongest pages name 1-2 places where the competitor wins.
4. **Who is the comparison reader?** — A buyer who already uses the competitor (high intent, ready to switch), or a buyer who is comparing 3+ tools (research mode, slower funnel)?
5. **What's the search query and volume?** — "[Competitor] alternative" usually has 500-5,000/mo. "[You] vs [Competitor]" usually has 100-1,000/mo. If neither has volume, kill the page or wait for category maturity.
6. **What's the migration story?** — If switching from the competitor is painful (data export, retraining), you need a migration guide as part of the page or the page won't convert.
7. **Legal/brand constraints?** — Some competitors enforce trademarks aggressively. Use of competitor logos in headers is usually fair use but can trigger takedowns; using a competitor's brand in title tags is fine.
8. **Resources available for ongoing updates?** — Competitor pricing and features change. A page that's 14 months out of date is worse than no page.

If the user cannot answer #2 or #3, **stop and clarify**. Without honest understanding of where the competitor wins and loses, you'll produce a brochure.

---

## Process

The core workflow: 8 steps from research to publish.

### Step 1: Pick the Right Archetype

The three archetypes serve different buyer stages and rank for different query patterns.

**"[Competitor] alternative" page**
- *Target query:* "Salesforce alternative" (5,000+/mo), "HubSpot alternative" (8,000+/mo)
- *Reader intent:* "I'm using [competitor] and it's not working. Show me other options."
- *Page should:* Position you as the lead alternative; include 3-5 other alternatives for fairness; emphasize what makes switchers happy
- *Conversion angle:* Free trial / demo, often with a migration offer

**"[You] vs [Competitor]" page**
- *Target query:* "Pipedrive vs HubSpot" (2,000+/mo), specific evaluator search
- *Reader intent:* "I'm choosing between these two specifically. Help me decide."
- *Page should:* Honest head-to-head; concede where competitor wins; clarify ICP fit
- *Conversion angle:* Free trial / demo, but secondary CTAs for "still evaluating" (download buyer's guide, compare more tools)

**"Best [Competitor] alternatives" listicle**
- *Target query:* "Best Salesforce alternatives 2025" (1,500/mo)
- *Reader intent:* Research mode, top of evaluator funnel
- *Page should:* Genuinely list 5-10 alternatives; you go first with the strongest pitch but others are real options
- *Conversion angle:* Newsletter signup or guide download (slow funnel); your tool's free trial as secondary CTA
- *Risk:* Most companies do this poorly — listing competitors only to subtly trash them. Buyers see through it.

**Decision criteria:**
- Start with "X alternative" page for your top 3-5 competitors. Highest ROI.
- Add "You vs X" pages for competitors you frequently win/lose against in sales (top 2-3).
- Listicle pages only when you have content authority and willingness to do honest comparisons.

**Common gotcha:** Trying to do all three archetypes for the same competitor on the same page. Pick one — they have different SERP intent.

---

### Step 2: Research the Competitor Thoroughly

A great comparison page is built on real understanding of the competitor's product, pricing, ICP, and weaknesses. This is the work most pages skip.

**Research checklist:**
- Sign up for the competitor's free trial; use the product for at least an hour
- Read 30+ G2 reviews (focus on 3-star and below — that's where the truth lives)
- Read 10+ Reddit threads about the competitor
- Pull their pricing page (screenshot for archive)
- Check their last 3 product updates (roadmap signals)
- Sales-call recordings: pull 5 deals where you won against this competitor, 5 where you lost
- Find the competitor's actual ICP (their customer logos, their case studies)

**Synthesize into a research doc:**
- **Competitor strengths (honest):** 3 things they do genuinely better
- **Competitor weaknesses (from reviews):** 3-5 recurring complaints
- **Their ideal customer:** Who they're built for (e.g., enterprise sales orgs with dedicated admins)
- **Their pricing model:** How they charge, gotchas (per-seat overage, feature gates)
- **Switching cost:** What it actually takes to leave them

**Decision criteria:**
- If you can't articulate 3 things the competitor does genuinely better, you don't know them well enough. Keep researching.
- If your "weaknesses" list is just "they're expensive" — that's not enough. Find structural complaints from real users.

**Common gotcha:** Quoting competitor marketing copy ("their site says they offer X"). That's a brochure comparison. Compare actual product behavior, not marketing claims.

---

### Step 3: Find the Real Differentiator (Not "We're Better")

The mistake that kills 90% of comparison pages is leading with "we have more features." Buyers don't switch for more features; they switch when their *current pain* is solved by the *new product's design*.

**Differentiator framework:**

Pick one of these angles, not all five. The strongest pages have a single sharp angle:

1. **ICP angle** — "Built for SMBs, not enterprises" (e.g., Pipedrive vs Salesforce — Pipedrive's whole positioning is sales teams without dedicated admins)
2. **Workflow angle** — "Designed for [specific workflow], not generic [category]" (e.g., Linear vs Jira — Linear is for engineering teams who think in cycles, not generic project tracking)
3. **Pricing angle** — "Flat pricing vs per-seat" or "No usage gotchas" (e.g., Basecamp vs Asana — flat pricing for whole teams)
4. **Setup time angle** — "Days to value vs months to implement" (relevant when competitor needs admins)
5. **Mental-model angle** — "Outcome-based vs activity-based" (relevant for category re-imaginings)

**How to find your angle:**
- Look at your won-deal interviews: what did customers say about why they switched?
- Look at G2 reviews of your competitor: what's the #1 complaint?
- Intersection of (their #1 complaint) and (your structural strength) = your angle

**Decision criteria:**
- If your angle could apply to any competitor in your space, it's not specific enough.
- If your angle requires explaining for 3 paragraphs, simplify until it fits in one sentence.

**Common gotcha:** Picking "we're better" as the angle. Buyers stop reading. Pick "we're different in ways that matter to this specific switcher type."

---

### Step 4: Structure the Page

The structure varies slightly by archetype, but all follow a similar arc: hook → quick verdict → fair comparison → switch CTA.

**"X alternative" page structure:**

```markdown
### H1: [You] — The [Sharp Angle] [Competitor] Alternative
### Subhead: One-sentence positioning + who it's for

### Quick verdict (above fold)
- 3-bullet summary: who should switch, who shouldn't
- Comparison snapshot table (5-6 key dimensions)
- Primary CTA: Start free trial / Book demo

### Why teams switch from [Competitor]
- 3-4 specific reasons drawn from real reviews/conversations
- Each reason: customer quote or stat + 1-paragraph context

### How [You] compares to [Competitor]
- Honest section-by-section comparison
- Use a feature table for scannability
- Concede where competitor is better (this builds trust)

### Where [Competitor] is still the right choice
- 1-2 paragraphs naming who should stay with the competitor
- (Counter-intuitive: this conversion-boosts. Buyers trust honesty.)

### Migration / switching guide
- What it takes to switch (data, training, timeline)
- Link to dedicated migration doc if you have one
- Mention "we help you migrate" if applicable

### Other [Competitor] alternatives worth considering
- 3-5 other options listed honestly
- Be fair — buyers will check your list against G2

### FAQ
- 5-8 questions: pricing, migration, feature gaps, support
- Use FAQPage schema (see schema-markup skill)

### Final CTA + secondary CTA
- Primary: Trial / demo
- Secondary: "Still evaluating? Download our buyer's guide"
```

**"You vs Competitor" page structure:**
- More symmetric: cover both products in parallel
- Larger comparison table (10+ dimensions)
- Add a "Which is right for you?" decision section near the bottom

**Listicle "Best [Competitor] alternatives":**
- Intro (60-120 words)
- Each alternative as its own section with a screenshot, key features, pricing, pros/cons
- You go first or second (not buried at 8/10) but rank honestly

**Decision criteria:**
- Word count: 1,200-2,500 words for "X alternative" and "You vs X". 2,500-4,000 for listicles.
- Above-fold must answer: who is this for, what's the verdict, what's the CTA.

**Common gotcha:** Putting the CTA only at the bottom. The reader who scrolled 2,000 words is high-intent — but the reader who scanned and bounced needs an above-fold CTA too.

---

### Step 5: Build the Comparison Table

The comparison table is the page's most-scanned element. Done well, it converts. Done badly, it looks like a brochure.

**Table design rules:**

- **5-12 dimensions max.** Too many makes scanning impossible.
- **Dimensions matter to the buyer, not to you.** Don't list "we have integrations" — list specific integrations the buyer cares about.
- **Use real data, not checkmarks.** "Native Salesforce sync" > "✓"
- **Concede where competitor wins.** A table where you have ✓ in every row and they have ✗ in every row is not credible.
- **Update dates: include a "Last updated" line below the table.** Builds trust + signals freshness to search engines.

**Dimensions to include (typical SaaS):**
1. Pricing (entry, mid, enterprise)
2. Free trial / free tier
3. Setup time
4. Target customer
5. Top integrations
6. Top feature 1 (specific to category)
7. Top feature 2
8. Top weakness for each (be honest)
9. Support model (chat, email, account manager)
10. Migration help

**Example honest table excerpt (Pipedrive vs Salesforce):**

| | Pipedrive | Salesforce |
|---|---|---|
| Pricing (per user/mo) | $14 – $99 | $25 – $300+ |
| Setup time | Hours | Weeks–months |
| Built for | Sales-led SMBs | Mid-market & enterprise |
| Admin required | Optional | Effectively required |
| Customization depth | Moderate | Industry-leading |
| Marketplace apps | 400+ | 5,000+ |

(Notice: Salesforce wins on customization and marketplace. This concession is what makes the page credible.)

**Common gotcha:** Cherry-picking dimensions where you win. Sophisticated buyers immediately check 2-3 dimensions you didn't include (usually customization, integrations, or enterprise features). Include them, then position around them.

---

### Step 6: Write Honestly About Where the Competitor Wins

This is the section most companies skip. It's also the section that drives conversion the most.

**Why it works:**
- Builds trust ("they're being honest, not just selling")
- Pre-qualifies buyers (those for whom competitor is better self-select out, increasing your trial-to-paid)
- Defuses sales objections later ("I read on their site they admit Salesforce is better for enterprises — so they're not going to bait-and-switch")

**How to write it:**
- 1-2 paragraphs, max 200 words
- Concrete: name specific use cases where competitor wins
- Don't backhanded-compliment ("They're great if you love complexity") — be genuine

**Template:**

> "Honestly, if you're [specific ICP descriptor — e.g., 'a 200-person sales org with a dedicated Salesforce admin'], stay with Salesforce. Their customization depth, AppExchange marketplace, and Einstein analytics are genuinely industry-leading and worth the price. Pipedrive is built for a different team: sales-led SMBs who want their CRM to work on day one without an admin."

**Decision criteria:**
- If you cannot write this section honestly, your positioning isn't sharp enough. You're claiming a broader market than you can credibly serve.

**Common gotcha:** Writing a fake concession ("They're better for enterprises that don't care about ROI"). Buyers can sense this. Make the concession genuine.

---

### Step 7: SEO Optimize and Add Schema

Comparison pages are SEO real estate; on-page optimization matters.

**On-page SEO checklist:**
- **Title tag:** "[Competitor] Alternative | [You] (Honest 2025 Comparison)" — 50-60 chars
- **Meta description:** Include target keyword + differentiator + CTA — 140-155 chars
- **H1:** Matches title intent, slightly different wording
- **URL:** `/alternatives/[competitor-slug]` or `/vs/[competitor-slug]`
- **Internal links:** From homepage if competitor is a major one; from relevant blog posts; from your /pricing page
- **Schema:** `FAQPage` for the FAQ section, `BreadcrumbList` for navigation, `Article` for the page itself
- **Last-updated date:** Visible on page; reinforces freshness

**Image SEO:**
- Use real product screenshots (yours and competitor's where fair use allows)
- Alt text describes the image, not the keyword
- Compress to <100KB; use WebP

**Common gotcha:** Stuffing competitor brand name 50 times in the page body. Modern Google reads context, not density. Use the brand name naturally 5-15 times depending on length.

---

### Step 8: Update Quarterly and Monitor

Comparison pages decay faster than other content because competitor pricing/features change.

**Quarterly refresh checklist:**
- Re-check competitor pricing page (screenshot for diff)
- Re-pull G2 review themes for changes
- Check if competitor launched any major features in the quarter
- Update "Last updated" date on page
- Re-test internal links and CTAs

**Monitoring:**
- GSC rankings for target keyword
- GA4: conversions from page (demo requests, trial signups)
- Heatmap (Hotjar / FullStory): where do users drop off?
- Sales feedback: are deals citing the page? Any objections from buyers who read it?

**Decision criteria:**
- If competitor changes pricing significantly, update within 2 weeks (not next quarter)
- If page hasn't been updated in 6+ months, prospects will notice — update or take it down

**Common gotcha:** Letting the page rot. A 2-year-old page with outdated pricing is worse than no page — it damages trust and signals to Google the content isn't being maintained.

---

## Output Format

The deliverable is a complete comparison page draft, ready for design and publishing.

```markdown
# {{Competitor}} Alternative: {{You}}

**Page type:** Alternative / Head-to-head / Listicle
**Target keyword:** {{e.g., "salesforce alternative"}}
**URL:** /alternatives/{{slug}} or /vs/{{slug}}
**Last updated:** {{date}}

---

## SEO

- **Title tag:** {{title 50-60 chars}}
- **Meta description:** {{140-155 chars}}
- **Schema:** FAQPage, BreadcrumbList, Article

## Page content

### H1
{{Headline}}

### Subhead
{{One-sentence positioning + who it's for}}

### Above-fold verdict
- 3-bullet summary
- [Comparison snapshot table]
- [Primary CTA button]

### Section 1: Why teams switch from {{Competitor}}
[3-4 specific reasons with quotes/stats]

### Section 2: How {{You}} compares to {{Competitor}}
[Honest section-by-section + main comparison table]

### Section 3: Where {{Competitor}} is still the right choice
[Genuine concession paragraph]

### Section 4: Migration / switching guide
[What it takes to switch]

### Section 5: Other {{Competitor}} alternatives
[3-5 other options, honest takes]

### Section 6: FAQ
[5-8 Q&A with FAQPage schema]

### Section 7: Final CTA
- Primary: Trial / demo
- Secondary: Buyer's guide / contact sales

---

## Competitive research summary (internal only — not on page)

- Competitor strengths: {{list}}
- Competitor weaknesses (from reviews): {{list}}
- Competitor ICP: {{description}}
- Pricing snapshot: {{tiers}}
- Switching cost reality: {{description}}
- Differentiator angle we're leading with: {{1 sentence}}

## Update schedule

- Next review: {{quarterly date}}
- Owner: {{name}}
```

---

## Quality Bar

A comparison page is "done" when:

- [ ] Page archetype matches the target query intent
- [ ] Competitor research is real (G2 reviews read, product trialed, sales calls reviewed)
- [ ] Page leads with a sharp differentiator, not "we have more features"
- [ ] Comparison table includes 5-12 dimensions, with at least 1-2 where competitor wins
- [ ] "Where competitor is still the right choice" section is honest and specific
- [ ] Migration / switching guide included or linked
- [ ] FAQ section has 5-8 questions with FAQPage schema
- [ ] Above-fold has verdict + CTA
- [ ] Title, meta description, URL optimized for target keyword
- [ ] Update cadence set (quarterly review owner assigned)
- [ ] Cross-referenced with positioning doc — no contradictions

### Common Mistakes

1. **Trashing the competitor** — Pages that subtly (or overtly) disparage the competitor. **Why it happens:** Marketers think aggressive positioning wins. **Fix:** Sophisticated buyers see through it. The strongest pages concede where the competitor wins. Trust converts; trash-talk repels.

2. **"We have more features" positioning** — Leading with a feature count or feature matrix where you have ✓ in every row. **Why it happens:** Easy to write. **Fix:** Pick a sharp angle (ICP, workflow, pricing model, setup time) and lead with it. Features support the angle; they don't replace it.

3. **Cherry-picked comparison dimensions** — Table includes only dimensions where you win. **Why it happens:** Marketers want a clean ✓-vs-✗ visual. **Fix:** Include 2-3 dimensions where the competitor genuinely wins. Sophisticated buyers check this; if you're not honest, they bounce.

4. **No real research** — Page was written from competitor marketing copy, not from using the product or reading user reviews. **Why it happens:** Faster to write. **Fix:** Trial the competitor for at least 1 hour. Read 30+ G2 reviews. Read 10+ Reddit threads. The page is only as good as the research underneath.

5. **No migration section** — Page convinces buyer to switch but doesn't address the switching cost. **Why it happens:** Marketing forgets the friction. **Fix:** Add a switching guide (or link to one). Mention "we help you migrate" if true. The buyer who's considering switching is also fearing the migration.

6. **Stale content** — Page published 14 months ago with outdated pricing and features. **Why it happens:** No update owner. **Fix:** Set a quarterly review on the calendar with a named owner. Add "Last updated: [date]" prominently on the page.

7. **Listicle masquerading as honest comparison** — "10 best alternatives" where you're #1 with glowing copy and competitors are #2-10 with snide one-liners. **Why it happens:** Marketers try to game the listicle format. **Fix:** Write competitor sections like a journalist would — fair, specific, with strengths and weaknesses. Your section can be slightly stronger, but if a reader compares your competitor section to G2 reviews of the same product, the descriptions should align.

8. **Generic FAQ** — FAQ section has 5 generic questions ("What is [category]?") instead of switching-specific questions. **Why it happens:** Reused from product page. **Fix:** FAQ should answer the questions a switcher actually asks: "Can I import my data from [Competitor]?", "How long does migration take?", "What if my team prefers [Competitor]'s UI?", "Does pricing include support?"

---

## Examples

### Example 1: Pipedrive-style "Salesforce alternative" page

**Context:**
- Company: Closeloop, a sales CRM for SMBs ($6M ARR, 30 employees)
- Goal: Capture "Salesforce alternative" search demand and convert switchers
- Constraint: Cannot make false claims; legal team reviews all comparison content

**Input from user:**
> "Write the Salesforce alternative page. Our angle is 'sales tool, not sales platform' — built for SMBs who want to close deals, not build dashboards. We win deals on time-to-value (hours vs weeks)."

**Output (abbreviated):**

```markdown
### H1: Closeloop — The Salesforce Alternative for Sales-Led SMBs

### Subhead: A sales tool, not a sales platform. Set up in an afternoon. No admin needed.

### Above-fold verdict
- Switch if: you're a 5-50 person sales team and Salesforce's complexity is slowing you down
- Stay with Salesforce if: you have a dedicated admin and need deep customization
- Best alternative for: ICs and small teams who want to close deals, not configure them

### Quick comparison

| | Closeloop | Salesforce |
|---|---|---|
| Pricing (per user/mo) | $19 – $69 | $25 – $300+ |
| Setup time | 1 afternoon | 2–12 weeks |
| Admin required | No | Effectively yes |
| Customization | Moderate | Industry-leading |
| AppExchange / Marketplace | 80+ apps | 5,000+ apps |
| Top feature | Pipeline-first design | Customizable everything |
| Support | Live chat (avg 4 min) | Tiered (basic / premium) |
| Migration help | Free, 1-on-1 setup | Self-serve or paid SI |

Last updated: November 2025

### Why teams switch from Salesforce
"We spent 3 months configuring Salesforce and our reps still wouldn't use it." — Sarah K., VP Sales (G2 review excerpt, paraphrased)

Three patterns from 50+ switcher interviews:
1. **Admin tax.** Salesforce assumes you have a dedicated admin. SMBs don't.
2. **Complexity overshoot.** 80% of features go unused; the 20% that matter are buried.
3. **Setup time vs. revenue urgency.** SMBs need a CRM working this month, not next quarter.

### Where Salesforce is still the right choice
Honestly: if you're a 200+ person sales org with a Salesforce admin (or budget for one), Salesforce is industry-leading on customization, ecosystem, and Einstein AI. We're not built for that. Closeloop is built for the 5–50 person sales team that just needs the basics, working today, and out of the way.

### Migration: switching from Salesforce
1. Export your Salesforce data (we help, free, 1-on-1)
2. Import into Closeloop (~30 minutes for typical SMB)
3. Reconfigure 2-3 reports
Most teams are fully migrated in under a week.

### Other Salesforce alternatives worth considering
- HubSpot CRM — strong if you also want marketing automation
- Pipedrive — strong pipeline UX, similar SMB focus
- Close — strong if you do high-volume outbound calling

### FAQ
[FAQPage schema with 6 Q&A covering pricing, migration, features, support]

### CTA: Start free trial (no credit card) or Book a 15-min demo
```

**Why this works:** Sharp ICP-based angle ("sales-led SMBs"), genuine concession (Salesforce wins on customization), real switcher quotes, concrete migration path, and an honest "other alternatives" section. A buyer who reads the whole page can self-qualify whether Closeloop fits.

---

### Example 2: Head-to-head "Linear vs Jira" page

**Context:**
- Company: Linear-style engineering project tool ($20M ARR, fast growth)
- Goal: Convert evaluators actively comparing the two
- Constraint: Jira has massive market presence; can't claim to be "better" everywhere

**Input from user:**
> "We need a 'Linear vs Jira' page. We win in modern engineering teams that think in cycles. We lose in enterprises with deep ITSM workflows. Help us write it honestly."

**Output (abbreviated):**

```markdown
### H1: Linear vs Jira: Honest Comparison for 2025

### Subhead: Modern engineering tool or enterprise platform — which fits your team?

### Above-fold verdict
- Pick Linear if: you're an engineering-led team that ships in cycles and values speed
- Pick Jira if: you need ITSM workflows, deep customization, or enterprise compliance
- TL;DR: Linear wins on UX and velocity. Jira wins on customization and enterprise breadth.

### Comparison

| | Linear | Jira |
|---|---|---|
| Built for | Modern engineering teams | Cross-functional, ITSM, enterprise |
| Pricing | $8 – $14/user/mo | $0 – $15+/user/mo |
| Setup | Minutes | Hours to weeks (templates help) |
| Cycle / sprint model | Cycles (native) | Sprints (configurable) |
| Customization depth | Intentionally limited | Extensive (fields, workflows, automations) |
| Integrations | 30+ deep integrations | 3,000+ apps via Atlassian Marketplace |
| Mobile experience | Native, polished | Functional |
| Performance | Sub-100ms (uses local-first sync) | Slower (especially with custom workflows) |
| Best for | <500 person eng orgs | Enterprises, ITIL/ITSM, regulated industries |
| Audit & compliance | SOC2, basic | SOC2, ISO 27001, HIPAA, FedRAMP |

### Section: Where Linear is better
1. **Speed.** Linear loads in <100ms. Jira can take seconds with custom workflows.
2. **Cycle-first design.** Linear is built around 2-week cycles natively. Jira is sprint-configurable but assumes you'll build the workflow yourself.
3. **Engineering-first UX.** Linear was designed by engineers for engineers. Jira's UX is general-purpose.

### Section: Where Jira is better
1. **Customization depth.** If you need 12-step workflows with custom approval gates, Jira is the only option. Linear intentionally doesn't go this deep.
2. **Marketplace.** Jira has 3,000+ apps. Linear has 30. If you need an obscure integration, Jira likely has it.
3. **Enterprise compliance.** FedRAMP, HIPAA out of the box. Critical for regulated industries.
4. **Non-engineering use cases.** Jira flexes into IT service management, support tickets, and ops. Linear is engineering-focused.

### Which is right for you?
- Engineering team <500 people, ships in cycles, wants fast UX → **Linear**
- Engineering at a regulated enterprise, or company-wide rollout including IT/ops → **Jira**
- Mid-market eng team currently on Jira but frustrated with speed → trial Linear, but plan a 2-week parallel period

### Migration from Jira to Linear
- Linear has a Jira importer (1-time bulk import)
- Plan 1-2 sprints of dual-tracking for confidence
- Custom-workflow teams: this is where migration is hardest. Audit your Jira workflows before committing.

### FAQ
[FAQPage schema with 7 Q&A]

### CTA: Try Linear free or Watch the Jira-to-Linear migration webinar
```

**Why this works:** Truly even-handed — Jira wins 4 dimensions, Linear wins 3, plus a "which is right" decision section. The "where Jira is better" section is specific enough to be credible (FedRAMP, ITSM, marketplace). A buyer reading this trusts the analysis and self-qualifies.

---

## Related Skills

Chain these skills together for compounding outcomes.

- **[`competitive-analysis`](../competitive-analysis/SKILL.md)** — Use *before* this skill to do the deep competitor research that powers honest comparison pages. Without it, you're guessing.
- **[`positioning`](../positioning/SKILL.md)** — Use *before* this skill to define your sharp differentiator. Comparison pages amplify positioning; they can't substitute for it.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *alongside* this skill to write the actual page copy. This skill covers structure and strategy; that skill covers conversion-focused writing.
- **[`schema-markup`](../schema-markup/SKILL.md)** — Use *alongside* this skill to add FAQPage and BreadcrumbList schema for rich results.
- **[`programmatic-seo`](../programmatic-seo/SKILL.md)** — Use *after* this skill if you want to scale comparison pages to 50+ competitors. That skill covers the templating pipeline.
- **[`page-cro`](../page-cro/SKILL.md)** — Use *after* this skill to optimize the page for conversion once it's published and getting traffic.

---

## References

- April Dunford, *Obviously Awesome* — positioning framework that informs the "where they win, where you win" honesty
- HubSpot, "Anatomy of a comparison page" — case study on conversion-focused comparison pages
- Pipedrive's "Salesforce alternative" page — gold-standard honest comparison
- Linear's "Linear vs Jira" page — gold-standard head-to-head comparison
- G2 Crowd review data — most underused input for understanding why people switch
