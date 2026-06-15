import React from 'react';
import styles from './styles.module.css';

const tiers = [
  {
    rung: 3,
    name: 'Expert',
    description: 'Architect systems and lead others',
    tierKey: 'expert',
  },
  {
    rung: 2,
    name: 'Practitioner',
    description: 'Build and deploy AI features',
    tierKey: 'practitioner',
  },
  {
    rung: 1,
    name: 'Foundation',
    description: 'Understand and use AI effectively',
    tierKey: 'foundation',
  },
];

const levels = [
  {
    rung: 5,
    name: 'Autonomous',
    description: 'Multi-step tasks with review',
  },
  {
    rung: 4,
    name: 'Customized',
    description: 'Personal commands, prompts, hooks',
  },
  {
    rung: 3,
    name: 'Connected',
    description: 'AI has access to your environment',
  },
  {
    rung: 2,
    name: 'Context',
    description: 'Manually providing files and code',
  },
  {
    rung: 1,
    name: 'Chat',
    description: 'Isolated Q&A in the browser',
  },
];

function Ladder({ axisLabel, axisQuestion, depthLabel, rungs, variant }) {
  return (
    <div className={`${styles.ladder} ${styles[variant]}`}>
      <div className={styles.ladderHeader}>
        <div className={styles.axisLabel}>{axisLabel}</div>
        <div className={styles.axisQuestion}>{axisQuestion}</div>
      </div>
      <div className={styles.rungs}>
        {rungs.map((rung) => (
          <div
            key={rung.rung}
            className={`${styles.rung} ${rung.tierKey ? styles[`tier_${rung.tierKey}`] : ''}`}
          >
            <div className={styles.rungNumber}>{rung.rung}</div>
            <div className={styles.rungBody}>
              <div className={styles.rungName}>{rung.name}</div>
              <div className={styles.rungDescription}>{rung.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.depthLabel}>{depthLabel}</div>
    </div>
  );
}

export default function TwoLadders() {
  return (
    <div className={styles.container}>
      <div className={styles.laddersGrid}>
        <Ladder
          variant="buildLadder"
          axisLabel="Tiers: Build Depth"
          axisQuestion="How deeply can you build with AI?"
          depthLabel="↑ deeper building capability"
          rungs={tiers}
        />
        <Ladder
          variant="usageLadder"
          axisLabel="Levels: Usage Depth"
          axisQuestion="How deeply is AI woven into your workflow?"
          depthLabel="↑ deeper everyday usage"
          rungs={levels}
        />
      </div>
      <p className={styles.caption}>
        Two different axes. <strong>Tiers</strong> measure building depth; <strong>Levels</strong>{' '}
        measure usage depth. You can be high on one ladder and low on the other.
      </p>
    </div>
  );
}
