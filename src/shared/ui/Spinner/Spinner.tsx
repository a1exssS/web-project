import React from 'react'
import styles from './Spinner.module.scss'
import { classNames } from 'shared/lib/hooks/classNames/classNames'

interface SpinnerProps {
   className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
   return (
      <span className={classNames(styles.Loader, {}, [className])}></span>
   )
}
