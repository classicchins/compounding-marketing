# WEBSITE-BRIEF.md — Compounding Marketing Website Redesign

**Banner 🧪 | 2026-03-14**

## Executive Summary

Rebuild the Compounding Marketing website as a Next.js app with a TUI (Terminal User Interface) aesthetic. The site should feel like a premium developer tool — think Vercel docs meets Linear meets Raycast. Interactive, functional-beautiful, with full documentation pulled from the actual plugin repo.

**Core Principle:** This is a marketing plugin for marketers who appreciate well-crafted tools. The website should demonstrate the same quality bar as the plugin itself.

---

## 1. Design Direction

### Visual Philosophy

**TUI-Native, Not TUI-Cosplay**

The terminal aesthetic should feel intentional and premium — not cheap green-on-black Halloween mode. Think:
- **Vercel:** Dark mode, clean typography, subtle animations on scroll
- **Linear:** Functional density, polished UI, keyboard-first feel
- **Raycast:** Command palette aesthetic, monospace accents, crisp interactions
- **Warp Terminal:** Modern terminal done beautifully, gradients that enhance not distract

**NOT:**
- Generic SaaS landing page with stock photos
- Gradient soup with floating blobs
- Cheap retro terminal with scan lines
- Over-animated marketing fluff

### Color Palette

```
Background:       #0a0a0a (near-black)
Surface:          #141414 (card backgrounds)
Surface Elevated: #1a1a1a (modals, dropdowns)
Border:           #262626 (subtle borders)
Border Highlight: #3d3d3d (focused states)

Text Primary:     #fafafa (near-white)
Text Secondary:   #a1a1a1 (muted text)
Text Muted:       #737373 (very muted)

Accent Green:     #22c55e (success, primary actions)
Accent Amber:     #f59e0b (warnings, highlights)
Accent Blue:      #3b82f6 (links, info)
Accent Purple:    #a855f7 (premium features)

Code Background:  #0d1117 (code blocks)
Code Text:        #e6edf3 (code text)
```

### Typography

```
Monospace (headers, code, terminal):
  JetBrains Mono (primary)
  Fira Code (fallback)
  
Sans-serif (body, UI):
  Inter (primary)
  system-ui (fallback)

Sizing:
  H1: 48px / 56px line-height (mono)
  H2: 32px / 40px (mono)
  H3: 24px / 32px (mono)
  Body: 16px / 28px (sans)
  Code: 14px / 24px (mono)
  Small: 14px / 20px (sans)
```

### Visual Elements

**ASCII/Code Decorations (Tasteful)**
```
┌─────────────────────────────────────┐
│  Use for section dividers, cards    │
│  Not overwhelming, just accents     │
└─────────────────────────────────────┘

// Comment-style section markers
/* Block comments for major sections */

> Blockquote styling for callouts
```

**Code Blocks**
- GitHub-style syntax highlighting
- Copy button on hover
- Filename tab when relevant
- Line numbers optional

**Cards**
- Subtle border (not heavy)
- Slight hover lift (2px translate + shadow)
- Monospace headers, sans body
- Icon + title + description pattern

**Buttons**
- Primary: Green fill, monospace text
- Secondary: Border only, subtle fill on hover
- Ghost: Text only, underline on hover
- All with keyboard focus states

---

## 2. Page Architecture

### Site Map

```
/                           # Homepage
/skills                     # Skills explorer (filterable grid)
/skills/[category]          # Skills by category
/skills/[slug]              # Individual skill detail
/commands                   # Workflow commands
/commands/[slug]            # Individual command detail
/docs                       # Documentation index
/docs/getting-started       # Installation + quickstart
/docs/philosophy            # The compounding approach
/docs/workflows             # Example workflows
/docs/integrations          # MCP + tool integrations
/docs/api                   # Skill reference (generated)
/about                      # Creator + story (optional)
```

### Page Specifications

#### Homepage (`/`)

**Hero Section**
- Interactive terminal demo (see Section 3)
- Large monospace headline: "Marketing that compounds."
- Subhead (sans): "50 skills. 5 workflows. Make each project easier than the last."
- Primary CTA: "Get Started" → `/docs/getting-started`
- Secondary CTA: "Explore Skills" → `/skills`
- Customer/tool logos or "Works with Claude Code, ChatGPT, Cursor"

**Philosophy Section**
- Visual comparison: "Traditional Marketing" vs "Compounding Marketing"
- Left: Chaos, scattered, starting from scratch
- Right: System, building blocks, each project easier
- Pull from README philosophy section

**Skills Overview Section**
- Category cards (10 categories)
- Each card: Icon, name, skill count, brief description
- Hover: Slight lift, show top 3 skills
- Click: `/skills/[category]`

**Workflow Commands Section**
- 5 workflow cards with terminal-style display
- Each shows: Command, description, what it runs
- Subtle animation: Command "types out" on scroll

**Social Proof Section**
- "Built by [Creator]" with AuthorityMax link
- GitHub stars (if applicable)
- "Used by X marketers" (if available)

**CTA Section**
- "Ready to compound your marketing?"
- Installation command with copy button
- "Read the Docs" secondary link

#### Skills Explorer (`/skills`)

**Header**
- Title: "50 Skills for World-Class Marketing"
- Category filter tabs (horizontal scroll on mobile)
- Search input with instant filter

**Grid**
- 3-column grid (desktop), 2 (tablet), 1 (mobile)
- Each card:
  - Category badge
  - Skill name (monospace)
  - 1-line description
  - "View →" link
- Hover: Border highlight, slight lift
- Click: Slide-out panel OR navigate to detail page

**Category View (`/skills/[category]`)**
- Same grid, filtered to category
- Category description at top
- "All Skills" breadcrumb

**Skill Detail (`/skills/[slug]`)**
- Full SKILL.md content rendered
- Sections:
  - Description/triggers
  - Initial Assessment
  - Process (step-by-step)
  - Output Format (with example)
  - Quality Bar
  - Common Mistakes
  - Related Skills (linked)
- Copy entire skill as markdown button
- "Try This Skill" CTA → Getting started

#### Commands Page (`/commands`)

**Layout**
- Full-width sections for each command
- Terminal-style display of command execution
- Visual workflow: Skills that run in sequence

**Per Command:**
- Command name (large, monospace): `/cm:research`
- Description: "Deep market and customer research workflow"
- Process visualization: Step boxes with arrows
- Expected outputs list
- Time investment
- Prerequisites
- "When to Use" section

#### Documentation (`/docs`)

**Structure**
```
Getting Started
├── Installation (npx wizard)
├── Quick Start (first skill)
└── Configuration (.cm-config.json)

Philosophy
├── The Compounding Approach
├── 80/20 Research/Execution
└── Quality Bar Explained

Workflows
├── Research Workflow
├── Positioning Workflow
├── Copywriting Workflow
├── Launch Workflow
└── Compounding Workflow

Integrations
├── MCP Overview
├── Perplexity Setup
├── Exa Setup
└── Task Tracking (Linear, Trello, etc.)

Skill Reference
├── Foundation Skills
├── Research Skills
├── Content & Copy Skills
├── SEO & Discovery Skills
├── CRO Skills
├── Outreach & Email Skills
├── Paid Acquisition Skills
├── Measurement Skills
├── GTM & Launch Skills
├── Growth & Retention Skills
└── Sales & RevOps Skills
```

**Doc Page Layout**
- Left sidebar: Navigation tree
- Center: Content (max-width 720px)
- Right sidebar: On-page TOC (desktop only)
- Mobile: Hamburger nav, no right sidebar

---

## 3. Interactive Elements Specification

### 3.1 Hero Terminal Demo

**What It Does:**
Simulated terminal showing a `/cm:` command being typed and executed with response.

**User Interaction:**
- Auto-plays on page load after 1.5s delay
- User can click terminal to restart animation
- Optional: User can type their own command (from preset list)

**Animation Sequence:**
```
1. Empty terminal prompt: `$` (cursor blink)
2. Types: `/cm:position` (100ms per char)
3. Press enter (brief pause)
4. "Thinking" dots animation (1s)
5. Response appears line-by-line:
   "Running positioning workflow..."
   "✓ Loading product-market context"
   "✓ Executing positioning skill"
   "✓ Generating messaging framework"
   "✓ Creating value proposition canvas"
   "→ Output saved to deliverables/positioning-package.md"
6. Hold for 3s, then loop (or prompt user to try another)
```

**Tech Approach:**
- React component with state machine
- Framer Motion for cursor blink, text reveal
- CSS for terminal styling
- Presets: `/cm:position`, `/cm:research`, `/cm:copy`, `/cm:launch`

### 3.2 Skills Explorer Filter

**What It Does:**
Instant filter of skill cards by category and search term.

**User Interaction:**
- Click category tab → Filter grid
- Type in search → Filter by name/description
- Both filters combine

**Animation:**
- Cards fade out/in with layout shift (200ms)
- "No results" state with illustration
- Active category tab gets accent border

**Tech Approach:**
- React state for filters
- CSS Grid for layout
- `useMemo` for filtered skills array
- Framer Motion `AnimatePresence` for enter/exit

### 3.3 Skill Detail Slide-Out

**What It Does:**
Clicking a skill card opens a slide-out panel with full details (alternative: navigate to page).

**User Interaction:**
- Click card → Panel slides in from right
- Click outside or X → Panel closes
- Escape key closes

**Animation:**
- Slide from right (300ms ease-out)
- Background dims
- Focus trap inside panel

**Tech Approach:**
- Headless UI dialog or custom modal
- Framer Motion for slide
- Portal for accessibility

### 3.4 Command Process Visualizer

**What It Does:**
Shows the sequence of skills a workflow command executes.

**User Interaction:**
- Static display, hover reveals details
- Each step shows skill name and brief description

**Animation:**
- On scroll into view: Steps appear sequentially (stagger 150ms)
- Connecting lines draw themselves

**Tech Approach:**
- Framer Motion `useInView` trigger
- SVG for connecting lines with stroke-dashoffset animation
- CSS Grid for step layout

### 3.5 Code Block Copy

**What It Does:**
Copy button appears on hover, copies code to clipboard.

**User Interaction:**
- Hover code block → Copy button appears (top-right)
- Click → "Copied!" feedback (1.5s)

**Animation:**
- Button fade in on hover
- Icon swap: Copy → Check → Back to Copy

**Tech Approach:**
- `navigator.clipboard.writeText()`
- React state for copied status
- Timeout to reset

### 3.6 Doc Navigation

**What It Does:**
Left sidebar navigation with collapsible sections and active highlighting.

**User Interaction:**
- Click section → Expand/collapse children
- Current page highlighted
- Scroll spy updates right-side TOC

**Animation:**
- Smooth height transition for collapse
- Subtle highlight animation on active item

**Tech Approach:**
- React state for expanded sections
- `usePathname()` for active detection
- Intersection Observer for scroll spy

### 3.7 Dark Theme Toggle (Optional)

**What It Does:**
Toggle between dark (default) and light theme.

**Decision:** Skip for v1. Dark-only maintains the TUI aesthetic. Add later if requested.

---

## 4. Content Plan

### Files to Extract From Repo

**Root Level:**
| File | Extract | Use For |
|------|---------|---------|
| `README.md` | Philosophy, what's inside, quick start | Homepage, docs |
| `CLAUDE.md` | Skills list with descriptions | Skills explorer data |
| `CHANGELOG.md` | Feature list, version history | Docs, footer version |

**Commands:**
| File | Extract |
|------|---------|
| `commands/cm-research.md` | Full content |
| `commands/cm-position.md` | Full content |
| `commands/cm-copy.md` | Full content |
| `commands/cm-launch.md` | Full content |
| `commands/cm-compound.md` | Full content |

**Skills (All 50+):**
| Directory | Pattern |
|-----------|---------|
| `skills/*/SKILL.md` | All skill definitions |
| `skills/*/references/*.md` | Reference materials (if needed) |

**MCP & Integrations:**
| Directory | Files |
|-----------|-------|
| `mcp/README.md` | Overview |
| `mcp/perplexity/setup.md` | Setup guide |
| `mcp/perplexity/tools.md` | Tool reference |
| `mcp/exa/setup.md` | Setup guide |
| `mcp/exa/tools.md` | Tool reference |
| `integrations/README.md` | Overview |
| `integrations/task-tracking/*.md` | All guides |
| `integrations/analytics/*.md` | All guides |

### Skills Data Structure

```typescript
interface Skill {
  slug: string;           // from folder name
  name: string;           // from YAML frontmatter
  description: string;    // from YAML frontmatter
  triggers: string[];     // parsed from description
  category: SkillCategory;
  content: string;        // full markdown
  relatedSkills: string[];// parsed from "Related Skills"
}

type SkillCategory = 
  | 'foundation'
  | 'research'
  | 'content-copy'
  | 'seo-discovery'
  | 'cro'
  | 'outreach-email'
  | 'paid-acquisition'
  | 'measurement'
  | 'gtm-launch'
  | 'growth-retention'
  | 'sales-revops'
  | 'meta';
```

### Category Mappings

```typescript
const categories = {
  foundation: {
    name: 'Foundation',
    description: 'Build the strategic base: context, positioning, messaging, voice.',
    icon: 'foundation-icon',
    skills: ['cm-context', 'positioning', 'messaging-framework', 'value-proposition', 'brand-voice']
  },
  research: {
    name: 'Research',
    description: 'Deep customer and market intelligence.',
    icon: 'research-icon',
    skills: ['icp-research', 'customer-research', 'competitive-analysis', 'market-sizing', 'marketing-psychology', 'customer-interview']
  },
  'content-copy': {
    name: 'Content & Copy',
    description: 'Write copy that converts.',
    icon: 'content-icon',
    skills: ['copywriting', 'copy-editing', 'content-strategy', 'case-study', 'social-content', 'video-marketing', 'lead-magnets']
  },
  'seo-discovery': {
    name: 'SEO & Discovery',
    description: 'Get found in search and AI.',
    icon: 'seo-icon',
    skills: ['seo-audit', 'ai-seo', 'programmatic-seo', 'site-architecture', 'schema-markup', 'competitor-alternatives']
  },
  cro: {
    name: 'CRO',
    description: 'Optimize every conversion point.',
    icon: 'cro-icon',
    skills: ['page-cro', 'signup-flow-cro', 'onboarding-cro', 'form-cro', 'popup-cro', 'paywall-upgrade-cro', 'pricing-strategy']
  },
  'outreach-email': {
    name: 'Outreach & Email',
    description: 'Reach prospects directly.',
    icon: 'email-icon',
    skills: ['cold-email', 'email-sequence', 'testimonial-collection']
  },
  'paid-acquisition': {
    name: 'Paid Acquisition',
    description: 'Paid ads that perform.',
    icon: 'paid-icon',
    skills: ['paid-ads', 'ad-creative', 'linkedin-ads']
  },
  measurement: {
    name: 'Measurement',
    description: 'Track what matters.',
    icon: 'measurement-icon',
    skills: ['analytics-tracking', 'ab-test-setup', 'attribution-modeling']
  },
  'gtm-launch': {
    name: 'GTM & Launch',
    description: 'Go to market with confidence.',
    icon: 'launch-icon',
    skills: ['launch-strategy', 'gtm-strategy', 'channel-strategy', 'product-hunt-launch']
  },
  'growth-retention': {
    name: 'Growth & Retention',
    description: 'Grow and keep customers.',
    icon: 'growth-icon',
    skills: ['referral-program', 'free-tool-strategy', 'churn-prevention', 'partnership-marketing', 'community-strategy']
  },
  'sales-revops': {
    name: 'Sales & RevOps',
    description: 'Enable sales, optimize revenue.',
    icon: 'sales-icon',
    skills: ['sales-enablement', 'revops', 'webinar-strategy']
  },
  meta: {
    name: 'Meta',
    description: 'Marketing ideas and planning.',
    icon: 'meta-icon',
    skills: ['marketing-ideas']
  }
};
```

### Example Workflows to Feature

**1. Positioning a New SaaS Product**
```
User: "I'm launching a new project management tool. Help me figure out positioning."
→ /cm:research (ICP, competitors)
→ /cm:position (positioning canvas, messaging, value props)
→ Copywriting skill (homepage)
→ /cm:compound (document learnings)
```

**2. Optimizing a Low-Converting Landing Page**
```
User: "My landing page converts at 2%. Help me fix it."
→ page-cro (audit)
→ copy-editing (improve headlines, CTAs)
→ ab-test-setup (design test)
→ /cm:compound (track results)
```

**3. Launching a Major Feature**
```
User: "We're launching AI assistant features next month."
→ /cm:launch (timeline, channels, tasks)
→ copywriting (landing page)
→ email-sequence (announcement series)
→ social-content (launch posts)
→ launch-strategy (execute)
```

**4. Building a Content Engine**
```
User: "We need a blog strategy for SEO."
→ content-strategy (topics, calendar)
→ seo-audit (current state)
→ ai-seo (optimize for AI search)
→ programmatic-seo (scaled pages)
```

**5. Cold Outreach Campaign**
```
User: "Help me write cold emails that get replies."
→ icp-research (who to target)
→ cold-email (templates)
→ email-sequence (follow-up cadence)
→ testimonial-collection (gather social proof)
```

---

## 5. Documentation Architecture

### Getting Started Section

**Installation Page**
```markdown
# Installation

## Quick Install (Recommended)

\`\`\`bash
npx compounding-marketing
\`\`\`

The setup wizard will:
1. Detect your AI tool (Claude Code, ChatGPT, Cursor)
2. Ask about MCP integrations (Perplexity, Exa)
3. Configure API keys
4. Set up integrations
5. Create `.cm-config.json`

## Manual Install

Clone the repo:
\`\`\`bash
git clone https://github.com/classicchins/compounding-marketing.git
\`\`\`

Or add as submodule:
\`\`\`bash
git submodule add https://github.com/classicchins/compounding-marketing.git
\`\`\`

## Configuration

[Guide to .cm-config.json options]
```

**Quick Start Page**
```markdown
# Quick Start

## 1. Start with Context

Every marketing project starts here:

\`\`\`
Run cm-context
\`\`\`

This creates your product-marketing context — the foundation for all skills.

## 2. Choose Your Path

**New product?** Start with positioning:
\`\`\`
Run /cm:position
\`\`\`

**Existing product, need content?** Skip to execution:
\`\`\`
Use copywriting skill for my homepage
\`\`\`

## 3. Compound Your Work

After completing work:
\`\`\`
Run /cm:compound
\`\`\`

This captures learnings for next time.
```

### Philosophy Section

Pull directly from README:
- The Compounding Approach
- 80/20 Research/Execution
- Quality Bar philosophy
- Why frameworks, not prompts

### Workflows Section

Full documentation of each `/cm:` command with:
- What it does
- Step-by-step process
- When to use
- Prerequisites
- Time investment
- Example usage

### Integrations Section

**MCP Overview**
- What are MCPs
- Why use Perplexity vs Exa
- Which skills use which MCP

**Per-MCP Pages**
- Setup instructions
- Tool reference
- Example usage
- Troubleshooting

**Task Tracking**
- Linear, Trello, Asana, ClickUp guides

**Analytics**
- GA4, Search Console, Mixpanel, Meta Ads

### Skill Reference Section

Auto-generated from SKILL.md files:
- Organized by category
- Each skill page has full content
- Linked related skills
- Example outputs where available

---

## 6. Technical Specification

### Stack

```
Framework:      Next.js 14+ (App Router)
Styling:        Tailwind CSS 3.4+
Components:     shadcn/ui (customized for dark TUI theme)
Animation:      Framer Motion
Markdown:       MDX (for docs) + @next/mdx
Code Blocks:    Shiki (syntax highlighting)
Icons:          Lucide React
Fonts:          next/font (JetBrains Mono, Inter)
```

### Directory Structure

```
compounding-marketing-website/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Homepage
│   ├── skills/
│   │   ├── page.tsx         # Skills explorer
│   │   ├── [category]/
│   │   │   └── page.tsx     # Category view
│   │   └── [slug]/
│   │       └── page.tsx     # Skill detail
│   ├── commands/
│   │   ├── page.tsx         # Commands overview
│   │   └── [slug]/
│   │       └── page.tsx     # Command detail
│   ├── docs/
│   │   ├── layout.tsx       # Docs layout (sidebar)
│   │   └── [...slug]/
│   │       └── page.tsx     # Dynamic doc pages
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── ui/                  # shadcn components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileNav.tsx
│   ├── home/
│   │   ├── HeroTerminal.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── SkillsOverview.tsx
│   │   ├── WorkflowSection.tsx
│   │   └── CTASection.tsx
│   ├── skills/
│   │   ├── SkillCard.tsx
│   │   ├── SkillGrid.tsx
│   │   ├── SkillFilter.tsx
│   │   └── SkillDetail.tsx
│   ├── commands/
│   │   ├── CommandCard.tsx
│   │   └── ProcessVisualizer.tsx
│   ├── docs/
│   │   ├── DocNav.tsx
│   │   ├── DocTOC.tsx
│   │   └── MDXComponents.tsx
│   └── shared/
│       ├── CodeBlock.tsx
│       ├── CopyButton.tsx
│       └── Terminal.tsx
├── content/
│   └── docs/                # MDX files for docs
├── lib/
│   ├── skills.ts            # Skill data loader
│   ├── commands.ts          # Command data loader
│   └── utils.ts             # Utilities
├── styles/
│   └── globals.css          # Tailwind + custom styles
├── public/
│   └── fonts/               # Self-hosted fonts (optional)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### Data Loading

**Skills Data (`lib/skills.ts`):**
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SKILLS_DIR = path.join(process.cwd(), '../compounding-marketing/skills');

export function getAllSkills(): Skill[] {
  const folders = fs.readdirSync(SKILLS_DIR);
  return folders.map(folder => {
    const skillPath = path.join(SKILLS_DIR, folder, 'SKILL.md');
    const content = fs.readFileSync(skillPath, 'utf8');
    const { data, content: body } = matter(content);
    return {
      slug: folder,
      name: data.name,
      description: data.description,
      category: inferCategory(folder),
      content: body,
      // ... parse other fields
    };
  });
}
```

**Commands Data (`lib/commands.ts`):**
```typescript
const COMMANDS_DIR = path.join(process.cwd(), '../compounding-marketing/commands');

export function getAllCommands(): Command[] {
  const files = fs.readdirSync(COMMANDS_DIR);
  return files.map(file => {
    const content = fs.readFileSync(path.join(COMMANDS_DIR, file), 'utf8');
    return {
      slug: file.replace('.md', ''),
      name: extractName(content),
      description: extractDescription(content),
      content,
      // ... parse other fields
    };
  });
}
```

### Key Component Specs

**HeroTerminal.tsx:**
- Use Framer Motion for typing animation
- State machine: idle → typing → executing → showing-result → loop
- Customizable prompts array
- Responsive sizing

**SkillGrid.tsx:**
- CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`
- Filter state lifted to parent
- AnimatePresence for smooth filter transitions
- Virtual scrolling if performance issues (unlikely with 50 items)

**CodeBlock.tsx:**
- Shiki for highlighting
- Copy button positioned absolute top-right
- Optional filename tab
- Line numbers toggleable
- Support for `diff` highlighting

### Performance

- Static generation for all pages (SSG)
- Skills/commands loaded at build time
- Images optimized with next/image
- Fonts subset and preloaded
- Code splitting per route
- Lighthouse target: 95+ all categories

### Deployment

- Port: 3009
- PM2 process: `compounding-marketing-website`
- PM2 command: `npm run build && npm start`
- Caddy already configured for `compounding-marketing.staging.bigdeal.ventures`

### Package.json

```json
{
  "name": "compounding-marketing-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev -p 3009",
    "build": "next build",
    "start": "next start -p 3009",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.378.0",
    "shiki": "^1.3.0",
    "tailwindcss": "^3.4.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "typescript": "^5"
  }
}
```

---

## 7. Content to Feature Prominently

### Hero Stats (If Available)
- "50 skills"
- "5 workflow commands"
- "10 categories"
- "140+ marketing ideas"

### Key Differentiators
1. **Frameworks, not prompts** — Learn the "why", not just "what"
2. **Research-first** — 80% research, 20% execution
3. **Compounding** — Each project makes the next easier
4. **World-class quality bar** — No AI slop, specific outputs

### Social Proof Options
- Creator credentials (Chinmaya Shankar, AuthorityMax)
- GitHub stars (link to repo)
- "Works with" logos: Claude Code, ChatGPT, Cursor
- Testimonials if available

---

## 8. QA Checklist for Kai

Before marking complete:

- [ ] Homepage loads with interactive terminal demo
- [ ] Skills explorer filters work (category + search)
- [ ] All 50+ skills have detail pages with full content
- [ ] All 5 commands have detail pages
- [ ] Docs navigation works with sidebar and TOC
- [ ] Code blocks have syntax highlighting and copy
- [ ] Responsive: works on mobile, tablet, desktop
- [ ] Dark theme looks polished (not harsh)
- [ ] Animations are smooth (no jank)
- [ ] All internal links work
- [ ] External links open in new tab
- [ ] Fonts load correctly (no FOUT)
- [ ] PM2 runs without errors
- [ ] Staging URL accessible

---

## 9. Out of Scope (v1)

- Light theme toggle
- User accounts / login
- Interactive playground (run skills)
- Blog / changelog pages
- Analytics dashboard
- Search functionality (beyond skills filter)
- Internationalization

These can be added in v2 if needed.

---

## 10. Success Criteria

**The website is done when:**

1. A developer can understand what Compounding Marketing is in 10 seconds
2. A visitor can find any skill and read its full documentation
3. The TUI aesthetic feels premium, not gimmicky
4. All content matches the actual plugin repo (no placeholders)
5. The site loads fast and feels responsive
6. Mobile experience is fully functional

---

*Brief written by Banner 🧪 for Kai ⚡*
*Ready for implementation.*
