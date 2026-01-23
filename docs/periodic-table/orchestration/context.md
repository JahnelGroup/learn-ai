---
id: context
title: "Cw - Context"
sidebar_position: 2
---

# Cw — Context Windows

| | |
|---|---|
| **Symbol** | Cw |
| **Name** | Context Windows |
| **Family** | Orchestration |
| **Row** | 1 - Primitives |

---

## What It Is

**Context windows are the limited space an LLM can "see" at once.** Managing what goes into context is fundamental orchestration. Every token costs money and attention.

Think of it as the model's working memory—everything it needs to know must fit in this window.

---

## Why It Matters

Understanding context windows is crucial because:
- There's a hard limit on what the model can process
- Not all context is equal—position and relevance matter
- Token costs scale linearly with context size
- "Lost in the middle" phenomenon affects retrieval
- Context management is often the difference between success and failure

---

## Core Concepts

### Context Window Sizes (2026)

| Model | Context Window |
|-------|----------------|
| GPT-4 Turbo | 128K tokens |
| Claude 3 | 200K tokens |
| Gemini 1.5 | 1M+ tokens |
| Llama 3 | 8K-128K tokens |

### What Consumes Context

| Component | Description |
|-----------|-------------|
| **System prompt** | Instructions, persona, rules |
| **Conversation history** | Previous messages |
| **Retrieved context** | RAG results, documents |
| **User input** | Current message |
| **Output** | Generated response |

### The "Lost in the Middle" Problem

Research shows models pay most attention to:
1. The **beginning** of context (primacy)
2. The **end** of context (recency)
3. **Less attention** to the middle

**Implication:** Put important information at the start or end, not buried in the middle.

### Token Estimation

| Content Type | Rough Estimate |
|--------------|----------------|
| English text | ~4 characters per token |
| Code | ~3 characters per token |
| 1 page of text | ~400-500 tokens |
| Average email | ~200-400 tokens |

---

## Context Management Strategies

### 1. Compression

Summarize long content to preserve meaning in fewer tokens.

### 2. Selection

Only include what's relevant to the current query.

### 3. Chunking

Break documents into pieces, retrieve only relevant chunks.

### 4. Sliding Window

Keep recent history, summarize or drop older content.

### 5. Hierarchical

Summary of full context + detailed recent context.

---

## Practical Example

**Problem:** 50-page document doesn't fit in context

**Solution: Hierarchical approach**
```
Context structure:
├── System prompt (200 tokens)
├── Document summary (500 tokens)
├── Relevant sections from RAG (2000 tokens)
├── Recent conversation (1000 tokens)
└── User question (100 tokens)

Total: ~3800 tokens (fits easily, leaves room for response)
```

---

## Common Pitfalls

- **Stuffing everything:** More context ≠ better results
- **Ignoring position:** Burying critical info in the middle
- **Forgetting output:** Context includes generated response
- **Static allocation:** Not adapting to query needs
- **Cost blindness:** Large contexts get expensive at scale

---

## Related Elements

- **[Prompts](/docs/periodic-table/reactive/prompts):** What goes in context
- **[RAG](/docs/periodic-table/orchestration/rag):** Selective context filling
- **[LLM](/docs/periodic-table/models/llm):** Defines context limits
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measure context impact

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand context limits and token costs |
| **Practitioner** | Implement context management strategies |
| **Expert** | Optimize context for cost/quality tradeoffs |
