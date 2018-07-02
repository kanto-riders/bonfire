/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: '9renpoto',
    image:
      'https://pbs.twimg.com/profile_images/583632411977613312/f9u76num_400x400.png',
    infoLink: 'https://twitter.com/9renpoto',
    pinned: true
  },
  {
    caption: 'key3',
    image: 'https://pbs.twimg.com/profile_images/2034565824/key3_400x400.jpg',
    infoLink: 'https://twitter.com/key3',
    pinned: true
  },
  {
    caption: 'shinorsoduro',
    image: 'https://pbs.twimg.com/profile_images/1009231822117482496/deG-bleC_400x400.jpg',
    infoLink: 'https://twitter.com/shinorsoduro',
    pinned: true
  }
]

const siteConfig = {
  title: 'Happy bonfire!',
  tagline: '焚き火を楽しむ',
  url: 'https://kanto-riders.github.io/bonfire/',
  baseUrl: '/bonfire/',
  projectName: 'bonfire',
  headerLinks: [
    { doc: 'campsite', label: 'Campsite' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
    { href: 'https://github.com/kanto-riders/bonfire/', label: 'GitHub' },
    { search: true }
  ],
  users,
  headerIcon: 'img/icon_common.png',
  footerIcon: 'img/icon_common.png',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#272e37',
    secondaryColor: '#232930'
  },
  copyright: 'Copyright © ' + new Date().getFullYear() + 'Kanto riders',
  organizationName: 'kanto-riders',
  highlight: {
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/kanto-riders/bonfire/',
  gaTrackingId: 'UA-113151047-1'
}

module.exports = siteConfig
