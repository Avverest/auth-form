import { FC, HTMLProps } from 'react'
import { cls } from './cls'
import styles from './ButtonGroup.module.css'

type ButtonGroupProps = HTMLProps<HTMLDivElement>

export const ButtonGroup: FC<ButtonGroupProps> = props => {
  const { children, className = '', ...passedProps } = props

  return (
    <div {...passedProps} className={cls(styles.group, className)}>
      {children}
    </div>
  )
}
