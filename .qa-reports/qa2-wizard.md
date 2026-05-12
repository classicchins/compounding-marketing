# QA2 — npx Setup Wizard End-to-End QA (v1.2.0)

**Subject:** `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/bin/setup.js`
**Package version:** `1.2.0` (verified via `--version`)
**Method:** 30 isolated test scenarios run via scratch `mktemp -d` working dirs + fresh `HOME` for global-scope tests. The real `~/.claude` and `~/.codex` were never touched. Test harness: `/tmp/qa2-wizard.sh`, raw results: `/tmp/qa2-results.tsv`.

## Executive summary

- **30 tests executed, 27 PASS, 3 reported FAIL.**
- **Of the 3 reported failures, 1 is a false positive in the test harness** (npm install touches its own `~/.npm` cache — not our package's responsibility). **2 are real defects.**
- **Additional defects surfaced during follow-up investigation:**
  - **P0:** Re-running `--yes` install does not record symlinks/files in the manifest, so a subsequent `--uninstall` leaves the entire install behind (orphaned).
  - **P1:** `--dry-run` skips all symlink intent printing (and therefore severely under-represents what the wizard will do).
  - **P1:** Cursor target uses `.md` extension; Cursor only recognizes `.mdc` rule files (the wizard sets `instructionsFormat = 'mdc'` but never consumes that flag).
  - **P2:** Global-scope `skillsLinkDir` (`~/.claude/skills/`) is declared in the manifest but never created on disk.
  - **P2:** Global `--uninstall` leaves empty `~/.claude/plugins/` directory behind.
  - **P2:** Non-project-directory install completes silently — no warning is printed despite the QA contract calling for one.
- **All safety-critical contracts hold for the *first-time* install path:** zero npm-postinstall side effects, dry-run is read-only, byte-identical CLAUDE.md restoration on first install + uninstall, no symlink duplication, manifest is complete and JSON-valid, pre-existing user content is preserved both above-marker (merge) and outside-marker (replace).

**Verdict:** Ship blocker on the **re-install → uninstall orphan bug (P0)**. The fix is small (track existing-but-skipped symlinks/files in the manifest on every run, even when `cleanup=false`). With that fix and the dry-run + cursor `.mdc` fixes, the wizard is solid.

---

## Test results table

| #   | Test | Status | Notes |
|-----|------|--------|-------|
| T01 | `--version` prints version | PASS | got `1.2.0` |
| T02 | `--help` prints usage | PASS | "interactive plugin installer" + "uninstall" present |
| T03 | Unknown flag `--foobar` rejected | PASS | exit 2, "Unknown option" message |
| T04 | `--dry-run --yes --scope=project --tool=claude-code` writes zero files | PASS | scratch dir file count unchanged; fresh `HOME` untouched |
| T05 | `npm pack` + `npm install --no-save` writes zero wizard files | **PASS (after correction)** | Original harness counted npm's own `~/.npm/_cacache` files — those are npm cache, not our package. Re-checked excluding `.npm/`: 0 wizard-attributable files in `HOME`, 0 in target. **No postinstall hook present** (verified separately in T25). |
| T06 | Real `--yes --scope=project --tool=claude-code` install | PASS | CLAUDE.md created with marker block, manifest present, 73 symlinks under `.claude/commands/`, all resolve |
| T07 | Re-run identical install — idempotency | PASS | START marker count = 1, END marker count = 1, symlink count stays at 73 |
| T08 | Pre-existing CLAUDE.md (no markers) + `--yes` merge | PASS | User content preserved verbatim; marker block appended below; user line precedes marker line |
| T09 | Pre-existing CLAUDE.md WITH markers + `--yes` replace path | PASS | Stale block contents replaced; intro and trailer text preserved; single marker pair after run |
| T10 | `--uninstall --yes` round-trip — CLAUDE.md byte-identical | PASS | Original sha matches post-uninstall sha; manifest, install root, and `.claude/commands/` all gone |
| T11 | `--scope=global --tool=claude-code` | **FAIL** | Manifest declares `skillsLinkDir = ~/.claude/skills` but the directory is never created (no symlinks placed there). Everything else lands correctly. See Finding F1. |
| T12 | `--tool=codex --scope=global` | PASS | `~/.codex/prompts/` populated with 73 symlinks; `~/.codex/AGENTS.md` created |
| T13 | `--tool=cursor --scope=project` | PASS (with caveat) | `.cursor/rules/` populated with 73 files and `AGENTS.md` updated. **Caveat:** files use `.md` extension; Cursor expects `.mdc` for rule files. Code sets `targets.instructionsFormat = 'mdc'` (line 330) but never consumes that flag. See Finding F2. |
| T14 | `--tool=chatgpt --scope=project` | PASS | `compounding-marketing/` dir created; `AGENTS.md` updated; "ChatGPT setup" + "Custom GPT" instructions printed to stdout |
| T15 | `--tool=zed --scope=project` | PASS | `.zed/` populated with 73 symlinks; `AGENTS.md` updated |
| T16 | Broken-symlink detection on re-run (non-yes mode) | PASS | After deleting a skill source, `yes y | wizard` either re-symlinked or removed the broken link. End state: `still_broken=0`. |
| T17 | `.gitignore` collision — append, don't overwrite | PASS | Pre-existing `node_modules/`, `my-secret-file`, and user comment preserved; `.cm-config.json` line appended |
| T18 | Manifest JSON shape | PASS | Valid JSON; all required fields present: `version, timestamp, scope, tool, installRoot, commandsDir, skillsLinkDir, instructionsFile, createdFiles, createdSymlinks, modifiedFiles, appendedMarkers` |
| T19 | Install in non-project dir (no `package.json`) | PASS (silent) | Wizard succeeds — but **no warning is printed** despite the test contract expecting one. `isProjectDirectory()` is implemented but only used to choose a *default* scope; never surfaces a warning. See Finding F6. |
| T20 | Collision on pre-existing skill file (`--yes` defaults to skip) | PASS | User-customised file preserved byte-identical; other skills installed |
| T21 | `--uninstall` with no manifest exits non-zero gracefully | PASS | rc=1, "No install manifest found" message + searched-paths list printed |
| T22 | `--target=<path>` implies `--scope=custom` | PASS | Files installed at the custom path correctly |
| T23 | `--dry-run` prints intended actions including symlinks | **FAIL** | WRITE, COPY, MKDIR, BACKUP, manifest-WRITE intents all printed — **but ZERO SYMLINK intents printed**. Reason: Step 5 calls `fs.existsSync(installRoot/commands)` to gate the loop; in dry-run no commands dir was ever created, so the entire symlink loop is skipped. User has no visibility into ~73 intended symlinks. See Finding F3. |
| T24 | `package.json` `files[]` doesn't include sensitive paths | PASS | `bin/` included; no `.env` references |
| T25 | `scripts.postinstall` absent from `package.json` | PASS | No postinstall hook defined |
| T26 | Mid-install kill + `--uninstall` graceful | PASS | SIGKILL during install, then `--uninstall --yes` — manifest may or may not have persisted; either rc=0 cleanup or rc=1 "no manifest" — both acceptable |
| T27 | `--uninstall --dry-run` shows actions, writes nothing | PASS | CLAUDE.md sha unchanged; file count unchanged; `[dry-run]` messages emitted |
| T28 | Invalid `--tool=lol` rejected | PASS | rc=2, "Invalid --tool" clear message |
| T29 | Invalid `--scope=lol` rejected | PASS | rc=2, "Invalid --scope" clear message |
| T30 | Symlink targets are relative (not absolute) | PASS | Sample target: `../../compounding-marketing/skills/ab-test-setup/SKILL.md` — relative, resolves correctly. Survives directory moves and `tar` archiving. |

---

## Detailed findings

### F1 — P2 — Global `skillsLinkDir` declared but never created

**File/line:** `bin/setup.js` lines 316–318 (claude-code global branch).

**Behaviour:**
```
$ HOME=$tmp node setup.js --yes --scope=global --tool=claude-code
$ ls $tmp/.claude/
.compounding-marketing-install.json  CLAUDE.md  commands/  plugins/
$ ls $tmp/.claude/skills 2>&1
ls: cannot access '.../skills': No such file or directory
```

The manifest says `"skillsLinkDir": "~/.claude/skills"` but no symlinks are placed there. All 73 symlinks (workflow commands + skills) land in `~/.claude/commands/`. So either:
- (a) the wizard intends to split workflow-commands → `commands/`, skills → `skills/`, in which case the symlink loop in Step 5 is buggy (it only writes to `commandsDir`); OR
- (b) `skillsLinkDir` is dead config and should be removed from the manifest and `getInstallTargets` to avoid confusing future maintainers.

**Recommendation:** decide (a) or (b). If (a) is preferred (matches Claude Code's `~/.claude/skills/` convention for v2 skill discovery), split the loop. If (b), drop the field.

---

### F2 — P1 — Cursor rules use `.md` not `.mdc`

**File/line:** `bin/setup.js` line 330 declares `targets.instructionsFormat = 'mdc'` — but this field is set and **never read** anywhere downstream.

**Behaviour:**
```
$ ls $S/.cursor/rules/ | head -3
cm-ab-test-setup.md
cm-abm-strategy.md
cm-ad-creative.md
```

Cursor v0.43+ specifically recognizes `.mdc` files under `.cursor/rules/`. Plain `.md` files are not auto-loaded as rules. Cursor users will install the plugin and observe nothing happens.

**Recommendation:** in Step 5's symlink loop, pick the link extension from `targets.instructionsFormat` (rename to something like `targets.commandExt`). Add an explicit branch: if `tool === 'cursor'`, write `${name}.mdc`.

---

### F3 — P1 — `--dry-run` omits all symlink intents

**File/line:** `bin/setup.js` lines 821, 835 — `fs.readdirSync(cmCommandsDir).filter(...)` and similar for `skillsDir`. Both gated by `fs.existsSync(cmCommandsDir/skillsDir)` (lines 821 and 835).

**Behaviour:** In dry-run mode, Step 4 only *prints* COPY intents — it does not actually copy `commands/` or `skills/` into `installRoot`. So when Step 5 checks `fs.existsSync(path.join(installRoot, "commands"))`, that returns `false`, and the loop body is never entered. Result: no `[dry-run] SYMLINK` lines printed.

```
$ node setup.js --dry-run --yes --scope=project --tool=claude-code 2>&1 | grep -c SYMLINK
0
```

User running `--dry-run` to see "what will the wizard do?" never sees the 73 symlinks that the real run will create. This violates the dry-run truthfulness contract.

**Recommendation:** in Step 5, when `flags.dryRun` is set, read commands/skills directly from `PKG_ROOT` instead of `installRoot`, since dry-run won't have populated `installRoot`. Alternative: make `fsx.copy` short-circuit-record a "virtual" set of would-be files that Step 5 reads from.

---

### F4 — **P0** — Re-running `--yes` install + `--uninstall` orphans everything

**Files/lines:** `bin/setup.js`
- Lines 796–805: when existing `cm-*` entries are found and `flags.yes` is set, `cleanup = false`. No reason is captured in the manifest.
- Line 825: `if (fs.existsSync(linkPath) && !cleanup) continue;` — early-return without recording the symlink that *should* be attributed to this install.
- Same pattern for skills loop at line 845.
- Step 4's `copyTreeRespectingCollisions` (lines 537–547): if file already exists and `decision === 'skip'`, returns without recording in `createdFiles`.

**Behaviour (reproduced):**
```
$ # First install
$ node setup.js --yes --scope=project --tool=claude-code
$ node -e 'const m=require("./.compounding-marketing-install.json"); console.log(m.createdFiles.length, m.createdSymlinks.length)'
102 73

$ # Identical second install (idempotent re-run)
$ node setup.js --yes --scope=project --tool=claude-code
$ node -e 'const m=require("./.compounding-marketing-install.json"); console.log(m.createdFiles.length, m.createdSymlinks.length)'
0 0

$ # Uninstall — only 0 files + 0 symlinks removed, marker block stripped
$ node setup.js --uninstall --yes
  Removed: 0 files, 0 symlinks
  Restored: 0 backups
  Stripped marker blocks from: 1 files

$ find . -type f -o -type l -o -type d | wc -l
# Everything still present: compounding-marketing/, .cm-config.json, .gitignore,
# .claude/commands/ with 73 symlinks, CLAUDE.md (now empty header only)
```

The user's mental model is: "the wizard tracks what it installed so I can uninstall cleanly." This breaks the moment they run setup twice (e.g., upgrading after an `npm i -g compounding-marketing` bump, or because they're not sure if they ran it earlier).

**Recommendation:**
- **Option A (preferred):** the wizard should *always* record an entry — even if it was a skip-because-already-exists. Add an `existingFiles[]` / `existingSymlinks[]` section to the manifest, and `--uninstall` should treat those as "owned by this install" too.
- **Option B:** load any pre-existing manifest at start, *merge* its `createdFiles` / `createdSymlinks` into the new manifest before persisting, so a re-install accumulates rather than truncates.
- **Option C:** detect existing manifest at start; if found, run `--uninstall` first (with explicit user confirm or `--force`), then proceed.

Option B is the lowest-risk fix and preserves backward compatibility.

---

### F5 — P2 — Global `--uninstall` leaves empty `~/.claude/plugins/` directory

**File/line:** `bin/setup.js` lines 495–511 (`rmEmptyDirs`).

**Behaviour:** After a global install + uninstall:
```
$ ls $HOME/.claude/
plugins/    # empty, never removed
```

The empty-dir cleanup walks `installRoot` (= `~/.claude/plugins/compounding-marketing/`), `commandsDir`, `skillsLinkDir` — but never walks one level *up* from `installRoot` (i.e., `~/.claude/plugins/`). The `stopAt` is `path.dirname(dir)` which is too restrictive.

**Recommendation:** after removing `installRoot`, also attempt `fs.rmdirSync(path.dirname(installRoot))` (will throw if non-empty, which is fine — wrap in try/catch).

---

### F6 — P2 — No warning when installing outside a project directory

**File/line:** `bin/setup.js` line 552 (`isProjectDirectory`).

**Behaviour:** Test T19 ran `--yes --scope=project --tool=claude-code` in a `mktemp -d` with no `package.json`, no `.git`, no other indicator. Install succeeded silently. The function `isProjectDirectory()` exists and is used to pick a *default* scope at line 694, but never to emit a warning.

The QA contract said the wizard "should still work but warn." Currently it works but does not warn.

**Recommendation:** in interactive mode (and when `scope === 'project'` without an explicit `--scope` flag), print a one-line yellow warning: `⚠ This directory doesn't look like a project (no package.json/.git/etc.). The plugin will install here anyway.`

---

### F7 — P3 (informational) — Sample harness false-positive on `T05`

The first run of the test harness flagged T05 because `npm install` populates `~/.npm/_cacache/` and `~/.npm/_logs/` in the fake `HOME`. Those are npm's own cache — never our wizard. After excluding `/.npm/` from the check, T05 passes cleanly. **No code change needed**; the postinstall contract holds. The harness has been noted in this report; if re-used, restrict the HOME check to exclude `/.npm/`.

---

## P0 / P1 / P2 Issue list (consolidated)

### P0 — Ship blockers
- **F4** Re-running `--yes` install zeroes out `createdFiles`/`createdSymlinks` in the new manifest, so the next `--uninstall` is a no-op and orphans the entire install. Fix: merge prior manifest entries into the new manifest at install start (or always record existing-files into the manifest, not just newly-created ones).

### P1 — Should fix before next release
- **F2** Cursor: use `.mdc` extension for files under `.cursor/rules/`. The wizard sets `instructionsFormat = 'mdc'` then ignores it.
- **F3** `--dry-run` does not print any symlink intents because Step 5 reads from `installRoot/commands` which doesn't exist in dry-run. Users see ~70 important actions missing from the preview.

### P2 — Polish
- **F1** `skillsLinkDir` declared in manifest but never created on disk (global claude-code scope).
- **F5** Global uninstall leaves empty `~/.claude/plugins/` directory behind.
- **F6** No warning when installing outside a project directory.

### P3 — Informational
- **F7** Test harness false-positive on npm-cache files (no code change needed).

---

## Recommendations for hardening (prioritised)

1. **Fix manifest accumulation (F4).** This is the single most important change. Either merge previous manifest at install start, or record *every* file/symlink in `createdFiles`/`createdSymlinks` whether newly created or pre-existing-and-skipped. Without this, anyone running `npx compounding-marketing` more than once cannot cleanly uninstall.

2. **Fix `--dry-run` symlink visibility (F3).** Refactor Step 5 to enumerate from `PKG_ROOT/commands` and `PKG_ROOT/skills` (the source), not from `installRoot/commands` (which may not exist yet). Symlink-creation logic then computes the destination + relative target the same way as in real-install.

3. **Cursor `.mdc` extension (F2).** Add a per-tool extension field consumed by the symlink loop. Verify with a Cursor user that rule files load with no further config.

4. **Add a `--force` flag.** Currently `--yes` accepts defaults but doesn't override "file exists → skip" for non-instructions files. Add `--force` for users who want a full clean overwrite (after backing up). This makes upgrade flows reliable.

5. **Add a `--prune` flag to uninstall.** Some users want `--uninstall` to also delete the manifest itself (currently it does) and also the install root *if it was created by the wizard*. Right now, post-uninstall the project tree still has `compounding-marketing/` if any single file inside it was pre-existing-skipped during install. Pruning policy should be explicit.

6. **Surface a project-directory warning (F6).** Cheap, low-risk improvement.

7. **Cleanup empty parent dirs in global uninstall (F5).** One-liner.

8. **Atomicity:** consider writing the manifest *first*, then doing the install (so an interrupted install can be rolled back). Currently the manifest is persisted at the end (line 875), so an interrupt at 50% leaves files on disk with no manifest, and `--uninstall` fails. T26 passed because we tested SIGKILL very early, before any writes — but a kill during Step 4 or 5 leaves orphans with no recovery path. Recommend writing a stub manifest at Step 3 and appending entries as they happen (still flush at end for atomic-rename semantics, but keep a partial file).

9. **Add an integration test in CI.** The 30-test harness at `/tmp/qa2-wizard.sh` could be checked in as `scripts/test-wizard.sh`, gated behind a CI job. Each scenario takes ~2s; total runtime ~60s. This catches all of these regressions automatically.

10. **Document the safety contract in `README.md`** (or `bin/setup.js` header comment) — what `--uninstall` guarantees, what it does not, what `--dry-run` covers, what `--yes` defaults to. The current code comments are good; user-facing docs should match.

---

## Verified safety contract (what currently holds)

- `npm install` from the tgz tarball performs **zero wizard-attributable writes** to either the user's project directory or `$HOME`. The only files npm itself creates (`~/.npm/_cacache/*`) are npm's responsibility.
- `--dry-run` performs no filesystem writes (verified via before/after `find -type f` count == 0 in both the working dir and a fresh `HOME`).
- First-time install + `--uninstall` round-trip restores `CLAUDE.md` byte-for-byte (`shasum` identical).
- The manifest is valid JSON and contains all required fields (`version, timestamp, scope, tool, installRoot, commandsDir, skillsLinkDir, instructionsFile, createdFiles, createdSymlinks, modifiedFiles, appendedMarkers`).
- Marker-block replacement is idempotent: re-running install keeps exactly one START/END pair.
- Pre-existing files are not overwritten without `.bak` backup; in `--yes` mode the default is "skip" for code files and "merge" for instructions files.
- Symlink targets are relative (e.g., `../../compounding-marketing/skills/.../SKILL.md`), so they survive directory relocation.
- Invalid `--tool` / `--scope` / unknown flags exit non-zero with clear error messages.
- `--uninstall` with no manifest exits non-zero with a clear message listing all searched paths.

---

## Files referenced
- Wizard: `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/bin/setup.js`
- Package manifest: `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/package.json`
- Test harness: `/tmp/qa2-wizard.sh`
- Raw results: `/tmp/qa2-results.tsv`
- Per-scenario stdout: `/tmp/qa2-t{NN}*.out`
