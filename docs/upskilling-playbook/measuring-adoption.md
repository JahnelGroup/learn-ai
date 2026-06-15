---
id: measuring-adoption
title: "Measuring Adoption: The Climb"
sidebar_position: 5
---

import TheClimb from '@site/src/components/TheClimb';

# Measuring Adoption: The Climb

Most adoption dashboards measure the wrong thing. They count licenses, seats, and prompt volume: numbers that go up whether or not anyone is getting better. Those numbers feel like progress and tell you almost nothing about capability.

Real adoption is a climb. People move from *touching* a tool to *trusting* their own judgment with it, to producing value without breaking things, to compounding that value across a team. You measure the climb with four questions, asked in order. Each question has a **signal** worth tracking and a **trap** that fools you into celebrating activity instead of capability.


<TheClimb />

:::tip The one line to remember
Measure depth and judgment now, throughput and stability next (always paired), and reuse always. Ignore seats.
:::

## The four questions

### 1. Are people using it?

**Signal: depth, not seats.** Map usage to the [5 Levels](/docs/ai-productivity/levels/chat) of AI productivity. A team where people live at Level 1 (occasional chat) looks identical to a team operating at Level 4 (customized, connected workflows) if all you count is logins. Where the work actually happens is the signal.

**Trap: seats and activations.** A 100% license-activation rate tells you procurement worked. It tells you nothing about whether anyone changed how they work. Seats are the easiest number to get and the easiest to mistake for adoption.

### 2. Are they good at it?

**Signal — judgment.** Capability is whether someone knows when to trust the model, when to verify, and when to walk away. You assess that the same way the rest of this playbook does: through a [conversation, a demo, and a portfolio of real work](./building-rubrics), not a quiz. Judgment shows up in how someone reasons about a problem, not in how many tokens they spent.

**Trap: telemetry volume.** Tokens consumed, prompts sent, suggestions accepted: these measure *activity*, not *skill*. A reckless engineer who accepts every suggestion generates more telemetry than a careful one who rejects most of them, and is the more dangerous of the two. You cannot measure judgment with a meter. Only with a conversation.

### 3. Is it adding value without breaking things?

**Signal — throughput paired with stability.** Speed only counts if it is safe. Track delivery throughput and operational stability *together*, never one without the other. Velocity that raises your change-failure rate or incident count is negative ROI wearing a productivity costume.

**Trap — a speed number with no safety number next to it.** "We shipped 30% faster" is meaningless on its own. Faster than what, at what cost to reliability? Always show a speed number and a safety number side by side, or you are measuring a story, not an outcome.

### 4. Is the capability compounding?

**Signal — reuse of shared artifacts.** The payoff of an upskilling program is leverage that grows. Track whether people are building and reusing shared assets (prompt libraries, context files, custom commands, evaluation suites) so that one person's good work becomes everyone's starting point. Reuse is the flywheel metric.

**Trap — one-off heroics.** A single engineer doing impressive things in isolation is a nice anecdote, not a compounding capability. If the win cannot be reused by the next person, it does not scale, and it leaves with the person who built it.

## Leading vs. lagging indicators

The four questions are not all on the same clock, and that trips up impatient programs.

- **Leading indicators move in weeks.** Depth (Question 1), judgment (Question 2), and the appearance of shared artifacts (Question 4) shift quickly. You can see them almost immediately, and they tell you the climb is underway.
- **Lagging indicators move in quarters.** Throughput-with-stability (Question 3) is a downstream business outcome. It lags the capability that produces it by a couple of quarters, because it depends on people first getting good and then getting the habits that compound.

:::warning Watch leading signals first
If you judge the program only by its lagging indicators, you will kill it before it has had time to prove out. Watch the leading signals to confirm the climb is happening, and give the lagging signals the quarters they need. And resist tying these metrics to compensation. The moment you do, you get gamed numbers instead of honest ones.
:::

## Seats vs. depth

This is the distinction the whole model turns on, so it is worth stating plainly.

| | Seats | Depth |
|---|---|---|
| **What it measures** | Access | Capability |
| **How you get it** | A procurement report | A conversation and a portfolio |
| **What it proves** | You paid for the tools | People can use them with judgment |
| **How it fails you** | Goes up regardless of skill | Honest, but takes real work to read |

Access is not capability. Buying everyone a license guarantees that everyone *can* use AI; it guarantees nothing about whether anyone uses it well, safely, or in a way that compounds. That gap — between access and capability — is exactly what an upskilling program exists to close, and seats can never see it.

So measure the climb. Honestly read where people are, how good they are, whether the value is real and safe, and whether it is compounding. Those four answers tell you what a license count never will.
