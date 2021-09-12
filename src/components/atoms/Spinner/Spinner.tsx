import React from 'react'

import {
  SpinnerContainer
} from './styles'

interface SpinnerProps extends React.HTMLAttributes<SVGAElement> {
  size?: string
  stroke?: string
  color?: string
  backgroundColor?: string
  fontSize?: string
}

const Spinner: React.FC<SpinnerProps> = ({
  size,
  stroke,
  color,
  backgroundColor,
  fontSize
}) => {
  return (
    <SpinnerContainer
      size={size}
      stroke={stroke}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    />
  )
}

export default Spinner
