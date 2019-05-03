const express = require('express');
const router = express.Router();
const mysql = require('mysql');



router.post('/', (req, res, next) => {
    const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'rayane1998',
        port     : "3306",
        database : "social_network"
      });
    let sql = `INSERT INTO sn_user VALUES (1, '${req.body.email}', '${req.body.username}', '${req.body.password}', null, '${req.body.gender}', null, null, null, null, '2019-12-12', 'N')`;
    console.log(req.body)
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result[0]);
    })
    
    res.send('Signed Up')
    console.log('got post request for sign up')
    console.log(req.body.email);
    next();
});

module.exports = router;