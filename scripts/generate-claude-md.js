#!/usr/bin/env node

/**
 * generate-claude-md.js
 * 
 * Auto-generates CLAUDE.md from skills directory
 * Usage: node scripts/generate-claude-md.js
 * 
 * Scans all skill directories, reads frontmatter from SKILL.md files,
 * and regenerates CLAUDE.md with accurate skill count and list.
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../skills');
const CLAUDE_MD_PATH = path.join(__dirname, '../CLAUDE.md');

// Helper: Extract frontmatter from SKILL.md
function extractFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (!frontmatterMatch) return null;
    
    const frontmatter = {};
    const lines = frontmatterMatch[1].split('\n');
    
    for (const line of lines) {
      const match = line.match(/^(\w+):\s*(.+)$/);
      if (match) {
        frontmatter[match[1]] = match[2].trim();
      }
    }
    
    return frontmatter;
  } catch (err) {
    console.warn(`⚠️  Could not read ${filePath}: ${err.message}`);
    return null;
  }
}

// Scan skills directory
function scanSkills() {
  const skills = [];
  
  try {
    const dirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
    
    for (const dir of dirs) {
      if (!dir.isDirectory()) continue;
      
      const skillPath = path.join(SKILLS_DIR, dir.name, 'SKILL.md');
      
      if (!fs.existsSync(skillPath)) {
        console.warn(`⚠️  No SKILL.md found in ${dir.name}/`);
        continue;
      }
      
      const frontmatter = extractFrontmatter(skillPath);
      
      if (!frontmatter || !frontmatter.name || !frontmatter.description) {
        console.warn(`⚠️  Invalid frontmatter in ${dir.name}/SKILL.md`);
        continue;
      }
      
      skills.push({
        name: frontmatter.name,
        description: frontmatter.description,
        directory: dir.name
      });
    }
    
    return skills.sort((a, b) => a.name.localeCompare(b.name));
  } catch (err) {
    console.error(`❌ Error scanning skills directory: ${err.message}`);
    process.exit(1);
  }
}

// Generate skills list markdown
function generateSkillsList(skills) {
  let markdown = '';
  
  for (const skill of skills) {
    markdown += `### ${skill.name}\n\n`;
    markdown += `**Description:** ${skill.description}\n\n`;
    markdown += `**Location:** \`skills/${skill.directory}/SKILL.md\`\n\n`;
  }
  
  return markdown;
}

// Read existing CLAUDE.md (to preserve manual sections)
function readExistingClaude() {
  try {
    return fs.readFileSync(CLAUDE_MD_PATH, 'utf8');
  } catch (err) {
    console.warn('⚠️  No existing CLAUDE.md found. Creating new file.');
    return null;
  }
}

// Generate new CLAUDE.md content
function generateClaudeMd(skills, existingContent) {
  const skillCount = skills.length;
  const skillsList = generateSkillsList(skills);
  
  // If no existing content, create from scratch
  if (!existingContent) {
    return `# Compounding Marketing — Claude Plugin

AI-native marketing framework and skill library for Claude Desktop.

## Overview

Compounding Marketing is a collection of ${skillCount} marketing skills designed to help Claude provide expert marketing guidance across all disciplines.

## Skills (${skillCount})

${skillsList}

## Usage

Skills are automatically loaded by Claude Desktop when this plugin is installed. Trigger skills by mentioning relevant keywords in your prompts.

**Example:**
- "Help me plan a content calendar" → triggers \`content-strategy\`
- "Set up Google Analytics 4" → triggers \`analytics-tracking\`
- "Write battle cards for competitors" → triggers \`sales-enablement\`

## Installation

1. Clone this repo
2. Add to Claude Desktop config (\`~/Library/Application Support/Claude/claude_desktop_config.json\`):

\`\`\`json
{
  "skills": [
    "/path/to/compounding-marketing"
  ]
}
\`\`\`

3. Restart Claude Desktop

## Contributing

Skills are stored in \`skills/[skill-name]/SKILL.md\`. Each skill has:
- YAML frontmatter (name, description, metadata)
- Structured content (process, frameworks, examples)
- Quality bar (what "good" looks like)

This CLAUDE.md file is auto-generated. To update it:

\`\`\`bash
node scripts/generate-claude-md.js
\`\`\`
`;
  }
  
  // If existing content, replace skills section
  const skillsSectionRegex = /## Skills \(\d+\)\n\n[\s\S]*?(?=\n## |$)/;
  
  const newSkillsSection = `## Skills (${skillCount})\n\n${skillsList}`;
  
  if (skillsSectionRegex.test(existingContent)) {
    return existingContent.replace(skillsSectionRegex, newSkillsSection);
  } else {
    // Skills section doesn't exist, append it after Overview
    const overviewRegex = /(## Overview[\s\S]*?\n\n)/;
    if (overviewRegex.test(existingContent)) {
      return existingContent.replace(overviewRegex, `$1${newSkillsSection}\n\n`);
    } else {
      // Can't find Overview, just append to end
      return existingContent + '\n\n' + newSkillsSection;
    }
  }
}

// Main
function main() {
  console.log('🔍 Scanning skills directory...');
  
  const skills = scanSkills();
  console.log(`✅ Found ${skills.length} skills`);
  
  console.log('📄 Reading existing CLAUDE.md...');
  const existingContent = readExistingClaude();
  
  console.log('✨ Generating new CLAUDE.md...');
  const newContent = generateClaudeMd(skills, existingContent);
  
  console.log('💾 Writing CLAUDE.md...');
  fs.writeFileSync(CLAUDE_MD_PATH, newContent, 'utf8');
  
  console.log('✅ Done! CLAUDE.md updated.');
  console.log(`📊 Skill count: ${skills.length}`);
  
  // Show diff summary
  if (existingContent) {
    const oldSkillCount = (existingContent.match(/## Skills \((\d+)\)/) || [])[1];
    if (oldSkillCount && oldSkillCount !== skills.length.toString()) {
      console.log(`📈 Skill count changed: ${oldSkillCount} → ${skills.length}`);
    } else {
      console.log('📊 Skill count unchanged');
    }
  }
}

main();
