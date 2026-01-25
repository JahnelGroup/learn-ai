---
id: plan-before-execute
title: Plan Before Execute
sidebar_position: 2
---

# Plan Before Execute

> *"A minute of planning saves an hour of fixing."*

---

## Why Planning Matters

When AI executes code changes, it moves fast. Really fast. Without a plan, you might get:
- Correct solution to the wrong problem
- Right approach, wrong files touched
- Unnecessary complexity introduced
- Breaking changes you didn't anticipate

**Planning** creates a checkpoint between understanding and action.

---

## The Plan-Execute Pattern

### Instead of This:
```
"Implement user authentication for this app"
[AI immediately starts writing code]
```

### Do This:
```
"Plan how you would implement user authentication for this app.
Don't write code yet—just outline the approach."

[Review plan]

"That looks good. Proceed with the implementation."
```

---

## What a Good Plan Includes

### 1. Understanding Check
AI articulates its understanding of the task:
- What problem are we solving?
- What are the requirements?
- What constraints exist?

### 2. Approach Outline
High-level strategy:
- What patterns will be used?
- What's the sequence of changes?
- What are the key decisions?

### 3. Files Affected
Explicit list:
- Files to create
- Files to modify
- Files to delete (if any)

### 4. Risks and Considerations
What could go wrong:
- Breaking changes
- Edge cases
- Security considerations
- Performance implications

### 5. Verification Strategy
How to confirm success:
- What tests to run
- Manual verification steps
- Rollback approach if needed

---

## Plan Prompts

### For Features
```
Plan how you would implement [feature].

Include:
1. Your understanding of what's needed
2. High-level approach
3. Files you'll create or modify
4. Key decisions and trade-offs
5. How we'll verify it works

Don't write any code yet.
```

### For Refactoring
```
Plan the refactoring of [area] to [new pattern].

Include:
1. Current state assessment
2. Target state description
3. Migration steps (in order)
4. Files affected at each step
5. How to verify nothing breaks
6. Rollback plan if issues arise

Don't make any changes yet.
```

### For Bug Fixes
```
Plan how you would fix [bug].

Include:
1. Your understanding of the bug
2. Root cause hypothesis
3. Proposed fix approach
4. Files to modify
5. How to verify the fix works
6. Potential side effects to check

Don't implement yet.
```

---

## When to Plan

| Task Type | Plan First? |
|-----------|-------------|
| Quick one-liner | No |
| Single function | Maybe |
| Multiple files | Yes |
| Architectural change | Definitely |
| Unknown codebase | Yes |
| Complex logic | Yes |
| Anything irreversible | Always |

**Rule of thumb**: If you can't predict exactly what AI will do, ask for a plan.

---

## Reviewing Plans

### Good Signs
- AI articulates the problem accurately
- Approach matches your expectations
- File list is complete and correct
- Risks are acknowledged
- Verification is specific

### Red Flags
- AI misunderstood the requirement
- Approach is overcomplicated
- Missing files that should be affected
- No mention of edge cases
- Vague verification ("test it")

### When to Course Correct
If the plan has issues, address them before execution:

```
"Your understanding is correct, but let's adjust the approach:
- Use pattern X instead of Y because [reason]
- Also need to update [missed file]
- Don't worry about [unnecessary concern]

Please update the plan, then we'll proceed."
```

---

## Plan Mode in AI Tools

Many AI coding tools have explicit plan modes:

### Claude Code
```
/plan Implement feature X
```
Claude creates a plan file, you review, then execute.

### Cursor
In Composer, ask for an outline before implementation.

### General Pattern
Any AI tool can do planning—just explicitly ask for a plan before code.

---

## Common Mistakes

### Skipping Plan Review
Getting a plan but immediately saying "go ahead" defeats the purpose. Actually read it.

### Plans That Are Too Detailed
A plan isn't the implementation. If AI writes pseudocode for every function, that's too much. High-level steps are sufficient.

### Plans That Are Too Vague
"1. Update the code. 2. Test it." isn't a plan. You need enough detail to catch misunderstandings.

### Not Iterating on Plans
If the plan isn't right, fix it. Don't hope execution will somehow be better than the plan.

---

## Practice Exercise

Next time you have a coding task:

1. Write your request but add: "Create a plan first, don't implement yet."
2. Review the plan for 60 seconds
3. Ask yourself: "If AI executes exactly this plan, will I be happy?"
4. If yes, proceed. If no, adjust the plan first.

This small habit prevents significant rework.

---

## Related Concepts

- **[Prompt Preparation](/docs/ai-productivity/concepts/prompt-preparation)** — Preparation before planning
- **[Vibe Coding vs Spec-Driven](/docs/ai-productivity/concepts/vibe-vs-spec)** — When to plan less vs more
- **[Level 5: Autonomous](/docs/ai-productivity/levels/autonomous)** — Planning enables safe autonomy
