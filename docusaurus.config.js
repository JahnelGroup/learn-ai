// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn AI',
  tagline: 'Your Guide to Mastering AI — Jahnel Group',
  favicon: 'img/favicon.ico',

  url: 'https://learnai.jahnelgroup.com',
  baseUrl: '/',

  organizationName: 'jahnelgroup',
  projectName: 'learn-ai',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/jahnelgroup/learn-ai/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-8CKN7RXXQ9',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/getting-started', to: '/docs/building-ai-systems/' },
          { from: '/docs/tiers/overview', to: '/docs/building-ai-systems/tiers/overview' },
          { from: '/docs/tiers/foundation', to: '/docs/building-ai-systems/tiers/foundation' },
          { from: '/docs/tiers/practitioner', to: '/docs/building-ai-systems/tiers/practitioner' },
          { from: '/docs/tiers/expert', to: '/docs/building-ai-systems/tiers/expert' },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/building-ai-systems/periodic-table')) {
            return [
              existingPath.replace('/building-ai-systems/periodic-table', '/periodic-table'),
            ];
          }
          if (existingPath.includes('/building-ai-systems/portfolio-templates')) {
            return [
              existingPath.replace('/building-ai-systems/portfolio-templates', '/portfolio-templates'),
            ];
          }
          return undefined;
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'Learn AI',
        logo: {
          alt: 'Jahnel Group Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Intro',
          },
          {
            to: '/docs/building-ai-systems/',
            label: 'Building AI Systems',
            position: 'left',
          },
          {
            to: '/docs/ai-productivity/',
            label: 'AI Productivity',
            position: 'left',
          },
          {
            href: 'https://github.com/jahnelgroup/learn-ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Building AI Systems',
                to: '/docs/building-ai-systems/',
              },
              {
                label: 'The Periodic Table',
                to: '/docs/building-ai-systems/periodic-table/',
              },
              {
                label: 'Learning Tiers',
                to: '/docs/building-ai-systems/tiers/overview',
              },
              {
                label: 'AI Productivity',
                to: '/docs/ai-productivity/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Jahnel Group',
                href: 'https://jahnelgroup.com',
              },
            ],
          },
          {
            title: 'Credit',
            items: [
              {
                label: 'IBM AI Periodic Table',
                href: 'https://www.youtube.com/watch?v=ESBMgZHzfG0',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jahnel Group. AI Periodic Table concept by IBM Technology.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
