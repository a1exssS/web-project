import { getAuthData } from 'entities/User'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
   children: React.ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {

   const location = useLocation()
   const isAuth = useSelector(getAuthData)

   if (!isAuth) {
      return <Navigate to={RoutePaths.main} state={{ from: location }} replace />
   }

   return <>{children}</>
}
