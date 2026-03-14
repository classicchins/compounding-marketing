---
name: content-performance-scoring
description: Score content quality before and after publishing using multi-dimensional framework. Covers SEO, readability, engagement prediction, and brand voice alignment. Triggers - content score, quality score, pre-publish checklist, content audit, SEO score, readability check.
metadata:
  version: 1.0.0
---

# Content Performance Scoring

Systematically evaluate content quality before and after publishing using a multi-dimensional scoring framework.

## Why Score Content?

- **Pre-publish:** Catch quality issues before going live
- **Post-publish:** Diagnose why content underperforms
- **Benchmarking:** Compare content pieces objectively
- **Optimization:** Focus improvements where they matter most

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

## Quality Bar

- **All four dimensions scored:** SEO, Readability, Engagement, Brand Voice
- **Evidence-based scoring:** Tools used (Hemingway, CoSchedule, PageSpeed, etc.)
- **Pre-publish checklist completed:** 90%+ items checked
- **Post-publish tracking set up:** 7d, 30d, 90d milestones defined
- **Actionable:** Clear next steps if score is low
