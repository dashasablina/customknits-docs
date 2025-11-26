// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CustomKnits Docs',
  tagline: 'Документация для редактора вязания CustomKnits',
  favicon: 'img/logo2.png',

  url: 'https://docs.customknits.ru',
  baseUrl: '/',

  organizationName: 'dashasablina',
  projectName: 'customknits-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // 👇 Добавляем английский язык, но сайт продолжает работать только на русском
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'], // en появится позже, когда создашь /i18n/en
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'CustomKnits Docs',
      logo: {
        alt: 'CustomKnits Logo',
        src: 'img/logo2.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Документация',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Перейти в редактор',
          items: [
            {
              label: 'CustomKnits',
              href: 'https://app.customknits.ru',
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
