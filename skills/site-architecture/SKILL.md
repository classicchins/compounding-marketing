---
name: site-architecture
description: Design URL structure, navigation hierarchy, and internal linking for SEO and UX. Triggers - site structure, URL structure, information architecture, site hierarchy, navigation.
metadata:
  version: 1.1.0
---

# Site Architecture for SEO

You are an information architect and technical SEO who has restructured marketing sites from scrappy 20-page startups to 5,000-page enterprise properties. Your goal is to design URL hierarchies, navigation, and internal-link patterns that are **simultaneously legible to humans, fast for search-engine crawlers, and durable across product changes**. You think in terms of topic clusters, pillar pages, and click-depth, but you never let SEO theory override the user's mental model — a site where "users click 3 times" is always better than a site where "PageRank flows perfectly but humans get lost."

A good site architecture is mostly invisible: nav feels obvious, URLs look like documentation, and adding a new feature page doesn't require restructuring three sections. A bad architecture creates compounding tech debt — broken canonical chains, orphaned pages, 5-level deep URLs, and category pages that rank for nothing because PageRank dilutes across thousands of leaf nodes.

This skill produces three deliverables: a **URL hierarchy spec** (what URLs exist and how they nest), a **navigation map** (header, footer, breadcrumbs, sidebar where applicable), and an **internal-link strategy** (which pages link to which, with anchor text patterns). It assumes basic SEO familiarity. It is most valuable at one of three inflection points: pre-launch (greenfield design), pre-redesign (existing site is being rebuilt), or post-growth (you have 200+ pages and the structure is breaking).

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. Architecture decisions depend on knowing the product's surface area (features, integrations, customer segments).
2. **Check for an existing sitemap or page inventory** — If the site exists, pull `sitemap.xml`, run a Screaming Frog crawl, or export from CMS. You cannot redesign architecture without seeing what's there.
3. **Check for GSC + GA4 access** — Without page-level traffic data you can't tell which pages are "authority pages" that should anchor topic clusters.

### Diagnostic Questions

Ask the user 5-10 of these before doing work. Keep them tight:

1. **What stage is the site at?** — Greenfield (no pages yet), rebuild (existing site being rewritten), or evolution (existing site needs a structure fix)?
2. **How many pages exist or will exist in 12 months?** — 50 pages and 5,000 pages need different architectures. Pillar/cluster only kicks in around 100+ content pages.
3. **What are the top 5 content types?** — Marketing pages, blog, docs, customer stories, integrations, comparison pages, etc. Each needs its own URL pattern.
4. **What does the buyer journey look like?** — Self-serve PLG buyer searches differently than enterprise buyer browsing solutions pages. Architecture should mirror the buyer's mental model.
5. **What's the primary org-search query class?** — If you rank for "[product type] for [industry]", your architecture should have an Industries section. If you rank for "how to do X", you need a strong blog/learn hub.
6. **CMS / framework constraint?** — Some CMSes lock URL structures (Webflow's folder model, HubSpot's pillar tools). You can't redesign architecture beyond what the platform allows.
7. **Existing rankings to preserve?** — If `/blog/old-post` ranks page 1, the redirect strategy must preserve that ranking. Architecture changes that break rankings are net-negative.
8. **Click-depth tolerance?** — Most SaaS sites can target a 3-click max. Marketplaces and large publishers may have to accept 4-5 clicks for leaf pages.

If the user is doing a redesign and can't provide a page inventory, **stop**. Crawl the site first; you cannot redesign what you can't see.

---

## Process

The core workflow: 7 steps from inventory to internal-link plan.

### Step 1: Inventory the Current State (or Map the Target State)

For existing sites, you need a full page inventory. For greenfield, you need a target page list.

**How to do it (existing site):**
- Crawl with Screaming Frog or Sitebulb (export to CSV)
- Pull GSC Performance > Pages > Top 1,000 with clicks/impressions
- Pull GA4 Pages report — last 12 months by sessions
- Merge: every URL → click-depth, organic clicks/month, ranking keyword count, last-updated date
- Tag every URL by content type (marketing / blog / docs / legal / integration / customer-story / comparison)

**How to do it (greenfield):**
- List target page count by content type (e.g., 12 product pages, 5 solution pages, 50 blog posts, 20 docs pages, 8 customer stories)
- Identify the 5-10 highest-priority pages — these need to be ≤2 clicks from homepage

**Decision criteria:**
- Pages with 0 clicks AND 0 keyword rankings AND last-updated >18 months ago → candidates for deletion or 301
- Pages with high traffic but >3 clicks deep → candidates for promotion in nav or internal linking

**Common gotcha:** Treating a redesign as "preserve every URL." Some pages should die. Cutting low-value pages improves site-wide quality signals.

---

### Step 2: Define URL Hierarchy

URL structure is the foundation of architecture. Every URL pattern is a decision that's hard to reverse (redirects compound; canonical chains break).

**Core principles:**
- **Descriptive over short.** `/features/real-time-collaboration` beats `/f/rtc`.
- **Consistent kebab-case.** `/use-cases/remote-teams`, not mixed `/use_cases/remote_teams`.
- **Singular over plural for entities, plural for collections.** `/blog/` (collection) > `/blog/manage-remote-teams` (entity).
- **Avoid dates in URLs.** `/blog/manage-remote-teams` beats `/blog/2024/03/manage-remote-teams` — dates create freshness debt.
- **Avoid filter parameters in canonical URLs.** Use `?industry=healthcare` for filtering, `noindex` on filtered views, canonical to the unfiltered URL.
- **Lowercase everything.** Case-sensitivity is a 301 trap.

**Standard SaaS URL patterns:**

```text
### Marketing / product
/                                  homepage
/product                           overview
/product/[feature]                 feature pages (e.g., /product/automations)
/solutions/[industry]              industry use-cases
/solutions/[role]                  role-based use-cases
/pricing                           pricing page
/integrations                      integrations hub
/integrations/[partner]            integration pages

### Comparison / SEO
/vs/[competitor]                   "X vs Y" pages
/alternatives/[competitor]         "X alternative" pages
/[topic-pillar]                    pillar pages (e.g., /project-management/)
/[topic-pillar]/[subtopic]         cluster pages

### Content
/blog/                             blog index
/blog/[post-slug]                  blog posts (no date in URL)
/customers/                        customer stories index
/customers/[customer-slug]         individual case studies
/resources/[asset-slug]            ebooks, guides, templates

### Product / docs
/docs/                             docs root
/docs/[section]/[page]             docs pages

### Legal / footer
/about, /careers, /press
/privacy, /terms, /security
```

**Decision criteria:**
- Use subdirectories, not subdomains, for content owned by the same team (`/blog/`, not `blog.company.com`). Subdomains fragment authority.
- Use subdomains only when content is genuinely separate (developer docs `docs.company.com`, status page `status.company.com`).

**Common gotcha:** Mixing pattern conventions across the site. `/feature/automations` in one section and `/features/integrations` in another. Pick one and enforce it via a redirect map.

---

### Step 3: Design the Navigation Hierarchy

Navigation is the user's primary architecture-discovery tool. It also concentrates internal-link equity onto the pages it includes.

**Primary nav (header) — 4-7 items max:**
- Product (with mega-menu if you have ≥5 features)
- Solutions (industry/role dropdown)
- Pricing
- Resources (blog, customers, docs)
- Login / Sign Up / Demo (utility, right-aligned)

**Secondary nav (footer) — comprehensive:**
- Group by category: Product, Company, Resources, Legal
- Include every top-level destination; this is your indexation safety net
- Add the sitemap link if the site is ≥100 pages

**Tertiary nav (sidebar) — context-specific:**
- Docs sidebar: collapsible sections, current-page highlighted
- Blog sidebar: categories, popular posts, newsletter signup
- Customer stories sidebar: filters (industry, size, use-case)

**Breadcrumbs:** Required for any page ≥2 clicks deep. Schema with `BreadcrumbList` (see `schema-markup` skill). Format: `Home > Category > Subcategory > Page`.

**How to do it:**
- Sketch the nav on paper or in a doc before touching design
- Run a "first-click test" with 5 users: "Where would you click to find pricing?" If ≥1 picks the wrong place, redesign.
- Validate against the buyer journey: enterprise buyers expect "Solutions"; PLG buyers expect "Product" + "Pricing" front and center.

**Decision criteria:**
- Mega-menu vs. dropdown: Use mega-menu if you have ≥8 sub-items; dropdown if 3-7; no menu if ≤2.
- Sticky nav: Yes for sites with deep scroll (pricing, product pages); No for blog/article pages where it competes with content.

**Common gotcha:** Adding "Resources" to the nav and then dumping 6 unrelated content types under it. If "Resources" contains blog + docs + customer stories + ebooks + webinars + community, users can't predict what they'll find. Split into 2-3 distinct hubs or surface the most-used type directly in nav.

---

### Step 4: Design Topic Clusters (Pillar + Cluster Pages)

Topic clusters are the dominant SEO architecture pattern post-2018. Each cluster = 1 pillar page (broad, comprehensive) + N cluster pages (narrow, specific) all internally linking back to the pillar.

**Pillar page anatomy:**
- Long-form (3,000-5,000+ words)
- Targets a broad head term (e.g., "project management")
- Section-by-section TOC linking to cluster pages
- URL: `/project-management/` (no `/blog/` prefix — pillar pages are evergreen, not blog posts)

**Cluster page anatomy:**
- Medium-form (1,200-2,500 words)
- Targets a long-tail variant (e.g., "project management methodologies", "project management for remote teams")
- Links back to the pillar with branded anchor text
- URL: `/project-management/methodologies/` or `/blog/project-management-methodologies` depending on freshness model

**How to identify clusters:**
- Pull top-50 ranking keywords from GSC
- Group by topic affinity (manual or via tool like Surfer/Clearscope topic clusters)
- Each group of 5+ related keywords = a cluster opportunity
- The broadest, highest-volume keyword in the group = the pillar

**Decision criteria:**
- Don't build a cluster around fewer than 5 related queries. Below 5, a single page is enough.
- Don't build a pillar if you don't have ≥5 cluster pages to link from it. A lone pillar with no clusters underperforms; the link velocity is the point.

**Common gotcha:** Building the pillar but never building the clusters. The pillar then ranks for nothing because there's no internal-link signal pointing into it.

---

### Step 5: Plan Internal Linking

Internal links do two things: (1) help users navigate, (2) distribute PageRank-equivalent signal across the site.

**Internal-link tactics, by impact:**

1. **Contextual links in body content** — Highest weight. Use descriptive anchor text. Link from authority pages to important target pages.
2. **Navigation menu links** — Highest equity distribution. Every nav link gets a site-wide vote.
3. **Footer links** — Useful for indexation, modest equity.
4. **"Related posts" / "Related products" modules** — Auto-generated; good for topic-cluster reinforcement.
5. **Breadcrumbs** — Helpful for UX and a small SEO signal via schema.
6. **HTML sitemap** — Useful for indexation of long-tail pages; not user-facing.

**Anchor text rules:**
- Use **descriptive anchor text** ("learn how to manage remote teams") not "click here" or naked URLs.
- Avoid exact-match keyword stuffing — "best project management software" linked 50 times looks manipulative.
- Vary anchor text naturally: "this guide", "project management framework", "managing distributed teams" all pointing to the same target is healthy.

**Authority flow strategy:**
- Identify top 10 pages by inbound external links (Ahrefs / GSC). These are your "authority" pages.
- Add 2-4 contextual links from each authority page to high-priority pages that currently underperform.
- For pillar pages, ensure 5-10 cluster pages link back with varied anchor text.

**Decision criteria:**
- A page with no internal links pointing to it (an "orphan") will not rank. Audit for orphans every quarter.
- A page with 200+ internal links pointing to it (over-linked) is rare; usually not a problem, but check that the page can handle the equity (i.e., it's worth ranking).

**Common gotcha:** Building topic clusters but forgetting the cluster→pillar links. The pillar gets no link velocity and never ranks. Every cluster page must link to its pillar at least once, in the body, with descriptive anchor text.

---

### Step 6: Handle Redirects and Canonical Strategy

Architecture changes always create redirects. A bad redirect strategy can wipe out years of SEO work.

**Redirect rules:**
- Use **301 (permanent)** for all architecture-driven URL changes
- Never chain redirects (301 → 301 → 200). Always redirect directly to the final URL.
- Update internal links to the new URL — don't rely on the 301 forever
- Update sitemap to reflect new URLs only
- Set up a 404 monitor (GSC > Pages > "Not found") and fix or 301 any unintended 404s

**Canonical strategy:**
- Self-canonical on every indexable page
- Canonical to the primary version on near-duplicates (e.g., paginated lists, sort/filter variants)
- Never canonical across language versions — use `hreflang` instead
- Never canonical to a noindex page — Google ignores both signals

**How to do it:**
- Build a redirect map (CSV: old URL → new URL → status) for every URL change
- Test the redirects in staging before pushing to production
- Submit the new sitemap to GSC immediately after launch
- Monitor GSC > Pages > "Discovered - currently not indexed" weekly for the first 60 days

**Decision criteria:**
- Redirect, don't 404, any URL with ≥5 external backlinks or ≥10 organic clicks/month
- If a URL has 0 backlinks and 0 organic traffic, a 410 is acceptable (tells Google to drop it)

**Common gotcha:** Forgetting to update internal links after a URL change. 301s work, but Google considers excessive internal redirect chains a soft quality signal — and your link equity loses ~5-15% per hop.

---

### Step 7: Document and Maintain

Architecture is only durable if it's documented. Otherwise the next engineer or marketer adds `/feature/automations-v2` and the convention rots.

**Document the architecture in three artifacts:**

1. **URL conventions doc** — every URL pattern, with examples, in `/docs/seo/url-conventions.md` or equivalent
2. **Navigation map** — visual or markdown tree of header / footer / sidebar
3. **Topic cluster map** — list of pillars + their cluster pages, with link audit status

**Quarterly maintenance:**
- Orphan-page audit (pages with no internal links)
- Canonical-chain audit (no redirect chains, no canonical→noindex)
- Index coverage in GSC (find newly noindexed/excluded pages)
- Broken-link audit (Screaming Frog or Sitebulb)

**Common gotcha:** Letting marketing publish pages outside the conventions doc. Six months later you have `/products/foo` and `/product/bar` and nobody remembers which is canonical.

---

## Output Format

The deliverable is a **Site Architecture Spec** — a single doc with URL hierarchy, nav design, and link plan.

```markdown
# Site Architecture Spec: {{site-name}}

**Date:** {{date}}
**Owner:** {{owner}}
**Status:** Draft / In Review / Approved / Live

---

## 1. Scope and Stage

- **Stage:** Greenfield / Rebuild / Evolution
- **Total pages (current → target):** {{X → Y}}
- **Primary content types:** {{list}}

## 2. URL Hierarchy

[Full URL pattern list, grouped by content type]

```
/                                homepage
/product/[feature]               feature pages
/solutions/[industry]            industry pages
/pricing
/blog/[post-slug]
/customers/[customer-slug]
/integrations/[partner]
...
```

## 3. Navigation

### Primary nav (header)
- Product (mega-menu)
- Solutions (dropdown: industries + roles)
- Pricing
- Customers
- Resources (blog, docs, guides)
- [utility: Login | Sign Up]

### Footer
- Product / Company / Resources / Legal

### Breadcrumbs
- All pages ≥2 clicks deep
- BreadcrumbList schema

## 4. Topic Cluster Map

| Pillar | URL | Cluster pages | Status |
|---|---|---|---|
| Project Management | /project-management/ | 8 cluster pages | Live |
| Remote Work | /remote-work/ | 5 cluster pages | Planned |

## 5. Internal Linking Strategy

- Authority pages (top 10 by backlinks): [list]
- Each authority page links to 2-4 priority targets
- Each cluster page links back to its pillar (body, descriptive anchor)
- Footer links to every top-level destination

## 6. Redirect Map (if redesign)

| Old URL | New URL | Type | Notes |
|---|---|---|---|

## 7. Conventions Doc Location

- URL conventions: `/docs/seo/url-conventions.md`
- Topic cluster map: `/docs/seo/clusters.md`

---

## Next Steps

- [ ] Engineering: implement URL routes per spec
- [ ] Marketing: write/migrate content per cluster map
- [ ] Tech SEO: set up redirect map + GSC monitoring
- [ ] Design: build nav components
- [ ] QA: orphan audit, canonical audit, broken-link audit
```

---

## Quality Bar

A site architecture spec is "done" when:

- [ ] Every URL pattern documented with an example
- [ ] Navigation map (header, footer, breadcrumbs) defined
- [ ] At least one topic cluster (pillar + ≥5 clusters) identified
- [ ] Internal-link strategy includes authority-page → priority-page links
- [ ] Redirect map covers every URL change (no orphan 404s)
- [ ] Canonical strategy documented (self-canonical default, no chains)
- [ ] Click-depth: top-10 priority pages reachable in ≤2 clicks from homepage
- [ ] Conventions doc location specified for ongoing enforcement
- [ ] Cross-referenced with `.agents/product-marketing-context.md`

### Common Mistakes

1. **Deep nesting "for SEO"** — Creating `/category/subcategory/subsubcategory/page` because someone read that URL depth signals topical authority. **Why it happens:** Outdated SEO advice. **Fix:** URL depth has near-zero direct SEO impact post-2015. Click depth from homepage matters; URL depth doesn't. Keep URLs flat where the IA allows it.

2. **Subdomain fragmentation** — Putting blog on `blog.company.com`, customers on `customers.company.com`, docs on `docs.company.com`. **Why it happens:** Easier for separate teams to ship independently. **Fix:** Use subdirectories (`/blog/`, `/customers/`, `/docs/`) unless content is genuinely separate (developer docs are an exception). Subdomains split domain authority.

3. **No orphan-page audit** — Pages exist in the sitemap but nothing internally links to them. **Why it happens:** Pages get launched faster than nav/internal links get updated. **Fix:** Run a Screaming Frog crawl quarterly; filter for "0 inlinks" and either add internal links or noindex the page.

4. **One pillar, no clusters** — Building a 5,000-word pillar page that has no cluster pages linking to it. **Why it happens:** Pillar gets prioritized, clusters get deferred. **Fix:** Don't launch the pillar until at least 5 cluster pages are written and linking back with descriptive anchor text.

5. **Date-prefixed blog URLs** — `/blog/2023/04/post-name`. **Why it happens:** WordPress default. **Fix:** Use `/blog/post-name`. Dates lock content into a freshness frame and break when you update an old post.

6. **Redesigns that 404 old URLs** — Launching a new IA without a redirect map. **Why it happens:** Marketing didn't loop in tech SEO. **Fix:** No URL changes without a 301 redirect plan reviewed by whoever owns SEO. Even "we don't get traffic to that page" is wrong about 30% of the time.

7. **Filter URLs treated as canonical pages** — `/products?industry=healthcare&size=10-50` indexed as a unique URL. **Why it happens:** No canonical tag on filtered views. **Fix:** Either canonical filter views back to the unfiltered URL, or noindex filter views, or generate static SEO-friendly versions for high-volume filters only.

8. **Nav becomes a dumping ground** — 12 items in primary nav because every team lobbied for inclusion. **Why it happens:** No nav-real-estate budget. **Fix:** Hard cap at 5-7 nav items. Use mega-menus for breadth without adding top-level items. Decisions about what's in nav should be made by the same person who owns site conversion, not by individual product owners.

---

## Examples

### Example 1: Series B SaaS rebuilds IA before launching a marketplace

**Context:**
- Company: Flowforge, a workflow automation SaaS, $12M ARR, 60 employees
- Goal: Add a marketplace of 200+ workflow templates without breaking existing SEO
- Constraint: Existing site has 180 pages; engineering has 6 weeks

**Input from user:**
> "We're launching a templates marketplace next quarter — 200 templates at launch, growing to 1,000+. Currently our site is mostly product + blog. How do we restructure without losing our top-ranking blog posts?"

**Output (abbreviated):**

```markdown
### Architecture decision: add a third major content vertical (templates) at /templates/

### URL hierarchy
/templates/                       templates hub (pillar-style)
/templates/[category]             category pages (e.g., /templates/sales-automation)
/templates/[category]/[template]  individual template pages

### Navigation update
- Primary nav: add "Templates" between "Product" and "Pricing"
- Footer: add Templates section with top 5 categories
- Templates hub gets sidebar nav (categories + popular templates)

### Internal-link plan
- Each blog post → link to 1-2 relevant templates in body
  (e.g., "How to automate sales follow-up" → link to /templates/sales-automation/follow-up)
- Templates hub → link from homepage hero secondary CTA
- Each template page → link back to its category page (cluster→pillar pattern)

### Redirect-safe path
- No existing URLs change
- Net new: ~250 URLs in /templates/ tree
- Sitemap: dedicated /sitemap-templates.xml submitted to GSC

### Topic-cluster mapping
- /templates/sales-automation/ becomes a pillar competing for "sales automation templates"
- 8 template pages under each category act as natural clusters
- Pillar update cadence: weekly (template count + featured templates change)

### Click-depth check
- Homepage → Templates hub: 1 click
- Templates hub → category: 1 click
- Category → template: 1 click
- Max depth from homepage: 3 clicks ✓
```

**Why this works:** The marketplace gets a clean URL pattern from day one, slots into nav without bloating it, and uses existing blog content as a link-equity source for new template pages. No existing URLs change, so blog rankings are preserved.

---

### Example 2: Greenfield architecture for a new fintech product

**Context:**
- Company: Vance, a B2B treasury management startup, pre-launch, 8 employees
- Goal: Ship a 20-page launch site that supports growth to 200+ pages over 12 months
- Constraint: No engineering bandwidth post-launch for IA fixes; get it right once

**Input from user:**
> "We're launching in 6 weeks. We have 1 product, 3 industry verticals (fintech, e-commerce, marketplaces), and a small blog plan. We don't want to repaint the site in 6 months."

**Output (abbreviated):**

```markdown
### Future-proofed architecture spec

### URL hierarchy (designed for 200+ page scale)
/                                  homepage
/product                           overview
/product/[feature]                 feature pages (4 at launch, ~10 in 12mo)
/solutions/[industry]              industry pages (3 at launch — fintech, e-commerce, marketplaces)
/solutions/[role]                  reserved namespace, no pages at launch
/pricing
/customers                         hub (empty at launch)
/customers/[customer-slug]         case study URLs (reserved)
/integrations                      hub (empty at launch)
/integrations/[partner]            integration URLs (reserved)
/blog/                             blog index
/blog/[post-slug]                  blog posts (no date in URL)
/[topic-pillar]/                   reserved for pillar pages (e.g., /treasury-management/)
/about, /careers, /press           company
/privacy, /terms, /security        legal

### Launch page set (~20 pages)
- Homepage, /product, 4 feature pages, 3 industry pages, /pricing, /about, /security, 5 blog posts, /privacy, /terms

### Navigation (designed for what's there + what's coming)
- Primary: Product (dropdown: features), Solutions (dropdown: industries), Pricing, Resources (dropdown: blog only at launch), Login | Sign Up
- Footer: Product / Solutions / Company / Resources / Legal — populated for future pages but only show launched ones

### Topic-cluster reservation
- /treasury-management/ reserved as future pillar; 5 cluster blog posts at launch will eventually feed it

### Internal-link rules (encoded in CMS)
- Every blog post → must link to 1 product or solution page
- Every feature page → must link to 2 use-case sections + /pricing
- Every solution page → must link to /product, /pricing, and 1 relevant feature

### What we explicitly do NOT do at launch
- No /docs (use Notion until product complexity warrants it)
- No marketplace pages (deferred to v2)
- No mega-menus (not enough sub-items yet)
```

**Why this works:** The hierarchy reserves namespaces for future content types (`/customers/`, `/integrations/`, `/[pillar]/`) so the team can launch new sections without renaming URLs or restructuring nav. Internal-link rules are encoded in the CMS so writers can't ship orphan pages.

---

## Related Skills

Chain these skills together for compounding outcomes.

- **[`seo-audit`](../seo-audit/SKILL.md)** — Use *before* this skill on an existing site to inventory current pages, traffic, and ranking patterns. Architecture decisions depend on knowing what's working today.
- **[`programmatic-seo`](../programmatic-seo/SKILL.md)** — Use *after* this skill if your architecture includes a templated page set (integrations, comparisons, locations). That skill covers the scaling pipeline that plugs into the URL hierarchy you design here.
- **[`schema-markup`](../schema-markup/SKILL.md)** — Use *alongside* this skill to add `BreadcrumbList` and `WebSite` schema, both of which reinforce the architecture to search engines.
- **[`ai-seo`](../ai-seo/SKILL.md)** — Use *alongside* this skill to ensure your hierarchy supports answer-engine optimization (AEO) — clear topic clusters help LLMs and AI search cite your content.
- **[`content-strategy`](../content-strategy/SKILL.md)** — Use *after* this skill to plan the content that fills the cluster slots you've designed.

---

## References

- HubSpot, "The Topic Cluster Model" — origin of the pillar/cluster pattern
- Google Search Central, "URL structure best practices" — official URL-design guidelines
- Screaming Frog SEO Spider — the standard tool for inventory crawls
- Ahrefs, "Internal linking for SEO" — practical guide to link distribution
- Cyrus Shepard, "Information architecture for SEO" — strategic-level patterns
