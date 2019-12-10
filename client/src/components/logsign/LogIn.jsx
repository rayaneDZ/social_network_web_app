import React, { Component } from 'react';
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
        //GETTING FORM VALUES
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //INITIALIZING SPANS
        document.getElementById('wrong_username_or_password_span').style.display = 'none';

        //AXIOS REQUEST
        axios.post('/api/login', {
            'username' : username.toLowerCase(),
            'password' : password
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username); 
            localStorage.setItem("profile_picture_path", res.data.profile_picture_path);
            window.location.href = "/home";
        }).catch(err => {
            console.log(err)
            if(err.response.data.message === "wrong") {
                document.getElementById('wrong_username_or_password_span').style.display = 'block';
            }
        })
    }
    handlePasswordChange = e => {
        if(e.keyCode === 13)  this.handleLogIn();
    }
    render() {
        return (
            <React.Fragment>
                    <span style={style.wrongformat} id="wrong_username_or_password_span">*Wrong username or password</span>
                    <div className="input-field">
                        <label className="active" htmlFor="Username">username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="password">password</label>
                        <input type="password" id="password" className="validate" onKeyDown={e => this.handlePasswordChange(e)}/>
                    </div>
                    <button className="btn-flat" style = {style.btnColor} onClick={this.handleLogIn}>Log In</button>
            </React.Fragment>
        );
    }
}

export default LogIn;