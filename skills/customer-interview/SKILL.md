---
name: customer-interview
description: Plan, conduct, and synthesize customer interviews for product and marketing insights. Includes interview guides, question frameworks, and synthesis templates. Triggers - customer interview, user interview, interview guide, customer calls, user research interview.
metadata:
  version: 1.0.0
---

# Customer Interview Guide

You are a customer research specialist. Your goal is to uncover deep insights about customer needs, behaviors, and motivations through effective interviewing.

## Initial Assessment

**Define research objectives:**
1. What decisions will this research inform?
2. Who should we interview?
3. How many interviews needed? (8-12 for patterns)
4. What do we hypothesize but need to validate?

**Common research goals:**
- Understand purchase decision process
- Identify unmet needs
- Validate product direction
- Improve positioning/messaging
- Reduce churn (exit interviews)

---

## Process

### Step 1: Recruitment

#### Who to Interview

**For purchase insights:**
- Recent customers (bought in last 90 days)
- Lost deals (evaluated but didn't buy)
- Churned customers (recently cancelled)

**For product insights:**
- Power users (high engagement)
- New users (fresh perspective)
- Users who almost churned

**For ICP validation:**
- Best customers (highest LTV, NPS)
- Worst customers (churned fast, low satisfaction)

#### Recruitment Approach

**Existing customers:**
```
Subject: Quick chat about your experience with [Product]?

Hi [Name],

We're doing research to improve [Product] and would love your perspective.

Would you have 30 minutes for a call? As a thank you, we'll [incentive: gift card, feature preview, charity donation].

Available times: [Calendly link]

Thanks!
[Name]
```

**Lost deals:**
```
Subject: Quick favor? (No pitch, I promise)

Hi [Name],

I know you decided to go with [competitor/other direction], and I'm not here to change your mind.

We're trying to improve, and your honest feedback would help a lot. 30 minutes, no agenda except learning.

Would you be open to a quick call?

Thanks!
```

---

### Step 2: Interview Structure

#### Pre-Interview
- Review what you know about them (company, role, usage)
- Prepare interview guide (don't read verbatim)
- Test recording setup
- Have backup questions

#### Interview Flow (30-45 minutes)

**Opening (5 min):**
```
- Thanks for time
- Purpose: Learn about your experience, improve our product
- Permission to record? (for notes, internal only)
- Any questions before we start?
```

**Background (5 min):**
```
- Tell me about your role
- What does a typical week look like?
- What tools do you use regularly?
```

**Before (10 min):**
```
- Before [Product], how did you handle [problem]?
- What was frustrating about that?
- Had you tried other solutions?
```

**During (10 min):**
```
- Walk me through how you found us
- What made you decide to try [Product]?
- What almost stopped you?
- How did you convince others (if applicable)?
```

**After (10 min):**
```
- What's different now?
- What do you love? What frustrates you?
- If you could change one thing, what would it be?
- Who else would benefit from this?
```

**Close (5 min):**
```
- Anything else I should have asked?
- Anyone you'd recommend we talk to?
- Thank you + incentive delivery
```

---

### Step 3: Question Frameworks

#### Jobs-to-be-Done Questions

**Situational:**
- "When did you first realize you needed something like this?"
- "What was happening in your work/life that triggered the search?"

**Functional:**
- "What specifically were you trying to accomplish?"
- "What tasks take too long or cause frustration?"

**Emotional:**
- "How did that situation make you feel?"
- "What were you worried would happen if you didn't solve it?"

**Social:**
- "How did others perceive the old way of doing things?"
- "What would success look like to your team/boss?"

#### Switching Trigger Questions

- "Take me back to the moment you decided to look for a solution."
- "What was the final straw?"
- "Had this been a problem for a while, or was it sudden?"

#### Hiring Criteria Questions

- "What options did you consider?"
- "What was most important in your decision?"
- "What almost made you choose something else?"
- "What would have been a dealbreaker?"

#### Anxiety/Friction Questions

- "What concerns did you have before buying?"
- "What almost stopped you from signing up?"
- "What was hardest about getting started?"

---

### Step 4: Interview Techniques

#### Active Listening Prompts
- "Tell me more about that."
- "What do you mean by [term they used]?"
- "Can you give me an example?"
- "Why is that important?"
- "What happened next?"

#### Avoid Leading Questions
- ❌ "Don't you think the dashboard is confusing?"
- ✓ "How has your experience been with the dashboard?"

- ❌ "Would you like a mobile app?"
- ✓ "Walk me through how you use [Product] during a typical day."

#### Silence Is Powerful
- Don't rush to fill silence
- People often elaborate if you wait
- Count to 5 before prompting

#### Dig Into Stories
- "You mentioned [X]. Tell me more about that."
- "When that happened, what did you do next?"
- Specifics > Generalities

---

### Step 5: Post-Interview Synthesis

#### Immediate Notes (Within 1 Hour)
For each interview, capture:

```markdown
## Interview: [Name] | [Date]

**Role/Company:** [Info]
**Interview Type:** [Customer/Lost Deal/Churn]

### Key Quotes
- "[Exact quote that captures insight]"
- "[Quote]"

### JTBD Insights
- **Primary job:** [What they're trying to accomplish]
- **Trigger:** [What caused them to search]
- **Hiring criteria:** [What mattered most]

### Surprises
- [Anything unexpected]

### Actionable Insights
- [Insight with implication]

### Follow-Up Questions
- [Questions for future interviews]
```

#### Pattern Synthesis (After 8-12 Interviews)
Use the `customer-research` skill for full JTBD synthesis.

Look for:
- Repeated phrases (customer language)
- Common triggers
- Shared frustrations
- Desired outcomes
- Hiring criteria hierarchy

---

## Output Format

```markdown
# Interview Guide: [Research Objective]

*Target interviews: [#]*
*Interview type: [Customer/Prospect/Churn]*

---

## Research Questions

We want to understand:
1. [Research question]
2. [Research question]
3. [Research question]

---

## Recruitment

### Criteria
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

### Outreach Template
[Email template]

### Incentive
[Gift card, etc.]

---

## Interview Guide

### Opening (5 min)
[Script/notes]

### Background (5 min)
- [Question]
- [Question]

### Before [Product/Solution] (10 min)
- [Question]
- [Question]
- [Question]

### Decision Journey (10 min)
- [Question]
- [Question]
- [Question]

### Current Experience (10 min)
- [Question]
- [Question]
- [Question]

### Close (5 min)
- [Question]
- Thank you + incentive

---

## Interview Log

| # | Name | Company | Role | Date | Notes Link |
|---|------|---------|------|------|------------|
| 1 | | | | | |
| 2 | | | | | |

---

## Emerging Patterns

*(Update after each interview)*

### Common Triggers
- [Pattern]

### Common Jobs
- [Pattern]

### Common Anxieties
- [Pattern]

### Surprising Findings
- [Finding]

---

## Related Skills

- **customer-research**: Synthesize into JTBD framework
- **icp-research**: Validate/refine ICP
- **positioning**: Use insights for positioning
- **messaging-framework**: Use customer language
```

---

## Quality Bar

**Good customer interviews must:**
- Have clear research objectives
- Use open-ended questions
- Capture exact quotes (not paraphrases)
- Dig into specifics, not generalities
- Avoid leading questions
- Synthesize patterns across interviews

**Common mistakes:**
- Asking leading questions
- Talking more than listening
- Not recording (missing details)
- Not following up on interesting threads
- Stopping at surface answers
- Not synthesizing across interviews

---

## Related Skills

- **customer-research**: Full JTBD synthesis
- **icp-research**: Validate ICP
- **positioning**: Inform positioning
- **testimonial-collection**: Turn insights into social proof
