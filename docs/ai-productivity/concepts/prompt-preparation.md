---
id: prompt-preparation
title: Prompt Preparation
sidebar_position: 1
---

# Prompt Preparation

> *"Good prompts are written before you start typing."*

---

## Preparation > Engineering

You've heard of "prompt engineering," the skill of crafting effective prompts. But the most impactful skill is **prompt preparation**: the work you do before typing a single word.

The difference:
- **Prompt engineering** is how to phrase your request
- **Prompt preparation** is what to think through before requesting

Most bad AI interactions fail before the prompt is written.

---

## The Preparation Framework

### 1. Clarify the Goal

Before opening any AI tool, answer:
- What exactly do I want to accomplish?
- What does "done" look like?
- How will I know if the output is good?

**Bad**: "I need help with this code"
**Prepared**: "I need this function to handle null inputs gracefully, returning an empty array instead of throwing"

### 2. Gather Context

What information does AI need?
- Relevant code, documents, or data
- Constraints and requirements
- Examples of good outputs
- Things that have already been tried

**Bad**: "Fix this bug"
**Prepared**: [paste the function] + [paste the error] + [paste example input that fails] + "This worked before commit abc123"

### 3. Define Constraints

What boundaries exist?
- Style/convention requirements
- Technology constraints
- Performance requirements
- What to avoid

**Bad**: "Make this faster"
**Prepared**: "Optimize this query. Must work with PostgreSQL 14, can't add indexes, should reduce response time from 2s to under 500ms"

### 4. Anticipate Follow-ups

What will you need next?
- Tests for this code?
- Documentation?
- Alternative approaches?

Consider asking for these upfront rather than in follow-up messages.

---

## Common Preparation Failures

### The Vague Goal
**What happens**: Generic advice that doesn't solve your specific problem
**Fix**: Spend 30 seconds articulating exactly what you need

### The Missing Context
**What happens**: AI makes incorrect assumptions, wastes your time
**Fix**: Include the actual code/data/document, not descriptions of it

### The Unconstrained Ask
**What happens**: Technically correct answer that doesn't fit your situation
**Fix**: State your constraints explicitly

### The Premature Request
**What happens**: You ask, get an answer, realize you asked the wrong question
**Fix**: Think through what you're really trying to accomplish

---

## Preparation Templates

### For Code Tasks
```
GOAL: [specific outcome]

CONTEXT:
[paste relevant code]

CONSTRAINTS:
- [technology requirements]
- [style requirements]
- [what to avoid]

DONE WHEN:
- [success criteria]
```

### For Writing Tasks
```
GOAL: [what the writing should accomplish]

AUDIENCE: [who will read this]

TONE: [formal/casual/technical/etc]

LENGTH: [approximate]

INCLUDE:
- [required elements]

AVOID:
- [what not to include]

EXAMPLE OF GOOD OUTPUT:
[if available]
```

### For Research Tasks
```
GOAL: [what I'm trying to learn/decide]

WHAT I ALREADY KNOW:
- [current understanding]

SPECIFIC QUESTIONS:
1. [question 1]
2. [question 2]

FORMAT: [how to present findings]
```

---

## Preparation Time Investment

| Task Complexity | Prep Time | Prompt Time |
|----------------|-----------|-------------|
| Quick question | 10 seconds | 5 seconds |
| Standard task | 1-2 minutes | 30 seconds |
| Complex task | 5-10 minutes | 1-2 minutes |
| Project-level | 15-30 minutes | 5 minutes |

The more complex the task, the more preparation pays off.

---

## Signs You Skipped Preparation

- AI asks clarifying questions you should have anticipated
- You immediately need to correct assumptions
- The output is technically correct but useless for your situation
- You spend more time in follow-ups than you would have spent preparing
- You find yourself thinking "that's not what I meant"

---

## Practice

Before your next AI interaction:

1. **Pause** before opening the AI tool
2. **Write down** your goal in one sentence
3. **Gather** all relevant context
4. **List** your constraints
5. **Then** write your prompt

After a week of this practice, it becomes automatic, and your AI interactions become dramatically more effective.

---

## Related Concepts

- **[Plan Before Execute](/docs/ai-productivity/concepts/plan-before-execute)**: For multi-step tasks
- **[Context Files](/docs/ai-productivity/concepts/context-files)**: Encoding preparation permanently
- **[Deep Research](/docs/ai-productivity/concepts/deep-research)**: When the goal itself needs clarification
