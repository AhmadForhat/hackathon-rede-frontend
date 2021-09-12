import LoginSvg from './image/login.svg';

import {
  Container,
  Logo,
  Card,
  Title,
  Form,
  ContentInput,
  Label,
  Input,
  ContentResetPassword,
  LabelMin,
  Button
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Logo src={LoginSvg} alt="login" />

      <Card>
        <Title>Login</Title>

        <Form>
          <ContentInput>
            <Label>Email</Label>
            <Input required type="email" placeholder="Digite seu email" />
          </ContentInput>

          <ContentInput>
            <Label>Senha</Label>
            <Input required type="password" placeholder="Digite sua senha" />
          </ContentInput>

          <ContentResetPassword>
            <LabelMin to="/">Esqueceu a senha?</LabelMin>
          </ContentResetPassword>

          <Button type="submit">Entrar</Button>

          <LabelMin to="/cadastro">Ainda não tem uma conta?</LabelMin>
        </Form>
      </Card>
    </Container>
  );
}

export default Login
