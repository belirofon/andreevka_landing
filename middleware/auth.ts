import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to) => {
  // const authStore = useAuthStore();
  
  // if (to.path.startsWith('/admin') && !authStore.isAuthenticated) {
  //   return navigateTo('/admin/login');
  // }
});