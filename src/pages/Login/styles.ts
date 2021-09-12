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

export const ContentInput = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.ink};
  outline: none;
  height: 28px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayLight};
  }
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

export const Button = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 40px;
  transition: all 0.3s linear;
  margin: 30px 0 25px;
  font: normal normal bold 18px 'Poppins', sans-serif;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
