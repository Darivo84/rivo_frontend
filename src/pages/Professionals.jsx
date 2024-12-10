import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {AppContext} from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Professionals = () => {
  const { speciality } = useParams()
  const [filter, setFilter] = useState([])
  const navigate = useNavigate()
  const { professionals } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilter(professionals.filter(pro => pro.speciality === speciality))
    } else {
      setFilter(professionals)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [professionals, speciality])

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='mx-4 sm:mx-[10%]'>
        <p className='text-gray-700'>Browse through our specialists.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 mb-12'>
          <div className='flex flex-col gap-4 text-sm text-gray-700'>
            <p onClick={ () => speciality === 'Doctors' ? navigate('/professionals') : navigate('/professionals/Doctors') } className={ `w--[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${ speciality === 'Doctors' ? 'bg-green-100 text-black' : '' }` }>Doctors</p>
            <p onClick={ () => speciality === 'Building Contractors' ? navigate('/professionals') : navigate('/professionals/Building Contractors') } className={ `w--[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${ speciality === 'Building Contractors' ? 'bg-green-100 text-black' : '' }` }>Building Contractors</p>
            <p onClick={ () => speciality === 'Beauticians' ? navigate('/professionals') : navigate('/professionals/Beauticians') } className={ `w--[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${ speciality === 'Beauticians' ? 'bg-green-100 text-black' : '' }` }>Beauticians</p>
            <p onClick={ () => speciality === 'Veterinarians' ? navigate('/professionals') : navigate('/professionals/Veterinarians') } className={ `w--[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${ speciality === 'Veterinarians' ? 'bg-green-100 text-black' : '' }` }>Veterinarians</p>
            <p onClick={ () => speciality === 'Personal Trainers' ? navigate('/professionals') : navigate('/professionals/Personal Trainers') } className={ `w--[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${ speciality === 'Personal Trainers' ? 'bg-green-100 text-black' : '' }` }>Personal Trainers</p>
            <p onClick={ () => speciality === 'Tattoo Artists' ? navigate('/professionals') : navigate('/professionals/Tattoo Artists') } className={ `w--[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${ speciality === 'Tattoo Artists' ? 'bg-green-100 text-black' : '' }` }>Tattoo Artists</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {filter.map((item, index) => (
              <div onClick={ () => navigate(`/appointment/${ item._id }`) } className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={ index }>
                <img className='bg-green-50' src={ item.image } alt="img" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='size-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-800 text-lg font-medium'>{ item.firstName + " " + item.lastName }</p>
                  <p className='text-gray-600 text-sm'>{ item.speciality }</p>
                </div>
              </div>
            ))}
        </div>
      </div>  
      
      </div>
      <Footer />
    </div>
  )
}

export default Professionals