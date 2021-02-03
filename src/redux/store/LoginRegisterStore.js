import { connect } from 'react-redux';

/** Selectors */
import { userSelector } from '../selectors/userSelector';
import { loadingAppSelector } from '../selectors/globalViewsSelector';
import { setToken } from '../actions/socketAction';

/** Actions */
import { initUser, updateUser } from '../actions/userActions';

/** Components */
import Login from '../../components/views/singin_singup/Login';
import Register from '../../components/views/singin_singup/Register';
import { toggleLoadingApp } from '../actions/viewsAction';
import { socketSelector } from '../selectors/socketSelector';

const mapStateToProps = (state) => ({
  user: userSelector(state),
  loadingApp: loadingAppSelector(state),
  socket: socketSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  updateUser: (user) => dispatch(updateUser(user)),
  initUser: (user) => dispatch(initUser(user)),
  updateLoadingApp: (bool) => dispatch(toggleLoadingApp(bool)),
});

export const LoginStore = connect(mapStateToProps, mapDispatchToProps)(Login);
export const RegisterStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
