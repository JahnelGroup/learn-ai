---
id: design-principles
title: "Why It Works: Design Principles"
sidebar_position: 2
---

import EscalationLadder from '@site/src/components/EscalationLadder';

# Why It Works: Design Principles

> *"Copy the structure and you get a checklist. Copy the principles and you get a program."*

Before you copy any tier, rubric, or assessment, understand *why* the pieces are shaped the way they are. The mechanics are easy to clone; the philosophy is what makes them work. Five principles do the heavy lifting. Get these right and the rest of the playbook falls into place.

---

## 1. It's a conversation, not a quiz

The fastest way to learn whether someone actually understands a concept is to talk to them about it. Not to hand them a multiple-choice form, but to ask, listen, and follow up.

A quiz rewards recognition: pick the right answer from a list, match the term to the definition. But recognition is shallow. Someone can pass a quiz on "context windows" or "retrieval-augmented generation" and still have no working model of when to reach for either one.

A conversation rewards understanding. You ask an open question, the person reasons out loud, and you follow the reasoning wherever it goes, pressing on the soft spots and giving credit for genuine insight. You learn far more from *how* someone thinks through a problem than from *which* box they checked.

:::tip
Design your assessment around questions a person answers in their own words, then have a human listen. The goal is to hear them think, not to score a form.
:::

---

## 2. Reasoning over recitation

Anyone can memorize the definition of an embedding. The question that matters is: *can you reason about when to use one, what breaks when you don't, and how you'd know?*

Recitation is brittle. It survives exactly one question (the one it was rehearsed for) and collapses the moment you ask "why?" or "what would you do instead?" Reasoning is durable. It transfers to problems the person has never seen, because it's built on a real mental model rather than a memorized string.

This is why the assessment never publishes verbatim "model answers." A recitable script turns the assessment into a memory test and teaches people to game it. Instead, describe *what a strong answer demonstrates*: the judgment, the trade-offs, the awareness of failure modes. Then let assessors recognize that thinking in whatever words the person uses.

:::warning
The moment a "correct answer" becomes copy-pasteable, you've stopped measuring understanding and started measuring recall. Keep the criteria about thinking, not phrasing.
:::

---

## 3. Talk it → Build it → Multiply it

Real capability shows up at three escalating levels, and each one filters out the shallow version of the one before. You can talk convincingly about something you can't build. You can build something in isolation that you can't help anyone else do. Each rung demands more, and proves more.

<EscalationLadder />

**Talk it** is the entry filter. Can you explain the idea, reason about its trade-offs, and say when *not* to use it? This catches buzzword fluency early.

**Build it** is the reality check. Can you make it actually work in real code, where the edge cases live and the demo-day magic wears off? Plenty of people can describe a pattern they've never successfully shipped.

**Multiply it** is the ceiling. Can you make the people around you better at it — through review, mentoring, patterns, and tooling? This is the difference between a strong individual contributor and someone who raises the whole team's floor.

Map these rungs onto your tiers and you get a progression that's hard to fake: each level requires the one below it, and no amount of polish at one rung substitutes for the next.

:::info
This same escalation appears on the learner side as the logic behind the tiers: Foundation, Practitioner, Expert. The ladder is the connective tissue between *how you assess* and *how people grow*.
:::

---

## 4. "Not Yet," not "Fail"

How you frame the outcome of an assessment changes who shows up for it.

"Fail" is terminal. It says *you are not good enough*, and it makes people avoid the assessment, hide their gaps, and treat the whole exercise as a threat. "Not Yet" is directional. It says *you haven't demonstrated this yet — here's what's missing and what to practice.* Same evidence, completely different relationship to growth.

This isn't softness for its own sake. A capability program only works if people are honest about what they can't do, and they'll only be honest if the cost of "not yet" is a learning plan rather than a verdict. Frame every gap as the next thing to work on, and the assessment becomes something people opt *into*.

:::tip
Pair every "not yet" with a concrete next step. The outcome of an assessment should always be a direction, never just a label.
:::

---

## 5. Portfolio as proof

The most trustworthy evidence that someone can do something is that they have already done it.

Talk and reasoning tell you a lot, but the strongest signal is real work: a shipped feature, a tool they built, a pattern they introduced that others now use, a review where they caught something subtle. A portfolio is hard to fake and easy to verify — it's the difference between *"I understand prompt engineering"* and *"here's the system I built that depends on it."*

Lean on portfolios as you climb the tiers. At the higher levels especially, the question isn't whether someone can answer well in the moment — it's whether they have a track record of doing the work and lifting the people around them.

:::info
Portfolio evidence is also what keeps the program honest from the top down: it ties recognition to outcomes you can point at, not to seat counts or course completions.
:::

---

## How the principles fit together

These five aren't independent rules — they reinforce each other:

- A **conversation** is the only format that can surface **reasoning** instead of recitation.
- The **talk → build → multiply** escalation gives that conversation a structure to climb.
- **"Not Yet"** keeps people honest as they climb, so the assessment measures truth instead of bravado.
- A **portfolio** anchors the whole thing to real, verifiable work.

Get these right and the mechanics — tiers, rubrics, modalities — become straightforward. Get them wrong and even a perfect rubric measures the wrong thing.
