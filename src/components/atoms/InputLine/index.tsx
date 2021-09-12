import { useRef, useEffect, InputHTMLAttributes } from 'react'

import { useField } from '@unform/core'

import { InputCustom } from './styles'
import ErrorMessage from '../ErrorMessage'

interface Props {
    name: string
    type?:
    | 'text'
    | 'number'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'password'
    | 'time'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    label?: string
    value?: string
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

export default function Input({ name, type, value, ...rest }: InputProps) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    const defaultInputValue = value || defaultValue

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, newValue) => {
                ref.current.value = newValue
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    return (
        <>
            <InputCustom
                type={type || 'text'}
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultInputValue}
                {...rest}
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    )
}
