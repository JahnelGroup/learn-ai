---
id: designing-tiers-levels
title: Designing Tiers & Levels
sidebar_position: 3
---

import TwoLadders from '@site/src/components/TwoLadders';

# Designing Tiers & Levels

The single most common confusion in a capability program is treating "how good someone is with AI" as one number. It isn't. There are **two different ladders**, measuring **two different axes**, and people climb them at different speeds.

- **Tiers** measure **building depth**: how deeply someone can *build* with AI, from understanding the primitives, to shipping features, to architecting systems and leading others.
- **Levels** measure **usage depth**: how deeply AI is *woven into someone's everyday workflow*, from isolated chat, to context-rich prompting, to connected, customized, and eventually autonomous work.

These are not the same progression, and they are not a single rank. Someone can sit high on one ladder and low on the other.

<TwoLadders />

:::tip Two axes, not one
A staff engineer who architects AI systems (high on the **Tiers** ladder) might still copy-paste code into a chat window all day (low on the **Levels** ladder). A non-engineer who has wired AI into every corner of their daily work (high on **Levels**) may never build a production feature (low on **Tiers**). Both are real, valuable kinds of growth — and conflating them hides where each person actually needs to grow next.
:::

## Why two ladders instead of one

A single linear scale forces a false ordering. It implies that the person who uses AI all day is automatically "more advanced" than the person who builds AI systems occasionally — or vice versa. Neither is true.

Separating the axes does three things for your program:

1. **It removes the ceiling.** Someone can keep climbing usage depth without being told they've "maxed out" because they aren't a builder — and keep climbing building depth without pretending they've automated their whole workflow.
2. **It clarifies what to learn next.** A person can see, honestly, that they're a strong builder who has barely adopted AI into their own work, and pick the gap that matters most to them.
3. **It keeps measurement honest.** When you measure adoption, you measure usage depth (Levels). When you assess capability, you assess building depth (Tiers). Mixing them produces vanity metrics — high tool-license counts that say nothing about whether anyone can build.

:::warning Don't collapse the ladders
The temptation is to flatten both into one "AI maturity score" for a tidy dashboard. Resist it. The moment the two axes become one number, you lose the ability to tell a deep builder from a heavy user — and your program starts optimizing for the wrong thing.
:::

## The build ladder: Tiers

Tiers describe **building depth**: what someone can construct, deploy, and lead. This site uses three:

- **Foundation:** *Can you understand and use AI effectively?* You share the vocabulary, understand capabilities and limits, and make informed decisions about when to apply AI.
- **Practitioner:** *Can you build and deploy AI features?* You independently build and ship AI features into production systems.
- **Expert:** *Can you architect AI systems and lead others?* You design complex systems, make strategic decisions, and elevate the capability of those around you.

The defining feature of a build ladder is that **each rung is demonstrated through real work**, not recited from memory. Progression is proven by a portfolio and a conversation, not a quiz.

## The usage ladder: Levels

Levels describe **usage depth**: how deeply AI is integrated into the way someone actually works. This site uses five:

- **Chat:** isolated Q&A in a browser tab.
- **Context:** manually supplying files, screenshots, and code so answers fit your situation.
- **Connected:** AI has access to your real environment (repo, tools, terminal).
- **Customized:** personal commands, project prompts, and hooks shape how AI behaves.
- **Autonomous:** AI runs multi-step tasks under your review and supervision.

The defining feature of a usage ladder is that **each rung is a deeper integration into daily workflow** — less copy-paste, more leverage — independent of whether the person can build AI systems themselves.

## Adapting this for your org

The specific rungs above are *this* program's. Yours should reflect your people and your work. Use the two-ladder structure as the skeleton, then fit your own muscle to it.

### 1. Decide what each axis means in your context

Keep the axes distinct. One ladder should answer *"how deeply can you build with AI?"* and the other *"how deeply is AI woven into your work?"* If both of your ladders end up measuring the same thing, you have one ladder with extra steps. Start over.

### 2. Choose the number of rungs deliberately

Three to five rungs per ladder is a good range. Fewer than three and the ladder can't show meaningful progression; more than five and the rungs blur together and people argue about which one they're on. Each rung must be **distinguishable in plain language**. If you can't explain the difference between two adjacent rungs in a sentence, merge them.

### 3. Anchor each rung to a real capability question

Give every build-ladder rung a single, plain-language **core question** (e.g. *"Can you build and deploy AI features?"*). Give every usage-ladder rung a concrete **workflow behavior** (e.g. *"AI has access to your environment"*). The question and the behavior are what make a rung assessable instead of aspirational.

### 4. Define how someone demonstrates each rung

For the build ladder, decide what evidence proves a rung, typically a portfolio artifact plus a conversation. For the usage ladder, decide what observable behavior signals a rung — what you'd actually see in how the person works. Vague rungs produce vague assessments.

:::info Keep the framing consistent everywhere
However you adapt the rungs, hold the framing steady across your whole program: **Tiers = building depth, Levels = usage depth — two different axes.** When the intro, the overview, and the day-to-day language all describe the ladders the same way, people stop conflating them and start growing on the axis that matters most to them.
:::

### 5. Let people climb at different rates

The point of two ladders is that progress on one doesn't gate the other. A new hire might race up the usage ladder in a month while taking a year to climb the build ladder, and that's a healthy program, not a broken one. Design your assessments and your encouragement so each ladder can advance on its own.

---

Once your two ladders are defined, the next questions are *how you assess building depth* and *how you measure usage depth* honestly, covered in [Building Assessment Rubrics](/docs/upskilling-playbook/building-rubrics) and [Measuring Adoption: The Climb](/docs/upskilling-playbook/measuring-adoption).
