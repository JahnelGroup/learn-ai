---
id: small-models
title: "Sm - Small Models"
sidebar_position: 4
---

# Sm — Small Models

| | |
|---|---|
| **Symbol** | Sm |
| **Name** | Small Models |
| **Family** | Models |
| **Row** | 3 - Deployment |

---

## What It Is

**Small models are distilled, specialized models—fast, cheap, and efficient.** They run on phones, edge devices, or at high volume. When you don't need frontier capability, small models deliver 90% of value at 10% of cost.

---

## Why It Matters

Not every task needs GPT-4:
- **Cost:** Small models are 10-100x cheaper
- **Latency:** Faster inference, better user experience
- **Privacy:** Can run locally, no data leaves device
- **Scale:** Affordable at high volume
- **Availability:** Self-hosted means no API dependencies

---

## Core Concepts

### Size Spectrum

| Category | Parameters | Examples |
|----------|------------|----------|
| **Tiny** | Under 1B | DistilBERT, TinyLlama |
| **Small** | 1-7B | Llama 3 8B, Mistral 7B |
| **Medium** | 7-30B | Llama 3 70B, Mixtral |
| **Large** | 30-100B | GPT-4, Claude Opus |
| **Frontier** | 100B+ | Next-gen models |

### How Small Models Are Created

**Distillation:**
Train a small model to mimic a large model's behavior

**Quantization:**
Reduce numerical precision (FP32 → INT8 → INT4)

**Pruning:**
Remove less important weights

**Architecture optimization:**
Efficient designs from the start (Mamba, etc.)

### Capability Tradeoffs

| Capability | Large Models | Small Models |
|------------|--------------|--------------|
| **Complex reasoning** | Strong | Weaker |
| **Following instructions** | Excellent | Good |
| **Knowledge breadth** | Very wide | Narrower |
| **Creative writing** | High quality | Adequate |
| **Code generation** | Strong | Good for common patterns |
| **Consistency** | More consistent | More variance |

---

## When to Use Small Models

### Good Fit

| Use Case | Why Small Works |
|----------|-----------------|
| **Classification** | Task is well-defined |
| **Extraction** | Pattern matching |
| **Simple Q&A** | FAQ-style responses |
| **Embeddings** | Specialized models exist |
| **High volume** | Cost matters at scale |
| **Edge deployment** | Device constraints |
| **Privacy-critical** | Keep data local |

### Poor Fit

| Use Case | Why Large Is Better |
|----------|---------------------|
| **Complex reasoning** | Needs more capability |
| **Novel tasks** | Needs generalization |
| **Long documents** | Context limitations |
| **High stakes** | Quality requirements |

---

## Model Selection Framework

```
Start
  │
  ▼
Is the task simple and well-defined?
  ├─ Yes → Try small model first
  │        │
  │        ▼
  │        Evaluate quality
  │        ├─ Acceptable → Use small model ✓
  │        └─ Not acceptable → Try larger
  │
  └─ No → Requires complex reasoning?
          ├─ Yes → Use frontier model
          └─ No → Medium model, then evaluate
```

---

## Practical Example: Model Routing

```python
def select_model(query, complexity_score):
    """Route queries to appropriate model based on complexity."""

    if complexity_score < 0.3:
        # Simple query: use cheap, fast model
        return "gpt-3.5-turbo"
    elif complexity_score < 0.7:
        # Medium complexity
        return "gpt-4-turbo"
    else:
        # Complex: need best model
        return "gpt-4"

# Or use a small model to classify, then route
classifier_response = small_model.classify(query)
model = select_model(query, classifier_response.complexity)
response = call_model(model, query)
```

---

## Running Small Models

### Self-Hosted Options

| Tool | Purpose |
|------|---------|
| **Ollama** | Easy local model running |
| **vLLM** | High-performance serving |
| **llama.cpp** | CPU-optimized inference |
| **TensorRT-LLM** | NVIDIA GPU optimization |

### Cloud Options

| Provider | Offering |
|----------|----------|
| **Together AI** | Open model hosting |
| **Anyscale** | Scalable endpoints |
| **Replicate** | Simple model deployment |
| **Hugging Face** | Inference endpoints |

---

## Cost Comparison Example

```
Task: Process 1M customer support tickets

Frontier model (GPT-4):
  ~500 tokens/ticket × 1M = 500M tokens
  ~$15,000 for input + output

Small model (Llama 3 8B, self-hosted):
  Server cost: ~$500/month
  Can process 1M+ tickets/month

Savings: 95%+ reduction in ongoing costs
```

---

## Related Elements

- **[LLM](/docs/periodic-table/models/llm):** Larger alternatives
- **[Fine-tuning](/docs/periodic-table/retrieval/fine-tuning):** Specialize small models
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Compare model quality
- **[Context](/docs/periodic-table/orchestration/context):** Smaller context windows

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand when small models are appropriate |
| **Practitioner** | Demonstrate model selection with cost/performance analysis |
| **Expert** | Design systems with optimal model routing |
