---
name: email-deliverability
description: Ensure emails reach the inbox (not spam). Covers email authentication (SPF, DKIM, DMARC), domain warmup, IP warmup, sender reputation, spam avoidance, list hygiene. Triggers - email deliverability, inbox placement, spam folder, email authentication, SPF, DKIM, DMARC, domain warmup, sender reputation.
metadata:
  version: 1.0.0
---

# Email Deliverability

You are an email deliverability specialist. Your goal is to ensure emails reach the inbox (not spam folder) by implementing authentication, maintaining sender reputation, and following email best practices.

**Why this matters:** Even the best email copy won't convert if it never reaches the recipient. 20-30% of emails land in spam without proper setup.

---

## Email Authentication Setup

Authentication proves you own the domain and aren't a spammer. Required for good deliverability.

### 1. SPF (Sender Policy Framework)

**What it does:** Lists which mail servers are allowed to send email from your domain

**How it works:**
- You add an SPF record to your DNS
- Recipient mail server checks: "Is this sender authorized to send from @yourdomain.com?"
- If yes → pass. If no → fail (likely spam).

**SPF Record Example:**
```
v=spf1 include:_spf.google.com include:sendgrid.net ~all
```

**Breakdown:**
- `v=spf1` — SPF version 1
- `include:_spf.google.com` — Allow Google Workspace to send
- `include:sendgrid.net` — Allow SendGrid to send
- `~all` — Soft fail everything else (not explicitly allowed = suspicious)

**How to set up:**
1. Log into your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.)
2. Add TXT record:
   - **Name:** `@` (root domain) or `yourdomain.com`
   - **Value:** `v=spf1 include:[your-email-provider] ~all`
3. Save and wait for DNS propagation (15 min - 24 hours)

**Validate:** Use [MXToolbox SPF Checker](https://mxtoolbox.com/spf.aspx)

---

### 2. DKIM (DomainKeys Identified Mail)

**What it does:** Adds a digital signature to your emails (proves they weren't tampered with)

**How it works:**
- Your mail server signs outgoing emails with a private key
- Recipient server verifies signature using public key (published in your DNS)
- If signature matches → legitimate email. If not → likely spoofed.

**DKIM Record Example:**
```
default._domainkey.yourdomain.com
TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQ..."
```

**How to set up:**
1. Generate DKIM keys in your email service provider (e.g., SendGrid, Mailgun)
2. Provider gives you a TXT record (hostname + value)
3. Add TXT record to DNS:
   - **Name:** `default._domainkey` (or custom selector)
   - **Value:** `v=DKIM1; k=rsa; p=[your-public-key]`
4. Save and wait for DNS propagation

**Validate:** Send test email to [Mail-Tester](https://www.mail-tester.com/)

---

### 3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)

**What it does:** Tells recipient servers what to do if SPF/DKIM fail + sends you reports

**How it works:**
- You publish a policy: "If SPF and DKIM fail, quarantine or reject the email"
- Recipient servers follow your policy
- You get reports (who's sending email from your domain, pass/fail rates)

**DMARC Record Example:**
```
_dmarc.yourdomain.com
TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@yourdomain.com"
```

**Breakdown:**
- `v=DMARC1` — DMARC version 1
- `p=quarantine` — Policy: Send failed emails to spam (not inbox)
  - Options: `none` (monitor only), `quarantine` (spam folder), `reject` (don't deliver)
- `rua=mailto:dmarc-reports@yourdomain.com` — Send aggregate reports here

**How to set up:**
1. Add TXT record to DNS:
   - **Name:** `_dmarc`
   - **Value:** `v=DMARC1; p=none; rua=mailto:your-email`
2. Start with `p=none` (monitor mode — doesn't affect delivery)
3. After 2-4 weeks, review reports → upgrade to `p=quarantine`
4. After another 2-4 weeks → upgrade to `p=reject` (strictest)

**Tools to parse DMARC reports:**
- [Postmark DMARC Digest](https://dmarc.postmarkapp.com/) (free, easy)
- [Dmarcian](https://dmarcian.com/) (paid, enterprise)

**Validate:** [MXToolbox DMARC Checker](https://mxtoolbox.com/dmarc.aspx)

---

## Domain Warmup

**Problem:** Sending from a brand-new domain (or one that hasn't sent email in months) = instant spam folder

**Why?** Email providers don't trust new senders. You need to build reputation gradually.

### Warmup Timeline (New Domain)

**Week 1: 50 emails/day**
- Start slow (don't send 10,000 emails on Day 1)
- Send to engaged recipients (people who will open/click)
- Monitor bounce rate (<2%)

**Week 2: 100-200 emails/day**
- Gradually increase volume
- Continue sending to engaged list
- Watch spam complaints (<0.1%)

**Week 3-4: 500-1,000 emails/day**
- Ramp up if metrics are good
- If bounce/spam rate spikes → slow down

**Week 5-8: 2,000-5,000 emails/day**
- Scale to target volume
- Maintain engagement (opens, clicks)

**Months 2-3: Full volume**
- Once reputation is established, send at full capacity
- Continue monitoring metrics

**Key rules:**
- Start with your most engaged subscribers (highest open rates)
- Avoid spam traps (clean your list first — see List Hygiene section)
- Don't skip warmup (one blast to 50,000 people = instant spam)

---

### Warmup for Existing Domain (Reactivation)

**If you haven't sent email in 6+ months:**

**Week 1:** Send to 10% of list (most engaged segment)
**Week 2:** Send to 25% of list
**Week 3:** Send to 50% of list
**Week 4:** Send to 100% of list

**Why?** Re-establish reputation (providers "forgot" you)

---

## IP Warmup (For High-Volume Senders)

**When you need a dedicated IP:**
- Sending 100,000+ emails per month
- Want full control over sender reputation
- Enterprise email programs

**Shared IP vs. Dedicated IP:**

| Factor | Shared IP | Dedicated IP |
|--------|-----------|--------------|
| **Volume** | <100k/month | 100k+/month |
| **Reputation** | Shared with others | Yours alone |
| **Warmup** | Not needed (IP is already warm) | Required (2-4 weeks) |
| **Cost** | Free (included in ESP plan) | $30-$100/month extra |
| **Risk** | Other senders can hurt your deliverability | Full control, but you must maintain it |

**IP Warmup Schedule:**

**Day 1-3:** 200 emails/day
**Day 4-7:** 500 emails/day
**Day 8-14:** 1,000 emails/day
**Day 15-21:** 5,000 emails/day
**Day 22-28:** 10,000 emails/day
**Week 5+:** Full volume

**Monitor:**
- Bounce rate (<2%)
- Spam complaint rate (<0.1%)
- Inbox placement (use seed lists — see Tools section)

**Tools that automate IP warmup:**
- SendGrid (auto-warmup feature)
- Mailgun (warmup pool)

---

## Sender Reputation

**What is sender reputation?**
- Your "credit score" as an email sender
- Determined by: bounce rate, spam complaints, engagement (opens/clicks), volume consistency

**Reputation score range:** 0-100
- **90-100:** Excellent (inbox delivery)
- **70-89:** Good (mostly inbox, some spam)
- **50-69:** Fair (mixed inbox/spam)
- **<50:** Poor (spam folder)

**How to check your reputation:**

**1. Google Postmaster Tools** (for Gmail delivery)
- Sign up: [https://postmaster.google.com/](https://postmaster.google.com/)
- Add your domain
- See: Spam rate, reputation, delivery errors

**2. Microsoft SNDS** (for Outlook/Hotmail)
- Sign up: [https://sendersupport.olc.protection.outlook.com/snds/](https://sendersupport.olc.protection.outlook.com/snds/)
- Monitor IP reputation

**3. Sender Score (Return Path)**
- Check IP reputation: [https://www.senderscore.org/](https://www.senderscore.org/)

---

### How to Maintain Good Reputation

**Do:**
- ✅ Send consistently (don't go silent for months, then blast)
- ✅ Segment your list (send to engaged users more often)
- ✅ Clean your list regularly (remove bounces, unengaged users)
- ✅ Make unsubscribe easy (one-click, honor immediately)
- ✅ Monitor metrics (bounce rate, spam complaints)

**Don't:**
- ❌ Buy email lists (spam traps, high bounce rate)
- ❌ Send to old lists (people who haven't engaged in 2+ years)
- ❌ Ignore bounces (high bounce rate = spam signal)
- ❌ Hide unsubscribe link (frustrated users mark as spam)

---

## Spam Avoidance

### Spam Trigger Words (Use Sparingly)

**High-risk words/phrases:**
- "Free", "Act now", "Limited time", "Click here", "Buy now"
- "Guaranteed", "No obligation", "Risk-free"
- "Urgent", "Expires today", "Last chance"
- "Make money", "Cash bonus", "Income"
- ALL CAPS, excessive punctuation!!!, multiple $$$

**Why they trigger spam filters:**
- Associated with scams and phishing
- Overused by spammers

**How to use them safely:**
- Don't use multiple trigger words in subject line ("FREE! Act now! Limited time!!!")
- Balance with legitimate content (one trigger word in an otherwise normal email = fine)
- Test with [Mail-Tester](https://www.mail-tester.com/)

---

### Email Formatting Best Practices

**1. Text-to-Image Ratio**
- **Rule:** At least 40% text, max 60% images
- **Why?** Image-only emails look like spam (and don't render if images are blocked)

**2. HTML Email Structure**
- Use clean HTML (not messy Microsoft Word HTML)
- Avoid excessive CSS (inline styles are safer)
- Don't use JavaScript (most email clients block it)

**3. Links**
- Don't use URL shorteners (bit.ly, tinyurl) — spam signal
- Use real domain links (yoursite.com/page)
- Limit to 3-5 links per email (too many = spammy)

**4. Attachments**
- Avoid attachments (spam filters hate them)
- Use links to download instead ("Download here: [link]")
- Exception: Plain-text .txt or .pdf from known sender

**5. Subject Line**
- Keep it under 60 characters (mobile truncation)
- Avoid ALL CAPS or excessive punctuation
- Personalize when possible ("John, here's your report")

---

### Avoiding Spam Traps

**What is a spam trap?**
- Email address that looks real but is monitored by ISPs/spam watchdogs
- If you send to a spam trap → instant reputation damage

**Types of spam traps:**

**1. Pristine spam traps:**
- Never opted in, never used by a real person
- Published on websites to catch scrapers
- **How to avoid:** Never buy lists, never scrape emails

**2. Recycled spam traps:**
- Old email addresses that were abandoned, then repurposed as traps
- **How to avoid:** Remove unengaged users (2+ years no open)

**How to avoid spam traps:**
- ✅ Use double opt-in (confirm email address before adding to list)
- ✅ Clean your list regularly (remove bounces and unengaged)
- ✅ Never buy lists
- ✅ Remove role-based emails (info@, sales@, admin@) — often traps

---

## List Hygiene

**Clean list = good deliverability. Dirty list = spam folder.**

### What to Clean

**1. Hard Bounces (Immediate Removal)**
- Email doesn't exist (typo, fake, deleted)
- Remove immediately after bounce (don't retry)

**2. Soft Bounces (Remove After 3-5 Attempts)**
- Temporary issue (inbox full, server down)
- Retry 3-5 times over 2 weeks → if still bouncing, remove

**3. Spam Complaints (Immediate Removal)**
- Someone marked your email as spam
- Remove immediately and never email again (legal requirement)

**4. Unengaged Users (Remove After 12-24 Months)**
- Haven't opened an email in 12-24 months
- Send re-engagement campaign first ("Do you still want to hear from us?")
- If no response → remove

**5. Role-Based Emails (Remove)**
- info@, sales@, admin@, support@
- Often go to multiple people or spam traps
- Low engagement, high risk

---

### List Cleaning Schedule

**Monthly:**
- Remove hard bounces
- Remove spam complaints

**Quarterly:**
- Remove unengaged users (12+ months no open)
- Segment re-engagement campaign for 6-12 month no-opens

**Annually:**
- Full list audit (check for duplicates, invalid formats)

**Tools:**
- **Email validation:** NeverBounce, ZeroBounce, BriteVerify (check list before sending)
- **List cleaning:** Your ESP (HubSpot, Mailchimp) has built-in bounce/complaint removal

---

## Deliverability Tools & Services

### Email Service Providers (ESPs)

**Transactional Email (APIs, developer-focused):**
- **SendGrid** — Great deliverability, scalable, $15-$90/month
- **Mailgun** — Developer-friendly, strong analytics, $35+/month
- **Postmark** — Fast delivery, focus on transactional, $10-$200/month
- **AWS SES** — Cheapest ($0.10 per 1,000 emails), requires technical setup

**Marketing Email (GUI, marketer-friendly):**
- **Mailchimp** — Easy to use, good for small businesses, $13-$350/month
- **ConvertKit** — Creator-focused, good automation, $29+/month
- **ActiveCampaign** — Advanced automation, CRM features, $29+/month
- **HubSpot** — All-in-one (CRM + email), expensive, $800+/month

**Choose based on:**
- Volume (AWS SES for high volume, Mailchimp for low)
- Technical skill (SendGrid/Mailgun for devs, Mailchimp for marketers)
- Budget (AWS SES = cheapest, HubSpot = most expensive)

---

### Deliverability Monitoring Tools

**1. Mail-Tester** (Free)
- Test email deliverability score (0-10)
- Shows: Spam score, authentication status, formatting issues
- Use: [https://www.mail-tester.com/](https://www.mail-tester.com/)

**2. GlockApps (Paid, $49+/month)**
- Inbox placement testing (Gmail, Outlook, Yahoo, etc.)
- Spam score analysis
- Blacklist monitoring

**3. Litmus (Paid, $99+/month)**
- Email preview (how it looks in different clients)
- Spam testing
- Email analytics

**4. Google Postmaster Tools (Free)**
- Gmail-specific deliverability metrics
- Reputation, spam rate, delivery errors

---

### Blacklist Checking

**What is a blacklist?**
- Database of known spam IPs/domains
- If you're on a blacklist → emails are blocked

**How to check if you're blacklisted:**
- [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx)
- Check your IP and domain

**How to get delisted:**
1. Identify the blacklist (MXToolbox shows which one)
2. Go to blacklist website (e.g., Spamhaus, Barracuda)
3. Submit delisting request (explain what happened, how you fixed it)
4. Wait 24-48 hours

**How to avoid getting blacklisted:**
- Don't send to purchased lists
- Remove bounces and spam complaints immediately
- Maintain low complaint rate (<0.1%)

---

## Troubleshooting Deliverability Issues

### Issue 1: Emails Going to Spam

**Diagnosis:**
- Check authentication (SPF, DKIM, DMARC) → All passing?
- Check sender reputation (Google Postmaster, Sender Score) → Above 70?
- Check content (spam trigger words, image-heavy, too many links?)

**Fixes:**
1. Fix authentication if failing
2. Clean your list (remove unengaged, bounces)
3. Improve engagement (send to most engaged segment first)
4. Test content with Mail-Tester (adjust if spam score is high)

---

### Issue 2: High Bounce Rate (>5%)

**Diagnosis:**
- **Hard bounces:** Email doesn't exist (bad list quality)
- **Soft bounces:** Temporary issues (inbox full, server down)

**Fixes:**
1. Validate email list before sending (NeverBounce, ZeroBounce)
2. Remove hard bounces immediately
3. Use double opt-in (confirm email before adding to list)

---

### Issue 3: High Spam Complaint Rate (>0.1%)

**Diagnosis:**
- People are marking your emails as spam (not unsubscribing)
- Why? Irrelevant content, too frequent, misleading subject line

**Fixes:**
1. Make unsubscribe easy (one-click, visible link)
2. Reduce frequency (test weekly vs. daily)
3. Segment your list (send relevant content to each segment)
4. Match subject line to email body (don't use clickbait)

---

### Issue 4: Low Open Rate (<15%)

**Diagnosis:**
- Emails might be landing in spam (check inbox placement)
- Or subject lines aren't compelling

**Fixes:**
1. Check inbox placement (seed list testing with GlockApps)
2. A/B test subject lines
3. Send at optimal times (Tuesday-Thursday, 9am-12pm)

---

## Output Format Template

```markdown
# Email Deliverability Audit: [Domain/Sender Name]

## Authentication Status

**SPF:** [✅ Pass / ❌ Fail]
- Record: [SPF record value]
- Issues: [None / Missing providers / Syntax error]

**DKIM:** [✅ Pass / ❌ Fail]
- Selector: [default._domainkey]
- Issues: [None / Missing / Invalid key]

**DMARC:** [✅ Pass / ❌ Fail / ⚠️ Monitor-only]
- Policy: [none / quarantine / reject]
- Issues: [None / No policy / No reporting]

---

## Sender Reputation

**Sender Score (IP):** [Score 0-100]
**Google Postmaster (Domain):** [Low / Medium / High reputation]
**Blacklist Status:** [Clean / Listed on: [Blacklist name]]

---

## Current Metrics

- **Bounce Rate:** [X%] — [Benchmark: <2%]
- **Spam Complaint Rate:** [X%] — [Benchmark: <0.1%]
- **Open Rate:** [X%] — [Benchmark: 15-25%]
- **Unsubscribe Rate:** [X%] — [Benchmark: <0.5%]

---

## Issues Identified

### 1. [Issue Name]
- **Impact:** [How this hurts deliverability]
- **Fix:** [What to do]
- **Priority:** [High / Medium / Low]

### 2. [Issue Name]
- **Impact:** [How this hurts deliverability]
- **Fix:** [What to do]
- **Priority:** [High / Medium / Low]

---

## Recommendations

### Immediate Fixes (Do This Week)
1. **Set up SPF/DKIM/DMARC** — [If missing]
2. **Clean list** — Remove hard bounces, spam complaints
3. **Check blacklist** — Delist if needed

### Short-Term (Next 2-4 Weeks)
1. **Warmup domain/IP** — [If new sender or reactivating]
2. **Improve engagement** — Segment list, reduce frequency
3. **Upgrade DMARC policy** — Monitor → Quarantine → Reject

### Long-Term (Ongoing)
1. **List hygiene** — Monthly bounce removal, quarterly engagement cleanup
2. **Monitor reputation** — Weekly check (Google Postmaster, Sender Score)
3. **Test emails** — Use Mail-Tester before major sends

---

## Expected Impact

**Current inbox placement:** [X%]
**Expected improvement:** +[Y%]
**New inbox placement:** [X + Y%]

**Based on:** [Authentication setup, list cleaning, reputation improvement]
```

---

## Quality Checklist

Before sending email campaigns:

- [ ] SPF, DKIM, DMARC authentication set up and passing
- [ ] Sender reputation checked (>70 score)
- [ ] List cleaned (hard bounces, spam complaints removed)
- [ ] Content tested (Mail-Tester score >7/10)
- [ ] Unsubscribe link visible and working
- [ ] Subject line reviewed (no spam trigger words)
- [ ] Domain/IP warmed up (if new sender)
- [ ] Bounce rate tracked (<2%)
- [ ] Spam complaint rate tracked (<0.1%)
