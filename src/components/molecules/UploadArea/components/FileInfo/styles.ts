import styled from 'styled-components'
import { Trash } from 'react-feather'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  box-shadow: 0px 0px 6px #00000029;
  margin-top: 10px;
`

export const Image = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
`

export const Text = styled.p`
  width: 100%;
  margin-left: 16px;
  color: ${({theme}) => theme.colors.ink};
  font-family: ${({theme}) => theme.fonts.family.primary};
  font-size: ${({theme}) => theme.fonts.size.medium};
`

export const ContainerButton = styled.button`
  color: ${({theme}) => theme.colors.danger};
  cursor: pointer;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  width: 120px;

  :hover {
    filter: brightness(0.9);
  }
`

export const TrashIcon = styled(Trash)`
  margin-right: 6px;
`
