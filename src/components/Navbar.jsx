import { NavLink, useNavigate } from 'react-router-dom'
import { ChevronsDown, User, Calendar, MessageSquareText, LogOut } from 'lucide-react'
import { assets } from '../assets/assets'
import { useState } from 'react'

import { useAuthStore } from '../store/authStore'

const Navbar = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(true)

  const { user, logout } = useAuthStore()

  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img 
          src={ assets.LogoBlk } 
          alt='logo'
          className='w-[140px] cursor-pointer hover:scale-105 transition-all duration-500' 
          onClick={ () => navigate('/')}
        />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to='/'>
            <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/professionals'>
            <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>PROFESSIONALS</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden' />
          </NavLink>
        </ul>
        
        <div className='flex items-center gap-4'>
          {
            user 
              ? <div className='flex items-center cursor-pointer group relative '>
                  <img className='w-8 rounded-full' src={ user.image } alt="profilePic" />
                  {/* <img className='w-8 rounded-full' src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profilePic" /> */}
                  <ChevronsDown className='w-5' />
                  <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block bg-gray-400 bg-opacity-5 backdrop-filter rounded-xl shadow-2xl border border-white border-opacity-5'>
                    <div className='min-w-48 bg-green-900 rounded flex flex-col gap-4 p-4 mt-3 text-left'>
                      
                      <div 
                        className='flex text-white hover:text-green-500 hover:scale-105 transition-all duration-500 cursor-pointer'
                        onClick={ () => navigate('/user/my-profile') }
                      >
                        <User className='mr-2' />
                        <p>Profile</p>
                      </div>
                      <div 
                        className='flex text-white hover:text-green-500 hover:scale-105 transition-all duration-500 cursor-pointer'
                        onClick={ () => navigate('/user/my-appointments') }
                      >
                        <Calendar className='mr-2' />
                        <p>Appointments</p>
                      </div>
                      <div 
                        className='flex text-white hover:text-green-500 hover:scale-105 transition-all duration-500 cursor-pointer'
                        onClick={ () => navigate('/user/my-messages') }
                      >
                        <MessageSquareText className='mr-2' />
                        <p>Messages</p>
                      </div>
                      <div 
                        className='flex text-white hover:text-red-500 hover:scale-105 transition-all duration-500 cursor-pointer' 
                        onClick={ logout }
                      >
                        <LogOut className='mr-2' />
                        <p >Logout</p>
                      </div>

                    </div>
                  </div>
                </div>
              : <button onClick={ () => navigate('/account-type')} className='bg-gray-500 text-white hover:bg-green-500 hover:font-semibold hover:scale-105 px-8 py-3 rounded-full font-light hidden md:block transition-all duration-500'>Create account</button>
          }   
        </div>



      </div>
    
    </div>
    // <div>
    //   <div className='mx-4 sm:mx-[10%]'>
        // {/* <div className='bg-gray-400 bg-opacity-10 border border-gray-200 border-opacity-5 backdrop-filter backdrop-blur-xl shadow-xl rounded-lg px-2'> */}
        // {/* <div className='flex items-center justify-evenly'>
          
          // <div className='w-1/3'> */}
          // {/* <div className='w-1/3'> */}
    //         {/* <img 
    //           className='w-[140px] cursor-pointer hover:scale-105 transition-all duration-500' 
    //           src={ Logo } 
    //           alt="logo" 
    //           onClick={ () => navigate('/') }
    //         /> */}
    //       {/* </div> */}

    //       {/* <div className='w-1/3 flex items-center justify-center '>
    //         <ul className='hidden md:flex items-start gap-5 font-medium'>
    //           <NavLink to='/' className='cursor-pointer'>
    //             <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>HOME</li>
    //           </NavLink>
    //           <NavLink to='/' className='cursor-pointer'>
    //             <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>PROFESSIONALS</li>
    //           </NavLink>
    //           <NavLink to='/' className='cursor-pointer'>
    //             <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>ABOUT</li>
    //           </NavLink>
    //           <NavLink to='/' className='cursor-pointer'>
    //             <li className='py-1 text-slate-600 hover:text-black hover:scale-110 hover:transition-all duration-500'>CONTACT</li>
    //           </NavLink>
    //         </ul>
    //       </div>
          
    //       <div className='w-1/3 flex items-center gap-4 text-right'>
    //         { token ? 
    //           <div className='flex items-end gap-2 cursor-pointer group relative'>
    //             <img className='w-10 rounded-full' src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profilePic" />
    //             <ChevronsDown />
    //             <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
    //               <div className='min-w-48 bg-stone-100 rounder flex flex-col gap-4 p-4'>
    //                 <p onClick={ () => navigate('/my-profile') } className='hover:text-black hover:scale-105 transition-all duration-500 text-center cursor-pointer'>Profile</p>
    //                 <p onClick={ () => navigate('/my-appointments') } className='hover:text-black hover:scale-105 transition-all duration-500 text-center cursor-pointer'>Appointments</p>
    //                 <p onClick={ () => navigate('/my-messages') } className='hover:text-black hover:scale-105 transition-all duration-500 text-center cursor-pointer'>Messages</p>
    //                 <p onClick={ logout } className='hover:text-black hover:scale-105 transition-all duration-500 text-center cursor-pointer'>Logout</p>
    //               </div>
    //             </div>
    //           </div>
    //           :
    //           <div className='flex items-center'>
    //             <button 
    //               onClick={ () => navigate('/login') }
    //               className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-slate-800 hover:text-stone-400'
    //             >
    //                 Create account
    //             </button>
    //           </div>
    //         }
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
      // </div>
    // </div>

    
  )
}

export default Navbar