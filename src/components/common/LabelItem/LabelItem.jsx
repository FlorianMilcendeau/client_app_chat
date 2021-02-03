import React from 'react';
import PropTypes from 'prop-types';

import styles from './LabelItem.module.css';
import Label from '../Label/Label';

const LabelItem = ({ name, picture }) => {
  return (
    <li className={styles.channelItem}>
      {picture ? (
        <img className={styles.pictureProfile} src={picture} alt={name} />
      ) : (
        <Label name={name} />
      )}
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
