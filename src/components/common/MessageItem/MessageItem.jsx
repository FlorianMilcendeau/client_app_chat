import React from 'react';
import PropTypes from 'prop-types';

import { decode } from 'he';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './MessageItem.module.css';
import Label from '../Label/Label';
import Setting from '../setting/Setting';

const MessageItem = ({ socket, channelId, userId, message }) => {
  /** convert elapsed time since publication date */
  dayjs.extend(relativeTime);

  const isUser = (idUser, isMessage) => idUser !== isMessage;
  const readOnly = isUser(userId, message.author.id);

  // Send transmitter for delete this message.
  const handleDelete = (id) => {
    if (!readOnly) {
      socket.emit('DELETE_MESSAGE', {
        channelId,
        messageId: id,
      });
    }
  };

  return (
    <li className={`${styles.wrapperMessage} ${!readOnly && styles.isUser}`}>
      {message.author.picture !== null ? (
        <img
          className={styles.pictureAuthor}
          src={message.author.picture}
          alt=""
        />
      ) : (
        <Label name={message.author.name} />
      )}
      <div className={styles.messageContent}>
        <span className={styles.messageAuthor}>
          {`${message.author.name} `}
        </span>
        <time className={styles.messageCreatedAt}>
          {dayjs(message.created_at).fromNow()}
        </time>
        <p
          className={styles.message}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: decode(message.content) }}
        />
      </div>
      {!readOnly && <Setting handleDelete={() => handleDelete(message.id)} />}
    </li>
  );
};

export default MessageItem;

MessageItem.defaultProps = {
  message: null,
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    content: PropTypes.string,
    created_at: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  channelId: PropTypes.number.isRequired,
};
