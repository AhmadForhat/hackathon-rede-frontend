import React from "react";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { store, persistor } from "store/index";

import Route from './Route'

import themes from 'styles/themes'
import GlobalStyle from 'styles/GlobalStyles';
import ApolloProvider from 'Apollo/ApolloProvider'

import Home from 'pages/Home'
import Cadastro from "pages/Cadastro";
import Login from "pages/Login";
import Perfil from "pages/Perfil";
import Reports from "pages/Reports";
import ReportsDetails from "pages/ReportsDetails";
import RegisterReport from "pages/RegisterReport";
import Error from 'pages/Error'
import NotFound from "pages/NotFound";
import RegisterComment from "pages/RegisterComment";

const App: React.FC = () => {
  return (
    <ApolloProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={themes}>
            <GlobalStyle />
            <Router>
              <Switch>
                <Route isPrivate path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route isPrivate path="/perfil" component={Perfil} />
                <Route path="/cadastro" component={Cadastro} />
                <Route isPrivate path="/reportes/:id" component={ReportsDetails} />
                <Route isPrivate path="/reportes" component={Reports} />
                <Route isPrivate path="/criar-reporte" component={RegisterReport} />
                <Route isPrivate path='/criar-comentario/:id' exact component={RegisterComment} />
                <Route path='/erro' component={Error} />        
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
