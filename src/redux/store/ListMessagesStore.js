import { connect } from 'react-redux';

import ListMessage from '../../components/common/ListMessage/ListMessage';
import { deleteMessage, updateUnshiftMessage } from '../actions/channelAction';

import {
  channelIdSelector,
  messagesSelector,
} from '../selectors/channelSelector';
import { socketSelector } from '../selectors/socketSelector';
import { userIdSelector } from '../selectors/userSelector';

const mapStateToProps = (state) => ({
  socket: socketSelector(state),
  messages: messagesSelector(state),
  userId: userIdSelector(state),
  channelId: channelIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (id) => dispatch(deleteMessage(id)),
  updateUnshiftMessage: (message) => dispatch(updateUnshiftMessage(message)),
});

export const ListMessagesStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMessage);
