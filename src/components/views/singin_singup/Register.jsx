import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { registerUser } from '../../../API/authAPI';

import Formulaire from './Formulaire/Formulaire';
import Message from '../../common/Message/Message';

import styles from '../../../css/container-form.module.css';
import styles2 from './Formulaire/Formulaire.module.css';
import Auth from '../../../Authentication/Authentication';

const Register = ({ updateUser, loadingApp, updateLoadingApp, setToken }) => {
  const history = useHistory();
  const [infoRegister, setinfoRegister] = useState({
    success: false,
    message: '',
  });

  const postRegister = async (client) => {
    try {
      const response = await registerUser(JSON.parse(client));

      const { info, user, jwtToken } = response;
      const { token } = jwtToken;

      /** Redirection */
      if (info.success) {
        /** Set jwt token into local storage */
        localStorage.setItem('token', token);

        // update state user redux
        updateUser(user);
        setinfoRegister(info);
        updateLoadingApp(false);

        setToken(token);
        Auth.logIn(() => history.push('dashboard/Welcome'));
      }
    } catch (error) {
      const { info } = error.response.data;
      setinfoRegister(info);
      updateLoadingApp(false);
    }
  };

  useEffect(() => {
    updateLoadingApp(false);
  }, []);

  return (
    <div className={styles.container}>
      {infoRegister.message && (
        <Message
          success={infoRegister.success}
          message={infoRegister.message}
        />
      )}
      <div>
        <h2>Join thousands of learners from around the world</h2>
        <p>
          Master web developement by real-life project, there are multiple paths
          for you to choose
        </p>
      </div>
      <Formulaire
        requestApi={(client) => postRegister(client)}
        valueInputSubmit="Register"
        loader={loadingApp}
      />
      <p className={styles2.infoContinue}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        Already a member ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;

Register.propTypes = {
  updateUser: PropTypes.func.isRequired,
  loadingApp: PropTypes.bool.isRequired,
  setToken: PropTypes.func.isRequired,
  updateLoadingApp: PropTypes.func.isRequired,
};
