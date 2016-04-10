
import { applyMiddleware, createStore, compose } from 'redux';
// redux-logger simply logs all actions to the console
import createLogger from 'redux-logger';
// redux-thunk lets us handle asynchronous actions
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore() {
  const logger = createLogger({ collapsed: true });
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      // This line simply enables the redux dev-tools chrome extension for our app
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

