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

const mapStateToProps = ({ posts, session }, ownProps) => {
  return {
    post: posts[ownProps.post_id],
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
