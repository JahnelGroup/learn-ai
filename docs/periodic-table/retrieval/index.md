---
id: index
title: Retrieval Family
sidebar_position: 1
---

# Retrieval Family (G2)

**These elements handle memory and knowledge—how AI systems store, find, and adapt information.**

Think of three time scales of memory:
- **Runtime:** Context provided during a conversation (via RAG)
- **Persistent:** Knowledge stored externally and retrieved on demand (via Vector DBs)
- **Baked-in:** Knowledge encoded in the model's weights (via Fine-tuning)

The Retrieval family is about getting the right information to the model at the right time.

---

## Family Characteristics

- **Information-centric:** All about data storage and retrieval
- **Semantic understanding:** Based on meaning, not just keywords
- **Three memory timescales:** Runtime, persistent, and baked-in

---

## Elements in This Family

| Element | Name | Row | Description |
|---------|------|-----|-------------|
| **Em** | [Embeddings](/docs/periodic-table/retrieval/embeddings) | Primitives | Numerical representations of meaning |
| **Vx** | [Vector DB](/docs/periodic-table/retrieval/vector-db) | Compositions | Databases optimized for semantic search |
| **Ft** | [Fine-tuning](/docs/periodic-table/retrieval/fine-tuning) | Deployment | Adapting models with specific data |
| **Sy** | [Synthetic](/docs/periodic-table/retrieval/synthetic) | Emerging | AI-generated training data |

---

## Learning Path

**Foundation:** Understand [Embeddings](/docs/periodic-table/retrieval/embeddings)—the mathematical foundation of semantic similarity.

**Practitioner:** Work with [Vector DBs](/docs/periodic-table/retrieval/vector-db)—storing and querying millions of vectors.

**Expert:** Master [Fine-tuning](/docs/periodic-table/retrieval/fine-tuning) and [Synthetic Data](/docs/periodic-table/retrieval/synthetic)—baking knowledge into models.

---

## Key Insight

The Retrieval family reveals that **AI models don't know everything**—they need external knowledge. Understanding when to use runtime retrieval (RAG), persistent storage (Vector DBs), or baked-in knowledge (Fine-tuning) is crucial for building effective AI systems. Each approach has tradeoffs in cost, latency, and freshness.
