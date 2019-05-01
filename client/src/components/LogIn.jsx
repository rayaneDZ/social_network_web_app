import React, { Component } from 'react';

class LogIn extends Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="input-field">
                        <label className="active" htmlFor="Username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="password">password</label>
                        <input type="password" id="password" className="validate"/>
                    </div>
                    <button class="btn">Log In</button>
                </form>
            </React.Fragment>
        );
    }
}

export default LogIn;