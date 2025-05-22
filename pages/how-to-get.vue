<template>
  <div>
    <Header />

    <div v-if="loading" class="flex justify-center items-center h-screen">
      <p>Загрузка...</p>
    </div>

    <div v-else>
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
        <img 
          :src="pageContent?.background_image_url || 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg'"

          :alt="pageContent?.page_title || 'Как добраться в Андреевку'"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          {{ pageContent?.page_title || 'Как добраться в Андреевку' }}
          alt="Как добраться в Андреевку"
          class="w-full h-full object-cover"
        </h1>
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Как добраться в Андреевку
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
          {{ pageContent?.page_subtitle || 'Все способы добраться до нашего живописного уголка Крыма' }}
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div v-for="(section, index) in sections" :key="section.id"
               class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
               :class="{'md:grid-cols-2-reverse': index % 2 !== 0 }">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                :src="section.image_url"
                :alt="section.title"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center" :class="{'order-2 md:order-1': index % 2 !== 0, 'order-1 md:order-2': index % 2 === 0 }">
 <h2 class="text-2xl font-bold text-primary-700 mb-4">{{ section.title }}</h2>
              <p class="text-secondary-700">
 {{ section.description }}
 </p>
 </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSupabaseClient } from '#imports';

const supabase = useSupabaseClient();
const pageContent = ref(null);
const sections = ref([]);
const loading = ref(true);

onMounted(async () => {
  const { data: contentData, error: contentError } = await supabase.from('how_to_get_page_content').select('*').single();
  if (contentError) console.error('Error loading how_to_get_page_content:', contentError);
  else pageContent.value = contentData;

  const { data: sectionsData, error: sectionsError } = await supabase.from('how_to_get_sections').select('*').order('order_number');
  if (sectionsError) console.error('Error loading how_to_get_sections:', sectionsError);
  else sections.value = sectionsData;

  loading.value = false;
});
</script>