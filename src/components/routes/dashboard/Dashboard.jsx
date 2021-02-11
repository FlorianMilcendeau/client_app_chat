import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { HomeStore } from '../../../redux/store/HomeStore';

import styles from './Dashboard.module.css';
import { fetchAllChannel, fetchMessages } from '../../../API/channel';

const Dashboard = ({
  socket,
  updateChannel,
  setMessages,
  updatePushMessage,
}) => {
  useEffect(async () => {
    // fetch all channels and initialize fetch messages to Welcome channel.
    const channel = await fetchAllChannel();
    const messages = await fetchMessages(1);

    updateChannel(channel);
    setMessages(messages);
  }, []);

  useEffect(() => {
    socket.on('connect', () => {});

    // listen to incoming messages.
    socket.on('ADD_MESSAGE', (data) => {
      updatePushMessage(data);
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
  updatePushMessage: PropTypes.func.isRequired,
  updateChannel: PropTypes.func.isRequired,
  setMessages: PropTypes.func.isRequired,
};
