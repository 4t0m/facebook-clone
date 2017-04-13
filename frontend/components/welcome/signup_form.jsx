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
    const nameErrorWarning = <img className="error-icon error-icon-name" src="https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/005/original/cancel.png?1492112101"></img>;
    const errorWarning = <img className="error-icon" src="https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/005/original/cancel.png?1492112101"></img>;
    const firstnameErr = this.props.session.errors["fname"] ? nameErrorWarning : "";
    const lastnameErr = this.props.session.errors["lname"] ? nameErrorWarning : "";
    const emailErr = this.props.session.errors["email"] ? errorWarning : "";
    const passwordErr = this.props.session.errors["password"] ? errorWarning : "";

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
              {firstnameErr}
            </div>
            <div className="input-container">
              <input type="text" onChange={this.update('lname')}
                placeholder="Last Name" value={this.state.lname} />
              {lastnameErr}
            </div>


          </section>

          <div className="input-container">
            <input type="text" onChange={this.update('email')}
              placeholder="Email" value={this.state.email} />
            {emailErr}
          </div>

          <div className="input-container">
            <input type="password" onChange={this.update('password')}
              placeholder="Password" value={this.state.password} />
            {passwordErr}
          </div>



          <input className="large-button create-account" type='submit' value="Create Account" />
        </form>
    );
  }
}

export default SignupForm;
