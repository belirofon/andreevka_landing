<script setup>
import { useHead } from '#app';

// Пример данных - замените на свои!
const lodgingData = {
  name: "Гостевой Дом 'У Моря' в Андреевке", // Название вашего объекта
  description: "Комфортабельные номера и уютный дом для семейного отдыха в Андреевке, Севастополь.",
  address: {
    streetAddress: "ул. Приморская, 10", // Улица и дом
    addressLocality: "Андреевка",
    addressRegion: "Севастополь",
    postalCode: "299815",
    addressCountry: "RU"
  },
  telephone: "+7-978-123-45-67", // Ваш телефон
  // Можно добавить priceRange, starRating, petsAllowed, checkinTime, checkoutTime и т.д.
  // Также можно добавить фотографии номеров/дома в поле 'photo'
};

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  'name': lodgingData.name,
  'description': lodgingData.description,
  'telephone': lodgingData.telephone,
  'address': {
    '@type': 'PostalAddress',
    ...lodgingData.address
  },
  // 'photo': [
  //   { '@type': 'ImageObject', 'url': 'https://andreevka.netlify.app/assets/images/apparts/app_1.jpg' },
  //   { '@type': 'ImageObject', 'url': 'https://andreevka.netlify.app/assets/images/apparts/home_1.jpg' }
  // ]
};

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
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">
        Где остановиться в Андреевке: жильё у моря
      </h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700 reveal">
          {{ lodgingData.description }} <!-- Можно использовать данные из скрипта -->
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="reveal">
            <h3 class="text-xl font-semibold mb-2 text-primary-700">Комфортабельные номера в Андреевке</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/app_1.jpg" alt="Номер 1" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/app_2.jpg" alt="Номер 2" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/app_3.jpg" alt="Номер 3" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/app_4.jpg" alt="Номер 4" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
          </div>
          <div class="mt-6 space-y-4 text-secondary-700">
            <p>✓ Современные, уютные номера</p>
            <p>✓ Все удобства в номере</p>
            <p>✓ Общая кухня</p>
            <p>✓ Wi-Fi</p>
          </div>
        </div>

        <div class="reveal" style="transition-delay: 0.2s;">
            <h3 class="text-xl font-semibold mb-2 text-primary-700">Уютный дом для семейного отдыха в Крыму</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/home_1.jpg" alt="Дом 1" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/home_2.jpg" alt="Дом 2" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/home_3.jpg" alt="Дом 3" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="@assets/images/apparts/home_4.jpg" alt="Дом 4" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            </div>
          </div>
          <div class="mt-6 space-y-4 text-secondary-700">
            <p>✓ Просторная территория</p>
            <p>✓ Парковка</p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a href="#contact" class="btn btn-primary">Забронировать</a>
      </div>
    </div>
  </section>
</template>