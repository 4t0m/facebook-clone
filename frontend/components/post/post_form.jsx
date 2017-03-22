import React from 'react';
import {Link, withRouter} from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // displayDelete: false,
      // displayPhoto: false,
      // image: null,
      // imageUrl: null,
      body: "",
      // author_id: null,
      // target_id: null,
      //
      // post_id: null,
      // commentBody: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateImage = this.updateImage.bind(this);
    // this.handler = this.handler.bind(this);
    // this.deletePost = this.deletePost.bind(this);
    // this.updateComment = this.updateComment.bind(this);
    // this.submitComment = this.submitComment.bind(this);
    // this.deleteComment = this.deleteComment.bind(this);
    // this.updatePost = this.updatePost.bind(this);
    // this.likePost = this.likePost.bind(this);
    // this.unlikePost = this.unlikePost.bind(this);
  }
  //
  //
  // handler(e){
  //   e.preventDefault();
  //   this.setState({
  //     displayDelete: !this.state.displayDelete
  //   });
  // }
  //
  // updateComment(e){
  //   const commentValue = e.currentTarget.value;
  //   const postId = parseInt(e.currentTarget.className.split(" ")[1]);
  //   this.setState({ post_id: postId });
  //   this.setState({ commentBody: commentValue });
  // }

  // submitComment(e){
  //   e.preventDefault(e);
  //   this.setState({
  //     commentBody: null
  //   });
  //
  //   const postId = e.currentTarget.className.split(" ")[1];
  //
  //   var formData = new FormData();
  //   formData.append("comment[body]", this.state.commentBody);
  //   formData.append("comment[author_id]", this.props.currentUser.id);
  //   formData.append("comment[post_id]", postId);
  //
  //   this.props.createComment(formData);
  // }

  // deleteComment(e){
  //   e.preventDefault();
  //   var commentId = e.currentTarget.value;
  //   this.props.deleteComment(commentId);
  // }

  // updatePost(id, body){
  //   var formData = new FormData();
  //   formData.append("post[body]", body);
  //   formData.append("post[id]", id);
  //   this.props.updatePost(formData);
  // }
  //
  //
  handleSubmit(e) {
    e.preventDefault(e);
    this.props.createPost(this.state, this.props.params.id);
  }

  updateForm(e) {
    const stateValue = e.currentTarget.value;
    this.setState({ body: stateValue });
  }
  //
  // updateImage(e){
  //   this.setState( {displayPhoto: true} );
  //   var file = e.currentTarget.files[0];
  //   var fileReader = new FileReader();
  //   fileReader.onloadend = function(){
  //     this.setState({ image: file, imageUrl: fileReader.result });
  //   }.bind(this);
  //
  //   if(file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }
  //
  // deletePost(e){
  //   e.preventDefault();
  //   var postId = e.currentTarget.value;
  //   this.props.deletePost(postId);
  // }

  // likePost(e){
  //   e.preventDefault();
  //   var postId = e.currentTarget.className;
  //   this.props.createLike({ liker_id: this.props.currentUser.id, post_id: postId});
  // }
  //
  // unlikePost(e){
  //   e.preventDefault();
  //   var likeId = e.currentTarget.className;
  //   this.props.deleteLike(likeId);
  // }

  render() {
    // let postPhoto = (<div className="newsfeed-photo-upload">
    //                    <img src={this.props.imageUrl}/>
    //                  </div>);
    //
    // <label className="newsfeed-image-upload">
    //   <div>Photo</div>
    //   <input type="file" onChange={this.props.updateImage}></input>
    // </label>
    // {this.props.displayPhoto && postPhoto}

    let placeHolder;
    if(this.props.currentUser) {
      if(this.props.currentUser.id === this.props.params.id){
        placeHolder = "What's on your mind?";
      }
      else{
        placeHolder = `Write something to ${this.props.user.fname}`;
      }
    }

    return(
      <form className="newsfeed-postform" onSubmit={this.handleSubmit}>

        <div className="newsfeed-post-content">
          <div className="newsfeed-post-body group">
            <Link className="poster-thumb-img" to={`/profile/${this.props.currentUser.id}`}>
              <img src={this.props.currentUser.photo_url}/>
            </Link>

            <textarea className="newsfeed-post-textarea"
                      value={this.props.body}
                      placeholder={this.props.placeHolder}
                      onChange = {this.updateForm}
            ></textarea>

          </div>
        </div>
        <input className="post-submit-button" type="submit" value="Post" />
      </form>
    );
  }
}


export default PostForm;
