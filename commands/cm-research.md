# /cm:research — Deep Market Research Workflow

Comprehensive research workflow that builds foundation for all marketing work.

## What It Does

Runs a sequence of research skills to gather market intel, customer insights, and competitive analysis.

## Process

1. **Check for existing context**
   - Read `.agents/product-marketing-context.md`
   - If missing, run `cm-context` first

2. **Run ICP Research**
   - Execute `icp-research` skill
   - Output: ICP document with firmographics, behaviors, psychographics

3. **Run Competitive Analysis**
   - Execute `competitive-analysis` skill
   - Output: Competitive landscape with white space opportunities

4. **Run Customer Research** (if data available)
   - Execute `customer-research` skill
   - Synthesize interviews/feedback into JTBD insights
   - Output: Customer insights document

5. **Synthesize Findings**
   - Combine all research
   - Update `.agents/product-marketing-context.md` with learnings
   - Identify gaps (what research is still needed)

6. **Recommend Next Steps**
   - If positioning is weak → Run `/cm:position`
   - If ready to execute → Run `/cm:copy` or `/cm:launch`

## When to Use

- Starting a new marketing initiative
- Entering a new market segment
- Refreshing outdated positioning
- Before a major product launch

## Time Investment

2-4 hours (depending on available data)

## Output

- Updated product-marketing context
- ICP document
- Competitive analysis
- Customer insights (if applicable)
- Recommended next steps
