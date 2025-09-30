import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/storeProvider/schema/StateSchema'
import { allChatsActions } from '../slice/allChatsSlice'
import { AllChatsSchema } from '../types/AllChatsSchema'

export const fetchAllUsers = createAsyncThunk<AllChatsSchema, void, ThunkConfig<string>>(
   'users/fetchAllUsers',
   async (data, { dispatch, extra, rejectWithValue }) => {
      try {
         const response = await extra.api.get('/v1/users')

         if (!response.data) {
            throw new Error()
         }

         dispatch(allChatsActions.setAllChats(response.data))

         return response.data
      } catch (e) {
         rejectWithValue('error')
      }
   }
)