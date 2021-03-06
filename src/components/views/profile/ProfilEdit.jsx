import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import submit from '../../../utils/confirm';

import UserPropType from '../../../propTypes/UserPropTypes';

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
import { userUpdate } from '../../../API/user';

const ProfilEdit = ({ user, updateUser }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const [isTooLength, setIsTooLength] = useState(0);
  const [isSuccess, setIsSuccess] = useState();
  const [picture, setPicture] = useState({});
  const newPassword = watch('password');
  const bio = watch('bio', '');

  const regExpEmail = new RegExp(
    /^([\w-]+)\.?([\w-]+)@([A-Za-z]+)\.([A-Za-z]{2,})$/
  );

  // new info user sent.
  const postForm = async (form) => {
    const { confirmPassword, ...client } = JSON.parse(JSON.stringify(form));
    const dataForm = new FormData();

    dataForm.append('info', JSON.stringify(client));
    dataForm.append('picture', picture);

    try {
      const response = await userUpdate(user.id, dataForm);
      const { info, user: currentUser } = response;

      setIsSuccess(info.success);

      // update state user in redux.
      if (info.success) {
        updateUser(currentUser);
      }
    } catch (error) {
      if (error) {
        setIsSuccess(error.response.data.success);
        throw error;
      }
    }
  };

  useEffect(() => {
    setIsTooLength(bio.length);
  }, [bio]);

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
        {isSuccess === false && (
          <Message
            success={isSuccess}
            message="No fields have been completed"
          />
        )}
        <h2>Change Info</h2>
        <p>Changed will be reflected to each services</p>
        <DropZone setpicture={(pic) => setPicture(pic)} />
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
                message: 'Bio required to be less than 300 characteres.',
              },
            })}
          />
          <span className={styles.maxChar}>{`${isTooLength}/300`}</span>
        </label>
        {errors.bio?.type === 'maxLength' && (
          <ErrorInput message={errors.bio.message} />
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
        <InputIcon
          icon={iconPassword}
          label="Confirm password"
          name="confirmPassword"
          type="password"
          isDisabled={!newPassword}
          register={register({
            validate: (value) =>
              !newPassword || newPassword === value
                ? true
                : 'New password and confirm new password does not match',

            minLength: {
              value: 8,
            },
          })}
        />
        {errors.confirmPassword?.type === 'validate' && (
          <ErrorInput message={errors.confirmPassword.message} />
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

ProfilEdit.propTypes = {
  ...UserPropType,
  updateUser: PropTypes.func.isRequired,
};
