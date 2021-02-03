import { connect } from 'react-redux';
import Profile from '../../components/views/profile/Profile';
import ProfilEdit from '../../components/views/profile/ProfilEdit';

import { toggleMenu } from '../actions/uiAction';
import { initUser, updateUser } from '../actions/userActions';
import { userSelector } from '../selectors/userSelector';

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  initUser: (user) => dispatch(initUser(user)),
  toggleMenu: (bool) => dispatch(toggleMenu(bool)),
});

export const ProfileStore = connect(mapStateToProps, null)(Profile);
export const ProfilEditStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilEdit);
