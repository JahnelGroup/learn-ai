---
id: tech-leads
title: Tech Leads
sidebar_position: 6
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# AI Productivity for Tech Leads

> *"AI multiplies your team's effectiveness, not just your own."*

<ProgressionTracker showRoleSelector={false} />

---

## Your Progression Path

### Level 1: Chat
**What it looks like**: Browser-based AI for research and second opinions.

**Typical uses**:
- "Compare event-driven vs request-response for our use case"
- "What are the trade-offs of microservices vs monolith?"
- "Explain Kubernetes networking to someone new to containers"
- "How should I approach this architecture decision?"

**Get more value**: Use AI as a thought partner for decisions. Explain your constraints and get AI to challenge your thinking.

---

### Level 2: Context
**What it looks like**: Sharing diagrams, code, and documents for review.

**Typical uses**:
- Upload architecture diagrams for feedback
- Share code diffs for impact analysis
- Provide system documentation for review
- Paste performance data for analysis

**Example prompt**:
```
Here's our current architecture:
[upload diagram or describe]

Here's what we're considering:
[describe proposed change]

Analyze:
1. What problems does this solve?
2. What new problems might it create?
3. What are we not considering?
4. How does this affect scalability, maintainability, security?
5. What questions should I be asking?
```

**Get more value**: Share the full context—current state, constraints, goals. Partial context leads to incomplete analysis.

---

### Level 3: Connected
**What it looks like**: AI tools across your technical ecosystem.

**Tools**:
- Claude Code or Cursor for codebase-wide analysis
- MCP servers for infrastructure visibility
- AI-powered monitoring and alerting
- Code review assistants

**Typical uses**:
- "Analyze our codebase for architecture drift"
- "Find all places we deviate from our patterns"
- "What's the impact of changing this interface?"
- Cross-repository analysis and dependency mapping

**Get more value**: Connect AI to your actual systems—code, monitoring, documentation. Real data beats descriptions.

---

### Level 4: Customized
**What it looks like**: AI knows your architecture, patterns, and team conventions.

**Key customizations**:
- Architecture decision records AI references
- Team coding standards encoded
- Project-wide patterns documented
- Review checklists and guidelines

**Example context**:
```markdown
# Tech Lead Context

## Architecture
- Microservices: 12 services, event-driven via Kafka
- API Gateway: Kong
- Database: PostgreSQL (main), Redis (cache)
- Deployment: Kubernetes on AWS EKS

## Standards
- New services must follow template in /templates/service-template
- All APIs documented in OpenAPI
- Event schemas in /schemas with versioning
- No direct database access between services

## Patterns
- CQRS for read-heavy services (see order-query-service)
- Saga pattern for distributed transactions (see checkout-service)
- Circuit breakers via Resilience4j

## Technical Debt Register
- Legacy auth service needs migration (Q3 priority)
- Order service has N+1 queries (low priority)
- Monitoring gaps in payment flow (high priority)

## Team
- 3 squads: Platform, Customer, Payments
- Weekly architecture review Thursdays
- ADRs required for cross-service changes
```

**Get more value**: Maintain living documentation AI can reference. Keeps everyone (including AI) aligned.

---

### Level 5: Autonomous
**What it looks like**: AI handles technical work with your oversight.

**Typical uses**:
- "Implement this new microservice following our template"
- "Refactor authentication across all services"
- AI-assisted code reviews before you review
- Automated documentation updates as code changes

**Get more value**: Use AI to scale your impact across the team. AI can pre-review PRs, flag issues, and suggest improvements.

---

## Tech Lead-Specific Tips

### Architecture Decision Support
Get thorough analysis for decisions:
```
I'm deciding on [architectural choice].

Context:
- Current system: [describe]
- Requirements: [list]
- Constraints: [budget, timeline, skills, etc.]
- Options being considered: [list options]

For each option, analyze:
1. How well it meets requirements
2. Implementation complexity
3. Operational complexity
4. Scalability characteristics
5. Security implications
6. Team skill alignment
7. Migration path from current state

What am I not thinking about?
```

### Code Review Assistance
Pre-review PRs before your review:
```
Review this PR against our standards:
[paste diff or describe changes]

Our standards (see CLAUDE.md) emphasize:
- [key standard 1]
- [key standard 2]
- [key standard 3]

Identify:
1. Standard violations
2. Potential bugs
3. Performance concerns
4. Security issues
5. Test coverage gaps
6. Documentation needs

Be specific with line numbers and suggestions.
```

### Team Enablement
Help team members level up:
```
A developer on my team is struggling with [concept/skill].

They understand: [current knowledge]
They're confused by: [gap]

Create an explanation that:
1. Builds on what they know
2. Uses our codebase examples (see [files])
3. Addresses common misconceptions
4. Includes practical exercises
5. Suggests next learning steps
```

### Incident Analysis
Learn from production issues:
```
We had an incident:
[describe what happened]

Timeline:
[paste timeline]

Help me analyze:
1. Root cause (5 whys analysis)
2. Contributing factors
3. Why our systems didn't catch this earlier
4. Similar risks we might have
5. Preventive measures (process and technical)
6. Detection improvements

Format for a blameless postmortem.
```

---

## Tools Reference

| Level | Recommended Tools |
|-------|------------------|
| 1-2 | ChatGPT, Claude.ai for analysis |
| 3 | Claude Code, Cursor, MCP servers |
| 4-5 | Custom context + team-wide prompts |

---

## Common Pitfalls

### AI Replacing Technical Judgment
AI is a powerful input but shouldn't replace your judgment on critical decisions. You're accountable for architecture choices.

### Inconsistent AI Usage Across Team
If everyone uses AI differently, code quality becomes inconsistent. Establish team standards for AI-assisted development.

### Automating Code Review Entirely
AI can catch surface issues but misses context that humans catch. Use AI to augment, not replace, your code review.

### Not Updating Context
As architecture evolves, context files become stale. Schedule regular updates to keep AI aligned with reality.

---

## Team Enablement

As a tech lead, you can help your whole team level up:

### 1. Create Shared Context Files
Build CLAUDE.md or equivalent that the whole team uses:
- Architecture overview
- Coding standards
- Common patterns
- Gotchas and tribal knowledge

### 2. Establish AI Guidelines
Define team standards for:
- When to use AI vs figure it out
- What requires human review
- How to document AI-assisted work

### 3. Build Custom Commands
Create team commands for common tasks:
- `/review` — Code review checklist
- `/test` — Test generation template
- `/doc` — Documentation standards

### 4. Model Effective Usage
Show the team how you use AI effectively:
- Share prompts that work well
- Demonstrate plan-before-execute
- Show how you verify AI output

---

## Measuring Progress

**Level 1-2**: Do you use AI for architecture analysis? Do you share actual diagrams and code?

**Level 3**: Is AI connected to your codebase? Do you analyze across services?

**Level 4**: Does AI know your architecture and standards? Is the team using shared context?

**Level 5**: Is AI integrated into team workflows (code review, documentation)?

---

## Next Steps

1. **Create team context files** — Align everyone including AI
2. **Define AI guidelines** — Set expectations for the team
3. **Build review workflows** — AI-assisted code review
4. **Connect to monitoring** — AI-powered analysis of production

**[Return to AI Productivity Overview →](/docs/ai-productivity/)**
