import { connect } from 'react-redux';
import Menu from '../../components/common/Menu/Menu';

import { toggleMenu } from '../actions/uiAction';
import { socketSelector } from '../selectors/socketSelector';
import { uiToggleMenuSelector } from '../selectors/uiSelector';
import { userSelector } from '../selectors/userSelector';

const mapStateToProps = (state) => ({
  user: userSelector(state),
  isOpen: uiToggleMenuSelector(state),
  socket: socketSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (bool) => dispatch(toggleMenu(bool)),
});

export const MenuStore = connect(mapStateToProps, mapDispatchToProps)(Menu);
