import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/storeProvider/schema/StateSchema'
import { User } from 'entities/User'

interface registerProps {
   password: string;
   username: string;
   age: number;
   firstName: string;
}

export const registerUser = createAsyncThunk<User, registerProps, ThunkConfig<string>>(
   'users/registerUser',
   async (data, { dispatch, extra, rejectWithValue }) => {
      try {
         const response = await extra.api.post('/v1/auth/register', data)

         if (!response.data) {
            throw new Error()
         }

         return response.data
      } catch (e) {
         rejectWithValue('error')
      }
   }
)