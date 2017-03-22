// handleSubmit={this.handleSubmit}
// updateImage={this.updateImage}
// body={this.state.body}
// updateForm={this.updateForm}
// displayPhoto={this.state.displayPhoto}
// imageUrl={this.state.imageUrl}
// placeHolder={placeHolder}
//


import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({ posts, session, user }, ownProps) => {
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
