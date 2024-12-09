import { useState } from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import toast from 'react-hot-toast'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [query, setQuery] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('email', email)
      formData.append('query', query)

      if (formData.success) {
        toast.success('Thank you for your query. Someone from our office will be in touch very soon!')
        setName('')
        setEmail('')
        setPhone('')
        setQuery('')
      } else {
        toast.error('Something went wrong. Do not worry, we are on this.')
      }
      
    } catch (error) {
      toast.error('Sorry, seems like we have a form issue...')
    }
  }

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='mx-4 sm:mx-[10%]'>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={ assets.contact_img } alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <form onSubmit={ onSubmitHandler }>
              <div className='w-full flex-1 flex flex-col gap-1 mt-1'>
                <p>Full name</p>
                <input
                  onChange={ (e) => setName(e.target.value) } 
                  value={ name }
                  className='border rounded px-3 py-2'
                  type="text" 
                  placeholder='Name' 
                />
              </div>
              <div className='w-full flex-1 flex flex-col gap-1 mt-1'>
                <p className='mt-1'>Phone number</p>
                <input
                  onChange={ (e) => setPhone(e.target.value) } 
                  value={ phone }
                  className='border rounded px-3 py-2'
                  type="text" 
                  placeholder='Phone' 
                />
              </div>
              <div className='w-full flex-1 flex flex-col gap-1 mt-1'>
                <p className='mt-1'>Email</p>
                <input
                  onChange={ (e) => setEmail(e.target.value) } 
                  value={ email }
                  className='border rounded px-3 py-2'
                  type="text" 
                  placeholder='Email' 
                />
              </div>
              <div className='w-full flex-1 flex flex-col gap-1 mt-1'>
                <p className='mt-4 mb-2'>Query</p>
                <textarea 
                  onChange={ (e) => setQuery(e.target.value) } 
                  value={ query }
                  className='w-full px-4 pt-2 border rounded' 
                  placeholder='Tell let us know your query' 
                  row={ 5 } 
                />
              </div>
            </form>
            <button type='submit' className='w-full border rounded border-green-500 px-8 py-2 text-sm text-green-500 hover:bg-green-500 hover:text-white transition-all duration-500'>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact