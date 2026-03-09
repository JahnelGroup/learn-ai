import React from 'react';
import styles from './styles.module.css';

const familyStyles = {
  reactive: {
    '--border-color': 'var(--color-reactive)',
    '--bg-color': 'var(--color-reactive-light)',
    badge: 'element-reactive',
  },
  retrieval: {
    '--border-color': 'var(--color-retrieval)',
    '--bg-color': 'var(--color-retrieval-light)',
    badge: 'element-retrieval',
  },
  orchestration: {
    '--border-color': 'var(--color-orchestration)',
    '--bg-color': 'var(--color-orchestration-light)',
    badge: 'element-orchestration',
  },
  validation: {
    '--border-color': 'var(--color-validation)',
    '--bg-color': 'var(--color-validation-light)',
    badge: 'element-validation',
  },
  models: {
    '--border-color': 'var(--color-models)',
    '--bg-color': 'var(--color-models-light)',
    badge: 'element-models',
  },
};

export default function PlaybookElement({ symbol, name, family, description, link }) {
  const fam = familyStyles[family] || familyStyles.reactive;
  const Tag = link ? 'a' : 'div';
  const props = link ? { href: link } : {};

  return (
    <Tag
      className={styles.card}
      style={{ '--border-color': fam['--border-color'], '--bg-color': fam['--bg-color'] }}
      {...props}
    >
      <div className={`${styles.badge} element-badge ${fam.badge}`}>
        {symbol}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </Tag>
  );
}
