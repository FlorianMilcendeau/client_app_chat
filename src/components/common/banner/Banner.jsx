import React from 'react';
import PropTypes from 'prop-types';

import styles from './Banner.module.css';

const Banner = ({ title }) => {
  return <h2 className={styles.Banner}>{title}</h2>;
};

export default Banner;

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};
