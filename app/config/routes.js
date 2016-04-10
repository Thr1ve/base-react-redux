import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Index from '../components/Index';
import UsersContainer from '../containers/UsersContainer';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="users" component={UsersContainer} />
  </Route>
);

export default Routes;
