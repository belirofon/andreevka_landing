<template>
  <div class="min-h-screen bg-primary-900 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
      <h2 class="text-2xl font-bold text-center text-primary-700 mb-8">Вход в панель управления</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
  error.value = '';
  
  try {
    const success = await authStore.login(email.value, password.value);
    if (success) {
      router.push('/admin');
    } else {
      error.value = 'Неверный email или пароль';
    }
  } catch (e) {
    error.value = 'Произошла ошибка при входе';
  }
};
</script>