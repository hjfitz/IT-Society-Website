import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Pages from './pages';

const onUpdate = () => window.scrollTo(0, 0);

const Router = () => (
  <BrowserRouter onUpdate={onUpdate}>
    <Switch>
      <Pages.Layout>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/events" component={Pages.Events} />
        <Route exact path="/about" component={Pages.About} />
      </Pages.Layout>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById('app'));
