import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LabelItem from '../LabelItem/LabelItem';
import { fetchAllMessage } from '../../../API/channel';

import styles from './ListChannels.module.css';

const ListChannels = ({
  channels,
  currentChannel,
  updateCurrentChannel,
  togglePanel,
  setMessage,
}) => {
  const handleChannel = async (channel) => {
    const { id } = channel;

    if (currentChannel.id !== id) {
      const messages = await fetchAllMessage(id);

      setMessage(messages);
    }

    updateCurrentChannel(id);
    togglePanel(false);
  };

  return (
    <ul className={styles.channelGroup}>
      {channels &&
        channels.map((channel) => (
          <Link
            to={`${channel.name}`}
            key={channel.id}
            onClick={() => {
              handleChannel(channel);
            }}
            type="button"
            className={styles.linkGroup}
          >
            <LabelItem name={channel.name} />
          </Link>
        ))}
    </ul>
  );
};

export default ListChannels;

ListChannels.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  updateCurrentChannel: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};
