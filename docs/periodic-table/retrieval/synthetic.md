---
id: synthetic
title: "Sy - Synthetic Data"
sidebar_position: 5
---

# Sy — Synthetic Data

| | |
|---|---|
| **Symbol** | Sy |
| **Name** | Synthetic Data |
| **Family** | Retrieval |
| **Row** | 4 - Emerging |

---

## What It Is

**Synthetic data is AI-generated training data for AI.** When real examples are scarce or expensive, synthetic data fills the gap. Increasingly important as data demands grow.

Use one model to generate data that trains another.

---

## Why It Matters

Quality training data is often the bottleneck in AI development. Synthetic data enables:
- Bootstrapping when real data is limited
- Augmenting datasets for better coverage
- Generating edge cases that rarely occur naturally
- Protecting privacy (no real user data needed)

---

## Core Concepts

### Types of Synthetic Data

| Type | Description | Use Case |
|------|-------------|----------|
| **Augmentation** | Variations of real data | Expand limited datasets |
| **Generation** | Entirely AI-created examples | Bootstrap new domains |
| **Distillation** | Capturing larger model behavior | Train smaller models |
| **Simulation** | Environment-generated data | Robotics, games |

### Generation Techniques

1. **Prompt-based:** Ask an LLM to generate examples
2. **Template-based:** Fill in templates with variations
3. **Model distillation:** Have a strong model label data
4. **Paraphrasing:** Rewrite existing examples

### Quality Challenges

| Risk | Mitigation |
|------|------------|
| **Homogeneity** | Diverse prompts, multiple generators |
| **Errors propagate** | Human validation on samples |
| **Model collapse** | Mix with real data |
| **Bias amplification** | Audit for bias patterns |

---

## Practical Example

**Problem:** Need 1000 customer support examples, only have 50.

**Approach:**
```python
real_examples = load_examples()  # 50 real examples

synthetic_prompt = """
Given this real customer support exchange:
{example}

Generate 5 similar but different exchanges that:
- Use different wording
- Cover related but distinct issues
- Maintain the same quality and tone

Format each as JSON with 'customer' and 'agent' fields.
"""

synthetic_data = []
for example in real_examples:
    response = llm.generate(synthetic_prompt.format(example=example))
    synthetic_data.extend(parse_examples(response))

# Now have ~300 synthetic examples
# Combine with real data, validate a sample
training_data = real_examples + validated_sample(synthetic_data)
```

---

## Best Practices

1. **Always validate:** Humans should review a sample
2. **Mix with real data:** Don't train on 100% synthetic
3. **Diversify generation:** Multiple prompts, temperatures
4. **Track provenance:** Know what's real vs. synthetic
5. **Watch for leakage:** Ensure test data isn't synthetic

---

## Current State (2026)

Synthetic data generation is rapidly maturing. Models are getting better at generating high-quality training data. However, risks like model collapse (training on AI-generated content degrades quality) require careful management.

---

## Related Elements

- **[Fine-tuning](/docs/periodic-table/retrieval/fine-tuning):** Primary use of synthetic data
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Validate synthetic quality
- **[LLM](/docs/periodic-table/models/llm):** Generates synthetic data

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand what synthetic data is |
| **Practitioner** | Generate and validate synthetic examples |
| **Expert** | Design synthetic data pipelines with quality controls |
