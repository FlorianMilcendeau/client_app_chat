import { connect } from 'react-redux';

import SendMessage from '../../components/common/SendMessage/SendMessage';

import { setMessage } from '../actions/channelAction';
import { currentChannel } from '../selectors/channelSelector';

import { socketSelector } from '../selectors/socketSelector';
import { userSelector } from '../selectors/userSelector';

const mapStateToProps = (state) => ({
  user: userSelector(state),
  socket: socketSelector(state),
  currentChannel: currentChannel(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});

export const SendMessageStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);
