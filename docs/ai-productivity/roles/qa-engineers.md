---
id: qa-engineers
title: QA Engineers
sidebar_position: 2
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# AI Productivity for QA Engineers

> *"AI helps you find bugs you wouldn't have thought to look for."*

<ProgressionTracker showRoleSelector={false} />

---

## Your Progression Path

### Level 1: Chat
**What it looks like**: Browser-based AI for testing ideas and research.

**Typical uses**:
- "What edge cases should I test for a login form?"
- "How do I test API rate limiting?"
- "Explain this testing pattern"
- "What's the difference between unit and integration tests?"

**Get more value**: Ask about scenarios specific to your domain. "What edge cases exist for payment processing in e-commerce?" beats generic testing questions.

---

### Level 2: Context
**What it looks like**: Pasting specs, screenshots, and logs for analysis.

**Typical uses**:
- Upload bug screenshots for reproduction steps
- Paste test logs to identify failure patterns
- Share requirements docs to generate test cases
- Provide code under test for coverage ideas

**Example prompt**:
```
Here's the requirement:
[paste requirement]

Here's the code implementing it:
[paste code]

Generate comprehensive test cases covering:
- Happy path scenarios
- Edge cases
- Error conditions
- Security considerations
```

**Get more value**: Provide the actual artifacts, not descriptions. A screenshot of a bug is worth a thousand words.

---

### Level 3: Connected
**What it looks like**: AI tools integrated with your test framework and codebase.

**Tools**:
- IDE extensions with test generation
- AI connected to test runners
- Tools that analyze code coverage
- Bug tracking integrations with AI analysis

**Typical uses**:
- "Look at this codebase—where are we under-tested?"
- "Generate tests for the checkout flow based on existing patterns"
- "Analyze these test failures and suggest root causes"
- Test generation that matches your framework conventions

**Get more value**: Connect AI to your actual test suite. It can learn your patterns and generate matching tests.

---

### Level 4: Customized
**What it looks like**: AI knows your testing conventions and domain.

**Key customizations**:
- Test templates matching your framework
- Domain-specific test scenarios
- Project-specific data generators
- Custom commands for common testing tasks

**Example context file**:
```markdown
# QA Context

## Test Stack
- Jest + Testing Library for unit tests
- Playwright for E2E tests
- Test data factory in src/test/factories/

## Conventions
- Test files: ComponentName.test.tsx
- Use data-testid for E2E selectors
- Mock external APIs in tests
- No production data in tests

## Domain Knowledge
- Payment amounts are in cents
- User roles: admin, member, guest
- Feature flags in src/config/features.ts

## Critical Paths
- Checkout flow must never fail silently
- Auth tokens expire after 1 hour
- Rate limits: 100 req/min per user
```

**Get more value**: Encode your domain expertise. AI doesn't know your business rules—teach it.

---

### Level 5: Autonomous
**What it looks like**: AI generates and maintains test suites with your oversight.

**Typical uses**:
- "Add test coverage for the new payment module"
- "Update all E2E tests for the redesigned checkout flow"
- AI-generated regression tests from bug reports
- Continuous test generation as code changes

**Get more value**: Use AI to maintain test suites, not just create them. Test maintenance is where most time goes.

---

## QA-Specific Tips

### Test Case Generation
Get comprehensive test cases from requirements:
```
I'm testing this feature:
[paste requirement/user story]

Generate test cases organized by:
1. Happy path scenarios
2. Boundary conditions
3. Invalid input handling
4. Permission/access scenarios
5. Performance considerations

For each test case include:
- Preconditions
- Steps
- Expected result
- Test data needed
```

### Bug Analysis
When investigating failures:
```
I have a bug with these symptoms:
[describe what's happening]

Here's the relevant code:
[paste code]

Here's the error/log:
[paste logs]

Help me:
1. Understand what's happening
2. Identify possible root causes
3. Suggest reproduction steps
4. Recommend related areas to test
```

### Coverage Analysis
Find gaps in testing:
```
Here's a module we need to test:
[paste code]

Here are the existing tests:
[paste tests]

What scenarios are NOT covered?
What edge cases are we missing?
Are there any security considerations untested?
```

### Test Data Generation
Create realistic test data:
```
Generate test data for our e-commerce system:
- 10 users with varied roles and states
- 20 products across different categories
- 5 orders in various states (pending, paid, shipped, delivered, cancelled)

Make the data realistic but ensure no PII that looks real.
Format: JavaScript objects matching these types:
[paste type definitions]
```

---

## Tools Reference

| Level | Recommended Tools |
|-------|------------------|
| 1-2 | ChatGPT, Claude.ai for test planning |
| 3 | IDE extensions, Copilot for test generation |
| 4-5 | Customized AI with test framework context |

---

## Common Pitfalls

### Generating Tests Without Understanding
AI-generated tests can have subtle flaws. Review each test to ensure it actually validates what it claims to.

### Testing AI Output with AI
Don't let AI test its own code without your review. Fresh eyes (yours) catch assumptions AI made.

### Ignoring Exploratory Testing
AI is great for systematic testing but struggles with creative exploration. Combine AI-generated tests with human exploratory testing.

### Over-Testing Generated Code
Not every line needs a test. Focus AI test generation on critical paths and complex logic.

---

## Measuring Progress

**Level 1-2**: Do you use AI to brainstorm test scenarios? Do you paste actual code/requirements?

**Level 3**: Is AI connected to your test framework? Does it generate tests matching your patterns?

**Level 4**: Do you have QA-specific context files? Does AI know your critical paths?

**Level 5**: Has AI successfully maintained test suites? Do you trust AI-generated tests after review?

---

## Next Steps

1. **Start with test case generation** — High value, low risk
2. **Build a test context file** — Encode your domain knowledge
3. **Connect AI to your codebase** — For coverage analysis
4. **Gradually automate maintenance** — Let AI update tests as code changes

**[Return to AI Productivity Overview →](/docs/ai-productivity/)**
