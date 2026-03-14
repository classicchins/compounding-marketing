# Commands Overview

Workflow commands chain multiple skills for common marketing tasks.

## What Are Commands?

Commands are pre-configured workflows that run multiple skills in sequence. Think of them as marketing playbooks.

**Example:**
```
/cm:position
```

This runs:
1. `positioning` skill → Positioning canvas
2. `messaging-framework` skill → Message pillars
3. `value-proposition` skill → Value props
4. Combines all → Positioning package

---

## Commands vs Skills

| Commands | Skills |
|----------|--------|
| Multi-step workflows | Single-step tasks |
| Run multiple skills | Run one framework |
| Example: `/cm:position` (3 skills) | Example: `copywriting` (1 skill) |
| Use for: Complex projects | Use for: Specific tasks |

---

## When to Use Commands

**Use commands when:**
- Starting a complex project (research, positioning, launch)
- You want a structured workflow
- You're new to the plugin (commands guide you)

**Use individual skills when:**
- You need one specific output (e.g., just copywriting)
- You've already run the prerequisite skills
- You want more control over the process

---

## Available Commands

### Project Workflows

| Command | Purpose | Time | Skills Run |
|---------|---------|------|------------|
| `/cm:research` | Market + customer research | 2-4h | icp-research, competitive-analysis, customer-research |
| `/cm:position` | Full positioning workshop | 3-5h | positioning, messaging-framework, value-proposition |
| `/cm:copy` | End-to-end copywriting | 2-3h | copywriting, copy-editing, page-cro |
| `/cm:launch` | Launch planning | 2-3h | launch-strategy, channel-strategy, content-strategy |
| `/cm:compound` | Document learnings | 10-15min | (synthesis only, no skills) |

### Periodic Workflows (Daily/Weekly)

| Command | Purpose | Time | Frequency |
|---------|---------|------|-----------|
| `/cm:daily` | Daily marketing review | 10min | Daily |
| `/cm:standup` | Marketing standup | 5min | Daily |
| `/cm:weekly` | Weekly review + planning | 30-45min | Weekly |
| `/cm:eod` | End-of-day wrap | 5-10min | Daily |

---

## Command Workflow Examples

### New Product Launch Sequence

```
1. /cm:research → Understand market and customers
2. /cm:position → Define positioning and messaging
3. /cm:copy (homepage) → Write launch page
4. /cm:launch → Plan launch week
5. /cm:compound → Document what you learned
```

**Total time:** 12-18 hours (spread over 2-3 weeks)

### Conversion Optimization Sequence

```
1. page-cro (homepage) → Audit current page
2. /cm:copy (homepage) → Rewrite based on audit
3. ab-test-setup → Design A/B test
4. (Run test for 2-4 weeks)
5. /cm:compound → Document test results
```

### Content Marketing Engine

```
1. seo-research (using Perplexity MCP) → Keyword research
2. content-strategy → Plan editorial calendar
3. copywriting (blog post) → Write first pillar post
4. social-content → Repurpose for LinkedIn/Twitter
5. /cm:weekly → Review performance weekly
```

---

## How Commands Read Context

Commands automatically load:

1. **`.cm-context`** — Product, ICP, positioning, brand
2. **`deliverables/`** — Previous skill outputs
3. **Your input** — What you're asking for right now

This means each command builds on prior work. Marketing knowledge compounds.

---

## Next Steps

- [Workflow Commands Reference](./workflow-commands.md) — Detailed docs for each command
- [Skills Overview](../skills/README.md) — Browse individual skills
- [Getting Started](../getting-started.md) — Run your first command
