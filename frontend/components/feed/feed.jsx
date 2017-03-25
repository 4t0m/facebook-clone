import React from 'react';
import { Link, withRouter } from 'react-router';
// import Comments from '../comments';
import PostItemContainer from '../post/post_item_container';
// import SelectedFriends from '../selectedFriends';
import PostFormContainer from '../post/post_form_container';
// import ProfileContent from './profileContent';

class Feed extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   displayDelete: false,
    //   displayPhoto: false,
    //   image: null,
    //   imageUrl: null,
    //   body: "",
    //   author_id: null,
    //   target_id: null,
    //
    //   post_id: null,
    //   commentBody: ""
    // };

    // this.updateForm = this.updateForm.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  componentDidUpdate(prevProps){
    if(prevProps.params !== this.props.params) {
      if (this.props.params.id) {
        this.props.fetchWall(this.props.params.id);
      } else {
        this.props.fetchFeed(this.props.currentUser.id);
      }
    }
  }

  componentDidMount(){
    if (this.props.params.id) {
      this.props.fetchWall(this.props.params.id);
    } else {
      this.props.fetchFeed(this.props.currentUser.id);
    }
  }
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
  // handleSubmit(e){
  //   e.preventDefault(e);
  //   this.setState({
  //     displayPhoto: false,
  //     image: null,
  //     imageUrl: null,
  //     body: "",
  //     author_id: null,
  //     target_id: null
  //   });
  //
  //   var formData = new FormData();
  //   formData.append("post[body]", this.state.body);
  //   if (this.state.image) {
  //     formData.append("post[image]", this.state.image);
  //   }
  //   formData.append("post[author_id]", this.state.author_id);
  //   formData.append("post[target_id]", this.state.target_id);
  //
  //   this.props.createPost(formData);
  // }
  //
  // updateForm(e){
  //   const stateValue = e.currentTarget.value;
  //   this.setState({ body: stateValue });
  //   this.setState({ author_id: this.props.currentUser.id });
  //   this.setState({ target_id: this.props.profile.id });
  // }
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

  render(){
    let posts = this.props.posts;
    // let postPhoto = (<div className="newsfeed-photo-upload">
    //                    <img src={this.state.imageUrl}/>
    //                  </div>);
    // let currentUser = {};


    let postForm;
    // if(this.props.friendNames.includes(this.props.targetusername) || currentUser.username === this.props.targetusername){
      postForm = <PostFormContainer params={this.props.params}/>;
    // }
    //
    // let profilePairs = Object.assign({}, this.props.profile);
    // delete profilePairs.photo_url;
    // delete profilePairs.background_url;
    // delete profilePairs.id;
    // delete profilePairs.username;
    // let profileKeys = Object.keys(profilePairs);
    // //
    // let edit = (
    //   <div></div>
    // );
    // if (this.props.currentUser && (this.props.currentUser.id === this.props.profile.id)){
    //   edit = (
    //     <Link className="profile-linkto" to={`/home/${this.props.currentUser.username}/about`}>Edit</Link>
    //   );
    // }

    return(
      // <main className="main-feed">
      //   <section className="left-pane">
      //     <div className="profile-area">
      //       <div className="profile-info">
      //         <div>
      //           <img src={window.assets.profileLabel}/>
      //         </div>
      //         <label>Intro</label>
      //         {edit}
      //       </div>
      //       <ProfileContent profilePairs={profilePairs}/>
      //     </div>
        //
        //   <div className="friends-area">
        //     <div className="friends-info">
        //       <div>
        //         <img src={window.assets.friendsIcon}/>
        //       </div>
        //       <div>
        //         <Link className="friends-linkto" to={`/home/${this.props.profile.username}/friends`}>Friends</Link>
        //         <label className="friends-numbers">{this.props.friendNames.length}</label>
        //       </div>
        //     </div>
        //     <SelectedFriends friends={this.props.userFriends} selectedFriendKeys={this.props.selectedFriendKeys}/>
        //   </div>
        // </section>

        <section className="newsfeed-post-section wall">
          {postForm}

          <ul className="newsfeed-posts">
            {
              posts.map(post =>
                <PostItemContainer key={post.id} postId={post.id}
                  params={this.props.params}/>
              )
            }
          </ul>
        </section>
      // </main>
    );
  }
}


export default Feed;
