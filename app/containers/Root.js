
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../config/routes';

const Root = React.createClass({
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
});

export default Root;
