---
id: connected
title: "Level 3: Connected"
sidebar_position: 3
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# Level 3: Connected

> *"AI lives inside my development environment."*

<ProgressionTracker currentLevel={3} showRoleSelector={false} />

---

## What This Level Means

At Level 3, AI is **connected to your work environment**. It can read your files, understand your project structure, and work with your actual codebase. No more copy-paste. AI is embedded in your workflow.

This is the transition from "using AI" to "working with AI."

**Characteristics of Level 3:**
- AI tools integrated into IDE/editor
- Direct access to codebase and project files
- Can read and write files with permission
- Understands project context automatically
- Real-time assistance as you work

---

## The Leap from Level 2

| Level 2: Context | Level 3: Connected |
|------------------|-------------------|
| Paste code into AI | AI reads your codebase |
| One file at a time | Full project understanding |
| Context is what you provide | Context is automatic |
| Conversations are separate | Assistance is inline |
| Copy suggestions back | AI applies changes directly |

**Common use cases:**
- Asking questions that require reading multiple files
- Getting AI assistance inline as you work
- Having AI apply changes directly instead of copy-paste
- Analyzing patterns across your entire project

---

## Getting to This Level

### IDE Integration (Developers)
- **[Cursor](https://cursor.sh)**: VS Code fork with built-in AI
- **[GitHub Copilot](https://github.com/features/copilot)**: Works in VS Code, JetBrains, etc.
- **[Cody](https://sourcegraph.com/cody)**: Sourcegraph's AI with codebase understanding
- **[Windsurf](https://windsurf.com/editor)**: AI-first IDE by Codeium, focused on agentic workflows and large-scale codebase refactoring



### CLI Tools (Developers)
- **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)**: Anthropic's agentic CLI tool
- Use in terminal alongside your editor
- Full read/write access to your project

### MCP (Model Context Protocol)
- Connect AI to external tools and data sources
- Database access, API documentation, internal tools
- See [MCP documentation](https://modelcontextprotocol.io)

### Tool-Specific AI Features
Look for AI integrations in your primary tools:
- **Design**: Figma AI plugins, Adobe Firefly integration
- **PM**: AI features in Jira, Asana, Monday.com
- **Documentation**: Notion AI, Confluence AI
- **Communication**: Teams/Slack AI integrations

---

## Common Pitfalls

**"I gave AI access but don't use it differently."**

Connected AI changes what's possible. Ask questions you couldn't before: "Find all places we handle authentication" or "What's our error handling pattern?"

**"I'm worried about AI accessing sensitive code."**

Review your tool's privacy policy. Many enterprise tools don't train on your code. For highly sensitive projects, consider air-gapped solutions.

**"The suggestions don't match our conventions."**

Connected AI is powerful but generic. Level 4 (Customized) addresses this by teaching AI your specific patterns.

**"I still copy-paste from chat."**

Build new habits. When you catch yourself opening browser AI, stop and use your connected tool instead.

---

## Ready for Level 4?

You're ready to progress when:

- [ ] AI is integrated into your primary work environment
- [ ] You ask questions that require reading multiple files
- [ ] You want AI to know your project's conventions automatically
- [ ] You're repeating the same context/instructions across sessions

**[Continue to Level 4: Customized →](/docs/ai-productivity/levels/customized)**

---

## The Leap Ahead

| Level 3: Connected | Level 4: Customized |
|-------------------|---------------------|
| AI sees your code | AI knows your conventions |
| Generic assistance | Project-specific guidance |
| Same AI for everyone | AI tailored to your project |
| Repeat instructions | Instructions encoded once |
