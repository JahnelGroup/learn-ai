---
id: multi-modal
title: "Mm - Multi-modal"
sidebar_position: 3
---

# Mm — Multi-modal

| | |
|---|---|
| **Symbol** | Mm |
| **Name** | Multi-modal |
| **Family** | Models |
| **Row** | 2 - Compositions |

---

## What It Is

**Multi-modal models process multiple input types—text, images, audio, video.** See a chart and explain it. Hear a question and answer it. Unified intelligence across modalities.

---

## Why It Matters

The world is multi-modal. Limiting AI to text-only means missing:
- Visual understanding (charts, diagrams, screenshots)
- Audio processing (speech, music, sounds)
- Video analysis (demonstrations, surveillance)
- Document understanding (PDFs with layouts)

Multi-modal capabilities open entirely new use cases.

---

## Core Concepts

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

---

## Use Cases

### Vision

| Use Case | Example |
|----------|---------|
| **Chart analysis** | "Explain the trends in this graph" |
| **UI understanding** | "What does this screenshot show?" |
| **Document extraction** | "Extract the table from this PDF" |
| **Image description** | "Describe what's happening in this photo" |
| **Visual QA** | "What color is the car in the image?" |

### Audio

| Use Case | Example |
|----------|---------|
| **Transcription** | Convert speech to text |
| **Translation** | Translate spoken language |
| **Summarization** | Summarize a meeting recording |
| **Analysis** | "What emotion is expressed?" |

### Video

| Use Case | Example |
|----------|---------|
| **Summarization** | "What happens in this video?" |
| **Action recognition** | "Is the person walking or running?" |
| **Temporal QA** | "What happens after the door opens?" |

---

## Practical Example

```python
from openai import OpenAI
import base64

client = OpenAI()

# Read and encode image
with open("chart.png", "rb") as f:
    image_data = base64.b64encode(f.read()).decode()

# Send to vision model
response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Analyze this chart. What are the key trends?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/png;base64,{image_data}"
                    }
                }
            ]
        }
    ]
)

print(response.choices[0].message.content)
```

---

## Considerations

### Image Quality

| Factor | Impact |
|--------|--------|
| **Resolution** | Higher = more detail, more tokens |
| **Clarity** | Blurry images = worse understanding |
| **Relevance** | Crop to relevant content |
| **Format** | JPEG, PNG widely supported |

### Token Costs

Images are tokenized differently than text:
- A typical image ≈ 85-1700 tokens depending on size/detail
- Video = many frames = many tokens
- Cost can add up quickly

### Limitations

- **Hallucination:** Models may "see" things not present
- **OCR errors:** Text in images may be misread
- **Spatial reasoning:** Understanding layouts can be imperfect
- **Small details:** Fine print may be missed
- **Sensitive content:** Guardrails apply to visual content too

---

## When to Use Multi-modal

**Good fit:**
- Analyzing documents with visual elements
- Processing screenshots or UI mockups
- Understanding charts and diagrams
- Transcribing and analyzing audio
- Any task where visual context matters

**Consider alternatives when:**
- Text-only would suffice
- Image quality is poor
- Cost is a concern (images are expensive)
- Latency requirements are tight

---

## Related Elements

- **[LLM](/docs/periodic-table/models/llm):** Text-only foundation
- **[Context](/docs/periodic-table/orchestration/context):** Images consume context
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measuring visual understanding
- **[Guardrails](/docs/periodic-table/validation/guardrails):** Visual content filtering

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand multi-modal capabilities |
| **Practitioner** | Build features using image or audio input |
| **Expert** | Optimize multi-modal pipelines for cost and quality |
