
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import IndexPage from '../components/IndexPage';
import UsersContainer from '../containers/UsersContainer';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="users" component={UsersContainer} />
  </Route>
);

export default Routes;
