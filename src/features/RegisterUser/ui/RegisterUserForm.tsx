import React, { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { registerUserActions, registerUserReducers } from '../model/slice/registerSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getRegisterAge, getRegisterFirstName, getRegisterPassword, getRegisterUsername } from '../model/selector/registerUserData'
import { registerUser } from '../model/service/registerUsername/registerUsername'
import { Input, InputThemes } from 'shared/ui/Input/Input'
import styles from './RegisterUserForm.module.scss'

const initReducer: ReducersList = {
   register: registerUserReducers
}

export const RegisterUserForm = memo(() => {

   const dispatch = useAppDispatch()
   const username = useSelector(getRegisterUsername)
   const password = useSelector(getRegisterPassword)
   const firstName = useSelector(getRegisterFirstName)
   const age = useSelector(getRegisterAge)

   const onChangeUsername = useCallback((value: string) => {
      dispatch(registerUserActions.setUsername(value))
   }, [dispatch])
   const onChangePassword = useCallback((value: string) => {
      dispatch(registerUserActions.setPassword(value))
   }, [dispatch])
   const onChangeAge = useCallback((value: string) => {
      dispatch(registerUserActions.setAge(Number(value)))
   }, [dispatch])
   const onChangeFirstName = useCallback((value: string) => {
      dispatch(registerUserActions.setFirstName(value))
   }, [dispatch])

   const onSubmit = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(registerUser({
         age, firstName, password, username
      }))
   }, [dispatch, age, firstName, password, username])

   return (
      <DynamicModuleLoader reducers={initReducer}>
         <form onSubmit={onSubmit} className={styles.Form}>
            <Input
               innerPlaceholder='Username'
               theme={InputThemes.OUTLINE_CIRCLED}
               onChange={onChangeUsername}
               value={username}
            />
            <Input
               innerPlaceholder='Password'
               theme={InputThemes.OUTLINE_CIRCLED}
               onChange={onChangePassword}
               value={password}
            />
            <Input
               innerPlaceholder='First Name'
               theme={InputThemes.OUTLINE_CIRCLED}
               onChange={onChangeFirstName}
               value={firstName}
            />
            <Input
               innerPlaceholder='Age'
               theme={InputThemes.OUTLINE_CIRCLED}
               onChange={onChangeAge}
               value={String(age)}
            />
            <Button type='submit'>Отправить</Button>
         </form>
      </DynamicModuleLoader>
   )
})