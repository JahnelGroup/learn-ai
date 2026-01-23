---
id: mcp
title: "Mc - MCP"
sidebar_position: 5
---

# Mc — MCP

| | |
|---|---|
| **Symbol** | Mc |
| **Name** | MCP (Model Context Protocol) |
| **Family** | Orchestration |
| **Row** | 4 - Emerging |

---

## What It Is

**MCP (Model Context Protocol) and similar standards are emerging protocols for how AI systems connect to tools and data sources.** Think of it as the USB standard of AI integration.

Instead of custom integrations for every tool, standardized protocols enable plug-and-play connectivity.

---

## Why It Matters

Without standards, every AI-tool integration is custom. MCP and similar protocols enable:
- Reusable tool implementations
- Interoperability across AI systems
- Easier ecosystem development
- Reduced integration complexity

---

## Core Concepts

### The Problem MCP Solves

**Before:** Each AI system needs custom code for each tool
```
Claude ──custom──> Slack
Claude ──custom──> GitHub
Claude ──custom──> Database

GPT ────custom──> Slack (different code!)
GPT ────custom──> GitHub (different code!)
```

**After:** Tools expose standard interface, any AI can use
```
Claude ──MCP──┐
              ├──> Slack Server (one implementation)
GPT ────MCP──┘

Claude ──MCP──┐
              ├──> GitHub Server (one implementation)
GPT ────MCP──┘
```

### MCP Architecture

| Component | Role |
|-----------|------|
| **Host** | AI application (Claude, IDEs, etc.) |
| **Server** | Tool provider (Slack, GitHub, DB) |
| **Protocol** | Standardized communication format |
| **Resources** | Data the server exposes |
| **Tools** | Actions the server enables |

### Protocol Capabilities

| Capability | Description |
|------------|-------------|
| **Resources** | Read data from external systems |
| **Tools** | Execute actions in external systems |
| **Prompts** | Server-provided prompt templates |
| **Sampling** | Server requests LLM completions |

---

## Current State (2026)

MCP was introduced by Anthropic in late 2024 and is gaining adoption. The ecosystem is growing, but:
- Not all providers support it yet
- Some features are still evolving
- Alternative standards may emerge
- Best practices are still forming

---

## Practical Example

**Connecting to a database via MCP:**

```json
// Server configuration
{
  "name": "postgres-server",
  "type": "mcp",
  "config": {
    "connection": "postgresql://user:pass@localhost/mydb"
  }
}

// Available tools exposed by server
{
  "tools": [
    {
      "name": "query",
      "description": "Execute a read-only SQL query",
      "parameters": {
        "sql": "string"
      }
    },
    {
      "name": "list_tables",
      "description": "List all tables in the database"
    }
  ]
}

// AI can now use these tools naturally
User: "What tables do we have?"
AI: [calls list_tables] "You have users, orders, and products tables."
```

---

## Evaluating Protocol Adoption

When considering MCP or similar protocols:

| Factor | Question |
|--------|----------|
| **Ecosystem** | Are servers available for your tools? |
| **Support** | Does your AI platform support it? |
| **Maturity** | Is the protocol stable enough? |
| **Security** | Does it meet your security requirements? |
| **Alternatives** | What's the cost of custom integration? |

---

## Building MCP Servers

If you need a tool that doesn't have an MCP server:

1. **Assess need:** Is MCP the right approach?
2. **Define interface:** What resources and tools to expose?
3. **Implement server:** Follow protocol specification
4. **Handle security:** Authentication, authorization, rate limiting
5. **Document:** Help others use your server

---

## Related Elements

- **[Function Calling](/docs/periodic-table/reactive/function-calling):** What MCP standardizes
- **[Agents](/docs/periodic-table/reactive/agents):** Primary consumers of MCP tools
- **[Frameworks](/docs/periodic-table/orchestration/frameworks):** Integrating MCP support
- **[Guardrails](/docs/periodic-table/validation/guardrails):** Securing tool access

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Awareness of emerging standards |
| **Practitioner** | Use existing MCP servers |
| **Expert** | Evaluate protocols, build custom servers |
