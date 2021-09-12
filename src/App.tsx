import React from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import themes from './styles/themes'
import GlobalStyle from './styles/GlobalStyles';

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App
