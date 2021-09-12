import React from 'react'

import {
  Container,
  Title,
  Value,
} from './styles'

interface InfoProps {
  title: React.ReactNode
  content?: React.ReactNode
}

const InfoReport: React.FC<InfoProps> = ({
  title,
  content,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{content}</Value>
    </Container>
  )
}

export default InfoReport
