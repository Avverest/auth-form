import { FC, HTMLProps, ReactNode } from 'react'
import { cls } from './cls'
import styles from './Input.module.css'

export type InputProps = HTMLProps<HTMLInputElement> & {
  icon?: ReactNode
  label?: string
  onIconClick?: () => void
  isError?: boolean
  errorText?: string
}

export const Input: FC<InputProps> = props => {
  const {
    className = '',
    placeholder,
    icon,
    label,
    onIconClick = () => null,
    required,
    isError = false,
    errorText,
    value = '',
    onChange = () => null,
    ...passedProps
  } = props

  return (
    <label
      className={cls(styles.wrapper, className, { [styles.error]: isError })}
    >
      {label ? <span className={styles.label}>{label}</span> : ''}
      <span data-input>
        <input
          {...passedProps}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={styles.input}
          required={required}
        />
        {icon && (
          <button
            className={styles.icon}
            onClick={e => {
              e.preventDefault()
              onIconClick()
            }}
          >
            {icon}
          </button>
        )}
      </span>
      {isError && <span data-error>{errorText}</span>}
    </label>
  )
}
