import Axios from 'axios';

import Auth from '../Authentication/Authentication';

const { REACT_APP_SERVER_URL } = process.env;

export const logOut = async (history) => {
  try {
    const response = await Axios.get(`${REACT_APP_SERVER_URL}/api/auth/logout`);
    const { success } = response.data;

    /** Disconnect with sucess */
    if (success) {
      /** Delete jwt-token */
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');

      Auth.logOut(() => history.push('/login'));
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const loginUser = async (client) => {
  const response = await Axios.post(
    `${REACT_APP_SERVER_URL}/api/auth/login`,
    client
  );

  return response.data;
};

export const registerUser = async (client) => {
  const response = await Axios.post(
    `${REACT_APP_SERVER_URL}/api/auth/register`,
    client
  );

  return response.data;
};

export const authenticateJwt = async () => {
  const token = localStorage.getItem('token');

  const response = await Axios.get(
    `${REACT_APP_SERVER_URL}/api/auth/checkAuth`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
};
