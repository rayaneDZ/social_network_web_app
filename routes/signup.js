const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.send('Signed Up')
    console.log('got post request for sign up')
    console.log(req.body);
    next();
});

module.exports = router;