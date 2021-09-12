import React from 'react'

import Spinner from '../Spinner'
import themes from '../../../styles/themes'

import {
  ButtonContainer
} from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({isLoading, children, disabled, type, ...rest}) => {
  const isDisabled = disabled || isLoading

  return (
    <ButtonContainer
      isLoading={isLoading}
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {
        isLoading
        ? <Spinner
            color={themes.colors.white}
            backgroundColor={themes.colors.inkLighter}
            size='24px'
          />
        : children
      }
    </ButtonContainer>
  )
}

export default Button
