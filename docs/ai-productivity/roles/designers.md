---
id: designers
title: Designers
sidebar_position: 3
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# AI Productivity for Designers

> *"AI expands the design space you can explore."*

<ProgressionTracker showRoleSelector={false} />

---

## Your Progression Path

### Level 1: Chat
**What it looks like**: Browser-based AI for design questions and research.

**Typical uses**:
- "What are best practices for form design?"
- "Explain the 60-30-10 color rule"
- "Generate 5 tagline options for a fitness app"
- "What accessibility considerations for data tables?"

**Get more value**: Be specific about context. "Taglines for a fitness app targeting busy parents" beats generic requests.

---

### Level 2: Context
**What it looks like**: Sharing mockups and designs for feedback.

**Typical uses**:
- Upload mockups for accessibility review
- Share screenshots for UX critique
- Provide design system docs for consistency checks
- Paste copy for tone/voice feedback

**Example prompt**:
```
Here's my dashboard design:
[upload screenshot]

Review for:
1. Visual hierarchy - is the important info prominent?
2. Accessibility - contrast ratios, text sizes, touch targets
3. Consistency - does it match common patterns?
4. Usability - any confusing elements?

Our target users are healthcare professionals with limited time.
```

**Get more value**: Always provide user context. AI can't evaluate design without knowing who it's for.

---

### Level 3: Connected
**What it looks like**: AI tools integrated with your design workflow.

**Tools**:
- Figma plugins with AI capabilities
- Adobe Firefly and Creative Cloud AI features
- Design-to-code tools
- AI-powered prototyping tools

**Typical uses**:
- Generate design variations directly in your tool
- AI-assisted image editing and generation
- Automated design system checks
- Real-time accessibility auditing

**Get more value**: Learn your tool's AI features. Most design tools have AI capabilities that go unused.

---

### Level 4: Customized
**What it looks like**: AI knows your design system and brand.

**Key customizations**:
- Design system rules encoded in prompts
- Brand voice guidelines for copy
- Component library references
- Accessibility standards for your product

**Example context**:
```markdown
# Design System Context

## Brand
- Primary: #2E5BFF (Blue)
- Secondary: #8C54FF (Purple)
- Neutral: Gray scale with warm undertones
- Tone: Professional but approachable

## Typography
- Headings: Inter, semibold
- Body: Inter, regular, 16px base
- Line height: 1.5 for readability

## Components
- Buttons: 44px min height (touch target)
- Cards: 8px radius, subtle shadow
- Forms: Labels above inputs, clear error states

## Accessibility
- WCAG 2.1 AA minimum
- 4.5:1 contrast for text
- Focus indicators on all interactive elements
- No color-only information
```

**Get more value**: Keep your design system documentation AI-readable. Reference specific components when asking for designs.

---

### Level 5: Autonomous
**What it looks like**: AI generates design variations and explorations.

**Typical uses**:
- "Create 5 layout variations for this dashboard"
- "Generate mobile adaptations of this desktop design"
- "Explore color palettes that meet accessibility requirements"
- AI maintains design system consistency across pages

**Get more value**: Use AI for exploration, not final decisions. Generate many options, then apply your expertise to select and refine.

---

## Designer-Specific Tips

### Design Critique
Get meaningful feedback on your work:
```
I'm designing [what] for [who].

Here's my current design:
[upload image]

Critique based on:
1. Does the visual hierarchy guide attention correctly?
2. Are interactive elements clearly distinguished?
3. Is the information architecture intuitive?
4. What might confuse or frustrate users?
5. What would you do differently?

Be specific and constructive.
```

### Copy and Microcopy
Generate interface text:
```
I need microcopy for a [type of interface].

Context:
- Product: [what it is]
- Users: [who they are]
- Tone: [voice characteristics]

Generate copy for:
1. Empty states
2. Error messages
3. Confirmation dialogs
4. Onboarding hints
5. Button labels

Keep it concise—users don't read.
```

### Accessibility Review
Check designs for accessibility:
```
Review this design for accessibility:
[upload image]

Check for:
1. Color contrast (WCAG AA minimum)
2. Touch target sizes (44px minimum)
3. Text readability (size, spacing)
4. Clarity without color (colorblind users)
5. Screen reader considerations
6. Keyboard navigation hints

Suggest specific improvements.
```

### Design System Consistency
Verify consistency:
```
Here's a new design:
[upload image]

Here's our design system:
[reference doc or image]

Identify any inconsistencies:
- Colors not from the palette
- Typography deviations
- Spacing irregularities
- Component variations
- Pattern breaks
```

---

## Tools Reference

| Level | Recommended Tools |
|-------|------------------|
| 1-2 | ChatGPT, Claude.ai (with vision) |
| 3 | Figma AI plugins, Adobe Firefly, Galileo AI |
| 4-5 | Custom prompts with design system context |

---

## Common Pitfalls

### AI as Final Decision Maker
AI provides input, not decisions. Your design judgment—informed by user research, business context, and experience—makes the final call.

### Generating Without Intent
Random AI exploration can be fun but unfocused. Start with a design problem, then use AI to explore solutions.

### Ignoring Brand and Context
AI designs generically. Always inject your brand, users, and context to get relevant output.

### Skipping User Validation
AI can predict some usability issues but can't replace actual user testing. AI-approved designs still need user validation.

---

## Measuring Progress

**Level 1-2**: Do you use AI for design feedback? Do you share actual designs, not descriptions?

**Level 3**: Are you using AI features in your design tools?

**Level 4**: Does AI know your design system? Does it generate on-brand suggestions?

**Level 5**: Do you use AI to explore design variations systematically?

---

## Next Steps

1. **Start with accessibility reviews** — Immediate value, low risk
2. **Document your design system** — Make it AI-readable
3. **Explore AI design tools** — Try Figma plugins, Galileo, etc.
4. **Build critique prompts** — Get consistent, useful feedback

**[Return to AI Productivity Overview →](/docs/ai-productivity/)**
