---
id: frameworks
title: "Fw - Frameworks"
sidebar_position: 4
---

# Fw — Frameworks

| | |
|---|---|
| **Symbol** | Fw |
| **Name** | Frameworks |
| **Family** | Orchestration |
| **Row** | 3 - Deployment |

---

## What It Is

**AI frameworks are platforms like LangChain, LlamaIndex, and others that provide the plumbing to connect AI components.** They handle the complexity of building and deploying AI systems.

Instead of writing everything from scratch, frameworks provide abstractions for common patterns.

---

## Why It Matters

Frameworks accelerate development by:
- Providing battle-tested implementations
- Abstracting away boilerplate
- Enabling rapid prototyping
- Standardizing patterns across teams
- Integrating with various providers

---

## Core Concepts

### Major Frameworks (2026)

| Framework | Focus | Best For |
|-----------|-------|----------|
| **LangChain** | General-purpose chains | Flexible AI applications |
| **LlamaIndex** | Data indexing/retrieval | RAG-heavy applications |
| **Haystack** | NLP pipelines | Search and QA |
| **Semantic Kernel** | Microsoft ecosystem | .NET/enterprise |
| **LangGraph** | Stateful agents | Complex agent workflows |
| **CrewAI** | Multi-agent | Agent teams |

### Common Abstractions

| Abstraction | Purpose |
|-------------|---------|
| **Chains** | Sequence of operations |
| **Agents** | Autonomous decision-making |
| **Tools** | Functions agents can call |
| **Memory** | Conversation state |
| **Retrievers** | Document retrieval |
| **Embeddings** | Vector generation |
| **LLMs** | Model interfaces |

### When to Use Frameworks

**Use frameworks when:**
- Rapid prototyping is priority
- Using standard patterns (RAG, agents)
- Team benefits from shared abstractions
- Integrating multiple providers

**Consider direct APIs when:**
- Simple, single-model use case
- Maximum control needed
- Framework overhead is concern
- Highly custom patterns

---

## Practical Example: LangChain

```python
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnablePassthrough

# Define components
llm = ChatOpenAI(model="gpt-4")

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant. Use the context to answer."),
    ("human", "Context: {context}\n\nQuestion: {question}")
])

# Create chain
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
)

# Run
response = chain.invoke("What's the return policy?")
```

---

## Practical Example: LlamaIndex

```python
from llama_index import VectorStoreIndex, SimpleDirectoryReader

# Load and index documents
documents = SimpleDirectoryReader("./data").load_data()
index = VectorStoreIndex.from_documents(documents)

# Query
query_engine = index.as_query_engine()
response = query_engine.query("What are the main topics?")
print(response)
```

---

## Framework Tradeoffs

| Aspect | Pros | Cons |
|--------|------|------|
| **Abstraction** | Faster development | Less control |
| **Updates** | Community improvements | Breaking changes |
| **Debugging** | Logging built-in | Stack traces can be opaque |
| **Learning** | Documentation, examples | Another thing to learn |

---

## Best Practices

1. **Start simple:** Don't use framework features you don't need
2. **Understand underneath:** Know what the abstractions do
3. **Version pin:** Frameworks evolve quickly
4. **Escape hatches:** Know how to drop to raw APIs
5. **Evaluate fit:** Not every project needs a framework

---

## Related Elements

- **[RAG](/docs/periodic-table/orchestration/rag):** Frameworks implement RAG patterns
- **[Agents](/docs/periodic-table/reactive/agents):** Framework agent abstractions
- **[Function Calling](/docs/periodic-table/reactive/function-calling):** Tool integrations
- **[MCP](/docs/periodic-table/orchestration/mcp):** Emerging standards frameworks adopt

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Awareness of major frameworks |
| **Practitioner** | Proficiency in at least one framework |
| **Expert** | Evaluate frameworks, know when to use vs. build |
