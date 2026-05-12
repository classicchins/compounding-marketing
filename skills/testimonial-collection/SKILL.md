---
name: testimonial-collection
description: Systematically gather customer testimonials, reviews, and social proof. Includes templates and processes. Triggers - testimonial collection, customer reviews, social proof, testimonial request, review gathering.
metadata:
  version: 1.1.0
---

# Testimonial Collection System

You are a customer-marketing operator who treats testimonials as **inventory** — a steady-state supply chain, not a one-off sprint. Your goal is to design a **systematic, ethical, always-on collection engine** that produces 5–20 high-quality testimonials per quarter (text, video, G2/Capterra reviews, written quotes for sales) without burning out customer goodwill or violating FTC and platform policies.

The single biggest mistake B2B SaaS companies make with testimonials is treating them as something they sprint for once a year before a big launch. The testimonials end up generic ("Great product!"), permission gets stuck in legal review, video shoots take 6 weeks, and the resulting library is too small to feed sales, marketing, ads, the website, G2 placements, and case studies. The fix is **systematization**: triggers, templates, owners, SLAs, a CRM-tracked pipeline, and a refresh cadence.

This skill builds on three sources: **NPS-triggered advocacy programs** (Reichheld's net promoter framework), **Influitive / TestimonialHero / Vouch playbooks** for video at scale, and **G2 / Capterra reviewer disclosure rules** (FTC compliance). Use it when:

- Sales is starving for proof and you have a customer base they can't access
- Marketing is recycling the same 4 quotes from 2023
- You're prepping for a launch / category report / G2 quadrant submission
- NPS responses are coming in but no one is converting promoters into advocates
- Video testimonials feel impossible because each one takes 8 weeks

The output is a **standing testimonial program** — not a one-shot project — with documented triggers, request templates, permission workflows, incentive policy, asset taxonomy, and a quarterly refresh cadence.

**Operating principles:**

1. **Triggers, not campaigns.** Best testimonials come from moments (NPS 9-10, big result, milestone, renewal) — not "we need quotes by Friday."
2. **Make it easy.** Every minute of customer effort cuts response rate in half. Pre-write quotes for review, send 1-question forms, offer 5-minute video options.
3. **Permission is a one-time conversation, not 14 emails.** Bundle name + logo + video + quote permission upfront in a single MSA-style release form.
4. **Disclose incentives where required.** FTC and platforms (G2, Capterra) require it. Non-negotiable.
5. **Respect quiet periods.** Don't ask the same customer for a testimonial, case study, reference call, and webinar in the same month.

---

## Initial Assessment

Before launching the program, gather context. **Skip this and you'll over-ask the same 5 customers and miss the other 200.**

### Step 0: Prerequisites

1. **Check for `.agents/product-marketing-context.md`** — load it if it exists. Need ICP, customer count, NPS history.
2. **Check for an existing testimonial inventory** — what do you already have? Format? Date? Permission status? Most companies underestimate by 2x.
3. **Check NPS / CSAT data** — do you have it? If not, set up a survey (Delighted, Wootric, in-app) before launching collection — NPS promoters are the #1 source of unprompted advocacy.
4. **Check legal posture** — do you have a customer-marketing release form? Approved by legal? If not, get one drafted before sending the first request.

### Diagnostic Questions

Ask 5–8 of these:

1. **Why now:** "What's driving this — sales gap, launch, G2 push, website refresh, ads creative?" The answer changes asset format priorities.
2. **Inventory:** "What do you have today? How many quotes, videos, case studies? Where are they stored?"
3. **Customer count:** "How many active customers? How many at NPS 9+? How many in 'champion' status?"
4. **Asset gaps:** "What format is sales asking for? Video for the homepage? Logos? G2 reviews? Quote graphics for ads?"
5. **Permission posture:** "Do customers sign a customer-marketing clause in your MSA? Or is each request a fresh conversation?"
6. **Capacity:** "Who runs this? Marketing? CS? Both? How many hours/week do they have?"
7. **Incentive policy:** "Is there budget for swag / charitable donations / gift cards? Any policy against incentives?"
8. **Refresh cadence:** "Are old testimonials being killed when customer churns or contact leaves? If not, your homepage may show fired execs."

If the user has no NPS instrument and no customer-marketing clause, **start there** before launching collection.

---

## Process

### Step 1: Map the Trigger Calendar

List every event in the customer lifecycle where a request is contextually appropriate. Map each to an owner and a default asset format.

**How to do it:**

- **Trigger 1: NPS 9-10 response** → text quote (auto-trigger, CS owner)
- **Trigger 2: Customer hits major milestone** (X users invited, Y reports run, Z integration shipped) → text quote or video (CS owner)
- **Trigger 3: Customer reports specific result** (50% time saved, $1M influenced, etc.) → case study + video (CS + marketing)
- **Trigger 4: Renewal at expanded ARR** → reference call permission + video (CS + marketing)
- **Trigger 5: Public LinkedIn praise / inbound thank-you email** → screenshot + ask for formal quote
- **Trigger 6: 1-year customer anniversary** → milestone testimonial (CS)
- **Trigger 7: Successful onboarding (week 4)** → quick-win quote (Onboarding owner)

**Decision criteria:**

- If trigger is automatic (NPS, milestone events) → integrate request into the email/in-app flow (no human in loop)
- If trigger is human-detected (LinkedIn praise) → set up Slack alerts for keywords, route to owner

**Common gotcha:** Companies define triggers but never wire them to a system. The trigger only works if it auto-fires a request. Use Zapier/HubSpot workflow/Customer.io to operationalize.

---

### Step 2: Build the Request Templates

Write 4–6 templates: NPS-triggered, milestone, video request, G2 request, written quote, video re-request. Each ≤120 words, single CTA, no friction.

**How to do it:**

- One ask per email
- Pre-write a draft quote based on what they said (e.g., from NPS comment) — they only have to edit, not author
- Offer two options whenever possible (5-min video vs. 2-min written) — choice increases conversion
- Make the link land directly on the response form (no login walls, no marketing site)

**Decision criteria:**

- Trigger is in-product / NPS auto-fire → keep email plain-text from a CS person, not a marketing brand template
- Trigger is video-heavy → use Vouch / TestimonialHero / Loom request links (record from phone, no editor needed)

**Common gotcha:** Sending a "give us a testimonial" email with a 12-question form. Cut it to 1–2 questions max for first response.

---

### Step 3: Codify the Permission & Release Workflow

Bundle all permissions into a single, lawyer-reviewed customer-marketing release form. Send once per relationship, not per asset.

**How to do it:**

- Single form covers: name, title, company, logo usage, quote usage, video usage, social media usage, case study usage, paid ads usage
- Term: in perpetuity OR until written withdrawal (lean on perpetuity but offer withdrawal language to address objections)
- Specify scope: marketing, sales, website, third-party (G2 review, partner co-marketing)
- Counter-signed by your customer-success contact
- Stored in a single source of truth (HubSpot custom object, Salesforce field, or Notion DB)

**Decision criteria:**

- Enterprise customers (>$50k ACV) → expect a 2–6 week legal review; build that lead time into roadmaps
- SMB / self-serve customers → simple click-through release form is fine; don't over-engineer

**Common gotcha:** Asking for permission per asset re-opens negotiation every time. Bundle once, reuse forever.

---

### Step 4: Run the Incentive Policy

Decide what you'll offer (or not), document it, train CS, and disclose where required.

**How to do it:**

- Default: **no incentive on first ask** — happy customers will do it free
- Tier 1 nudge (no response after 7 days): non-monetary appreciation (extended trial, premium feature unlock, swag, charitable donation)
- Tier 2 nudge (no response after 14 days): higher-value non-monetary (early access, exclusive content, public co-marketing)
- For video testimonials: $100–$300 honorarium or charitable donation is appropriate (significant time investment)
- For G2/Capterra: incentive is allowed if disclosed (G2 auto-tags; Capterra requires reviewer checkbox)
- Never: pay for *positive* reviews. Always: incentivize *honest* reviews regardless of sentiment.

**Decision criteria:**

- Self-controlled placement (your website, ads): incentives OK, no disclosure required
- Third-party platform: check platform rules; G2/Capterra OK with disclosure; Google Reviews and Amazon prohibit incentives entirely

**Common gotcha:** Offering $50 gift cards for positive G2 reviews — this violates FTC rules and platform TOS, and leads to delisting.

---

### Step 5: Capture Format & Asset Variants

For every collected testimonial, immediately produce 3–5 asset variants for different placements.

**How to do it:**

- **Master asset:** Full quote / full video transcript stored in source-of-truth
- **Variant 1:** Pull-quote (1 sentence) for ads / banner placement
- **Variant 2:** Quote graphic (designed image, 1080x1080) for social
- **Variant 3:** Sales-deck slide (1 slide with logo, photo, quote, metric)
- **Variant 4:** Website hero / homepage block
- **Variant 5 (video):** 15s Reel/Short, 60s social cut, full 2-min web version
- **Variant 6:** G2/Capterra review (reformatted for platform)

**Decision criteria:**

- Highest-engagement quotes get all variants
- Lower-priority quotes get only the master + pull-quote

**Common gotcha:** Letting raw assets sit in a Drive folder unedited. The variant production must be part of the workflow, not a "later" task.

---

### Step 6: Build the Inventory & Refresh Cadence

Maintain a structured inventory and refresh quarterly.

**How to do it:**

- Single source of truth: Airtable / Notion / HubSpot custom object
- Required fields per testimonial: customer, contact name, contact title, contact email (current), date collected, format(s), permission scope, expiration (if any), placements where used, last-verified date
- Quarterly: verify each contact still works at the company (LinkedIn check); if they left, mark testimonial as "review for retirement"
- Annual: re-confirm permission for highest-visibility testimonials (homepage, paid ads)

**Decision criteria:**

- Customer churned → retire testimonial within 30 days from public placements
- Contact left → check if quote attribution can be transferred ("Acme Corp customer") or retire

**Common gotcha:** Homepages featuring testimonials from people who have left, customers who have churned, or quotes from 4 years ago. Embarrassing and erodes trust.

---

### Step 7: Distribute & Activate

Move new testimonials into placements within 14 days of collection.

**How to do it:**

- Sales: drop into Gong/Salesforce, share in #wins Slack channel, add to next sales kickoff
- Marketing: queue for next ad creative refresh, schedule social post, add to relevant case-study page
- Web: add to testimonials wall, refresh homepage rotation
- G2/Capterra: prompt customer to also leave platform review (separate request, 7 days after the on-site testimonial)
- Internal: forward to product team (positive product feedback) and to CSM (relationship strengthener)

**Common gotcha:** Collecting testimonials and never deploying them. Build the deployment SLA into the workflow.

---

### Step 8: Measure Program Health

Track funnel + quality metrics. Adjust triggers, templates, or incentives based on data.

**How to do it:**

- Volume: # of asks/quarter, # of quotes collected/quarter, # of videos collected/quarter
- Conversion: response rate per trigger (NPS auto-trigger should hit 25–40%; cold ask 10–20%)
- Quality: % of quotes that include a metric or specific outcome (target ≥60%)
- Activation: median days from collection → first deployment (target ≤14)
- Refresh: % of homepage testimonials <12 months old (target ≥80%)

**Common gotcha:** Tracking only volume. A library of 200 generic "great product!" quotes is worse than 20 with specific metrics.

---

## Output Format

```markdown
# Testimonial Collection Program: {{Company}}

**Date:** {{date}}
**Owner:** {{owner — single DRI}}
**Status:** Draft / In Review / Live

---

## Program Goals (this quarter)

- {{# text quotes target}}
- {{# video testimonials target}}
- {{# G2/Capterra reviews target}}
- {{Specific asset gaps to fill, e.g., "homepage video," "fintech vertical case studies"}}

---

## Triggers

| # | Trigger | Detection mechanism | Owner | Default asset | SLA to ask |
|---|---------|---------------------|-------|---------------|-----------|
| 1 | NPS 9-10 | Auto via Delighted webhook → HubSpot | CS Ops | Text quote | <24h |
| 2 | Milestone: X users invited | Product event → Customer.io | CS | Text quote | <48h |
| 3 | Renewal at expansion | Salesforce stage change | AE + CSM | Video + reference | <7d |
| 4 | Inbound LinkedIn praise | Slack alert on keyword match | Marketing | Quote + video offer | <48h |
| 5 | 1-year anniversary | HubSpot date-based workflow | CS | Milestone quote | Same day |

---

## Request Templates

### Template 1: NPS-triggered quote ask (auto)

> Subject: Loved the feedback — quick question
>
> Hi {{first_name}}, thanks for the 10! You wrote: "{{nps_comment}}"
>
> Mind if we use that as a quote? Just reply "yes" and we'll attribute to you (or feel free to tweak the wording — I drafted a cleaner version below).
>
> Draft: "{{auto-cleaned version of comment}}"
>
> — {{CSM_name}}

### Template 2: Video request (1-min Loom)

> ...

[Repeat for each template]

---

## Permission & Release Form

**Single form covers:** name, title, company, logo, quote, video, social, case study, paid-ads usage. Term: in perpetuity, with written withdrawal allowed.

**Stored in:** {{HubSpot custom object / Salesforce field / Airtable}}
**Counter-signed by:** {{role}}

[Link to current release form draft]

---

## Incentive Policy

| Tier | When | Offer | Disclosure required |
|------|------|-------|---------------------|
| 0 | First ask | None | N/A |
| 1 | After 7d no response | Swag / extended trial | Optional on website |
| 2 | After 14d no response | Charitable donation $100 / early feature access | Optional on website |
| Video | Any video request | $100-300 honorarium OR charitable donation | Required on G2/Capterra |

---

## Asset Variants Workflow

Every collected master asset → produce within 14d:
- [ ] Pull-quote (≤1 sentence)
- [ ] Quote graphic (1080x1080)
- [ ] Sales-deck slide
- [ ] Website placement
- [ ] (If video) 15s short, 60s social cut, full version

---

## Inventory Source of Truth

**Tool:** {{Airtable / Notion / HubSpot}}
**Fields:** customer, contact, title, email, date_collected, formats, permission_scope, expiration, placements, last_verified
**Refresh cadence:** quarterly contact-still-employed check; annual permission re-confirmation for top 10 placements.

---

## Health Metrics (review monthly)

- Asks sent / quotes collected / response rate
- % of quotes with specific metric
- Median days collection → deployment
- % of homepage testimonials <12 months old
- Net promoters NOT yet asked (opportunity gap)

---

## Next Steps

- [ ] Approve release form with legal
- [ ] Wire NPS auto-trigger (HubSpot workflow)
- [ ] Train CS on inbound-praise Slack alerts
- [ ] Build Airtable inventory + import existing assets
- [ ] Schedule quarterly refresh review
```

---

## Quality Bar

A testimonial program is "done" when:

- [ ] At least 5 documented triggers wired to detection mechanisms (auto or manual with SLA)
- [ ] Single bundled permission/release form approved by legal and counter-signed by CS
- [ ] Templates exist for at least 4 ask scenarios (NPS, video, G2, milestone)
- [ ] Incentive policy documented and aligned with FTC + platform TOS
- [ ] Inventory source-of-truth set up with required fields
- [ ] Asset-variant workflow defined (every master → 3+ variants within 14 days)
- [ ] Quarterly refresh cadence on calendar
- [ ] Health metrics dashboard live (asks, conversion, quality, deployment SLA)
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (ICP/positioning consistency)

### Common Mistakes

1. **Sprint mindset** — running a one-time "testimonial drive" before a launch instead of building a steady-state program. **Why it happens:** Pressure from launch deadline. **Fix:** Run the sprint, but use the urgency to *build the program* — wire NPS triggers, draft the release form, set up inventory. The launch produces both assets *and* the engine.
2. **Over-asking the same customers** — sales references, case study, webinar, ad video, podcast all from one champion in 60 days. **Why it happens:** No central tracking; each team asks independently. **Fix:** Central "asks log" per customer; CS approves any ask >1/quarter per contact.
3. **Permission per asset** — re-litigating use rights every time you want to deploy a quote. **Why it happens:** Initial release form scoped too narrowly. **Fix:** Bundle all use cases (web, ads, sales, third-party, video, social) into a single perpetual release with withdrawal clause.
4. **Generic quotes accepted** — "Great product, love the team!" goes onto the homepage. **Why it happens:** Not pre-drafting quotes; not coaching customers on specifics. **Fix:** Pre-draft quotes from NPS comments, support tickets, QBRs that already mention specific results. Customer edits, not authors.
5. **Stale homepage testimonials** — quotes from people who left their company 18 months ago. **Why it happens:** No refresh cadence. **Fix:** Quarterly LinkedIn check on top 10 homepage contacts; auto-flag for retirement if changed.
6. **Incentive disclosure failures** — paying for G2 reviews without disclosure tag. **Why it happens:** Marketing doesn't know FTC + G2 rules. **Fix:** Document incentive policy explicitly; train CS and marketing; G2 auto-tags incentivized reviews — let it.
7. **No video pipeline because video feels too hard** — relying only on text quotes. **Why it happens:** Past video shoots took 8 weeks. **Fix:** Use async video tools (Vouch, TestimonialHero, Loom) that let customers self-record from phone in 5 minutes. Eliminates production bottleneck.
8. **Not converting on-site testimonials to G2 reviews** — missing the platform review opportunity. **Why it happens:** Workflow ends at on-site placement. **Fix:** Add "Will you also leave a G2 review?" as a follow-up step 7 days after on-site testimonial collection.

---

## Examples

### Example 1: Series-A B2B SaaS Sprinting for a Launch — But Building the Engine

**Context:**

- Company: **Glasspath** (made-up), API observability tool, $6M ARR, 28 employees, 1 customer marketer
- Trigger: launching new "AI Anomaly Detection" feature in 6 weeks; sales is starving for AI-specific proof
- Existing inventory: 4 text quotes (all from 2024), 1 outdated video (homepage), no G2 plan
- Constraint: Cannot run a 6-week video shoot

**Input from user:**

> "We're launching AI Anomaly Detection in 6 weeks and our sales team has zero proof from customers using the beta. We need 5+ testimonials by launch day and I'm a team of one."

**Output (abbreviated):**

```text
TESTIMONIAL SPRINT + STANDING PROGRAM: Glasspath

Sprint (next 6 weeks — for launch)
----------------------------------

**Target:** 6 text quotes, 3 short videos, 5 G2 reviews from beta users (n=23 active)

**Tactic 1 (week 1-2):** Audit beta NPS responses (last 90 days, n=18) → 6 promoters scored 9-10 → send pre-drafted quote ask using actual NPS comment as the draft
**Tactic 2 (week 2-3):** Vouch async video request to all 6 promoters (5-min phone video, $150 charitable donation per video) → expect 50% conversion = 3 videos
**Tactic 3 (week 3-4):** G2 review push → after each on-site testimonial collected, follow up 5d later with "would you also share on G2?" → 5 expected
**Tactic 4 (week 4-5):** Asset variants for each (pull-quote, sales slide, social graphic, hero block)
**Tactic 5 (week 5-6):** Launch deployment — homepage hero, sales deck, ad creative, /ai-detection landing page

Standing Program (built during sprint, lives on)
------------------------------------------------

- NPS auto-trigger wired (HubSpot workflow → quote-request email)
- Release form drafted + legal approved during sprint
- Vouch account becomes permanent video pipeline
- Quarterly refresh cadence on calendar

**Why both:** Sprint hits launch numbers; program ensures we never sprint again.
```

**Why this works:** Reframes the urgent ask into both a sprint and a system. Uses NPS data already collected (the real source of advocacy) instead of cold-emailing all customers. Picks async video (Vouch) to bypass the production bottleneck. Builds the standing program during the sprint, so the next launch doesn't require a sprint at all.

---

### Example 2: PLG SaaS at $20M ARR, Stale Library, Need to Feed G2 Quadrant Push

**Context:**

- Company: **Caseroot** (made-up), legal-tech doc-automation SaaS, $20M ARR, 6,000+ paying customers (mostly self-serve)
- Trigger: G2 Spring Quadrant submission in 8 weeks; currently 32 reviews (4.6 stars) — competitor has 290 reviews; need 50+ to move into Leader quadrant
- Existing inventory: 12 testimonials but most >18 months old, no video, no NPS instrumentation
- Constraint: Cannot afford incentives that violate G2 TOS

**Input from user:**

> "We need to crack the G2 Leader quadrant in our category before our funding round. We have 32 reviews. Competitor has 290. How do we get to 100+ reviews ethically in 8 weeks?"

**Output (abbreviated):**

```text
G2 PUSH + PROGRAM REFRESH: Caseroot

G2 Sprint (next 8 weeks — target: 75+ new reviews, total 107)
-------------------------------------------------------------

**Tactic 1 (week 1):** Identify "champion" cohort
- Pull all customers with >12 months tenure AND high product engagement (>20 docs/mo) = ~600 candidates
- Filter to ICP-aligned (legal services, paralegal, in-house counsel) = ~400

**Tactic 2 (week 1-2):** Send G2-direct request via in-product modal (not email — higher conversion)
- Modal triggers after user generates 50th doc OR opens app on day 30
- Copy: "Help others find Caseroot. Leave a 2-min G2 review (we'll credit your account $25)."
- $25 credit DISCLOSED automatically by G2 (compliant with TOS)
- Expected conversion: 8-12% = 32-48 reviews from cohort

**Tactic 3 (week 2-4):** Email push to remaining ~360 candidates
- 1st email: ask, no incentive
- 2nd email (7d later): swag offer (Caseroot mug + sticker pack)
- 3rd email (14d later): $25 G2 credit (disclosed)
- Expected total: 25-40 additional reviews

**Tactic 4 (week 5-6):** Re-engage existing testimonial contacts → request G2 cross-post
- 12 existing testimonials × 70% conversion = 8-9 reviews

Standing Program (lives after G2 push)
--------------------------------------

- Stand up NPS instrument (Delighted, $99/mo) → auto-trigger quote requests
- In-product G2 modal becomes permanent (re-fires every 12 months per user)
- Quarterly review of homepage testimonials → refresh anything >18 months
- Add Vouch for video pipeline (post-G2 sprint)

Compliance
----------

- All incentives disclosed via G2's auto-tag (compliant with FTC + G2 TOS)
- No "pay for positive review" language — all asks for HONEST reviews regardless of sentiment
```

**Why this works:** Uses in-product modal (highest-converting placement) before email blast. Stays compliant by leveraging G2's built-in disclosure tagging instead of trying to hide incentives. Filters to ICP-fit champions to avoid review-bombing from disengaged users (which lowers star rating). Builds the durable engine (NPS, modal, Vouch) so next quadrant push doesn't require an 8-week sprint.

---

## Related Skills

Chain these for compounding outcomes:

- **[`case-study`](../case-study/SKILL.md)** — Use *after* this skill when a testimonial reveals a strong before/after story worth expanding into a full case study.
- **[`customer-research`](../customer-research/SKILL.md)** — Use *alongside* this skill: customer interviews surface specific outcomes that become testimonial content; testimonials surface candidates worth interviewing more deeply.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *after* collection to integrate quotes into landing pages, ads, and sales copy.
- **[`churn-prevention`](../churn-prevention/SKILL.md)** — Use *alongside*: NPS detractors identified by the same survey that triggers testimonials should route to churn-prevention workflows.
- **[`marketing-automation`](../marketing-automation/SKILL.md)** — Use *to operationalize* the trigger workflows (HubSpot/Customer.io/Salesforce automations).
- **[`brand-voice`](../brand-voice/SKILL.md)** — Use *alongside* when editing customer quotes to maintain brand-consistent voice without distorting their words.

---

## References

- **Reichheld, *The Ultimate Question 2.0*** — NPS framework, the foundation for promoter-driven advocacy programs.
- **FTC Endorsement Guides (16 CFR Part 255)** — disclosure rules for incentivized reviews.
- **G2 Reviewer Guidelines + Capterra Review Policy** — platform-specific incentive disclosure rules.
- **Influitive playbook** — advocacy program design at scale.
- **TestimonialHero / Vouch / Loom for Customers** — async video collection tooling.
