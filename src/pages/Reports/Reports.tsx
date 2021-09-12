import React from 'react'

import Button from 'components/atoms/Button'
import CardReports from 'components/atoms/CardReports';
import Header from 'components/molecules/Header';

import {
  Container,
  Card,
  ContentButtonReport,
} from "./styles";

const Reports: React.FC = () => {
  return (
    <Container>
      <Header
        title='Reportes realizados'
        to='/'
      />
      <Card>
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
      </Card>

      <ContentButtonReport>
        <Button>Cadastrar Reporte</Button>
      </ContentButtonReport>
    </Container>
  );
};

export default Reports;
