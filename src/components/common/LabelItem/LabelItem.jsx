import React from 'react';
import PropTypes from 'prop-types';

import styles from './LabelItem.module.css';
import Label from '../Label/Label';

const ChannelItem = ({ name }) => {
  return (
    <li className={styles.channelItem}>
      <Label name={name} />
      {name}
    </li>
  );
};

export default ChannelItem;

ChannelItem.propTypes = {
  name: PropTypes.string.isRequired,
};
