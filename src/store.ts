import axios from 'axios';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: { email: string; password: string } | null;
  isAuthenticated: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: !!localStorage.getItem('token'),
  setEmail: (email) =>
    set((state) => ({
      user: { ...state.user!, email },
    })),
  setPassword: (password) =>
    set((state) => ({
      user: { ...state.user!, password },
    })),
  login: async (email, password) => {
    try {
      const { data } = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('dribbio-username', data.name);
      set({
        token: data.token,
        isAuthenticated: true,
      });
    } catch (error) {
      const err = error as any;
      alert(err.response?.data?.message || 'Login failed');
      console.error('Login failed:', err);
      return Promise.reject(err);
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('dribbioUser');
    set({ token: null, isAuthenticated: false, user: null });
  },
}));
