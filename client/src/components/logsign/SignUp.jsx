import React, { Component } from 'react';
import './IFCC.css';
import axios from 'axios';

const style = {
  btnColor : {
      backgroundColor : '#673ab7',
      color : 'white'
  },
  gender : {
    marginBottom : 20
  }
}

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleSignUp = () => {
    const email = document.getElementById('email').value;
    const username = document.getElementById('signup_username').value;
    const password = document.getElementById('signup_password').value;
    const gender = document.getElementById('gender').value;
    axios.post(`http://localhost:5000/signup`, { 
      'email' : email,
      'username' : username,
      'password' : password,
      'gender' : gender,
    }).then(res => {
        console.log(res);
        console.log(res.data);
    })
  }

  render() {
    return (
      <div>
        <div className="input-field">
          <label className="active" htmlFor="email">Email</label>
          <input type="text" id="email" className="validate"/>
        </div>
        <div className="input-field">
            <label className="active" htmlFor="Username">Username</label>
            <input type="text" id="signup_username"/>
        </div>
        <div className="input-field">
            <label className="active" htmlFor="password">Password</label>
            <input type="password" id="signup_password" className="validate"/>
        </div>
        <div style = {style.gender}>
          <label>Gender</label>
          <select className="browser-default" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>              
        </div>
        <button className="btn-flat" style = {style.btnColor} onClick={this.handleSignUp}>Sign Up</button>
      </div>
    )
  }
}

export default SignUp
