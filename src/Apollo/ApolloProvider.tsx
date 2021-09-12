import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const ApolloComponent: React.FC = ({children}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

export default ApolloComponent
