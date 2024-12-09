import { Link } from 'react-router-dom'
import { speciality } from '../../assets/assets'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='#speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive network of trusted medical practitioners, schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-hidden'>
        { speciality.map((item, index) => (
          <Link onClick={ () => scrollTo(0, 0) } className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={ index } to={ `/professionals/${ item.speciality }` }>
            <img className='w-16 sm:w-24 mb-2 rounded-full' src={ item.image } alt="" />
            <p>{ item.speciality }</p>
          </Link>
        )) }
      </div>
    </div>
  )
}

export default SpecialityMenu