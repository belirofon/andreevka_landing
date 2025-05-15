<template>
  <div>
    <Header />
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg"
          alt="Как добраться в Андреевку"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Как добраться в Андреевку
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Все способы добраться до нашего живописного уголка Крыма
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg"
                alt="Дорога в Андреевку"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">На автомобиле 🚗</h2>
              <p class="text-secondary-700">
                Прямой маршрут по трассе "Таврида" через Севастополь. Дорога комфортная и живописная, с прекрасными видами на море и горы.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">На общественном транспорте 🚌</h2>
              <p class="text-secondary-700">
                Из Севастополя регулярно ходят автобусы и маршрутные такси до Андреевки. Поездка занимает около часа, во время которой вы сможете насладиться живописными пейзажами.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/2402648/pexels-photo-2402648.jpeg"
                alt="Общественный транспорт"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
                alt="Аэропорт"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">На самолете ✈️</h2>
              <p class="text-secondary-700">
                Ближайший аэропорт — Симферополь. Оттуда можно добраться на автобусе или такси до Севастополя, а далее — до Андреевки. Время в пути от аэропорта около 2-3 часов.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">На поезде 🚂</h2>
              <p class="text-secondary-700">
                Можно добраться до Севастополя на поезде, а затем пересесть на автобус до Андреевки. Это отличный способ насладиться живописными видами во время путешествия.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg"
                alt="Поезд"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>