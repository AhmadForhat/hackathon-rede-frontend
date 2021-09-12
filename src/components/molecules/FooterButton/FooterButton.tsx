import React from 'react'

import Button from 'components/atoms/Button'

import {
  ContainerButton
} from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const FooterButton:React.FC<ButtonProps> = ({...propsButton}) => {
  return (
    <ContainerButton>
      <Button {...propsButton} />
    </ContainerButton>
  )
}

export default FooterButton
