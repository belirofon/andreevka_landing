<template>
  <div>
    <Header />
    <section v-if="pageContent" class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
 <img
 :src="pageContent.background_image_url"
 :alt="pageContent.page_title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
 <div v-if="!pageContent" class="relative z-10 text-center px-4">
 <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Загрузка...</h1>
 <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">Загрузка контента страницы...</p>
 </div>

      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Местная кухня
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Гастрономические традиции и особенности кухни Крыма
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
 <div v-if="!cuisineSections" class="container mx-auto px-4 text-center text-secondary-700">Загрузка разделов...</div>
 <div v-else class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
 <div
 v-for="(section, index) in cuisineSections"
 :key="section.id"
 :class="['grid grid-cols-1 md:grid-cols-2 gap-8 mb-12', {'md:grid-cols-2': index % 2 === 0}]"
 >
 <div :class="['rounded-lg overflow-hidden shadow-lg', {'order-1 md:order-2': index % 2 !== 0}]">
 <img
 :src="section.image_url"
 :alt="section.title"
 class="w-full h-64 object-cover"
 />
 </div>
 <div :class="['flex flex-col justify-center', {'order-2 md:order-1': index % 2 !== 0}]">
 <h2 class="text-2xl font-bold text-primary-700 mb-4">{{ section.title }}</h2>
 <p class="text-secondary-700">{{ section.description }}</p>
 </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>