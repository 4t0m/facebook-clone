import React from 'react';

class TopSection extends React.Component {
  constructor(params) {
    super(params);

    this.createFriendship = this.createFriendship.bind(this);
    this.removeFriendship = this.removeFriendship.bind(this);
    this.acceptFriendship = this.acceptFriendship.bind(this);
    this.uploadNewPhoto = this.uploadNewPhoto.bind(this);
    this.updateCoverPicButton = this.updateCoverPicButton.bind(this);
    this.uploadCoverPhoto = this.uploadCoverPhoto.bind(this);
  }

  createFriendship() {
    this.props.createFriendship(this.props.params.id);
  }

  removeFriendship() {
    this.props.removeFriendship(this.props.friendship.id);
  }

  acceptFriendship() {
    this.props.acceptFriendship(this.props.friendship.id);
  }

  updateProfilePicButton() {
    if (this.props.currentUser) {
      if (this.props.params.id === this.props.currentUser.id) {
        return (
          <div className="profile-picture-editpic" onClick={ () => {
            $('#profile-pic-input').click()
          }}>
            <form className="profile-picture-form" >
              <input id="profile-pic-input" type="file" name="" value="" onChange={this.uploadNewPhoto}/>
            </form>
          </div>
        );
      } else {
        return (<div></div>);
      }
    } else {
      return (<div></div>)
      }
  }

  updateCoverPicButton() {
    return (
      <div className="profile-cover-editpic" onClick={ () => {
        $('#profile-cover-input').click()
      }}>

        <div>Upload Cover Photo</div>
        <form className="profile-cover-form" >
          <input id="profile-cover-input" type="file" name="" value="" onChange={this.uploadCoverPhoto}/>
        </form>
      </div>

    )
  }

  uploadCoverPhoto(e) {
    var file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[coverpic]", file);
    this.props.updateUser(formData);
  }

  uploadNewPhoto(e) {
    var file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[profilepic]", file);
    this.props.updateUser(formData).then(() => this.refreshPostsAfterUpload() );
  }

  friendButton() {
    if (this.props.friendship && this.props.friendship.id) {
      if (this.props.friendship.status === "accepted") {
        return(
          <div onClick={this.removeFriendship}>
            <div className="profile-cover-friend-status friended">Friends</div>
            <div className="profile-cover-friend-toggle friended">Unfriend</div>
          </div>
        );
      } else {
        if (this.props.friendship.user1_id == this.props.params.id) {
          return(<div onClick={this.acceptFriendship}>Accept Request</div>);
        } else {
          return(
            <div onClick={this.removeFriendship}>
              <div className="profile-cover-friend-status pending">Pending Request</div>
              <div className="profile-cover-friend-toggle pending">Cancel Request</div>
            </div>
          );
        }
      }
    } else {
      if (this.props.currentUser) {
        if (this.props.params.id == this.props.currentUser.id) {
          return this.updateCoverPicButton();
        } else {
          return(<div onClick={this.createFriendship}>Add Friend</div>);
        }
      }
    }
  }

  render() {
    const fullName = this.props.user ? `${this.props.user.fname} ${this.props.user.lname}` : "";
    const firstName = this.props.user ? `${this.props.user.fname}` : "";
    const userCoverPic = this.props.user ? this.props.user.cover_pic : "";
    // const coverStyle = {backgroundImage:"url("+userCoverPic+")"};
    const coverStyle = {};
    const userProfilePic = this.props.user ? this.props.user.profile_pic : "";
    // const profileStyle = {backgroundImage:"url("+userProfilePic+")"};
    const profileStyle = {};

    return (
      <div className="profile-top-section">
        <div className="profile-cover-photo" style={coverStyle}>
          <div className="profile-cover-info">
            <div className="profile-cover-name">{fullName}</div>
          </div>
          <div className="profile-cover-buttons">
            <div className="profile-cover-friend">{this.friendButton()}</div>
          </div>
        </div>

        <div className="profile-topper-bottom">
          <div className="profile-picture">
            <div className="profile-picture-picture" style={profileStyle}>
              {this.updateProfilePicButton()}
            </div>
          </div>
          <ul className="profile-navigation">
            <li><a>Timeline</a></li>
            <li><a>About</a></li>
            <li><a>Friends</a></li>

          </ul>
        </div>
      </div>
    );
  }
}


export default TopSection;
