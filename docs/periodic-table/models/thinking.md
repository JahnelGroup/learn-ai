---
id: thinking
title: "Th - Thinking Models"
sidebar_position: 5
---

# Th — Thinking Models

| | |
|---|---|
| **Symbol** | Th |
| **Name** | Thinking Models |
| **Family** | Models |
| **Row** | 4 - Emerging |

---

## What It Is

**Thinking models reason before answering.** Chain-of-thought is built into their architecture. They spend compute time thinking, not just generating. The smartest models today use this approach.

Examples: OpenAI's o1, Claude's extended thinking mode.

---

## Why It Matters

Traditional LLMs generate the first plausible response. Thinking models:
- **Consider alternatives** before committing
- **Catch errors** through internal verification
- **Handle complexity** that stumps regular models
- **Show their work** (sometimes) for transparency

For hard problems, thinking models significantly outperform.

---

## Core Concepts

### How Thinking Models Differ

**Standard LLM:**
```
Input → Generate tokens → Output
(fast, but may miss nuances)
```

**Thinking Model:**
```
Input → Reason internally → Verify → Refine → Output
(slower, but more accurate on hard problems)
```

### Characteristics

| Aspect | Thinking Models | Standard Models |
|--------|-----------------|-----------------|
| **Latency** | Higher (seconds to minutes) | Lower (milliseconds to seconds) |
| **Cost** | Higher (more compute) | Lower |
| **Simple tasks** | Overkill | Efficient |
| **Complex reasoning** | Excels | Struggles |
| **Math/logic** | Strong | Unreliable |
| **Transparency** | Can show reasoning | Limited visibility |

### When Thinking Helps

| Task Type | Benefit |
|-----------|---------|
| **Math problems** | High—verifies calculations |
| **Logic puzzles** | High—explores possibilities |
| **Complex code** | High—considers edge cases |
| **Planning** | High—thinks through steps |
| **Simple Q&A** | Low—unnecessary overhead |
| **Creative writing** | Variable—may overthink |

---

## Trade-offs

### Latency vs. Quality

```
Simple question: "What's the capital of France?"
├─ Standard model: 200ms, "Paris" ✓
└─ Thinking model: 5s, "Paris" ✓ (wasted time)

Complex problem: "Prove this mathematical theorem"
├─ Standard model: 500ms, often wrong ✗
└─ Thinking model: 60s, usually correct ✓
```

### Cost Considerations

Thinking models use more tokens internally:
- A problem that takes 100 tokens to state
- May require 5,000+ tokens of internal reasoning
- Billed accordingly

**Use strategically on problems that benefit.**

---

## Design Patterns

### Selective Reasoning

Route simple queries to fast models, complex to thinking:

```python
def answer_query(query):
    complexity = assess_complexity(query)

    if complexity < 0.5:
        return fast_model.complete(query)
    else:
        return thinking_model.complete(query)
```

### Hybrid Approaches

Use thinking for planning, fast models for execution:

```python
# Thinking model creates the plan
plan = thinking_model.complete(f"Create a plan to: {goal}")

# Fast model executes each step
for step in plan.steps:
    result = fast_model.complete(f"Execute: {step}")
```

### Verification Loops

Use thinking model to verify fast model outputs:

```python
draft = fast_model.complete(query)
verification = thinking_model.complete(
    f"Verify this response is correct: {draft}"
)
if verification.has_issues:
    return thinking_model.complete(query)  # Redo properly
return draft
```

---

## Practical Example

```python
from openai import OpenAI
client = OpenAI()

# Complex reasoning task
problem = """
A train leaves Station A at 9:00 AM traveling 60 mph toward Station B.
Another train leaves Station B at 10:00 AM traveling 80 mph toward Station A.
The stations are 280 miles apart.
At what time do the trains meet?
"""

# Using thinking model
response = client.chat.completions.create(
    model="o1-preview",  # Thinking model
    messages=[{"role": "user", "content": problem}]
)

# Model internally reasons through:
# - Distance, rate, time relationships
# - Relative motion
# - Set up equations
# - Solve and verify
# Returns correct answer with high confidence
```

---

## Current State (2026)

Thinking models are relatively new:
- **o1 (OpenAI):** Released late 2024, shows strong reasoning
- **Extended thinking (Anthropic):** Claude's reasoning mode
- **Gemini thinking:** Google's approach
- **Research:** Rapid progress in this area

Expect significant advances in coming years.

---

## Limitations

- **Not always better:** Overkill for simple tasks
- **Costly:** Token usage can be 10-100x higher
- **Latency:** Inappropriate for real-time applications
- **Opaque reasoning:** Internal thoughts often hidden
- **New failure modes:** Can reason itself into wrong answers

---

## Related Elements

- **[LLM](/docs/periodic-table/models/llm):** Foundation models
- **[Agents](/docs/periodic-table/reactive/agents):** Use thinking for planning
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measure reasoning quality
- **[Interpretability](/docs/periodic-table/validation/interpretability):** Understanding reasoning

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand what thinking models are |
| **Practitioner** | Know when to use thinking vs. standard models |
| **Expert** | Design systems optimizing reasoning vs. speed tradeoffs |
