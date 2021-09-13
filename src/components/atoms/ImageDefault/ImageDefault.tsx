import React from 'react'
import { Camera } from 'react-feather'

import {
  Container
} from './styles'

const ImageDefault:React.FC = () => {
  return (
    <Container>
      <Camera
        size='62px'
        color='white'
      />
    </Container>
  )
}

export default ImageDefault
