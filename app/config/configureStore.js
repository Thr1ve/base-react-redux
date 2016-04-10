import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore() {
  const logger = createLogger({ collapsed: true });
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

