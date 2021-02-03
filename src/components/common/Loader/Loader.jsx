import React from 'react';
import PropTypes from 'prop-types';

import styles from './Loader.module.css';

const Loader = ({ size }) => (
  <div className={`${styles.loader} ${size ? size : ''}`} />
);

export default Loader;

Loader.defaultProps = {
  size: null,
};

Loader.propTypes = {
  size: PropTypes.string,
};
