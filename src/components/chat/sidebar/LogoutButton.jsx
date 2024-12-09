import { BiLogOut } from 'react-icons/bi'
import { useAuthStore } from '../../../store/authStore'
import { useState } from 'react'

const LogoutButton = () => {
  const [loading, setLoading] = useState(false)
  const { logout } = useAuthStore()

  return (
    <div className='mt-auto '>
      { !loading ? (
        <button className='flex items-center' onClick={ logout }>
          <BiLogOut className='w-6 h-6 text-white mr-3' />
          <h2 className='text-white font-semibold'>Logout </h2>
        </button>
      ) : (
        <span className='loading loading-spinner'></span>
      ) }
    </div>
  )
}

export default LogoutButton