import React from 'react'

import FileInfo from './components/FileInfo'
import LabelInput from 'components/atoms/LabelInput'
import useUploadArea from './hooks/useUploadArea'
import {
  Button,
  ContainerInfo,
  Input,
  ContainerIcon,
  UploadIcon,
  Text
} from './styles'

export interface UploadAreaProps extends React.HTMLAttributes<HTMLInputElement> {
  currentFiles?: any
  onSelect?: any
  label?: string
  name: string
}


const UploadArea: React.FC<UploadAreaProps> = ({
  label,
  name,
}) => {
  const {
    handleAddFile,
    handleDeleteFile,
    fileSelected,
    handleDragItem,
    dragEffect,
    fileInputRef,
    selectedFile
  } = useUploadArea()

  if (selectedFile?.name) return (
    <div>
      {label && (
        <LabelInput htmlFor={name}>
          {label}
        </LabelInput>
      )}
      <FileInfo
        onDelete={handleDeleteFile}
        src={URL.createObjectURL(selectedFile)}
        fileName={selectedFile?.name}
      />
    </div>
  )

  return (
    <div>
    {label && (
    <LabelInput htmlFor={name}>
      {label}
    </LabelInput>
    )}
      <Button
        type="button"
        onClick={handleAddFile}
        onDragLeave={handleDragItem}
        onDragOver={handleDragItem}
        onDrop={handleDragItem}
        onKeyPress={handleAddFile}
        dragEffect={dragEffect}
      >
        <Input
          ref={fileInputRef}
          onChange={fileSelected}
          id={name}
          name={name}
          type="file"
        />
        <ContainerInfo>
        <ContainerIcon>
          <UploadIcon />
        </ContainerIcon>
        <Text>Arraste seu arquivo aqui ou <strong>clique para buscar</strong> em seu computador</Text>
        </ContainerInfo>
      </Button>
    </div>
  )
}

export default UploadArea
