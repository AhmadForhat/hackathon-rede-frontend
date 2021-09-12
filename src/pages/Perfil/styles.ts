import styled from 'styled-components';

interface Ibutton {
  background: string;
  color: string;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

export const ButtonInfos = styled.button<Ibutton>`
  border: none;
  background: none;
  height: 40px;
  display: flex;
  align-items: center;
  font: normal normal bold 18px 'Poppins', sans-serif;
  position: relative;
  border-radius: 10px;
  transition: all 0.5s;

  svg {
    background: ${props => props.background && props.background};
    color: ${props => props.color && props.color};
    border-radius: 100%;
    padding: 7px;
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.ice};
  }

  &::before {
    position: absolute;
    content: '';
    right: 10px;
    border-bottom: 2px solid;
    height: 12px;
    width: 12px;
    transform: rotate(-45deg);
  }

  &::after {
    position: absolute;
    content: '';
    right: 10px;
    border-bottom: 2px solid;
    height: 12px;
    width: 12px;
    transform: rotate(-125deg);
  }
`

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`

export const ButtonLogout = styled.button`
  width: 140px;
  height: 40px;
  font: normal normal bold 14px 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.inkLighter};
  border-radius: 8px;
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${({theme}) => theme.colors.ice};
  transition: all 0.3s;

  svg {
    margin-right: 10px;
    width: 20px;
    color: ${({ theme }) => theme.colors.inkLighter};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
    svg {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`
