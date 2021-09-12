import styled from 'styled-components';
import { Form } from '@unform/web'


import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Logo = styled.img`
  height: 200px;
`

export const Card = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  padding: 10px 30px;
  height: 100%;
  background: ${({ theme }) => theme.colors.whiteSecondary};
  max-height: 100;
  overflow: auto;
  padding-bottom: 20px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 24px 'Poppins', sans-serif;
  text-align: start;
  margin-bottom: 30px;
`

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const ContentResetPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  transform: translateX(-15px);
`

export const LabelMin = styled(Link)`
  text-align: center;
  color: ${({ theme }) => theme.colors.ink};
  text-decoration: none;
  font: normal normal bold 12px 'Roboto', sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
