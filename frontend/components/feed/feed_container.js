import { connect } from 'react-redux';
import { getPosts } from '../../reducers/selectors';
import { createPost, fetchFeed, fetchWall } from '../../actions/post_actions';
import Feed from './feed';

const mapStateToProps = ({ posts, session, friendship }) => {
  return {
    posts: getPosts(posts),
    currentUser: session.currentUser,
    friendship
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  fetchWall: id => dispatch(fetchWall(id)),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
