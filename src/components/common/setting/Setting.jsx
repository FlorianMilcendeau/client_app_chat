import React from 'react';
import PropTypes from 'prop-types';

import styles from './Setting.module.css';

const Setting = ({ handleDelete }) => {
  return (
    <div className={styles.wrapperSetting}>
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <section className={styles.wrapperBodySetting}>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default Setting;

Setting.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
