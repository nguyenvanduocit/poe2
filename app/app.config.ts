export default defineAppConfig({
  site: {
    title: 'PoE',
    description: 'Path of Exile builds, guides, and mechanics documentation',
    tagline: 'Everything you need to dominate Wraeclast',
    author: 'POE AIO',
    themeColor: '#af6025',
    logo: '/logo.png',
    currentLeague: 'Mirage',
    currentPatch: '3.28',
    ign: 'dngdfkj',
  },
  menu: [
    { name: 'Builds', url: '/builds', weight: 1 },
    { name: 'Characters', url: '/characters', weight: 2 },
    { name: 'Mechanics', url: '/mechanics', weight: 3 },
    { name: 'Farming', url: '/farming', weight: 4 },
    { name: 'Skill Tree', url: '/skilltree', weight: 5 },
    { name: 'Donate', url: '/donate', weight: 6 },
  ],
})
