import React from 'react';
import PropTypes from 'prop-types';

import iconReturn from '../../../assets/icons/navigate_before.svg';
import { ListMembersStore } from '../../../redux/store/ListMembersStore';

import styles from './Members.module.css';

const Members = ({ togglePanel, currentChannel }) => {
  return (
    <>
      <button
        className={styles.returnChannel}
        onClick={() => togglePanel(true)}
        type="button"
      >
        <img src={iconReturn} alt="return" />
        <h2>All Channels</h2>
      </button>
      <h3>{currentChannel.name}</h3>
      <p>{currentChannel.description}</p>
      <h3>Members</h3>
      <ListMembersStore />
    </>
  );
};

export default Members;

Members.propTypes = {
  togglePanel: PropTypes.func.isRequired,
  currentChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
