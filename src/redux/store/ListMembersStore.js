import { connect } from 'react-redux';

import ListMembers from '../../components/common/ListMembers/ListMembers';

import { membersSelector } from '../selectors/channelSelector';

const mapStateToProps = (state) => ({
  members: membersSelector(state),
});

export const ListMembersStore = connect(mapStateToProps, null)(ListMembers);
