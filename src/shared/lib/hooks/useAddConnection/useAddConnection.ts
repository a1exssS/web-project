import { useEffect } from "react";
import { connection, startConnection } from "shared/api/socket";

interface useAddConnectionProps {
   name: string;
}

export const useAddConnection = ({ name }: useAddConnectionProps) => {

   useEffect(() => {
      startConnection()
      connection.on(name, (senderId, message, sentAt) => {
         console.log(`Message from ${senderId}: ${message} at ${sentAt}`);

      });

      //eslint-disable-next-line
   }, []);
};

