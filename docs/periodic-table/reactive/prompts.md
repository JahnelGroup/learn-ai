---
id: prompts
title: "Pr - Prompts"
sidebar_position: 2
---

# Pr — Prompts

| | |
|---|---|
| **Symbol** | Pr |
| **Name** | Prompts |
| **Family** | Reactive |
| **Row** | 1 - Primitives |

---

## What It Is

**Prompts are the instructions given to an AI model.** They are the fundamental interface between human intent and AI capability.

One word change can completely transform output. A prompt is not just a question—it's a specification, a context setter, and a constraint definer all in one.

---

## Why It Matters

Prompts are the most accessible and powerful lever you have over AI behavior. Before you reach for complex solutions like fine-tuning or agents, master prompting. Most AI problems are actually prompting problems in disguise.

---

## Core Concepts

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

### Common Pitfalls

- **Vague instructions:** "Make it better" vs "Improve clarity by shortening sentences"
- **Missing context:** Assuming the model knows your codebase
- **No examples:** Expecting perfect format without showing one
- **Overloading:** Asking for too many things at once

---

## Practical Example

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

---

## Learning Resources

- Practice with different prompt patterns
- Keep a log of prompts that work well
- Iterate: the first prompt is rarely the best

---

## Related Elements

- **[Function Calling](/docs/periodic-table/reactive/function-calling):** When prompts trigger tool use
- **[Context](/docs/periodic-table/orchestration/context):** The space where prompts live
- **[LLM](/docs/periodic-table/models/llm):** What processes your prompts

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Write effective prompts with clear structure and iteration |
| **Practitioner** | Design prompt templates for production systems |
| **Expert** | Optimize prompts for cost, latency, and reliability |
