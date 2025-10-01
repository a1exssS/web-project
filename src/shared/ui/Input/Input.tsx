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
   outerPlaceholder?: string;
   innerPlaceholder?: string;
}

export const Input = (props: InputProps) => {

   const {
      className,
      onChange,
      value,
      theme,
      outerPlaceholder,
      innerPlaceholder = '',
      type = 'text'
   } = props

   const onChangeEvent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
         onChange(e.target.value)
      }
   }, [onChange])

   return (
      <label className={classNames(styles.customField, {}, [theme && styles[theme], className])}>
         <input
            onChange={onChangeEvent}
            type={type}
            value={value}
            placeholder={innerPlaceholder}
         />
         <span className={styles.Placeholder}>{outerPlaceholder}</span>
         <span className={styles.Border}></span>
      </label>

   )
}
