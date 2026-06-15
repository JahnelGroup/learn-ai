import React from 'react';
import styles from './styles.module.css';

const defaultBands = [
  {
    name: 'Solid',
    level: 'solid',
    summary: 'Demonstrates the capability with reasoning to back it up.',
  },
  {
    name: 'Partial',
    level: 'partial',
    summary: 'Knows the idea but the understanding is shallow or untested.',
  },
  {
    name: 'Gap',
    level: 'gap',
    summary: 'A misconception or a blind spot, not just a missing detail.',
  },
];

const levelClass = {
  solid: styles.bandSolid,
  partial: styles.bandPartial,
  gap: styles.bandGap,
};

/**
 * RubricScale
 *
 * A reusable Solid / Partial / Gap scoring band, color-coded to the family
 * palette (validation-green -> retrieval-amber -> reactive-red). Placed above a
 * rubric dimension so the three-point scale reads consistently everywhere it
 * appears. Renders as a horizontal band on wide screens and stacks vertically
 * on phones (no pinch-zoom required).
 *
 * Props:
 *   bands?   Array<{ name, level, summary? }>
 *            level is one of 'solid' | 'partial' | 'gap'.
 *            Defaults to the canonical Solid / Partial / Gap descriptions.
 *   label?   Optional eyebrow label rendered above the band.
 *   compact? When true, hides the per-band summary text (just the colored
 *            labels) — handy when repeating the scale above many dimensions.
 *   className?  Optional class applied to the outer container.
 */
export default function RubricScale({
  bands = defaultBands,
  label,
  compact = false,
  className,
}) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {label && <div className={styles.scaleLabel}>{label}</div>}
      <ul
        className={`${styles.scale} ${compact ? styles.scaleCompact : ''}`}
        aria-label="Scoring scale: Solid, Partial, Gap"
      >
        {bands.map((band) => (
          <li
            key={band.name}
            className={`${styles.band} ${levelClass[band.level] || ''}`}
          >
            <span className={styles.bandName}>{band.name}</span>
            {!compact && band.summary && (
              <span className={styles.bandSummary}>{band.summary}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
