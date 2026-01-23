---
id: fine-tuning
title: "Ft - Fine-tuning"
sidebar_position: 4
---

# Ft — Fine-tuning

| | |
|---|---|
| **Symbol** | Ft |
| **Name** | Fine-tuning |
| **Family** | Retrieval |
| **Row** | 3 - Deployment |

---

## What It Is

**Fine-tuning is adapting a base model by training on specific data.** It bakes knowledge directly into the model's weights. Domain expertise becomes part of the model itself.

Unlike RAG (which retrieves at runtime), fine-tuning permanently modifies the model.

---

## Why It Matters

Fine-tuning enables:
- Consistent style or tone across outputs
- Domain-specific knowledge without retrieval
- Faster inference (no retrieval step)
- Behavior modification the model resists via prompting

---

## Core Concepts

### Fine-tuning vs. RAG

| Aspect | Fine-tuning | RAG |
|--------|-------------|-----|
| **Knowledge** | Baked into weights | Retrieved at runtime |
| **Updates** | Requires retraining | Update database anytime |
| **Cost** | Upfront training cost | Per-query retrieval cost |
| **Latency** | No retrieval overhead | Retrieval adds latency |
| **Best for** | Style, behavior, static knowledge | Dynamic, frequently updated info |

### When to Fine-tune

**Good candidates:**
- Consistent output format or style
- Domain-specific terminology
- Behavior the base model resists
- High-volume, similar queries

**Poor candidates:**
- Rapidly changing information
- Information that needs citations
- One-off customization needs
- When you lack quality training data

### Fine-tuning Process

1. **Prepare data:** Create prompt-completion pairs
2. **Format:** Convert to required format (JSONL typically)
3. **Upload:** Send to model provider
4. **Train:** Provider fine-tunes the model
5. **Evaluate:** Test on held-out examples
6. **Deploy:** Use your custom model endpoint

### Data Requirements

| Factor | Guidance |
|--------|----------|
| **Quantity** | Minimum 50-100 examples; 1000+ for complex tasks |
| **Quality** | Garbage in, garbage out |
| **Diversity** | Cover the range of expected inputs |
| **Format** | Consistent structure across examples |

---

## Practical Example

**Use case:** Customer support bot with company voice

**Training data format:**
```json
{"messages": [
  {"role": "system", "content": "You are Acme Corp's support assistant. Be helpful, friendly, and always reference our knowledge base."},
  {"role": "user", "content": "How do I reset my password?"},
  {"role": "assistant", "content": "Happy to help with that! Here's how to reset your password:\n\n1. Go to acme.com/reset\n2. Enter your email address\n3. Click the link we send you\n4. Choose a new password\n\nThe link expires in 24 hours. Let me know if you need anything else!"}
]}
```

**Result:** Model consistently uses Acme's friendly tone and formatting.

---

## Common Pitfalls

- **Overfitting:** Model memorizes training data, fails on new inputs
- **Catastrophic forgetting:** Loses general capabilities
- **Poor data quality:** Model learns bad habits
- **Insufficient examples:** Not enough signal to learn
- **Neglecting evaluation:** No way to know if it worked

---

## Related Elements

- **[LLM](/docs/periodic-table/models/llm):** The base model being fine-tuned
- **[Synthetic](/docs/periodic-table/retrieval/synthetic):** Generate training data
- **[RAG](/docs/periodic-table/orchestration/rag):** Alternative approach
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measuring improvement

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand when fine-tuning vs. RAG |
| **Practitioner** | Evaluate if fine-tuning is appropriate |
| **Expert** | Prepare datasets and execute fine-tuning projects |
