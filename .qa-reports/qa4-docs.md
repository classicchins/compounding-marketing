# QA4 — Documentation & Release Consistency for v1.6.0

**Branch:** `release/v1.6.0`
**Date:** 2026-05-12
**Reviewer:** Claude (read-only)

---

## Executive Summary

Release v1.6.0 is in **good shape** overall — the new install/uninstall flow, manifest, marker-wrapped writes, and per-tool target paths are all coherently described across README, AGENTS.md, and CHANGELOG. All 61 skills are present on disk and accounted for in CLAUDE.md's `### <skill>` index. All 16 workflow commands exist on disk and are listed in both README and AGENTS.md. The 12-category skill table sums to 61 in both README and AGENTS.md.

However, **`CLAUDE.md` is stale** — it was not regenerated for v1.6.0. It still claims **14 workflow commands** and still uses the legacy **`/cm:{name}`** syntax. This is a **P1 release blocker** because `CLAUDE.md` is the file that gets embedded into user projects by `bin/setup.js::buildInstructionsContent`, so the bug would propagate to every install.

A few additional **P2 issues**: CHANGELOG link list is missing 1.5.0/1.6.0 release links; `package.json` author email (`chins@supercontent.co`) disagrees with marketplace.json/plugin.json (`c@bigdeal.ventures`); the README "Installation" section (lines 642–665) is a legacy block that contradicts the new "Quick Start" section.

There are **no P0 issues** — install / uninstall correctness, safety claims, version, and skill catalog are all intact.

---

## Version Consistency Table

| File | Version reference | Match v1.6.0? |
|---|---|---|
| `package.json:3` | `"version": "1.6.0"` | ✓ |
| `.claude-plugin/plugin.json:3` | `"version": "1.6.0"` | ✓ |
| `.claude-plugin/marketplace.json:10` (`metadata.version`) | `"1.6.0"` | ✓ |
| `.claude-plugin/marketplace.json:16` (`plugins[0].version`) | `"1.6.0"` | ✓ |
| `README.md:7` | `**v1.6.0**` | ✓ |
| `AGENTS.md:3` | `(v1.6.0)` | ✓ |
| `CHANGELOG.md:8` | `## [1.6.0] - 2026-05-12` | ✓ |
| `bin/setup.js:28` | `const PKG_VERSION = require('../package.json').version` | ✓ (pulls from package.json — banner at line 50 renders `v${PKG_VERSION}`) |
| `bin/setup.js:3` (header comment) | `Compounding Marketing Setup Wizard (v1.6.0)` | ✓ |

**Result: PASS.** No version mismatches.

---

## Skill Count Consistency Table

| Location | Claim | Actual / Match? |
|---|---|---|
| `ls skills/ \| grep -v _ \| wc -l` | — | **61** (62 entries minus `_TEMPLATE.md`) |
| `README.md:5` | "61 skills" | ✓ |
| `README.md:7` | "All 61 skills" | ✓ |
| `README.md:31` | "61 marketing skills across 12 categories" | ✓ |
| `README.md:87` | "all 61 skills" | ✓ |
| `README.md:721` | "61 specialized skills … like hiring 61 consultants" | ✓ |
| README category table (lines 35–46) sum | 5+7+8+6+7+6+3+4+5+6+3+1 = **61** | ✓ |
| `AGENTS.md:7` | "61 marketing skills" | ✓ |
| `AGENTS.md:36` | "All 61 skills" | ✓ |
| `AGENTS.md:54` | "Skill Categories (61 total)" | ✓ |
| AGENTS.md per-category headers (lines 56–90) sum | 5+7+8+6+7+6+3+4+5+6+3+1 = **61** | ✓ |
| `CLAUDE.md:7` | "61 marketing skills" | ✓ |
| `CLAUDE.md:14` | "61 self-contained marketing skills" | ✓ |
| `CLAUDE.md:91` | `## Skills (61)` | ✓ |
| `CLAUDE.md` `### <skill>` entries (count) | **61** | ✓ |
| `.claude-plugin/plugin.json:27` | `"skills": 61` | ✓ |
| `package.json:3` description | "61 marketing skills" | ✓ |
| `.claude-plugin/marketplace.json:9, 17` | "61 marketing skills" | ✓ |

**Result: PASS.** All 61-counts are consistent and the diff of `ls skills/ vs CLAUDE.md ### headers` is empty (see "Skill Catalog Diff" below).

---

## Command Count Consistency Table

| Location | Claim | Actual / Match? |
|---|---|---|
| `ls commands/*.md \| wc -l` | — | **16** |
| `README.md:7` | "16 workflow commands total" | ✓ |
| `README.md:48` | "16 workflow commands" | ✓ |
| `README.md:87` | "16 workflow commands" | ✓ |
| README command list (lines 51–72) | 16 items: setup, uninstall, research, position, copy, launch, compound, social, email, sprint, retro, audit, standup, daily, eod, weekly | ✓ |
| `AGENTS.md:7` | "16 workflow commands" | ✓ |
| `AGENTS.md:102` | "Workflow Commands (16 total)" | ✓ |
| AGENTS.md command list (lines 107–128) | 16 items, matches README | ✓ |
| `.claude-plugin/plugin.json:28` | `"commands": 16` | ✓ |
| `bin/setup.js:51` banner | "16 workflows" | ✓ |
| `bin/setup.js:1042` `--info` output | "16 workflow commands" | ✓ |
| **`CLAUDE.md:7`** | **"14 workflow commands"** | ✗ **MISMATCH** |
| **`CLAUDE.md:15`** | **"14 workflow commands (cm-*.md files invoked via /cm:*)"** | ✗ **MISMATCH** |

**Result: PARTIAL PASS.** CLAUDE.md needs to be updated to 16.

### Commands list — disk vs README/AGENTS.md

```
On disk (16):  cm-audit cm-compound cm-copy cm-daily cm-email cm-eod cm-launch
               cm-position cm-research cm-retro cm-setup cm-social cm-sprint
               cm-standup cm-uninstall cm-weekly

README (16):   cm-setup cm-uninstall cm-research cm-position cm-copy cm-launch
               cm-compound cm-social cm-email cm-sprint cm-retro cm-audit
               cm-standup cm-daily cm-eod cm-weekly
```

**Result: PASS.** Sets are identical.

---

## Install Instruction Correctness

### Repo path verification

- `git remote -v` → `https://github.com/classicchins/compounding-marketing.git` ✓
- `package.json` repository → `git+https://github.com/classicchins/compounding-marketing.git` ✓
- README marketplace command (`README.md:83`): `/plugin marketplace add classicchins/compounding-marketing` → repo slug matches ✓
- AGENTS.md (`AGENTS.md:15`) uses same slug ✓

### `npx compounding-marketing` flag verification

`bin/setup.js:34-35` declares:
```js
const SUPPORTED_TOOLS = ['claude-code', 'claude-cowork', 'cursor', 'codex', 'chatgpt', 'zed', 'other'];
const SUPPORTED_SCOPES = ['global', 'project', 'custom'];
```

Documented flags in README (lines 116–122) and AGENTS.md (line 22):
- `--dry-run` ✓ (`bin/setup.js:99`)
- `--yes` / `-y` ✓ (`bin/setup.js:98`)
- `--uninstall` ✓ (`bin/setup.js:100`)
- `--tool=<value>` ✓ (`bin/setup.js:111-114`) — every documented value matches `SUPPORTED_TOOLS`
- `--scope=<value>` ✓ (`bin/setup.js:104-107`) — every documented value matches `SUPPORTED_SCOPES`
- `--target=<path>` ✓ (`bin/setup.js:108-110`)
- `--version` / `--info` / `--help` — all implemented and documented in `--help` text

**Result: PASS.**

### Per-tool target table verification (README:127–135)

| Tool | README claim | `getInstallTargets()` actual (bin/setup.js:281–377) | Match? |
|---|---|---|---|
| Claude Code (project) | `./compounding-marketing/` + symlinks into `./.claude/commands/cm-*.md` and `./.claude/skills/<skill>/`. MCP: `.mcp.json` | `installRoot = cwd/compounding-marketing`; `commandsDir = cwd/.claude/commands`; `skillsLinkDir = cwd/.claude/skills`; `mcpConfigFile = cwd/.mcp.json` (format `json`); style `claude-symlinks` | ✓ |
| Claude Code (global) | `~/.claude/plugins/compounding-marketing/` + symlinks into `~/.claude/{commands,skills}/`. MCP: prints `claude mcp add --scope user …` | `installRoot = ~/.claude/plugins/compounding-marketing`; commandsDir/skillsLinkDir under `~/.claude/`; `mcpConfigFile = null` (printClaudeCodeMcpHint at line 841–854 prints `claude mcp add --transport stdio --scope user …`) | ✓ |
| Cursor | `./compounding-marketing/` + `./.cursor/rules/cm-*.mdc` with `description`/`globs`/`alwaysApply`. MCP: `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global) | `commandsDir = cwd/.cursor/rules`, registrationStyle `cursor-mdc`, writeMdc emits frontmatter exactly as documented (line 638–642). MCP scope branches at line 328–330 match. | ✓ |
| Codex (project) | `./compounding-marketing/` + symlinks under `./.agents/skills/<skill>/`. AGENTS.md is project-scoped. MCP: `.codex/config.toml` | `skillsLinkDir = cwd/.agents/skills`; `mcpConfigFile = cwd/.codex/config.toml` (format `toml`); `instructionsFile = cwd/AGENTS.md` | ✓ |
| Codex (global) | `~/.claude/plugins/compounding-marketing/` + skill dirs under `~/.agents/skills/<skill>/` | `installRoot = ~/.claude/plugins/compounding-marketing` (from generic global branch, lines 284–285); `skillsLinkDir = ~/.agents/skills`; `mcpConfigFile = ~/.codex/config.toml`. AGENTS.md still `cwd/AGENTS.md` (project-scoped). | ✓ |
| Zed | `./compounding-marketing/` only; reads `AGENTS.md` from project root | `commandsDir = null`, `skillsLinkDir = null`, `instructionsFile = cwd/AGENTS.md`, `mcpConfigFile = null`, registrationStyle `none` | ✓ |
| ChatGPT | `./compounding-marketing/` + printed copy-paste instructions | `instructionsFile = cwd/AGENTS.md`, `printChatGPTInstructions` called at line 1230 | ✓ |

**Result: PASS.** Every documented row matches `getInstallTargets()` behavior.

### Minor doc concern

`README.md:642–665` ("Installation" subsection — Claude Code / ChatGPT / Cursor / Windsurf legacy block) is **legacy / pre-v1.6.0** content that contradicts the new "Quick Start" section above it. It says "Clone or download this repository" and "Claude Code automatically reads `CLAUDE.md`" — neither is the recommended path now. Not a blocker, but a polish item (P2).

---

## Safety-Claim Verification Findings

Claim (README:9, CHANGELOG line 9-ish, README:7): *"Installation never modifies your files without confirmation. No silent overwrites. No postinstall hooks."*

### Postinstall hook absent?

`package.json:40-44` scripts block:
```json
"scripts": {
  "setup": "node bin/setup.js",
  "validate": "node scripts/validate-skills.js",
  "build": "node scripts/validate-skills.js && node scripts/generate-claude-md.js"
}
```
No `postinstall` hook. ✓

### `--silent` mode removed?

`grep "silent"` in bin/setup.js returns no matches. ✓ (CHANGELOG line 74 confirms removal.)

### `fs.cpSync(..., { force: true })` removed?

Searched all `fs.cpSync` calls in `bin/setup.js`:
- Line 218: `fs.cpSync(absoluteTarget, linkPath, { recursive: true })` — fallback inside symlink failure path, not `force: true`. Acceptable.
- Line 246: `fs.cpSync(filePath, bak, { recursive: true })` — only used for backup creation. Acceptable.

No `force: true` usage anywhere. ✓

### All file writes go through `fsx` wrapper or collision-handled?

`grep -nE "fs\.writeFileSync|fs\.appendFileSync|fs\.cpSync"` in `bin/setup.js`:

| Line | Call | Context | Safe? |
|---|---|---|---|
| 188 | `fs.writeFileSync` | inside `fsx.write` wrapper | ✓ |
| 202 | `fs.appendFileSync` | inside `fsx.append` wrapper | ✓ |
| 218 | `fs.cpSync` | symlink EPERM fallback (`fsx.symlink`) | ✓ |
| 246 | `fs.cpSync` | inside `fsx.backup`, only after the file exists | ✓ |
| 443 | `fs.writeFileSync` | `persistManifest` — writes the install manifest itself (gated by `flags.dryRun`) | ✓ |
| 491 | `fs.writeFileSync` | `applyInstructionsBlock` marker-replace path. Only runs when both `MARKER_START` and `MARKER_END` already exist in the file → idempotent replace, no user content lost. | ✓ |
| 509 | `fs.writeFileSync` | `applyInstructionsBlock` overwrite branch — **gated** by `resolveCollision` decision === 'overwrite' and `fsx.backup(instructionsFile)` is called immediately above (line 504). | ✓ |
| 791 | `fs.writeFileSync` | `writeMcpConfig` JSON merge path. Only adds missing servers; existing entries untouched. | ✓ |
| 909 | `fs.writeFileSync` | uninstall — strips marker blocks from instructions file (under explicit `--uninstall` confirm) | ✓ |
| 932 | `fs.writeFileSync` | uninstall — JSON MCP entry removal | ✓ |
| 946 | `fs.writeFileSync` | uninstall — TOML MCP entry removal | ✓ |

Every write is either through `fsx`, gated by `resolveCollision` with a `.bak` backup, or part of the uninstall reversal flow. **No silent overwrites.** ✓

**Result: PASS.** All safety claims verified against code.

---

## CHANGELOG Completeness Review

Checked `## [1.6.0]` entry (lines 8–84):

### Added — checklist

| Item required | Present? |
|---|---|
| `marketplace.json` | ✓ line 13 |
| `/cm-setup` command | ✓ line 15 |
| `/cm-uninstall` command | ✓ line 16 |
| `--dry-run` flag | ✓ line 20 |
| `--uninstall` flag | ✓ line 21 |
| `--yes` / `-y` | ✓ line 22 |
| `--scope` | ✓ line 23 |
| `--target` | ✓ line 24 |
| `--tool` | ✓ line 25 |
| Per-tool target paths | ✓ lines 28–32 |
| MCP config writing | ✓ lines 34–40 |
| Install manifest | ✓ lines 42–45 |
| `_TEMPLATE.md` | ✓ line 48 |
| `validate-skills.js` | ✓ line 49 |
| All 61 skill expansions | ✓ lines 51–60 |

### Changed — checklist

| Item | Present? |
|---|---|
| Collision handling (merge/overwrite-w-bak/skip) | ✓ line 64 |
| Marker-wrapped CLAUDE/AGENTS edits | ✓ line 66 |
| Gated symlink cleanup | ✓ line 65 |
| README install rewrite | ✓ line 68 |

### Removed — checklist

| Item | Present? |
|---|---|
| Postinstall hook | ✓ line 73 |
| `--silent` | ✓ line 74 |

### Fixed — checklist

| Item | Present? |
|---|---|
| Silent overwrite (`CLAUDE.md`/`AGENTS.md`) | ✓ line 78 |
| `fs.cpSync({force:true})` replaced | ✓ line 79 |
| Manifest preservation across re-runs | ✓ line 80 |
| Global cwd pollution | ✓ line 81 |
| Cursor `.md` vs `.mdc` | ✓ line 82 |
| Codex `~/.codex` vs `~/.agents` | ✓ line 83 |
| Zed `.zed/` removal | ✓ line 84 |

### Gap

**CHANGELOG link footer (lines 277–278) is missing 1.5.0 and 1.6.0 entries.** Only `[1.1.0]` and `[1.0.0]` link rows are present. Markdown reference-style `[1.6.0]` and `[1.5.0]` links in the body have no target.

**Result: PASS with one P2 nit** (missing release links).

---

## Cross-Doc Consistency Findings

### `/cm-{name}` vs `/cm:{name}` syntax

`grep "/cm:" README.md AGENTS.md CLAUDE.md`:

| File | Occurrences | Notes |
|---|---|---|
| README.md | 0 | ✓ clean |
| AGENTS.md | 0 | ✓ clean |
| **CLAUDE.md** | **3** | line 15: `(cm-*.md files invoked via /cm:*)`; line 45: `/cm:{name}` and `(e.g., /cm:research, /cm:position, /cm:copy)`; line 86: `/cm:compound workflow` |

CHANGELOG has `/cm:` references in the 1.5.0 and 1.0.0 sections (lines 91-93, 246-250), which are **historical and correct** for those versions — not a bug.

### "auto-loaded from CLAUDE.md" / postinstall references

| File | Found? |
|---|---|
| README, AGENTS, CHANGELOG | No legacy claims |
| AGENTS.md:144 | "Reads `CLAUDE.md` automatically." — this is accurate (Claude Code reads CLAUDE.md automatically when present; it's a Claude Code behavior, not a plugin behavior). Acceptable. |
| README.md:648 | "Claude Code automatically reads `CLAUDE.md`" — same as above. Acceptable but inside the legacy "Installation" subsection (see P2 below). |

### Repository URL `classicchins/compounding-marketing`

All four sources agree: README, AGENTS, package.json, plugin.json, marketplace.json, git remote. ✓

### Author email

| File | Email |
|---|---|
| `package.json:16` | `chins@supercontent.co` |
| `.claude-plugin/plugin.json:7` | `c@bigdeal.ventures` |
| `.claude-plugin/marketplace.json:5,20` | `c@bigdeal.ventures` |

**Inconsistency — P2.**

---

## Skill Catalog Diff — `ls skills/` vs `CLAUDE.md ### headers`

```
$ diff /tmp/dir-skills.txt /tmp/claude-skills.txt
$ wc -l: 61 / 61
```

**Empty diff.** All 61 skill folders match the 61 `### <skill-name>` headers in CLAUDE.md. ✓

(Both files exclude `_TEMPLATE.md` correctly — directory listing was filtered via `grep -v _`, and CLAUDE.md is generated by `scripts/generate-claude-md.js` which also skips template entries.)

---

## Commands List Diff — README/AGENTS vs `ls commands/`

```
On disk (sorted): cm-audit, cm-compound, cm-copy, cm-daily, cm-email, cm-eod,
                  cm-launch, cm-position, cm-research, cm-retro, cm-setup,
                  cm-social, cm-sprint, cm-standup, cm-uninstall, cm-weekly

README (sorted):  cm-audit, cm-compound, cm-copy, cm-daily, cm-email, cm-eod,
                  cm-launch, cm-position, cm-research, cm-retro, cm-setup,
                  cm-social, cm-sprint, cm-standup, cm-uninstall, cm-weekly

AGENTS.md(sort):  cm-audit, cm-compound, cm-copy, cm-daily, cm-email, cm-eod,
                  cm-launch, cm-position, cm-research, cm-retro, cm-setup,
                  cm-social, cm-sprint, cm-standup, cm-uninstall, cm-weekly
```

**All three sets identical.** ✓

---

## Issue Lists

### P0 — Release Blockers

**None.**

### P1 — Must Fix Before Release

#### P1-1 — CLAUDE.md says "14 workflow commands" (should be 16)

This is a release blocker because `bin/setup.js::buildInstructionsContent` (line 537) reads `CLAUDE.md` and embeds it (with path-prefix substitution) into every Claude-Code project's `CLAUDE.md` inside the marker block. The mistake will propagate to every install.

- **File:** `CLAUDE.md:7`
  Current: `Compounding Marketing is a Claude Code / ChatGPT / Cursor plugin providing 61 marketing skills and 14 workflow commands for SaaS marketing.`
  Fix: replace `14 workflow commands` → `16 workflow commands`.

- **File:** `CLAUDE.md:15` (inside the repo-structure code fence)
  Current: `commands/         # 14 workflow commands (cm-*.md files invoked via /cm:*)`
  Fix: `commands/         # 16 workflow commands (cm-*.md files invoked via /cm-*)`

#### P1-2 — CLAUDE.md uses legacy `/cm:{name}` syntax

Same propagation concern as P1-1.

- **File:** `CLAUDE.md:15`
  Fix `/cm:*` → `/cm-*` (part of the P1-1 line above).

- **File:** `CLAUDE.md:45`
  Current: `Commands in `commands/cm-*.md` orchestrate multiple skills in sequence. They are invoked as `/cm:{name}` (e.g., `/cm:research`, `/cm:position`, `/cm:copy`).`
  Fix: `…invoked as `/cm-{name}` (e.g., `/cm-research`, `/cm-position`, `/cm-copy`).`

- **File:** `CLAUDE.md:86`
  Current: `Learnings are stored in `.agents/learnings/{category}.md` by the `/cm:compound` workflow`
  Fix: `…by the `/cm-compound` workflow`

#### P1-3 — CLAUDE.md's workflow categorization missing install/lifecycle commands

- **File:** `CLAUDE.md:47-49`
  Current:
  ```
  **Project workflows**: research, position, copy, launch, compound, social, email
  **Planning & review**: sprint, retro, audit
  **Daily operations**: standup, daily, eod, weekly
  ```
  These 14 commands match the wrong total. Add a fourth bullet so the math reads 16:
  ```
  **Install / Lifecycle**: setup, uninstall
  **Project workflows**: research, position, copy, launch, compound, social, email
  **Planning & review**: sprint, retro, audit
  **Daily operations**: standup, daily, eod, weekly
  ```

### P2 — Polish

#### P2-1 — Author email mismatch

- `package.json:16` author email is `chins@supercontent.co`; both `.claude-plugin/plugin.json:7` and `.claude-plugin/marketplace.json:5,20` use `c@bigdeal.ventures`. The npm registry will publish with the package.json value. Pick one canonical email.

  Suggested fix: `package.json:16`
  Current: `"author": "Chinmaya Shankar <chins@supercontent.co>",`
  Fix: `"author": "Chinmaya Shankar <c@bigdeal.ventures>",`

#### P2-2 — CHANGELOG missing reference-style link targets for 1.5.0 and 1.6.0

- **File:** `CHANGELOG.md:277-278`
  Current:
  ```
  [1.1.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.1.0
  [1.0.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.0.0
  ```
  Fix — add (at top of footer, newest first per Keep-a-Changelog convention):
  ```
  [1.6.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.6.0
  [1.5.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.5.0
  [1.1.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.1.0
  [1.0.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.0.0
  ```

#### P2-3 — Legacy "Installation" subsection in README contradicts "Quick Start"

- **File:** `README.md:642-665`
  This block (headers: "### Claude Code", "### ChatGPT Custom GPT", "### Cursor", "### Windsurf / OpenClaw") tells the user to *"Clone or download this repository"* and says *"Skills are available via natural language or `/skill-name`"* — both inconsistent with the marketplace-first/npx-wizard flow described in lines 76–135.

  Suggested fix: delete the section entirely (or rewrite it to mirror the per-tool table at line 129). The Quick Start + Per-tool targets already cover all six tools.

#### P2-4 — README banner line 5 says "Claude Code + ChatGPT plugin" but plugin supports 6+ tools

- **File:** `README.md:5`
  Current: `A Claude Code + ChatGPT plugin with 61 skills for world-class SaaS marketing.`
  Suggested: `A Claude Code / Cursor / Codex / ChatGPT / Zed plugin with 61 skills for world-class SaaS marketing.` (or simply: `A plugin for Claude Code, Cursor, Codex, ChatGPT, and Zed with 61 skills…`)

  This is consistency-with-AGENTS.md polish; not a release blocker but the line directly under the title should match the AGENTS.md compatibility list (line 3).

#### P2-5 — README "Workflow Commands" list ordering does not match CLAUDE.md categorization

After P1-3 is applied, README and CLAUDE.md will agree on a 4-bucket categorization. No additional change needed here, but worth a final visual diff.

---

## Suggested Fix Summary (copy-paste blocks)

### Fix 1 — `CLAUDE.md` (P1-1, P1-2, P1-3 combined)

Replace lines 7–9:
```markdown
Compounding Marketing is a Claude Code / ChatGPT / Cursor plugin providing 61 marketing skills and 16 workflow commands for SaaS marketing. It is **not a traditional codebase** — it's a structured knowledge system where skills are SKILL.md files and workflows are command `.md` files.
```

Replace line 15 inside the code fence:
```
commands/         # 16 workflow commands (cm-*.md files invoked via /cm-*)
```

Replace line 45:
```
Commands in `commands/cm-*.md` orchestrate multiple skills in sequence. They are invoked as `/cm-{name}` (e.g., `/cm-research`, `/cm-position`, `/cm-copy`).
```

Replace lines 47–49:
```
**Install / Lifecycle**: setup, uninstall
**Project workflows**: research, position, copy, launch, compound, social, email
**Planning & review**: sprint, retro, audit
**Daily operations**: standup, daily, eod, weekly
```

Replace line 86:
```
- Learnings are stored in `.agents/learnings/{category}.md` by the `/cm-compound` workflow
```

### Fix 2 — `package.json` (P2-1)

Replace line 16:
```json
  "author": "Chinmaya Shankar <c@bigdeal.ventures>",
```

### Fix 3 — `CHANGELOG.md` (P2-2)

Insert at line 277 (before existing `[1.1.0]`):
```
[1.6.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.6.0
[1.5.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.5.0
```

### Fix 4 — `README.md` (P2-3, optional but recommended)

Delete lines 642–665 (the legacy "## Installation" section through "Windsurf / OpenClaw"). The "Quick Start" section already covers every tool with current, tested commands.

### Fix 5 — `README.md` (P2-4, polish)

Replace line 5:
```markdown
A plugin for Claude Code, Cursor, Codex, ChatGPT, and Zed with 61 skills for world-class SaaS marketing. From positioning to launch, from copy to CRO — everything you need to build marketing that compounds.
```

---

## Sign-off

- Version numbers: ✓ consistent
- Skill counts: ✓ consistent (61 on disk, 61 in every doc)
- Command counts: ✓ consistent on disk + README + AGENTS + plugin.json; **✗ wrong in CLAUDE.md**
- Install instructions: ✓ accurate (every flag, every per-tool target verified against `getInstallTargets()`)
- Safety claims: ✓ verified end-to-end in `bin/setup.js`
- CHANGELOG: ✓ comprehensive (missing only release-link footer entries)
- Cross-doc consistency: ✗ CLAUDE.md uses legacy `/cm:` syntax in 3 places + wrong command count in 2
- Skill catalog: ✓ identical
- Commands list: ✓ identical across disk / README / AGENTS

**Recommendation: Fix P1-1, P1-2, P1-3 before tagging v1.6.0.** P2 items can ship in v1.6.1 if time pressure is acute, but P2-1 (author email) is a one-line, low-risk fix worth bundling.
