import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

export default function ReactDropzoneInput({ name }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  const [acceptedFiles, setAcceptedFiles] = useState(defaultValue);

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
      getValue: (ref) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref) => {
        ref.acceptedFiles = [];
        setAcceptedFiles([]);
      },
      setValue: (ref, value) => {
        ref.acceptedFiles = value;
        setAcceptedFiles(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <div {...getRootProps()} onClick={() => inputRef.current?.click()}>
      <input {...getInputProps()} accept="image/*" ref={inputRef} />

      {acceptedFiles.length !== 0 && (
        <ul>
          {acceptedFiles.map(file => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}

      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag drop some files here, or click to select files</p>
      )}
    </div>
  );
};