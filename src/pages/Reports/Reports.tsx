import React from 'react'
import { useHistory } from 'react-router-dom'

import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import CardReports from 'components/atoms/CardReports';
import Header from 'components/molecules/Header';
import FooterButton from 'components/molecules/FooterButton';

const Reports: React.FC = () => {
  const history = useHistory()

  const handleToCreateReport = () => {
    history.push('/criar-reporte')
  }

  return (
    <Wrapper>
      <Header title="Reportes realizados" to="/" />
      <Card hasPadding hasMarginBottom>
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
      </Card>
      <FooterButton onClick={handleToCreateReport}>
        Cadastrar Reporte
      </FooterButton>
    </Wrapper>
  );
};

export default Reports;
