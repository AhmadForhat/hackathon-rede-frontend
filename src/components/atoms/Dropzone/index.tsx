import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

import FileInfo from './components/FileInfo';

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
    <div {...getRootProps()} onClick={() => inputRef.current?.click()}>
      <input {...getInputProps()} accept="image/*" ref={inputRef} />
      {acceptedFiles.length !== 0 && (
        <>
          {acceptedFiles.map(file => (
            <FileInfo
              key={file.name}
              onDelete={() => console.log('ola')}
              src={URL.createObjectURL(file)}
              fileName={file?.name}
            />
          ))}
        </>
      )}
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag drop some files here, or click to select files</p>
      )}
    </div>
  );
};
