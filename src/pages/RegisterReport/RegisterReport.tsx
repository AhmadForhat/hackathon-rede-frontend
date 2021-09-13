import React, { useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid';

import Header from 'components/molecules/Header'
import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import TextArea from 'components/molecules/TextArea'
import FooterButton from 'components/molecules/FooterButton';
import Input from 'components/molecules/Input';
import Dropzone from 'components/molecules/Drop';
import useFirebase from 'hooks/useFirebase'

import { FormContainer, ContainerInputs } from './styles'
import { useHistory } from 'react-router'

const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $address: String!
    $comment: String!
    $image: String!
  ) {
    createPost(
      createPostInput: {
        title: $title
        address: $address
        comment: $comment
        image: $image
      }
    ) {
      id
    }
  }
`

const RegisterReport: React.FC = () => {
  const { storage } = useFirebase()
  const formRef = useRef(null)
  const history = useHistory()
  const [ errorMessage, setErrorMessage ] = useState('')
  const [createPost, { loading }] = useMutation(CREATE_POST, {
    onError(error){
      setErrorMessage(error.message)
    }
  })

  const handleSubmit = async (data: any) => {
    storage
      .child(uuidv4())
      .put(data.image[0])
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then(resolve => createPost({variables: {
        ...data,
        image: resolve
      }}))

    history.push('/reportes')
  }

  return (
    <Wrapper>
      <Header title="Criar novo report" to="/reportes" />
      <Card hasMarginBottom>
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <ContainerInputs>
            <Dropzone
              name="image"
              label="Insira a imagem do reporte"
            />
            <Input
              label="Titulo"
              name="title"
              type="text"
              placeholder="adicione um titulo"
            />
            <Input
              label="Endereço"
              name="address"
              type="text"
              placeholder="adicione um endereço"
            />
            <TextArea
              label="Comentário"
              name="comment"
              placeholder="escreva um comentário"
              rows={5}
            />
          </ContainerInputs>
          <FooterButton type="submit">Enviar</FooterButton>
        </FormContainer>
      </Card>
    </Wrapper>
  );
}

export default RegisterReport
