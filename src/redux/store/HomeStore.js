import { connect } from 'react-redux';

import Home from '../../components/views/Home/Home';

import { toggleMenu, toggleSideBar } from '../actions/uiAction';

import { currentChannel } from '../selectors/channelSelector';
import { socketSelector } from '../selectors/socketSelector';

const mapStateToProps = (state) => ({
  currentChannel: currentChannel(state),
  socket: socketSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (bool) => dispatch(toggleMenu(bool)),
  toggleSideBar: (bool) => dispatch(toggleSideBar(bool)),
});

export const HomeStore = connect(mapStateToProps, mapDispatchToProps)(Home);
