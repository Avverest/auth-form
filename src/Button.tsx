import { ButtonHTMLAttributes, FC } from 'react'
import { cls } from './cls'
import styles from './Button.module.css'

type Variant = 'clear' | 'outline' | 'default'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export const Button: FC<ButtonProps> = props => {
  const {
    children,
    className = '',
    type,
    variant = 'default',
    ...passedProps
  } = props

  return (
    <button
      {...passedProps}
      type={type ?? 'submit'}
      className={cls(styles.button, styles[variant], className)}
    >
      {children}
    </button>
  )
}
