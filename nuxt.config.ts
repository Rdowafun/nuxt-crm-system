export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    payloadExtraction: false
  },
  app: {
    baseURL: '/nuxt-crm-system/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/nuxt-crm-system/favicon.ico'
        }
      ]
    }
  },
  routeRules: {
    '/v1/account': {
      proxy: { to: 'https://cloud.appwrite.io/v1/account' }
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
