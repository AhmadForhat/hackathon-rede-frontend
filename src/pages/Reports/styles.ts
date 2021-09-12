import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 24px 'Poppins', sans-serif;
  text-align: start;
  margin: 30px;
`

export const SubTitle = styled.label`
  cursor: text;
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal normal 23px 'Roboto', sans-serif;
  text-align: start;
  margin: 0 30px 30px;
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
  margin-bottom: 70px;
`

export const ContentButtonReport = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 70px;
`

export const ButtonReporte = styled.button`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 40px;
  transition: all 0.3s linear;
  width: calc(100% - 40px);
  font: normal normal bold 18px 'Poppins', sans-serif;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`