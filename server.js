require('dotenv').config() 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;


//============ROUTES===========//
const signupRoute = require('./routes/signup.js');
const loginRoute = require('./routes/login.js');
const postRoute = require('./routes/post.js');
const userRoute = require('./routes/user.js')
//============ROUTES===========//

//============MIDDLEWARES===========//
app.use(cors());
app.use(bodyParser.json());
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/post', postRoute);
app.use('/user', userRoute)
//============MIDDLEWARES===========//

//========CONNECT TO DATABASE=======//
mongoose.connect('mongodb+srv://'+process.env.MONGODB_USERNAME+':'+process.env.MONGODB_PASSWORD+'@social-network-app-ovmhv.mongodb.net/social_network?retryWrites=true&w=majority', {useNewUrlParser: true}, (err, db) =>{
    mongoose.connection.readyState == 1 ? console.log('CONNECTED TO DB') : console.log('UNABLE TO CONNECT TO DB');
    if(err) {
        console.log(err)
    }
});
//========CONNECT TO DATABASE=======//

app.listen(port, () => console.log(`Server running on port ${port}`));
