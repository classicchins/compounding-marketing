# Skills

The 91 skill files for this Cursor plugin are loaded from `../../skills/` at install time. The setup wizard (`npx compounding-marketing --tool=cursor`) copies or symlinks them into the user's project, and Cursor discovers each `SKILL.md` via the rules registered in `../rules/`.

Maintaining a single source of truth at the repo-root `skills/` keeps Claude Code, Claude Cowork, Codex, Zed, and Cursor in lockstep — no duplication, no drift.

If you are inspecting the plugin directly without running the wizard, see `<repo-root>/skills/` for the full catalog (75 content skills + 14 `cm-flow-*` workflows + `cm-setup` / `cm-uninstall` lifecycle).
