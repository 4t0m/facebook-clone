import React from 'react';
import { hashHistory, Link } from 'react-router';
import HeaderContainer from '../header/header_container';
import TopSectionContainer from './top_section/top_section_container';
import AboutInfo from './about_info';
import Friends from './friends';
import FeedContainer from '../feed/feed_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
    this.props.findFriendship(this.props.params.id);
    this.props.fetchWall(this.props.params.id);

  }


  componentWillUpdate(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id);
      this.props.findFriendship(nextProps.params.id);
      this.props.fetchWall(nextProps.params.id);
    }
  }

  render () {
    return <div>
      <HeaderContainer />
      <div className="profile-container">
        <div className="profile-body">
          <TopSectionContainer params={this.props.params}/>
          <div className="profile-main">
            <section className="profile-main-left">
              <AboutInfo user={this.props.user} currentUser={this.props.currentUser}
                updateUser={this.props.updateUser}/>
              <Friends />
            </section>
            <FeedContainer params={this.props.params}/>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Profile;
