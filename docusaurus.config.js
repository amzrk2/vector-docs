const trackingID = process.env.ENV_GA;

module.exports = {
  title: 'Vector Analytics',
  tagline: 'Minimal alternative to Google Analytics',
  url: 'https://appvector.icu',
  baseUrl: '/',
  favicon: 'favicon.ico',

  organizationName: 'amzrk2',
  projectName: 'vector-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themeConfig: {
    announcementBar: {
      id: 'alert-semver',
      content:
        'This project does not use semantic versioning until v1 is officially released, so please check the changelog carefully before each upgrade to see if it is still working properly.',
      backgroundColor: '#eeeeee',
      textColor: '#000000',
    },
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: ' ',
        lightIcon: ' ',
      },
    },
    image: 'opengraph.jpg',
    navbar: {
      title: 'Vector Analytics',
      logo: {
        alt: 'Vector Logo',
        src: 'vector.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/amzrk2/vector-analytics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2020-${new Date().getFullYear()} <a href="https://amzrk2.cc" target="_blank" rel="noopener noreferrer">DSRKafuU</a>`,
    },
    gtag: {
      trackingID: trackingID || 'G-0000000000',
      anonymizeIP: false,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/amzrk2/vector-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      },
    ],
  ],
};
