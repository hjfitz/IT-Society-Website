import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import $ from 'jquery';

import Layout from './components/layout.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Events from './pages/events.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" components={Events} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Router />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
