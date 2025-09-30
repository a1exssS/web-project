import { ChatForm } from 'features/Chat';
import React from 'react'
import { useParams } from 'react-router-dom'

const ChatWithUserPage = () => {

   const { id } = useParams<{ id: string; }>()
   return (
      <div>
         Вы в чате с {id}

         <ChatForm receiverId={id ? id : ''} />
      </div>
   )
}
export default ChatWithUserPage