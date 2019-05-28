import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config()

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY-dZa1WKDoQHyaTToPBQQosqpYTs-zlY",
    authDomain: "social-network-021998.firebaseapp.com",
    databaseURL: "https://social-network-021998.firebaseio.com",
    projectId: "social-network-021998",
    storageBucket: "social-network-021998.appspot.com",
    messagingSenderId: "480768291467",
    appId: "1:480768291467:web:638d4218b53e24d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

ReactDOM.render(<App />, document.getElementById('root'));
