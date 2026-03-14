# Compounding Marketing — Agent Instructions

This repository contains the **Compounding Marketing** plugin. Compatible with Claude Code, ChatGPT, Cursor, Windsurf, and any AI assistant that supports structured skills.

## Overview

50 marketing skills covering positioning, messaging, copywriting, CRO, SEO, and GTM. Built on the philosophy that **each unit of marketing work should make subsequent units easier**.

## Philosophy

**80% research and planning, 20% execution.**

Traditional marketing accumulates chaos. Compounding marketing inverts this by:
- Researching deeply before executing
- Building reusable positioning and messaging foundations
- Documenting learnings so they compound across projects
- Keeping quality high so future work builds on solid ground

## Skills Location

All skills are in `skills/` directory. Each skill is a self-contained `SKILL.md` file with:
- Purpose and when to use it
- Required inputs
- Step-by-step process
- Output format template
- Quality bar

## Workflow

**Research → Position → Message → Execute → Compound**

1. **Foundation first** — Always check `skills/cm-context/SKILL.md` or `.agents/product-marketing-context.md`
2. **Position before tactics** — Run positioning, messaging, value prop skills first
3. **Research-heavy execution** — Use research skills to inform decisions
4. **Compound learnings** — Document insights after completing work

## Skill Categories

### Foundation (5 skills)
cm-context | positioning | messaging-framework | value-proposition | brand-voice

### Research (5 skills)
icp-research | customer-research | competitive-analysis | market-sizing | marketing-psychology

### Content & Copy (7 skills)
copywriting | copy-editing | content-strategy | case-study | social-content | video-marketing | lead-magnets

### SEO & Discovery (6 skills)
seo-audit | ai-seo | programmatic-seo | site-architecture | schema-markup | competitor-alternatives

### CRO (7 skills)
page-cro | signup-flow-cro | onboarding-cro | form-cro | popup-cro | paywall-upgrade-cro | pricing-strategy

### Outreach & Email (3 skills)
cold-email | email-sequence | testimonial-collection

### Paid Acquisition (2 skills)
paid-ads | ad-creative

### Measurement & Testing (3 skills)
analytics-tracking | ab-test-setup | attribution-modeling

### GTM & Launch (3 skills)
launch-strategy | gtm-strategy | channel-strategy

### Growth & Retention (5 skills)
referral-program | free-tool-strategy | churn-prevention | partnership-marketing | community-strategy

### Sales & RevOps (3 skills)
sales-enablement | revops | webinar-strategy

### Meta (1 skill)
marketing-ideas

## Usage

When a user asks for marketing help:

1. **Check for existing context** — Read `.agents/product-marketing-context.md` if it exists
2. **Select the right skill** — Match the request to a skill from the list above
3. **Read the full SKILL.md** — Load `skills/{skill-name}/SKILL.md`
4. **Follow the process** — Execute step-by-step as documented
5. **Deliver according to output format** — Use the template provided in the skill

## Workflow Commands

Commands are in `commands/` directory. Use `/cm:{command}` syntax.

### Project Workflows
- `/cm:research` — Deep market + customer research workflow
- `/cm:position` — Full positioning workshop (Dunford framework)
- `/cm:copy` — End-to-end copywriting with CRO review
- `/cm:launch` — Launch planning and execution
- `/cm:compound` — Document learnings to compound knowledge

### Periodic Workflows (v1.2)
- `/cm:daily` — Daily marketing review (10 min — what's live, performing, needs attention)
- `/cm:standup` — Marketing standup (5 min — yesterday/today/blockers)
- `/cm:weekly` — Weekly marketing review + planning (30-45 min — patterns, wins, plan ahead)
- `/cm:eod` — End-of-day wrap (5-10 min — what shipped, what's pending, tomorrow's start)

### Rhythm Recommendations
| Time | Command | Purpose |
|------|---------|---------|
| Morning | `/cm:daily` | Orient, set the day's marketing priority |
| Async sync | `/cm:standup` | Team accountability, surface blockers |
| End of day | `/cm:eod` | Capture progress, prep tomorrow's start |
| Friday | `/cm:weekly` | Review patterns, plan next week |
| Post-project | `/cm:compound` | Document learnings for future use |

## Cross-Platform Compatibility

- **Claude Code** — Reads `CLAUDE.md` automatically
- **ChatGPT** — Upload this file or reference skills manually
- **Cursor** — Uses `.cursor-plugin/plugin.json`
- **Windsurf** — Compatible with Claude Code structure
- **OpenClaw** — Supports skills via `.agents/skills/` symlink

## Quality Standards

Every skill includes:
- Clear purpose and trigger phrases
- Required inputs defined upfront
- Step-by-step process (no guessing)
- Output format template
- Quality bar (what "great" looks like)

This is not a prompt library. This is a marketing methodology.
