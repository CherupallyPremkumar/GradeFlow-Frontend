import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null, // Stores user data
  isAuthenticated: false, // Flag to track if the user is authenticated
  setUser: (user) => set({ user, isAuthenticated: true }), // Set user and authentication status
  logout: () => set({ user: null, isAuthenticated: false }), // Reset user data on logout
}));

export default useAuthStore;