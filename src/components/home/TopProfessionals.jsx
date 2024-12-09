import { useNavigate } from 'react-router-dom'
import { professionals } from '../../assets/assets'

const TopProfessionals = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
        <h1 className='text-3xl font-medium'>Find by Reputation</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive network of trusted professionals.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        { professionals.slice(0, 10).map((item, index) => (
          <div onClick={ () => { navigate(`/appointment/${ item._id }`); scrollTo(0,0) }} className='border border-primary-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={ index }>
            <img className='bg-blue-50 w-35 h-100' src={ item.profilePic } alt="" />
            <div className='p-4'>
              <div className={ `flex items-center gap-2 text-sm text-center ${ item.available ? 'text-green-500' : 'text-red-500'} text-green-500` }>
                <p className={ `w-2 h-2 ${ item.available ? 'bg-green-500': 'bg-red-500' }  rounded-full` }></p><p>{ item.available ? 'Available' : 'Not Available' }</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{ item.firstName + ' ' + item.lastName }</p>
              <p className='text-gray-600 text-sm'>{ item.speciality }</p>
            </div>
          </div>
        )) }
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button onClick={ () => { navigate('/professionals'); scrollTo(0, 0) } } className='bg-gray-600 text-white px-12 py-3 rounded-full mt-10 hover:bg-emerald-800 hover:text-white hover:scale-110 transition-all duration-500'>more</button>
      </div>
    </div>
  )
}

export default TopProfessionals