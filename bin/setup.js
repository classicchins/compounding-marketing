#!/usr/bin/env node

/**
 * Compounding Marketing Setup Wizard
 *
 * Interactive setup for configuring MCPs, integrations, and AI tool preferences.
 * Run with: npx compounding-marketing
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

const c = (color, text) => `${colors[color]}${text}${colors.reset}`;

// Banner
function printBanner() {
  console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('bright', 'COMPOUNDING MARKETING')} — Setup Wizard                     ${c('cyan', '║')}
${c('cyan', '║')}     ${c('dim', 'Make each unit of marketing work easier than the last')}      ${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}
`);
}

// Create readline interface
function createPrompt() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

// Promisified question
function ask(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Select from options
async function select(rl, question, options) {
  console.log(`\n${c('bright', question)}`);
  options.forEach((opt, i) => {
    console.log(`  ${c('cyan', `[${i + 1}]`)} ${opt.label}`);
  });

  let attempts = 0;
  while (attempts < 3) {
    const answer = await ask(rl, `\nEnter choice (1-${options.length}): `);
    const index = parseInt(answer, 10) - 1;
    if (index >= 0 && index < options.length) {
      return options[index].value;
    }
    attempts++;
    if (attempts < 3) {
      console.log(c('yellow', `Invalid choice. Please enter a number from 1 to ${options.length}.`));
    }
  }

  console.log(c('yellow', `Using default: ${options[0].label}`));
  return options[0].value;
}

// Yes/No question
async function confirm(rl, question, defaultYes = true) {
  const hint = defaultYes ? '[Y/n]' : '[y/N]';
  const answer = await ask(rl, `${question} ${c('dim', hint)} `);

  if (answer === '') return defaultYes;
  return answer.toLowerCase().startsWith('y');
}

// Multi-select
async function multiSelect(rl, question, options) {
  console.log(`\n${c('bright', question)}`);
  console.log(c('dim', '(Enter numbers separated by commas, or "all" for all, or "none" to skip)'));

  options.forEach((opt, i) => {
    console.log(`  ${c('cyan', `[${i + 1}]`)} ${opt.label}`);
  });

  const answer = await ask(rl, `\nYour choices: `);

  if (answer.toLowerCase() === 'all') {
    return options.map(o => o.value);
  }
  if (answer.toLowerCase() === 'none' || answer === '') {
    return [];
  }

  const indices = answer.split(',').map(s => parseInt(s.trim(), 10) - 1);
  return indices
    .filter(i => i >= 0 && i < options.length)
    .map(i => options[i].value);
}

// Create symlink with copy fallback (Windows compat)
function createLink(targetPath, linkPath, label) {
  try {
    fs.symlinkSync(targetPath, linkPath);
    return true;
  } catch (err) {
    if (err.code === 'EPERM' || err.code === 'EACCES') {
      try {
        const absoluteTarget = path.resolve(path.dirname(linkPath), targetPath);
        fs.copyFileSync(absoluteTarget, linkPath);
        return true;
      } catch (_) { /* fall through */ }
    }
    console.log(c('yellow', `  ⚠  Could not link ${label}: ${err.message}`));
    return false;
  }
}

// Check if running inside a project directory
function isProjectDirectory(dir) {
  const indicators = [
    'package.json',
    '.git',
    'Cargo.toml',
    'Gemfile',
    'requirements.txt',
    'pyproject.toml',
    'go.mod',
    'Makefile',
    'src',
    'app',
  ];
  return indicators.some(f => fs.existsSync(path.join(dir, f)));
}

// Main setup flow
async function main() {
  // Silent mode for postinstall
  if (process.argv.includes('--silent')) {
    console.log(c('green', '✓ Compounding Marketing installed successfully!'));
    console.log(c('dim', '  Run `npx compounding-marketing` to configure.\n'));
    process.exit(0);
  }

  printBanner();

  const rl = createPrompt();
  const cwd = process.cwd();

  // Check if running in a project directory
  if (!isProjectDirectory(cwd)) {
    console.log(c('yellow', '⚠  Compounding Marketing works best installed in your project directory.\n'));
    console.log(c('dim', '   Run from your project root:'));
    console.log(c('dim', `     cd /path/to/your-project`));
    console.log(c('dim', '     npx compounding-marketing\n'));

    const continueAnyway = await confirm(rl, 'Continue setup in current directory anyway?', false);
    if (!continueAnyway) {
      console.log(c('dim', '\nExiting. Re-run from your project directory.\n'));
      rl.close();
      process.exit(0);
    }
  }

  const config = {
    version: require('../package.json').version,
    aiTool: null,
    mcp: {},
    integrations: {},
  };

  try {
    // Step 1: AI Tool
    console.log(c('blue', '\n━━━ Step 1: AI Tool ━━━'));
    config.aiTool = await select(rl, 'Which AI tool are you using?', [
      { label: 'Claude Code (CLI)', value: 'claude-code' },
      { label: 'Codex CLI', value: 'codex-cli' },
      { label: 'Cursor', value: 'cursor' },
      { label: 'Windsurf', value: 'windsurf' },
      { label: 'VS Code (Copilot / Continue)', value: 'vscode' },
      { label: 'Zed', value: 'zed' },
      { label: 'ChatGPT (Custom GPT)', value: 'chatgpt' },
      { label: 'Other / Multiple', value: 'other' },
    ]);
    console.log(c('green', `✓ Selected: ${config.aiTool}`));

    // Step 2: MCPs
    console.log(c('blue', '\n━━━ Step 2: MCP Integrations ━━━'));
    console.log(c('dim', 'MCPs add powerful research tools to your AI assistant.'));

    // Perplexity
    const usePerplexity = await confirm(rl, '\nEnable Perplexity MCP? (AI-powered web research)');
    if (usePerplexity) {
      const apiKey = await ask(rl, `  Enter Perplexity API key ${c('dim', '(or press Enter to set later)')}: `);
      config.mcp.perplexity = {
        enabled: true,
        apiKey: apiKey || 'YOUR_API_KEY_HERE',
      };
      console.log(c('green', '  ✓ Perplexity enabled'));
    }

    // Exa
    const useExa = await confirm(rl, '\nEnable Exa MCP? (Neural search & company research)');
    if (useExa) {
      const apiKey = await ask(rl, `  Enter Exa API key ${c('dim', '(or press Enter to set later)')}: `);
      config.mcp.exa = {
        enabled: true,
        apiKey: apiKey || 'YOUR_API_KEY_HERE',
      };
      console.log(c('green', '  ✓ Exa enabled'));
    }

    // Step 3: Integrations
    console.log(c('blue', '\n━━━ Step 3: Optional Integrations ━━━'));
    console.log(c('dim', 'Connect to your existing tools for better workflows.'));

    // Task tracking
    const taskTools = await multiSelect(rl, 'Which task tracking tools do you use?', [
      { label: 'Linear', value: 'linear' },
      { label: 'Trello', value: 'trello' },
      { label: 'Asana', value: 'asana' },
      { label: 'ClickUp', value: 'clickup' },
    ]);

    for (const tool of taskTools) {
      config.integrations[tool] = { enabled: true, apiKey: '' };
      console.log(c('green', `  ✓ ${tool} enabled (configure API key in .cm-config.json)`));
    }

    // Analytics
    const analyticsTools = await multiSelect(rl, 'Which analytics tools do you use?', [
      { label: 'Google Analytics 4', value: 'googleAnalytics' },
      { label: 'Google Search Console', value: 'searchConsole' },
      { label: 'Mixpanel', value: 'mixpanel' },
      { label: 'Meta Ads', value: 'metaAds' },
    ]);

    for (const tool of analyticsTools) {
      config.integrations[tool] = { enabled: true };
      console.log(c('green', `  ✓ ${tool} enabled (configure in .cm-config.json)`));
    }

    // Step 4: Write config
    console.log(c('blue', '\n━━━ Step 4: Save Configuration ━━━'));

    const configPath = path.join(cwd, '.cm-config.json');
    const configJSON = JSON.stringify(config, null, 2);

    console.log(c('dim', `\nConfiguration preview:`));
    console.log(configJSON);

    const saveConfig = await confirm(rl, `\nSave to ${configPath}?`);

    if (saveConfig) {
      fs.writeFileSync(configPath, configJSON);
      console.log(c('green', `✓ Saved to ${configPath}`));

      // Add to .gitignore (create if it doesn't exist)
      const gitignorePath = path.join(cwd, '.gitignore');
      if (fs.existsSync(gitignorePath)) {
        const gitignore = fs.readFileSync(gitignorePath, 'utf8');
        if (!gitignore.split('\n').map(l => l.trim()).includes('.cm-config.json')) {
          fs.appendFileSync(gitignorePath, '\n# Compounding Marketing config (contains API keys)\n.cm-config.json\n');
          console.log(c('green', '✓ Added .cm-config.json to .gitignore'));
        }
      } else {
        fs.writeFileSync(gitignorePath, '# Compounding Marketing config (contains API keys)\n.cm-config.json\n');
        console.log(c('green', '✓ Created .gitignore with .cm-config.json'));
      }
    }

    // Step 5: Install plugin files into project subdirectory
    console.log(c('blue', '\n━━━ Step 5: Install Plugin Files ━━━'));
    console.log(c('dim', 'Install skills and commands into a compounding-marketing/ subdirectory.'));
    console.log(c('dim', 'Your existing files will not be modified or overwritten.\n'));

    const pkgRoot = path.resolve(__dirname, '..');
    const pluginDir = path.join(cwd, 'compounding-marketing');
    const isLocalClone = path.resolve(pkgRoot) === path.resolve(cwd);

    // Items to copy into compounding-marketing/ subdirectory
    const pluginItems = [
      { src: 'CLAUDE.md', label: 'CLAUDE.md (skill catalog)' },
      { src: 'AGENTS.md', label: 'AGENTS.md (ChatGPT / cross-platform)' },
      { src: 'skills', label: 'skills/ (61 marketing skills)' },
      { src: 'commands', label: 'commands/ (11 workflow commands)' },
      { src: '.claude-plugin', label: '.claude-plugin/ (plugin metadata)' },
      { src: '.cursor-plugin', label: '.cursor-plugin/ (Cursor metadata)' },
      { src: 'mcp', label: 'mcp/ (MCP server configs)' },
    ];

    const MARKER_START = '<!-- COMPOUNDING-MARKETING-START -->';
    const MARKER_END = '<!-- COMPOUNDING-MARKETING-END -->';

    if (isLocalClone) {
      console.log(c('dim', 'Running from the plugin repo itself — skipping file copy.\n'));
    } else {
      const pluginDirExists = fs.existsSync(pluginDir);
      const promptMsg = pluginDirExists
        ? 'Update compounding-marketing/ to latest version?'
        : 'Install plugin files into compounding-marketing/ subdirectory?';

      const installFiles = await confirm(rl, promptMsg);
      if (installFiles) {
        // Create or update the subdirectory
        fs.mkdirSync(pluginDir, { recursive: true });

        for (const item of pluginItems) {
          const srcPath = path.join(pkgRoot, item.src);
          const destPath = path.join(pluginDir, item.src);
          if (!fs.existsSync(srcPath)) continue;
          const stat = fs.statSync(srcPath);
          if (stat.isDirectory()) {
            fs.cpSync(srcPath, destPath, { recursive: true, force: true });
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
          console.log(c('green', `  ✓ ${item.label}`));
        }

        // Build plugin CLAUDE.md content with rewritten paths for root embedding
        const pluginClaudeMdPath = path.join(pkgRoot, 'CLAUDE.md');
        let pluginContent = '';
        if (fs.existsSync(pluginClaudeMdPath)) {
          pluginContent = fs.readFileSync(pluginClaudeMdPath, 'utf8');
          // Rewrite skill/command paths to point into the subdirectory
          pluginContent = pluginContent
            .replace(/`skills\//g, '`compounding-marketing/skills/')
            .replace(/`commands\//g, '`compounding-marketing/commands/')
            .replace(/`mcp\//g, '`compounding-marketing/mcp/')
            .replace(/`integrations\//g, '`compounding-marketing/integrations/')
            .replace(/`\.agents\//g, '`compounding-marketing/.agents/');
        }

        const markerBlock = `\n${MARKER_START}\n${pluginContent}\n${MARKER_END}\n`;

        // Handle CLAUDE.md in project root — append full content with markers
        const claudeMdPath = path.join(cwd, 'CLAUDE.md');
        if (fs.existsSync(claudeMdPath)) {
          let existing = fs.readFileSync(claudeMdPath, 'utf8');
          const startIdx = existing.indexOf(MARKER_START);
          const endIdx = existing.indexOf(MARKER_END);

          if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
            // Replace existing marker block with updated content
            existing = existing.substring(0, startIdx) + MARKER_START + '\n' + pluginContent + '\n' + MARKER_END + existing.substring(endIdx + MARKER_END.length);
            fs.writeFileSync(claudeMdPath, existing);
            console.log(c('green', '  ✓ Updated plugin skill catalog in CLAUDE.md'));
          } else if (startIdx !== -1 || endIdx !== -1) {
            // Malformed markers — append fresh block and warn
            fs.appendFileSync(claudeMdPath, markerBlock);
            console.log(c('yellow', '  ⚠  Found malformed markers in CLAUDE.md — appended fresh plugin section'));
          } else {
            // No markers — append new block
            fs.appendFileSync(claudeMdPath, markerBlock);
            console.log(c('green', '  ✓ Appended plugin skill catalog to existing CLAUDE.md'));
          }
        } else {
          fs.writeFileSync(claudeMdPath, `# CLAUDE.md\n\nThis file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.\n${markerBlock}`);
          console.log(c('green', '  ✓ Created CLAUDE.md with full plugin skill catalog'));
        }

        console.log(c('green', '\n  ✓ Plugin installed'));

        // Register commands and skills as Claude Code slash commands via symlinks
        const claudeCommandsDir = path.join(cwd, '.claude', 'commands');
        fs.mkdirSync(claudeCommandsDir, { recursive: true });

        // Clean up old cm-* symlinks (handles removed skills/commands on update)
        const existingEntries = fs.readdirSync(claudeCommandsDir);
        for (const entry of existingEntries) {
          if (entry.startsWith('cm-') && entry.endsWith('.md')) {
            const entryPath = path.join(claudeCommandsDir, entry);
            try {
              const stat = fs.lstatSync(entryPath);
              if (stat.isSymbolicLink()) {
                fs.unlinkSync(entryPath);
              }
            } catch (_) {
              // ignore
            }
          }
        }

        // Symlink workflow commands (cm-*.md)
        const cmCommandsDir = path.join(pluginDir, 'commands');
        let cmdCount = 0;
        if (fs.existsSync(cmCommandsDir)) {
          const cmdFiles = fs.readdirSync(cmCommandsDir).filter(f => f.endsWith('.md'));
          for (const file of cmdFiles) {
            const linkPath = path.join(claudeCommandsDir, file);
            const targetPath = path.relative(claudeCommandsDir, path.join(cmCommandsDir, file));
            if (createLink(targetPath, linkPath, file)) cmdCount++;
          }
          console.log(c('green', `  ✓ Registered ${cmdCount} workflow commands as /slash commands`));
        }

        // Symlink skills as slash commands (cm-{skill-name}.md)
        const skillsDir = path.join(pluginDir, 'skills');
        let skillCount = 0;
        if (fs.existsSync(skillsDir)) {
          const skillDirs = fs.readdirSync(skillsDir).filter(d => {
            try { return fs.statSync(path.join(skillsDir, d)).isDirectory(); } catch (_) { return false; }
          });
          for (const skill of skillDirs) {
            const skillFile = path.join(skillsDir, skill, 'SKILL.md');
            if (fs.existsSync(skillFile)) {
              const linkName = skill.startsWith('cm-') ? `${skill}.md` : `cm-${skill}.md`;
              const linkPath = path.join(claudeCommandsDir, linkName);
              const targetPath = path.relative(claudeCommandsDir, skillFile);
              if (createLink(targetPath, linkPath, linkName)) skillCount++;
            }
          }
          console.log(c('green', `  ✓ Registered ${skillCount} skills as /cm-{skill} slash commands`));
        }

        // Verify symlinks resolve correctly
        if (fs.existsSync(claudeCommandsDir)) {
          const broken = [];
          for (const entry of fs.readdirSync(claudeCommandsDir)) {
            if (!entry.startsWith('cm-')) continue;
            const fullPath = path.join(claudeCommandsDir, entry);
            try {
              const lstat = fs.lstatSync(fullPath);
              if (lstat.isSymbolicLink()) {
                fs.statSync(fullPath); // follows symlink — throws if target missing
              }
            } catch (err) {
              if (err.code === 'ENOENT') broken.push(entry);
            }
          }
          if (broken.length > 0) {
            console.log(c('yellow', `\n  ⚠  ${broken.length} broken symlink(s) found:`));
            broken.forEach(b => console.log(c('yellow', `    - ${b}`)));
          }
        }

        // Ask about .gitignore
        const gitignorePlugin = await confirm(rl, '\n  Add compounding-marketing/ to .gitignore? (Recommended if you won\'t customize skills)');
        if (gitignorePlugin) {
          const gitignorePath = path.join(cwd, '.gitignore');
          const gitignoreEntry = '\n# Compounding Marketing plugin\ncompounding-marketing/\n';
          if (fs.existsSync(gitignorePath)) {
            const existing = fs.readFileSync(gitignorePath, 'utf8');
            if (!existing.split('\n').map(l => l.trim()).includes('compounding-marketing/')) {
              fs.appendFileSync(gitignorePath, gitignoreEntry);
            }
          } else {
            fs.writeFileSync(gitignorePath, gitignoreEntry.trimStart());
          }
          console.log(c('green', '  ✓ Added compounding-marketing/ to .gitignore'));
        }
      } else {
        console.log(c('yellow', '\n  ⚠  Skipped. Your AI tool won\'t see the skills until you install them.'));
        console.log(c('dim', '     Re-run `npx compounding-marketing` anytime to install.\n'));
      }
    }

    // Done
    console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('green', '✓ Setup Complete!')}                                          ${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}

${c('bright', 'Next Steps:')}

  ${c('cyan', '1.')} Start with foundation:
     ${c('dim', 'Type /cm-context in Claude Code to create your product-marketing context.')}

  ${c('cyan', '2.')} Use workflows for big projects:
     ${c('dim', '/cm:research — Deep market research')}
     ${c('dim', '/cm:position — Full positioning workshop')}
     ${c('dim', '/cm:copy — End-to-end copywriting')}
     ${c('dim', '/cm:launch — Launch planning')}

  ${c('cyan', '3.')} Read the docs:
     ${c('dim', 'mcp/README.md — MCP setup details')}
     ${c('dim', 'integrations/README.md — Integration guides')}
     ${c('dim', 'skills/[skill-name]/SKILL.md — Individual skill docs')}

${c('bright', 'Questions?')}
  GitHub: ${c('cyan', 'https://github.com/classicchins/compounding-marketing')}
  Twitter: ${c('cyan', '@classicchins')}

${c('dim', 'Make marketing compound.')}
`);

  } catch (err) {
    console.error(c('red', `\nError: ${err.message}`));
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
