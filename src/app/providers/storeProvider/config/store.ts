import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { AppStore, ExtraThunkArg, StateSchema } from '../schema/StateSchema'
import { reducerCounter } from 'entities/User/model/slice/userSlice'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { useStore } from 'react-redux'


export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>
) {
   const extraArgs: ExtraThunkArg = {
      api: $api,
   }

   const rootReducers = {
      ...asyncReducers,
      user: reducerCounter,

   }

   const reducerManager = createReducerManager(rootReducers)

   const store = configureStore({
      reducer: reducerManager.reduce,
      preloadedState: initialState,
      devTools: __IS_DEV__,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            thunk: {
               extraArgument: extraArgs,
            },
         }),
   }) as AppStore

   return store
}
