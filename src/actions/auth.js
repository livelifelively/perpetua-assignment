import { validateApiKey } from '../api';
import { setCookie } from '../services/cookies';

export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTHENTICATE_API_KEY = 'AUTHENTICATE_USER';

export function userAuthenticated(authenticated) {
  console.log('Authenticaed');
  return {
    type: USER_AUTHENTICATED,
    authenticated,
  };
}

export function authenticateAPIKey(apiKey) {
  return (dispatch) => {
    return validateApiKey(apiKey)
      .then(() => {
        dispatch(userAuthenticated(true));
        setCookie('apiKey', apiKey);
      })
      .catch(() => console.log('AUTH FAILED'));
  };
}
