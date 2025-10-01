import React, { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { Input, InputThemes } from 'shared/ui/Input/Input'
import styles from './RegisterUserForm.module.scss'
import { refreshTokenFetch } from 'entities/User/model/services/refreshTokenFetch/refreshTokenFetch'
import { loginUserActions, loginUserReducers } from '../model/slice/loginSlice'
import { getLoginPassword, getLoginPhone } from '../model/selector/loginUserData'
import { loginUser } from '../model/service/loginUser/loginUser'

const initReducer: ReducersList = {
   login: loginUserReducers
}

export const LoginUserForm = memo(() => {

   const dispatch = useAppDispatch()
   const password = useSelector(getLoginPassword)
   const phone = useSelector(getLoginPhone)

   const onChangePassword = useCallback((value: string) => {
      dispatch(loginUserActions.setPassword(value))
   }, [dispatch])

   const onChangePhone = useCallback((value: string) => {
      dispatch(loginUserActions.setPhone(value))
   }, [dispatch])

   const onSubmit = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(loginUser({
         password,
         phoneNumber: phone
      }))
   }, [dispatch, password, phone])

   return (
      <DynamicModuleLoader reducers={initReducer}>
         <form onSubmit={onSubmit} className={styles.Form}>
            <Input
               outerPlaceholder='Телефон'
               theme={InputThemes.OUTLINE_CIRCLED}
               onChange={onChangePhone}
               value={phone}
            />
            <Input
               outerPlaceholder='Пароль'
               theme={InputThemes.OUTLINE_CIRCLED}
               onChange={onChangePassword}
               value={password}
            />

            <Button type='submit'>Отправить</Button>
         </form>
         <Button type='button' onClick={() => dispatch(refreshTokenFetch())}>Обновить</Button>
      </DynamicModuleLoader>
   )
})