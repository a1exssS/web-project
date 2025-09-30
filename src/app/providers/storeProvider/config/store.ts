import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ExtraThunkArg } from '../schema/StateSchema'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { userReducers } from 'entities/User'
import { connection } from 'shared/api/socket'

export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>
) {
   const extraArgs: ExtraThunkArg = {
      api: $api,
      connection: connection,
   }

   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      user: userReducers,
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
   })

   return {
      ...store,
      reducerManager,
   }
}
