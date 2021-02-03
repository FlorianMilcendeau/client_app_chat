import { connect } from 'react-redux';
import NavSideBar from '../../components/views/NavSideBar/NavSideBar';

import { togglePanel } from '../actions/uiAction';
import {
  uiTogglePanelSelector,
  uiToggleSideBarSelector,
} from '../selectors/uiSelector';

const mapStateToProps = (state) => ({
  isOpen: uiTogglePanelSelector(state),
  isSideBar: uiToggleSideBarSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  togglePanel: (bool) => dispatch(togglePanel(bool)),
});

export const NavSideBarStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSideBar);
