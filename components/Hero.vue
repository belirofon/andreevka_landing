<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
        alt="Hero background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
    </div>

    <!-- Content -->
    <div class="container relative z-10 text-center px-4">
      <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-wider mb-4 animate-fade-in">
        ОТДЫХ В АНДРЕЕВКЕ
      </h1>
      <h2 class="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-8 animate-slide-up">
        Жильё у моря | Севастополь, Крым
      </h2>
      <p class="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style="animation-delay: 0.2s;">
        Откройте для себя уникальный отдых в Андреевке (Крым): удивительная природа, чистейшие пляжи Севастополя и захватывающие пейзажи на берегу Чёрного моря.
      </p>
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style="animation-delay: 0.4s;">
        <a href="#about" class="btn btn-primary">Узнать больше</a>
        <a href="#contact" class="btn btn-secondary">Связаться с нами</a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#about" class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </section>
</template>