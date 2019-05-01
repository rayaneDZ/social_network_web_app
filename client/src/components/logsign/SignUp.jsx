import React, { Component } from './node_modules/react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
                <form>
                  <div class="input-field">
                    <input type="email" id="email" class="validate"/>
                    <label class="active" for="email">Email</label>
                  </div>
                  <div className="input-field">
                      <label className="active" htmlFor="Username">Username</label>
                      <input type="text" id="username"/>
                  </div>
                  <div className="input-field">
                      <label className="active" htmlFor="password">password</label>
                      <input type="password" id="password" className="validate"/>
                  </div>
                  <button class="btn">Sign Up</button>
                </form>
            </React.Fragment>
      </div>
    )
  }
}

export default SignUp
