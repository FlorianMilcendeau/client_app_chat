import { connect } from 'react-redux';
import Members from '../../components/common/Members/Members';

import { togglePanel } from '../actions/uiAction';

import { currentChannel } from '../selectors/channelSelector';
import { uiTogglePanelSelector } from '../selectors/uiSelector';

const mapStateToProps = (state) => ({
  isOpen: uiTogglePanelSelector(state),
  currentChannel: currentChannel(state),
});

const mapDispatchToProps = (dispatch) => ({
  togglePanel: (bool) => dispatch(togglePanel(bool)),
});

export const MembersStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
