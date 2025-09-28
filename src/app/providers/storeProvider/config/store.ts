import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { AppStore, ExtraThunkArg, StateSchema } from '../schema/StateSchema'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { userReducers } from 'entities/User'


export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>
): AppStore {
   const extraArgs: ExtraThunkArg = {
      api: $api,
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
   }) as AppStore

   store.reducerManager = reducerManager

   return store
}
