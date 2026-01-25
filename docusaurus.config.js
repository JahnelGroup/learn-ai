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
          trackingID: 'G-XXXXXXXXXX', // Replace with your GA4 Measurement ID
          anonymizeIP: true, // Optional: anonymize IP addresses for privacy
        },
      }),
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
            label: 'Learn',
          },
          {
            to: '/docs/periodic-table/',
            label: 'Periodic Table',
            position: 'left',
          },
          {
            to: '/docs/tiers/overview',
            label: 'Learning Tiers',
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
          {
            href: 'https://www.youtube.com/watch?v=ESBMgZHzfG0',
            label: 'YouTube',
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
                label: 'Periodic Table',
                to: '/docs/periodic-table/',
              },
              {
                label: 'Learning Tiers',
                to: '/docs/tiers/overview',
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
