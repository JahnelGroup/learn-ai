# Learn AI

**Your personal roadmap through the AI landscape.**

Jahnel Group

---

## Credit & Foundation

> **The AI Periodic Table concept was created by [IBM Technology](https://www.youtube.com/watch?v=ESBMgZHzfG0).**
>
> We love this framework for organizing the complex landscape of AI concepts, and we've adapted and extended it to create a learning guide for our team at Jahnel Group.
>
> Watch the original explanation: [AI Periodic Table Explained by IBM](https://www.youtube.com/watch?v=ESBMgZHzfG0)

---

## What Is This?

Learn AI is Jahnel Group's learning guide for navigating the AI landscape. It provides:

- **A structured mental model** — The AI Periodic Table organizes AI concepts into families and complexity levels
- **Clear growth paths** — Three tiers (Foundation, Practitioner, Expert) give you a roadmap for skill development
- **Practical application** — Portfolio work ensures you're building, not just reading
- **Shared vocabulary** — Common language for discussing AI capabilities across the team

This is **not** a certification where you "achieve a level and you're done." It's a continuous learning journey with milestones that help us understand where we are and where we're headed.

---

## The AI Periodic Table

| | G1<br/>Reactive | G2<br/>Retrieval | G3<br/>Orchestration | G4<br/>Validation | G5<br/>Models |
|---|:---:|:---:|:---:|:---:|:---:|
| **Row 1**<br/>Primitives | Pr<br/>Prompts | Em<br/>Embeddings | Cw<br/>Context | Ev<br/>Evaluation | Lg<br/>LLM |
| **Row 2**<br/>Compositions | Fc<br/>Function Call | Vx<br/>Vector DB | Rg<br/>RAG | Gr<br/>Guardrails | Mm<br/>Multi-modal |
| **Row 3**<br/>Deployment | Ag<br/>Agents | Ft<br/>Fine-tuning | Fw<br/>Frameworks | Rt<br/>Red Team | Sm<br/>Small Models |
| **Row 4**<br/>Emerging | Ma<br/>Multi-agent | Sy<br/>Synthetic | Mc<br/>MCP | In<br/>Interpret. | Th<br/>Thinking |

**Rows** = Complexity (Primitives → Compositions → Deployment → Emerging)

**Groups** = Functional families (concepts serving similar purposes)

---

## Learning Tiers

| Tier | Core Question | Focus |
|------|--------------|-------|
| **Foundation** | Can you understand and use AI effectively? | Core concepts, vocabulary, effective AI usage |
| **Practitioner** | Can you build and deploy AI features? | Implementation, production systems, troubleshooting |
| **Expert** | Can you architect AI systems and lead others? | System design, strategic decisions, mentorship |

---

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Project Structure

```
├── docs/
│   ├── intro.md                    # Why this exists
│   ├── getting-started.md          # How to begin
│   ├── periodic-table/             # Element documentation
│   │   ├── reactive/               # G1 family elements
│   │   ├── retrieval/              # G2 family elements
│   │   ├── orchestration/          # G3 family elements
│   │   ├── validation/             # G4 family elements
│   │   └── models/                 # G5 family elements
│   ├── tiers/                      # Learning tier documentation
│   │   ├── overview.md
│   │   ├── foundation.md
│   │   ├── practitioner.md
│   │   └── expert.md
│   └── portfolio-templates/        # Templates for portfolio work
├── src/
│   ├── components/
│   │   └── PeriodicTable/          # Interactive periodic table component
│   ├── pages/
│   │   └── index.js                # Homepage
│   └── css/
│       └── custom.css              # Custom styling
├── docusaurus.config.js            # Site configuration
└── sidebars.js                     # Navigation configuration
```

---

## Contributing

This is a living document. As you learn:

- **Found an error?** Submit a PR to fix it
- **Have a better explanation?** Improve the docs
- **Built something cool?** Share it with the team
- **See a gap?** Propose an addition

---

## Resources

- [AI Periodic Table Explained by IBM](https://www.youtube.com/watch?v=ESBMgZHzfG0) — Original concept
- [Docusaurus Documentation](https://docusaurus.io/) — Site framework

---

## License

Internal use only — Jahnel Group

AI Periodic Table concept by IBM Technology — used with appreciation
