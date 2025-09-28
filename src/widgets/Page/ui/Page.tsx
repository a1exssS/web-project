import React, { memo } from 'react'
import { classNames } from 'shared/lib/hooks/classNames/classNames'

interface PageProp {
   children: React.ReactNode
   className?: string;
}

export const Page = memo(({ className, children }: PageProp) => {
   return (
      <section className={'section'}>
         <div className={classNames('container', {}, [className])}>
            {children}
         </div>
      </section>
   )
})
