---
id: business-analysts
title: Business Analysts
sidebar_position: 4
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# AI Productivity for Business Analysts

> *"AI helps you capture, clarify, and communicate requirements faster."*

<ProgressionTracker showRoleSelector={false} />

---

## Your Progression Path

### Level 1: Chat
**What it looks like**: Browser-based AI for research and drafting.

**Typical uses**:
- "Explain microservices architecture in business terms"
- "What questions should I ask about payment processing?"
- "Draft acceptance criteria for user registration"
- "What's the difference between functional and non-functional requirements?"

**Get more value**: Ask AI to explain technical concepts in terms stakeholders understand. This bridges communication gaps.

---

### Level 2: Context
**What it looks like**: Sharing documents and notes for analysis.

**Typical uses**:
- Paste interview notes to extract requirements
- Upload process diagrams for optimization suggestions
- Share existing requirements for gap analysis
- Provide spreadsheets for data analysis

**Example prompt**:
```
Here are notes from stakeholder interviews:
[paste notes]

Extract and organize:
1. Functional requirements (what the system should do)
2. Non-functional requirements (performance, security, etc.)
3. Business rules mentioned
4. Open questions that need clarification
5. Conflicts or inconsistencies between stakeholders

Format as structured requirements with IDs.
```

**Get more value**: Provide raw materials—meeting notes, emails, existing docs. AI synthesizes better than it invents.

---

### Level 3: Connected
**What it looks like**: AI integrated with project management and documentation tools.

**Tools**:
- Jira/Azure DevOps with AI features
- Confluence/Notion AI
- Documentation analysis tools
- AI-powered diagramming tools

**Typical uses**:
- AI analyzing existing backlogs for patterns
- Automatic user story generation from requirements
- Cross-referencing requirements across documents
- Real-time requirement validation

**Get more value**: Connect AI to your existing documentation. It can find inconsistencies and gaps humans miss.

---

### Level 4: Customized
**What it looks like**: AI knows your domain and documentation standards.

**Key customizations**:
- Domain glossary AI always references
- Requirement templates for your organization
- User story formats and standards
- Business rules library

**Example context**:
```markdown
# BA Context

## Domain
Healthcare claims processing system
- Payers: Insurance companies
- Providers: Hospitals, clinics
- Members: Insured patients

## Key Terminology
- Adjudication: Process of evaluating a claim
- EOB: Explanation of Benefits
- Prior Authorization: Pre-approval for procedures
- CPT: Current Procedural Terminology codes

## Documentation Standards
- User stories: "As a [role], I want [feature] so that [benefit]"
- Acceptance criteria: Given/When/Then format
- Business rules: Numbered, with effective date

## Common Compliance Requirements
- HIPAA for all PHI
- State-specific regulations (reference by state)
- CMS guidelines for Medicare/Medicaid
```

**Get more value**: Build a domain knowledge base AI can reference. This saves explanation time and improves accuracy.

---

### Level 5: Autonomous
**What it looks like**: AI drafts complete requirement sets for your review.

**Typical uses**:
- "Draft complete requirements from these stakeholder inputs"
- "Create user stories for the entire checkout redesign"
- "Analyze this feature request for impacts across the system"
- AI maintains requirement traceability

**Get more value**: Use AI for first drafts, then apply your domain expertise. AI handles volume; you ensure correctness.

---

## BA-Specific Tips

### Requirements Extraction
Turn unstructured input into structured requirements:
```
Here are raw inputs from stakeholders:
[paste meeting notes, emails, etc.]

Create structured requirements:
1. Give each requirement a unique ID (REQ-001, etc.)
2. Classify as functional or non-functional
3. Identify the stakeholder/source
4. Flag any ambiguities or conflicts
5. List assumptions made
6. Identify dependencies between requirements

Use our standard template:
- ID | Type | Description | Source | Priority | Acceptance Criteria
```

### Gap Analysis
Find what's missing:
```
Here's our current requirements document:
[paste or describe current requirements]

Here's what the new feature should accomplish:
[describe feature goals]

Identify:
1. Requirements that need to be added
2. Existing requirements that conflict
3. Assumptions that need validation
4. Questions for stakeholders
5. Technical constraints to verify with dev team
```

### Stakeholder Communication
Translate between audiences:
```
Here's a technical explanation:
[paste technical description]

Rewrite this for [audience: executives / business users / etc.]:
- Use business language, not technical jargon
- Focus on impact and benefits
- Include relevant metrics or outcomes
- Keep it to [length: one paragraph / one page / etc.]
```

### Process Documentation
Create clear process flows:
```
Describe this business process:
[paste process description or notes]

Create:
1. A step-by-step process narrative
2. Roles involved at each step
3. Decision points and criteria
4. Exception handling
5. Success criteria

Also note where automation could help.
```

---

## Tools Reference

| Level | Recommended Tools |
|-------|------------------|
| 1-2 | ChatGPT, Claude.ai for analysis and drafting |
| 3 | Jira AI, Confluence AI, Notion AI |
| 4-5 | Custom prompts with domain context |

---

## Common Pitfalls

### AI-Generated Requirements Without Validation
AI can generate plausible-sounding requirements that don't match actual needs. Every requirement needs stakeholder validation.

### Losing the "Why"
AI captures what, but you ensure why. Requirements need context and business justification that AI can't invent.

### Over-Formalizing Early
Early requirements should be flexible. Don't let AI lock down details before they're validated.

### Trusting AI's Domain Knowledge
AI has general knowledge but may not know your specific domain nuances. Always verify domain-specific content.

---

## Measuring Progress

**Level 1-2**: Do you use AI for drafting and analysis? Do you provide actual documents?

**Level 3**: Is AI connected to your documentation systems?

**Level 4**: Does AI know your domain terminology and templates?

**Level 5**: Can AI draft complete requirement sets for your review?

---

## Next Steps

1. **Build a domain glossary** — Essential for Level 4+
2. **Create requirement templates** — Consistent structure for AI output
3. **Try extraction from meeting notes** — High value, immediate impact
4. **Connect to documentation tools** — Unlock cross-reference capabilities

**[Return to AI Productivity Overview →](/docs/ai-productivity/)**
