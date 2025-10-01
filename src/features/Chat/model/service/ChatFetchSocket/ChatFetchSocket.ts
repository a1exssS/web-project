import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { subscriptionName } from 'shared/api/socket';

interface ChatProps {
   text: string;
   receiverId: string;
}

export const chatFetchSocket = createAsyncThunk<void, ChatProps, ThunkConfig<string>>(
   'chat/sendMessage',
   async ({ text, receiverId }, { rejectWithValue, extra }) => {
      try {

         await extra.connection('chatHub')
            .invoke(subscriptionName.SEND_MESSAGE_TO_USER, text, receiverId)

      } catch (err) {
         console.log(err)
         return rejectWithValue('Ошибка при отправке сообщения через сокет');
      }
   }
);
