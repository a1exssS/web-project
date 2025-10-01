import { ButtonHTMLAttributes } from "react"
import { classNames } from "shared/lib/hooks/classNames/classNames";
import styles from './Button.module.scss'

export enum ButtonThemes {
   DEFAULT = 'default'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   theme?: ButtonThemes;
   className?: string;
}


export const Button = (props: ButtonProps) => {
   const {
      children,
      type = 'button',
      theme = ButtonThemes.DEFAULT,
      className,
      ...otherProps
   } = props

   return (
      <button
         type={type}
         className={classNames(styles.Button, {}, [className, styles[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   )
}
