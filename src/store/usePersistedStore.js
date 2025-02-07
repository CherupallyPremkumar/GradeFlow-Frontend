import create from 'zustand';
import { persist } from 'zustand/middleware';

const usePersistedStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage', // localStorage key
      getStorage: () => localStorage, // or sessionStorage
    }
  )
);

export default usePersistedStore;