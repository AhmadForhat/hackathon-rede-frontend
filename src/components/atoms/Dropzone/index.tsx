import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

import FileInfo from './components/FileInfo';
import { Container } from './styles';


interface Props {
  name: string;
}

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

export default function ReactDropzoneInput({ name }: Props) {

  const inputRef = useRef<InputRefProps>(null);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>(defaultValue);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: onDropAcceptedFiles => {
      if (inputRef.current) {
        inputRef.current.acceptedFiles = onDropAcceptedFiles;
        setAcceptedFiles(onDropAcceptedFiles);
      }
    },
  });
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref: InputRefProps) => {
        ref.acceptedFiles = [];
        setAcceptedFiles([]);
      },
      setValue: (ref: InputRefProps, value) => {
        ref.acceptedFiles = value;
        setAcceptedFiles(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container {...getRootProps()} haveItems={acceptedFiles.length} onClick={() => !acceptedFiles.length && inputRef.current?.click()}>
      <input {...getInputProps()} accept="image/*" ref={inputRef} />
      {acceptedFiles.length !== 0 ? (
        <>
          {acceptedFiles.map(file => (
            <FileInfo
              key={file.name}
              onDelete={() => setAcceptedFiles([])}
              src={URL.createObjectURL(file)}
              fileName={file?.name}
            />
          ))}
        </>
      ) : isDragActive ? (
        <p>Solte seu arquivo aqui ...</p>
      ) : (
        <p>Arraste seu arquivo aqui ou <strong>clique para buscar</strong> em seu computador</p>
      )}
    </Container>
  );
};
