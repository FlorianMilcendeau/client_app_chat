import { connect } from 'react-redux';
import ListMessage from '../../components/common/ListMessage/ListMessage';
import { messagesSelector } from '../selectors/channelSelector';

const mapStateToProps = (state) => ({
  messages: messagesSelector(state),
});

export const ListMessagesStore = connect(mapStateToProps, null)(ListMessage);
