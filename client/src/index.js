import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase/app';
import 'firebase/storage';
require('dotenv').config()
console.log(process.env.REACT_APP_API_KEY)
console.log(process.env)
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage

ReactDOM.render(<App />, document.getElementById('root'));