# Compounding Marketing — Cursor Plugin

This directory packages Compounding Marketing as a Cursor plugin (May 2026 spec). It exposes 91 skills, 16 agent-discoverable rules, and 2 MCP server entries to a Cursor project — with team marketplace controls (Default Off / Default On / Required).

## Contents

```
.cursor-plugin/
├── marketplace.json   # Plugin metadata, version, tags, category, team-control hints
├── mcp.json           # Perplexity + Exa MCP server definitions
├── plugin.json        # Legacy descriptor (kept for backward compat with older Cursor)
├── rules/             # 16 .mdc rules — one per workflow (cm-flow-*) + lifecycle (cm-setup, cm-uninstall)
├── skills/            # Pointer README — skills load from <repo-root>/skills/ at install time
└── README.md
```

## Installation

### Recommended: setup wizard

```bash
npx compounding-marketing --tool=cursor
```

The wizard auto-detects whether your Cursor build supports the `.cursor-plugin/` spec and installs accordingly. On older Cursor versions, it falls back to `.cursor/rules/cm-*.mdc` + `compounding-marketing/skills/`.

### Manual / Marketplace

Once published, organizations will install this plugin from the Cursor Marketplace and apply team controls (Default Off / Default On / Required) per workspace.

```bash
# After this plugin is published to the Marketplace (planned for v1.8.1):
cursor plugin install compounding-marketing
```

## Team controls

`marketplace.json` declares support for all three Cursor team activation modes. Recommended default is `default-off` — these 91 skills shouldn't auto-attach to every chat. Users opt in by mentioning trigger phrases (e.g., "write landing page copy", "run cold-email outreach") or by typing `@cm-flow-research` directly.

## Publishing

> **Not yet published.** Per the v1.8 plan, we structure the files in v1.8.0 and publish to the Cursor Marketplace in v1.8.1 once stable.

When ready:

```bash
cursor plugin publish
```

## Source of truth

Skills live at `<repo-root>/skills/`. Rules in `.cursor-plugin/rules/` are auto-generated from each workflow / lifecycle skill's frontmatter — re-run `node .internal/generate-cursor-rules.js` after adding or renaming a workflow.

## License

MIT — see `<repo-root>/LICENSE`.
