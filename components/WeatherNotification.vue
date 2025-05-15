<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-x-full opacity-0"
    enter-to-class="transform translate-x-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-x-0 opacity-100"
    leave-to-class="transform translate-x-full opacity-0"
  >
    <div v-if="isVisible" class="fixed top-4 right-4 max-w-sm w-full bg-white rounded-lg shadow-lg p-4 z-50">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-semibold text-primary-700 mb-2">А в Севастополе сейчас</h3>
          <div v-if="weatherData" class="space-y-2">
            <p class="text-2xl font-bold text-secondary-800">{{ weatherData.temperature }}°C</p>
            <p class="text-secondary-600">
              {{ getWeatherDescription(weatherData.weathercode) }}
            </p>
            <p class="text-sm text-secondary-500">
              Ветер: {{ weatherData.windspeed }} м/с
            </p>
          </div>
          <div v-else class="text-secondary-600">
            Загрузка данных...
          </div>
        </div>
        <button 
          @click="close" 
          class="text-secondary-400 hover:text-secondary-600 transition-colors"
          aria-label="Закрыть"
        >
          ✕
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isVisible = ref(false);
const weatherData = ref(null);

// Weather codes mapping
const weatherDescriptions = {
  0: 'Ясно',
  1: 'Преимущественно ясно',
  2: 'Переменная облачность',
  3: 'Пасмурно',
  45: 'Туман',
  48: 'Изморозь',
  51: 'Легкая морось',
  53: 'Умеренная морось',
  55: 'Сильная морось',
  61: 'Небольшой дождь',
  63: 'Умеренный дождь',
  65: 'Сильный дождь',
  71: 'Небольшой снег',
  73: 'Умеренный снег',
  75: 'Сильный снег',
  77: 'Снежные зёрна',
  80: 'Небольшой ливень',
  81: 'Умеренный ливень',
  82: 'Сильный ливень',
  85: 'Небольшой снегопад',
  86: 'Сильный снегопад',
  95: 'Гроза',
  96: 'Гроза с небольшим градом',
  99: 'Гроза с сильным градом'
};

const getWeatherDescription = (code) => {
  return weatherDescriptions[code] || 'Нет данных';
};

const fetchWeather = async () => {
  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=44.6167&longitude=33.5254&current_weather=true'
    );
    const data = await response.json();
    weatherData.value = data.current_weather;
  } catch (error) {
    console.error('Ошибка при получении данных о погоде:', error);
  }
};

const close = () => {
  isVisible.value = false;
};

onMounted(() => {
  fetchWeather();
  setTimeout(() => {
    isVisible.value = true;
  }, 5000);
});
</script>