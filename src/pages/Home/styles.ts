import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 20px 20px 0px 0px;
  height: 100%;
  background: ${({ theme }) => theme.colors.whiteSecondary};
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-bottom: 70px;
`

export const ContainerMap = styled.div`
  width: 100%;
  height: 100vh;
`

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
