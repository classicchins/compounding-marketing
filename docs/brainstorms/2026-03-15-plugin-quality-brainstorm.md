# Brainstorm: Plugin Quality — Setup Bugs + Skill Improvements

**Date:** 2026-03-15
**Status:** Ready for planning

## What We're Building

Two workstreams to make the plugin "extremely good and fully functional":

### Workstream 1: Fix Setup Wizard Bugs

1. **Config version hardcoded** — `setup.js` line 153 hardcodes `version: '1.1.0'` instead of reading from `package.json`
2. **Symlink creation crashes on re-runs** — `fs.symlinkSync()` needs try-catch; currently crashes if symlink target already exists in edge cases
3. **CLAUDE.md marker replacement** — missing `endIdx > startIdx` guard could truncate content if markers are malformed
4. **Directory creation race** — two sequential `mkdirSync` calls should be one `{ recursive: true }` call
5. **Invalid input handling** — `select()` silently defaults to option 1 on invalid input; should re-prompt
6. **API key placeholder** — `${PERPLEXITY_API_KEY}` looks like env var syntax; confusing to users

### Workstream 2: Expand Weak Skills

| Skill | Current Lines | Target | Key Additions |
|-------|--------------|--------|---------------|
| ai-seo | 65 | 250+ | Step-by-step AEO/GEO process, schema examples, content optimization walkthroughs |
| cold-email | 48 | 150+ | Persona research, list building, segmentation, follow-up sequences, 3-5 examples |
| gtm-strategy | 115 | 300+ | Real GTM playbooks for PLG/sales-led/hybrid, 90-day plans, team structures |
| referral-program | 262 | Reorganize | Rebalance: core design first, then viral math, then launch strategy |
| paid-ads | 388 | Reorganize | Strengthen the strategy Process section (~75 lines currently), better structure |

**Gold standard to emulate:** seo-audit (725 lines), signup-flow-cro (787 lines), case-study (416 lines)

## Key Decisions

- Fix all setup bugs before touching skills
- Expand skills to match the quality bar set by seo-audit and signup-flow-cro
- Don't split multi-skill files (paid-ads, content-strategy) yet — just improve what's there
- Every expanded skill must have: role prompt, detailed process, 3+ examples, specific quality bar

## Open Questions

None — all decisions resolved.

## Next Steps

Run `/ce:plan` to generate the implementation plan.
