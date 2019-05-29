const express = require('express');
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const router = express.Router();

//GET USER PROFILE
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

//UPDATE USER PROFILE PICTURE
router.post('/updateProfilePicture', (req, res) => {
    User.findOneAndUpdate({username : req.body.username}, {profile_picture_path : req.body.ppp})
    .exec()
    .then(result => {
        Post.find({user: req.body.username})
        .exec()
        .then(postsArr => {
            console.log(postsArr)
            postsArr.forEach(post => {
                post.profile_picture_path = req.body.ppp
                post.save()
            })
            return res.status(201).json({
                result : result
            })
        })
    }).catch(err => {
        return res.status(500).json({
            err: err
        })
    })
})

module.exports = router;
