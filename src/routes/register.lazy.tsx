import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { FC, useState, ChangeEvent } from 'react'
import { AuthForm } from '../AuthForm'
import { Input } from '../Input'
import { Email } from '../Email'
import { Password } from '../Password'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'

type Form = {
  login: string
  password: string
  confirmPassword: string
  email: string
}

const Register: FC = () => {
  const [form, setForm] = useState<Form>({
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
  })
  const [passError, setPassError] = useState(false)
  const navigate = useNavigate()

  const passCheck = () => {
    if (!form.password) return
    if (!form.confirmPassword) return

    if (form.password !== form.confirmPassword) {
      setPassError(true)
      return
    }
    setPassError(false)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget

    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  const onValid = (): boolean => {
    const isValid = !Object.values(form).includes('')
    return isValid && !passError
  }

  return (
    <AuthForm gap={3} title='Регистрация'>
      <Input
        label='Логин'
        placeholder='John'
        value={form.login}
        onChange={onChange}
        name='login'
        required
      />
      <Email value={form.email} onChange={onChange} name='email' required />
      <Password
        onChange={onChange}
        value={form.password}
        onBlur={passCheck}
        isError={passError}
        name='password'
        required
      />
      <Password
        label='Подтвердите пароль'
        onChange={onChange}
        value={form.confirmPassword}
        onBlur={passCheck}
        isError={passError}
        name='confirmPassword'
        required
      />
      <ButtonGroup>
        <Button disabled={!onValid()}>Зарегестрироваться</Button>
        <Button onClick={() => navigate({ to: '/login' })}>Отменить</Button>
      </ButtonGroup>
    </AuthForm>
  )
}

export const Route = createLazyFileRoute('/register')({
  component: Register,
})
