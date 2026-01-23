---
id: rag
title: "Rg - RAG"
sidebar_position: 3
---

# Rg — RAG

| | |
|---|---|
| **Symbol** | Rg |
| **Name** | RAG (Retrieval-Augmented Generation) |
| **Family** | Orchestration |
| **Row** | 2 - Compositions |

---

## What It Is

**RAG combines retrieval with generation.** A question comes in, relevant context is retrieved (via embeddings/vector DB), the prompt is augmented with that context, and the LLM generates a grounded answer.

RAG gives models access to knowledge they weren't trained on.

---

## Why It Matters

RAG solves critical LLM limitations:
- **Hallucination:** Grounds answers in retrieved facts
- **Stale knowledge:** Access up-to-date information
- **Domain specificity:** Query your proprietary data
- **Traceability:** Know where answers came from

---

## Core Concepts

### The RAG Pipeline

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  User Query → Embed → Search Vector DB → Retrieve Docs  │
│                                                         │
│  Retrieved Docs + Query → Augmented Prompt → LLM        │
│                                                         │
│  LLM → Grounded Response                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Key Components

| Component | Purpose |
|-----------|---------|
| **Embedding model** | Convert query to vector |
| **Vector database** | Store and search documents |
| **Retriever** | Find relevant documents |
| **Reranker** | Improve retrieval ordering |
| **Generator** | LLM that produces the answer |

### Chunking Strategies

How you split documents matters enormously:

| Strategy | Description | Best For |
|----------|-------------|----------|
| **Fixed size** | Split every N characters | Simple, predictable |
| **Sentence** | Split on sentence boundaries | Readability |
| **Paragraph** | Split on paragraph breaks | Structured documents |
| **Semantic** | Split on topic changes | Mixed content |
| **Recursive** | Try multiple strategies | General purpose |

### Retrieval Quality

| Metric | Meaning |
|--------|---------|
| **Recall** | Did we find all relevant docs? |
| **Precision** | Are retrieved docs actually relevant? |
| **MRR** | Is the best doc ranked first? |

---

## Practical Example

```python
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# Setup
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(embedding_function=embeddings)

# Index documents
docs = load_and_chunk_documents("company_handbook.pdf")
vectorstore.add_documents(docs)

# Create RAG chain
llm = ChatOpenAI(model="gpt-4")
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 4}),
    return_source_documents=True
)

# Query
result = qa_chain("What's our PTO policy?")
print(result["result"])
print("Sources:", [doc.metadata for doc in result["source_documents"]])
```

---

## Advanced Techniques

| Technique | Description |
|-----------|-------------|
| **Hybrid search** | Combine vector + keyword search |
| **Query expansion** | Rephrase query for better retrieval |
| **Reranking** | Use cross-encoder to reorder results |
| **Multi-query** | Generate multiple queries, merge results |
| **Self-RAG** | Model decides when to retrieve |

---

## Common Pitfalls

- **Poor chunking:** Chunks that split important context
- **No reranking:** First result isn't always best
- **Ignoring metadata:** Missing filtering opportunities
- **Too few/many chunks:** Balance context vs. noise
- **No evaluation:** Not measuring retrieval quality

---

## Related Elements

- **[Embeddings](/docs/periodic-table/retrieval/embeddings):** Foundation for retrieval
- **[Vector DB](/docs/periodic-table/retrieval/vector-db):** Storage layer
- **[Context](/docs/periodic-table/orchestration/context):** Where retrieved docs go
- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measuring RAG quality

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the RAG pattern conceptually |
| **Practitioner** | Build complete RAG pipelines |
| **Expert** | Optimize retrieval quality and implement advanced patterns |
