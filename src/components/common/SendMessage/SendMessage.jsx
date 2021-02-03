import React, { useState } from 'react';
import PropTypes from 'prop-types';

import iconSend from '../../../assets/icons/send.svg';

import styles from './SendMessage.module.css';
import userPropTypes from '../../../propTypes/UserPropTypes';

const SendMessage = ({ user, socket, currentChannel }) => {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // Send message
  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('ADD_MESSAGE', {
      channelId: currentChannel.id,
      content: {
        author: { id: user.id, name: user.name },
        content: value,
        created_at: new Date(),
      },
    });

    setValue('');
  };

  return (
    <form className={styles.sendMessage}>
      <textarea
        className={styles.textArea}
        placeholder="Type a message here"
        spellCheck
        onChange={(e) => handleInput(e)}
        value={value}
      />
      <button
        className={styles.sendButton}
        type="button"
        onClick={(e) => handleSubmit(e)}
      >
        <img src={iconSend} alt="Send" />
      </button>
    </form>
  );
};

export default SendMessage;

SendMessage.propTypes = {
  ...userPropTypes,
  currentChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};
