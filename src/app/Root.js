import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Configuration
import routes from './routes';
// Components
import BottomBar from './BottomBar';

const Root = () => (
  <Router>
    <Fragment>
      {routes.map(route => (
        <Route key={route.id} path={route.path} {...route.route} />
      ))}
      <BottomBar />
    </Fragment>
  </Router>
);

export default Root;
