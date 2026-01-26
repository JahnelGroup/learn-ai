---
id: practitioner
title: "Tier 2: Practitioner"
sidebar_position: 3
---

import TierPeriodicTable from '@site/src/components/PeriodicTable/TierTable';

# Tier 2: Practitioner

> *"I can build and deploy AI-powered features in production systems."*

---

## Prerequisites

**Foundation understanding is expected** before diving into Practitioner concepts. If you haven't worked through Foundation, start there—the concepts here build on that base.

---

## What This Level Means

Practitioner demonstrates that you can **independently build AI-powered features and deploy them to production**. You understand technical implementation details, can make architecture decisions for standard AI patterns, and can troubleshoot issues when things go wrong.

At this level, you're ready to take on AI work on client projects with appropriate guidance. You can turn AI concepts into working code.

---

## Elements to Explore

These are the concepts to understand at Practitioner level. Focus on **hands-on implementation**—building real things, not just reading about them.

| Element | Concept | What to Build |
|---------|---------|---------------|
| [**Fc**](/docs/building-ai-systems/periodic-table/reactive#fc--function-calling) | Function Calling | Implement tool use and API integration with LLMs. Design function schemas, handle responses, manage errors. |
| [**Vx**](/docs/building-ai-systems/periodic-table/retrieval#vx--vector-db) | Vector Databases | Set up and query vector databases. Understand indexing, similarity metrics, and performance tradeoffs. |
| [**Rg**](/docs/building-ai-systems/periodic-table/orchestration#rg--rag) | RAG (Advanced) | Build complete RAG pipelines. Implement chunking strategies, retrieval optimization, and context management. |
| [**Mm**](/docs/building-ai-systems/periodic-table/models#mm--multi-modal) | Multi-modal | Work with vision and audio models. Understand input processing, use cases, and limitations. |
| [**Ag**](/docs/building-ai-systems/periodic-table/reactive#ag--agents) | Agents | Implement basic agentic loops. Understand planning, tool selection, observation, and termination conditions. |
| [**Fw**](/docs/building-ai-systems/periodic-table/orchestration#fw--frameworks) | Frameworks | Gain proficiency in at least one major AI framework. Understand abstractions, patterns, and when to use them. |
| [**Sm**](/docs/building-ai-systems/periodic-table/models#sm--small-models) | Small Models | Know when and how to use smaller models. Understand cost/latency/quality tradeoffs. |
| [**Cw**](/docs/building-ai-systems/periodic-table/orchestration#cw--context-windows) | Context Windows | Implement context management strategies. Handle sliding windows, compression, and chunking. Optimize context for cost/quality tradeoffs. |

<TierPeriodicTable highlightedElements={['Fc', 'Vx', 'Rg', 'Mm', 'Ag', 'Fw', 'Sm', 'Cw']} />

---

## Assessment Approach

Practitioner assessment includes:

### Technical Demonstration
Walk through your production feature live. Show it working. Explain the architecture. Answer questions about implementation choices.

### Code Review
An Expert-level colleague reviews your code. They'll look at:
- Code quality and patterns
- Error handling
- Security considerations
- Architecture decisions

### Technical Discussion
Deeper dive into your understanding. Questions might include:
- "Why did you choose X over Y?"
- "What would break if Z happened?"
- "How would you improve this system?"

### What "Passing" Means
You've demonstrated you can build real AI features. You understand implementation details well enough to troubleshoot issues and make architecture decisions.

---

## Portfolio: Ship Something Real

Practitioner portfolio requires **at least one AI-powered feature shipped to production** (internal or client). This is where theory meets reality.

### What to Document

**1. Architecture Decisions**
- Which periodic table elements are in play?
- Why did you choose this approach over alternatives?
- What tradeoffs did you accept?

**Example architecture diagram:**
```
User Query → API Gateway → RAG Service → Vector DB
                              ↓
                           LLM API
                              ↓
                         Response + Sources
```

**2. Technical Implementation**
- How does the system work?
- What frameworks/tools did you use?
- Show the key code patterns.

**3. Challenges and Solutions**
- What went wrong?
- How did you debug issues?
- What would you do differently?

**Example format:**
```
Challenge: Retrieval returning irrelevant documents
Investigation: Tested different chunk sizes and overlap
Solution: Reduced chunk size from 1000 to 500 tokens
Result: Precision improved from 60% to 85%
```

**4. Measurable Outcomes**
Track key metrics for your feature:

| Metric | Target | Actual |
|--------|--------|--------|
| Response latency (p50) | < 2s | 1.4s |
| Quality/accuracy | > 80% | 85% |
| Cost per request | < $0.05 | $0.03 |
| User satisfaction | > 4.0/5 | 4.2/5 |

### Example Projects

Good Practitioner projects might include:
- A RAG system against internal documentation with measured retrieval quality
- An agent that completes a multi-step workflow with observable reasoning
- A function-calling integration with external APIs and error handling
- A multi-modal feature processing images or audio

---

## Skills to Develop

### Advanced Prompting

Can you:
- [ ] Design effective system prompts for consistent behavior?
- [ ] Implement prompt chaining for multi-step tasks?
- [ ] Use structured outputs (JSON mode, schemas) reliably?
- [ ] Debug and optimize prompts for production use cases?

### Function Calling

Can you:
- [ ] Design function schemas with clear descriptions?
- [ ] Handle function call responses and errors gracefully?
- [ ] Implement parallel and sequential function patterns?
- [ ] Debug when the model calls the wrong function?

### Vector Databases

Can you:
- [ ] Set up a vector database (Pinecone, Chroma, etc.)?
- [ ] Design chunking strategies for different document types?
- [ ] Implement and measure retrieval quality?
- [ ] Optimize for your latency and cost requirements?

### RAG Implementation

Can you:
- [ ] Build an end-to-end RAG pipeline?
- [ ] Implement reranking for better results?
- [ ] Handle documents that don't fit in context?
- [ ] Measure and improve retrieval quality?

### Agents

Can you:
- [ ] Implement a think-act-observe loop?
- [ ] Design appropriate termination conditions?
- [ ] Handle agent failures gracefully?
- [ ] Observe and debug agent reasoning?

### Multi-modal

Can you:
- [ ] Integrate vision models to process images in your application?
- [ ] Handle different input formats and preprocessing requirements?
- [ ] Debug issues with multi-modal inputs (sizing, encoding, tokens)?
- [ ] Implement appropriate modality for your use case?

### Small Models

Can you:
- [ ] Select an appropriate model size for a given task?
- [ ] Implement model routing or fallback strategies?
- [ ] Measure and compare quality across model sizes?
- [ ] Optimize for cost and latency in your deployment?

### Context Management

Can you:
- [ ] Implement sliding window or compression strategies?
- [ ] Optimize context usage for cost and quality?
- [ ] Handle documents that exceed context limits?
- [ ] Design effective chunking for your use case?

### Frameworks

Can you:
- [ ] Build with LangChain, LlamaIndex, or equivalent?
- [ ] Understand what the abstractions do underneath?
- [ ] Know when to use framework vs. direct API?
- [ ] Debug issues within framework code?

### Evaluation & Guardrails

Can you:
- [ ] Implement automated evaluation for your AI features?
- [ ] Build input/output guardrails for production safety?
- [ ] Create test suites for AI behavior validation?
- [ ] Measure and track quality metrics over time?

---

## Common Questions

**Q: What counts as "production"?**

Internal tools count. The key is it's used by real people for real purposes—not just a demo that sits on your laptop.

**Q: Can I use a personal project?**

Preferably something work-related, but a substantial personal project that demonstrates the skills can work. Discuss with whoever will assess you.

**Q: What if my project fails?**

Document the failure. What went wrong? What did you learn? A thoughtful analysis of a failed project can be more valuable than a lucky success.

**Q: Do I need to know every framework?**

No. Proficiency in one major framework is sufficient. Understanding how to evaluate and learn new ones matters more than knowing all of them.

---

## Learning Paths

### Start Here
1. Ensure Foundation concepts are solid
2. Pick a project idea that's meaningful to you
3. Start building immediately—learn by doing

### Build Your Feature
4. Work through each element hands-on
5. Document decisions and learnings as you go
6. Get feedback from others early and often

### Ship It
7. Deploy to production (internal is fine)
8. Measure real-world performance
9. Iterate based on what you learn

### Prepare for Assessment
10. Complete your portfolio documentation
11. Review your code for quality
12. Practice explaining your architecture
