import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({ friendship, session, user }, ownProps) => {
  return {
    currentUser: session.currentUser,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: (post, userId) => dispatch(createPost(post, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
