import { StateSchema } from "app/providers/storeProvider";

export const getChatMessage = (state: StateSchema) => state.chat?.text ?? ""