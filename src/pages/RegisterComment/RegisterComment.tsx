import React, { useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { gql, useMutation } from '@apollo/client'

import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import TextArea from 'components/molecules/TextArea'
import FooterButton from 'components/molecules/FooterButton'
import Header from 'components/molecules/Header'

import {
  FormContainer,
  ContainerInputs
} from './styles'

interface Params {
  id: string;
}

const CREATE_COMMENT = gql`
  mutation createComment(
    $postId: String!
    $body: String!
  ) {
    createComment(
      postId: $postId
      body: $body
    ) {
      id
    }
  }
`

const RegisterComment: React.FC = () => {
  const { id } = useParams<Params>()
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    onError(error){
      setErrorMessage(error.message)
    }
  })
  const formRef = useRef(null)
  const handleSubmit = async (data: any) => {
    const result = await createComment({variables: { body: data.comment, postId: id}})

    history.push(`/reportes/${id}`)
  }

  return (
    <Wrapper>
      <Header
        title='Criar Comentário'
        to={`/reportes/${id}`}
      />
      <Card>
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <ContainerInputs>
            <TextArea
              label="Comentário"
              name="comment"
              placeholder="Escreva um comentário"
              rows={5}
            />
          </ContainerInputs>
          <FooterButton type="submit">Enviar</FooterButton>
        </FormContainer>
      </Card>
    </Wrapper>
  )
}

export default RegisterComment
