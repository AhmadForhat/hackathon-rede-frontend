import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { gql, useMutation } from '@apollo/client'

import getValidationErrors from '../../utils/getValidationsErrors';

import LabelInput from '../../components/atoms/LabelInput';
import InputLine from '../../components/atoms/InputLine';

import LoginSvg from './login.svg';

import {
  Container,
  Logo,
  Card,
  Title,
  FormCustom,
  ContentInput,
  ContentResetPassword,
  LabelMin,
  Button
} from "./styles";

const LOGIN_USER = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login (
      loginInput: {
        username: $username
        password: $password
      }
    ) {
      id
      username
      token
    }
  }
`

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [addUser, { data, loading, error }] = useMutation(LOGIN_USER, {
      onError(error){
        setErrorMessage(error.message)
      }
  })
  const formRef = useRef<FormHandles>(null)

  const handleFormSubmit = async (data: any) => {
    setErrorMessage('')
    try {
      formRef.current && formRef.current.setErrors({})

      const schema = Yup.object().shape({
        username: Yup.string().required('Digite o Usuário'),
        password: Yup.string().required('Digite a senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      addUser({variables: data})
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current && formRef.current.setErrors(errors);
        return;
      }
    }
  }

  return (
    <Container>
      <Logo src={LoginSvg} alt="login" />

      <Card>
        <Title>Login</Title>

        <FormCustom ref={formRef} onSubmit={handleFormSubmit}>
          <ContentInput>
            <LabelInput>Usuário</LabelInput>
            <InputLine type="text" name="username" placeholder="Digite seu email" />
          </ContentInput>

          <ContentInput>
            <LabelInput>Senha</LabelInput>
            <InputLine type="password" name="password" placeholder="Digite sua senha" />
          </ContentInput>

          <ContentResetPassword>
            <LabelMin to="/">Esqueceu a senha?</LabelMin>
          </ContentResetPassword>

          {errorMessage && <p>{errorMessage}</p>}

          <Button type="submit">Entrar</Button>

          <LabelMin to="/cadastro">Ainda não tem uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
}

export default Login
