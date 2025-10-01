import { useEffect } from "react";
import { connectionsNameList, startConnection, stopConnection, subscriptionNameList } from "shared/api/socket";

interface UseAddConnectionProps {
   children: React.ReactNode
   subscriptionName: subscriptionNameList;
   connectionName: connectionsNameList;
   handler: (...args: any[]) => void;
   removeAfterUnmount?: boolean;
}

export const DynamicConnection = ({
   subscriptionName,
   connectionName,
   removeAfterUnmount,
   handler,
   children
}: UseAddConnectionProps) => {
   useEffect(() => {
      let mounted = true;

      startConnection(connectionName).then((connection) => {
         if (mounted) {
            connection.on(subscriptionName, handler);
         }
      });

      return () => {
         if (removeAfterUnmount) {
            mounted = false;
            stopConnection(connectionName);
         }
      };
      // eslint-disable-next-line
   }, []);

   return <>{children}</>
};
