import React from 'react';
import PropTypes from 'prop-types';

import styles from './Label.module.css';

const Label = ({ name }) => {
  // I get the first two initials.
  let initial = '';
  if (name) {
    const split = name.split(' ');
    initial = split.map((el) => el[0].toUpperCase()).slice(0, 2);
  }

  // Random color.
  const palette = ['#ffb3ba', '#ffdfba', '#bae1ff'];
  const color = palette[Math.floor(Math.random() * palette.length)];

  return (
    <div style={{ backgroundColor: color }} className={styles.initialChannel}>
      {initial}
    </div>
  );
};

export default React.memo(Label);

Label.propTypes = {
  name: PropTypes.string.isRequired,
};
