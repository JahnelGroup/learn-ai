import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const levels = [
  {
    number: 1,
    name: 'Chat',
    description: 'Isolated Q&A in browser',
    path: '/docs/ai-productivity/levels/chat',
  },
  {
    number: 2,
    name: 'Context',
    description: 'Manually providing files, screenshots, code',
    path: '/docs/ai-productivity/levels/context',
  },
  {
    number: 3,
    name: 'Connected',
    description: 'AI has access to your environment',
    path: '/docs/ai-productivity/levels/connected',
  },
  {
    number: 4,
    name: 'Customized',
    description: 'Personal commands, project prompts, hooks',
    path: '/docs/ai-productivity/levels/customized',
  },
  {
    number: 5,
    name: 'Autonomous',
    description: 'Multi-step tasks with review/supervision',
    path: '/docs/ai-productivity/levels/autonomous',
  },
];

function LevelCard({ level, isActive, isCurrent }) {
  const cardClass = `${styles.levelCard} ${isActive ? styles.levelCardActive : ''} ${isCurrent ? styles.levelCardCurrent : ''}`;

  return (
    <Link to={level.path} className={cardClass}>
      <div className={styles.levelNumber}>{level.number}</div>
      <div className={styles.levelName}>{level.name}</div>
      <div className={styles.levelDescription}>{level.description}</div>
    </Link>
  );
}

export default function ProgressionTracker({ currentLevel }) {
  return (
    <div className={styles.container}>
      <div className={styles.progressionContainer}>
        <div className={styles.levelsGrid}>
          {levels.map((level) => (
            <LevelCard
              key={level.number}
              level={level}
              isActive={currentLevel ? level.number <= currentLevel : true}
              isCurrent={level.number === currentLevel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
