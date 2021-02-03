import Axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

export const fetchAllChannel = async () => {
  const response = await Axios.get(`${REACT_APP_SERVER_URL}/api/channels`, {
    headers: { authorization: localStorage.getItem('token') },
  });

  return response.data;
};

/**
 *
 * @param {number} id - id is the id of the channel.
 */
export const fetchAllMessage = async (id) => {
  const response = await Axios.get(
    `${REACT_APP_SERVER_URL}/api/channels/${id}/messages`,
    { headers: { authorization: localStorage.getItem('token') } }
  );

  return response.data;
};
