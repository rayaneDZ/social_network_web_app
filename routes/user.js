const express = require('express');
const User = require('../models/User.js');
const router = express.Router();


router.get('/:username', (req, res) =>{
    User.findOne({username : req.params.username})
    .exec()
    .then(result => {
        if(result){
            return res.status(200).json({
                result : result
            })
        }else{
            return res.status(200).json({
                result : null
            })
        }
    })
})


module.exports = router;
