---
id: orchestration
title: Orchestration Family
sidebar_position: 4
---

# Orchestration Family (G3)

**These elements coordinate multiple components into working systems.**

You can't orchestrate one thing. This family only exists through combination. Context windows hold the information, RAG fills them intelligently, frameworks provide the plumbing, and protocols standardize connections.

| Element | Name | Row | Description |
|---------|------|-----|-------------|
| **Cw** | [Context Windows](#cw--context-windows) | Primitives | The limited space an LLM can "see" |
| **Rg** | [RAG](#rg--rag) | Compositions | Retrieval-Augmented Generation |
| **Fw** | [Frameworks](#fw--frameworks) | Deployment | Platforms connecting AI components |
| **Mc** | [MCP](#mc--mcp) | Emerging | Model Context Protocol and standards |

---

## Cw — Context Windows

```
Position in Periodic Table:

G3: Orchestration Family
┌──────────────────────────┐
│  → [Context Windows]     │  Row 1: Primitives
│     RAG                  │  Row 2: Compositions
│     Frameworks           │  Row 3: Deployment
│     MCP                  │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**Context windows are the limited space an LLM can "see" at once.** Managing what goes into context is fundamental orchestration. Every token costs money and attention. Think of it as the model's working memory.

### Why It Matters

Understanding context windows is crucial because:
- There's a hard limit on what the model can process
- Not all context is equal. Position and relevance matter.
- Token costs scale linearly with context size
- "Lost in the middle" phenomenon affects retrieval
- Context management is often the difference between success and failure

### Context Window Sizes (Updated February 2026)

| Model | Context Window |
|-------|----------------|
| GPT-5.x | 200K–400K tokens |
| GPT-4.1 | 1M+ tokens |
| Claude Opus 4.6 | 1M tokens |
| Claude Sonnet 4.6 | 1M tokens |
| Gemini 3 Pro | 1M–2M tokens |
| Gemini 3 Flash | 1M tokens |
| Llama 4 | up to 10M tokens |

> **Note:** Most models perform reliably at 60–75% of their advertised capacity. Performance tends to degrade near the stated maximum, so plan for effective limits lower than the headline numbers.

### What Consumes Context

| Component | Description |
|-----------|-------------|
| **System prompt** | Instructions, persona, rules |
| **Conversation history** | Previous messages |
| **Retrieved context** | RAG results, documents |
| **User input** | Current message |
| **Output** | Generated response |

### The "Lost in the Middle" Problem

Research shows models pay most attention to:
1. The **beginning** of context (primacy)
2. The **end** of context (recency)
3. **Less attention** to the middle

**Implication:** Put important information at the start or end, not buried in the middle.

### Context Management Strategies

1. **Compression:** Summarize long content to preserve meaning in fewer tokens
2. **Selection:** Only include what's relevant to the current query
3. **Chunking:** Break documents into pieces, retrieve only relevant chunks
4. **Sliding Window:** Keep recent history, summarize or drop older content
5. **Hierarchical:** Summary of full context + detailed recent context

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand context limits and token costs |
| **Practitioner** | Implement context management strategies |
| **Expert** | Optimize context for cost/quality tradeoffs |

---

## Rg — RAG

```
Position in Periodic Table:

G3: Orchestration Family
┌──────────────────────────┐
│     Context Windows      │  Row 1: Primitives
│  → [RAG]                 │  Row 2: Compositions
│     Frameworks           │  Row 3: Deployment
│     MCP                  │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**RAG (Retrieval-Augmented Generation) combines retrieval with generation.** A question comes in, relevant context is retrieved from an external knowledge source, the prompt is augmented with that context, and the LLM generates a grounded answer.

### Why It Matters

RAG solves critical LLM limitations:
- **Hallucination:** Grounds answers in retrieved facts
- **Stale knowledge:** Access up-to-date information
- **Domain specificity:** Query your proprietary data
- **Traceability:** Know where answers came from

### The RAG Pipeline

```
User Query → Embed → Search Knowledge Store → Retrieve Docs
                                                  ↓
Retrieved Docs + Query → Augmented Prompt → LLM → Grounded Response
```

The knowledge store can be many things. Vector databases are the most common choice, but not the only one. Options include:
- **Vector databases** (Pinecone, Chroma, Qdrant, pgvector): semantic similarity search over embeddings
- **Traditional databases** (PostgreSQL full-text search, Elasticsearch): keyword or hybrid search
- **Graph databases** (Neo4j, Amazon Neptune): relationship-rich data and GraphRAG patterns
- **Hybrid approaches**: combine multiple backends to maximize retrieval quality

### Key Components

| Component | Purpose |
|-----------|---------|
| **Embedding model** | Convert query to vector (when using semantic search) |
| **Knowledge store** | Store and search documents (vector DB, SQL, graph DB, etc.) |
| **Retriever** | Find relevant documents |
| **Reranker** | Improve retrieval ordering |
| **Generator** | LLM that produces the answer |

### Chunking Strategies

| Strategy | Description | Best For |
|----------|-------------|----------|
| **Fixed size** | Split every N characters | Simple, predictable |
| **Sentence** | Split on sentence boundaries | Readability |
| **Paragraph** | Split on paragraph breaks | Structured documents |
| **Semantic** | Split on topic changes | Mixed content |
| **Recursive** | Try multiple strategies | General purpose |

### Advanced Techniques

| Technique | Description |
|-----------|-------------|
| **Hybrid search** | Combine vector + keyword search |
| **Query expansion** | Rephrase query for better retrieval |
| **Reranking** | Use cross-encoder to reorder results |
| **Multi-query** | Generate multiple queries, merge results |
| **Self-RAG** | Model decides when to retrieve |

### Common Pitfalls

- **Poor chunking:** Chunks that split important context
- **No reranking:** First result isn't always best
- **Ignoring metadata:** Missing filtering opportunities
- **Too few/many chunks:** Balance context vs. noise
- **No evaluation:** Not measuring retrieval quality

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the RAG pattern conceptually |
| **Practitioner** | Build complete RAG pipelines |
| **Expert** | Optimize retrieval quality and implement advanced patterns |

---

## Fw — Frameworks

```
Position in Periodic Table:

G3: Orchestration Family
┌──────────────────────────┐
│     Context Windows      │  Row 1: Primitives
│     RAG                  │  Row 2: Compositions
│  → [Frameworks]          │  Row 3: Deployment
│     MCP                  │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**AI frameworks are platforms like LangChain, LlamaIndex, and others that provide the plumbing to connect AI components.** They handle the complexity of building and deploying AI systems.

### Why It Matters

Frameworks accelerate development by:
- Providing battle-tested implementations
- Abstracting away boilerplate
- Enabling rapid prototyping
- Standardizing patterns across teams
- Integrating with various providers

### Major Frameworks (Updated February 2026)

| Framework | Focus | Best For |
|-----------|-------|----------|
| **LangChain** | General-purpose chains | Flexible AI applications; reached stable 1.0 in Oct 2025 |
| **LangGraph** | Stateful agents | Complex agent workflows; human-in-the-loop; multi-agent systems |
| **LlamaIndex** | Data indexing/retrieval | RAG-heavy applications; document ingestion and parsing |
| **Haystack** | NLP pipelines | Search and QA |
| **Semantic Kernel** | Microsoft ecosystem | .NET/enterprise |
| **CrewAI** | Multi-agent | Agent teams |

> **Common production pattern (2026):** Use LlamaIndex for data ingestion and indexing, then expose the index as a tool to LangGraph agents that handle conversation logic and state management.

### Common Abstractions

| Abstraction | Purpose |
|-------------|---------|
| **Chains** | Sequence of operations |
| **Agents** | Autonomous decision-making |
| **Tools** | Functions agents can call |
| **Memory** | Conversation state |
| **Retrievers** | Document retrieval |

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

### Framework Tradeoffs

| Aspect | Pros | Cons |
|--------|------|------|
| **Abstraction** | Faster development | Less control |
| **Updates** | Community improvements | Breaking changes |
| **Debugging** | Logging built-in | Stack traces can be opaque |

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Awareness of major frameworks |
| **Practitioner** | Proficiency in at least one framework |
| **Expert** | Evaluate frameworks, know when to use vs. build |

---

## Mc — MCP

```
Position in Periodic Table:

G3: Orchestration Family
┌──────────────────────────┐
│     Context Windows      │  Row 1: Primitives
│     RAG                  │  Row 2: Compositions
│     Frameworks           │  Row 3: Deployment
│  → [MCP]                 │  Row 4: Emerging
└──────────────────────────┘
```

### What It Is

**MCP (Model Context Protocol) and similar standards are emerging protocols for how AI systems connect to tools and data sources.** Think of it as the USB standard of AI integration.

### Why It Matters

Without standards, every AI-tool integration is custom. MCP and similar protocols enable:
- Reusable tool implementations
- Interoperability across AI systems
- Easier ecosystem development
- Reduced integration complexity

### The Problem MCP Solves

**Before:** Each AI system needs custom code for each tool
```
Claude ──custom──> Slack
Claude ──custom──> GitHub

GPT ────custom──> Slack (different code!)
GPT ────custom──> GitHub (different code!)
```

**After:** Tools expose standard interface, any AI can use
```
Claude ──MCP──┐
              ├──> Slack Server (one implementation)
GPT ────MCP──┘
```

### MCP Architecture

| Component | Role |
|-----------|------|
| **Host** | AI application (Claude, IDEs, etc.) |
| **Server** | Tool provider (Slack, GitHub, DB) |
| **Protocol** | Standardized communication format |
| **Resources** | Data the server exposes |
| **Tools** | Actions the server enables |

### Current State (Updated February 2026)

MCP has achieved mainstream adoption as the de facto standard for AI tool integration:
- **All major providers support it:** OpenAI, Google, and Microsoft (Copilot/Azure AI) adopted MCP alongside Anthropic; first-class support in ChatGPT, Claude, Cursor, Gemini, VS Code, and GitHub Copilot
- **Large and growing ecosystem:** Over 10,000 active servers available as of early 2026
- **Neutral governance:** In December 2025, Anthropic donated MCP to the Agentic AI Foundation (AAIF) under the Linux Foundation, cementing it as an open standard
- **MCP Apps (January 2026):** First official protocol extension enabling tools to return rich interactive UI components (dashboards, forms, visualizations) directly in AI conversations — moving beyond text-only tool responses

### Evaluating Protocol Adoption

| Factor | Question |
|--------|----------|
| **Ecosystem** | Are servers available for your tools? |
| **Support** | Does your AI platform support it? |
| **Maturity** | Is the protocol stable enough? |
| **Security** | Does it meet your security requirements? |

### Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Awareness of emerging standards |
| **Practitioner** | Use existing MCP servers |
| **Expert** | Evaluate protocols, build custom servers |
