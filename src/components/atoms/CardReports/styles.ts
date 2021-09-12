import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  display:flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 10px;
  min-height: 110px;
  max-height: 110px;
  width: 98%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 15px 'Poppins', sans-serif;
  text-align: start;
  margin: 5px 15px 0;
  display: block;
  display: -webkit-box;
  max-width: 98%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContentInfosDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const DescriptionDate = styled.span`
  display: flex;
  align-items: center;
  margin: 10px 15px 0;
  font: normal normal 700 14px 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;

  svg {
    margin-right: 8px;
    width: 14px;
    height: 14px;
  }
`

export const ContentInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 15px 0;
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

export const Anexts = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.gray};
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`
