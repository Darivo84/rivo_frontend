import { create } from 'zustand'
import axios from 'axios'
import toast from 'react-hot-toast'
 
export const useProfessionalStore = create((set) => ({
  professionals: [],

  getProfessionalData: async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/professional/list-professionals')
      if (data.success) {
        set({ doctors: data.doctors });
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  }
}))