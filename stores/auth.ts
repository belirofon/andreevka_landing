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

const users = [
  {
    email: 'n.sannikov@gmail.com',
    password: '12345_Qwerty_2025!',
    name: 'Nikolay Sannikov',
    role: 'admin'
  },
  {
    email: 'admin@andreevka.ru',
    password: 'Admin_2025!',
    name: 'Admin User',
    role: 'admin'
  }
];

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    async login(email: string, password: string) {
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        this.user = {
          email: user.email,
          name: user.name,
          role: user.role
        };
        this.isAuthenticated = true;
        return true;
      }
      
      return false;
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
    }
  },

  getters: {
    isAdmin: (state) => state.user?.role === 'admin'
  }
});