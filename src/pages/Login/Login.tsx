import React, { useRef } from 'react';
import LoginSvg from './login.svg';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationsErrors';

import LabelInput from '../../components/atoms/LabelInput';
import InputLine from '../../components/atoms/InputLine';

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

const Login: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit = async (data: any) => {
    try {
      formRef.current && formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Digite o Email')
          .email('Digite um email válido'),
        password: Yup.string().required('Digite a senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });



      console.log(data)

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
            <LabelInput>Email</LabelInput>
            <InputLine type="email" name="email" placeholder="Digite seu email" />
          </ContentInput>

          <ContentInput>
            <LabelInput>Senha</LabelInput>
            <InputLine type="password" name="password" placeholder="Digite sua senha" />
          </ContentInput>

          <ContentResetPassword>
            <LabelMin to="/">Esqueceu a senha?</LabelMin>
          </ContentResetPassword>

          <Button type="submit">Entrar</Button>

          <LabelMin to="/cadastro">Ainda não tem uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
}

export default Login
