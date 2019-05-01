import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
                <form>
                  <div className="input-field">
                    <input type="email" id="email" className="validate"/>
                    <label className="active" htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                      <label className="active" htmlFor="Username">Username</label>
                      <input type="text" id="signup_username"/>
                  </div>
                  <div className="input-field">
                      <label className="active" htmlFor="password">password</label>
                      <input type="password" id="signup_password" className="validate"/>
                  </div>
                  <button className="btn">Sign Up</button>
                </form>
            </React.Fragment>
      </div>
    )
  }
}

export default SignUp
