import React from 'react'

import Header from 'components/molecules/Header'
import Card from 'components/atoms/Card'
import Wrapper from 'components/atoms/Wrapper'
import FooterButton from 'components/molecules/FooterButton';

const RegisterReport: React.FC = () => {
  return (
    <Wrapper>
      <Header
        title='Criar novo report'
        to='/reportes'
      />
      <Card hasPadding>
        Batata
      </Card>
      <FooterButton>
        Enviar
      </FooterButton>
    </Wrapper>
  )
}

export default RegisterReport
