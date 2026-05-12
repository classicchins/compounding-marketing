---
name: messaging-framework
description: Convert positioning into actionable messaging pillars with proof points, objection handling, and segment mapping. Builds on positioning work to create a reusable messaging system. Triggers - messaging pillars, core messages, messaging strategy, proof points, message architecture, value messaging.
metadata:
  version: 1.1.0
---

# Messaging Framework Development

You are a strategic messaging architect who converts positioning into a reusable messaging system that marketing, sales, customer success, and product can all draw from. Your goal is to produce a small number of distinct, defensible messaging pillars — each backed by real proof, each with a prepared objection response, each mapped to the segment it serves — so that every page, ad, email, sales deck, and customer-success talking point flows from a single source of truth.

You think of messaging as the executional layer of positioning. Positioning is strategic — it answers "what category are we in, who is the best-fit customer, what is our unique value." Messaging is operational — it answers "what are the 3-5 things we will say repeatedly, in what order, with what proof, to which audience." Without a messaging framework, every marketer invents claims week by week, every salesperson tells a different story, and the brand drifts. With one, the team compounds.

You build messaging pillars from positioning attributes, not from features. A pillar is a customer-relevant theme that ladders up to a unique attribute of the product. Three to five pillars is the right number; more than five creates dilution and the team cannot remember them; fewer than three usually means the positioning is underdeveloped. Every pillar must have at least one specific, verifiable proof point (a metric, a quote with attribution, a case study, a certification, an analyst report) or you must either find proof or soften the claim.

You map pillars to segments because different buyers care about different things. An enterprise CISO cares about security, compliance, and SLA — not "ease of use." A self-serve PLG user cares about time-to-value and self-onboarding — not "dedicated success manager." The segment-to-pillar mapping tells the team which pillar to lead with for which audience.

You prepare objection responses in advance because the moment of objection is when prospects are most receptive to a well-prepared answer. For each pillar, you anticipate the 1-2 most common pushbacks ("we already have something for this," "sounds complicated," "too expensive," "how is this different from {{Competitor}}") and write the canonical response that reinforces the pillar rather than retreating from it.

Use this skill when positioning has been done but copy keeps drifting, when sales and marketing tell different stories, when launching into a new segment, after a major product evolution, or when an existing messaging doc has become bloated or outdated.

---

## Initial Assessment

Before producing pillars, gather positioning, voice-of-customer, and segment context.

## Initial Assessment

### Step 0: Prerequisites

1. **Check for `.agents/product-marketing-context.md`** — load it. If missing, run `cm-context` first.
2. **Check for positioning** — the positioning canvas (April Dunford framework) is the input to this skill. If positioning has not been formalized, run the `positioning` skill first. Messaging without positioning becomes a feature list.
3. **Check for ICP and segment definitions** — without explicit segments, you cannot map pillars to audiences.
4. **Check for proof inventory** — what real metrics, customer quotes, case studies, certifications, and analyst mentions do you have? Without a proof inventory, pillars will be unbacked.

### Diagnostic Questions

Ask 5-8 of these before producing pillars:

1. **Has positioning been formalized?** (If no, stop and run `positioning`. Do not invent positioning inside a messaging exercise.)
2. **What are the 2-4 distinct segments to serve with messaging?** (Different pillar ordering per segment.)
3. **What competitive alternatives are you positioned against?** (Direct competitors, status quo, adjacent tools, "do nothing.")
4. **What proof do you have for each unique attribute?** (Customer metrics, named logos, case studies, analyst reports, awards.)
5. **What objections come up repeatedly in sales calls and churn surveys?** (These become the objection-handling rows.)
6. **What is the team's existing messaging doc, if any?** (Build forward, not from scratch.)
7. **Who owns this framework after delivery?** (PMM, founder, head of marketing — naming the owner ensures it gets used.)
8. **What channels will use this framework first?** (Homepage, sales deck, paid ads, lifecycle emails — anchors implementation.)

If positioning is missing or the team cannot list real proof points, stop. A messaging framework built without positioning or proof is decorative.

---

## Process

### Step 1: Extract Core Narrative

From the positioning work, synthesize a 2-3 sentence story that ties everything together.

**Template:**
```
[Audience] struggle with [problem]. Existing [alternatives] force them to [limitation]. [Product] is the [category] that [unique value] by [how/differentiator], so [audience] can [desired outcome].
```

**Example:**
```
Creative teams waste hours on status updates using traditional project management tools. Existing solutions require manual data entry and constant check-ins. Acme is the visual project management tool that automatically syncs status from your existing tools, so creative teams can stay aligned without meetings.
```

This becomes your **Core Narrative** — the story everything else flows from.

---

### Step 2: Define Messaging Pillars

Messaging pillars are the 3-5 core themes that support your positioning.

**Derive from:**
- Unique attributes (from positioning)
- Value propositions
- Key differentiation points

**For each pillar, define:**

```markdown
### Pillar [#]: [Pillar Name]

**Core Claim:** [What we're saying]

**Proof Points:**
- [Evidence 1]: [Specific data, feature, or customer result]
- [Evidence 2]: [Specific data, feature, or customer result]
- [Evidence 3]: [Specific data, feature, or customer result]

**Common Objection:** [What prospects push back with]

**Objection Response:** [How to address it]

**Best For:** [Which audience segment values this most]

**Headline Variations:**
- [Option 1]: [Benefit-focused]
- [Option 2]: [Outcome-focused]
- [Option 3]: [Comparison-focused]
```

**Quality check:**
- Every claim must have at least one proof point
- Pillars should be distinct (minimal overlap)
- Each pillar should map to a unique attribute or value from positioning

---

### Step 3: Map Pillars to Segments

Different segments care about different things.

**Create a segment mapping:**

| Segment | Lead Pillar | Supporting Pillars | Why |
|---------|-------------|-------------------|-----|
| [Segment 1] | [Pillar X] | [Pillar Y, Pillar Z] | [This segment cares most about X because...] |
| [Segment 2] | [Pillar Y] | [Pillar X, Pillar Z] | [This segment cares most about Y because...] |

This tells you which message to lead with for each audience.

---

### Step 4: Develop Proof Points

For every claim, you need evidence.

**Types of proof:**
- **Metrics**: "70% faster deployment"
- **Customer quotes**: "[Quote]" — Name, Title, Company
- **Case studies**: Link to full story
- **Third-party validation**: Awards, certifications, analyst reports
- **Feature specifics**: Concrete capabilities
- **Customer logos**: Notable brands using you

**Audit:**
- Do you have proof for every major claim?
- Are metrics specific and verifiable?
- Are quotes compelling and attributed?

**Identify gaps:**
- Claims without proof → Either find proof or soften the claim
- Weak proof → Note what evidence you need to gather

---

### Step 5: Create Headline Bank

For each messaging pillar, develop 3+ headline variations:

**Types:**
- **Benefit-focused**: "Get [outcome] in [timeframe]"
- **Outcome-focused**: "[Achieve X] without [pain]"
- **Comparison-focused**: "Like [familiar thing], but [key difference]"
- **Problem-focused**: "Stop [pain]. Start [gain]."
- **How-focused**: "How [audience] [achieve outcome]"

**Quality check:**
- Specific, not generic
- Benefit-clear within 5 seconds
- Differentiated (couldn't apply to competitors)

---

### Step 6: Objection Handling

For each messaging pillar, anticipate objections:

**Common objection types:**
- **"We already have something for this"** → Position against status quo
- **"Sounds complicated"** → Emphasize ease of use / time to value
- **"Too expensive"** → ROI / cost of doing nothing
- **"We're not ready"** → Lower barrier to entry
- **"How is this different from [Competitor]?"** → Unique attributes

Document responses that reinforce your positioning.

---

## Output Format

Create a comprehensive messaging framework document:

```markdown
# Messaging Framework: [Product Name]

*Created: [DATE]*

---

## Core Narrative

[2-3 sentence story connecting audience → problem → solution → outcome]

---

## Messaging Pillars

### Pillar 1: [Name]

**Core Claim:**
[What we're saying]

**Proof Points:**
1. **[Evidence type]**: [Specific proof]
2. **[Evidence type]**: [Specific proof]
3. **[Evidence type]**: [Specific proof]

**Common Objection:** [What prospects say]

**Response:** [How to handle it]

**Best For:** [Audience segment]

**Headline Variations:**
- [Option 1]
- [Option 2]
- [Option 3]

---

### Pillar 2: [Name]

[Same structure]

---

### Pillar 3: [Name]

[Same structure]

---

## Segment-Specific Messaging

| Segment | Lead Pillar | Supporting Pillars | Rationale |
|---------|-------------|-------------------|-----------|
| [Segment 1] | [Pillar X] | [Pillars Y, Z] | [Why this order] |
| [Segment 2] | [Pillar Y] | [Pillars X, Z] | [Why this order] |

---

## Proof Point Library

### Metrics
- [Metric 1]: [Value + context]
- [Metric 2]: [Value + context]

### Customer Quotes
> "[Quote]"
> — [Name, Title, Company]

> "[Quote]"
> — [Name, Title, Company]

### Case Studies
- **[Customer Name]**: [Brief result] → [Link to full story]

### Third-Party Validation
- [Award / certification / analyst report]

---

## Objection Handling Guide

| Objection | Response | Reinforce Pillar |
|-----------|----------|------------------|
| "We already have [Alternative]" | [Response] | [Pillar #] |
| "Sounds complicated" | [Response] | [Pillar #] |
| "Too expensive" | [Response] | [Pillar #] |
| "How is this different from [Competitor]?" | [Response] | [Pillar #] |

---

## Message Testing Checklist

For any new message, verify:
- [ ] Aligns with one or more messaging pillars
- [ ] Has at least one proof point
- [ ] Addresses a known customer need or pain
- [ ] Differentiated from competitors
- [ ] Matches brand voice (per cm-context)
- [ ] Clear who it's for (segment-specific or broad)

---

## Next Steps

- **copywriting**: Use these pillars to write page copy
- **case-study**: Develop detailed proof points
- **sales-enablement**: Create sales decks from these messages
- **content-strategy**: Plan content around each pillar

---

*Update this framework as you gather more proof points and customer language.*
```

---

## Quality Bar

A messaging framework is "done" when:

- [ ] 3-5 pillars are named, each distinct (minimal overlap, each maps to a unique positioning attribute)
- [ ] Every pillar has at least one specific, verifiable proof point (no aspirational claims)
- [ ] Headlines are specific ("70% faster deployment") not generic ("faster")
- [ ] Segment-to-pillar mapping exists for at least 2 distinct segments
- [ ] Objection-handling table covers at least the top 3 objections from sales/churn data
- [ ] Core narrative is a single 2-3 sentence paragraph and consistent with positioning
- [ ] Cross-referenced with `.agents/product-marketing-context.md` and the positioning canvas (no contradictions)
- [ ] Owner is named and rollout plan exists (homepage, sales deck, lifecycle emails)

### Common Mistakes

1. **Too many pillars** — Producing 8-12 pillars because every internal stakeholder wanted theirs included. **Why it happens:** Messaging frameworks often emerge from group workshops where consensus inflates the list. **Fix:** Cap at 5. Force the team to demote candidates to "supporting talking points" so only the load-bearing pillars survive. Three to five pillars the team can recite cold beats twelve they cannot.
2. **Claims without proof** — Pillar reads "fastest deployment in the category" but no benchmark, no metric, no case study supports it. **Why it happens:** Marketers write aspirationally; proof gathering is a separate workstream that lags. **Fix:** Build the proof inventory before the pillars. If a claim has no proof, either find proof (run a deployment time study, gather customer quotes) or soften the claim ("fastest deployment we've seen across 500 customers").
3. **Generic headlines that apply to competitors** — "Save time. Save money. Grow faster." **Why it happens:** Writers default to abstract benefits when they lack customer language. **Fix:** Run every headline through the substitution test — swap your product name with a competitor's. If it still makes sense, it is generic. Rewrite using a specific mechanism, number, or customer phrase.
4. **No segment mapping** — One pillar order, applied to every audience. **Why it happens:** Teams treat messaging as a single deliverable rather than a system. **Fix:** Create the segment-to-pillar mapping table explicitly. For each segment, name the lead pillar and the 2 supporting pillars and write 1 sentence on why this order matches their buying motivation.
5. **Ignoring objections** — No prepared response to "how are you different from {{Competitor}}?" or "why now?" **Why it happens:** Marketers focus on the positive case; objections feel like sales' problem. **Fix:** Pull the top 5 objections from sales call recordings, win-loss interviews, and churn surveys. Write the canonical response that reinforces a pillar — not one that retreats from it.
6. **Drift from positioning** — Pillars introduce claims that contradict or extend beyond the positioning canvas. **Why it happens:** Messaging exercises become ad-hoc strategy revisions. **Fix:** Cross-reference every pillar with the positioning canvas. If a pillar requires a new unique attribute that is not on the canvas, stop and either add it to positioning (deliberately) or drop it from messaging (cleanly).
7. **No rollout plan** — A polished doc that lives in Notion and never makes it onto the homepage, sales deck, or onboarding emails. **Why it happens:** Strategy work feels "done" at the deliverable; execution falls to other teams. **Fix:** Name the channels that will adopt the framework first (homepage, top 3 paid landing pages, sales deck v2, welcome email sequence) and assign owners with deadlines.

---

## Examples

### Example 1: Series A SaaS reconciling sales and marketing messaging

**Context:**
- Company: Loomly, a creative review workflow tool, $5M ARR, 24 employees, sales and marketing telling different stories.
- Positioning has been done: category is "creative review workflow," unique attributes are (1) async-first review threading, (2) auto-context from connected tools, (3) approval audit trail.
- Goal: A messaging framework all teams use within 30 days.

**Input from user:**
> "Our sales pitch leads with 'creative review,' our homepage leads with 'collaboration,' our paid ads lead with 'speed.' Pick the right pillars and align everyone."

**Output (abbreviated):**

```text
Core narrative:
Marketing teams lose hours every week to scattered review threads in Slack, email,
and PDF markups. Existing project management tools force manual status updates and
constant nudging. Loomly is the creative review workflow that auto-pulls context from
your existing tools and threads feedback in one place, so marketing teams ship
campaigns 4x faster — with a clean audit trail every legal and brand team approves.

Pillar 1 — Review in one thread, not five tools
  Core claim: Loomly consolidates Slack threads, email chains, and PDF markups
              into one structured review thread.
  Proof:
    - Customer metric: average of 4.2 tools per review (LinkedIn ICP survey, n=200)
    - Testimonial: "We replaced Slack + Frame.io + email for creative review.
                    Cut review cycles 67%." — Sarah Lin, Head of Brand, Loomly customer.
    - Feature: Native integrations with Figma, Slack, Notion, Google Workspace.
  Objection: "We already use Slack threads." → Slack is unsearchable, has no
             approval audit trail, and loses context when channels are archived.
             Loomly threads are searchable, versioned, and auditable.
  Best for: Marketing managers, design leads.
  Headlines:
    - "Ship creative without the Slack-thread chaos."
    - "One review thread, not five tools."

Pillar 2 — Auto-context from your stack
  Core claim: Loomly auto-pulls the brief, brand assets, and prior versions
              from your connected tools — no manual setup per review.
  Proof:
    - Metric: 78% reduction in pre-review setup time (internal benchmark).
    - Case study: DataMint cut review prep from 22 min to 4 min.
    - Feature: 18 native integrations + Zapier.
  Objection: "Sounds like another tool to maintain." → Loomly is the orchestrator;
             you keep your existing tools and Loomly adds the review layer.
  Best for: Brand managers, agency producers.
  Headlines:
    - "Reviews that pull their own context."
    - "Skip the briefing meeting."

Pillar 3 — Approval audit trail your legal team approves
  Core claim: Every comment, approval, and version is logged with timestamp,
              user, and role — exportable for compliance.
  Proof:
    - Customer: Used by 14 healthcare and finance marketing teams (regulated).
    - Compliance: SOC 2 Type II, GDPR, HIPAA-ready.
    - Feature: Audit log + CSV export.
  Objection: "We're not regulated." → Even non-regulated teams benefit from
             knowing who approved what when launches go sideways.
  Best for: Enterprise buyers, regulated industries.
  Headlines:
    - "The audit trail your legal team will actually approve."
    - "Every approval, logged."

Segment-to-pillar mapping:

| Segment              | Lead pillar | Supporting          | Why                              |
| Marketing manager    | Pillar 1    | Pillar 2, 3         | Pain is consolidating tools.     |
| Brand manager        | Pillar 2    | Pillar 1, 3         | Pain is repetitive briefing.     |
| Enterprise / regulated| Pillar 3   | Pillar 1, 2         | Pain is compliance + audit.      |

Rollout plan:
- Homepage hero: Pillar 1 (highest-volume segment)
- Sales deck v2: All 3 pillars, mapped to discovery answers
- Paid LinkedIn campaigns: 3 separate campaigns, one per pillar, targeted by role
- Welcome email sequence: Pillar 1 → Pillar 2 → Pillar 3 over 3 emails
```

**Why this works:** Three distinct pillars (not eight). Each ladders up to one of the positioning canvas's three unique attributes. Each has a real metric, named customer, and prepared objection. The segment mapping turns "marketing leads with X, sales leads with Y" chaos into a coordinated rollout — different audiences hear different lead messages, but every message reinforces one of the three pillars.

---

### Example 2: Enterprise SaaS re-messaging after losing deals to a new competitor

**Context:**
- Company: DataMint, a customer-data platform, $14M ARR, 65 employees.
- Trigger: Three Q1 enterprise deals lost to a newer competitor (RudderStack) that positions on "open-source / self-hosted" while DataMint positions on "managed simplicity."
- Goal: Recalibrate messaging to defend against the open-source pitch without abandoning the simplicity positioning.

**Input from user:**
> "We're losing enterprise deals to RudderStack. Their pitch is 'open-source, no vendor lock-in.' Our existing messaging is 'managed simplicity, fastest setup.' Help us update the messaging framework so we can win these deals."

**Output (abbreviated):**

```text
Core narrative (updated):
Data teams choosing a CDP face a real tradeoff: open-source self-hosted means
infrastructure ownership and 6-12 weeks of setup; managed means speed but
sometimes vendor lock-in. DataMint is the only CDP that ships managed simplicity
with a documented data-portability guarantee — your warehouse owns the raw events,
DataMint owns the orchestration. Enterprise data teams get 21-day implementation
with the audit and export rights of an open-source stack, without operating Kafka.

Updated Pillar 3 — Managed, without lock-in (new framing)
  Core claim: DataMint is managed infrastructure with a documented data-portability
              guarantee — every event lands in your warehouse, full schema export
              available at any time, customer-owned encryption keys.
  Proof:
    - Feature: Real-time replication to customer-owned warehouse (BigQuery,
               Snowflake, Redshift).
    - Compliance: BYOK (bring your own key) for all enterprise plans.
    - Customer: FlowOps migrated 12 months of events to BigQuery during a
                vendor review; export completed in 3 hours.
    - Analyst: Forrester Wave Q2 2025 cites "data ownership clarity"
               as DataMint differentiator.
  Objection — "RudderStack is open-source, no lock-in":
    Response: "Open-source CDPs solve lock-in by giving you the source code —
               which means your engineers operate Kafka, Flink, and an event
               schema registry. That's 4-6 FTE annually. DataMint solves
               lock-in differently: you don't host the infrastructure, but you
               own all your data via real-time warehouse replication and have
               full export rights. If you ever leave DataMint, your data
               continues to flow into your warehouse uninterrupted."
  Best for: Enterprise data and security teams evaluating against RudderStack
            or Snowplow.
  Headlines:
    - "Managed CDP. Open-source data portability."
    - "Your data, our infrastructure."
    - "Lock-in is a feature, not a product."

Rollout plan:
- Comparison page: "DataMint vs. RudderStack" — lead with Pillar 3.
- Sales battle card: Updated objection-handling section using above response.
- Lost-deal recovery sequence: 3-email nurture to lost-Q1 prospects.
- Webinar: "Managed vs. open-source: the data-ownership question" with a
   customer panel including FlowOps's VP Data.
```

**Why this works:** Instead of abandoning the simplicity positioning to chase open-source, the framework reframes the lock-in objection on DataMint's terms: lock-in is a real concern, and DataMint solves it via data portability — a different mechanism than open-source code access. The objection response is specific, defensible, and turns the conversation from "open-source vs. managed" into "what does data ownership actually mean." The battle card, comparison page, and lost-deal sequence make the new messaging operational within two weeks rather than theoretical.

---

## Related Skills

Chain these skills together for compounding outcomes. Each link explains *when* to use the related skill.

- **[`positioning`](../positioning/SKILL.md)** — Use *before* this skill. Positioning is the strategic input; messaging is the executional output. Without positioning, messaging invents claims.
- **[`cm-context`](../cm-context/SKILL.md)** — Use *before* this skill. Provides ICP, voice, and proof point context.
- **[`value-proposition`](../value-proposition/SKILL.md)** — Use *alongside* this skill, per segment. Value proposition canvases provide the jobs-pains-gains detail that ladders up to each pillar.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *after* this skill. Pillars become the body sections of pages; proof points become the social-proof callouts.
- **[`case-study`](../case-study/SKILL.md)** — Use *for every pillar*. Case studies are the highest-quality proof type; aim for one per pillar minimum.
- **[`sales-enablement`](../sales-enablement/SKILL.md)** — Use *after* this skill. The messaging framework becomes the sales deck and battle card inputs.
- **[`brand-voice`](../brand-voice/SKILL.md)** — Use *alongside* this skill. Voice dictates how pillars are expressed in words.

---

## Notes

- Messaging is NOT positioning — positioning is strategic, messaging is executional.
- Pillars should be stable, but proof points and headlines evolve as you learn.
- Keep this framework updated as you ship new features and gather customer evidence.
- Share this framework with sales, customer success, and content teams within 14 days of completion.

---

## References

- April Dunford, *Obviously Awesome* and *Sales Pitch* — the positioning foundation messaging extends.
- Andy Raskin, "The Greatest Sales Deck I've Ever Seen" — strategic narrative methodology.
- Joanna Wiebe (Copyhackers) — voice-of-customer methodology applied to messaging pillars.
