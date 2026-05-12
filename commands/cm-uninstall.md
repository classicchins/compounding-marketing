# /cm-uninstall — Reverse a Compounding Marketing install

Reverse a previous `/cm-setup` or `npx compounding-marketing` install using the recorded manifest. Restores `.bak` backups byte-identical, strips marker blocks from `CLAUDE.md` / `AGENTS.md`, removes only files the wizard created.

## What It Does

Loads `.compounding-marketing-install.json` and reverses every recorded change. Files the user authored remain untouched.

Manifest location:
- **Global installs:** `~/.claude/.compounding-marketing-install.json`
- **Project / custom installs:** project root (`./.compounding-marketing-install.json`)

## When To Use

- You installed via the wizard and want to remove every trace.
- You re-ran the wizard with a different scope/tool and want to undo the wrong one.
- You're cleaning up a CI/scratch environment.

## What Gets Reversed

| Manifest field | Action |
|----------------|--------|
| `appendedMarkers[]` | Open each instructions file, remove the block between `<!-- COMPOUNDING-MARKETING-START -->` and `<!-- COMPOUNDING-MARKETING-END -->`. All other content preserved verbatim. |
| `mcpEntries[]` | For each `{file, format, serverName}`: delete that server from `.mcp.json` (`mcpServers.<name>`) or `config.toml` (`[mcp_servers.<name>]`). Delete the file if it becomes empty. |
| `createdSymlinks[]` | Remove each symlink. The target file is never touched. |
| `createdFiles[]` | Delete each path (deepest first). |
| `modifiedFiles[].backupPath` | Restore the `.bak` to its original path. Delete the `.bak`. |
| `installRoot`, `commandsDir`, `skillsLinkDir`, parent of `mcpConfigFile` | Walked bottom-up; empty dirs removed (including tool-config wrappers `.claude/`, `.cursor/`, `.codex/`, `.agents/`). Non-empty dirs left alone. |
| Manifest file itself | Deleted last. |

## Process

### Step 1: Locate the manifest

Search in order:
1. `~/.claude/.compounding-marketing-install.json` (global)
2. `./.compounding-marketing-install.json` (project, run from project root)
3. `./compounding-marketing/../.compounding-marketing-install.json` (project, run from a sibling dir)

If no manifest is found, print where you looked and exit non-zero. Without a manifest there is nothing to safely reverse.

### Step 2: Confirm with the user

Show the manifest summary: version, scope, tool, timestamp, install root, counts (files, symlinks, backups, marker blocks, MCP entries). Ask "Proceed with uninstall?" Default **No**. Skipped with `--yes`.

### Step 3: Reverse changes in safe order

1. Strip marker blocks from instructions files.
2. Remove MCP entries from `.mcp.json` / `config.toml` (delete the file if it ends up empty).
3. Remove created symlinks.
4. Remove created files (deepest path first).
5. Restore `.bak` backups (overwrites the working file, then deletes the `.bak`).
6. Walk install dirs bottom-up; `rmdir` each empty directory.
7. Delete the manifest.

### Step 4: Verify and report

Print a summary: files removed, symlinks removed, backups restored, marker blocks stripped, MCP entries removed.

## Output Format

```
✓ Uninstall complete
  Removed: 100 files, 77 symlinks
  Restored: 1 backup
  Stripped: 1 marker block (CLAUDE.md), 2 MCP entries
  Removed manifest: ./.compounding-marketing-install.json
```

## Quality Bar

- [ ] No file the user created outside the manifest is touched.
- [ ] Every `.bak` backup is restored byte-identical.
- [ ] Instructions files retain ALL user content outside the marker block.
- [ ] MCP config files lose only the entries this install added — other `mcpServers` survive.
- [ ] Empty parent directories are cleaned up; non-empty ones are left alone.
- [ ] If the manifest is missing, do nothing destructive — print where you looked and exit.
- [ ] After completion, re-running uninstall is a no-op (manifest gone).

### Common Mistakes

1. **`rm -rf` on the install root** — always walk bottom-up and only remove empty dirs.
2. **Forgetting to restore `.bak` files** — every entry in `modifiedFiles[]` must be restored, not just deleted.
3. **Stripping the wrong marker block** — match `<!-- COMPOUNDING-MARKETING-START -->` and `<!-- COMPOUNDING-MARKETING-END -->` exactly; do not regex anything else.
4. **Wiping the whole `.mcp.json`** — delete only the named `mcpServers.<name>` entries from `mcpEntries[]`; preserve others. Only delete the file if empty.
5. **Confirming destructive action by default** — `--yes` should be required to skip the prompt; interactive runs default to No.

## Examples

### Example 1: Project install rollback

```
/cm-uninstall

Loaded manifest from ./.compounding-marketing-install.json
  Installed: v1.6.0 (scope=project, tool=claude-code) on 2026-05-12T11:53:00Z
  Recorded: 100 files, 77 symlinks, 0 backups, 1 marker block, 2 MCP entries

Proceed? [y/N] y

✓ Stripped marker block from ./CLAUDE.md
✓ Removed 2 MCP entries from ./.mcp.json (file deleted — empty)
✓ Removed 77 symlinks from ./.claude/commands/
✓ Removed 100 files under ./compounding-marketing/
✓ Removed ./compounding-marketing/ (empty)
✓ Removed manifest
```

CLAUDE.md is byte-identical to its pre-install state.

### Example 2: Pre-existing CLAUDE.md with `.bak` backup

User chose "Overwrite (with .bak)" during install.

```
/cm-uninstall

Recorded: 100 files, 77 symlinks, 1 backup (CLAUDE.md.bak), 0 marker blocks

Proceed? [y/N] y

✓ Removed 77 symlinks
✓ Restored ./CLAUDE.md from ./CLAUDE.md.bak
✓ Removed ./CLAUDE.md.bak
✓ Removed 100 files under ./compounding-marketing/
✓ Removed manifest
```

## Related Skills

- **[`cm-setup`](./cm-setup.md)** — The forward operation. Run `/cm-setup` to install; run `/cm-uninstall` to roll back.
- **[`cm-context`](../skills/cm-context/SKILL.md)** — To remove only the product-marketing context doc but keep the plugin installed, edit/delete `.agents/product-marketing-context.md` directly. This command does not touch user-authored context.
