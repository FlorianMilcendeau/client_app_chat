import { connect } from 'react-redux';
import Dashboard from '../../components/routes/dashboard/Dashboard';

import {
  setMessage,
  updateChannels,
  updateMessage,
} from '../actions/channelAction';
import { socketSelector } from '../selectors/socketSelector';

const mapStateToProps = (state) => ({
  socket: socketSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateChannel: (info) => dispatch(updateChannels(info)),
  updateMessage: (message) => dispatch(updateMessage(message)),
  setMessages: (messages) => dispatch(setMessage(messages)),
});

export const DashboardStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
