import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import submit from '../../../utils/confirm';

import Message from '../../common/Message/Message';
import DropZone from '../../common/Dropzone/DropZone';
import InputIcon from '../../common/InputIcon/InputIcon';
import ReturnBack from '../../common/ReturnBack/ReturnBack';
import ErrorInput from '../../common/ErrorInput/ErrorInput';

import iconMail from '../../../assets/icons/mail.svg';
import iconPassword from '../../../assets/icons/password.svg';
import iconPhone from '../../../assets/icons/phone.svg';
import iconArticle from '../../../assets/icons/article.svg';

import styles from './Profile.module.css';
import styles3 from '../../../css/Button.module.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProfilEdit = ({ user, updateUser }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isSuccess, setisSuccess] = useState(false);
  const [picture, setpicture] = useState({});

  const regExpEmail = new RegExp(/^([\w-]+)@([A-Za-z]+)\.([A-Za-z]{2,3})$/);

  // new info user sent.
  const postForm = (form) => {
    const client = JSON.stringify(form);
    const dataForm = new FormData();

    dataForm.append('info', client);
    dataForm.append('picture', picture);

    const token = localStorage.getItem('token');

    Axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/user/${user.id}`,
      dataForm,
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then((res) => {
        const { info, user: currentUser } = res.data;

        setisSuccess(info.success);

        // update state user in redux.
        if (info.success) {
          updateUser(currentUser);
        }
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

  return (
    <section className={styles.wrapperProfile}>
      <ReturnBack />
      <form
        className={styles.profileInfo}
        onSubmit={(e) => {
          submit(
            e,
            'Confirm to changed your personnal info',
            'Are you sure to do this.',
            handleSubmit(postForm)
          );
        }}
      >
        {isSuccess && (
          <Message
            success={isSuccess}
            message="Your personnal information has been changed"
          />
        )}
        <h2>Change Info</h2>
        <p>Changed will be reflected to each services</p>
        <DropZone setpicture={(pic) => setpicture(pic)} />
        <InputIcon
          icon={iconArticle}
          label="name"
          name="name"
          type="text"
          register={register({
            minLength: {
              value: 2,
              message: 'Name required to be more than 2.',
            },
          })}
        />
        <label className={styles.labelInput} htmlFor="bio">
          Bio
          <textarea
            className={styles.inputText}
            name="bio"
            id="bio"
            cols="40"
            rows="5"
            placeholder="Enter your bio..."
            ref={register({
              maxLength: {
                value: 300,
                message: 'Password required to be less than 300.',
              },
            })}
          />
        </label>
        {errors.password?.type === 'minLength' && (
          <ErrorInput message={errors.password.message} />
        )}
        <InputIcon
          icon={iconPhone}
          label="Number phone"
          name="phone"
          type="tel"
          register={register}
        />
        <InputIcon
          icon={iconMail}
          label="New e-mail"
          name="email"
          type="name"
          register={register({
            pattern: { value: regExpEmail, message: 'E-mail invalid' },
          })}
        />
        {errors.email?.type === 'pattern' && (
          <ErrorInput message={errors.email.message} />
        )}
        <InputIcon
          icon={iconPassword}
          label="New password"
          name="password"
          type="password"
          register={register({
            minLength: {
              value: 8,
              message: 'Password required to be more than 8.',
            },
          })}
        />
        {errors.password?.type === 'minLength' && (
          <ErrorInput message={errors.password.message} />
        )}
        <input
          className={`${styles3.button} ${styles3.primary}`}
          type="submit"
          value="Save"
        />
      </form>
    </section>
  );
};

export default ProfilEdit;

ProfilEdit.defaultProps = {
  user: PropTypes.shape({
    picture: null,
    bio: null,
    phone: null,
  }),
};

ProfilEdit.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    bio: PropTypes.string,
    phone: PropTypes.string,
  }),
  updateUser: PropTypes.func.isRequired,
};
