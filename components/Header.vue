<template>
  <header :class="['fixed top-0 w-full z-50 transition-all duration-300', 
    scrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4']">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-xl md:text-2xl font-bold">
          <span :class="scrolled || isMenuOpen ? 'text-primary-700' : 'text-white'">Андреевка</span>
        </h1>
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-8">
        <a v-for="item in menuItems" :key="item.href" :href="item.href"
          :class="[
            'font-medium transition-colors duration-200',
            scrolled || isMenuOpen ? 'text-secondary-700 hover:text-primary-600' : 'text-white hover:text-primary-100'
          ]">
          {{ item.label }}
        </a>
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
        <a v-for="item in menuItems" 
           :key="item.href" 
           :href="item.href"
           @click="closeMenu"
           class="block py-2 text-secondary-700 hover:text-primary-600 font-medium">
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);
const scrolled = ref(false);

const menuItems = [
  { label: 'Главная', href: '#home' },
  { label: 'О поселке', href: '#about' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Достопримечательности', href: '#attractions' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
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
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}
</script>