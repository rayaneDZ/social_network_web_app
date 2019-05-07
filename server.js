const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;


//============ROUTES===========//
const signupRoute = require('./routes/signup.js');
const loginRoute = require('./routes/login.js');
//============ROUTES===========//

//============MIDDLEWARES===========//
app.use(cors());
app.use(bodyParser.json());
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
//============MIDDLEWARES===========//

//========CONNECT TO DATABASE=======//
mongoose.connect('mongodb://localhost:27017/social_network', {useNewUrlParser: true}, (err, db) =>{
    mongoose.connection.readyState == 1 ? console.log('CONNECTED TO DB') : console.log('UNABLE TO CONNECT TO DB');
    if(err) {
        return res.status(500).json({
            error : 'could not connect to database'
        })
    }
});
//========CONNECT TO DATABASE=======//


app.listen(port, () => console.log(`Server running on port ${port}`));
