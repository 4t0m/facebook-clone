// handler={this.handler}
// displayDelete={this.state.displayDelete}
// updateComment={this.updateComment}
// submitComment={this.submitComment}
// commentBody={this.state.commentBody}
// dynamicSet={this.dynamicSet}
// deleteComment={this.deleteComment}
// currentPostId={this.state.post_id}
// likePost={this.likePost}
// unlikePost={this.unlikePost}/>)


import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/post_actions';
import PostItem from './post_item';

const mapStateToProps = ({ posts, session }, ownProps) => {
  return {
    post: posts[ownProps.postId],
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
