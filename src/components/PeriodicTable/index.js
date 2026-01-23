import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const elements = {
  // Row 1 - Primitives
  row1: [
    { symbol: 'Pr', name: 'Prompts', family: 'reactive', path: '/docs/periodic-table/reactive/prompts' },
    { symbol: 'Em', name: 'Embeddings', family: 'retrieval', path: '/docs/periodic-table/retrieval/embeddings' },
    { symbol: 'Cw', name: 'Context', family: 'orchestration', path: '/docs/periodic-table/orchestration/context' },
    { symbol: 'Ev', name: 'Evaluation', family: 'validation', path: '/docs/periodic-table/validation/evaluation' },
    { symbol: 'Lg', name: 'LLM', family: 'models', path: '/docs/periodic-table/models/llm' },
  ],
  // Row 2 - Compositions
  row2: [
    { symbol: 'Fc', name: 'Function Call', family: 'reactive', path: '/docs/periodic-table/reactive/function-calling' },
    { symbol: 'Vx', name: 'Vector DB', family: 'retrieval', path: '/docs/periodic-table/retrieval/vector-db' },
    { symbol: 'Rg', name: 'RAG', family: 'orchestration', path: '/docs/periodic-table/orchestration/rag' },
    { symbol: 'Gr', name: 'Guardrails', family: 'validation', path: '/docs/periodic-table/validation/guardrails' },
    { symbol: 'Mm', name: 'Multi-modal', family: 'models', path: '/docs/periodic-table/models/multi-modal' },
  ],
  // Row 3 - Deployment
  row3: [
    { symbol: 'Ag', name: 'Agents', family: 'reactive', path: '/docs/periodic-table/reactive/agents' },
    { symbol: 'Ft', name: 'Fine-tuning', family: 'retrieval', path: '/docs/periodic-table/retrieval/fine-tuning' },
    { symbol: 'Fw', name: 'Frameworks', family: 'orchestration', path: '/docs/periodic-table/orchestration/frameworks' },
    { symbol: 'Rt', name: 'Red Team', family: 'validation', path: '/docs/periodic-table/validation/red-team' },
    { symbol: 'Sm', name: 'Small Models', family: 'models', path: '/docs/periodic-table/models/small-models' },
  ],
  // Row 4 - Emerging
  row4: [
    { symbol: 'Ma', name: 'Multi-agent', family: 'reactive', path: '/docs/periodic-table/reactive/multi-agent' },
    { symbol: 'Sy', name: 'Synthetic', family: 'retrieval', path: '/docs/periodic-table/retrieval/synthetic' },
    { symbol: 'Mc', name: 'MCP', family: 'orchestration', path: '/docs/periodic-table/orchestration/mcp' },
    { symbol: 'In', name: 'Interpret.', family: 'validation', path: '/docs/periodic-table/validation/interpretability' },
    { symbol: 'Th', name: 'Thinking', family: 'models', path: '/docs/periodic-table/models/thinking' },
  ],
};

const families = [
  { id: 'reactive', name: 'Reactive', shortName: 'G1' },
  { id: 'retrieval', name: 'Retrieval', shortName: 'G2' },
  { id: 'orchestration', name: 'Orchestration', shortName: 'G3' },
  { id: 'validation', name: 'Validation', shortName: 'G4' },
  { id: 'models', name: 'Models', shortName: 'G5' },
];

const rows = [
  { id: 'row1', name: 'Primitives', number: 1 },
  { id: 'row2', name: 'Compositions', number: 2 },
  { id: 'row3', name: 'Deployment', number: 3 },
  { id: 'row4', name: 'Emerging', number: 4 },
];

function Element({ symbol, name, family, path, rowName }) {
  return (
    <Link
      to={path}
      className={`${styles.element} ${styles[`element${family.charAt(0).toUpperCase() + family.slice(1)}`]}`}
      title={`${name} (${rowName})`}
    >
      <span className={styles.symbol}>{symbol}</span>
      <span className={styles.name}>{name}</span>
    </Link>
  );
}

function FamilyHeader({ family }) {
  return (
    <div className={`${styles.familyHeader} ${styles[`header${family.id.charAt(0).toUpperCase() + family.id.slice(1)}`]}`}>
      <span className={styles.familyShort}>{family.shortName}</span>
      <span className={styles.familyName}>{family.name}</span>
    </div>
  );
}

function RowLabel({ row }) {
  return (
    <div className={styles.rowLabel}>
      <span className={styles.rowNumber}>Row {row.number}</span>
      <span className={styles.rowName}>{row.name}</span>
    </div>
  );
}

export default function PeriodicTable() {
  return (
    <div className={styles.tableContainer}>
      {/* Family Headers */}
      <div className={styles.headerRow}>
        <div className={styles.cornerCell}></div>
        {families.map((family) => (
          <FamilyHeader key={family.id} family={family} />
        ))}
      </div>

      {/* Element Rows */}
      {rows.map((row) => (
        <div key={row.id} className={styles.elementRow}>
          <RowLabel row={row} />
          {elements[row.id].map((element) => (
            <Element
              key={element.symbol}
              {...element}
              rowName={row.name}
            />
          ))}
        </div>
      ))}

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendTitle}>Families:</div>
        <div className={styles.legendItems}>
          {families.map((family) => (
            <div key={family.id} className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles[`dot${family.id.charAt(0).toUpperCase() + family.id.slice(1)}`]}`}></span>
              <span>{family.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
