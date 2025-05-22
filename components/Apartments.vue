<script setup>
import { useHead, useNuxtApp } from '#app';
import { ref, onMounted } from 'vue';

const supabase = useSupabaseClient();

const sectionContent = ref(null);
const apartmentTypes = ref([]);
const lodgingData = ref(null);
const loading = ref(true);

// Пример данных - замените на свои!
const lodgingSchema = ref(null);

onMounted(async () => {
  try {
    const { data: contentData, error: contentError } = await supabase
      .from('apartments_section_content')
      .select('*')
      .single();
    if (contentError) throw contentError;
    sectionContent.value = contentData;

    const { data: typesData, error: typesError } = await supabase
      .from('apartment_types')
      .select('*, apartment_images(id, image_url, order_number), apartment_features(id, text, order_number)')
      .order('order_number', { ascending: true })
      .order('order_number', { foreignTable: 'apartment_images', ascending: true })
      .order('order_number', { foreignTable: 'apartment_features', ascending: true });
    if (typesError) throw typesError;
    apartmentTypes.value = typesData;

    const { data: lodgingDataSupabase, error: lodgingError } = await supabase
      .from('lodging_data')
      .select('*')
      .single();
    if (lodgingError) throw lodgingError;
    lodgingData.value = lodgingDataSupabase;

    lodgingSchema.value = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  'name': lodgingData.value.name,
  'description': lodgingData.value.description,
  'telephone': lodgingData.value.telephone,
  'address': {
    '@type': 'PostalAddress',
    ...lodgingData.address
  },
  // 'photo': [
  //   { '@type': 'ImageObject', 'url': 'https://andreevka.netlify.app/assets/images/apparts/app_1.jpg' },
  //   { '@type': 'ImageObject', 'url': 'https://andreevka.netlify.app/assets/images/apparts/home_1.jpg' }
  // ]
};

  } catch (error) {
    console.error('Error fetching apartments data:', error.message);
  } finally {
    loading.value = false;
  }
});

useHead({
  script: lodgingSchema.value ? [{ type: 'application/ld+json', children: JSON.stringify(lodgingSchema.value) }] : []
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(lodgingSchema)
    }
  ]
});

</script>

<template>
  <section id="apartments" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-800 reveal">
          {{ sectionContent?.main_title || 'Загрузка...' }}
      </h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700 reveal">
          {{ sectionContent?.description || 'Загрузка...' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div v-for="(type, typeIndex) in apartmentTypes" :key="type.id" class="reveal" :style="`transition-delay: ${typeIndex * 0.2}s;`">
            <h3 class="text-xl font-semibold mb-2 text-primary-700">{{ type.title || 'Загрузка...' }}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="image in type.apartment_images" :key="image.id" class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                :src="image.image_url || '/placeholder.jpg'" 
                :alt="type.name + ' image'" 
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              >
            </div>
            <div v-if="type.apartment_images.length === 0 && !loading" class="col-span-full text-center text-secondary-600">
                Нет изображений
            </div>
             <div v-if="loading" class="col-span-full text-center text-secondary-600">
                Загрузка изображений...
            </div>
          </div>
          <div class="mt-6 space-y-4 text-secondary-700">
            <p v-for="feature in type.apartment_features" :key="feature.id">✓ {{ feature.text || 'Загрузка...' }}</p>
             <p v-if="type.apartment_features.length === 0 && !loading">Нет информации о преимуществах</p>
              <p v-if="loading">Загрузка преимуществ...</p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a :href="sectionContent?.button_link || '#contact'" class="btn btn-primary">{{ sectionContent?.button_text || 'Загрузка...' }}</a>
      </div>
    </div>
  </section>
</template>