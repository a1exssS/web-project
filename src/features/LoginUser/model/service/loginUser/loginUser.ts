import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/storeProvider/schema/StateSchema'
import { User } from 'entities/User'

interface registerProps {
   password: string;
   phoneNumber: string;
}

export const loginUser = createAsyncThunk<User, registerProps, ThunkConfig<string>>(
   'users/loginUser',
   async (data, { dispatch, extra, rejectWithValue }) => {
      try {
         const response = await extra.api.post('/v1/auth/login', data)

         if (!response.data) {
            throw new Error()
         }

         return response.data
      } catch (e) {
         rejectWithValue('error')
      }
   }
)