// You can swap out axios for whatever Ajax library you want...
import axios from 'axios';

// Using a variable to hold our action-type lets us:
// 1. Use editor's auto-complete instead of having to type out a long string
// 2. Minify actions when bundling
export const RECEIVE_USERS = 'RECEIVE_USERS';
// This is called an 'action creator'; it simply
// gives us a more convenient and configurable way
// to create an action with the above constant
export const receiveUsers = (users) => ({ type: RECEIVE_USERS, users });

export const REQUEST_USERS = 'REQUEST_USERS';
export const requestUsers = () => ({ type: REQUEST_USERS });

// The below functions are also action creators. However,
// they return a function instead of a plain object. This function
// will then be invoked asynchronously by our redux-thunk middleware,
// which will pass in the `dispatch` and `getState` methods from our store
// as parameters

export const fetchUsers = () => dispatch => {
  // First, we dispatch a REQUEST_USERS action to
  // inform our state that we're trying to load data
  dispatch(requestUsers());
  // Make the ajax request, then dispatch a
  // RECEIVE_USERS action with the data we received
  axios.get('api/users')
    .then(res => {
      // setTimeout to simulate network latency so we
      // can actually see the 'loading...' message
      setTimeout(() => dispatch(receiveUsers(res.data)), 500);
    })
    .catch(err => console.log(err));
};

export const shouldFetchUsers = state => {
  const { userData } = state;
  // return true if we don't have any users
  if (!userData.users.length) {
    return true;
  }
  // return false if we're already trying to load data
  if (userData.loading) {
    return false;
  }
  return false;
};
// ^ For a more robust implementation of this logic, check
// out how Dan Abramov uses a 'didInvalidate' property at:
// https://github.com/reactjs/redux/blob/master/examples/async/actions/index.js#L47

// This gives us a way to prevent additional network
// requests for data that we already have by using the above two functions
export const fetchUsersIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchUsers(getState())) {
    dispatch(fetchUsers());
  }
};
