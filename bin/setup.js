#!/usr/bin/env node

/**
 * Compounding Marketing Setup Wizard
 *
 * Interactive setup for installing the plugin into Claude Code, Claude Cowork,
 * Cursor, Codex (OpenAI), ChatGPT, Zed, or other AI tools. Never modifies any
 * existing user file without explicit confirmation. Supports --dry-run,
 * --uninstall, and a manifest-tracked rollback.
 *
 * Usage:
 *   npx compounding-marketing                    # interactive wizard
 *   npx compounding-marketing --yes              # accept defaults (no prompts)
 *   npx compounding-marketing --dry-run          # show actions without writing
 *   npx compounding-marketing --uninstall        # roll back a previous install
 *   npx compounding-marketing --scope=global     # ~/.claude/plugins/...
 *   npx compounding-marketing --scope=project    # ./compounding-marketing/
 *   npx compounding-marketing --tool=codex       # target OpenAI Codex
 *   npx compounding-marketing --version          # print version
 *   npx compounding-marketing --help             # this help
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
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
};
const c = (color, text) => `${colors[color] || ''}${text}${colors.reset}`;

// ─── Banner ─────────────────────────────────────────────────────────────────
function printBanner() {
  console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('bright', 'COMPOUNDING MARKETING')} — Setup Wizard ${c('dim', `v${PKG_VERSION}`)}            ${c('cyan', '║')}
${c('cyan', '║')}     ${c('dim', 'Make each unit of marketing work easier than the last')}      ${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}
`);
}

function printHelp() {
  console.log(`
${c('bright', 'compounding-marketing')} — interactive plugin installer

${c('bright', 'USAGE')}
  npx compounding-marketing [options]

${c('bright', 'OPTIONS')}
  --yes, -y               Accept safe defaults; never overwrite existing files
  --dry-run               Show actions without writing anything
  --uninstall             Roll back a previous install using the manifest
  --scope=<value>         global | project | custom (default: prompt)
  --target=<path>         Custom install path (implies --scope=custom)
  --tool=<value>          claude-code | claude-cowork | cursor | codex | chatgpt | zed | other
  --version, -v           Print the package version
  --help, -h              Print this help

${c('bright', 'EXAMPLES')}
  npx compounding-marketing                       # interactive
  npx compounding-marketing --dry-run             # preview actions
  npx compounding-marketing --yes --scope=project # CI-friendly install
  npx compounding-marketing --uninstall           # roll back install
  npx compounding-marketing --tool=codex --scope=global

${c('bright', 'SAFETY')}
  Installation never modifies your files without confirmation. Each existing
  file collision prompts for: merge with markers / overwrite (with .bak) /
  skip. A manifest at ${c('dim', MANIFEST_FILE)} tracks every change so
  --uninstall can reverse them.
`);
}

// ─── Argv parser ────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const flags = {
    yes: false,
    dryRun: false,
    uninstall: false,
    scope: null,
    target: null,
    tool: null,
    version: false,
    help: false,
  };
  for (const arg of argv) {
    if (arg === '--yes' || arg === '-y') flags.yes = true;
    else if (arg === '--dry-run') flags.dryRun = true;
    else if (arg === '--uninstall') flags.uninstall = true;
    else if (arg === '--version' || arg === '-v') flags.version = true;
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

async function select(rl, question, options, defaultValue) {
  console.log(`\n${c('bright', question)}`);
  options.forEach((opt, i) => {
    const isDefault = defaultValue !== undefined && opt.value === defaultValue;
    const marker = isDefault ? c('green', ' (default)') : '';
    console.log(`  ${c('cyan', `[${i + 1}]`)} ${opt.label}${marker}`);
  });
  let attempts = 0;
  while (attempts < 3) {
    const answer = await ask(rl, `\nEnter choice (1-${options.length})${defaultValue !== undefined ? ' or press Enter for default' : ''}: `);
    if (answer === '' && defaultValue !== undefined) return defaultValue;
    const index = parseInt(answer, 10) - 1;
    if (index >= 0 && index < options.length) return options[index].value;
    attempts++;
    if (attempts < 3) console.log(c('yellow', `Invalid choice. Please enter a number from 1 to ${options.length}.`));
  }
  console.log(c('yellow', `Using default: ${defaultValue || options[0].value}`));
  return defaultValue !== undefined ? defaultValue : options[0].value;
}

async function confirm(rl, question, defaultYes = true) {
  const hint = defaultYes ? '[Y/n]' : '[y/N]';
  const answer = await ask(rl, `${question} ${c('dim', hint)} `);
  if (answer === '') return defaultYes;
  return answer.toLowerCase().startsWith('y');
}

async function multiSelect(rl, question, options) {
  console.log(`\n${c('bright', question)}`);
  console.log(c('dim', '(Comma-separated numbers, "all" for all, or "none" / Enter to skip)'));
  options.forEach((opt, i) => console.log(`  ${c('cyan', `[${i + 1}]`)} ${opt.label}`));
  const answer = await ask(rl, `\nYour choices: `);
  if (answer.toLowerCase() === 'all') return options.map(o => o.value);
  if (answer.toLowerCase() === 'none' || answer === '') return [];
  return answer.split(',')
    .map(s => parseInt(s.trim(), 10) - 1)
    .filter(i => i >= 0 && i < options.length)
    .map(i => options[i].value);
}

// ─── Filesystem wrapper (dry-run aware + manifest tracking) ─────────────────
function makeFsx(flags, manifest) {
  const dryLog = (action, target, extra = '') => {
    if (flags.dryRun) console.log(c('magenta', `  [dry-run] ${action} ${target}${extra ? ' ' + extra : ''}`));
  };
  return {
    flags,
    manifest,
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
          // Windows fallback: copy instead of symlink
          try {
            const absoluteTarget = path.resolve(path.dirname(linkPath), target);
            fs.copyFileSync(absoluteTarget, linkPath);
            manifest.createdFiles.push({ path: linkPath, kind: 'symlink-fallback' });
            return true;
          } catch (_) { /* fall through */ }
        }
        console.log(c('yellow', `  ⚠  Could not link ${label || linkPath}: ${err.message}`));
        return false;
      }
    },
    unlink(filePath, fromManifest = false) {
      dryLog('UNLINK', filePath);
      if (flags.dryRun) return;
      try { fs.unlinkSync(filePath); } catch (_) { /* ignore */ }
      if (!fromManifest) {
        // not tracking removals here — caller decides
      }
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
        if (stat.isDirectory()) {
          fs.cpSync(filePath, bak, { recursive: true });
        } else {
          fs.copyFileSync(filePath, bak);
        }
        manifest.modifiedFiles.push({ path: filePath, backupPath: bak });
        return bak;
      } catch (err) {
        console.log(c('yellow', `  ⚠  Could not create backup of ${filePath}: ${err.message}`));
        return null;
      }
    },
    overwrite(filePath, content, kind = 'file') {
      // Backup first, then write.
      const bak = this.backup(filePath);
      dryLog('OVERWRITE', filePath, `(${content.length} bytes, backup: ${bak || 'none'})`);
      if (flags.dryRun) return;
      fs.writeFileSync(filePath, content);
    },
  };
}

// ─── Collision handling ─────────────────────────────────────────────────────
async function resolveCollision(rl, destPath, kind, flags) {
  if (!fs.existsSync(destPath)) return 'overwrite'; // not really a collision; safe to write

  if (flags.yes) {
    // Default policy: merge instructions files, skip everything else
    if (kind === 'instructions' || kind === 'gitignore') return 'merge';
    return 'skip';
  }

  console.log(`\n${c('yellow', '⚠')}  ${c('bright', destPath)} ${c('dim', `(${kind})`)} already exists.`);
  const options = kind === 'instructions' || kind === 'gitignore'
    ? [
        { label: 'Merge with idempotent markers (Recommended)', value: 'merge' },
        { label: 'Overwrite (creates a .bak backup first)', value: 'overwrite' },
        { label: 'Skip (leave the existing file untouched)', value: 'skip' },
      ]
    : [
        { label: 'Overwrite (creates a .bak backup first)', value: 'overwrite' },
        { label: 'Skip (leave the existing file untouched, Recommended)', value: 'skip' },
      ];
  return select(rl, 'How should I handle this?', options, options[0].value);
}

// ─── Per-tool target resolution ─────────────────────────────────────────────
function getInstallTargets(scope, tool, cwd, customTarget) {
  // Returns: { installRoot, commandsDir, skillsLinkDir, instructionsFile, instructionsFormat }
  const home = os.homedir();
  let installRoot;
  if (scope === 'global') {
    if (tool === 'codex') installRoot = path.join(home, '.codex');
    else installRoot = path.join(home, '.claude', 'plugins', 'compounding-marketing');
  } else if (scope === 'custom' && customTarget) {
    installRoot = path.resolve(customTarget);
  } else {
    installRoot = path.join(cwd, 'compounding-marketing');
  }

  const targets = { scope, tool, installRoot, commandsDir: null, skillsLinkDir: null, instructionsFile: null, instructionsFormat: 'markdown' };

  switch (tool) {
    case 'claude-code':
    case 'claude-cowork':
      if (scope === 'global') {
        targets.commandsDir = path.join(home, '.claude', 'commands');
        targets.skillsLinkDir = path.join(home, '.claude', 'skills');
        targets.instructionsFile = path.join(home, '.claude', 'CLAUDE.md');
      } else {
        targets.commandsDir = path.join(cwd, '.claude', 'commands');
        targets.skillsLinkDir = path.join(cwd, '.claude', 'skills');
        targets.instructionsFile = path.join(cwd, 'CLAUDE.md');
      }
      break;
    case 'cursor':
      // Cursor has no global plugin dir for this kind of thing; project only.
      targets.commandsDir = path.join(cwd, '.cursor', 'rules');
      targets.skillsLinkDir = null; // skills surface via .cursor/rules
      targets.instructionsFile = path.join(cwd, 'AGENTS.md');
      targets.instructionsFormat = 'mdc'; // .mdc files for Cursor rules
      break;
    case 'codex':
      // OpenAI Codex CLI: ~/.codex/prompts/ globally, or project-local mirror
      if (scope === 'global') {
        targets.commandsDir = path.join(home, '.codex', 'prompts');
        targets.skillsLinkDir = path.join(home, '.codex', 'prompts');
        targets.instructionsFile = path.join(home, '.codex', 'AGENTS.md');
      } else {
        targets.commandsDir = path.join(cwd, '.codex', 'prompts');
        targets.skillsLinkDir = path.join(cwd, '.codex', 'prompts');
        targets.instructionsFile = path.join(cwd, 'AGENTS.md');
      }
      break;
    case 'zed':
      targets.commandsDir = path.join(cwd, '.zed');
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(cwd, 'AGENTS.md');
      break;
    case 'chatgpt':
      // ChatGPT has no native plugin install. We just write project files and print a copy-paste block.
      targets.commandsDir = null;
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(cwd, 'AGENTS.md');
      break;
    default:
      // 'other'
      targets.commandsDir = null;
      targets.skillsLinkDir = null;
      targets.instructionsFile = path.join(cwd, 'AGENTS.md');
  }
  return targets;
}

// ─── Manifest ───────────────────────────────────────────────────────────────
function newManifest(flags, scope, tool, targets) {
  return {
    version: PKG_VERSION,
    timestamp: new Date().toISOString(),
    scope,
    tool,
    flags: { yes: flags.yes, dryRun: flags.dryRun, target: flags.target },
    installRoot: targets.installRoot,
    commandsDir: targets.commandsDir,
    skillsLinkDir: targets.skillsLinkDir,
    instructionsFile: targets.instructionsFile,
    createdFiles: [],
    createdSymlinks: [],
    modifiedFiles: [], // each: { path, backupPath }
    appendedMarkers: [], // each: { path }
  };
}

function manifestPath(scope, installRoot) {
  if (scope === 'global') {
    return path.join(os.homedir(), '.claude', MANIFEST_FILE);
  }
  return path.join(path.dirname(installRoot), MANIFEST_FILE);
}

function persistManifest(manifest, mPath, flags) {
  if (flags.dryRun) {
    console.log(c('magenta', `  [dry-run] WRITE manifest ${mPath}`));
    return;
  }
  fs.mkdirSync(path.dirname(mPath), { recursive: true });
  fs.writeFileSync(mPath, JSON.stringify(manifest, null, 2));
}

// ─── Uninstall ──────────────────────────────────────────────────────────────
async function runUninstall(flags) {
  console.log(c('bright', '\nUninstalling Compounding Marketing...\n'));
  const candidates = [
    path.join(os.homedir(), '.claude', MANIFEST_FILE),
    path.join(process.cwd(), MANIFEST_FILE),
    path.join(process.cwd(), 'compounding-marketing', '..', MANIFEST_FILE),
  ];
  let manifestFilePath = candidates.find(p => fs.existsSync(p));
  if (!manifestFilePath) {
    console.log(c('yellow', `No install manifest found. Searched:`));
    candidates.forEach(p => console.log(c('dim', `  - ${p}`)));
    console.log(c('dim', '\nIf you installed from a different directory, cd there and re-run --uninstall.'));
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestFilePath, 'utf8'));
  console.log(c('dim', `Loaded manifest from ${manifestFilePath}`));
  console.log(c('dim', `Installed: v${manifest.version} (scope=${manifest.scope}, tool=${manifest.tool}) on ${manifest.timestamp}`));

  if (!flags.yes) {
    const rl = createPrompt();
    const proceed = await confirm(rl, '\nProceed with uninstall? This will reverse all tracked changes.', false);
    rl.close();
    if (!proceed) { console.log(c('dim', 'Aborted.\n')); return; }
  }

  let removedFiles = 0, removedSymlinks = 0, restoredBackups = 0, strippedMarkers = 0;

  // Strip marker blocks from instructions files
  for (const entry of manifest.appendedMarkers || []) {
    try {
      if (!fs.existsSync(entry.path)) continue;
      let content = fs.readFileSync(entry.path, 'utf8');
      const startIdx = content.indexOf(MARKER_START);
      const endIdx = content.indexOf(MARKER_END);
      if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
        content = content.substring(0, startIdx).replace(/\n+$/, '\n') + content.substring(endIdx + MARKER_END.length).replace(/^\n+/, '');
        if (flags.dryRun) {
          console.log(c('magenta', `  [dry-run] STRIP markers in ${entry.path}`));
        } else {
          fs.writeFileSync(entry.path, content);
        }
        strippedMarkers++;
      }
    } catch (err) {
      console.log(c('yellow', `  ⚠  Could not strip markers in ${entry.path}: ${err.message}`));
    }
  }

  // Remove created symlinks
  for (const entry of manifest.createdSymlinks || []) {
    try {
      if (!fs.existsSync(entry.path) && !fs.lstatSync(entry.path, { throwIfNoEntry: false })) continue;
      if (flags.dryRun) {
        console.log(c('magenta', `  [dry-run] UNLINK symlink ${entry.path}`));
      } else {
        try { fs.unlinkSync(entry.path); removedSymlinks++; } catch (_) { /* ignore */ }
      }
    } catch (_) { /* ignore */ }
  }

  // Remove created files (deepest first to allow dir removal)
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

  // Restore backups
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

  // Remove empty directories left behind. Walk install root and commands dir
  // bottom-up; rmdir each empty one. Only touches dirs we recursively created.
  const dirsToTry = [manifest.installRoot, manifest.commandsDir, manifest.skillsLinkDir].filter(Boolean);
  function rmEmptyDirs(dir, stopAt) {
    if (!dir || !fs.existsSync(dir)) return;
    try {
      const stat = fs.statSync(dir);
      if (!stat.isDirectory()) return;
      for (const entry of fs.readdirSync(dir)) {
        rmEmptyDirs(path.join(dir, entry), stopAt);
      }
      const remaining = fs.readdirSync(dir);
      if (remaining.length === 0 && dir.length > stopAt.length) {
        if (flags.dryRun) console.log(c('magenta', `  [dry-run] RMDIR ${dir}`));
        else fs.rmdirSync(dir);
      }
    } catch (_) { /* ignore */ }
  }
  for (const d of dirsToTry) rmEmptyDirs(d, path.dirname(d));

  // Remove the manifest itself
  if (flags.dryRun) {
    console.log(c('magenta', `  [dry-run] REMOVE manifest ${manifestFilePath}`));
  } else {
    try { fs.unlinkSync(manifestFilePath); } catch (_) { /* ignore */ }
  }

  console.log(c('green', `\n✓ Uninstall complete${flags.dryRun ? ' (dry-run)' : ''}`));
  console.log(c('dim', `  Removed: ${removedFiles} files, ${removedSymlinks} symlinks`));
  console.log(c('dim', `  Restored: ${restoredBackups} backups`));
  console.log(c('dim', `  Stripped marker blocks from: ${strippedMarkers} files\n`));
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
  // It's a file
  if (fs.existsSync(dst)) {
    const decision = await resolveCollision(rl, dst, 'file', fsx.flags);
    if (decision === 'skip') {
      console.log(c('dim', `    skipped ${dst}`));
      return;
    }
    if (decision === 'overwrite') {
      fsx.backup(dst);
    }
    // 'merge' isn't meaningful for arbitrary files; fall through to overwrite if user picked it
  }
  fsx.copy(src, dst);
}

// ─── Project-directory hint ─────────────────────────────────────────────────
function isProjectDirectory(dir) {
  const indicators = ['package.json', '.git', 'Cargo.toml', 'Gemfile', 'requirements.txt', 'pyproject.toml', 'go.mod', 'Makefile', 'src', 'app'];
  return indicators.some(f => fs.existsSync(path.join(dir, f)));
}

// ─── ChatGPT copy-paste block ───────────────────────────────────────────────
function printChatGPTInstructions(installRoot) {
  console.log(`
${c('bright', 'ChatGPT setup — manual steps')}

ChatGPT does not have a native plugin install path, so the wizard has only
copied the plugin files into ${c('cyan', installRoot)}.

To use the skills inside a Custom GPT:

  1. Open ${c('cyan', 'https://chatgpt.com/gpts/editor')}.
  2. In the Instructions field, paste the contents of ${c('cyan', 'AGENTS.md')}
     from your install dir (or summarize it — the file is large).
  3. In the Knowledge field, upload selected ${c('dim', 'skills/<name>/SKILL.md')} files
     for the workflows you'll use most often.
  4. Test by typing a trigger phrase (e.g., "help me write cold email copy").
`);
}

// ─── Build instructions content for marker block ────────────────────────────
function buildInstructionsContent(scope, installRoot) {
  // Read the plugin's CLAUDE.md (or AGENTS.md) and rewrite skill paths to point
  // to the install location. For project scope this is "compounding-marketing/...";
  // for global it's the absolute installRoot.
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

// ─── Apply or update marker block in instructions file ──────────────────────
async function applyInstructionsBlock(rl, instructionsFile, pluginContent, fsx, manifest) {
  if (!instructionsFile) return;
  const markerBlock = `\n${MARKER_START}\n${pluginContent}\n${MARKER_END}\n`;
  const existed = fs.existsSync(instructionsFile);

  if (!existed) {
    const header = `# ${path.basename(instructionsFile)}\n\nThis file provides guidance to AI agents working in this repository.\n`;
    fsx.write(instructionsFile, header + markerBlock, 'instructions');
    manifest.appendedMarkers.push({ path: instructionsFile });
    console.log(c('green', `  ✓ Created ${instructionsFile} with plugin skill catalog`));
    return;
  }

  // File exists. Check for existing markers.
  const existing = fs.readFileSync(instructionsFile, 'utf8');
  const startIdx = existing.indexOf(MARKER_START);
  const endIdx = existing.indexOf(MARKER_END);

  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    // Idempotent update path — replace the marker block.
    const updated = existing.substring(0, startIdx) + MARKER_START + '\n' + pluginContent + '\n' + MARKER_END + existing.substring(endIdx + MARKER_END.length);
    if (fsx.flags.dryRun) {
      console.log(c('magenta', `  [dry-run] UPDATE marker block in ${instructionsFile}`));
    } else {
      fs.writeFileSync(instructionsFile, updated);
      manifest.appendedMarkers.push({ path: instructionsFile });
    }
    console.log(c('green', `  ✓ Updated plugin skill catalog in ${instructionsFile}`));
    return;
  }

  // No existing markers. Ask the user how to handle the collision.
  const decision = await resolveCollision(rl, instructionsFile, 'instructions', fsx.flags);
  if (decision === 'skip') {
    console.log(c('dim', `  ↷ Skipped ${instructionsFile}`));
    return;
  }
  if (decision === 'overwrite') {
    fsx.backup(instructionsFile);
    const header = `# ${path.basename(instructionsFile)}\n\nThis file provides guidance to AI agents working in this repository.\n`;
    if (fsx.flags.dryRun) {
      console.log(c('magenta', `  [dry-run] OVERWRITE ${instructionsFile} with plugin block (backup .bak created)`));
    } else {
      fs.writeFileSync(instructionsFile, header + markerBlock);
      manifest.appendedMarkers.push({ path: instructionsFile });
    }
    console.log(c('green', `  ✓ Overwrote ${instructionsFile} (backup at .bak)`));
    return;
  }
  // 'merge' — append the marker block at the end
  fsx.append(instructionsFile, markerBlock, 'plugin block');
  manifest.appendedMarkers.push({ path: instructionsFile });
  console.log(c('green', `  ✓ Appended plugin block to ${instructionsFile}`));
}

// ─── Append to gitignore (idempotent) ───────────────────────────────────────
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

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  let flags;
  try {
    flags = parseArgs(process.argv.slice(2));
  } catch (err) {
    console.error(c('red', err.message));
    process.exit(2);
  }

  if (flags.version) { console.log(PKG_VERSION); return; }
  if (flags.help) { printHelp(); return; }
  if (flags.uninstall) { return runUninstall(flags); }

  printBanner();

  if (flags.dryRun) {
    console.log(c('magenta', '  Dry-run mode: no files will be written.\n'));
  }

  const rl = createPrompt();
  const cwd = process.cwd();

  try {
    // ─── Step 0: Install scope ─────────────────────────────────────────────
    console.log(c('blue', '━━━ Step 0: Installation Scope ━━━'));
    const homeClaude = path.join(os.homedir(), '.claude');
    const claudeExists = fs.existsSync(homeClaude);
    const projectDir = isProjectDirectory(cwd);
    const defaultScope = projectDir ? 'project' : (claudeExists ? 'global' : 'project');

    let scope = flags.scope;
    if (!scope) {
      scope = await select(rl, 'Where should compounding-marketing be installed?', [
        { label: `Project — install into ${c('cyan', './compounding-marketing/')} (this directory only)`, value: 'project' },
        { label: `Global — install into ${c('cyan', '~/.claude/plugins/')} (or ~/.codex/) (available everywhere)`, value: 'global' },
        { label: 'Custom — install into a path I specify', value: 'custom' },
      ], defaultScope);
    }
    let customTarget = flags.target;
    if (scope === 'custom' && !customTarget) {
      customTarget = await ask(rl, 'Enter the absolute install path: ');
      if (!customTarget) { console.log(c('red', 'No path provided. Aborting.\n')); rl.close(); process.exit(1); }
    }
    console.log(c('green', `✓ Scope: ${scope}${scope === 'custom' ? ' → ' + customTarget : ''}`));

    // ─── Step 1: AI tool ───────────────────────────────────────────────────
    console.log(c('blue', '\n━━━ Step 1: AI Tool ━━━'));
    let tool = flags.tool;
    if (!tool) {
      tool = await select(rl, 'Which AI tool will use this plugin?', [
        { label: 'Claude Code (CLI)', value: 'claude-code' },
        { label: 'Claude Cowork', value: 'claude-cowork' },
        { label: 'Cursor', value: 'cursor' },
        { label: 'Codex (OpenAI CLI / app)', value: 'codex' },
        { label: 'ChatGPT (Custom GPT — manual steps)', value: 'chatgpt' },
        { label: 'Zed', value: 'zed' },
        { label: 'Other / Multiple (project-only, AGENTS.md)', value: 'other' },
      ], 'claude-code');
    }
    console.log(c('green', `✓ Tool: ${tool}`));

    const targets = getInstallTargets(scope, tool, cwd, customTarget);
    const manifest = newManifest(flags, scope, tool, targets);
    const fsx = makeFsx(flags, manifest);

    // ─── Step 2: MCPs (optional) ───────────────────────────────────────────
    console.log(c('blue', '\n━━━ Step 2: MCP Integrations (optional) ━━━'));
    console.log(c('dim', 'MCPs add powerful research tools. You can skip this and configure later.'));
    const config = { version: PKG_VERSION, scope, tool, mcp: {}, integrations: {} };

    if (!flags.yes) {
      if (await confirm(rl, '\nEnable Perplexity MCP? (AI-powered web research)', false)) {
        const apiKey = await ask(rl, `  Perplexity API key ${c('dim', '(or press Enter to set later)')}: `);
        config.mcp.perplexity = { enabled: true, apiKey: apiKey || 'YOUR_API_KEY_HERE' };
        console.log(c('green', '  ✓ Perplexity enabled'));
      }
      if (await confirm(rl, '\nEnable Exa MCP? (Neural search & company research)', false)) {
        const apiKey = await ask(rl, `  Exa API key ${c('dim', '(or press Enter to set later)')}: `);
        config.mcp.exa = { enabled: true, apiKey: apiKey || 'YOUR_API_KEY_HERE' };
        console.log(c('green', '  ✓ Exa enabled'));
      }
    } else {
      console.log(c('dim', '  Skipped (use --yes flag).'));
    }

    // ─── Step 3: Save .cm-config.json ──────────────────────────────────────
    console.log(c('blue', '\n━━━ Step 3: Save Configuration ━━━'));
    const configPath = path.join(cwd, '.cm-config.json');
    const configJSON = JSON.stringify(config, null, 2);
    let saveConfig = true;
    if (fs.existsSync(configPath)) {
      const decision = await resolveCollision(rl, configPath, 'config', flags);
      if (decision === 'skip') { saveConfig = false; console.log(c('dim', '  ↷ Skipped .cm-config.json')); }
      else if (decision === 'overwrite') { fsx.backup(configPath); }
    }
    if (saveConfig) {
      fsx.write(configPath, configJSON, 'config');
      console.log(c('green', `  ✓ Wrote ${configPath}`));
      ensureGitignore(cwd, '.cm-config.json', 'Compounding Marketing config (contains API keys)', fsx);
    }

    // ─── Step 4: Install plugin files ──────────────────────────────────────
    console.log(c('blue', '\n━━━ Step 4: Install Plugin Files ━━━'));
    const isLocalClone = path.resolve(PKG_ROOT) === path.resolve(targets.installRoot);
    if (isLocalClone) {
      console.log(c('dim', '  Running from the plugin repo itself — skipping file copy.'));
    } else {
      console.log(c('dim', `  Source: ${PKG_ROOT}`));
      console.log(c('dim', `  Target: ${targets.installRoot}`));
      const items = ['CLAUDE.md', 'AGENTS.md', 'skills', 'commands', '.claude-plugin', '.cursor-plugin', 'mcp', 'integrations'];
      fsx.mkdir(targets.installRoot);
      for (const item of items) {
        const srcPath = path.join(PKG_ROOT, item);
        const destPath = path.join(targets.installRoot, item);
        if (!fs.existsSync(srcPath)) continue;
        await copyTreeRespectingCollisions(srcPath, destPath, rl, fsx);
        console.log(c('green', `  ✓ ${item}`));
      }
    }

    // ─── Step 5: Register slash commands / rules ───────────────────────────
    if (targets.commandsDir) {
      console.log(c('blue', '\n━━━ Step 5: Register Slash Commands ━━━'));
      console.log(c('dim', `  Target: ${targets.commandsDir}`));

      // Check for existing cm-* entries and ask before cleaning up
      let existingCm = [];
      if (fs.existsSync(targets.commandsDir)) {
        existingCm = fs.readdirSync(targets.commandsDir).filter(f => f.startsWith('cm-') && (f.endsWith('.md') || f.endsWith('.mdc')));
      }
      let cleanup = true;
      if (existingCm.length > 0) {
        console.log(c('yellow', `\n  ⚠  Found ${existingCm.length} existing cm-* entries in ${targets.commandsDir}.`));
        if (flags.yes) {
          cleanup = false;
          console.log(c('dim', '  Skipping cleanup (--yes default = preserve existing).'));
        } else {
          cleanup = await confirm(rl, '  Replace them with fresh symlinks?', false);
        }
      }
      if (cleanup && existingCm.length > 0) {
        for (const entry of existingCm) {
          const entryPath = path.join(targets.commandsDir, entry);
          try {
            const stat = fs.lstatSync(entryPath);
            if (stat.isSymbolicLink()) fsx.unlink(entryPath);
          } catch (_) { /* ignore */ }
        }
      }

      fsx.mkdir(targets.commandsDir);

      // Workflow commands
      const cmCommandsDir = path.join(targets.installRoot, 'commands');
      let cmdCount = 0;
      if (fs.existsSync(cmCommandsDir)) {
        const cmdFiles = fs.readdirSync(cmCommandsDir).filter(f => f.endsWith('.md'));
        for (const file of cmdFiles) {
          const linkPath = path.join(targets.commandsDir, file);
          if (fs.existsSync(linkPath) && !cleanup) continue;
          const targetPath = path.relative(targets.commandsDir, path.join(cmCommandsDir, file));
          if (fsx.symlink(targetPath, linkPath, file)) cmdCount++;
        }
        console.log(c('green', `  ✓ Registered ${cmdCount} workflow commands`));
      }

      // Skills as slash commands
      const skillsDir = path.join(targets.installRoot, 'skills');
      let skillCount = 0;
      if (fs.existsSync(skillsDir)) {
        const skillDirs = fs.readdirSync(skillsDir).filter(d => {
          if (d.startsWith('_')) return false; // skip _TEMPLATE.md, etc.
          try { return fs.statSync(path.join(skillsDir, d)).isDirectory(); } catch (_) { return false; }
        });
        for (const skill of skillDirs) {
          const skillFile = path.join(skillsDir, skill, 'SKILL.md');
          if (!fs.existsSync(skillFile)) continue;
          const linkName = skill.startsWith('cm-') ? `${skill}.md` : `cm-${skill}.md`;
          const linkPath = path.join(targets.commandsDir, linkName);
          if (fs.existsSync(linkPath) && !cleanup) continue;
          const targetPath = path.relative(targets.commandsDir, skillFile);
          if (fsx.symlink(targetPath, linkPath, linkName)) skillCount++;
        }
        console.log(c('green', `  ✓ Registered ${skillCount} skills as /cm-{skill} commands`));
      }
    }

    // ─── Step 6: Update instructions file (CLAUDE.md / AGENTS.md) ──────────
    if (targets.instructionsFile) {
      console.log(c('blue', '\n━━━ Step 6: Update Instructions File ━━━'));
      const pluginContent = buildInstructionsContent(scope, targets.installRoot);
      if (pluginContent) {
        await applyInstructionsBlock(rl, targets.instructionsFile, pluginContent, fsx, manifest);
      }
    }

    // ─── Step 7: Optional .gitignore for the install dir ───────────────────
    if (scope === 'project' && !isLocalClone) {
      console.log(c('blue', '\n━━━ Step 7: Gitignore (optional) ━━━'));
      let addToGitignore = false;
      if (flags.yes) {
        addToGitignore = false;
      } else {
        addToGitignore = await confirm(rl, "Add compounding-marketing/ to .gitignore? (Recommended if you won't customize skills)", true);
      }
      if (addToGitignore) ensureGitignore(cwd, 'compounding-marketing/', 'Compounding Marketing plugin', fsx);
    }

    // ─── Step 8: Persist manifest ──────────────────────────────────────────
    const mPath = manifestPath(scope, targets.installRoot);
    persistManifest(manifest, mPath, flags);
    if (!flags.dryRun) console.log(c('dim', `\n  Manifest: ${mPath}`));

    // ─── Step 9: Post-install verification ─────────────────────────────────
    if (targets.commandsDir && fs.existsSync(targets.commandsDir) && !flags.dryRun) {
      const broken = [];
      for (const entry of fs.readdirSync(targets.commandsDir)) {
        if (!entry.startsWith('cm-')) continue;
        const fullPath = path.join(targets.commandsDir, entry);
        try {
          const lstat = fs.lstatSync(fullPath);
          if (lstat.isSymbolicLink()) fs.statSync(fullPath); // throws if target missing
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
            for (const b of broken) {
              try { fs.unlinkSync(path.join(targets.commandsDir, b)); } catch (_) { /* ignore */ }
            }
            console.log(c('green', '  ✓ Removed broken symlinks'));
          }
        }
      }
    }

    // ─── Tool-specific post-install hints ──────────────────────────────────
    if (tool === 'chatgpt') printChatGPTInstructions(targets.installRoot);

    // ─── Done ──────────────────────────────────────────────────────────────
    console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('green', '✓ Setup Complete!')}${flags.dryRun ? c('magenta', ' (dry-run)') : '                                          '}${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}

${c('bright', 'Next Steps:')}

  ${c('cyan', '1.')} Start with foundation:
     ${c('dim', `Type ${tool === 'claude-code' || tool === 'claude-cowork' ? '/cm-context' : '"run cm-context"'} to create your product-marketing context.`)}

  ${c('cyan', '2.')} Use workflows for big projects:
     ${c('dim', '/cm-research, /cm-position, /cm-copy, /cm-launch, ...')}

  ${c('cyan', '3.')} Roll back this install at any time:
     ${c('dim', 'npx compounding-marketing --uninstall')}

${c('bright', 'Docs:')}  ${c('cyan', 'https://github.com/classicchins/compounding-marketing')}
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
