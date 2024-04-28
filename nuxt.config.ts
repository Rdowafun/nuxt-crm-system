export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/nuxt-crm-system/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets' // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  routeRules: {
    '/web/v1/**': {
        proxy: { to: "https://rdowafun.github.io/", },
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'shadcn-nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300]
          }
        }
      }
    ],
    'nuxt-helm',
    'nuxt-icon',
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true
      }
    ]
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**']
  }
})
