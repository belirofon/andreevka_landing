<template>
  <section id="gallery" class="section bg-primary-50">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">
          Галерея: фото Андреевки и окрестностей Севастополя
        </h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700">
          Познакомьтесь с живописными пейзажами Андреевки через нашу фотогалерею
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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const SwiperAutoplay = Autoplay;
const SwiperEffectCoverflow = EffectCoverflow;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;

const slidesPerView = ref(1);

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
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

// Импортируем наши изображения
import img1 from '~/assets/images/1.jpg';
import img2 from '~/assets/images/2.jpg';
import img3 from '~/assets/images/3.jpg';
import img4 from '~/assets/images/4.jpg';
import img5 from '~/assets/images/5.jpg';
import img6 from '~/assets/images/6.jpg';
import img7 from '~/assets/images/7.jpg';
import img8 from '~/assets/images/8.jpg';
import img9 from '~/assets/images/9.jpg';
import img10 from '~/assets/images/10.jpg';
import img11 from '~/assets/images/11.jpg';
import img12 from '~/assets/images/12.jpg';
import img13 from '~/assets/images/13.jpg';
import img14 from '~/assets/images/14.jpg';

const images = [
  {
    url: img1,
    alt: 'Морской пейзаж Андреевки'
  },
  {
    url: img2,
    alt: 'Закат в Андреевке'
  },
  {
    url: img3,
    alt: 'Пляж Андреевки'
  },
  {
    url: img4,
    alt: 'Панорама побережья'
  },
  {
    url: img5,
    alt: 'Горы вокруг Андреевки'
  },
  {
    url: img6,
    alt: 'Природа Андреевки'
  },
  {
    url: img7,
    alt: 'Живописный вид на Андреевку'
  },
  {
    url: img8,
    alt: 'Черное море у берегов Андреевки'
  },
  {
    url: img9,
    alt: 'Береговая линия Андреевки'
  },
  {
    url: img10,
    alt: 'Горный пейзаж окрестностей'
  },
  {
    url: img11,
    alt: 'Морской закат в Андреевке'
  },
  {
    url: img12,
    alt: 'Утренний вид на побережье'
  },
  {
    url: img13,
    alt: 'Прибрежные скалы Андреевки'
  },
  {
    url: img14,
    alt: 'Пляж Андреевки'
  }
];
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