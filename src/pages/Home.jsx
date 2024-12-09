import React from 'react'
import Header from '../components/home/Header'
import SpecialityMenu from '../components/home/SpecialityMenu'
import TopProfessionals from '../components/home/TopProfessionals'
import Banner from '../components/home/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='bg-white min-h-screen'>
      <div className='w-full bg-white'>
        <Navbar />
      </div>
      <div className='w-full bg-gray-50'>
        <Header />
      </div>
      <div className='w-full bg-white my-16'>
        <SpecialityMenu />
      </div>
      <div className='w-full bg-gray-50'>
        <TopProfessionals />
      </div>
      <div className='w-full bg-white my-16'>
        <Banner />
      </div>
      <div className='w-full bg-gray-50'>
        <Footer />
      </div>
    </div>
  )
}

export default Home