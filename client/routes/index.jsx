import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/HomePage';
import About from '../components/About';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

export default Routes;
