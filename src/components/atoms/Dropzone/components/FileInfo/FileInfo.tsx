import React from 'react'

import {
  Container,
  Image,
  Text,
  ContainerButton,
  TrashIcon
} from './styles'

export interface FileInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  onDelete: () => void
  fileName?: string | null
}

const FileInfo : React.FC<FileInfoProps> = ({src, onDelete, fileName}) => (
  <Container>
    <Image src={src} />
    <Text>{fileName}</Text>
    <ContainerButton
      onClick={onDelete}
    >
      <TrashIcon />Excluir
    </ContainerButton>
  </Container>
)

export default FileInfo
