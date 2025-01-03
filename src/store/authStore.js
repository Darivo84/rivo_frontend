import { create } from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api"
axios.defaults.withCredentials = true

export const useAuthStore = create((set) => ({
  user: null,
	professional: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
  
	// User
  signup: async (email, password, firstName, lastName, gender) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/user/register`, { email, password, firstName, lastName, gender });
			// const response = await axios.post(`${API_URL}/auth/user/signup/signup`, { email, password, firstName, lastName, gender });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

  login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/user/login`, { email, password });
			// const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

  logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`http://localhost:5000/api/user/logout`);
			// await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},

	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/user/verify-email`, { code });
			// const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},

	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`http://localhost:5000/api/user/check-auth`);
			// const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},

	forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},

	resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error resetting password",
			});
			throw error;
		}
	},

	// professional
	pro_signup: async (email, password, firstName, lastName, gender) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/auth/pro/signup`, { email, password, firstName, lastName, gender });
			set({ professional: response.data.professional, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

	pro_login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:5000/api/auth/pro/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},
}))