---
id: guardrails
title: "Gr - Guardrails"
sidebar_position: 3
---

# Gr — Guardrails

| | |
|---|---|
| **Symbol** | Gr |
| **Name** | Guardrails |
| **Family** | Validation |
| **Row** | 2 - Compositions |

---

## What It Is

**Guardrails are runtime safety filters, schema validation, and content controls.** They ensure AI doesn't say things it shouldn't or output malformed garbage. A production necessity.

---

## Why It Matters

Models are probabilistic. Without guardrails:
- Outputs may contain harmful content
- Responses may be malformed (invalid JSON, etc.)
- Sensitive information may leak
- Brand reputation is at risk
- Legal/compliance issues arise

---

## Core Concepts

### Types of Guardrails

| Type | Purpose | Example |
|------|---------|---------|
| **Input validation** | Filter harmful/invalid inputs | Block prompt injection attempts |
| **Output validation** | Ensure correct format | Validate JSON schema |
| **Content filtering** | Remove harmful content | Block hate speech, PII |
| **Topic restriction** | Stay on-topic | Prevent off-topic tangents |
| **Fact checking** | Verify claims | Cross-reference with sources |

### Implementation Approaches

**1. Model-based filtering:**
Use another model to evaluate safety
```python
def check_safety(output):
    result = safety_model.classify(output)
    return result.is_safe
```

**2. Rule-based filtering:**
Pattern matching and heuristics
```python
def check_pii(output):
    patterns = [r'\d{3}-\d{2}-\d{4}', ...]  # SSN, etc.
    return not any(re.search(p, output) for p in patterns)
```

**3. Schema validation:**
Enforce output structure
```python
from pydantic import BaseModel

class Response(BaseModel):
    answer: str
    confidence: float
    sources: list[str]

# Parse and validate
response = Response.model_validate_json(llm_output)
```

### Common Guardrail Categories

| Category | Checks |
|----------|--------|
| **Safety** | Violence, self-harm, illegal activity |
| **Privacy** | PII detection, data leakage |
| **Accuracy** | Hallucination detection, fact verification |
| **Format** | Schema compliance, structure |
| **Brand** | Tone, messaging, competitor mentions |
| **Scope** | Topic relevance, capability boundaries |

---

## Practical Example

```python
from guardrails import Guard
from guardrails.validators import (
    ValidJSON,
    ToxicLanguage,
    PIIFilter
)

# Define guard with validators
guard = Guard().use_many(
    ValidJSON(),
    ToxicLanguage(threshold=0.8, on_fail="fix"),
    PIIFilter(on_fail="mask")
)

# Apply to LLM output
raw_output = llm.generate(prompt)
validated_output = guard.validate(raw_output)

if validated_output.validation_passed:
    return validated_output.validated_output
else:
    return fallback_response()
```

---

## Guardrail Strategies

### Fail Modes

| Mode | Behavior |
|------|----------|
| **Block** | Reject entirely, return error |
| **Fix** | Attempt to repair the output |
| **Mask** | Redact problematic content |
| **Warn** | Allow but flag for review |
| **Fallback** | Return safe default response |

### Layered Defense

```
Input → Input Guardrails → Model → Output Guardrails → Response
         ↓ block                    ↓ fix/block
         Error Response             Safe Response
```

---

## Common Pitfalls

- **Over-filtering:** Blocking legitimate content
- **Under-filtering:** Missing harmful content
- **Latency cost:** Guardrails add processing time
- **Maintenance burden:** Rules need updating
- **False confidence:** Guardrails aren't perfect

---

## Tools and Libraries

| Tool | Focus |
|------|-------|
| **Guardrails AI** | General-purpose validation |
| **NeMo Guardrails** | NVIDIA's safety framework |
| **LangChain output parsers** | Schema validation |
| **Rebuff** | Prompt injection detection |
| **Lakera Guard** | Security-focused |

---

## Related Elements

- **[Evaluation](/docs/periodic-table/validation/evaluation):** Measure guardrail effectiveness |
- **[Red Team](/docs/periodic-table/validation/red-team):** Test guardrail bypasses |
- **[Prompts](/docs/periodic-table/reactive/prompts):** System prompts as soft guardrails |
- **[LLM](/docs/periodic-table/models/llm):** Model-level safety training |

---

## Tier Relevance

| Tier | Expectation |
|------|-------------|
| **Foundation** | Understand why guardrails matter |
| **Practitioner** | Implement guardrails in production systems |
| **Expert** | Design comprehensive safety architectures |
