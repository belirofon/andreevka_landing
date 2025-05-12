<template>
  <section id="apartments" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-primary-700 mb-4 reveal">Где остановиться</h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700 reveal">
          Огрромный дом с уютными номерами и балконами
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="reveal">
          <h3 class="heading-md text-primary-600 mb-6">Комфортабельные номера</h3>
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
          <h3 class="heading-md text-primary-600 mb-6">Уютный дом для семейного отдыха</h3>
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