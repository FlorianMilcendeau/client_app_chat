const initUser = {
  name: '',
  email: '',
  picture: '',
  bio: '',
  roles: '',
  phone: null,
  is_admin: false,
};

export const USER_INIT = 'USER_INIT';
export const UPDATE_USER = 'UPDATE_USER';

export const userReducer = (state = initUser, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case USER_INIT:
      return { ...action.payload };
    default:
      return state;
  }
};
