<template>
  <div class="min-h-screen bg-primary-900">
    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-primary-800 min-h-screen p-4">
        <div class="flex items-center mb-8">
          <span class="text-white text-xl font-bold">Андреевка</span>
        </div>
        
        <nav class="space-y-2">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-primary-700 rounded-lg transition-colors"
          >
            <span class="ml-3">{{ item.name }}</span>
          </NuxtLink>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 p-8">
        <div class="mb-8 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-white">Панель управления</h1>
          <div class="flex items-center space-x-4">
            <span class="text-gray-300">{{ authStore.user?.name }}</span>
            <button
              @click="handleLogout"
              class="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div v-for="stat in stats" :key="stat.name" class="bg-primary-800 p-6 rounded-lg">
            <h3 class="text-gray-400 text-sm font-medium">{{ stat.name }}</h3>
            <div class="mt-2 flex items-baseline">
              <span class="text-2xl font-semibold text-white">{{ stat.value }}</span>
              <span :class="['ml-2 text-sm', stat.change >= 0 ? 'text-green-400' : 'text-red-400']">
                {{ stat.change >= 0 ? '+' : '' }}{{ stat.change }}%
              </span>
            </div>
          </div>
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-primary-800 p-6 rounded-lg">
            <h3 class="text-white text-lg font-medium mb-4">Обзор доходов</h3>
            <Line :data="revenueData" :options="chartOptions" class="h-64" />
          </div>
          <div class="bg-primary-800 p-6 rounded-lg">
            <h3 class="text-white text-lg font-medium mb-4">Статистика посещений</h3>
            <Bar :data="visitsData" :options="chartOptions" class="h-64" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { Line, Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const authStore = useAuthStore();
const router = useRouter();

// Navigation guard
if (!authStore.isAuthenticated) {
  router.push('/admin/login');
}

const handleLogout = () => {
  authStore.logout();
  router.push('/admin/login');
};

const menuItems = [
  { name: 'Панель управления', path: '/admin' },
  { name: 'Бронирования', path: '/admin/bookings' },
  { name: 'Отзывы', path: '/admin/reviews' },
  { name: 'Настройки', path: '/admin/settings' },
];

const stats = [
  { name: 'Всего бронирований', value: '4,786', change: 12.5 },
  { name: 'Доход', value: '₽873,000', change: -3.2 },
  { name: 'Посетителей', value: '6,295', change: 8.1 },
  { name: 'Конверсия', value: '3.56%', change: 2.4 },
];

// Chart data
const revenueData = {
  labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
  datasets: [
    {
      label: 'Доход',
      data: [30000, 45000, 35000, 50000, 48000, 55000],
      borderColor: '#0ea5e9',
      tension: 0.4,
      fill: false
    }
  ]
};

const visitsData = {
  labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  datasets: [
    {
      label: 'Посещения',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#0ea5e9'
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#fff'
      }
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#fff'
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#fff'
      }
    }
  }
};
</script>