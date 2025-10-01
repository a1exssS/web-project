import React, { useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Input, InputThemes } from 'shared/ui/Input/Input'
import { chatMessageActions, chatMessageReducers } from '../model/slice/chatSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { chatFetchSocket } from '../model/service/ChatFetchSocket/ChatFetchSocket'
import { useSelector } from 'react-redux'
import { getChatMessage } from '../model/selector/chatMessageData'
import { Button } from 'shared/ui/Button/Button'
import { DynamicConnection } from 'shared/lib/components/DynamicConnection/DynamicConnection'

const initReducer: ReducersList = {
   chat: chatMessageReducers
}

interface ChatFormProp {
   receiverId: string;
}

export const ChatForm = ({ receiverId }: ChatFormProp) => {
   const dispatch = useAppDispatch()
   const text = useSelector(getChatMessage)

   const onChangePhone = useCallback((value: string) => {
      dispatch(chatMessageActions.setText(value))
   }, [dispatch])

   const onSubmit = useCallback(() => {
      dispatch(chatFetchSocket({ text, receiverId }))
   }, [dispatch, text, receiverId])

   return (
      <DynamicModuleLoader reducers={initReducer}>
         <DynamicConnection
            subscriptionName='SendMessageToUser'
            connectionName='chatHub'
            handler={() => { }}
            removeAfterUnmount={true}
         >
            <div>
               <Input
                  outerPlaceholder='Text'
                  theme={InputThemes.OUTLINE_CIRCLED}
                  onChange={onChangePhone}
                  value={text}
               />
               <Button onClick={() => onSubmit()}>Отправить</Button>
            </div>
         </DynamicConnection>
      </DynamicModuleLoader>
   )
}
