// src/store/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoading: false,
  setLoading: (status) => set({ isLoading: status }),
  // other state variables and actions
}));

export default useStore;