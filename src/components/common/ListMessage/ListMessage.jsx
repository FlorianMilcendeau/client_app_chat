import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MessageItem from '../MessageItem/MessageItem';

import styles from './ListMessage.module.css';

const ListMessage = ({ userId, messages }) => {
  const messagesEndRef = useRef(null);

  useLayoutEffect(() => {
    messagesEndRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [messages]);

  return (
    <ul className={styles.listMessage}>
      {messages &&
        messages.map((message) => (
          <MessageItem key={message.id} userId={userId} message={message} />
        ))}
      <div ref={messagesEndRef} />
    </ul>
  );
};

export default ListMessage;

ListMessage.defaultProps = {
  messages: null,
};

ListMessage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.number.isRequired,
};
