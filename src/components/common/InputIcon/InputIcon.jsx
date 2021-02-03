import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputIcon.module.css';

const InputIcon = ({ label, name, type, icon, register }) => {
  return (
    <label className={styles.wrapperInputIcon} htmlFor={name}>
      <img className={styles.labelIcon} src={icon} alt={name} />
      <input
        className={styles.inputIcon}
        id={name}
        name={name}
        type={type}
        placeholder=" "
        ref={register}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default InputIcon;

InputIcon.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
