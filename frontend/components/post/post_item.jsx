import React from 'react';
import { Link, withRouter } from 'react-router';
// import Comments from './comments';
// import LikerList from './likerList';

class PostItem extends React.Component{

constructor(props){
  super(props);
  this.state = {
    editing: false,
    // displayHidden: false,
    body: this.props.post.body,
  };
  // this.changeHiddenState = this.changeHiddenState.bind(this);
  this.updateForm = this.updateForm.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

updateForm(e){
  e.preventDefault();
  let updatedValue = e.currentTarget.value;
  this.setState({ body: updatedValue });
}

handleSubmit(e){
  e.preventDefault();
  this.setState({ editing: false });
  this.props.updatePost(this.state.body, this.props.post.id);
}

// changeHiddenState(e){
//   e.preventDefault();
//   this.setState({ displayHidden: !this.state.displayHidden });
// }

render() {
  const { post, deletePost, handler, displayDelete, currentUser, updateComment,
          submitComment, commentBody, dynamicSet, deleteComment, currentPostId,
          updatePost, likePost, unlikePost } = this.props;

  let postImage = (
    <div className="post-img">
      <img src={post.thumbnail}/>
    </div>
  );

  let nameLink;
  if (post.host_id === post.author_id){
    nameLink = (<Link className="post-name-link-real"
                      to={`/profile/${post.author_id}`}
                      >{`${post.author.firstname} ${post.author.lastname}`}
                </Link>);
  } else {
    // <img src={window.assets.smalltriangle}/>
    nameLink = (
      <div className="authorToTarget">
        <Link className="post-name-link-real"
              to={`/profile/${post.author_id}`}
              >{`${post.author.firstname} ${post.author.lastname}`}
        </Link>
        <span>></span>
        <Link className="post-name-link-real"
              to={`/profile/${post.host_id}`}
              > {`${post.host.firstname} ${post.host.lastname}`}
        </Link>
      </div>
    );
  }

  let removeEdit;
  if(currentUser && (currentUser.id === post.author_id || currentUser.id === post.host_id)){
    removeEdit = (
      <div className="deleteEdit">
        <div className="deleteContainer">
          <button className="deletePost" value={`${post.id}`} onClick={deletePost}>Delete</button>
          <div className="borderline"></div>
        </div>
        <button className="editPost" onClick={ ()=>this.setState({ editing: true})}>Edit</button>
      </div>
    );
  }

  // let likeToken;
  // let likeButton = (
  //   <a onClick={likePost} href='#' className={`${post.id} like-button`}>
  //     <img src={window.assets.like}/>
  //   </a>
  // );
  // if(post.likes && post.likes.length > 0){
  //   likeToken = (
  //     <div className="likeToken">
  //       <div>
  //         <img src={window.assets.likeToken}/>
  //       </div>
  //       <label className="showLikers">{post.likes.length}</label>
  //       <LikerList
  //         likers={post.likes.map((like) => like.liker)}
  //       />
  //     </div>
  //   );
  //   post.likes.forEach((like) => {
  //     if(currentUser && (like.liker_id === currentUser.id)){
  //       likeButton = (
  //         <a onClick={unlikePost} href='#' className={`${like.id} unlike-button`}>
  //           <img src={window.assets.unlike}/>
  //         </a>
  //       );
  //     }
  //   });
  // }

  // <div className="like-bar">
  //   {likeButton}
  //   {likeToken}
  // </div>

  // <Comments
  //   updateComment={updateComment}
  //   post={post}
  //   currentUser={currentUser}
  //   submitComment={submitComment}
  //   commentBody={commentBody}
  //   displayHidden={this.state.displayHidden}
  //   changeHiddenState={this.changeHiddenState}
  //   deleteComment={deleteComment}
  //   currentPostId={currentPostId}
  //   />


  if (this.state.editing){
    return (
       <div>
          <form className="newsfeed-postform" onSubmit={this.handleSubmit}>
            <div className="edit-sign">Edit Post</div>

            <div className="newsfeed-post-content">
              <div className="newsfeed-post-body group">
                <Link className="poster-thumb-img" to={`/profile/${post.author_id}`}>
                  <img src={currentUser.photo_url}/>
                </Link>
                { removeEdit }
                <textarea className="newsfeed-post-textarea"
                          value= { this.state.body }
                          onChange = {this.updateForm}
                ></textarea>

              </div>
            </div>
            <input className="post-submit-button" type="submit" value="Save" />
          </form>
        </div>
    );
  } else {
      return(
        <li className="post-item">
          <div className="post-content">
            <div className="post-top">
              <div className="post-author-thumb">
                <img src={post.thumbnail}/>
                <Link className="post-thumb-img" to={`/profile/${post.author_id}`}>
                </Link>
              </div>
              <div className="post-name-link">
                {nameLink}
                <div className="post-date">{post.date} at {post.time}</div>
              </div>
              { removeEdit }

            </div>

            <div className="post-text">
              {post.body}
            </div>
          </div>
        </li>
      );
  }
}
}


export default PostItem;
