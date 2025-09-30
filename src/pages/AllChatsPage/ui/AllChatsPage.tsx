import React, { memo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchAllUsers } from '../model/service/fetchAllUsers'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { getAllChatData } from '../model/selector/allChatData'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { allChatsReducers } from '../model/slice/allChatsSlice'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

const initReducer: ReducersList = {
   allChats: allChatsReducers
}

const AllChatsPage = memo(() => {

   const dispatch = useAppDispatch()
   const allUsers = useSelector(getAllChatData)
   useInitialEffect(() => {
      dispatch(fetchAllUsers())
   })

   return (
      <DynamicModuleLoader reducers={initReducer}>
         <div>
            asdfaef
            {allUsers.map((item) => {
               return (
                  <AppLink to={RoutePaths.chat_with_user + item.id} key={item.username}>
                     <div>{item.id}</div>
                     <br />
                     <div>{item.username}</div>
                  </AppLink>)
            })}

         </div>
      </DynamicModuleLoader>
   )
})

export default AllChatsPage