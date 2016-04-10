import { RECEIVE_USERS, REQUEST_USERS } from '../actions';

export default function userData(state = {
  loading: false,
  users: []
}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
        loading: false
      };
    case REQUEST_USERS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
