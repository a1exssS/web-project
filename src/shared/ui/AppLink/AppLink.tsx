import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/hooks/classNames/classNames'
import styles from './AppLink.module.scss'

interface AppLink extends LinkProps {
   children: React.ReactNode;
   className?: string;
}

export const AppLink = ({ to, children, className, ...otherProps }: AppLink) => {
   return (
      <Link to={to} {...otherProps} className={classNames(styles.AppLink, {}, [className])}>
         {children}
      </Link>
   )
}
