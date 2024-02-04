import { FC } from 'react'
import { Input, InputProps } from './Input'

type EmailProps = Omit<InputProps, 'type'>

export const Email: FC<EmailProps> = props => {
  const { label, placeholder, ...passedProps } = props

  return (
    <Input
      {...passedProps}
      type='email'
      label={label ?? 'Адрес почты'}
      placeholder={placeholder ?? 'something@some.com'}
    />
  )
}
