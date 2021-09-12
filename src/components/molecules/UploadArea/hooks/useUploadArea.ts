import { useRef, useState } from 'react'

const useUploadArea = () => {
  const fileInputRef: any = useRef(null)
  const [selectedFile, setSelectedFile] = useState({name: null})
  const [dragEffect, setDragEffect] = useState(false)

  const handleFile = (file: any) => {
    setSelectedFile(file)
  }

  const handleDragItem = (event: any) => {
    event.preventDefault()
    const { type, dataTransfer } = event

    if (type === 'dragover') {
      setDragEffect(true)
    } else {
      setDragEffect(false)
      if (type === 'drop' && dataTransfer.files.length) {
        handleFile(dataTransfer.files[0])
      }
    }
  }

  const fileSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFile(fileInputRef.current.files[0])
    }
  }

  const handleAddFile = (event:any) => {
    const { type } = event
    if (type === 'keypress') {
      event.preventDefault()
    }
    fileInputRef.current.click()
  }

  const handleDeleteFile = () => {
    handleFile({name: null})
  }

  return {
    handleAddFile,
    handleDeleteFile,
    fileSelected,
    handleDragItem,
    dragEffect,
    selectedFile,
    fileInputRef
  }
}

export default useUploadArea
