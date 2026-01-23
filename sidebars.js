/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'The AI Periodic Table',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'periodic-table/index',
      },
      items: [
        {
          type: 'category',
          label: 'Reactive Family',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'periodic-table/reactive/index',
          },
          items: [
            'periodic-table/reactive/prompts',
            'periodic-table/reactive/function-calling',
            'periodic-table/reactive/agents',
            'periodic-table/reactive/multi-agent',
          ],
        },
        {
          type: 'category',
          label: 'Retrieval Family',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'periodic-table/retrieval/index',
          },
          items: [
            'periodic-table/retrieval/embeddings',
            'periodic-table/retrieval/vector-db',
            'periodic-table/retrieval/fine-tuning',
            'periodic-table/retrieval/synthetic',
          ],
        },
        {
          type: 'category',
          label: 'Orchestration Family',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'periodic-table/orchestration/index',
          },
          items: [
            'periodic-table/orchestration/context',
            'periodic-table/orchestration/rag',
            'periodic-table/orchestration/frameworks',
            'periodic-table/orchestration/mcp',
          ],
        },
        {
          type: 'category',
          label: 'Validation Family',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'periodic-table/validation/index',
          },
          items: [
            'periodic-table/validation/evaluation',
            'periodic-table/validation/guardrails',
            'periodic-table/validation/red-team',
            'periodic-table/validation/interpretability',
          ],
        },
        {
          type: 'category',
          label: 'Models Family',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'periodic-table/models/index',
          },
          items: [
            'periodic-table/models/llm',
            'periodic-table/models/multi-modal',
            'periodic-table/models/small-models',
            'periodic-table/models/thinking',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Learning Tiers',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'tiers/overview',
      },
      items: [
        'tiers/foundation',
        'tiers/practitioner',
        'tiers/expert',
      ],
    },
    {
      type: 'category',
      label: 'Portfolio Templates',
      collapsed: true,
      items: [
        'portfolio-templates/foundation-use-case',
        'portfolio-templates/practitioner-feature',
        'portfolio-templates/expert-architecture',
      ],
    },
  ],
};

export default sidebars;
