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

  const answer = await ask(rl, `\nEnter choice (1-${options.length}): `);
  const index = parseInt(answer, 10) - 1;

  if (index >= 0 && index < options.length) {
    return options[index].value;
  }

  console.log(c('yellow', 'Invalid choice, using default.'));
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
    version: '1.1.0',
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
        apiKey: apiKey || '${PERPLEXITY_API_KEY}',
      };
      console.log(c('green', '  ✓ Perplexity enabled'));
    }

    // Exa
    const useExa = await confirm(rl, '\nEnable Exa MCP? (Neural search & company research)');
    if (useExa) {
      const apiKey = await ask(rl, `  Enter Exa API key ${c('dim', '(or press Enter to set later)')}: `);
      config.mcp.exa = {
        enabled: true,
        apiKey: apiKey || '${EXA_API_KEY}',
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
        if (!gitignore.includes('.cm-config.json')) {
          fs.appendFileSync(gitignorePath, '\n# Compounding Marketing config (contains API keys)\n.cm-config.json\n');
          console.log(c('green', '✓ Added .cm-config.json to .gitignore'));
        }
      } else {
        fs.writeFileSync(gitignorePath, '# Compounding Marketing config (contains API keys)\n.cm-config.json\n');
        console.log(c('green', '✓ Created .gitignore with .cm-config.json'));
      }
    }

    // Step 5: Install plugin files into project
    console.log(c('blue', '\n━━━ Step 5: Install Plugin Files ━━━'));
    console.log(c('dim', 'Copy skills, commands, and config files into your project so your AI tool can discover them.\n'));

    const pkgRoot = path.resolve(__dirname, '..');
    const pluginItems = [
      { src: 'CLAUDE.md', label: 'CLAUDE.md (Claude Code entry point)' },
      { src: 'AGENTS.md', label: 'AGENTS.md (ChatGPT / cross-platform)' },
      { src: 'skills', label: 'skills/ (61 marketing skills)' },
      { src: 'commands', label: 'commands/ (11 workflow commands)' },
      { src: '.claude-plugin', label: '.claude-plugin/ (plugin metadata)' },
      { src: '.cursor-plugin', label: '.cursor-plugin/ (Cursor metadata)' },
      { src: 'mcp', label: 'mcp/ (MCP server configs)' },
    ];

    // Check if files are already present (e.g. user cloned the repo directly)
    const srcClaudeMd = path.join(pkgRoot, 'CLAUDE.md');
    const destClaudeMd = path.join(cwd, 'CLAUDE.md');
    const alreadyPresent = fs.existsSync(destClaudeMd) && fs.existsSync(path.join(cwd, 'skills'));
    const isLocalClone = path.resolve(pkgRoot) === path.resolve(cwd);

    if (isLocalClone) {
      console.log(c('dim', 'Running from the plugin repo itself — skipping file copy.\n'));
    } else if (alreadyPresent) {
      const overwrite = await confirm(rl, 'Plugin files already exist in this directory. Overwrite with latest?', false);
      if (overwrite) {
        for (const item of pluginItems) {
          const srcPath = path.join(pkgRoot, item.src);
          const destPath = path.join(cwd, item.src);
          if (!fs.existsSync(srcPath)) continue;
          const stat = fs.statSync(srcPath);
          if (stat.isDirectory()) {
            fs.cpSync(srcPath, destPath, { recursive: true, force: true });
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
          console.log(c('green', `  ✓ ${item.label}`));
        }
      } else {
        console.log(c('dim', '  Skipped — keeping existing files.\n'));
      }
    } else {
      const installFiles = await confirm(rl, 'Install plugin files into this directory?');
      if (installFiles) {
        for (const item of pluginItems) {
          const srcPath = path.join(pkgRoot, item.src);
          const destPath = path.join(cwd, item.src);
          if (!fs.existsSync(srcPath)) continue;
          const stat = fs.statSync(srcPath);
          if (stat.isDirectory()) {
            fs.cpSync(srcPath, destPath, { recursive: true });
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
          console.log(c('green', `  ✓ ${item.label}`));
        }
        console.log(c('green', '\n  ✓ Plugin files installed'));

        // Ask about .gitignore for copied files
        const gitignorePlugin = await confirm(rl, '\n  Add copied plugin files to .gitignore? (Recommended if you won\'t customize them)');
        if (gitignorePlugin) {
          const gitignorePath = path.join(cwd, '.gitignore');
          const gitignoreEntries = '\n# Compounding Marketing plugin files\nskills/\ncommands/\nmcp/\nCLAUDE.md\nAGENTS.md\n.claude-plugin/\n.cursor-plugin/\n';
          if (fs.existsSync(gitignorePath)) {
            const existing = fs.readFileSync(gitignorePath, 'utf8');
            if (!existing.includes('# Compounding Marketing plugin files')) {
              fs.appendFileSync(gitignorePath, gitignoreEntries);
            }
          } else {
            fs.writeFileSync(gitignorePath, gitignoreEntries.trimStart());
          }
          console.log(c('green', '  ✓ Added plugin files to .gitignore'));
        }
      } else {
        console.log(c('yellow', '\n  ⚠  Skipped. Your AI tool won\'t see the skills until you copy them manually.'));
        console.log(c('dim', '     You can re-run `npx compounding-marketing` anytime to install.\n'));
      }
    }

    // Done
    console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('green', '✓ Setup Complete!')}                                          ${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}

${c('bright', 'Next Steps:')}

  ${c('cyan', '1.')} Start with foundation:
     ${c('dim', 'Ask your AI: "Run the cm-context skill to create our product-marketing context."')}

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
