import { StateSchema } from "app/providers/storeProvider/schema/StateSchema";

export const getValue = (state: StateSchema) => state.user.value || 0 