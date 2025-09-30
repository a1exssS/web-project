import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSchema } from "../types/ChatSchema";

const initialState: ChatSchema = {
   text: ''
}

const chatMessage = createSlice({
   name: 'chatMessage',
   initialState,
   reducers: {
      setText: (state, action: PayloadAction<string>) => {
         state.text = action.payload
      },
   },
})

export const { actions: chatMessageActions } = chatMessage
export const { reducer: chatMessageReducers } = chatMessage