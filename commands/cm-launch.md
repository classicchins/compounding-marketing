# /cm:launch — Launch Planning & Execution

Comprehensive launch planning from strategy to execution checklist.

## What It Does

Plans a product or feature launch end-to-end with timeline, channels, and tactics.

## Process

1. **Define Launch Scope**
   - Ask: What are you launching? (product, feature, update)
   - Ask: Launch date?
   - Ask: Launch tier? (major, minor, update)
   - Ask: Resources? (team, budget)

2. **Run Launch Strategy Skill**
   - Execute `launch-strategy` skill
   - Output: Launch timeline (8 weeks → launch day → 4 weeks post)

3. **Run GTM Strategy** (if new product)
   - Execute `gtm-strategy` skill
   - Define PLG vs. sales-led motion
   - Output: GTM strategy document

4. **Run Channel Strategy**
   - Execute `channel-strategy` skill
   - Prioritize channels for launch
   - Output: Channel plan with resources

5. **Create Launch Checklist**
   - Combine all outputs
   - Assign owners to tasks
   - Set deadlines
   - Identify risks

6. **Provide Launch Plan**
   - Unified launch document
   - Timeline with milestones
   - Channel tactics
   - Success metrics

## When to Use

- Launching new product
- Major feature release
- Entering new market
- Rebranding

## Prerequisites

- Positioning defined (run `/cm:position` if needed)
- Product ready (or launch date set)

## Time Investment

2-3 hours

## Output

- Complete launch plan
- Timeline with owners
- Channel plan
- Success metrics
- Risk mitigation plan
