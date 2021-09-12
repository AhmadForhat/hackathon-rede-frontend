import React from "react";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { store, persistor } from "./store/index";

import themes from './styles/themes'
import GlobalStyle from './styles/GlobalStyles';
import ApolloProvider from './Apollo/ApolloProvider'

import Home from './pages/Home'
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <ApolloProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={themes}>
            <GlobalStyle />
            <Router>
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={Login} />
                <Route path="/perfil" exact component={Perfil} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}


export default App
