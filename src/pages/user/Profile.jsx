import { motion } from 'framer-motion'

import Background from '../../components/background/Background'
import { formatDate } from '../../utils/date'

import { useAuthStore } from '../../store/authStore'

const Profile = () => {
  const { user, logout } = useAuthStore()
  
  const handleLogout = () => {
    logout()
  }
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-400 bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
      >
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
          Dashboard
        </h2>

        <div className='space-y-6'>
          <motion.div
            className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className='text-xl font-semibold text-green-400 mb-3'>Profile Information</h3>
            <img className='w-24 flex items-center justify-center my-3' src={ user.profilePic } alt="ProfilPicture" />
            <p className='text-gray-300'>Name: {user.firstName} { user.lastName }</p>
            <p className='text-gray-300'>Email: {user.email}</p>
            <p className='text-gray-300'>Date of Birth: {user.dob}</p>
            <div className='flex justify-evenly'>
              <p className='text-gray-300'>Address: {user.address1} { user.address2 }</p>
              <p className='text-gray-300'>{ user.address2 }</p>
            </div>

          </motion.div>

          <motion.div
            className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className='text-xl font-semibold text-green-400 mb-3'>Account Activity</h3>
            <p className='text-gray-300'>
              <span className='font-bold'>Joined: </span>
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className='text-gray-300'>
              <span className='font-bold'>Last Login: </span>

              {formatDate(user.lastLogin)}
            </p>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='mt-4'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
          font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </Background>
  )
}

export default Profile