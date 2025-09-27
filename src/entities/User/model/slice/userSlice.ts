import { createSlice } from "@reduxjs/toolkit";
import { Counter } from "../types/UserSchema";

const initialState: Counter = {
   value: 0
}

const counterSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      increaceValue: (state) => {
         state.value += 1
      }
   },
})

export const { actions: actionsCounter } = counterSlice
export const { reducer: reducerCounter } = counterSlice