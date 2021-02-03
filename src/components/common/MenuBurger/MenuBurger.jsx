import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuBurger.module.css';

const MenuBurger = ({ toggleSideBar }) => (
  <svg
    className={styles.MenuBurger}
    onClick={() => toggleSideBar(true)}
    viewBox="0 0 50 40"
    role="presentation"
    focusable="false"
    aria-label="trigram for heaven symbol"
  >
    <line x1="0" x2="100%" y1="10%" y2="10%" />
    <line x1="0" x2="100%" y1="50%" y2="50%" />
    <line x1="0" x2="100%" y1="90%" y2="90%" />
  </svg>
);

export default MenuBurger;

MenuBurger.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
};
