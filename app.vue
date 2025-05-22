<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

// Define base SEO values needed for meta tags
const siteUrl = 'https://andreevka.netlify.app'; // Your site's canonical URL
const siteTitle = 'Отдых в Андреевке - Севастополь, Крым | Жильё у моря'; // SEO-optimized title
const siteDescription = 'Откройте для себя Андреевку: уютное жильё, прекрасные пляжи и развлечения у моря в Севастополе (Крым). Бронируйте отдых!'; // SEO-optimized description
const siteImage = `${siteUrl}/7.jpg`; // Image for social previews (must be in /public folder)
const siteImageAlt = 'Пляж и море в Андреевке, Крым'; // Alt text for the image

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Андреевка - Севастополь, Крым',
  'url': 'https://andreevka.netlify.app/',
  // Если у вас есть логотип, добавьте его URL сюда:
  // 'logo': 'https://andreevka.netlify.app/path/to/logo.png'
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'url': 'https://andreevka.netlify.app/',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://andreevka.netlify.app/?s={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

useHead({
  // Set language attribute for the <html> tag
  htmlAttrs: {
    lang: 'ru'
  },
  // Use the defined title
  title: siteTitle,
  meta: [
    // Basic meta tags (charset and viewport are often handled by Nuxt automatically, but explicit is fine)
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // SEO Description (use hid to ensure it overrides potentially conflicting tags)
    { hid: 'description', name: 'description', content: siteDescription },

    // Open Graph / Facebook / VK / Telegram etc.
    { hid: 'og:title', property: 'og:title', content: siteTitle },
    { hid: 'og:description', property: 'og:description', content: siteDescription },
    { hid: 'og:image', property: 'og:image', content: siteImage },
    { hid: 'og:image:alt', property: 'og:image:alt', content: siteImageAlt }, // Add alt text for OG image
    { hid: 'og:url', property: 'og:url', content: siteUrl },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    // Optional: If you know the image dimensions
    // { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    // { hid: 'og:image:height', property: 'og:image:height', content: '630' },

    // Twitter Card
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: siteTitle },
    { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: siteImage },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: siteImageAlt } // Add alt text for Twitter image
  ],
  link: [
    // Favicon
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    // Canonical URL
    { hid: 'canonical', rel: 'canonical', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema)
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(websiteSchema)
    }
  ]
});
</script>