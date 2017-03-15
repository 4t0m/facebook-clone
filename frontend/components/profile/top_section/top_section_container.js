import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../../actions/user_actions';
import { findFriendship, createFriendship, removeFriendship, acceptFriendship }
  from '../../../actions/friendship_actions';

import TopSection from './top_section';

const mapStateToProps = ({ session, user, friendship }, ownProps) => ({
  currentUser: session.currentUser,
  user,
  friendship
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: (data, id) => dispatch(updateUser(data, id)),
  findFriendship: friendUserId => dispatch(findFriendship(friendUserId)),
  createFriendship: friendUserId => dispatch(createFriendship(friendUserId)),
  removeFriendship: friendshipId => dispatch(removeFriendship(friendshipId)),
  acceptFriendship: friendshipId => dispatch(acceptFriendship(friendshipId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopSection);
