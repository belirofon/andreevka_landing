<template>
  <header :class="['fixed top-0 w-full z-50 transition-all duration-300', 
    scrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4']">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-xl md:text-2xl font-bold">
          <NuxtLink to="/" :class="scrolled || isMenuOpen ? 'text-primary-700' : 'text-white'">Андреевка</NuxtLink>
        </h1>
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink v-for="item in menuItems" :key="item.href" :to="item.href"
          :class="[
            'font-medium transition-colors duration-200',
            scrolled || isMenuOpen ? 'text-secondary-700 hover:text-primary-600' : 'text-white hover:text-primary-100'
          ]">
          {{ item.label }}
        </NuxtLink>
        
        <!-- Dropdown for Info Pages -->
        <div class="relative info-menu-container">
          <button 
            @click.prevent="toggleInfoMenu"
            @mouseenter="showInfoMenu"
            :class="[
              'font-medium transition-colors duration-200 flex items-center',
              scrolled || isMenuOpen ? 'text-secondary-700 hover:text-primary-600' : 'text-white hover:text-primary-100'
            ]">
            Информация
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="isInfoMenuOpen" 
            @mouseenter="showInfoMenu"
            @mouseleave="hideInfoMenu"
            class="absolute bg-white shadow-lg rounded-md py-2 mt-2 min-w-[200px] z-50">
            <NuxtLink v-for="item in infoPages" :key="item.href" :to="item.href"
              class="block px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-gray-50">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden p-2" 
        :class="scrolled || isMenuOpen ? 'text-secondary-800' : 'text-white'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
          class="w-6 h-6">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" 
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
      <div class="container mx-auto px-4">
        <NuxtLink v-for="item in menuItems" 
           :key="item.href" 
           :to="item.href"
           @click="closeMenu"
           class="block py-2 text-secondary-700 hover:text-primary-600 font-medium">
          {{ item.label }}
        </NuxtLink>
        
        <!-- Mobile Info Pages Section -->
        <div class="mt-2 pt-2 border-t border-gray-200">
          <div class="py-2 font-semibold text-secondary-800">Информация:</div>
          <NuxtLink v-for="item in infoPages" 
             :key="item.href" 
             :to="item.href"
             @click="closeMenu"
             class="block py-2 pl-2 text-secondary-700 hover:text-primary-600 font-medium">
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);
const scrolled = ref(false);
const isInfoMenuOpen = ref(false);

const menuItems = [
  { label: 'Главная', href: '/#home' },
  { label: 'Об Андреевке', href: '/#about' },
  { label: 'Где остановиться', href: '/#apartments' },
  { label: 'Галерея', href: '/#gallery' },
  { label: 'Достопримечательности', href: '/#attractions' },
  { label: 'Отзывы', href: '/#testimonials' },
  { label: 'Контакты', href: '/#contact' },
];

const infoPages = [
  { label: 'Как добраться', href: '/how-to-get' },
  { label: 'Местная кухня', href: '/local-cuisine' },
  { label: 'Пляжи Андреевки', href: '/beaches' },
  { label: 'Сезоны отдыха', href: '/seasons' },
];

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  window.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('click', handleOutsideClick);
});

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}

function handleResize() {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
    isInfoMenuOpen.value = false;
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}

function toggleInfoMenu() {
  isInfoMenuOpen.value = !isInfoMenuOpen.value;
}

function showInfoMenu() {
  isInfoMenuOpen.value = true;
}

function hideInfoMenu() {
  // Используем setTimeout, чтобы дать время для перемещения курсора к выпадающему меню
  setTimeout(() => {
    if (!document.querySelector('.info-menu-container:hover')) {
      isInfoMenuOpen.value = false;
    }
  }, 100);
}

function handleOutsideClick(event) {
  // Проверяем, был ли клик вне меню информации
  const infoMenuContainer = document.querySelector('.info-menu-container');
  if (isInfoMenuOpen.value && infoMenuContainer && !infoMenuContainer.contains(event.target)) {
    isInfoMenuOpen.value = false;
  }
}
</script>