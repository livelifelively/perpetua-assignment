import { USER_AUTHENTICATED } from '../actions/auth';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
}
