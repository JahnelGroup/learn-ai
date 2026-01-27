---
id: foundation
title: "Tier 1: Foundation"
sidebar_position: 2
---

import TierPeriodicTable from '@site/src/components/PeriodicTable/TierTable';

# Tier 1: Foundation

> *"I can have an intelligent conversation about AI and use it effectively."*

---

## What This Tier Means

Foundation demonstrates that you **understand the core concepts of modern AI**, can use AI tools effectively in your daily work, and can engage meaningfully in technical conversations with colleagues and clients.

You know the vocabulary. You understand capabilities and limitations. You can make informed decisions about when and how to apply AI.

This isn't about being "basic." It's about having a solid foundation that everything else builds on. Many experienced engineers discover gaps at this level they didn't know they had.

---

## Elements to Explore

These are the concepts to understand at Foundation. You don't need to master implementation details, as that's the Practitioner tier. Focus on **understanding what these are, why they matter, and when they apply.**

| Element | Concept | What to Understand |
|---------|---------|-------------------|
| [**Pr**](/docs/building-ai-systems/periodic-table/reactive#pr--prompts) | Prompts | How to write effective prompts with clear instructions, context, examples, and constraints. Understand prompt patterns and iteration. |
| [**Lg**](/docs/building-ai-systems/periodic-table/models#lg--llm) | LLMs | What LLMs are, how they work at a high level, their capabilities, limitations, and hallucination risks. |
| [**Em**](/docs/building-ai-systems/periodic-table/retrieval#em--embeddings) | Embeddings | How semantic similarity works conceptually and why it matters for AI applications. |
| [**Gr**](/docs/building-ai-systems/periodic-table/validation#gr--guardrails) | Guardrails | AI safety, bias, ethical considerations, and why guardrails matter in production systems. |
| [**Cw**](/docs/building-ai-systems/periodic-table/orchestration#cw--context-windows) | Context Windows | Understand token limits, context window sizes, and why context management matters. Know what consumes context. |
| [**Rg**](/docs/building-ai-systems/periodic-table/orchestration#rg--rag) | RAG | The RAG pattern conceptually: retrieval, augmentation, generation. Know when and why to use it. |
| [**Ev**](/docs/building-ai-systems/periodic-table/validation#ev--evaluation) | Evaluation | How AI quality is measured. Common metrics, benchmarks, and the importance of human evaluation. |

<TierPeriodicTable highlightedElements={['Pr', 'Lg', 'Em', 'Gr', 'Cw', 'Rg', 'Ev']} />

---

## Assessment Approach

Foundation assessment is a **conversation with a Practitioner or Expert**. This isn't a written test or gotcha quiz. It's a discussion about your understanding and experiences.

### What the Conversation Covers

During the conversation, you'll:
- **Discuss core concepts** through questions like "Explain how you'd approach using AI for X task" or "What is RAG and when might you need it?"
- **Walk through your portfolio** of documented use cases, explaining your reasoning, what you learned, and how you might approach things differently now
- **Explore the risks and trade-offs** of different approaches, like "What are the risks of Y approach?"

### What "Passing" Means
The conversation confirms you've built a solid foundation. If there are gaps, that's valuable information. Fill them and revisit. The goal is genuine understanding, not a score.

---

## Portfolio: Document Your Learning

As you learn, document **3 real work tasks** where you used AI effectively.

### For Each Use Case, Include:

**1. The Task or Problem**
What were you trying to accomplish? What was the context?

**2. Your Approach**
- What AI tool(s) did you use?
- How did you structure your prompts?
- What iterations did you go through?
- What didn't work at first?

**Example iteration tracking:**
```
Initial: "Write documentation for this function"
→ Too generic, got boilerplate

Iteration 1: Added code context and specific requirements
→ Better, but missed key edge cases

Final: Included code, examples of edge cases, and tone guidance
→ Produced usable documentation with minor edits needed
```

**3. The Outcome**
- How did AI contribute to the result?
- What would have been different without AI?
- Was there anything AI did poorly?

**4. What You Learned**
- What would you do differently next time?
- What concepts from the periodic table were in play?
- Did you discover any gaps in your understanding?

### Portfolio Examples

Good portfolio entries might include:
- Using AI to draft technical documentation, showing prompt iteration
- Having AI explain an unfamiliar codebase, documenting the back-and-forth
- Using AI to draft a project plan, identifying work stream dependencies and resourcing requirements
- Having AI analyze a voice transcript to build out a comprehensive test suite

### Self-Assessment Checklist

Before considering a use case complete, ensure you can answer:

- [ ] Can I explain why my final prompt worked better than my initial attempt?
- [ ] Can I identify which AI capabilities I leveraged (and their limitations)?
- [ ] Can I connect this experience to specific periodic table concepts?
- [ ] Would I be able to explain my approach and learnings to someone else?

---

## Skills to Develop

### Prompting

Can you:
- [ ] Write clear, structured prompts with role, context, task, and constraints?
- [ ] Use few-shot examples effectively?
- [ ] Iterate on prompts when results aren't what you need?
- [ ] Recognize when a prompt problem vs. a model limitation is the issue?

### LLM Understanding

Can you:
- [ ] Explain what an LLM is to a non-technical person?
- [ ] Describe common LLM limitations (hallucination, knowledge cutoff, etc.)?
- [ ] Identify appropriate vs. inappropriate use cases for LLMs?
- [ ] Understand why the same prompt might give different results?

### Conceptual RAG

Can you:
- [ ] Explain the RAG pattern at a whiteboard level?
- [ ] Describe what problems RAG solves (knowledge cutoff, domain-specific info)?
- [ ] Understand the basic flow: retrieve relevant content, add to context, generate?

### Embeddings Understanding

Can you:
- [ ] Explain what embeddings are at a conceptual level?
- [ ] Describe how semantic similarity differs from keyword matching?
- [ ] Understand why embeddings enable semantic search?

### Context Windows Awareness

Can you:
- [ ] Explain what a context window is and why it's limited?
- [ ] Understand what consumes context (system prompt, history, retrieval, etc.)?
- [ ] Recognize when context limits might be an issue?
- [ ] Describe token costs conceptually?

### Safety Awareness

Can you:
- [ ] Identify potential risks in a proposed AI application?
- [ ] Explain why guardrails matter in production?
- [ ] Discuss AI bias and ethical considerations?

### Evaluation Awareness

Can you:
- [ ] Explain why evaluating AI outputs is challenging?
- [ ] Describe common approaches to measuring AI quality (human eval, automated metrics)?
- [ ] Understand what benchmarks measure and their limitations?

---

## Common Questions

**Q: I've been using ChatGPT for years. Can I skip Foundation?**

Go through Foundation anyway. You might move quickly, but many experienced users discover conceptual gaps. Plus, you'll establish the shared vocabulary we use across tiers.

**Q: How long does Foundation take?**

It varies. Some people move through in a few weeks; others take longer. Don't rush. The foundation you build here supports everything that follows.

**Q: What if I fail the assessment?**

You get feedback on gaps, fill them, and try again. It's not a judgment. It's information about where to focus.

**Q: Do I need to memorize everything?**

No. Understanding matters more than memorization. You can reference documentation. The goal is knowing what to look for and how concepts connect.

**Q: Do I need to know all of these topics in depth?**

Foundation is about conceptual understanding of most topics. You should be able to explain what they are and why they matter. However, we want to see hands-on experience with LLMs, prompt engineering, understanding of context limits, basic RAG and safety awareness. Those are the skills you'll use daily.

---

## Learning Paths

### Start Here
1. Read through the [AI Periodic Table](/docs/building-ai-systems/periodic-table/) overview
2. Deep dive into [Prompts](/docs/building-ai-systems/periodic-table/reactive#pr--prompts) and [LLMs](/docs/building-ai-systems/periodic-table/models#lg--llm)
3. Start documenting AI use in your daily work immediately

### Build Understanding
4. Explore [Embeddings](/docs/building-ai-systems/periodic-table/retrieval#em--embeddings) and [RAG](/docs/building-ai-systems/periodic-table/orchestration#rg--rag)
5. Study [Guardrails](/docs/building-ai-systems/periodic-table/validation#gr--guardrails) and [Evaluation](/docs/building-ai-systems/periodic-table/validation#ev--evaluation)
6. Practice explaining concepts to others

### Solidify
7. Complete your 3 portfolio use cases
8. Review your understanding against the skills checklist
9. Schedule your assessment when ready

---

## What's Next?

You now have a solid foundation: the vocabulary, mental models, and hands-on experience that everything else builds on. You understand what AI can and can't do, and you've used it effectively in real work.

**Ready for the next step?** Head to the [Practitioner tier](/docs/building-ai-systems/tiers/practitioner). That's where you'll move from understanding AI to building AI-powered features: writing code, deploying to production, and solving real problems with real systems.
