<template>
  <section id="attractions" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">
          Достопримечательности Андреевки и Севастополя: что посмотреть
        </h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700 reveal">
          Откройте для себя уникальные места в Андреевке и окрестностях Севастополя
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(attraction, index) in attractions" :key="index" 
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 reveal"
          :style="`transition-delay: ${index * 0.1}s`">
          <img :src="attraction.imageUrl" :alt="attraction.title" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary-700 mb-2">{{ attraction.title }}</h3>
            <p class="text-secondary-700 mb-4">{{ attraction.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-secondary-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1 text-sea-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ attraction.distance }}
              </span>
              <span class="text-sm text-sea-700">
                {{ attraction.type }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useHead } from '#app'; // Импортируем useHead

import fiolent from '@assets/images/fiolent.jpg';
import hersones from '@assets/images/hersones.jpg';
import balaklava from '@assets/images/balaklava.jpg';
import dolina from '@assets/images/bajdarskaja-dolina.jpg';
import original from '@assets/images/original.jpg';
const attractions = [
  {
    title: 'Мыс Фиолент',
    description: 'Живописный скалистый мыс с потрясающими видами на море, пляжами в уединенных бухтах и уникальными скальными формациями.',
    imageUrl: fiolent,
    distance: '15 км от Андреевки',
    type: 'Природный объект'
  },
  {
    title: 'Херсонес Таврический',
    description: 'Древнегреческий город-государство, основанный в V веке до н.э. Объект всемирного наследия ЮНЕСКО.',
    imageUrl: hersones,
    distance: '25 км от Андреевки',
    type: 'Исторический объект'
  },
  {
    title: 'Бухта Казачья',
    description: 'Живописная бухта с кристально чистой водой, где можно увидеть дельфинов. Идеальное место для пляжного отдыха.',
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
    distance: '10 км от Андреевки',
    type: 'Пляж'
  },
  {
    title: 'Балаклава',
    description: 'Уютный городок с живописной бухтой, набережной, руинами крепости Чембало и музеем подводных лодок.',
    imageUrl: balaklava,
    distance: '22 км от Андреевки',
    type: 'Город'
  },
  {
    title: 'Байдарская долина',
    description: 'Просторная долина, окруженная горами. Прекрасное место для пеших прогулок, конных экскурсий и пикников.',
    imageUrl: dolina,
    distance: '30 км от Андреевки',
    type: 'Природный объект'
  },
  {
    title: 'Винодельня "Золотая Балка"',
    description: 'Историческая винодельня с дегустационными залами, где можно попробовать знаменитые крымские вина.',
    imageUrl: original,
    distance: '18 км от Андреевки',
    type: 'Культурный объект'
  }
];

// Генерируем JSON-LD для каждой достопримечательности
const attractionsSchema = computed(() => {
  return attractions.map(attraction => ({
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    'name': attraction.title,
    'description': attraction.description,
    'image': attraction.imageUrl, // Убедитесь, что imageUrl - это полный URL или путь от корня сайта
    // Можно добавить 'geo' (координаты), 'address', 'publicAccess', etc.
  }));
});

// Добавляем скрипты в head
useHead({
  script: attractionsSchema.value.map(schema => ({
    type: 'application/ld+json',
    children: JSON.stringify(schema)
  }))
});

</script>