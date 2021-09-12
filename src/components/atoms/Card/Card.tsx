import React from 'react'

import { Container } from './styles'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasPadding?: boolean
}

const Card: React.FC<CardProps> = ({hasPadding, ...props}) => {
  return (
    <Container hasPadding={hasPadding} {...props} />
  )
}

export default Card
