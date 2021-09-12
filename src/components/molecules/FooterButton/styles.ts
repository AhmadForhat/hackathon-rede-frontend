import styled from 'styled-components'

export const ContainerButton = styled.div`
  z-index: 1600;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.white};
  margin-top: auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  button {
    max-width: 800px;
    margin: 0 auto;
  }
`
