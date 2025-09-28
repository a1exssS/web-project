import { RouteProps } from "react-router-dom"
import { MainPage } from 'pages/MainPage'

export type AppRouteProps = RouteProps & {
   authOnly?: boolean;
}

export enum RouteNames {
   MAIN = 'main',
   NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<RouteNames, string> = {
   main: '/',

   not_found: '*'
}

export const routeConfig: Record<RouteNames, AppRouteProps> = {
   main: {
      path: RoutePaths.main,
      element: <MainPage />,
   },
   not_found: {
      element: <div>asdawd </div>,
      path: RoutePaths.not_found
   }
} 