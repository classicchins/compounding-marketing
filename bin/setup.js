#!/usr/bin/env node

/**
 * Compounding Marketing Setup Wizard v1.5
 * 
 * Interactive setup for configuring MCPs, integrations, and AI tool preferences.
 * Run with: npx compounding-marketing
 * 
 * Designed to be seamless for non-technical users.
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
  magenta: '\x1b[35m',
};

const c = (color, text) => `${colors[color]}${text}${colors.reset}`;

// Banner
function printBanner() {
  console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}                                                               ${c('cyan', '║')}
${c('cyan', '║')}     ${c('bright', 'COMPOUNDING MARKETING')} ${c('dim', 'v1.5')}                               ${c('cyan', '║')}
${c('cyan', '║')}     ${c('dim', '61 skills · 14 workflows · Research-first marketing')}    ${c('cyan', '║')}
${c('cyan', '║')}                                                               ${c('cyan', '║')}
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

// Select from options with better UX
async function select(rl, question, options, { showDesc = false } = {}) {
  console.log(`\n${c('bright', question)}`);
  options.forEach((opt, i) => {
    const desc = showDesc && opt.desc ? `  ${c('dim', opt.desc)}` : '';
    console.log(`  ${c('cyan', `${i + 1})`)} ${opt.label}${desc}`);
  });
  
  const answer = await ask(rl, `\n  ${c('dim', 'Enter')} ${c('cyan', `1-${options.length}`)}: `);
  const index = parseInt(answer, 10) - 1;
  
  if (index >= 0 && index < options.length) {
    return options[index].value;
  }
  
  console.log(c('yellow', '  Using default option.'));
  return options[0].value;
}

// Yes/No question with better formatting
async function confirm(rl, question, defaultYes = true) {
  const hint = defaultYes ? `${c('green', 'Y')}/${c('dim', 'n')}` : `${c('dim', 'y')}/${c('green', 'N')}`;
  const answer = await ask(rl, `  ${question} [${hint}] `);
  
  if (answer === '') return defaultYes;
  return answer.toLowerCase().startsWith('y');
}

// Multi-select with better UX
async function multiSelect(rl, question, options) {
  console.log(`\n${c('bright', question)}`);
  console.log(c('dim', '  Comma-separated numbers, "all", or press Enter to skip'));
  console.log('');
  
  options.forEach((opt, i) => {
    const desc = opt.desc ? `  ${c('dim', opt.desc)}` : '';
    console.log(`  ${c('cyan', `${i + 1})`)} ${opt.label}${desc}`);
  });
  
  const answer = await ask(rl, `\n  ${c('dim', 'Your choices')}: `);
  
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

// Generate Claude Code / Cursor MCP config snippet
function generateMcpConfig(mcpConfig) {
  const servers = {};
  
  if (mcpConfig.perplexity?.enabled) {
    servers['perplexity'] = {
      command: 'npx',
      args: ['-y', '@anthropic-ai/mcp-server-perplexity'],
      env: {
        PERPLEXITY_API_KEY: mcpConfig.perplexity.apiKey || '${PERPLEXITY_API_KEY}',
      },
    };
  }
  
  if (mcpConfig.exa?.enabled) {
    servers['exa'] = {
      command: 'npx',
      args: ['-y', 'exa-mcp-server'],
      env: {
        EXA_API_KEY: mcpConfig.exa.apiKey || '${EXA_API_KEY}',
      },
    };
  }
  
  return { mcpServers: servers };
}

// Write CLAUDE.md or append to existing
function setupClaudeCodePlugin(projectDir) {
  const pluginDir = path.resolve(__dirname, '..');
  const claudeMdSrc = path.join(pluginDir, 'CLAUDE.md');
  const claudeMdDst = path.join(projectDir, 'CLAUDE.md');
  
  if (!fs.existsSync(claudeMdSrc)) return false;
  
  const content = fs.readFileSync(claudeMdSrc, 'utf8');
  
  if (fs.existsSync(claudeMdDst)) {
    const existing = fs.readFileSync(claudeMdDst, 'utf8');
    if (existing.includes('Compounding Marketing')) {
      return 'already-configured';
    }
    fs.appendFileSync(claudeMdDst, '\n\n' + content);
    return 'appended';
  }
  
  fs.writeFileSync(claudeMdDst, content);
  return 'created';
}

// Main setup flow
async function main() {
  // Silent mode for postinstall
  if (process.argv.includes('--silent')) {
    console.log(c('green', '✓ Compounding Marketing v1.5 installed!'));
    console.log(c('dim', '  Run `npx compounding-marketing` to set up.\n'));
    process.exit(0);
  }

  // Quick info mode
  if (process.argv.includes('--info')) {
    console.log(`Compounding Marketing v1.5`);
    console.log(`61 marketing skills · 14 workflow commands`);
    console.log(`https://github.com/classicchins/compounding-marketing`);
    process.exit(0);
  }

  printBanner();
  
  const rl = createPrompt();
  const config = {
    version: '1.5.0',
    aiTool: null,
    mcp: {},
    integrations: {},
    setupDate: new Date().toISOString().split('T')[0],
  };

  try {
    // ━━━ Step 1: AI Tool ━━━
    console.log(c('blue', '━━━ Step 1 of 4: Choose your AI tool ━━━'));
    
    config.aiTool = await select(rl, 'Which AI coding assistant are you using?', [
      { label: 'Claude Code', value: 'claude-code', desc: 'Terminal CLI by Anthropic' },
      { label: 'Cursor', value: 'cursor', desc: 'AI-first code editor' },
      { label: 'ChatGPT (Custom GPT)', value: 'chatgpt', desc: 'Upload as Custom GPT instructions' },
      { label: 'Windsurf', value: 'windsurf', desc: 'Codeium editor' },
      { label: 'Other / Multiple tools', value: 'other', desc: 'Works with any tool that reads markdown' },
    ], { showDesc: true });
    
    console.log(c('green', `  ✓ ${config.aiTool}`));

    if (config.aiTool === 'claude-code') {
      console.log(c('dim', '\n  Claude Code reads CLAUDE.md automatically — we\'ll set that up.'));
    } else if (config.aiTool === 'cursor') {
      console.log(c('dim', '\n  Cursor reads .cursorrules — we\'ll generate the config.'));
    } else if (config.aiTool === 'chatgpt') {
      console.log(c('dim', '\n  Upload AGENTS.md to your Custom GPT instructions.'));
    }

    // ━━━ Step 2: MCP Research Tools ━━━
    console.log(c('blue', '\n━━━ Step 2 of 4: Research MCPs (recommended) ━━━'));
    console.log(c('dim', '  MCPs give your AI superpowered research capabilities.\n'));
    
    // Perplexity
    console.log(`  ${c('bright', 'Perplexity')} — AI-powered web research & analysis`);
    console.log(c('dim', '  Adds: market research, competitor analysis, trend reports'));
    console.log(c('dim', '  Get API key: https://perplexity.ai/settings/api\n'));
    
    const usePerplexity = await confirm(rl, 'Enable Perplexity?', true);
    if (usePerplexity) {
      const apiKey = await ask(rl, `  API key ${c('dim', '(paste it, or Enter to add later)')}: `);
      config.mcp.perplexity = {
        enabled: true,
        apiKey: apiKey || '${PERPLEXITY_API_KEY}',
      };
      console.log(c('green', '  ✓ Perplexity enabled\n'));
    } else {
      console.log(c('dim', '  ⊘ Skipped (you can add it later in .cm-config.json)\n'));
    }

    // Exa
    console.log(`  ${c('bright', 'Exa')} — Neural search & company intelligence`);
    console.log(c('dim', '  Adds: company research, people search, semantic web search'));
    console.log(c('dim', '  Get API key: https://dashboard.exa.ai (free tier available)\n'));
    
    const useExa = await confirm(rl, 'Enable Exa?', true);
    if (useExa) {
      const apiKey = await ask(rl, `  API key ${c('dim', '(paste it, or Enter to add later)')}: `);
      config.mcp.exa = {
        enabled: true,
        apiKey: apiKey || '${EXA_API_KEY}',
      };
      console.log(c('green', '  ✓ Exa enabled\n'));
    } else {
      console.log(c('dim', '  ⊘ Skipped\n'));
    }

    // ━━━ Step 3: Integrations ━━━
    console.log(c('blue', '━━━ Step 3 of 4: Connect your tools (optional) ━━━'));
    console.log(c('dim', '  These let skills push tasks and pull analytics data.\n'));

    const taskTools = await multiSelect(rl, 'Task tracking (push marketing tasks here):', [
      { label: 'Linear', value: 'linear', desc: 'Best for product teams' },
      { label: 'Trello', value: 'trello', desc: 'Kanban boards' },
      { label: 'Asana', value: 'asana', desc: 'Cross-team projects' },
      { label: 'ClickUp', value: 'clickup', desc: 'All-in-one workspace' },
    ]);
    
    for (const tool of taskTools) {
      config.integrations[tool] = { enabled: true, apiKey: '' };
      console.log(c('green', `  ✓ ${tool} — add API key in .cm-config.json`));
    }
    if (taskTools.length === 0) {
      console.log(c('dim', '  ⊘ No task tracking (skills still work standalone)'));
    }

    const analyticsTools = await multiSelect(rl, '\nAnalytics (pull data for analysis):', [
      { label: 'Google Analytics 4', value: 'googleAnalytics', desc: 'Traffic & conversions' },
      { label: 'Google Search Console', value: 'searchConsole', desc: 'SEO rankings' },
      { label: 'Meta Ads', value: 'metaAds', desc: 'Facebook/Instagram ads' },
      { label: 'Mixpanel', value: 'mixpanel', desc: 'Product analytics' },
    ]);
    
    for (const tool of analyticsTools) {
      config.integrations[tool] = { enabled: true };
      console.log(c('green', `  ✓ ${tool} — configure in .cm-config.json`));
    }
    if (analyticsTools.length === 0) {
      console.log(c('dim', '  ⊘ No analytics (skills still work standalone)'));
    }

    // ━━━ Step 4: Save & Configure ━━━
    console.log(c('blue', '\n━━━ Step 4 of 4: Save configuration ━━━'));
    
    const configPath = path.join(process.cwd(), '.cm-config.json');
    const configJSON = JSON.stringify(config, null, 2);
    
    console.log(c('dim', '\n  Configuration:'));
    console.log(configJSON.split('\n').map(l => '  ' + l).join('\n'));
    
    const saveConfig = await confirm(rl, `\nSave to .cm-config.json?`, true);
    
    if (saveConfig) {
      fs.writeFileSync(configPath, configJSON);
      console.log(c('green', `  ✓ Saved .cm-config.json`));
      
      // Add to .gitignore
      const gitignorePath = path.join(process.cwd(), '.gitignore');
      if (fs.existsSync(gitignorePath)) {
        const gitignore = fs.readFileSync(gitignorePath, 'utf8');
        if (!gitignore.includes('.cm-config.json')) {
          fs.appendFileSync(gitignorePath, '\n# Compounding Marketing config (contains API keys)\n.cm-config.json\n');
          console.log(c('green', '  ✓ Added to .gitignore'));
        }
      } else {
        fs.writeFileSync(gitignorePath, '# Compounding Marketing config (contains API keys)\n.cm-config.json\n');
        console.log(c('green', '  ✓ Created .gitignore'));
      }
    }

    // Auto-generate MCP config for Claude Code / Cursor
    const hasMcps = config.mcp.perplexity?.enabled || config.mcp.exa?.enabled;
    
    if (hasMcps && (config.aiTool === 'claude-code' || config.aiTool === 'cursor')) {
      const mcpConfigData = generateMcpConfig(config.mcp);
      
      if (config.aiTool === 'claude-code') {
        console.log(`\n  ${c('bright', 'MCP config for Claude Code:')}`);
        console.log(c('dim', '  Add this to your Claude Code MCP settings:\n'));
        console.log(c('cyan', JSON.stringify(mcpConfigData, null, 2).split('\n').map(l => '  ' + l).join('\n')));
      } else if (config.aiTool === 'cursor') {
        const cursorMcpPath = path.join(process.cwd(), '.cursor', 'mcp.json');
        console.log(`\n  ${c('bright', 'MCP config for Cursor:')}`);
        
        const writeCursorConfig = await confirm(rl, `Write to .cursor/mcp.json?`, true);
        if (writeCursorConfig) {
          const cursorDir = path.join(process.cwd(), '.cursor');
          if (!fs.existsSync(cursorDir)) fs.mkdirSync(cursorDir, { recursive: true });
          
          let existingConfig = {};
          if (fs.existsSync(cursorMcpPath)) {
            try {
              existingConfig = JSON.parse(fs.readFileSync(cursorMcpPath, 'utf8'));
            } catch {}
          }
          
          const merged = {
            ...existingConfig,
            mcpServers: {
              ...(existingConfig.mcpServers || {}),
              ...mcpConfigData.mcpServers,
            },
          };
          
          fs.writeFileSync(cursorMcpPath, JSON.stringify(merged, null, 2));
          console.log(c('green', `  ✓ Written to ${cursorMcpPath}`));
        }
      }
    }

    // Setup CLAUDE.md for Claude Code
    if (config.aiTool === 'claude-code') {
      const pluginDir = path.resolve(__dirname, '..');
      const claudeMdSrc = path.join(pluginDir, 'CLAUDE.md');
      
      if (fs.existsSync(claudeMdSrc)) {
        const result = setupClaudeCodePlugin(process.cwd());
        if (result === 'created') {
          console.log(c('green', '  ✓ Created CLAUDE.md — Claude Code will auto-detect skills'));
        } else if (result === 'appended') {
          console.log(c('green', '  ✓ Appended to existing CLAUDE.md'));
        } else if (result === 'already-configured') {
          console.log(c('dim', '  ⊘ CLAUDE.md already includes Compounding Marketing'));
        }
      }
    }

    // ━━━ Done! ━━━
    console.log(`
${c('cyan', '╔═══════════════════════════════════════════════════════════════╗')}
${c('cyan', '║')}     ${c('green', '✓ Setup Complete!')}                                          ${c('cyan', '║')}
${c('cyan', '╚═══════════════════════════════════════════════════════════════╝')}

${c('bright', 'Get started in 3 steps:')}

  ${c('cyan', '1.')} ${c('bright', 'Create your marketing foundation:')}
     ${c('dim', 'Tell your AI:')} "Run the cm-context skill"
     ${c('dim', 'This creates your product-marketing context doc.')}

  ${c('cyan', '2.')} ${c('bright', 'Run a workflow:')}
     ${c('green', '/cm:position')}  — Full positioning workshop (April Dunford framework)
     ${c('green', '/cm:research')}  — Deep market + customer research
     ${c('green', '/cm:copy')}      — End-to-end copywriting with CRO review
     ${c('green', '/cm:launch')}    — Launch planning and execution

  ${c('cyan', '3.')} ${c('bright', 'Daily operations:')}
     ${c('green', '/cm:standup')}   — 5-min marketing standup
     ${c('green', '/cm:daily')}     — 10-min daily review
     ${c('green', '/cm:sprint')}    — Plan a 2-week marketing sprint
     ${c('green', '/cm:weekly')}    — 30-min weekly review + planning

${c('bright', 'All 61 skills:')}
  ${c('dim', 'skills/[skill-name]/SKILL.md')}

${c('bright', 'Docs & help:')}
  ${c('cyan', 'https://github.com/classicchins/compounding-marketing')}

${c('dim', 'Make each unit of marketing work easier than the last. 🚀')}
`);

  } catch (err) {
    if (err.message === 'readline was closed') {
      console.log(c('dim', '\n  Setup cancelled.'));
    } else {
      console.error(c('red', `\nError: ${err.message}`));
    }
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
