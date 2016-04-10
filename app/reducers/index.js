
import { combineReducers } from 'redux';

import userData from './userData';

const rootReducer = combineReducers({
  userData,
  // add more reducers here...
});

export default rootReducer;

