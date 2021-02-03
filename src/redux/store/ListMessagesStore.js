import { connect } from 'react-redux';

import ListMessage from '../../components/common/ListMessage/ListMessage';

import { messagesSelector } from '../selectors/channelSelector';
import { userIdSelector } from '../selectors/userSelector';

const mapStateToProps = (state) => ({
  messages: messagesSelector(state),
  userId: userIdSelector(state),
});

export const ListMessagesStore = connect(mapStateToProps, null)(ListMessage);
