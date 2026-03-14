---
name: ab-test-setup
description: Design statistically valid A/B tests with proper hypothesis, sample size, and decision criteria. Triggers - A/B test, split test, experiment, hypothesis testing, conversion test.
metadata:
  version: 1.0.0
---

# A/B Test Design

Design rigorous A/B tests for conversion optimization.

## Process

### Step 1: Formulate Hypothesis
**Format:** If [change], then [metric] will improve, because [reason].

**Example:** If we change the CTA from "Learn More" to "Start Free Trial", then signups will increase by 15%, because it's more action-oriented and clarifies the next step.

### Step 2: Define Metrics
- **Primary:** The metric you're optimizing (signup rate)
- **Guardrails:** Metrics that shouldn't get worse (time on page, bounce rate)

### Step 3: Calculate Sample Size
- Baseline conversion rate: [X]%
- Minimum detectable effect (MDE): [Y]% improvement
- Statistical significance: 95%
- Power: 80%

**Use calculator:** [Link to calculator]
**Result:** Need [N] visitors per variant

### Step 4: Estimate Duration
- Current traffic: [X visitors/day]
- Test duration: [N visitors] / [X visitors/day] = [Y days]

### Step 5: Document Test Plan
```markdown
# A/B Test: [Name]

## Hypothesis
If [change], then [metric] will improve by [X]%, because [reason].

## Variants
- **Control:** [Description]
- **Treatment:** [Description]

## Metrics
- **Primary:** [Metric to optimize]
- **Guardrails:** [Metrics that shouldn't decrease]

## Sample Size
- Baseline: [X]%
- MDE: [Y]%
- Required: [N] visitors per variant

## Duration
[Y] days (based on traffic)

## Decision Criteria
- **Winner:** Primary metric improves by ≥[X]% with p<0.05
- **Loser:** No improvement or guardrail degradation
- **Inconclusive:** [What to do if no significance]
```

### Step 6: QA Before Launch
- [ ] Tracking verified
- [ ] Variants render correctly
- [ ] No other tests on same page
- [ ] Sample size sufficient

### Step 7: Monitor During Test
- Check daily for issues
- Don't peek at results early (increases false positives)
- Run for full duration

### Step 8: Analyze Results
- Statistical significance achieved?
- Guardrail metrics OK?
- Consistent across segments?

## Quality Bar
- Hypothesis is falsifiable
- Sample size calculated (not guessed)
- Guardrails prevent unintended harm
- Decision criteria defined upfront
- Test runs full duration

