import React from 'react'
import { useHistory } from 'react-router'

import Feedback from 'components/molecules/Feedback'

const NotFound:React.FC = () => {
  const history = useHistory()
  return (
    <Feedback
      status={404}
      text='Página não encontrada!'
      onClick={() => history.push('/')}
      buttonText='voltar'
    />
  )
}

export default NotFound
