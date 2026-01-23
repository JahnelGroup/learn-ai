---
id: multi-agent
title: "Ma - Multi-agent"
sidebar_position: 5
---

# Ma — Multi-agent

| | |
|---|---|
| **Symbol** | Ma |
| **Name** | Multi-agent |
| **Family** | Reactive |
| **Row** | 4 - Emerging |

---

## What It Is

**Multi-agent systems involve multiple AI agents working together—debating, collaborating, specializing.** One agent researches, another writes, another critiques. Emergent capability arises from their coordination.

---

## Why It Matters

Some problems are too complex for a single agent with a single perspective. Multi-agent systems can:
- Divide labor among specialists
- Provide checks and balances through debate
- Scale to larger, more complex tasks
- Mirror human team dynamics

---

## Core Concepts

### Multi-agent Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| **Hierarchical** | Manager agent delegates to workers | PM agent assigns tasks to coder and tester agents |
| **Collaborative** | Peers work together on shared goal | Research agent and writing agent co-author a report |
| **Adversarial** | Agents debate or compete | Generator agent vs. critic agent |
| **Pipeline** | Output of one feeds the next | Draft → Edit → Review → Publish |

### Coordination Mechanisms

- **Shared memory:** All agents read/write to common state
- **Message passing:** Agents communicate directly
- **Orchestrator:** Central agent coordinates others
- **Emergent:** Agents self-organize based on rules

### Challenges

- **Communication overhead:** Agents talking adds latency and cost
- **Coordination failures:** Agents working at cross-purposes
- **Debugging complexity:** Harder to trace issues across agents
- **Consistency:** Keeping shared state synchronized
- **Termination:** Knowing when the system is "done"

---

## Practical Example

**Task:** Write a technical blog post

**Agent Team:**
1. **Researcher Agent:** Gathers information, finds sources
2. **Writer Agent:** Creates the initial draft
3. **Editor Agent:** Improves clarity and flow
4. **Fact-checker Agent:** Verifies claims against sources
5. **SEO Agent:** Optimizes for search

**Flow:**
```
Researcher → Writer → Editor → Fact-checker ─┐
                         ▲                    │
                         └────────────────────┘
                         (iterate if issues)
                                    │
                                    ▼
                              SEO Agent → Final
```

---

## When to Use Multi-agent

**Good fit:**
- Complex tasks benefiting from specialization
- Tasks requiring multiple perspectives or review
- Workflows with natural division of labor
- Creative tasks benefiting from iteration

**Poor fit:**
- Simple tasks (overkill)
- Latency-sensitive applications
- When single-agent reliability is already a challenge
- Limited budget (multiplies API costs)

---

## Current State (2026)

Multi-agent is still emerging. Patterns are being discovered. Frameworks like AutoGen, CrewAI, and LangGraph provide building blocks, but production deployments remain challenging. Expect rapid evolution.

---

## Related Elements

- **[Agents](/docs/periodic-table/reactive/agents):** Single-agent foundation
- **[Frameworks](/docs/periodic-table/orchestration/frameworks):** Multi-agent platforms
- **[MCP](/docs/periodic-table/orchestration/mcp):** Protocols for agent communication
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measuring multi-agent performance

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the concept and patterns |
| **Practitioner** | Experiment with multi-agent frameworks |
| **Expert** | Design and deploy multi-agent systems with monitoring |
