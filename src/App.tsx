import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Switch>
    </Router>
  );
}

export default App
