import { useState, useRef } from 'react'
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core';
import { gql, useMutation } from '@apollo/client'

import {getValidationErrors, setLocalStorage} from 'utils';

const LOGIN_USER = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login (
      loginInput: {
        username: $username
        password: $password
      }
    ) {
      id
      username
      token
    }
  }
`

const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
      onError(error){
        setErrorMessage(error.message)
      }
  })
  const formRef = useRef<FormHandles>(null)

  const handleFormSubmit = async (data: any) => {
    setErrorMessage('')
    try {
      formRef.current && formRef.current.setErrors({})

      const schema = Yup.object().shape({
        username: Yup.string().required('Digite o Usuário'),
        password: Yup.string().required('Digite a senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const result = await loginUser({variables: data})

      if(result?.data?.login?.token) {
        setLocalStorage('token', result.data.login.token)
        history.push('/')
      }

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current && formRef.current.setErrors(errors);
        return;
      }
    }
  }

  return {
    errorMessage,
    loading,
    handleFormSubmit,
    formRef
  }
}

export default useLogin
