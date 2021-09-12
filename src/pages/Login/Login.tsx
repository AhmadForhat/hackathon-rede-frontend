import React from 'react';

import Input from 'components/molecules/Input';
import Button from 'components/atoms/Button'
import ErrorMessage from 'components/atoms/ErrorMessage'

import useLogin from './hooks/useLogin'
import LoginSvg from './images/login.svg';

import {
  Container,
  Logo,
  Card,
  Title,
  FormCustom,
  ContentResetPassword,
  LabelMin,
} from "./styles";

const Login: React.FC = () => {
  const {
    errorMessage,
    loading,
    handleFormSubmit,
    formRef
  } = useLogin()

  return (
    <Container>
      <Logo src={LoginSvg} alt="login" />

      <Card>
        <Title>Login</Title>

        <FormCustom ref={formRef} onSubmit={handleFormSubmit}>

          <Input
            name='username'
            label='Usuário'
            placeholder="Digite seu usuário"
          />

          <Input
            label='Senha'
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <ContentResetPassword>
            <LabelMin to="/">Esqueceu a senha?</LabelMin>
          </ContentResetPassword>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button isLoading={loading} type="submit">Entrar</Button>

          <LabelMin to="/cadastro">Ainda não tem uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
}

export default Login
