# /cm-setup — Per-Project Bootstrap

Safely wire Compounding Marketing into the current project.

## What It Does

The in-Claude equivalent of `npx compounding-marketing`. Walks the user through the same decisions the wizard makes, writes only what they approve, and records every change in `.compounding-marketing-install.json` so `/cm-uninstall` can reverse it cleanly.

Use this **after** installing the plugin via `/plugin install compounding-marketing` (which never modifies user files).

## Process

### Step 1: Detect current state

- Is cwd a project root? (`package.json`, `.git`, `Cargo.toml`, `Gemfile`, `pyproject.toml`, `go.mod`, `Makefile`, `src/`, `app/`)
- Does `~/.claude/` exist?
- Does `CLAUDE.md` exist at the project root? Does it already contain `<!-- COMPOUNDING-MARKETING-START -->`?
- Does `.mcp.json` exist?
- Does `.compounding-marketing-install.json` exist (prior install)?

If a manifest exists, ask: **re-run** (idempotent — only adds missing pieces) or **uninstall first**.

### Step 2: Pick install scope

```
[1] Project — install into ./compounding-marketing/   [default if cwd is a project]
[2] Global  — install into ~/.claude/plugins/compounding-marketing/
[3] Custom  — install into a path you specify
```

Auto-default: `project` if cwd looks like a project, else `global` if `~/.claude/` exists, else `project`.

### Step 3: Pick MCPs (optional)

Offer the two research MCPs. For each, prompt for an API key (Enter to skip and store the `${PERPLEXITY_API_KEY}` / `${EXA_API_KEY}` placeholder).

- **Perplexity** — AI web research. Key: https://perplexity.ai/settings/api
- **Exa** — Neural search + company intelligence. Key: https://dashboard.exa.ai

Write the MCP config based on scope:
- **Project:** write `.mcp.json` at project root (one `mcpServers.<name>` entry per MCP).
- **Global:** do NOT touch `~/.claude.json` (it holds Claude Code's own state). Instead, print `claude mcp add --transport stdio --scope user --env KEY=… <name> -- npx -y <package>` for the user to run.

API keys also persist in `.cm-config.json` (gitignored).

### Step 4: Handle existing-file collisions

For every file the wizard would write, check existence. Mergeable kinds (`CLAUDE.md`, `AGENTS.md`, `.gitignore`, `.mcp.json`) prompt three options; everything else prompts overwrite-with-bak / skip:

```
[1] Merge with idempotent markers [Recommended] — append/replace just the plugin block.
[2] Overwrite (with .bak backup)                — replace the file; original saved as <file>.bak.
[3] Skip                                        — leave the file untouched.
```

If `CLAUDE.md` already contains the marker block, **update in place** with no prompt — it's idempotent. On merge, always take a `.bak` first so `/cm-uninstall` can restore byte-identical.

### Step 5: Persist manifest and report

Write `.compounding-marketing-install.json` (project root for project/custom; `~/.claude/` for global) recording:

| Field | Contents |
|-------|----------|
| `version`, `timestamp`, `scope`, `tool` | Run metadata. `tool` = `claude-code` here. |
| `installRoot`, `commandsDir`, `skillsLinkDir`, `instructionsFile`, `mcpConfigFile` | Resolved paths. |
| `createdFiles[]` | `{path, kind}` for every file written. |
| `createdSymlinks[]` | `{path, target}` for every symlink. |
| `modifiedFiles[]` | `{path, backupPath}` for every `.bak` taken. |
| `appendedMarkers[]` | `{path}` for every file that got a marker block. |
| `mcpEntries[]` | `{file, format, serverName}` for every MCP server added. |

Verify post-write: every symlink under `commandsDir` resolves; offer to remove broken ones.

## Output Format

```
✓ Setup complete
  Scope: project
  Install root: ./compounding-marketing/
  Instructions: ./CLAUDE.md (merged)
  Slash commands: 16 workflow + 61 skills as /cm-{name}
  MCPs: perplexity, exa → ./.mcp.json
  Manifest: ./.compounding-marketing-install.json

Next: /cm-context to create your product-marketing context doc.
Roll back: /cm-uninstall
```

## Quality Bar

- [ ] No file is written or modified without user confirmation (or an idempotent marker-block update).
- [ ] Existing `CLAUDE.md` content is preserved (marker-block append with `.bak`, or `.bak` on overwrite).
- [ ] Manifest records every write, symlink, modification, marker append, and MCP entry.
- [ ] Re-running this command does NOT duplicate marker blocks, symlinks, or MCP entries.
- [ ] Every reported success is verified — broken symlinks are flagged and offered for cleanup.
- [ ] On failure, the manifest still reflects partial state so `/cm-uninstall` can clean up.

### Common Mistakes

1. **Overwriting `CLAUDE.md` without prompting** — the cardinal sin. Even with `--yes`, never overwrite without first creating a `.bak`.
2. **Duplicating marker blocks on re-run** — always search for `<!-- COMPOUNDING-MARKETING-START -->` before appending; update in place if present.
3. **Silently deleting user-customized symlinks** — the `cm-*` cleanup must prompt. Users may have edited a symlink target.
4. **Manifest path collisions** — global and project installs use different manifest paths so they don't clobber each other.
5. **Editing `~/.claude.json` for global MCPs** — that file holds Claude Code's own state. For global scope, print `claude mcp add --scope user …` instead.

## Examples

### Example 1: Fresh project, no existing CLAUDE.md

```
[1] Project (./compounding-marketing/) [default]   ← user picks 1
Enable Perplexity? [Y/n] y    API key: pplx-…
Enable Exa? [Y/n] y           API key: (Enter to skip)
Add compounding-marketing/ to .gitignore? [Y/n] y

✓ Setup complete
  Files created: CLAUDE.md, .gitignore, .cm-config.json, .mcp.json, .compounding-marketing-install.json
  Symlinks: 77 (.claude/commands/) + 61 (.claude/skills/)
```

### Example 2: Project already has a CLAUDE.md from another tool

```
CLAUDE.md exists with custom content (no plugin markers found).
  [1] Merge with markers [Recommended]   ← user picks 1
✓ Backed up CLAUDE.md → CLAUDE.md.bak
✓ Appended plugin block to CLAUDE.md
```

User's existing content is preserved verbatim above the marker block. Re-runs replace only the block between markers. `/cm-uninstall` restores from the `.bak` byte-identical.

## Related Skills

- **[`cm-context`](../skills/cm-context/SKILL.md)** — Run *immediately after* `/cm-setup` to create the foundational `.agents/product-marketing-context.md` doc every other skill depends on.
- **[`cm-uninstall`](./cm-uninstall.md)** — Roll back this install using the manifest.
- **[`positioning`](../skills/positioning/SKILL.md)** — Run *after* `cm-context` to define market position; many downstream skills depend on it.
