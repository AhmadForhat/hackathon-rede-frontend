import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageCircle } from "react-feather";
import { gql, useQuery } from '@apollo/client'

import { getReportById } from "services/reports";
import Card from "components/atoms/Card";
import Header from "components/molecules/Header";
import InfoReport from "components/molecules/InfoReport";

import {
  Container,
  ContainerButtons,
  Content,
  Image,
  ButtonStyled,
  ContentDescription,
  Descriptions
} from "./styles";

interface Params {
  id: string;
}

interface Report {
  id: string;
  idUser: string;
  status: string;
  photo: string;
  comment: string;
  title: string;
  state: string;
  endereco: string;
}

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body {
        title
        image
        comment
        adderss
      }
      createdAt
      username
      commentCount
    }
  }
`

const ReportsDetail: React.FC = () => {
  const { loading, data: post, error } = useQuery(FETCH_POST_QUERY)
  const [data, setData] = useState<Report | null>(null);

  const { id } = useParams<Params>();

  useEffect(() => {
    getReportById(id)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <Header title={data?.state} to="/reportes" />

      <Content>
        <Card hasPadding hasBoxShadow>
          {data?.photo && <Image src={data.photo} />}

          <ContentDescription>
            <Descriptions>
              22 <MessageCircle />
            </Descriptions>
          </ContentDescription>

          <InfoReport title="Titulo" content={data?.title} />
          <InfoReport title="Status" content={data?.status} />
          <InfoReport title="Endereço" content={data?.endereco} />
          <InfoReport title="Comentário" content={data?.comment} />

          <ContainerButtons>
            <ButtonStyled>
              Comentar
              <MessageCircle />
            </ButtonStyled>
          </ContainerButtons>
        </Card>
      </Content>
    </Container>
  );
};

export default ReportsDetail;
