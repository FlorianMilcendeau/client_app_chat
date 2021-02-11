import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './LabelItem.module.css';
import Label from '../Label/Label';

const LabelItem = ({ name, picture }) => {
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <li className={styles.channelItem}>
      {picture && isCompleted ? (
        <img
          className={styles.pictureProfile}
          onError={() => setIsCompleted(false)}
          src={picture}
          alt={name}
        />
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
