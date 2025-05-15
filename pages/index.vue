<template>
  <div>
    <Header />
    <Hero />
    <About />
    <Apartments />
    <Gallery />
    <Attractions />
    <Testimonials />
    <Contact />
    <Footer />
    <WeatherNotification />
  </div>
</template>

<script setup>
// Scroll animation observer
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});
</script>