// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    // Disable devtools to prevent cross-origin frame access errors
    enabled: false,
    auth: {
      // IMPORTANT: Set NUXT_DEVTOOLS_TOKEN in your .env file for security
      // See https://devtools.nuxtjs.org/guide/authentication
      token: process.env.NUXT_DEVTOOLS_TOKEN
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/supabase',
  ],
  alias: {
    '@assets': './assets',
    '@': '.'
  },
  plugins: [
    '~/plugins/yandex-metrika.client.js',
    '~/plugins/supabase.client.js',
  ],
  app: {
    head: {
      title: 'Андреевка - Севастополь, Крым',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Село Андреевка - живописное место в Севастополе, Крым. Откройте для себя прекрасные пляжи, чистое море и удивительную природу.' },
        { name: 'google-site-verification', content: 'UNnBqj7Z18qKXElArgSL8skTKXxEX5dnfrEXDZsjNns' },
        { name: 'yandex-verification', content:'b8cf9f5436bab5f5' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    // Приватные переменные
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,

    public: {
      // Публичные переменные
      adminEmail: process.env.ADMIN_EMAIL,
      adminPassword: process.env.ADMIN_PASSWORD,
    },
  },
  // Add sitemap configuration
  sitemap: {
    hostname: 'https://andreevka.netlify.app',
    gzip: true,
  }
})