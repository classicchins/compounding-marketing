---
title: "feat: Fix setup wizard bugs and expand weak skills"
type: feat
status: completed
date: 2026-03-15
deepened: 2026-03-15
origin: docs/brainstorms/2026-03-15-plugin-quality-brainstorm.md
---

# Fix Setup Wizard Bugs and Expand Weak Skills

## Enhancement Summary

**Deepened on:** 2026-03-15
**Research agents used:** 6 (Node.js CLI best practices, AI SEO, cold email, GTM strategy, referral programs, paid ads)

### Key Improvements
1. Added Windows symlink fallback pattern (try symlink → copy file) to prevent crashes on Windows
2. Added post-install verification step with symlink validation
3. Added concrete research data for all 5 skill expansions — specific frameworks, benchmarks, examples, and quality criteria sourced from 50+ industry references

### New Considerations Discovered
- Windows symlinks for `.md` files need copy-file fallback (junctions only work for directories)
- `.gitignore` matching should be line-aware to avoid false positives (e.g., `.cm-config.json.example` matching `.cm-config.json`)
- AI SEO is now two distinct disciplines: AEO (answer engines) and GEO (generative search) — each needs separate process steps
- Cold email benchmarks show 50-125 word emails get 2.4x higher reply rates — quality bar should enforce word count
- GTM motion selection can be scored with a quantifiable 8-factor matrix (ACV, complexity, buyer type, time-to-value, virality, purchase process, market education, switching cost)

---

## Overview

Two workstreams to bring the compounding-marketing plugin to production quality:
1. Fix 6 bugs in the setup wizard (`bin/setup.js`)
2. Expand 5 weak skills to match the quality bar set by seo-audit and signup-flow-cro

## Problem Statement

The setup wizard has reliability issues (crashes on re-runs, hardcoded version, silent failures) and 5 of the 61 skills are significantly thinner than the rest, undermining the plugin's quality perception.

## Proposed Solution

### Phase 1: Setup Wizard Bug Fixes

All fixes are in `bin/setup.js`. Independent of each other — can be done in sequence in one pass.

#### Fix 1: Read version from package.json (line 153)

**Current:** `version: '1.1.0'` hardcoded
**Fix:** `version: require('../package.json').version`

```javascript
// bin/setup.js — line 153
const config = {
  version: require('../package.json').version,
  aiTool: null,
  mcp: {},
  integrations: {},
};
```

#### Fix 2: Wrap symlink creation in try-catch with copy fallback (lines 380-406)

**Current:** `fs.symlinkSync()` with no error handling — crashes on edge cases and Windows
**Fix:** Wrap each symlink call in try-catch. On EPERM/EACCES (Windows without Developer Mode), fall back to copying the file instead. Warn on failure.

```javascript
// bin/setup.js — extract a helper function
function createLink(targetPath, linkPath, label) {
  try {
    fs.symlinkSync(targetPath, linkPath);
    return true;
  } catch (err) {
    // Fallback: copy the file instead of symlinking (Windows compat)
    if (err.code === 'EPERM' || err.code === 'EACCES') {
      try {
        const absoluteTarget = path.resolve(path.dirname(linkPath), targetPath);
        fs.copyFileSync(absoluteTarget, linkPath);
        return true;
      } catch (_) { /* fall through to warning */ }
    }
    console.log(c('yellow', `  ⚠  Could not link ${label}: ${err.message}`));
    return false;
  }
}

// Use in both symlink loops (commands ~line 383, skills ~line 402)
if (createLink(targetPath, linkPath, file)) {
  cmdCount++;
}
```

### Research Insights

**Best practice from npm/pnpm:** The symlink → junction → copy fallback chain is standard for cross-platform CLI tools. For `.md` files (not directories), junctions won't work on Windows, so the correct chain is symlink → copy.

**Edge case:** If a non-symlink file named `cm-*.md` already exists in `.claude/commands/` (user-created), the cleanup loop correctly skips it (checks `isSymbolicLink()`). The copy fallback also handles this — `copyFileSync` will overwrite.

#### Fix 3: Guard CLAUDE.md marker replacement (line 333)

**Current:** Only checks both markers exist, doesn't handle malformed state
**Fix:** Add `endIdx > startIdx` guard. If markers are malformed, append a fresh block and warn.

```javascript
// bin/setup.js — line 333
if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
  // Replace existing marker block
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
```

#### Fix 4: Use recursive mkdir (lines 293, 352-356)

**Current:** Two separate `mkdirSync` calls for `.claude` and `.claude/commands`; plus `pluginDir` without recursive
**Fix:** Single `mkdirSync` with `{ recursive: true }`

```javascript
// bin/setup.js — line 293
fs.mkdirSync(pluginDir, { recursive: true });

// bin/setup.js — lines 352-356, replace both mkdir calls with:
fs.mkdirSync(claudeCommandsDir, { recursive: true });
```

#### Fix 5: Re-prompt on invalid input in select() (lines 56-71)

**Current:** Silently defaults to option 1 on invalid input
**Fix:** Loop with retry (max 3 attempts), then default

```javascript
// bin/setup.js — select() function
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
```

### Research Insights

**Best practice:** Keep `confirm()` and `multiSelect()` with their current silent-default behavior — it's acceptable UX for non-critical inputs. Only `select()` (AI tool choice) warrants re-prompting.

#### Fix 6: Clear API key placeholder (lines 184, 195)

**Current:** `'${PERPLEXITY_API_KEY}'` — looks like env var template syntax
**Fix:** Use `'YOUR_API_KEY_HERE'` for both Perplexity and Exa

```javascript
// bin/setup.js — line 184
apiKey: apiKey || 'YOUR_API_KEY_HERE',

// bin/setup.js — line 195
apiKey: apiKey || 'YOUR_API_KEY_HERE',
```

#### Fix 7 (NEW): Add post-install verification

**From research:** Popular CLIs (create-next-app, yeoman) verify setup before showing the success banner. Add a lightweight check after symlink creation.

```javascript
// bin/setup.js — after symlink creation, before .gitignore prompt
// Verify symlinks resolve correctly
const commandsDir = path.join(cwd, '.claude', 'commands');
if (fs.existsSync(commandsDir)) {
  const broken = [];
  for (const entry of fs.readdirSync(commandsDir)) {
    if (!entry.startsWith('cm-')) continue;
    const fullPath = path.join(commandsDir, entry);
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
```

#### Fix 8 (NEW): Line-aware .gitignore matching

**From research:** Current `gitignore.includes('.cm-config.json')` can false-positive on `.cm-config.json.example`. Use line-level check.

```javascript
// bin/setup.js — lines 249, 416
const lines = gitignore.split('\n').map(l => l.trim());
if (!lines.includes('.cm-config.json')) {
  // append entry
}
```

---

### Phase 2: Expand Weak Skills

Each skill should follow this structure (derived from gold-standard skills seo-audit:725 lines, signup-flow-cro:787 lines, case-study:416 lines):

```
1. YAML Frontmatter (name, description, metadata.version: 1.1.0)
2. H1 Title + Role Prompt ("You are a [specialist]. Your goal is [outcome].")
3. Initial Assessment (what info to gather, check for product-marketing-context.md)
4. Process (Step 1, Step 2, ... — detailed sub-steps with specific instructions)
5. Output Format Template (complete markdown template with [placeholders])
6. Quality Bar (what "good" looks like + common mistakes to avoid)
7. Examples (2-3 concrete before/after or walkthrough examples)
8. Related Skills (cross-references to 3-5 complementary skills)
```

#### Skill 1: ai-seo (65 → 250+ lines)

**File:** `skills/ai-seo/SKILL.md`

**What to add:**
- Role prompt: "You are an AI search optimization specialist. Your goal is to maximize brand visibility and citations across AI-powered search engines (ChatGPT, Perplexity, Google AI Overviews)."
- Step-by-step AEO (Answer Engine Optimization) process
- Step-by-step GEO (Generative Engine Optimization) process
- Content structure examples optimized for AI parsing
- Schema markup examples for AI discovery (reference `schema-markup` skill for deep implementation)
- Before/after examples of AI-optimized vs traditional content
- Quality bar with common mistakes
- Related skills: schema-markup, seo-audit, content-strategy

### Research Insights for ai-seo

**Key data points to embed:**
- Zero-click searches: 69% in 2025 (up from 56% in 2024)
- AI-referred sessions growth: 527% YoY
- Only 11% of domains are cited by both ChatGPT AND Perplexity — they are different ecosystems
- 85.79% of Google AI Overviews citations come from top-10 organic results
- Content with structured lists, quotes, and statistics had 30-40% higher AI visibility

**AEO process steps (8 steps):**
1. Identify target questions by intent tier (test actual prompts on ChatGPT, Perplexity, Google AI Mode)
2. Structure content for extractability (direct answer in first 40-60 words, H2s as exact questions)
3. Increase fact density (statistic every 150-200 words, named sources)
4. Implement structured data (FAQPage, HowTo, Article, Speakable schema)
5. Verify AI crawler access (allow GPTBot, ClaudeBot, PerplexityBot in robots.txt; content must be static HTML)
6. Build entity authority (standardize brand mentions, About/author bio pages, Wikipedia presence)
7. Maintain freshness (AI citations drop after 3 months; refresh cornerstone content quarterly)
8. Measure and iterate (Otterly.ai, Semrush AI Visibility, or manual prompt testing)

**GEO-specific tactics:**
- Win featured snippets first (disproportionately sourced by AI Overviews)
- Optimize for Bing simultaneously (ChatGPT Search uses Bing's index)
- Build topical authority clusters with tight internal linking
- Publish original research and proprietary data
- Digital PR matters — earned media feeds AI authority signals

**Content structure pattern (extractable format):**
```markdown
## [Question as H2 — phrased how users ask]
[Direct answer in 40-60 words. Bold the key claim.]
[Supporting statistic with named source.]
- Bullet 1: specific detail
- Bullet 2: specific detail
[1-2 sentences of context]
```

**Platform-specific preferences:**
| Platform | Preferred Content | Top Source Pattern |
|----------|------------------|-------------------|
| ChatGPT | Encyclopedic, well-sourced | Wikipedia 47.9% of top-10 |
| Perplexity | Community-driven, recent | Reddit 46.7% of top-10 |
| Google AI | Balanced professional + community | Reddit 21%, YouTube 18.8% |

**Measurement tools:** Otterly.ai, SE Ranking Visible, Semrush AI Visibility, LLMClicks, plus DIY approach (test 20-30 prompts monthly across platforms)

**Common mistakes:**
1. Treating GEO as one-time (needs quarterly refresh)
2. Optimizing for specific prompts vs. comprehensive user journeys
3. Overemphasizing brand-owned content (AI favors earned media)
4. Heavy JavaScript without static HTML fallback (AI crawlers can't render JS)
5. Ignoring Bing optimization (ChatGPT uses Bing's index)
6. Using traditional SEO metrics for AI search

---

#### Skill 2: cold-email (48 → 150+ lines)

**File:** `skills/cold-email/SKILL.md`

**What to add:**
- Role prompt: "You are a B2B cold outreach specialist. Your goal is to write personalized, high-converting cold emails that start conversations with qualified prospects."
- Multiple frameworks: PAS (keep), AIDA, BAB, 3Ps (Praise-Picture-Push), 4T (Truth-Think-Third-party-Talk)
- Subject line frameworks with 5+ examples each (5 patterns: pain question, trigger event, mutual connection, value-first, curiosity)
- Personalization techniques with 4 tiers (signal-based → company research → personal research → stacking)
- Follow-up sequence: 5-email structure with specific timing (Day 0, Day 2-3, Day 5-7, Day 10-14, Day 18-21)
- 3-5 complete email examples (demo request, partnership, trigger event, content collab, executive)
- Quality bar with specific benchmarks
- Related skills: email-sequence, email-deliverability, icp-research, abm-strategy

### Research Insights for cold-email

**Key benchmarks to embed:**
- 50-125 word emails get 2.4x higher reply rates than 200+ words
- Personalized subject lines boost open rates by 50%, reply rates by 30%
- Subject lines of 36-50 characters get highest response rates
- Signal-based personalization (funding, hiring, tech changes) achieves 12-25% reply rates
- A single follow-up increases replies by 49-66%
- 4-7 email sequences get 3x more responses than 1-3 emails

**Quality bar criteria:**
- Word count: 50-125 words
- At least one company-specific or role-specific detail (not just {first_name})
- At least one specific metric or named customer result
- Single, low-friction CTA ("Worth 15 min?" not "Let me know your thoughts")
- Zero links in first email, max 1 in follow-ups
- Reading level: 5th-8th grade

**Performance targets:**
- Open rate: 45%+ (average: 44%)
- Reply rate: 8-12% good, 15%+ excellent (average: 3-5%)
- Bounce rate: below 2%
- Spam complaint rate: below 0.1%

**Common mistakes:**
1. Generic spray-and-pray (13x lower reply rates)
2. Too long (over 200 words = 2.4x fewer replies)
3. Leading with your company, not their problem
4. Multiple CTAs (decision paralysis)
5. "Just checking in" follow-ups (zero value)
6. Links and attachments in first email (triggers spam)
7. No follow-up at all (42% of replies come from follow-ups)

---

#### Skill 3: gtm-strategy (115 → 300+ lines)

**File:** `skills/gtm-strategy/SKILL.md`

**What to add:**
- Strengthen role prompt
- Detailed 8-factor scoring matrix for PLG vs sales-led vs hybrid
- 90-day plan template with specific milestones per motion
- Team structure recommendations with specific roles and ARR stages
- Metrics and KPIs per GTM motion with benchmarks
- Before/after example: a SaaS company evaluating motions
- Quality bar with common mistakes
- Related skills: launch-strategy, channel-strategy, pricing-strategy, icp-research

### Research Insights for gtm-strategy

**GTM Motion Fit Scoring (8 factors, 1-5 scale):**

| Factor | PLG (score 5) | Sales-Led (score 5) |
|--------|---------------|---------------------|
| ACV | Under $5K/year | Over $50K/year |
| Product complexity | Self-serve in <1 hour | Requires implementation/training |
| Buyer type | End user (IC/developer) | Executive/buying committee |
| Time to value | Under 5 minutes to aha | Weeks/months to demonstrate ROI |
| Virality potential | Product exposes to non-users | No inherent viral loop |
| Purchase process | Credit card, no procurement | Procurement, legal, security review |
| Market education | Existing category | New category, complex value prop |
| Switching cost | Low | High (data migration, workflows) |

Scoring: PLG 32-40 = Pure PLG. Sales-Led 32-40 = Pure Sales-Led. Both 20-32 = Hybrid.

**Key insight:** 97% of PLG companies add sales teams eventually. The question is when, not if. Inflection: ~$5K ACV and $2-5M ARR.

**90-day plans by motion:** Include specific milestones for PLG (instrument → optimize activation → build conversion triggers → launch growth loops → optimize free-to-paid → evaluate sales layer), Sales-Led (foundation → pipeline engine → close first deals → scale demand gen → hire and ramp → optimize unit economics), and Hybrid (PLG foundation + ICP → product-led sales handoff → segment and optimize).

**Team structure benchmarks:**
- SDR:AE ratio: 2-3:1
- First RevOps hire: $5-10M ARR or 20-30 employees
- GTM roles have ~50% success rate — budget 3 months to hire, 6 months to ramp
- PLG at $0-$500K: 1-2 GTM (founder + growth marketer)
- Sales-Led at $0-$1M: 1-2 GTM (founder + SDR)

**Key metrics by motion:**

| Metric | PLG Benchmark | Sales-Led Benchmark |
|--------|--------------|-------------------|
| Activation rate | 40%+ | N/A |
| Free-to-paid | 9% median, 25-39% with PQLs | N/A |
| Trial peak conversion | Day 7 | N/A |
| CAC | $100-$1,000 | $5K-$100K+ |
| CAC payback | 3-6 months | 6-24 months |
| Lead-to-close | N/A | 1-5% |
| LTV:CAC | 3:1 minimum | 3:1 minimum |
| NRR | 110%+ | 110%+ |

**Common mistakes:**
1. Forcing PLG on complex product (high signup, zero activation)
2. Hiring enterprise sales too early for PLG (high CAC, low ACV)
3. Treating GTM as "just marketing" without defining ICP or sales motion
4. Scaling headcount before proving unit economics
5. No feedback loops between motions

**Real examples:** Slack (pure PLG → $27B), HubSpot (hybrid: freemium CRM + sales), Salesforce (sales-led), Atlassian (47% R&D vs 16% sales)

---

#### Skill 4: referral-program (262 lines → reorganize)

**File:** `skills/referral-program/SKILL.md`

**What to reorganize:**
- Add role prompt: "You are a growth marketing specialist focused on viral and referral mechanics. Your goal is to design referral programs that turn customers into a scalable acquisition channel."
- Reorder: core program design first (incentive structures, mechanics, qualification, fraud prevention)
- Then viral math/K-factor section (currently strong, keep as-is)
- Add program launch strategy (4-phase: pre-launch → soft launch → broad launch → ongoing optimization)
- Add 2-3 examples of real referral programs (Dropbox, Typeform, Airtable)
- Expand output format to full template
- Quality bar with common mistakes
- Related skills: free-tool-strategy, partnership-marketing, churn-prevention

### Research Insights for referral-program

**Incentive structure ranking (B2B SaaS):**
1. Product credits/usage (Dropbox: 500MB/referral — zero marginal cost, deepens investment)
2. Account credits (Airtable: $10 credit — drives upgrades)
3. Recurring commissions (Typeform: 15% monthly up to $500/referral)
4. Plan upgrades (Trello: 1 month Gold, capped at 12)
5. Cash/gift cards (for enterprise where referrer ≠ buyer)

**Key design rules:**
- Double-sided rewards outperform single-sided by 68%
- $21+ value threshold (or 11%+ discount) drives highest participation
- Reward = 10-25% of first-year customer LTV
- Qualification = activation event, not just signup
- Maximum 2-step sharing flow
- Single-click enrollment increases participation by 22%
- Never ask for referral before customer experiences value

**Benchmarks:**
- Participation rate: 10-25% (growth), 15-30% (enterprise)
- Referral conversion rate: 3-5% SMB, 8-12% high-growth
- Referred customers: 37% higher retention, 25% larger deals, 5x more likely to refer others
- Referred customer churn: 12% annually vs 20% non-referred
- CAC reduction: 30-50% vs paid channels

**Common mistakes:**
1. Stingy rewards ($5 credit for $200/mo product)
2. Too much friction (>2 steps to share)
3. Hiding the program (customers don't know it exists)
4. One-sided rewards only (68% worse)
5. Wrong timing (asking during onboarding, before value)
6. Launching before product-market fit (amplifies leaky bucket)

---

#### Skill 5: paid-ads (388 lines → reorganize)

**File:** `skills/paid-ads/SKILL.md`

**What to reorganize:**
- Add role prompt: "You are a performance marketing strategist for B2B SaaS. Your goal is to design paid advertising campaigns that acquire customers at a sustainable CAC."
- Expand Process section (currently ~27 lines) with budget calculation, platform selection, campaign structure, optimization cadence
- Keep platform-specific sections (Google Ads, Meta Ads) as-is — already strong
- Add output format template for campaign plan
- Unify quality bars (currently split between original and patch)
- Related skills: linkedin-ads, ad-creative, analytics-tracking, attribution-modeling

### Research Insights for paid-ads

**Budget calculation methodology:**
```
Step 1: Max CAC = LTV / Target LTV:CAC (minimum 3:1)
Step 2: Monthly Budget = Target Customers × CAC × Paid Channel Share
Step 3: Verify CAC Payback = CAC / (Monthly ARPU × Gross Margin) < 12 months
```

SaaS budget benchmarks: median 8% of ARR on total marketing. Early stage ($1-5M): 15-25% of revenue, 25-40% on paid. Scale ($20M+): 8-12%, 15-25% on paid.

**Platform selection decision tree:**
1. Someone searching for your category? → Google Search (demand capture)
2. ACV >$5K, specific B2B buyer title? → Add LinkedIn (demand gen)
3. Website traffic >5K/month? → Add Meta retargeting (cheapest warm leads)
4. Technical buyer? → Test Reddit
5. New category, no search volume? → LinkedIn or Meta for demand creation

**Cross-platform SaaS benchmarks:**

| Metric | Google Search | LinkedIn | Meta (retargeting) | Reddit |
|--------|-------------|----------|-------------------|--------|
| CTR (good) | >5% | >0.5% | >1.5% | >1% |
| CPC (good) | <$4 | <$8 | <$2 | <$1.50 |
| CPL (good) | <$50 | <$100 | <$40 | <$40 |

**Optimization cadence:**
- Daily (5 min): budget pacing, anomalies, disapprovals
- Weekly (30-60 min): pause underperformers, search term negatives, scale winners by 15-20%
- Monthly (1-2 hrs): channel-level ROI, budget reallocation, creative refresh
- Quarterly: platform mix review, CPC inflation tracking

**Kill/scale decision rules:**
- Kill: CPA >2x target after 2+ weeks and 100+ clicks
- Kill: Zero conversions after spending 3x target CPA
- Scale: CPA at/below target for 2+ consecutive weeks, in 15-20% increments

**Campaign naming convention:**
```
[Platform]_[Region]_[Type]_[Audience]_[Funnel]_[Quarter]
e.g., GADS_US_Search_Brand_BOF_2026Q1
```

**Common mistakes:**
1. Running ads before GTM foundation is ready (run cm-context, positioning, page-cro first)
2. Sending traffic to homepage instead of dedicated landing page (2-3x lower conversion)
3. No negative keywords (57% of SaaS Google spend goes to non-converting terms)
4. Killing campaigns too early (<30-50 conversions for algorithm learning)
5. Feature-focused copy instead of outcome-focused
6. Scaling too aggressively (>20% budget increase destabilizes algorithms)
7. Not tracking downstream metrics (optimizing for clicks, not revenue)

---

### Phase 3: Post-work Cleanup

- [ ] Run `node scripts/generate-claude-md.js` to update CLAUDE.md skill catalog (if any descriptions changed)
- [ ] Bump skill versions in frontmatter to `1.1.0` for expanded skills
- [ ] Bump package.json version to `1.1.5`

## Acceptance Criteria

### Setup Wizard
- [ ] `version` in config reads from package.json, not hardcoded
- [ ] Symlink creation never crashes — failures are caught and warned, with copy fallback on Windows
- [ ] Malformed CLAUDE.md markers result in fresh append + warning, not corruption
- [ ] Directory creation uses `{ recursive: true }` everywhere
- [ ] `select()` re-prompts on invalid input (max 3 attempts)
- [ ] API key placeholder is `YOUR_API_KEY_HERE`, not `${...}` syntax
- [ ] Post-install verification checks for broken symlinks
- [ ] `.gitignore` matching is line-aware (no false positives)
- [ ] Re-running the wizard twice in a row works without errors

### Skills
- [ ] All 5 skills have: role prompt, detailed process, output template, quality bar with common mistakes, examples, related skills
- [ ] ai-seo is 250+ lines with concrete AEO/GEO steps, platform-specific tactics, measurement tools
- [ ] cold-email is 150+ lines with 5 frameworks, 5 subject line patterns, 5 email examples, follow-up sequence
- [ ] gtm-strategy is 300+ lines with 8-factor scoring matrix, 90-day plans per motion, team structures, benchmarks
- [ ] referral-program is reorganized: core design → viral math → launch strategy, with real program examples
- [ ] paid-ads has expanded Process section with budget calc, platform selection, naming conventions, optimization cadence

## Sources & References

- **Origin brainstorm:** [docs/brainstorms/2026-03-15-plugin-quality-brainstorm.md](docs/brainstorms/2026-03-15-plugin-quality-brainstorm.md) — Key decisions: fix bugs first, expand 5 weakest skills, match seo-audit quality bar
- **Gold standard skills:** `skills/seo-audit/SKILL.md` (725 lines), `skills/signup-flow-cro/SKILL.md` (787 lines), `skills/case-study/SKILL.md` (416 lines)
- **Setup wizard:** `bin/setup.js` (467 lines)
- **Package config:** `package.json` (version 1.1.4)

### External References (from deepening research)
- Node.js symlink cross-platform: nodejs/node#18518, npm/cli#5189
- AI SEO: Search Engine Land GEO 2026, Semrush AI Visibility, CXL AEO Guide, Profound citation patterns
- Cold email: Autobound 2026, Salesforge frameworks, Instantly benchmarks, Hunter State of Cold Email
- GTM strategy: ProductLed benchmarks, ChartMogul GTM Report, Tom Tunguz GTM Guide, a16z scaling GTM
- Referral programs: Cello B2B categories, Prefinery metrics, SaaSquatch examples, ReferralCandy benchmarks
- Paid ads: SaaS Capital spending benchmarks, Lever Digital benchmarks, uproas Google Ads 2026, Hackernoon SaaS budget waste
