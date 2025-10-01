import { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel } from "@microsoft/signalr";


export enum connectionsName {
   CHAT = 'chatHub'
}
export enum subscriptionName {
   SEND_MESSAGE_TO_USER = 'SendMessageToUser'
}


export type connectionsNameList = `${connectionsName}`;
export type subscriptionNameList = `${subscriptionName}`;

const connections: Record<string, HubConnection> = {};

export function getOrCreateConnection(name: connectionsNameList): HubConnection {
   if (!connections[name]) {
      connections[name] = new HubConnectionBuilder()
         .withUrl(__SOCKET__ + name)
         .configureLogging(LogLevel.Debug)
         .withAutomaticReconnect()
         .build();
   }
   return connections[name];
}

export async function startConnection(name: connectionsNameList) {
   const connection = getOrCreateConnection(name);
   if (connection.state === HubConnectionState.Disconnected) {
      await connection.start();
   }
   return connection;
}

export async function stopConnection(name: connectionsNameList) {
   const connection = connections[name];
   if (connection && connection.state !== HubConnectionState.Disconnected) {
      await connection.stop();
   }
}
