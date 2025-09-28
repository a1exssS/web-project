import { StateSchema } from "app/providers/storeProvider";

export const getRegisterUsername = (state: StateSchema) => state.register?.username ?? ''
export const getRegisterPassword = (state: StateSchema) => state.register?.password ?? ''
export const getRegisterAge = (state: StateSchema) => state.register?.age ?? 0
export const getRegisterFirstName = (state: StateSchema) => state.register?.firstName ?? ''