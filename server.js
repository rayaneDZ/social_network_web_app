require('dotenv').config() 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;


//============ROUTES===========//
const signupRoute = require('./routes/signup.js');
const loginRoute = require('./routes/login.js');
const postRoute = require('./routes/post.js');
const userRoute = require('./routes/user.js')
//============ROUTES===========//

//============MIDDLEWARES===========//
app.use(cors());
app.use(bodyParser.json());
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/post', postRoute);
app.use('/api/user', userRoute);
//============MIDDLEWARES===========//

//========CONNECT TO DATABASE=======//
mongoose.connect('mongodb+srv://'+process.env.MONGODB_USERNAME+':'+process.env.MONGODB_PASSWORD+'@social-network-app-ovmhv.mongodb.net/social_network?retryWrites=true&w=majority', {useNewUrlParser: true}, (err, db) =>{
    mongoose.connection.readyState == 1 ? console.log('CONNECTED TO DB') : console.log('UNABLE TO CONNECT TO DB');
    if(err) {
        console.log(err)
    }
});
//========CONNECT TO DATABASE=======//

//========Code For The Heroku Deployement=======//
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
//========Code For The Heroku Deployement=======//

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
