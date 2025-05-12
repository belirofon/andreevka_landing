// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@vueuse/nuxt',
  ],
  alias: {
    '@assets': './assets',
  },
  app: {
    head: {
      title: 'Андреевка - Севастополь, Крым',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Село Андреевка - живописное место в Севастополе, Крым. Откройте для себя прекрасные пляжи, чистое море и удивительную природу.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})