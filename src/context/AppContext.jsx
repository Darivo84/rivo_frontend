import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const currencySymbol = 'R'
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [professionals, setProfessionals] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
  const [userData, setUserData] = useState(false)

  const getProfessionalData = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/professional/list-professionals')
      if (data.success) {
        setProfessionals(data.professionals)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/user/get-profile', { headers: {token}})
      if (data.success) {
        setUserData(data.userData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  const value = {
    backendUrl,
    currencySymbol,
    professionals, 
    token, setToken,
    userData, setUserData,
    getProfessionalData,
  }

  useEffect(() => {
    getProfessionalData()
  }, [])

  useEffect(() => {
    if (token) {
      loadUserProfileData()
    } else {
      setUserData(false)
    }
  }, [token])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;