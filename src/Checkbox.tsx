import { FC } from 'react'
import { Input, InputProps } from './Input'
import { cls } from './cls'
import styles from './Checkbox.module.css'

type Checkbox = Omit<InputProps, 'type'>

export const Checkbox: FC<InputProps> = props => {
  const { className = '', ...passedProps } = props

  return (
    <Input
      {...passedProps}
      className={cls(styles.checkbox, className)}
      type='checkbox'
    />
  )
}
