import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';

import styles from './SeeMore.module.css';
import stylesLoader from '../Loader/Loader.module.css';

const SeeMore = ({ handleClick }) => {
  const [loader, setLoader] = useState(false);
  const handleSeeMore = () => {
    setLoader(true);
    handleClick(() => setLoader(false));
  };

  return (
    <button type="button" className={styles.seeMore} onClick={handleSeeMore}>
      {loader ? <Loader size={stylesLoader.loaderXS} /> : 'See more'}
    </button>
  );
};

export default SeeMore;

SeeMore.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
