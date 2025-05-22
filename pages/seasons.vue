<template>
  <div>
    <Header />
 <section class="relative h-[60vh] flex items-center justify-center" v-if="pageContent">
      <div class="absolute inset-0">
 <img
 :src="pageContent.background_image_url || 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg'"
 :alt="pageContent.page_title || 'Сезоны отдыха в Андреевке'"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
 <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
 {{ pageContent.page_title || 'Загрузка...' }}
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
 {{ pageContent.page_subtitle || 'Загрузка...' }}
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg"
                alt="Лето в Андреевке"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Лето ☀️</h2>
              <p class="text-secondary-700">
                Теплое море, чистые пляжи и солнечные дни — пик туристического сезона. Температура воды достигает 24-26°C, а воздуха 28-30°C. Идеальное время для пляжного отдыха и водных развлечений.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Осень 🍂</h2>
              <p class="text-secondary-700">
                Идеально для тех, кто любит тишину, комфортную погоду и осеннюю романтику. Море все еще теплое, а туристов значительно меньше. Прекрасное время для прогулок и экскурсий.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/1808329/pexels-photo-1808329.jpeg"
                alt="Осень в Андреевке"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg"
                alt="Зима в Андреевке"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Зима ❄️</h2>
              <p class="text-secondary-700">
                Мягкий климат и спокойствие делают Андреевку отличным местом для уединения. Температура редко опускается ниже нуля, а солнечных дней больше, чем в континентальной части России.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Весна 🌸</h2>
              <p class="text-secondary-700">
                Природа оживает, и село наполняется ароматами цветущих садов. Прекрасное время для пеших прогулок и знакомства с местными достопримечательностями.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg"
                alt="Весна в Андреевке"
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