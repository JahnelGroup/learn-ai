import React from 'react';
import Link from '@docusaurus/Link';
import styles from './homeStyles.module.css';

const elements = {
  // Row 1 - Primitives
  row1: [
    { symbol: 'Pr', name: 'Prompts', family: 'reactive', path: '/docs/periodic-table/reactive#pr--prompts' },
    { symbol: 'Em', name: 'Embeddings', family: 'retrieval', path: '/docs/periodic-table/retrieval#em--embeddings' },
    { symbol: 'Cw', name: 'Context', family: 'orchestration', path: '/docs/periodic-table/orchestration#cw--context-windows' },
    { symbol: 'Ev', name: 'Evaluation', family: 'validation', path: '/docs/periodic-table/validation#ev--evaluation' },
    { symbol: 'Lg', name: 'LLM', family: 'models', path: '/docs/periodic-table/models#lg--llm' },
  ],
  // Row 2 - Compositions
  row2: [
    { symbol: 'Fc', name: 'Func Call', family: 'reactive', path: '/docs/periodic-table/reactive#fc--function-calling' },
    { symbol: 'Vx', name: 'Vector DB', family: 'retrieval', path: '/docs/periodic-table/retrieval#vx--vector-db' },
    { symbol: 'Rg', name: 'RAG', family: 'orchestration', path: '/docs/periodic-table/orchestration#rg--rag' },
    { symbol: 'Gr', name: 'Guardrails', family: 'validation', path: '/docs/periodic-table/validation#gr--guardrails' },
    { symbol: 'Mm', name: 'Multimodal', family: 'models', path: '/docs/periodic-table/models#mm--multi-modal' },
  ],
  // Row 3 - Deployment
  row3: [
    { symbol: 'Ag', name: 'Agents', family: 'reactive', path: '/docs/periodic-table/reactive#ag--agents' },
    { symbol: 'Ft', name: 'Fine-tune', family: 'retrieval', path: '/docs/periodic-table/retrieval#ft--fine-tuning' },
    { symbol: 'Fw', name: 'Frameworks', family: 'orchestration', path: '/docs/periodic-table/orchestration#fw--frameworks' },
    { symbol: 'Rt', name: 'Red Team', family: 'validation', path: '/docs/periodic-table/validation#rt--red-teaming' },
    { symbol: 'Sm', name: 'Small LLM', family: 'models', path: '/docs/periodic-table/models#sm--small-models' },
  ],
  // Row 4 - Emerging
  row4: [
    { symbol: 'Ma', name: 'Multi-agent', family: 'reactive', path: '/docs/periodic-table/reactive#ma--multi-agent' },
    { symbol: 'Sy', name: 'Synthetic', family: 'retrieval', path: '/docs/periodic-table/retrieval#sy--synthetic-data' },
    { symbol: 'Mc', name: 'MCP', family: 'orchestration', path: '/docs/periodic-table/orchestration#mc--mcp' },
    { symbol: 'In', name: 'Interpret.', family: 'validation', path: '/docs/periodic-table/validation#in--interpretability' },
    { symbol: 'Th', name: 'Thinking', family: 'models', path: '/docs/periodic-table/models#th--thinking-models' },
  ],
};

const families = [
  { id: 'reactive', name: 'Reactive' },
  { id: 'retrieval', name: 'Retrieval' },
  { id: 'orchestration', name: 'Orchestr.' },
  { id: 'validation', name: 'Validation' },
  { id: 'models', name: 'Models' },
];

const rows = [
  { id: 'row1', name: 'Primitives' },
  { id: 'row2', name: 'Compositions' },
  { id: 'row3', name: 'Deployment' },
  { id: 'row4', name: 'Emerging' },
];

function Element({ symbol, name, family, path }) {
  return (
    <Link
      to={path}
      className={`${styles.element} ${styles[`element${family.charAt(0).toUpperCase() + family.slice(1)}`]}`}
      title={name}
    >
      <span className={styles.symbol}>{symbol}</span>
      <span className={styles.name}>{name}</span>
    </Link>
  );
}

function FamilyHeader({ family }) {
  return (
    <div className={`${styles.familyHeader} ${styles[`header${family.id.charAt(0).toUpperCase() + family.id.slice(1)}`]}`}>
      <span className={styles.familyName}>{family.name}</span>
    </div>
  );
}

export default function HomePeriodicTable() {
  return (
    <div className={styles.tableContainer}>
      {/* Family Headers */}
      <div className={styles.headerRow}>
        {families.map((family) => (
          <FamilyHeader key={family.id} family={family} />
        ))}
      </div>

      {/* Element Rows */}
      {rows.map((row) => (
        <div key={row.id} className={styles.elementRow}>
          {elements[row.id].map((element) => (
            <Element
              key={element.symbol}
              {...element}
            />
          ))}
        </div>
      ))}

      {/* View Full Table Link */}
      <div className={styles.viewFullLink}>
        <Link to="/docs/periodic-table">View Full Periodic Table →</Link>
      </div>
    </div>
  );
}
