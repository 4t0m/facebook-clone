import React from 'react';


class AboutInfo extends React.Component {
  constructor(props){
    super(props);
    this.submitProfileEdit = this.submitProfileEdit.bind(this);
    this.state = { saveStatus: "" };
  }

  parseDateString(dateString) {
    return dateString.split("-");
  }

  submitProfileEdit() {
    let dateString = $('input[name="birthday"]').val();
    let year, month, day;
    [year, month, day] = this.parseDateString(dateString);

    let formData = new FormData();
    formData.append("user[birthday]", new Date(year, month - 1, day));
    formData.append("user[relationship]", $('input[name="relationship"]').val());
    formData.append("user[school]", $('input[name="school"]').val());
    formData.append("user[workplace]", $('input[name="workplace"]').val());
    formData.append("user[home_town]", $('input[name="hometown"]').val());
    formData.append("user[current_city]", $('input[name="currentCity"]').val());

    this.props.updateUser(formData, this.props.currentUser.id).then(() => this.setState({ saveStatus: "Saved" }));

  }

  saveEditButton() {
    if (this.props.user) {
      if (this.props.currentUser &&
        this.props.currentUser.id === this.props.user.id) {
        return <div className="about-user-save-button"
          onClick={this.submitProfileEdit}>Save Changes</div>;
      }
    }
  }

  thisUserInfo() {
    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;

    let setEditing = () => this.setState({ saveStatus: "Unsaved"} );

    birthday = (<li>Birthday: <input type="date" name="birthday"
      defaultValue={this.props.user.birthday}  onChange={setEditing}/></li>);
    currentCity = (<li>Lives in <input type="text" name="currentCity"
      defaultValue={this.props.user.current_city}  onChange={setEditing}/></li>);
    hometown = (<li>From <input type="text" name="hometown"
      defaultValue={this.props.user.home_town}  onChange={setEditing}/></li>);
    school = (<li>Studied at <input type="text" name="school"
      defaultValue={this.props.user.school}  onChange={setEditing}/></li>);
    workplace = (<li>Works at <input type="text" name="workplace"
      defaultValue={this.props.user.workplace}  onChange={setEditing}/></li>);
    relationshipStatus = (<li>
      Relationship Status: <input type="text" name="relationship"
      defaultValue={this.props.user.relationship} onChange={setEditing}/>
      </li>);

    return(
      <ul className="about-user">
        {birthday}
        {currentCity}
        {hometown}
        {school}
        {workplace}
        {relationshipStatus}
      </ul>
    );
  }

  otherUserInfo() {
    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;

    if(this.props.user.birthday){
      birthday = (<li><span>Birthday:</span> {this.props.user.birthday.slice(5,10)}</li>);
    }
    if(this.props.user.current_city){
      currentCity = (<li><span>Lives in</span> {this.props.user.current_city}</li>);
    }
    if(this.props.user.home_town){
      hometown = (<li><span>From</span> {this.props.user.home_town}</li>);
    }
    if(this.props.user.school){
      school = (<li><span>Studied at</span> {this.props.user.school}</li>);
    }
    if(this.props.user.workplace){
      workplace = (<li><span>Works at</span> {this.props.user.workplace}</li>);
    }
    if(this.props.user.relationship){
      relationshipStatus = (
        <li><span>Relationship Status:</span> {this.props.user.relationship}</li>
      );
    }

    return(
      <ul className="about-other">
        {birthday}
        {currentCity}
        {hometown}
        {school}
        {workplace}
        {relationshipStatus}
      </ul>
    );
  }

  render () {
    if (this.props.user){
      let aboutInfo, infoClass;

      if (this.props.currentUser &&
        this.props.currentUser.id === this.props.user.id) {
        aboutInfo = this.thisUserInfo();
        infoClass = "own-info";
      } else {
        aboutInfo = this.otherUserInfo();
        infoClass = "other-info";
      }

      return (
        <div className={`about-info ${infoClass}`}>
          <div className="about-info-header">
            <h3>Intro</h3>
            <div className="about-user-save"><p>{this.state.saveStatus}</p> {this.saveEditButton()}</div>
          </div>
          {aboutInfo}
        </div>
      );
    } else {
      return (<div>No information</div>);
    }
  }
}

export default AboutInfo;
