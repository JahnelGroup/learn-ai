---
id: context-files
title: Context Files
sidebar_position: 5
---

# Context Files

> *"Teach AI your project once, benefit forever."*

---

## What Are Context Files?

Context files are project-specific instructions that AI tools read automatically. Instead of explaining your conventions, architecture, and preferences in every conversation, you encode them once.

Common context files:
- **CLAUDE.md**: For Claude Code and Anthropic tools
- **.cursorrules**: For Cursor IDE
- **.github/copilot-instructions.md**: For GitHub Copilot
- **AI.md** or **CONTEXT.md**: Generic convention

---

## Why Context Files Matter

### Without Context Files
Every conversation:
```
"When writing code, use TypeScript with strict mode,
our naming convention is camelCase for variables,
PascalCase for components, we use Tailwind CSS,
prefer named exports, handle errors with Result pattern..."
```

### With Context Files
Every conversation:
```
"Add a new component for user profiles"
```

AI already knows your conventions.

---

## What to Include

### 1. Project Overview
What is this project? What does it do? What are the main technologies?

```markdown
# Project Overview
This is a Next.js 14 e-commerce platform using App Router.
- TypeScript with strict mode
- PostgreSQL with Prisma ORM
- Tailwind CSS + shadcn/ui components
- Jest + Testing Library for tests
```

### 2. Architecture
How is the project structured?

```markdown
# Architecture
- `src/app/`: Next.js App Router pages and layouts
- `src/components/`: Reusable UI components
- `src/lib/`: Utilities and shared logic
- `src/server/`: Server-only code (API, database)
- `prisma/`: Database schema and migrations
```

### 3. Conventions
How should code be written?

```markdown
# Conventions
- Use named exports, not default exports
- Components: one per file, PascalCase filename
- Use `type` over `interface` unless extending
- Error handling: use Result<T, E> pattern from `src/lib/result`
- Prefer `const` arrow functions for components
```

### 4. Patterns to Follow
Reference examples in the codebase:

```markdown
# Patterns
- Component structure: see `src/components/Button/`
- API routes: see `src/app/api/users/`
- Form handling: see `src/components/forms/LoginForm.tsx`
- Data fetching: use `useQuery` hook (see `src/hooks/useQuery.ts`)
```

### 5. Things to Avoid
What NOT to do:

```markdown
# Avoid
- Never use `any` type, use `unknown` and narrow
- Don't use `index.ts` barrel files (causes circular imports)
- Don't put business logic in components, use `src/lib/`
- Don't use inline styles, use Tailwind classes
```

### 6. Common Gotchas
Project-specific pitfalls:

```markdown
# Gotchas
- Server components can't use hooks or browser APIs
- `prisma` client must be imported from `src/lib/db`
- Auth is handled by middleware, check `src/middleware.ts`
- Tests must mock the Prisma client (see `src/test/setup.ts`)
```

---

## Complete Example

```markdown
# CLAUDE.md

## Project: Acme E-Commerce Platform

Next.js 14 e-commerce platform with App Router, TypeScript, and PostgreSQL.

## Architecture
- `src/app/`: App Router pages, layouts, API routes
- `src/components/`: React components (one per file)
- `src/lib/`: Utilities, helpers, shared logic
- `src/server/`: Server-only code (database, services)
- `src/hooks/`: Custom React hooks
- `prisma/`: Schema and migrations

## Tech Stack
- Next.js 14 with App Router
- TypeScript (strict mode)
- PostgreSQL + Prisma
- Tailwind CSS + shadcn/ui
- Jest + Testing Library

## Conventions

### Naming
- Components: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase with `use` prefix (`useCart.ts`)
- Utils: camelCase (`formatCurrency.ts`)
- Types: PascalCase with descriptive names (`UserProfile`, `CartItem`)

### Code Style
- Named exports only (no default exports)
- `type` over `interface` unless extending
- Prefer `const` arrow functions for components
- Destructure props in function signature
- Use early returns for guard clauses

### Error Handling
- Use Result pattern from `src/lib/result.ts`
- Never throw in service functions
- API routes return `{ data, error }` shape
- Display errors via toast (see `src/hooks/useToast`)

## Patterns

### Components
See `src/components/ui/Button.tsx` for structure:
- Props type at top
- Minimal component logic
- Tailwind for styling
- Forwarded ref when needed

### API Routes
See `src/app/api/products/route.ts`:
- Validate input with Zod
- Use service functions from `src/server/`
- Return consistent response shape
- Handle errors gracefully

### Data Fetching
Use `useQuery` from `src/hooks/useQuery.ts`:
- Handles loading/error states
- Automatic caching
- TypeScript-safe

## Avoid
- `any` type, use `unknown` and narrow
- Barrel files (`index.ts`), causes circular imports
- Business logic in components, extract to `src/lib/`
- Inline styles, use Tailwind
- `console.log` in production code, use logger

## Gotchas
- Server components can't use hooks or browser APIs
- Import Prisma from `src/lib/db`, not directly from `@prisma/client`
- Auth state available via `useAuth()` hook
- Environment variables: server-only unless prefixed `NEXT_PUBLIC_`

## Testing
- Run: `npm test`
- Coverage: `npm run test:coverage`
- Mock Prisma: `src/test/mocks/prisma.ts`
- Test utilities: `src/test/utils.tsx`
```

---

## Tool-Specific Locations

| Tool | File | Location |
|------|------|----------|
| Claude Code | `CLAUDE.md` | Project root |
| Cursor | `.cursorrules` | Project root |
| GitHub Copilot | `.github/copilot-instructions.md` | `.github/` folder |
| Cody | `cody.yaml` | Project root |
| Generic | `AI.md` or `CONTEXT.md` | Project root |

---

## Tips for Effective Context Files

### Keep It Focused
Include what AI needs to make good decisions. Not comprehensive documentation, but decision-relevant information.

### Use Examples
"See `src/components/Button/`" is better than describing the pattern in words.

### Update It
When conventions change, update the context file. Stale context is worse than no context.

### Layer Them
Personal context + team context + project context can coexist. More specific overrides more general.

### Test Understanding
Ask AI: "Based on CLAUDE.md, what are our error handling conventions?"

---

## Team Context Files

For teams, context files should be:
- **Version controlled**: Part of the repository
- **Reviewed**: Changes go through code review
- **Shared**: Everyone uses the same base context
- **Documented**: Explain why conventions exist

Individual customization can layer on top:
```
~/.claude/CLAUDE.md          # Personal global context
~/work/CLAUDE.md             # Work-wide context
~/work/project/CLAUDE.md     # Project-specific context
```

---

## Common Mistakes

### Too Long
If it's longer than 2 pages, AI might not prioritize the important parts. Focus on what matters most.

### Too Vague
"Write good code" isn't helpful. "Use named exports, handle errors with Result pattern" is.

### Never Updated
Outdated context actively misleads AI. Review quarterly at minimum.

### Not Verified
If you're not sure AI reads it, ask: "What project conventions do you know about?"

---

## Related Concepts

- **[Level 4: Customized](/docs/ai-productivity/levels/customized)**: Context files are central to Level 4
- **[Prompt Preparation](/docs/ai-productivity/concepts/prompt-preparation)**: Context files encode preparation permanently
- **[Plan Before Execute](/docs/ai-productivity/concepts/plan-before-execute)**: Context informs better plans
