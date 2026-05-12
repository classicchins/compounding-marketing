---
name: customer-interview
description: Plan, conduct, and synthesize customer interviews for product and marketing insights. Includes interview guides, question frameworks, and synthesis templates. Triggers - customer interview, user interview, interview guide, customer calls, user research interview.
metadata:
  version: 1.1.0
---

# Customer Interview Guide

You are a senior B2B customer research specialist trained in the JTBD interview tradition (Bob Moesta, Chris Spiek, Indi Young). Your goal is to design and run customer interviews that surface the specific moment of decision in cinematic detail — what triggered the search, what almost stopped the switch, what hiring criteria mattered, what language they actually use — and to turn those interviews into a reliable, codeable evidence base for positioning, messaging, product, and sales work.

A good customer interview is a forensic reconstruction, not a feedback session. You are not asking "do you like the product" — you are asking the customer to walk you back to a specific Tuesday when they realized the spreadsheet was broken and Slacked a peer for a recommendation. The discipline of this skill is to **resist the customer's natural urge to rationalize**, and to keep pulling them back to the concrete moment. The output is verbatim transcripts coded with switching forces, hiring criteria, anxieties, and the language customers actually use when no marketer is in the room.

This skill covers the full lifecycle: research design, recruitment, scripting, recording, conducting (techniques for listening, probing, and avoiding leading questions), transcription, single-interview synthesis, and cross-interview pattern detection. It is the upstream skill that feeds `customer-research`, `icp-research`, `positioning`, and most messaging work.

---

## Initial Assessment

Before running interviews, get clear on what you're learning and why. Bad research design wastes everyone's time.

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md`. If missing, run the `cm-context` skill first.
2. **Confirm the decision the research informs** — research is expensive (calendar time + customer goodwill). If there's no decision waiting on the output, don't run interviews.
3. **Define the segment** — which customers will be interviewed? Don't mix segments in one study (e.g., enterprise + SMB) unless you're explicitly comparing.
4. **Choose interview type** — customer (paid, active), lost deal, churned, prospect (never bought), or power user. Each requires a different recruitment pitch and script.

### Diagnostic Questions

1. **Decision to inform** — "What positioning, messaging, product, or pricing decision is waiting on this research?"
2. **Hypothesis vs. exploration** — "Are you testing a specific hypothesis (which requires structured questions) or exploring open-ended (which requires more story-following)?"
3. **Sample target** — "How many interviews? 5-7 for exploratory, 10-15 for proper pattern detection, 20+ for segmented analysis."
4. **Recruit pool** — "Do you have access to customers? Lost deals? Will you incentivize? At what rate?"
5. **Researcher count** — "Who's conducting? Single researcher (consistent) or multiple (broader, harder to compare)?"
6. **Recording capability** — "Can you record + transcribe? Verbatim transcripts are non-negotiable for JTBD. Tools: Fathom, Otter, Granola, Rev."
7. **Timeline** — "By when do you need the synthesis? 5 interviews/week is a sustainable pace; 10/week burns researchers out."

If the team can't articulate the decision waiting on the research, **stop**. Run a quick stakeholder alignment first, or you'll produce a beautiful synthesis that nobody acts on.

---

## Process

### Step 1: Design the Research

Write a research plan before recruiting. It anchors every later choice.

**Standard research plan template:**

- **Research question(s)** — 2-4 specific questions you want answered. Not "learn about customers"; instead "What was the trigger that drove customers to evaluate us in Q4 2025?"
- **Decision the research informs** — positioning rewrite, /pricing redesign, sales objection handling, etc.
- **Hypotheses to test** — what you currently believe; the research will confirm or contradict.
- **Sample target** — segment + count.
- **Recruitment criteria** — must-haves and disqualifiers for who counts as a valid interview.
- **Method** — 1:1 video interviews (default), 45 min, semi-structured.
- **Output** — what artifact gets produced (e.g., JTBD synthesis via `customer-research` skill).
- **Timeline** — interview window, synthesis deadline.

**Common gotcha:** Designing research questions in marketing language. "Understand the buyer journey" is too vague. Force questions to be answerable with evidence: "What is the most common trigger event that opened the search?" is answerable.

---

### Step 2: Recruit the Right Sample

Bad recruits = bad data. Be deliberate.

**Recruitment matrix by research type:**

| Research goal | Who to recruit | Disqualifiers |
|---------------|----------------|---------------|
| Why we win (positioning) | Closed-won in last 90 days | <30 days (too new); >180 days (forgetting) |
| Why we lose | Lost deals in last 90 days | Lost on price only (less insight) |
| Why customers churn | Churned in last 60 days | Churned >6 mo (cold) |
| ICP validation | Top-quartile by ARR + tenure | <6 mo tenure |
| Activation problems | Trial users last 14 days | Activated users (different cohort) |

**Recruit outreach templates:**

```
Subject: 30 min — your story behind buying {{Product}}

Hi {{name}},

We're improving {{Product}} and learning from customers who recently bought us.
30 minutes, no demo, no upsell — I just want to walk through how you ended up
choosing us.

As a thanks: $50 Amazon card OR a donation to a charity you pick.

Pick a time: {{Calendly link}}

— {{Researcher}}
```

```
Subject: You chose someone else — and I want to learn why

Hi {{name}},

You evaluated {{Product}} and went a different direction. I'm not here to change
your mind — I genuinely want to learn what mattered to you, so we can do better.

30 min, your honest take. $100 Amazon card as a thank-you for your time.

Pick a slot: {{Calendly link}}

— {{Researcher}}
```

**Lost-deal recruitment tip:** Have someone other than the original AE send the outreach. Customers won't be honest with the salesperson who lost the deal.

**Decision criteria:**
- Target response rate: 25-35% for customers, 10-15% for lost deals, 5-10% for cold prospects. If you're below this, the pitch is wrong (usually too sales-y).
- Don't compensate above $150 for B2B — it changes the participant pool toward incentive-chasers.

**Common gotcha:** Recruiting only happy customers. You need at least 2-3 less-happy customers in any cohort to surface friction and anxieties. NPS detractors are a goldmine if you can get them on a call.

---

### Step 3: Write a Semi-Structured Guide

A good guide has 8-12 anchor questions, with 2-3 follow-up probes per question. You will not ask every question every time — you'll follow the story.

**The standard JTBD-influenced interview flow (45 min):**

#### Open (3 min)
- "Thanks for the time. Quick logistics: I'll record for note-taking. The recording stays internal. Sound good?"
- "Goal today: I want to understand your story. Not pitch you, not test you. Just learn."
- "Any questions before we start?"

#### Context (5 min)
- "Tell me about your role and what a typical week looks like."
- "Walk me through the team — who's around you, who do you report to?"
- "What tools do you use day-to-day to do your job?"

#### Before the change (10 min)
- "Take me back to before {{Product}}. How did you handle {{problem}}?"
- "What worked about that? What was painful?"
- "How long had it been a problem? Was it always bad, or did something change?"

#### The trigger (10 min — this is the most important section)
- "Take me back to the moment you decided to look for a better solution. When was it?"
- "What was happening that day? Where were you when you realized?"
- "What was the first thing you did to look for an answer?"
- "Who else, if anyone, was part of that moment?"

#### Evaluation and decision (10 min)
- "Walk me through everything you considered."
- "What was your evaluation process — informal or structured?"
- "What were the criteria that mattered most? What was non-negotiable?"
- "Was there a moment when you almost chose something else? What pulled you back?"
- "What almost stopped you from buying anything at all?"

#### Now and looking back (5 min)
- "What's different now versus before?"
- "What's been better than expected? Worse?"
- "If you could change one thing, what would it be?"
- "Who else in your network would benefit from this? Anyone you'd connect us with?"

#### Close (2 min)
- "What didn't I ask that I should have?"
- "Thank you — incentive will hit your inbox in 24 hours."

**Decision criteria:**
- Spend most of your time on trigger and evaluation. Background context should be quick.
- If the interview is running short, cut the "now" section before cutting the trigger.

**Common gotcha:** Treating the guide as a script. Reading questions verbatim kills rapport and signals you're not listening. Memorize the flow; phrase questions naturally.

---

### Step 4: Master Listening and Probing Techniques

The interview itself is where most research goes wrong. Technique matters.

**Active listening prompts (use constantly):**
- "Tell me more about that."
- "What do you mean by [exact word they used]?"
- "Can you give me a specific example?"
- "What happened next?"
- "Why was that important to you?"
- "How did that feel?"

**The 5-second rule:** After the customer finishes speaking, count to 5 before saying anything. People reflexively fill silence with elaboration. Most of the best quotes come in the 4th second.

**The 3-why drill:** When a customer gives a surface-level answer, ask "why" up to three times (rephrased so it doesn't feel interrogative).

```
Customer: "We were spending too much on the old tool."
Q1: "When you say too much — too much for the value, or too much for the budget?"
Customer: "Too much for what we were getting. We were paying for stuff we didn't use."
Q2: "Got it. What were you paying for that you didn't use?"
Customer: "Honestly, the AI features. We turned them off after two weeks."
Q3: "Why did you turn them off?"
Customer: "They kept hallucinating customer names."
[Now we have an actual insight.]
```

**Avoiding leading questions:**

| ❌ Leading | ✓ Open |
|-----------|--------|
| "Don't you find the dashboard confusing?" | "How do you find the dashboard?" |
| "Would you pay $99 for this feature?" | "Walk me through how you think about cost for this kind of feature." |
| "Was speed the most important thing?" | "What mattered most to you?" |
| "Do you like the new design?" | "What's been your experience with the new design?" |

**Story-mining over opinion-mining:**
- ❌ "What's important to you in a code review tool?" (gets you a feature wishlist)
- ✓ "Walk me through the last time you reviewed a PR. What happened?" (gets you a real story with real friction)

**Common gotcha:** Talking more than 20% of the time. Track it. If you can't shut up, the customer can't open up. Aim for 80/20 listen/speak.

---

### Step 5: Record, Transcribe, and Capture Hot Notes

Memory is unreliable. Record everything.

**Recording setup:**
- **Best tools (2026):** Fathom, Granola, Otter.ai, Grain — all auto-transcribe.
- **Consent script:** "I'd like to record for note-taking purposes. The recording stays internal to our team. Sound good?" Get verbal consent on tape.
- **Video > audio** — body language adds signal, especially for emotion words.
- **Backup recorder** — primary tool fails. Use your phone's voice memo as backup.

**Hot notes (during the call):**
While listening, capture:
- Direct quotes you want to revisit (timestamp + verbatim)
- Surprising statements
- Topics to follow up on later in the call
- New questions to add to future interviews

**Cooling notes (within 1 hour of the call):**
While memory is fresh:
- Top 3 quotes from the call
- Initial JTBD hypothesis from this customer
- Anything that contradicted prior interviews
- Any tells that suggested the customer was rationalizing vs. recalling

**Transcript discipline:**
- Run the recording through Otter or Rev within 24 hours.
- Clean up obvious transcription errors (especially proper nouns, product names).
- Tag verbatim — never paraphrase. Paraphrasing destroys the customer language that messaging work depends on.

---

### Step 6: Single-Interview Synthesis Template

Don't wait until all interviews are done to synthesize. Write a brief after each one.

```markdown
## Interview brief — {{Customer name}}, {{Date}}

**Segment:** {{ICP / non-ICP / churned / lost / prospect}}
**Role:** {{title}}, {{company size}}, {{industry}}
**Interview type:** {{won/lost/churned/active}}
**Researcher:** {{name}}
**Recording link:** {{url}}
**Transcript link:** {{url}}

### One-line takeaway
{{What's the headline from this interview?}}

### Top 3 verbatim quotes
1. "{{quote — full sentence, no cleanup}}"
2. "{{quote}}"
3. "{{quote}}"

### JTBD hypothesis (from this interview)
- **Job:** "When {{situation}}, I want to {{motivation}}, so I can {{outcome}}."
- **Trigger:** {{what specifically happened}}
- **Hiring criteria mentioned (in order of weight):**
  1. {{criterion}}
  2. {{criterion}}
  3. {{criterion}}
- **Anxieties surfaced:**
  - {{anxiety + how it was neutralized}}

### Surprises / contradictions
- {{what contradicted prior interviews or our hypothesis}}

### Follow-ups for future interviews
- {{new question to add to the guide}}

### Confidence note
- Did the customer recall vividly or rationalize? Any tells of "rehearsed" answers?
```

---

### Step 7: Cross-Interview Pattern Synthesis

After 8-12 interviews, hand off to the `customer-research` skill for full JTBD synthesis. But before you do, run these checks yourself:

**Saturation check:**
- Are you hearing the same triggers across most interviews? → saturation reached; you can stop or go deeper on edge cases.
- Are you still surfacing entirely new triggers in every call? → keep going; sample isn't representative yet.

**Segment check:**
- Cluster interviews by segment. Are JTBDs consistent within segment, different between segments? That tells you whether you have one ICP or several.

**Hypothesis check:**
- Did the data confirm or contradict the going-in hypotheses? Both outcomes are valuable. Contradictions are usually more valuable.

**Quality check:**
- Re-read 3 random transcripts. Are you getting cinematic detail, or surface answers? If surface, the guide or technique needs work — fix before continuing.

---

### Step 8: Hand Off to Synthesis

Trigger the `customer-research` skill once you have:
- ≥10 verbatim transcripts (or ≥5 for hypothesis-grade work)
- Hot + cool notes per interview
- A coding scheme draft (push / pull / anxiety / habit / trigger / criterion)

The synthesis skill will produce the JTBD output. The interview skill's job ends at clean transcripts + per-interview briefs.

---

## Output Format

### Output 1: Interview Plan

```markdown
# Interview Plan: {{Research goal}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / Approved / In progress / Complete

## Decision the research informs
{{What positioning, messaging, product, or pricing decision is waiting?}}

## Research questions
1. {{specific, answerable question}}
2. {{...}}

## Hypotheses to test
- {{what we currently believe}}

## Sample target
- Segment: {{ICP / churned / lost / prospect}}
- Count: {{N}}
- Recruitment window: {{dates}}

## Recruitment
- Criteria: {{must-haves and disqualifiers}}
- Outreach template: {{link}}
- Incentive: {{amount + form}}

## Method
- 1:1 video, 45 min, semi-structured
- Recording + verbatim transcript via {{tool}}
- Hot + cool notes per interview

## Output
- Per-interview briefs (link to template)
- Cross-interview synthesis via `customer-research` skill

## Timeline
- Interviews complete: {{date}}
- Synthesis complete: {{date}}
```

### Output 2: Interview Guide

```markdown
# Interview Guide: {{Research goal}}

**Length:** 45 min
**Type:** Semi-structured

## Open (3 min)
- Logistics, consent to record, set expectations.

## Context (5 min)
- Role, week, team, tools.

## Before (10 min)
- How they handled the problem before.
- What worked, what hurt.
- How long it had been a problem.

## Trigger (10 min) — PRIMARY SECTION
- Take me back to the moment...
- What happened that day...
- Who else was involved...
- First action you took...

## Evaluation & decision (10 min)
- What you considered...
- Criteria that mattered most...
- Almost-no moment...
- What almost stopped you from buying anything...

## Now (5 min)
- What's different...
- What's been better/worse than expected...
- One thing you'd change...

## Close (2 min)
- What didn't I ask...
- Thanks + incentive.

## Probes (use throughout)
- Tell me more.
- What do you mean by [word]?
- Give me a specific example.
- What happened next?
- Why was that important?
```

### Output 3: Per-Interview Brief

(Use the template from Step 6.)

---

## Quality Bar

A skill output is "done" when:

- [ ] Research plan explicitly names the decision the interviews will inform.
- [ ] Sample target is specified with segment + count + recruitment window.
- [ ] Guide covers context, before, trigger, evaluation, now, close — with trigger as the longest section.
- [ ] Every interview is recorded with verbal consent on tape.
- [ ] Every interview has a verbatim transcript (not paraphrased notes).
- [ ] Per-interview brief is written within 24 hours, with at least 3 verbatim quotes.
- [ ] Researcher talks <25% of the interview time.
- [ ] No leading questions in the guide (run a peer review pass on the guide before fielding).
- [ ] Saturation is checked after every 5 interviews.
- [ ] Output hands off cleanly to the `customer-research` skill.

### Common Mistakes

1. **Asking what they want, not what they did** — "What features would you like to see?" produces wishlists, not insights. **Why it happens:** Feels efficient; customers will answer it. **Fix:** Replace every "what would you" question with "walk me through the last time you...". Stories beat opinions.

2. **Leading questions** — "Don't you think the dashboard is confusing?" gives the customer the answer. **Why it happens:** Researcher has a hypothesis and unconsciously seeks confirmation. **Fix:** Have a teammate review the guide before fielding. Any question with "don't you", "would you", "do you like" gets rewritten.

3. **Talking too much** — Researcher fills silence, explains the product, validates the customer's answer. **Why it happens:** Discomfort with silence; product-marketing instinct to teach. **Fix:** Use the 5-second rule. Track talk-time after the interview. If you spoke more than 25%, re-watch and identify where you should have shut up.

4. **Recruiting only happy customers** — All-promoter samples produce useless research. **Why it happens:** Easier to get yeses from happy people. **Fix:** Force ≥30% of recruits to be detractors, churners, or lost deals. They have the most actionable insight.

5. **Paraphrased notes instead of verbatim transcripts** — "He said the integration was important" loses the customer's actual words. **Why it happens:** Recording feels effortful; teams skip transcription. **Fix:** Use Fathom or Granola — auto-transcription is free or near-free. Verbatim transcripts are non-negotiable; they're the raw material for messaging.

6. **No per-interview brief** — Interviewers come off the call, never write up, move on to the next. By interview 8, they've forgotten interview 2. **Why it happens:** Time pressure. **Fix:** Block 30 min on the calendar immediately after each interview for the cool-notes brief. Treat it as part of the interview, not separate.

7. **Skipping the trigger section** — Spending 30 min on background and 5 min on the moment of decision. **Why it happens:** Background is easy to ask about; trigger requires probing. **Fix:** Set a timer. Background ≤ 8 min. Spend 10-15 min on the trigger story. If the customer can't recall a trigger, they may not have been a real switcher (they may have inherited the decision) — note this.

8. **No saturation check** — Running 25 interviews when you reached saturation at 10. **Why it happens:** "More is better" instinct. **Fix:** After every 5 interviews, ask: "Did I hear new triggers, criteria, or anxieties this batch?" If no, you're saturated. Stop or pivot.

---

## Examples

### Example 1: Lost-deal interviews after a competitor takeout

**Context:**
- Company: Pulse, a customer feedback tool, $7M ARR, 28 employees.
- Goal: Understand why they lost 6 deals in a row to Sprig in Q4.
- Constraint: Sales is defensive; they need an outside researcher to get honest answers.

**Input from user:**
> "We lost 6 enterprise deals to Sprig last quarter after winning that segment for two years. Sales says it's pricing. We don't think so. Run lost-deal interviews."

**Output (abbreviated):**

```markdown
# Lost-Deal Interview Plan: Sprig Takeouts Q4

### Decision to inform
Whether to change positioning (sales hypothesis: pricing) or product (PM hypothesis: feature parity gap with Sprig)

### Sample
- 6 lost deals from Q4, all enterprise (>$50K ACV)
- Interviewer: external researcher, not original AE
- Incentive: $200 Amazon card

### Outreach (sent by VP of Customer Research, NOT the AE)
Subject: You chose Sprig — and I want to learn why

Hi {{name}},

You evaluated Pulse and went with Sprig. I'm not the salesperson on your account
and I'm not here to re-pitch — I genuinely want to learn what mattered. 30 min,
honest take. $200 Amazon card.

Pick a slot: {{Calendly}}

### Guide (45 min — trigger-heavy)

Context (5 min)
- Walk me through your team and what feedback signal you're trying to capture.

Evaluation (15 min) — PRIMARY
- Take me back to when you started looking. What had changed?
- Who was on the eval team?
- Walk me through the actual comparison. What was in the spreadsheet?
- When did Sprig enter the consideration set?
- What was the deciding moment?

Almost-no (10 min)
- Was there a moment Pulse almost won? What was that?
- What would have had to change for you to choose Pulse?
- Be honest — was this a real comparison or was Sprig the favorite from the start?

Now (5 min)
- A month in with Sprig — how's it going?
- What's been better than expected? Worse?
- Knowing what you know now, would you reconsider Pulse?

Close (10 min — extended for lost deals)
- What advice would you give Pulse?
- Anyone in your network we should talk to?

### Key probes
- "When you say 'better UX' — what specifically were you comparing screen-by-screen?"
- "What would have changed your mind about the pricing?"
- "Was anyone on your team pushing for Pulse? Why didn't that win?"

### What we learned (cross-interview, n=6)
- Pricing was NOT the deciding factor (5/6 said price was equivalent or Pulse was slightly cheaper).
- The deciding factor: Sprig had a stronger micro-survey use case for in-product, and 5/6 evaluators were product-led teams with a CS-team buyer.
- Implication: We've been positioning to CS leaders but losing to product-led buying committees.
- Action: rewrite positioning for product-led segments, build a micro-survey feature in Q1.
```

**Why this works:** Having an outside researcher avoids the AE-defensiveness problem. The trigger-heavy guide surfaced that the actual driver wasn't pricing (sales' hypothesis) but feature/use-case fit for a buying committee Pulse wasn't even targeting.

---

### Example 2: 12 power-user interviews to validate an expansion hypothesis

**Context:**
- Company: Mailwave, an email automation tool, $18M ARR, 75 employees.
- Goal: Validate whether power users want a "team plan" expansion (current hypothesis from PM).
- Constraint: Need answers in 3 weeks; CTO wants to start engineering work.

**Input from user:**
> "PM thinks our top users will pay 2x for a team plan with shared templates. We have a vague hypothesis. Before we build it, validate with users."

**Output (abbreviated):**

```markdown
# Power-User Interview Plan: Team-Plan Hypothesis

### Decision to inform
Whether to build the "team plan" feature (Q1 engineering scope: 8 weeks)

### Hypotheses to test
H1: Power users have teammates who would use the product if invited.
H2: They'd pay 2x for shared templates + team admin.
H3: They currently work around this with shared logins or copy-paste.

### Sample
- 12 power users (>50 sends/week, >6 months tenure)
- Interviewer: PM (with researcher coach in first 3 calls)
- Incentive: $100 credit on next bill

### Guide (45 min)

Context (5 min)
- Walk me through how you use Mailwave in a typical week.
- Who else at your company knows you use it?

Current workflow (15 min)
- When you build a template, what happens after? Anyone else use it?
- Have you ever shared your account?
- Have you ever tried to invite a teammate? What stopped you?
- Walk me through the workarounds you've built.

The hypothesis (10 min — but DON'T pitch it)
- If you could change one thing about how teams work with Mailwave, what would it be?
- (Listen for unprompted mentions of team features.)
- If they don't bring it up: "Some users have asked us about shared templates. Is that something you'd use?"
- "Walk me through the scenario where that would help."

Pricing (5 min)
- "How is Mailwave currently paid for? Is it on your card, your team's card?"
- "Who else at your company would have to approve a team plan?"

Close (10 min)
- "What's the strongest argument FOR a team plan from your perspective? What's the strongest argument AGAINST?"
- "If we built this in Q2, would you upgrade?"

### What we learned (cross-interview, n=12)
- H1: PARTIAL. 7/12 had teammates who'd use it; 5/12 were solo operators.
- H2: WEAK. 4/12 said yes to 2x; most said 1.3-1.5x.
- H3: STRONG. 10/12 had built workarounds (shared logins, copy-paste, Slack channels).
- Surprise: 6/12 said they'd actually downgrade if forced to a team plan — they liked owning it personally.

### Implication
The team plan as priced won't hit revenue targets. But the workaround data shows a real "shared template library" pain. Recommend: ship shared templates as a $20/mo add-on to the current plan instead of repackaging. Re-validate pricing with 5 more interviews scoped to team buyers, not power users.
```

**Why this works:** The interviews stopped a months-long engineering bet before commitment by surfacing that the willingness-to-pay was much lower than PM assumed, but that the underlying pain (workarounds) was real — suggesting a different feature/pricing structure.

---

## Related Skills

- **[`customer-research`](../customer-research/SKILL.md)** — Use *after* this skill. Takes the transcripts + briefs and produces the full JTBD synthesis.
- **[`icp-research`](../icp-research/SKILL.md)** — Use *alongside*. Interview recruits are drawn from the ICP cohort; psychographic findings flow back into the ICP.
- **[`positioning`](../positioning/SKILL.md)** — Use *after*. Trigger and hiring-criteria findings inform the positioning canvas.
- **[`testimonial-collection`](../testimonial-collection/SKILL.md)** — Use *alongside*. The end of a happy-customer interview is the right moment to ask for a quote-on-record.
- **[`messaging-framework`](../messaging-framework/SKILL.md)** — Use *after*. Customer language from transcripts becomes the proof of the messaging pillars.
- **[`churn-prevention`](../churn-prevention/SKILL.md)** — Use *alongside* for churn exits. Exit interviews use a different guide variant focused on the moment of cancellation.
- **[`competitive-analysis`](../competitive-analysis/SKILL.md)** — Use *alongside* for lost-deal interviews — surfacing competitor strengths and your weaknesses.

---

## References

- Bob Moesta, Chris Spiek — *Demand-Side Sales* (the JTBD interview method)
- Steve Portigal — *Interviewing Users* (technique and ethics)
- Indi Young — *Practical Empathy* and *Listening Deeply* (qualitative depth)
- Erika Hall — *Just Enough Research* (research design for product teams)
- Teresa Torres — *Continuous Discovery Habits* (interview cadence and triangulation)
