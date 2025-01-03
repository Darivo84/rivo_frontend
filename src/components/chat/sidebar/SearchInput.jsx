import { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../../store/useConversation'
import useGetConversations from '../../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return;
    if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long")
		}

    // Search for firstName and lastName 
    const conversation = conversations.find((c) => {
      const searchParts = search.toLowerCase().split(" ")
      const firstNameMatch = searchParts.some((part) => c.firstName.toLowerCase().includes(part))
      const lastNameMatch = searchParts.some((part) => c.lastName.toLowerCase().includes(part))
      return firstNameMatch && lastNameMatch
    })
    // Search only for firstName
    // const conversation = conversations.find((c) => c.firstName.toLowerCase().includes(search.toLowerCase()))

    if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!")
  }

  return (
    <form onSubmit={ handleSubmit } className='flex items-center gap-2'>
      <input 
        type="text" 
        placeholder='Search…' 
        className='input input-bordered rounded-full' 
        value={ search }
				onChange={ (e) => setSearch(e.target.value) }
      />
      <button 
        type='submit' 
        className='btn btn-circle bg-green-500 text-white'
      >
        <IoSearchSharp  className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput