import React, { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig'
import { RequireAuth } from './RequireAuth'

export const AppRouters = () => {

   const renderRoutes = useCallback((route: AppRouteProps) => {
      return (
         <Route
            element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
            path={route.path}
            key={route.path}
         />
      )
   }, [])

   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            {Object.values(routeConfig).map(renderRoutes)}
         </Routes>
      </Suspense>
   )
}
