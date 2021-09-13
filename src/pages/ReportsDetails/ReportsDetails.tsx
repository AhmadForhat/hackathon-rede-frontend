import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { MessageCircle } from "react-feather";
import { gql, useQuery } from '@apollo/client'
import moment from "moment";

import Card from "components/atoms/Card";
import Header from "components/molecules/Header";
import InfoReport from "components/molecules/InfoReport";
import Wrapper from "components/atoms/Wrapper";

import {
  ContainerButtons,
  Content,
  Image,
  CotainerInfos,
  ContentDescription,
  Descriptions
} from "./styles";
import FooterButton from "components/molecules/FooterButton";
import ImageDefault from "components/atoms/ImageDefault";
import CardReports from "components/atoms/CardReports";
import LabelInput from "components/atoms/LabelInput";

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
      comments {
        id
        createdAt
        username
        body
      }
      createdAt
      username
      commentCount
    }
  }
`;

const ReportsDetail: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<Params>()

  const { loading, data, error } = useQuery(FETCH_POST_QUERY, {
    variables: { postId: id },
    pollInterval: 1000
  })

  if(loading) return <h2>...looading</h2>

  if(error) return <h2>Error</h2>

  return (
    <Wrapper>
      <Header fixed title={data.getPost.body.title} to="/reportes" />

      <Content>
        <Card>
          {data.getPost.body.image ? <Image src={data.getPost.body.image} /> : <ImageDefault />}

          <ContentDescription>
            <Descriptions>
              {data.getPost.commentCount} <MessageCircle />
            </Descriptions>
          </ContentDescription>

          <CotainerInfos>
            <InfoReport title="Usuário" content={data.getPost.username} />
            <InfoReport title="Criado no dia" content={moment(new Date(data.getPost.createdAt)).format('DD/MM/YY')} />
            <InfoReport title="Endereço" content={data.getPost.body.address} />
            <InfoReport title="Comentário" content={data.getPost.body.comment} />
            {data.getPost.comments.length ? (
              <>
                <LabelInput>Comentários</LabelInput>
                {data.getPost.comments.map((comment: any) => (
                  <CardReports
                    key={comment.id}
                    id={comment.id}
                    username={comment.username}
                    createdAt={comment.ceatedAt}
                    text={comment.body}
                    hasClick={false}
                  />
                ))}
              </>
            ) : null}
            </CotainerInfos>

          <ContainerButtons>
          <FooterButton type="submit" onClick={() => history.push(`/criar-comentario/${id}`)}>
            Comentar
            <MessageCircle />
          </FooterButton>
          </ContainerButtons>
        </Card>
      </Content>
    </Wrapper>
  );
};

export default ReportsDetail;
