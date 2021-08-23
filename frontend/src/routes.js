import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Confirmacao from './pages/confirmacao';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path={'', '/'} exact component={Cadastro} />
        <Route path='/confirmacao' component={Confirmacao} />
      </Switch>
    </BrowserRouter>
  )
}