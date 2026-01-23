---
id: function-calling
title: "Fc - Function Calling"
sidebar_position: 3
---

# Fc — Function Calling

| | |
|---|---|
| **Symbol** | Fc |
| **Name** | Function Calling |
| **Family** | Reactive |
| **Row** | 2 - Compositions |

---

## What It Is

**Function calling is when an LLM invokes external tools or APIs to take action.** The model decides which function to call and with what parameters, bridging AI reasoning to real-world systems.

Instead of just generating text, the model outputs a structured request to call a function—like "search the database for user X" or "send an email to Y."

---

## Why It Matters

Function calling transforms LLMs from text generators into action takers. It's the bridge between "the AI understands what I want" and "the AI actually does it." Without function calling, AI is limited to generating suggestions you must act on manually.

---

## Core Concepts

### How It Works

1. You define available functions with schemas (name, description, parameters)
2. User sends a message
3. Model decides if a function should be called
4. Model outputs structured function call (JSON)
5. Your code executes the function
6. Result is fed back to the model
7. Model generates final response

### Function Schema Example

```json
{
  "name": "get_weather",
  "description": "Get the current weather for a location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City and state, e.g., San Francisco, CA"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"]
      }
    },
    "required": ["location"]
  }
}
```

### Key Considerations

| Aspect | Consideration |
|--------|---------------|
| **Schema design** | Clear descriptions help the model choose correctly |
| **Error handling** | Functions fail—plan for it |
| **Security** | Validate parameters before execution |
| **Cost** | Each function call adds tokens and latency |

---

## Practical Example

**User:** "What's the weather in New York and should I bring an umbrella?"

**Model decides to call:**
```json
{
  "function": "get_weather",
  "arguments": {
    "location": "New York, NY",
    "unit": "fahrenheit"
  }
}
```

**Your code executes the function, returns:**
```json
{
  "temperature": 62,
  "conditions": "light rain",
  "precipitation_chance": 80
}
```

**Model generates response:**
"It's 62°F in New York with light rain and an 80% chance of precipitation. Yes, definitely bring an umbrella!"

---

## Common Patterns

- **Single function:** One tool for a specific task
- **Multiple functions:** Model chooses from several tools
- **Parallel calls:** Multiple functions called simultaneously
- **Sequential chains:** Output of one function feeds the next

---

## Related Elements

- **[Prompts](/docs/periodic-table/reactive/prompts):** Define when functions should be called
- **[Agents](/docs/periodic-table/reactive/agents):** Use function calling in autonomous loops
- **[Frameworks](/docs/periodic-table/orchestration/frameworks):** Provide function calling abstractions

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand the concept and when it applies |
| **Practitioner** | Implement function calling with error handling |
| **Expert** | Design function schemas for complex multi-tool systems |
