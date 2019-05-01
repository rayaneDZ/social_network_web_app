import React, { Component } from './node_modules/react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

const style = {
    card : {
        width : 500,
        marginTop : 50,
        marginLeft : 'auto',
        marginRight: 'auto'
    },
    tabs : {
        marginBottom : 20
    }
};

export default class LogSign extends Component {
  render() {
    return (
      <div className="card-panel"style = {style.card}>
        <div className="container">
                <div className="row">
                    <div className="col s12" style = {style.tabs}>
                        <ul className="tabs">
                        <li className="tab col s6"><a href="#login" className="active">Log In</a></li>
                        <li className="tab col s6"><a href="#signup">Sign In</a></li>
                        </ul>
                    </div>
                    <div id="login" className="col s12">
                        <LogIn/>
                    </div>
                    <div id="signup" className="col s12">
                        <SignUp/>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
