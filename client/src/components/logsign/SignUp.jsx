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
  },
  wrongformat : {
    fontSize : 12,
    fontWeight : 'blod',
    color : 'tomato',
    display : 'none'
  },
  signedUp : {
    fontSize : 16,
    fontWeight : 'blod',
    color : '#009688',
    display : 'none',
    marginTop : 10
  }
}

class SignUp extends Component {
  handleSignUp = () => {
    const email = document.getElementById('email').value;
    const username = document.getElementById('signup_username').value;
    const password = document.getElementById('signup_password').value;
    const gender = document.getElementById('gender').value;
    if (this.validateSignUp(email, password, username)){
      axios.post(`http://localhost:5000/signup`, { 
        'email' : email,
        'username' : username,
        'password' : password,
        'gender' : gender,
      }).then(res => {
          if(res.data.message === "email"){
            document.getElementById('taken_email_span').style.display= "block";
            document.getElementById('taken_username_span').style.display= "none";
          }else if (res.data.message === "username"){
            document.getElementById('taken_username_span').style.display= "block";
            document.getElementById('taken_email_span').style.display= "none";
          }else if (res.data.message === "success"){
            document.getElementById('signed_up_span').style.display= "block";
            document.getElementById('taken_username_span').style.display= "none";
            document.getElementById('taken_email_span').style.display= "none";
            window.location.reload();
          }
      })
    }
  }
  validateEmail = (email) =>{
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validateSignUp = (email, password, username) => {
    if(password.length < 6){
      document.getElementById('password_span').style.display= "block";
    }else{
      document.getElementById('password_span').style.display= "none";
    }
    if(username.length < 4){
      document.getElementById('username_span').style.display= "block";
    }else{
      document.getElementById('username_span').style.display= "none";
    }
    if(!this.validateEmail(email)) {
      document.getElementById('email_span').style.display= "block";      
    }else {
      document.getElementById('email_span').style.display= "none";
    }
    if (password.length >= 6 && this.validateEmail(email)){
      document.getElementById('username_span').style.display= "none";
      document.getElementById('email_span').style.display= "none";
      document.getElementById('password_span').style.display= "none";
      return true;
    }else{
      return false;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-field">
          <label className="active" htmlFor="email">Email</label>
          <input type="text" id="email" className="validate"/>
        </div>
        <span style={style.wrongformat} id="email_span">*Enter a valid email</span>
        <span style={style.wrongformat} id="taken_email_span">*There's already an account associated with this email</span>
        <div className="input-field">
            <label className="active" htmlFor="Username">Username</label>
            <input type="text" id="signup_username"/>
        </div>
        <span style={style.wrongformat} id="username_span">*Username must be 4 characters or more</span>
        <span style={style.wrongformat} id="taken_username_span">*Username taken</span>
        <div className="input-field">
            <label className="active" htmlFor="password">Password</label>
            <input type="password" id="signup_password" className="validate"/>
        </div>
        <span style={style.wrongformat} id="password_span">*Password must be 6 characters or more</span>
        <div style = {style.gender}>
          <label>Gender</label>
          <select className="browser-default" id="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>              
        </div>
        <button className="btn-flat" style = {style.btnColor} onClick={this.handleSignUp}>Sign Up</button>
        <span style={style.signedUp} id="signed_up_span">Signed Up &#10004;</span>        
      </React.Fragment>
    )
  }
}

export default SignUp
