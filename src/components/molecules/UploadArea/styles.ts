import React from 'react'
import styled from 'styled-components'
import { UploadCloud } from 'react-feather'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  dragEffect?: boolean
}

export const Button = styled.button<ButtonProps>`
  height: 150px;
  width: 100%;
  background: none;
  border: 2px dashed ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 24px;
  background-color: ${({dragEffect, theme}) => dragEffect && theme.colors.ice};
  margin-top: 10px;
`

export const ContainerInfo = styled.div`
  display: flex;
`

export const Input = styled.input`
  display: none;
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  strong {
    color: ${({theme}) => theme.colors.primary};
  }
`

export const UploadIcon = styled(UploadCloud).attrs(() => ({
  size: '32px',
}))`
  color: ${({theme}) => theme.colors.primary};
  margin-right: 12px;
`
