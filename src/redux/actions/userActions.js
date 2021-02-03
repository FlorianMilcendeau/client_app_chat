import { UPDATE_USER, USER_INIT } from '../reducers/userReducer';

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const initUser = (user) => ({
  type: USER_INIT,
  payload: user,
});
