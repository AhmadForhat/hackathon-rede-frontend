import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { getReportById } from 'services/reports';

import Card from 'components/atoms/Card';
import Button from 'components/atoms/Button';
import Header from 'components/molecules/Header';
import InfoReport from 'components/molecules/InfoReport';

import { Container, ContainerButtons, Content, Image } from './styles';

interface Params {
  id: string
}

interface Report {
  id: string,
  idUser: string,
  status: string,
  photo: string,
  comment: string,
  title: string,
  state: string
  endereco: string
}

const ReportsDetail: React.FC = () => {
  const [data, setData] = useState<Report | null>(null)

  const { id } = useParams<Params>()

  useEffect(() => {
    getReportById(id)
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <Container>
      <Header
        title={data?.state}
        to='/reportes'
      />


      <Content>
        <Card hasPadding>
          {data?.photo && <Image src={data.photo} />}
          <InfoReport title='Titulo' content={data?.title} />
          <InfoReport title='Status' content={data?.status} />
          <InfoReport title='Endereço' content={data?.endereco} />
          <InfoReport title='Comentário' content={data?.comment} />

          <ContainerButtons>
            <Button>Comentar</Button>
            <Button>Like</Button>
          </ContainerButtons>
        </Card>
      </Content>

    </Container>
  );
};

export default ReportsDetail;
