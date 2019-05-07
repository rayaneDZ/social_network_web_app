const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', (req, res, next) => {
    User.find({email : req.body.email})
    .exec()
    .then(user => {
        if (user.length >= 1) {    
            return res.status(200).json({
                message : 'email'
            });
        }
        checkUsername();
    })
    const checkUsername = () => {
        User.find({username : req.body.username})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(200).json({
                    message : 'username'
                });
            }
            bcrypt.hash(req.body.password, process.env.SALT_ROUNDS, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error : err
                    })
                }
                const user = new User({
                    _id : new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    hashed_password : hash,
                    username: req.body.username,
                    gender : req.body.gender
                });
                user.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'success'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
            })
        })
    }
});

module.exports = router;