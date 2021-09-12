import React from 'react'
import { Flag, Info, Settings, LogOut } from "react-feather"
import { useHistory } from 'react-router';

import Header from 'components/molecules/Header'

import {
  Section,
  ButtonInfos,
  ButtonLogout,
  ContentButton,
} from "./styles";
import Wrapper from 'components/atoms/Wrapper';
import Card from 'components/atoms/Card';

const Perfil: React.FC = () => {
  const history = useHistory()

  const handleRedirect = (to: string) => {
    history.push(to)
  }
  return (
    <Wrapper>
    <Header
      title='Pedro'
      subTitle='Soluções de contorno'
    />
    <Card hasPadding>
      <Section>
        <ButtonInfos background="#FFB08E" color="#FF5B14" onClick={() => handleRedirect('/reportes')}>
          <Flag /> Reportes
        </ButtonInfos>
        <ButtonInfos background="#96C0FF" color="#1447A8" onClick={() => handleRedirect('/infos')}>
          <Info /> Informações
        </ButtonInfos>
        <ButtonInfos background="#A2F0BD" color="#3A9258" onClick={() => handleRedirect('/configuração')}>
          <Settings /> Configurações
        </ButtonInfos>
      </Section>

      <ContentButton>
        <ButtonLogout>
          <LogOut size='16px' /> Deslogar
        </ButtonLogout>
      </ContentButton>
    </Card>
    </Wrapper>
  );
};

export default Perfil;
