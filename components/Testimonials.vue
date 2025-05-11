<template>
  <section id="testimonials" class="section bg-section-pattern bg-fixed bg-cover relative">
    <div class="absolute inset-0 bg-primary-900 opacity-80"></div>
    <div class="container relative z-10">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-white mb-4 reveal">Отзывы посетителей</h2>
        <div class="w-20 h-1 bg-sand-400 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-white opacity-90 reveal">
          Впечатления наших гостей о посещении Андреевки
        </p>
      </div>

      <div class="relative">
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 md:p-10 rounded-lg max-w-4xl mx-auto">
              <div class="flex flex-col items-center text-center">
                <div class="mb-6 text-yellow-400">
                  <svg v-for="i in 5" :key="i" class="w-5 h-5 inline-block" :class="{'text-primary-200': i > testimonial.rating}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <blockquote class="text-xl italic text-white mb-6">"{{ testimonial.text }}"</blockquote>
                <div class="flex items-center">
                  <div class="flex-shrink-0 mr-3">
                    <img class="h-12 w-12 rounded-full object-cover" :src="testimonial.avatar" :alt="testimonial.name">
                  </div>
                  <div class="text-left">
                    <div class="font-semibold text-white">{{ testimonial.name }}</div>
                    <div class="text-primary-200 text-sm">{{ testimonial.date }}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;

const testimonials = [
  {
    name: 'Александр К.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'Отдыхали семьей в Андреевке этим летом — просто потрясающе! Чистое море, пляжи не переполнены, хорошая инфраструктура. Идеальное место для спокойного отдыха с детьми. Обязательно приедем снова!',
    rating: 5,
    date: 'Август 2024'
  },
  {
    name: 'Елена М.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    text: 'Андреевка — настоящая жемчужина Крыма! Живописные виды, чистейшее море, приветливые местные жители. На пляже даже в высокий сезон можно найти уединенное место. Рекомендую всем, кто ценит атмосферный отдых.',
    rating: 5,
    date: 'Июль 2024'
  },
  {
    name: 'Виктор Д.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    text: 'Я побывал во многих местах Крыма, но Андреевка покорила особой атмосферой. Здесь идеальное сочетание природной красоты и комфорта. Особенно впечатлили закаты — это что-то невероятное! Обязательно вернусь.',
    rating: 4,
    date: 'Сентябрь 2023'
  },
  {
    name: 'Марина С.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'Отдыхали с подругами в Андреевке — отличный выбор для тех, кто устал от городского шума. Море кристально чистое, воздух наполнен ароматами трав. Множество красивых мест для фотосессий. Спасибо за отличный отдых!',
    rating: 5,
    date: 'Июнь 2024'
  }
];
</script>

<style scoped>
.testimonial-swiper {
  padding: 30px 0;
}

:deep(.swiper-pagination-bullet) {
  background-color: white;
}
</style>