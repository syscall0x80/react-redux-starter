import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Counter from './containers/counter/Counter';
import User from './containers/github/User';

const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}>
        <Route path="/counter" component={Counter}/>
        <Route path="/github" component={User}/>
      </Route>
    </Route>
  </Route>
);

export default routes;

