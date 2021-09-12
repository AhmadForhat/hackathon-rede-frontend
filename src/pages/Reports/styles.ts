import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Card = styled.div`
  border-radius: 20px 20px 0px 0px;
  padding: 10px 30px;
  height: 100%;
  background: ${({ theme }) => theme.colors.whiteSecondary};
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  gap: 20px;
  margin-bottom: 80px;
`

export const ContentButtonReport = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.white};
  margin-top: auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  button {
    margin: 0 auto;
    max-width: 800px;
  }
`
