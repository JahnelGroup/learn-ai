---
id: developers
title: Developers
sidebar_position: 1
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# AI Productivity for Developers

> *"AI doesn't replace developers—it amplifies them."*

<ProgressionTracker showRoleSelector={false} />

---

## Your Progression Path

### Level 1: Chat
**What it looks like**: ChatGPT in a browser tab for occasional questions.

**Typical uses**:
- "What's the syntax for X?"
- "Explain this error message"
- "How do I do Y in React?"
- "Generate a regex for email validation"

**Get more value**: Include context in your questions. Don't just ask "how do I sort an array"—specify your language, what you're sorting, and any constraints.

---

### Level 2: Context
**What it looks like**: Pasting code into AI for specific feedback.

**Typical uses**:
- Code review on your own work before committing
- Debugging with actual error output and code
- Refactoring suggestions with full function context
- Understanding unfamiliar code by pasting it

**Get more value**: Paste complete files, not snippets. Include error messages, related code, and what you've already tried.

---

### Level 3: Connected
**What it looks like**: AI integrated into your IDE with codebase access.

**Tools**:
- **[Cursor](https://cursor.sh)** — VS Code fork with native AI
- **[GitHub Copilot](https://github.com/features/copilot)** — Works in most IDEs
- **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — CLI-based agentic coding
- **[Cody](https://sourcegraph.com/cody)** — Sourcegraph's codebase-aware AI

**Typical uses**:
- Inline code completion as you type
- "Find all places we call this API"
- "What does this codebase do?"
- Multi-file refactoring with context

**Get more value**: Learn your tool's features. Cursor has Composer mode. Claude Code has `/plan`. Copilot has chat. Most features go unused.

---

### Level 4: Customized
**What it looks like**: AI knows your project's conventions without being told.

**Key customizations**:
- **CLAUDE.md / .cursorrules**: Project context file
- **Custom commands**: `/review`, `/test`, `/component`
- **Hooks**: Auto-lint, auto-test after AI edits

**Example CLAUDE.md**:
```markdown
# Project: Acme API
- TypeScript, strict mode
- Express.js with Zod validation
- PostgreSQL via Prisma
- Jest for testing

## Conventions
- Named exports only
- Error handling: Result<T, E> pattern
- Logging: use src/lib/logger

## Patterns
- Route handlers: see src/routes/users.ts
- Services: see src/services/UserService.ts
```

**Get more value**: Invest time in good context files. The ROI is massive over weeks and months.

---

### Level 5: Autonomous
**What it looks like**: AI implements features with your review.

**Typical uses**:
- "Implement user profile editing with API and UI"
- "Add unit tests for the auth service"
- "Refactor this module to use the new pattern"
- Complex multi-file changes with plan-then-execute

**Get more value**: Use plan mode. Review plans before execution. Build trust incrementally with smaller autonomous tasks.

---

## Developer-Specific Tips

### Code Review with AI
Before you submit code for human review, let AI review it:
```
Review this code for:
- Bugs or logic errors
- Security vulnerabilities
- Performance issues
- Adherence to our patterns (see CLAUDE.md)
- Missing edge cases
```

### Learning New Codebases
When joining a project:
```
I'm new to this codebase. Help me understand:
1. What does this project do?
2. How is it structured?
3. What are the key files/entry points?
4. What patterns and conventions are used?
```

### Debugging Workflow
1. Paste the error + relevant code
2. Ask AI to explain what's happening
3. Ask for hypotheses about the cause
4. Get suggestions for debugging steps
5. Iterate until resolved

### Writing Tests
Don't just ask "write tests for this." Be specific:
```
Write tests for this function:
[paste function]

Include:
- Happy path cases
- Edge cases: null input, empty array, very large input
- Error cases: invalid input types
- Use Jest and Testing Library conventions
```

---

## Tools Reference

| Level | Recommended Tools |
|-------|------------------|
| 1-2 | ChatGPT, Claude.ai, Gemini |
| 3 | Cursor, GitHub Copilot, Claude Code, Cody |
| 4-5 | Claude Code (with CLAUDE.md), Cursor (with .cursorrules) |

---

## Common Pitfalls

### Accepting Code Without Understanding
AI can generate code you don't understand. This creates maintenance debt. If you can't explain what the code does, don't commit it.

### Over-Relying on Autocomplete
Autocomplete is helpful but can lead to bloated code. Sometimes the right answer is less code, not more.

### Skipping Tests for AI-Generated Code
AI code needs testing like any other code. Maybe more—you're less familiar with edge cases.

### Not Learning from AI
When AI solves something, understand how. AI is a learning accelerator if you engage with its explanations.

---

## Measuring Progress

**Level 1-2**: Are you using AI daily? Do your prompts include context?

**Level 3**: Is AI in your IDE? Do you ask questions that span multiple files?

**Level 4**: Do you have context files? Does AI match your conventions automatically?

**Level 5**: Have you successfully delegated a multi-step task? Did you review it properly?

---

## Next Steps

1. **Identify your current level** honestly
2. **Pick one thing** from the next level to try
3. **Build the habit** before adding more
4. **Create context files** when you reach Level 4

**[Return to AI Productivity Overview →](/docs/ai-productivity/)**
