import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { HomeStore } from '../../../redux/store/HomeStore';

import styles from './Dashboard.module.css';
import { fetchAllChannel, fetchAllMessage } from '../../../API/channel';

const Dashboard = ({ socket, updateChannel, setMessages, updateMessage }) => {
  useEffect(async () => {
    // fetch all channels and initialize fetch messages to Welcome channel.
    const channel = await fetchAllChannel();
    const messages = await fetchAllMessage(1);

    updateChannel(channel);
    setMessages(messages);
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id);
    });

    socket.on('ADD_MESSAGE', (data) => {
      updateMessage(data);
    });
  }, []);

  return (
    <section className={styles.dashboard}>
      <Route
        exact
        path="/dashboard/:groupName"
        component={() => <HomeStore />}
      />
    </section>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  updateMessage: PropTypes.func.isRequired,
  updateChannel: PropTypes.func.isRequired,
  setMessages: PropTypes.func.isRequired,
};
