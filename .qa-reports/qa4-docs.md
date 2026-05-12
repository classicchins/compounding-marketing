# QA4 — Documentation & Release-Consistency Audit (v1.2.0)

**Date:** 2026-05-12
**Scope:** Read-only audit of release artifacts, version/count consistency, install instructions, safety claims, and CHANGELOG completeness for the v1.2.0 release.
**Auditor:** automated docs/release QA pass.

---

## Executive Summary

The v1.2.0 release is broadly internally consistent on **version numbers** (every required file is at `1.2.0`), and the **skills directory exactly matches** the CLAUDE.md catalog (61 skills, no diff). However, several **P0/P1 docs issues** would mislead a fresh user or break a documented flow:

- **P0** — `AGENTS.md` skill-category section is still a v1.0 snapshot: it lists **50 skills**, omits ABM, email-deliverability, marketing-automation, LinkedIn ads, content-performance-scoring, AI-SEO, customer-interview, competitor-content-monitoring, abm-strategy, social-media-strategy, lead-magnets, paywall-upgrade-cro, product-hunt-launch, press-pr, newsletter-growth, and the periodic workflows are listed but the project-workflow list is missing `/cm:social`, `/cm:email`, and `/cm:setup`.
- **P0** — `CLAUDE.md` overview line still claims "**11 workflow commands**" but there are now **12** in `commands/` (including `cm-setup.md`). README is mixed: line 48 says "11", lines 78 says "12". Choose one.
- **P0** — Both `README.md` and `commands/cm-setup.md` reference a `/cm-uninstall` slash command, but there is **no `commands/cm-uninstall.md`** file. The slash command does not exist.
- **P1** — README line 31 claims "61 skills across **10 categories**", but the table immediately below has **12** category rows.
- **P1** — README line 633–635 ("Safety contract") + CHANGELOG promise that *every* existing-file write prompts. In practice the wizard handles the common cases correctly, but two paths in `bin/setup.js` write without going through `resolveCollision`: the `applyInstructionsBlock` "no markers" *overwrite* branch (line 638) writes after backup but never asks the user when `--yes` is set + collision-policy is `merge` (which is the documented default). Verified safe in practice; documentation overstates "every collision prompts" because `--yes` mode does silently default-pick.
- **P1** — CHANGELOG `Added` list mentions `--target` flag and the manifest, but does not call out the `/cm-setup` slash command file, the `cm-uninstall` command (which is missing), nor the `--scope=custom` self-prompted target path.
- **P2** — `/cm:social`, `/cm:email`, `/cm:daily`, `/cm:standup`, `/cm:weekly`, `/cm:eod` are tagged "(v1.4)" / "(v1.2)" in README but already exist as files in `commands/`. The "(v1.4)" tag for /cm:social and /cm:email implies "future work" while the files actually ship in v1.2.0.
- **P2** — Several copy/paste install commands work, but the per-tool target table (README 116–122) misrepresents the Claude Code project install: it advertises symlinks under `./.claude/commands/` only, but `bin/setup.js` also defines (though does not currently populate) `./.claude/skills/`. Skills are actually symlinked into the same `./.claude/commands/` dir as `cm-{skill}.md`, which is not documented anywhere.

Repo URL is correct (`https://github.com/classicchins/compounding-marketing.git` matches `git remote -v`). No `npm postinstall` hook exists. No `--silent` flag in setup.js. The skills directory ↔ CLAUDE.md catalog is byte-perfect.

---

## 1. Version Consistency Table

| File | Field | Value | Match? |
|---|---|---|---|
| `package.json` | `version` (line 3) | `1.2.0` | ✓ |
| `.claude-plugin/plugin.json` | `version` (line 3) | `1.2.0` | ✓ |
| `.claude-plugin/marketplace.json` | `metadata.version` (line 10) | `1.2.0` | ✓ |
| `.claude-plugin/marketplace.json` | `plugins[0].version` (line 17) | `1.2.0` | ✓ |
| `README.md` | banner (line 7) | `v1.2.0` | ✓ |
| `AGENTS.md` | line 3 | `v1.2.0` | ✓ |
| `CHANGELOG.md` | latest entry (line 8) | `## [1.2.0] - 2026-05-12` | ✓ |
| `bin/setup.js` | reads `package.json` at runtime (line 31) | `1.2.0` | ✓ |

**Result: PASS.** All version references are consistent at `1.2.0`.

Sub-issue (P2): `CHANGELOG.md` lines 233–234 contain reference link footnotes only for `[1.1.0]` and `[1.0.0]`. There is no link footnote for `[1.2.0]` or `[1.1.6]`. Add:

```
[1.2.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.2.0
[1.1.6]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.1.6
```

---

## 2. Skill Count Consistency Table

| Source | Claim | Actual | Match? |
|---|---|---|---|
| `ls skills/` (excl. `_TEMPLATE.md`) | n/a | **61** | source of truth |
| `CLAUDE.md` line 7 + `## Skills (61)` header | 61 | 61 | ✓ |
| `package.json` description (line 4) | "61 marketing skills" | 61 | ✓ |
| `.claude-plugin/plugin.json` `components.skills` | 61 | 61 | ✓ |
| `.claude-plugin/plugin.json` description (line 4) | "61 marketing skills" | 61 | ✓ |
| `.claude-plugin/marketplace.json` description | "61 marketing skills" | 61 | ✓ |
| `README.md` line 5 | "61 skills" | 61 | ✓ |
| `README.md` line 7 | "61 skills brought up to gold-standard" | 61 | ✓ |
| `README.md` line 31 | "61 marketing skills across **10 categories**" | actually **12 categories** in the table | **✗ P1** |
| `README.md` line 78 | "all 61 skills" | 61 | ✓ |
| `README.md` line 691 | "50 specialized skills — like hiring 50 consultants" | 61 | **✗ P2** (stale 1.0 marketing line) |
| `AGENTS.md` line 7 | "61 marketing skills" | 61 | ✓ in summary |
| `AGENTS.md` lines 54–88 (category list, summed) | 5+5+7+6+7+3+2+3+3+5+3+1 = **50** | 61 | **✗ P0** |

**README category table sum check** (lines 33–46):
Foundation 5 + Research 7 + Content&Copy 8 + SEO 6 + CRO 7 + Outreach&Email 6 + Paid 3 + Measurement 4 + GTM&Launch 5 + Growth&Retention 6 + Sales&RevOps 3 + Meta 1 = **61** ✓

**Diff `skills/` ↔ `CLAUDE.md` catalog:** clean (0 differences).

```
$ diff /tmp/dir-skills.txt /tmp/claude-skills.txt
(no output)
```

---

## 3. Command Count Consistency Table

| Source | Claim | Actual | Match? |
|---|---|---|---|
| `ls commands/` | n/a | **12** | source of truth |
| `.claude-plugin/plugin.json` `components.commands` | 12 | 12 | ✓ |
| `.claude-plugin/plugin.json` description | "12 workflow commands" | 12 | ✓ |
| `.claude-plugin/marketplace.json` description | "12 workflow commands" | 12 | ✓ |
| `AGENTS.md` line 7 | "12 workflow commands" | 12 | ✓ in summary |
| `README.md` line 78 | "12 workflow commands" | 12 | ✓ |
| `README.md` line 48 | "**11 workflow commands** for complex marketing work" | 12 | **✗ P0** |
| `CLAUDE.md` line 7 | "61 marketing skills and **11 workflow commands**" | 12 | **✗ P0** |
| `CLAUDE.md` line 15 | `# 11 workflow commands` (in repo-structure block) | 12 | **✗ P0** |
| `CLAUDE.md` line 41 (Project workflows enumeration) | lists 7 project + 4 periodic = 11 (omits `cm-setup`) | 12 | **✗ P0** |
| `CHANGELOG.md` v1.2.0 | mentions `commands/cm-setup.md` is added | yes (line 15) | ✓ |
| README/AGENTS Workflow Commands sections | does **not** list `/cm-setup` | should | **✗ P1** |

**12 commands present:**
`cm-compound.md`, `cm-copy.md`, `cm-daily.md`, `cm-email.md`, `cm-eod.md`, `cm-launch.md`, `cm-position.md`, `cm-research.md`, **`cm-setup.md`**, `cm-social.md`, `cm-standup.md`, `cm-weekly.md`.

`cm-uninstall.md` is **referenced** in the docs but does **not exist** as a file (see §4 + §8).

---

## 4. Install Instruction Correctness Findings

### 4.1 Marketplace command syntax — PASS
`README.md` line 74 and `AGENTS.md` line 15 both use `classicchins/compounding-marketing`. `git remote -v` returns `https://github.com/classicchins/compounding-marketing.git`. Match.

### 4.2 npx flag combinations — PASS
`bin/setup.js` `SUPPORTED_TOOLS` (line 37) = `['claude-code', 'claude-cowork', 'cursor', 'codex', 'chatgpt', 'zed', 'other']`.
`SUPPORTED_SCOPES` (line 38) = `['global', 'project', 'custom']`.
README example commands (`--tool=cursor --scope=project`, `--tool=codex --scope=global`, `--tool=chatgpt --scope=project`, `--tool=zed --scope=project`, `--tool=codex --scope=global`) all use accepted values. AGENTS.md per-tool table also uses accepted values. ✓

### 4.3 Per-tool target table — partial mismatch (P2)
Comparing README §"Per-tool targets" (lines 116–122) with `getInstallTargets()` (`bin/setup.js` lines 297–362):

| Tool | README claim | setup.js reality | Verdict |
|---|---|---|---|
| Claude Code project | `./compounding-marketing/` + symlinks into `./.claude/commands/` | Same; AND defines `skillsLinkDir = ./.claude/skills` (line 321) but it is never populated separately — skills are symlinked into the *same* `commandsDir` as `cm-{skill}.md` (line 843–847) | **partial** — README under-describes; the `skillsLinkDir` target field is set but unused. Either remove from code or document. |
| Claude Code global | `~/.claude/plugins/compounding-marketing/` + symlinks into `~/.claude/{commands,skills}/` | `commandsDir = ~/.claude/commands`, `skillsLinkDir = ~/.claude/skills` (lines 316–318); same pattern: skills end up in `commandsDir` not `skillsLinkDir` | **misleading** — skills aren't actually linked into `~/.claude/skills/` despite the docs saying so |
| Cursor | `./compounding-marketing/` + `./.cursor/rules/cm-*.mdc`, AGENTS.md | `commandsDir = ./.cursor/rules` (line 327), `instructionsFile = ./AGENTS.md`, `instructionsFormat = 'mdc'` | matches direction; note: `instructionsFormat='mdc'` is set but not actually used in `buildInstructionsContent`/`applyInstructionsBlock` (still writes plain markdown, file extension stays `.md`). README implication that rules will be `.mdc` is honored only because the symlink filename gets `.md` (not `.mdc`) — see "skill files" symlinks at line 824 (filter is `.md`-only) → **bug**: Cursor install never produces `.mdc` files. P1 implementation gap, but this is QA4 docs scope so flagging here for cross-team. |
| Codex project | `./compounding-marketing/` + `./.codex/prompts/cm-*.md`, `~/.codex/prompts/cm-*.md` for global, `~/.codex/AGENTS.md` for global | matches (lines 332–342) | ✓ |
| Zed | `./compounding-marketing/` + `./.zed/` rules, AGENTS.md | matches (lines 344–348) | ✓ |
| ChatGPT | `./compounding-marketing/` + printed copy-paste, "n/a" global | matches (lines 349–354 always uses `cwd` — global scope ignored for chatgpt) | ✓ |

Recommended fix: change README line 118 from `"+ symlinks into ./.claude/commands/"` to `"+ symlinks under ./.claude/commands/ for both workflows and skills (skills surface as /cm-{skill})"`, and remove or wire up `skillsLinkDir` in setup.js.

### 4.4 Quick Start "Option 1" reference to `/cm-uninstall` — broken link
`README.md` lines 88–91:

```
Roll back any time with:
/cm-uninstall            # or
npx compounding-marketing --uninstall
```

There is **no `commands/cm-uninstall.md`**. `commands/cm-setup.md` line 91 and 147 also reference it. P0.

### 4.5 Getting Started examples — minor inconsistency
README line 128 and 132 use `/cm-context` and `/cm-position` (hyphen). README lines 51–63 use `/cm:context` style (colon). AGENTS.md lines 105–115 use `/cm:` colon style. setup.js "Next Steps" block (line 919) prints `/cm-context` (hyphen). Pick one canonical form. Both work in Claude Code (commands without colons) — but the docs should be coherent. P2.

---

## 5. Safety-Claim Verification Findings

Claim under audit (README line 9, line 633–635; CHANGELOG v1.2.0 Removed/Fixed sections):
> "Installation never modifies your files without confirmation. No silent overwrites. No postinstall hooks."

### 5.1 Postinstall hook — VERIFIED ABSENT (P0 fixed)
`package.json` `scripts`: `"setup"`, `"validate"`, `"build"` only. No `postinstall`. ✓
`bin/setup.js`: no `--silent` flag in `parseArgs` (line 96–130). ✓

### 5.2 All file writes go through `fsx` wrapper or have collision handling — MOSTLY VERIFIED
Raw `fs.writeFileSync` / `fs.appendFileSync` / `fs.cpSync` call sites in `bin/setup.js`:

| Line | Call | Safety |
|---|---|---|
| 193 | `fs.writeFileSync` inside `fsx.write` | wrapper writes only after `fsx.dryLog` and the caller has resolved collision; tracked in manifest. ✓ |
| 207 | `fs.appendFileSync` inside `fsx.append` | wrapper. ✓ |
| 251 | `fs.cpSync(filePath, bak, { recursive: true })` inside `fsx.backup` | only used to make `.bak` of an existing file, target is always `<original>.bak`. Safe — but **could clobber an existing `<original>.bak`** without prompt. Minor (P2). |
| 267 | `fs.writeFileSync` inside `fsx.overwrite` | wrapper backs up first. ✓ |
| 396 | `fs.writeFileSync` inside `persistManifest` | writes manifest only. Path is `~/.claude/.compounding-marketing-install.json` (global) or `<cwd>/.compounding-marketing-install.json` (project). Will silently overwrite an existing manifest. Safe semantically (the manifest is owned by the wizard), but worth noting. |
| 440 | `fs.writeFileSync(entry.path, content)` inside `runUninstall` strip-markers | only runs after user confirmed uninstall, so OK. |
| 619 | `fs.writeFileSync(instructionsFile, updated)` inside `applyInstructionsBlock` "idempotent update" branch | replaces marker block in-place. Does NOT prompt — but this is the **idempotent** path (re-running on an existing install). Defensible. Should be documented. |
| 638 | `fs.writeFileSync(instructionsFile, header + markerBlock)` inside `applyInstructionsBlock` "overwrite" branch | only after `fsx.backup(instructionsFile)` AND the user's `decision === 'overwrite'` from `resolveCollision`. ✓ |

**Conclusion:** No raw bypass that contradicts the safety claim. The only nuances:
1. The idempotent re-update path (line 619) silently rewrites the marker block — this is the *intended* idempotent behavior but should be mentioned in the README safety contract so users aren't surprised by a marker-block update on re-run.
2. With `--yes`, instructions files default to `merge` and other collisions default to `skip` (line 276–280). README line 9 says "without confirmation"; technically `--yes` *is* the confirmation, but a reader could be confused. Suggest changing README line 9 to: *"Installation never modifies existing files without your confirmation. With `--yes`, the wizard merges instructions files and skips all other existing-file collisions by default."*

### 5.3 Symlink collision behavior — PARTIAL
`bin/setup.js` lines 793–814 (Step 5): when `cm-*` entries already exist in `commandsDir`, the wizard prompts (or, with `--yes`, defaults to **preserve** = `cleanup = false`). ✓ Matches README line 9 and CHANGELOG "Changed" entry.

But: when re-running an install and `cleanup = false`, `fsx.symlink` (line 209) will still call `fs.symlinkSync` for any *missing* link, which throws `EEXIST` if the link exists with a different target. The wrapper catches `EPERM`/`EACCES` only (line 218); other errors fall through to a yellow warning but the install continues. Acceptable but worth a CHANGELOG note.

### 5.4 `.bak` collision — minor edge case
If `<file>.bak` already exists and the wizard runs `fsx.backup(file)`, `fs.copyFileSync` overwrites the existing `.bak` without prompt (line 253). Safety contract says "byte-identical restore" — true only for the *most recent* run. Could be flagged in CHANGELOG or the safety section.

---

## 6. CHANGELOG Completeness Review

Comparing v1.2.0 entry against the items the user listed as "every meaningful change":

| Expected | In CHANGELOG? | Notes |
|---|---|---|
| `marketplace.json` added | ✓ line 13 | |
| `/cm-setup` command added | ✓ line 15 (`commands/cm-setup.md`) | mentions file but does not say "exposed as `/cm-setup` slash command" |
| `--dry-run` flag | ✓ line 19 | |
| `--uninstall` flag | ✓ line 20 | |
| `--yes` / `-y` flag | ✓ line 21 | |
| `--scope=<value>` flag | ✓ line 22 | |
| `--target=<path>` flag | ✓ line 23 | |
| `--tool=<value>` flag | ✓ line 24 | |
| `--version` / `--help` | ✓ line 25 | |
| Per-tool target paths | ✓ lines 28–32 | |
| Install manifest | ✓ line 34 | |
| `_TEMPLATE.md` | ✓ line 37 | |
| `validate-skills.js` | ✓ line 38 | |
| 53 skill expansions / all 61 brought up | ✓ lines 40–48 | "53 skills brought up to gold-standard structure" + line 49 mentions Tier-A pass on the remaining 8 reference skills → covers all 61. ✓ |
| Collision handling | ✓ line 53 | |
| Symlink cleanup gating | ✓ line 54 | |
| Marker-wrapped CLAUDE/AGENTS edits | ✓ line 55 | |
| Postinstall hook removed | ✓ line 61 | (also in v1.1.6 line 73) |
| `--silent` mode removed | ✓ line 62 | |
| Silent CLAUDE.md overwrite bug fixed | ✓ line 66 | |
| `fs.cpSync({force:true})` replaced | ✓ line 67 | |
| Marker idempotency on re-runs | ✓ line 68 | |

### Missing from v1.2.0 CHANGELOG
- **`/cm-uninstall` slash command** — referenced in README line 89 and `commands/cm-setup.md` lines 91/147 but the file does not exist. Either add the file (and changelog entry), or remove all references.
- **Repository scripts**: `npm run validate` and `npm run build` were added to `package.json` (lines 53–54). CHANGELOG line 38 mentions validation is "wired into `npm run validate` and `npm run build`" but the underlying `package.json` `scripts` section change isn't called out separately.
- **Reference link footnotes** for `[1.2.0]` and `[1.1.6]` are missing at the bottom of CHANGELOG (lines 233–234 only have `[1.1.0]` and `[1.0.0]`).

---

## 7. Cross-Doc Consistency Findings

### 7.1 Workflow Commands sections
- `README.md` lines 50–63 — lists 7 project workflows (`research, position, copy, launch, compound, social, email`) + 4 periodic (`daily, standup, weekly, eod`) = 11. **Omits `/cm-setup`.**
- `AGENTS.md` lines 104–115 — lists 5 project (`research, position, copy, launch, compound`) + 4 periodic = 9. **Omits `/cm:social`, `/cm:email`, `/cm-setup`.**
- `CLAUDE.md` lines 41–45 — same 11 as README (same omission).

### 7.2 Old-behavior references that need updating
- `README.md` line 691: "*This plugin gives you 50 specialized skills*" — stale 1.0 copy. Should read 61.
- `README.md` line 36: "Marketing managers" persona section is fine, no stale numbers.
- `AGENTS.md` lines 54–88 — entire skill-category enumeration block reflects v1.0 (50 skills). Largest single docs gap in v1.2.0.
- `commands/cm-setup.md` line 12: only mentions "four decisions" but the npx wizard now walks **0–9 steps** (line 690 onward in setup.js). Acceptable since `/cm-setup` is the slimmer in-Claude version, but worth documenting that explicitly.
- README line 96–112: `npx compounding-marketing` examples — all consistent with parsed flags. ✓

### 7.3 Periodic-workflow version tags
- `README.md` line 56: `/cm:social … **(v1.4)**`
- `README.md` line 57: `/cm:email … **(v1.4)**`
- `README.md` line 59: `**Periodic Workflows (v1.2):**`
- `commands/cm-social.md` and `cm-email.md` exist and ship in v1.2.0 → "(v1.4)" tag is incorrect. Either mark them `**(v1.2)**` or drop the tag entirely.

### 7.4 Slash-command syntax inconsistency
README mixes `/cm:research` (colon) and `/cm-setup` (hyphen) styles. AGENTS.md uses colon. setup.js prints hyphen. Pick one canonical convention and use it everywhere; in Claude Code, both work, but documentation should be coherent.

### 7.5 Repository URL — VERIFIED CONSISTENT
`package.json` `repository.url`: `git+https://github.com/classicchins/compounding-marketing.git` ✓
`package.json` `homepage` and `bugs.url`: `classicchins/compounding-marketing` ✓
`.claude-plugin/plugin.json` `homepage`: `classicchins/compounding-marketing` ✓
`.claude-plugin/marketplace.json` owner.url + `plugins[0].homepage`: `classicchins/compounding-marketing` ✓
README "Quick Start" + "Installation Reference": `classicchins/compounding-marketing` ✓
`git remote -v`: `https://github.com/classicchins/compounding-marketing.git` ✓

---

## 8. Issue Lists

### P0 — Ship-blockers (fix before tagging v1.2.0)

| # | File:line | Issue |
|---|---|---|
| P0-1 | `AGENTS.md:54-88` | Skill category section is the v1.0 snapshot (50 skills, missing 11). Misleads ChatGPT/Codex/Cursor users about what the plugin actually contains. |
| P0-2 | `CLAUDE.md:7` | "**11 workflow commands**" — should be `12` to match `commands/` directory and `plugin.json`. |
| P0-3 | `CLAUDE.md:15` | Inline comment `# 11 workflow commands` — should be `12`. |
| P0-4 | `CLAUDE.md:41` (and surrounding workflow list) | Project-workflow enumeration omits `/cm-setup`. |
| P0-5 | `README.md:48` | "**11 workflow commands** for complex marketing work" — should be `12`. |
| P0-6 | `README.md:50–63` | Workflow Commands list omits `/cm-setup`. |
| P0-7 | `AGENTS.md:104–115` | Workflow Commands list omits `/cm-setup`, `/cm:social`, `/cm:email`. |
| P0-8 | `README.md:89`, `commands/cm-setup.md:91`, `commands/cm-setup.md:147` | Reference `/cm-uninstall` but `commands/cm-uninstall.md` does **not exist**. Either ship the file or remove all references. |

### P1 — High-priority cleanup (release-week)

| # | File:line | Issue |
|---|---|---|
| P1-1 | `README.md:31` | "across **10 categories**" but the table immediately below has 12 rows. Change to "12 categories". |
| P1-2 | `README.md:118` | Per-tool target table for Claude Code project says only `./.claude/commands/` symlinks, but the wizard also surfaces all 61 skills as `/cm-{skill}` slash commands in the same dir. Document this. |
| P1-3 | `README.md:118` (global row) | Says "symlinks into `~/.claude/{commands,skills}/`" — `bin/setup.js` defines `skillsLinkDir = ~/.claude/skills` (line 317) but never populates it. Skills are symlinked into `commands/`. Either fix the code or fix the doc. |
| P1-4 | `bin/setup.js:824` | Cursor install loops over `cmdFiles = readdirSync(...).filter(f => f.endsWith('.md'))`. README line 119 advertises `.cursor/rules/cm-*.mdc` files — but the symlinks created are `.md`, not `.mdc`. Cursor docs say `.mdc` is the rules-file extension. Either rename on link (e.g., `cm-{skill}.mdc`) or update README. |
| P1-5 | `README.md:9` | Safety claim "without confirmation" is true for the interactive path, but `--yes` mode silently makes default decisions. Suggest expanding the sentence to disclose `--yes` defaults explicitly. |
| P1-6 | `CHANGELOG.md:14–15` | The added `/cm-setup` slash command is worth its own bullet (currently only the file is mentioned). Also missing CHANGELOG bullets for `npm run validate` / `npm run build` `package.json` scripts. |
| P1-7 | `CHANGELOG.md:233–234` | Missing reference link footnotes for `[1.2.0]` and `[1.1.6]`. |
| P1-8 | `README.md:691` | "50 specialized skills — like hiring 50 consultants" — stale v1.0 number. Update to 61. |

### P2 — Polish / nice-to-have

| # | File:line | Issue |
|---|---|---|
| P2-1 | `README.md:56–57` | `/cm:social` and `/cm:email` tagged `**(v1.4)**` but they ship in v1.2.0. Drop the tag or change to `**(v1.2)**`. |
| P2-2 | Multiple — README + AGENTS + setup.js | Inconsistent slash-command syntax (`/cm:research` colon vs `/cm-setup` hyphen). Standardize. |
| P2-3 | `bin/setup.js:253` | `fsx.backup` overwrites an existing `<file>.bak` silently. Consider rotating to `<file>.bak.<timestamp>` or prompting. |
| P2-4 | `bin/setup.js:619` | Idempotent marker-block update silently rewrites the marker. Document this clearly in README safety section so re-runs aren't surprising. |
| P2-5 | `commands/cm-setup.md:12` | Says "four decisions" but the npx wizard has more steps. Clarify that `/cm-setup` is the slimmed-down in-Claude variant. |
| P2-6 | `bin/setup.js:330` | `instructionsFormat: 'mdc'` is set for Cursor but never consulted. Either remove the field or wire it into the writer. |
| P2-7 | `bin/setup.js:316–323` | `skillsLinkDir` field is set but never used in Step 5 (skills go to `commandsDir`). Either remove or wire up. |

---

## 9. Suggested Fixes (exact text)

### Fix P0-2/P0-3 — `CLAUDE.md`
```diff
-Compounding Marketing is a Claude Code / ChatGPT / Cursor plugin providing 61 marketing skills and 11 workflow commands for SaaS marketing.
+Compounding Marketing is a Claude Code / ChatGPT / Cursor plugin providing 61 marketing skills and 12 workflow commands for SaaS marketing.
```
```diff
-commands/         # 11 workflow commands (cm-*.md files invoked via /cm:*)
+commands/         # 12 workflow commands (cm-*.md files invoked via /cm:*)
```

### Fix P0-4 — `CLAUDE.md` workflow list
After `**Project workflows**: research, position, copy, launch, compound, social, email`, add `setup` so it reads:
```
**Project workflows**: setup, research, position, copy, launch, compound, social, email
```

### Fix P0-5 — `README.md:48`
```diff
-**11 workflow commands** for complex marketing work:
+**12 workflow commands** for complex marketing work:
```

### Fix P0-6 — `README.md` Workflow Commands section
Add as the first bullet under "Project Workflows":
```
- `/cm-setup` — Per-project bootstrap (mirrors the npx wizard inside Claude Code; safe, opt-in, manifest-tracked rollback)
```

### Fix P0-7 — `AGENTS.md:104–115`
Add `/cm:setup`, `/cm:social`, `/cm:email` to "Project Workflows":
```diff
 ### Project Workflows
+- `/cm:setup` — Per-project bootstrap (safe, opt-in install of the plugin into the current project)
 - `/cm:research` — Deep market + customer research workflow
 - `/cm:position` — Full positioning workshop (Dunford framework)
 - `/cm:copy` — End-to-end copywriting with CRO review
 - `/cm:launch` — Launch planning and execution
 - `/cm:compound` — Document learnings to compound knowledge
+- `/cm:social` — Social media campaign planning
+- `/cm:email` — Email campaign setup end-to-end
```

### Fix P0-1 — `AGENTS.md:54-88` (skill catalog)
Replace the entire `## Skill Categories` section with the 12-category, 61-skill breakdown that already lives in `README.md` lines 33–46. Verbatim recommended:

```
### Foundation (5 skills)
cm-context | positioning | messaging-framework | value-proposition | brand-voice

### Research (7 skills)
icp-research | customer-research | customer-interview | competitive-analysis | competitor-content-monitoring | market-sizing | marketing-psychology

### Content & Copy (8 skills)
copywriting | copy-editing | content-strategy | case-study | social-content | social-media-strategy | video-marketing | lead-magnets

### SEO & Discovery (6 skills)
seo-audit | ai-seo | programmatic-seo | site-architecture | schema-markup | competitor-alternatives

### CRO (7 skills)
page-cro | signup-flow-cro | onboarding-cro | form-cro | popup-cro | paywall-upgrade-cro | pricing-strategy

### Outreach & Email (6 skills)
abm-strategy | cold-email | email-sequence | email-deliverability | marketing-automation | testimonial-collection

### Paid Acquisition (3 skills)
paid-ads | linkedin-ads | ad-creative

### Measurement & Testing (4 skills)
analytics-tracking | ab-test-setup | attribution-modeling | content-performance-scoring

### GTM & Launch (5 skills)
launch-strategy | gtm-strategy | channel-strategy | product-hunt-launch | press-pr

### Growth & Retention (6 skills)
referral-program | free-tool-strategy | churn-prevention | partnership-marketing | community-strategy | newsletter-growth

### Sales & RevOps (3 skills)
sales-enablement | revops | webinar-strategy

### Meta (1 skill)
marketing-ideas
```

### Fix P0-8 — `/cm-uninstall` references
**Option A (recommended):** Create `commands/cm-uninstall.md` that wraps `npx compounding-marketing --uninstall` (delegates to the wizard). Add to CHANGELOG `Added` section.

**Option B:** Strike `/cm-uninstall` from README line 89 and from `commands/cm-setup.md` lines 91 + 147. Replace with `npx compounding-marketing --uninstall` only.

### Fix P1-1 — `README.md:31`
```diff
-**61 marketing skills** across 10 categories:
+**61 marketing skills** across 12 categories:
```

### Fix P1-2 / P1-3 — `README.md:116-122` table
Update the Claude Code rows:
```diff
-| Claude Code / Cowork | `./compounding-marketing/` + symlinks into `./.claude/commands/` | `~/.claude/plugins/compounding-marketing/` + symlinks into `~/.claude/{commands,skills}/` | `CLAUDE.md` |
+| Claude Code / Cowork | `./compounding-marketing/` + 12 workflow commands and 61 skills symlinked into `./.claude/commands/` (skills exposed as `/cm-{skill}`) | `~/.claude/plugins/compounding-marketing/` + commands and skills symlinked into `~/.claude/commands/` | `CLAUDE.md` |
```

(Or, fix the *code* to actually populate `skillsLinkDir` with skill SKILL.md links and keep the docs as-is.)

### Fix P1-5 — `README.md:9`
```diff
-> **Installation never modifies your files without confirmation.** No silent overwrites. No postinstall hooks. Roll back any install with `npx compounding-marketing --uninstall`.
+> **Installation never modifies existing files without confirmation.** No silent overwrites. No postinstall hooks. With `--yes`, the wizard merges instructions files and skips every other existing-file collision by default. Roll back any install with `npx compounding-marketing --uninstall`.
```

### Fix P1-6 — `CHANGELOG.md` v1.2.0 Added section
After the `commands/cm-setup.md` bullet (line 15), add:
```
- `/cm-setup` slash command — explicit, opt-in per-project bootstrap callable from inside Claude Code (delegates to the wizard logic, never modifies files without confirmation)
- `npm run validate` and `npm run build` scripts in `package.json` — validate (and optionally regenerate) skill metadata as a CI gate
```

### Fix P1-7 — `CHANGELOG.md:233-234`
Append:
```
[1.2.0]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.2.0
[1.1.6]: https://github.com/classicchins/compounding-marketing/releases/tag/v1.1.6
```

### Fix P1-8 — `README.md:691`
```diff
-You're a marketing team of one. You need leverage. This plugin gives you 50 specialized skills — like hiring 50 consultants.
+You're a marketing team of one. You need leverage. This plugin gives you 61 specialized skills — like hiring 61 consultants.
```

### Fix P2-1 — `README.md:56-57`
```diff
-- `/cm:social` — Social media campaign planning (platforms, calendar, engagement tactics) **(v1.4)**
-- `/cm:email` — Email campaign setup end-to-end (segmentation, copy, send time optimization) **(v1.4)**
+- `/cm:social` — Social media campaign planning (platforms, calendar, engagement tactics)
+- `/cm:email` — Email campaign setup end-to-end (segmentation, copy, send time optimization)
```
And change the `**Periodic Workflows (v1.2):**` heading to just `**Periodic Workflows:**` for consistency now that v1.2.0 is shipping.

---

## 10. Summary Counts

- **P0 issues:** 8
- **P1 issues:** 8
- **P2 issues:** 7
- **Total:** 23

**Recommendation:** Fix all 8 P0s before tagging v1.2.0. P1 set is reasonable to ship in a `v1.2.1` patch the same week. P2 cleanup can roll into the next minor cycle.
