# /cm-setup — Per-Project Bootstrap

Bootstrap Compounding Marketing into the current project. Run this **after** installing the plugin via `/plugin install compounding-marketing` (Claude Code marketplace) — this command is the safe, opt-in equivalent of the `npx compounding-marketing` wizard but runs entirely inside Claude Code.

## What It Does

Walks the user through four decisions, then writes only what they approve:

1. **Install scope** — global (`~/.claude/plugins/compounding-marketing/`) vs project (`<cwd>/compounding-marketing/`) vs custom path.
2. **Existing CLAUDE.md handling** — merge with idempotent markers / overwrite (with `.bak` backup) / skip.
3. **Optional `.agents/product-marketing-context.md` skeleton** — create the foundational context doc that every other skill depends on.
4. **Optional `.gitignore` entry** — add `compounding-marketing/` to `.gitignore` if the user does not plan to customize skills.

## Why This Exists

The plugin distributes via the Claude Code marketplace, which never modifies user files on install. This command is the explicit, user-driven step that sets up project-specific scaffolding. It mirrors the safety contract of the npx wizard: nothing is written without confirmation, and a manifest at `.compounding-marketing-install.json` tracks every change so the user can roll back later via `/cm-uninstall` (or `npx compounding-marketing --uninstall`).

## Process

### Step 1: Confirm working directory and detect existing state

Detect:
- Is the current directory a project (presence of `package.json`, `.git`, `Cargo.toml`, `Gemfile`, `pyproject.toml`, `go.mod`, etc.)?
- Does `~/.claude/` exist (suggests Claude Code is installed)?
- Does `CLAUDE.md` already exist at the project root?
- Does `.agents/product-marketing-context.md` already exist?
- Does a prior `.compounding-marketing-install.json` manifest exist?

If a manifest exists, ask the user whether they want to **re-run setup** (idempotent update) or **uninstall first**.

### Step 2: Ask the user where to install

Present three options. Recommend **project** if cwd is a project directory, otherwise **global**.

```
[1] Project — install into ./compounding-marketing/ (this directory only) [default if in a project]
[2] Global  — install into ~/.claude/plugins/compounding-marketing/ (available everywhere)
[3] Custom  — install into a path you specify
```

If global, additionally symlink commands into `~/.claude/commands/` and skills into `~/.claude/skills/`.

### Step 3: Ask about CLAUDE.md handling

Only prompt if `CLAUDE.md` exists **and** does not already contain a `<!-- COMPOUNDING-MARKETING-START -->` marker block.

```
[1] Merge with idempotent markers [Recommended] — appends a clearly-marked plugin block; future re-runs replace just that block.
[2] Overwrite (with .bak backup)               — replaces the file; prior content saved as CLAUDE.md.bak.
[3] Skip                                        — leaves CLAUDE.md untouched. The plugin still works but skill discovery is limited.
```

If the file already contains the marker block, just **update** the block in place (no prompt — it's idempotent).

### Step 4: Optionally write `.agents/product-marketing-context.md` skeleton

If `.agents/product-marketing-context.md` does not exist, ask: "Create the foundational product-marketing context doc now?" Default: yes.

If yes, write the skeleton from the `cm-context` skill template (do not run the full skill — just lay down the structured Markdown so the user can fill it in).

### Step 5: Optionally add `compounding-marketing/` to `.gitignore`

Ask only if scope is project. Default: yes (most users do not customize skills and want the plugin dir gitignored).

### Step 6: Persist the install manifest

Write `.compounding-marketing-install.json` recording:
- `version`, `timestamp`, `scope`, `tool: "claude-code"`
- `installRoot`, `commandsDir`, `skillsLinkDir`, `instructionsFile`
- `createdFiles[]`, `createdSymlinks[]`, `modifiedFiles[]` (each with `backupPath`), `appendedMarkers[]`

For global installs: place the manifest at `~/.claude/.compounding-marketing-install.json`.

### Step 7: Verify and report

- Confirm all symlinks resolve (no broken targets).
- Confirm CLAUDE.md contains the marker block.
- Print a one-line "next step" pointing the user at `/cm-context` if they did not already create the context doc.

## Output Format

```
✓ Compounding Marketing installed
  Scope: project
  Install root: ./compounding-marketing/
  Instructions file: ./CLAUDE.md (merged, marker block added)
  Slash commands registered: 11 workflow + 61 skills = 72 total
  Manifest: ./.compounding-marketing-install.json

Next step: type /cm-context to create your product-marketing context doc.
Roll back: /cm-uninstall or `npx compounding-marketing --uninstall`
```

## Quality Bar

- [ ] No file is written or modified without user confirmation (or an idempotent marker-block update).
- [ ] Existing CLAUDE.md content is preserved (either via marker-block append or via `.bak` backup).
- [ ] Manifest records every write, symlink, modification, and marker-block append.
- [ ] Re-running this command does NOT duplicate marker blocks or symlinks.
- [ ] Every reported success is verified (e.g., `fs.statSync` follows symlinks; broken links are flagged).
- [ ] On any failure, partial state is documented so the user can recover.

### Common Mistakes

1. **Overwriting CLAUDE.md without prompting** — the cardinal sin. Always check for existing content and prompt for merge/overwrite/skip. Even with `--yes`, never overwrite without first creating a `.bak`.
2. **Duplicating marker blocks on re-run** — happens when the marker-presence check is skipped. Always search for `<!-- COMPOUNDING-MARKETING-START -->` before appending.
3. **Silently deleting user-customized symlinks** — the `cm-*.md` symlink cleanup must prompt. Users may have edited a symlink target.
4. **Manifest path collisions** — if global and project installs both write `~/.claude/.compounding-marketing-install.json`, they clobber each other. Per-scope path resolution prevents this.
5. **Not writing the manifest atomically** — if the wizard crashes mid-install with no manifest, there is no rollback path. Write the manifest as the LAST step, but track every action in memory before then.

## Examples

### Example 1: Fresh project, no existing CLAUDE.md

User invokes `/cm-setup` in a Next.js repo with no `CLAUDE.md`.

```
[1] Project (./compounding-marketing/) [default]  ← user picks 1
CLAUDE.md does not exist — creating with full skill catalog.
.agents/product-marketing-context.md does not exist — create skeleton? [Y/n] y
Add compounding-marketing/ to .gitignore? [Y/n] y

✓ Setup complete
  Files created: 4 (CLAUDE.md, .gitignore, .agents/product-marketing-context.md, .compounding-marketing-install.json)
  Symlinks created: 72
```

### Example 2: Project already has a CLAUDE.md from another tool

User invokes `/cm-setup` in a repo where `CLAUDE.md` already contains custom instructions for their team.

```
[1] Project (./compounding-marketing/) [default]  ← user picks 1
CLAUDE.md exists with custom content (no plugin markers found).
How should I handle it?
  [1] Merge with markers [Recommended]  ← user picks 1
  [2] Overwrite (with .bak)
  [3] Skip
✓ Appended plugin block to CLAUDE.md (marker-wrapped)
```

User's existing content is preserved verbatim above the marker block. Future re-runs replace only the block between markers.

## Related Skills

- **[`cm-context`](../skills/cm-context/SKILL.md)** — Use *immediately after* `/cm-setup` to create the foundational `.agents/product-marketing-context.md` doc that every other skill depends on.
- **[`cm-uninstall`](../commands/cm-uninstall.md)** — Roll back this install using the manifest. Restores `.bak` backups and strips the marker block.
- **[`positioning`](../skills/positioning/SKILL.md)** — Run *after* `cm-context` to define the product's market position; many other skills depend on positioning being defined.
