---
id: tools-reference
title: Tools Reference
sidebar_position: 10
---

# AI Tools Reference

A comprehensive guide to AI tools organized by role and productivity level.

---

## Chat & General Purpose (Level 1-2)

These tools work for everyone, regardless of role.

| Tool | Best For | Key Features |
|------|----------|--------------|
| **[ChatGPT](https://chat.openai.com)** | General Q&A, writing, analysis | GPT-4o, image understanding, voice |
| **[Claude](https://claude.ai)** | Nuanced analysis, long documents | Long context (200K), thoughtful responses |
| **[Gemini](https://gemini.google.com)** | Google integration, research | Google Search integration, multimodal |
| **[Perplexity](https://perplexity.ai)** | Research with sources | Citation-focused, real-time web access |

### When to Choose What

- **ChatGPT**: Most versatile, largest ecosystem
- **Claude**: Complex analysis, longer documents, nuanced tasks
- **Gemini**: When Google integration matters
- **Perplexity**: When you need cited sources

---

## Developer Tools (Level 3+)

### IDE Integration

| Tool | IDE Support | Key Features |
|------|-------------|--------------|
| **[Cursor](https://cursor.sh)** | Cursor (VS Code fork) | Composer for multi-file, Cmd+K inline |
| **[GitHub Copilot](https://github.com/features/copilot)** | VS Code, JetBrains, Neovim | Autocomplete, chat, workspace context |
| **[Cody](https://sourcegraph.com/cody)** | VS Code, JetBrains | Codebase-aware, code navigation |
| **[Windsurf](https://codeium.com/windsurf)** | Windsurf (VS Code fork) | Cascade AI flows, codebase context |

### CLI Tools

| Tool | Use Case | Key Features |
|------|----------|--------------|
| **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** | Terminal-based development | Agentic, plan mode, MCP support |
| **[Aider](https://aider.chat)** | Git-aware coding assistant | Works with any model, git integration |
| **[Codex CLI](https://github.com/openai/codex)** | OpenAI terminal integration | OpenAI models in terminal |

### When to Choose What

- **Cursor**: Best all-around IDE experience, great for multi-file work
- **GitHub Copilot**: If staying in VS Code/JetBrains is priority
- **Claude Code**: For CLI-first workflows, autonomous tasks
- **Cody**: When codebase understanding is critical

---

## Design Tools (Level 3+)

| Tool | Use Case | Key Features |
|------|----------|--------------|
| **[Figma AI](https://figma.com)** | Design workflow | Built into Figma, design generation |
| **[Galileo AI](https://usegalileo.ai)** | UI generation | Text-to-design, component generation |
| **[Adobe Firefly](https://firefly.adobe.com)** | Image generation/editing | Integrated with Creative Cloud |
| **[Midjourney](https://midjourney.com)** | Image generation | High-quality image generation |
| **[DALL-E](https://openai.com/dall-e-3)** | Image generation | Integrated with ChatGPT |

### Figma Plugins

| Plugin | Use Case |
|--------|----------|
| **Magician** | Copy, icons, image generation |
| **Builder.io** | Design to code |
| **Relume** | Wireframe generation |
| **Attention Insight** | Heatmap predictions |

---

## Documentation & Writing (Level 2+)

| Tool | Use Case | Key Features |
|------|----------|--------------|
| **[Notion AI](https://notion.so/product/ai)** | Documentation | Built into Notion, Q&A, writing |
| **[Confluence AI](https://atlassian.com/software/confluence)** | Enterprise docs | Atlassian integration, summaries |
| **[Grammarly](https://grammarly.com)** | Writing quality | Grammar, tone, clarity |
| **[Copy.ai](https://copy.ai)** | Marketing copy | Templates, brand voice |

---

## Project Management (Level 3+)

| Tool | Use Case | Key Features |
|------|----------|--------------|
| **[Jira AI](https://atlassian.com/software/jira)** | Issue tracking | Summaries, suggestions |
| **[Linear AI](https://linear.app)** | Issue tracking | Auto-triage, summaries |
| **[Asana Intelligence](https://asana.com)** | Work management | Status reports, summaries |
| **[Monday AI](https://monday.com)** | Work management | Automations, content generation |

---

## Meeting & Communication (Level 2+)

| Tool | Use Case | Key Features |
|------|----------|--------------|
| **[Otter.ai](https://otter.ai)** | Meeting transcription | Real-time, summaries, action items |
| **[Fireflies.ai](https://fireflies.ai)** | Meeting intelligence | Transcription, search, analytics |
| **[Slack AI](https://slack.com)** | Communication | Thread summaries, search |
| **[Teams Copilot](https://microsoft.com/microsoft-365)** | Communication | Meeting recaps, chat summaries |

---

## Tools by Role Matrix

### Developers

| Level | Essential | Nice to Have |
|-------|-----------|--------------|
| 1 | ChatGPT or Claude | - |
| 2 | Claude (for code pasting) | - |
| 3 | Cursor or GitHub Copilot | Claude Code |
| 4 | Cursor + context files | MCP servers |
| 5 | Claude Code (agentic mode) | Multi-agent setups |

### QA Engineers

| Level | Essential | Nice to Have |
|-------|-----------|--------------|
| 1 | ChatGPT or Claude | - |
| 2 | Claude (for test analysis) | - |
| 3 | IDE with AI (for test generation) | - |
| 4 | Custom prompts for test frameworks | - |
| 5 | AI-maintained test suites | CI/CD AI integration |

### Designers

| Level | Essential | Nice to Have |
|-------|-----------|--------------|
| 1 | ChatGPT or Claude | - |
| 2 | Claude (vision for design review) | - |
| 3 | Figma AI / plugins | Galileo AI |
| 4 | Design system context files | - |
| 5 | AI design exploration workflows | - |

### Business Analysts

| Level | Essential | Nice to Have |
|-------|-----------|--------------|
| 1 | ChatGPT or Claude | - |
| 2 | Claude (for document analysis) | - |
| 3 | Notion AI or Confluence AI | - |
| 4 | Domain-specific prompts | Jira AI |
| 5 | AI requirement generation | - |

### Project Managers

| Level | Essential | Nice to Have |
|-------|-----------|--------------|
| 1 | ChatGPT or Claude | - |
| 2 | Claude (for meeting analysis) | - |
| 3 | Otter.ai + PM tool AI | Fireflies.ai |
| 4 | Custom reporting prompts | Slack AI |
| 5 | Automated status workflows | - |

### Tech Leads

| Level | Essential | Nice to Have |
|-------|-----------|--------------|
| 1 | ChatGPT or Claude | - |
| 2 | Claude (for architecture review) | - |
| 3 | Claude Code + Cursor | MCP servers |
| 4 | Team-wide context files | AI code review |
| 5 | Agentic development workflows | Multi-agent systems |

---

## Context File Support

| Tool | Context File | Location |
|------|--------------|----------|
| Claude Code | `CLAUDE.md` | Project root |
| Cursor | `.cursorrules` | Project root |
| GitHub Copilot | `.github/copilot-instructions.md` | `.github/` folder |
| Cody | `cody.yaml` | Project root |
| Windsurf | `.windsurfrules` | Project root |

---

## Model Context Protocol (MCP)

MCP enables AI tools to connect to external data sources.

### Supported Tools
- Claude Code (native)
- Claude Desktop (native)
- Cursor (via extensions)
- Continue (via extensions)

### Useful MCP Servers

| Server | Purpose |
|--------|---------|
| **filesystem** | Read/write files beyond project |
| **postgres/sqlite** | Database access |
| **github** | Repository operations |
| **slack** | Team communication |
| **google-drive** | Document access |
| **puppeteer** | Web browser control |

[Learn more about MCP →](https://modelcontextprotocol.io)

---

## Security Considerations

### Data Handling

| Tool | Training on Data | SOC 2 | Enterprise Options |
|------|------------------|-------|-------------------|
| ChatGPT | Opt-out available | Yes | ChatGPT Enterprise |
| Claude | No training on conversations | Yes | Claude for Business |
| GitHub Copilot | No training on Business tier | Yes | Copilot Enterprise |
| Cursor | Configurable | Yes | Business tier |

### Recommendations

1. **Review privacy policies** before using tools with sensitive code
2. **Use enterprise tiers** for production/client code
3. **Configure data retention** settings appropriately
4. **Establish team guidelines** for what can be shared with AI

---