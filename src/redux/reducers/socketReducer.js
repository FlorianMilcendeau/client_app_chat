import io from 'socket.io-client';

const token = localStorage.getItem('token');

const { REACT_APP_SERVER_URL } = process.env;

const socket = io(REACT_APP_SERVER_URL, {
  auth: { token },
  withCredentials: true,
});

export const SET_TOKEN = 'SET_TOKEN';

export const socketReducer = (state = socket, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return io(REACT_APP_SERVER_URL, {
        auth: { token: action.payload },
        withCredentials: true,
      });
    default:
      return state;
  }
};
