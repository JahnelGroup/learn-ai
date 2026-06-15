/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Building AI Systems',
      collapsed: false,
      link: { type: 'doc', id: 'building-ai-systems/index' },
      items: [
        {
          type: 'category',
          label: 'The Periodic Table',
          collapsed: false,
          link: { type: 'doc', id: 'building-ai-systems/periodic-table/index' },
          items: [
            'building-ai-systems/periodic-table/reactive',
            'building-ai-systems/periodic-table/retrieval',
            'building-ai-systems/periodic-table/orchestration',
            'building-ai-systems/periodic-table/validation',
            'building-ai-systems/periodic-table/models',
          ],
        },
        {
          type: 'category',
          label: 'Learning Tiers',
          collapsed: false,
          link: { type: 'doc', id: 'building-ai-systems/tiers/overview' },
          items: [
            {
              type: 'category',
              label: 'Tier 1: Foundation',
              collapsed: true,
              link: { type: 'doc', id: 'building-ai-systems/tiers/foundation/index' },
              items: [
                'building-ai-systems/tiers/foundation/study-guide',
              ],
            },
            'building-ai-systems/tiers/practitioner',
            'building-ai-systems/tiers/expert',
          ],
        },
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
      ],
    },
    {
      type: 'category',
      label: 'The Upskilling Playbook',
      collapsed: false,
      link: { type: 'doc', id: 'upskilling-playbook/overview' },
      items: [
        'upskilling-playbook/overview',
        'upskilling-playbook/design-principles',
        'upskilling-playbook/designing-tiers-levels',
        'upskilling-playbook/building-rubrics',
        'upskilling-playbook/measuring-adoption',
        'upskilling-playbook/running-the-program',
      ],
    },
  ],
};

export default sidebars;
