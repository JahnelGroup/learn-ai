---
id: models
title: Models Family
sidebar_position: 6
---

# Models Family (G5)

**These elements are the raw intelligence that powers everything else.**

All the orchestration, retrieval, and validation in the world doesn't matter without capable models underneath. This family covers the spectrum from general-purpose LLMs to specialized variants.

| Element | Name | Row | Description |
|---------|------|-----|-------------|
| **Lg** | [LLM](#lg--llm) | Primitives | The core reasoning engines |
| **Mm** | [Multi-modal](#mm--multi-modal) | Compositions | Models that process text, images, audio |
| **Sm** | [Small Models](#sm--small-models) | Deployment | Fast, cheap, efficient alternatives |
| **Th** | [Thinking Models](#th--thinking-models) | Emerging | Models that reason before answering |

---

## Lg — LLM

```
Position in Periodic Table:

G5: Models Family
┌──────────────────────────┐
│  → [LLM]                 │  Row 1: Primitives
│     Multi-modal          │  Row 2: Compositions
│     Small Models         │  Row 3: Deployment
│     Thinking Models      │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**Large Language Models (LLMs) are the core reasoning engines—GPT-4, Claude, Gemini, Llama, and others.** Trained on vast text, they're the primitive capability everything else builds on.

### Why It Matters

LLMs are the foundation of modern AI:
- All other elements in the periodic table depend on them
- They provide the reasoning that powers agents, RAG, and more
- Understanding their capabilities and limitations is essential
- Model selection impacts cost, quality, and capabilities

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

### Capabilities and Limitations

**What LLMs Can Do Well:**
- Text generation and transformation
- Summarization and extraction
- Code generation and explanation
- Question answering (with context)
- Creative writing and brainstorming
- Following complex instructions
- Reasoning through problems

**Known Limitations:**

| Limitation | Description |
|------------|-------------|
| **Hallucination** | Generating plausible-sounding false information |
| **Knowledge cutoff** | No awareness of recent events |
| **Math errors** | Unreliable arithmetic |
| **Inconsistency** | Different answers to same question |
| **No memory** | Each conversation is independent |
| **Context limits** | Can't process unlimited text |

### When to Use Which

| Use Case | Recommendation |
|----------|----------------|
| **Complex reasoning** | Frontier models (GPT-4, Claude Opus) |
| **High volume, simple** | Smaller/cheaper models |
| **Privacy-critical** | Self-hosted (Llama, Mistral) |
| **Long documents** | Large context models (Claude, Gemini) |
| **Multimodal** | Vision-capable models |

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand capabilities, limitations, and hallucination risks |
| **Practitioner** | Select appropriate models for use cases |
| **Expert** | Optimize model selection for cost/quality tradeoffs |

---

## Mm — Multi-modal

```
Position in Periodic Table:

G5: Models Family
┌──────────────────────────┐
│     LLM                  │  Row 1: Primitives
│  → [Multi-modal]         │  Row 2: Compositions
│     Small Models         │  Row 3: Deployment
│     Thinking Models      │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**Multi-modal models process multiple input types—text, images, audio, video.** See a chart and explain it. Hear a question and answer it. Unified intelligence across modalities.

### Why It Matters

The world is multi-modal. Limiting AI to text-only means missing:
- Visual understanding (charts, diagrams, screenshots)
- Audio processing (speech, music, sounds)
- Video analysis (demonstrations, surveillance)
- Document understanding (PDFs with layouts)

Multi-modal capabilities open entirely new use cases.

### Modality Types

| Modality | Input Examples | Capabilities |
|----------|----------------|--------------|
| **Vision** | Images, screenshots, diagrams | Description, analysis, OCR |
| **Audio** | Speech, music, sounds | Transcription, understanding |
| **Video** | Recordings, streams | Scene understanding, action recognition |
| **Documents** | PDFs, scans | Layout-aware extraction |

### Multi-modal Model Architectures

**Vision-Language Models (VLMs):**
- Image encoder + language model
- Examples: GPT-4V, Claude 3 Vision, Gemini Pro Vision

**Speech-Language Models:**
- Audio encoder + language model
- Examples: Whisper + GPT, Gemini

**Unified Models:**
- Single model handles multiple modalities
- Examples: Gemini, GPT-4o

### Use Cases

**Vision:**

| Use Case | Example |
|----------|---------|
| **Chart analysis** | "Explain the trends in this graph" |
| **UI understanding** | "What does this screenshot show?" |
| **Document extraction** | "Extract the table from this PDF" |
| **Image description** | "Describe what's happening in this photo" |
| **Visual QA** | "What color is the car in the image?" |

**Audio:**

| Use Case | Example |
|----------|---------|
| **Transcription** | Convert speech to text |
| **Translation** | Translate spoken language |
| **Summarization** | Summarize a meeting recording |
| **Analysis** | "What emotion is expressed?" |

**Video:**

| Use Case | Example |
|----------|---------|
| **Summarization** | "What happens in this video?" |
| **Action recognition** | "Is the person walking or running?" |
| **Temporal QA** | "What happens after the door opens?" |

### Considerations

**Image Quality:**

| Factor | Impact |
|--------|--------|
| **Resolution** | Higher = more detail, more tokens |
| **Clarity** | Blurry images = worse understanding |
| **Relevance** | Crop to relevant content |
| **Format** | JPEG, PNG widely supported |

**Token Costs:**
Images are tokenized differently than text:
- A typical image = 85-1700 tokens depending on size/detail
- Video = many frames = many tokens
- Cost can add up quickly

**Limitations:**
- **Hallucination:** Models may "see" things not present
- **OCR errors:** Text in images may be misread
- **Spatial reasoning:** Understanding layouts can be imperfect
- **Small details:** Fine print may be missed

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand multi-modal capabilities |
| **Practitioner** | Build features using image or audio input |
| **Expert** | Optimize multi-modal pipelines for cost and quality |

---

## Sm — Small Models

```
Position in Periodic Table:

G5: Models Family
┌──────────────────────────┐
│     LLM                  │  Row 1: Primitives
│     Multi-modal          │  Row 2: Compositions
│  → [Small Models]        │  Row 3: Deployment
│     Thinking Models      │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**Small models are distilled, specialized models—fast, cheap, and efficient.** They run on phones, edge devices, or at high volume. When you don't need frontier capability, small models deliver 90% of value at 10% of cost.

### Why It Matters

Not every task needs GPT-4:
- **Cost:** Small models are 10-100x cheaper
- **Latency:** Faster inference, better user experience
- **Privacy:** Can run locally, no data leaves device
- **Scale:** Affordable at high volume
- **Availability:** Self-hosted means no API dependencies

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
Reduce numerical precision (FP32 to INT8 to INT4)

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

### When to Use Small Models

**Good Fit:**

| Use Case | Why Small Works |
|----------|-----------------|
| **Classification** | Task is well-defined |
| **Extraction** | Pattern matching |
| **Simple Q&A** | FAQ-style responses |
| **Embeddings** | Specialized models exist |
| **High volume** | Cost matters at scale |
| **Edge deployment** | Device constraints |
| **Privacy-critical** | Keep data local |

**Poor Fit:**

| Use Case | Why Large Is Better |
|----------|---------------------|
| **Complex reasoning** | Needs more capability |
| **Novel tasks** | Needs generalization |
| **Long documents** | Context limitations |
| **High stakes** | Quality requirements |

### Running Small Models

**Self-Hosted Options:**

| Tool | Purpose |
|------|---------|
| **Ollama** | Easy local model running |
| **vLLM** | High-performance serving |
| **llama.cpp** | CPU-optimized inference |
| **TensorRT-LLM** | NVIDIA GPU optimization |

**Cloud Options:**

| Provider | Offering |
|----------|----------|
| **Together AI** | Open model hosting |
| **Anyscale** | Scalable endpoints |
| **Replicate** | Simple model deployment |
| **Hugging Face** | Inference endpoints |

### Cost Comparison Example

```
Task: Process 1M customer support tickets

Frontier model (GPT-4):
  ~500 tokens/ticket x 1M = 500M tokens
  ~$15,000 for input + output

Small model (Llama 3 8B, self-hosted):
  Server cost: ~$500/month
  Can process 1M+ tickets/month

Savings: 95%+ reduction in ongoing costs
```

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand when small models are appropriate |
| **Practitioner** | Demonstrate model selection with cost/performance analysis |
| **Expert** | Design systems with optimal model routing |

---

## Th — Thinking Models

```
Position in Periodic Table:

G5: Models Family
┌──────────────────────────┐
│     LLM                  │  Row 1: Primitives
│     Multi-modal          │  Row 2: Compositions
│     Small Models         │  Row 3: Deployment
│  → [Thinking Models]     │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**Thinking models reason before answering.** Chain-of-thought is built into their architecture. They spend compute time thinking, not just generating. The smartest models today use this approach.

Examples: OpenAI's o1, Claude's extended thinking mode.

### Why It Matters

Traditional LLMs generate the first plausible response. Thinking models:
- **Consider alternatives** before committing
- **Catch errors** through internal verification
- **Handle complexity** that stumps regular models
- **Show their work** (sometimes) for transparency

For hard problems, thinking models significantly outperform.

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

### Trade-offs

**Latency vs. Quality:**
```
Simple question: "What's the capital of France?"
├─ Standard model: 200ms, "Paris" ✓
└─ Thinking model: 5s, "Paris" ✓ (wasted time)

Complex problem: "Prove this mathematical theorem"
├─ Standard model: 500ms, often wrong ✗
└─ Thinking model: 60s, usually correct ✓
```

**Cost Considerations:**
Thinking models use more tokens internally:
- A problem that takes 100 tokens to state
- May require 5,000+ tokens of internal reasoning
- Billed accordingly

**Use strategically on problems that benefit.**

### Design Patterns

**Selective Reasoning:**
Route simple queries to fast models, complex to thinking:

```python
def answer_query(query):
    complexity = assess_complexity(query)

    if complexity < 0.5:
        return fast_model.complete(query)
    else:
        return thinking_model.complete(query)
```

**Hybrid Approaches:**
Use thinking for planning, fast models for execution:

```python
# Thinking model creates the plan
plan = thinking_model.complete(f"Create a plan to: {goal}")

# Fast model executes each step
for step in plan.steps:
    result = fast_model.complete(f"Execute: {step}")
```

**Verification Loops:**
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

### Current State (2026)

Thinking models are relatively new:
- **o1 (OpenAI):** Released late 2024, shows strong reasoning
- **Extended thinking (Anthropic):** Claude's reasoning mode
- **Gemini thinking:** Google's approach
- **Research:** Rapid progress in this area

Expect significant advances in coming years.

### Limitations

- **Not always better:** Overkill for simple tasks
- **Costly:** Token usage can be 10-100x higher
- **Latency:** Inappropriate for real-time applications
- **Opaque reasoning:** Internal thoughts often hidden
- **New failure modes:** Can reason itself into wrong answers

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand what thinking models are |
| **Practitioner** | Know when to use thinking vs. standard models |
| **Expert** | Design systems optimizing reasoning vs. speed tradeoffs |
