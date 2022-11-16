// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const editUrl = 'https://github.com/input-output-hk/cardano-updates/tree/main/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cardano Development Updates',
  tagline: 'Regular updates from Cardano Development Teams',
  url: 'https://input-output-hk.github.io/',
  baseUrl: '/cardano-updates',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'input-output-hk', // Usually your GitHub org/user name.
  projectName: 'cardano-updates', // Usually your repo name.

  plugins: [
    [
      'content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: 'quarterly',
        routeBasePath: 'quarterly',
        path: 'quarterly',
        authorsMapPath: 'authors.yml',
        editUrl
      },
    ],
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'input-output-hk.github.io/cardano-updates'
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          id: 'updates',
          routeBasePath: '/',
          showReadingTime: true,
          editUrl,
          blogTitle: 'Cardano Development Updates',
          blogDescription: 'Regular updates from Cardano Development Teams',
          postsPerPage: 5,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
          feedOptions: {
            type: 'all',
            title: 'Cardano Updates Feed',
            description: 'Regular updates from Cardano Development Teams',
          },
        },
        sitemap: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cardano Updates',
        logo: {
          alt: 'Cardano Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Home', position: 'right' },
          { to: '/quarterly', label: 'Quarterly', position: 'right' },
          {
            type: 'dropdown',
            to: 'tags',
            label: 'Topics',
            position: 'right',
            items: [
              { to: 'tags', label: 'All Topics' },
              { to: 'tags/network', label: 'Network' },
              { to: 'tags/consensus', label: 'Consensus' },
              { to: 'tags/ledger', label: 'Ledger' },
              { to: 'tags/hydra', label: 'Hydra' },
              { to: 'tags/db-sync', label: 'DB Sync' },
              { to: 'tags/cli-api', label: 'Node CLI & API' },
              { to: 'quarterly/tags/cli-api-quarterly', label: 'Node CLI & API Quarterly' },
              { to: 'tags/crypto', label: 'Crypto' },
            ],
          },
          { to: 'archive', label: 'Archive', position: 'right' },
          {
            href: 'https://github.com/input-output-hk/cardano-updates',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          // {
          //  type: 'dropdown',
          //  to: 'authors',
          //  label: 'Authors',
          //  position: 'right',
          //  items: [
          //    {to: 'authors', label: 'Authors'},
          //    {to: 'become-an-author', label: 'Become an Author'},
          //  ],
          // },
          // {to: 'contact-us', label: 'Contact Us', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [{
          title: 'Blog',
          items: [{
            label: 'Home',
            to: '/',
          },
          {
            label: 'Archive',
            to: 'archive',
          },
          {
            label: 'Tags',
            to: 'tags',
          },
          ],
        },],
        copyright: `Copyright © ${new Date().getFullYear()} Input Output Global, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
