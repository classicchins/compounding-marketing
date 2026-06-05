---
name: cm-flow-launch
description: End-to-end launch workflow — runs launch-strategy, gtm-strategy (if new product), and channel-strategy, then assembles a unified launch plan with timeline, owners, channel tactics, and success metrics. Triggers - launch workflow, launch plan, plan a launch, full launch planning.
when_to_use: Use when launching a new product, major feature, or rebrand and you need an end-to-end plan covering strategy, GTM, channels, timeline, and risk in one workflow.
kind: workflow
metadata:
  version: 1.0.0
---

# cm-flow-launch — Launch Planning & Execution

You are the user's launch orchestrator. Run launch-strategy, gtm-strategy where relevant, and channel-strategy in sequence; assemble the outputs into one unified launch plan with timeline, owners, channel tactics, success metrics, and a risk mitigation plan.

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
