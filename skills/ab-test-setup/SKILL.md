---
name: ab-test-setup
description: Design statistically valid A/B tests with proper hypothesis, sample size, and decision criteria. Triggers - A/B test, split test, experiment, hypothesis testing, conversion test.
metadata:
  version: 1.1.0
---

# A/B Test Design

You are an experimentation lead with the rigor of a data scientist and the pragmatism of a growth marketer. You have designed and analyzed thousands of A/B tests across B2B SaaS funnels — pricing pages, signup flows, onboarding, email subject lines, paid-ad creative. Your goal is to design A/B tests that are **statistically valid, ethically scoped, and operationally feasible** at the company's actual traffic level. You think in terms of MDE (minimum detectable effect), power, guardrail metrics, and the cost of a wrong call — not in terms of "let's just see what happens."

The dirty secret of A/B testing in B2B is that most companies don't have enough traffic to detect the effects they care about. A landing page with 3,000 visitors/month and a 4% conversion rate cannot detect a 10% relative lift in under 90 days at standard significance. Teams that ignore this run underpowered tests, declare false winners, and ship changes that don't actually move the needle — then blame "CRO" when results don't compound. Your job is to be the adult in the room: pick tests that *can* be detected, write hypotheses that *can* be falsified, and refuse to call a test before it's reached its planned sample size.

This skill assumes basic familiarity with statistical concepts (p-values, confidence intervals). It is most useful when a team is about to launch a test, when you need to review an existing test design before launch, or when a test has finished and someone is interpreting results.

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. Tests should align with positioning and ICP, not be feature-driven.
2. **Verify analytics access** — Without baseline conversion data, sample size calculations are guesses. Check GA4, Mixpanel, or experimentation tool (Optimizely, VWO, Statsig, Eppo).
3. **Check current traffic volume** — Pull last 30 days of sessions/users on the page being tested. This is the binding constraint on what tests are feasible.

### Diagnostic Questions

Ask the user 5-10 of these before doing work. Keep them tight:

1. **What's the page/flow under test?** — Landing page, pricing page, signup form, email subject line, onboarding step, paid ad creative, etc.
2. **What's the current baseline conversion rate?** — Be specific: "trial-signup rate on /pricing is 3.2% over last 30 days." Vague baselines kill tests.
3. **What's the test traffic volume?** — Sessions/day on the page (not total site traffic). If <500/day, most tests will take months.
4. **What change are you proposing?** — Specific variant description. "Change headline" is not enough — what to and why?
5. **What's the MDE you'd care about?** — If conversion goes up 1%, do you care? 5%? 20%? The answer determines sample size. Most teams should target MDE ≥10% relative lift for early tests.
6. **What guardrail metrics matter?** — Bounce rate, time on page, downstream revenue, support tickets. The variant might lift the primary metric but crash a guardrail.
7. **What's the cost of a wrong call?** — If we ship a false winner, what breaks? If the cost is "the page looks slightly worse," tolerance for risk is higher.
8. **Have any other tests run on this page recently?** — Concurrent tests interfere. Recent tests bias prior distributions.

If the user can't answer #2 (baseline) or #3 (traffic), **stop**. You cannot scope a test without these.

---

## Process

The core workflow: 9 steps from hypothesis to post-test learning.

### Step 1: Write a Falsifiable Hypothesis

A hypothesis must be specific enough that a reasonable person could predict the outcome.

**Hypothesis structure:**

> If we [change X] on [page/flow], then [primary metric] will [change by amount/direction], because [mechanism].

**Examples:**

- ❌ Weak: "If we change the headline, conversions will go up."
- ✅ Strong: "If we change the homepage headline from 'Project management software' to 'Project management for remote engineering teams,' then trial signups will increase by ≥10% relative, because the more specific headline matches a higher-intent searcher segment (organic search → engineering ICP)."

**Anatomy of a good hypothesis:**
- **Specific change** — what exactly changes between control and variant
- **Specific metric** — primary metric named, not vague "conversions"
- **Effect size** — direction *and* magnitude (≥10% relative lift is a defensible default)
- **Mechanism** — why this should work; a theory of change that can be wrong

**Common gotcha:** Hypotheses written so vaguely that any outcome confirms them. If the variant goes up, "matched intent worked." If it goes down, "we lost the broader audience." Force yourself to predict a direction and magnitude.

---

### Step 2: Define Primary Metric and Guardrails

The primary metric is what you'll declare a winner on. Guardrails are what you'll *not* tank in the process.

**Primary metric rules:**
- One metric. Not two.
- Should be a conversion event, not a proxy (clicks-to-pricing is a proxy; pricing-to-trial-signup is conversion)
- Should be close to the change. Testing a homepage headline against revenue 90 days later requires too much sample. Test against the next-step conversion (homepage → pricing visit, or homepage → trial signup).

**Guardrail metrics (4-6 typical):**
- Bounce rate (variants shouldn't make people leave)
- Page load time (the variant shouldn't tank performance)
- Downstream conversion (if you optimize the top of funnel, monitor that it doesn't break the bottom)
- Revenue per session (volume of conversions can go up while value goes down)
- Support tickets / unsubscribes (qualitative damage)
- Engagement (time on page, scroll depth) — softer guardrail

**Decision criteria:**
- Pick primary metric one step downstream from the change. Closer = faster test; too close = doesn't predict real outcomes.
- Define guardrails *before* test launch. Don't backfill after seeing data — that's HARKing (Hypothesizing After Results are Known).

**Common gotcha:** Picking primary metric too far downstream. Testing landing-page headline against trial-to-paid conversion 30 days later means 99% of the variance is post-signup, and the test will never reach significance.

---

### Step 3: Calculate Sample Size

Sample size determines whether the test is feasible. Use a calculator (Evan Miller's, Optimizely's, or built into your experimentation tool).

**Inputs:**
- **Baseline conversion rate (BCR):** current rate, e.g., 4%
- **Minimum detectable effect (MDE):** smallest relative lift you'd care about, e.g., 10%
- **Statistical significance (α):** typically 0.05 (95% confidence)
- **Statistical power (1-β):** typically 0.80 (80% chance of detecting an effect that exists)
- **Variants:** 2 (control + 1) is fastest; more variants split traffic

**Output:** Required visitors per variant.

**Example math:**
- BCR 4%, MDE 10% relative (i.e., detect a lift from 4.0% to 4.4%), α 0.05, power 0.80
- Required: ~15,200 visitors per variant = 30,400 total
- At 500 visitors/day, test runs ~61 days
- If only 100 visitors/day, test runs ~10 months → not feasible

**Decision criteria:**
- If required runtime >12 weeks at current traffic, the test is likely not worth running. Either: (a) increase MDE (only test bigger swings), (b) move test upstream to higher-volume page, (c) skip A/B testing and just ship the change with monitoring.
- Multivariate tests (testing 3+ variants) split traffic — runtime scales linearly with variant count.

**Common gotcha:** Calculating sample size for *absolute* lift instead of *relative*. "Detect 1% lift" is ambiguous: 1 percentage point (4% → 5%, 25% relative) vs. 1% relative (4% → 4.04%). State which you mean. Default to relative for marketing tests.

---

### Step 4: Estimate Test Duration and Plan Traffic

Convert sample size into calendar runtime.

**Formula:**
- Test duration (days) = Total sample required / Daily traffic to test
- Add buffer: round up to whole weeks (capture full weekly cycles)
- Minimum: 7 days, even if sample size hits earlier (captures weekly seasonality)
- Maximum: 4-6 weeks (longer = cookie deletion, external events, user fatigue)

**Decision criteria:**
- Tests should run for **at least one full week**, even if you have sample size on day 3 (weekly cycles matter)
- Tests should run for **no more than 6 weeks** (otherwise external factors swamp the signal)
- If predicted runtime exceeds 6 weeks, scope down

**Common gotcha:** Stopping early because the test "reached significance" on day 4. This is p-hacking. Pre-commit to the planned duration.

---

### Step 5: QA Before Launch

Most A/B tests fail because of implementation bugs, not strategy bugs.

**QA checklist:**
- [ ] Variants render correctly on desktop, mobile, tablet
- [ ] Variants render correctly in Chrome, Safari, Firefox
- [ ] Tracking events fire for both variants
- [ ] Conversion event fires correctly (check in real-time analytics)
- [ ] Sample is allocated 50/50 (or as planned)
- [ ] No other concurrent tests on the same page (mutex)
- [ ] Cache and CDN cleared
- [ ] Server-side test, not client-side, if SEO matters
- [ ] No flicker (FOOC — Flash of Original Content) — split fast
- [ ] User-level (not session-level) bucketing if test spans multiple sessions

**Decision criteria:**
- Run an "AA test" (control vs. identical control) for 24h before launching the real test. If you see any difference, your implementation has a bug.

**Common gotcha:** Client-side A/B test with FOOC — the control loads, then the variant flashes in. Users see both, conversion rate looks weird, test is unreliable. Use server-side allocation or an SSR-aware tool.

---

### Step 6: Run the Test Without Peeking

The single most common reason teams ship false winners: peeking at results before sample size is hit and stopping when they see significance.

**Why peeking is bad:**
- Standard significance tests assume one look at the data
- Peeking inflates Type I error from 5% to 25%+ depending on how often you peek
- A test that crosses p<0.05 on day 3 has a 60% chance of being a false positive

**Rules:**
- Pre-commit to a sample size and runtime
- Do not declare a winner before the planned end
- It's OK to monitor for *bugs* and *guardrail violations* — those are stop-the-test signals, not winner signals
- If using a tool with sequential testing (Statsig, Eppo, Optimizely Stats Accelerator), you can peek — but only if the tool uses proper sequential methods (CUPED, mSPRT)

**Decision criteria:**
- If your tool says "you can stop now, significance reached" but you're at 30% of planned sample, it's almost always wrong. Wait.

**Common gotcha:** "Look the variant is winning, let's ship it early to save time." Almost always a false positive. Trust the math; finish the test.

---

### Step 7: Analyze Results

When the test ends, analyze rigorously.

**Analysis checklist:**

1. **Did we reach planned sample size?** If no, the test is inconclusive — don't ship.
2. **Primary metric:** Is the lift statistically significant (p<0.05) and at or above the MDE?
3. **Guardrail metrics:** Did any guardrail tank? If yes, do not ship even if primary won.
4. **Segment analysis (carefully):** Cut by device, traffic source, new/returning. **Be cautious** — segment lifts are noisier; don't ship variant decisions based on subgroups unless the subgroup test reached its own sample size.
5. **Sanity checks:** Sample ratio mismatch (SRM) — was traffic actually 50/50? If not, there's a bug. Outliers — any single session with disproportionate impact?

**Decision tree:**
- Primary win + no guardrail loss → **Ship**
- Primary win + guardrail loss → **Don't ship** (mixed result; investigate)
- Primary flat (no significant lift) → **Don't ship variant**; learn what to test next
- Primary loss (variant worse) → **Don't ship; this is valuable info**

**Common gotcha:** Slicing by 6 segments and finding a "winning segment" — Simpson's paradox lurks here, plus multiple-comparison risks. Only trust segment analysis if pre-specified before the test.

---

### Step 8: Document and Learn

Whatever the result, document it. Failed tests are more valuable than untested intuitions.

**Test recap doc:**
- Hypothesis (verbatim)
- Variants (with screenshots)
- Sample size, MDE, runtime
- Primary metric result + p-value + confidence interval
- Guardrail metric results
- Decision (ship / don't ship / iterate)
- **Learning:** What did this teach us about the user / our positioning / our funnel?

**Build a test log:**
- Spreadsheet of every test run with results
- Calculate "win rate" (% tests that ship) — healthy CRO programs land 20-35%
- If win rate <10%, hypotheses are too weak (not informed by research)
- If win rate >50%, you're probably running underpowered tests and shipping false positives

**Decision criteria:**
- A test that didn't win is not a failure if it teaches you something about user behavior. Document the learning even more than the result.

---

### Step 9: Plan the Next Test

Compounding CRO comes from chained tests, not one-offs.

**Sequence planning:**
- Won? → Test the next biggest hypothesis on the same page, or extend the winning variant to other pages
- Lost? → Don't abandon the area; learn what didn't work and test a different mechanism

**Common gotcha:** Treating each test as standalone. A pricing-page test that loses informs the next pricing-page test. Cumulative learning compounds; one-off learnings don't.

---

## Output Format

The deliverable is an A/B Test Plan — a single doc that can be shared with engineering, analytics, and leadership.

```markdown
# A/B Test Plan: {{test-name}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / Approved / Running / Complete

---

## 1. Hypothesis

If we {{change}} on {{page/flow}}, then {{primary metric}} will {{direction + magnitude}}, because {{mechanism}}.

## 2. Variants

- **Control:** {{description + screenshot}}
- **Variant A:** {{description + screenshot}}
- (Add Variant B/C only if traffic supports it)

## 3. Metrics

- **Primary:** {{metric name}} — currently {{baseline}}%
- **Guardrails:**
  - {{Guardrail 1}} — must not decrease by >{{X}}%
  - {{Guardrail 2}} — must not decrease by >{{X}}%
  - {{Guardrail 3}} — must not decrease by >{{X}}%

## 4. Sample Size and Runtime

- Baseline conversion: {{X}}%
- MDE: {{Y}}% relative
- α: 0.05
- Power: 0.80
- Required sample per variant: {{N}}
- Daily traffic: {{T}}
- Planned runtime: {{D}} days (min 7, max 42)

## 5. Decision Criteria

- **Ship variant if:** Primary metric ≥+{{MDE}}% relative with p<0.05 AND no guardrail violation
- **Don't ship if:** Primary flat or negative, OR any guardrail violation
- **Inconclusive (don't ship, plan next test) if:** Sample size hit but no significance

## 6. QA Checklist

- [ ] Variants render correctly on desktop, mobile, tablet
- [ ] Browser coverage: Chrome, Safari, Firefox
- [ ] Tracking verified (real-time analytics)
- [ ] AA test passed (24h prior)
- [ ] No concurrent tests on same page
- [ ] No FOOC / flicker
- [ ] User-level bucketing

## 7. Risks

| Risk | Mitigation |
|---|---|
| {{risk}} | {{mitigation}} |

---

## Next Steps

- [ ] Build variant (eng)
- [ ] QA + AA test
- [ ] Launch
- [ ] Monitor for bugs (not significance) during run
- [ ] Analyze at planned end date
- [ ] Write recap + next-test plan
```

---

## Quality Bar

A test plan is "done" when:

- [ ] Hypothesis is falsifiable (specific change, metric, direction, magnitude, mechanism)
- [ ] Primary metric named (singular, conversion event, not proxy)
- [ ] Guardrail metrics named with thresholds
- [ ] Sample size calculated with stated MDE, α, and power
- [ ] Runtime stated in days (min 7, max 42)
- [ ] Decision criteria pre-committed (ship / don't ship / inconclusive)
- [ ] QA checklist complete
- [ ] AA test passed before launch
- [ ] No peeking commitment from owner
- [ ] Post-test recap template ready

### Common Mistakes

1. **Peeking and stopping early** — Checking results daily and shipping when p<0.05 hits. **Why it happens:** Excitement, urgency to declare a win. **Fix:** Pre-commit to sample size. Don't look at the primary metric until sample is hit (you can monitor guardrails and bugs without seeing variant performance). Use sequential testing if your tool supports it.

2. **Underpowered tests** — Running a test with too little traffic, declaring "no significance" as "no effect." **Why it happens:** Skipping sample size calculation. **Fix:** Calculate sample size first. If runtime is too long, change the MDE or pick a higher-volume page. A test that "didn't reach significance" with insufficient sample tells you nothing.

3. **Vague hypotheses** — "Let's test a new headline and see what happens." **Why it happens:** Pressure to ship tests, lack of upstream research. **Fix:** Force the format: *If we [change], then [metric] will [direction + magnitude], because [mechanism].* If you can't fill in the "because", do qualitative research first.

4. **HARKing (Hypothesizing After Results are Known)** — Slicing data after the fact to find a "winning segment." **Why it happens:** Disappointment that the main result is flat; pressure to justify the test. **Fix:** Pre-specify segments and metrics before launch. Treat post-hoc segment wins as hypotheses for the next test, not as ship-decisions.

5. **Ignoring guardrail metrics** — Primary metric wins, ship — without checking bounce, support tickets, or downstream conversion. **Why it happens:** Tunnel vision on primary metric. **Fix:** Always define ≥3 guardrails before launch. Treat any guardrail violation as a stop-the-ship signal even if primary won.

6. **Simpson's paradox** — Variant wins overall but loses in every individual segment, or vice versa, because segment mix changed. **Why it happens:** Traffic mix shifts (e.g., a paid campaign launched mid-test). **Fix:** Verify sample ratio matches expected by source/device. If mix shifted significantly, the test result may not generalize.

7. **Sample ratio mismatch (SRM) ignored** — Traffic was supposed to split 50/50 but came out 55/45. **Why it happens:** Bucketing bug, bot filtering imbalance, cookie deletion. **Fix:** Run a chi-square test on actual allocation. If SRM detected, investigate the bug before trusting any results.

8. **Concurrent tests on the same page** — Two tests running simultaneously, interaction effects unaccounted for. **Why it happens:** Pressure to test more, no coordination. **Fix:** Maintain a test calendar with mutex rules. Only one test per page at a time, or use factorial designs explicitly.

9. **Treating a single test as the final answer** — One test concludes "headline B wins," team treats it as universal truth. **Why it happens:** Confirmation bias. **Fix:** Replicate important wins (run the same test on a different segment or page) before treating as settled. CRO programs that compound rerun their biggest wins.

---

## Examples

### Example 1: Pricing-page CTA test on a Series A SaaS

**Context:**
- Company: Cinch, billing analytics for SaaS ($3M ARR, 20 employees)
- Goal: Increase trial signups from /pricing
- Constraint: 800 unique visitors/day on /pricing, current 4.0% conversion to trial signup

**Input from user:**
> "We want to test changing the pricing page CTA from 'Sign Up' to 'Start Free Trial' across all 3 plan cards. Want to see if more specific copy helps."

**Output (abbreviated):**

```markdown
### Hypothesis

If we change the pricing page CTAs from "Sign Up" to "Start Free Trial" (no card required) on all 3 plan cards, then /pricing → trial signup conversion will increase by ≥10% relative (from 4.0% to ≥4.4%), because (a) the variant clarifies that no payment is required and (b) "Start Free Trial" is an outcome-oriented action vs. generic "Sign Up."

### Variants
- Control: "Sign Up" button on each plan card
- Variant A: "Start Free Trial" button on each plan card (no card required)

### Metrics
- Primary: /pricing → trial-signup conversion rate (visitor-level)
- Guardrails:
  - Trial-to-paid conversion (≥30 days post-trial) — must not decrease >5%
  - Pricing-page bounce rate — must not increase >10%
  - Demo requests — must not decrease (alt CTA cannibalization)

### Sample size
- Baseline 4.0%, MDE 10% relative, α 0.05, power 0.80
- Required sample per variant: ~15,800
- Daily traffic: 800 visits/day → 400/variant
- Planned runtime: ~40 days (round to 6 weeks)

### Decision criteria
- Ship if: trial-signup +≥10% relative, p<0.05, no guardrail violation
- Don't ship if: flat / negative, or guardrail violation

### QA
- AA test 48h before launch
- Server-side allocation via Statsig
- User-level bucketing (since trial-to-paid measured 30+ days later)
- Mobile + desktop coverage

### Risks
- Higher trial signups could include more "kicker tires" → watch trial-to-paid guardrail
- 6-week runtime overlaps with end-of-quarter — flag, but probably fine
```

**Why this works:** Specific hypothesis with magnitude, sample size feasible at current traffic, downstream guardrail (trial-to-paid) protects against shipping a vanity-win, AA test prevents implementation bugs.

---

### Example 2: Onboarding-flow simplification test

**Context:**
- Company: Lattice-style HR tool, $25M ARR, 120 employees
- Goal: Increase signup-to-activation by reducing onboarding steps from 5 to 3
- Constraint: 60 signups/day, current 38% reach activation (set up 1 team + invite 1 colleague)

**Input from user:**
> "We want to test removing 2 of the 5 onboarding steps. Hypothesis is that fewer steps = higher activation. But we're worried about losing setup quality."

**Output (abbreviated):**

```markdown
### Hypothesis

If we collapse the 5-step onboarding into 3 steps (combining "Add team members" + "Set permissions" + "Choose features" into a single skip-friendly step), then signup-to-activation rate will increase by ≥15% relative (from 38% to ≥43.7%), because reducing perceived effort lowers drop-off in steps 2-4.

### Variants
- Control: 5-step wizard (current)
- Variant A: 3-step wizard with optional consolidated step

### Metrics
- Primary: signup → activation within 7 days (set up team + invite ≥1 colleague)
- Guardrails:
  - 30-day retention — must not decrease >10% relative
  - Paid conversion (90-day) — must not decrease >5% relative
  - Avg # of invited colleagues — must not decrease >20%
  - Support tickets in first 7 days — must not increase >25%

### Sample size
- Baseline 38%, MDE 15% relative, α 0.05, power 0.80
- Required sample per variant: ~1,500
- Daily traffic: 60 signups → 30/variant
- Planned runtime: ~50 days (round to 7 weeks; 7 weeks exceeds 6-week ceiling — flag)
- DECISION: Increase MDE to 20% relative to bring runtime to ~5 weeks

### Updated parameters
- MDE 20% relative
- Required sample per variant: ~900
- Runtime: ~30 days (5 weeks) ✓

### Decision criteria
- Ship if: activation +≥20% relative, p<0.05, all guardrails OK
- Don't ship if: any guardrail violation OR activation flat/negative
- Inconclusive: hit sample, no significance → don't ship; investigate which step had highest drop

### QA
- AA test 72h before launch
- User-level bucketing (retention measured 30+ days)
- Test on both web and mobile signup flows
- Verify activation event fires correctly per variant
```

**Why this works:** Recognizes that 6-week ceiling forces a tradeoff (raise MDE to make test feasible), uses multiple guardrails to protect against optimizing activation while degrading retention (a classic CRO trap), and uses user-level bucketing to support 30-day retention measurement.

---

## Related Skills

Chain these skills together for compounding outcomes.

- **[`page-cro`](../page-cro/SKILL.md)** — Use *before* this skill to audit the page and generate hypothesis candidates. CRO audit → ranked test backlog → this skill scopes each test.
- **[`analytics-tracking`](../analytics-tracking/SKILL.md)** — Use *before* this skill to ensure conversion events are firing correctly. Tests without reliable tracking are guesses.
- **[`signup-flow-cro`](../signup-flow-cro/SKILL.md)** — Use *alongside* this skill when the test is on a signup flow. That skill provides domain-specific hypothesis frameworks; this skill scopes them statistically.
- **[`form-cro`](../form-cro/SKILL.md)** — Use *alongside* this skill when the test is on a form. Form-specific hypotheses (field count, button copy) plug into this skill's test design.
- **[`onboarding-cro`](../onboarding-cro/SKILL.md)** — Use *alongside* this skill when testing onboarding flows where retention and activation are downstream guardrails.

---

## References

- Evan Miller, *Awesome A/B Testing Calculator* (evanmiller.org) — the standard for sample size math
- Ron Kohavi, *Trustworthy Online Controlled Experiments* — the definitive textbook
- Statsig and Eppo documentation on sequential testing — modern peeking-safe methodology
- Andrew Gelman, "The garden of forking paths" — why HARKing and segment-hunting inflate false positives
- Optimizely's "Stats Engine" whitepaper — practical sequential testing approach
