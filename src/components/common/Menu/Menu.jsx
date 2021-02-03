import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';

import UserPropType from '../../../propTypes/UserPropTypes';
import { logOut } from '../../../API/authAPI';

import styles from './Menu.module.css';
import styles2 from '../../../css/Button.module.css';

import iconArrow from '../../../assets/icons/arrow_down.svg';
import iconLogout from '../../../assets/icons/login_out.svg';
import iconPeople from '../../../assets/icons/people.svg';
import iconAccount from '../../../assets/icons/account.svg';
import Label from '../Label/Label';

const Menu = ({ user, isOpen, socket, toggleMenu }) => {
  const history = useHistory();

  const { name, picture } = user;
  return (
    <div className={styles.wrapperMenu}>
      <button
        className={`${styles.headerMenu} ${styles2.buttonWithoutStyle}`}
        type="button"
        onClick={() => toggleMenu(!isOpen)}
      >
        {picture ? (
          <img className={styles.pictureProfileMenu} src={picture} alt={name} />
        ) : (
          <Label name={name} />
        )}
        {name}
        <img
          src={iconArrow}
          className={isOpen ? styles.iconOpen : styles.iconClose}
          alt="arrow"
        />
      </button>
      <ul className={`${styles.listMenu} ${isOpen && styles.menuOpen}`}>
        <li className={styles.listItemMenu}>
          <Link
            className={styles.menuLink}
            to={`/profile/${name}`}
            onClick={() => toggleMenu(!isOpen)}
          >
            <img
              className={styles.iconItemMenu}
              src={iconAccount}
              alt="account"
            />
            My Profile
          </Link>
        </li>
        <li className={styles.listItemMenu}>
          <Link
            className={styles.menuLink}
            to="/dashboard/home"
            onClick={() => toggleMenu(!isOpen)}
          >
            <img
              className={styles.iconItemMenu}
              src={iconPeople}
              alt="group chat"
            />
            Group Chat
          </Link>
        </li>
        <li className={styles.listItemMenu}>
          <button
            className={styles2.buttonWithoutStyle}
            type="button"
            onClick={() => {
              toggleMenu(!isOpen);
              socket.disconnect();
              logOut(history);
            }}
          >
            <img
              className={styles.iconItemMenu}
              src={iconLogout}
              alt="logout"
            />
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  ...UserPropType,
  isOpen: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
