const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//============ROUTES===========//
const signupRoute = require('./routes/signup.js');
const loginRoute = require('./routes/login.js');
//============ROUTES===========//


//============MIDDLEWARES===========//
app.use(cors());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
//============MIDDLEWARES===========//


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rayane1998',
    port     : "3306",
    database : "social_network"
  });
db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = db;