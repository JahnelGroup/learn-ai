---
id: retrieval
title: Retrieval Family
sidebar_position: 3
---

# Retrieval Family (G2)

**These elements handle memory and knowledge—how AI systems store, find, and adapt information.**

Three time scales of memory: runtime (context), persistent (vector databases), and baked-in (fine-tuning).

| Element | Name | Row | Description |
|---------|------|-----|-------------|
| **Em** | [Embeddings](#em--embeddings) | Primitives | Numerical representations of meaning |
| **Vx** | [Vector DB](#vx--vector-db) | Compositions | Databases for storing and querying embeddings |
| **Ft** | [Fine-tuning](#ft--fine-tuning) | Deployment | Adapting models by training on specific data |
| **Sy** | [Synthetic Data](#sy--synthetic-data) | Emerging | AI-generated training data |

---

## Em — Embeddings

| | |
|---|---|
| **Symbol** | Em |
| **Row** | 1 - Primitives |

### What It Is

**Embeddings are numerical representations of meaning.** Text becomes vectors (lists of numbers) where similar meanings have similar numbers. "Happy" and "joyful" will have similar embeddings, even though they share no letters.

### Why It Matters

Embeddings unlock semantic understanding. Instead of searching for exact keyword matches, you can search by meaning. This enables:
- Finding relevant documents even when words differ
- Clustering similar content automatically
- Measuring how related two pieces of text are
- Building the foundation for RAG systems

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

### Common Pitfalls

- **Comparing across models:** Embeddings from different models are incompatible
- **Ignoring chunking:** Long documents need to be split strategically
- **Assuming perfection:** Embeddings capture semantic similarity, not factual accuracy
- **Forgetting updates:** Embedding models improve; re-embed periodically

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Conceptual understanding of semantic similarity |
| **Practitioner** | Generate, store, and query embeddings |
| **Expert** | Optimize embedding strategies for specific domains |

---

## Vx — Vector DB

| | |
|---|---|
| **Symbol** | Vx |
| **Row** | 2 - Compositions |

### What It Is

**Vector databases are optimized for storing and querying embeddings.** Store millions of vectors, find the most semantically similar ones in milliseconds. Traditional databases search by exact values. Vector databases search by similarity.

### Why It Matters

You can't do semantic search at scale without specialized storage. Vector databases enable:
- Finding relevant documents among millions
- Real-time similarity search for recommendations
- Efficient k-nearest-neighbor queries
- The persistence layer for RAG systems

### How Vector Search Works

1. **Index:** Vectors are organized using specialized algorithms (HNSW, IVF, etc.)
2. **Query:** A query vector is compared against the index
3. **Approximate nearest neighbors:** Trade perfect accuracy for speed
4. **Top-k results:** Return the k most similar vectors

### Key Components

| Component | Purpose |
|-----------|---------|
| **Vectors** | The numerical embeddings |
| **Metadata** | Additional info attached to each vector (source, date, etc.) |
| **Index** | Data structure enabling fast search |
| **Namespace** | Logical separation of vector sets |

### Popular Vector Databases

| Database | Type | Notes |
|----------|------|-------|
| **Pinecone** | Managed | Easy to start, scales well |
| **Weaviate** | Self-hosted/managed | Strong hybrid search |
| **Chroma** | Embedded | Great for prototyping |
| **Qdrant** | Self-hosted/managed | High performance |
| **pgvector** | PostgreSQL extension | Use existing Postgres |
| **Milvus** | Self-hosted | Enterprise scale |

### Key Considerations

- **Embedding consistency:** Use the same model for indexing and querying
- **Metadata filtering:** Combine vector search with traditional filters
- **Chunking strategy:** How you split documents affects retrieval quality
- **Update patterns:** Some indexes are expensive to update
- **Cost:** Managed services charge by storage and queries

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand what vector DBs do |
| **Practitioner** | Set up, populate, and query vector databases |
| **Expert** | Optimize indexing and retrieval performance |

---

## Ft — Fine-tuning

| | |
|---|---|
| **Symbol** | Ft |
| **Row** | 3 - Deployment |

### What It Is

**Fine-tuning is adapting a base model by training on specific data.** It bakes knowledge directly into the model's weights. Domain expertise becomes part of the model itself. Unlike RAG (which retrieves at runtime), fine-tuning permanently modifies the model.

### Why It Matters

Fine-tuning enables:
- Consistent style or tone across outputs
- Domain-specific knowledge without retrieval
- Faster inference (no retrieval step)
- Behavior modification the model resists via prompting

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

### Common Pitfalls

- **Overfitting:** Model memorizes training data, fails on new inputs
- **Catastrophic forgetting:** Loses general capabilities
- **Poor data quality:** Model learns bad habits
- **Insufficient examples:** Not enough signal to learn
- **Neglecting evaluation:** No way to know if it worked

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand when fine-tuning vs. RAG |
| **Practitioner** | Evaluate if fine-tuning is appropriate |
| **Expert** | Prepare datasets and execute fine-tuning projects |

---

## Sy — Synthetic Data

| | |
|---|---|
| **Symbol** | Sy |
| **Row** | 4 - Emerging |

### What It Is

**Synthetic data is AI-generated training data for AI.** When real examples are scarce or expensive, synthetic data fills the gap. Use one model to generate data that trains another.

### Why It Matters

Quality training data is often the bottleneck in AI development. Synthetic data enables:
- Bootstrapping when real data is limited
- Augmenting datasets for better coverage
- Generating edge cases that rarely occur naturally
- Protecting privacy (no real user data needed)

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

### Best Practices

1. **Always validate:** Humans should review a sample
2. **Mix with real data:** Don't train on 100% synthetic
3. **Diversify generation:** Multiple prompts, temperatures
4. **Track provenance:** Know what's real vs. synthetic
5. **Watch for leakage:** Ensure test data isn't synthetic

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand what synthetic data is |
| **Practitioner** | Generate and validate synthetic examples |
| **Expert** | Design synthetic data pipelines with quality controls |
