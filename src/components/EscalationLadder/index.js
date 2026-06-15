import React from 'react';
import styles from './styles.module.css';

const defaultRungs = [
  {
    name: 'TALK IT',
    tier: 'foundation',
    tagline: 'Explain it',
    description:
      'Can you reason about it out loud? Conversation surfaces real understanding, and filters out memorized buzzwords.',
  },
  {
    name: 'BUILD IT',
    tier: 'practitioner',
    tagline: 'Ship it',
    description:
      'Can you make it work in real code? Building proves the understanding holds up under contact with reality.',
  },
  {
    name: 'MULTIPLY IT',
    tier: 'expert',
    tagline: 'Scale it',
    description:
      'Can you make others better at it? Multiplying turns individual skill into team capability.',
  },
];

const tierClass = {
  foundation: styles.rungFoundation,
  practitioner: styles.rungPractitioner,
  expert: styles.rungExpert,
};

function Rung({ rung, index }) {
  return (
    <li
      className={`${styles.rung} ${tierClass[rung.tier] || ''}`}
      style={{ '--rung-index': index }}
    >
      <div className={styles.rungInner}>
        <div className={styles.rungHeader}>
          <span className={styles.rungStep}>{index + 1}</span>
          <span className={styles.rungName}>{rung.name}</span>
        </div>
        {rung.tagline && (
          <span className={styles.rungTagline}>{rung.tagline}</span>
        )}
        {rung.description && (
          <p className={styles.rungDescription}>{rung.description}</p>
        )}
      </div>
    </li>
  );
}

/**
 * EscalationLadder
 *
 * The signature talk -> build -> multiply escalation, color-coded to the tier
 * palette (Foundation green / Practitioner blue / Expert purple). Renders an
 * offset "staircase" on wide screens and collapses to a clean vertical stack on
 * narrow screens. Reusable on any page (Design Principles, Learning Tiers
 * overview, etc.).
 *
 * Props:
 *   rungs?  Array<{ name, tier, tagline?, description? }>
 *           tier is one of 'foundation' | 'practitioner' | 'expert'.
 *           Defaults to the canonical TALK IT / BUILD IT / MULTIPLY IT rungs.
 *   className?  Optional class applied to the outer container.
 */
export default function EscalationLadder({ rungs = defaultRungs, className }) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <ol className={styles.ladder}>
        {rungs.map((rung, index) => (
          <Rung key={rung.name} rung={rung} index={index} />
        ))}
      </ol>
    </div>
  );
}
