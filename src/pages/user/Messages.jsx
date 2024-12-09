import React from 'react'

import Background from '../../components/background/Background'
import Sidebar from '../../components/chat/sidebar/Sidebar'
import MessageContainer from '../../components/chat/messages/MessageContainer'

const Messages = () => {
  return (
    <Background>
      <div className='flex sm:h-[450px] md:h-[550px] bg-gray-400 bg-opacity-0 border border-gray-200 border-opacity-5 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
        overflow-hidden'>
        <Sidebar />
        <MessageContainer />
      </div>
    </Background>
  )
}

export default Messages