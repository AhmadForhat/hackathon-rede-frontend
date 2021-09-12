import {
  Container,
  Title,
  SubTitle,
  Card,
  ButtonReporte,
  ContentButtonReport,
} from "./styles";

import CardReports from '../../components/atoms/CardReports';

const Reports: React.FC = () => {
  return (
    <Container>
      <Title>São Paulo</Title>

      <SubTitle>Reportes realizados</SubTitle>

      <Card>
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
        <CardReports />
      </Card>

      <ContentButtonReport>
        <ButtonReporte>Cadastrar Reporte</ButtonReporte>
      </ContentButtonReport>
    </Container>
  );
};

export default Reports;
