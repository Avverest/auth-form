import { ChangeEvent, FC, useState } from 'react'
import { AuthForm } from '../AuthForm'
import { Input } from '../Input'
import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '../Button'
import { Password } from '../Password'
import { Checkbox } from '../Checkbox'

type Form = {
  login: string
  password: string
}

const LogIn: FC = () => {
  const [form, setForm] = useState<Form>({ login: '', password: '' })

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget

    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <AuthForm gap={3} onSubmit={() => null} title='Авторизация'>
      <Input
        label='Логин'
        value={form.login}
        placeholder='User_123'
        onChange={onChange}
        name='login'
        required
      />
      <Password
        value={form.password}
        onChange={onChange}
        name='password'
        required
      />
      <Checkbox label='Запомнить акаунт' />
      <Button>Войти</Button>
      <span>
        Еще нет акаунта? <Link to='/register'>Регистрация</Link>
      </span>
    </AuthForm>
  )
}

export const Route = createLazyFileRoute('/login')({
  component: LogIn,
})
