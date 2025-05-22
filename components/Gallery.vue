<template>
  <section id="gallery" class="section bg-primary-50">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">
 <span v-if="galleryContent">{{ galleryContent.main_title }}</span>
        </h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700">
 <span v-if="galleryContent">{{ galleryContent.description }}</span>
        </p>
      </div>

      <div class="relative">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination, SwiperNavigation]"
          :slides-per-view="slidesPerView"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :effect="'coverflow'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }"
          class="mySwiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="overflow-hidden rounded-lg shadow-lg">
              <img :src="image.url" :alt="image.alt" class="w-full h-72 object-cover transition-transform hover:scale-105 duration-500" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted, onUnmounted } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const SwiperAutoplay = Autoplay;
const SwiperEffectCoverflow = EffectCoverflow;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;

const supabase = useSupabaseClient();

const galleryContent = ref(null);
const images = ref([]);
const slidesPerView = ref(1);

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);

  // Fetch gallery section content
  supabase
    .from('gallery_items_section_content')
    .select('*')
    .single()
    .then(({ data, error }) => {
      if (error) console.error('Error fetching gallery section content:', error);
      else galleryContent.value = data;
    });

  // Fetch gallery images
  supabase
    .from('gallery_items')
    .select('*')
    .order('order_number', { ascending: true })
    .then(({ data, error }) => {
      if (error) console.error('Error fetching gallery items:', error);
      else images.value = data;
    });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

function updateSlidesPerView() {
  if (window.innerWidth < 640) {
    slidesPerView.value = 1;
  } else if (window.innerWidth < 1024) {
    slidesPerView.value = 2;
  } else {
    slidesPerView.value = 3;
  }
}

</script>

<style scoped>
.swiper {
  padding: 30px 0;
}

:deep(.swiper-pagination-bullet) {
  background-color: #0ea5e9;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #0ea5e9;
}
</style>