import {
   AnyAction,
   CombinedState,
   Reducer,
   ReducersMapObject,
   EnhancedStore
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { Counter } from "entities/User/model/types/UserSchema";

export interface StateSchema {
   user: Counter
}

export interface ExtraThunkArg {
   api: AxiosInstance;
}

export interface ThunkConfig<T> {
   rejectValue: T;
   state: StateSchema;
   extra: ExtraThunkArg;
}

export type StateSchemaKeys = keyof StateSchema

export type Reducers = Record<StateSchemaKeys, Reducer>

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKeys, reducer: Reducer) => void;
   remove: (key: StateSchemaKeys) => void;
}

export interface AppStore extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager
}

export type AppDispatch = AppStore['dispatch']
