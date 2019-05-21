const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const router = express.Router();


//POST A POST
router.post('/', (req, res) => {
    console.log();
    console.log(`${req.body.username} is making a post request`);
    User.find({username : req.body.username})
    .exec()
    .then(user => {
        //IF USER IS NULL
        console.log(' post request from this is the user : ', user[0].username)
        if(user.length === 0){
            console.log('user not found')
            return res.status(404).json({
                message: 'user not found'
            });
        }
        //CREATE A POST WITH THE USER POPULATED-IN AND SAVE IT
        //postID is created externally because I need it when adding an entry to owners posts so I don't have to make another query just to get the post id
        let postId = new mongoose.Types.ObjectId();
        const post = new Post({
            _id: postId,
            content: req.body.content,
            user: user[0]._id,
            profile_picture_path : req.body.profile_picture_path
        });
        post.save()
        .then(() => {
            //ADD AN ENTRY IN THE OWNERS POSTS ARRAY
            User.update({username : req.body.username}, {$push : {posts : postId}})
            .exec()
            .then(result => {
                console.log(result);
                res.status(201).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }).catch(err => {
            res.status(500).json({
                message : err
            })
        })
        //SAVE THE POST TO THE DATABASE ONLYIF THE UPDATE SUCCEEDS
        console.log('hereee', postId);
        return postId;
    })
    .then(result => {
        //RETURN THE RESULT AND LOG IT
        console.log('hereee two :', result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message : err
        });
    });
});


//GET ALL POSTS
router.get('/', (req, res) => {
    Post.find()
    .populate('user', 'username profile_picture_path')
    .exec()
    .then(posts => {
        console.log(posts);
        res.status(200).json({
            length: posts.length,
            posts: posts
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: err
        });
    });
});

module.exports = router;