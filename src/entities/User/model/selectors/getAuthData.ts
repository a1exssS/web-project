import { StateSchema } from "app/providers/storeProvider/schema/StateSchema";

export const getAuthData = (state: StateSchema) => state.user.authData;