import React from "react";
import { useParams } from "react-router-dom";
import { MessageCircle } from "react-feather";
import { gql, useQuery } from '@apollo/client'
import moment from "moment";

import Card from "components/atoms/Card";
import Header from "components/molecules/Header";
import InfoReport from "components/molecules/InfoReport";

import {
  Container,
  ContainerButtons,
  Content,
  Image,
  CotainerInfos,
  ContentDescription,
  Descriptions
} from "./styles";
import FooterButton from "components/molecules/FooterButton";

interface Params {
  id: string;
}

const FETCH_POST_QUERY = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body {
        title
        image
        comment
        address
      }
      createdAt
      username
      commentCount
    }
  }
`;

const ReportsDetail: React.FC = () => {
  const { id } = useParams<Params>();

  const { loading, data, error } = useQuery(FETCH_POST_QUERY, {
    variables: { postId: id },
  })

  if(loading) return <h2>...looading</h2>

  if(error) return <h2>Error</h2>

  return (
    <Container>
      <Header title={data?.state} to="/reportes" />

      <Content>
        <Card>
          {data.getPost.body.image && <Image src={data.getPost.body.image} />}

          <ContentDescription>
            <Descriptions>
              {data.getPost.commentCount} <MessageCircle />
            </Descriptions>
          </ContentDescription>

          <CotainerInfos>
            <InfoReport title="Usuário" content={data.getPost.username} />
            <InfoReport title="Criado no dia" content={moment(new Date(data.getPost.createdAt)).format('DD/MM/YY')} />
            <InfoReport title="Titulo" content={data.getPost.body.title} />
            <InfoReport title="Endereço" content={data.getPost.body.address} />
            <InfoReport title="Comentário" content={data.getPost.body.comment} />
          </CotainerInfos>

          <ContainerButtons>
          <FooterButton type="submit">
            Comentar
            <MessageCircle />
          </FooterButton>
          </ContainerButtons>
        </Card>
      </Content>
    </Container>
  );
};

export default ReportsDetail;
