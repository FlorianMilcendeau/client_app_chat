import React, { useState } from 'react';
import PropTypes from 'prop-types';

import userPropTypes from '../../../propTypes/UserPropTypes';
import iconSend from '../../../assets/icons/send.svg';

import stylesButton from '../../../css/Button.module.css';
import styles from './SendMessage.module.css';

const SendMessage = ({ user, socket, currentChannel }) => {
  const [value, setValue] = useState('');
  const [isDisable, setisDisable] = useState(true);

  const handleInput = (e) => {
    setisDisable(!(e.target.value.length > 0));
    setValue(e.target.value);
  };

  // Send message.
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
        className={`${styles.sendButton} ${
          isDisable && stylesButton.buttonDisable
        }`}
        type="button"
        onClick={(e) => handleSubmit(e)}
        disabled={isDisable}
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
