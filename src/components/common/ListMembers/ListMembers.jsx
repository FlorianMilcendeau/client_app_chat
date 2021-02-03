import React from 'react';
import PropTypes from 'prop-types';

import styles from '../ListChannels/ListChannels.module.css';
import LabelItem from '../LabelItem/LabelItem';

const ListMembers = ({ members }) => {
  return (
    <ul className={styles.channelGroup}>
      {members &&
        members.map((member) => (
          <LabelItem
            key={member.id}
            picture={member.picture}
            name={member.name}
          />
        ))}
    </ul>
  );
};

export default ListMembers;

ListMembers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
};
