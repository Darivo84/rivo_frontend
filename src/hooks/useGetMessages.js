import { useEffect, useState } from 'react'
import useConversation from '../store/useConversation'
import toast from 'react-hot-toast'

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    setLoading(true)

    try {
      const res = fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`)
        const data = res.json()
        if (data.error) throw new Error(data.error)
        setMessages(data)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [selectedConversation?._id, setMessages])

  return { messages, loading }
}

export default useGetMessages