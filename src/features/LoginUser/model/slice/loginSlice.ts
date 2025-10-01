import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
   password: '',
   phone: '',
   isLoading: false
}

const loginUser = createSlice({
   name: 'loginUser',
   initialState,
   reducers: {
      setPassword: (state, action: PayloadAction<string>) => {
         state.password = action.payload
      },
      setPhone: (state, action: PayloadAction<string>) => {
         state.phone = action.payload
      },
   },
})

export const { actions: loginUserActions } = loginUser
export const { reducer: loginUserReducers } = loginUser