import React, { Component } from 'react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import {Animated} from "react-animated-css";
import '../css/IFCC.css';
import '../css/logsign.css';
import jwt from 'jsonwebtoken';

const style = {
    card : {
        width : 500,
        marginTop : 50,
        marginLeft : 'auto',
        marginRight: 'auto',
        backgroundColor : 'white'
    },
    tabs : {
        marginBottom : 20
    },
    outerdiv : {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '50vh',
        backgroundColor : '#673ab7',
        transform: 'skewY(+6deg)',
        transformOrigin: 'top right',
        paddingTop : 50
    }
};

class LogSign extends Component {
    constructor(props){
        super(props);
        this.content = (
            <React.Fragment >
                <div style = {style.outerdiv} id ="outerdiv"></div>
                <Animated animationIn = "slideInDown" animationOut = "slideInRight" isVisible={true}>
                    <div className="card-panel card" style = {style.card} id ="logsign">
                        <div className="container">
                            <div className="row">
                                <div className="col s12" style = {style.tabs}>
                                    <ul className="tabs">
                                    <li className="tab col s6"><a href="#login" className="active">Log In</a></li>
                                    <li className="tab col s6"><a href="#signup">Sign Up</a></li>
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
                </Animated>
            </React.Fragment>
        )
    }
    render() {
        if(localStorage.getItem('token')){
            try{
                const token = localStorage.getItem('token');
                jwt.verify(token, process.env.REACT_APP_JWT_KEY);
                window.location.href = "/home";
                return <React.Fragment></React.Fragment>
            }
            catch(err){
                console.log(err);
                return this.content
            }
        }else {
            return this.content
        }
    }
}

export default LogSign;
