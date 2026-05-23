# Sub-agent Dispatch Contract

> Cross-platform contract for the orchestrator → specialist → merge pattern piloted in v1.8 (`/cm-research`, `/cm-audit`, `/cm-position`).

This document defines **how orchestrator skills dispatch specialist sub-agents in parallel, what each side must provide, and how outputs are merged**. It is the canonical reference. Any new orchestrator skill (workflow with multiple parallel specialists) must conform to this contract.

## Why this exists

The original v1.7 workflows ran every specialist skill **serially inside one prompt context**. That works, but it is slow and it pollutes the parent's working memory — by the time the orchestrator reaches the synthesis step, the specialist outputs are buried under 30k tokens of intermediate reasoning. compounding-engineering's pattern of dispatching focused specialists in parallel and merging structured returns is dramatically better on research-heavy and multi-perspective tasks because each specialist runs in a clean context with a narrow remit, and the orchestrator only sees the structured payloads.

v1.8 pilots that pattern in three workflows. This file is what the orchestrators read to know how to actually dispatch.

---

## 1. The dispatch primitive per platform

The mechanism differs by host. Orchestrators must detect the platform and invoke the right primitive. If detection fails, fall back to the serial path (§5).

### Claude Code

Claude Code exposes sub-agents via the `Agent` tool (also surfaced as `Task` in some versions). The orchestrator calls one `Agent` invocation per specialist, all in the same assistant turn, so Claude Code runs them in parallel.

Canonical invocation:

```jsonc
// One tool call per specialist, all in the same message
{
  "tool": "Agent",
  "input": {
    "subagent_type": "cm-icp-finder",        // exact skill folder name
    "description": "ICP cohort analysis",     // ≤ 80 chars, for the UI
    "prompt": "<the structured brief, see §2>"
  }
}
```

The orchestrator waits for **all** specialist returns, then runs the merge step. Each specialist's reply is the assistant's final text from that sub-context, which by contract is the structured payload defined in §3.

### Codex

Codex exposes `spawn_agent`. Same fan-out semantics: emit one call per specialist in a single turn.

```jsonc
{
  "tool": "spawn_agent",
  "input": {
    "agent": "cm-icp-finder",
    "brief": { /* structured brief, see §2 */ }
  }
}
```

Codex returns each agent's structured payload as a tool result.

### Cursor

Cursor exposes `Subagent` (sometimes surfaced as `subagent.run`). Cursor will execute multiple `Subagent` calls in the same turn concurrently.

```jsonc
{
  "tool": "Subagent",
  "input": {
    "skill": "cm-icp-finder",
    "input": { /* structured brief, see §2 */ }
  }
}
```

### Zed

Zed delegates to external agents via the `external-agents` config in `.zed/config.json`. Dispatch is less first-class — Zed's current pattern is to either (a) shell out to Claude Code / Codex CLI as the dispatcher, or (b) fall back to the serial path.

In practice, orchestrators running in Zed should **fall back to the serial path** (§5) unless `external-agents.parallel: true` is set in the project config.

### ChatGPT / Claude.ai (web)

No dispatch primitive available. Always fall back to serial.

### Detection heuristic

Orchestrators should detect the platform from the environment, in this order:

1. If a `subagent_type`-capable tool is available in the current tool registry → Claude Code path.
2. If `spawn_agent` is available → Codex path.
3. If `Subagent` is available → Cursor path.
4. Otherwise → serial fallback (§5).

The orchestrator should not ask the user which path to take. Detect and proceed.

---

## 2. The specialist brief (input contract)

Every specialist is a regular `SKILL.md` file. The orchestrator addresses it by **skill folder name** (e.g., `cm-icp-finder`) and passes a **structured brief**: a JSON-style block carrying everything the specialist needs to run without re-asking the user.

Briefs follow this canonical shape:

```jsonc
{
  "task": "ICP cohort analysis for B2B SaaS",     // 1-line human label
  "context_refs": [                                // file paths the specialist must load
    ".agents/product-marketing-context.md",
    ".agents/learnings/icp-research.md"
  ],
  "scope": {                                       // skill-specific scope parameters
    "segments_to_cover": 3,
    "depth": "standard",                           // light | standard | deep
    "include_anti_icp": true
  },
  "user_inputs": {                                 // raw user inputs the orchestrator gathered
    "industry": "fintech",
    "stage": "Series B",
    "primary_geo": "north america"
  },
  "time_budget_minutes": 5,                        // soft cap; specialist should self-limit
  "peers": [                                       // who else is running in parallel — so the
    "cm-competitor-mapper",                        //  specialist can avoid overlap and trust
    "cm-customer-voice-miner",                     //  that peers will cover their lanes
    "cm-market-sizing-runner"
  ],
  "output_format": "json"                          // json | markdown — see §3
}
```

**Required fields:** `task`, `context_refs`, `scope`, `output_format`.
**Strongly recommended:** `peers` (so the specialist doesn't duplicate peer work), `time_budget_minutes` (so the specialist stays in its lane).

Specialists **must not** ask the orchestrator follow-up questions. If a brief is incomplete, the specialist returns a structured payload with `status: "incomplete"` and a `missing` array — the orchestrator decides whether to re-dispatch with more context or proceed.

---

## 3. The specialist return (output contract)

Specialists return one of two formats. The orchestrator declares which it wants via `output_format`. Default is JSON because it's easier to merge.

### JSON format (preferred for merge)

```jsonc
{
  "status": "ok",                                  // ok | incomplete | failed
  "specialist": "cm-icp-finder",                   // self-identification
  "schema_version": "1.0.0",
  "summary": "Identified 3 ICP segments...",       // 1-2 sentences
  "findings": [                                    // ordered, deduplicable
    {
      "id": "ICP-1",
      "title": "Series B fintech, 100-200 employees",
      "details": { /* skill-specific */ },
      "confidence": "high"                         // low | medium | high
    }
  ],
  "recommendations": [
    { "for_skill": "positioning", "action": "Test ICP-1 framing in canvas." }
  ],
  "open_questions": [
    "Is geo-restricted to NA, or include EU?"
  ],
  "missing": []                                    // populated only when status != ok
}
```

### Markdown format (for skills whose output is a narrative deliverable)

```markdown
# {{specialist-name}} — Return

**Status:** ok
**Summary:** <1-2 sentences>

## Findings
- **F-1.** <title> — <one-line>
- **F-2.** <title> — <one-line>

## Recommendations
- For `<skill>`: <action>

## Open questions
- ...
```

Markdown returns are still parseable — the orchestrator looks for `## Findings`, `## Recommendations`, `## Open questions` headings. Specialists must use these literal headings.

---

## 4. The merge step

After fan-out, the orchestrator has N structured payloads. The merge step is **non-optional** and must happen before the user-facing deliverable is produced. The orchestrator does five things, in order:

1. **De-duplicate findings.** Hash by `title` (normalized: lowercase, punctuation-stripped). Where two specialists surface the same finding, keep the one with higher `confidence`; if tied, keep both and tag as `cross-validated`.
2. **Resolve conflicts.** Where two specialists disagree (e.g., `cm-icp-finder` says Series B is primary, `cm-market-sizing-runner` says Series A has bigger SAM), surface the conflict explicitly in the final output under a `## Conflicts` heading. Do not silently pick one.
3. **Consolidate recommendations.** Group by `for_skill`. Where multiple specialists recommend the same downstream skill, merge into one consolidated recommendation.
4. **Aggregate open questions.** Deduplicate and prioritize. Open questions become the orchestrator's "before you proceed, decide:" list.
5. **Produce the synthesized deliverable.** The deliverable structure is defined by each orchestrator (see `commands/cm-research.md` etc.) and uses the merged inputs.

Merge output structure (orchestrator's final deliverable always includes these three sections):

```markdown
## Sources consulted
- cm-icp-finder (status: ok, findings: 3)
- cm-competitor-mapper (status: ok, findings: 5)
- ...

## Conflicts
- ICP-1 vs MKT-2: cm-icp-finder recommends Series B as primary; cm-market-sizing-runner recommends Series A. Resolution: ...

## Synthesized deliverable
<orchestrator-specific output>
```

---

## 5. Fallback contract (no platform dispatch)

If the orchestrator cannot detect a dispatch primitive (Zed without `external-agents.parallel`, ChatGPT, Claude.ai, or any future host), it **must still produce equivalent output by running specialists serially in the same context**.

The serial path:

1. For each specialist in `peers + self`, the orchestrator opens a delimited section in its own working memory:
   ```
   --- specialist: cm-icp-finder ---
   <load the specialist's SKILL.md from skills/cm-icp-finder/SKILL.md>
   <execute its Process against the brief from §2>
   <produce the structured payload from §3>
   --- end specialist ---
   ```
2. After all specialists are done, run the merge step from §4 exactly as if the returns had come from parallel dispatch.
3. Tag the final output: `Sources consulted` lists each specialist with `dispatch_mode: serial`.

There is **no behavior loss** in the fallback path — only added latency. The orchestrator's deliverable must be byte-identical in structure to the parallel path.

---

## 6. Example: `/cm-research` dispatching four specialists

The orchestrator (`commands/cm-research.md`) gathers minimal user inputs (industry, stage, primary geo, existence of customer-interview transcripts), loads `.agents/product-marketing-context.md`, then fans out:

```jsonc
// Turn 1 of the orchestrator — four Agent tool calls in one message

[
  {
    "tool": "Agent",
    "input": {
      "subagent_type": "cm-icp-finder",
      "description": "ICP cohort analysis",
      "prompt": "{ \"task\": \"ICP cohort analysis\", \"context_refs\": [\".agents/product-marketing-context.md\", \".agents/learnings/icp-research.md\"], \"scope\": { \"segments_to_cover\": 3, \"depth\": \"standard\" }, \"user_inputs\": { \"industry\": \"fintech\", \"stage\": \"Series B\" }, \"time_budget_minutes\": 5, \"peers\": [\"cm-competitor-mapper\", \"cm-customer-voice-miner\", \"cm-market-sizing-runner\"], \"output_format\": \"json\" }"
    }
  },
  {
    "tool": "Agent",
    "input": {
      "subagent_type": "cm-competitor-mapper",
      "description": "Competitor landscape map",
      "prompt": "{ /* same shape, scope tuned to competitor-mapper */ }"
    }
  },
  {
    "tool": "Agent",
    "input": {
      "subagent_type": "cm-customer-voice-miner",
      "description": "Customer language mining",
      "prompt": "{ /* ... */ }"
    }
  },
  {
    "tool": "Agent",
    "input": {
      "subagent_type": "cm-market-sizing-runner",
      "description": "TAM/SAM/SOM calc",
      "prompt": "{ /* ... */ }"
    }
  }
]
```

Each specialist returns a JSON payload conforming to §3. The orchestrator's next turn:

1. Receives four JSON payloads.
2. Runs the merge step (§4).
3. Produces the unified **Research Pack** (ICP segments + competitor map + customer language quotes + market sizing) with `## Sources consulted`, `## Conflicts`, and `## Synthesized deliverable` sections.
4. Saves to `.agents/outputs/research-pack-<date>.md` (if `output: file`) or returns inline.

---

## 7. Versioning and forward compatibility

- Brief shape (§2) is at `schema_version: 1.0.0`. New optional fields may be added in 1.x releases.
- Return shape (§3) is at `schema_version: 1.0.0`. Same rule.
- Breaking changes (renaming required fields, removing fields) require a major bump and a migration note in `CHANGELOG.md`.
- Orchestrators must tolerate specialists returning `schema_version` greater than their own — accept the payload, log a non-blocking warning under `Sources consulted`.

---

## 8. Authoring a new specialist

If you are writing a new specialist sub-skill (e.g., adding a fifth specialist to `/cm-audit`):

1. Create `skills/<specialist-name>/SKILL.md` following the standard 7-section structure (see `skills/_TEMPLATE.md`).
2. Add a **`## Sub-agent contract`** section after `Initial Assessment` documenting (a) the brief shape this specialist expects, (b) the return shape, (c) a soft time-budget.
3. Frontmatter `description` must include the phrase `sub-agent` or `specialist` so the model knows this skill is dispatched, not user-facing.
4. Add `when_to_use:` frontmatter pointing at the orchestrator that calls it: `When orchestrator <X> needs <Y>.`
5. Cross-reference the parent generalist skill (e.g., `cm-icp-finder` → `icp-research`) in **Related Skills**.
6. Update the orchestrator's `## Specialists` and `## Dispatch sequence` sections.
7. Run `node scripts/validate-skills.js skills/<name>/SKILL.md` — it must pass the standard 7-section gate.
