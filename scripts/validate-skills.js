#!/usr/bin/env node

/**
 * validate-skills.js
 *
 * Quality gate for skills/*\/SKILL.md files. Run before publishing or
 * after any skill edit. Exits 1 if any skill fails the gold-standard
 * structure described in skills/_TEMPLATE.md.
 *
 * Usage:
 *   node scripts/validate-skills.js                     # validate all skills
 *   node scripts/validate-skills.js skills/foo/SKILL.md # validate one file
 */

'use strict';

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const MIN_LINES = 300;
const MIN_COMMON_MISTAKES = 5;
const MIN_EXAMPLES = 2;
const MIN_RELATED_SKILLS = 3;

// Section requirements. Each canonical section can be matched by any of
// its accepted heading variants (case-insensitive, at any H2 level).
const REQUIRED_SECTIONS = [
  {
    canonical: 'Initial Assessment',
    variants: ['initial assessment', 'prerequisites', 'before you start', 'before you begin'],
  },
  {
    canonical: 'Process',
    variants: [
      'process',
      'step-by-step process',
      'workflow',
      'methodology',
      'core process',
      'framework',
      'frameworks',
    ],
    // Process headings often include qualifiers like "AEO Process (8 Steps)" —
    // accept any H2 that contains "process" or one of the synonyms.
    matchMode: 'contains',
  },
  {
    canonical: 'Output Format',
    variants: ['output format', 'output template', 'output', 'deliverable', 'deliverable template'],
  },
  {
    canonical: 'Quality Bar',
    variants: ['quality bar', 'quality standards', 'quality checklist', 'quality'],
  },
  {
    canonical: 'Examples',
    variants: ['examples', 'worked examples', 'case studies', 'walkthroughs'],
  },
  {
    canonical: 'Related Skills',
    variants: ['related skills', 'related', 'see also'],
  },
];

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w.-]*):\s*(.+)$/);
    if (m) fm[m[1]] = m[2].trim();
  }
  // Also detect nested metadata.version (`  version: X.Y.Z` under `metadata:`)
  const versionMatch = match[1].match(/^\s+version:\s*(\S+)/m);
  if (versionMatch) fm['metadata.version'] = versionMatch[1];
  return fm;
}

function getH2Headings(content) {
  return content
    .split('\n')
    .filter(line => /^##\s+/.test(line) && !/^###\s/.test(line))
    .map(line => line.replace(/^##\s+/, '').trim());
}

function matchesSection(h2List, section) {
  const normalized = h2List.map(h => h.toLowerCase());
  const matched = section.variants.some(variant => {
    if (section.matchMode === 'contains') {
      return normalized.some(h => h.includes(variant));
    }
    return normalized.some(h => h === variant || h.startsWith(variant + ' '));
  });
  if (matched) return true;
  // Special case: "Process" is also satisfied by ≥3 H2 headings of the form "Step N: ..."
  if (section.canonical === 'Process') {
    const stepHeadings = h2List.filter(h => /^step\s+\d+/i.test(h));
    if (stepHeadings.length >= 3) return true;
  }
  return false;
}

function countCommonMistakes(content) {
  // Try canonical heading first: ## or ### "Common Mistakes"
  const headingRegex = /^(#{2,3})\s+common mistakes\s*$/im;
  const hMatch = content.match(headingRegex);
  if (hMatch) {
    const startIdx = hMatch.index + hMatch[0].length;
    const tail = content.slice(startIdx);
    const level = hMatch[1].length;
    const endRegex = new RegExp(`^#{1,${level}}\\s+`, 'm');
    const endMatch = tail.match(endRegex);
    const section = endMatch ? tail.slice(0, endMatch.index) : tail;
    // Count list items first (canonical format from _TEMPLATE.md)
    const items = section.split('\n').filter(line => /^\s*([-*]|\d+\.)\s+/.test(line));
    if (items.length > 0) return items.length;
    // Otherwise count sub-headings (one mistake per H3/H4 sub-heading)
    const subHeadings = section.split('\n').filter(line => new RegExp(`^#{${level + 1},}\\s+`).test(line));
    if (subHeadings.length > 0) return subHeadings.length;
  }
  // Fallback: bold-label variant used by some Tier A skills:
  //   **Common mistakes:**
  //   - bullet
  // or "**Common mistakes to avoid:**"
  const boldRegex = /^\*\*common mistakes(?:\s+to\s+avoid)?:?\*\*\s*$/im;
  const bMatch = content.match(boldRegex);
  if (bMatch) {
    const startIdx = bMatch.index + bMatch[0].length;
    const tail = content.slice(startIdx);
    const endMatch = tail.match(/^(#{1,3}\s+|\*\*[A-Z])/m);
    const section = endMatch ? tail.slice(0, endMatch.index) : tail;
    const items = section.split('\n').filter(line => /^\s*([-*]|\d+\.)\s+/.test(line));
    return items.length;
  }
  return 0;
}

function countExamples(content) {
  // H3 headings under an "Examples"-equivalent H2 (also accept H1-style "## Example 1" pattern).
  const h2Regex = /^##\s+(examples?|worked examples|case studies|walkthroughs)\s*$/im;
  const m = content.match(h2Regex);
  if (m) {
    const startIdx = m.index + m[0].length;
    const tail = content.slice(startIdx);
    const endMatch = tail.match(/^##\s+/m);
    const section = endMatch ? tail.slice(0, endMatch.index) : tail;
    const h3s = section.split('\n').filter(line => /^###\s+/.test(line));
    if (h3s.length > 0) return h3s.length;
  }
  // Fallback: count standalone "## Example N" or "### Example N" headings anywhere in the doc.
  const exampleHeadings = content
    .split('\n')
    .filter(line => /^#{2,3}\s+example\b/i.test(line));
  return exampleHeadings.length;
}

function countRelatedLinks(content) {
  const m = content.match(/^##\s+(related skills|related|see also)\s*$/im);
  if (!m) return 0;
  const tail = content.slice(m.index + m[0].length);
  const endMatch = tail.match(/^##\s+/m);
  const section = endMatch ? tail.slice(0, endMatch.index) : tail;
  // Count any top-level list item (bullet or numbered) — it's the unit of cross-reference
  // regardless of whether the skill name is wrapped in [link](url), `backticks`, or **bold**.
  const bullets = section.split('\n').filter(line => /^\s*[-*]\s+\S/.test(line) || /^\s*\d+\.\s+\S/.test(line));
  return bullets.length;
}

function hasRolePrompt(content) {
  // First non-frontmatter, non-blank, non-H1 paragraph should start with "You are"
  const body = content.replace(/^---\n[\s\S]*?\n---\n*/, '');
  const lines = body.split('\n');
  let foundH1 = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('# ')) {
      foundH1 = true;
      continue;
    }
    if (!foundH1) continue;
    if (line === '') continue;
    return /^you are\b/i.test(line);
  }
  return false;
}

function validate(filePath) {
  const errors = [];
  const warnings = [];

  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return { errors: [`cannot read file: ${err.message}`], warnings: [] };
  }

  const lineCount = content.split('\n').length;
  if (lineCount < MIN_LINES) {
    errors.push(`file is only ${lineCount} lines (minimum ${MIN_LINES})`);
  }

  const fm = extractFrontmatter(content);
  if (!fm) {
    errors.push('missing YAML frontmatter');
  } else {
    if (!fm.name) errors.push('frontmatter missing `name`');
    if (!fm.description) errors.push('frontmatter missing `description`');
    if (!fm['metadata.version']) warnings.push('frontmatter missing `metadata.version`');
  }

  if (!hasRolePrompt(content)) {
    errors.push('missing role prompt (first paragraph after H1 must start with "You are")');
  }

  const h2s = getH2Headings(content);
  for (const section of REQUIRED_SECTIONS) {
    // Examples section is optional at H2 level if there are enough standalone "### Example N" headings — checked separately.
    if (section.canonical === 'Examples') continue;
    if (!matchesSection(h2s, section)) {
      errors.push(`missing required section: ## ${section.canonical} (accepted variants: ${section.variants.join(', ')})`);
    }
  }

  const mistakes = countCommonMistakes(content);
  if (mistakes < MIN_COMMON_MISTAKES) {
    errors.push(`Common Mistakes section has ${mistakes} items (minimum ${MIN_COMMON_MISTAKES})`);
  }

  const examples = countExamples(content);
  if (examples < MIN_EXAMPLES) {
    errors.push(`needs ≥${MIN_EXAMPLES} worked examples (found ${examples} via "## Examples" H3s or "### Example N" headings)`);
  }

  const related = countRelatedLinks(content);
  if (related < MIN_RELATED_SKILLS) {
    errors.push(`Related Skills section has ${related} cross-references (minimum ${MIN_RELATED_SKILLS})`);
  }

  return { errors, warnings, lineCount, mistakes, examples, related };
}

function main() {
  const args = process.argv.slice(2);
  let files;

  if (args.length > 0) {
    files = args.map(a => path.resolve(a));
  } else {
    const dirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
    files = dirs
      .filter(d => d.isDirectory())
      .map(d => path.join(SKILLS_DIR, d.name, 'SKILL.md'))
      .filter(p => fs.existsSync(p));
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const file of files) {
    const rel = path.relative(process.cwd(), file);
    // Skip the template itself
    if (path.basename(file) === '_TEMPLATE.md' || path.basename(path.dirname(file)).startsWith('_')) {
      continue;
    }
    const result = validate(file);
    if (result.errors.length > 0) {
      failed++;
      totalErrors += result.errors.length;
      failures.push({ file: rel, result });
    } else {
      passed++;
    }
    totalWarnings += result.warnings.length;
  }

  // Report
  console.log(`\nSkills validation: ${passed} passed, ${failed} failed, ${totalWarnings} warnings\n`);

  if (failures.length > 0) {
    console.log('FAILURES:');
    console.log('---------');
    for (const { file, result } of failures) {
      console.log(`\n  ${file}  (${result.lineCount} lines, ${result.mistakes} mistakes, ${result.examples} examples, ${result.related} related)`);
      for (const err of result.errors) {
        console.log(`    ✗ ${err}`);
      }
      for (const warn of result.warnings) {
        console.log(`    ⚠ ${warn}`);
      }
    }
    console.log('');
    process.exit(1);
  }

  process.exit(0);
}

main();
