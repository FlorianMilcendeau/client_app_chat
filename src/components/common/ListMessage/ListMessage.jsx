import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MessageItem from '../MessageItem/MessageItem';

import styles from './ListMessage.module.css';

const ListMessage = ({
  socket,
  channelId,
  userId,
  messages,
  deleteMessage,
}) => {
  const messagesEndRef = useRef(null);

  useLayoutEffect(() => {
    messagesEndRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [messages]);

  useLayoutEffect(() => {
    socket.on('UPDATE_MESSAGE', (messageId) => {
      deleteMessage(messageId);
    });
  }, []);

  return (
    <ul className={styles.listMessage}>
      {messages &&
        messages.map((message) => (
          <MessageItem
            key={message.id}
            channelId={channelId}
            userId={userId}
            message={message}
            socket={socket}
          />
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
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.number.isRequired,
  channelId: PropTypes.number.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};
