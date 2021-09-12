import React from 'react'
import { useHistory } from 'react-router-dom'

import Feedback from 'components/molecules/Feedback'

const Error:React.FC = () => {
  const history = useHistory()

  return (
    <Feedback
      status={500}
      text='Ocorreu um erro inesperado'
      buttonText='Voltar'
      onClick={() => history.push('/')}
    />
  )
}

export default Error
