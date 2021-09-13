import React from 'react'
import styled, { keyframes } from 'styled-components'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean
}

interface ButtonMenuProps extends React.HTMLProps<HTMLButtonElement> {
  visible?: boolean
}

const fadeInFromNone = keyframes`{
  0% {
      display: none;
      opacity: 0;
  }

  1% {
      display: flex;
      opacity: 0;
  }

  100% {
      display: flex;
      opacity: 1;
  }
}`

export const Container = styled.div<ContainerProps>`
  display: ${({visible}) => visible ? 'flex' : 'none'};
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  right: 0;
  width: 80vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.white};
  z-index: 1700;
  animation: ${fadeInFromNone} 0.5s ease-out;
`

export const ButtonMenu = styled.button<ButtonMenuProps>`
  cursor: pointer;
  display: ${({visible}) => visible ? 'flex' : 'none'};
  padding: 20px;
  outline: none;
  background: none;
  border: none;
  position: fixed;
  right: 0;
  width: fit-content;
  animation: ${fadeInFromNone} 0.5s ease-out;
  z-index: 1700;
`

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 68px;
  justify-content: center;
  align-items: center;
`
