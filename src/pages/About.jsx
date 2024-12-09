import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='mx-4 sm:mx-[10%]'>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={ assets.about_img } alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to <span className='text-red-600 font-semibold'>r</span>ivo, your trusted partner in managing your healthcare needs conveniently and efficiently. At <span className='text-red-600 font-semibold'>r</span>ivo, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records</p>
            <p><span className='text-red-600 font-semibold'>r</span>ivo is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, <span className='text-red-600 font-semibold'>r</span>ivo is here to support you every step of the way</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision at <span className='text-red-600 font-semibold'>r</span>ivo is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it</p>
          
          </div>
        </div>

        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About