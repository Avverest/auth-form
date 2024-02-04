import { FC, useState } from 'react'
import { Input, InputProps } from './Input'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

export const Password: FC<InputProps> = props => {
  const { label, placeholder, errorText, ...passedProps } = props
  const [isPass, setIsPass] = useState(false)

  return (
    <Input
      {...passedProps}
      label={label ?? 'Пароль'}
      type={isPass ? 'text' : 'password'}
      placeholder={placeholder ?? 'Введите пароль'}
      icon={
        isPass ? (
          <EyeInvisibleFilled title='Скрыть пароль' />
        ) : (
          <EyeFilled title='Показать пароль' />
        )
      }
      onIconClick={() => setIsPass(!isPass)}
      errorText={errorText ?? 'Пароли не совпадают'}
    />
  )
}
