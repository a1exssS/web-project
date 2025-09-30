import { createSlice } from "@reduxjs/toolkit";
import { AllChatsSchema } from "../types/AllChatsSchema";

const initialState: AllChatsSchema = {
}

const allChatsSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setAllChats: (state, action) => {
         state.users = action.payload
      },
   },
})

export const { actions: allChatsActions } = allChatsSlice
export const { reducer: allChatsReducers } = allChatsSlice