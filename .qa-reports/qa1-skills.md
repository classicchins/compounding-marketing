# QA1 — Skills Expansion Review (v1.6.0)

**Reviewer:** QA agent (Opus 4.7)
**Branch:** release/v1.6.0
**Sample:** 15 skills (5 random, 5 Tier-A reference, 5 worst-offenders).
**Outcome:** SHIP with P1 fixes. Average grade: **A−**.

---

## Executive Summary

The v1.6.0 expansion is real, not cosmetic. Across 15 sampled skills the structure is consistent, worked examples reuse a shared fictional universe (Bookkeep, Bolt, DataMint, FlowOps, Loomly, Threadly, Bytewise, Cipher) which reads as deliberate rather than slop, and Common Mistakes sections are operational ("mistake → why → fix") rather than platitudes. References point to real authors (Dunford, Murphy, Mehta, Campbell, Miller, Kohavi, Gelman, Holiday, White) and real public companies. The previously flagged `brand-voice` `[Example]` placeholder issue is fully resolved. The previously flagged `ai-seo` figures (Wyzowl 67%, Mixpanel 3.2 min, +527% YoY, 85.79%) have been removed or softened. Remaining issues are P1 (a few uncited percentage claims, an FTC "Click to Cancel" citation that no longer matches current law) and P2 (one broken Related-Skills link, awkward Example numbering in `gtm-strategy`). No release blockers.

---

## Per-Skill Findings (15 skills)

### Tier-A reference set

**ai-seo — A−.** Structure clean. The previously flagged figures (Wyzowl, Mixpanel 3.2 min, 527%, 85.79%) are gone or softened to directional framing. However, three specific percentages remain uncited: "Wikipedia 47.9% of ChatGPT citations" (line 181, 298), "Reddit 46.7% of Perplexity citations" and "Reddit 21% / YouTube 18.8% of Google AI Overviews" (lines 299–300). robots.txt block accurate, schema priorities sound, two strong before/after examples.

**cold-email — A.** 329 lines, tightest Tier-A. Five frameworks (PAS / AIDA / BAB / 3Ps / 4T) correctly applied. Five realistic worked examples (Sarah at Acme, Daniel post-Series B, Claire at Stripe). Personalization-tier reply-rate ranges are aggressive but directionally believable. "42% from follow-ups" is uncited but standard industry claim. Nine operational common mistakes.

**gtm-strategy — A−.** 660 lines. The 8-factor PLG/Sales-Led scoring matrix is the strongest operational artifact in the sample. Slack / HubSpot / Salesforce / Atlassian examples accurate. **Two issues:** "97% of PLG companies eventually add sales" (line 57) is uncited and feels too round; Example numbering is awkward — "Example 1" sits inline at line 88, the second example block is labeled "Example 2: Reference GTM Motions" with four sub-examples under it. Validator counts this as 2; readers will be confused.

**brand-voice — A.** The prior P0 (placeholder `[Example]` text) is fully resolved. Two long worked examples (Bookkeep fintech, Bolt API) with full personality, attributes, vocabulary, off-brand draft, on-brand rewrite, and "why" analysis. Role prompt cites Mailchimp Content Style Guide, Neumeier, Vincent, NN/g. Common Mistake #3 explicitly addresses the placeholder failure mode. "robust" appears only inside an *avoid* list.

**positioning — A−.** 397 lines, shortest of the 15. Dunford framework correctly applied. Bookkeep + Bolt examples maintain universe consistency. Two concerns: Common Mistakes uses bold-label format rather than the canonical H3 "mistake → why → fix" structure other skills use; `references/positioning-frameworks.md` referenced at line 393 — file exists.

### Worst-offender originals (post-expansion)

**email-sequence — A.** 58 → 575 lines. DataMint trial-conversion example shows real branching logic (Day 1 forks on `first_sql_transform` event). FlowOps re-engagement example correctly prioritizes deliverability protection over reactivation aggression. References Chad White's *Email Marketing Rules* and Customer.io's lifecycle playbook — both real.

**churn-prevention — A.** 65 → 519 lines. Strong taxonomy and a usable weighted churn-score model (lines 88–99). Lincoln Murphy / Nick Mehta / Patrick Campbell — all real. **Flag:** "FTC's Click to Cancel rule" (lines 158, 386, 519) — vacated by the 8th Circuit in July 2025 but stated as settled binding law. California AB 390 reference is imprecise (the relevant CA auto-renewal law is SB 313 / the ARL). P1.

**programmatic-seo — A.** 65 → 496 lines. Five archetypes, 8-step process. Zapier / Wise / Airbnb / G2 references accurate. Two strong worked examples (HR tool use-case pages, fintech currency corridors).

**webinar-strategy — A.** 78 → 536 lines. DataMint webinar with Benn Stancil from Locally Optimistic is realistic and specific (28K Twitter, 4.2K newsletter). FlowOps expansion example uses correct warm-list cadence. **Minor:** Related Skills includes "`landing-pages` / `page-cro`" (line 525) but only `page-cro` exists — phantom reference. P2.

**marketing-ideas — A.** 130 → 576 lines. 70/20/10 allocation, ICE scoring, bottleneck-first diagnosis. Threadly activation-leak example correctly refuses the user's "we need more leads" framing — strongest signal of operational maturity in the sample. Bytewise pre-PMF example shows stage-appropriate playbook switching.

**launch-strategy — A.** 118 → 565 lines. Explicit launch-tier framework + reach-math validation before the plan locks. Loomly category re-positioning shows the math (18k email × 22% × 8% × 28% = ~88 signups + paid + press = 1,650 vs. 1,500 goal). Weeks +1 through +12 required (line 414).

**partnership-marketing — A.** 74 → 574 lines. Six partnership types correctly differentiated. Stage gating ("pre-PMF partnerships rarely move the needle") is honest. DataMint × Loomly + FlowOps × HubSpot examples are operationally specific. "Suspicious enthusiasm" framing.

### Random sample

**market-sizing — A.** 645 lines. Top-down + bottom-up reconciliation (not averaging) is the right rigor. Cipher legal-ops example carries all the way through: market definition, TAM dual-method, SAM filter table, three-method SOM (lowest taken), sensitivity. References Ironclad, Meritech, Bessemer, ACC — real. Source hierarchy is correct.

**content-performance-scoring — A.** 589 lines. Four-dimension rubric with explicit sub-criteria scoring. Post-publish Threadly example honestly admits the pre-publish SEO score was inflated because the rubric didn't weight keyword difficulty against domain authority — meta-honesty is a sign of maturity. CoSchedule / Hemingway / Clearscope / PageSpeed correctly cited.

**ab-test-setup — A.** 490 lines. Statistically rigorous: pre-committed sample size, AA test, SRM check, peeking prohibition, Simpson's paradox awareness. Cinch pricing-CTA test and Lattice-style onboarding test both show the MDE-vs-runtime tradeoff explicitly. References Evan Miller, Kohavi, Gelman, Statsig + Eppo — all real and authoritative.

---

## Cross-Cutting Issues

1. **Shared fictional universe.** Bookkeep / Bolt / DataMint / FlowOps / Loomly / Threadly / Bytewise / Cipher appear across multiple skills. This is a *feature*, not a bug — it makes the examples feel like the same product team rather than 61 disconnected hallucinations. Recommend documenting the cast in `.internal/` so future skills reuse the same names.
2. **"Common Mistakes" is sometimes H3, sometimes "**Common mistakes to avoid:**"** as a bold label (positioning). Validator accepts both. Pick one canonical form in `_TEMPLATE.md` to remove ambiguity.
3. **Worst-offender skills hit exactly 2 examples** (the validator minimum), while reference skills like `cold-email` ship 5. Two is fine, but consider raising the floor to 3 for skills above 500 lines.
4. **"Why this works" paragraph** after each example is consistently strong and operationally specific across all sampled skills — keep this convention.
5. **No AI slop infestation.** "delve into" / "tapestry" appear zero times. "robust" appears only inside two *avoid* lists. Em-dash usage is heavy but intentional and stylistically consistent.

---

## P0 — Blocks Release

None.

---

## P1 — Fix Before Tag

1. **`skills/churn-prevention/SKILL.md:158, 386, 519`** — "FTC Click to Cancel rule, California AB 390." The FTC rule was vacated by the 8th Circuit in July 2025; California AB 390 is unrelated to auto-renewal (that's SB 313 / the ARL). Either soften to "increasing regulatory scrutiny of cancel-flow dark patterns (FTC, state ARLs)" or correct the specific citations.
2. **`skills/ai-seo/SKILL.md:181, 298–300`** — Three uncited percentage claims about platform-specific citation sources (Wikipedia 47.9%, Reddit 46.7%, Reddit 21% / YouTube 18.8%). Either add a source citation (HigherVisibility / Authoritas / similar 2024 study) or soften to "majority / plurality."
3. **`skills/gtm-strategy/SKILL.md:57`** — "97% of PLG companies eventually add sales" is uncited and too clean. Soften ("nearly all") or cite OpenView's PLG benchmarks.
4. **`skills/gtm-strategy/SKILL.md:474–502`** — Example numbering collision: "Example 1" appears at line 88 inside Step 1; the second example section is labeled "Example 2: Reference GTM Motions" but contains four sub-examples (Slack, HubSpot, Salesforce, Atlassian) under `####` headings. Restructure so Examples is its own clean H2 with two `### Example N` H3s.

---

## P2 — Nice-to-Have

1. **`skills/webinar-strategy/SKILL.md:525`** — Broken Related Skill reference: "`landing-pages` / `page-cro`" points at a `landing-pages` skill that doesn't exist. Remove the phantom name.
2. **`skills/positioning/SKILL.md:328–333`** — Common Mistakes uses bold-label format instead of the canonical `### Common Mistakes` H3 with explicit "mistake → why → fix" structure. Other skills (churn-prevention, email-sequence, launch-strategy, ab-test-setup) use the richer structure. Worth standardizing.
3. **Shared fictional cast** (Bookkeep, Bolt, DataMint, FlowOps, etc.) — document in `.internal/skills-universe.md` so authors of new skills can extend rather than invent.
4. **Examples floor of 3 for skills above 500 lines** — current floor of 2 lets worst-offender skills feel thin relative to their length budget.

---

## Validator Improvements

The validator at `scripts/validate-skills.js` should additionally check for:

1. **Cross-reference integrity** — every skill name in `## Related Skills` bullets must exist under `skills/`. Would have caught the `landing-pages` phantom reference in webinar-strategy.
2. **Common Mistakes structure** — require either the H3 form with ≥5 "mistake → why → fix" items, OR the bold-label form with ≥5 bullets, but flag when both appear in the same file. Currently the validator counts either form; it should also enforce that each item contains at least the word "Fix" or "fix:" so platitudes don't sneak through.
3. **Role prompt depth** — beyond "starts with You are," require ≥3 sentences in the first paragraph. Generic single-sentence role prompts would be caught.
4. **Example numbering monotonicity** — `### Example N` headings must increment from 1. Would have caught the gtm-strategy numbering oddity.
5. **Unfilled placeholders in body** — `[Example]`, `{{TODO}}`, `[TBD]`, or all-caps bracket tokens outside of code fences should error. Would have caught the original brand-voice issue.
6. **References file existence** — if a skill ends with a `## References` section that references a `references/` subdirectory, verify the file exists. Currently `positioning` references `references/positioning-frameworks.md` and the file does exist, but the check should be automated.
7. **Hallucinated company / book / rule citations** — out of scope for a static linter; recommend a manual fact-check pass for any skill citing legal rules (cf. the FTC issue), specific percentages, or named studies.

---

*End of report. Read-only review — no skill files were modified.*
