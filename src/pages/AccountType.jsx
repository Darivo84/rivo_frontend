import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Background from '../components/background/Background'
import { assets } from '../assets/assets'

const AccountType = () => {
  const navigate = useNavigate()

  return (
    // <Background>
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden'>
      <div className='flex flex-row z-0'>
        <div 
          className='h-screen w-1/2 bg-green-500 bg-opacity-0 hover:bg-green-700 hover:bg-opacity-20 transition-all duration-500 cursor-pointer overflow-hidden'
        >
          
          <div className='flex md:flex-col items-center justify-center h-[80vh] transition-all duration-500 hover:scale-110'>
              <img 
                src={assets.LogoWht} 
                alt="Logo"
                className='w-60 z-10 hover:scale-110 transition-all duration-500' 
              />
              <h1 className='text-3xl text-white font-bold'>Users</h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={ () => navigate('/user/login')}
                className='w-[300px] mt-6 py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white 
              font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                Create User Account
              </motion.button>
            </div>
        </div>
        
        <div 
          className='w-1/2 bg-green-500 bg-opacity-0 hover:bg-green-700 hover:bg-opacity-20 transition-all duration-500 cursor-pointer overflow-hidden'
        >
          
          <div className='flex md:flex-col items-center justify-center h-[80vh] transition-all duration-500 hover:scale-110'>
              <img 
                src={assets.LogoBlk} 
                alt="Logo"
                className='w-60 z-10 hover:scale-110 transition-all duration-500' 
              />
              <h1 className='text-3xl text-white font-bold'>Professionals</h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={ () => navigate('/professional/login')}
                className='w-[300px] mt-6 py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white 
              font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                Create Professional Account
              </motion.button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AccountType