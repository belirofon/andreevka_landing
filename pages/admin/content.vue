<template>
  <div class="min-h-screen bg-primary-900">
    <div class="flex">
      <!-- Sidebar from admin/index.vue -->
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
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-white">Управление контентом</h1>
        </div>

        <!-- Page selector -->
        <div class="mb-8">
          <select 
            v-model="selectedPage"
            class="bg-primary-800 text-white px-4 py-2 rounded-lg"
            @change="loadContent"
          >
            <option value="">Выберите страницу</option>
            <option v-for="page in pages" :key="page.path" :value="page.path">
              {{ page.name }}
            </option>
          </select>
        </div>

        <!-- Content editor -->
        <div v-if="selectedPage" class="space-y-8">
          <div v-for="block in contentBlocks" :key="block.id" class="bg-primary-800 p-6 rounded-lg">
            <h3 class="text-white text-lg font-medium mb-4">{{ block.title }}</h3>
            
            <!-- Text editor -->
            <div v-if="block.type === 'text'" class="mb-4">
              <textarea
                v-model="block.content"
                class="w-full bg-primary-700 text-white p-4 rounded-lg"
                rows="4"
              ></textarea>
            </div>

            <!-- Image selector -->
            <div v-if="block.type === 'image'" class="mb-4">
              <div class="flex items-center space-x-4">
                <img 
                  :src="block.content.url" 
                  :alt="block.content.alt"
                  class="w-24 h-24 object-cover rounded"
                >
                <button
                  @click="openImagePicker(block)"
                  class="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-500"
                >
                  Изменить изображение
                </button>
              </div>
            </div>

            <!-- Save button -->
            <button
              @click="saveContent(block)"
              class="px-4 py-2 bg-sea-600 text-white rounded hover:bg-sea-500"
              :disabled="saving"
            >
              {{ saving ? 'Сохранение...' : 'Сохранить' }}
            </button>
          </div>
        </div>

        <!-- Image picker modal -->
        <div v-if="showImagePicker" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div class="bg-primary-800 p-6 rounded-lg w-3/4 max-h-[80vh] overflow-y-auto">
            <h3 class="text-white text-lg font-medium mb-4">Выберите изображение</h3>
            
            <!-- Image upload -->
            <div class="mb-6">
              <input
                type="file"
                accept="image/*"
                @change="uploadImage"
                class="text-white"
              >
            </div>

            <!-- Image grid -->
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="image in images"
                :key="image.id"
                class="relative cursor-pointer"
                @click="selectImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.alt"
                  class="w-full h-32 object-cover rounded"
                >
              </div>
            </div>

            <!-- Close button -->
            <button
              @click="showImagePicker = false"
              class="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-500"
            >
              Закрыть
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCmsStore } from '~/stores/cms';

const cmsStore = useCmsStore();
const selectedPage = ref('');
const contentBlocks = ref([]);
const saving = ref(false);
const showImagePicker = ref(false);
const selectedBlock = ref(null);

const pages = [
  { path: 'home', name: 'Главная' },
  { path: 'about', name: 'Об Андреевке' },
  { path: 'apartments', name: 'Где остановиться' },
  { path: 'attractions', name: 'Достопримечательности' },
];

const menuItems = [
  { name: 'Панель управления', path: '/admin' },
  { name: 'Управление контентом', path: '/admin/content' },
  { name: 'Бронирования', path: '/admin/bookings' },
  { name: 'Отзывы', path: '/admin/reviews' },
  { name: 'Настройки', path: '/admin/settings' },
];

async function loadContent() {
  if (!selectedPage.value) return;
  
  await cmsStore.fetchContentBlocks(selectedPage.value);
  contentBlocks.value = Object.values(cmsStore.contentBlocks[selectedPage.value] || {});
}

async function saveContent(block) {
  saving.value = true;
  try {
    await cmsStore.updateContentBlock(
      selectedPage.value,
      block.identifier,
      block.content
    );
  } finally {
    saving.value = false;
  }
}

function openImagePicker(block) {
  selectedBlock.value = block;
  showImagePicker.value = true;
  cmsStore.fetchImages();
}

async function uploadImage(event) {
  const file = event.target.files[0];
  if (file) {
    await cmsStore.uploadImage(file);
  }
}

function selectImage(image) {
  if (selectedBlock.value) {
    selectedBlock.value.content = {
      url: image.url,
      alt: image.alt
    };
  }
  showImagePicker.value = false;
}

onMounted(() => {
  // Initial load of images
  cmsStore.fetchImages();
});
</script>