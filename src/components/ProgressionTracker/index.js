import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const levels = [
  {
    number: 1,
    name: 'Chat',
    description: 'Isolated Q&A in browser',
    path: '/docs/ai-productivity/levels/chat',
    roleExamples: {
      developers: 'Ask ChatGPT to explain error messages or generate code snippets',
      qa: 'Query AI about testing strategies or bug reproduction steps',
      designers: 'Get design feedback or explore color palette ideas',
      bas: 'Draft requirements or clarify business terminology',
      pms: 'Summarize meeting notes or draft status updates',
      leads: 'Research technical approaches or get second opinions',
    },
  },
  {
    number: 2,
    name: 'Context',
    description: 'Manually providing files, screenshots, code',
    path: '/docs/ai-productivity/levels/context',
    roleExamples: {
      developers: 'Paste code files and ask for refactoring suggestions',
      qa: 'Upload screenshots of bugs for analysis',
      designers: 'Share mockups for accessibility feedback',
      bas: 'Attach requirement docs for consistency review',
      pms: 'Share project timelines for risk analysis',
      leads: 'Upload architecture diagrams for review',
    },
  },
  {
    number: 3,
    name: 'Connected',
    description: 'AI has access to environment (IDE, codebase, MCP)',
    path: '/docs/ai-productivity/levels/connected',
    roleExamples: {
      developers: 'Cursor/Copilot with full codebase context, Claude Code for CLI tasks',
      qa: 'AI test generators connected to your test framework',
      designers: 'Figma plugins with AI-powered design suggestions',
      bas: 'AI tools integrated with Jira or Confluence',
      pms: 'AI connected to project management tools for insights',
      leads: 'MCP servers providing real-time codebase analysis',
    },
  },
  {
    number: 4,
    name: 'Customized',
    description: 'Personal commands, project prompts, hooks',
    path: '/docs/ai-productivity/levels/customized',
    roleExamples: {
      developers: 'CLAUDE.md with project conventions, custom slash commands',
      qa: 'Test generation templates tailored to your frameworks',
      designers: 'Design system rules encoded in AI prompts',
      bas: 'Domain-specific glossaries and requirement templates',
      pms: 'Custom reporting prompts and status aggregation hooks',
      leads: 'Team-wide prompt libraries and code review guidelines',
    },
  },
  {
    number: 5,
    name: 'Autonomous',
    description: 'Multi-step tasks with review/supervision',
    path: '/docs/ai-productivity/levels/autonomous',
    roleExamples: {
      developers: 'AI implements features across multiple files with your review',
      qa: 'AI writes and runs test suites, reports coverage gaps',
      designers: 'AI generates design variations based on user feedback',
      bas: 'AI drafts complete requirement sets from stakeholder notes',
      pms: 'AI manages routine project updates and stakeholder comms',
      leads: 'AI coordinates refactoring efforts across team members',
    },
  },
];

const roles = [
  { id: 'all', name: 'All Roles' },
  { id: 'developers', name: 'Developers' },
  { id: 'qa', name: 'QA Engineers' },
  { id: 'designers', name: 'Designers' },
  { id: 'bas', name: 'Business Analysts' },
  { id: 'pms', name: 'Project Managers' },
  { id: 'leads', name: 'Tech Leads' },
];

function LevelCard({ level, isActive, isCurrent, selectedRole }) {
  const cardClass = `${styles.levelCard} ${isActive ? styles.levelCardActive : ''} ${isCurrent ? styles.levelCardCurrent : ''}`;

  return (
    <Link to={level.path} className={cardClass}>
      <div className={styles.levelNumber}>{level.number}</div>
      <div className={styles.levelName}>{level.name}</div>
      <div className={styles.levelDescription}>{level.description}</div>
      {selectedRole !== 'all' && (
        <div className={styles.roleExample}>
          {level.roleExamples[selectedRole]}
        </div>
      )}
    </Link>
  );
}

export default function ProgressionTracker({ currentLevel, showRoleSelector = true }) {
  const [selectedRole, setSelectedRole] = useState('all');

  return (
    <div className={styles.container}>
      {showRoleSelector && (
        <div className={styles.roleSelector}>
          <label htmlFor="role-select" className={styles.roleSelectorLabel}>
            View examples for:
          </label>
          <select
            id="role-select"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className={styles.roleSelect}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={styles.progressionContainer}>
        <div className={styles.levelsGrid}>
          {levels.map((level) => (
            <LevelCard
              key={level.number}
              level={level}
              isActive={currentLevel ? level.number <= currentLevel : true}
              isCurrent={level.number === currentLevel}
              selectedRole={selectedRole}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
