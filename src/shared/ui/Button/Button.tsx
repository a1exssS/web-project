import { ButtonHTMLAttributes } from "react"
import { classNames } from "shared/lib/hooks/classNames/classNames";
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   className?: string;
}

export const Button = (props: ButtonProps) => {
   const {
      children,
      type = 'button',
      className,
      ...otherProps
   } = props
   return (
      <button
         type={type}
         className={classNames(styles.Button, {}, [className])}
         {...otherProps}
      >
         {children}
      </button>
   )
}
