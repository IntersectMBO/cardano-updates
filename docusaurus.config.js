// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');
const editUrl = 'https://github.com/intersectmbo/cardano-updates/tree/main/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cardano Development Updates',
  tagline: 'Regular updates from Cardano Development Teams',
  url: 'https://updates.cardano.intersectmbo.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'intersectmbo', // Usually your GitHub org/user name.
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
        editUrl,
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
    [
      'content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: 'reports',
        routeBasePath: 'reports',
        path: 'reports',
        authorsMapPath: 'authors.yml',
        editUrl,
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'updates.cardano.intersectmbo.org'
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
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
          onUntruncatedBlogPosts: 'ignore',
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
          { to: '/reports', label: 'Reports', position: 'right' },
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
              { to: 'tags/goedel', label: 'Goedel' },
              { to: 'tags/mithril', label: 'Mithril' },
              { to: 'tags/performance-tracing', label: 'Performance & Tracing' },
              { to: 'reports/tags/benchmarking-reports', label: 'Benchmarking Reports' },
              { to: 'tags/incident', label: 'Incident Reports' },
              { to: 'tags/security', label: 'Security Reports' },

            ],
          },
          { to: 'archive', label: 'Archive', position: 'right' },
          {
            href: 'https://updates.cardano.intersectmbo.org',
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
        copyright: `Copyright © ${new Date().getFullYear()} Intersect, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['haskell'],
      },
    }),
  markdown: {
    mermaid: true,
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
