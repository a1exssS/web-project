import React, { InputHTMLAttributes, useCallback } from 'react'
import { classNames } from 'shared/lib/hooks/classNames/classNames';
import styles from './Input.module.scss'

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
      innerPlaceholder,
      type = 'text'
   } = props

   const onChangeEvent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
         onChange(e.target.value)
      }
   }, [onChange])

   return (
      <input
         placeholder={innerPlaceholder}
         onChange={onChangeEvent}
         type={type}
         value={value}
         className={classNames(styles.Input, {}, [className, theme && styles[theme]])}
      />
   )
}
