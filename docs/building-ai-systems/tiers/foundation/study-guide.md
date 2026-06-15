---
title: Foundation Study Guide
sidebar_label: Study Guide
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PlaybookElement from '@site/src/components/PlaybookElement';
import TabsTocSync from '@site/src/components/TabsTocSync';

<TabsTocSync />

# Foundation Study Guide

A conversational guide for preparing for the Foundation tier assessment. This playbook covers all 7 elements you need to understand, with study resources, practice activities, and mini challenges for each.

---

## How This Works

The Foundation assessment is a **conversation, not a written test**. You'll discuss concepts with a Practitioner or Expert, walk through real examples, and demonstrate that you can reason about AI, not just recite definitions.

For each of the 7 elements below, you should be able to:
1. Explain the concept clearly in your own words
2. Describe trade-offs and limitations
3. Talk through examples from your own work

### Knowledge Check

Before moving to the assessment, you should feel confident answering "yes" to **all** of these for **every** element:

- [ ] I can clearly explain this concept to someone else
- [ ] I have applied this in at least one real scenario
- [ ] I understand common mistakes in this area
- [ ] I can describe limitations and trade-offs
- [ ] I know how to recover when something doesn't work as expected

### Final Advice

Before scheduling your assessment:
1. **Review your real-world usage.** Be ready with concrete examples.
2. **Be ready to explain your thinking process.** "Why" matters more than "what."
3. **Think in terms of reasoning, not memorization.** This is a conversation, not a quiz.

---

## The 7 Elements

<Tabs>
<TabItem value="prompts" label="Pr — Prompts" default>

<PlaybookElement
  symbol="Pr"
  name="Prompts"
  family="reactive"
  description="Writing effective AI instructions"
  link="/docs/building-ai-systems/periodic-table/reactive#pr--prompts"
/>

### Prompt — What Is It?

A good prompt engineer knows how to give instructions in a way that is easy for the AI to understand: organizing the request clearly, avoiding confusion, and being specific about what is expected.

They also know how to improve a prompt when the first answer is not ideal. Instead of accepting a weak result, they analyze what went wrong and rewrite the prompt to guide the model better.

Key prompting techniques to understand:

- **Zero-shot:** Give the AI a task with no examples; it relies on general knowledge
- **Few-shot:** Provide examples in the prompt to show the format/style you want
- **Chain-of-thought:** Ask the model to reason step by step before answering
- **Role-based:** Assign a persona (e.g., "act as a senior recruiter") to guide tone and priorities

:::tip What We Expect
1. You can identify the structure (role, context, format, task, constraints) within a prompt
2. You understand that prompts often require refinement and are comfortable iterating
3. You are familiar with at least two prompting techniques and know how to apply them
4. You can use real examples to demonstrate your understanding, not just explain theory
:::

### Prompt: Study Resources

**Start Here:**
- [The ADVANCED 2026 Guide to Prompt Engineering — Master the Perfect Prompt](https://www.youtube.com/watch?v=T9aRN5JkmL8)

After watching, you should be able to explain: why prompt structure matters, the difference between vague vs. structured prompts, what the main techniques are, and why iteration is essential.

<details>
<summary><strong>Going Deeper</strong></summary>

- [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Effective Prompts for AI: The Essentials](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/)
- [AI Prompting Guide](https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf)

Use these to expand your understanding of prompt design principles, study structured examples across use cases, and explore advanced techniques like structured output formatting.

</details>

:::warning Common Gaps
1. Expecting the AI to "figure out" what they want without providing enough context or clarity
2. Writing vague instructions like "fix this code" or "write an essay for me" without defining scope, format, or constraints
3. Regenerating responses repeatedly without improving or refining the original prompt
4. Not understanding why prompt structure matters or how it directly impacts output quality
:::

### Prompt: Practice

**Hands-On Activity:** Choose a vague instruction (e.g., "Write a project summary," "Fix this code," "Create interview questions"). Then:
1. Rewrite it using a clear role, context, constraints, and desired output format
2. Generate the output
3. Refine the prompt at least twice, improving clarity and structure each time
4. Compare the results: what changed, why did the output improve, which techniques did you apply?

**Mini Challenge:**

> *"Create feedback for a developer"*

1. Identify what is missing. Reflect on a time when AI failed you.
2. Rewrite it using at least two prompting techniques (e.g., role-based + structured format, or few-shot + constraints).
3. Justify your design decisions in 3-5 sentences.
4. Show how the revised version produces a more consistent and useful result.

:::info BONUS
Create a second version optimized for a different audience (e.g., junior vs senior developer) and explain what changed.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Apply structured prompting to something you are currently working on. Examples: *improve a Slack message for leadership alignment, generate structured interview questions for a role, refactor documentation into a clearer format, create a decision framework with defined constraints.*

Before using AI: define your objective, audience, constraints, and output format.

After using AI:
1. Evaluate the result. How did you diagnose any issues?
2. Refine the prompt strategically (not randomly)
3. Document what worked. What changed in your revised prompt?

</details>

**Ready?** You're ready if you can explain your reasoning, diagnose prompt failures, intentionally apply techniques, and improve a vague prompt live.

</TabItem>
<TabItem value="llms" label="Lg — LLMs">

<PlaybookElement
  symbol="Lg"
  name="LLMs (Large Language Models)"
  family="models"
  description="The core reasoning engines behind modern AI tools"
  link="/docs/building-ai-systems/periodic-table/models#lg--llm"
/>

### LLMs — What Is It?

Large Language Models (LLMs) are the core reasoning engines behind modern AI tools such as ChatGPT, Claude, Gemini, and Llama. They are trained on massive amounts of text data and learn patterns in language, reasoning, and structure.

An LLM does not "think" or "know" things in a human way. It predicts the most likely next word based on patterns learned during training. When properly prompted, this prediction ability can simulate reasoning, summarization, coding, analysis, and more.

:::tip What We Expect
1. You can explain what an LLM is at a high level: it generates text by predicting patterns, not by retrieving facts
2. You understand core capabilities and limitations, including what LLMs are strong at (drafting, summarizing, transformation) and where they struggle (guaranteed accuracy, real-time data, complex reasoning without structure)
3. You recognize hallucination risks and understand that confident-sounding outputs are not automatically correct
4. You understand training data limitations, including knowledge cutoffs and the absence of real-time awareness
5. You can use real examples to demonstrate this understanding
:::

### LLMs: Study Resources

**Start Here:**
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ)
- [How to Use AI APIs: A Beginner's Guide to Anthropic, OpenAI, and More](https://www.youtube.com/watch?v=kANs1GDjheI)

After watching, you should be able to explain: what an LLM is and how it generates responses, what "hallucination" means, how to decide whether to trust output, differences between major systems, and strengths/limitations in real-world use.

<details>
<summary><strong>Going Deeper</strong></summary>

- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- [Exposing biases, moods, personalities, and abstract concepts hidden in large language models](https://news.mit.edu/2026/exposing-biases-moods-personalities-hidden-large-language-models-0219)
- [What are large language models (LLMs)?](https://www.ibm.com/think/topics/large-language-models)
- [LLM Leaderboard](https://artificialanalysis.ai/leaderboards/models)

Use these to learn about model architecture at a high level (tokens, probability, training data), explore hallucinations and bias, and understand differences between major LLM systems.

</details>

:::warning Common Gaps
1. **Pattern-based Understanding:** "The model gives answers because it knows the facts." In reality, LLMs generate text by predicting tokens based on learned patterns, not retrieving facts.
2. **Hallucination Awareness:** "If the model sounds confident, the answer is probably correct." Confidence in tone does not equal correctness.
3. **Capability Boundaries:** "The model is intelligent, so it should handle any task equally well." In fact, LLMs have specific strengths and weaknesses.
4. **Data Awareness:** "The model always knows the latest information." LLMs have a knowledge cutoff and no built-in real-time awareness.
5. **Prompting Sensitivity:** "If the output isn't good, the model just isn't capable." Output quality is directly influenced by prompt clarity and structure.
:::

### LLMs: Practice

**Hands-On Activity:** Pick a real task you would normally use an LLM for (e.g., summarizing documentation, reviewing code). Then:
1. Describe how an LLM processes your input at a high level. What is it actually doing? What role does probability play?
2. Run the same prompt twice and compare outputs. What changed? What does this tell you about stochastic generation?
3. Modify the prompt and observe how output variability changes

**Mini Challenge:**

> *"Why did the model hallucinate in this case?"*

1. Provide three possible causes related to: lack of context, ambiguity in the prompt, and model training limitations
2. Propose one mitigation strategy for each cause
3. Explain your reasoning clearly as if you were teaching a junior developer

:::info BONUS
Explain why hallucination is not necessarily a "bug," but a natural consequence of how LLMs generate text.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Take a real workflow in your current role and analyze it through an LLM lens. Examples: *If using AI for documentation, what risks exist regarding accuracy? If using AI for decision support, how do you validate outputs? If using AI for content generation, how do you control hallucination and variability?*

Document: where the model could fail, what guardrails you would implement, and how you would explain model limitations to stakeholders.

</details>

**Ready?** You're ready if you can explain how LLMs generate responses, understand why variability and hallucination occur, can diagnose incorrect outputs, and suggest practical mitigation strategies.

</TabItem>
<TabItem value="embeddings" label="Em — Embeddings">

<PlaybookElement
  symbol="Em"
  name="Embeddings"
  family="retrieval"
  description="Representing meaning as numbers for semantic search"
  link="/docs/building-ai-systems/periodic-table/retrieval#em--embeddings"
/>

### Embeddings — What Is It?

Embeddings are about representing meaning as numbers. Instead of treating text as just words or keywords, embeddings convert text into numerical vectors (lists of numbers) that capture semantic meaning. This allows systems to compare ideas based on meaning, not just exact word matches.

For example, *"How do I reset my password?"* and *"I forgot my login credentials"* don't share many keywords, but an embedding model converts them into vectors that are close together in mathematical space, because they mean something very similar.

Embeddings make it possible to: perform semantic search, group similar content together, power recommendation systems, enable RAG, and improve classification systems.

:::tip What We Expect
1. An embedding is a numerical representation of meaning
2. Text is converted into vectors in a high-dimensional space
3. Concepts with similar meaning are positioned closer together
4. Similarity metrics (like cosine similarity) measure how close meanings are
5. Embeddings don't truly "understand" language — they capture statistical patterns
6. Retrieval quality depends heavily on the embedding model and how content is chunked
:::

### Embeddings: Study Resources

**Start Here:**
- [What Are Word Embeddings?](https://www.youtube.com/watch?v=wgfSDrqYMJ4)
- [Tokens vs Embeddings — What are they + How are they different?](https://www.youtube.com/watch?v=izbifbq3-eI)

After watching, you should be able to explain: how text is converted into vectors, how semantic similarity is calculated, how embeddings power search and clustering, and the trade-offs between keyword search and semantic search.

<details>
<summary><strong>Going Deeper</strong></summary>

- [Getting Started With Embeddings](https://huggingface.co/blog/getting-started-with-embeddings)
- [Semantic Search with FAISS](https://huggingface.co/learn/llm-course/en/chapter5/6)
- [Understanding and Applying Text Embeddings](https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/)

Use these to understand vector spaces and distance metrics, learn how embeddings are stored/retrieved using vector databases, explore common failure patterns (irrelevant retrieval, embedding mismatch, poor chunking), and evaluate when embeddings are the right tool.

</details>

:::warning Common Gaps
1. Confusing embeddings with simple keyword search
2. Believing embeddings "understand" language the way humans do
3. Not understanding that embeddings are numerical vector representations of meaning
4. Not understanding how similarity metrics (e.g., cosine similarity) determine results
:::

### Embeddings: Practice

**Hands-On Activity:** Choose a small set of 10-20 short text samples (e.g., product descriptions, support tickets, Slack messages). Then:
1. Generate embeddings for each text (using any embedding API or tool)
2. Compare at least three pairs: semantically similar texts, texts that share keywords but differ in meaning, and texts with different wording but the same meaning
3. Analyze which pairs have higher similarity and why
4. Explain in your own words: what an embedding represents, why they're useful for similarity search, and why they're not a "database of knowledge"

**Mini Challenge:**

> *"Our search feature returns irrelevant results even though we're using embeddings."*

1. List three possible causes (poor chunking strategy, embedding model mismatch, low-quality input text, missing metadata filtering)
2. Propose one corrective action for each cause
3. Explain how cosine similarity works at a high level, as if explaining to a product manager

:::info BONUS
Explain why embeddings do not "understand" meaning, but still capture semantic relationships effectively.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Think about your current role or a realistic business workflow. Examples: *internal knowledge base search, support ticket clustering, duplicate detection, resume-to-job matching, semantic document retrieval.*

For one of these: define the problem clearly, explain why embeddings are appropriate (or not), and describe how you would chunk the data, store vectors, compute similarity, and what guardrails you would add.

Be prepared to discuss trade-offs (speed vs. accuracy, chunk size vs. context retention) and failure modes (semantic drift, vague queries, domain mismatch).

</details>

**Ready?** You're ready if you can explain what embeddings are in simple terms, describe common use cases, diagnose typical issues (bad input text, poor chunking, wrong similarity expectations), and explain limitations and trade-offs.

</TabItem>
<TabItem value="guardrails" label="Gr — Guardrails">

<PlaybookElement
  symbol="Gr"
  name="Guardrails"
  family="validation"
  description="Safety mechanisms that ensure AI behaves responsibly"
  link="/docs/building-ai-systems/periodic-table/validation#gr--guardrails"
/>

### Guardrails — What Is It?

Guardrails refer to the policies, technical controls, and design decisions that limit unsafe or inappropriate behavior in AI systems. At a practical level, guardrails are about:

- Preventing harmful outputs (dangerous instructions, illegal guidance, explicit abuse)
- Reducing misinformation and hallucinated content
- Protecting sensitive data
- Enforcing ethical and organizational standards
- Controlling how AI is used in real workflows

Understanding guardrails means recognizing that AI systems are probabilistic and can generate unintended outputs. A strong AI practitioner does not assume the model will "self-regulate." Instead, they intentionally design workflows that anticipate failure modes and reduce risk.

:::tip What We Expect
1. Understand what AI guardrails are and why they are necessary
2. Recognize common risk areas: harmful instructions, hallucinated outputs, biased content, sensitive data exposure
3. Explain why AI systems can generate unintended or unsafe outputs
4. Understand that safety is a shared responsibility between the model, the prompt designer, the application layer, and the organization
:::

### Guardrails: Study Resources

**Start Here:**
- [NVIDIA NeMo Guardrails: Full Walkthrough for Chatbots / AI](https://www.youtube.com/watch?v=SwqusllMCnE)

After watching, you should be able to explain: why AI systems require guardrails, the difference between built-in model safety and application-level safeguards, common AI risk areas, how prompt constraints reduce unsafe outputs, and the trade-offs between strict guardrails and system usability.

<details>
<summary><strong>Going Deeper</strong></summary>

- [Build GuardRails For Your AI with Open-Source](https://cognitiveclass.ai/courses/build-guardrails-for-your-ai-with-open-source)
- [What are AI guardrails?](https://www.ibm.com/think/topics/ai-guardrails)
- [Safe and Reliable AI via Guardrails](https://www.deeplearning.ai/short-courses/safe-and-reliable-ai-via-guardrails/)

Use these to expand your understanding of AI safety principles, learn how safety mechanisms work at different layers (model, prompt, application, governance), study real-world case studies of AI failures, and develop strategies for balancing usability and safety.

</details>

:::warning Common Gaps
1. Assuming AI systems are inherently safe and do not require additional safeguards
2. Failing to anticipate harmful, misleading, or unintended outputs
3. Ignoring sensitive data exposure risks when inputting proprietary or personal information
4. Over-relying on automation without implementing validation or human review
:::

### Guardrails: Practice

**Hands-On Activity:** Choose a realistic AI use case (e.g., internal chatbot, code assistant, documentation generator). Then:
1. Identify at least 3 potential risks in that system (harmful output, hallucinated information, sensitive data exposure, bias)
2. For each risk, define one prompt-level safeguard, one application-level safeguard, and whether human review is required
3. Explain your reasoning: why is this risk realistic? What would happen with no guardrails? What is the trade-off?

**Mini Challenge:**

> *"We launched an AI assistant internally. A user asks for legal advice, and the system provides a confident but incorrect answer."*

1. Identify what guardrails failed (or were missing)
2. Propose: a prevention strategy (before output), a detection strategy (after output), and a recovery strategy (after discovery)
3. Explain how you would communicate this incident to leadership

:::info BONUS
Explain how over-restricting the assistant could reduce its usefulness and how you would balance safety and productivity.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Take something from your own workflow or organization. Examples: *AI-generated documentation, resume screening, customer support automation, internal knowledge base chatbot, AI-powered decision support.*

For one of these:
1. Map the system (input, model, output, user)
2. Identify where guardrails should exist (prompt design, output validation, data filtering, access control, human escalation)
3. Define what could go wrong, how you would detect it, and how you would recover

</details>

**Ready?** You're ready if you can explain why guardrails are needed, identify likely failure modes in a given use case, propose layered safeguards and justify the trade-offs, and describe how you would detect issues and recover.

</TabItem>
<TabItem value="context-windows" label="Cw — Context Windows">

<PlaybookElement
  symbol="Cw"
  name="Context Windows"
  family="orchestration"
  description="How much information an AI model can 'see' at once"
  link="/docs/building-ai-systems/periodic-table/orchestration#cw--context-windows"
/>

### Context Windows — What Is It?

A context window defines how much information an AI model can process in a single interaction. Tokens are pieces of text (words, subwords, or characters) that the model reads and uses to generate a response. Every message (system instructions, user input, and previous responses) consumes tokens.

When the total token count exceeds the model's context window:
- Older messages may be truncated
- Important instructions may be dropped
- The model may "forget" earlier parts of the conversation
- Responses may degrade in quality or coherence

Understanding context windows means understanding that memory in LLMs is not persistent. It exists only within the current token window. Longer conversations increase token consumption, and prompts, instructions, and examples all compete for limited space.

:::tip What We Expect
- Understand what tokens are and how text is converted into tokens
- Understand that context windows have size limits measured in tokens
- Recognize that all input and output tokens count toward that limit
- Know that when the context window is exceeded, older information may be truncated or lost
- Explain why models may "forget" earlier parts of a long conversation
- Understand that context limits affect both quality and cost
:::

### Context Windows: Study Resources

**Start Here:**
- [Stop Wasting Tokens: The Art of Context Engineering](https://www.youtube.com/watch?v=zMM5zqesL1g)

After watching, you should be able to explain: what a context window is, what tokens are and how they relate to text length, why both input and output consume tokens, and how exceeding context limits degrades quality.

<details>
<summary><strong>Going Deeper</strong></summary>

- [Advanced Prompt Engineering and Memory Management](https://www.coursera.org/learn/packt-advanced-prompt-engineering-and-memory-management-0h7qa)
- [Thinking in Tokens: A Practical Guide to Context Engineering](https://www.novusasi.com/blog/thinking-in-tokens-a-practical-guide-to-context-engineering#:~:text=API%20pricing%20is%20linear%20in,or%20headroom%20for%20new%20features)
- [Top techniques to Manage Context Lengths in LLMs](https://agenta.ai/blog/top-6-techniques-to-manage-context-length-in-llms)

Use these to expand your understanding of tokens and context limits, learn how context size impacts quality, cost, and reliability, explore why long conversations deteriorate over time, and understand trade-offs between keeping more history vs. staying focused.

</details>

:::warning Common Gaps
1. Believing LLMs have unlimited memory
2. No awareness of token limits or how they affect behavior
3. Feeding entire documents or long histories without managing context
4. Misinterpreting degraded responses as intelligence issues instead of context overflow
:::

### Context Windows: Practice

**Hands-On Activity:** Choose one of the following: a long document (10+ pages), a long chat conversation, or a multi-step reasoning prompt. Then:
1. Estimate how many tokens the input might consume
2. Identify what parts are truly necessary for the task
3. Reduce the context intentionally (summarize, remove redundancy, split into chunks)
4. Compare the outputs: full raw input vs. context-managed version. Did quality or coherence improve?

**Mini Challenge:**

> *A chatbot performs well for the first 10 messages, but after 40 exchanges it starts ignoring earlier instructions and contradicting itself.*

1. Diagnose what is likely happening
2. Explain what a context window is in this scenario
3. Propose at least three solutions (conversation summarization, memory pruning, retrieval-based context injection, system instruction reinforcement)

:::info BONUS
Explain how cost and latency are affected as context grows.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Think about a realistic AI system. Examples: *Customer Support ChatBot, Internal Knowledge-Base Assistant, Legal Document Analyzer, Code Review Assistant.*

For one of these:
1. Map how context flows through the system (what is sent, how often, how large)
2. Identify risks (context overflow, instruction loss, increased latency, rising token cost)
3. Design a context management strategy (chunking, summarization, retrieval, selective memory retention)

</details>

**Ready?** You're ready if you can explain what a context window is and how token limits affect behavior, diagnose when poor output is caused by context overflow, and intentionally manage context using practical strategies.

</TabItem>
<TabItem value="rag" label="Rg — RAG">

<PlaybookElement
  symbol="Rg"
  name="RAG (Retrieval-Augmented Generation)"
  family="orchestration"
  description="Grounding AI responses in external knowledge"
  link="/docs/building-ai-systems/periodic-table/orchestration#rg--rag"
/>

### RAG — What Is It?

RAG (Retrieval-Augmented Generation) is a method that improves AI responses by giving the model access to external information. Instead of relying only on training data, RAG retrieves relevant data from a knowledge source and uses it to generate a more accurate, grounded answer.

The flow works like this:
1. A user submits a question
2. The system searches an external knowledge base for relevant information
3. The most relevant pieces of content are retrieved
4. That retrieved context is injected into the prompt
5. The LLM generates a grounded response based on that augmented prompt

The key idea is **grounding**. Without retrieval, an LLM may hallucinate or provide outdated information. With RAG, the model is guided by real, current, and domain-specific data.

:::tip What We Expect
- Understand the retrieve-then-generate pattern
- Clearly explain how retrieval happens before generation
- Understand that RAG connects LLMs to external or private data sources
- Recognize that LLMs alone rely only on training data, while RAG provides fresh and domain-specific information
- Explain why RAG reduces hallucination (by grounding in retrieved context)
- Understand that RAG does not eliminate hallucination completely — it reduces risk when retrieval is done correctly
:::

### RAG: Study Resources

**Start Here:**
- [Learn RAG From Scratch — Python AI Tutorial from a LangChain Engineer](https://www.youtube.com/watch?v=sVcwVQRHIc8)
- [Complete RAG Crash Course With Langchain In 2 Hours](https://www.youtube.com/watch?v=nAmC7SoVLd8)

After watching, you should be able to explain: the retrieve-then-generate pattern, why LLMs alone can hallucinate or provide outdated information, the basic components of a RAG pipeline (chunking, embeddings, vector similarity search, context injection, generation), and why retrieval quality directly affects answer quality.

<details>
<summary><strong>Going Deeper</strong></summary>

- [Retrieval Augmented Generation (RAG) Course](https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/)
- [Building a No-Code Chatbot with Docker and RAG: A Comprehensive Guide](https://glasp.co/hatch/paqjyrd9uxgkc3f9/p/2cmPLKAIEdXY9eH8AE9J)
- [Build a RAG agent with LangChain](https://python.langchain.com/docs/tutorials/qa_chat_history/)

Use these to learn how retrieval works in practice, understand chunking strategies and their impact on quality, explore common failure modes (irrelevant retrieval, missing key context, context overload, grounded but wrong answers from bad sources), and understand trade-offs between precision vs. recall, latency vs. depth, and simplicity vs. complexity.

</details>

:::warning Common Gaps
1. Confusing RAG with fine-tuning or simple prompting
2. No concept of how to ground LLM responses in real data
3. Not understanding how retrieval quality directly impacts generation quality
4. Treating hallucination as purely a generation issue instead of sometimes a retrieval failure
:::

### RAG: Practice

**Hands-On Activity:** Pick a realistic use case (e.g., "internal policy assistant" or "customer support FAQ bot"). Describe the RAG flow in your own words:
1. What kind of data would be stored in the knowledge source?
2. How would the system decide what information to retrieve for a user question?
3. What gets inserted into the prompt, and why?
4. What should the model do if the retrieved context does not contain the answer?
5. Explain why this approach is better than "just prompting the LLM" for this use case.

**Mini Challenge:**

> *"A user asks a question. The RAG system retrieves content that is relevant, but the final answer is still wrong."*

1. Give three possible reasons (retrieval returned the wrong chunk, retrieval returned a right chunk but missing key detail, the model misinterpreted or ignored the context)
2. For each reason, propose one fix (no code, just explain the change)
3. Explain how you would tell whether the problem is retrieval or generation

:::info BONUS
Explain why RAG reduces hallucination risk but doesn't eliminate it.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Choose one real workflow you have seen (or could imagine at work). Examples: *"Answer questions about internal documentation," "Summarize HR policies accurately," "Support ticket assistant that cites sources."*

Describe a simple design plan:
1. What are the top 2-3 types of questions users will ask?
2. What data sources would you ground answers in?
3. What would you retrieve (and how much) to stay within context limits?
4. What safety/quality checks would you add (e.g., "cite sources," "say 'I don't know' when context is missing")?

</details>

**Ready?** You're ready if you can explain the retrieve-then-generate pattern, diagnose failures conceptually, and describe how you would ground answers in real data.

</TabItem>
<TabItem value="evaluation" label="Ev — Evaluation">

<PlaybookElement
  symbol="Ev"
  name="Evaluation"
  family="validation"
  description="Measuring whether an AI system is actually working"
  link="/docs/building-ai-systems/periodic-table/validation#ev--evaluation"
/>

### Evaluation — What Is It?

Evaluation is how we measure whether an AI system is actually working. It answers questions like: *Is the output correct? Is it relevant? Is it grounded in the right data? Is it safe? Is it consistent? Is it useful for the intended user?*

Evaluation is not just about checking correctness. It is about detecting failure patterns, identifying hallucination, comparing approaches, measuring trade-offs, and improving system reliability. Without evaluation, teams rely on intuition. With evaluation, teams rely on evidence.

Evaluation takes different forms:
- **Quantitative Metrics:** Accuracy, precision/recall, similarity scores, latency, error rates. Useful when tasks have clear expected outcomes.
- **Benchmarks:** Predefined datasets or scenarios used to compare performance across model versions, prompt variations, RAG pipeline changes, or guardrail adjustments.
- **Human Evaluation:** Assessing clarity, helpfulness, tone, logical reasoning, safety, and appropriateness. Essential when subjective judgment matters.

:::tip What We Expect
- Understand that AI systems must be evaluated intentionally, not assumed to be correct
- Explain why "it looks good to me" is not a reliable evaluation method
- Recognize different types of evaluation: quantitative metrics, structured test cases, human review
- Understand that evaluation criteria must align with the system's purpose
- Recognize that improving prompts, RAG pipelines, or guardrails requires measurable feedback
:::

### Evaluation: Study Resources

**Start Here:**
- [How to Evaluate (and Improve) Your LLM Apps](https://www.youtube.com/watch?v=-sL7QzDFW-4)

After watching, you should be able to explain: why evaluation is necessary for any AI system, the difference between quantitative metrics and human evaluation, why benchmarks and structured test cases matter, how to define what "good" means before measuring performance, and how evaluation supports iteration and continuous improvement.

<details>
<summary><strong>Going Deeper</strong></summary>

- [Best Practices and Methods for LLM Evaluation](https://www.databricks.com/blog/best-practices-and-methods-llm-evaluation#:~:text=,agent%20LLM%20systems)
- [LLM evaluation: a beginner's guide](https://www.evidentlyai.com/llm-guide/llm-evaluation)
- [LLM Evaluation with Opik](https://www.comet.com/site/llm-course/)

Use these to expand your understanding of evaluation methods, learn how to design test sets that reflect real user behavior, study common evaluation pitfalls (overfitting to a small test set, measuring the wrong thing, using metrics that don't match the use case), and understand trade-offs between evaluation depth vs. time cost, automated scoring vs. human judgment, and speed vs. reliability.

</details>

:::warning Common Gaps
1. Assuming AI outputs are correct by default
2. No concept of how to measure AI quality systematically
3. Relying on subjective judgment instead of defined criteria
4. Measuring the wrong metrics for the intended use case
:::

### Evaluation: Practice

**Hands-On Activity:** Choose a simple AI use case (e.g., FAQ assistant, document summarizer, resume screener). Then:
1. Define what "good output" means for this system (accuracy? relevance? tone? speed? grounded answers?)
2. Define 3 measurable criteria for success (e.g., "Answer must reference source," "Summary must include key points," "Response must not introduce unsupported claims")
3. Describe how you would compare Version A (current system) vs. Version B (improved prompt or pipeline), using criteria, not intuition

**Mini Challenge:**

> *"A team updates a prompt and says, 'The responses feel better now.'"*

1. Explain why this is not a sufficient evaluation
2. Propose a simple evaluation plan: What would you measure? How many test cases? Would human review be required?
3. Describe how you would detect regression over time

:::info BONUS
Explain the difference between evaluating a single output and evaluating system performance consistently.
:::

<details>
<summary><strong>Real-World Application</strong></summary>

Think of a real workflow in your organization that uses AI (or could use AI).

For that workflow:
1. Define the objective clearly
2. Identify what failure looks like and what success looks like
3. Design a simple evaluation loop: How will outputs be reviewed? How often? By whom? What metrics or criteria will be tracked?

</details>

**Ready?** You're ready if you can define what "good" means for a specific AI use case, propose measurable criteria instead of relying on intuition, compare two versions using structured reasoning, and understand that improvement requires evidence, not opinions.

</TabItem>
</Tabs>
