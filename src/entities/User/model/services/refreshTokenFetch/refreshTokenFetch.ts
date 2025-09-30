import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/storeProvider/schema/StateSchema'
import { User, userActions } from 'entities/User'

export const refreshTokenFetch = createAsyncThunk<User, void, ThunkConfig<string>>(
   'users/refreshTokenFetch',
   async (data, { dispatch, extra, rejectWithValue }) => {
      try {
         const response = await extra.api.post('/v1/auth', data)

         if (!response.data) {
            throw new Error()
         }

         dispatch(userActions.setAuthData(response.data))

         return response.data
      } catch (e) {
         rejectWithValue('error')
      }
   }
)