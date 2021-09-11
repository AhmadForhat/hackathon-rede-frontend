import CadastroSvg from './cadastro.svg';

import {
  Container,
  Logo,
  Card,
  Title,
  Form,
  ContentInput,
  Label,
  Input,
  LabelMin,
  Button
} from "../Login/styles";

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Logo src={CadastroSvg} alt="cadastro" />

      <Card>
        <Title>Criar conta</Title>

        <Form>
          <ContentInput>
            <Label>Email</Label>
            <Input required type="email" placeholder="Digite seu email" />
          </ContentInput>

          <ContentInput>
            <Label>Senha</Label>
            <Input required type="password" placeholder="Digite sua senha" />
          </ContentInput>

          <ContentInput>
            <Label>Confirmar senha</Label>
            <Input required type="password" placeholder="Digite sua senha" />
          </ContentInput>

          <Button type="submit">Cadastrar</Button>

          <LabelMin to="/">Já possui uma conta?</LabelMin>
        </Form>
      </Card>
    </Container>
  );
}

export default Cadastro
