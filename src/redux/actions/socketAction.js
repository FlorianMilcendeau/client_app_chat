import { SET_TOKEN } from '../reducers/socketReducer';

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
