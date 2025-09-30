import React, { InputHTMLAttributes, useCallback } from 'react'
// import { classNames } from 'shared/lib/hooks/classNames/classNames';
import styles from './Input.module.scss'
import { classNames } from 'shared/lib/hooks/classNames/classNames';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'placeholder'>

export enum InputThemes {
   OUTLINE_CIRCLED = 'outline_circled'
}

interface InputProps extends InputHTMLProps {
   className?: string;
   onChange?: (value: string) => void;
   value?: string;
   theme?: InputThemes;
   innerPlaceholder?: string;
}

export const Input = (props: InputProps) => {

   const {
      className,
      onChange,
      value,
      theme,
      required,
      innerPlaceholder,
      type = 'text'
   } = props

   const onChangeEvent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
         onChange(e.target.value)
      }
   }, [onChange])

   return (
      <label className={styles.inputUnderlined}>
         <input
            required={required}
            placeholder={innerPlaceholder}
            onChange={onChangeEvent}
            type={type}
            value={value}
            className={classNames(styles.Input, {}, [className, theme && styles[theme]])}
         />
         <span className={styles.inputLabel}>Normal</span>
         <span className={styles.inputHelper}>Helper Text</span>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><circle cx="15.5" cy="9.5" r="1.5" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" /></svg>
      </label>

   )
}
