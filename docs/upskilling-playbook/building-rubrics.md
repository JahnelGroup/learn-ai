---
id: building-rubrics
title: Building Assessment Rubrics
sidebar_position: 4
---

import RubricScale from '@site/src/components/RubricScale';

# Building Assessment Rubrics

How do you tell real capability from shallow enthusiasm? Not with a quiz. You design a rubric that rewards reasoning over recitation, then escalate the *way* you assess as the stakes rise.

This page hands you our rubric as a **worked exemplar to adapt for your org**: its structure, its scoring model, the cues to listen for, and the red flags that should give you pause. Take the shape and the philosophy; rewrite the specifics in your own stack and risk profile.

:::info This is a template, not an answer key
What follows is an *exemplar*, a structure to adapt, not a live grading sheet to read aloud. We deliberately describe **what a strong answer demonstrates** rather than publishing word-for-word model answers. A rubric that doubles as a study guide stops measuring understanding and starts measuring memorization. Keep your live, calibrated instrument internal; publish the design, not the key.
:::

---

## The core idea: escalate the modality, not just the difficulty

The biggest mistake in capability assessment is keeping one format and bolting on harder questions. Enthusiasm survives a harder quiz. It does not survive a change in *how* you ask.

So the modality escalates with the tier — **talk it → build it → multiply it**:

<div className="table-scroll">

| Tier | Core question | Modality | Evidence | Who assesses |
|---|---|---|---|---|
| **Foundation** | Can you reason about AI? | **Conversation** | A few documented use cases | A Practitioner or Expert |
| **Practitioner** | Can you build and ship it? | **Technical demo + walk-through** | A deployed feature | An Expert |
| **Expert** | Can you architect it and elevate others? | **Evidence portfolio + peer panel + mentorship vouching** | Architecture + teaching artifact + mentorship | A peer panel, with mentee corroboration |

</div>

That escalation *is* the answer to "how do you separate real capability from shallow enthusiasm." Enthusiasm survives a conversation, struggles at "show me what you shipped," and is incinerated at "show me who you made better."

:::tip Adapt this for your org
The three columns are the durable part. The evidence and the people who assess are where you tailor: a security-heavy team weights different dimensions than a data team; a small org may have one Expert running panels. Keep the escalation; change the contents.
:::

---

## The scoring model: Solid / Partial / Gap

Every dimension on every tier is scored on the same three-point scale. Using one scale everywhere keeps assessors calibrated and keeps the rubric scannable.

<RubricScale label="The scale used on every dimension" />

A few principles that make the scale work:

- **It's "Not Yet," not "Fail."** A gap is information about where to focus next, not a verdict on someone's worth.
- **Reasoning over recitation.** Someone who reasons honestly to a partial answer beats someone who recites a polished one they don't understand.
- **Gaps are misconceptions, not missing trivia.** A gap means a wrong mental model (treating an LLM as a search engine), not a forgotten term.
- **Define retake thresholds up front** so the bar is consistent across assessors. For example, "several partials, or one gap on a core dimension, means revisit."

---

## Foundation — *talk it*

**Modality:** a conversation, not a test. The goal is conceptual understanding (*can they speak to it?*), not execution. Open with small talk, then ease in. Pick one question per element and follow up when an answer is thin.

**What passing looks like:** solid conceptual understanding across the elements. They can explain what each concept is and why it matters, give examples from real experience, and discuss trade-offs and limits. Passing doesn't require perfection; minor gaps are fine if the overall understanding is sound. Genuine understanding beats memorization.

Our Foundation instrument covers seven elements. For each, score Solid / Partial / Gap.

<RubricScale compact />

<div className="table-scroll">

| Element | What a strong answer demonstrates (Solid) | Partial | Gap |
|---|---|---|---|
| **Prompts** | Treats prompt structure (role, context, task, format, constraints) as load-bearing; iterates intentionally; knows patterns like few-shot and chain-of-thought; draws on prompts they personally engineered. | Knows prompting exists but offers only generic advice ("be specific"); can't explain few-shot or chain-of-thought when pressed; no real complex examples. | Treats the model like a search box or a human assistant; no sense that structure matters or that iteration is part of the work. |
| **LLMs** | Understands it predicts likely text rather than retrieving facts; aware of hallucination as inherent, not a bug; knows about training cutoffs and limits. | Knows the model "hallucinates" but thinks it's a defect to be patched; can explain only with heavy jargon. | Talks as if the model searches the internet or queries a live fact database; assumes it's omniscient and reliable. |
| **Embeddings** | Explains meaning represented as vectors; understands semantic similarity; connects it to search, recommendations, and vector stores. | Knows embeddings power search/RAG but can't explain the "meaning as math" part; treats vector stores as a black box. | Confuses embeddings with keyword matching; no concept of meaning represented numerically. |
| **Guardrails** | Distinguishes productivity guardrails from product guardrails; names content filtering, PII protection, prompt injection; understands a secondary safety layer is needed. | Thinks guardrails are mostly UX disclaimers or "don't say bad words"; misses injection, data poisoning, PII leakage. | Hasn't considered safety; assumes the provider handles all of it. |
| **Context windows** | Understands tokens and size limits; treats the window as short-term memory; aware that quality degrades and cost/latency rise as it fills. | Knows there's a text limit but measures it in "pages"; assumes a bigger window fixes everything. | Thinks you can dump unlimited material into one prompt with no consequence. |
| **RAG** | Understands retrieve-then-generate; knows it grounds responses in real data; distinguishes RAG from fine-tuning and from context-stuffing. | Knows RAG means "connect the model to your data" but can't explain the two steps; conflates it with fine-tuning. | Doesn't know what RAG does; would paste docs into every prompt or train a model from scratch. |
| **Evaluation** | Knows "looks good to me" isn't enough; mentions test data, human-in-the-loop, and metrics; treats evaluation as ongoing. | Recognizes evaluating AI is hard but relies on manual, vibe-based spot checks; no systematic approach. | Believes exact-match unit tests work for LLMs; no strategy for non-determinism. |

</div>

**Listen for:** structure awareness, an iteration mindset, real practical examples, awareness of limits (hallucination, cutoffs, token limits), and the instinct to *measure* rather than assume.

**Red flags:** believes prompts should work first try · treats the model as an infallible knowledge base · no concept of grounding in real data · assumes outputs are correct by default.

**Portfolio walk-through:** alongside the conversation, review a handful of the candidate's documented use cases. Look for *variety* (different tools and domains), *depth* (reflection on what worked and why), *real application* (actual work, not hypotheticals), and *iteration*. Ask what they'd do differently, what surprised them, and how they validated the output.

---

## Practitioner — *build it*

**Core question:** can you build and deploy AI features in production?

**Modality:** the candidate **demos something they actually shipped** and defends their decisions live. You can't bluff a demo. There's a hard prerequisite: no shipped artifact means it isn't a Practitioner assessment yet.

A workable shape for the session: set the tone, watch a live demo they drive, probe the architecture against *their* system, then press on failure and evaluation ("What broke? How do you know it works? What changes at 100x?").

**Scoring:** mirror the Foundation scale, raise the bar. Score the dimensions their system actually uses; mark the rest **N/A** and don't penalize for them. Pass on Solid across the core build dimensions with no gaps on anything they actually used.

<RubricScale compact />

<div className="table-scroll">

| Dimension | What a strong answer demonstrates (Solid) | Partial | Gap |
|---|---|---|---|
| **Function calling / tool use** | Designs clear tool schemas; validates args before execution; handles tool errors and feeds them back; knows when the model should *not* call a tool; treats tools as an attack surface. | Wired up tool calling (often via a framework) and it works on the happy path, but can't explain schema choices or what happens on a malformed call. | Thinks "function calling = the AI runs my code." No validation, no failure handling, no execution guardrails. |
| **RAG (implementation)** | Deliberate chunking with rationale; measures retrieval quality; uses reranking or metadata filtering; has a "no relevant context → say so" path; can isolate retrieval vs. generation failures; grounding is visible. | Built a working pipeline from a tutorial; default chunk size "because the example used it"; no retrieval eval; can't diagnose a grounded-but-wrong answer. | Dumps docs into a store with defaults, measures nothing, conflates retrieval and generation failures. |
| **Vector DBs / retrieval infra** | Justifies index and distance-metric choices; uses metadata filtering or hybrid search; understands cost and latency at scale and has a freshness/reindex story. | Uses whatever the tutorial used; treats the store as a black box; hasn't thought about scale. | No mental model of indexing; can't explain why results are slow or irrelevant. |
| **Agents** | Can articulate when *not* to use an agent and prefers the simplest thing that works; defines loop termination, step/cost ceilings, and human checkpoints; has observability into what the agent did. | Built an agent because it's the exciting option; happy path works; weak termination and cost control. | "Agent = let it figure it out." No loop control, no guardrails, surprised by token burn. |
| **Frameworks** | Chose deliberately; can defend it against alternatives; knows what it abstracts and where the escape hatches are. | Uses a framework "because everyone does"; can't say what it abstracts or why this one. | Cargo-cults the framework; can't function without it; no idea what's underneath. |
| **Model selection** | Matches model to task; routes (small/local for cheap-fast-private, large for hard reasoning); reasons about cost, latency, and privacy; selection is eval-driven. | Uses the biggest model for everything; vaguely aware smaller models exist. | One model for all tasks; reaches for fine-tuning before prompting. |
| **Context management (applied)** | Real strategy in the shipped system: retrieval, summarization, pruning, structured context; manages cost/latency; aware of degradation. | Stuffs the context and hopes; reacts only when it breaks. | Dumps everything on every call; blames the model for degraded output. |
| **Evaluation (applied)** | A real eval harness: representative test set, defined metrics, regression checks in the loop; uses LLM-as-judge carefully and/or human review; shows evidence rather than asserting it. | Manual spot checks; no regression strategy; no test set. | Ships on vibes; no eval; learns of failures from users. |
| **Production readiness** | Verifiable, auditable outputs; layered guardrails including security (injection, PII, data exposure); human-in-the-loop where stakes warrant; monitoring and an incident path. | Some guardrails, often UX-level disclaimers; security is thin; no incident plan. | Assumes the provider handles safety; no monitoring; no plan for misbehavior. |

</div>

**Listen for:** judgment under trade-offs, honesty about operational scars, evidence over assertion, and a scale instinct.

**Red flags:** model output flows straight into execution · "it hasn't broken yet" · retrieval quality never measured · an agent chosen for novelty with no kill-switch · "the responses feel better now" with no measurement · "the model won't do that."

**Cross-probes to use throughout:** "Why this architecture and not the simpler alternative?" · "What broke in production and what did you walk back?" · "Show me how you *know* it works." · "What's the simplest version that would've worked, and why didn't you ship that?"

---

## Expert — *multiply it*

**Core question:** can you architect AI systems, make strategic technology calls, and advance *others'* capability?

**Modality:** an **evidence portfolio + a peer panel + mentorship vouching** — not a single sitting. You're measuring a track record, not a good day. The defining requirement is independently corroborated evidence that the candidate made *other people* better; without it, you have a strong Practitioner, not an Expert.

A workable shape: the candidate submits their artifacts ahead of time; a panel of two or more Experts reviews the architecture and teaching artifact; the people mentored confirm the impact independently; and a strategic conversation probes hype-versus-signal judgment.

**Scoring:** Solid on architecture judgment, force multiplication, and strategic technology selection, with no gaps anywhere and mentorship independently corroborated. When in doubt, "Not Yet," and name the missing evidence.

<RubricScale compact />

<div className="table-scroll">

| Dimension | What a strong answer demonstrates (Solid) | Partial | Gap |
|---|---|---|---|
| **Architecture judgment** | Designs end-to-end systems that survived production constraints; reasons explicitly about latency/cost/quality/risk trade-offs; knows where the system is fragile and why; chose the simplest architecture that meets the bar. | Built something real but can't fully defend the trade-offs; choices were inherited; struggles to name where it would break. | A diagram that never met real constraints; complexity for its own sake; can't explain failure modes. |
| **Strategic technology selection** | Makes build/buy and prompt→RAG→fine-tune calls on evidence and cost-at-scale, not fashion; selects models against evals and total cost; knows when *not* to adopt the new thing. | Has opinions, but they track hype more than evidence; weak on cost-at-scale or build-vs-buy. | Reaches for the most advanced option by default; conflates "newer" with "better." |
| **Risk, red-teaming & security leadership** | Proactively red-teams (injection, exfiltration, jailbreaks, abuse); designs layered guardrails plus monitoring and incident response; sets the standard others follow. | Aware of risks and adds some guardrails, but reactive; no real red-teaming practice; security is personal, not institutionalized. | Treats safety as the provider's job; no adversarial testing; no incident plan. |
| **Force multiplication** *(the defining dimension)* | Concrete, independently corroborated evidence of leveling others up: mentees who advanced, reusable standards adopted across teams, a talk that changed how people work. | Helps people ad hoc; some shared artifacts, but adoption is thin or self-reported only. | A strong individual contributor who keeps the capability to themselves; no durable artifacts; no one credits them. |
| **Emerging-tech fluency** | Fluent in the emerging techniques (fine-tuning, red teaming, multi-agent, synthetic data, interpretability, thinking models, MCP); knows when each earns its complexity and when it doesn't; separates signal from hype with reasoning. | Knows the vocabulary and has tried some, but enthusiasm outruns judgment; can't say when *not* to use them. | Either dismisses everything new or chases all of it; no discriminating judgment. |
| **Organizational influence / teaching** | Produced teaching that shifted how a team or the org works (a standard adopted, a pattern spread); communicates to engineers and leadership alike. | Gave a talk or wrote a doc, but the impact is unclear or didn't propagate. | No teaching artifact, or it had no audience or effect. |

</div>

**Listen for:** scars and ownership, strategic calls defended with reasoning *and* owned when wrong, and measurable evidence that other people improved.

**Red flags:** no scars, "it just works," can't name a thing they'd change · every problem wants the newest technique · can only talk about their *own* output · "I'm too busy to mentor."

**The incineration questions**, the ones shallow enthusiasm can't fake:

- "Show us who you made better — and let us hear it from them." *(multiplication, corroborated)*
- "Walk us through a strategic AI call you got *wrong*, and what you changed." *(judgment plus humility)*
- "What's overhyped right now, and why?" *(discrimination, not cheerleading)*
- "Where is this system most likely to fail in 18 months?" *(forward-looking ownership)*

---

## Keep it consistent across tiers

A few threads run through all three tiers. Preserve them when you adapt the rubric:

- **Conversation and evidence over memorization; reasoning over recitation.**
- **One scale (Solid / Partial / Gap) at the dimension level,** with retake thresholds defined per tier.
- **"Not Yet," not "Fail."** Gaps are information.
- **Every tier rewards judgment and honesty about limits** — the cultural antidote to shallow enthusiasm.

:::warning Keep your live instrument internal
Publish the design (structure, scale, cues, red flags), but keep the calibrated, fully-worded evaluator instrument as an internal asset. The moment recitable model answers leak into a study guide, the rubric measures memorization instead of understanding. Calibrating your assessors and keeping the content current is ongoing work; that maintenance is what keeps the rubric honest.
:::
