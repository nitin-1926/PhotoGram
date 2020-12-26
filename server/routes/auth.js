const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

router.post('/signup', (req, res) => {
    const { name, emailId, password } = req.body;
    if (!name || !emailId || !password) {
        return res.status(422).json({
            message: 'SignUp Failed',
            error: 'Please add all the fields'
        });
    } else {
        User.findOne({ emailId: emailId })
            .then(user => {
                if (user) {
                    return res.status(422).json({
                        message: 'SignUp Failed',
                        error: 'User already exists'
                    });
                } else {
                    bcrypt.hash(password, 12).then(hashedPassword => {
                        const user = new User({
                            name,
                            emailId,
                            password: hashedPassword
                        });
                        user.save()
                            .then(user => {
                                if (user) {
                                    return res.json({
                                        message: 'SignUp Successful',
                                    });
                                }
                            }).catch(err => {
                                console.log(err);
                            });
                    }).catch(err => {
                        console.log(err);
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
});

router.post('/signin', (req, res) => {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
        return res.status(422).json({
            message: 'Sign in error',
            error: 'Incomplete Fields. Please add email and password'
        });
    } else {
        User.findOne({ emailId: emailId }).then(user => {
            if (user) {
                bcrypt.compare(password, user.password).then(isCorrectPassword => {
                    if (isCorrectPassword) {
                        return res.json({
                            message: 'Sign in success',
                            user
                        });
                    } else {
                        return res.status(422).json({
                            message: 'Sign in failed',
                            error: 'Incorrect Password'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                return res.status(422).json({
                    message: 'Sign in Failed',
                    error: 'User does not exists. Please signup first'
                });
            }
        })
    }
});

module.exports = router;