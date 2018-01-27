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
  headerIcon: 'img/takibi.png',
  footerIcon: 'img/takibi.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B'
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
