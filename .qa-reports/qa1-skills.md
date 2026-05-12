# QA Review: 61 Marketing Skills (15-skill sample)

## Executive Summary

The expansion is **broadly successful**. Of 15 skills sampled, 12 pass cleanly (A/B grade), 2 are weaker but acceptable (B/B+), and 1 (`brand-voice`) has a structural defect that should block release. Quality varies more by *agent* than by source tier — several "worst-offender originals" (email-sequence, churn-prevention, programmatic-seo) are now stronger than the older Tier-A references (`brand-voice`, `cold-email`). Common strengths: opinionated role prompts with named influences, behavior-trigger thinking, real benchmarks, layered-funnel diagnostics, and concrete worked examples. Common weaknesses: a small set of recurring fictional company names (Loomly, DataMint, Threadly, FlowOps) appearing across many skills (creates a "shared cinematic universe" feel that reads as AI-generated when seen in aggregate), a few skills where the "Output Format" section is placed *after* `## Examples` (breaks the intended reading order), inconsistent cross-reference formatting, and possible hallucinated statistics in `ai-seo`.

## Per-skill findings

**1. `paywall-upgrade-cro` (random) — A.** Excellent. Opinionated three-layer funnel model, named skeptical priors (against decoy tiers, hard paywalls, countdown timers), invokes Cialdini/Kahneman/Ramanujam credibly. Process steps have how-to + decision criteria + common gotchas. Two examples (Loopstack, Veristack) feel realistic with specific numbers. Validator workaround: H2s inside example fenced blocks are written ` ## TL;DR` with leading space — passes validation; renders harmlessly in most viewers.

**2. `marketing-automation` (random) — A-.** Strong, comprehensive. Platform comparison table is genuinely useful, scoring rubric concrete, common mistakes load-bearing. Slight fluff: "Why Marketing Automation?" section before Process is a generic interlude. Examples (Threadly, BrewKit) realistic. Uses `#### ` headings inside fenced examples — readability acceptable. Cross-refs real. No AI slop.

**3. `icp-research` (random) — A.** Best of the sample. Role prompt is a paragraph with a thesis ("the ICP is who actually succeeds, not who you wish would buy"), correctly cites Roberge/Moesta/Dunford. Process is 8 steps each with how-to/decision/gotcha. Examples (Lensview, Hirewell.ai) unusually crisp with win-rate deltas and disqualifier scripts. Anti-persona section is the kind of operational detail that distinguishes this skill.

**4. `copywriting` (random) — A.** Role prompt establishes opinion ("copy is research transcribed, not invention"). Eugene Schwartz awareness model correctly invoked and used as scaffolding for the process. Two examples (CloseLoop, Pinglane) realistic and end-to-end. Common mistakes specific (founder-voice creep, word-bloat with concrete fix). Adds to the recurring fictional-brand pattern but worked outputs are concrete.

**5. `paid-ads` (random) — B+.** Good but structural quirk: `## Output Format` appears AFTER `## Examples` and `## Related Skills` — reading order is jumbled. Content is solid (kill/scale rules, naming convention, CPA math, real benchmark tables). Only one section labeled `## Common Mistakes` (no `### Common Mistakes` under Quality Bar) — validator passes via bold-label fallback. Examples (DataMint, Loomly) reuse names from other skills; output excerpts feel realistic with believable numbers. **Fix the section order.**

**6. `ai-seo` (Tier-A) — B+.** High fact-density (real-feeling stats: "85.79% of AI Overviews citations from top-10 organic", "47.9% Wikipedia"). Process is 8 numbered steps. Common Mistakes are 7 (meets minimum 5). Three examples — the third (robots.txt config) is a code snippet not a worked example, which is a stretch. **Concern:** several precise statistics ("69% zero-click in 2025", "+527% AI-referred sessions YoY", "85.79% from top-10", "Wyzowl 2024 67% churn reduction", "Mixpanel 2024 Product Benchmarks 3.2-min TTFA") are unsourced — footnote with real sources, soften, or remove. Cross-refs use bare backticks not full paths.

**7. `cold-email` (Tier-A) — B.** Concise (329 lines, the shortest), workmanlike. Frameworks and personalization tiers useful and specific (with reply-rate ranges). Five examples — all good, all <100 words, realistic. **However**: role prompt is two thin sentences ("You are a B2B cold outreach specialist...") — much weaker than newer skills like `paywall-upgrade-cro` or `icp-research`. Quality Bar uses bold-label `## Common Mistakes` (passes validator). No "Initial Assessment" sub-headers — just a numbered list. Cross-refs are bare names without paths.

**8. `gtm-strategy` (Tier-A) — A-.** Excellent depth. 8-factor scoring matrix with worked Slack example genuinely useful. Funnel definitions specific. Team-structure-by-ARR-stage concrete (FTE counts, example titles). 90-day plans detailed. Four named examples (Slack, HubSpot, Salesforce, Atlassian) — *real* companies with real outcomes. Quirk: `## Examples` comes BEFORE `## Output Format`. Output template is largely `[placeholder]` Mad Libs — heavier on scaffold than signal. Validator passes.

**9. `brand-voice` (Tier-A) — D. Blocks release.** This skill was clearly *not* expanded by the parallel agents. 354 lines (just over the 300 minimum). Role prompt is one sentence: "You are a brand voice consultant." Generic. The Output Format section *is* the worked example — no realistic before/after companies, no opinionated thesis, no named influences (Wiebe? Sullivan? Marty Neumeier? None). Common Mistakes appear as a 5-item bullet list under "Quality Bar" labeled "Common mistakes to avoid" — passes validator via bold-label fallback. No `## Examples` H2 with worked examples — just a generic template fill-in. **Needs the same expansion treatment as the others before tagging.** Foundation skill referenced by copywriting, copy-editing, social-content — its weakness propagates.

**10. `positioning` (Tier-A) — B+.** Cites Dunford correctly. Process steps clear. Two strong worked examples (DataMint, Loomly Analytics) with concrete positioning statements and outcome metrics. **However**: this is also a *light* expansion (389 lines). Role prompt is one sentence. No Initial Assessment sub-headers. Common Mistakes is 5 generic bullets. Cross-refs are bare names. The two examples are excellent (clearly later additions); the body predates them tonally — visible seam.

**11. `email-sequence` (worst-offender) — A.** Among the strongest in the sample. Three-conviction role prompt, named lifecycle stages with goal metrics, sequence-graph thinking. Step 4 ("Write the emails") gets into actual subject-line tactics and per-email anatomy. Two examples (Loomly welcome series, DataMint trial conversion) end-to-end with email copy. Cross-refs use full markdown links with paths. Excellent recovery from "worst-offender" baseline.

**12. `churn-prevention` (worst-offender) — A.** Three-principles role prompt names dark patterns specifically (Lincoln Murphy, Moesta, ProfitWell cited). Risk-score weighting (50/30/20) opinionated and defensible. Cancel-flow design names FTC click-to-cancel rule and California SB 313 — current and specific. Two examples (Loomly, Threadly) with dollar impact estimates. Common Mistakes load-bearing.

**13. `programmatic-seo` (worst-offender) — A.** Opens with strong thesis ("pSEO is a content system, not a content shortcut"). Names cautionary tales (Bankrate AI drama, eHow, Helpful Content Update casualties). Schema-first approach correct. Quality threshold concept ("noindex 30% rather than poison the rest") is the kind of opinion that distinguishes good from generic. Examples (FlowHub, PayGrid) handle realistic constraints (legal review per country page).

**14. `channel-strategy` (worst-offender) — A-.** Bullseye Framework correctly attributed (Weinberg & Mares). 19 traction channels listed plus modern additions. 5-dimension fit matrix operational. Two examples (FlowOps, GuardRail) cover both PLG-short-runway and enterprise-long-cycle cases. The "no-list" emphasis is a useful opinion most channel docs lack. Cross-refs use full paths.

**15. `webinar-strategy` (worst-offender) — A-.** Three convictions (topic+speaker = 80%, post-event = 80% of value, partner > solo). Run-of-show table with named owners and minute-marked segments genuinely useful. Registration math (visit→register→attend→MQL with benchmark percentages) concrete. Two examples (DataMint, FlowOps) realistic. Common Mistakes are 10 items, all specific.

## Cross-cutting issues

- **Shared fictional-company universe.** The names Loomly, DataMint, Threadly, FlowOps, BrewKit, Pinglane, CloseLoop, Veristack, Loopstack, Lensview, Hirewell.ai, FlowHub, PayGrid, GuardRail recur. Within one skill this is fine; across 15 skills you start to feel the pattern. Loomly alone appears as: a video-message tool (email-sequence), a product analytics tool (ai-seo, paid-ads, positioning), a social-media analytics tool (churn-prevention), and a workflow tool. Real Loomly product exists. **Pick one identity per fictional company across the corpus, or diversify the names.**
- **Two structural patterns visible.** "Heavy" skills (paywall-upgrade-cro, icp-research, marketing-automation, programmatic-seo, churn-prevention, email-sequence) are 500–800 lines with role-prompt paragraphs, named influences, Step 0 prerequisites, decision criteria + common gotchas per step. "Light" skills (brand-voice, positioning, cold-email, partially gtm-strategy) are 329–389 lines with one-sentence role prompts and no Initial Assessment sub-headers. Light skills pass validation but feel pre-expansion. Strong correlation with `metadata.version`: 1.0.x = light, 1.1.x = heavy.
- **Section ordering inconsistency.** Most skills order Output Format → Quality Bar → Examples → Related Skills. Several (paid-ads, gtm-strategy) put Examples before Output Format or after Related Skills. Pick one canonical order and enforce.
- **Cross-reference style inconsistency.** Three patterns coexist: bare names (`cold-email`), backticked names (`` `schema-markup` ``), and full markdown links (`[skill](../skill/SKILL.md)`). Standardize on the third — most useful and the only one clickable in renderers.
- **Validator workaround impact is minor.** The leading-space H2 hack (` ## TL;DR` inside fenced blocks) renders harmlessly in most markdown viewers. The `#### ` alternative is also widely used and visually equivalent. **No skill in my sample had its example template visibly degraded by the workaround.** P2 flag from agents was largely a false alarm.
- **AI slop is largely absent.** Looked specifically for "delve into," "tapestry," "robust," "leverage," em-dash overuse — almost none. Em-dashes appear (heavily in paywall-upgrade-cro) but used correctly. "Best-in-class" creeps in rarely. Genuinely well-written prose.

## P0 (blocks release)

1. **`brand-voice` is unexpanded.** Passes validation but is structurally and qualitatively far below the others. Run the same expansion treatment used on the heavy skills. Foundation skill — its weakness propagates to copywriting/copy-editing/social-content.

## P1 (fix before tag)

1. **Verify or remove unsourced statistics in `ai-seo`** — "69% zero-click 2025", "+527% AI-referred sessions YoY", "85.79% AI Overviews citations from top-10", "Wyzowl 2024 67% churn reduction", "Mixpanel 2024 Product Benchmarks 3.2-min TTFA". Footnote with real sources or soften/remove. Highest hallucination-risk skill in the sample — a user citing these to a stakeholder could get embarrassed.
2. **Fix section ordering** in `paid-ads` (Output Format is after Examples and Related Skills) and `gtm-strategy` (Examples before Output Format). Establish canonical order: Role → Initial Assessment → Process → Output Format → Quality Bar → (Common Mistakes) → Examples → Related Skills.
3. **Bring `cold-email` and `positioning` up to "heavy" expansion standards** — paragraph role prompts with named influences, Initial Assessment sub-headers, decision criteria + gotchas in process steps. The weakest of the Tier-A reference set after brand-voice.
4. **Standardize cross-reference style to `[skill-name](../skill-name/SKILL.md)`** across all skills.
5. **De-duplicate fictional company names** across the corpus. Either give each name one consistent identity or diversify so no name appears in more than 2-3 skills.
6. **Replace `[placeholder]` Mad Libs in `gtm-strategy` Output Format** with content that uses the skill's own 8-factor matrix and 7 traps — currently the template carries less signal than the body.

## P2 (nice-to-have)

1. **Add `## Initial Assessment` H2 to skills that omit it** (cold-email, brand-voice, positioning).
2. **Validator workaround documentation.** Add a note in `_TEMPLATE.md` explaining how to write H2s inside fenced example blocks (` ## ` with leading space, or `### `, or bold labels).
3. **References sections inconsistent** — some skills have `## References`, some don't. Standardize.
4. **Some examples lack closing "Why this works" analysis.** Most do; a few don't. Make it part of the template.
5. **`ai-seo` robots.txt example** treats allowing GPTBot as a no-brainer; some publishers block intentionally for licensing leverage. One line of nuance.

## Validator improvements

The current `validate-skills.js` enforces structural minimums but misses quality issues. Suggested additions:

1. **Section-order check.** Require canonical order. Currently any order passes.
2. **Role-prompt depth check.** Flag role prompts shorter than ~80 words as "thin" — `brand-voice`, `cold-email`, `positioning` would have been caught.
3. **Example-realism heuristic.** Warn if `## Examples` H3s don't include a `**Context:**` block and at least one numeric metric. Heavy-expansion skills do; light ones don't.
4. **Cross-reference link-format check.** Require `[name](../path/SKILL.md)` format and verify the path resolves. Currently bare names pass.
5. **Fictional-name registry / dedup.** Track named companies across the corpus (regex `\b([A-Z][a-z]+(?:Hub|Stack|Mint|Loop|Grid|stack|ly|ify))\b`) and warn when one appears in >3 skills. Prevents "shared universe" smell.
6. **Common Mistakes structure check.** Currently counts items. Could require each to follow "mistake → why it happens → fix" three-part pattern (regex for "Why it happens" marker per item).
7. **Detect leading-space-H2 workaround in fenced blocks** and whitelist it explicitly so authors know it's intentional, or replace with a cleaner convention.
8. **Word-count check on Process steps.** Steps under ~50 words are usually too thin. Flag them.
9. **Frontmatter version check.** Warn when `metadata.version` is still 1.0.x — flags pre-expansion skills automatically. This single check would have caught brand-voice (1.0.0), positioning (1.0.1), and seo-audit (1.0.1) without reading them.

(~1,470 words)
