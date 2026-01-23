---
id: vector-db
title: "Vx - Vector DB"
sidebar_position: 3
---

# Vx — Vector DB

| | |
|---|---|
| **Symbol** | Vx |
| **Name** | Vector Database |
| **Family** | Retrieval |
| **Row** | 2 - Compositions |

---

## What It Is

**Vector databases are optimized for storing and querying embeddings.** Store millions of vectors, find the most semantically similar ones in milliseconds.

Traditional databases search by exact values. Vector databases search by similarity.

---

## Why It Matters

You can't do semantic search at scale without specialized storage. Vector databases enable:
- Finding relevant documents among millions
- Real-time similarity search for recommendations
- Efficient k-nearest-neighbor queries
- The persistence layer for RAG systems

---

## Core Concepts

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

### Indexing Strategies

| Strategy | Tradeoff |
|----------|----------|
| **Flat** | Perfect accuracy, slow on large datasets |
| **HNSW** | Fast, good recall, more memory |
| **IVF** | Good balance, requires training |
| **PQ** | Compressed, some accuracy loss |

---

## Practical Example

```python
import chromadb

# Create client and collection
client = chromadb.Client()
collection = client.create_collection("documents")

# Add documents (embeddings generated automatically)
collection.add(
    documents=[
        "Machine learning is a subset of AI",
        "Neural networks power deep learning",
        "Python is popular for data science"
    ],
    metadatas=[
        {"source": "ml-intro"},
        {"source": "dl-guide"},
        {"source": "python-docs"}
    ],
    ids=["doc1", "doc2", "doc3"]
)

# Query by semantic similarity
results = collection.query(
    query_texts=["What is deep learning?"],
    n_results=2
)

# Returns doc2 first (most relevant), then doc1
print(results)
```

---

## Key Considerations

- **Embedding consistency:** Use the same model for indexing and querying
- **Metadata filtering:** Combine vector search with traditional filters
- **Chunking strategy:** How you split documents affects retrieval quality
- **Update patterns:** Some indexes are expensive to update
- **Cost:** Managed services charge by storage and queries

---

## Related Elements

- **[Embeddings](/docs/periodic-table/retrieval/embeddings):** What gets stored
- **[RAG](/docs/periodic-table/orchestration/rag):** Primary use case
- **[Context](/docs/periodic-table/orchestration/context):** Retrieved vectors fill context

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand what vector DBs do |
| **Practitioner** | Set up, populate, and query vector databases |
| **Expert** | Optimize indexing and retrieval performance |
