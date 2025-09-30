import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';

interface ChatProps {
   text: string;
   receiverId: string;
}

export const chatFetchSocket = createAsyncThunk<void, ChatProps, ThunkConfig<string>>(
   'chat/sendMessage',
   async ({ text, receiverId }, { rejectWithValue, extra }) => {
      try {

         await extra.connection.invoke('SendMessageToUser', receiverId, text);

      } catch (err) {
         console.log(err)
         return rejectWithValue('Ошибка при отправке сообщения через сокет');
      }
   }
);
