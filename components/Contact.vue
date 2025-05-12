<template>
  <section id="contact" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-primary-700 mb-4 reveal">Свяжитесь с нами</h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
        <p class="max-w-2xl mx-auto text-lg text-secondary-700 reveal">
          Есть вопросы об Андреевке? Хотите организовать поездку? Мы всегда на связи!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="reveal">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="heading-md text-primary-700 mb-6">Отправить сообщение</h3>
            <form @submit.prevent="handleSubmit" novalidate>
              <div class="input-group">
                <label for="name" class="block mb-2 text-secondary-800">Ваше имя *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  class="form-control" 
                  required
                  :class="{'border-red-500': errors.name}"
                >
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <div class="input-group">
                <label for="email" class="block mb-2 text-secondary-800">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="form-control" 
                  required
                  :class="{'border-red-500': errors.email}"
                >
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>

              <div class="input-group">
                <label for="subject" class="block mb-2 text-secondary-800">Тема</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject" 
                  class="form-control"
                >
              </div>

              <div class="input-group">
                <label for="message" class="block mb-2 text-secondary-800">Сообщение *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  rows="5" 
                  class="form-control" 
                  required
                  :class="{'border-red-500': errors.message}"
                ></textarea>
                <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
              </div>

              <div class="flex justify-between items-center mt-6">
                <button 
                  type="submit" 
                  class="btn btn-primary"
                  :disabled="submitting"
                >
                  <span v-if="submitting">Отправка...</span>
                  <span v-else>Отправить сообщение</span>
                </button>
                <p v-if="successMessage" class="text-sea-600 font-semibold">{{ successMessage }}</p>
              </div>
            </form>
          </div>
        </div>

        <div class="reveal" style="transition-delay: 0.2s;">
          <div class="bg-primary-50 rounded-lg shadow-lg p-8 h-full">
            <h3 class="heading-md text-primary-700 mb-6">Контактная информация</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-primary-600">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-secondary-800 mb-1">Адрес</h4>
                  <p class="text-secondary-700">посёлок Андреевка, Севастополь, Республика Крым, Россия</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-primary-600">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-secondary-800 mb-1">Email</h4>
                  <p class="text-secondary-700">info@andreevka-crimea.ru</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-primary-600">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-secondary-800 mb-1">Телефон</h4>
                  <p class="text-secondary-700">+7 (978) 494-56-78</p>
                </div>
              </div>

              <div class="pt-6 mt-6 border-t border-primary-200">
                <h4 class="font-semibold text-secondary-800 mb-4">Мы в социальных сетях</h4>
                <div class="flex space-x-6">
                  <a href="https://wa.me/79781234567" target="_blank" class="text-secondary-700 hover:text-primary-600 transition-colors" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                  <a href="https://t.me/andreevka_crimea" target="_blank" class="text-secondary-700 hover:text-primary-600 transition-colors" aria-label="Telegram">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="pt-6 mt-6 border-t border-primary-200">
                <h4 class="font-semibold text-secondary-800 mb-4">Рабочие часы</h4>
                <p class="text-secondary-700">Понедельник - Пятница: 9:00 - 18:00</p>
                <p class="text-secondary-700">Суббота: 10:00 - 16:00</p>
                <p class="text-secondary-700">Воскресенье: Выходной</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = ref({});
const submitting = ref(false);
const successMessage = ref('');

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const handleSubmit = async () => {
  // Reset
  errors.value = {};
  successMessage.value = '';
  
  // Validate
  let isValid = true;
  
  if (!formData.value.name.trim()) {
    errors.value.name = 'Пожалуйста, введите ваше имя';
    isValid = false;
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'Пожалуйста, введите ваш email';
    isValid = false;
  } else if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Пожалуйста, введите корректный email';
    isValid = false;
  }
  
  if (!formData.value.message.trim()) {
    errors.value.message = 'Пожалуйста, введите ваше сообщение';
    isValid = false;
  }
  
  if (!isValid) return;
  
  // Submit form
  submitting.value = true;
  
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData.value,
    });

    if (response && response.message) { 
      successMessage.value = 'Спасибо! Ваше сообщение успешно отправлено.';
      formData.value = { name: '', email: '', subject: '', message: '' }; 
      setTimeout(() => successMessage.value = '', 5000);
    } else {
      throw new Error('Неожиданный ответ от сервера');
    }

  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    const errorMessage = error.data && error.data.error ? error.data.error : 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.';
    errors.value.submit = errorMessage; 
    setTimeout(() => {
        if (errors.value.submit) {
            delete errors.value.submit;
        }
    }, 7000);
  } finally {
    submitting.value = false;
  }
};
</script>