import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { authenticateJwt, loginUser } from '../../../API/authAPI';

import Formulaire from './Formulaire/Formulaire';
import Message from '../../common/Message/Message';
import Loader from '../../common/Loader/Loader';

import styles from '../../../css/container-form.module.css';
import styles2 from './Formulaire/Formulaire.module.css';
import Auth from '../../../Authentication/Authentication';

const Login = ({
  socket,
  updateUser,
  loadingApp,
  updateLoadingApp,
  setToken,
}) => {
  const history = useHistory();
  const [buttonLoader, setbuttonLoader] = useState(false);
  const [infoLogin, setinfoLogin] = useState({
    success: false,
    message: '',
  });

  const login = async (client) => {
    setbuttonLoader(true);

    try {
      const response = await loginUser(JSON.parse(client));

      const { info, user, jwtToken } = response;

      const { token, expiresIn } = jwtToken;

      /** Redirection */
      if (info.success) {
        /** Set jwt token into local storage */
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expiresIn);

        // update state user redux
        updateUser(user);
        setinfoLogin(info);
        setbuttonLoader(false);

        setToken(token);
        Auth.logIn(() => history.push('dashboard/Welcome'));
      }
    } catch (error) {
      const { info } = error.response.data;
      setinfoLogin(info);
      setbuttonLoader(false);
    }
  };

  // check authenticate.
  useEffect(async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const data = await authenticateJwt();

        const { info, user } = data;

        /** connected successfully */
        if (info.success) {
          updateUser(user);
          setinfoLogin(info);

          socket.connect();

          Auth.logIn(() => history.push('dashboard/Welcome'));
        }
        updateLoadingApp(false);
      } catch (error) {
        if (error) {
          updateLoadingApp(false);
        }
      }
    } else {
      updateLoadingApp(false);
    }
  }, []);

  // Check socket connected.
  useEffect(() => {
    socket.on('disconnect', (reason) => {
      if (reason === 'transport close') {
        socket.connect(process.env.REACT_APP_SERVER_URL);
      }
    });
  }, []);

  return (
    <>
      {loadingApp ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          {infoLogin.message && (
            <Message success={infoLogin.success} message={infoLogin.message} />
          )}
          <h2 className={styles2.title}>Login</h2>
          <Formulaire
            requestApi={(client) => login(client)}
            valueInputSubmit="Send"
            setinfoLogin={(info) => setinfoLogin(info)}
            updateUser={(user) => updateUser(user)}
            loader={buttonLoader}
          />
          <p className={styles2.infoContinue}>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Don&apos;t have an account yet ?{' '}
            <Link to="/register">Register</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  setToken: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  loadingApp: PropTypes.bool.isRequired,
  updateLoadingApp: PropTypes.func.isRequired,
};
