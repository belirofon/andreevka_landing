<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
 <img
        :src="heroContent.background_image_url || '@/assets/images/main_bg.jpeg'"
        :alt="heroContent.main_title || 'Hero background'"
        class="w-full h-full object-cover"
 />
      <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
    </div>

    <!-- Content -->
 <div v-if="heroContent" class="container relative z-10 text-center px-4">
 <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-wider mb-4 animate-fade-in">
 {{ heroContent.main_title }}
 </h1>
 <h2 class="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-8 animate-slide-up">
 {{ heroContent.subtitle }}
 </h2>
 <p class="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style="animation-delay: 0.2s;">
 {{ heroContent.description }}
 </p>
 <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style="animation-delay: 0.4s;">
 <a :href="heroContent.button1_link" class="btn btn-primary">{{ heroContent.button1_text }}</a>
 <a :href="heroContent.button2_link" class="btn btn-secondary">{{ heroContent.button2_text }}</a>
 </div>
 </div>
 <div v-else class="container relative z-10 text-center px-4">
      <!-- Placeholder content or loading indicator -->
 <p class="text-white text-xl">Загрузка...</p>
 </div>
    


    <!-- Scroll indicator -->
    <a href="#about" class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSupabaseClient } from '#imports';

const supabase = useSupabaseClient();
const heroContent = ref(null);

onMounted(async () => {
  const { data, error } = await supabase
    .from('hero_content')
    .select('*')
    .single(); // Assuming you have only one row for hero content

  if (error) console.error('Error fetching hero content:', error);
  else heroContent.value = data;
});
</script>