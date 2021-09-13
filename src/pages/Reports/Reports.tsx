import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import CardReports from 'components/atoms/CardReports';
import Header from 'components/molecules/Header';
import FooterButton from 'components/molecules/FooterButton';

type body = {
  title: string
  image: string
  comment: string
  address: string
}

export type PostProps = {
  id: string
  body: body
  createdAt: string
  username: string
  commentCount: string
}

const FETCH_POST_QUERY = gql`
  {
    getPosts {
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
`

const Reports: React.FC = () => {
  const history = useHistory()
  const { loading, data, error } = useQuery(FETCH_POST_QUERY, { pollInterval: 1000 })

  const handleToCreateReport = () => {
    history.push('/criar-reporte')
  }

  if(error) {
    return <h2>Erro</h2>
  }

  return (
    <Wrapper>
      <Header title="Reportes" to="/" />
      {
        loading ? (
          <Card hasPadding hasMarginBottom>
            <h2>carregando</h2>
          </Card>
        ) : (
          <>
            <Card
              hasPadding
              hasMarginBottom
            >
              {
                data.getPosts.map((post: PostProps) => (
                  <CardReports
                    key={post.id}
                    {...post}
                  />
                ))
              }
            </Card>
            <FooterButton onClick={handleToCreateReport}>
              Cadastrar Reporte
            </FooterButton>
          </>
        )
      }
    </Wrapper>
  );
};

export default Reports;
