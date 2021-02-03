import { connect } from 'react-redux';

import ListChannels from '../../components/common/ListChannels/ListChannels';

import { channelSelector, currentChannel } from '../selectors/channelSelector';

import { setMessage, updateCurrentChannel } from '../actions/channelAction';
import { togglePanel } from '../actions/uiAction';

const mapStateToProps = (state) => ({
  channels: channelSelector(state),
  currentChannel: currentChannel(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentChannel: (channel) => dispatch(updateCurrentChannel(channel)),
  togglePanel: (bool) => dispatch(togglePanel(bool)),
  setMessage: (message) => dispatch(setMessage(message)),
});

export const ListChannelsStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListChannels);
