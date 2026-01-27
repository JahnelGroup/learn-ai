---
id: customized
title: "Level 4: Customized"
sidebar_position: 4
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# Level 4: Customized

> *"AI knows how we work here."*

<ProgressionTracker currentLevel={4} showRoleSelector={false} />

---

## What This Level Means

At Level 4, AI is **customized to your specific context**, including your project's conventions, your team's preferences, and your domain's terminology. Instead of teaching AI your patterns in every conversation, you encode them once.

This is where AI transforms from a general-purpose assistant to a knowledgeable team member.

**Characteristics of Level 4:**
- Project-specific context files (CLAUDE.md, .cursorrules)
- Custom slash commands for common tasks
- Hooks for automated workflows
- Domain-specific prompts and templates
- AI that reflects your team's standards

---

## The Leap from Level 3

| Level 3: Connected | Level 4: Customized |
|-------------------|---------------------|
| AI sees your code | AI knows your conventions |
| "Use our naming conventions" (every time) | Conventions in CLAUDE.md (once) |
| Generic code suggestions | Style-matched suggestions |
| Same AI experience for all projects | Project-specific AI behavior |
| Manual repetitive instructions | Automated custom commands |

**Common use cases:**
- Project-specific context files (CLAUDE.md, .cursorrules)
- Custom slash commands for frequent tasks
- Hooks for automated workflows (lint, test, format)
- Domain glossaries and templates AI always references

---

## Getting to This Level

### Context Files

Create a `CLAUDE.md` (or `.cursorrules` for Cursor) in your project root:

```markdown
# Project Context

## Architecture
This is a Next.js 14 app with App Router. We use:
- TypeScript with strict mode
- Tailwind CSS for styling
- Prisma for database access
- Jest + Testing Library for tests

## Conventions
- Components in `src/components/`, one component per file
- Use named exports, not default exports
- Error handling: use Result pattern, not try-catch
- API routes return `{ data, error }` shape

## Patterns to Follow
- See `src/components/Button/` for component structure
- See `src/lib/api/` for API client patterns
- Use `useQuery` hook for data fetching (see `src/hooks/`)

## Common Gotchas
- Don't use `any` type - use `unknown` and narrow
- Server components can't use hooks
- Always handle loading and error states
```

### Custom Commands

In Claude Code, create project-specific commands:

```json
{
  "commands": {
    "review": "Review this code for our conventions (see CLAUDE.md), security issues, and test coverage gaps.",
    "component": "Create a new component following our patterns in src/components/Button/",
    "test": "Generate tests for this file using our Jest + Testing Library setup."
  }
}
```

### Hooks

Automate post-AI actions:

```bash
# .claude/hooks/post-edit.sh
npm run lint:fix
npm run test -- --findRelatedTests $EDITED_FILES
```

---

## Common Pitfalls

**"My context file is too long."**

Focus on what AI needs to know to make good decisions. Conventions, patterns, gotchas, not comprehensive documentation.

**"I wrote context but AI ignores it."**

Check that your context file is in the right location and format. Test by asking "What do you know about this project's conventions?"

**"Everyone has different customizations."**

Standardize team-wide context files in version control. Personal customizations can layer on top.

**"I customize but don't update."**

Context files need maintenance. When conventions change, update them. Stale context is worse than no context.

---

## Ready for Level 5?

You're ready to progress when:

- [ ] You have project context files that AI uses effectively
- [ ] AI suggestions match your conventions without reminders
- [ ] You have custom commands for common tasks
- [ ] You trust AI enough to consider multi-step autonomous tasks

**[Continue to Level 5: Autonomous →](/docs/ai-productivity/levels/autonomous)**

---

## The Leap Ahead

| Level 4: Customized | Level 5: Autonomous |
|--------------------|---------------------|
| AI helps with single tasks | AI completes multi-step work |
| You drive, AI assists | AI drives, you review |
| Interactive back-and-forth | Delegated execution |
| "Help me write this function" | "Implement this feature" |
