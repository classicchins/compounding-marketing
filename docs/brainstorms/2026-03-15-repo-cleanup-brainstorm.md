# Brainstorm: Repository Cleanup — Move Internal Files

**Date:** 2026-03-15
**Status:** Ready for planning

## What We're Building

Clean up the public open-source repo by moving internal/planning documents out of the tracked codebase into a `.internal/` directory that's gitignored. Remove these files from GitHub history so the public repo only contains plugin code.

## Why This Matters

The repo currently has internal specs, briefs, and planning docs mixed in with the plugin code. This:
- Confuses contributors about what's part of the plugin vs. internal planning
- Makes the repo look less polished for an open-source project
- Exposes internal strategy docs publicly

## Key Decisions

1. **Folder name:** `.internal/` — hidden directory, clearly not part of plugin
2. **Files to move:**
   - `PLUGIN-SPEC.md` (41KB technical spec)
   - `WEBSITE-BRIEF.md` (27KB website redesign brief)
   - `DOC-STRATEGY.md` (9KB documentation strategy)
   - `DELIVERABLE-SUMMARY.md` (2KB build summary)
   - `IMPROVEMENTS.md` (6KB v1.1 feature notes)
   - `GITHUB-SETUP.md` (3KB internal setup guide)
3. **Files to delete:** `compounding-marketing-1.1.0.tgz` (build artifact, regenerable via `npm pack`)
4. **Gitignore:** Add `.internal/` to `.gitignore`
5. **GitHub cleanup:** Remove files from git tracking so they disappear from GitHub (but keep locally in `.internal/`)

## Approach

1. Create `.internal/` directory
2. Move the 6 files into `.internal/`
3. Delete the `.tgz` artifact
4. Add `.internal/` to `.gitignore`
5. Commit the removal + gitignore update
6. Push to GitHub — files will disappear from the public repo

## Open Questions

None — all decisions resolved.

## Next Steps

Run `/ce:plan` to generate the implementation plan, then `/ce:work` to execute.
