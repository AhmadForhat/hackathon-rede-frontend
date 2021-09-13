import React, { useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import Header from 'components/molecules/Header'
import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import TextArea from 'components/molecules/TextArea'
import FooterButton from 'components/molecules/FooterButton';
import Input from 'components/molecules/Input';
import Dropzone from 'components/molecules/Drop';
import useFirebase from 'hooks/useFirebase'

import { ContainerInputs } from './styles'
import { useHistory } from 'react-router'
import { getValidationErrors } from 'utils';

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
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const [ errorMessage, setErrorMessage ] = useState('')
  const [createPost, { loading }] = useMutation(CREATE_POST, {
    onError(error){
      setErrorMessage(error.message)
    }
  })

  const handleSubmit = async (data: any) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Digite um Titulo'),
        address: Yup.string().required('Digite um endeerço'),
        comment: Yup.string().required('Digite um comentário'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if(data.image[0]) {
        storage
        .child(uuidv4())
        .put(data.image[0])
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then(resolve => createPost({variables: {
          ...data,
          image: resolve
        }}))
      } else {
        createPost({variables: {
          ...data,
          image: ''
        }})
      }

      history.push('/reportes')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current && formRef.current.setErrors(errors);
        return;
      }
    }
  }

  return (
    <Wrapper>
      <Header title="Criar novo report" to="/reportes" />
      <Card hasMarginBottom>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
      </Card>
    </Wrapper>
  );
}

export default RegisterReport
