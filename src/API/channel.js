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
 * @param {number} page - page is the number page of messages of the channel.
 */
export const fetchMessages = async (id, page = 0) => {
  const response = await Axios.get(
    `${REACT_APP_SERVER_URL}/api/channels/${id}/messages?page=${page}`,
    { headers: { authorization: localStorage.getItem('token') } }
  );

  return response.data;
};
