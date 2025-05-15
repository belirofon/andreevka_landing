<template>
  <div>
    <Header />
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
        <img 
          src="@/assets/images/main_bg.jpeg"
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
        <div class="prose max-w-none">
          <!-- Content will be added here -->
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>