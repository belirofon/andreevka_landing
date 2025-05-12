<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
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