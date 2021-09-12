import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from '@apollo/client'
import { setContext } from "@apollo/client/link/context";

import { getLocalStorage } from 'utils';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const authLink = setContext(() => {
  const token = getLocalStorage('token')

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const ApolloComponent: React.FC = ({children}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

export default ApolloComponent
