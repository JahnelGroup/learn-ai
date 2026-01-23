import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

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
    { symbol: 'Fc', name: 'Function Call', family: 'reactive', path: '/docs/periodic-table/reactive#fc--function-calling' },
    { symbol: 'Vx', name: 'Vector DB', family: 'retrieval', path: '/docs/periodic-table/retrieval#vx--vector-db' },
    { symbol: 'Rg', name: 'RAG', family: 'orchestration', path: '/docs/periodic-table/orchestration#rg--rag' },
    { symbol: 'Gr', name: 'Guardrails', family: 'validation', path: '/docs/periodic-table/validation#gr--guardrails' },
    { symbol: 'Mm', name: 'Multi-modal', family: 'models', path: '/docs/periodic-table/models#mm--multi-modal' },
  ],
  // Row 3 - Deployment
  row3: [
    { symbol: 'Ag', name: 'Agents', family: 'reactive', path: '/docs/periodic-table/reactive#ag--agents' },
    { symbol: 'Ft', name: 'Fine-tuning', family: 'retrieval', path: '/docs/periodic-table/retrieval#ft--fine-tuning' },
    { symbol: 'Fw', name: 'Frameworks', family: 'orchestration', path: '/docs/periodic-table/orchestration#fw--frameworks' },
    { symbol: 'Rt', name: 'Red Team', family: 'validation', path: '/docs/periodic-table/validation#rt--red-teaming' },
    { symbol: 'Sm', name: 'Small Models', family: 'models', path: '/docs/periodic-table/models#sm--small-models' },
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
