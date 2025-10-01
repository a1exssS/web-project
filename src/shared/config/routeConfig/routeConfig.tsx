import { RouteProps } from "react-router-dom"
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from "pages/NotFoundPage";
import { AllChatsPage } from "pages/AllChatsPage";
import { ChatWithUserPage } from "pages/ChatWithUserPage";

export type AppRouteProps = RouteProps & {
   authOnly?: boolean;
}

export enum RouteNames {
   MAIN = 'main',
   NOT_FOUND = 'not_found',
   ALL_CHATS = 'all_chats',
   CHAT_WITH_USER = 'chat_with_user'
}

export const RoutePaths: Record<RouteNames, string> = {
   main: '/',
   all_chats: '/all-chats',
   chat_with_user: '/chat/',
   not_found: '*'
}

export const routeConfig: Record<RouteNames, AppRouteProps> = {
   main: {
      path: RoutePaths.main,
      element: <MainPage />,
   },
   all_chats: {
      path: RoutePaths.all_chats,
      element: <AllChatsPage />,
      authOnly: true,
   },
   chat_with_user: {
      path: RoutePaths.chat_with_user + ':id',
      element: <ChatWithUserPage />,
      authOnly: true,
   },
   not_found: {
      path: RoutePaths.not_found,
      element: <NotFoundPage />,
   }
} 