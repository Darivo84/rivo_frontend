import { NavLink, Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <div className="flex mx-6 sm:mx-[12%]">
        <div className="w-1/3 items-center justify-center">
          <img className='w-[120px] ml-[-10px] mt-[-5px] mb-5' src={ assets.LogoBlk } alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 text-sm text-justify'>
            With <span className='text-red-500 font-semibold'>R</span>ivo you can easily schedule, track, and sync your data, keeping you in control and ensuring your data is always up to date, and you choose who you share it with. Say goodbye to paperwork and fragmented service — <span className='text-red-500 font-semibold'>R</span>ivo gives you the power to centralize your data, providing clarity and convenience at your fingertips. Your data, your way.
          </p>
        </div>
        
        <div className="w-1/3 items-center justify-center ">
          <h2 className="text-lg font-medium text-center text-slate-500 border-l-gray-100 mb-5">COMPANY</h2>
          <hr className='mx-2 mb-2'/>
          <ul className='flex flex-col gap-2 text-gray-600 items-center mt-2'>
            <NavLink to='/' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/about' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Professionals</li>
            </NavLink>
            <NavLink to='/about' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>About Us</li>
            </NavLink>
            <Link to='/contact' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        
        <div className="w-1/3 items-end justify-center">
          <h2 className="text-lg font-medium text-right text-slate-500 border-l-gray-100 mb-5">GET IN TOUCH</h2>
          <hr className='ml-2 mb-2'/>
          <ul className='flex flex-col gap-2 text-gray-600 items-end mt-2'>
            <NavLink to='/cookie-policy' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Cookie Policy</li>
            </NavLink>
            <NavLink to='/privacy-policy' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Privacy Policy</li>
            </NavLink>
            <NavLink to='/terms-and-conditions' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Terms and Conditions</li>
            </NavLink>
            <Link to='mailto:support@rivo-tech.io' className='hover:text-green-500 hover:font-semibold hover:scale-105 transition-all duration-300'>
              <li>Send us an Email</li>
            </Link>
          </ul>
        </div>
      </div>
      <div  className='h-[1px] w-full bg-gray-200 mt-5'/>
      <div className="flex items-center justify-center">
        <p className='py-5 text-sm text-center'>Copyright &copy; {currentYear} Rivo Technologies</p>
      </div>
    </div>
  )
}

export default Footer