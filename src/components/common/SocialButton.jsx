import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/Button.module.css';

const SocialButton = ({ icon, alt, redirectSocialMedia }) => {
  return (
    <button
      className={styles.buttonWithoutStyle}
      type="button"
      onClick={(e) => redirectSocialMedia(e)}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

export default SocialButton;

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  redirectSocialMedia: PropTypes.func.isRequired,
};
