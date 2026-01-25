---
id: vibe-vs-spec
title: Vibe Coding vs Spec-Driven
sidebar_position: 3
---

# Vibe Coding vs Spec-Driven

> *"Know which mode you're in."*

---

## Two Modes of Working

When working with AI, there are fundamentally two approaches:

**Vibe Coding**: Exploratory, iterative, direction over destination
**Spec-Driven**: Precise requirements, clear acceptance criteria

Neither is better. The mistake is using the wrong mode for the situation.

---

## Vibe Coding

### What It Looks Like
```
"Make this page look better"
"Add some kind of caching"
"I don't love this—try something else"
"Keep going in that direction"
```

### When to Use It
- **Exploration**: You don't know what you want yet
- **Prototyping**: Testing ideas quickly
- **Creative work**: Design, copy, UI experiments
- **Learning**: Understanding what's possible
- **Low stakes**: Easy to throw away and restart

### The Mindset
You're navigating by feel. The goal is to discover what you want through iteration, not specify it upfront.

### Vibe Coding Best Practices
- Start broad, narrow through feedback
- "Show me three options" → pick → refine
- Don't over-specify when you don't know
- Be willing to throw away and restart
- Fast iterations beat perfect prompts

---

## Spec-Driven Development

### What It Looks Like
```
"Implement a password reset flow:
- User enters email on /forgot-password
- System sends email with 1-hour expiring token
- Token link goes to /reset-password?token=xxx
- User enters new password (8+ chars, 1 number, 1 special)
- On success, redirect to /login with success message
- Handle: invalid token, expired token, email not found"
```

### When to Use It
- **Production code**: Behavior must be predictable
- **Complex logic**: Many edge cases to handle
- **Team work**: Others will rely on this code
- **Compliance**: Requirements are non-negotiable
- **High stakes**: Mistakes are costly

### The Mindset
You know what you want. The goal is communicating it precisely so AI builds exactly that.

### Spec-Driven Best Practices
- Write requirements before prompting
- Include edge cases explicitly
- Define acceptance criteria
- Specify error handling
- Use plan mode to verify understanding

---

## Choosing Your Mode

| Situation | Mode | Why |
|-----------|------|-----|
| "Try adding dark mode" | Vibe | Exploring the possibility |
| "Implement dark mode with these colors..." | Spec | Requirements are known |
| "Make the landing page better" | Vibe | "Better" needs discovery |
| "Add email validation to signup form" | Spec | Clear requirement |
| "What if we restructured this?" | Vibe | Exploring options |
| "Migrate auth from JWT to sessions" | Spec | Specific end state |

---

## The Danger Zones

### Vibe Coding Production Code
**Problem**: You accept AI output because it "looks right" without verifying it meets requirements.

**Signs**:
- "That seems good" without testing edge cases
- Multiple iterations that never converge
- Different behavior than you expected later

**Fix**: Switch to spec mode. Write down what you need before the next iteration.

### Over-Specifying Exploration
**Problem**: You write detailed specs for things you're not sure you want.

**Signs**:
- Long prompts that get thrown away
- Fighting AI on requirements that don't matter yet
- Slow iteration on creative work

**Fix**: Back off to vibe mode. Get directionally right first, then specify.

---

## Transitioning Between Modes

### Vibe → Spec (The "Lock It Down" Moment)

When exploration yields something you want:

```
"That's the direction I want. Now let me specify exactly:
- [specific requirement 1]
- [specific requirement 2]
- [edge case handling]
- [acceptance criteria]

Please implement with these precise requirements."
```

### Spec → Vibe (The "Step Back" Moment)

When specifications aren't working:

```
"I've been too specific and it's not quite right.
Let me describe what I'm actually trying to achieve: [goal]
Show me a few different approaches and I'll pick a direction."
```

---

## Mode Indicators in Prompts

### Vibe Indicators
- "Try...", "What if...", "Make it more..."
- "I'll know it when I see it"
- "Show me options"
- "Keep going in that direction"

### Spec Indicators
- "Must...", "Exactly...", "Requirements:..."
- "Include these edge cases..."
- "Acceptance criteria:..."
- "Do not... (negative constraints)"

---

## Team Dynamics

On a team, communicate your mode:

### In Code Reviews
- "This was vibe-coded as a prototype—needs spec work before merge"
- "This was spec-driven against [requirements doc]"

### In Pairing
- "Let's vibe on this for a bit, then lock it down"
- "I have clear specs—let's execute"

### In Planning
- "We need exploration time before we can spec this"
- "This is well-understood, we can spec it now"

---

## Self-Check Questions

Before each AI interaction:

1. **Do I know what "done" looks like?**
   - Yes → Spec mode
   - No → Vibe mode

2. **Will this code ship?**
   - Yes → Eventually spec mode
   - No (prototype/throwaway) → Vibe is fine

3. **Am I frustrated by AI not "getting it"?**
   - Maybe switch modes—you might be vibe-ing when you need specs, or over-specifying when you should explore

---

## Related Concepts

- **[Prompt Preparation](/docs/ai-productivity/concepts/prompt-preparation)** — Preparation helps you know which mode
- **[Plan Before Execute](/docs/ai-productivity/concepts/plan-before-execute)** — Especially important in spec mode
- **[Deep Research](/docs/ai-productivity/concepts/deep-research)** — Vibe-like exploration for information
