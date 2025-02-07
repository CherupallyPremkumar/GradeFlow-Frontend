import create from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: false,
  setLoading: (status) => set({ isLoading: status }),
}));

export default useLoadingStore;