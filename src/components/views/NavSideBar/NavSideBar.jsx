import React from 'react';
import PropTypes from 'prop-types';

import { MenuStore } from '../../../redux/store/MenuStore';
import { ListChannelsStore } from '../../../redux/store/ListChannelsStore';
import { MembersStore } from '../../../redux/store/MenbersStore';

import styles from './NavSideBar.module.css';

const NavSideBar = ({ isOpen, isSideBar }) => {
  return (
    <aside
      className={`${styles.wrapperSideBar} ${isSideBar ? styles.Open : ''}`}
    >
      <nav className={styles.NavSideBar}>
        {isOpen ? (
          <>
            <h2>Channels</h2>
            <ListChannelsStore />
          </>
        ) : (
          <MembersStore />
        )}

        <MenuStore />
      </nav>
    </aside>
  );
};

export default NavSideBar;

NavSideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isSideBar: PropTypes.bool.isRequired,
};
