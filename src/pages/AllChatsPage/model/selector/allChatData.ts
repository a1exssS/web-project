import { StateSchema } from "app/providers/storeProvider";

export const getAllChatData = (state: StateSchema) => state.allChats?.users || []