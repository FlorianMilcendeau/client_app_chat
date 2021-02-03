import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';

const Message = ({ message, success }) => {
  return (
    <div
      className={`${styles.message} ${success ? styles.success : styles.error}`}
    >
      {message}
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};
