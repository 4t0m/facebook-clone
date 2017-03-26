import React from 'react';
import {Link, withRouter} from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(e);
    let hostId = this.props.params.id || this.props.currentUser.id;
    this.props.createPost(this.state, hostId);
    this.setState({body: ""});
  }

  updateForm(e) {
    const stateValue = e.currentTarget.value;
    this.setState({ body: stateValue });
  }

  render() {
    if(this.props.currentUser && this.props.currentUser.id) {
      let placeHolder;
      if(!this.props.params.id || this.props.currentUser.id == this.props.params.id){
        placeHolder = "What's on your mind?";
      }
      else{
        placeHolder = `Write something to ${this.props.user.fname}`;
      }
      return(
        <form className="newsfeed-postform" onSubmit={this.handleSubmit}>

          <div className="newsfeed-post-content">
            <div className="newsfeed-post-body group">
              <Link className="poster-thumb-img" to={`/profile/${this.props.currentUser.id}`}>
                <img src={this.props.currentUser.profile_pic_url}/>
              </Link>

              <textarea className="newsfeed-post-textarea"
                value={this.state.body}
                placeholder={placeHolder}
                onChange = {this.updateForm}
                ></textarea>

            </div>
          </div>
          <input className="post-submit-button" type="submit" value="Post" />
        </form>
      );
    } else {
      return(
        <div></div>
      );
    }

  }
}


export default PostForm;
