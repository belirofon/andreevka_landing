.vscode<template>
  <section id="about" class="section bg-white">
    <div class="container">
 <div v-if="loading" class="text-center text-secondary-700">Загрузка...</div>
 <div v-else>
 <div class="text-center mb-16">
 <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">{{ aboutContent?.main_title }}</h2>
 <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
 <div class="reveal">
 <h3 class="heading-md text-primary-600 mb-4">{{ aboutContent?.subtitle }}</h3>
 <p class="text-lg mb-6 text-secondary-700 leading-relaxed">
 {{ aboutContent?.paragraph1 }}
 </p>
 <p class="text-lg mb-6 text-secondary-700 leading-relaxed">
 {{ aboutContent?.paragraph2 }}
 </p>
 <div class="flex flex-wrap gap-4 mt-8">
 <div v-for="(feature, index) in features" :key="feature.id" class="flex items-center reveal" :style="`transition-delay: ${index * 0.1}s;`">
 <div class="bg-primary-100 p-3 rounded-full mr-3">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
 </svg> 
 </div>
 <span class="text-secondary-800">{{ feature.text }}</span>
 </div>
          </div>
        </div>
 <div class="reveal" style="transition-delay: 0.2s;">
 <img :src="aboutContent?.image_url" :alt="aboutContent?.subtitle" class="rounded-lg shadow-xl w-full h-auto object-cover">
        </div> 
      </div>

 <div class="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 <div v-for="(item, index) in additionalFeatures" :key="item.id"
 class="bg-white p-6 rounded-lg shadow-md text-center reveal flex flex-col items-center"
 :style="`transition-delay: ${index * 0.1}s;`">
 <div class="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <!-- TODO: Implement dynamic icons based on item.icon_name -->
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-primary-600">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 2 0 011 1v4a1 1 0 001 1m-6 0h6" /> 
 </svg>
            </div>
 <h3 class="text-xl font-semibold mb-2 text-primary-700 flex-grow">{{ item.title }}</h3>
 <p class="text-secondary-600">{{ item.description }}</p>
 </div>
      </div>
 </div>
    </div> 
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSupabaseClient } from '#imports';

const supabase = useSupabaseClient();

const aboutContent = ref(null);
const features = ref([]);
const additionalFeatures = ref([]);
const loading = ref(true);

async function fetchAboutData() {
  loading.value = true;
  try {
    // Fetch main content
    const { data: contentData, error: contentError } = await supabase
      .from('about_content')
      .select('*')
      .single();

    if (contentError) {
      console.error('Error fetching about content:', contentError);
    } else {
      aboutContent.value = contentData;
    }

    // Fetch features
    const { data: featuresData, error: featuresError } = await supabase
      .from('about_features')
      .select('*')
      .order('order_number', { ascending: true });

    if (featuresError) {
      console.error('Error fetching about features:', featuresError);
    } else {
      features.value = featuresData;
    }

    // Fetch additional features
    const { data: additionalFeaturesData, error: additionalFeaturesError } = await supabase
      .from('about_additional_features')
      .select('*')
      .order('order_number', { ascending: true });

    if (additionalFeaturesError) {
      console.error('Error fetching about additional features:', additionalFeaturesError);
    } else {
      additionalFeatures.value = additionalFeaturesData;
    }

  } catch (error) {
    console.error('An unexpected error occurred:', error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchAboutData();
});
</script>