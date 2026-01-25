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
        'periodic-table/reactive',
        'periodic-table/retrieval',
        'periodic-table/orchestration',
        'periodic-table/validation',
        'periodic-table/models',
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
      label: 'AI Productivity',
      collapsed: false,
      link: { type: 'doc', id: 'ai-productivity/index' },
      items: [
        {
          type: 'category',
          label: 'The 5 Levels',
          collapsed: true,
          items: [
            'ai-productivity/levels/chat',
            'ai-productivity/levels/context',
            'ai-productivity/levels/connected',
            'ai-productivity/levels/customized',
            'ai-productivity/levels/autonomous',
          ],
        },
        {
          type: 'category',
          label: 'Key Concepts',
          collapsed: true,
          items: [
            'ai-productivity/concepts/prompt-preparation',
            'ai-productivity/concepts/plan-before-execute',
            'ai-productivity/concepts/vibe-vs-spec',
            'ai-productivity/concepts/deep-research',
            'ai-productivity/concepts/context-files',
          ],
        },
        'ai-productivity/by-role',
        'ai-productivity/tools-reference',
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
