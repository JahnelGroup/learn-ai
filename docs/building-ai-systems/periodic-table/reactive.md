---
id: reactive
title: Reactive Family
sidebar_position: 2
---

# Reactive Family (G1)

**These elements are "reactive" because small changes produce dramatically different outputs.**

This is the action family, from giving instructions to autonomous operation. A single word change in a prompt can completely transform the output. An agent given slightly different goals will take entirely different actions.

| Element | Name | Row | Description |
|---------|------|-----|-------------|
| **Pr** | [Prompts](#pr--prompts) | Primitives | Instructions given to an AI model |
| **Fc** | [Function Calling](#fc--function-calling) | Compositions | When an LLM invokes external tools |
| **Ag** | [Agents](#ag--agents) | Deployment | Autonomous think-act-observe loops |
| **Ma** | [Multi-agent](#ma--multi-agent) | Emerging | Multiple agents collaborating |

---

## Pr — Prompts

```
Position in Periodic Table:

G1: Reactive Family
┌──────────────────────┐
│  → [Prompts]         │  Row 1: Primitives
│     Function Call    │  Row 2: Compositions
│     Agents           │  Row 3: Deployment
│     Multi-Agent      │  Row 4: Emerging
└──────────────────────┘
```

### What It Is

**Prompts are the instructions given to an AI model.** They are the fundamental interface between human intent and AI capability. One word change can completely transform output.

### Why It Matters

Prompts are the most accessible and powerful lever you have over AI behavior. Before you reach for complex solutions like fine-tuning or agents, master prompting. Most AI problems are actually prompting problems in disguise.

### Prompt Anatomy

A well-structured prompt typically includes:

1. **Role/Persona:** Who the AI should be ("You are an expert code reviewer...")
2. **Context:** Background information the AI needs
3. **Task:** What you want it to do
4. **Format:** How the output should be structured
5. **Constraints:** What to avoid or limits to respect
6. **Examples:** Demonstrations of desired behavior (few-shot)

### Prompt Patterns

| Pattern | Description | When to Use |
|---------|-------------|-------------|
| **Zero-shot** | No examples, just instructions | Simple, well-defined tasks |
| **Few-shot** | Include examples of desired behavior | Complex or ambiguous tasks |
| **Chain-of-thought** | Ask model to reason step by step | Math, logic, complex reasoning |
| **Role-based** | Assign a specific persona | Domain expertise, tone control |

### Practical Example

**Weak prompt:**
```
Review this code.
```

**Strong prompt:**
```
You are a senior software engineer conducting a code review.

Review the following Python function for:
1. Potential bugs or edge cases
2. Performance issues
3. Readability improvements

Format your response as:
- BUGS: [list any bugs found]
- PERFORMANCE: [list any performance concerns]
- READABILITY: [list any suggestions]

If a category has no issues, write "None found."

Code to review:
[code here]
```

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Write effective prompts with clear structure and iteration |
| **Practitioner** | Design prompt templates for production systems |
| **Expert** | Optimize prompts for cost, latency, and reliability |

---

## Fc — Function Calling

```
Position in Periodic Table:

G1: Reactive Family
┌──────────────────────┐
│     Prompts          │  Row 1: Primitives
│  → [Function Call]   │  Row 2: Compositions
│     Agents           │  Row 3: Deployment
│     Multi-Agent      │  Row 4: Emerging
└──────────────────────┘
```

### What It Is

**Function calling is when an LLM invokes external tools or APIs to take action.** The model decides which function to call and with what parameters, bridging AI reasoning to real-world systems.

### Why It Matters

Function calling transforms LLMs from text generators into action takers. It's the bridge between "the AI understands what I want" and "the AI actually does it."

### How It Works

1. You define available functions with schemas (name, description, parameters)
2. User sends a message
3. Model decides if a function should be called
4. Model outputs structured function call (JSON)
5. Your code executes the function
6. Result is fed back to the model
7. Model generates final response

### Function Schema Example

```json
{
  "name": "get_weather",
  "description": "Get the current weather for a location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City and state, e.g., San Francisco, CA"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"]
      }
    },
    "required": ["location"]
  }
}
```

### Key Considerations

| Aspect | Consideration |
|--------|---------------|
| **Schema design** | Clear descriptions help the model choose correctly |
| **Error handling** | Functions fail, so plan for it |
| **Security** | Validate parameters before execution |
| **Cost** | Each function call adds tokens and latency |

### Common Patterns

- **Single function:** One tool for a specific task
- **Multiple functions:** Model chooses from several tools
- **Parallel calls:** Multiple functions called simultaneously
- **Sequential chains:** Output of one function feeds the next

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the concept and when it applies |
| **Practitioner** | Implement function calling with error handling |
| **Expert** | Design function schemas for complex multi-tool systems |

---

## Ag — Agents

```
Position in Periodic Table:

G1: Reactive Family
┌──────────────────────┐
│     Prompts          │  Row 1: Primitives
│     Function Call    │  Row 2: Compositions
│  → [Agents]          │  Row 3: Deployment
│     Multi-Agent      │  Row 4: Emerging
└──────────────────────┘
```

### What It Is

**Agents are autonomous AI systems that use think-act-observe loops.** Given a goal, they plan steps, execute actions (often via function calls), observe results, and iterate until complete.

### Why It Matters

Agents represent a shift from AI as a tool to AI as a worker. Instead of asking "help me with this step," you can say "accomplish this goal." The agent figures out the steps.

### The Agent Loop

```
┌─────────────────────────────────────┐
│                                     │
│  ┌─────────┐    ┌─────────┐        │
│  │  THINK  │───▶│   ACT   │        │
│  └─────────┘    └─────────┘        │
│       ▲              │              │
│       │              ▼              │
│       │        ┌─────────┐         │
│       └────────│ OBSERVE │         │
│                └─────────┘         │
│                                     │
└─────────────────────────────────────┘
```

1. **Think:** Analyze current state, plan next action
2. **Act:** Execute a function, query, or operation
3. **Observe:** Process the result
4. **Repeat** until goal is achieved or limits reached

### Agent Components

| Component | Purpose |
|-----------|---------|
| **Goal** | What the agent is trying to achieve |
| **Tools** | Functions the agent can call |
| **Memory** | State maintained across steps |
| **Planning** | How the agent decides what to do next |
| **Termination** | When to stop (success, failure, limits) |

### Challenges

- **Runaway loops:** Agent keeps trying without progress
- **Wrong tool selection:** Agent picks inappropriate actions
- **Context accumulation:** Memory fills up over long runs
- **Cost explosion:** Many iterations = many API calls
- **Unpredictable behavior:** Hard to test all paths

### When to Use Agents

**Good fit:**
- Multi-step research tasks
- Tasks requiring iteration and refinement
- Workflows with branching logic
- Operations across multiple systems

**Poor fit:**
- Simple, single-step tasks
- Time-critical operations (agents add latency)
- Tasks requiring guaranteed deterministic behavior
- High-stakes operations without human oversight

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the agent concept and loop |
| **Practitioner** | Build agents with tools and termination conditions |
| **Expert** | Design robust agents with error handling and observability |

---

## Ma — Multi-agent

```
Position in Periodic Table:

G1: Reactive Family
┌──────────────────────┐
│     Prompts          │  Row 1: Primitives
│     Function Call    │  Row 2: Compositions
│     Agents           │  Row 3: Deployment
│  → [Multi-Agent]     │  Row 4: Emerging
└──────────────────────┘
```

### What It Is

**Multi-agent systems involve multiple AI agents working together, debating, collaborating, and specializing.** One agent researches, another writes, another critiques. Emergent capability arises from their coordination.

### Why It Matters

Some problems are too complex for a single agent with a single perspective. Multi-agent systems can:
- Divide labor among specialists
- Provide checks and balances through debate
- Scale to larger, more complex tasks
- Mirror human team dynamics

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

### When to Use Multi-agent

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

### Current State (2026)

Multi-agent is still emerging. Patterns are being discovered. Frameworks like AutoGen, CrewAI, and LangGraph provide building blocks, but production deployments remain challenging. Expect rapid evolution.

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the concept and patterns |
| **Practitioner** | Experiment with multi-agent frameworks |
| **Expert** | Design and deploy multi-agent systems with monitoring |
