import styled from 'styled-components';

interface ContainerProps {
  hasClick?: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${({hasClick}) => hasClick && 'pointer'};
  transition: ${({hasClick}) => hasClick && 'all .5s ease-in-out'};

  :hover {
    transform: ${({hasClick}) => hasClick && 'scale(1.05)'};
  }
`

export const ContainerTitles = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  border-radius: 10px;
  padding: 20px;
  min-height: 110px;
  width: 98%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 15px 'Poppins', sans-serif;

  :first-child {
    margin-right: 10px;
  }
`

export const ContentInfosDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const DescriptionDate = styled.span`
  display: flex;
  align-items: center;
  font: normal normal 700 14px 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;

  svg {
    margin-right: 8px;
    width: 14px;
    height: 14px;
  }
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 14px 'Roboto', sans-serif;

  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
`
