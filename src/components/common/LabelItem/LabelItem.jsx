import React from 'react';
import PropTypes from 'prop-types';

import LoadImg from '../LoadImg/LoadImg';

import styles from './LabelItem.module.css';

const LabelItem = ({ name, picture }) => {
  return (
    <li className={styles.channelItem}>
      <LoadImg style={styles.pictureProfile} picture={picture} name={name} />
      {name}
    </li>
  );
};

export default LabelItem;

LabelItem.defaultProps = {
  picture: null,
};

LabelItem.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
};
