# /cm-uninstall — Reverse a Compounding Marketing install

Cleanly roll back a previous `/cm-setup` or `npx compounding-marketing` install using the install manifest. Restores `.bak` backups byte-identical, strips marker blocks from `CLAUDE.md` / `AGENTS.md`, removes only files the wizard created.

## What It Does

Loads `.compounding-marketing-install.json` and reverses every recorded change. Files the user authored remain untouched.

For global installs, the manifest lives at `~/.claude/.compounding-marketing-install.json`. For project installs, it lives in the project root.

## When To Use

- You installed via the wizard and want to remove every trace.
- You re-ran the wizard with a different scope/tool and want to undo the wrong one.
- You're moving the install to a different directory.
- You're cleaning up a CI/scratch environment.

## What Gets Reversed

For each entry in the manifest:

| Manifest field | Action |
|----------------|--------|
| `createdFiles[]` | Delete each path (deepest first so empty parents can be removed). |
| `createdSymlinks[]` | Remove each symlink. The target file is never touched. |
| `modifiedFiles[].backupPath` | Restore the `.bak` to its original path (byte-identical). Delete the `.bak`. |
| `appendedMarkers[]` | Open each instructions file (`CLAUDE.md` / `AGENTS.md`), remove the block between `<!-- COMPOUNDING-MARKETING-START -->` and `<!-- COMPOUNDING-MARKETING-END -->`. Other content preserved verbatim. |
| `installRoot`, `commandsDir`, `skillsLinkDir` | Walked bottom-up; empty directories are removed. Non-empty directories (e.g., if you added your own files inside) are left in place. |
| Manifest file itself | Deleted last. |

## Process

### Step 1: Locate the manifest

Search candidates in this order:
1. `~/.claude/.compounding-marketing-install.json` (global)
2. `./.compounding-marketing-install.json` (project, run from project root)
3. `./compounding-marketing/../.compounding-marketing-install.json` (project, run from a sibling dir)

If no manifest is found, print where you looked and exit non-zero. (Without a manifest, there's nothing to safely reverse.)

### Step 2: Confirm with the user

Show the manifest summary: version, scope, tool, timestamp, install root, file/symlink counts. Ask "Proceed with uninstall?" (default: No). Skipped with `--yes`.

### Step 3: Reverse changes in safe order

1. Strip marker blocks from instructions files.
2. Remove created symlinks.
3. Remove created files (deepest path first).
4. Restore `.bak` backups (overwrites the working file with the backup, then deletes the `.bak`).
5. Walk install dirs bottom-up; `rmdir` each empty directory.
6. Delete the manifest.

### Step 4: Verify and report

Print a summary: files removed, symlinks removed, backups restored, marker blocks stripped.

## Output Format

```
✓ Uninstall complete
  Removed: 100 files, 72 symlinks
  Restored: 1 backup
  Stripped marker blocks from: 1 file (CLAUDE.md)
  Removed manifest: ./.compounding-marketing-install.json
```

## Quality Bar

- [ ] No file the user created outside the manifest is touched.
- [ ] Every `.bak` backup is restored byte-identical (verify with `shasum`).
- [ ] Instructions files (`CLAUDE.md` / `AGENTS.md`) retain ALL user content outside the marker block.
- [ ] Empty parent directories of removed files are cleaned up.
- [ ] If the manifest is missing, do nothing destructive — print where to look and exit.
- [ ] After completion, re-running `--uninstall` is a no-op (manifest gone).

### Common Mistakes

1. **Removing the install root with `rm -rf` even when it has user files** — always walk bottom-up and only remove empty dirs.
2. **Forgetting to restore `.bak` files** — every entry in `modifiedFiles[]` must be restored, not just deleted.
3. **Stripping the wrong marker block** — match exactly `<!-- COMPOUNDING-MARKETING-START -->` and `<!-- COMPOUNDING-MARKETING-END -->`; do not regex-match anything else.
4. **Leaving orphaned symlinks** — if a symlink target was already deleted, the symlink itself still exists; `fs.unlinkSync` is the right call (not `fs.statSync`).
5. **Confirming destructive action by default** — `--yes` should be required to skip the confirmation prompt; interactive runs default to No.

## Examples

### Example 1: Project install rollback

User ran `npx compounding-marketing --yes --scope=project --tool=claude-code` an hour ago. They now want to remove it.

```
/cm-uninstall

✓ Loaded manifest from ./.compounding-marketing-install.json
  Installed: v1.2.0 (scope=project, tool=claude-code) on 2026-05-12T11:53:00Z
  Recorded: 100 files, 72 symlinks, 0 backups, 1 marker block

Proceed with uninstall? [y/N] y

✓ Stripped marker block from ./CLAUDE.md
✓ Removed 72 symlinks from ./.claude/commands/
✓ Removed 100 files under ./compounding-marketing/
✓ Removed ./compounding-marketing/ (empty)
✓ Removed manifest

Uninstall complete.
```

CLAUDE.md is now byte-identical to its pre-install state.

### Example 2: Pre-existing CLAUDE.md with `.bak` backup

User chose "Overwrite (with .bak backup)" during install. Their pre-install CLAUDE.md was preserved as CLAUDE.md.bak.

```
/cm-uninstall

✓ Loaded manifest from ./.compounding-marketing-install.json
  Recorded: 100 files, 72 symlinks, 1 backup (CLAUDE.md.bak), 0 marker blocks

Proceed? [y/N] y

✓ Removed 72 symlinks
✓ Restored ./CLAUDE.md from ./CLAUDE.md.bak (shasum match: a3f7...)
✓ Removed ./CLAUDE.md.bak
✓ Removed 100 files under ./compounding-marketing/
✓ Removed manifest

Uninstall complete.
```

## Related Skills

- **[`cm-setup`](./cm-setup.md)** — The forward operation. Run `cm-setup` to install; run this skill (`cm-uninstall`) to roll back.
- **[`cm-context`](../skills/cm-context/SKILL.md)** — If you want to remove only the product-marketing context doc but keep the plugin installed, edit/delete `.agents/product-marketing-context.md` directly. This command does not touch user-authored context unless the wizard created it.
