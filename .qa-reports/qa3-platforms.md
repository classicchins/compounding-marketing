# QA3 — Cross-Platform Install Path & File-Format Verification

**Scope:** compounding-marketing v1.2.0
**Date:** 2026-05-12
**Approach:** Read-only inspection of `bin/setup.js`, `.claude-plugin/`, `.cursor-plugin/`, `commands/cm-setup.md`, `README.md`, and `AGENTS.md`, cross-referenced against each tool's official documentation.

---

## Executive Summary

| Tool | Verdict | Headline |
|---|---|---|
| Claude Code / Cowork | **PASS (with minor warns)** | Marketplace JSON + plugin JSON conform to schema. Marketplace install will work. `/cm-setup` slash-command spec accurately mirrors the wizard. |
| Cursor | **FAIL — P0** | Wizard writes `.md` files into `.cursor/rules/`, never `.mdc` with frontmatter. README and AGENTS.md both claim `.mdc` is produced. Auto-attaching rule behavior will not work; rules will only fire when @-mentioned. Also, `.cursor/rules/cm-*.mdc` filenames documented in README — actual filenames will be `.md`. |
| Codex (OpenAI) | **FAIL — P0** | The wizard targets `~/.codex/prompts/` and `./.codex/prompts/`. **Codex has no such concept.** Codex skills live in `~/.agents/skills/<name>/SKILL.md` and `.agents/skills/<name>/SKILL.md`, with `$skill-name` invocation syntax (not slash commands). `~/.codex/AGENTS.md` is also incorrect — Codex looks for AGENTS.md per-project (Git root → cwd) plus optional override `AGENTS.override.md`. |
| ChatGPT (Custom GPT) | **PASS (warn)** | The instructions block printed by `printChatGPTInstructions()` is short and mostly correct, but it tells the user to "paste the contents of `AGENTS.md`" (~7 KB, ~6,900 chars). That is borderline for the GPT Instructions field (8 KB practical limit) and includes Claude/Cursor/Zed-specific install instructions that aren't relevant to a Custom GPT. |
| Zed | **FAIL — P1** | Wizard writes `.zed/` rule files. **Zed does not read `.zed/` for rules.** Zed reads `.rules` / `AGENTS.md` / `CLAUDE.md` (in that order) at the project root only. The `AGENTS.md` part of our install is correct and will be picked up; the `.zed/` files are wasted bytes that nothing will load. |
| Other / Generic | **PASS** | `AGENTS.md` is well-structured with skill index, install table, workflow guidance. Universal fallback works as designed. |

**Net:** 1 P0 (Cursor format), 1 P0 (Codex paths fundamentally wrong), 1 P1 (Zed dead-letter dir), 1 P2 (ChatGPT block size + relevance). Claude Code / Cowork / ChatGPT / Other are functionally correct.

---

## Per-Tool Findings

### 1. Claude Code / Claude Cowork — PASS

**Files inspected:**
- `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/.claude-plugin/plugin.json`
- `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/.claude-plugin/marketplace.json`
- `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/commands/cm-setup.md`
- `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/bin/setup.js` lines 312–323 (Claude target resolution)

**Marketplace docs source:** https://code.claude.com/docs/en/plugin-marketplaces, https://code.claude.com/docs/en/plugins

**marketplace.json — schema conformance:**
- Required `name` ✅ (`compounding-marketing`)
- Required `owner.name` ✅
- Required `plugins[]` ✅ with one entry that has `name` + `source: "./"` ✅
- `source: "./"` is a valid relative-path source per spec; it points at the marketplace root. ✅
- Optional `description`, `version`, `keywords`, `category: "productivity"`, `strict: false` are all on the docs' allowed list. ✅
- `metadata.description` and `metadata.version` are accepted (the spec calls these out as backward-compat fields). ✅
- **Warn:** `category` accepts an arbitrary string per the docs (no validated vocabulary). `"productivity"` is fine but not enforced by Claude Code — purely cosmetic.

**plugin.json — schema conformance:**
- Required `name` ✅
- Strongly recommended `version` ✅, `description` ✅
- Optional `author{name,email,url}`, `homepage`, `repository`, `license`, `keywords` all match spec. ✅
- **Warn (P2):** `"commands": "./commands/"` and `"skills": "./skills/"` are technically supported (the docs say `commands`/`skills` accept `string|array`), and these locations also happen to be the **default** Claude Code looks at when these fields are omitted. So they are harmless but redundant. Removing them would not change behavior.
- **Warn (P2):** `"components": { "skills": 61, "commands": 12 }` is **not** part of the documented schema. Claude Code "silently ignores unknown keys" per the docs (in the context of `settings.json`), and similar tolerance applies here, but this is custom telemetry that buys nothing functionally.
- **Note:** plugin docs explicitly warn _"don't put `commands/`, `agents/`, `skills/`, or `hooks/` inside the `.claude-plugin/` directory."_ Repo correctly puts them at root. ✅

**Marketplace install path (per README): `/plugin marketplace add classicchins/compounding-marketing`** — this resolves to GitHub via the documented `owner/repo` shorthand and finds `.claude-plugin/marketplace.json` at the root. Will work. ✅

**`/cm-setup` slash-command vs wizard:**
- `cm-setup.md` describes 7 steps (scope, CLAUDE.md handling, optional context skeleton, optional .gitignore, manifest, verify+report). The wizard in `bin/setup.js` performs roughly matching steps (0–9). ✅
- One mismatch: `cm-setup.md` step 4 says it writes a `.agents/product-marketing-context.md` skeleton from the `cm-context` template. The wizard does **not** do this — it never touches `.agents/`. So the documented `/cm-setup` behavior is a **superset** of the wizard. If `/cm-setup` is implemented as a runtime slash-command file (not a wrapper around the wizard), this is fine; otherwise a P2 doc/code drift.
- `cm-setup.md` references a `/cm-uninstall` command at lines 16, 91, 147 — there is **no `commands/cm-uninstall.md` file** in the repo (verified via `ls commands/`). Users following the doc will hit a dead command. **P1 doc bug.**

**Verdict:** PASS. Marketplace install + manifests are well-formed. Two harmless schema redundancies and one missing companion command file.

---

### 2. Cursor — FAIL (P0)

**Files inspected:**
- `bin/setup.js` lines 325–331 (Cursor target resolution): sets `commandsDir = .cursor/rules`, `instructionsFormat = 'mdc'`
- `bin/setup.js` lines 818–850 (the actual symlink creation loop)
- `.cursor-plugin/plugin.json`

**Cursor docs source:** https://cursor.com/docs/context/rules

**Documented Cursor rule format:**
- Files live in `.cursor/rules/` ✅ (we target the right dir)
- Both `.md` and `.mdc` are loaded
- `.mdc` files use YAML frontmatter with `description`, `globs`, `alwaysApply`
- A `.md` file with no frontmatter behaves as **manual-only** — included only when `@`-mentioned in chat
- `AGENTS.md` at project root is supported as a simpler alternative to `.cursor/rules/`

**What our code actually writes:**
- `bin/setup.js:822` filters `.md` files: `cmdFiles = fs.readdirSync(cmCommandsDir).filter(f => f.endsWith('.md'))`
- `bin/setup.js:824` writes the link with the **original `.md` filename**: `linkPath = path.join(targets.commandsDir, file)`
- `bin/setup.js:843` for skills: `linkName = skill.startsWith('cm-') ? \`${skill}.md\` : \`cm-${skill}.md\``
- The `instructionsFormat = 'mdc'` flag set on line 330 is **never read** anywhere in `setup.js` — there is no code path that converts content, renames to `.mdc`, or injects frontmatter.

**Net behavior:**
- A user who runs `npx compounding-marketing --tool=cursor` gets `.cursor/rules/cm-positioning.md`, `.cursor/rules/cm-research.md`, etc. — symlinks pointing at `SKILL.md` files that themselves contain Markdown with the existing **non-Cursor** frontmatter (`name: skill-name`, `description: ...`, `metadata.version`).
- The frontmatter that exists (`name`, `metadata`) is **not what Cursor expects**. Cursor's parser will likely silently ignore unknown keys, so the rule degrades to "manual @-mention only," meaning the agent will never auto-suggest these skills based on user prompts.
- README.md line 119 and AGENTS.md line 16 both promise `.cursor/rules/cm-*.mdc`. Reality: `.cursor/rules/cm-*.md`. **Doc/code mismatch.**

**Symlink concern:** Cursor docs do not address symlink support either way. Our wizard uses symlinks first, falls back to copy on Windows. If Cursor's rule loader does `fs.readFile`, this is fine; if it stat-checks `.isFile()` strictly it could break. Untested but unlikely to be a real issue.

**Recommended fix (in priority order):**
1. (P0) Rename written files to `.mdc` and prepend a Cursor frontmatter block, e.g. `--- description: <skill description>\nalwaysApply: false\n---` so the agent can intelligently invoke them.
2. Or: drop the per-skill rule files entirely and rely on the `AGENTS.md` block, which Cursor natively supports without symlinks. Simpler and survives reorgs.
3. Update README.md install table and AGENTS.md to match whichever path is taken.

---

### 3. Codex (OpenAI) — FAIL (P0)

**Files inspected:**
- `bin/setup.js` lines 332–342 (Codex target resolution): writes to `~/.codex/prompts/` (global) or `./.codex/prompts/` (project), plus `~/.codex/AGENTS.md` or `./AGENTS.md`.

**Codex docs sources:**
- https://developers.openai.com/codex/skills (skill spec + storage)
- https://developers.openai.com/codex/guides/agents-md (AGENTS.md discovery)
- https://developers.openai.com/codex/cli/slash-commands (only built-in slash commands; no user-defined)

**What Codex actually expects:**
- **Skills** are markdown packages with YAML frontmatter (`name`, `description` required) — same shape as our existing `SKILL.md` files. ✅ Format matches.
- **Skills locations** (in precedence order):
  1. Repository: `.agents/skills/` at any folder level up to repo root
  2. User-global: `~/.agents/skills/`
  3. Admin: `/etc/codex/skills/`
  4. System: bundled with Codex
- **Invocation:** `$skill-name` mention syntax or implicit auto-selection by Codex based on description matching. **Skills are not slash commands.** There is no documented mechanism for user-defined `/slash` commands in Codex.
- **AGENTS.md**: discovered per-project, walking from Git root **down** to cwd; concatenated with later (more specific) overriding earlier. Optional `AGENTS.override.md` checked first at each level. There is **no `~/.codex/AGENTS.md` global concept** documented.
- 32 KiB total size budget across the concatenated AGENTS.md chain (`project_doc_max_bytes`).

**What our wizard does (mismatches):**

| Wizard target | What it should be | Severity |
|---|---|---|
| `~/.codex/prompts/cm-*.md` | `~/.agents/skills/cm-<name>/SKILL.md` (one dir per skill) | **P0** — files won't be discovered |
| `./.codex/prompts/cm-*.md` | `./.agents/skills/cm-<name>/SKILL.md` | **P0** — files won't be discovered |
| `~/.codex/AGENTS.md` | No global equivalent. Our `AGENTS.md` belongs at project root only. | **P0** — file is written to a path Codex does not read |
| Skill files renamed to `cm-<skill>.md` flat-files | Skills must be **directories** containing `SKILL.md` (not flat files) | **P0** — Codex skill loader will not match |

The Codex install path is not "slightly off" — it's targeting a directory tree that Codex does not recognize. CLAUDE.md / README will tell users they're set up; nothing will actually load.

**Note:** Our existing `skills/<name>/SKILL.md` directory shape matches Codex skill spec one-for-one. The fix is small in concept: symlink each skill directory under `~/.agents/skills/` (or `./.agents/skills/`), write AGENTS.md to project root, and drop the `.codex/prompts/` concept entirely.

**Recommended fix:**
1. Rewrite the `case 'codex'` branch in `getInstallTargets()`:
   - `commandsDir` → `~/.agents/skills/` (global) or `./.agents/skills/` (project)
   - `instructionsFile` → project root `AGENTS.md` for both scopes (Codex doesn't honor `~/.codex/AGENTS.md`)
2. Change the symlink loop to symlink **directories** (`skills/positioning/` → `~/.agents/skills/cm-positioning/`), not individual files renamed `cm-*.md`.
3. Drop the workflow `commands/cm-*.md` symlinks for Codex — Codex has no user-slash-command surface. Instead, document those workflows in `AGENTS.md` so the user can paste/`@`-mention them.
4. Update README install table line 120: change `~/.codex/prompts/cm-*.md` to `~/.agents/skills/cm-*/SKILL.md` and remove the `~/.codex/AGENTS.md` claim.

---

### 4. ChatGPT (Custom GPT) — PASS with WARN

**Files inspected:**
- `bin/setup.js` lines 558–574 (`printChatGPTInstructions`)
- `bin/setup.js` lines 349–354 (target resolution: writes only project files + AGENTS.md, no commands/skills surface)
- `AGENTS.md` (6,904 bytes)

**What the wizard does:** Copies plugin files into `./compounding-marketing/`, writes/merges `AGENTS.md` with marker block, then prints a short message telling the user to:
1. Open the GPT editor
2. Paste contents of `AGENTS.md` into Instructions
3. Upload selected `skills/<name>/SKILL.md` files to Knowledge
4. Test with a trigger phrase

**Assessment:**
- The block is concise (~14 lines printed). ✅
- It correctly references the install dir and `AGENTS.md`. ✅
- It correctly notes Knowledge upload for selected skills. ✅
- **Warn (P2):** The user is told to paste `AGENTS.md` "(or summarize it — the file is large)". `AGENTS.md` is 6,904 chars. ChatGPT Custom GPT Instructions field has an 8,000-character limit. It will _just_ fit, but only if pasted as-is — and `AGENTS.md` includes `npx compounding-marketing --tool=cursor`, Claude Code marketplace commands, Zed instructions, etc., which are noise inside a Custom GPT. Recommend adding a `--tool=chatgpt`-specific trimmed instructions block (skill index + workflow + usage convention only, ~3 KB).
- **Warn (P2):** No mention that the user can also use the OpenAI API "system prompt" approach if not building a Custom GPT. The instructions are GPT-builder-only.
- **Note:** No skills files are installed anywhere ChatGPT can auto-load them; the user must manually upload to Knowledge. This is correctly stated. ✅

**Recommended fix (P2):**
- Generate a dedicated `chatgpt-instructions.md` (~3 KB, skill index + how-to-invoke only) and tell the user to paste **that** rather than `AGENTS.md`. Keep current behavior as fallback.

---

### 5. Zed — FAIL (P1)

**Files inspected:**
- `bin/setup.js` lines 344–348 (Zed target resolution): `commandsDir = .zed/`, `instructionsFile = AGENTS.md`

**Zed docs source:** https://zed.dev/docs/ai/rules

**What Zed actually expects:**
- Project rules live at the **project root** as one of: `.rules`, `.cursorrules`, `.windsurfrules`, `.clinerules`, `.github/copilot-instructions.md`, `AGENT.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`. First match wins.
- **There is no documented `.zed/` directory for rules.** `.zed/` exists for editor settings (`.zed/settings.json`), not for AI agent rules.
- User-global rules live in Zed's "Rules Library" (in-app UI), not on a standard filesystem path users edit directly.

**What our wizard does:**
- Writes plugin files to `./compounding-marketing/`. ✅ (cosmetic but harmless)
- Symlinks `cm-*.md` into `./.zed/`. ❌ — **Zed does not load these.**
- Writes/merges `AGENTS.md` at project root with the plugin block. ✅ — **This is what actually works.**

**Net behavior:** Zed will pick up `AGENTS.md` (assuming no `.rules` / earlier-precedence file exists), so the install partially succeeds. The `.zed/cm-*.md` files are dead — they consume disk + clutter the namespace + show up in the wizard's output as "registered N skills" which is misleading. README line 121 + AGENTS.md line 19 both claim "`./.zed/` rules" — these claims are wrong.

**Recommended fix (P1):**
1. In `getInstallTargets()` for `tool === 'zed'`, set `commandsDir = null` (skip the symlink loop entirely; `AGENTS.md` is the only useful surface).
2. Update README install table line 121 and AGENTS.md line 19 to remove the `./.zed/` claim.
3. Consider also writing a `.rules` symlink → `AGENTS.md` so Zed users with a higher-precedence file already in place still pick us up. Optional.

---

### 6. Other / Generic — PASS

**Files inspected:** `AGENTS.md`, `bin/setup.js` lines 355–360.

`AGENTS.md` is well-structured for generic AI tool consumption:
- Clear overview + philosophy
- Install table covers all listed tools
- Skill index by category with counts
- Workflow narrative (Research → Position → Message → Execute → Compound)
- Usage instructions for an agent encountering the file fresh

For `--tool=other`, the wizard writes only project files + `AGENTS.md`. Correct, minimal, no false promises. ✅

**One nit (P2):** The skill counts in `AGENTS.md` (Research = 5, Content & Copy = 7, etc., totalling appears to be 50) do not match the 61 total stated at the top, nor do they match the per-category counts in `CLAUDE.md` (which lists Research = 7, Content & Copy = 8, etc., totalling 61). The `AGENTS.md` category breakdown is stale relative to `CLAUDE.md`.

---

## File-Format Mismatch Summary (P0/P1 only)

| # | File path written by wizard | What tool actually expects | Severity |
|---|---|---|---|
| 1 | `.cursor/rules/cm-*.md` (no frontmatter conversion) | `.cursor/rules/cm-*.mdc` with `description`, `globs`, `alwaysApply` frontmatter | P0 |
| 2 | `~/.codex/prompts/cm-*.md` and `./.codex/prompts/cm-*.md` (flat .md files) | `~/.agents/skills/cm-*/SKILL.md` and `./.agents/skills/cm-*/SKILL.md` (directories) | P0 |
| 3 | `~/.codex/AGENTS.md` (global Codex instructions file) | No such concept; AGENTS.md only resolved per-project from Git root → cwd | P0 |
| 4 | `./.zed/cm-*.md` (symlinks) | Zed has no `.zed/` rules directory; only project-root files (`.rules`, `AGENTS.md`, etc.) | P1 |

---

## Documentation vs Code Mismatches

| # | Doc claim | Code reality | Where |
|---|---|---|---|
| 1 | "Cursor → `./.cursor/rules/cm-*.mdc`" | Writes `.md`, not `.mdc`; no frontmatter conversion | README.md:119, AGENTS.md:16 |
| 2 | "Codex → `~/.codex/prompts/cm-*.md` + `~/.codex/AGENTS.md`" | Path doesn't exist in Codex; whole approach wrong | README.md:120, AGENTS.md:17 |
| 3 | "Zed → `./.zed/` rules + `AGENTS.md`" | `.zed/` files are written but ignored by Zed; only `AGENTS.md` works | README.md:121, AGENTS.md:19 |
| 4 | `cm-setup.md` references `/cm-uninstall` command | No `commands/cm-uninstall.md` file exists | commands/cm-setup.md:16, 91, 147 |
| 5 | `cm-setup.md` step 4 says "create `.agents/product-marketing-context.md` skeleton" | Wizard does not write to `.agents/` at all | commands/cm-setup.md:55–58 vs setup.js |
| 6 | AGENTS.md category breakdown (~50 skills total) | CLAUDE.md says 61 skills; categories mismatch | AGENTS.md:54–88 vs CLAUDE.md categories table |
| 7 | AGENTS.md says "12 workflow commands"; `commands/` has 11 `.md` files (cm-compound, cm-copy, cm-daily, cm-email, cm-eod, cm-launch, cm-position, cm-research, cm-setup, cm-social, cm-standup, cm-weekly = 12 if counting cm-setup) | Count is fine — 12 files in `commands/`. ✅ | (no issue) |

---

## Recommendations (per tool, ranked)

### Cursor (P0 — fix before next release)
- Rewrite the Cursor branch of the symlink loop to:
  1. Generate `.mdc` files (write fresh, not symlink) at `.cursor/rules/cm-<name>.mdc`
  2. Each file = `--- description: "<skill description>"\nalwaysApply: false\n---\n` followed by the skill body (or a one-line "see ./compounding-marketing/skills/<name>/SKILL.md" pointer if you want to keep the symlink behavior).
- Drop the `instructionsFormat = 'mdc'` flag — it's a no-op today. Either implement it or remove it for clarity.
- Update README + AGENTS.md to match the new behavior.

### Codex (P0 — fix before next release)
- Replace `case 'codex'` in `getInstallTargets()` with `~/.agents/skills/` (global) and `./.agents/skills/` (project).
- Change the symlink loop to symlink **skill directories** (not individual SKILL.md files renamed). Names should be `cm-<skill>` to namespace.
- For project scope: write `AGENTS.md` at project root (already correct).
- For global scope: don't write `~/.codex/AGENTS.md`. Instead, write a global rules location only if Codex documents one in future; for now, document that Codex AGENTS.md is project-scoped only.
- Drop workflow commands (`commands/cm-*.md`) from the Codex install path — Codex has no slash-command surface for them. Keep them referenceable from AGENTS.md instead.

### Zed (P1)
- Set `targets.commandsDir = null` for Zed; only the AGENTS.md write is meaningful.
- Update install table claims in README + AGENTS.md.
- Optionally: write a `.rules` symlink → `AGENTS.md` so Zed picks us up even if user already has a `.cursorrules`/`.windsurfrules` in the precedence chain.

### Claude Code / Cowork (P2)
- Remove `"components"` from `plugin.json` (custom telemetry, not in schema).
- Either remove `"commands": "./commands/"` and `"skills": "./skills/"` from `plugin.json` (they're already the defaults) or keep them for explicitness — both fine.
- Either implement the `.agents/product-marketing-context.md` skeleton step in the wizard (matching the doc) or strike it from `cm-setup.md`.
- Add the missing `commands/cm-uninstall.md` file or remove references to `/cm-uninstall` from `cm-setup.md` (point users at `npx compounding-marketing --uninstall` exclusively).

### ChatGPT (P2)
- Generate a dedicated `chatgpt-instructions.md` (skills index + workflow + usage only, ~3 KB) and tell the user to paste that, not the full `AGENTS.md`.
- Optionally: print a short alternative for users on the OpenAI API who want to use these as a system prompt (not just Custom GPT).

### Other / AGENTS.md (P2)
- Regenerate the category counts/table in `AGENTS.md` so it matches `CLAUDE.md` (run `node scripts/generate-claude-md.js` and propagate changes).

---

## P0 / P1 / P2 Issue List

### P0 — Files won't load / install path fundamentally broken
1. **Cursor: `.md` files written to `.cursor/rules/` instead of `.mdc` with proper frontmatter.** Auto-attach behavior cannot work; rules silently degrade to manual @-mention only.
2. **Codex: wizard writes to `~/.codex/prompts/` and `./.codex/prompts/`, which Codex does not read.** Correct path is `~/.agents/skills/` and `./.agents/skills/`, with skills as **directories** containing SKILL.md.
3. **Codex: `~/.codex/AGENTS.md` is not a Codex concept.** AGENTS.md is project-scoped only.

### P1 — Format degraded or doc/code mismatch will mislead users
4. **Zed: wizard writes `.zed/cm-*.md` symlinks that Zed never loads.** Only the AGENTS.md write is functional; the rest is dead-letter.
5. **Missing `commands/cm-uninstall.md`** file referenced by `cm-setup.md`.
6. README install table + AGENTS.md install table claim Cursor `.mdc`, Codex `~/.codex/prompts/`, and Zed `.zed/` — none of these are accurate to actual code or actual tool behavior.

### P2 — Cosmetic / nice-to-have / docs drift
7. `plugin.json` includes a non-schema `"components"` block (telemetry only; ignored).
8. `plugin.json` redundantly specifies default paths (`commands`, `skills`).
9. ChatGPT instructions tell user to paste 6,904-char `AGENTS.md` into an 8,000-char field; recommend a slim purpose-built block.
10. AGENTS.md category counts/breakdown stale vs CLAUDE.md.
11. `cm-setup.md` documents writing `.agents/product-marketing-context.md` skeleton; wizard never does this.
12. `instructionsFormat = 'mdc'` is set in target resolution but never consumed anywhere in the wizard — dead code.

---

## What we did NOT verify
- Actual runtime behavior in Cursor/Codex/Zed/ChatGPT (per task scope: docs-only verification).
- Whether Cursor's loader silently parses our existing `name`/`metadata` frontmatter (likely ignored, but unconfirmed).
- Whether symlinks (vs file copies) work in Cursor's `.cursor/rules/`. Untested; docs are silent.
- The Codex `$skill-name` invocation against our existing skill body format (Codex skill spec matches our shape one-for-one, so format is fine — only path/structure is wrong).
- Windsurf and "OpenClaw" mentioned in AGENTS.md line 133 — claimed compatible with Claude Code project install but no per-tool path documented; out of scope for this QA.
