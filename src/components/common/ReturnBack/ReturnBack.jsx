import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ReturnBack.module.css';

import iconArrowBack from '../../../assets/icons/navigate_before.svg';

const ReturnBack = () => {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={() => history.goBack()}
      className={styles.returnBack}
    >
      <img src={iconArrowBack} alt="return back" />
      Back
    </button>
  );
};

export default ReturnBack;
