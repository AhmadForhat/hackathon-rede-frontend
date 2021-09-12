import React from 'react';

import CadastroSvg from './images/cadastro.svg';
import useRegister from './hooks/useRegister';
import Button from 'components/atoms/Button'
import ErrorMessage from 'components/atoms/ErrorMessage'
import Input from 'components/molecules/Input'

import {
  Container,
  Logo,
  Card,
  Title,
  FormCustom,
  LabelMin,
} from "../Login/styles";

const Cadastro: React.FC = () => {

  const {
    formRef,
    handleFormSubmit,
    errorMessage,
    loading,
  } = useRegister()

  return (
    <Container>
      <Logo src={CadastroSvg} alt="cadastro" />

      <Card>
        <Title>Criar conta</Title>

        <FormCustom ref={formRef} onSubmit={handleFormSubmit}>
          <Input
            name='username'
            type='text'
            label='Usuário'
            placeholder="Digite seu usuário"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Digite seu email"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />
          <Input
            name='confirmPassword'
            type='password'
            label="Confirmar senha"
            placeholder="Confirme sua senha"
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button isLoading={loading} type="submit">Entrar</Button>

          <LabelMin to="/login">Já possui uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
}

export default Cadastro
