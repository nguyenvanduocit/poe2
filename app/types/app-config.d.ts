export {}

declare module 'nuxt/schema' {
  interface AppConfig {
    site: {
      title: string
      description: string
      tagline: string
      author: string
      themeColor: string
      logo: string
      currentLeague: string
      currentPatch: string
      ign: string
    }
    menu: Array<{ name: string; url: string; weight: number }>
  }
}
