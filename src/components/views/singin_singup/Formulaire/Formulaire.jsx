import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import InputIcon from '../../../common/InputIcon/InputIcon';
import Loader from '../../../common/Loader/Loader';
import ErrorInput from '../../../common/ErrorInput/ErrorInput';

import styles from './Formulaire.module.css';
import styles2 from '../../../common/Loader/Loader.module.css';

import iconPassword from '../../../../assets/icons/password.svg';
import iconMail from '../../../../assets/icons/mail.svg';

const Formulaire = ({ requestApi, valueInputSubmit, loader }) => {
  const { register, errors, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { isDirty } = formState;

  const regExpEmail = new RegExp(/^([\w-]+)@([A-Za-z]+)\.([A-Za-z]{2,})$/);

  const onSubmit = (data) => {
    requestApi(JSON.stringify(data));
  };

  return (
    <form className={styles.formulaire} onSubmit={handleSubmit(onSubmit)}>
      <InputIcon
        label="E-mail"
        type="email"
        name="email"
        icon={iconMail}
        register={register({
          required: true,
          pattern: { value: regExpEmail, message: 'E-mail invalid' },
        })}
      />
      {errors.email?.type === 'pattern' && (
        <ErrorInput message={errors.email.message} />
      )}
      {errors.email?.type === 'required' && (
        <ErrorInput message="E-mail is required." />
      )}
      <InputIcon
        label="Password"
        type="password"
        name="password"
        icon={iconPassword}
        register={register({
          required: true,
          minLength: { value: 8, message: 'Password invalid' },
        })}
      />
      {errors.password?.type === 'minLength' && (
        <ErrorInput message={errors.password.message} />
      )}
      {errors.password?.type === 'required' && (
        <ErrorInput message="Password required to be more than 8." />
      )}
      <button
        className={`${styles.submitButton} ${!isDirty && styles.buttonDisable}`}
        type="submit"
        disabled={!isDirty}
      >
        {loader ? <Loader size={styles2.loaderXS} /> : valueInputSubmit}
      </button>
    </form>
  );
};

export default Formulaire;

Formulaire.propTypes = {
  requestApi: PropTypes.func.isRequired,
  valueInputSubmit: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
};
