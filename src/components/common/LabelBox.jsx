import React from 'react';
import PropTypes from 'prop-types';

import styles from '../views/profile/Profile.module.css';

const LabelBox = ({ name, value, msgError }) => (
  <div className={styles.rowProfile}>
    <div className={styles.cellProfileTitle}>{name}</div>
    <div className={styles.cellProfileInfo}>{value ? value : msgError}</div>
  </div>
);

export default LabelBox;

LabelBox.defaultProps = {
  value: null,
};

LabelBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  msgError: PropTypes.string.isRequired,
};
