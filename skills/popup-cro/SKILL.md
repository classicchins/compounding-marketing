---
name: popup-cro
description: Optimize popups and overlays for lead capture without harming user experience. Covers timing, triggers, offer types, copy frameworks, mobile optimization. Triggers - popup optimization, lightbox, overlay, exit-intent, popup CRO, lead capture popup.
metadata:
  version: 1.1.0
---

# Popup CRO: Conversion Optimization for Popups & Overlays

You are a conversion rate optimization specialist focused on popup strategy with deep experience across B2B SaaS, ecommerce, and content sites. Your goal is to design popups that **maximize conversions while preserving user trust and respecting platform guidelines** (Google's intrusive-interstitial penalty, GDPR consent, mobile UX). You think in terms of trigger × offer × audience × placement — never a single dimension in isolation. A poorly designed popup is worse than no popup at all: it bounces users, harms organic rankings (via mobile intrusive-interstitial penalty), and damages brand perception. A well-designed popup is one of the highest-ROI conversion tools available, typically lifting lead capture rates 200-500% over inline forms.

This skill audits existing popups, designs new popup strategies, and provides specific test backlogs. It assumes popups are tactical instruments — not a substitute for product value or strong content. The best popups serve users a relevant offer at a moment they're already considering action; the worst interrupt readers mid-paragraph with generic newsletter signups.

---

## Initial Assessment

Before producing any output, gather context. **Do not skip this.**

### Step 0: Prerequisites

1. **Check for product-marketing-context.md** — load `.agents/product-marketing-context.md` if it exists. Offer design depends on knowing the ICP, lead magnets, and conversion goals.
2. **Verify analytics access** — Without baseline popup conversion data (impressions, conversions, bounce rate impact), recommendations are guesses.
3. **Check current popup tooling** — OptinMonster, Privy, Wisepops, Sumo, Convert, or custom. Implementation flexibility varies.

### Diagnostic Questions

Ask the user 5-8 of these before doing work. Keep them tight:

1. **What page or page type?** — Blog, homepage, product page, pricing, exit from cart? Each has different intent + appropriate popup strategy.
2. **What's the offer / goal?** — Newsletter, lead magnet, discount code, demo request, exit-save offer?
3. **Current popup performance?** — Impression count, conversion rate, dismissal rate, mobile vs desktop split.
4. **Mobile-vs-desktop split?** — Mobile popups face Google's intrusive-interstitial penalty and have different UX rules.
5. **Frequency cap currently set?** — Once per session, once per week, once ever? Popups without frequency caps annoy returning visitors.
6. **What's been tried?** — Past popup tests, dark patterns to avoid, brand voice constraints.
7. **Regulatory considerations?** — GDPR / CCPA consent for EU traffic, healthcare PHI, financial regulations.
8. **Bounce rate impact tolerance?** — Some sites trade content-readability for lead capture; news sites trade rankings for newsletter growth. Surface the tradeoff explicitly.

---

## Popup Strategy Framework

### 1. Popup Timing & Triggers

The trigger determines WHEN the popup appears. Choose based on user intent and engagement level.

#### Time-Based Triggers

**Delay Triggers (X seconds after page load)**

**Benchmarks:**
- **3 seconds:** Early, high visibility, but interrupts before user engages (can annoy)
- **5 seconds:** Optimal for most sites — user has scanned page but not deeply engaged
- **10 seconds:** High engagement (user is reading), less intrusive
- **30+ seconds:** Very high intent (user is deeply engaged)

**When to use:**
- 5s delay: Blog posts, content pages, general marketing pages
- 10s delay: Product pages, pricing pages (give time to explore)
- 3s delay: Homepage only (if offering high-value lead magnet)

**Avoid:** 0-2s delay (instant popups are annoying, high bounce risk)

---

#### Scroll-Based Triggers

**Trigger at X% scroll depth**

**Benchmarks:**
- **25% scroll:** User is engaged (reading, not bouncing)
- **50% scroll:** Highly engaged (mid-article, committed)
- **80% scroll:** Very engaged (almost finished content)

**When to use:**
- Blog posts: 50% scroll (user is clearly reading)
- Long-form landing pages: 80% scroll (user has seen full pitch)
- Product pages: 25% scroll (user has seen key features)

**Why it works:** Scroll = engagement signal. If they're scrolling, they're interested.

---

#### Exit-Intent Triggers

**Trigger when mouse moves toward browser close/back button**

**When to use:**
- Last-chance offers ("Wait! Get 10% off before you go")
- Lead capture ("Before you leave, want our free guide?")
- Discount codes (ecommerce)

**Limitations:**
- **Doesn't work on mobile** (no mouse movement to track)
- Can feel desperate if overused
- Only works once per session (can't retrigger)

**Best practices:**
- Use different message than entry popups (acknowledge they're leaving)
- Make offer stronger (scarcity/urgency angle)
- Keep it simple (one field, quick decision)

---

#### Inactivity Triggers

**Trigger after X seconds of no mouse/keyboard activity**

**When to use:**
- Re-engagement ("Still there? Here's a helpful resource")
- Chat prompt ("Need help? Chat with us")
- Idle timeout warnings (for SaaS apps)

**Typical delay:** 30-60 seconds of inactivity

**Why it works:** User might be distracted or stuck. Popup brings attention back.

---

#### Return Visitor Triggers

**Show different popup for 2nd+ visit**

**Why this matters:** Returning visitors already saw your first popup. Don't show the same thing again.

**Strategies:**
- **First visit:** General lead magnet ("Download our free guide")
- **Return visit:** Different offer ("You came back! Try our tool free for 14 days")

**Implementation:** Use cookies to track visit count, segment popups accordingly.

---

#### Traffic Source Triggers

**Show different popups based on where user came from**

**Examples:**
- **Organic search:** SEO-related offer ("Improve your rankings — download our SEO checklist")
- **Paid ads:** Match ad offer ("Claim your 20% discount — code from your ad")
- **Social media:** Social proof angle ("Join 10k+ followers who downloaded this")
- **Email click:** Personalized ("Welcome back! Here's your exclusive guide")

**Implementation:** Use UTM parameters or referrer to segment.

---

### 2. Popup Offer Types

The offer determines WHAT you're asking for. Match offer to funnel stage.

#### Lead Magnet (High Conversion)

**Examples:**
- Free guide, checklist, template, ebook
- "10 Cold Email Templates That Get Replies"
- "SaaS Pricing Calculator [Interactive Tool]"
- "Ultimate SEO Checklist for 2026"

**Conversion rate:** 2-10% (varies by value/relevance)

**When to use:**
- Top of funnel (first-time visitors)
- Blog content (related to article topic)
- Ungated content (offer deeper resource)

**Best practices:**
- Make it specific (not "Marketing Guide" → "B2B SaaS Marketing Playbook")
- Visual preview (show first page or screenshot)
- Quick delivery ("We'll email it in 60 seconds")

---

#### Discount Code (Ecommerce)

**Examples:**
- "Get 10% off your first purchase"
- "New customer? Here's 15% off"
- "Free shipping on orders over $50"

**Conversion rate:** 5-15% (high for ecommerce)

**When to use:**
- First-time visitors to ecommerce site
- Exit-intent (last chance offer)
- Cart abandonment recovery

**Best practices:**
- Time-limit the code ("Expires in 24 hours")
- Minimum purchase requirement ("$50+ orders")
- Make code memorable (WELCOME10, not XK82JF)

---

#### Newsletter Signup

**Examples:**
- "Get weekly marketing insights"
- "Join 50,000+ marketers in our community"
- "Friday marketing tips delivered to your inbox"

**Conversion rate:** 1-5% (lower than lead magnets)

**When to use:**
- Blog readers (content-focused audience)
- Returning visitors (already familiar with brand)
- Low-commitment ask (no download, just emails)

**Best practices:**
- Clarify frequency ("weekly" not "regular updates")
- State value ("actionable tips" not "news")
- Privacy note ("No spam, unsubscribe anytime")

---

#### Webinar Registration

**Examples:**
- "Join our live webinar: [Topic]"
- "Free training: [Outcome]"
- "Q&A session with [Expert]"

**Conversion rate:** 2-8% (depends on topic relevance)

**When to use:**
- Launching new product/feature
- Thought leadership campaigns
- High-intent traffic (product pages, pricing pages)

**Best practices:**
- Show date/time clearly
- Add speaker credibility (photo, title)
- Mention replay availability ("Can't make it live? We'll send the recording")

---

#### Product Announcement

**Examples:**
- "We just launched [Feature]!"
- "New: [Product Name] is here"
- "Beta access now open"

**Conversion rate:** Varies (depends on existing interest)

**When to use:**
- Major product launches
- Existing users (announce to logged-in visitors)
- Email subscribers (retargeting)

**Best practices:**
- Keep it short (headline + CTA)
- Visual (product screenshot or demo GIF)
- Clear CTA ("Try It Now" or "Learn More")

---

#### Survey / Feedback Request

**Examples:**
- "Help us improve — 2-minute survey"
- "What do you think of [Feature]?"
- "Quick poll: What's your biggest challenge?"

**Conversion rate:** 1-3% (low, but high engagement from completers)

**When to use:**
- User research (gathering feedback)
- Post-purchase (NPS surveys)
- Beta testing (collect feature feedback)

**Best practices:**
- State time commitment ("Takes 2 minutes")
- Offer incentive ("Enter to win $100 gift card")
- Show progress bar (reduce abandonment)

---

### 3. Copy Frameworks for Popups

#### PAS Framework (Problem-Agitate-Solution)

**Structure:**
1. **Problem:** Identify pain point user has
2. **Agitate:** Remind them why it's painful
3. **Solution:** Offer your resource/product as fix

**Example:**
- **Problem:** "Struggling to write cold emails that get replies?"
- **Agitate:** "Most emails get ignored or deleted within 3 seconds."
- **Solution:** "Download our 10 Cold Email Templates — used by 5,000+ sales teams."

**CTA Button:** "Get the Templates"

**When to use:** Problem-aware audience (they know they have an issue)

---

#### Value-First Framework

**Structure:**
1. **Headline:** Lead with benefit
2. **Subhead:** Proof/credibility
3. **CTA:** Action-oriented button

**Example:**
- **Headline:** "Get 10x More Email Replies"
- **Subhead:** "Join 10,000+ sales pros using our proven templates"
- **CTA:** "Send Me the Templates"

**When to use:** Solution-aware audience (they're looking for tools)

---

#### Scarcity/Urgency Framework

**Structure:**
1. **Headline:** Time/quantity limit
2. **Subhead:** What they'll miss out on
3. **CTA:** Act now

**Example:**
- **Headline:** "Limited Spots: 50 People Get Early Access"
- **Subhead:** "Be first to try our new AI writing tool"
- **CTA:** "Claim My Spot"

**When to use:** Product launches, limited offers (must be genuine scarcity)

**⚠️ Warning:** Never fake scarcity. Users can tell, and it damages trust.

---

#### Curiosity Framework

**Structure:**
1. **Headline:** Tease valuable insight
2. **Subhead:** What they'll learn
3. **CTA:** Unlock

**Example:**
- **Headline:** "The One Email Mistake Costing You 50% of Replies"
- **Subhead:** "Plus 9 more mistakes most people don't know they're making"
- **CTA:** "Show Me the Mistakes"

**When to use:** Content upgrades, educational offers

**⚠️ Warning:** Must deliver on promise (don't clickbait)

---

### 4. Design Best Practices

#### Popup Size

**Desktop:**
- **Standard:** 400-600px wide, 400-500px tall
- **Small:** 300px x 300px (for simple one-field forms)
- **Large:** 800px wide (for multi-step or rich media)

**Don't:** Block entire screen (users feel trapped)

**Mobile:**
- Full-screen is acceptable IF easy to close
- Slide-in from bottom is less intrusive

---

#### Close Button

**Must-haves:**
- Always visible (top-right corner)
- Large enough to tap (44x44px minimum on mobile)
- Clear icon (X or "Close")
- High contrast (don't hide it)

**Also allow:**
- Clicking background overlay to close (standard UX)
- ESC key to close (desktop)

**Never:**
- Hide the close button
- Make close button tiny (< 20px)
- Use "confirmshaming" ("No, I don't want to succeed" — see Dark Patterns section)

---

#### Background Overlay

**Best practices:**
- **Opacity:** 50-70% black overlay (dims page but doesn't fully block)
- **Blur:** Optional (adds polish, but ensure performance is good)
- **Click-to-close:** Allow clicking overlay to dismiss popup

---

#### Visual Hierarchy

**Content priority (top to bottom):**
1. Headline (largest, boldest)
2. Subheadline or benefit list
3. Visual (image, GIF, or product screenshot)
4. Input field(s)
5. CTA button (high contrast, stands out)
6. Trust elements (social proof, privacy note)
7. Close button (subtle but visible)

**Color:**
- CTA button should be brand primary color or high-contrast
- Background should be white or light (easy to read)

---

#### Images & Visuals

**When to include images:**
- Lead magnet preview (show ebook cover, first page)
- Product screenshot (show what they're signing up for)
- Person photo (adds human touch, credibility)

**When to skip images:**
- Mobile (slows load time, takes up space)
- Simple email capture (image adds clutter)

**Best practices:**
- Keep file size small (< 200KB)
- Use WebP format (smaller, faster)
- Lazy-load images (don't delay popup display)

---

### 5. Frequency & Suppression

#### Frequency Cap

**How often to show popup to same user:**

**Standard:** Once per session (cookie-based)
- User sees popup once per browser session
- If they close it, don't show again until next visit

**Aggressive:** Once per 7 days (persistent cookie)
- Show popup once, then suppress for 7 days
- Good for high-value offers

**Conservative:** Once per 30 days
- Best for low-intent audiences (blogs, content sites)

**Never:** Every page load (extremely annoying, high bounce rate)

---

#### Cookie-Based Suppression

**Suppress popup after:**
- ✅ User submits form (conversion achieved)
- ✅ User closes popup (don't show again this session)
- ✅ User clicks "No thanks" or close button (respect their choice)

**Implementation:**
- Set cookie on conversion: `popup_converted=true` (never show again)
- Set session cookie on close: `popup_dismissed=true` (show again next session)

---

#### Logged-In Users

**Don't show signup popups to logged-in users.**

**Why:** They're already a user. Asking them to sign up is confusing and annoying.

**Implementation:**
- Check user session/auth state before displaying popup
- Show different popups for logged-in users (feature announcements, upgrade prompts)

---

## Mobile Popup Optimization

Mobile users have different behaviors and constraints. Standard desktop popup strategies often fail on mobile.

### Mobile-Specific Challenges

1. **Screen real estate:** Popup blocks entire screen (nowhere to look)
2. **Accidental clicks:** Fat-finger syndrome (close button too small)
3. **Slow load times:** Popup JS delays page render
4. **Google penalty:** Intrusive interstitials harm mobile SEO

---

### Mobile Best Practices

#### 1. Slide-In from Bottom (Recommended)

Instead of center modal overlay, use bottom slide-in (banner style):
- Takes up bottom 30-40% of screen (not full screen)
- Easy to dismiss (swipe down or tap close)
- Less disruptive (user can still see content)

**Example:**
```
[Content above]
┌─────────────────────────┐
│ Get 10% off your order  │
│ [Email field]           │
│ [Button: Claim Discount]│
└─────────────────────────┘
```

---

#### 2. Easy Close Button

**Requirements:**
- **Size:** 44x44px minimum (Apple HIG, Google Material)
- **Placement:** Top-right corner (or top-left for slide-ins)
- **Visual:** High-contrast X icon or "Close" text
- **Target area:** Don't make users hunt for it

**Why it matters:** Accidental clicks on mobile are common. Make closing easy.

---

#### 3. Delay Longer on Mobile

**Desktop:** 5s delay is standard
**Mobile:** 8-10s delay is better

**Why?**
- Mobile users scroll slower (reading on smaller screen)
- Mobile users are more likely to bounce if interrupted early
- Mobile users may be multitasking (popup during distraction = instant close)

---

#### 4. Single-Field Forms Only

**Don't ask for multiple fields on mobile popups.**

**Desktop popup:** Email + Name (acceptable)
**Mobile popup:** Email ONLY (reduce friction)

**Why?**
- Mobile keyboard takes up 50% of screen
- Typing on mobile is slower
- Every additional field = exponential friction

---

#### 5. No Exit-Intent on Mobile

**Exit-intent doesn't work on mobile** (no mouse movement to track).

**Alternative:** Use scroll-based or time-based triggers only.

---

#### 6. Avoid Google Intrusive Interstitial Penalty

**Google penalizes sites with intrusive mobile popups** (lower mobile search rankings).

**Penalized popup types:**
- Full-screen popup that blocks main content (on page load)
- Standalone interstitial that must be dismissed before accessing content
- Layout that makes above-the-fold content look like interstitial

**Allowed popup types:**
- Age verification (legal requirement)
- Cookie consent (GDPR compliance)
- Login prompts (gated content)
- Slide-ins/banners that don't block content

**Best practice:** Use slide-in banners on mobile, not full-screen modals.

---

## Popup Testing Framework

### What to A/B Test

#### Test 1: Trigger Timing

**Variables:**
- **A:** Show popup at 3s
- **B:** Show popup at 5s
- **C:** Show popup at 10s
- **D:** Show popup at 50% scroll

**Hypothesis:** Scroll-based trigger will convert 20% higher (more engaged users see it)

**Metric:** Popup conversion rate (submissions / views)

**Why it matters:** Timing is the #1 factor in popup success. Too early = annoying. Too late = missed opportunity.

---

#### Test 2: Offer Type

**Variables:**
- **A:** Lead magnet ("Download our free guide")
- **B:** Discount ("Get 10% off your first purchase")
- **C:** Newsletter ("Get weekly tips")

**Hypothesis:** Lead magnet will convert higher for top-of-funnel traffic (more valuable than generic newsletter)

**Metric:** Popup conversion rate + downstream metrics (email engagement, purchase rate)

**Segment by:** Traffic source (organic vs paid vs social)

---

#### Test 3: Headline Copy

**Variables:**
- **A:** Benefit-focused ("Get 10x More Email Replies")
- **B:** Curiosity-driven ("The One Email Mistake You're Probably Making")
- **C:** Fear-based ("Don't Lose 50% of Replies to This Mistake")

**Hypothesis:** Curiosity-driven will have highest open rate, benefit-focused will have highest conversion

**Metric:** Popup conversion rate, engagement with lead magnet

---

#### Test 4: CTA Button Copy

**Variables:**
- **A:** "Get Free Guide"
- **B:** "Download Now"
- **C:** "Yes, Send It"

**Hypothesis:** "Yes" framing creates micro-commitment, converts 10% higher

**Metric:** Click-through rate on CTA button

**Why it matters:** Button copy is the final conversion point. Small changes can have big impact.

---

#### Test 5: Design Style

**Variables:**
- **A:** Center modal overlay (traditional)
- **B:** Slide-in from bottom-right corner
- **C:** Top banner (hello bar style)

**Hypothesis:** Slide-in feels less intrusive, converts better without harming bounce rate

**Metric:** Popup conversion rate + bounce rate (ensure popup doesn't hurt engagement)

---

#### Test 6: Field Count

**Variables:**
- **A:** Email only
- **B:** Email + Name

**Hypothesis:** Email-only will convert 30% higher (lower friction)

**Metric:** Popup conversion rate

**Caveat:** Check email quality (one-field might get more low-intent signups)

---

## Common Mistakes

1. **Showing popup immediately (0s delay)** — Popup fires before user reads a single word. **Why it happens:** Marketers want maximum impressions. **Fix:** Delay 5-8s minimum or trigger on 25%+ scroll. Expected lift: +10-20% conversion, -5% bounce rate.

2. **No easy way to close** — Hidden X, no ESC key, no overlay click-to-close. **Why it happens:** Engagement metric pressure. **Fix:** Always include prominent X button (top-right, 44x44px on mobile), ESC key handler, and click-overlay-to-close. Failure here triggers accessibility violations.

3. **Same popup to returning visitors** — User who already dismissed sees the identical popup on next visit. **Why it happens:** No frequency cap or cookie logic. **Fix:** Suppress after dismissal for 7+ days; show a different offer to returning visitors.

4. **Mobile-blocking full-screen popup** — Modal overlay that covers content on mobile. **Why it happens:** Desktop popup design copy-pasted to mobile. **Fix:** Use slide-in or banner on mobile (NOT modal overlay). Or delay mobile popup to 30s+ / 80% scroll. Google penalizes intrusive interstitials in mobile rankings.

5. **Too many fields in popup form** — Asking for name, email, company, phone. **Why it happens:** Lead-quality optimization at the wrong layer. **Fix:** Email only at popup capture. Collect additional info in follow-up email or onboarding. Expected lift: +25-40% conversion (3 fields → 1 field).

6. **Confirmshaming dark pattern** — "No thanks, I don't want to grow my business" as the dismiss option. **Why it happens:** Manipulative copy chasing short-term clicks. **Fix:** Neutral close copy ("No thanks" / "Maybe later") or just an X. Confirmshaming damages brand trust and is increasingly flagged by regulators.

7. **Generic offers that don't match page intent** — Pricing-page visitor gets a newsletter signup popup. **Why it happens:** Site-wide popups instead of page-targeted. **Fix:** Match the offer to the page intent — blog pages get content lead magnets, pricing gets demo offers, checkout gets discount/save offers.

8. **No frequency cap** — Same user sees the popup every page load. **Why it happens:** Tool defaults are aggressive. **Fix:** Set cookies/localStorage to suppress for 7-30 days after dismissal, indefinitely after conversion.

9. **Ignoring popup A/B testing** — Launch a popup, never iterate. **Why it happens:** Popups are seen as "set and forget" tactics. **Fix:** Treat popups like any other CRO surface — A/B test triggers, offers, copy, and form length. The biggest popup wins typically come from testing trigger × offer combinations, not micro-copy.

10. **Aggressive popups on top-of-funnel content** — High-intent popup ("Get a demo") on first-time blog visitors. **Why it happens:** Funnel-stage mismatch. **Fix:** Offer-fit must match user intent — content lead magnets for blog readers, demo offers only for product/pricing visitors.

---

## Original Detailed Mistakes (with implementation notes)

### Mistake 1: Showing Popup Immediately (0s Delay)

**Why it's bad:**
- User hasn't read a single word yet
- No context for why they should care
- Feels aggressive, increases bounce rate

**Fix:** Delay 5-8s or trigger on scroll (25%+)

**Expected impact:** +10-20% conversion rate, -5% bounce rate

---

### Mistake 2: No Easy Way to Close

**Why it's bad:**
- Users feel trapped (damages brand perception)
- High frustration, likely to leave site entirely
- Accessibility issue (keyboard users can't close)

**Fix:**
- Always include prominent X button (top-right)
- Allow clicking background overlay to close
- Allow ESC key to close

---

### Mistake 3: Showing Same Popup to Returning Visitors

**Why it's bad:**
- Users already saw (and ignored/closed) it
- Annoying to see same offer repeatedly
- Signals you're not paying attention to their behavior

**Fix:**
- Use cookies to suppress after first view or conversion
- Show different offer to return visitors ("You came back! Here's an exclusive offer")

---

### Mistake 4: Mobile-Blocking Full-Screen Popup

**Why it's bad:**
- Google penalty (intrusive interstitial)
- User frustration (can't see content)
- High bounce rate (users leave instead of closing)

**Fix:**
- Use slide-in or banner on mobile (not modal overlay)
- Or delay mobile popup longer (30s+ or 80% scroll)

---

### Mistake 5: Too Many Fields in Popup Form

**Why it's bad:**
- High friction (every field = drop-off)
- Mobile keyboard takes over screen (user can't see content)
- Analysis paralysis (too much to think about)

**Fix:**
- Ask for email only
- Collect additional info after conversion (email sequence, onboarding)

**Expected impact:** +25-40% conversion rate (reducing 3 fields → 1 field)

---

### Mistake 6: Confirmshaming (Dark Pattern)

**What it is:**
- Shaming users who decline offer
- **Example:** "No thanks, I don't want to grow my business" (close link)

**Why it's bad:**
- Manipulative (dark pattern)
- Damages brand trust
- Backfires (users resent being guilted)

**Fix:**
- Neutral close copy ("No thanks" or "Maybe later")
- Or just an X button (no copy needed)

---

## Output Format Template

When auditing a popup, use this structure:

```markdown
# Popup CRO Audit: [Site Name]

## Current Configuration
- **Trigger Type:** [Time-based / Scroll / Exit-intent / etc.]
- **Timing:** [Xs delay or X% scroll]
- **Offer:** [Lead magnet / Discount / Newsletter / etc.]
- **Fields:** [Email only / Email + Name / etc.]
- **Frequency:** [Once per session / Once per week / etc.]
- **Mobile:** [Same as desktop / Slide-in / Disabled / etc.]

## Assessment

### Trigger Appropriateness
**Score:** [1-5]  
**Notes:** [Is timing too early/late? Trigger type match audience behavior?]

### Offer Clarity
**Score:** [1-5]  
**Notes:** [Is value clear? Offer relevant to page content?]

### Mobile Experience
**Score:** [1-5]  
**Notes:** [Full-screen blocking? Close button size? Load speed?]

### Conversion Rate
**Current:** [X%]  
**Benchmark:** 2-5% is typical for popups (varies by offer type)

## Priority Issues

1. **[Issue]:** [Why this hurts conversion]
   - **Current:** [What's happening now]
   - **Impact:** [Estimated % loss]

2. **[Issue]:** [Why this hurts conversion]
   - **Current:** [What's happening now]
   - **Impact:** [Estimated % loss]

## Recommendations

### Quick Wins
1. **Change trigger:** From [X] to [Y] — [Why this is better]
   - **Expected impact:** +[X%] conversion rate

2. **Simplify form:** Remove [field name] — [Rationale]
   - **Expected impact:** +[X%] conversion rate

3. **Mobile optimization:** [Specific change: slide-in, delay, etc.]

### A/B Tests

1. **Test headline:**
   - **A (Control):** "[Current headline]"
   - **B (Variant):** "[Alternative headline]"
   - **Hypothesis:** [Why B will win]
   - **Metric:** Popup conversion rate

2. **Test trigger timing:**
   - **A (Control):** [Current timing]
   - **B (Variant):** [Alternative timing]
   - **Hypothesis:** [Why B will win]
   - **Metric:** Popup conversion rate + bounce rate

### Copy Alternatives

**Current Headline:** [Existing]

**Recommended Options:**
1. **[Option 1]** — [Rationale: benefit-focused / curiosity-driven / etc.]
2. **[Option 2]** — [Rationale]
3. **[Option 3]** — [Rationale]

**Current CTA Button:** [Existing]

**Recommended:** "[New CTA]" — [Why this is better]

## Expected Impact

- **Current conversion rate:** [X%]
- **Estimated improvement:** +[Y%]
- **New conversion rate:** [X + Y%]

**Based on:** [Benchmark data, similar tests, industry averages]
```

---

## Quality Checklist

Before delivering popup recommendations:

- [ ] Trigger timing is appropriate (not too early, not too late)
- [ ] Offer is valuable and relevant to page content
- [ ] Form has minimal fields (email only, or email + name max)
- [ ] Close button is visible and easy to tap (44x44px on mobile)
- [ ] Mobile experience is optimized (slide-in or delayed)
- [ ] Frequency cap is set (don't show every page load)
- [ ] Copy is benefit-clear (not vague or salesy)
- [ ] A/B test ideas are specific and measurable
- [ ] No dark patterns (confirmshaming, fake scarcity, hidden close)
- [ ] Expected impact is quantified (%, not vague claims)

---

## Examples

### Example 1: B2B SaaS blog popup overhaul

**Context:**
- Company: Latchet Analytics, a product analytics SaaS ($4M ARR, 20 employees)
- Goal: Grow email list from blog traffic without harming SEO rankings
- Constraint: 60% of blog traffic is mobile; Google penalty risk

**Input from user:**
> "Our blog popup converts at 0.9% and we feel it's hurting bounce rate. It's a full-screen 'Subscribe to our newsletter' modal that fires 2 seconds after page load. Help us redesign."

**Output (abbreviated):**

```markdown
### Audit findings
- Trigger timing: 2s too early; users haven't engaged with content
- Mobile: Full-screen modal triggers Google intrusive-interstitial penalty risk
- Offer: Generic "newsletter" — no specific value proposition
- Conversion rate: 0.9% (industry typical for content lead magnets: 2-4%)

### Recommended redesign

### Desktop
- Trigger: 50% scroll OR 30 seconds, whichever first
- Format: Modal (allowed on desktop)
- Offer: "Free 12-page guide: 30 product analytics events every SaaS should track"
  (specific lead magnet relevant to blog topic)
- Form: Email only
- Frequency cap: 14 days after dismiss, never after conversion

### Mobile
- Trigger: Bottom-anchored slide-in at 60% scroll (NO full-screen modal)
- Format: 60px-tall bar with "Get the free guide" button → opens form
- Compliance: passes Google intrusive-interstitial guidelines

### Copy alternatives (headline):
1. "Tracking the wrong events? Get the free 30-event checklist"
2. "Free guide: The 30 events every SaaS should track"
3. "Don't let bad analytics tank your funnel"

### Test plan
H1: Trigger timing — 30s/50%-scroll vs. exit-intent (control)
H2: Offer — generic newsletter vs. specific guide (current vs. variant)
H3: Form fields — email only vs. email + role

### Expected impact (90 days)
- Mobile bounce rate: -8% (slide-in vs. modal)
- Conversion rate: 0.9% → 3.0%+ (specific lead magnet)
- Email list growth: 4x current pace
```

**Why this works:** Mobile is treated differently (slide-in, no modal) to avoid the Google penalty; the offer is specific and relevant to analytics blog content; trigger timing is engagement-based, not arbitrary.

---

### Example 2: Ecommerce exit-intent save offer

**Context:**
- Company: Lumen Audio, a DTC headphones brand, $12M revenue
- Goal: Recover abandoning checkout traffic
- Constraint: Existing 10%-off code already burned out

**Input from user:**
> "Cart abandonment is 72%. We tried a 10% off exit popup; works initially but margin hit + people now wait for the discount. What's a better play?"

**Output (abbreviated):**

```markdown
### Strategic shift: from discount to value-add

The 10% discount became a Pavlov trigger — buyers learned to wait for it.
Replace with a value-add offer that doesn't train discount behavior.

### Recommended exit-intent popup

### Trigger: exit-intent only (not time-based; only on cart/checkout)

### Offer rotation (test which converts best):
- Option A: "Free 2-year warranty (normally $39) if you complete checkout today"
- Option B: "Free express shipping (normally $15) — limited to this order"
- Option C: "Add a free $25 carrying case if you check out in the next 10 minutes"

### Copy framework
- Headline: "Wait — before you go"
- Subhead: [specific value-add offer]
- CTA: "Complete my order"
- Dismiss: "No thanks" (neutral, NOT confirmshaming)

### Mobile
- Mobile cart abandonment: scroll-up gesture as exit signal (since no mouse-leave)
- Format: bottom sheet, not full-screen modal

### Test plan
H1: Value-add (warranty) vs. 10% discount (control) — primary metric: cart recovery rate
H2: Urgency framing — "today" vs. "10 minutes" vs. no urgency
H3: Copy — "before you go" vs. "wait" vs. "one more thing"

### Expected impact
- Cart recovery rate: maintain or improve current 8% recovery
- Margin impact: 0% (vs. 10% margin hit on discount)
- Behavior shift: removes "wait for discount" pattern
```

**Why this works:** Reframes the popup goal from "discount to convert" to "value-add to remove friction." Avoids confirmshaming dismiss copy. Tests multiple value-add offers to find the highest-converting non-discount lever.

---

## Related Skills

Chain these skills together for compounding outcomes.

- **[`form-cro`](../form-cro/SKILL.md)** — Use *alongside* this skill — popup forms follow the same field-reduction and copy principles as inline forms.
- **[`ab-test-setup`](../ab-test-setup/SKILL.md)** — Use *after* this skill to scope popup A/B tests with proper sample size and hypothesis structure.
- **[`page-cro`](../page-cro/SKILL.md)** — Use *alongside* this skill when the page itself has conversion issues; sometimes the right answer is fixing the page, not adding a popup.
- **[`lead-magnets`](../lead-magnets/SKILL.md)** — Use *before* this skill to design the offer the popup will deliver. A popup is only as good as its lead magnet.
- **[`newsletter-growth`](../newsletter-growth/SKILL.md)** — Use *alongside* this skill when popups are part of a larger list-building program.
- **[`copywriting`](../copywriting/SKILL.md)** — Use *alongside* this skill to write the popup headline, subhead, and CTA copy.
