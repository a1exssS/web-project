import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/UserSchema";

const initialState: UserSchema = {
   _inited: false,
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setAuthData: (state, action) => {
         state.authData = action.payload
      },
      isInited: (state) => {
         if (state.authData?.id) {
            state._inited = true
         } else {
            state._inited = false
         }
      }
   },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducers } = userSlice