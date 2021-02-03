import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../Authentication/Authentication';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) =>
        Auth.isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      // eslint-disable-next-line react/jsx-curly-newline
    }
  />
);

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
