import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import MessageItem from '../MessageItem/MessageItem';
import SeeMore from '../see-more/SeeMore';
import { fetchMessages } from '../../../API/channel';

import styles from './ListMessage.module.css';

const ListMessage = ({
  socket,
  channelId,
  userId,
  messages,
  updateUnshiftMessage,
  deleteMessage,
}) => {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);

  useLayoutEffect(() => {
    if (!isVisible && page > 0) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [messages]);

  useLayoutEffect(() => {
    socket.on('UPDATE_MESSAGE', (messageId) => {
      deleteMessage(messageId);
    });
  }, []);

  // Trigger the seeMore component.
  const handleScroll = (e) => {
    const { scrollTop } = e.target;

    setIsVisible(page && scrollTop <= 20);
  };

  // Fetch next messages.
  const handleMessages = async (cb) => {
    const response = await fetchMessages(channelId, page);

    if (response.length < 10) {
      setPage(null);
      setIsVisible(false);
    } else {
      setPage(page + 1);
    }

    updateUnshiftMessage(response);

    cb();
  };

  return (
    <>
      {isVisible && <SeeMore handleClick={handleMessages} />}
      <ul className={styles.listMessage} onScroll={(e) => handleScroll(e)}>
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
    </>
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
  updateUnshiftMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};
