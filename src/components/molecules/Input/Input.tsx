import React from 'react'

import LabelInput from 'components/atoms/LabelInput';
import InputLine, { InputProps } from 'components/atoms/InputLine';

import {
  ContentInput,
} from './styles'


const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  ...props
}) => {
  return (
    <ContentInput>
      <LabelInput htmlFor={name}>{label}</LabelInput>
      <InputLine type={type} name={name} placeholder={placeholder} {...props} />
    </ContentInput>
  )
}

export default Input
