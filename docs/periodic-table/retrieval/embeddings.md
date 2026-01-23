---
id: embeddings
title: "Em - Embeddings"
sidebar_position: 2
---

# Em — Embeddings

| | |
|---|---|
| **Symbol** | Em |
| **Name** | Embeddings |
| **Family** | Retrieval |
| **Row** | 1 - Primitives |

---

## What It Is

**Embeddings are numerical representations of meaning.** Text becomes vectors (lists of numbers) where similar meanings have similar numbers. The foundation of semantic search and memory.

"Happy" and "joyful" will have similar embeddings, even though they share no letters.

---

## Why It Matters

Embeddings unlock semantic understanding. Instead of searching for exact keyword matches, you can search by meaning. This enables:
- Finding relevant documents even when words differ
- Clustering similar content automatically
- Measuring how related two pieces of text are
- Building the foundation for RAG systems

---

## Core Concepts

### How Embeddings Work

1. Text goes into an embedding model
2. Model outputs a vector (e.g., 1536 numbers for OpenAI's ada-002)
3. Vectors can be compared using distance metrics
4. Closer vectors = more similar meaning

### Similarity Metrics

| Metric | Description | Use Case |
|--------|-------------|----------|
| **Cosine similarity** | Angle between vectors | Most common, direction matters |
| **Euclidean distance** | Straight-line distance | When magnitude matters |
| **Dot product** | Combined magnitude and direction | Normalized vectors |

### Embedding Models

| Model | Dimensions | Notes |
|-------|------------|-------|
| OpenAI text-embedding-3-small | 1536 | Good balance of quality/cost |
| OpenAI text-embedding-3-large | 3072 | Higher quality, more cost |
| Cohere embed-v3 | 1024 | Strong multilingual |
| Open source (e5, bge) | Varies | Self-hosted option |

### Key Properties

- **Dimensional:** More dimensions can capture more nuance, but cost more to store/compute
- **Model-specific:** Embeddings from different models aren't comparable
- **Context-dependent:** Same word in different contexts = different embeddings

---

## Practical Example

```python
from openai import OpenAI
client = OpenAI()

# Get embeddings for two sentences
response1 = client.embeddings.create(
    input="The cat sat on the mat",
    model="text-embedding-3-small"
)
response2 = client.embeddings.create(
    input="A feline rested on the rug",
    model="text-embedding-3-small"
)

# These will be very similar despite different words!
embedding1 = response1.data[0].embedding
embedding2 = response2.data[0].embedding

# Calculate cosine similarity
import numpy as np
similarity = np.dot(embedding1, embedding2) / (
    np.linalg.norm(embedding1) * np.linalg.norm(embedding2)
)
print(f"Similarity: {similarity}")  # ~0.92 (high similarity)
```

---

## Common Pitfalls

- **Comparing across models:** Embeddings from different models are incompatible
- **Ignoring chunking:** Long documents need to be split strategically
- **Assuming perfection:** Embeddings capture semantic similarity, not factual accuracy
- **Forgetting updates:** Embedding models improve; re-embed periodically

---

## Related Elements

- **[Vector DB](/docs/periodic-table/retrieval/vector-db):** Where embeddings are stored
- **[RAG](/docs/periodic-table/orchestration/rag):** Uses embeddings for retrieval
- **[LLM](/docs/periodic-table/models/llm):** Some LLMs include embedding capabilities

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Conceptual understanding of semantic similarity |
| **Practitioner** | Generate, store, and query embeddings |
| **Expert** | Optimize embedding strategies for specific domains |
