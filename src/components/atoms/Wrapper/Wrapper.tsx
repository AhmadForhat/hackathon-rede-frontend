import React from 'react'

import { Container } from './styles'

const Wrapper: React.FC = ({...props}) => {
  return (
    <Container {...props} />
  )
}

export default Wrapper
