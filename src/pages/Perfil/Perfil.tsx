import { Flag, Info, Settings, LogOut } from "react-feather";
import Pedro from "./pedro.png";

import {
  Container,
  ContentPerfil,
  Article,
  Title,
  Subtitle,
  Img,
  Section,
  ButtonInfos,
  ButtonLogout,
  ContentButton,
} from "./styles";

const Perfil: React.FC = () => {
  return (
    <Container>
      <ContentPerfil>
        <Article>
          <Title>Pedro</Title>
          <Subtitle>Soluções de contorno</Subtitle>
        </Article>

        <Img src={Pedro} alt="Usuário" />
      </ContentPerfil>

      <Section>
        <ButtonInfos background="#FFB08E" color="#FF5B14">
          <Flag /> Reportes
        </ButtonInfos>
        <ButtonInfos background="#96C0FF" color="#1447A8">
          <Info /> Informações
        </ButtonInfos>
        <ButtonInfos background="#3A9258" color="#A2F0BD">
          <Settings /> Configurações
        </ButtonInfos>
      </Section>

      <ContentButton>
        <ButtonLogout>
          <LogOut /> Deslogar
        </ButtonLogout>
      </ContentButton>
    </Container>
  );
};

export default Perfil;
