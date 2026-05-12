#!/usr/bin/env node

/**
 * Compounding Marketing Setup Wizard (v1.6.0)
 *
 * Interactive installer for Claude Code, Claude Cowork, Cursor, OpenAI Codex,
 * ChatGPT, and Zed. Never modifies any user file without explicit confirmation.
 *
 * Usage:
 *   npx compounding-marketing                          # interactive
 *   npx compounding-marketing --yes                    # accept safe defaults
 *   npx compounding-marketing --dry-run                # preview only
 *   npx compounding-marketing --uninstall              # roll back via manifest
 *   npx compounding-marketing --scope=global|project|custom
 *   npx compounding-marketing --target=<path>          # custom install location
 *   npx compounding-marketing --tool=claude-code|claude-cowork|cursor|codex|chatgpt|zed|other
 *   npx compounding-marketing --version | --help | --info
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');

const PKG_ROOT = path.resolve(__dirname, '..');
const PKG_VERSION = require('../package.json').version;

const MARKER_START = '<!-- COMPOUNDING-MARKETING-START -->';
const MARKER_END = '<!-- COMPOUNDING-MARKETING-END -->';
const MANIFEST_FILE = '.compounding-marketing-install.json';

const SUPPORTED_TOOLS = ['claude-code', 'claude-cowork', 'cursor', 'codex', 'chatgpt', 'zed', 'other'];
const SUPPORTED_SCOPES = ['global', 'project', 'custom'];

// ─── ANSI colors ────────────────────────────────────────────────────────────
const colors = {
  reset: '\x1b[0m', bright: '\x1b[1m', dim: '\x1b[2m',
  green: '\x1b[32m', yellow: '\x1b[33m', blue: '\x1b[34m',
  cyan: '\x1b[36m', red: '\x1b[31m', magenta: '\x1b[35m',
};
const c = (color, text) => `${colors[color] || ''}${text}${colors.reset}`;

// ─── Banner / help ──────────────────────────────────────────────────────────
function printBanner() {
  console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}                                                               ${c('cyan', '║')}
${c('cyan', '║')}     ${c('bright', 'COMPOUNDING MARKETING')} ${c('dim', `v${PKG_VERSION}`)}                              ${c('cyan', '║')}
${c('cyan', '║')}     ${c('dim', '61 skills · 16 workflows · Safe install · Cross-platform')}  ${c('cyan', '║')}
${c('cyan', '║')}                                                               ${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}
`);
}

function printHelp() {
  console.log(`
${c('bright', 'compounding-marketing')} — interactive plugin installer

${c('bright', 'USAGE')}
  npx compounding-marketing [options]

${c('bright', 'OPTIONS')}
  --yes, -y               Accept safe defaults (never overwrite existing files)
  --dry-run               Show actions without writing anything
  --uninstall             Roll back a previous install using the manifest
  --scope=<value>         global | project | custom (default: interactive prompt)
  --target=<path>         Custom install path (implies --scope=custom)
  --tool=<value>          claude-code | claude-cowork | cursor | codex | chatgpt | zed | other
  --version, -v           Print the package version and exit
  --info                  Print quick info and exit
  --help, -h              Print this help

${c('bright', 'EXAMPLES')}
  npx compounding-marketing                       # interactive
  npx compounding-marketing --dry-run             # preview every action
  npx compounding-marketing --yes --scope=project # CI-friendly install
  npx compounding-marketing --uninstall           # reverse a previous install
  npx compounding-marketing --tool=codex --scope=global

${c('bright', 'SAFETY')}
  Installation never modifies your files without confirmation. Every existing-file
  collision prompts for: merge with markers / overwrite (with .bak backup) / skip.
  A manifest at ${c('dim', MANIFEST_FILE)} records every change so --uninstall
  can reverse them and restore .bak backups byte-identical.
`);
}

// ─── Argv parser ────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const flags = {
    yes: false, dryRun: false, uninstall: false,
    scope: null, target: null, tool: null,
    version: false, info: false, help: false,
  };
  for (const arg of argv) {
    if (arg === '--yes' || arg === '-y') flags.yes = true;
    else if (arg === '--dry-run') flags.dryRun = true;
    else if (arg === '--uninstall') flags.uninstall = true;
    else if (arg === '--version' || arg === '-v') flags.version = true;
    else if (arg === '--info') flags.info = true;
    else if (arg === '--help' || arg === '-h') flags.help = true;
    else if (arg.startsWith('--scope=')) {
      const v = arg.slice('--scope='.length);
      if (!SUPPORTED_SCOPES.includes(v)) throw new Error(`Invalid --scope: ${v}. Must be one of: ${SUPPORTED_SCOPES.join(', ')}`);
      flags.scope = v;
    } else if (arg.startsWith('--target=')) {
      flags.target = arg.slice('--target='.length);
      flags.scope = 'custom';
    } else if (arg.startsWith('--tool=')) {
      const v = arg.slice('--tool='.length);
      if (!SUPPORTED_TOOLS.includes(v)) throw new Error(`Invalid --tool: ${v}. Must be one of: ${SUPPORTED_TOOLS.join(', ')}`);
      flags.tool = v;
    } else if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}. Run --help for usage.`);
    }
  }
  return flags;
}

// ─── Prompt helpers ─────────────────────────────────────────────────────────
function createPrompt() {
  return readline.createInterface({ input: process.stdin, output: process.stdout });
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (a) => resolve(a.trim())));
}

async function select(rl, question, options, opts = {}) {
  const { showDesc = false, defaultValue } = opts;
  console.log(`\n${c('bright', question)}`);
  options.forEach((opt, i) => {
    const isDefault = defaultValue !== undefined && opt.value === defaultValue;
    const desc = showDesc && opt.desc ? `\n     ${c('dim', opt.desc)}` : '';
    const marker = isDefault ? c('green', ' (default)') : '';
    console.log(`  ${c('cyan', `${i + 1})`)} ${opt.label}${marker}${desc}`);
  });
  let attempts = 0;
  while (attempts < 3) {
    const prompt = `\n  ${c('dim', 'Enter')} ${c('cyan', `1-${options.length}`)}${defaultValue !== undefined ? c('dim', ' (or Enter for default)') : ''}: `;
    const answer = await ask(rl, prompt);
    if (answer === '' && defaultValue !== undefined) return defaultValue;
    const index = parseInt(answer, 10) - 1;
    if (index >= 0 && index < options.length) return options[index].value;
    attempts++;
    if (attempts < 3) console.log(c('yellow', `  Invalid choice. Please enter a number from 1 to ${options.length}.`));
  }
  console.log(c('yellow', `  Using default: ${defaultValue || options[0].value}`));
  return defaultValue !== undefined ? defaultValue : options[0].value;
}

async function confirm(rl, question, defaultYes = true) {
  const hint = defaultYes ? `${c('green', 'Y')}/${c('dim', 'n')}` : `${c('dim', 'y')}/${c('green', 'N')}`;
  const answer = await ask(rl, `  ${question} [${hint}] `);
  if (answer === '') return defaultYes;
  return answer.toLowerCase().startsWith('y');
}

async function multiSelect(rl, question, options) {
  console.log(`\n${c('bright', question)}`);
  console.log(`  ${c('dim', '(Comma-separated numbers, "all", or Enter to skip)')}`);
  options.forEach((opt, i) => {
    const desc = opt.desc ? ` ${c('dim', '— ' + opt.desc)}` : '';
    console.log(`  ${c('cyan', `${i + 1})`)} ${opt.label}${desc}`);
  });
  const answer = await ask(rl, `\n  Your picks: `);
  if (answer.toLowerCase() === 'all') return options.map(o => o.value);
  if (answer === '' || answer.toLowerCase() === 'none') return [];
  return answer.split(',')
    .map(s => parseInt(s.trim(), 10) - 1)
    .filter(i => i >= 0 && i < options.length)
    .map(i => options[i].value);
}

// ─── Filesystem wrapper (dry-run aware + manifest tracking) ─────────────────
function makeFsx(flags, manifest) {
  const dryLog = (action, target, extra = '') => {
    if (flags.dryRun) console.log(c('magenta', `    [dry-run] ${action} ${target}${extra ? ' ' + extra : ''}`));
  };
  return {
    flags, manifest,
    write(filePath, content, kind = 'file') {
      dryLog('WRITE', filePath, `(${content.length} bytes)`);
      if (flags.dryRun) return;
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content);
      manifest.createdFiles.push({ path: filePath, kind });
    },
    copy(src, dest, kind = 'file') {
      dryLog('COPY', `${src} → ${dest}`);
      if (flags.dryRun) return;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      manifest.createdFiles.push({ path: dest, kind });
    },
    append(filePath, content, label) {
      dryLog('APPEND', filePath, `(${content.length} bytes${label ? ', ' + label : ''})`);
      if (flags.dryRun) return;
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.appendFileSync(filePath, content);
    },
    symlink(target, linkPath, label) {
      dryLog('SYMLINK', `${linkPath} → ${target}`);
      if (flags.dryRun) return true;
      try {
        fs.mkdirSync(path.dirname(linkPath), { recursive: true });
        fs.symlinkSync(target, linkPath);
        manifest.createdSymlinks.push({ path: linkPath, target });
        return true;
      } catch (err) {
        if (err.code === 'EPERM' || err.code === 'EACCES') {
          try {
            const absoluteTarget = path.resolve(path.dirname(linkPath), target);
            const stat = fs.statSync(absoluteTarget);
            if (stat.isDirectory()) {
              fs.cpSync(absoluteTarget, linkPath, { recursive: true });
            } else {
              fs.copyFileSync(absoluteTarget, linkPath);
            }
            manifest.createdFiles.push({ path: linkPath, kind: 'symlink-fallback' });
            return true;
          } catch (_) { /* fall through */ }
        }
        console.log(c('yellow', `    ⚠  Could not link ${label || linkPath}: ${err.message}`));
        return false;
      }
    },
    unlink(filePath) {
      dryLog('UNLINK', filePath);
      if (flags.dryRun) return;
      try { fs.unlinkSync(filePath); } catch (_) { /* ignore */ }
    },
    mkdir(dirPath) {
      dryLog('MKDIR', dirPath);
      if (flags.dryRun) return;
      fs.mkdirSync(dirPath, { recursive: true });
    },
    backup(filePath) {
      const bak = filePath + '.bak';
      dryLog('BACKUP', `${filePath} → ${bak}`);
      if (flags.dryRun) return bak;
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) fs.cpSync(filePath, bak, { recursive: true });
        else fs.copyFileSync(filePath, bak);
        manifest.modifiedFiles.push({ path: filePath, backupPath: bak });
        return bak;
      } catch (err) {
        console.log(c('yellow', `    ⚠  Could not back up ${filePath}: ${err.message}`));
        return null;
      }
    },
  };
}

// ─── Collision handling ─────────────────────────────────────────────────────
async function resolveCollision(rl, destPath, kind, flags) {
  if (!fs.existsSync(destPath)) return 'overwrite';
  if (flags.yes) {
    if (kind === 'instructions' || kind === 'gitignore' || kind === 'mcp-json' || kind === 'mcp-toml') return 'merge';
    return 'skip';
  }
  console.log(`\n  ${c('yellow', '⚠')}  ${c('bright', destPath)} ${c('dim', `(${kind})`)} already exists.`);
  const mergeable = ['instructions', 'gitignore', 'mcp-json', 'mcp-toml'];
  const options = mergeable.includes(kind)
    ? [
        { label: 'Merge with idempotent markers (Recommended)', value: 'merge' },
        { label: 'Overwrite (creates a .bak backup first)', value: 'overwrite' },
        { label: 'Skip (leave the existing file untouched)', value: 'skip' },
      ]
    : [
        { label: 'Overwrite (creates a .bak backup first)', value: 'overwrite' },
        { label: 'Skip (leave the existing file untouched, Recommended)', value: 'skip' },
      ];
  return select(rl, 'How should I handle this?', options, { defaultValue: options[0].value });
}

// ─── Per-tool target resolution ─────────────────────────────────────────────
function getInstallTargets(scope, tool, cwd, customTarget) {
  const home = os.homedir();
  let installRoot, projectRoot;
  if (scope === 'global') {
    installRoot = path.join(home, '.claude', 'plugins', 'compounding-marketing');
    projectRoot = home; // tool-specific paths under home (overridden per-tool below)
  } else if (scope === 'custom' && customTarget) {
    // For custom scope, treat --target as the project root.
    // Plugin files go into <target>/compounding-marketing/; instructions/MCP at <target>/.
    projectRoot = path.resolve(customTarget);
    installRoot = path.join(projectRoot, 'compounding-marketing');
  } else {
    // Project scope: cwd is the project root.
    projectRoot = cwd;
    installRoot = path.join(cwd, 'compounding-marketing');
  }

  const targets = {
    scope, tool, installRoot,
    commandsDir: null,
    skillsLinkDir: null,
    instructionsFile: null,
    mcpConfigFile: null,
    mcpConfigFormat: null,
    registrationStyle: 'none',
  };

  switch (tool) {
    case 'claude-code':
    case 'claude-cowork':
      if (scope === 'global') {
        targets.commandsDir = path.join(home, '.claude', 'commands');
        targets.skillsLinkDir = path.join(home, '.claude', 'skills');
        targets.instructionsFile = path.join(home, '.claude', 'CLAUDE.md');
        // Claude Code global MCP config lives in ~/.claude.json under top-level mcpServers,
        // which is risky to merge into directly (it holds CC's own state). Skip MCP write at
        // global scope and instead print the `claude mcp add` commands the user can run.
        targets.mcpConfigFile = null;
        targets.mcpConfigFormat = null;
      } else {
        targets.commandsDir = path.join(projectRoot, '.claude', 'commands');
        targets.skillsLinkDir = path.join(projectRoot, '.claude', 'skills');
        targets.instructionsFile = path.join(projectRoot, 'CLAUDE.md');
        targets.mcpConfigFile = path.join(projectRoot, '.mcp.json');
        targets.mcpConfigFormat = 'json';
      }
      targets.registrationStyle = 'claude-symlinks';
      break;

    case 'cursor':
      targets.commandsDir = path.join(projectRoot, '.cursor', 'rules');
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(projectRoot, 'AGENTS.md');
      targets.mcpConfigFile = scope === 'global'
        ? path.join(home, '.cursor', 'mcp.json')
        : path.join(projectRoot, '.cursor', 'mcp.json');
      targets.mcpConfigFormat = 'json';
      targets.registrationStyle = 'cursor-mdc';
      break;

    case 'codex':
      // OpenAI Codex: skills live as DIRECTORIES at ~/.agents/skills/<name>/SKILL.md (global)
      // or ./.agents/skills/<name>/SKILL.md (project). MCP config is TOML at config.toml.
      if (scope === 'global') {
        targets.skillsLinkDir = path.join(home, '.agents', 'skills');
        targets.mcpConfigFile = path.join(home, '.codex', 'config.toml');
      } else {
        targets.skillsLinkDir = path.join(projectRoot, '.agents', 'skills');
        targets.mcpConfigFile = path.join(projectRoot, '.codex', 'config.toml');
      }
      targets.commandsDir = null;
      // AGENTS.md is always project-scoped in Codex (Git-root discovery, not ~/)
      targets.instructionsFile = path.join(projectRoot, 'AGENTS.md');
      targets.mcpConfigFormat = 'toml';
      targets.registrationStyle = 'codex-dir';
      break;

    case 'zed':
      // Zed reads project-root AGENTS.md. No separate plugin dir.
      targets.commandsDir = null;
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(projectRoot, 'AGENTS.md');
      targets.mcpConfigFile = null;
      targets.registrationStyle = 'none';
      break;

    case 'chatgpt':
      targets.commandsDir = null;
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(projectRoot, 'AGENTS.md');
      targets.mcpConfigFile = null;
      targets.registrationStyle = 'none';
      break;

    default:
      targets.commandsDir = null;
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(projectRoot, 'AGENTS.md');
      targets.mcpConfigFile = null;
      targets.registrationStyle = 'none';
  }
  return targets;
}

// ─── Manifest ───────────────────────────────────────────────────────────────
function newManifest(flags, scope, tool, targets) {
  // Preserve prior manifest entries on re-runs so --uninstall stays accurate.
  const mPath = manifestPath(scope, targets.installRoot);
  let prior = null;
  try {
    if (fs.existsSync(mPath)) prior = JSON.parse(fs.readFileSync(mPath, 'utf8'));
  } catch (_) { /* corrupt; start fresh */ }
  return {
    version: PKG_VERSION,
    timestamp: new Date().toISOString(),
    scope, tool,
    flags: { yes: flags.yes, dryRun: flags.dryRun, target: flags.target },
    installRoot: targets.installRoot,
    commandsDir: targets.commandsDir,
    skillsLinkDir: targets.skillsLinkDir,
    instructionsFile: targets.instructionsFile,
    mcpConfigFile: targets.mcpConfigFile,
    createdFiles: prior?.createdFiles || [],
    createdSymlinks: prior?.createdSymlinks || [],
    modifiedFiles: prior?.modifiedFiles || [],
    appendedMarkers: prior?.appendedMarkers || [],
    mcpEntries: prior?.mcpEntries || [], // each: { file, format, serverName }
  };
}

function dedupeManifest(manifest) {
  const dedupe = (arr, key) => {
    const seen = new Set();
    return arr.filter(e => {
      if (!e) return false;
      const k = e[key];
      if (!k || seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  };
  manifest.createdFiles = dedupe(manifest.createdFiles, 'path');
  manifest.createdSymlinks = dedupe(manifest.createdSymlinks, 'path');
  manifest.modifiedFiles = dedupe(manifest.modifiedFiles, 'path');
  manifest.appendedMarkers = dedupe(manifest.appendedMarkers, 'path');
  // MCP entries unique by file+serverName
  const seenMcp = new Set();
  manifest.mcpEntries = (manifest.mcpEntries || []).filter(e => {
    const k = `${e.file}::${e.serverName}`;
    if (seenMcp.has(k)) return false;
    seenMcp.add(k);
    return true;
  });
  return manifest;
}

function manifestPath(scope, installRoot) {
  if (scope === 'global') return path.join(os.homedir(), '.claude', MANIFEST_FILE);
  return path.join(path.dirname(installRoot), MANIFEST_FILE);
}

function persistManifest(manifest, mPath, flags) {
  dedupeManifest(manifest);
  if (flags.dryRun) {
    console.log(c('magenta', `    [dry-run] WRITE manifest ${mPath} (${manifest.createdFiles.length} files, ${manifest.createdSymlinks.length} symlinks, ${manifest.modifiedFiles.length} modified, ${manifest.appendedMarkers.length} markers, ${manifest.mcpEntries.length} MCP entries)`));
    return;
  }
  fs.mkdirSync(path.dirname(mPath), { recursive: true });
  fs.writeFileSync(mPath, JSON.stringify(manifest, null, 2));
}

// ─── Recursive copy with collision handling ─────────────────────────────────
async function copyTreeRespectingCollisions(src, dst, rl, fsx) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fsx.mkdir(dst);
    for (const entry of fs.readdirSync(src)) {
      await copyTreeRespectingCollisions(path.join(src, entry), path.join(dst, entry), rl, fsx);
    }
    return;
  }
  if (fs.existsSync(dst)) {
    const decision = await resolveCollision(rl, dst, 'file', fsx.flags);
    if (decision === 'skip') {
      console.log(c('dim', `    ↷ skipped ${dst}`));
      return;
    }
    if (decision === 'overwrite') fsx.backup(dst);
  }
  fsx.copy(src, dst);
}

// ─── Marker-block append / replace for instructions files ───────────────────
async function applyInstructionsBlock(rl, instructionsFile, pluginContent, fsx, manifest) {
  if (!instructionsFile) return;
  const markerBlock = `\n${MARKER_START}\n${pluginContent}\n${MARKER_END}\n`;

  if (!fs.existsSync(instructionsFile)) {
    const header = `# ${path.basename(instructionsFile)}\n\nThis file provides guidance to AI agents working in this repository.\n`;
    fsx.write(instructionsFile, header + markerBlock, 'instructions');
    manifest.appendedMarkers.push({ path: instructionsFile });
    console.log(c('green', `  ✓ Created ${instructionsFile} with plugin block`));
    return;
  }

  const existing = fs.readFileSync(instructionsFile, 'utf8');
  const startIdx = existing.indexOf(MARKER_START);
  const endIdx = existing.indexOf(MARKER_END);

  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    const updated = existing.substring(0, startIdx)
      + MARKER_START + '\n' + pluginContent + '\n' + MARKER_END
      + existing.substring(endIdx + MARKER_END.length);
    if (fsx.flags.dryRun) {
      console.log(c('magenta', `    [dry-run] UPDATE marker block in ${instructionsFile}`));
    } else {
      fs.writeFileSync(instructionsFile, updated);
      manifest.appendedMarkers.push({ path: instructionsFile });
    }
    console.log(c('green', `  ✓ Updated plugin block in ${instructionsFile}`));
    return;
  }

  const decision = await resolveCollision(rl, instructionsFile, 'instructions', fsx.flags);
  if (decision === 'skip') {
    console.log(c('dim', `  ↷ Skipped ${instructionsFile}`));
    return;
  }
  if (decision === 'overwrite') {
    fsx.backup(instructionsFile);
    const header = `# ${path.basename(instructionsFile)}\n\nThis file provides guidance to AI agents working in this repository.\n`;
    if (fsx.flags.dryRun) {
      console.log(c('magenta', `    [dry-run] OVERWRITE ${instructionsFile} (.bak created)`));
    } else {
      fs.writeFileSync(instructionsFile, header + markerBlock);
      manifest.appendedMarkers.push({ path: instructionsFile });
    }
    console.log(c('green', `  ✓ Overwrote ${instructionsFile} (backup at .bak)`));
    return;
  }
  // Merge path: back up the original BEFORE appending so --uninstall can
  // restore byte-identical (the marker-strip regex on uninstall normalizes
  // whitespace and can leave the file 1 byte short of the original).
  fsx.backup(instructionsFile);
  fsx.append(instructionsFile, markerBlock, 'plugin block');
  manifest.appendedMarkers.push({ path: instructionsFile });
  console.log(c('green', `  ✓ Appended plugin block to ${instructionsFile} (backup at .bak)`));
}

// ─── Idempotent .gitignore append ───────────────────────────────────────────
function ensureGitignore(cwd, line, label, fsx) {
  const gitignorePath = path.join(cwd, '.gitignore');
  const block = `\n# ${label}\n${line}\n`;
  if (!fs.existsSync(gitignorePath)) {
    fsx.write(gitignorePath, block.trimStart(), 'gitignore');
    console.log(c('green', `  ✓ Created .gitignore with ${line}`));
    return;
  }
  const existing = fs.readFileSync(gitignorePath, 'utf8');
  if (existing.split('\n').map(l => l.trim()).includes(line)) return;
  fsx.append(gitignorePath, block, label);
  console.log(c('green', `  ✓ Added ${line} to .gitignore`));
}

// ─── Build instructions content ─────────────────────────────────────────────
function buildInstructionsContent(scope, installRoot) {
  const sourceFile = path.join(PKG_ROOT, 'CLAUDE.md');
  if (!fs.existsSync(sourceFile)) return '';
  let content = fs.readFileSync(sourceFile, 'utf8');
  const prefix = scope === 'project' ? 'compounding-marketing' : installRoot;
  content = content
    .replace(/`skills\//g, `\`${prefix}/skills/`)
    .replace(/`commands\//g, `\`${prefix}/commands/`)
    .replace(/`mcp\//g, `\`${prefix}/mcp/`)
    .replace(/`integrations\//g, `\`${prefix}/integrations/`)
    .replace(/`\.agents\//g, `\`${prefix}/.agents/`);
  return content;
}

// ─── Per-tool skill / command registration ──────────────────────────────────
async function registerSkillsForTool(rl, targets, fsx, manifest) {
  const style = targets.registrationStyle;
  const skillsSource = path.join(targets.installRoot, 'skills');
  const commandsSource = path.join(targets.installRoot, 'commands');

  if (!fs.existsSync(skillsSource)) {
    console.log(c('yellow', `  ⚠  No skills/ at ${skillsSource}; skipping registration.`));
    return;
  }
  const skillDirs = fs.readdirSync(skillsSource).filter(d => {
    if (d.startsWith('_')) return false;
    try { return fs.statSync(path.join(skillsSource, d)).isDirectory(); } catch (_) { return false; }
  });

  const dirToCheck = targets.commandsDir || targets.skillsLinkDir;
  if (!dirToCheck) return;

  // Cleanup existing cm-* entries (gated)
  let existingCm = [];
  if (fs.existsSync(dirToCheck)) {
    existingCm = fs.readdirSync(dirToCheck).filter(f => f.startsWith('cm-'));
  }
  let cleanup = true;
  if (existingCm.length > 0) {
    console.log(`\n  ${c('yellow', '⚠')}  Found ${existingCm.length} existing ${c('bright', 'cm-*')} entries in ${dirToCheck}.`);
    if (fsx.flags.yes) {
      cleanup = true;
      console.log(c('dim', '  Refreshing existing entries (--yes).'));
    } else {
      cleanup = await confirm(rl, 'Replace them with fresh entries?', true);
    }
  }
  if (cleanup && existingCm.length > 0) {
    for (const entry of existingCm) {
      const entryPath = path.join(dirToCheck, entry);
      try {
        const stat = fs.lstatSync(entryPath);
        if (stat.isSymbolicLink() || stat.isFile()) fsx.unlink(entryPath);
        else if (stat.isDirectory()) {
          if (!fsx.flags.dryRun) fs.rmSync(entryPath, { recursive: true, force: true });
        }
      } catch (_) { /* ignore */ }
    }
  }

  if (style === 'claude-symlinks') {
    fsx.mkdir(targets.commandsDir);
    if (targets.skillsLinkDir) fsx.mkdir(targets.skillsLinkDir);

    let cmdCount = 0;
    if (fs.existsSync(commandsSource)) {
      for (const file of fs.readdirSync(commandsSource).filter(f => f.endsWith('.md'))) {
        const linkPath = path.join(targets.commandsDir, file);
        if (fs.existsSync(linkPath)) continue;
        const linkTarget = path.relative(targets.commandsDir, path.join(commandsSource, file));
        if (fsx.symlink(linkTarget, linkPath, file)) cmdCount++;
      }
    }
    let skillCount = 0;
    for (const skill of skillDirs) {
      const skillFile = path.join(skillsSource, skill, 'SKILL.md');
      if (!fs.existsSync(skillFile)) continue;
      const cmdLinkName = skill.startsWith('cm-') ? `${skill}.md` : `cm-${skill}.md`;
      const cmdLinkPath = path.join(targets.commandsDir, cmdLinkName);
      if (!fs.existsSync(cmdLinkPath)) {
        const linkTarget = path.relative(targets.commandsDir, skillFile);
        if (fsx.symlink(linkTarget, cmdLinkPath, cmdLinkName)) skillCount++;
      }
      if (targets.skillsLinkDir) {
        const skillDirLink = path.join(targets.skillsLinkDir, skill);
        if (!fs.existsSync(skillDirLink)) {
          const linkTarget = path.relative(targets.skillsLinkDir, path.join(skillsSource, skill));
          fsx.symlink(linkTarget, skillDirLink, skill);
        }
      }
    }
    console.log(c('green', `  ✓ Registered ${cmdCount} workflow commands + ${skillCount} skills as /cm-{name}`));
    if (targets.skillsLinkDir) console.log(c('green', `  ✓ Linked ${skillDirs.length} skill dirs under ${targets.skillsLinkDir}`));
  }

  else if (style === 'cursor-mdc') {
    // Cursor: generate .mdc files with description/globs/alwaysApply frontmatter.
    fsx.mkdir(targets.commandsDir);
    const writeMdc = (name, description, skillFilePath) => {
      const mdcPath = path.join(targets.commandsDir, `cm-${name}.mdc`);
      if (fs.existsSync(mdcPath)) return false;
      const relSkillPath = path.relative(path.dirname(mdcPath), skillFilePath);
      // Cursor agent-requested rules: agent invokes when the description matches
      // user intent. Keep alwaysApply=false so the rule is loaded on demand
      // (loading all 61 skills into every chat would blow context). Description
      // includes the skill's trigger phrases so Cursor's agent discovery works.
      const body = `---
description: ${description.replace(/"/g, "'").replace(/\n/g, ' ')}
globs:
alwaysApply: false
---

# cm-${name}

Load and follow the full skill definition at \`${relSkillPath}\` before responding.

The skill defines a process, output format, and quality bar. Apply them. Ask the user for any required inputs the skill calls out.

**Invoking this skill:** type \`@cm-${name}\` in chat, or mention any of the trigger phrases in the description above. Cursor will auto-attach this rule when the description matches your request.
`;
      fsx.write(mdcPath, body, 'cursor-rule');
      return true;
    };

    let written = 0;
    if (fs.existsSync(commandsSource)) {
      for (const file of fs.readdirSync(commandsSource).filter(f => f.endsWith('.md'))) {
        const name = file.replace(/^cm-/, '').replace(/\.md$/, '');
        if (writeMdc(name, `Compounding Marketing workflow: ${name}`, path.join(commandsSource, file))) written++;
      }
    }
    for (const skill of skillDirs) {
      const skillFile = path.join(skillsSource, skill, 'SKILL.md');
      if (!fs.existsSync(skillFile)) continue;
      let desc = `Compounding Marketing skill: ${skill}`;
      try {
        const fm = fs.readFileSync(skillFile, 'utf8').match(/^---\n([\s\S]*?)\n---/);
        if (fm) {
          const m = fm[1].match(/^description:\s*(.+)$/m);
          if (m) desc = m[1].trim();
        }
      } catch (_) { /* ignore */ }
      if (writeMdc(skill, desc, skillFile)) written++;
    }
    console.log(c('green', `  ✓ Generated ${written} .mdc rules in ${targets.commandsDir}`));
  }

  else if (style === 'codex-dir') {
    // Codex: symlink whole skill directories under ~/.agents/skills/ or ./.agents/skills/
    fsx.mkdir(targets.skillsLinkDir);
    let linked = 0;
    for (const skill of skillDirs) {
      const skillDir = path.join(skillsSource, skill);
      if (!fs.existsSync(path.join(skillDir, 'SKILL.md'))) continue;
      const linkPath = path.join(targets.skillsLinkDir, skill);
      if (fs.existsSync(linkPath)) continue;
      const linkTarget = path.relative(targets.skillsLinkDir, skillDir);
      if (fsx.symlink(linkTarget, linkPath, skill)) linked++;
    }
    console.log(c('green', `  ✓ Linked ${linked} skill directories under ${targets.skillsLinkDir}`));
    console.log(c('dim', `  Codex discovers them as ~/.agents/skills/<name>/SKILL.md.`));
  }
}

// ─── MCP config writing ─────────────────────────────────────────────────────
// Per-tool MCP server definitions for the two MCPs we offer (Perplexity, Exa).
function mcpServerSpec(name, apiKey, format) {
  if (name === 'perplexity') {
    return format === 'toml'
      ? { name: 'perplexity', toml: `[mcp_servers.perplexity]
command = "npx"
args = ["-y", "@perplexity-ai/mcp-server"]
env = { PERPLEXITY_API_KEY = "${apiKey || '${PERPLEXITY_API_KEY}'}" }` }
      : {
          name: 'perplexity',
          json: {
            type: 'stdio',
            command: 'npx',
            args: ['-y', '@perplexity-ai/mcp-server'],
            env: { PERPLEXITY_API_KEY: apiKey || '${PERPLEXITY_API_KEY}' },
          },
        };
  }
  if (name === 'exa') {
    return format === 'toml'
      ? { name: 'exa', toml: `[mcp_servers.exa]
command = "npx"
args = ["-y", "exa-mcp-server"]
env = { EXA_API_KEY = "${apiKey || '${EXA_API_KEY}'}" }` }
      : {
          name: 'exa',
          json: {
            type: 'stdio',
            command: 'npx',
            args: ['-y', 'exa-mcp-server'],
            env: { EXA_API_KEY: apiKey || '${EXA_API_KEY}' },
          },
        };
  }
  return null;
}

async function writeMcpConfig(rl, targets, mcpConfig, fsx, manifest) {
  const file = targets.mcpConfigFile;
  if (!file) return; // Tool doesn't support MCP file writing
  const enabledServers = Object.entries(mcpConfig)
    .filter(([_, v]) => v && v.enabled)
    .map(([k, v]) => ({ name: k, apiKey: v.apiKey }));
  if (enabledServers.length === 0) return;

  console.log(c('dim', `  Target: ${file}`));
  const format = targets.mcpConfigFormat;

  // Handle collisions
  if (fs.existsSync(file)) {
    const decision = await resolveCollision(rl, file, format === 'toml' ? 'mcp-toml' : 'mcp-json', fsx.flags);
    if (decision === 'skip') {
      console.log(c('dim', `  ↷ Skipped MCP config write`));
      return;
    }
    if (decision === 'overwrite') {
      fsx.backup(file);
      // Fall through to write fresh
      if (format === 'json') {
        const servers = {};
        for (const s of enabledServers) {
          const spec = mcpServerSpec(s.name, s.apiKey, 'json');
          if (spec) servers[spec.name] = spec.json;
        }
        fsx.write(file, JSON.stringify({ mcpServers: servers }, null, 2) + '\n', 'mcp-json');
      } else {
        const blocks = enabledServers
          .map(s => mcpServerSpec(s.name, s.apiKey, 'toml'))
          .filter(Boolean)
          .map(s => s.toml)
          .join('\n\n');
        fsx.write(file, blocks + '\n', 'mcp-toml');
      }
      for (const s of enabledServers) manifest.mcpEntries.push({ file, format, serverName: s.name });
      console.log(c('green', `  ✓ Overwrote ${file} with ${enabledServers.length} MCP server(s)`));
      return;
    }
    // 'merge': read existing, add missing servers
    if (format === 'json') {
      let existing;
      try { existing = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (_) { existing = {}; }
      existing.mcpServers = existing.mcpServers || {};
      let added = 0;
      for (const s of enabledServers) {
        if (existing.mcpServers[s.name]) continue;
        const spec = mcpServerSpec(s.name, s.apiKey, 'json');
        if (spec) {
          existing.mcpServers[spec.name] = spec.json;
          manifest.mcpEntries.push({ file, format, serverName: s.name });
          added++;
        }
      }
      if (added > 0) {
        if (fsx.flags.dryRun) {
          console.log(c('magenta', `    [dry-run] MERGE ${file} (adding ${added} entries)`));
        } else {
          fs.writeFileSync(file, JSON.stringify(existing, null, 2) + '\n');
        }
        console.log(c('green', `  ✓ Merged ${added} MCP server(s) into ${file}`));
      } else {
        console.log(c('dim', `  ✓ All MCP servers already present in ${file}`));
      }
    } else {
      // TOML merge: simpler — append marker-wrapped block if not already present
      const existingContent = fs.readFileSync(file, 'utf8');
      const blocks = enabledServers
        .map(s => mcpServerSpec(s.name, s.apiKey, 'toml'))
        .filter(Boolean)
        .filter(s => !existingContent.includes(`[mcp_servers.${s.name}]`))
        .map(s => s.toml);
      if (blocks.length === 0) {
        console.log(c('dim', `  ✓ All MCP servers already present in ${file}`));
        return;
      }
      fsx.append(file, '\n' + blocks.join('\n\n') + '\n', 'mcp-toml');
      for (const block of blocks) {
        const m = block.match(/\[mcp_servers\.(\w+)\]/);
        if (m) manifest.mcpEntries.push({ file, format, serverName: m[1] });
      }
      console.log(c('green', `  ✓ Appended ${blocks.length} MCP server(s) to ${file}`));
    }
    return;
  }

  // No collision — write fresh
  if (format === 'json') {
    const servers = {};
    for (const s of enabledServers) {
      const spec = mcpServerSpec(s.name, s.apiKey, 'json');
      if (spec) servers[spec.name] = spec.json;
    }
    fsx.write(file, JSON.stringify({ mcpServers: servers }, null, 2) + '\n', 'mcp-json');
  } else {
    const blocks = enabledServers
      .map(s => mcpServerSpec(s.name, s.apiKey, 'toml'))
      .filter(Boolean)
      .map(s => s.toml)
      .join('\n\n');
    fsx.write(file, blocks + '\n', 'mcp-toml');
  }
  for (const s of enabledServers) manifest.mcpEntries.push({ file, format, serverName: s.name });
  console.log(c('green', `  ✓ Wrote ${file} with ${enabledServers.length} MCP server(s)`));
}

// Print fallback `claude mcp add` commands (for Claude Code global scope, where we don't
// safely edit ~/.claude.json directly).
function printClaudeCodeMcpHint(mcpConfig) {
  const enabled = Object.entries(mcpConfig).filter(([_, v]) => v && v.enabled);
  if (enabled.length === 0) return;
  console.log(`\n  ${c('bright', 'To enable these MCPs globally in Claude Code, run:')}`);
  for (const [name, v] of enabled) {
    if (name === 'perplexity') {
      const keyArg = v.apiKey && v.apiKey !== 'YOUR_API_KEY_HERE' ? `--env PERPLEXITY_API_KEY=${v.apiKey} ` : `--env PERPLEXITY_API_KEY=YOUR_KEY `;
      console.log(c('cyan', `    claude mcp add --transport stdio --scope user ${keyArg}perplexity -- npx -y @perplexity-ai/mcp-server`));
    } else if (name === 'exa') {
      const keyArg = v.apiKey && v.apiKey !== 'YOUR_API_KEY_HERE' ? `--env EXA_API_KEY=${v.apiKey} ` : `--env EXA_API_KEY=YOUR_KEY `;
      console.log(c('cyan', `    claude mcp add --transport stdio --scope user ${keyArg}exa -- npx -y exa-mcp-server`));
    }
  }
}

// ─── ChatGPT instructions ───────────────────────────────────────────────────
function printChatGPTInstructions(installRoot) {
  console.log(`
  ${c('bright', 'ChatGPT setup — manual steps:')}

  1. Open ${c('cyan', 'https://chatgpt.com/gpts/editor')}.
  2. In the Instructions field, paste the contents of ${c('cyan', 'AGENTS.md')} from
     ${c('dim', installRoot)} (or summarize it — the file is large).
  3. In the Knowledge field, upload selected ${c('dim', 'skills/<name>/SKILL.md')}
     files for the workflows you'll use most often.
  4. Test by typing a trigger phrase (e.g., "help me write cold email copy").
`);
}

// ─── Uninstall ──────────────────────────────────────────────────────────────
async function runUninstall(flags) {
  console.log(c('bright', '\nUninstalling Compounding Marketing...\n'));
  const candidates = [
    path.join(os.homedir(), '.claude', MANIFEST_FILE),
    path.join(process.cwd(), MANIFEST_FILE),
    path.join(process.cwd(), 'compounding-marketing', '..', MANIFEST_FILE),
  ];
  const mPath = candidates.find(p => fs.existsSync(p));
  if (!mPath) {
    console.log(c('yellow', `No install manifest found. Searched:`));
    candidates.forEach(p => console.log(c('dim', `  - ${p}`)));
    console.log(c('dim', '\nIf you installed from a different directory, cd there and re-run --uninstall.'));
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(mPath, 'utf8'));
  console.log(c('dim', `Loaded manifest from ${mPath}`));
  console.log(c('dim', `Installed: v${manifest.version} (scope=${manifest.scope}, tool=${manifest.tool}) on ${manifest.timestamp}`));

  if (!flags.yes) {
    const rl = createPrompt();
    const proceed = await confirm(rl, '\nProceed with uninstall? This will reverse all tracked changes.', false);
    rl.close();
    if (!proceed) { console.log(c('dim', 'Aborted.\n')); return; }
  }

  let removedFiles = 0, removedSymlinks = 0, restoredBackups = 0, strippedMarkers = 0, removedMcp = 0;

  // Strip marker blocks from instructions files
  for (const entry of manifest.appendedMarkers || []) {
    try {
      if (!fs.existsSync(entry.path)) continue;
      let content = fs.readFileSync(entry.path, 'utf8');
      const startIdx = content.indexOf(MARKER_START);
      const endIdx = content.indexOf(MARKER_END);
      if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
        content = content.substring(0, startIdx).replace(/\n+$/, '\n') + content.substring(endIdx + MARKER_END.length).replace(/^\n+/, '');
        if (flags.dryRun) console.log(c('magenta', `  [dry-run] STRIP markers in ${entry.path}`));
        else fs.writeFileSync(entry.path, content);
        strippedMarkers++;
      }
    } catch (err) {
      console.log(c('yellow', `  ⚠  Could not strip markers in ${entry.path}: ${err.message}`));
    }
  }

  // Remove MCP entries from config files
  for (const entry of manifest.mcpEntries || []) {
    try {
      if (!fs.existsSync(entry.file)) continue;
      if (entry.format === 'json') {
        let data; try { data = JSON.parse(fs.readFileSync(entry.file, 'utf8')); } catch (_) { continue; }
        if (data.mcpServers && data.mcpServers[entry.serverName]) {
          if (flags.dryRun) {
            console.log(c('magenta', `  [dry-run] REMOVE MCP entry ${entry.serverName} from ${entry.file}`));
          } else {
            delete data.mcpServers[entry.serverName];
            // If file ends up empty, remove it; otherwise rewrite
            if (Object.keys(data.mcpServers).length === 0 && Object.keys(data).length === 1) {
              try { fs.unlinkSync(entry.file); } catch (_) {}
            } else {
              fs.writeFileSync(entry.file, JSON.stringify(data, null, 2) + '\n');
            }
          }
          removedMcp++;
        }
      } else if (entry.format === 'toml') {
        const content = fs.readFileSync(entry.file, 'utf8');
        const pattern = new RegExp(`\\[mcp_servers\\.${entry.serverName}\\][\\s\\S]*?(?=\\n\\[|$)`, 'g');
        const updated = content.replace(pattern, '').replace(/\n{3,}/g, '\n\n').trim() + '\n';
        if (flags.dryRun) {
          console.log(c('magenta', `  [dry-run] REMOVE MCP table [mcp_servers.${entry.serverName}] from ${entry.file}`));
        } else if (updated.trim() === '') {
          try { fs.unlinkSync(entry.file); } catch (_) {}
        } else {
          fs.writeFileSync(entry.file, updated);
        }
        removedMcp++;
      }
    } catch (err) {
      console.log(c('yellow', `  ⚠  Could not remove MCP entry ${entry.serverName} from ${entry.file}: ${err.message}`));
    }
  }

  // Remove symlinks
  for (const entry of manifest.createdSymlinks || []) {
    try {
      let exists = false;
      try { fs.lstatSync(entry.path); exists = true; } catch (_) {}
      if (!exists) continue;
      if (flags.dryRun) console.log(c('magenta', `  [dry-run] UNLINK ${entry.path}`));
      else { try { fs.unlinkSync(entry.path); removedSymlinks++; } catch (_) { /* ignore */ } }
    } catch (_) { /* ignore */ }
  }

  // Remove created files (deepest first)
  const sortedFiles = (manifest.createdFiles || []).slice().sort((a, b) => b.path.length - a.path.length);
  for (const entry of sortedFiles) {
    try {
      if (!fs.existsSync(entry.path)) continue;
      if (flags.dryRun) {
        console.log(c('magenta', `  [dry-run] REMOVE ${entry.path}`));
      } else {
        const stat = fs.statSync(entry.path);
        if (stat.isDirectory()) fs.rmSync(entry.path, { recursive: true, force: true });
        else fs.unlinkSync(entry.path);
        removedFiles++;
      }
    } catch (_) { /* ignore */ }
  }

  // Restore .bak backups
  for (const entry of manifest.modifiedFiles || []) {
    try {
      if (!fs.existsSync(entry.backupPath)) continue;
      if (flags.dryRun) {
        console.log(c('magenta', `  [dry-run] RESTORE ${entry.backupPath} → ${entry.path}`));
      } else {
        fs.copyFileSync(entry.backupPath, entry.path);
        fs.unlinkSync(entry.backupPath);
        restoredBackups++;
      }
    } catch (err) {
      console.log(c('yellow', `  ⚠  Could not restore ${entry.backupPath}: ${err.message}`));
    }
  }

  // Walk install dirs bottom-up, remove empties. Then walk parents up while
  // they look like tool-config dirs we created (.claude/, .cursor/, .codex/,
  // .agents/, .zed/), so empty wrapper dirs don't linger after uninstall.
  // Never remove cwd, home, or any dir not under one of those patterns.
  const home = os.homedir();
  const toolDirPatterns = ['/.claude', '/.cursor', '/.codex', '/.agents', '/.zed', '/compounding-marketing'];
  const isToolDir = (p) => toolDirPatterns.some(pat => p.endsWith(pat) || p.includes(pat + '/'));
  const dirsToTry = [
    manifest.installRoot,
    manifest.commandsDir,
    manifest.skillsLinkDir,
    manifest.mcpConfigFile && path.dirname(manifest.mcpConfigFile),
  ].filter(Boolean);
  // Add parent chains for each entry up to but not including cwd / home.
  const expanded = new Set(dirsToTry);
  for (const d of dirsToTry) {
    let cur = path.dirname(d);
    while (cur && cur !== '/' && cur !== home && cur !== path.dirname(cur)) {
      if (!isToolDir(cur)) break;
      expanded.add(cur);
      cur = path.dirname(cur);
    }
  }
  function rmEmptyDirs(dir, stopAt) {
    if (!dir || !fs.existsSync(dir)) return;
    try {
      const stat = fs.statSync(dir);
      if (!stat.isDirectory()) return;
      for (const entry of fs.readdirSync(dir)) rmEmptyDirs(path.join(dir, entry), stopAt);
      const remaining = fs.readdirSync(dir);
      if (remaining.length === 0 && dir.length > stopAt.length) {
        if (flags.dryRun) console.log(c('magenta', `  [dry-run] RMDIR ${dir}`));
        else fs.rmdirSync(dir);
      }
    } catch (_) { /* ignore */ }
  }
  // Sort deepest-first so children are processed before parents.
  const sortedDirs = Array.from(expanded).sort((a, b) => b.length - a.length);
  for (const d of sortedDirs) rmEmptyDirs(d, path.dirname(d));

  // Remove manifest itself
  if (flags.dryRun) console.log(c('magenta', `  [dry-run] REMOVE manifest ${mPath}`));
  else { try { fs.unlinkSync(mPath); } catch (_) { /* ignore */ } }

  console.log(c('green', `\n✓ Uninstall complete${flags.dryRun ? ' (dry-run)' : ''}`));
  console.log(c('dim', `  Removed: ${removedFiles} files, ${removedSymlinks} symlinks`));
  console.log(c('dim', `  Restored: ${restoredBackups} backups`));
  console.log(c('dim', `  Stripped: ${strippedMarkers} marker block(s), ${removedMcp} MCP entries\n`));
}

function isProjectDirectory(dir) {
  const indicators = ['package.json', '.git', 'Cargo.toml', 'Gemfile', 'requirements.txt', 'pyproject.toml', 'go.mod', 'Makefile', 'src', 'app'];
  return indicators.some(f => fs.existsSync(path.join(dir, f)));
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  let flags;
  try { flags = parseArgs(process.argv.slice(2)); } catch (err) {
    console.error(c('red', err.message));
    process.exit(2);
  }

  if (flags.version) { console.log(PKG_VERSION); return; }
  if (flags.help) { printHelp(); return; }
  if (flags.info) {
    console.log(`Compounding Marketing v${PKG_VERSION}`);
    console.log(`61 marketing skills · 16 workflow commands`);
    console.log(`https://github.com/classicchins/compounding-marketing`);
    return;
  }
  if (flags.uninstall) return runUninstall(flags);

  printBanner();
  if (flags.dryRun) console.log(c('magenta', '  Dry-run mode: no files will be written.\n'));

  const rl = createPrompt();
  const cwd = process.cwd();

  try {
    // ─── Step 1: Tool ────────────────────────────────────────────────────
    console.log(c('blue', '━━━ Step 1 of 4: Choose your AI tool ━━━'));
    let tool = flags.tool;
    if (!tool) {
      tool = await select(rl, 'Which AI coding assistant are you using?', [
        { label: 'Claude Code', value: 'claude-code', desc: 'Terminal CLI by Anthropic — best supported' },
        { label: 'Claude Cowork', value: 'claude-cowork', desc: 'Cowork.ai\'s Claude integration' },
        { label: 'Cursor', value: 'cursor', desc: 'AI-first code editor — uses .cursor/rules/*.mdc' },
        { label: 'Codex (OpenAI)', value: 'codex', desc: 'OpenAI Codex CLI/app — uses ~/.agents/skills/' },
        { label: 'ChatGPT (Custom GPT)', value: 'chatgpt', desc: 'Manual paste into Custom GPT instructions' },
        { label: 'Zed', value: 'zed', desc: 'Reads project AGENTS.md' },
        { label: 'Other / Multiple tools', value: 'other', desc: 'Works with any tool that reads markdown' },
      ], { showDesc: true, defaultValue: 'claude-code' });
    }
    console.log(c('green', `  ✓ ${tool}`));

    // ─── Step 2: Scope ───────────────────────────────────────────────────
    console.log(c('blue', '\n━━━ Step 2 of 4: Where to install ━━━'));
    const homeClaude = path.join(os.homedir(), '.claude');
    const claudeExists = fs.existsSync(homeClaude);
    const projectDir = isProjectDirectory(cwd);
    const defaultScope = projectDir ? 'project' : (claudeExists ? 'global' : 'project');

    // Warn if cwd isn't an obvious project directory and user is doing a project install.
    if (!projectDir && !flags.scope && !flags.yes) {
      console.log(c('yellow', `  ⚠  Current directory ${c('bright', cwd)} does not look like a project root`));
      console.log(c('dim', '     (no package.json/.git/Cargo.toml/Gemfile/pyproject.toml/go.mod/Makefile/src/app)'));
      console.log(c('dim', '     A project install will still work but is usually run from a project root.'));
    }

    let scope = flags.scope;
    if (!scope) {
      // Some tools are project-only — restrict accordingly.
      const projectOnly = ['cursor', 'zed', 'chatgpt'].includes(tool);
      const scopeOptions = projectOnly
        ? [{ label: `Project — install into ${c('cyan', './compounding-marketing/')}`, value: 'project' },
           { label: 'Custom — install into a path I specify', value: 'custom' }]
        : [
            { label: `Project — install into ${c('cyan', './compounding-marketing/')} (this directory only)`, value: 'project', desc: 'Best for per-project setup, version controlled' },
            { label: `Global — install into ${c('cyan', '~/.claude/plugins/')} (available everywhere)`, value: 'global', desc: 'Best for personal tools across many projects' },
            { label: 'Custom — install into a path I specify', value: 'custom' },
          ];
      scope = await select(rl, 'Pick install scope:', scopeOptions, { showDesc: true, defaultValue: projectOnly ? 'project' : defaultScope });
    }
    let customTarget = flags.target;
    if (scope === 'custom' && !customTarget) {
      customTarget = await ask(rl, '  Absolute install path: ');
      if (!customTarget) { console.log(c('red', '  No path provided. Aborting.\n')); rl.close(); process.exit(1); }
    }
    console.log(c('green', `  ✓ ${scope}${scope === 'custom' ? ` → ${customTarget}` : ''}`));

    const targets = getInstallTargets(scope, tool, cwd, customTarget);
    const manifest = newManifest(flags, scope, tool, targets);
    const fsx = makeFsx(flags, manifest);

    // ─── Step 3: MCP Research Tools (optional) ───────────────────────────
    console.log(c('blue', '\n━━━ Step 3 of 4: Research MCPs (optional) ━━━'));
    console.log(c('dim', '  MCPs add powerful research tools your AI can call directly.\n'));
    const config = { version: PKG_VERSION, scope, tool, mcp: {}, integrations: {} };

    if (!flags.yes) {
      console.log(`  ${c('bright', 'Perplexity')} ${c('dim', '— AI-powered web research')}`);
      console.log(c('dim', '  Get API key: https://perplexity.ai/settings/api'));
      if (await confirm(rl, 'Enable Perplexity?', true)) {
        const apiKey = await ask(rl, `  API key ${c('dim', '(paste, or Enter to add later)')}: `);
        config.mcp.perplexity = { enabled: true, apiKey: apiKey || 'YOUR_API_KEY_HERE' };
        console.log(c('green', '  ✓ Perplexity enabled\n'));
      } else { console.log(c('dim', '  ⊘ Skipped\n')); }

      console.log(`  ${c('bright', 'Exa')} ${c('dim', '— Neural search & company intelligence')}`);
      console.log(c('dim', '  Get API key: https://dashboard.exa.ai (free tier available)'));
      if (await confirm(rl, 'Enable Exa?', true)) {
        const apiKey = await ask(rl, `  API key ${c('dim', '(paste, or Enter to add later)')}: `);
        config.mcp.exa = { enabled: true, apiKey: apiKey || 'YOUR_API_KEY_HERE' };
        console.log(c('green', '  ✓ Exa enabled\n'));
      } else { console.log(c('dim', '  ⊘ Skipped\n')); }
    } else {
      console.log(c('dim', '  Skipped (use --yes flag).'));
    }

    // ─── Step 4: Install ─────────────────────────────────────────────────
    console.log(c('blue', '\n━━━ Step 4 of 4: Install ━━━'));

    // 4a: Save config
    // Project → cwd, Global → ~/.claude/, Custom → install root parent
    const configDir = scope === 'global'
      ? path.join(os.homedir(), '.claude')
      : (scope === 'custom' ? path.dirname(targets.installRoot) : cwd);
    const configPath = path.join(configDir, '.cm-config.json');
    let saveConfig = true;
    if (fs.existsSync(configPath)) {
      const decision = await resolveCollision(rl, configPath, 'config', flags);
      if (decision === 'skip') { saveConfig = false; console.log(c('dim', '  ↷ Skipped .cm-config.json')); }
      else if (decision === 'overwrite') fsx.backup(configPath);
    }
    if (saveConfig) {
      fsx.write(configPath, JSON.stringify(config, null, 2), 'config');
      console.log(c('green', `  ✓ Saved ${configPath}`));
      if (scope === 'project') ensureGitignore(cwd, '.cm-config.json', 'Compounding Marketing config (contains API keys)', fsx);
    }

    // 4b: Plugin files
    const isLocalClone = path.resolve(PKG_ROOT) === path.resolve(targets.installRoot);
    if (!isLocalClone) {
      console.log(c('dim', `\n  Copying plugin files: ${PKG_ROOT} → ${targets.installRoot}`));
      const items = ['CLAUDE.md', 'AGENTS.md', 'skills', 'commands', '.claude-plugin', '.cursor-plugin', 'mcp', 'integrations'];
      fsx.mkdir(targets.installRoot);
      for (const item of items) {
        const srcPath = path.join(PKG_ROOT, item);
        const destPath = path.join(targets.installRoot, item);
        if (!fs.existsSync(srcPath)) continue;
        await copyTreeRespectingCollisions(srcPath, destPath, rl, fsx);
        console.log(c('green', `  ✓ ${item}`));
      }
    } else {
      console.log(c('dim', '\n  Running from the plugin repo itself — skipping file copy.'));
    }

    // 4c: Register skills / commands per tool
    if (targets.registrationStyle !== 'none') {
      console.log(c('dim', '\n  Registering skills + commands...'));
      await registerSkillsForTool(rl, targets, fsx, manifest);
    }

    // 4d: Update instructions file
    if (targets.instructionsFile) {
      console.log(c('dim', '\n  Updating instructions file...'));
      const pluginContent = buildInstructionsContent(scope, targets.installRoot);
      if (pluginContent) await applyInstructionsBlock(rl, targets.instructionsFile, pluginContent, fsx, manifest);
    }

    // 4e: Write MCP config (or print fallback hint)
    if (Object.keys(config.mcp).length > 0) {
      console.log(c('dim', '\n  Writing MCP config...'));
      if (targets.mcpConfigFile) {
        await writeMcpConfig(rl, targets, config.mcp, fsx, manifest);
      } else if ((tool === 'claude-code' || tool === 'claude-cowork') && scope === 'global') {
        printClaudeCodeMcpHint(config.mcp);
      } else {
        console.log(c('dim', '  (No MCP config location for this tool/scope — skipping.)'));
      }
    }

    // 4f: Optional .gitignore for the install dir
    if (scope === 'project' && !isLocalClone) {
      const addToGitignore = flags.yes
        ? false
        : await confirm(rl, "\n  Add compounding-marketing/ to .gitignore? (Recommended if you won't customize skills)", true);
      if (addToGitignore) ensureGitignore(cwd, 'compounding-marketing/', 'Compounding Marketing plugin', fsx);
    }

    // 4g: Persist manifest
    const mPath = manifestPath(scope, targets.installRoot);
    persistManifest(manifest, mPath, flags);
    if (!flags.dryRun) console.log(c('dim', `\n  Manifest: ${mPath}`));

    // 4h: Post-install verification — broken symlinks
    if (targets.commandsDir && fs.existsSync(targets.commandsDir) && !flags.dryRun) {
      const broken = [];
      for (const entry of fs.readdirSync(targets.commandsDir)) {
        if (!entry.startsWith('cm-')) continue;
        const fullPath = path.join(targets.commandsDir, entry);
        try {
          const lstat = fs.lstatSync(fullPath);
          if (lstat.isSymbolicLink()) fs.statSync(fullPath);
        } catch (err) {
          if (err.code === 'ENOENT') broken.push(entry);
        }
      }
      if (broken.length > 0) {
        console.log(c('yellow', `\n  ⚠  ${broken.length} broken symlink(s):`));
        broken.forEach(b => console.log(c('yellow', `    - ${b}`)));
        if (!flags.yes) {
          const fix = await confirm(rl, '  Remove broken symlinks?', true);
          if (fix) {
            for (const b of broken) { try { fs.unlinkSync(path.join(targets.commandsDir, b)); } catch (_) {} }
            console.log(c('green', '  ✓ Removed broken symlinks'));
          }
        }
      }
    }

    if (tool === 'chatgpt') printChatGPTInstructions(targets.installRoot);

    // ─── Done ────────────────────────────────────────────────────────────
    console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('green', '✓ Setup Complete!')}${flags.dryRun ? c('magenta', ' (dry-run)') : '                                          '}${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}

${c('bright', 'Next Steps:')}

  ${c('cyan', '1.')} Foundation:
     ${c('dim', `${tool === 'claude-code' || tool === 'claude-cowork' ? '/cm-context' : '"run the cm-context skill"'} to create your product-marketing context.`)}

  ${c('cyan', '2.')} Big projects:
     ${c('dim', '/cm-research · /cm-position · /cm-copy · /cm-launch · /cm-sprint')}

  ${c('cyan', '3.')} Roll back any time:
     ${c('dim', 'npx compounding-marketing --uninstall')}

${c('bright', 'Docs:')} ${c('cyan', 'https://github.com/classicchins/compounding-marketing')}
${c('dim', 'Make marketing compound.')}
`);

  } catch (err) {
    console.error(c('red', `\nError: ${err.stack || err.message}`));
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
