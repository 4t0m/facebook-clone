import React from 'react';
import { hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => (this.setState( {[field]: e.target.value } ));
  }

  render () {
    const nameErrorIcon = <img src="https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/005/original/cancel.png?1492112101"></img>;
    const errorIcon = <img src="https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/005/original/cancel.png?1492112101"></img>;
    const firstnameErr = this.props.session.errors["fname"] ? nameErrorIcon : "";
    const lastnameErr = this.props.session.errors["lname"] ? nameErrorIcon : "";
    const emailErr = this.props.session.errors["email"] ? errorIcon : "";
    const passwordErr = this.props.session.errors["password"] ? errorIcon : "";

    const firstnameErrText = this.props.session.errors["fname"] ? "First Name " + this.props.session.errors["fname"][0] : "";
    const lastnameErrText = this.props.session.errors["lname"] ? "Last Name " + this.props.session.errors["lname"][0] : "";
    const emailErrText = this.props.session.errors["email"] ? "Email " + this.props.session.errors["email"][0] : "";
    const passwordErrText = this.props.session.errors["password"] ? "Password " + this.props.session.errors["password"][0] : "";

    let errorMessage = "";
    const hasErrors = () => ["fname", "lname", "email", "password"].some(type => {
      return this.props.session.errors[type]

    });

    if (hasErrors()) {
      errorMessage = "There was a problem creating your account.\nHover over warning the icons for more information. "
    }

    return (
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <section className="heading">
            <h1>Sign Up</h1>
            <p>It's free and always will be.</p>
          </section>

          <section className="name-input">
            <div className="input-container">
              <input type="text" onChange={this.update('fname')} className="fname"
                placeholder="First Name" value={this.state.fname} />
              <div className="error error-name">
                {firstnameErr}
                <span className="error-text">{firstnameErrText}</span>
              </div>
            </div>
            <div className="input-container">
              <input type="text" onChange={this.update('lname')}
                placeholder="Last Name" value={this.state.lname} />
              <div className="error error-name">
                {lastnameErr}
                <span className="error-text">{lastnameErrText}</span>
              </div>
            </div>


          </section>

          <div className="input-container">
            <input type="text" onChange={this.update('email')}
              placeholder="Email" value={this.state.email} />
            <div className="error">
              {emailErr}
              <span className="error-text">{emailErrText}</span>
            </div>
          </div>

          <div className="input-container">
            <input type="password" onChange={this.update('password')}
              placeholder="Password" value={this.state.password} />
            <div className="error">
              {passwordErr}
              <span className="error-text">{passwordErrText}</span>
            </div>
          </div>



          <input className="large-button create-account" type='submit' value="Create Account" />
          <p>{errorMessage}</p>
        </form>
    );
  }
}

export default SignupForm;
