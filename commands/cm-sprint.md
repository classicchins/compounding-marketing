# /cm:sprint — Marketing Sprint Planning

Plan a focused 2-week marketing sprint with clear deliverables.

## What It Does

Structures your marketing work into time-boxed sprints with defined goals, task breakdowns, and success criteria. Prevents scope creep and ensures marketing ships, not just plans.

## Time Investment

20-30 minutes (planning session)

## Process

### 1. Review Context

**Before planning, gather:**
- What did last sprint accomplish? (If not first sprint)
- Current business priorities — what matters most right now?
- Any deadlines or external dependencies?
- Available capacity — how many hours/week for marketing?

### 2. Set Sprint Goal

**One sentence: What is this sprint about?**

Good examples:
- "Launch positioning and homepage copy for ProductX"
- "Build email nurture sequence for trial users"
- "Establish SEO content pipeline with 4 published posts"
- "Run competitive analysis and update positioning"

Bad examples:
- "Do marketing" (too vague)
- "Redesign everything" (too ambitious)
- "Post on social" (no outcome defined)

### 3. Define Deliverables

**List 3-5 concrete deliverables that prove the sprint goal is met.**

| # | Deliverable | Skill/Workflow | Est. Time | Owner |
|---|-------------|---------------|-----------|-------|
| 1 | ... | ... | ... | ... |
| 2 | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... |

**Rules:**
- Each deliverable must be a specific artifact (doc, page, campaign, etc.)
- Total estimated time must fit within available capacity
- If it doesn't fit → cut scope, don't extend timeline

### 4. Break Into Tasks

**For each deliverable, list the tasks:**

```markdown
## Deliverable 1: [Name]

- [ ] Task 1 — [skill to use] — est. Xh
- [ ] Task 2 — est. Xh  
- [ ] Task 3 — est. Xh
- [ ] Review & ship — est. 30m
```

### 5. Schedule the Sprint

**Week 1: Research & Draft**
- Day 1-2: Research tasks
- Day 3-4: First drafts
- Day 5: Review, feedback, iterate

**Week 2: Polish & Ship**
- Day 1-2: Revisions, finalize
- Day 3-4: Ship deliverables
- Day 5: Sprint retro → `/cm:retro`

### 6. Define Success Criteria

**How will you know this sprint was successful?**

- [ ] All deliverables shipped (or consciously descoped)
- [ ] Quality bar met (not just "done" but "good")
- [ ] Learnings documented via `/cm:compound`
- [ ] Next sprint backlog updated

## Output

```markdown
## Marketing Sprint [#N] — [Start Date] to [End Date]

### Sprint Goal
[One sentence]

### Deliverables
1. [Deliverable] — [Status: Not Started / In Progress / Done]
2. [Deliverable] — [Status]
3. [Deliverable] — [Status]

### Capacity
- Available: X hours/week × 2 weeks = X hours total
- Committed: X hours
- Buffer: X hours (20% recommended)

### Daily Tasks
[Broken down by day/week]

### Success Criteria
- [ ] ...
- [ ] ...
```

## When to Run

- Every 2 weeks (at sprint boundary)
- After `/cm:audit` identifies priorities
- When starting marketing on a new product

## Related Workflows

- `/cm:standup` — Daily check-in during sprint
- `/cm:eod` — End-of-day during sprint
- `/cm:retro` — At sprint end
- `/cm:compound` — Document learnings

## Common Mistakes

- Overcommitting (plan for 60-70% capacity, leave room for surprises)
- No sprint goal (just a task list isn't a sprint)
- Skipping the retro (you lose the compounding benefit)
- Changing scope mid-sprint (note it, do it next sprint)
