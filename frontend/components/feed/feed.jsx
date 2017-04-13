import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItemContainer from '../post/post_item_container';
import PostFormContainer from '../post/post_form_container';

class Feed extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
    if (this.props.currentUser) {
      if(prevProps.params !== this.props.params) {
        if (this.props.params.id) {
          this.props.fetchWall(this.props.params.id);
        } else {
          this.props.fetchFeed(this.props.currentUser.id);
        }
      }
    }

  }

  componentDidMount(){
    if (this.props.currentUser) {
      if (this.props.params.id) {
        this.props.fetchWall(this.props.params.id);
      } else {
        this.props.fetchFeed(this.props.currentUser.id);
      }
    }
  }

  render(){
    if (!this.props.currentUser) {
      return <div></div>;
    }

    let posts = this.props.posts;
    let postForm;
    if ((this.props.friendship && this.props.friendship.id)) {
      if (this.props.friendship.status === "accepted") {
        postForm = <PostFormContainer params={this.props.params}/>;
      }
    } else if (this.props.params.id == this.props.currentUser.id) {
      postForm = <PostFormContainer params={this.props.params}/>;
    } else if (!this.props.params.id) {
      postForm = <PostFormContainer params={this.props.params}/>;
    } else {
      postForm = <div></div>;
    }

    return(
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
    );
  }
}


export default Feed;
