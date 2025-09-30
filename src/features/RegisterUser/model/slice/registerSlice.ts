import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterSchema } from "../types/RegisterSchema";

const initialState: RegisterSchema = {
   age: 0,
   username: '',
   password: '',
   firstName: '',
   lastName: '',
   phone: '',
   isLoading: false
}

const registerUser = createSlice({
   name: 'registerUser',
   initialState,
   reducers: {
      setFirstName: (state, action: PayloadAction<string>) => {
         state.firstName = action.payload
      },
      setLastName: (state, action: PayloadAction<string>) => {
         state.lastName = action.payload
      },
      setPassword: (state, action: PayloadAction<string>) => {
         state.password = action.payload
      },
      setAge: (state, action: PayloadAction<number>) => {
         state.age = action.payload
      },
      setUsername: (state, action: PayloadAction<string>) => {
         state.username = action.payload
      },
      setPhone: (state, action: PayloadAction<string>) => {
         state.phone = action.payload
      },
   },
})

export const { actions: registerUserActions } = registerUser
export const { reducer: registerUserReducers } = registerUser