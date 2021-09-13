import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { gql, useMutation } from '@apollo/client'

import {getValidationErrors, setLocalStorage} from 'utils';
import { useDispatch } from 'react-redux';
import { loadRequest } from 'store/ducks/User/actions';

const CREATE_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register (
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
        email: $email
      }
    ) {
      email
      username
      token
    }
  }
`

const useRegister = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const [registerUser, { loading }] = useMutation(CREATE_USER, {
      onError(error){
        setErrorMessage(error.message)
      }
  })

  const handleFormSubmit = async (data: any) => {
    try {
      formRef.current && formRef.current.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Digite o Usuário'),
        email: Yup.string()
        .required('Digite o Email')
        .email('Digite um email válido'),
        password: Yup.string().required('Digite a senha'),
        confirmPassword: Yup.string().required('Digite a confirmação de senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const result = await registerUser({variables: data})

      if(result?.data?.register?.token) {
        setLocalStorage('token', result.data.register.token)
        dispatch(loadRequest(result?.data?.register))
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
    handleFormSubmit,
    formRef,
    errorMessage,
    loading,
  }
}


export default useRegister
