import React, { useRef } from 'react';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import CadastroSvg from './cadastro.svg';

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
  LabelMin,
  Button
} from "../Login/styles";

const Cadastro: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit = async (data: any) => {

    try {
      formRef.current && formRef.current.setErrors({});
      console.log(data)

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Digite o Email')
          .email('Digite um email válido'),
        password: Yup.string().required('Digite a senha'),
        passwordConfirm: Yup.string().required('Digite a confirmação de senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

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
      <Logo src={CadastroSvg} alt="cadastro" />

      <Card>
        <Title>Criar conta</Title>

        <FormCustom ref={formRef} onSubmit={handleFormSubmit}>
          <ContentInput>
            <LabelInput>Email</LabelInput>
            <InputLine type="email" name="email" placeholder="Digite seu email" />
          </ContentInput>

          <ContentInput>
            <LabelInput>Senha</LabelInput>
            <InputLine type="password" name="password" placeholder="Digite sua senha" />
          </ContentInput>

          <ContentInput>
            <LabelInput>Confirmar senha</LabelInput>
            <InputLine type="password" name="passwordConfirm" placeholder="Digite sua senha" />
          </ContentInput>

          <Button type="submit">Cadastrar</Button>

          <LabelMin to="/">Já possui uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
}

export default Cadastro
