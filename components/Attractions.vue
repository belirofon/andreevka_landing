<template>
  <section id="attractions" class="section bg-white">
    <div class="container">
 <div v-if="loading" class="text-center mb-16">
 <div class="animate-pulse">
 <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">Загрузка...</h2>
 <div class="w-20 h-1 bg-sea-500 mx-auto mb-8"></div>
 </div>
 </div>
 <div v-else class="text-center mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">
 {{ sectionContent.main_title }}
        </h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700 reveal">
 {{ sectionContent.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(attraction, index) in attractions" :key="index" 
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 reveal"
          :style="`transition-delay: ${index * 0.1}s`">
 <img :src="attraction.image_url" :alt="attraction.title" class="w-full h-56 object-cover">
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
import { ref, onMounted, computed } from 'vue';
import { useHead, useSupabaseClient } from '#app';

const supabase = useSupabaseClient();

const sectionContent = ref({
  main_title: 'Загрузка...',
  description: ''
});
const attractions = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // Fetch section content
    const { data: sectionData, error: sectionError } = await supabase
      .from('attractions_section_content')
      .select('*')
      .single();

    if (sectionError) throw sectionError;
    if (sectionData) sectionContent.value = sectionData;

    // Fetch attractions
    const { data: attractionsData, error: attractionsError } = await supabase
      .from('attractions')
      .select('*')
      .order('order_number', { ascending: true });

    if (attractionsError) throw attractionsError;
    attractions.value = attractionsData;

  } catch (err) {
    error.value = err;
    console.error('Error fetching attractions data:', err);
  } finally {
    loading.value = false;
  }
});

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