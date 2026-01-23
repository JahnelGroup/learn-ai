---
id: llm
title: "Lg - LLM"
sidebar_position: 2
---

# Lg — LLM

| | |
|---|---|
| **Symbol** | Lg |
| **Name** | Large Language Models |
| **Family** | Models |
| **Row** | 1 - Primitives |

---

## What It Is

**Large Language Models (LLMs) are the core reasoning engines—GPT-4, Claude, Gemini, Llama, and others.** Trained on vast text, they're the primitive capability everything else builds on.

---

## Why It Matters

LLMs are the foundation of modern AI:
- All other elements in the periodic table depend on them
- They provide the reasoning that powers agents, RAG, and more
- Understanding their capabilities and limitations is essential
- Model selection impacts cost, quality, and capabilities

---

## Core Concepts

### How LLMs Work (High Level)

1. **Training:** Learn patterns from massive text datasets
2. **Prediction:** Given input tokens, predict the next token
3. **Generation:** Repeat prediction to produce text
4. **Instruction tuning:** Fine-tuned to follow instructions
5. **RLHF:** Refined via human feedback

### Key Properties

| Property | Description |
|----------|-------------|
| **Parameters** | Model size (7B, 70B, 175B, etc.) |
| **Context window** | How much text it can process |
| **Training data** | What knowledge it has |
| **Knowledge cutoff** | How recent its information is |
| **Capabilities** | Reasoning, coding, creativity, etc. |

### Major Model Families (2026)

| Provider | Models | Notes |
|----------|--------|-------|
| **OpenAI** | GPT-4, GPT-4 Turbo | Strong general capabilities |
| **Anthropic** | Claude 3.5, Claude 3 Opus | Strong reasoning, longer context |
| **Google** | Gemini Pro, Ultra | Multimodal, large context |
| **Meta** | Llama 3 | Open weights |
| **Mistral** | Mixtral, Mistral Large | Efficient, European |

### Model Selection Factors

| Factor | Consideration |
|--------|---------------|
| **Task fit** | Which model excels at your task? |
| **Cost** | Price per token varies 100x |
| **Latency** | Response time requirements |
| **Context** | How much input you need |
| **Privacy** | Self-hosted vs. API |
| **Features** | Tool use, vision, etc. |

---

## Capabilities and Limitations

### What LLMs Can Do Well

- Text generation and transformation
- Summarization and extraction
- Code generation and explanation
- Question answering (with context)
- Creative writing and brainstorming
- Following complex instructions
- Reasoning through problems

### Known Limitations

| Limitation | Description |
|------------|-------------|
| **Hallucination** | Generating plausible-sounding false information |
| **Knowledge cutoff** | No awareness of recent events |
| **Math errors** | Unreliable arithmetic |
| **Inconsistency** | Different answers to same question |
| **No memory** | Each conversation is independent |
| **Context limits** | Can't process unlimited text |

---

## Practical Considerations

### Prompting Different Models

Each model family has quirks:
- **GPT models:** Respond well to structured prompts
- **Claude:** Excels with detailed context, handles long documents
- **Gemini:** Strong with multimodal inputs
- **Open source:** May need more explicit instructions

### Cost Management

```
Rough cost comparison (per 1M tokens, 2026):
- GPT-4 Turbo:     ~$10 input / ~$30 output
- Claude 3 Opus:   ~$15 input / ~$75 output
- GPT-3.5:         ~$0.50 input / ~$1.50 output
- Llama 3 (self):  Infrastructure cost only
```

### When to Use Which

| Use Case | Recommendation |
|----------|----------------|
| **Complex reasoning** | Frontier models (GPT-4, Claude Opus) |
| **High volume, simple** | Smaller/cheaper models |
| **Privacy-critical** | Self-hosted (Llama, Mistral) |
| **Long documents** | Large context models (Claude, Gemini) |
| **Multimodal** | Vision-capable models |

---

## Common Pitfalls

- **Over-relying on capabilities:** LLMs aren't databases of facts
- **Ignoring costs:** Token costs add up at scale
- **One-model thinking:** Different tasks may need different models
- **Hallucination blindness:** Not verifying important claims
- **Prompt sensitivity:** Same meaning, different phrasing, different results

---

## Related Elements

- **[Prompts](/docs/periodic-table/reactive/prompts):** How you communicate with LLMs
- **[Context](/docs/periodic-table/orchestration/context):** The LLM's working memory
- **[Multi-modal](/docs/periodic-table/models/multi-modal):** LLMs with vision/audio
- **[Small Models](/docs/periodic-table/models/small-models):** Efficient alternatives
- **[Thinking](/docs/periodic-table/models/thinking):** Reasoning-enhanced LLMs

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand capabilities, limitations, and hallucination risks |
| **Practitioner** | Select appropriate models for use cases |
| **Expert** | Optimize model selection for cost/quality tradeoffs |
