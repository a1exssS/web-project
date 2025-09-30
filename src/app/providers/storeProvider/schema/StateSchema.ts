import {
   AnyAction,
   CombinedState,
   Reducer,
   ReducersMapObject,
   EnhancedStore
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { createReducerManager } from "../config/reducerManager";
import { UserSchema } from "entities/User";
import { RegisterSchema } from "features/RegisterUser";
import { createReduxStore } from "../config/store";
import { HubConnection } from "@microsoft/signalr";
import { AllChatsSchema } from "pages/AllChatsPage";
import { ChatSchema } from "features/Chat/model/types/ChatSchema";

export interface StateSchema {
   user: UserSchema;
   register?: RegisterSchema;
   chat?: ChatSchema;
   allChats?: AllChatsSchema;
}

export interface ExtraThunkArg {
   api: AxiosInstance;
   connection: HubConnection;
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
   reducerManager: ReturnType<typeof createReducerManager>
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
