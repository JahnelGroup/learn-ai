import React from 'react';
import styles from './styles.module.css';

const rungs = [
  {
    number: 1,
    name: 'Using It',
    question: 'Are people using it?',
    signal: 'Depth: where work happens across the 5 Levels.',
    trap: 'Counting seats and license activations.',
  },
  {
    number: 2,
    name: 'Good At It',
    question: 'Are they good at it?',
    signal: 'Judgment: assessed through conversation, demo, and evidence.',
    trap: 'Telemetry volume: tokens, prompts, accepted suggestions.',
  },
  {
    number: 3,
    name: 'Value, No Breakage',
    question: 'Is it adding value without breaking things?',
    signal: 'Throughput paired with stability — speed and safety together.',
    trap: 'A speed number shown with no safety number beside it.',
  },
  {
    number: 4,
    name: 'Compounding',
    question: 'Is the capability compounding?',
    signal: 'Reuse of shared artifacts — skills, context files, evals.',
    trap: 'One-off heroics that never become shared leverage.',
  },
];

function Rung({ rung, total }) {
  return (
    <li
      className={styles.rung}
      style={{ '--rung-index': rung.number - 1, '--rung-total': total }}
    >
      <div className={styles.rungInner}>
        <div className={styles.rungHeader}>
          <span className={styles.rungNumber}>{rung.number}</span>
          <span className={styles.rungName}>{rung.name}</span>
        </div>
        <p className={styles.rungQuestion}>{rung.question}</p>
        <div className={styles.signalTrap}>
          <div className={`${styles.cell} ${styles.signal}`}>
            <span className={styles.cellLabel}>Signal</span>
            <span className={styles.cellText}>{rung.signal}</span>
          </div>
          <div className={`${styles.cell} ${styles.trap}`}>
            <span className={styles.cellLabel}>Trap</span>
            <span className={styles.cellText}>{rung.trap}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function TheClimb() {
  return (
    <div className={styles.container}>
      <ol className={styles.climb}>
        {rungs.map((rung) => (
          <Rung key={rung.number} rung={rung} total={rungs.length} />
        ))}
      </ol>
      <p className={styles.caption}>
        Measure depth and judgment now, throughput and stability next (always
        paired), reuse always. Ignore seats.
      </p>
    </div>
  );
}
