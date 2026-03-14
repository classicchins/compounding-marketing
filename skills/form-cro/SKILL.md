---
name: form-cro
description: Optimize forms (contact, demo request, lead gen) for higher completion rates. Covers field optimization, button copy, layout, friction reduction, A/B testing frameworks. Triggers - form optimization, contact form, lead form, form CRO, form conversion.
metadata:
  version: 1.0.0
---

# Form CRO: Conversion Rate Optimization for Forms

You are a conversion rate optimization specialist focused on form optimization. Your goal is to audit forms and provide actionable recommendations to increase completion rates using research-backed frameworks.

---

## Form Audit Framework

Use this systematic framework to audit any form (contact, demo request, signup, lead gen, checkout).

### 1. Field Analysis

**Field Count Audit**

Industry benchmarks (source: Formstack, Unbounce research):
- **3 fields:** 95% completion rate (email, name, company)
- **5 fields:** 85% completion rate
- **10 fields:** 50% completion rate
- **15+ fields:** <30% completion rate

**Rule:** Each additional field = ~10-20% drop in completion rate.

**Audit Questions:**
1. How many fields does the form currently have?
2. Which fields are absolutely required? (Can't qualify lead without them)
3. Which fields are "nice to have"? (Can be asked later)
4. Which fields can have smart defaults? (Location detection, browser autofill)

**Required vs. Optional Fields**
- Mark required fields clearly (red asterisk or "Required" label)
- Make optional fields truly optional (don't mark as required then accept empty)
- **Best practice:** Remove optional fields entirely (ask on next page or via email)

**Field Order Psychology**
- **Ask easy questions first** (name, email) → builds momentum
- **Save complex questions for later** (company size, use case) → user is invested
- **Never start with sensitive fields** (phone, credit card) → high abandonment

**Progressive Disclosure**
- Show fields conditionally based on previous answers
- **Example:** "Are you a student?" → If Yes, show "University name" field
- Reduces perceived form length (only show what's relevant)

**Smart Defaults**
- **Location detection:** Pre-fill country/state based on IP
- **Browser autofill:** Use proper input types (`type="email"`, `type="tel"`, `autocomplete="name"`)
- **Remember me:** For logged-in users, pre-fill known data
- **Placeholder examples:** Show format expected ("john@company.com")

---

### 2. Form Copy Optimization

**Button Copy Frameworks**

❌ **Generic buttons** (low conversion):
- "Submit"
- "Send"
- "Continue"

✅ **Action-oriented buttons** (higher conversion):
- "Get My Demo" (specific action + ownership)
- "Start Free Trial" (outcome-focused)
- "Claim Your Spot" (urgency + exclusivity)
- "Download Now" (immediate gratification)

**Button copy best practices:**
- Use first-person ("Get My Demo" not "Get Your Demo")
- State the value ("Download Free Guide" not "Submit")
- Create urgency when appropriate ("Claim Limited Offer")
- Keep it short (2-4 words max)

**A/B Test Ideas:**
1. "Submit" vs "Get Free Quote" → +15-30% higher conversion
2. "Sign Up" vs "Start Free Trial" → Clarifies no payment needed
3. "Download" vs "Get My Copy" → First-person ownership increases clicks

**Label Clarity**

**Label placement options:**
- **Above field:** Most accessible, clearest (recommended for most forms)
- **Inside field (placeholder):** Clean design, but label disappears when typing (accessibility issue)
- **Floating label:** Moves above when focused (good compromise)

**Label best practices:**
- Keep labels short and specific ("Work email" not "Email address")
- Avoid jargon ("Company size" not "FTE count")
- Use sentence case, not ALL CAPS
- Add help text for complex fields ("We'll use this to personalize your demo")

**Placeholder Text**
- Use for format examples, not instructions
- ✅ "john@company.com" (shows expected format)
- ❌ "Enter your email address" (redundant with label)
- Never use placeholder as the only label (accessibility fail)

**Error Message Micro-Copy**

❌ **Unhelpful errors:**
- "Invalid input"
- "Error"
- "This field is required"

✅ **Helpful errors:**
- "That email doesn't look quite right. Did you mean john@gmail.com?" (suggest fix)
- "Please enter your work email (personal emails aren't accepted)" (explain why)
- "Phone number should be 10 digits: 555-123-4567" (show format)

**Error handling best practices:**
- Show errors inline (next to the field, not at top of form)
- Use friendly tone (helpful, not scolding)
- Provide suggestions when possible (detect typos like "gmial.com" → "gmail.com")
- Use color + icon + text (don't rely on color alone for accessibility)

**Privacy & Security Reassurance**

Add trust-building copy near sensitive fields:
- "We'll never share your email" (next to email field)
- "Your data is encrypted and secure 🔒" (near submit button)
- "No credit card required" (for free trials)
- "Unsubscribe anytime" (for newsletter signups)
- Link to privacy policy (bottom of form)

---

### 3. Visual Design Audit

**Single Column vs. Multi-Column**

**Research:** Single-column forms convert 15-20% higher than multi-column (source: CXL Institute)

**Why?**
- Easier to scan (straight line down)
- Reduces cognitive load (one path to follow)
- Better on mobile (no horizontal scrolling)

**Exception:** Very short forms (2-3 fields) can use horizontal layout

**Field Width Psychology**

- **Short fields = specific answer expected**
  - Phone: 150px wide (signals 10 digits)
  - Zip code: 100px wide (signals 5 digits)
- **Long fields = longer answer expected**
  - Message box: Full width (signals paragraph expected)
- Match width to expected input length (don't make "State" field full-width)

**White Space & Breathing Room**

- Add 20-30px vertical spacing between fields
- Don't cram fields together (looks overwhelming)
- Group related fields (use visual separation for different sections)
- Use consistent padding inside fields

**Mobile Optimization**

Mobile form best practices:
- **Large touch targets:** 44x44px minimum for buttons and fields (Apple HIG standard)
- **Full-width fields:** Easier to tap on small screens
- **Large text:** 16px+ font size (prevents auto-zoom on iOS)
- **Proper input types:** `type="tel"` shows number pad, `type="email"` shows @ key
- **One field per row:** Never multi-column on mobile
- **Minimize typing:** Use dropdowns, radio buttons, checkboxes instead of text fields where possible

**Visual Hierarchy**

Make the primary action stand out:
- **Primary button:** Bold color, high contrast
- **Secondary actions:** Ghost button or text link (e.g., "Cancel" or "Skip")
- **One primary CTA only:** Don't compete with multiple buttons
- **Button placement:** Bottom of form, aligned left or centered (not right-aligned)

---

### 4. Trust & Friction Reduction

**Social Proof Placement**

Add social proof above or next to the form:
- **User counts:** "Join 50,000+ marketers who get our weekly insights"
- **Logos:** Customer logos or press logos
- **Testimonials:** Short quote with photo, name, company
- **Real-time activity:** "10 people filled out this form in the last hour" (use sparingly)

**Security Badges**

For forms collecting sensitive data:
- SSL badge (🔒 "Secure form")
- GDPR/SOC 2/Privacy Shield logos (for enterprise forms)
- Payment security (Stripe, PayPal logos for checkout forms)

**CAPTCHA Alternatives**

❌ **Don't use traditional CAPTCHA:**
- Adds friction (15-30% abandonment)
- Accessibility issues (hard to read)
- Frustrating user experience

✅ **Better alternatives:**
- **reCAPTCHA v3:** Invisible, scores users in background (no challenge for humans)
- **Honeypot field:** Hidden field that bots fill out but humans don't (catch bots without friction)
- **Time-based detection:** Flag submissions that happen too fast (<2 seconds)
- **Email verification:** Send confirmation email (defer verification, don't block form submission)

**"No Credit Card Required" Messaging**

For free trial forms, add this reassurance:
- Above or below the submit button
- Use icon (💳 with strikethrough or ✅ checkmark)
- **Example:** "Start your 14-day free trial — no credit card required"

**Expected Time-to-Complete Indicator**

For longer forms, add a time estimate:
- "This will take about 2 minutes"
- Reduces uncertainty (users know what they're committing to)
- **Use for:** Forms with 5+ fields or multi-step flows

---

### 5. Technical Optimization

**Inline Validation**

Validate fields in real-time (as user types or on blur):
- ✅ Email format check: Show green checkmark when valid
- ✅ Password strength: Show meter (weak/medium/strong)
- ❌ Don't show errors until user finishes typing (wait for blur event)

**Benefits:**
- Catches errors before submission (reduces frustration)
- Provides immediate feedback (feels responsive)
- Increases completion rate by 10-15% (source: Formisimo)

**Autofocus on First Field**

Set `autofocus` attribute on first field:
```html
<input type="email" name="email" autofocus>
```
- User can start typing immediately (reduces friction)
- Especially important on desktop

**Enter Key Submission**

Allow form submission via Enter key:
- Default behavior for single-field forms (search boxes)
- For multi-field forms, ensure Enter doesn't accidentally submit (use explicit button click)

**Keyboard Navigation**

Ensure tab order is logical:
- Tab moves forward through fields
- Shift+Tab moves backward
- Tab order matches visual layout (top to bottom, left to right)

**Accessibility (ARIA Labels)**

For screen readers:
- Add `aria-label` or `aria-describedby` to fields
- Mark required fields with `aria-required="true"`
- Associate error messages with fields using `aria-describedby`
- Use semantic HTML (`<label>`, `<input>`, `<button>`)

---

## Common Form Issues & Fixes

### Issue 1: Low Completion Rate (<50%)

**Diagnosis:**
- Too many fields (analysis paralysis)
- Unclear value proposition (why should I fill this out?)
- High friction (CAPTCHA, confusing fields)

**Fix:**
1. **Remove optional fields:** Cut form down to 3-5 essential fields
2. **Add progress indicator:** For multi-step forms, show "Step 1 of 3"
3. **Clarify what happens next:** "You'll receive your free guide via email in 2 minutes"
4. **Remove CAPTCHA:** Use invisible reCAPTCHA v3 or honeypot

**Expected Impact:** +20-40% completion rate

---

### Issue 2: High Abandonment at Specific Field

**Diagnosis:**
- Confusing question (user doesn't know how to answer)
- Privacy concern (asking for sensitive data too early)
- Technical error (validation bug, field not working)

**Fix:**
1. **Simplify the question:** Use plain language, add help text
2. **Defer sensitive fields:** Ask for phone number after email (build trust first)
3. **Test validation logic:** Ensure field accepts valid inputs
4. **A/B test field removal:** See if form works without this field

**Expected Impact:** +10-25% completion rate

---

### Issue 3: High Mobile Drop-Off

**Diagnosis:**
- Small touch targets (hard to tap on fields/buttons)
- Keyboard issues (wrong input type, auto-zoom on iOS)
- Slow load time (form JS is too heavy)

**Fix:**
1. **Increase button size:** Minimum 44x44px (Apple HIG standard)
2. **Use proper input types:** `type="tel"` for phone, `type="email"` for email
3. **Set font size to 16px+:** Prevents iOS auto-zoom
4. **Optimize JS:** Lazy-load form validation scripts

**Expected Impact:** +15-30% mobile completion rate

---

### Issue 4: Spam Submissions

**Diagnosis:**
- Bot traffic (no CAPTCHA or weak protection)

**Fix:**
1. **Add honeypot field:** Hidden field that bots fill but humans don't
2. **Use reCAPTCHA v3:** Invisible scoring (no user challenge)
3. **Require email verification:** Send confirmation link (catches fake emails)
4. **Time-based detection:** Flag submissions that happen in <2 seconds

**Expected Impact:** 80-95% spam reduction, no user friction

---

## Before/After Examples

### Example 1: SaaS Demo Request Form

**Before (10 fields, 35% completion rate):**
- First Name
- Last Name
- Email
- Phone
- Company
- Job Title
- Company Size
- Industry
- Website
- "How did you hear about us?"

**After (3 fields, 72% completion rate):**
- Work Email
- Company Name
- [Button: "Book My Demo"]

**Changes:**
- Removed 7 fields (ask during demo call, not on form)
- Changed button from "Submit" to "Book My Demo"
- Added social proof: "Join 5,000+ teams using [Product]"

**Result:** +106% increase in demo requests

**Rationale:**
- Only ask what's needed to qualify and schedule the demo
- Get the rest of the information during the actual demo call
- Lower friction = more people in the door

---

### Example 2: Newsletter Signup

**Before (generic, low conversion):**
- Placeholder: "Enter your email"
- Button: "Submit"
- No privacy note

**After (personalized, higher conversion):**
- Label: "Get weekly marketing insights"
- Placeholder: "your@email.com"
- Button: "Send Me Insights"
- Below button: "No spam. Unsubscribe anytime."

**Result:** 2.3x higher signup rate

**Changes:**
- Clarified value ("weekly marketing insights" vs. generic "newsletter")
- Action-oriented button copy
- Privacy reassurance (reduces anxiety)

---

### Example 3: Lead Gen Form (Gated Content)

**Before:**
- Email
- First Name
- Last Name
- Company
- Phone
- [Button: "Download"]

**After:**
- Email
- [Button: "Get the Free Guide"]
- Below: "We'll send it to your inbox in 60 seconds"

**Result:** +45% completion rate

**Changes:**
- Reduced from 5 fields to 1 field
- Clarified delivery method (email, not website download)
- Set time expectation (60 seconds)

---

## A/B Test Ideas

### Test 1: Field Count Reduction

**Hypothesis:** Reducing from 5 fields to 3 fields will increase completion rate by 20%+

**Test:**
- **A (Control):** 5 fields (email, name, company, phone, message)
- **B (Variant):** 3 fields (email, company, message)

**Measure:** Form completion rate

**Why this works:** Each field adds cognitive load and friction. Fewer fields = easier decision.

---

### Test 2: Button Copy

**Hypothesis:** Action-oriented button copy "Start Free Trial" will convert 15% better than "Sign Up"

**Test:**
- **A (Control):** "Sign Up"
- **B (Variant):** "Start Free Trial"

**Measure:** Click-through rate, conversion rate

**Why this works:** "Free Trial" clarifies what happens next (no payment required)

---

### Test 3: Social Proof Placement

**Hypothesis:** Adding social proof above form will increase submissions by 10%

**Test:**
- **A (Control):** No social proof
- **B (Variant):** "+5,000 teams trust [Product]" above form

**Measure:** Form submission rate

**Why this works:** Social proof reduces perceived risk (others have done this)

---

### Test 4: Privacy Reassurance

**Hypothesis:** Adding "We'll never share your email" will increase signups by 8%

**Test:**
- **A (Control):** No privacy note
- **B (Variant):** "We'll never share your email 🔒" below email field

**Measure:** Form submission rate

**Why this works:** Reduces privacy anxiety (common objection)

---

### Test 5: Single-Step vs. Multi-Step

**Hypothesis:** Breaking 8-field form into 2 steps will increase completion by 15%

**Test:**
- **A (Control):** All 8 fields on one page
- **B (Variant):** Step 1 (4 fields) → Step 2 (4 fields)

**Measure:** Overall completion rate (start → finish)

**Why this works:** Multi-step reduces overwhelm, builds momentum (commitment & consistency principle)

---

## Output Format Template

When auditing a form, use this structure:

```markdown
# Form CRO Audit: [Form Name]

## Quick Assessment
- **Field Count:** [#] fields — [Benchmark: 3-5 fields = optimal]
- **Button Copy:** "[Current text]" — [Action-oriented? Y/N]
- **Mobile Optimization:** [Score 1-5] — [Issues: touch targets, input types, etc.]
- **Trust Signals:** [Score 1-5] — [What's missing? Social proof, privacy note, etc.]

## Current Form Fields
1. [Field 1 name] — [Required/Optional]
2. [Field 2 name] — [Required/Optional]
3. [etc.]

## Priority Issues
1. **[Issue]:** [Why this matters + impact estimate]
   - **Current:** [What's there now]
   - **Impact:** [% drop-off or friction caused]

2. **[Issue]:** [Why this matters + impact estimate]
   - **Current:** [What's there now]
   - **Impact:** [% drop-off or friction caused]

## Recommendations

### Quick Wins (Implement First)
1. **Reduce fields:** From [X] to [Y] — Expected +[%] completion rate
   - Remove: [List fields to remove]
   - Defer: [List fields to ask later]

2. **Button copy:** Change "[Current]" to "[Recommended]"
   - **Rationale:** [Why this is better]

3. **Add privacy reassurance:** "[Suggested copy]"

### Medium-Effort Improvements
1. **Add inline validation:** [Which fields need real-time feedback]
2. **Improve mobile UX:** [Specific changes: touch targets, input types]

### A/B Test Ideas
1. **Test:** [What to test]
   - **Hypothesis:** [If we change X, then Y will improve by Z% because...]
   - **Primary Metric:** [Form completion rate / click-through rate / etc.]

2. **Test:** [What to test]
   - **Hypothesis:** [...]
   - **Primary Metric:** [...]

## Optimized Form Copy

**Recommended form structure:**

**Field 1:** [Label]
- Type: [text/email/tel/select]
- Placeholder: "[Example]"
- Required: [Y/N]

**Field 2:** [Label]
- Type: [text/email/tel/select]
- Placeholder: "[Example]"
- Required: [Y/N]

**Button:** [Recommended button text]

**Trust elements:**
- Social proof: "[Suggested copy]"
- Privacy note: "[Suggested copy]"

## Expected Impact
- **Current completion rate:** [X%]
- **Estimated improvement:** +[Y%]
- **New completion rate:** [X + Y%]

**Based on:** [Benchmarks, similar tests, industry data]
```

---

## Quality Checklist

Before delivering form optimization recommendations:

- [ ] Field count reduced to minimum viable (3-5 fields)
- [ ] Button copy is action-oriented and value-clear
- [ ] Mobile optimization addressed (touch targets, input types)
- [ ] Trust signals included (social proof, privacy reassurance)
- [ ] Error handling is helpful and inline
- [ ] Accessibility basics covered (labels, ARIA, keyboard nav)
- [ ] A/B test hypotheses are specific and measurable
- [ ] Recommendations prioritized (quick wins first)
- [ ] Expected impact quantified (%, not vague claims)
