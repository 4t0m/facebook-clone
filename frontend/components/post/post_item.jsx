import React from 'react';
import { Link, withRouter } from 'react-router';

class PostItem extends React.Component{

constructor(props){
  super(props);
  this.state = {
    editing: false,
    body: this.props.post.body,
  };
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
    removeEdit = (<div>
          <button className="deletePost" value={`${post.id}`} onClick={deletePost}>Delete</button>
          <button className="editPost" onClick={ ()=>this.setState({ editing: true})}>Edit</button>
      </div>
    );
  }

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
