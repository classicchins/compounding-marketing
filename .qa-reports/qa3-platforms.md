# QA Report — v1.6.0 Cross-Platform Install Paths & File Formats

**Branch:** `release/v1.6.0`
**Reviewer:** automated QA agent
**Date:** 2026-05-12
**Methodology:** docs WebFetch (Claude Code, Cursor, Codex, Zed) + live wizard runs in scratch dirs (`/tmp/cm-qa-*`) + static read of `bin/setup.js`, `README.md`, `AGENTS.md`, `CHANGELOG.md`, and `.claude-plugin/*.json`.

---

## Executive Summary

The v1.6.0 cross-platform install code is **mostly correct**. Per-tool path mappings, file formats, registration styles, and the manifest/uninstall flow all match the documented expectations of each tool. The wizard ran cleanly for all six tools in scratch dirs and uninstall reversed all tracked changes.

**One P0 (blocker) was found:** the wizard hard-codes the npm package name `@anthropic-ai/mcp-server-perplexity` for the Perplexity MCP server. **That package does not exist on the npm registry** (`npm view` returns 404). The actual package is `server-perplexity-ask` (v0.1.3). Every MCP file the wizard writes for Perplexity — `.cursor/mcp.json`, `.mcp.json`, `~/.codex/config.toml`, plus the printed `claude mcp add ...` hint — will fail to spawn the server. Exa (`exa-mcp-server` v3.2.1) is fine.

Other findings:
- **P1:** Cursor `.cursor/rules/*.mdc` files use empty `globs:` line (YAML null) — Cursor's documented frontmatter allows this but the rule's `alwaysApply: false` + empty globs means **the rule never auto-attaches**. It will only fire if invoked by name. Likely the intended behavior, but worth confirming.
- **P1:** Marketplace `owner.url` field is undocumented in the Claude Code marketplace schema; spec only allows `name` (required) and `email` (optional). Currently ignored, but a stricter validator could reject it.
- **P2:** `mcp/README.md` still documents Perplexity as `@anthropic-ai/mcp-server-perplexity` and Exa as `@anthropic-ai/mcp-server-exa` (the wizard uses `exa-mcp-server` which is correct). Doc/code drift.
- **P2:** Uninstall leaves the empty `.cursor/` directory behind because the bottom-up rmdir only sweeps `targets.commandsDir` (`.cursor/rules`) and its descendants — not `.cursor` itself.
- **P2:** `AGENTS.md` is 9,190 chars — over the typical Custom GPT Instructions limit (~8,000 chars). The wizard's ChatGPT hint acknowledges this ("or summarize it — the file is large") but does not offer a pre-trimmed copy-paste block.

Documentation/code consistency is otherwise tight. README, AGENTS.md, and CHANGELOG all describe the v1.6.0 paths correctly; the `getInstallTargets()` implementation in `bin/setup.js` matches the per-tool table in `README.md` line-for-line.

---

## Per-Tool Verdict

### Claude Code / Cowork — **PASS (with P1 note on `owner.url`)**

**Verified:**
- `/Users/Chinmaya/BigDeal-Ventures/compounding-marketing/.claude-plugin/marketplace.json` and `plugin.json` exist at the documented location.
- `marketplace.json` has required fields (`name`, `owner.{name}`, `plugins[]`). `plugins[0]` has required `name` + `source`. Optional `version`, `author`, `homepage`, `license`, `keywords`, `category`, `strict: false` all match the documented schema.
- Project-scope install (`--tool=claude-code --scope=project`) wrote:
  - `./compounding-marketing/` plugin tree (CLAUDE.md, AGENTS.md, skills, commands, .claude-plugin, mcp, integrations)
  - 77 symlinks in `.claude/commands/cm-*.md` (no broken links, verified via post-install check)
  - 61 skill dir symlinks in `.claude/skills/<skill>/`
  - `CLAUDE.md` with marker block
  - Manifest at `.compounding-marketing-install.json`
- `getInstallTargets()` (bin/setup.js:303-322) matches the documented `.mcp.json` (project) / `~/.claude.json` (user) split. Wizard correctly **skips** writing `~/.claude.json` at global scope and prints `claude mcp add --scope user …` instead (safer; matches `mcp` docs guidance that `~/.claude.json` holds Claude Code's own state).
- `commands/cm-setup.md` describes the same steps the wizard performs and references the same manifest layout.

**Findings:**
- (P1) `marketplace.json` has `owner.url`. The marketplace schema (`code.claude.com/docs/en/plugin-marketplaces` → Owner fields) defines only `name` (required) and `email` (optional). The extra field is silently ignored today; if Anthropic adds strict validation it may break. Recommendation: drop `owner.url` (the same URL is already on `plugin.json.author.url` and `plugin.json.homepage`).
- (Info) Wizard adds `"type": "stdio"` to project `.mcp.json` entries. The CC docs accept this — the canonical example omits `type` for stdio but `mcp add-json` and `~/.claude.json` accept it. No issue.

### Cursor — **PASS**

**Verified by live install at `/tmp/cm-qa-cursor`:**
- 77 `.mdc` files generated in `.cursor/rules/`. Each has YAML frontmatter with `description`, `globs:`, `alwaysApply: false`.
- `.cursor/mcp.json` write path matches docs: `.cursor/mcp.json` (project) / `~/.cursor/mcp.json` (global), per `cursor.com/docs/context/mcp`.
- JSON schema written by `mcpServerSpec(..., 'json')`:
  ```json
  {
    "mcpServers": {
      "perplexity": { "type": "stdio", "command": "npx", "args": [...], "env": {...} }
    }
  }
  ```
  Matches Cursor's documented stdio schema verbatim.
- `.mdc` frontmatter is valid YAML; description correctly extracted from each skill's `SKILL.md` frontmatter (e.g., `cm-positioning.mdc` description matches `positioning/SKILL.md`).

**Findings:**
- (P1) Generated `.mdc` files have `alwaysApply: false` AND empty `globs:`. Per Cursor docs that means the rule is "agent requested" only — it won't auto-attach to any file. If the intent is "load this rule whenever the user asks about positioning," that's correct; if the intent was "auto-load on `.md` files," the rule won't fire. Worth confirming the product intent. The rule body's `Load and follow the full skill definition at ...` is fine.

### Codex (OpenAI) — **PASS**

**Verified by live install:**
- Project install (`/tmp/cm-qa-codex`):
  - 61 skill **directories** symlinked under `./.agents/skills/<name>/` with each containing a real `SKILL.md` (followed the symlink — confirmed).
  - `AGENTS.md` written to project root (correct — Codex docs confirm Git-root discovery, not user-scoped).
  - No `.codex/config.toml` because MCPs weren't enabled in `--yes` mode (correct fallthrough).
- Global install (`HOME=/tmp/cm-qa-codex-global`, `--scope=global`):
  - Skills linked under `$HOME/.agents/skills/<name>/` — matches Codex docs (`$HOME/.agents/skills`).
  - `AGENTS.md` still written to **project** cwd (correct — Codex AGENTS.md is project-scoped even with global skills).
  - Install root at `~/.claude/plugins/compounding-marketing/` (this is a slight oddity — Codex doesn't read this path; it's just plugin storage. Skills are symlinked out of it into `~/.agents/skills/`, so functionally fine.)
- TOML format produced by `mcpServerSpec(..., 'toml')`:
  ```toml
  [mcp_servers.perplexity]
  command = "npx"
  args = ["-y", "@anthropic-ai/mcp-server-perplexity"]
  env = { PERPLEXITY_API_KEY = "..." }
  ```
  Matches the documented Codex `[mcp_servers.<name>]` table schema with `command` / `args` / `env`. Inline-table `env` syntax is valid TOML.

**Findings:**
- See P0 below — the `args` reference a non-existent npm package, breaking Perplexity over Codex same as everywhere else.

### ChatGPT — **PASS (with P2 about pasteability)**

**Verified:**
- `printChatGPTInstructions()` (bin/setup.js:857-868) prints a 4-step manual flow pointing at `chatgpt.com/gpts/editor`.
- Tells the user to paste `AGENTS.md` into the Instructions field.
- `AGENTS.md` is **9,190 chars**. Custom GPT Instructions field cap is documented at ~8,000 chars. The wizard hedges with "or summarize it — the file is large," but doesn't print a pre-trimmed block.
- Skill files (`skills/<name>/SKILL.md`) referenced for Knowledge upload are real paths that exist post-install.

**Findings:**
- (P2) Consider generating a slimmed `chatgpt-instructions.md` (≤7,500 chars) that fits the limit without manual trimming. Optional improvement.

### Zed — **PASS**

**Verified:**
- `/tmp/cm-qa-zed` post-install: project root has only `AGENTS.md`, `compounding-marketing/`, `.cm-config.json`, `.gitignore`, `.compounding-marketing-install.json`. **No `.zed/` directory created** — confirming the v1.6.0 fix (CHANGELOG line 84).
- Zed docs confirm `AGENTS.md` at project root is one of the rule-file names Zed checks (along with `.rules`, `.cursorrules`, `CLAUDE.md` etc.). It's at position 7 in Zed's lookup order — if the project already has `.rules` or `.cursorrules`, Zed will use those first. Not a wizard bug (the wizard can't know what else exists), but worth a doc note.

### Other / Generic — **PASS**

- Falls through to the default `getInstallTargets` branch (bin/setup.js:369-375): writes only `AGENTS.md` + plugin dir. No MCP, no tool-specific dirs. Correct for an unknown tool.

---

## File-Format Mismatches

### P0 — Perplexity MCP package name does not exist on npm

**Files affected:**
- `bin/setup.js:701` — TOML output
- `bin/setup.js:708` — JSON output
- `bin/setup.js:848` — `claude mcp add` hint
- `mcp/README.md:58, 136` — docs reference the same bad name

**Evidence:**
```
$ npm view @anthropic-ai/mcp-server-perplexity name version
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/@anthropic-ai%2fmcp-server-perplexity - Not found
```

**Correct package:** `server-perplexity-ask` (v0.1.3, official Anthropic-published Perplexity MCP). Confirmed via `npm view server-perplexity-ask`.

**Impact:** Every Perplexity MCP file the wizard generates is a runtime failure. User enables Perplexity → wizard writes `npx -y @anthropic-ai/mcp-server-perplexity` → tool tries to launch → npm 404 → MCP never starts. Affects Cursor, Codex, Claude Code (project `.mcp.json`), and the printed `claude mcp add ...` hint identically.

**Fix:** Replace `@anthropic-ai/mcp-server-perplexity` with `server-perplexity-ask` in all five call sites. Update `mcp/README.md` to match.

### P1 — Cursor `.mdc` rules never auto-attach

Generated frontmatter is:
```
---
description: ...
globs:
alwaysApply: false
---
```

With `alwaysApply: false` and empty `globs`, Cursor classifies these as "agent-requested" rules: they appear in the rule menu and the agent can pull them by description, but they never auto-attach to specific files. Per Cursor's MCP/rules docs this is the "manual mode" behavior.

If the design intent is "Cursor's agent should auto-load the right skill when the user asks for marketing copy," this works because the agent inspects the description. Confirm intent. If you want them to auto-attach in certain contexts, set `globs` (e.g., `globs: "**/marketing/**/*"`) or `alwaysApply: true` for a small subset (e.g., `cm-context`).

### P1 — Marketplace `owner.url` is non-spec

`.claude-plugin/marketplace.json` line 6:
```json
"owner": {
  "name": "Chinmaya Shankar",
  "email": "c@bigdeal.ventures",
  "url": "https://github.com/classicchins/compounding-marketing"
}
```

Marketplace schema (Claude Code docs → Owner fields) defines only `name` + `email`. Today Anthropic's loader ignores unknown fields, so this is non-fatal, but a strict-mode validator change would reject it.

---

## Documentation vs Code Mismatches

| Item | Code says | Docs say | Match? |
|------|-----------|----------|--------|
| Claude project MCP | `.mcp.json` at cwd (bin/setup.js:318) | `.mcp.json` at project root | ✓ |
| Claude global MCP | `null` (prints `claude mcp add --scope user`) (bin/setup.js:312) | `~/.claude.json` (CC's own state file) | ✓ correct decision |
| Cursor project MCP | `.cursor/mcp.json` at cwd (bin/setup.js:330) | `.cursor/mcp.json` | ✓ |
| Cursor global MCP | `~/.cursor/mcp.json` (bin/setup.js:329) | `~/.cursor/mcp.json` | ✓ |
| Cursor rules | `.cursor/rules/cm-*.mdc` (bin/setup.js:325) | `.cursor/rules/*.mdc` | ✓ |
| Codex project skills | `./.agents/skills/<name>/` (bin/setup.js:343) | `$CWD/.agents/skills` per docs | ✓ |
| Codex global skills | `~/.agents/skills/<name>/` (bin/setup.js:339) | `$HOME/.agents/skills` | ✓ |
| Codex MCP | `~/.codex/config.toml` or `./.codex/config.toml` (bin/setup.js:340/343) | `~/.codex/config.toml`; project `.codex/config.toml` for trusted projects | ✓ |
| Codex AGENTS.md | always project cwd (bin/setup.js:347) | project-scoped, Git-root discovery | ✓ |
| Zed | only `AGENTS.md` at cwd (bin/setup.js:356) | rule files at project root, AGENTS.md supported | ✓ |
| Per-tool table (README.md:130-135) | matches `getInstallTargets()` | n/a | ✓ |
| Per-tool table (AGENTS.md:13-20) | matches `getInstallTargets()` | n/a | ✓ |
| `mcp/README.md` package name | `@anthropic-ai/mcp-server-perplexity` (also `@anthropic-ai/mcp-server-exa`) | wizard uses `@anthropic-ai/mcp-server-perplexity` + `exa-mcp-server` (mismatch on Exa) | ✗ |
| Changelog ref to v1.2.0 bug | user prompt mentioned "fixed in v1.6.0" | CHANGELOG.md has no v1.2.0 entry; jumps from v1.5.0 to v1.6.0. The fix line lives under v1.6.0 "Fixed" (line 84) | partial — fix is real but the prior version it references is unclear in the changelog |

---

## Issue Tracker

### P0 — must-fix before release

1. **Perplexity MCP package name is invalid.**
   - Files: `bin/setup.js:701`, `bin/setup.js:708`, `bin/setup.js:848`, `mcp/README.md:58`, `mcp/README.md:136`
   - Fix: replace `@anthropic-ai/mcp-server-perplexity` with `server-perplexity-ask` (confirmed live on npm v0.1.3).
   - Smoke test after fix: `npx -y server-perplexity-ask --help` should not 404.

### P1 — fix before release if possible

2. **`mcp/README.md` documents Exa as `@anthropic-ai/mcp-server-exa`** but wizard writes `exa-mcp-server` (which is the correct npm package).
   - File: `mcp/README.md:71`
   - Fix: change the Exa example to `["-y", "exa-mcp-server"]`.
3. **`marketplace.json` `owner.url` is undocumented.**
   - File: `.claude-plugin/marketplace.json:6`
   - Fix: remove the `url` field from `owner` (already present on `plugin.json.author.url`).
4. **Cursor `.mdc` rules never auto-attach** (empty `globs` + `alwaysApply: false`).
   - File: `bin/setup.js:638-650`
   - Decision needed: is "agent-requested only" the intent? If yes, document in README so users know they'll have to invoke by name. If no, set `globs` to something meaningful (e.g., `"**/marketing/**"`, or set `alwaysApply: true` for `cm-context` only).

### P2 — nice-to-have

5. **AGENTS.md exceeds Custom GPT Instructions limit (9,190 > ~8,000 chars).**
   - File: `bin/setup.js:857-868` (`printChatGPTInstructions`)
   - Fix: generate a slimmer `chatgpt-instructions.md` (top-line skill list + workflow names only) and tell the user to paste *that* instead.
6. **Uninstall leaves empty `.cursor/` dir.**
   - File: `bin/setup.js:999` (`dirsToTry` only includes `commandsDir = .cursor/rules`, not its parent).
   - Fix: after sweeping `dirsToTry`, also try to remove the parent of each (`path.dirname(commandsDir)`) if it's empty.
7. **CHANGELOG doesn't have a v1.2.0 entry.** The task description references a "v1.2.0 bug" but the changelog jumps from v1.5.0 → v1.6.0. The fix ("Zed target no longer writes a `.zed/` directory") is correctly in v1.6.0 → Fixed, but the lineage is opaque. Optional: add a parenthetical "(regression from v1.2.0)" if accurate.
8. **No verification that the workflow commands `cm-{name}.md` won't collide with skill-derived `cm-{name}.md`.** Currently safe (none collide) but if someone adds a `social-media-strategy` workflow command, it would clash with the existing `social-media-strategy` skill symlink. Add a check to `registerSkillsForTool` that errors if a workflow command name matches a skill name.

---

## What I Did NOT Verify

- Actual end-to-end execution inside Cursor/Codex/Zed (per the task description — verify outputs only).
- That `npx -y server-perplexity-ask` works against a real Perplexity API key (out of scope — only verified the npm package exists; the wizard's other args are reasonable).
- Behavior of Claude Cowork specifically — the wizard treats it identically to `claude-code` (same install paths), which is the documented expectation but unverified against Cowork's own docs.
- Windows path handling — all tests on macOS; the symlink fallback in `makeFsx.symlink` (bin/setup.js:213-228) copies on EPERM/EACCES, which should cover Windows-without-developer-mode, but unverified.

---

## Recommendations

1. **Ship P0 fix immediately.** A one-line npm package rename in 5 places unblocks the entire Perplexity flow.
2. **Add a smoke test to `scripts/`**: `node -e "require('child_process').execSync('npx -y server-perplexity-ask --version', {stdio: 'inherit'})"` (run in CI) catches future package-name drift.
3. **Decide on Cursor `.mdc` semantics** — "agent-requested" vs "auto-attach". Document the answer in `README.md` and `commands/cm-setup.md`.
4. **Drop `owner.url`** from `marketplace.json` before any strict-mode validator lands upstream.
5. **Slim AGENTS.md for ChatGPT** — generate a derived `chatgpt-instructions.md` at build time so the wizard can hand users a paste-ready block.
6. **Optional polish:** make uninstall sweep the parent of `commandsDir` when empty, so `.cursor/` doesn't linger.
