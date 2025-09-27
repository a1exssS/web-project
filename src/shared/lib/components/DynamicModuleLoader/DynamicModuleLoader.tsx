import { Reducer } from '@reduxjs/toolkit';
import { StateSchema, StateSchemaKeys } from 'app/providers/storeProvider';
import React, { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppStore } from 'shared/lib/hooks/useAppStore/useAppStore';

export type ReducersList = {
   [action in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[action]>>
}

interface DynamicModuleLoaderProps {
   children: React.ReactNode;
   reducer: ReducersList
}

export const DynamicModuleLoader = ({ children, reducer }: DynamicModuleLoaderProps) => {

   const dispatch = useAppDispatch()
   const store = useAppStore()

   useEffect(() => {

   }, [])

   return (
      <>
         {children}
      </>
   )
}
