import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './MessageItem.module.css';
import Label from '../Label/Label';

const MessageItem = ({ message }) => {
  /** convert elapsed time since publication date */
  dayjs.extend(relativeTime);

  return (
    <li className={styles.wrapperMessage}>
      {message.author.picture !== null ? (
        <img
          className={styles.pictureAuthor}
          src={message.author.picture}
          alt=""
        />
      ) : (
        <Label name={message.author.name} />
      )}
      <div>
        <span className={styles.messageAuthor}>
          {`${message.author.name} `}
        </span>
        <time className={styles.messageCreatedAt}>
          {dayjs(message.created_at).fromNow()}
        </time>
        <p className={styles.message}>{message.content}</p>
      </div>
    </li>
  );
};

export default MessageItem;

MessageItem.defaultProps = {
  message: null,
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    content: PropTypes.string,
    created_at: PropTypes.string,
  }),
};
