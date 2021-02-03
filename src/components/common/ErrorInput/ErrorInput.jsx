import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorInput.module.css';

const ErrorInput = ({ message }) => {
  return <p className={styles.errorInput}>{message}</p>;
};

export default ErrorInput;

ErrorInput.propTypes = {
  message: PropTypes.string.isRequired,
};
