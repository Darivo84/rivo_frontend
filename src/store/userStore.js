import { create } from 'zustand'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user'
axios.defaults.withCredentials = true

export const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password, firstName, lastName, gender) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axios.post(`${API_URL}/signup`, { email, password, firstName, lastName, gender })
      set({ user: response.data.user, isAuthenticated: true, isLoading: false })
    } catch (error) {
      set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
    }
  },
}))