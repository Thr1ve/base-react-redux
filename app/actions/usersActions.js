import axios from 'axios';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const receiveUsers = (users) => ({ type: RECEIVE_USERS, receivedAt: Date.now(), users });

export const REQUEST_USERS = 'REQUEST_USERS';
export const requestUsers = () => ({ type: REQUEST_USERS });

export const fetchUsers = () => dispatch => {
  dispatch(requestUsers());
  axios.get('api/users')
    .then(res => {
      // setTimeout to simulate network latency so we
      // can see the 'loading...' message
      setTimeout(() => dispatch(receiveUsers(res.data)), 500);
    })
    .catch(err => console.log(err));
};

export const shouldFetchUsers = state => {
  const { userData } = state;
  if (!userData.users.length) {
    return true;
  }
  if (userData.loading) {
    return false;
  }
  return false;
};

export const fetchUsersIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchUsers(getState())) {
    dispatch(fetchUsers());
  }
};
