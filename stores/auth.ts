import { defineStore } from 'pinia';

interface User {
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}


export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    async login(email: string, password: string) {
      const config = useRuntimeConfig();
  
      const users = [
        {
          email: config.public.adminEmail,
          password: config.public.adminPassword,
          name: 'Admin User',
          role: 'admin',
        },
      ];
  
      // Поиск пользователя в массиве
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
  
      // Проверка на наличие пользователя
      if (user) {
        this.user = {
          email: user.email,
          name: user.name,
          role: user.role,
        };
        this.isAuthenticated = true;
        return true;
      }
  
      // Если пользователь не найден
      return false;
    },
  
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
  

  getters: {
    isAdmin: (state) => state.user?.role === 'admin'
  }
});