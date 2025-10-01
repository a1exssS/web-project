import { StateSchema } from "app/providers/storeProvider";

export const getLoginPhone = (state: StateSchema) => state.login?.phone ?? ''
export const getLoginPassword = (state: StateSchema) => state.login?.password ?? ''
export const getLoginIsLoading = (state: StateSchema) => state.login?.isLoading || false
export const getLoginError = (state: StateSchema) => state.login?.error || ''