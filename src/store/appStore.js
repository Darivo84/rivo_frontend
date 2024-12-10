// import { create } from 'zustand'
// import axios from 'axios'
// import toast from 'react-hot-toast'

// export const useAppStore = create((set, get) => ({
//   currencySymbol: 'R',
//   backendUrl: import.meta.env.VITE_BACKEND_URL,

//   professionals: [],
//   token: localStorage.getItem('token') || false,
//   userData: false,
//   messages: [],
  
//   setToken: (token) => {
//     localStorage.setItem('token', token);
//     set({ token });
//   },

//   setUserData: (userData) => set({ userData }),

//   getProfessionalsData: async () => {
//     const backendUrl = get.backendUrl
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/professional/list-professionals`);
//       if (data.success) {
//         set({ professionals: data.professionals });
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.error(error);
//     }
//   },

//   loadUserProfileData: async () => {
//     const { backendUrl, token, setUserData } = get()
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
//         headers: { token },
//       });
//       if (data.success) {
//         setUserData(data.userData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.error(error);
//     }
//   },

//   initialize: () => {
//     const { getProfessionalsData, token, loadUserProfileData } = get();

//     getProfessionalsData()

//     if (token) {
//       loadUserProfileData();
//     } else {
//       set({ userData: false });
//     }
//   }
// }))