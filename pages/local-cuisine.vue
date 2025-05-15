<template>
  <div>
    <Header />
    <section class="relative h-[60vh] flex items-center justify-center">
      <div class="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
          alt="Местная кухня Андреевки"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-secondary-900 bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Местная кухня
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Гастрономические традиции и особенности кухни Крыма
        </p>
      </div>
    </section>

    <main class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg"
                alt="Чебуреки"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Домашние чебуреки 🥟</h2>
              <p class="text-secondary-700">
                Сочные, с разнообразными начинками — от мяса до сыра и зелени. Каждое кафе готовит их по своему уникальному рецепту, передающемуся из поколения в поколение.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Свежая рыба и морепродукты 🐟</h2>
              <p class="text-secondary-700">
                Блюда из местного улова — настоящая гордость региона. Барабулька, ставрида, кефаль и другие дары моря, приготовленные по традиционным рецептам.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/3298180/pexels-photo-3298180.jpeg"
                alt="Морепродукты"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Овощные салаты"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Овощные салаты 🍅</h2>
              <p class="text-secondary-700">
                Приготовлены из свежих продуктов, выращенных на крымской земле. Сочные помидоры, хрустящие огурцы, сладкий перец и ароматная зелень.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center order-2 md:order-1">
              <h2 class="text-2xl font-bold text-primary-700 mb-4">Вина Крыма 🍷</h2>
              <p class="text-secondary-700">
                Наслаждайтесь напитками от местных виноделен, славящихся своими насыщенными ароматами. Каждое вино отражает уникальный терруар полуострова.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg"
                alt="Крымские вина"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>