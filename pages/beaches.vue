<template>
  <div>
    <Header />
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg"
          alt="Пляжи Андреевки"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Пляжи Андреевки
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Лучшие места для пляжного отдыха в Андреевке
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
                alt="Центральный пляж"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Центральный пляж 🏖️</h2>
              <p class="text-secondary-700">
                Просторный и благоустроенный, с шезлонгами и зонтиками. Здесь есть все необходимое для комфортного отдыха: кафе, раздевалки, душевые и спасательный пост.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Дикие пляжи 🪣</h2>
              <p class="text-secondary-700">
                Если хотите тишины и покоя, отправляйтесь на более уединенные места. Здесь вы найдете нетронутую природу и кристально чистую воду.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
                alt="Дикие пляжи"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg"
                alt="Активный отдых"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Активный отдых 🌊</h2>
              <p class="text-secondary-700">
                Катание на катамаранах, дайвинг и кайтсерфинг — выбирайте по душе! На пляжах работают пункты проката оборудования и школы водных видов спорта.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Закаты на побережье 🌅</h2>
              <p class="text-secondary-700">
                Ощущение полного единения с природой. Вечерние прогулки по берегу под шум прибоя станут незабываемым впечатлением вашего отдыха.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg"
                alt="Закат на пляже"
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