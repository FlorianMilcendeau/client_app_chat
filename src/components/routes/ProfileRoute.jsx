import React from 'react';
import PropTypes from 'prop-types';

import ProtectedRoute from './ProtectedRoute';
import { ProfilEditStore, ProfileStore } from '../../redux/store/ProfileStore';

import { MenuStore } from '../../redux/store/MenuStore';

const ProfileRoute = ({ path }) => {
  return (
    <>
      <MenuStore />
      <ProtectedRoute exact path={`${path}/:name`} component={ProfileStore} />
      <ProtectedRoute path={`${path}/:name/edit`} component={ProfilEditStore} />
    </>
  );
};

export default ProfileRoute;

ProfileRoute.propTypes = {
  path: PropTypes.string.isRequired,
};
