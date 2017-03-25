import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/post_actions';
import { getPost } from '../../reducers/selectors';
import PostItem from './post_item';

const mapStateToProps = ({ posts, session }, ownProps) => {
  return {
    post: getPost(posts, ownProps.postId),
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePost: (post, postId) => dispatch(updatePost(post, postId)),
  deletePost: () => dispatch(deletePost(ownProps.postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
