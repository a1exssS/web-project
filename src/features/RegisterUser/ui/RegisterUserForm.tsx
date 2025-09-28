import React, { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { registerUserActions, registerUserReducers } from '../model/slice/registerSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getRegisterAge, getRegisterFirstName, getRegisterPassword, getRegisterUsername } from '../model/selector/registerUserData'
import { registerUser } from '../model/service/registerUsername/registerUsername'

const rootReducer: ReducersList = {
   register: registerUserReducers
}

export const RegisterUserForm = memo(() => {

   const dispatch = useAppDispatch()
   const username = useSelector(getRegisterUsername)
   const password = useSelector(getRegisterPassword)
   const firstName = useSelector(getRegisterFirstName)
   const age = useSelector(getRegisterAge)

   const onChangeUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(registerUserActions.setUsername(e.target.value))
   }, [dispatch])
   const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(registerUserActions.setPassword(e.target.value))
   }, [dispatch])
   const onChangeAge = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(registerUserActions.setAge(Number(e.target.value)))
   }, [dispatch])
   const onChangeFirstName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(registerUserActions.setFirstName(e.target.value))
   }, [dispatch])

   const onSubmit = useCallback(async () => {
      const result = await dispatch(registerUser({
         age, firstName, password, username
      }))
      if (registerUser.fulfilled.match(result)) {
         console.log('Успешно:', result.payload)
      } else {
         console.log('Ошибка:', result.payload)
      }
   }, [dispatch, age, firstName, password, username])

   return (
      <DynamicModuleLoader reducers={rootReducer}>
         <input type="text" onChange={onChangeUsername} value={username} />
         <input type="text" onChange={onChangePassword} value={password} />
         <input type="text" onChange={onChangeFirstName} value={firstName} />
         <input type="text" onChange={onChangeAge} value={age} />
         <Button onClick={onSubmit}>Отправить</Button>
      </DynamicModuleLoader>
   )
})