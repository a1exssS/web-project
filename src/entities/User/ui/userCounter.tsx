import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValue } from '../model/selectors/counter'
import { actionsCounter } from '../model/slice/userSlice'

export const UserCounter = () => {
   const dispatch = useDispatch()
   const value = useSelector(getValue)

   const increase = useCallback(() => {
      dispatch(actionsCounter.increaceValue())
   }, [dispatch])

   return (
      <div>
         <button onClick={increase}>click</button>
         {value}
      </div>
   )
}
