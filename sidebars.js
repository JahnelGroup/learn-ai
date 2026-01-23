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
