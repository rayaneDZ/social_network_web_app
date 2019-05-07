import React, { Component } from 'react';
import './IFCC.css';
import axios from 'axios';

const style = {
    btnColor : {
        backgroundColor : '#673ab7',
        color : 'white'
    },
    wrongformat : {
      fontSize : 12,
      fontWeight : 'blod',
      color : 'tomato',
      display : 'none'
    }
}

class LogIn extends Component {
    handleLogIn = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        axios.post('http://localhost:5000/login', {
            'username' : username,
            'password' : password
        }).then(res => {
            console.log(res.data);
            if(res.data.message === 'wrong'){
                document.getElementById('username_span').style.display = 'block';
            }else{
                document.getElementById('username_span').style.display = 'none';
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username); 
                localStorage.setItem("profile_picture_path", res.data.profile_picture_path);
                window.location.replace('http://localhost:3000/home');
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <React.Fragment>
                    <span style={style.wrongformat} id="username_span">*Wrong username or password</span>
                    <div className="input-field">
                        <label className="active" htmlFor="Username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="password">password</label>
                        <input type="password" id="password" className="validate"/>
                    </div>
                    <button className="btn-flat" style = {style.btnColor} onClick={this.handleLogIn}>Log In</button>
            </React.Fragment>
        );
    }
}

export default LogIn;