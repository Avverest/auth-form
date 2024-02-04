import { CSSProperties, FC, HTMLProps } from 'react'
import classes from './AuthForm.module.css'
import { cls } from './cls'
import { Button } from './Button'
import { Link } from '@tanstack/react-router'

const Gap = {
  1: '10px',
  2: '20px',
  3: '30px',
  4: '40px',
} as const

type Props = Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> & {
  title: string
  styles?: CSSProperties
  onSubmit?: () => void
  gap?: keyof typeof Gap
}

export const AuthForm: FC<Props> = props => {
  const {
    children,
    title,
    gap,
    styles,
    onSubmit = () => null,
    className = '',
    ...passedProps
  } = props

  return (
    <div className={classes.wrapper}>
      <form
        {...passedProps}
        className={cls(classes.form, [className])}
        onClick={() => null}
        onSubmit={e => {
          e.preventDefault()
          onSubmit()
        }}
        style={{
          gap: gap ? Gap[gap] : undefined,
          ...styles,
        }}
      >
        <h2>{title}</h2>
        {children}
      </form>
    </div>
  )
}
