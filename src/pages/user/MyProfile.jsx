import { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { motion } from 'framer-motion'

import Navbar from '../../components/Navbar'
import Background from '../../components/background/Background'
import Input from '../../components/input/Input'
import Footer from '../../components/Footer'
import { formatDate } from '../../utils/date'

import { ImageUp } from 'lucide-react'

const MyProfile = () => {
  const { user, logout } = useAuthStore()

  const [userData, setUserData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    image: user?.image,
    email: user?.email,
    phone: user?.phone,
    address1: user?.address1,
    address2: user?.address2,
    gender: user?.gender,
    dob: user?.dob,
    idNumber: user?.idNumber,
    occupation: user?.occupation,
    createdAt: user?.createdAt,
    lastLogin: user?.lastLogin,
  })

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState()

  const handleLogout = () => {
    logout()
  }

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  }

  return (
    <div className='bg-white'>
      <Navbar />
      <Background>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className='max-w-xl w-full mx-5 my-5 p-8 bg-gray-400 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-5'
        >
          <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
            My Profile
          </h2>

          <div className='space-y-6'>
            <motion.div
              className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className='flex items-center justify-evenly'>
              { isEdit 
                  ?
                  <label htmlFor="profilePic">
                    <div className='relative'>
                      <img src={ image ? URL.createObjectURL(image) : userData.image } alt="profilePic" />
                      {/* <img src={ profilePic ? '': profilePic } alt="profilePic" /> */}
                      {image ? '' : <ImageUp className='size-12 absolute bottom-0 right-12 text-white cursor-pointer' />}
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='profilePic' hidden />
                  </label>
                  :
                  <img className='w-36 rounded-full cursor-pointer' src={ userData.image } alt="profilePic" />
              }
                
                
                <div>
                {isEdit // Name and Surname edit
                  ? 
                    <div className='flex items-center justify-evenly'>
                      <input 
                        type="text" 
                        placeholder='First name'
                        value={userData.firstName}
                        onChange={(e) => setUserData(prev => ({ ...prev, firstName: e.target.value }))}
                        className='bg-white bg-opacity-20 text-white w-[150px] mr-3 rounded-md h-[30px] px-2' 
                      /> 
                      <input 
                        type="text" 
                        placeholder='Last name'
                        value={userData.lastName}
                        onChange={(e) => setUserData(prev => ({ ...prev, lastName: e.target.value }))}
                        className='bg-white bg-opacity-20 text-white w-[150px] rounded-md h-[30px] px-2' 
                      /> 
                    </div>
                  :
                  <h2 className='text-3xl font-bold text-white'>{ userData.firstName + " " + userData.lastName }</h2>
                }
                  
                  <div className='flex items-center justify-start mt-5'>
                    <p className='ml-3 text-md text-white'>Phone:</p>
                    { isEdit 
                      ? 
                        <div className='flex items-center justify-evenly'>
                          <input 
                            type="text" 
                            placeholder='Phone'
                            value={userData.phone}
                            onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            className='ml-5 bg-white bg-opacity-20 text-white w-[240px] rounded-md h-[30px] px-2' 
                          />   
                        </div>
                      : <p className='ml-2'>{ userData.phone }</p>
                    }
                  </div>
                  
                  <div className='flex items-center justify-start mt-3'>
                    <p className='ml-3 text-md text-white'>Email:</p>
                    {isEdit
                      ? <p className='ml-7'>{ userData.email }</p>
                      : <p className='ml-4'>{ userData.email }</p>
                    }
                  </div>
                
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className='space-y-6'>
            <motion.div
              className='mt-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className='flex items-center justify-between'>
                <p className='text-md text-white'>Date of Birth:</p>
                { isEdit
                    ?
                    <div className='flex flex-col items-center justify-evenly'>
                      <input 
                        type="date" 
                        placeholder='dd/MM/yyyy'
                        value={userData.dob}
                        onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                        className='ml-2 mb-3 bg-white bg-opacity-20 text-white w-[320px] rounded-md h-[30px] px-2' 
                      />   
                       
                    </div>
                    : 
                    <div>
                      <p className='ml-4'>{ userData.dob }</p>
                    </div>
                }
              </div>
            </motion.div>
          </div>
          
          <div className='space-y-6'>
            <motion.div
              className='mt-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className='flex items-center justify-between'>
                <p className='text-md text-white'>ID Number:</p>
                { isEdit
                    ?
                    <div className='flex flex-col items-center justify-evenly'>
                      <input 
                        type="text" 
                        placeholder='000000 0000 000'
                        value={userData.idNumber}
                        onChange={(e) => setUserData(prev => ({ ...prev, idNumber: e.target.value }))}
                        className='ml-2 mb-3 bg-white bg-opacity-20 text-white w-[320px] rounded-md h-[30px] px-2' 
                      />   
                       
                    </div>
                    : 
                    <div>
                      <p className='ml-4'>{ userData.dob }</p>
                    </div>
                }
              </div>
            </motion.div>
          </div>

          <div className='space-y-6'>
            <motion.div
              className='mt-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className='flex items-center justify-between'>
                <p className='text-md text-white'>Gender:</p>
                { isEdit
                    ?
                    <select 
                      className='appearance-none row-start-1 col-start-1 bg-white bg-opacity-20 ml-2 mb-3 w-[320px] rounded-md h-[30px] px-2'
                      // className='ml-2 mb-3 bg-white bg-opacity-20 text-white w-[320px] rounded-md h-[30px] px-2'
                      onChange={ e => setUserData(prev => ({ ...prev , gender: e.target.value})) } 
                      value={ userData.gender }
                    >
                      <option 
                        value="Male" 
                      >
                        Male
                      </option>
                      <option value="Female" 
                        className='bg-gray-800 bg-opacity-20 text-green-600 w-[320px]'
                      >
                        Female
                      </option>
                    </select>
                    : 
                    <div>
                      <p className='ml-4'>{ userData.gender }</p>
                    </div>
                }
              </div>
            </motion.div>
          </div>

          <div className='space-y-6'>
            <motion.div
              className='mt-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className='flex items-center justify-between'>
                <p className='text-md text-white'>Address:</p>
                { isEdit
                    ?
                    <div className='flex flex-col items-center justify-evenly'>
                      <input 
                        type="text" 
                        placeholder='Address line 1'
                        value={userData.address1}
                        onChange={(e) => setUserData(prev => ({ ...prev, address1: e.target.value }))}
                        className='ml-2 mb-3 bg-white bg-opacity-20 text-white w-[320px] rounded-md h-[30px] px-2' 
                      />   
                      <input 
                        type="text" 
                        placeholder='Address line 2'
                        value={userData.address2}
                        onChange={(e) => setUserData(prev => ({ ...prev, address2: e.target.value }))}
                        className='ml-2 bg-white bg-opacity-20 text-white w-[320px] rounded-md h-[30px] px-2' 
                      />   
                    </div>
                    : 
                    <div>
                      <p className='ml-4'>{ userData.address1 }</p>
                      <p className='ml-4'>{ userData.address2 }</p>
                    </div>
                }
              </div>
            </motion.div>
          </div>
          
          <div className='space-y-6'>
            <motion.div
              className='mt-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className='flex items-center justify-between'>
                <p className='text-md text-white'>Occupation:</p>
                { isEdit
                    ?
                    <div className='flex flex-col items-center justify-evenly'>
                      <input 
                        type="text" 
                        placeholder='Occupation'
                        value={userData.occupation}
                        onChange={(e) => setUserData(prev => ({ ...prev, occupation: e.target.value }))}
                        className='ml-2 mb-3 bg-white bg-opacity-20 text-white w-[320px] rounded-md h-[30px] px-2' 
                      />   
                      
                    </div>
                    : 
                    <div>
                      <p className='ml-4'>{ userData.occupation }</p>
                    </div>
                }
              </div>
            </motion.div>
          </div>
          
          <div className='space-y-6'>
            <motion.div
              className='mt-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className='text-xl font-semibold text-green-400 mb-3'>Account Activity</h3>
              <p className='text-gray-300'>
                <span className='font-bold'>Joined: </span>
                {new Date(userData.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className='text-gray-300'>
                <span className='font-bold'>Last Login: </span>

                {formatDate(userData.lastLogin)}
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
              onClick={toggleEdit}
              className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
            font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
            >
              { isEdit ? 'Update Your Profile' : 'Edit Your Profile' }
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='mt-4'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className='w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white 
            font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-red-700
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900'
            >
              Logout
            </motion.button>
          </motion.div>

        </motion.div>
      </Background>
      <br />
      <Footer />
    </div>
  )
}

// https://www.youtube.com/watch?v=C3U1RforbH4&t=7800s&ab_channel=GreatStack 
// 3hrs:44

export default MyProfile