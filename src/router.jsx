import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home.jsx';

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('app'));
