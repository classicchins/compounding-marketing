# Documentation Strategy — Compounding Marketing Website

**Author:** Banner 🧪  
**Date:** 2026-03-14  
**Status:** Ready for Review

---

## 1. Current State Assessment

### What Exists Now
- **Getting Started page** (`/docs/getting-started`) — single page with installation instructions
- **Skills pages** (`/skills/*`) — auto-generated from SKILL.md files in the repository
- **Commands page** (`/commands`) — reference list of CLI commands

### What's Missing
- **Detailed conceptual documentation** — explaining *why* and *how*, not just *what*
- **Architecture overview** — how the system works, MCP integration, skill structure
- **Writing guides** — how to create custom skills, extend workflows
- **Use case playbooks** — step-by-step guides for specific marketing tasks
- **API reference** — programmatic usage, configuration options
- **Troubleshooting** — common issues and solutions
- **Changelog / Release notes** — version history with feature updates

### Gap Analysis
| Area | Current State | Needed |
|------|--------------|--------|
| Installation | ✅ Covered | Minor improvements |
| Configuration | ❌ Missing | Full guide needed |
| Skill anatomy | ❌ Missing | Detailed spec |
| Custom skills | ❌ Missing | Tutorial + reference |
| MCP integration | ❌ Missing | Architecture doc |
| Workflows | Partial | Expand with examples |
| Troubleshooting | ❌ Missing | FAQ + common errors |
| Contributing | ❌ Missing | Guidelines |

---

## 2. Recommended Approach: Repository Structure

### Folder Structure
```
/docs
├── index.md                    # Docs landing page (overview)
├── getting-started/
│   ├── installation.md
│   ├── configuration.md
│   └── first-skill.md
├── concepts/
│   ├── architecture.md         # How CM works with Claude/ChatGPT
│   ├── skills-anatomy.md       # What makes a skill
│   ├── mcp-integration.md      # MCP protocol details
│   └── context-system.md       # How .cm-context works
├── guides/
│   ├── creating-skills.md      # How to write custom skills
│   ├── workflow-commands.md    # Deep dive on workflows
│   ├── best-practices.md       # Tips for effective usage
│   └── advanced-config.md      # Power user configuration
├── playbooks/
│   ├── positioning.md          # Full walkthrough: positioning a SaaS
│   ├── seo-content.md          # Full walkthrough: SEO content strategy
│   ├── cold-outreach.md        # Full walkthrough: outreach campaign
│   └── launch-campaign.md      # Full walkthrough: product launch
├── reference/
│   ├── skills-api.md           # Skill file format reference
│   ├── commands-api.md         # Command file format reference
│   ├── config-options.md       # All configuration options
│   └── cli-reference.md        # CLI commands
├── troubleshooting/
│   ├── common-issues.md
│   └── faq.md
├── contributing/
│   ├── how-to-contribute.md
│   └── skill-guidelines.md
└── changelog.md
```

### File Format
- **Markdown** (`.md`) for all documentation
- Frontmatter for metadata:
  ```yaml
  ---
  title: "Creating Custom Skills"
  description: "Learn how to write your own marketing skills"
  category: "guides"
  order: 3
  ---
  ```
- Support MDX (`.mdx`) for interactive components if needed

### Naming Conventions
- Lowercase with hyphens: `getting-started.md`, `mcp-integration.md`
- Folders group related content
- `index.md` in each folder for landing pages

---

## 3. Website Sync Strategy

### Goal
Docs maintained in GitHub repo → Rendered on website automatically → Always in sync

### Three Options Evaluated

---

## 4. Option Analysis

### Option A: MDX Files in Repo + Next.js Native Rendering

**Approach:**
- Store docs as MDX files in `/docs` directory
- Use `next-mdx-remote` or `@next/mdx` to render at build time
- Build custom sidebar from filesystem structure
- Style with existing Tailwind setup

**Pros:**
- Full control over design and behavior
- No external dependencies
- All code in one repo
- Can share components with main site
- SSG = fast load times

**Cons:**
- Must build sidebar, navigation, search yourself
- More development time upfront
- Need to implement table of contents, breadcrumbs, etc.
- Ongoing maintenance of docs infrastructure

**Effort:** ~2-3 days initial build, ongoing maintenance

---

### Option B: Nextra or Fumadocs

**Approach:**
- Nextra: Drop-in Next.js docs framework (by Vercel)
- Fumadocs: Modern Next.js docs framework with more flexibility
- Both: Configure once, write MDX, get full docs site

**Pros:**
- Purpose-built for docs
- Built-in sidebar, search, navigation, TOC, dark mode
- MDX support out of the box
- Nextra: Very popular, battle-tested
- Fumadocs: More customizable, TypeScript-first
- Both integrate with existing Next.js site

**Cons:**
- Some design constraints (can be styled but not fully custom)
- Added dependency
- May need to adapt existing design to framework patterns

**Effort:** ~1 day setup, minimal maintenance

**Recommendation within this option:** Fumadocs over Nextra — more modern, better TypeScript support, easier to customize styling

---

### Option C: Mintlify or GitBook

**Approach:**
- Hosted documentation platform
- Syncs from GitHub repo automatically
- Renders docs with their design system

**Pros:**
- Zero maintenance after setup
- Built-in search, analytics, feedback
- Looks professional out of the box
- Handles all infrastructure (CDN, builds, etc.)

**Cons:**
- Separate domain (docs.yoursite.com) — feels disconnected
- Design won't match your site exactly
- Paid tiers for more features (Mintlify: free tier generous, GitBook: limited free)
- Less control over UX/UI
- Dependency on external service

**Effort:** ~30 minutes setup, zero maintenance

---

## 5. Recommendation: Option B — Fumadocs

### Why Fumadocs?

1. **Perfect fit for Next.js site** — It's a Next.js plugin, integrates seamlessly with your existing codebase

2. **GitHub repo as source of truth** — Docs live in `/docs` folder, synced automatically at build time

3. **Professional out of the box** — Sidebar, search, dark mode, TOC, breadcrumbs, responsive — all built in

4. **Highly customizable** — Can match existing site design, use your Tailwind config, add custom components

5. **Modern DX** — TypeScript-first, great MDX support, excellent local development experience

6. **No hosting changes** — Stays on same Vercel deployment, no subdomain needed

7. **Active maintenance** — Growing community, frequent updates

### Compared to Alternatives

| Factor | MDX Native | Fumadocs | Mintlify |
|--------|-----------|----------|----------|
| Setup time | 2-3 days | 1 day | 30 min |
| Ongoing maintenance | High | Low | None |
| Design flexibility | Full | High | Limited |
| Site integration | Full | Full | Separate |
| Search | Build yourself | Built-in | Built-in |
| Cost | Free | Free | Free tier |

### Trade-off Accepted
Fumadocs adds a dependency, but it eliminates the need to build and maintain docs infrastructure. The time saved can be spent writing actual documentation.

---

## 6. Implementation Outline

### Phase 1: Setup (Day 1)
1. Install Fumadocs packages
   ```bash
   npm install fumadocs-core fumadocs-ui fumadocs-mdx
   ```
2. Configure `fumadocs.config.ts` for source directory and sidebar
3. Create `/docs` directory with initial structure
4. Set up `app/docs` route with Fumadocs components
5. Apply existing site theme (colors, fonts) to Fumadocs config

### Phase 2: Content Migration (Day 1-2)
1. Move existing getting-started content into `/docs/getting-started/`
2. Add frontmatter to all docs
3. Test build and navigation

### Phase 3: Content Creation (Week 1-2)
Write priority docs in this order:
1. Installation + Configuration (expand from existing)
2. Skills Anatomy — how skills work
3. Creating Custom Skills — tutorial
4. Architecture Overview — MCP integration
5. 2-3 Playbooks (positioning, SEO, outreach)

### Phase 4: Polish (Week 2)
1. Add search configuration
2. Add OpenGraph images for docs pages
3. Link from main site nav to docs section
4. Test dark/light mode across all docs
5. Add contributing guidelines

### Deliverable
Full documentation section at `/docs/*` with:
- 15-20 documentation pages
- Search functionality
- Sidebar navigation
- Matching site design
- All sourced from GitHub repo

---

## Appendix: Fumadocs vs Nextra Quick Comparison

| Feature | Fumadocs | Nextra |
|---------|----------|--------|
| TypeScript | Native | Added |
| App Router | Native | Native |
| Customization | Easier | More opinionated |
| Components | shadcn-style | Custom |
| Search | Flexsearch | Flexsearch |
| Maintenance | Active | Active |
| Learning curve | Low | Low |

Both are excellent. Fumadocs is recommended for its flexibility and modern patterns, but Nextra would also work well.

---

**Next Step:** Chins to approve recommendation, then Gilfoyle to implement Fumadocs setup.
