import React from 'react'

import Button from 'components/atoms/Button'

import {ReactComponent as NotFoundImage} from './images/imagem404.svg'
import {ReactComponent as ErrorImage} from './images/imagemError.svg'
import {
  Container,
  Text,
} from './styles'

interface ImageSrcProps {
  status: 404 | 500
  text?: string
  onClick?: () => void
  buttonText?: string
}

const Feedback: React.FC<ImageSrcProps> = ({
  status,
  text,
  onClick,
  buttonText
}) => {
  const SvgImage = {
    404: NotFoundImage,
    500: ErrorImage
  }[String(status)] || NotFoundImage

  return (
    <Container>
      <SvgImage />
      <Text>
        {text}
      </Text>
      {onClick && <Button onClick={onClick}>{buttonText}</Button>}
    </Container>
  )
}

export default Feedback
