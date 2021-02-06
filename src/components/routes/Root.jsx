import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import {
  LoginStore,
  RegisterStore,
} from '../../redux/store/LoginRegisterStore';
import ProfileRoute from './ProfileRoute';
import { DashboardStore } from '../../redux/store/DashboardStore';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterStore} />
        <Route path="/login" component={LoginStore} />
        <ProtectedRoute path="/dashboard" component={DashboardStore} />
        <ProfileRoute path="/profile" />
        <Redirect path="/*" to="/login" component={LoginStore} />
      </Switch>
    </Router>
  );
};

export default Root;
