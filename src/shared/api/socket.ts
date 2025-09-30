import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export const connection = new HubConnectionBuilder()
   .withUrl(__SOCKET__ + "chatHub")
   .configureLogging(LogLevel.Debug)
   .withAutomaticReconnect()
   .build();

export const startConnection = async () => {
   try {
      await connection.start();
      console.log("Connected to SignalR hub");
   } catch (err) {
      console.error("Connection failed: ", err);
   }
};

