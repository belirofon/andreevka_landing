<template>
  <section id="about" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-primary-700 mb-4 reveal">О посёлке Андреевка</h2>
        <div class="w-20 h-1 bg-sea-500 mx-auto mb-8 reveal"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="reveal">
          <h3 class="heading-md text-primary-600 mb-4">Райский уголок Крыма</h3>
          <p class="text-lg mb-6 text-secondary-700 leading-relaxed">
            Посёлок Андреевка расположен на юго-западном побережье Крыма, в 20 километрах от Севастополя. Это живописное место славится своими золотистыми песчаными пляжами, чистейшей морской водой и великолепными природными ландшафтами.
          </p>
          <p class="text-lg mb-6 text-secondary-700 leading-relaxed">
            Андреевка находится в окружении виноградников и плодовых садов, что создаёт особый микроклимат — мягкий и благоприятный для отдыха в любое время года. Здесь вы найдёте идеальное сочетание морского и горного воздуха.
          </p>
          <div class="flex flex-wrap gap-4 mt-8">
            <div class="flex items-center">
              <div class="bg-primary-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-secondary-800">Чистые пляжи</span>
            </div>
            <div class="flex items-center">
              <div class="bg-primary-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-secondary-800">Прозрачное море</span>
            </div>
            <div class="flex items-center">
              <div class="bg-primary-100 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-secondary-800">Живописные пейзажи</span>
            </div>
          </div>
        </div>
        <div class="reveal" style="transition-delay: 0.2s;">
          <img src="@assets/images/7.jpg" alt="Море у побережья Андреевки" class="rounded-lg shadow-xl w-full h-auto object-cover">
        </div>
      </div>

      <div class="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md text-center reveal">
          <div class="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-primary-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h3 class="heading-sm mb-2">Уютное жильё</h3>
          <p class="text-secondary-600">Комфортабельные гостевые дома и мини-отели для идеального отдыха</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md text-center reveal" style="transition-delay: 0.1s;">
          <div class="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-primary-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h3 class="heading-sm mb-2">Мягкий климат</h3>
          <p class="text-secondary-600">Более 270 солнечных дней в году для идеального отдыха</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md text-center reveal" style="transition-delay: 0.2s;">
          <div class="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-primary-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="heading-sm mb-2">Экологичность</h3>
          <p class="text-secondary-600">Чистый воздух и экологически благоприятная территория</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md text-center reveal" style="transition-delay: 0.3s;">
          <div class="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-primary-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="heading-sm mb-2">Развлечения</h3>
          <p class="text-secondary-600">Множество активностей для всей семьи на любой вкус</p>
        </div>
      </div>
    </div>
  </section>
</template>