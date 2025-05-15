<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-x-full opacity-0"
    enter-to-class="transform translate-x-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-x-0 opacity-100"
    leave-to-class="transform translate-x-full opacity-0"
  >
    <div v-if="isVisible" class="fixed top-4 right-4 max-w-sm w-full bg-white rounded-lg shadow-lg p-5 z-50">
  <div class="flex justify-between items-start space-x-4">
    <div>
      <h3 class="text-lg font-semibold text-primary-700 mb-3">А в Севастополе сейчас</h3>
      <div v-if="weatherData" class="space-y-3">
        <div class="flex items-center space-x-2">
          <span v-html="getWeatherIcon(weatherData.weathercode)" class="text-3xl"></span>
          <p class="text-2xl font-bold text-secondary-800">
            {{ weatherData.temperature }}°C
          </p>
        </div>
        <p class="text-secondary-600 text-lg">
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
      class="text-secondary-400 hover:text-secondary-600 transition-colors rounded-full p-1 ml-3"
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

// Маппинг погодных кодов на описания
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

// Маппинг погодных кодов на SVG-иконки
const weatherIcons = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌨️',
  51: '🌧️',
  53: '🌧️',
  55: '🌧️',
  61: '🌦️',
  63: '🌧️',
  65: '🌧️',
  71: '🌨️',
  73: '🌨️',
  75: '❄️',
  77: '❄️',
  80: '🌧️',
  81: '🌧️',
  82: '🌧️',
  85: '🌨️',
  86: '❄️',
  95: '🌩️',
  96: '⛈️',
  99: '🌩️'
};

// Функция получения описания погоды
const getWeatherDescription = (code) => {
  return weatherDescriptions[code] || 'Нет данных';
};

// Функция получения иконки погоды
const getWeatherIcon = (code) => {
  return weatherIcons[code] || '❓';
};

// Получение данных о погоде
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

// Закрытие окна
const close = () => {
  isVisible.value = false;
};

// Инициализация при монтировании
onMounted(() => {
  fetchWeather();
  setTimeout(() => {
    isVisible.value = true;
  }, 5000);
});
</script>
