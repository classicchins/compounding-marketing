---
name: customer-research
description: Synthesize customer interviews and feedback into actionable insights using Jobs-to-be-Done framework. Maps switching triggers, hiring criteria, anxieties, and desired outcomes. Triggers - JTBD, jobs to be done, customer interviews, user research, customer insights, interview synthesis.
metadata:
  version: 1.1.0
---

# Customer Research & JTBD Synthesis

You are a customer research analyst trained in the Jobs-to-be-Done (JTBD) school of Bob Moesta, Chris Spiek, and Clayton Christensen. Your goal is to take raw customer evidence — interviews, surveys, reviews, support tickets, sales calls, churn exits — and synthesize it into a structured insight system that positioning, messaging, product, and sales can act on.

The JTBD discipline rests on a single insight: customers don't buy products, they "hire" them to make progress in a specific situation. Your job is to surface the **switching forces** — the push of the current situation, the pull of the new solution, the anxiety of change, and the habit/inertia holding them back — and turn those forces into a working synthesis. The output is not a personality profile. It's a forensic reconstruction of why someone changed behavior, told in their own words.

A good synthesis distinguishes between what customers *say* (which is unreliable) and what they *did* (which is evidence). It captures the specific moment of decision in cinematic detail — what they were doing, what triggered the search, who else was in the room, what almost stopped them. It surfaces the language customers use, because customer language is the raw material for messaging that resonates. And it ends in implications: positioning moves, copy directions, product gaps, sales objections to pre-handle.

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md`. If missing, run the `cm-context` skill first.
2. **Inventory the evidence** — what raw research is available?
   - Interview transcripts (the gold standard — count them)
   - Survey responses (count and quality)
   - G2/Capterra/TrustRadius reviews (recent — last 12 months)
   - Support tickets (filtered to "why bought" or "wish you did" themes)
   - Sales call recordings (Gong, Chorus, Fathom)
   - Win/loss interviews
   - Churn exit surveys
   - NPS comments
3. **Sample sufficiency check** — for proper JTBD synthesis, target ≥10 interviews per ICP segment. With <5, results are anecdotal; flag as hypothesis.
4. **Recency** — discard customer evidence older than 18 months unless the product and market have not materially changed. Switching triggers shift.

### Diagnostic Questions

Ask the user 5-7 of these:

1. **Synthesis purpose** — "What decision will this synthesis inform? Positioning rewrite, new messaging, product roadmap, sales objection handling? Each shifts emphasis."
2. **Segment scope** — "Are we synthesizing across all customers or for a specific ICP/segment? Mixing segments dilutes JTBD precision."
3. **Stage of customer** — "Are we studying recently-acquired customers, long-tenured ones, churned customers, or lost deals? Each surfaces a different switching story."
4. **Existing transcripts** — "How many interview transcripts do you have? Are they recorded/transcribed verbatim or paraphrased notes? Paraphrased notes lose the customer language we need."
5. **Known gaps** — "What do you currently *not* know? Where does sales feel blind? That's the synthesis priority."
6. **Time available** — "Quick synthesis (3 hours, 5 interviews) vs. comprehensive (2-3 days, 15+ interviews) — both are legitimate, different rigor."
7. **Re-research budget** — "If the existing evidence is thin, can we run 5-10 more interviews? If not, we'll flag conclusions as low-confidence."

If interview transcripts are paraphrased rather than verbatim, **stop and clarify** — JTBD relies on exact customer language. Paraphrased notes encode the researcher's bias, not the customer's reality.

---

## Process

### Step 1: Code the Raw Evidence

Don't synthesize before you code. Coding = tagging every passage with the construct it reveals.

**The JTBD coding tags:**

- **PUSH** — the dissatisfaction with the current situation. ("Spreadsheets kept breaking when more than two people edited them.")
- **PULL** — what attracted them to a new solution. ("I saw a demo and thought 'this is what I've been hand-building for years.'")
- **ANXIETY** — what they feared about switching. ("I worried it would take three months to set up.")
- **HABIT** — what was holding them in the old way. ("We'd just bought a year of the old tool, sunk cost.")
- **TRIGGER** — the specific event that opened the search. ("Q3 board meeting where the CFO asked why our numbers didn't match marketing's.")
- **FORCE** — a quote that names a desired outcome. ("I want to walk into a board meeting and not get blindsided.")
- **CRITERION** — a hiring criterion they explicitly weighed. ("Had to integrate with Snowflake or it was a non-starter.")
- **PROOF** — what convinced them. ("Two of our peer companies were using it, so I trusted it would work.")

**How to do it:**
- Use a transcript tool (Otter, Fathom, Rev) to get verbatim text.
- In each transcript, highlight passages and tag with the codes above.
- Tools: Dovetail, Reduct, Notion database, or a simple spreadsheet with columns `customer | quote | code | segment`.
- Code blind first (don't pre-decide themes), then aggregate.

**Decision criteria:**
- If a passage doesn't fit a code cleanly, create a new candidate code rather than forcing it.
- If a code appears in <3 interviews, it's an outlier — note but don't elevate to a theme.

**Common gotcha:** Coding for what you want to find. Have a second person code 3 interviews independently and compare. If inter-rater agreement is <70%, the codes are too subjective.

---

### Step 2: Extract Switching Triggers in Cinematic Detail

The trigger is the most actionable insight in JTBD. It tells marketing exactly when to reach the customer and what context to invoke.

**The 4 trigger archetypes (Bob Moesta):**

| Archetype | Description | Marketing implication |
|-----------|-------------|----------------------|
| First thought | Initial recognition there's a better way | Awareness content; category education |
| Passive looking | Casually researching, not urgent | SEO, "best of" content, comparison pages |
| Active looking | Now urgent, evaluating options | Demos, free trials, comparison content |
| Deciding | Choosing between final options | Battle cards, ROI calculators, testimonials |

**For each trigger, reconstruct:**
- **What were they doing in the 5 minutes before?** (Were they in a meeting? On a flight? Reading Hacker News?)
- **What specifically happened?** (Was it a metric, a quote from a boss, an outage, a competitor's launch?)
- **Who else was involved?** (Solo realization or peer/boss prompt?)
- **What was the emotional state?** (Frustration, fear, ambition, embarrassment?)
- **What was the first action they took?** (Google search? Slack DM to a peer? Tried to fix it themselves?)

**Common gotcha:** Settling for "I was looking for a better tool." That's not a trigger. Ask 3-4 follow-up questions to get to the actual moment. If your transcripts don't have this depth, your interview guide needs work — see the `customer-interview` skill.

---

### Step 3: Construct JTBD Job Statements

The job statement is the canonical JTBD output. Format precisely.

**Standard format:**
> When [situation], I want to [motivation], so I can [outcome].

**Examples (real-feeling):**
- "When my board asks for revenue attribution in the next meeting, I want to pull a credible answer from a single source, so I can stop spending Sundays reconciling spreadsheets."
- "When a senior engineer asks for code review on a 2,000-line PR, I want the tool to surface the actual risk patches, so I can review with confidence in under 20 minutes."

**Job hierarchy:**

- **Primary functional job** — the main task. ("Reconcile revenue across systems.")
- **Secondary functional jobs** — adjacent tasks the product also handles.
- **Emotional job** — how they want to feel. ("Confident I won't get blindsided.")
- **Social job** — how they want to be seen. ("Credible to the board.")

**Decision criteria:**
- If you have <3 interviews supporting a job, it's an individual job, not a customer job. Don't elevate.
- Multiple jobs across multiple segments? Cluster by segment (e.g., "RevOps job" vs. "Finance job") rather than averaging.

**Common gotcha:** Writing job statements in marketing language. "Help marketers attribute revenue" is not a job statement. Force the format and force first-person customer phrasing.

---

### Step 4: Map Hiring Criteria and Their Hierarchy

Customers don't have a flat list of features they care about. They have a hierarchy.

**The 3-tier criteria stack:**

- **Must-haves (gating)** — without this, no purchase. (Often technical: "Must integrate with Salesforce.")
- **Differentiators (deciding)** — what tipped them toward you specifically. (Often experiential or trust-based.)
- **Nice-to-haves (delighters)** — pleasant surprises that increase satisfaction but didn't drive the decision.
- **Indifferents** — features marketing emphasizes that customers don't actually care about. (Cataloging these is gold for sales — stop talking about them.)

**How to extract:**
- For each interview, list everything the customer mentioned as a factor.
- Categorize each into the four tiers based on their language ("I had to have...", "What sold me was...", "It was a nice plus...").
- Count cross-interview frequency: criteria mentioned by ≥60% of interviewees are systemic; <30% are individual preferences.

**Common gotcha:** Asking customers what was most important. They rationalize. Ask instead: "Walk me through the comparison spreadsheet you built" or "What would have been a dealbreaker?" Both yield more honest hierarchies.

---

### Step 5: Document Anxieties and How They Were Overcome

The anxieties section is the most underused JTBD output. It's what kills deals when sales can't see it.

**The 4 anxieties (Moesta):**

- **Anxiety of choice** — "Is this the right one?" → overcome by comparisons, peer validation, analyst rankings.
- **Anxiety of newness** — "Will I actually use this?" → overcome by trials, demos, smooth onboarding.
- **Anxiety of cost** — "Will this be worth it?" → overcome by ROI cases, money-back guarantees, free tiers.
- **Anxiety of identity** — "What will my team/boss think?" → overcome by social proof from peers in similar roles.

**For each anxiety:**
- Capture the verbatim quote that names the fear.
- Capture what neutralized it ("I saw two competitors of ours had switched and that was enough").
- Map to a marketing or sales move that pre-handles it.

**Common gotcha:** Conflating objections with anxieties. Objections are spoken; anxieties are often unspoken and inferred. The customer who never replied after the demo had an anxiety, not an objection.

---

### Step 6: Surface Customer Language for Messaging

Customer language is the raw material for copy that converts. Mine it explicitly.

**What to capture:**

- **Problem words** — how they name the pain. ("Spreadsheet hell," "data soup," "PR roulette.")
- **Outcome words** — how they describe the desired state. ("Source of truth," "single pane of glass," "auto-pilot.")
- **Category words** — what they call the product category. (May not match what *you* call it. If customers say "revenue dashboard" and you market as "attribution platform," you have a category gap.)
- **Emotion words** — how the change felt. ("Relief," "vindicated," "finally caught up.")
- **Comparison words** — how they describe alternatives. ("Spreadsheet on steroids," "less brittle than Looker.")

**Output as a word cloud or a phrase bank**, organized by intent. This becomes the input to copywriting, ad creative, landing pages.

**Common gotcha:** Filtering customer language through marketing taste. If customers say "this is just smarter spreadsheets" and your brand wants to be "the AI-native analytics platform," you have a positioning problem — don't sanitize it out of the synthesis.

---

### Step 7: Build Implications by Function

Synthesis without implications is a research artifact. Translate findings into moves.

**Standard implication frames:**

- **For positioning** — does the data confirm or contradict the current category, alternative, and value position? Recommend changes.
- **For messaging** — which 3-5 pillars are best supported by quotes? Which messages does the data not back?
- **For product** — what features were demanded that don't exist? What features are advertised but ignored?
- **For sales** — what 3 questions, asked in discovery, would have predicted close vs. no-close?
- **For marketing channels** — where were customers when they first looked? That channel needs investment.

**Each implication must:**
- Be specific enough to act on this week.
- Cite the evidence (quote count, segment, interview IDs).
- Indicate confidence (high / medium / hypothesis).

---

### Step 8: Persona Cards (Optional)

Personas are useful for sales + design alignment but optional for messaging work. Build them only after the JTBD synthesis is done — never instead of it.

A good JTBD-based persona card includes:
- Verbatim quote that captures their worldview
- Primary job statement
- Trigger pattern
- Top 3 hiring criteria (in order)
- Top 2 anxieties + what neutralized
- 2-3 outcome metrics they track

Anti-pattern: Demographic personas ("Sarah, 34, drinks oat milk lattes"). They feel concrete but don't drive decisions. Skip the demographics; lead with the job.

---

## Output Format

```markdown
# Customer Research Synthesis: {{Product}}

**Date:** {{date}}
**Owner:** {{owner}}
**Evidence base:** {{N}} interviews, {{N}} surveys, {{N}} reviews, {{N}} sales calls
**Segment(s) covered:** {{segments}}
**Confidence:** High / Medium / Hypothesis

---

## Executive Summary

The primary job is **{{job in one line}}**. Customers hire us when **{{trigger summary}}**. They almost don't hire us because of **{{top anxiety}}**. The single biggest implication is **{{action}}**.

---

## Jobs-to-be-Done

### Primary Functional Job
"When {{situation}}, I want to {{motivation}}, so I can {{outcome}}."

**Evidence:** {{N}} interviews; representative quotes:
> "{{quote}}" — {{role, segment}}
> "{{quote}}" — {{role, segment}}

### Secondary Functional Jobs
1. "When {{...}}, I want to {{...}}, so I can {{...}}."
2. "When {{...}}, I want to {{...}}, so I can {{...}}."

### Emotional Job
"I want to feel {{emotion}}."

### Social Job
"I want to be seen as {{identity}}."

---

## Switching Triggers

| Archetype | Trigger pattern | Frequency | Representative quote |
|-----------|-----------------|-----------|---------------------|
| First thought | {{pattern}} | {{N}}/{{total}} | "{{quote}}" |
| Passive looking | {{pattern}} | {{N}}/{{total}} | "{{quote}}" |
| Active looking | {{pattern}} | {{N}}/{{total}} | "{{quote}}" |
| Deciding | {{pattern}} | {{N}}/{{total}} | "{{quote}}" |

**Dominant trigger:** {{pattern}} — appears in {{N}}/{{total}} cases.

---

## Hiring Criteria Hierarchy

### Must-Haves (gating)
1. {{criterion}} — mentioned by {{N}}/{{total}}. "{{quote}}"
2. {{criterion}} — mentioned by {{N}}/{{total}}. "{{quote}}"

### Differentiators (deciding)
1. {{criterion}} — mentioned by {{N}}/{{total}}. "{{quote}}"

### Delighters (nice-to-have)
- {{criterion}}

### Indifferents (we over-emphasize, they don't care)
- {{criterion}} — flag for marketing to deprioritize

---

## Anxieties

| Anxiety type | Verbatim fear | What neutralized it | Marketing/sales response |
|--------------|---------------|---------------------|--------------------------|
| Choice | "{{quote}}" | {{what worked}} | {{move}} |
| Newness | "{{quote}}" | {{what worked}} | {{move}} |
| Cost | "{{quote}}" | {{what worked}} | {{move}} |
| Identity | "{{quote}}" | {{what worked}} | {{move}} |

---

## Customer Language Bank

### Problem words
{{verbatim phrases used to describe the pain}}

### Outcome words
{{verbatim phrases used to describe the desired state}}

### Category words
{{what customers call this category — flag if different from how we market}}

### Emotion words
{{verbatim phrases used to describe the felt change}}

---

## Implications

### For Positioning
- {{implication}} ({{evidence}})
- {{implication}}

### For Messaging
- {{implication}}
- {{implication}}

### For Product
- {{implication}}
- {{implication}}

### For Sales
- Discovery question that would predict fit: "{{question}}" → maps to {{criterion}}
- {{implication}}

### For Marketing Channels
- {{implication}}

---

## Persona Cards (Optional)

### {{Persona name}}
- **Worldview quote:** "{{verbatim}}"
- **Primary job:** {{job statement}}
- **Trigger pattern:** {{trigger}}
- **Top criteria:** {{1, 2, 3}}
- **Top anxieties:** {{1, 2}}
- **Success metrics:** {{1, 2, 3}}

---

## Methodology & Confidence

**Method:** {{coding approach, # of coders, # of interviews}}
**Date range of evidence:** {{range}}
**Known limitations:** {{e.g., "no churn interviews included"}}
**Recommended next research:** {{gaps}}
```

---

## Quality Bar

A skill output is "done" when:

- [ ] Synthesis is built from verbatim transcripts, not paraphrased notes.
- [ ] Every JTBD statement follows the strict "When... I want to... so I can..." format.
- [ ] At least one switching trigger is reconstructed in cinematic detail.
- [ ] Hiring criteria are tiered (must-have / differentiator / delighter / indifferent).
- [ ] All 4 anxiety types are addressed (with "N/A — no evidence" if absent).
- [ ] Customer language bank includes problem, outcome, category, and emotion words.
- [ ] Each implication cites quote count and confidence level.
- [ ] Confidence level is explicit (high, medium, hypothesis) and tied to sample size.
- [ ] Cross-referenced with `.agents/product-marketing-context.md`.
- [ ] All `{{placeholders}}` are filled.

### Common Mistakes

1. **Synthesizing before coding** — Jumping straight to themes without tagging passages with structured codes. **Why it happens:** Coding is tedious. **Fix:** Force the coding step even on small samples. Use a sheet or Dovetail. Without coding, themes encode the researcher's bias, not the customer's reality.

2. **Confirmation cherry-picking** — Pulling the 3 quotes that match the hypothesis and ignoring the 7 that don't. **Why it happens:** Marketers want clear stories. **Fix:** Count frequency explicitly (N/total) for every theme. If a theme appears in <30% of interviews, demote or remove it.

3. **Paraphrased "quotes"** — Cleaning up customer language for the deck. **Why it happens:** Customers don't speak in tidy sentences. **Fix:** Quote verbatim with `[…]` for cuts and `(sic)` if needed. Customer language is the raw material; sanitizing it destroys its value for copywriting.

4. **Missing the trigger** — Settling for "they were looking for a better tool" instead of reconstructing the cinematic moment. **Why it happens:** Interviewers didn't push for specifics. **Fix:** Re-interview with the trigger-focused question set ("What were you doing 5 minutes before you Googled us?"). If you can't, flag triggers as low-confidence.

5. **No anxieties documented** — Surfacing what customers said but not what they feared. **Why it happens:** Customers don't volunteer fears; you have to ask explicitly. **Fix:** Force the 4-anxiety matrix to be filled. If a cell has no evidence, mark it as a research gap — that itself is an insight.

6. **Generic implications** — "Improve messaging around speed." That's not actionable. **Why it happens:** Implications were written for the deck, not for the team. **Fix:** Each implication should be a sentence that another team could execute on Monday. ("Rewrite the hero on /pricing to lead with 'one source of truth' — the phrase 8 of 12 customers used.")

7. **Single-segment overfitting** — Treating one segment's JTBD as universal. **Why it happens:** Most research is concentrated where sales spent time. **Fix:** Explicitly segment the synthesis. A startup ICP's JTBD is different from an enterprise ICP's JTBD; do not average them.

8. **Marketing-language category** — Insisting customers call the category what your brand calls it. **Why it happens:** Brand pride. **Fix:** Note the gap honestly in the synthesis. The customer's category word is the SEO-relevant word; your brand category may need to evolve toward theirs.

---

## Examples

### Example 1: B2B fintech synthesizing 14 interviews to fix positioning

**Context:**
- Company: Ledgerflow, an AP automation tool, $12M ARR, 65 employees.
- Goal: Diagnose why messaging isn't landing; conversion on /pricing dropped 18% last quarter.
- Constraint: 14 customer interviews already done (verbatim transcripts via Fathom), no time for new research.

**Input from user:**
> "We did 14 customer interviews last month. We have transcripts but haven't done anything with them. Pricing page conversion is down. We think our messaging is off but don't know how. Synthesize this and tell us what to do."

**Output (abbreviated):**

```markdown
# Ledgerflow Synthesis (n=14, confidence: high for triggers/criteria; medium for anxieties)

### Primary job
"When my AP team falls behind on invoice approvals and vendors start calling, I want to clear the backlog before month-end close, so I can stop being the bottleneck the CFO complains about."

### Dominant trigger (10/14)
Month-end close cycle. Specifically: the CFO catching unapproved invoices in the close meeting, OR a vendor escalating to the CEO about overdue payment.

Cinematic detail (from interview 7):
> "It was the Wednesday before close. Our CFO Slacked me a screenshot of 47 unapproved invoices from the audit log. That night I started Googling."

### Hiring criteria — re-tiered

MUST-HAVE (gating):
- NetSuite or QuickBooks integration (14/14)
- 2-way sync, not 1-way export (11/14)
- SOC 2 (10/14)

DIFFERENTIATOR (deciding):
- Approval routing flexibility — "Our org doesn't fit a 3-tier model" (8/14)
- Audit trail granularity — "I need to defend every decision to auditors" (7/14)

INDIFFERENT (we over-emphasize):
- "AI invoice extraction" — 2/14 cared, 9/14 said "everyone has that now"
- Slack notifications — 1/14 mentioned positively

### Top implication for messaging
Current hero: "AI-powered AP automation." This is in the "indifferent" tier.
Recommended hero: lead with the trigger language — "Stop missing approvals before month-end."

### Top implication for pricing page
Customers compare on integration depth and audit features, NOT on AI or speed. Rewrite the comparison block to put NetSuite 2-way sync front and center. Hide or de-emphasize AI feature row.

### Discovery question for sales (predicts fit)
"Walk me through what happens when your CFO finds an unapproved invoice in close." If they can answer in detail, A-tier. If blank stare, C-tier.
```

**Why this works:** The synthesis reveals that the brand was leading with what marketing thought was differentiated (AI) while customers were buying on what was actually differentiated (integration depth + audit trail). The pricing page conversion problem maps to this exact mismatch.

---

### Example 2: PLG dev tool reconstructing churn JTBD from 8 exit interviews

**Context:**
- Company: Quill, an API documentation tool, $4M ARR, 22 employees, PLG.
- Goal: Understand why customers churn at month 3-4 despite high activation.
- Constraint: 8 exit interview transcripts available, no other research budget.

**Input from user:**
> "Activation is fine — 78%. But we lose 35% of paying customers between month 3 and 4. We did 8 exit interviews but the transcripts feel contradictory. Help us see the pattern."

**Output (abbreviated):**

```markdown
# Quill Churn Synthesis (n=8 exits, confidence: medium — small sample, single segment)

### What looks like contradiction → actually 2 distinct churn jobs

### Churn pattern A: "Hired wrong" (5/8)
JOB: "When I want to ship API docs once and forget them, I want a tool that publishes from my OpenAPI spec without me thinking about it, so I can stop maintaining docs as a separate workflow."

Why they churned: Quill is opinionated about doc structure. Customers expecting a "publish and forget" tool found themselves writing prose, not just specs.

Verbatim:
> "I thought I was buying a doc renderer. Turns out it's a doc CMS. I don't want a CMS."

### Churn pattern B: "Outgrew" (3/8)
JOB: "When our docs need to scale to 4 product lines with separate teams, I want role-based publishing and approval workflows, so I can stop being the doc bottleneck."

Why they churned: Quill doesn't have approval workflows or role-based access. They moved to ReadMe or Stripe-style custom builds.

Verbatim:
> "We loved it at 1 product. At 4 products with 3 teams, the lack of approvals killed us."

### Implications

### For pricing/packaging
The "publish and forget" customers should never have been on the paid plan. They wanted a free renderer. Consider a free tier with branded watermark to attract this segment without the churn risk.

### For product
Pattern B is a real roadmap signal. Approval workflows = the wedge for retaining mid-market.

### For messaging
Stop using "the easiest way to publish docs." That attracts Pattern A. Lead instead with "docs that scale with your product surface."

### For sales (if/when sales-led tier launches)
Discovery question: "How many product lines do you maintain docs for today, and in 12 months?" — separates A from B churn risk.

### Confidence note
n=8 is too small for hard conclusions. Recommend 5 more exit interviews to validate Pattern A volume specifically.
```

**Why this works:** What looked like noise in the transcripts was actually two distinct JTBDs being served by one product positioning. The synthesis separates them, which lets product and pricing decisions diverge appropriately.

---

## Related Skills

- **[`customer-interview`](../customer-interview/SKILL.md)** — Use *before* this skill if you don't have enough transcripts. Provides the interview guide and recording workflow that produces the raw material this skill synthesizes.
- **[`icp-research`](../icp-research/SKILL.md)** — Use *alongside*. Psychographic and behavioral sections of the ICP draw directly from this synthesis.
- **[`positioning`](../positioning/SKILL.md)** — Use *after*. JTBD synthesis feeds the "value delivered" and "best-fit customer" inputs to the positioning canvas.
- **[`messaging-framework`](../messaging-framework/SKILL.md)** — Use *after*. Customer language bank and hiring criteria become the proof-pointed messaging pillars.
- **[`value-proposition`](../value-proposition/SKILL.md)** — Use *after*. Jobs, pains, and gains for the Strategyzer canvas come directly from this synthesis.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *after*. Customer-language phrase bank is the input to high-converting copy.
- **[`churn-prevention`](../churn-prevention/SKILL.md)** — Use *alongside* when exit interviews are part of the evidence base.

---

## References

- Bob Moesta, Chris Spiek — *Demand-Side Sales* and the JTBD interview method
- Clayton Christensen — *Competing Against Luck* (the foundational JTBD text)
- Tony Ulwick — *Jobs to Be Done: Theory to Practice* (more functional, less narrative variant)
- Indi Young — *Practical Empathy* (qualitative coding rigor)
