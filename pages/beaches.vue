<template>
  <div>
    <Header />
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
        <img 
          src="@/assets/images/main_bg.jpeg"
          alt="Пляжи Андреевки"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          {{ title }}
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Лучшие места для пляжного отдыха в Андреевке
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="prose max-w-none">
          <p v-for="paragraph in content" :key="paragraph" class="mb-4">{{ paragraph }}</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Пляжи Андреевки');
const content = ref([
  'Пляжи Андреевки славятся своим чистым песком и кристально прозрачной водой. Это идеальное место для семейного отдыха и уединенного релакса на фоне морских волн.',
  '🏖️ Центральный пляж: Просторный и благоустроенный, с шезлонгами и зонтиками.',
  '🪣 Дикие пляжи: Если хотите тишины и покоя, отправляйтесь на более уединенные места.',
  '🌊 Активный отдых: Катание на катамаранах, дайвинг и кайтсерфинг — выбирайте по душе!',
  '🌅 Закаты на побережье: Ощущение полного единения с природой.'
]);
</script>