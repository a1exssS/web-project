import React from 'react'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import styles from './PageLoader.module.scss'

export const PageLoader = () => {
   return (
      <section className={styles.PageLoader}>
         <Spinner className={styles.PageSpiner} />
      </section>
   )
}

