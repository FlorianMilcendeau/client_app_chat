import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import UserPropType from '../../../propTypes/UserPropTypes';

import LabelBox from '../../common/LabelBox';

import styles from './Profile.module.css';
import styles2 from '../../../css/Button.module.css';

const Profile = ({ user }) => {
  const { name, email, phone, bio, picture } = user;
  const [isCompleted, setIsCompleted] = useState(true);
  const { name: pseudo } = useParams();

  return (
    <section className={styles.profileInfo}>
      <div className={styles.rowProfile}>
        <h2 className={styles.cellProfileTitle}>Profile</h2>
        <Link className={styles.cellProfileInfo} to={`/profile/${pseudo}/edit`}>
          <button
            className={`${styles.cellProfileInfo} ${styles2.button} ${styles2.xs}`}
            type="button"
          >
            Edit
          </button>
        </Link>
      </div>
      <div className={styles.rowProfile}>
        <div className={styles.cellProfileTitle}>Picture</div>
        <img
          className={styles.cellProfileInfo}
          src={
            picture && isCompleted ? picture : 'https://via.placeholder.com/150'
          }
          onError={() => setIsCompleted(false)}
          alt="default profile"
        />
      </div>
      <LabelBox name="Name" value={name} msgError="No name defined" />
      <LabelBox name="Bio" value={bio} msgError="no biography yet" />
      <LabelBox name="Phone" value={phone} msgError="No phone number yet" />
      <LabelBox name="Email" value={email} msgError="No email yet" />
      <LabelBox name="Password" value={null} msgError="**********" />
    </section>
  );
};

export default Profile;

Profile.defaultProps = {
  user: PropTypes.shape({
    picture: null,
    bio: null,
    phone: null,
  }),
};
Profile.propTypes = UserPropType;
