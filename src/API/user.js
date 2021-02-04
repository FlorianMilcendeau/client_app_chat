import Axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const token = localStorage.getItem('token');
/**
 *
 * @param {number} id - 'id' is the id of user.
 * @param {object} data - 'data' is the user's data to be modified.
 */
export const userUpdate = async (id, data) => {
  const response = await Axios.put(
    `${REACT_APP_SERVER_URL}/api/user/${id}`,
    data,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
};
