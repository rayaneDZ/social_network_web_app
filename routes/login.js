const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.send('welcome to login route');
    next();
});

module.exports = router;