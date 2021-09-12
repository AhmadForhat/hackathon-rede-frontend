import { useRef, useEffect, TextareaHTMLAttributes } from 'react'

import { useField } from '@unform/core'
import ErrorMessage from '../ErrorMessage'

import { Container } from './styles'

interface Props {
  name: string
  label?: string
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props

export default function Textarea({ name, label, ...rest }: TextareaProps) {
  const textareaRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <textarea
        ref={textareaRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}



