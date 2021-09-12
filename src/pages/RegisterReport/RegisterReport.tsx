import React, { useRef } from 'react'

import Header from 'components/molecules/Header'
import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import TextArea from 'components/molecules/TextArea'
import FooterButton from 'components/molecules/FooterButton';
import Input from 'components/molecules/Input';
import Dropzone from 'components/molecules/Drop';

import { FormContainer, ContainerInputs } from './styles'

const RegisterReport: React.FC = () => {
  const formRef = useRef(null)

  return (
    <Wrapper>
      <Header title="Criar novo report" to="/reportes" />
      <Card hasMarginBottom>
        <FormContainer ref={formRef} onSubmit={(data) => console.log(data)}>
          <ContainerInputs>
            <Dropzone name="upload" label="Insira a imagem do reporte" />
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
              name="comentario"
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
