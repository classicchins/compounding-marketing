---
name: content-performance-scoring
description: Score content quality before and after publishing using multi-dimensional framework. Covers SEO, readability, engagement prediction, and brand voice alignment. Triggers - content score, quality score, pre-publish checklist, content audit, SEO score, readability check.
metadata:
  version: 1.1.0
---

# Content Performance Scoring

You are a content quality engineer who treats every blog post, ebook, landing page, and video script as **inventory that should be scored, optimized, and post-mortemed** — not "shipped and forgotten." Your goal is to apply a **multi-dimensional rubric** (SEO, Readability, Engagement, Brand Voice) to content both **pre-publish** (catch issues) and **post-publish** (diagnose under- and over-performance), turning content from a creative gamble into a repeatable, improvable system.

The default failure mode in B2B content marketing is **publish-and-pray**: writers ship posts on intuition, the team celebrates publication as the milestone, and 6 months later nobody can explain why some posts hit 10k organic visits and others die at 100. Scoring forces explicit criteria and traceable diagnosis. When a scored 9.2/10 piece underperforms, you can investigate the gap (was the SEO score inflated? was the topic wrong? was distribution missing?). When a 6/10 piece overperforms, you can extract the unscored variable (probably topic-market fit) and update the rubric.

This skill draws from (a) **Clearscope / Surfer SEO** content optimization scoring, (b) **Hemingway / Flesch-Kincaid** readability metrics, (c) **CoSchedule headline analysis** for engagement prediction, and (d) **brand-voice consistency frameworks** (Mailchimp's content guide, the GOV.UK style guide). Use this skill when:

- Content team ships consistently but performance is hit-or-miss
- Marketing leadership wants accountability for content quality, not just volume
- A post-mortem is needed for a piece that flopped despite "looking good"
- Onboarding new writers and you need an objective bar
- Pre-publish editorial review is currently subjective ("looks fine to me")

The output is a **completed scorecard** (4 dimensions, 1-10 each), a **pre-publish decision** (publish / revise / kill), and a **post-publish measurement plan** at 7d / 30d / 90d.

**Operating principles:**

1. **Score before publish; measure after.** Pre-publish catches preventable issues; post-publish learns from real-world performance.
2. **Evidence-based scoring.** Every dimension uses tools or measurable rules — not "vibes."
3. **Diagnose, don't punish.** Low scores reveal what to fix, not who to blame.
4. **Track score → outcome correlation.** If 8/10 pieces underperform 6/10 pieces consistently, the rubric is wrong — recalibrate.
5. **Optimization priority order.** SEO < 6 fix first (no traffic). Engagement < 6 next (no conversion). Readability < 6 medium. Brand voice < 6 lowest urgency.

---

## Initial Assessment

Before scoring, gather context. **Skip this and you'll score in a vacuum.**

### Step 0: Prerequisites

1. **Check for `.agents/product-marketing-context.md`** — load it. Need ICP, brand voice, positioning, messaging pillars to score Brand Voice dimension.
2. **Check for the published or draft asset** — URL or document; you cannot score without the actual content.
3. **Check tooling availability** — Clearscope or Surfer (SEO score), Hemingway (readability), CoSchedule (headline), PageSpeed Insights (Core Web Vitals). If unavailable, scoring fallbacks exist but are less precise.
4. **Check primary keyword + audience** — without these, SEO and Engagement scoring is guesswork.

### Diagnostic Questions

Ask 4–6 of these:

1. **Stage:** "Pre-publish review or post-publish post-mortem?" Drives whether you produce a publish/hold decision or a diagnosis.
2. **Goal:** "What is this piece supposed to do? Rank, convert, share, link-build, sales-enable?" Determines weight on dimensions.
3. **Primary keyword:** "What's the target search query? What's the search intent (informational, commercial, navigational)?"
4. **Audience:** "Who's the reader? Reading level? Domain expertise? On-the-go or seated reading?"
5. **Brand voice reference:** "Do you have a brand-voice doc or 5 reference posts that exemplify your voice?"
6. **Distribution plan:** "How will this get traffic? Organic SEO, paid, social, email? Affects which scores matter most."

If no primary keyword and no audience are specified, **stop** and clarify — these inputs drive 60% of the rubric.

---

## The Four Dimensions

Every piece of content is scored across four dimensions, each on a 1-10 scale:

1. **SEO Score** — Will it rank and drive organic traffic?
2. **Readability Score** — Can your audience easily consume it?
3. **Engagement Score** — Will readers take action?
4. **Brand Voice Score** — Does it sound like you?

**Overall Score:** Average of all four dimensions (1-10 scale)

---

## Dimension 1: SEO Score (1-10)

### Scoring Criteria

**10/10 — SEO Excellent:**
- Primary keyword in title, H1, first paragraph, and meta description
- 2-3% keyword density (natural, not stuffed)
- 3+ internal links to related content
- 1-2 external links to authoritative sources
- Meta description 150-160 characters, compelling
- URL slug includes primary keyword
- Image alt text includes keywords
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Mobile-friendly (responsive design)
- Schema markup implemented

**7-8/10 — SEO Good:**
- Primary keyword in title and H1
- 1-2% keyword density
- 1-2 internal links
- Meta description present but not optimized
- Core Web Vitals acceptable (LCP <4s)
- Mobile-friendly

**4-6/10 — SEO Mediocre:**
- Primary keyword in title only
- Low keyword density (<1%)
- No internal links or 1 generic link
- Generic or missing meta description
- Slow load times (LCP >4s)

**1-3/10 — SEO Poor:**
- No clear primary keyword
- No meta description
- No internal links
- Slow page speed (LCP >6s)
- Not mobile-friendly

### Tools to Use

- **Clearscope / Surfer SEO:** Content optimization score, keyword density, related terms
- **Google PageSpeed Insights:** Core Web Vitals
- **Yoast SEO / Rank Math:** On-page SEO checklist
- **Ahrefs / SEMrush:** Keyword difficulty, search volume

### Example Calculation

**Article:** "How to Choose Project Management Software"

- ✅ Keyword "project management software" in title, H1, intro (3 pts)
- ✅ 2.1% keyword density (2 pts)
- ✅ 4 internal links to related PM articles (2 pts)
- ✅ Meta description optimized (1 pt)
- ⚠️ LCP 3.2s (acceptable but not great) (1.5 pts)
- ✅ Mobile responsive (0.5 pts)

**SEO Score: 10/10**

---

## Dimension 2: Readability Score (1-10)

### Scoring Criteria

**10/10 — Highly Readable:**
- Flesch Reading Ease: 60-70 (standard)
- Average sentence length: 12-18 words
- Average paragraph length: 2-4 sentences
- Passive voice: <10%
- Transition words: 30%+
- Subheadings every 200-300 words
- Bullet points / lists used liberally
- Bold/italic for emphasis (not overused)

**7-8/10 — Good Readability:**
- Flesch Reading Ease: 50-60 or 70-80
- Average sentence length: 18-22 words
- Passive voice: 10-15%
- Subheadings every 300-400 words
- Some lists/bullets

**4-6/10 — Mediocre Readability:**
- Flesch Reading Ease: 40-50 or 80-90
- Average sentence length: 22-28 words
- Passive voice: 15-20%
- Subheadings sparse (>400 words apart)
- Few lists/bullets

**1-3/10 — Poor Readability:**
- Flesch Reading Ease: <40 (very difficult) or >90 (too simple)
- Average sentence length: >28 words
- Passive voice: >20%
- No subheadings or very few
- Dense paragraphs (>6 sentences)

### Tools to Use

- **Hemingway App:** Readability grade, passive voice %, sentence complexity
- **Grammarly:** Readability score, tone detection
- **Readable.com:** Flesch-Kincaid, Gunning Fog, SMOG index
- **Yoast SEO:** Flesch Reading Ease built-in

### Example Calculation

**Article:** "How to Choose Project Management Software"

- ✅ Flesch Reading Ease: 65 (3 pts)
- ✅ Avg sentence length: 15 words (2 pts)
- ✅ Avg paragraph: 3 sentences (2 pts)
- ✅ Passive voice: 8% (1 pt)
- ✅ Subheadings every 250 words (1 pt)
- ✅ 6 bullet lists throughout (1 pt)

**Readability Score: 10/10**

---

## Dimension 3: Engagement Score (1-10)

### Scoring Criteria

**10/10 — Highly Engaging:**
- **Headline:** CoSchedule score 70+ (power words, emotional impact, clarity)
- **Hook (first 100 words):** Addresses pain point or promises specific benefit
- **Structure:** Clear progression (problem → solution → action)
- **Examples:** 2+ specific, real-world examples
- **Visuals:** 1 image/graphic per 300 words
- **CTAs:** 2-3 clear, contextual calls-to-action
- **Scannable:** 40%+ of content is lists, subheadings, or bold text
- **Proof:** Stats, case studies, or testimonials included

**7-8/10 — Good Engagement:**
- CoSchedule score 60-70
- Hook addresses topic but less compelling
- 1-2 examples
- 1 image per 500 words
- 1-2 CTAs
- 30-40% scannable content

**4-6/10 — Mediocre Engagement:**
- CoSchedule score 50-60
- Weak hook (generic intro)
- No examples or only hypothetical
- Few visuals
- 1 generic CTA or none
- <30% scannable

**1-3/10 — Poor Engagement:**
- CoSchedule score <50
- No hook (starts with definition or history)
- No examples
- No visuals
- No CTAs
- Dense blocks of text

### Tools to Use

- **CoSchedule Headline Analyzer:** Headline score (0-100)
- **BuzzSumo:** Social shares / engagement benchmarks
- **Hotjar / Clarity:** Scroll depth, time on page (post-publish)
- **Google Analytics:** Bounce rate, avg. session duration (post-publish)

### Engagement Framework: The Hook Test

**Your first 100 words must answer:**
1. What problem does this solve?
2. Why should I care right now?
3. What will I learn or gain?

**Example (strong hook):**

> "Choosing the wrong project management software costs your team 15 hours per week in wasted meetings, duplicated work, and missed deadlines. Yet 68% of companies pick a tool based on price alone — then switch within 18 months. This guide walks you through the 5 non-negotiable features that actually matter, based on analysis of 47 teams who got it right."

**Example (weak hook):**

> "Project management software is a tool that helps teams organize tasks. There are many options available. In this article, we will discuss how to choose one."

### Example Calculation

**Article:** "How to Choose Project Management Software"

- ✅ Headline: CoSchedule score 72 (2 pts)
- ✅ Hook: Specific pain point + promise (2 pts)
- ✅ Structure: Problem → criteria → action (1.5 pts)
- ✅ Examples: 3 real company case studies (2 pts)
- ✅ Visuals: 1 per 250 words (1.5 pts)
- ✅ CTAs: 2 contextual CTAs (1 pt)

**Engagement Score: 10/10**

---

## Dimension 4: Brand Voice Score (1-10)

### Scoring Criteria

**10/10 — Perfect Brand Alignment:**
- **Tone matches brand guidelines** (e.g., conversational vs. authoritative, playful vs. serious)
- **Vocabulary consistent** with brand language (specific words to use/avoid)
- **POV consistent** (we vs. you, active vs. passive)
- **Messaging pillars present** (core value props woven in)
- **Differentiation clear** (sounds like you, not your competitors)

**7-8/10 — Good Brand Alignment:**
- Tone mostly matches
- Vocabulary 80% consistent
- POV consistent
- 1-2 messaging pillars present

**4-6/10 — Mediocre Brand Alignment:**
- Tone inconsistent (shifts mid-article)
- Generic vocabulary (could be anyone)
- POV inconsistent
- Messaging pillars absent

**1-3/10 — Poor Brand Alignment:**
- Wrong tone entirely
- Competitor language used
- No brand personality
- Contradicts messaging

### Brand Voice Checklist

**Before scoring, answer:**

1. **Tone:** Does this sound like [Brand Name]?
2. **Language:** Are we using our signature phrases? (e.g., "compound your marketing" for CM)
3. **POV:** Are we speaking to the reader directly? (you-focused)
4. **Differentiation:** Would this work for a competitor, or is it uniquely us?
5. **Values:** Do our core values come through? (e.g., efficiency, automation, data-driven)

### Example Brand Voice Reference

**Brand:** Compounding Marketing (example)

| Dimension | Our Voice | Avoid |
|-----------|-----------|-------|
| **Tone** | Confident, direct, slightly irreverent | Overly formal, corporate-speak |
| **Vocabulary** | Compound, leverage, systematize, playbook | Synergy, paradigm, holistic |
| **POV** | You (reader-focused) | We/us (company-focused) |
| **Messaging** | Marketing compounds when systems outlive campaigns | One-off tactics, magic bullets |

### Example Calculation

**Article:** "How to Choose Project Management Software"

- ✅ Tone: Direct, practical (matches brand) (3 pts)
- ✅ Vocabulary: Uses "systemize," "compound efficiency" (2 pts)
- ✅ POV: Consistently you-focused (2 pts)
- ✅ Messaging: Emphasizes long-term system over quick fix (2 pts)
- ✅ Differentiation: Unique angle (framework vs. list) (1 pt)

**Brand Voice Score: 10/10**

---

## Pre-Publish Checklist

Use this before hitting publish:

### SEO (10 items)
- [ ] Primary keyword in title, H1, and first 100 words
- [ ] Keyword density 1-3% (not stuffed)
- [ ] 2+ internal links to related content
- [ ] 1+ external link to authoritative source
- [ ] Meta description 150-160 chars, includes keyword + CTA
- [ ] URL slug clean and includes keyword
- [ ] Image alt text descriptive and includes keyword
- [ ] Page speed <3s (run PageSpeed Insights)
- [ ] Mobile-responsive (test on phone)
- [ ] Schema markup added (Article or FAQPage)

### Readability (8 items)
- [ ] Flesch Reading Ease 60-70 (Hemingway App)
- [ ] Average sentence length <20 words
- [ ] Paragraphs 2-4 sentences max
- [ ] Subheading every 200-300 words
- [ ] 3+ bullet or numbered lists
- [ ] Passive voice <10%
- [ ] No jargon without definitions
- [ ] Transition words 30%+ (Yoast check)

### Engagement (8 items)
- [ ] Headline score 70+ (CoSchedule)
- [ ] Hook (first 100 words) addresses pain or promise
- [ ] 2+ specific examples or case studies
- [ ] 1 visual per 300 words
- [ ] 2-3 clear CTAs (top, middle, end)
- [ ] Scannable (40%+ lists/subheads/bold)
- [ ] Data/stats cited with sources
- [ ] Conclusion summarizes key takeaway + next step

### Brand Voice (5 items)
- [ ] Tone matches brand guidelines
- [ ] Vocabulary consistent with brand (check word list)
- [ ] POV consistent (you-focused, not we-focused)
- [ ] Core messaging pillar present
- [ ] Passes "competitor test" (couldn't work for them)

**Total:** 31 checklist items. Aim for 28+ checks (90%+) before publishing.

---

## Post-Publish Measurement Framework

### Immediate (7 days)

**Traffic:**
- Organic sessions (Google Analytics)
- Referral traffic (if shared on social/email)
- Bounce rate (<60% is good)
- Avg. time on page (>2 min for long-form)

**Engagement:**
- Scroll depth (% who reach 75%+)
- CTA click rate (>2% is good)
- Social shares (if applicable)
- Comments / questions

**SEO:**
- Indexed by Google (search: `site:yourdomain.com article-url`)
- Keyword ranking (position 1-100 for target keyword)

### 30 Days

**Traffic:**
- Organic traffic trend (growing vs. flat vs. declining)
- Keyword ranking movement (top 10? top 20? top 50?)
- Backlinks acquired (Ahrefs/SEMrush check)

**Engagement:**
- Conversion rate (if CTA is measurable)
- Return visitor rate
- Shares / mentions on social

**SEO:**
- Internal link clicks (GA4: Engagement > Pages and screens)
- Featured snippet eligibility (SERP preview tool)

### 90 Days

**Traffic:**
- Cumulative organic sessions
- Ranking stability (holding position or climbing?)
- Top landing page status (is it in top 10 pages?)

**Engagement:**
- Contribution to pipeline (if B2B)
- Attribution data (first-touch vs. last-touch)

**SEO:**
- Domain authority impact (backlinks gained)
- Keyword expansion (ranking for related terms?)

---

## Scoring Example: Full Walkthrough

**Article:** "How to Choose Project Management Software for Remote Teams"

### Dimension 1: SEO Score

| Criteria | Status | Points |
|----------|--------|--------|
| Keyword in title, H1, intro | ✅ Yes | 3 |
| Keyword density 2.1% | ✅ Yes | 2 |
| 4 internal links | ✅ Yes | 2 |
| Meta description optimized | ✅ Yes | 1 |
| LCP 3.2s | ⚠️ Acceptable | 1.5 |
| Mobile responsive | ✅ Yes | 0.5 |

**SEO Score: 10/10**

### Dimension 2: Readability Score

| Criteria | Status | Points |
|----------|--------|--------|
| Flesch Reading Ease: 65 | ✅ Yes | 3 |
| Avg sentence: 15 words | ✅ Yes | 2 |
| Avg paragraph: 3 sentences | ✅ Yes | 2 |
| Passive voice: 8% | ✅ Yes | 1 |
| Subheadings every 250 words | ✅ Yes | 1 |
| 6 bullet lists | ✅ Yes | 1 |

**Readability Score: 10/10**

### Dimension 3: Engagement Score

| Criteria | Status | Points |
|----------|--------|--------|
| CoSchedule headline: 72 | ✅ Yes | 2 |
| Hook: pain point + promise | ✅ Yes | 2 |
| Structure: problem → solution | ✅ Yes | 1.5 |
| 3 real case studies | ✅ Yes | 2 |
| 1 visual per 250 words | ✅ Yes | 1.5 |
| 2 contextual CTAs | ✅ Yes | 1 |

**Engagement Score: 10/10**

### Dimension 4: Brand Voice Score

| Criteria | Status | Points |
|----------|--------|--------|
| Tone: direct, practical | ✅ Yes | 3 |
| Vocabulary: brand-specific | ✅ Yes | 2 |
| POV: you-focused | ✅ Yes | 2 |
| Messaging: systems-first | ✅ Yes | 2 |
| Unique angle | ✅ Yes | 1 |

**Brand Voice Score: 10/10**

### Overall Score

**SEO:** 10/10  
**Readability:** 10/10  
**Engagement:** 10/10  
**Brand Voice:** 10/10  

**Overall Content Score: 10/10** (Perfect)

---

## Using the Scores

### Pre-Publish Decision Matrix

| Overall Score | Action |
|---------------|--------|
| **9-10** | Publish immediately. Exceptional content. |
| **7-8** | Publish with minor tweaks. Good content. |
| **5-6** | Hold for revisions. Identify lowest-scoring dimension and fix. |
| **<5** | Do not publish. Major revisions needed. |

### Optimization Priority

If you score low, prioritize fixes in this order:

1. **SEO < 6:** Fix immediately (you won't get traffic)
2. **Engagement < 6:** High priority (you won't convert)
3. **Readability < 6:** Medium priority (readers will bounce)
4. **Brand Voice < 6:** Lower priority (but still matters for differentiation)

### Post-Publish Diagnosis

If content underperforms despite high scores:

- **Low traffic:** SEO score was inflated (check actual rankings)
- **High bounce rate:** Readability or engagement was mis-scored
- **Low conversions:** Engagement score didn't account for offer-audience fit
- **Wrong audience:** Brand voice may not resonate with actual readers

---

## Output Format

```text
CONTENT SCORECARD: {{title or URL}}

Date scored:        {{date}}
Scored by:          {{name}}
Stage:              Pre-publish / Post-publish
Primary keyword:    {{KW}}
Audience:           {{persona}}
Distribution plan:  {{SEO / paid / social / email / sales}}

DIMENSION SCORES (1-10 each, Overall = average)

  SEO Score:           {{X}}/10   Tools: Clearscope/Surfer + PageSpeed
    Notes: {{specific gaps}}

  Readability Score:   {{X}}/10   Tools: Hemingway + Yoast
    Notes: {{Flesch-Kincaid grade, sentence length, passive voice %}}

  Engagement Score:    {{X}}/10   Tools: CoSchedule + manual hook test
    Notes: {{headline score, hook strength, examples, visuals, CTAs}}

  Brand Voice Score:   {{X}}/10   Tools: Brand-voice doc + manual review
    Notes: {{tone match, vocabulary, POV, messaging pillar present?}}

  OVERALL: {{X}}/10

DECISION
  [ ] Publish (score 9-10)
  [ ] Publish with minor tweaks (score 7-8); list tweaks below
  [ ] Hold for revisions (score 5-6); fix lowest dimension first
  [ ] Do not publish (score <5); major rework

REQUIRED FIXES (if any, in priority order)
  1. [SEO]            {{e.g., add primary KW to H1; meta desc rewrite}}
  2. [Engagement]     {{e.g., rewrite hook in first 100 words}}
  3. [Readability]    {{e.g., break up 3 paragraphs >7 sentences}}
  4. [Brand Voice]    {{e.g., switch from "we" to "you" perspective}}

POST-PUBLISH MEASUREMENT (set up before publish)
  7-day:   organic sessions, bounce rate, scroll depth, CTA click rate
  30-day:  KW ranking position, backlinks, conversion rate
  90-day:  cumulative organic sessions, ranking stability, pipeline contribution

Diagnostic check at 30-day:
  IF traffic low + KW ranking stuck       → SEO score was inflated; re-audit
  IF bounce high + scroll depth low        → Readability or hook mis-scored
  IF conversions low                       → Offer-audience fit wrong; not just engagement
  IF unexpected audience visiting          → Brand voice mismatch with actual reader
```

---

## Quality Bar

A content scorecard is "done" when:

- [ ] All four dimensions scored with numeric values (not narrative-only)
- [ ] Each dimension cites the tool or rule used (not subjective)
- [ ] Pre-publish checklist (31 items) completed at ≥90%
- [ ] Required fixes listed in priority order with dimension labels
- [ ] Publish decision matches the rubric (no "publish anyway" overrides without note)
- [ ] Post-publish measurement plan set up BEFORE publish (7d / 30d / 90d)
- [ ] Brand voice score references explicit brand-voice doc, not implicit feel
- [ ] Score correlation tracked over time (rolling 30-day score-vs-actuals comparison)
- [ ] Cross-referenced with `.agents/product-marketing-context.md` (positioning, voice)

### Common Mistakes

1. **Score inflation by author-as-judge** — writers score their own work generously. **Why it happens:** No separation of writer and reviewer. **Fix:** Editor or PMM scores, not writer. Rotate reviewers to avoid editor bias too.
2. **Vibes-based scoring** — "Engagement: 8" with no justification. **Why it happens:** Skipping the tool check. **Fix:** Every dimension cites its tool output (Clearscope %, Hemingway grade, CoSchedule headline score). Numbers, not adjectives.
3. **No post-publish learning loop** — scoring stops at publish. **Why it happens:** Treating scoring as a publish gate, not an improvement system. **Fix:** Mandatory 30-day post-mortem on every piece scored 8+ that underperforms; root-cause the gap and update rubric.
4. **Brand voice scored against memory, not document** — "feels like us" without checking the doc. **Why it happens:** No formal brand-voice doc, or doc not referenced in process. **Fix:** Pin the brand-voice doc to the scoring template; explicit "this, not that" check on each post.
5. **Optimization priority ignored** — fixing brand voice while SEO score is 4. **Why it happens:** Working on the easy fixes first. **Fix:** Strict priority order — SEO < 6 must be fixed before any other dimension is touched. Otherwise you're polishing a piece nobody will find.
6. **Publishing despite low score because of deadline** — "we'll fix it later." **Why it happens:** Editorial calendar pressure. **Fix:** "Publish below 7" requires explicit override note + assigned 30-day fix-it date. Score-and-ignore breeds permanent debt.
7. **No correlation tracking** — scores never validated against real performance. **Why it happens:** No analytics tie-back. **Fix:** Quarterly review: top 10 high-score pieces vs. top 10 low-score pieces — does score predict outcome? If not, recalibrate the rubric.
8. **Headline scored without thumbnail / preview** — CoSchedule says 75 but the search snippet is bland. **Why it happens:** Scoring in isolation. **Fix:** Score the headline AS IT WILL APPEAR (SERP preview, social card preview, email subject preview) — not just the standalone string.

---

## Examples

### Example 1: Pre-Publish Scoring of a Pillar Blog Post

**Context:**

- Company: **Vinemark** (made-up), email marketing for Shopify ecommerce, $14M ARR
- Asset: Draft pillar post "How to Improve Email Deliverability on Shopify" (1,800 words)
- Goal: Rank top 3 for "shopify email deliverability" (~1,400 monthly searches); convert visitors to free deliverability checklist (lead magnet)
- Reviewer: PMM (not the writer)

**Input from user:**

> "Editor handed me this draft to greenlight. We need to ship in 48 hours for a launch. Score it before I publish."

**Output (abbreviated):**

```text
SCORECARD: "How to Improve Email Deliverability on Shopify" (DRAFT v2)

Date: 2026-05-12   Reviewer: PMM (Maya)
Primary KW: "shopify email deliverability" (1,400/mo, commercial intent)
Audience: Shopify DTC operators, 10k-200k subscribers, mid-technical
Distribution: SEO primary; LinkedIn secondary; lead-magnet upgrade

DIMENSION SCORES

SEO: 6/10
  Tools: Clearscope (62%), PageSpeed (LCP 2.9s)
  Notes:
    - Primary KW in title + H1 + intro      (good)
    - Keyword density 1.2%                   (low; target 1.5-2.5%)
    - Internal links: 1                      (low; target 3+)
    - Meta description: 142 chars but generic (rewrite for CTR)
    - 3 H2s use related KWs ✓
    - Schema markup: missing (add Article schema)
    - Image alt text: 4 of 7 missing

Readability: 8/10
  Tools: Hemingway (Grade 7), Yoast (Flesch 64)
  Notes:
    - Avg sentence: 16 words ✓
    - Passive voice: 12% (slightly high; target <10%)
    - Subheadings every 280 words ✓
    - 5 bullet lists ✓
    - 2 paragraphs >5 sentences (split them)

Engagement: 5/10
  Tools: CoSchedule headline score 58 (low)
  Notes:
    - Headline weak: "How to Improve Email Deliverability on Shopify" — no specificity
    - Hook (first 100 words): defines deliverability THEN states problem
      → flip to lead with cost-of-failure
    - Examples: 1 (Shopify brand mentioned generically; needs 2-3 named or
      anonymized case studies with specific numbers)
    - Visuals: 2 (target 6 for 1,800 words)
    - CTAs: 1 (only at bottom; add mid-article + sidebar to lead magnet)

Brand Voice: 7/10
  Tools: Vinemark brand-voice doc + 3 reference posts
  Notes:
    - Tone: mostly direct (matches) but slips into generic SaaS-speak in section 4
    - POV: "you" throughout ✓
    - Vocabulary: 1 use of "leverage" (banned word per voice doc)
    - Messaging: deliverability tied to revenue (good); doesn't reinforce "easier
      than your current ESP" pillar (add 1 sentence)

OVERALL: 6.5/10

DECISION: Hold for revisions (target 8+ before publish)

REQUIRED FIXES (priority order):
  1. [SEO]         Add 2 internal links + Article schema + write specific meta
  2. [Engagement]  Rewrite headline ("47 deliverability mistakes Shopify
                   stores make"); rewrite first 100 words to lead with cost;
                   add 2 named case studies with metrics; add 4 visuals;
                   add mid-article + sidebar CTAs
  3. [Readability] Reduce passive voice to <10%; split 2 long paragraphs
  4. [Brand Voice] Remove "leverage"; add "easier than your current ESP" sentence

ESTIMATED FIX TIME: 4-6 hours (writer)
RE-SCORE TARGET: 8.5/10 → publish

POST-PUBLISH MEASUREMENT (set up now):
  7-day:   organic sessions, bounce rate, scroll depth, CTA click rate to magnet
  30-day:  ranking for "shopify email deliverability" (target top 20),
           backlinks, magnet downloads sourced from this post
  90-day:  cumulative organic sessions (target 1,500/mo), pipeline contribution
```

**Why this works:** Refuses to publish at 6.5/10 despite deadline pressure (overrides require explicit notes). Fix list ordered by optimization priority (SEO before brand voice). Specific tool outputs (CoSchedule 58, Hemingway grade 7) leave no ambiguity. Estimated fix time keeps the launch viable. Post-publish measurement is set up *before* publish, so 30-day diagnosis is possible.

---

### Example 2: Post-Publish Post-Mortem on an Underperforming Article

**Context:**

- Company: **Cendric** (made-up), security-compliance SaaS, $12M ARR
- Asset: 3-month-old post "SOC 2 Type II Compliance for Series A Startups" (scored 9.0/10 pre-publish)
- Actual performance: 240 organic sessions in 90 days (target was 2,000); ranking position 47 for primary KW
- Trigger: VP of marketing wants to know why a "high-quality" piece flopped

**Input from user:**

> "We scored this 9/10 before publishing. Three months later, 240 visits and stuck at position 47. What went wrong?"

**Output (abbreviated):**

```text
POST-PUBLISH POST-MORTEM: "SOC 2 Type II Compliance for Series A Startups"

Date: 2026-05-12   Reviewer: PMM
Pre-publish score: 9.0/10 (SEO 9, Readability 10, Engagement 9, Brand Voice 8)
Actual: 240 sessions / 90 days; position 47 for primary KW; 2 backlinks

DIAGNOSTIC ANALYSIS

1. SEO (was 9, actual evidence: 6)
   GAP: Score was inflated.
   - Primary KW: "soc 2 type ii compliance" — 880/mo BUT 14 high-DR competitors
     (AWS, Drata, Vanta, etc.) own positions 1-10 with 70+ DR
   - Cendric DR: 31 (insufficient to rank against incumbents)
   - Long-tail KW selection was correct ("for Series A startups") but main KW
     too competitive
   - On-page factors WERE strong (validated post-publish: keyword presence,
     internal links, schema all present)
   ROOT CAUSE: KW difficulty was not assessed pre-publish.
   FIX RUBRIC: Add KW difficulty check to SEO scoring. Rule: if DR gap >20
   between us and top 10, score caps at 6 regardless of on-page.

2. Engagement (was 9, actual evidence: ~7)
   - Bounce rate: 71% (high; target <60%)
   - Scroll depth: 38% (target 60%+)
   - CTA click rate: 1.2% (target 3%+)
   GAP: Hook scored well in vacuum but doesn't match actual visitor intent.
   Visitors searching "SOC 2 Type II compliance" are mostly mid-stage looking
   for vendor evaluation, not Series-A education. Audience-content mismatch.
   FIX RUBRIC: Add intent-match check — verify SERP top 5 results match
   article angle. If SERP shows vendor comparison and our article is education,
   intent is mismatched.

3. Readability (was 10, actual evidence: 10)
   No issue. Score validated.

4. Brand Voice (was 8, actual evidence: 8)
   No issue. Score validated.

SUMMARY:
  - 9.0/10 pre-publish was wrong. True score should have been 6/10 due to
    KW difficulty + intent mismatch — both *unscored variables* in the
    current rubric.
  - The piece is well-written and on-brand but targets a KW we cannot win
    AND addresses an intent that isn't dominant on the SERP.

RECOMMENDED ACTION:
  Option A (recommended): Re-target the piece to a winnable KW
    "soc 2 readiness checklist for Series A" (~190/mo, lower DR competition)
    — rewrite intro + meta + add checklist asset
  Option B: Kill and republish at later date when domain authority allows
    competition for the primary KW

RUBRIC UPDATES (apply to all future scoring):
  1. SEO: include KW difficulty vs. domain authority gap (cap at 6 if gap >20)
  2. Engagement: include SERP intent-match check (cap at 7 if dominant intent
     differs from article angle)
```

**Why this works:** Distinguishes "score was wrong" from "execution was wrong" — the article was well-built, but the rubric missed two variables (KW difficulty + intent match). Updates the rubric for future pieces, turning one failure into a permanent improvement. Provides actionable next step (re-target to winnable KW) instead of just a postmortem narrative.

---

## Related Skills

Chain these for compounding outcomes:

- **[`seo-audit`](../seo-audit/SKILL.md)** — Use *before* this skill to identify pillar topics where scoring effort is justified by traffic potential.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *to fix* low Engagement scores via better hooks, examples, and CTAs.
- **[`copy-editing`](../copy-editing/SKILL.md)** — Use *to improve* Readability scores via sentence structure, passive voice reduction, and scannable formatting.
- **[`brand-voice`](../brand-voice/SKILL.md)** — Use *as input* — the brand-voice doc is the reference for the Brand Voice dimension scoring.
- **[`content-strategy`](../content-strategy/SKILL.md)** — Use *upstream* to ensure the content piece is targeting the right topic for the audience and journey stage.
- **[`ai-seo`](../ai-seo/SKILL.md)** — Use *alongside* to add AI-search optimization (AEO/GEO) as a 5th dimension if AI search is a meaningful traffic source.
- **[`ab-test-setup`](../ab-test-setup/SKILL.md)** — Use *to validate* rubric changes by A/B testing new scoring dimensions vs. old.
