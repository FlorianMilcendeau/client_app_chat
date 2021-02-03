import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import LabelBox from '../../common/LabelBox';

import styles from './Profile.module.css';
import styles2 from '../../../css/Button.module.css';

const Profile = ({ user }) => {
  const { name, email, phone, bio, picture } = user;
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
          src={picture ? picture : 'https://via.placeholder.com/150'}
          alt="none"
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
Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    bio: PropTypes.string,
    phone: PropTypes.string,
  }),
};
