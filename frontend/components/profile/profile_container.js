import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { fetchWall } from '../../actions/post_actions';
import { findFriendship, acceptFriendship }
  from '../../actions/friendship_actions';

import Profile from './profile';

const mapStateToProps = ({ session, user, friendship }, ownProps) => ({
  currentUser: session.currentUser,
  user,
  friendship
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: (data, id) => dispatch(updateUser(data, id)),
  findFriendship: friendUserId => dispatch(findFriendship(friendUserId)),
  fetchWall: id => dispatch(fetchWall(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
