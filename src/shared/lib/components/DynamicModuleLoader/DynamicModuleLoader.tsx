import { useEffect } from "react"
import { useStore } from "react-redux"
import { Reducer } from "@reduxjs/toolkit"
import { AppStore, StateSchema, StateSchemaKeys } from "app/providers/storeProvider"

export type ReducersList = {
   [key in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[key]>>
}

interface DynamicModuleLoaderProps {
   reducers: ReducersList
   removeAfterUnmount?: boolean
   children: React.ReactNode
}

export const DynamicModuleLoader = ({
   reducers,
   removeAfterUnmount = true,
   children,
}: DynamicModuleLoaderProps) => {
   const store = useStore() as AppStore

   useEffect(() => {
      Object.entries(reducers).forEach(([key, reducer]) => {
         if (!store.reducerManager.getReducerMap()[key as StateSchemaKeys]) {
            store.dispatch({ type: `@INIT ${name} reducer` })
            store.reducerManager.add(key as StateSchemaKeys, reducer!)
         }
      })

      return () => {
         if (removeAfterUnmount) {
            Object.keys(reducers).forEach((key) => {
               store.dispatch({ type: `@REMOVE ${name} reducer` })
               store.reducerManager.remove(key as StateSchemaKeys)
            })
         }
      }
      // eslint-disable-next-line
   }, [])

   return <>{children}</>
}
