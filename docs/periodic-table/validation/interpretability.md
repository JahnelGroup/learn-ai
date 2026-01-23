---
id: interpretability
title: "In - Interpretability"
sidebar_position: 5
---

# In — Interpretability

| | |
|---|---|
| **Symbol** | In |
| **Name** | Interpretability |
| **Family** | Validation |
| **Row** | 4 - Emerging |

---

## What It Is

**Interpretability is understanding why models do what they do.** Peering inside the black box, finding neurons responsible for specific behaviors. Frontier safety research with practical applications.

---

## Why It Matters

Without interpretability:
- Failures are mysterious—hard to fix what you don't understand
- Trust is limited—stakeholders want explanations
- Safety is uncertain—hidden behaviors may emerge
- Debugging is guesswork—no systematic approach

---

## Core Concepts

### Levels of Interpretability

| Level | What It Reveals |
|-------|-----------------|
| **Input attribution** | Which inputs influenced output? |
| **Attention visualization** | What did the model "look at"? |
| **Probing** | What knowledge is encoded? |
| **Mechanistic** | How do internal circuits work? |
| **Behavioral** | How does the model behave across inputs? |

### Common Techniques

**Attention analysis:**
Visualize which tokens the model attends to
- Helpful for understanding focus
- Doesn't fully explain reasoning

**Probing classifiers:**
Train classifiers on hidden states to see what's encoded
- "Is part-of-speech information encoded in layer 3?"
- Reveals internal representations

**Activation patching:**
Modify internal states to see effects
- "What happens if we change this neuron?"
- Causal understanding

**Feature visualization:**
Find inputs that maximally activate specific neurons
- "What does this neuron 'look for'?"
- Circuit-level understanding

---

## Practical Applications

### 1. Debugging Failures

**Problem:** Model gives wrong answers about dates.

**Interpretability approach:**
1. Probe for date representation in hidden states
2. Find circuits responsible for date reasoning
3. Discover representation encodes dates incorrectly
4. Target fine-tuning or prompting at the issue

### 2. Understanding Biases

**Problem:** Model shows demographic bias.

**Interpretability approach:**
1. Identify features correlated with biased outputs
2. Find which internal components encode demographic info
3. Understand how that info affects downstream decisions
4. Develop targeted interventions

### 3. Verifying Safety

**Problem:** Need to ensure model won't produce harmful content.

**Interpretability approach:**
1. Map circuits involved in safety behaviors
2. Verify safety features are robust
3. Test edge cases where safety might fail
4. Build confidence in deployment

---

## Current State (2026)

Interpretability is rapidly advancing but still limited:

| Aspect | Status |
|--------|--------|
| **Small models** | Good understanding possible |
| **Large models** | Still very challenging |
| **Specific behaviors** | Increasingly tractable |
| **General understanding** | Far from complete |
| **Practical tools** | Emerging but immature |

### Recent Developments

- **Sparse autoencoders:** Finding interpretable features
- **Circuit analysis:** Mapping computation paths
- **Constitutional AI insights:** Understanding value alignment
- **Attention head functions:** Cataloging what heads do

---

## Tools and Resources

| Tool | Purpose |
|------|---------|
| **TransformerLens** | Mechanistic interpretability |
| **Captum** | PyTorch interpretability |
| **SHAP** | Feature attribution |
| **Anthropic's research** | Cutting-edge techniques |

---

## Practical Example

```python
from transformer_lens import HookedTransformer

# Load model with hooks for inspection
model = HookedTransformer.from_pretrained("gpt2")

# Run with caching to capture internal states
prompt = "The capital of France is"
logits, cache = model.run_with_cache(prompt)

# Examine attention patterns
attention = cache["attn", 0]  # Layer 0 attention
print(attention.shape)  # [batch, head, query_pos, key_pos]

# Analyze which positions attend to which
# Visualize, probe, patch as needed
```

---

## The Interpretability Gap

Current AI systems are deployed faster than we can understand them. This creates tension:

- **Capability** advances quickly
- **Understanding** advances slowly
- **Deployment pressure** is high
- **Safety requirements** demand understanding

Interpretability research aims to close this gap.

---

## Related Elements

- **[Evaluation](/docs/periodic-table/validation/evaluation):** Behavioral understanding
- **[Red Team](/docs/periodic-table/validation/red-team):** Finding hidden behaviors
- **[LLM](/docs/periodic-table/models/llm):** What we're trying to understand
- **[Thinking](/docs/periodic-table/models/thinking):** Reasoning transparency

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Awareness of the interpretability challenge |
| **Practitioner** | Use basic attribution tools |
| **Expert** | Debug model behavior with interpretability techniques |
