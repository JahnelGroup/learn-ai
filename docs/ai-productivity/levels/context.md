---
id: context
title: "Level 2: Context"
sidebar_position: 2
---

import ProgressionTracker from '@site/src/components/ProgressionTracker';

# Level 2: Context

> *"I show AI what I'm actually working with."*

<ProgressionTracker currentLevel={2} showRoleSelector={false} />

---

## What This Level Means

At Level 2, you **manually provide context** to AI—pasting code, uploading screenshots, attaching documents. Instead of describing your situation, you show it.

This is a significant leap. The difference between "I have a React component with a bug" and actually pasting the component is the difference between guessing and knowing.

**Characteristics of Level 2:**
- Copy-paste code, text, or data into AI
- Upload screenshots and images
- Attach documents for review
- Provide multiple files for broader context
- Still requires manual effort to bridge AI and your work

---

## The Leap from Level 1

| Level 1: Chat | Level 2: Context |
|---------------|------------------|
| Describe your problem | Show your actual code/work |
| "I have a component that re-renders too much" | [paste the actual component] |
| Generic debugging advice | Specific line-by-line analysis |
| AI imagines your context | AI sees your context |
| Quick answers | Deeper analysis |

---

## By Role: What Context Looks Like

### Developers
- Paste entire functions or files for review
- Upload error screenshots with stack traces
- Provide multiple related files for refactoring advice
- Share architecture diagrams for feedback

### QA Engineers
- Upload screenshots of bugs
- Paste test logs for analysis
- Share test scripts for optimization suggestions
- Provide requirement docs to generate test cases

### Designers
- Upload mockups for accessibility review
- Share design systems for consistency checks
- Provide wireframes for UX feedback
- Screenshot competitor designs for analysis

### Business Analysts
- Attach requirement documents for review
- Share process diagrams for optimization
- Paste user interview notes for theme extraction
- Upload spreadsheets for data analysis

### Project Managers
- Share project timelines for risk analysis
- Upload status reports for trend identification
- Paste team communications for summary
- Provide meeting recordings for action item extraction

### Tech Leads
- Upload architecture diagrams for review
- Share code review diffs for feedback
- Provide performance reports for analysis
- Paste system logs for troubleshooting

---

## Getting to This Level

### 1. Learn to Upload
Most AI chat interfaces now support:
- **Images**: Screenshots, diagrams, photos
- **Documents**: PDFs, Word docs, spreadsheets
- **Code files**: Direct paste or file upload

### 2. Provide Complete Context
Don't paste a single function—paste the file. Don't describe the error—paste the full stack trace.

```
Here's my React component that's re-rendering too often:

[paste entire component file]

And here's the parent component that uses it:

[paste parent component]

Help me optimize the re-renders.
```

### 3. Use Multi-Modal Features
- Screenshot a confusing UI and ask "What's wrong here?"
- Upload a diagram and ask "How would you improve this architecture?"
- Paste a code diff and ask "What are the implications of this change?"

---

## Common Pitfalls

**"I paste too little context."**

More context is almost always better. AI can ignore irrelevant parts; it can't invent missing parts.

**"I paste and forget to ask a question."**

Context without a clear ask gets generic responses. Always include what you want.

**"I don't use images."**

Screenshots are extremely valuable. A bug screenshot is worth a thousand words of description.

**"I hit context limits."**

Long conversations lose early context. Start fresh sessions for new topics. Or use models with longer context windows.

---

## Ready for Level 3?

You're ready to progress when:

- [ ] You regularly paste code/documents rather than describe them
- [ ] You use image uploads for bug reports or design feedback
- [ ] You're frustrated by the copy-paste overhead
- [ ] You want AI to have access to files you haven't explicitly shared

**[Continue to Level 3: Connected →](/docs/ai-productivity/levels/connected)**

---

## The Leap Ahead

| Level 2: Context | Level 3: Connected |
|------------------|-------------------|
| Copy-paste code to AI | AI reads your codebase |
| Upload one screenshot | AI sees your full project |
| Manual context gathering | Automatic context access |
| "Here's the file..." | "Look at src/components/..." |
