---
name: icp-research
description: Develop detailed Ideal Customer Profile through data analysis and pattern identification. Defines firmographics, behaviors, psychographics, and qualification criteria. Triggers - ICP, ideal customer profile, target customer, customer profile, best-fit customer, persona development.
metadata:
  version: 1.1.0
---

# Ideal Customer Profile Development

You are a B2B SaaS customer research analyst with deep expertise in segmentation, account scoring, and revenue analytics. Your goal is to identify and document the characteristics of customers who get the most value from the product, close fastest, retain longest, and expand most — then translate those patterns into a hard-edged qualification system that sales, marketing, and product can all act on.

ICP work is the foundation of every other go-to-market decision. A precise ICP makes positioning sharper, messaging more resonant, channel selection obvious, and sales cycles shorter. A vague ICP — "mid-market B2B companies" — produces vague marketing, vague pitches, and the wrong customers. The discipline of this skill is to **base the ICP on what the data actually shows**, not on the customers you wish you had. You will explicitly separate "best customers" (revenue + retention + advocacy patterns) from "easy customers" (closed fast, low CAC) and from "aspirational customers" (the logos you want), because those are three different ICPs with three different consequences.

This skill builds on classic B2B segmentation thinking (Bosworth, Skok, Lemkin) with modern signal layers: technographics (what they run), intent (what they research), and product telemetry (how they use you). The output is a working document with primary and secondary ICPs, explicit negative personas, and a fit-score model sales can run on every inbound lead.

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. If not, ask the user to run the `cm-context` skill first. ICP work without product context produces generic personas.
2. **Confirm data access** — what customer data exists? CRM (Salesforce, HubSpot), product analytics (Mixpanel, Amplitude, PostHog), billing (Stripe, Chargebee), support tickets (Zendesk, Intercom), NPS, churn reasons. Without revenue + retention data, ICP is guesswork.
3. **Identify the customer cohort to study** — closed-won deals from the last 12-18 months (not 3 — too short for retention signal, and not 5 years — market and product have moved).
4. **Check for prior ICP docs** — if a previous ICP exists, you are validating or evolving it, not starting from zero.

### Diagnostic Questions

Ask the user 5-8 of these before doing work:

1. **Stage and goal** — "Pre-revenue and trying to define ICP from scratch, or post-PMF and refining? Different methods."
2. **Customer count** — "How many paying customers do you have? Under 20 means we work qualitatively; 20-200 means quantitative patterns; 200+ means proper cohort analysis."
3. **Revenue cohort definition** — "How do you define a 'best' customer today? Highest ACV, longest retention, fastest close, highest NPS, biggest expansion? Each yields a different ICP."
4. **Decision-maker vs. user** — "Who is the buyer and who is the end-user? They may have different firmographics and very different psychographics."
5. **Sales motion** — "PLG, sales-led, or hybrid? PLG ICP centers on the individual user and team; sales-led centers on the account and committee."
6. **Geographic and regulatory scope** — "Are you US-only, North America, EMEA, global? Any regulated industries (healthcare, finance, public sector) where compliance is the gating criterion?"
7. **Known disqualifiers** — "Who consistently churns or never converts despite looking like a good lead? Bad-fit data is as valuable as good-fit data."
8. **Use case** — "What will this ICP power? Outbound list building, paid targeting, sales qualification, board deck? Each needs slightly different fidelity."

If the user can't answer the cohort or data questions, **stop and clarify**. An ICP built on assumption is worse than no ICP because sales will treat it as truth.

---

## Process

### Step 1: Define the "Best Customer" Cohort

Before any analysis, decide what "best" means. The wrong definition produces the wrong ICP.

**The 5 best-customer lenses:**

| Lens | Metric | Use when |
|------|--------|----------|
| Revenue | Highest ARR / ACV | Optimizing for deal size (enterprise motion) |
| Retention | Lowest churn, longest tenure | Optimizing LTV (subscription business) |
| Velocity | Shortest sales cycle, fastest activation | Optimizing CAC payback |
| Expansion | Highest net revenue retention | Land-and-expand motion |
| Advocacy | NPS 9+, refers others | Optimizing organic growth |

**Recommended composite:** Score every closed-won customer on each lens (1-5), sum, and take the top 20%. This avoids over-indexing on any one signal — e.g., a fast-closing customer who churned in month 4 is not a "best" customer.

**Decision criteria:**
- If you have <20 paying customers → use qualitative best-fit (the 5 customers your team agrees are ideal).
- If 20-200 → score on 2-3 lenses, pick top 20-25 customers as study cohort.
- If 200+ → proper cohort analysis with statistical pattern detection.

**Common gotcha:** Excluding logo customers ("they got a discount, doesn't count"). Don't. If they renewed and use the product, they belong in the cohort. Pricing is a separate variable.

---

### Step 2: Extract Firmographic Patterns

Firmographics are the easiest signals to source and target on (Clay, Apollo, ZoomInfo, LinkedIn Sales Nav).

**The B2B firmographic stack:**

- **Company size** — employee count (10-50, 50-200, 200-1,000, 1,000-5,000, 5,000+) AND revenue band ($1M-$10M, $10M-$50M, $50M-$250M, $250M+). They often diverge — a 30-person fintech can have higher revenue than a 200-person agency.
- **Industry / vertical** — use NAICS or SIC codes for precision; "tech" is not a vertical.
- **Sub-vertical** — "SaaS" → "vertical SaaS for healthcare" is a different ICP than "horizontal devtools SaaS." Go one level deeper than the top category.
- **Geography** — country, region, and sometimes city (sales-led motions often cluster by hub).
- **Company stage** — bootstrapped, seed, Series A-D, public, PE-owned. Stage predicts buying behavior more than size does.
- **Funding signal** — recently funded (last 6-12 months) often signals budget; recently laid off signals freeze.
- **Business model** — B2B, B2C, B2B2C, marketplace, e-commerce, services. Different motions buy differently.
- **Growth rate** — fast-growing companies buy more software per employee.

**How to extract patterns:**
1. Export your best-customer cohort to a sheet.
2. Enrich with Clay/Apollo (company size, industry, funding).
3. Compute distributions: what % of best customers fall in each band?
4. Compare to your overall closed-won distribution. **Look for over-representation** (best customers are 2x more likely to be Series B than other customers → Series B is in the ICP).

**Decision criteria:**
- If >60% of best customers cluster on a firmographic dimension → it's a defining criterion.
- If 30-60% → it's a "nice to have" signal.
- If <30% → it's not a meaningful pattern.

**Common gotcha:** Confusing correlation with cause. If 80% of customers are in tech, that may just reflect where you sold, not where you should sell. Always cross-check against retention and expansion, not just acquisition.

---

### Step 3: Layer in Technographics

Technographics — what software the company runs — are the most predictive B2B signal after firmographics, and the most underused.

**Why technographics matter:**
- They predict tech sophistication, integration needs, and switching cost.
- They signal adjacent buying (a company that just bought Salesforce often buys a Salesforce-adjacent tool 6-12 months later).
- They surface displacement opportunities ("companies running Tool X are 3x more likely to buy us").

**Sources:**
- BuiltWith (web tech stack)
- HG Insights, TheirStack (enterprise software install base)
- Clearbit (tech stack in firmographic enrichment)
- LinkedIn job posts (mentioned tools = signal of usage)
- Product integrations (who appears in our integration logs)

**What to capture:**
- **Required stack** — tools that must be present for your product to deliver value (e.g., if you're a Salesforce add-on, Salesforce is gating).
- **Adjacent signal** — tools whose presence correlates with high fit (e.g., HubSpot users often need our analytics product).
- **Negative signal** — tools whose presence indicates a competitor or substitute is entrenched.

**Common gotcha:** Treating technographic data as ground truth. BuiltWith picks up scripts that may not reflect real usage. Always validate at least 10 accounts manually before trusting a technographic filter.

---

### Step 4: Identify Behavioral & Intent Patterns

How customers find you, buy from you, and use you is more predictive than what they are.

**Acquisition behaviors:**
- Channel of first touch (organic search, paid, referral, outbound, community)
- Time from first touch to opportunity
- Number of touches before MQL
- Self-serve signup vs. demo request

**Buying behaviors:**
- Solo decision vs. committee (and committee size)
- Trial-first vs. demo-first
- Time-to-close (median and distribution)
- Price sensitivity (negotiated discount %)
- Procurement complexity (do they require SOC 2, SSO, MSA review?)

**Usage behaviors (product telemetry):**
- Time to first value (TTFV)
- Activation rate (% who hit the "aha" event)
- Weekly active usage in first 30 days
- Feature adoption breadth (1 feature vs. 4+ features)
- Multi-seat invitation rate

**Intent signals:**
- G2/Capterra category research
- Bombora / 6sense intent topics
- Direct site visits (return visits, pricing page views)
- Content engagement depth

**Decision criteria:**
- Best customers should share at least 3 acquisition + buying + usage patterns. If they don't, your "best customer" definition is incoherent or your sample is too small.

**Common gotcha:** Confusing usage patterns of *all* customers with patterns of *best* customers. The interesting question is what best customers do *differently* in their first 14 days.

---

### Step 5: Capture Psychographics (Beliefs, Fears, Identity)

Psychographics turn a target list into messaging. Without them, the ICP is a spreadsheet, not a marketing tool.

**The four psychographic dimensions:**

- **Beliefs** — what do they believe about the problem, the category, the industry direction? ("AI will displace 30% of customer support roles in 24 months.")
- **Fears / risk aversion** — what would they never tolerate? ("If we lose data, I lose my job.")
- **Identity** — how do they want to be perceived? ("Modern, data-driven, ahead of peers.")
- **Status anxiety** — what do they compete with peers on? (Speed of shipping, headcount efficiency, board-meeting metrics.)

**How to extract:**
- Mine customer interview transcripts (use the `customer-interview` skill).
- Read customer-written reviews on G2/TrustRadius — focus on the "why we chose" section.
- Pull quotes from sales call recordings (Gong, Chorus).
- Survey best customers: "What did you believe about [problem] before vs. after using us?"

**Output as concrete quotes**, not abstractions:
- Bad: "Values innovation."
- Good: "'If my team isn't using AI by Q3, I'll lose budget to a head of AI hire that didn't exist last year.'"

**Common gotcha:** Inventing psychographics. If you don't have direct quotes from customers, flag the section as "hypotheses to validate" and trigger the `customer-interview` skill.

---

### Step 6: Build a Fit-Score Model

Patterns are interesting; a fit score is operational. Turn the ICP into a numerical model sales runs on every account.

**The fit-score formula:**

```
Fit score = Σ (weight × dimension score)
```

**Recommended model (100 points total):**

| Dimension | Weight | Scoring |
|-----------|--------|---------|
| Company size in target band | 20 | Yes=20, adjacent=10, no=0 |
| Industry in target list | 15 | Tier 1=15, Tier 2=8, Tier 3=0 |
| Tech stack signal | 15 | Required tool present=15, adjacent=8 |
| Funding/stage match | 10 | Match=10, near-match=5 |
| Geography in serve area | 10 | Yes=10, no=0 |
| Use case fit (from intake) | 15 | Strong=15, weak=5 |
| Decision-maker engaged | 10 | Yes=10, no=0 |
| Intent signals (Bombora, site) | 5 | Active=5 |

**Tiering:**
- 80-100 = A-tier (sales prioritizes, marketing personalizes)
- 60-79 = B-tier (standard motion)
- 40-59 = C-tier (self-serve or nurture)
- <40 = disqualify or low-touch

**Common gotcha:** Weighting fit by gut. The weights should be derived from regression on closed-won data — what dimensions actually correlate with win rate? If you can't run regression, use win-rate-by-dimension as a proxy.

---

### Step 7: Define Negative Personas Explicitly

Who you exclude matters as much as who you include. Sales waste 40-60% of cycles on accounts that look like ICP but aren't.

**Capture for each negative persona:**
- **Surface profile** — why they look like a fit on paper.
- **Failure pattern** — why they churn, never convert, or eat support cycles.
- **Disqualification signal** — what to ask in discovery to detect it.
- **Drop policy** — disqualify entirely, or relegate to self-serve / community tier.

**Common B2B negative personas to consider:**
- **The single-user enthusiast** — buys for personal use but no team rollout → churns at renewal.
- **The competitor employee** — signs up to evaluate your product → no commercial value.
- **The pre-PMF startup** — pre-seed company with no users and no budget → churns in 60 days.
- **The agency reseller (when not your motion)** — uses your product for clients, won't expand seats internally.
- **The compliance-blocked enterprise** — requires controls you don't have (FedRAMP, HIPAA) → eats sales cycles.

---

### Step 8: Document & Operationalize

The ICP isn't done when it's written; it's done when sales, marketing, and product use it.

**Operational artifacts to ship:**
1. **ICP one-pager** — the canonical document (template below).
2. **Fit-score model** — implemented in CRM (HubSpot custom score, Salesforce formula field, or Clay enrichment).
3. **Outbound list specs** — Clay/Apollo filter syntax that builds an ICP-only target list.
4. **Paid targeting specs** — LinkedIn Matched Audience filters, Google Customer Match seed.
5. **Sales qualification questions** — 4-6 questions BDRs ask on every discovery to score fit live.
6. **Disqualification rules** — auto-route C/D tier to self-serve, block clear no-fits.

**Cadence:** Re-validate the ICP every quarter, fully refresh every 12 months. Markets shift, product matures, and last year's ICP is this year's drag.

---

## Output Format

```markdown
# Ideal Customer Profile: {{Product Name}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Review / Approved
**Based on:** {{N}} closed-won customers, cohort defined as {{cohort definition}}

---

## Executive Summary

We sell best to **{{1-sentence ICP}}**. We win because **{{1-sentence why-we-win}}**. We lose or churn when **{{1-sentence disqualifier}}**.

---

## Primary ICP: {{Segment name}}

### Firmographics

| Dimension | Target | Notes |
|-----------|--------|-------|
| Employee count | {{range}} | {{why}} |
| Revenue band | {{range}} | {{why}} |
| Industry | {{list}} | {{NAICS or sub-vertical}} |
| Stage | {{seed/A/B/C/PE}} | {{why}} |
| Geography | {{regions}} | {{why}} |
| Business model | {{B2B/B2C/etc.}} | {{why}} |

### Technographics

- **Required stack:** {{tools}} — without these, value delivery fails.
- **Adjacent signal:** {{tools}} — presence correlates with high fit.
- **Negative signal:** {{tools}} — entrenched competitor or substitute.

### Behaviors

- **Acquisition channel that converts best:** {{channel}}
- **Buying motion:** {{trial-first / demo-first / committee}}
- **Median sales cycle:** {{N}} days
- **Activation pattern:** {{TTFV, feature adoption, seat invites}}

### Psychographics

- **Beliefs:** "{{verbatim customer quote}}"
- **Fears:** "{{quote}}"
- **Identity:** "{{quote}}"
- **Status anxiety:** "{{quote}}"

### Decision-Maker Profile

- **Title pattern:** {{titles}}
- **Reports to:** {{role}}
- **Tenure in role:** {{typical}}
- **Buying authority:** {{solo / committee size}}

### Fit-Score Model

| Dimension | Weight | Scoring |
|-----------|--------|---------|
| {{dimension}} | {{weight}} | {{rules}} |
| ... | ... | ... |
| **Total** | **100** | A=80+, B=60-79, C=40-59, D<40 |

### Qualification Questions (for sales discovery)

1. {{question}} → scores {{dimension}}
2. {{question}} → scores {{dimension}}
3. {{question}} → scores {{dimension}}

---

## Secondary ICP: {{Segment name}}

[Same structure as primary, abbreviated]

---

## Negative Personas (Do NOT Target)

### {{Persona name}}
- **Surface profile:** {{why they look like a fit}}
- **Failure pattern:** {{why they fail}}
- **Detect via:** {{discovery question or data signal}}
- **Drop policy:** {{disqualify / self-serve / nurture}}

[Repeat for each negative persona]

---

## Operational Specs

### Outbound List (Clay/Apollo filter)

```
employee_count: {{range}}
industry IN ({{list}})
funding_stage IN ({{list}})
technology_used INCLUDES {{tool}}
country IN ({{list}})
title_seniority IN (Director, VP, C-level)
title_function IN ({{functions}})
```

### Paid Targeting (LinkedIn)

- Company size: {{ranges}}
- Industries: {{list}}
- Job titles: {{list}}
- Job seniority: {{levels}}
- Exclude: {{competitor employees, current customers}}

### Disqualification Rules (auto-routes)

- If {{condition}} → route to {{destination}}
- If {{condition}} → route to {{destination}}

---

## Marketing Implications

- **Channels to prioritize:** {{list}}
- **Messages that resonate:** {{themes from psychographics}}
- **Content topics:** {{list}}
- **Proof to lead with:** {{case study types, logos}}

---

## Next Steps

- [ ] Implement fit-score model in CRM
- [ ] Build outbound list from new ICP filter
- [ ] Update sales qualification scripts
- [ ] Brief paid team on new targeting
- [ ] Schedule quarterly ICP review ({{date}})
```

---

## Quality Bar

A skill output is "done" when:

- [ ] ICP is derived from a defined "best customer" cohort, not assumption.
- [ ] Cohort definition (revenue, retention, expansion, velocity, advocacy) is explicit.
- [ ] Firmographics include employee count AND revenue AND stage AND industry sub-vertical.
- [ ] Technographics include at least one required, one adjacent, and one negative signal.
- [ ] Psychographics are backed by direct customer quotes (or flagged as hypothesis).
- [ ] Fit-score model has weights, dimensions, and tier thresholds.
- [ ] At least one negative persona is documented with a disqualification signal.
- [ ] Operational specs (outbound, paid, qualification questions) are provided.
- [ ] All sections of the output template are filled — no `{{placeholders}}` remain.
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (no contradictions).

### Common Mistakes

1. **Aspirational ICP** — Listing the logos you wish bought from you (Stripe, Datadog, Notion) rather than the ones who actually buy and retain. **Why it happens:** Wishful thinking, board pressure for marquee logos. **Fix:** Force the ICP to be derived from a defined cohort with revenue + retention filters. If your best-customer list is unrecognizable, that's the signal — go sell to those companies, not the imagined ones.

2. **One-dimensional segmentation** — "We sell to mid-market B2B SaaS." That's a category, not an ICP. **Why it happens:** Skipping the work of cross-cutting firmographics with stage, tech stack, and behavior. **Fix:** Every ICP statement must combine at least four dimensions (size + industry + stage + tech signal OR behavioral signal).

3. **Acquisition-only data** — Building ICP from closed-won data alone, ignoring churn and expansion. **Why it happens:** Sales data is easier to access than CS data. **Fix:** Filter the cohort to customers with ≥12 months tenure AND positive NRR. Customers who churned in month 4 are not "best" regardless of how fast they closed.

4. **No negative personas** — Documenting who to target but not who to avoid. **Why it happens:** It feels negative; teams want to "open the funnel." **Fix:** For every primary ICP, document at least 2 negative personas with explicit disqualification signals. Track win rate by tier — if C-tier wins <10% but consumes 40% of BDR time, the math is broken.

5. **Treating ICP as static** — Writing it once, never updating. **Why it happens:** ICP work is hard; nobody owns refresh cadence. **Fix:** Schedule quarterly ICP reviews (15 min) and annual full refreshes (1 day). Add a "last validated" date to the doc. Markets and products shift fast enough that a 2-year-old ICP is misleading sales.

6. **Confusing user with buyer** — In PLG products especially, the end-user and the economic buyer are different humans with different firmographics and psychographics. **Why it happens:** Bottom-up motions blur the line. **Fix:** Document a "user ICP" and a "buyer ICP" as separate profiles when they diverge, and explicitly map the conversion path between them.

7. **Vanity firmographics** — Citing Fortune 500 logos without distinguishing the buying unit. "Acme Corp uses us" might mean 3 seats in one team, not an enterprise deployment. **Why it happens:** Logos sell. **Fix:** Track the buying unit (team, division, company-wide) and use ACV-weighted firmographics, not logo-weighted.

---

## Examples

### Example 1: Series B PLG analytics tool refining ICP from "any tech company"

**Context:**
- Company: Plotline, a product analytics tool, $9M ARR, 42 employees, Series B.
- Goal: Replace a vague "tech companies with product teams" ICP with one sales can actually qualify against.
- Constraint: Pre-existing 240 customer base; need data-driven refresh in 2 weeks.

**Input from user:**
> "Sales is missing quota and burning cycles on bad-fit leads. Marketing's outbound lists feel random. We have 240 customers and Salesforce + Mixpanel access. Help us define a proper ICP we can all run on."

**Output (abbreviated):**

```markdown
# Plotline ICP — Primary

### Cohort definition
Top 48 customers (top 20% of 240) scored on composite of:
- ARR >$25K (50th percentile)
- Tenure ≥14 months
- NRR ≥110%
- NPS ≥8
- 3+ active product surfaces in last 30 days

### Firmographics
- Employee count: 80-500 (sweet spot 120-300)
- Stage: Series B-C (28 of 48), bootstrapped >$5M ARR (12 of 48)
- Sub-vertical: Vertical SaaS (healthtech, fintech, edtech) — 32 of 48
- Geography: US (38), Canada (5), UK (5)

### Technographics (required + signal)
- REQUIRED: Segment OR Rudderstack OR custom event pipeline (we ingest events)
- STRONG: Hightouch / Census (reverse ETL) — 22 of 48 customers run one
- NEGATIVE: Amplitude or Heap as primary analytics (we lose 70% head-to-head)

### Decision-maker
- Title: Head of Product (22), VP Product (14), Sr PM in PLG companies (12)
- Reports to: CEO (26), CPO (16), CRO (6)
- Buying authority: Solo for <$30K ACV, committee with eng leader above

### Fit-score (deployed in Salesforce)
A-tier ≥75: 18% of inbound, 62% close rate
B-tier 50-74: 41% of inbound, 28% close rate
C-tier <50: auto-routed to self-serve trial, no SDR touch
```

**Why this works:** The cohort was defined first, the firmographics fell out of the cohort data, and the fit-score immediately reduces sales waste because C-tier no longer consumes BDR cycles.

---

### Example 2: Pre-PMF dev tool with 14 customers defining a hypothesis ICP

**Context:**
- Company: Frame, a code review tool, $180K ARR, 8 employees, post-seed.
- Goal: Define a working ICP for outbound, knowing the sample size doesn't support statistical analysis.
- Constraint: 14 paying customers, no formal CS data, founder-led sales.

**Input from user:**
> "We're too small for proper ICP analysis but our outbound is unfocused. Founders pattern-match on 'feels right' which doesn't scale to two SDRs we're hiring. Help."

**Output (abbreviated):**

```markdown
# Frame ICP — Hypothesis (V0.1, sample n=14)

### Cohort definition
All 14 paying customers; no exclusions. Sample too small for "best" filtering.
Hypothesis grade: directional, not statistical. Re-validate at n=40.

### Pattern observations (with confidence flags)

**Strong patterns (≥10 of 14 share)**
- Engineering team size: 15-60 (12/14 in this band)
- GitHub-hosted (14/14) — required, gating
- Has dedicated security/platform engineer role (11/14)
- Post-Series A (10/14) — pre-A companies haven't felt the pain yet

**Suggestive patterns (7-9 of 14 share)**
- Ships >5 PRs per engineer per week (8/14, where we have telemetry)
- Has had a recent prod incident traced to code review gap (9/14, from interviews)

**Anti-patterns (where we lost or churned)**
- Teams <8 engineers — code review tooling is overkill (lost 6 deals)
- Heavy GitLab users — our GitLab integration is weak (churned 2)
- Agency/consultancy model — they don't review their own code (lost 4)

### Recommended outbound filter (V0.1)
- 15-60 engineers (LinkedIn job posts)
- Has Series A-C funding in last 24 months
- GitHub-hosted (confirm via public repos)
- Has hired a platform/security engineer in last 12 months
- Exclude: agencies, GitLab-first, <Series A

### Sales discovery (qualifies live)
1. "How many engineers are pushing code daily?" → size
2. "GitHub or GitLab?" → tech fit
3. "Walk me through your last prod incident — was code review involved?" → pain
4. "Who owns code review process today?" → buyer ID

### Revalidation trigger
At n=40 customers, run proper cohort analysis. Until then, treat this as a hypothesis to test, not truth.
```

**Why this works:** Acknowledging the small-sample limitation prevents the team from over-trusting the ICP, while still giving SDRs a concrete filter to work from. The revalidation trigger forces a refresh.

---

## Related Skills

- **[`cm-context`](../cm-context/SKILL.md)** — Run *before* this skill. Provides the product, audience, and competitor context the ICP builds on.
- **[`customer-research`](../customer-research/SKILL.md)** — Use *alongside* this skill. Supplies JTBD insights and direct customer quotes that populate the psychographics section.
- **[`customer-interview`](../customer-interview/SKILL.md)** — Use *before* finalizing psychographics. Run 10-15 interviews to surface beliefs, fears, and identity claims with real language.
- **[`market-sizing`](../market-sizing/SKILL.md)** — Use *after* this skill. ICP defines the SAM filters that turn TAM into a serviceable market.
- **[`competitive-analysis`](../competitive-analysis/SKILL.md)** — Use *alongside*. Negative technographic signals (entrenched competitors) come from competitive analysis.
- **[`positioning`](../positioning/SKILL.md)** — Use *after*. ICP defines the "best-fit customers" input to the Obviously Awesome canvas.
- **[`channel-strategy`](../channel-strategy/SKILL.md)** — Use *after*. ICP behaviors point directly to channel prioritization.

---

## References

- April Dunford — *Obviously Awesome* (best-fit customer chapter)
- Bob Moesta / Clayton Christensen — Jobs-to-be-Done framing for buyer psychographics
- Jason Lemkin (SaaStr) — best-customer cohort methodology
- David Skok (For Entrepreneurs) — fit-score and LTV/CAC linkages
