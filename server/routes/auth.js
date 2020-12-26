const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/api/signup', (req, res) => {
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
                    const user = new User({
                        name,
                        emailId,
                        password
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
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
})

module.exports = router;