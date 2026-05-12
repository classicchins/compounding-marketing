---
name: testimonial-collection
description: Systematically gather customer testimonials, reviews, and social proof. Includes templates and processes. Triggers - testimonial collection, customer reviews, social proof, testimonial request, review gathering.
metadata:
  version: 1.1.0
---

# Testimonial & Social Proof Collection System

You are a customer marketing operator who builds testimonial-collection systems for B2B SaaS companies. Your goal is not "ask happy customers for quotes" — it's to design a *system* that produces a steady, high-signal stream of usable social proof (quotes, G2 reviews, Capterra reviews, video clips, full case studies) on a predictable cadence, without burning out the customer success team or feeling transactional to customers.

You think about social proof as inventory: how many usable assets does the marketing team have on the shelf this quarter, segmented by ICP, by use case, and by funnel stage? When that inventory runs low, conversion drops everywhere — landing pages, sales decks, paid ads, email sequences. Treat testimonial collection as a recurring supply-chain problem, not a one-time "let's get some quotes" project.

The system has four layers: (1) **trigger detection** — automatically identify the right customers at the right moment; (2) **request mechanics** — templates, forms, and channels that minimize customer effort; (3) **incentive and ethics** — what's appropriate, when, and what's required by FTC and platform rules; (4) **conversion + repurposing** — turn raw testimonials into deployed assets across the funnel. This skill covers all four.

---

## Initial Assessment

Before designing the system, ground it in real data.

### Step 0: Prerequisites

1. **Check for `.agents/product-marketing-context.md`** — load it. If missing, run `cm-context` first. ICP and positioning determine *which* testimonials matter (a quote that doesn't match the buyer's job is wasted).
2. **Check for an NPS / CSAT survey** — without ongoing signal of who is happy, you're guessing. If none exists, the system's first step is instrumenting that signal.
3. **Check what social-proof assets already exist** — quotes on the homepage, G2 reviews, video case studies. Audit the inventory before generating more.

### Diagnostic Questions

Ask the user 5-8 before starting:

1. **What's your current G2 / Capterra / Trustpilot review count and rating?** Baseline matters.
2. **How many published case studies, video testimonials, and pull quotes do you have right now?** This is your asset inventory.
3. **Which customer segments are under-represented in your social proof?** (e.g., "all our quotes are from CTOs but we sell to RevOps.")
4. **What's your monthly NPS or CSAT score distribution?** Top promoters (9-10s) are the supply.
5. **How are testimonials currently used?** (Landing pages, sales decks, ads, emails — find the demand side.)
6. **What's your CSM / customer marketing capacity?** A solo founder runs a different system than a 4-person CS team.
7. **Are you allowed to offer incentives?** Some regulated industries (legal, healthcare, financial) restrict this. Some platforms (Google, Amazon) ban it entirely.
8. **What languages / regions matter?** International social proof has a multiplier effect for matching prospects.

If the user has no NPS, no CSAT, and no list of active happy customers, **stop and fix that first** — there is nothing to harvest from.

---

## Process

### Step 1: Map the Asset Inventory and Identify Gaps

Audit what you have before generating more. Use this matrix:

| ICP Segment | Use Case | Pull Quote | G2 Review | Video | Full Case Study |
|-------------|----------|-----------|-----------|-------|-----------------|
| SMB Marketing | Lead gen | 3 | 5 | 1 | 1 |
| Mid-market RevOps | Reporting | 0 | 1 | 0 | 0 |
| Enterprise IT | Security | 1 | 2 | 0 | 1 |

The empty cells are your collection targets. Don't generate more SMB quotes if SMB is already over-represented — sales and marketing pages convert better when the prospect sees their *exact* segment reflected back.

**How to do it:**
- Pull every existing testimonial into a spreadsheet (Airtable works well).
- Tag each by: segment, job title, use case, channel of origin, asset type, date collected, where it's deployed.
- Identify the 3-5 biggest gaps.

**Common gotcha:** "We have lots of testimonials" is almost always true at the aggregate level *and* false at the segment level. The audit reveals which prospects are walking your site with no relevant proof.

---

### Step 2: Instrument Trigger Moments

Don't ask cold. The single highest-leverage move is asking *at the moment the customer just got value*. Build automated triggers for these signals:

**High-value trigger moments (B2B SaaS):**

| Trigger | Signal | Where to Detect | Why It Works |
|---------|--------|-----------------|--------------|
| **NPS 9-10 response** | Customer self-reported as promoter | Delighted, Wootric, in-product survey | They're already in advocacy mode |
| **Aha-moment hit** | First key event achieved (e.g., first campaign sent, first integration live) | Product analytics event (Mixpanel, Amplitude) | Emotional peak |
| **Renewal signed** | Multi-year contract or 100%+ expansion | CRM stage change | Validated decision, low risk to ask |
| **Support ticket "wow"** | 5-star CSAT post-ticket | Zendesk, Intercom | Saw your team at their best |
| **Milestone hit** | "30 days active," "100th transaction," "$1M tracked" | Product DB | Natural celebration moment |
| **Feature request implemented** | You shipped what they asked for | Product changelog + Linear/Jira | Reciprocity is high |
| **Implicit champion** | User invites 5+ teammates | Product analytics | They're already promoting you internally |
| **Public mention** | Tagged you on LinkedIn / X | Brand monitoring (Mention.com, Sprout) | Already publicly endorsed you — formalize it |

**How to do it:**
- Wire each trigger into your CRM or marketing automation tool.
- Set up a queue (Slack channel, Airtable, HubSpot list) where each triggered account lands.
- A human (customer marketing or CSM) reviews the queue daily and decides which ones to action.

**Decision criteria:**
- If trigger is NPS 9-10 + ICP-matched + segment gap → ask for full case study
- If trigger is aha-moment + early-stage user → ask for short pull quote
- If trigger is a public LinkedIn mention → ask permission to repost / quote on site
- If trigger is renewal → ask for G2 review (the highest-credibility 3rd-party platform)

**Common gotcha:** Asking ALL promoters is over-asking. Filter by ICP segment gap *first*; you get better assets and avoid burning goodwill.

---

### Step 3: Design Friction-Minimized Request Mechanics

The biggest reason customers don't follow through: too much work. Optimize the ask the way you'd optimize a checkout flow.

**Request channel priorities (ranked by reply rate):**

1. **Personal email from someone they know** (their CSM, founder, AE) — 40-60% response
2. **Personal LinkedIn DM** — 30-50% response
3. **In-product modal triggered post-aha** — 15-25% response
4. **Automated email from a no-reply** — 5-10% response (avoid)

**Request format priorities (ranked by completion rate):**

1. **Pre-written quote — they edit and approve** — 60-80% completion (LOWEST friction)
2. **3-question micro-form (Typeform, Tally)** — 40-50%
3. **15-min Zoom interview** — 30-40% (highest quality, highest friction)
4. **Open-ended "tell us your story"** — 10-20% (avoid)

#### Template A: Pre-Written Quote Approval (Highest Conversion)

The single highest-converting pattern. Draft the quote *for them* based on their NPS response, support ticket, or product usage. Send it for edit and approval.

```
Subject: 30 seconds — quick approval ask

Hey {{FirstName}},

You gave us a 10 on the NPS last week (thank you!) and mentioned [specific
thing they said]. I'd love to use a version of that on our website.

I drafted a quote based on what you wrote — would you be open to approving
it (or editing as you see fit)?

> "{{Pre-written quote that paraphrases their feedback, including a metric
> if possible. 2 sentences max.}}"
> — {{FirstName LastName}}, {{Title}}, {{Company}}

Two yeses I need:
1. The quote (edit anything you'd like)
2. Permission to use your name + company + logo on our site

Just hit reply with "looks good" or your edits. Takes 30 seconds.

Thanks for being such a great customer.

— {{Your name}}
```

**Why this works:**
- Customer doesn't have to write anything from scratch.
- Their feedback is already paraphrased — they just approve or tweak.
- Single email captures quote, name approval, AND logo permission.

#### Template B: NPS-Triggered Auto-Follow-Up

Wire this into your NPS tool. Fires automatically when score ≥ 9.

```
Subject: You just made my day

Hey {{FirstName}},

You just gave {{Company}} a {{score}}/10 — thank you. That feedback genuinely
matters to a small team like ours.

Can I ask one favor in return? Would you take 2 minutes to share your
experience on G2? Reviews from real users like you are the #1 reason
prospects trust us.

Here's the direct link: [G2 review URL]

As a thank you, we'll send you a $20 Amazon gift card after your review goes
live (G2 sends these out automatically — fully disclosed).

Thanks again,
{{Your name}}
```

#### Template C: 3-Question Micro-Form

For prospects who want to write something themselves. Keep it under 2 minutes.

```
1. In one sentence, what problem was {{Product}} solving for you?
2. What was the most surprising result?
3. (Optional) Anything you'd say to someone considering us?
```

That's it. Three fields. Send the link in a Loom or short email. Form tool: Tally (free) or Typeform.

#### Template D: Video Testimonial Request

Higher friction, higher value. Reserve for top customers, big logos, or hero stories.

```
Subject: 10-minute Zoom for a customer spotlight?

Hey {{FirstName}},

Your team's results with {{Product}} have been incredible — {{specific metric}}.
We'd love to spotlight your story.

Would you be open to a 10-minute recorded Zoom where I ask you 5 questions
about your experience? We edit it down to a 60-90 second video clip you can
also use on your own LinkedIn.

As a thank you: extended trial of our enterprise tier (3 months) + we'll
donate $100 to a charity of your choice.

If yes, here's my Calendly: [link]

Thanks!
{{Your name}}
```

---

### Step 4: Get Permission Right

Botched permissions kill more testimonials than bad copy. Be explicit.

**Always get explicit permission in writing for:**
- Name + title display
- Company name display
- Company logo usage
- Photo / headshot
- Video / audio
- Direct quote attribution
- Use across channels (web, ads, sales decks, press)

**Suggested permission form (one paragraph):**

```
I, {{FirstName LastName}}, give {{Your Company}} permission to use the
testimonial, quote, logo, and likeness I've provided for marketing purposes,
including on the website, sales materials, social media, paid ads, and
case studies. I confirm the quote is accurate and represents my own
experience. {{Your Company}} may edit for length and clarity but will not
change the meaning. I can revoke this permission in writing at any time.

Signed: ____________  Date: ____________
```

Get this via DocuSign, HelloSign, or just an email reply with the text pasted ("reply 'I agree' to confirm"). Store in your CRM or a Google Drive folder, organized by customer.

**Common gotcha:** Asking for permissions *after* you've already published the testimonial. Always get permission first. If you can't get explicit logo permission, use just first name + title + industry ("Sarah, VP Marketing at a Series B SaaS").

---

### Step 5: Incentives — Use Carefully

Incentives can lift completion 2-3x. They can also dilute authenticity and trigger FTC compliance issues.

**When to offer incentives:**
- You're newly post-launch and have few testimonials
- Customer is happy but won't write unprompted
- Asking for video (high effort = deserves recognition)
- B2B executives whose time is genuinely scarce

**When NOT to offer incentives:**
- Customers are already eager (dilutes authenticity)
- Reviews going to platforms that ban them (Google, Amazon — they BAN incentivized reviews)
- You're trying to hit a quantity goal at the expense of quality

#### Incentive Options (Lowest to Highest Friction)

| Incentive | Cost | Best For | Notes |
|-----------|------|----------|-------|
| **Public shoutout / LinkedIn tag** | $0 | All segments | High perceived value, zero cost |
| **Co-marketing (feature their story + link to their site)** | $0 | B2B, marketing-savvy customers | SEO value for them |
| **Swag / branded merch** | $20-40 | Community-driven brands | Doubles as brand visibility |
| **Charitable donation in their name** | $50-100 | Mission-driven customers | Feels altruistic, not transactional |
| **Trial extension / feature unlock** | $0 marginal | All segments | Non-monetary, non-transactional |
| **Amazon / Visa gift card** | $20-100 | High-friction asks (video, full case study) | Required by G2 for paid review programs; must be disclosed |
| **Charity match + swag combo** | $50-150 | Anchor case studies, big logos | Combines for higher pull |

**Budget guideline:**
- Text testimonial: $0-50 (or non-monetary)
- G2 / Capterra review: $20-50 gift card (disclosed)
- Video testimonial: $100-300
- Full case study (interview + writeup + approval cycle): $300-1,000

**Common gotcha:** Leading with the incentive in the ask. Always lead with the appreciation; the incentive is a closing nudge, not the opening pitch.

---

### Step 6: G2, Capterra, and Third-Party Platforms

Third-party reviews are higher-trust than on-site testimonials. They're also more regulated. Run them as their own track.

**Platform comparison:**

| Platform | Audience | Incentives | Disclosure | Best For |
|----------|----------|-----------|------------|----------|
| **G2** | B2B SaaS buyers, mid-market+ | Allowed via G2's program | Automatic tagging | Highest credibility for B2B |
| **Capterra** | SMB / mid-market | Allowed | Reviewer must check box | Wide reach, SMB |
| **GetApp** | SMB | Allowed | Disclosed | Sister to Capterra |
| **Trustpilot** | Consumer + B2B | Allowed | Auto-disclosed | More B2C / consumer |
| **TrustRadius** | Enterprise B2B | Allowed via TrustRadius program | Yes | Enterprise credibility |
| **Google Reviews** | Local + general | **BANNED** | N/A | Don't incentivize |
| **Product Hunt** | Tech / early adopter | Banned outside launch day | N/A | Launch only |
| **AlternativeTo** | Tech | Banned | N/A | Organic only |

**Review-collection campaigns:**

1. **Use the platform's own program** (G2 Review Generation, Capterra Reach). They handle compliance and incentives.
2. **For NPS 9-10 customers:** Send the direct review link with the appropriate platform's gift incentive disclosed.
3. **Target a velocity goal:** e.g., "10 new G2 reviews per quarter" — enough to keep your rating fresh in the algorithm.
4. **Diversify across segments:** All-CTO reviews look fishy. Get RevOps, Marketing, IT, Sales reviews too.

**Common gotcha:** Running a generic "leave us a Google review" campaign and offering a gift card — that's a TOS violation. Google bans incentivized reviews completely.

---

### Step 7: Repurpose Each Testimonial Across 5+ Surfaces

A raw testimonial is inventory. Deploy it.

**Asset reuse matrix (one testimonial → many deployments):**

| Asset Type | Surface | Format |
|-----------|---------|--------|
| Pull quote | Homepage hero | 1 sentence + name/title/logo |
| Pull quote | Landing page (per ICP) | Quote matching that ICP |
| Pull quote | Pricing page | Quote tied to plan value |
| Pull quote | Sales deck | Per-slide proof |
| Pull quote | Email sequence | Nurture / re-engagement |
| Pull quote | LinkedIn post | Founder/CEO repost |
| G2 review screenshot | Comparison pages | "X vs Y" social proof |
| Video clip | Landing page hero | 60-90s above fold |
| Video clip | YouTube / paid ad | 15s, 30s cuts |
| Video clip | LinkedIn / X | Native video upload |
| Full case study | Resources / case studies hub | 1,200-2,000 word writeup |
| Stat highlight | "By the numbers" page | "$2.4M saved by customers" |
| Logo bar | Homepage, pricing page | Trust by association |

**Common gotcha:** Collecting testimonials and burying them in a Drive folder. The system fails on the deployment side, not the collection side. Have a clear pipeline: collected → permissioned → deployed-to-{N}-surfaces within 30 days.

---

## Output Format

```markdown
# Testimonial Collection System: {{Company}}

**Date:** {{date}}
**Owner:** {{Name (Customer Marketing or Founder)}}
**Status:** Draft / Active / Quarterly Review

---

## Asset Inventory Audit

| ICP Segment | Use Case | Pull Quotes | G2 Reviews | Videos | Case Studies | Gap |
|-------------|----------|------------|------------|--------|--------------|-----|
| {{Segment 1}} | {{Use case}} | {{N}} | {{N}} | {{N}} | {{N}} | {{Y/N}} |

**Top 3 gaps to close this quarter:**
1. {{Segment + asset type}}
2. {{Segment + asset type}}
3. {{Segment + asset type}}

---

## Trigger Configuration

| Trigger | Tool | Action | Owner |
|---------|------|--------|-------|
| NPS 9-10 | {{Delighted/Wootric/Custom}} | Auto-email Template B | {{Name}} |
| Aha-moment hit | {{Mixpanel/Amplitude}} | Add to weekly review queue | {{Name}} |
| Renewal signed | {{HubSpot/Salesforce}} | CSM personal ask | {{Name}} |
| Public LinkedIn mention | {{Mention.com/Sprout}} | Founder DM | {{Name}} |

---

## Request Cadence

- **Weekly:** Review trigger queue, send 5-10 personalized requests
- **Monthly:** G2 / Capterra review campaign to NPS 9-10 cohort
- **Quarterly:** 2-3 full case studies (target gap segments)

---

## Templates Deployed

- [ ] Template A: Pre-written quote approval
- [ ] Template B: NPS-triggered auto-follow-up
- [ ] Template C: 3-question micro-form
- [ ] Template D: Video testimonial Zoom request
- [ ] Permission form (DocuSign or email reply)

---

## Incentive Policy

- Text testimonial: {{incentive}}
- G2 / Capterra review: {{$X gift card, disclosed}}
- Video: {{$X gift card + trial extension}}
- Full case study: {{$X gift card + charity match + co-marketing}}

---

## Repurposing Pipeline

For every collected testimonial:
- [ ] Stored in Airtable / CRM with full tags
- [ ] Permission documented and filed
- [ ] Deployed on minimum 5 surfaces within 30 days
- [ ] Tagged with attributed surfaces for traceability

---

## Quarterly Metrics

- New testimonials collected: {{Goal: 20+}}
- G2 reviews: {{Goal: 10+}}
- Videos: {{Goal: 3+}}
- Case studies: {{Goal: 2-3}}
- Gap segments closed: {{Goal: 2+}}
- Inventory deployment rate: {{Goal: 90%+}}
```

---

## Quality Bar

A testimonial system is "done" when:

- [ ] Asset inventory audit completed by ICP segment + asset type
- [ ] At least 4 trigger moments automated and routed to a queue
- [ ] All 4 request templates (A-D) are deployed and version-controlled
- [ ] Permission form is in place and stored centrally for every collected asset
- [ ] Incentive policy is documented, FTC/platform-compliant, and budgeted
- [ ] Repurposing pipeline routes every new testimonial to ≥5 surfaces within 30 days
- [ ] Quarterly velocity targets are defined and reviewed (e.g., "10 new G2 reviews/quarter")
- [ ] Gap segments are identified and explicitly prioritized
- [ ] Cross-checked with `.agents/product-marketing-context.md` (testimonials align with positioning)

### Common Mistakes

1. **Asking happy customers randomly instead of running a triggered system.** **Why it happens:** Lack of automation; relying on CSM memory. **Fix:** Wire NPS, aha-moment, and renewal events into a queue (Slack channel or Airtable). The system asks; the human curates. No more random asks.
2. **Asking customers to write a testimonial from scratch.** **Why it happens:** Feels more "authentic." **Fix:** Always draft the quote *for* them based on what they already told you (NPS comment, support reply, public post). Send it for approval, not creation. Conversion rates jump from ~15% to 60-80%.
3. **Forgetting to get logo + name permission upfront.** **Why it happens:** Excited to get the quote, forget the legal piece. **Fix:** Bake permission into every request template (Template A captures it in one email). Store permissions centrally before publishing anything.
4. **Over-indexing on one segment (usually the loudest customers).** **Why it happens:** The customers who reply fastest aren't always the ICP you most need to convert. **Fix:** Audit asset inventory by ICP segment quarterly. Set collection quotas per gap segment, not aggregate.
5. **Incentivizing reviews on platforms that ban it (Google, Amazon, Product Hunt outside launch day).** **Why it happens:** Mass-emailing customers with a "leave us a review" link + gift card without checking TOS. **Fix:** Maintain a platform-policy reference table. Only run incentive campaigns on platforms that allow it (G2, Capterra, Trustpilot, TrustRadius) with proper disclosure.
6. **Collecting testimonials but never deploying them.** **Why it happens:** Hand-off from CSM to marketing is broken; quotes pile up in a Drive folder. **Fix:** Run a "deployment SLA" — every approved testimonial is live on ≥5 surfaces within 30 days, or it goes on a retro list. Tag each deployed surface in the CRM so you can audit.
7. **Failing to ask at the emotional peak.** **Why it happens:** Marketing schedules a quarterly testimonial campaign, by which point the customer's "wow" moment has faded. **Fix:** Move from quarterly batch asks to real-time triggered asks. NPS 10 → request within 24 hours. Aha-moment → request within 48 hours.
8. **Treating G2 / Capterra as a one-time push.** **Why it happens:** Founder runs a campaign, gets 20 reviews, never thinks about it again. **Fix:** Set a quarterly velocity target (10 new G2 reviews/quarter). G2's algorithm rewards recency; stale review profiles drop ranking.

---

## Examples

### Example 1: Series B PLG SaaS with great NPS but no system

**Context:**
- Company: Loopline, a customer feedback platform for B2B SaaS, $8M ARR, 32 employees
- Goal: 4x social proof inventory in 90 days to support a homepage redesign + new ABM campaign
- Constraint: 1 customer marketing manager, $5k/quarter incentive budget

**Input from user:**
> "We have a great NPS (62) and tons of happy customers, but our website only has 3 testimonials, our G2 page hasn't been updated in 8 months, and our new pricing page launches in 6 weeks. Help."

**Output (abbreviated):**

```markdown
### Asset Inventory Audit

Current state:
- Pull quotes: 3 (all SMB Marketing — over-indexed)
- G2 reviews: 47 total, last new review 8 months ago (stale)
- Videos: 0
- Case studies: 2

**Top 3 gaps:**
1. Mid-market RevOps quotes (target buyer persona, ZERO assets)
2. Fresh G2 reviews (Loopline's category ranking is dropping due to recency)
3. Video clips for new homepage hero

### Trigger Setup (Week 1)

| Trigger | Tool | Action |
|---------|------|--------|
| NPS 9-10 + RevOps title | Delighted + Salesforce filter | Auto-route to Template B with G2 link |
| First aha-moment (10+ surveys sent) | Mixpanel event | Add to weekly Loom queue |
| Annual renewal | HubSpot stage | CSM Template A ask |

### Request Cadence (Weeks 2-12)

- Monday: send 10 Template A asks (pre-written quote) to NPS promoters
- Wednesday: review G2 review queue, send Template B to 15 NPS 9-10s
- Friday: book 2 video Zooms with top-tier RevOps customers

### 90-Day Goals

- 20 new pull quotes (10 RevOps, 5 Marketing, 5 IT)
- 30 new G2 reviews
- 5 video testimonials (60-90s clips)
- 3 full case studies
- All deployed to homepage, pricing page, ABM landing pages within 30 days of collection

### Incentive Policy

- Text approval: $0 (LinkedIn tag + co-marketing offer)
- G2 review: $50 Amazon gift card (G2-disclosed)
- Video: 3-month enterprise trial + $100 charity donation
- Case study: $500 charity + co-marketing
```

**Why this works:** The diagnosis caught the real gap (RevOps testimonials, not "more testimonials"). The system automates the boring part (NPS routing) so the human spends time on the 5-10 highest-leverage asks per week.

---

### Example 2: Pre-PMF startup with 30 customers and no NPS yet

**Context:**
- Company: Bytewise, an open-source dev tool, $0 ARR, 30 active users (free tier)
- Goal: First 5 written testimonials and 2 G2 reviews to support a Paid tier launch
- Constraint: 2 founders, no budget for incentives beyond swag

**Input from user:**
> "We're about to launch a paid tier and our website has zero social proof. We have ~30 active users — none of them have ever been asked for feedback."

**Output (abbreviated):**

```markdown
### Diagnosis

Pre-PMF, tiny customer base. Skip automation; founder-led asks for first 10
testimonials. Instrument NPS lightweight via in-app modal.

### Week 1 Actions

1. Install in-app NPS modal (Delighted free tier or custom 1-question prompt)
2. Founder 1 sends personal DM to top 10 most active users (by GitHub activity):
   "Hey {{Name}}, you've been one of our most active users. Mind sharing 2-3
   sentences about what you've gotten out of Bytewise? I'll send you a t-shirt."
3. Pre-draft Template A quotes for each based on their Discord activity / issue
   comments. Send for approval.

### Week 2 Actions

4. For the 5 who responded positively, ask for G2 reviews. Offer swag pack.
5. Pin a "Praise" channel in Discord. Curate organic praise as quotes.

### Week 3-4

6. Schedule 3 quick Loom interviews with most enthusiastic users for video clips.
7. Pull "made with Bytewise" GitHub mentions into a public showcase.

### Goals (30 days)

- 5 approved pull quotes (deployed to landing page)
- 2 G2 reviews
- 2 short video clips
- 1 "made with" gallery deployed on homepage
```

**Why this works:** Stage-appropriate. No automation needed at 30 users — founder-led is faster than building systems. The asks leverage existing public signal (Discord activity, GitHub mentions).

---

## Related Skills

- **[`case-study`](../case-study/SKILL.md)** — Use *after* this skill for top-tier customers who deserve a full 1,500-word case study, not just a quote.
- **[`customer-interview`](../customer-interview/SKILL.md)** — Use *alongside* this skill — the same interview can serve both research and testimonial collection if structured well.
- **[`copywriting`](../copywriting/SKILL.md)** — Deploys collected pull quotes into landing pages, pricing pages, and emails.
- **[`messaging-framework`](../messaging-framework/SKILL.md)** — Use *before* this skill — testimonials are the proof points for your messaging pillars. Without messaging clarity, you collect off-message quotes.
- **[`churn-prevention`](../churn-prevention/SKILL.md)** — Use *alongside* this skill — NPS detractors fund the churn-prevention work; NPS promoters fund the testimonial work.

---

## References

- *Inspired* — Marty Cagan (on customer-evidence as the basis of every product/marketing decision).
- Wynter / Userpilot research on social-proof placement and conversion impact.
- FTC Endorsement Guides (16 CFR Part 255) — required disclosures for incentivized testimonials.
- G2 Trust & Authenticity Policy — required for any review-generation campaign on G2.
