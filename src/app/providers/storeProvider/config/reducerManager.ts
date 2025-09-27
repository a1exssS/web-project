import { Action, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { Reducers, StateSchema, StateSchemaKeys } from "../schema/StateSchema"

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>) => {
   const reducers: Partial<Reducers> = { ...initialReducers }

   let combinedReducer = combineReducers(reducers as Reducers)

   let keysToRemove: StateSchemaKeys[] = []

   return {
      getReducerMap: () => reducers,

      reduce: (state: DeepPartial<StateSchema> = {}, action: Action) => {
         if (keysToRemove.length > 0) {
            state = { ...state }
            for (const key of keysToRemove) {
               delete state[key]
            }
            keysToRemove = []
         }

         return combinedReducer(state as StateSchema, action)
      },

      add: (key: StateSchemaKeys, reducer: Reducer) => {
         if (!key || reducers[key]) return

         reducers[key] = reducer
         combinedReducer = combineReducers(reducers as Reducers)
      },

      remove: (key: StateSchemaKeys) => {
         if (!key || !reducers[key]) return

         delete reducers[key]
         keysToRemove.push(key)

         combinedReducer = combineReducers(reducers as Reducers)
      }
   }
}
